import { cache } from 'react';
import sanitizeHtml from 'sanitize-html';
import type { Post, PostSummary } from './blog';
import { SITE_URL, abs } from './site';
import { wordCount } from './text';

/**
 * Articles de l'outil de rédaction « Blog » (API publique, https://outilblog.nexus-games.fr) :
 * rédigés, programmés et publiés par l'outil, le site les affiche seulement.
 *
 * Lecture côté serveur uniquement (la clé ne quitte jamais le serveur), mise en cache 1 h sous
 * l'étiquette « blog » ; l'outil purge ce cache à chaque publication via POST /api/revalidate.
 * Variables : BLOG_API_URL, BLOG_API_KEY (sans elles, le blog n'affiche que ses autres sources).
 *
 * Seule la langue principale (fr-FR → /blog) est servie par le site : une langue ajoutée dans
 * l'outil demanderait ses propres routes (préfixe donné par /locales).
 */

export const BLOG_CACHE_TAG = 'blog';
export const REMOTE_LOCALE = 'fr-FR';
const REVALIDATE_S = 3600;
const PAGE_SIZE = 100; // maximum accepté par l'API
const MAX_PAGES = 50;
const BUILD = process.env.NEXT_PHASE === 'phase-production-build';

const apiUrl = () => (process.env.BLOG_API_URL || '').replace(/\/+$/, '');
export const hasRemoteBlog = () => !!(apiUrl() && process.env.BLOG_API_KEY);

/* ── Contrat de l'API (champs facultatifs traités avec prudence) ───────────────────────── */

type RemoteImage = { url?: string | null; alt?: string | null; width?: number | null; height?: number | null; credit?: string | null };
type RemoteTerm = string | { name?: string | null; slug?: string | null; label?: string | null } | null;
type RemoteSummary = {
  slug: string;
  locale?: string;
  title: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  excerpt?: string | null;
  featuredImage?: RemoteImage | null;
  category?: RemoteTerm;
  tags?: RemoteTerm[] | null;
  publishedAt?: string | null;
  updatedAt?: string | null;
  readingMinutes?: number | null;
  url?: string | null;
  author?: { name?: string | null; bio?: string | null } | null;
};
type RemotePost = RemoteSummary & {
  html?: string | null;
  keyTakeaways?: string[] | null;
  faq?: { question: string; answer: string }[] | null;
  jsonLd?: unknown[] | null;
  alternates?: { locale: string; url: string }[] | null;
};
type Pagination = { page: number; limit: number; total: number; pages: number };
export type RemoteSitemapEntry = { url: string; lastModified?: string | null; alternates?: Record<string, string> | null };

/** Données propres aux articles de l'outil (page article, métadonnées, données structurées). */
export type RemoteExtras = {
  /** hreflang → URL absolue (langues servies par le site + x-default). */
  languages: Record<string, string>;
  author: { name: string; bio: string | null } | null;
  imageCredit: string | null;
  keyTakeaways: string[];
  jsonLd: Record<string, unknown>[];
  tags: string[];
};

/* ── Appels ───────────────────────────────────────────────────────────────────────────── */

class NotFound extends Error {}

async function api<T>(path: string): Promise<T> {
  const res = await fetch(apiUrl() + path, {
    headers: { Authorization: `Bearer ${process.env.BLOG_API_KEY}`, Accept: 'application/json' },
    next: { revalidate: REVALIDATE_S, tags: [BLOG_CACHE_TAG] },
    signal: AbortSignal.timeout(10_000),
  });
  if (res.status === 404) throw new NotFound(path);
  if (!res.ok) throw new Error(`API blog ${res.status} sur ${path}`);
  return (await res.json()) as T;
}

/**
 * Sans clé : aucune donnée. Pendant le build (image Docker construite sans les variables, ou
 * outil injoignable), une liste vide : les pages se complètent à leur régénération. En
 * production, l'erreur remonte : Next garde la dernière version de la page plutôt qu'un blog amputé.
 */
async function guard<T>(fallback: T, fn: () => Promise<T>): Promise<T> {
  if (!hasRemoteBlog()) return fallback;
  try {
    return await fn();
  } catch (err) {
    if (!BUILD) throw err;
    console.warn('[blog] outil de rédaction injoignable pendant le build :', err instanceof Error ? err.message : err);
    return fallback;
  }
}

/** Une page de la liste (getPosts du cahier des charges de l'outil). */
export const getPosts = (opts: { page?: number; limit?: number; category?: string } = {}) =>
  guard<{ posts: RemoteSummary[]; pagination: Pagination }>(
    { posts: [], pagination: { page: 1, limit: opts.limit ?? 12, total: 0, pages: 1 } },
    () => {
      const q = new URLSearchParams({ locale: REMOTE_LOCALE, page: String(opts.page ?? 1), limit: String(opts.limit ?? 12) });
      if (opts.category) q.set('category', opts.category);
      return api(`/posts?${q}`);
    },
  );

/** Un article (getPost du cahier des charges de l'outil) ; null si l'outil ne le connaît pas. */
export const getRemotePostRaw = cache((slug: string) =>
  guard<RemotePost | null>(null, async () => {
    if (!/^[a-z0-9][a-z0-9-]{0,190}$/i.test(slug)) return null;
    try {
      return (await api<{ post: RemotePost }>(`/posts/${encodeURIComponent(slug)}?locale=${REMOTE_LOCALE}`)).post ?? null;
    } catch (err) {
      if (err instanceof NotFound) return null;
      throw err;
    }
  }),
);

export const getRemoteSitemap = cache(() =>
  guard<RemoteSitemapEntry[]>([], async () => (await api<{ entries: RemoteSitemapEntry[] }>(`/sitemap?locale=${REMOTE_LOCALE}`)).entries ?? []),
);

/** Tous les articles publiés (toutes les pages de la liste). */
export const listRemotePosts = cache(async (): Promise<PostSummary[]> => {
  const first = await getPosts({ page: 1, limit: PAGE_SIZE });
  const all = [...first.posts];
  const pages = Math.min(first.pagination.pages || 1, MAX_PAGES);
  for (let page = 2; page <= pages; page++) all.push(...(await getPosts({ page, limit: PAGE_SIZE })).posts);
  return all.filter((p) => p && typeof p.slug === 'string' && p.title).map((p) => toSummary(p));
});

export async function getRemotePost(slug: string): Promise<Post | null> {
  const raw = await getRemotePostRaw(slug);
  return raw?.title ? toPost(raw) : null;
}

/* ── Mise en forme commune du site ────────────────────────────────────────────────────── */

const term = (t: RemoteTerm | undefined): string | null =>
  !t ? null : typeof t === 'string' ? t.trim() || null : (t.name || t.label || t.slug || '').trim() || null;

/** Chemin sur ce site d'une URL de l'outil (« / » final, comme tout le site), ou null si hors site. */
export function sitePath(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    const u = new URL(url, SITE_URL);
    if (u.origin !== SITE_URL) return null;
    return u.pathname.endsWith('/') ? u.pathname : u.pathname + '/';
  } catch {
    return null;
  }
}

const iso = (d: string | null | undefined, fallback: string) => (d && !Number.isNaN(Date.parse(d)) ? new Date(d).toISOString() : fallback);

function toSummary(p: RemoteSummary, html = ''): PostSummary {
  const path = `/blog/${p.slug}/`;
  const date = iso(p.publishedAt, new Date(0).toISOString());
  const modified = iso(p.updatedAt, date);
  const img = p.featuredImage?.url ? p.featuredImage : null;
  const words = html ? wordCount(html.replace(/<[^>]*>/g, ' ')) : 0;
  const minutes = p.readingMinutes && p.readingMinutes > 0 ? Math.round(p.readingMinutes) : Math.max(1, Math.round(words / 200));
  const inline = [...html.matchAll(/<img\b[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]);
  return {
    slug: p.slug,
    path,
    title: p.title,
    seoTitle: p.metaTitle?.trim() || `${p.title} | Kameo`,
    description: p.metaDescription?.trim() || p.excerpt?.trim() || '',
    excerpt: p.excerpt?.trim() || p.metaDescription?.trim() || '',
    date,
    modified: Date.parse(modified) < Date.parse(date) ? date : modified,
    image: img
      ? { src: abs(img.url!), width: img.width ?? undefined, height: img.height ?? undefined, alt: img.alt?.trim() || undefined }
      : null,
    words,
    wordCount: words,
    readingMinutes: minutes,
    rankMathMinutes: minutes,
    source: 'outil',
    category: term(p.category),
    authorName: p.author?.name?.trim() || undefined,
    images: [...new Set([...(img ? [abs(img.url!)] : []), ...inline.map((u) => abs(u))])],
  };
}

function toPost(p: RemotePost): Post {
  const html = cleanHtml(p.html || '');
  const summary = toSummary(p, html);
  if (p.url && sitePath(p.url) !== summary.path) console.warn(`[blog] URL de l'outil ${p.url} ≠ adresse servie ${summary.path}`);
  // hreflang : langues servies par ce site uniquement (une page inexistante ne doit pas être annoncée)
  const languages: Record<string, string> = { [REMOTE_LOCALE]: abs(summary.path) };
  for (const a of p.alternates ?? []) {
    const path = a?.locale === REMOTE_LOCALE ? sitePath(a.url) : null;
    if (path) languages[REMOTE_LOCALE] = abs(path);
  }
  languages['x-default'] = languages[REMOTE_LOCALE];
  const author = p.author?.name?.trim() ? { name: p.author.name.trim(), bio: p.author.bio?.trim() || null } : null;
  const remote: RemoteExtras = {
    languages,
    author,
    imageCredit: p.featuredImage?.credit?.trim() || null,
    keyTakeaways: (p.keyTakeaways ?? []).map((t) => String(t).trim()).filter(Boolean),
    jsonLd: (p.jsonLd ?? []).filter((o): o is Record<string, unknown> => !!o && typeof o === 'object' && !Array.isArray(o)),
    tags: (p.tags ?? []).map(term).filter((t): t is string => !!t),
  };
  return { ...summary, html, remote };
}

/*
 * Le HTML arrive déjà assaini par l'outil ; il repasse ici par une liste blanche (défense en
 * profondeur : une compromission de l'outil ne doit pas pouvoir injecter de script sur le site).
 * Balises de mise en forme, tableaux, citations, figures, FAQ en <details>, vidéos YouTube/Vimeo.
 */
const CLEAN: sanitizeHtml.IOptions = {
  allowedTags: [
    'p', 'br', 'strong', 'em', 'u', 'b', 'i', 's', 'del', 'ins', 'mark', 'small', 'sup', 'sub', 'q', 'cite', 'abbr', 'kbd',
    'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'dl', 'dt', 'dd',
    'a', 'img', 'picture', 'source',
    'blockquote', 'pre', 'code',
    'table', 'caption', 'colgroup', 'col', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
    'details', 'summary',
    'figure', 'figcaption',
    'div', 'span', 'hr', 'section', 'aside',
    'iframe',
  ],
  allowedAttributes: {
    a: ['href', 'title', 'target', 'rel', 'hreflang'],
    img: ['src', 'srcset', 'sizes', 'alt', 'title', 'width', 'height', 'loading', 'decoding'],
    source: ['srcset', 'sizes', 'type', 'media', 'width', 'height'],
    iframe: ['src', 'title', 'width', 'height', 'allow', 'allowfullscreen', 'loading', 'referrerpolicy'],
    td: ['colspan', 'rowspan', 'headers'],
    th: ['colspan', 'rowspan', 'scope', 'headers'],
    col: ['span'],
    ol: ['start', 'type', 'reversed'],
    details: ['open'],
    '*': ['class', 'id', 'lang', 'dir'],
  },
  allowedSchemes: ['https', 'http', 'mailto', 'tel'],
  allowProtocolRelative: false,
  allowedIframeHostnames: ['www.youtube-nocookie.com', 'www.youtube.com', 'player.vimeo.com'],
  transformTags: {
    // le titre de l'article est le seul <h1> de la page
    h1: 'h2',
    a: (tagName, attribs) =>
      attribs.target === '_blank' ? { tagName, attribs: { ...attribs, rel: 'noopener noreferrer' } } : { tagName, attribs },
    img: (tagName, attribs) => ({ tagName, attribs: { loading: 'lazy', decoding: 'async', ...attribs } }),
  },
};

/** HTML nettoyé ; chaque tableau dans un conteneur défilant (petits écrans, voir blog-outil.css). */
const cleanHtml = (html: string) =>
  sanitizeHtml(html, CLEAN).replace(/<table\b/g, '<div class="article-table"><table').replace(/<\/table>/g, '</table></div>');
