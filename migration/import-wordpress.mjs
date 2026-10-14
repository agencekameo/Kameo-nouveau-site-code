/**
 * Import des articles WordPress vers src/content/blog/*.md.
 *
 *   node migration/import-wordpress.mjs --site https://agence-kameo.fr
 *   node migration/import-wordpress.mjs --wxr export.xml --formatting wp-includes/formatting.php \
 *        [--uploads chemin/vers/wp-content/uploads]
 *
 * En mode --wxr, le contenu brut est rendu comme WordPress l'affichait (wptexturize, wpautop…)
 * par migration/wp-harness/render-content.php, avec le formatting.php de la version du site.
 *
 * - n'importe que les articles retenus (migration/blog-curation.json) ;
 * - liste les articles publiés absents du tri (migration/out/articles-non-classes.json) ;
 * - reprend la meta description Rank Math depuis la page publiée (mode --site) ;
 * - télécharge l'image à la une et les images du contenu dans public/wp-content/uploads
 *   (mêmes chemins qu'en WordPress) ;
 * - réécrit les liens internes vers leur destination finale (pas de saut de redirection).
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const args = Object.fromEntries(process.argv.slice(2).reduce((a, x, i, arr) => (x.startsWith('--') ? [...a, [x.slice(2), arr[i + 1]]] : a), []));
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE = 'https://agence-kameo.fr';
const OUT = path.join(ROOT, 'src/content/blog');
const PUBLIC = path.join(ROOT, 'public');
const curation = JSON.parse(fs.readFileSync(path.join(ROOT, 'migration/blog-curation.json'), 'utf8'));
const KEEP = new Set(curation.keep);

/* Tables de redirection (lecture des littéraux de src/lib/redirects.ts) */
const red = fs.readFileSync(path.join(ROOT, 'src/lib/redirects.ts'), 'utf8');
const tables = new Function(
  red.slice(0, red.indexOf("/** Préfixes de l'ancien thème")).replace(/export /g, '').replace(/: Record<string, string>/g, '').replace(/: string\[\]/g, '') +
    '; return { ALL: { ...THEME_REDIRECTS, ...BLOG_PRUNING, ...LEGACY_REDIRECTS }, GONE };',
)();
const norm = (p) => p.replace(/\/+$/, '');
const REDIRECTED = new Map(Object.entries(tables.ALL).map(([k, v]) => [norm(k), v]));
const GONE = new Set(tables.GONE.map(norm));

/* Pages de l'ancien site agencekameo.fr citées dans les articles → pages actuelles */
const WRONG_DOMAIN = {
  '/': '/',
  '/contact': '/contact/',
  '/services/creation-site-e-commerce': '/creation-site-ecommerce/',
  '/services/maintenance-site-internet': '/maintenance-wordpress/',
};

const decodeEntities = (s) =>
  s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&hellip;/g, '…').replace(/&rsquo;/g, '’').replace(/&laquo;/g, '«').replace(/&raquo;/g, '»');
const strip = (s) => decodeEntities(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const yaml = (v) => JSON.stringify(v);

async function getJson(url) {
  const r = await fetch(url, { headers: { 'User-Agent': 'kameo-migration' } });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return { json: await r.json(), total: Number(r.headers.get('x-wp-totalpages') || 1) };
}

const missingImages = new Set();
async function download(url) {
  const u = new URL(url, SITE);
  if (!/(^|\.)agence-?kameo\.fr$/.test(u.hostname) || !u.pathname.startsWith('/wp-content/uploads/')) return null;
  const rel = decodeURIComponent(u.pathname);
  const dest = path.join(PUBLIC, rel);
  const local = rel.split('/').map((s) => encodeURIComponent(s)).join('/');
  if (fs.existsSync(dest)) return local;
  try {
    if (args.uploads) {
      const src = path.join(args.uploads, rel.replace('/wp-content/uploads/', ''));
      if (!fs.existsSync(src)) throw new Error('absente');
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    } else {
      const r = await fetch(SITE + u.pathname);
      if (!r.ok) throw new Error(String(r.status));
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
    }
  } catch {
    // le chemin est conservé : il suffira de déposer le fichier dans public/
    missingImages.add(rel);
  }
  return local;
}

/* Réécrit liens et images du contenu */
async function rewriteContent(html) {
  // images (src et srcset)
  const urls = new Set();
  html.replace(/\s(?:src|srcset)="([^"]+)"/g, (_, v) => v.split(',').forEach((c) => urls.add(c.trim().split(/\s+/)[0])));
  for (const u of urls) {
    if (!/\/wp-content\/uploads\//.test(u)) continue;
    const local = await download(u);
    if (local) html = html.split(u).join(local);
  }
  // liens vers l'ancien domaine sans tiret (agencekameo.fr), présents dans les articles
  html = html.replace(/href="https?:\/\/(?:www\.)?agencekameo\.fr(\/[^"]*)?"/g, (m, p = '/') => {
    const t = WRONG_DOMAIN[p.replace(/\/+$/, '') || '/'];
    return t ? `href="${t}"` : `href="${p}"`;
  });
  html = html.replace(/>(?:www\.)?agencekameo\.fr</g, '>agence-kameo.fr<');
  // liens internes : chemin relatif, puis destination finale si l'article cible a été supprimé
  html = html.replace(/href="(https?:\/\/(?:www\.)?agence-kameo\.fr)?(\/[^"#?]*)([^"]*)"/g, (m, host, p, rest) => {
    if (!host && !p.startsWith('/')) return m;
    let target = p.endsWith('/') || /\.[a-z0-9]+$/i.test(p) ? p : p + '/';
    const r = REDIRECTED.get(norm(decodeURIComponent(target)));
    if (r) target = r;
    if (GONE.has(norm(decodeURIComponent(target)))) return `data-lien-supprime="${target}"`; // signalé pour relecture
    return `href="${target}${rest}"`;
  });
  // wp_filter_content_tags : décodage asynchrone des images du contenu
  html = html.replace(/<img(?![^>]*\sdecoding=)/g, '<img decoding="async"');
  return html;
}

async function rankMathMeta(slug) {
  try {
    const r = await fetch(`${SITE}/blog/${slug}/`);
    const h = await r.text();
    const desc = /<meta name="description" content="([^"]*)"/i.exec(h);
    return { description: desc ? decodeEntities(desc[1]) : '' };
  } catch {
    return { description: '' };
  }
}

function fromWxr(file) {
  const xml = fs.readFileSync(file, 'utf8');
  const items = xml.split('<item>').slice(1).map((x) => x.split('</item>')[0]);
  const tag = (s, t) => {
    const m = new RegExp(`<${t}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${t}>`).exec(s);
    return m ? m[1] : '';
  };
  const meta = (s, key) => {
    const m = new RegExp(`<wp:meta_key><!\\[CDATA\\[${key}\\]\\]></wp:meta_key>\\s*<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></wp:meta_value>`).exec(s);
    return m ? m[1] : '';
  };
  const attachments = new Map(
    items
      .filter((i) => tag(i, 'wp:post_type') === 'attachment')
      .map((i) => {
        const md = meta(i, '_wp_attachment_metadata');
        const w = /s:5:"width";i:(\d+)/.exec(md);
        const h = /s:6:"height";i:(\d+)/.exec(md);
        return [
          tag(i, 'wp:post_id'),
          { url: tag(i, 'wp:attachment_url'), width: w ? +w[1] : undefined, height: h ? +h[1] : undefined, alt: decodeEntities(meta(i, '_wp_attachment_image_alt')) },
        ];
      }),
  );
  const gmt = (d) => d.replace(' ', 'T') + '+00:00';
  return items
    .filter((i) => tag(i, 'wp:post_type') === 'post' && tag(i, 'wp:status') === 'publish')
    .map((i) => {
      const a = attachments.get(meta(i, '_thumbnail_id'));
      return {
        slug: decodeURIComponent(tag(i, 'wp:post_name')),
        title: decodeEntities(tag(i, 'title')),
        date: gmt(tag(i, 'wp:post_date_gmt')),
        modified: gmt(tag(i, 'wp:post_modified_gmt') || tag(i, 'wp:post_date_gmt')),
        excerpt: decodeEntities(tag(i, 'excerpt:encoded')).trim(),
        content: tag(i, 'content:encoded'),
        description: decodeEntities(meta(i, 'rank_math_description')),
        image: a ? a.url : '',
        imageWidth: a?.width,
        imageHeight: a?.height,
        imageAlt: a?.alt || '',
        raw: true,
      };
    });
}

/* Rendu WordPress (wptexturize, wpautop…) des articles retenus, en un seul appel PHP */
function renderWithWordPress(posts) {
  if (!args.formatting) throw new Error('--formatting <wp-includes/formatting.php> requis en mode --wxr');
  const tmp = path.join(ROOT, 'migration/out');
  fs.mkdirSync(tmp, { recursive: true });
  const input = path.join(tmp, 'render-in.json');
  const output = path.join(tmp, 'render-out.json');
  fs.writeFileSync(input, JSON.stringify(Object.fromEntries(posts.map((p) => [p.slug, { title: p.title, content: p.content }]))));
  execFileSync('php', [path.join(ROOT, 'migration/wp-harness/render-content.php'), args.formatting, input, output], { stdio: 'inherit' });
  const out = JSON.parse(fs.readFileSync(output, 'utf8'));
  for (const p of posts) {
    p.title = out[p.slug].title;
    p.content = out[p.slug].html;
    p.words = out[p.slug].words;
    p.wordCount = out[p.slug].wordCount;
  }
}

async function fromRest() {
  const posts = [];
  for (let page = 1, total = 1; page <= total; page++) {
    const { json, total: t } = await getJson(`${SITE}/wp-json/wp/v2/posts?per_page=100&page=${page}&_embed=wp:featuredmedia`);
    total = t;
    for (const p of json) {
      const media = p._embedded?.['wp:featuredmedia']?.[0];
      posts.push({
        slug: decodeURIComponent(p.slug),
        title: decodeEntities(p.title.rendered),
        date: p.date_gmt + 'Z',
        modified: p.modified_gmt + 'Z',
        excerpt: strip(p.excerpt.rendered).replace(/\s*\[…\]$/, '…'),
        content: p.content.rendered,
        description: '',
        image: media?.source_url || '',
        imageWidth: media?.media_details?.width,
        imageHeight: media?.media_details?.height,
      });
    }
  }
  return posts;
}

const posts = args.wxr ? fromWxr(args.wxr) : await fromRest();
if (args.wxr) renderWithWordPress(posts.filter((p) => KEEP.has(p.slug)));
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(ROOT, 'migration/out'), { recursive: true });
const unclassified = [];
let imported = 0;
for (const p of posts) {
  const pathKey = norm(`/blog/${p.slug}`);
  if (!KEEP.has(p.slug)) {
    if (!REDIRECTED.has(pathKey) && !GONE.has(pathKey)) unclassified.push({ slug: p.slug, title: p.title, date: p.date });
    continue;
  }
  console.log('import', p.slug);
  const description = p.description || (!args.wxr ? (await rankMathMeta(p.slug)).description : '');
  const image = p.image ? await download(p.image) : null;
  const content = await rewriteContent(p.content);
  const fm = [
    '---',
    `title: ${yaml(p.title)}`,
    description ? `description: ${yaml(description)}` : null,
    `excerpt: ${yaml(p.excerpt)}`,
    `date: ${yaml(p.date)}`,
    `modified: ${yaml(p.modified)}`,
    image ? `image: ${yaml(image)}` : null,
    image && p.imageWidth ? `imageWidth: ${p.imageWidth}` : null,
    image && p.imageHeight ? `imageHeight: ${p.imageHeight}` : null,
    image && p.imageAlt ? `imageAlt: ${yaml(p.imageAlt)}` : null,
    // nombres de mots calculés par WordPress sur le contenu brut (temps de lecture, wordCount)
    p.words ? `words: ${p.words}` : null,
    p.wordCount ? `wordCount: ${p.wordCount}` : null,
    'format: html',
    '---',
  ].filter(Boolean);
  fs.writeFileSync(path.join(OUT, `${p.slug}.md`), fm.join('\n') + '\n' + content.trim() + '\n');
  imported++;
}
fs.writeFileSync(path.join(ROOT, 'migration/out/articles-non-classes.json'), JSON.stringify(unclassified, null, 2));
const missing = [...KEEP].filter((s) => !posts.some((p) => p.slug === s));
console.log(`\n${imported} articles importés sur ${posts.length} publiés.`);
if (missing.length) console.log('Retenus mais introuvables en base :', missing.join(', '));
console.log(`${unclassified.length} article(s) publiés absents du tri : migration/out/articles-non-classes.json`);
fs.writeFileSync(path.join(ROOT, 'migration/out/images-manquantes.json'), JSON.stringify([...missingImages].sort(), null, 2));
if (missingImages.size) console.log(`${missingImages.size} image(s) à déposer dans public/ : migration/out/images-manquantes.json`);
