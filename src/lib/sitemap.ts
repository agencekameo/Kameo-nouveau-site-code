import { getAllPostsOrRepo } from './blog';
import { REMOTE_LOCALE, getRemoteSitemap, sitePath } from './blog-remote';
import { pageInfo } from '@/content/pages';
import { REALISATIONS } from '@/content/realisations';
import { CONTENT_UPDATED, abs } from './site';

/* Sitemaps au format de Rank Math : /sitemap_index.xml et un sitemap par type de contenu,
   pour que les adresses déjà soumises dans la Search Console restent valides. Les pages
   en noindex (légales, landing page, confirmation) en sont exclues, comme sous Rank Math. */

export const INDEXABLE_PAGES = [
  '/', '/notre-agence/', '/benjamin-dayan/', '/agence-wordpress-paris/', '/creation-site-wordpress/',
  '/refonte-wordpress/', '/maintenance-wordpress/', '/expertises-branding/', '/expertises-motion/',
  '/developpement-sur-mesure/', '/creation-site-ecommerce/', '/creation-marketplace/', '/creation-crm-sur-mesure/',
  '/creation-saas-ia/', '/realisations/', '/contact/', '/blog/',
];

/** alternates : hreflang → URL (articles de l'outil de rédaction). */
type Entry = { loc: string; lastmod: string; images?: string[]; alternates?: Record<string, string> };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function urlset(entries: Entry[]): string {
  const body = entries
    .map(
      (e) =>
        `\t<url>\n\t\t<loc>${esc(e.loc)}</loc>\n\t\t<lastmod>${e.lastmod}</lastmod>\n` +
        Object.entries(e.alternates || {})
          .map(([lang, href]) => `\t\t<xhtml:link rel="alternate" hreflang="${esc(lang)}" href="${esc(href)}" />\n`)
          .join('') +
        (e.images || []).map((i) => `\t\t<image:image>\n\t\t\t<image:loc>${esc(i)}</image:loc>\n\t\t</image:image>\n`).join('') +
        `\t</url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

/* lastmod : date de modification de la page, de l'article ou de la réalisation, comme Rank Math. */
export const pageEntries = (): Entry[] => INDEXABLE_PAGES.map((p) => ({ loc: abs(p), lastmod: pageInfo(p)?.modified ?? CONTENT_UPDATED }));

/**
 * hreflang des articles de l'outil, d'après son point d'accès /sitemap : langues servies par le
 * site uniquement (fr-FR), plus x-default vers la langue principale.
 */
async function remoteAlternates(): Promise<Map<string, Record<string, string>>> {
  const out = new Map<string, Record<string, string>>();
  let entries: Awaited<ReturnType<typeof getRemoteSitemap>> = [];
  try {
    entries = await getRemoteSitemap();
  } catch (err) {
    console.error('[blog] sitemap de l\'outil de rédaction injoignable :', err instanceof Error ? err.message : err);
  }
  for (const e of entries) {
    const path = sitePath(e.url);
    if (!path) continue;
    const own = sitePath(e.alternates?.[REMOTE_LOCALE]) ?? path;
    out.set(path, { [REMOTE_LOCALE]: abs(own), 'x-default': abs(own) });
  }
  return out;
}

/** Image à la une puis images du contenu, comme le sitemap d'articles de Rank Math. */
export const postEntries = async (): Promise<Entry[]> => {
  const [posts, alternates] = await Promise.all([getAllPostsOrRepo(), remoteAlternates()]);
  return posts.map((p) => ({
    loc: abs(p.path),
    lastmod: p.modified,
    images: p.images.map(abs),
    ...(p.source === 'outil' ? { alternates: alternates.get(p.path) ?? { [REMOTE_LOCALE]: abs(p.path), 'x-default': abs(p.path) } } : {}),
  }));
};
export const realisationEntries = (): Entry[] =>
  REALISATIONS.map((r) => ({ loc: abs(`/realisations/${r.slug}/`), lastmod: r.modified, images: r.hero ? [abs(r.hero.src)] : [] }));

export const pageSitemap = () => urlset(pageEntries());
export const postSitemap = async () => urlset(await postEntries());
export const realisationSitemap = () => urlset(realisationEntries());

export async function sitemapIndex(): Promise<string> {
  const latest = (xs: Entry[]) => xs.map((x) => x.lastmod).sort((a, b) => Date.parse(a) - Date.parse(b)).pop() || CONTENT_UPDATED;
  const maps: [string, Entry[]][] = [
    ['page-sitemap.xml', pageEntries()],
    ['post-sitemap.xml', await postEntries()],
    ['realisation-sitemap.xml', realisationEntries()],
  ];
  const body = maps
    .filter(([, e]) => e.length)
    .map(([f, e]) => `\t<sitemap>\n\t\t<loc>${abs('/' + f)}</loc>\n\t\t<lastmod>${latest(e)}</lastmod>\n\t</sitemap>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}

export const xmlResponse = (xml: string) =>
  new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=UTF-8', 'X-Robots-Tag': 'noindex, follow' } });
