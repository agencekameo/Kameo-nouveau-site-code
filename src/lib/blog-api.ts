import { createHash, timingSafeEqual } from 'node:crypto';
import { eq, or, sql } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';
import sanitizeHtml from 'sanitize-html';
import { markdownSlugs } from './blog';
import { hasDatabase, type Db } from './db';
import { blogCategories } from './db-tables';
import { isGone, redirectTarget } from './redirects';
import { SITE_URL } from './site';

/**
 * Outils communs aux routes /api/blog/publish/… : l'API machine à machine qu'appelle n8n pour
 * publier un article (même contrat que le site Omega, voir docs/api-blog-n8n.md).
 */

/** Réponse JSON de l'API, jamais mise en cache. */
export function json(data: unknown, status = 200, headers: Record<string, string> = {}) {
  return NextResponse.json(data, { status, headers: { 'Cache-Control': 'no-store', ...headers } });
}

const digest = (s: string) => createHash('sha256').update(s, 'utf8').digest();

/**
 * Authentification Basic comparée en temps constant (empreintes de même longueur : la durée de
 * réponse ne trahit pas le nombre de caractères justes). Sans identifiants configurés sur le
 * serveur, tout est refusé : un oubli au déploiement ferme la porte au lieu de l'ouvrir.
 */
export function checkBasicAuth(header: string | null): boolean {
  const user = process.env.BLOG_PUBLISH_USER ?? '';
  const pass = process.env.BLOG_PUBLISH_PASSWORD ?? '';
  if (!user || !pass || !header?.startsWith('Basic ')) return false;
  const decoded = Buffer.from(header.slice(6).trim(), 'base64').toString('utf8');
  const colon = decoded.indexOf(':');
  if (colon === -1) return false;
  const okUser = timingSafeEqual(digest(decoded.slice(0, colon)), digest(user));
  const okPass = timingSafeEqual(digest(decoded.slice(colon + 1)), digest(pass));
  return okUser && okPass;
}

/* Limite de débit : fenêtre de 60 s, par adresse IP et par route. */
const hits = new Map<string, { count: number; reset: number }>();
function retryAfter(key: string, max: number): number {
  const now = Date.now();
  if (hits.size > 5000) for (const [k, v] of hits) if (v.reset <= now) hits.delete(k);
  const entry = hits.get(key);
  if (!entry || now >= entry.reset) {
    hits.set(key, { count: 1, reset: now + 60_000 });
    return 0;
  }
  if (entry.count >= max) return Math.max(1, Math.ceil((entry.reset - now) / 1000));
  entry.count++;
  return 0;
}

const clientIp = (req: NextRequest) =>
  req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'local';

/**
 * Contrôles de chaque route, dans cet ordre : authentification (401), débit (429), base
 * configurée (503). L'authentification passe avant la limite, pour qu'un inconnu qui martèle
 * la route n'épuise pas le quota de n8n. Renvoie la réponse d'erreur, ou null.
 */
export function guard(req: NextRequest, route: string, max: number): NextResponse | null {
  if (!checkBasicAuth(req.headers.get('authorization'))) return json({ error: 'Unauthorized' }, 401);
  const wait = retryAfter(`${route}:${clientIp(req)}`, max);
  if (wait) return json({ error: 'Rate limit exceeded' }, 429, { 'Retry-After': String(wait) });
  if (!hasDatabase()) return json({ error: 'Blog database not configured (DATABASE_URL)' }, 503);
  return null;
}

/** Exécute le traitement d'une route ; une exception devient une 500 { error, detail } tracée. */
export async function handle(context: string, fn: () => Promise<NextResponse>): Promise<NextResponse> {
  try {
    return await fn();
  } catch (err) {
    // Drizzle enveloppe l'erreur de PostgreSQL (connexion refusée, contrainte…) dans `cause`
    const cause = err instanceof Error && err.cause instanceof Error ? ` (${err.cause.message})` : '';
    const detail = (err instanceof Error ? err.message : String(err)) + cause;
    console.error(`[${context}] ERROR:`, detail);
    return json({ error: 'Internal server error', detail }, 500);
  }
}

/** Corps JSON (objet) de la requête, ou null s'il est absent, invalide ou trop gros. */
export async function readJson(req: NextRequest, maxBytes = 2_000_000): Promise<Record<string, unknown> | null> {
  if (Number(req.headers.get('content-length') ?? 0) > maxBytes) return null;
  try {
    const text = await req.text();
    if (text.length > maxBytes) return null;
    const body: unknown = JSON.parse(text);
    return body && typeof body === 'object' && !Array.isArray(body) ? (body as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

/** Valeur texte d'un champ : chaîne non vide coupée, sinon null (nombres acceptés). */
export function str(v: unknown, max = 10_000): string | null {
  if (typeof v === 'number') v = String(v);
  if (typeof v !== 'string') return null;
  const t = v.trim();
  return t ? t.slice(0, max) : null;
}

/* ── Contenu ─────────────────────────────────────────────────────────────── */

const SANITIZE: sanitizeHtml.IOptions = {
  allowedTags: [
    'p', 'br', 'strong', 'em', 'u', 'b', 'i', 's', 'del', 'mark', 'small', 'sup', 'sub', 'q', 'cite', 'abbr',
    'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'dl', 'dt', 'dd',
    'a', 'img',
    'blockquote', 'pre', 'code',
    'table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
    'details', 'summary',
    'figure', 'figcaption',
    'div', 'span', 'hr',
  ],
  allowedAttributes: {
    a: ['href', 'title', 'target', 'rel'],
    img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
    td: ['colspan', 'rowspan'],
    th: ['colspan', 'rowspan', 'scope'],
    ol: ['start', 'type'],
    '*': ['class', 'id'],
  },
  allowedSchemes: ['https', 'http', 'mailto', 'tel'],
  allowProtocolRelative: false,
  transformTags: {
    // le titre de l'article est déjà le seul <h1> de la page
    h1: 'h2',
    // lien ouvert dans un nouvel onglet : la page ouverte ne doit pas pouvoir piloter la nôtre
    a: (tagName, attribs) =>
      attribs.target === '_blank' ? { tagName, attribs: { ...attribs, rel: 'noopener noreferrer' } } : { tagName, attribs },
  },
};

/** HTML nettoyé une fois, à l'écriture : liste blanche de balises, pas de script, pas de style. */
export const sanitizeContent = (html: string) => sanitizeHtml(html, SANITIZE);

const ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“',
  laquo: '«', raquo: '»', hellip: '…', ndash: '–', mdash: '—', euro: '€',
};

/** Texte brut d'un fragment HTML (balises retirées, entités décodées, espaces réduits). */
export function htmlToText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e: string) => {
      if (e[0] !== '#') return ENTITIES[e.toLowerCase()] ?? m;
      const code = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : Number(e.slice(1));
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : ' ';
    })
    .replace(/\s+/g, ' ')
    .trim();
}

/** Nombre de mots du texte (temps de lecture : mots / 200, comme le thème). */
export function countWords(html: string): number {
  return htmlToText(html)
    .split(' ')
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

/** Images du contenu hébergées hors du site (elles casseront si leur hébergeur les retire). */
export function externalImages(html: string): string[] {
  const out: string[] = [];
  for (const m of html.matchAll(/<img\b[^>]*\ssrc="([^"]+)"/gi)) {
    try {
      const u = new URL(m[1], SITE_URL);
      if (u.origin !== SITE_URL && u.hostname !== 'www.agence-kameo.fr') out.push(m[1]);
    } catch {
      out.push(m[1]);
    }
  }
  return out;
}

/* ── Slugs et catégories ─────────────────────────────────────────────────── */

/** « Création de Site : l'Essentiel » → « creation-de-site-lessentiel » (comme WordPress). */
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120)
    .replace(/-+$/g, '');
}

/**
 * Raison pour laquelle un slug ne peut pas être publié, ou null. Un article Markdown du dépôt
 * garde son adresse, et une adresse que le site redirige (articles supprimés lors du tri du
 * blog, voir src/lib/redirects.ts) ne serait jamais affichée.
 */
export function slugConflict(slug: string): string | null {
  if (slug === 'page') return 'reserved by the blog pagination (/blog/page/N/)';
  if (markdownSlugs().has(slug)) return 'already used by an article of the site repository';
  const path = `/blog/${slug}/`;
  if (redirectTarget(path)) return `redirected by the site to ${redirectTarget(path)} (pruned article)`;
  if (isGone(path)) return 'deleted on purpose (410 Gone)';
  return null;
}

/**
 * Identifiant d'une catégorie donnée par id (« cat_seo »), slug (« seo ») ou nom (« SEO »),
 * créée si elle n'existe pas : un problème de catégorie ne bloque jamais une publication.
 */
export async function resolveCategoryId(db: Db, input: unknown): Promise<string | null> {
  const raw = str(input, 200);
  if (!raw) return null;
  const slug = slugify(raw.replace(/^cat_/i, '').replace(/_/g, '-'));
  if (!slug) return null;
  const id = `cat_${slug.replace(/-/g, '_')}`;
  const find = () =>
    db
      .select({ id: blogCategories.id })
      .from(blogCategories)
      .where(
        or(
          eq(blogCategories.id, raw),
          eq(blogCategories.id, id),
          eq(blogCategories.slug, slug),
          sql`lower(${blogCategories.name_fr}) = lower(${raw})`,
        ),
      )
      .limit(1);
  const found = await find();
  if (found.length) return found[0].id;
  const name = /[A-ZÀ-Þ]|\s/.test(raw) ? raw : slug.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());
  await db.insert(blogCategories).values({ id, slug, name_fr: name }).onConflictDoNothing();
  const after = await find();
  return after.length ? after[0].id : null;
}

/* ── Publication ─────────────────────────────────────────────────────────── */

/**
 * Rafraîchit tout ce qui affiche des articles : listes et pages du blog (dont les « Articles
 * recommandés » des autres articles), sitemaps, flux RSS, llms.txt. Les pages sont régénérées à
 * leur prochaine visite. Surtout pas revalidatePath('/', 'layout') : les pages générées une fois
 * pour toutes (dynamicParams = false, comme les réalisations) ne savent pas se régénérer et
 * répondraient 404 jusqu'au déploiement suivant.
 */
export function revalidateBlog() {
  // étiquettes dérivées du chemin des fichiers de route, groupe « (site) » compris
  revalidatePath('/(site)/blog', 'layout');
  for (const route of ['/feed', '/post-sitemap.xml', '/sitemap_index.xml', '/llms.txt']) revalidatePath(route, 'layout');
}

export const postUrl = (slug: string) => `${SITE_URL}/blog/${slug}/`;
export const mediaUrl = (filename: string) => `${SITE_URL}/blog-media/${filename}`;
