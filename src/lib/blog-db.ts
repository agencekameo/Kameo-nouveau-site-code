import { cache } from 'react';
import { and, desc, eq, inArray, sql } from 'drizzle-orm';
import type { Post, PostImage, PostSummary } from './blog';
import { mediaIdFromUrl, mediaSrcset } from './blog-media';
import { getDb, hasDatabase, type Db } from './db';
import { blogMedia, blogPosts } from './db-tables';
import { addInternalLinks } from './internal-links';
import { SIZES } from './sizes';
import { trimWords } from './text';

/**
 * Lecture des articles publiés par n8n (table blog_posts, statut « publish »), mis sous la forme
 * des articles Markdown pour être affichés par les mêmes composants.
 */

const BUILD = process.env.NEXT_PHASE === 'phase-production-build';
let skipUntil = 0;

/**
 * Sans DATABASE_URL, le blog n'affiche que les articles du dépôt. Pendant le build, une base
 * injoignable (image Docker construite sans accès au réseau de la base) donne le même résultat ;
 * les pages se complètent à leur régénération. En production, une erreur est levée : Next garde
 * alors en cache la dernière version de la page au lieu d'afficher un blog amputé ou une 404.
 */
async function query<T>(fallback: T, fn: (db: Db) => Promise<T>): Promise<T> {
  if (!hasDatabase() || Date.now() < skipUntil) return fallback;
  try {
    return await fn(await getDb());
  } catch (err) {
    if (!BUILD) throw err;
    skipUntil = Number.POSITIVE_INFINITY;
    console.warn('[blog] base des articles injoignable pendant le build, articles du dépôt seuls :', err instanceof Error ? err.message : err);
    return fallback;
  }
}

const COLUMNS = {
  id: blogPosts.id,
  slug: blogPosts.slug,
  title: blogPosts.title,
  excerpt: blogPosts.excerpt,
  meta_title: blogPosts.meta_title,
  meta_description: blogPosts.meta_description,
  category_id: blogPosts.category_id,
  reading_minutes: blogPosts.reading_minutes,
  word_count: blogPosts.word_count,
  published_at: blogPosts.published_at,
  created_at: blogPosts.created_at,
  updated_at: blogPosts.updated_at,
  media_filename: blogMedia.filename,
  media_alt: blogMedia.alt_text,
  media_width: blogMedia.width,
  media_height: blogMedia.height,
  media_variants: blogMedia.variants,
};
type Row = {
  slug: string;
  title: string;
  excerpt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  category_id: string | null;
  reading_minutes: number | null;
  word_count: number | null;
  published_at: Date | null;
  created_at: Date | null;
  updated_at: Date | null;
  media_filename: string | null;
  media_alt: string | null;
  media_width: number | null;
  media_height: number | null;
  media_variants: string | null;
};

const PUBLISHED = eq(blogPosts.status, 'publish');

function toSummary(r: Row): PostSummary {
  const path = `/blog/${r.slug}/`;
  const published = r.published_at ?? r.created_at ?? new Date(0);
  const updated = r.updated_at && r.updated_at > published ? r.updated_at : published;
  const excerpt = r.excerpt ?? r.meta_description ?? '';
  const words = r.word_count ?? 0;
  const image: PostImage | null = r.media_filename
    ? {
        src: `/blog-media/${r.media_filename}`,
        width: r.media_width ?? undefined,
        height: r.media_height ?? undefined,
        alt: r.media_alt ?? undefined,
        srcset: mediaSrcset(r.media_filename, r.media_variants),
      }
    : null;
  return {
    slug: r.slug,
    path,
    title: r.title,
    seoTitle: r.meta_title || `${r.title} | Kameo`,
    description: r.meta_description || trimWords(excerpt, 30, '…'),
    excerpt,
    date: published.toISOString(),
    modified: updated.toISOString(),
    image,
    words,
    wordCount: words,
    readingMinutes: r.reading_minutes ?? Math.max(1, Math.round(words / 200)),
    rankMathMinutes: Math.max(1, Math.ceil(words / 250)),
    source: 'api',
    category: r.category_id,
    images: image ? [image.src] : [],
  };
}

/** Articles publiés, sans leur contenu, du plus récent au plus ancien. */
export const listApiPosts = cache(
  (): Promise<PostSummary[]> =>
    query([], async (db) => {
      const rows = await db
        .select(COLUMNS)
        .from(blogPosts)
        .leftJoin(blogMedia, eq(blogPosts.featured_media_id, blogMedia.id))
        .where(PUBLISHED)
        .orderBy(desc(sql`coalesce(${blogPosts.published_at}, ${blogPosts.created_at})`));
      return rows.map(toSummary);
    }),
);

/** Article publié complet, contenu prêt à afficher, ou null. */
export const getApiPost = cache(
  (slug: string): Promise<Post | null> =>
    query(null, async (db) => {
      const [row] = await db
        .select({ ...COLUMNS, content_html: blogPosts.content_html })
        .from(blogPosts)
        .leftJoin(blogMedia, eq(blogPosts.featured_media_id, blogMedia.id))
        .where(and(eq(blogPosts.slug, slug), PUBLISHED))
        .limit(1);
      if (!row) return null;
      const ids = [...new Set([...row.content_html.matchAll(/<img\b[^>]*\ssrc="([^"]+)"/gi)].map((m) => mediaIdFromUrl(m[1])))].filter(
        (id): id is string => !!id,
      );
      const media = ids.length
        ? await db
            .select({ id: blogMedia.id, filename: blogMedia.filename, width: blogMedia.width, height: blogMedia.height, variants: blogMedia.variants, alt: blogMedia.alt_text })
            .from(blogMedia)
            .where(inArray(blogMedia.id, ids))
        : [];
      const summary = toSummary(row);
      return { ...summary, html: renderContent(row.content_html, new Map(media.map((m) => [m.id, m])), summary.path) };
    }),
);

type MediaInfo = { filename: string; width: number | null; height: number | null; variants: string | null; alt: string | null };

/** Images du site citées en adresse absolue (l'API renvoie https://agence-kameo.fr/blog-media/…). */
const OWN_MEDIA = /https?:\/\/(?:www\.)?agence-kameo\.fr(?=\/blog-media\/)/gi;
const BLOCK = 'p|h[1-6]|ul|ol|dl|table|pre|blockquote|figure|details|div';
/** <br> collés à un bloc : l'espacement vient déjà de .article-body > * + *. */
const BR_AFTER_BLOCK = new RegExp(`(</(?:${BLOCK})>|<hr\\b[^>]*>|<img\\b[^>]*>)(?:\\s*<br\\s*/?>)+`, 'gi');
const BR_BEFORE_BLOCK = new RegExp(`(?:<br\\s*/?>\\s*)+(?=<(?:${BLOCK}|hr|img)\\b)`, 'gi');

const attr = (tag: string, name: string) => new RegExp(`\\s${name}\\s*=\\s*"([^"]*)"`, 'i').exec(tag)?.[1];
const escAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/**
 * Contenu d'un article publié par n8n, tel qu'affiché : adresses d'images rendues relatives,
 * <br> d'espacement retirés, variantes WebP (srcset), dimensions et texte alternatif des images
 * déposées, puis maillage interne automatique vers les pages de service (comme les articles du dépôt).
 */
function renderContent(html: string, media: Map<string, MediaInfo>, path: string): string {
  const out = html
    .replace(OWN_MEDIA, '')
    .replace(/^\s*(?:<br\s*\/?>\s*)+/i, '')
    .replace(BR_AFTER_BLOCK, '$1')
    .replace(BR_BEFORE_BLOCK, '')
    .replace(/<img\b[^>]*>/gi, (img) => {
      let tag = img;
      const src = attr(tag, 'src');
      const id = src ? mediaIdFromUrl(src) : null;
      const m = id ? media.get(id) : undefined;
      const add: string[] = [];
      const srcset = m ? mediaSrcset(m.filename, m.variants) : undefined;
      if (srcset && attr(tag, 'srcset') === undefined) add.push(`srcset="${srcset}"`, `sizes="${SIZES.content}"`);
      if (m?.width && m.height && attr(tag, 'width') === undefined) add.push(`width="${m.width}"`, `height="${m.height}"`);
      // texte alternatif : celui de l'image, sinon celui saisi pour le média, sinon vide (décorative)
      const alt = attr(tag, 'alt');
      if (!alt && m?.alt) {
        tag = tag.replace(/\salt\s*=\s*"[^"]*"/i, '');
        add.push(`alt="${escAttr(m.alt)}"`);
      } else if (alt === undefined) add.push('alt=""');
      if (attr(tag, 'loading') === undefined) add.push('loading="lazy"');
      add.push('decoding="async"');
      return tag.replace(/\s*\/?>$/, ` ${add.join(' ')}>`);
    });
  return addInternalLinks(out, path);
}
