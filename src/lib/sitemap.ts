import { getAllPosts } from './blog';
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

type Entry = { loc: string; lastmod: string; images?: string[] };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function urlset(entries: Entry[]): string {
  const body = entries
    .map(
      (e) =>
        `\t<url>\n\t\t<loc>${esc(e.loc)}</loc>\n\t\t<lastmod>${e.lastmod}</lastmod>\n` +
        (e.images || []).map((i) => `\t\t<image:image>\n\t\t\t<image:loc>${esc(i)}</image:loc>\n\t\t</image:image>\n`).join('') +
        `\t</url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

/* lastmod : date de modification de la page, de l'article ou de la réalisation, comme Rank Math. */
export const pageEntries = (): Entry[] => INDEXABLE_PAGES.map((p) => ({ loc: abs(p), lastmod: pageInfo(p)?.modified ?? CONTENT_UPDATED }));

/** Image à la une puis images du contenu, comme le sitemap d'articles de Rank Math. */
function postImages(p: ReturnType<typeof getAllPosts>[number]): string[] {
  const inline = [...p.html.matchAll(/<img\b[^>]*\ssrc="(\/wp-content\/uploads\/[^"]+)"/g)].map((m) => m[1]);
  return [...new Set([...(p.image ? [p.image.src] : []), ...inline])].map(abs);
}
export const postEntries = (): Entry[] => getAllPosts().map((p) => ({ loc: abs(p.path), lastmod: p.modified, images: postImages(p) }));
export const realisationEntries = (): Entry[] =>
  REALISATIONS.map((r) => ({ loc: abs(`/realisations/${r.slug}/`), lastmod: r.modified, images: r.hero ? [abs(r.hero.src)] : [] }));

export const pageSitemap = () => urlset(pageEntries());
export const postSitemap = () => urlset(postEntries());
export const realisationSitemap = () => urlset(realisationEntries());

export function sitemapIndex(): string {
  const latest = (xs: Entry[]) => xs.map((x) => x.lastmod).sort().pop() || CONTENT_UPDATED;
  const maps: [string, Entry[]][] = [
    ['page-sitemap.xml', pageEntries()],
    ['post-sitemap.xml', postEntries()],
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
