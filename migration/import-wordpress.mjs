/**
 * Import des articles WordPress vers src/content/blog/*.md.
 *
 *   node migration/import-wordpress.mjs --site https://agence-kameo.fr
 *   node migration/import-wordpress.mjs --wxr export.xml [--uploads chemin/vers/wp-content/uploads]
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

async function download(url) {
  const u = new URL(url, SITE);
  if (!u.pathname.startsWith('/wp-content/uploads/')) return null;
  const rel = decodeURIComponent(u.pathname);
  const dest = path.join(PUBLIC, rel);
  if (!fs.existsSync(dest)) {
    if (args.uploads) {
      const src = path.join(args.uploads, rel.replace('/wp-content/uploads/', ''));
      if (!fs.existsSync(src)) return console.warn('  image absente :', rel), null;
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    } else {
      const r = await fetch(SITE + u.pathname);
      if (!r.ok) return console.warn('  image introuvable :', rel), null;
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
    }
  }
  return rel.split('/').map((s) => encodeURIComponent(s)).join('/');
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
  // liens internes : chemin relatif, puis destination finale si l'article cible a été supprimé
  html = html.replace(/href="(https?:\/\/(?:www\.)?agence-kameo\.fr)?(\/[^"#?]*)([^"]*)"/g, (m, host, p, rest) => {
    if (!host && !p.startsWith('/')) return m;
    let target = p.endsWith('/') || /\.[a-z0-9]+$/i.test(p) ? p : p + '/';
    const r = REDIRECTED.get(norm(decodeURIComponent(target)));
    if (r) target = r;
    if (GONE.has(norm(decodeURIComponent(target)))) return `data-lien-supprime="${target}"`; // signalé pour relecture
    return `href="${target}${rest}"`;
  });
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
  const attachments = new Map(items.filter((i) => tag(i, 'wp:post_type') === 'attachment').map((i) => [tag(i, 'wp:post_id'), tag(i, 'wp:attachment_url')]));
  return items
    .filter((i) => tag(i, 'wp:post_type') === 'post' && tag(i, 'wp:status') === 'publish')
    .map((i) => ({
      slug: decodeURIComponent(tag(i, 'wp:post_name')),
      title: decodeEntities(tag(i, 'title')),
      date: tag(i, 'wp:post_date_gmt').replace(' ', 'T') + 'Z',
      modified: (tag(i, 'wp:post_modified_gmt') || tag(i, 'wp:post_date_gmt')).replace(' ', 'T') + 'Z',
      excerpt: strip(tag(i, 'excerpt:encoded')),
      content: tag(i, 'content:encoded'),
      description: meta(i, 'rank_math_description'),
      image: attachments.get(meta(i, '_thumbnail_id')) || '',
      imageAlt: '',
    }));
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
  const description = p.description || (args.site !== undefined || !args.wxr ? (await rankMathMeta(p.slug)).description : '');
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
