import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { marked } from 'marked';
import { getApiPost, listApiPosts } from './blog-db';
import { assertSafeHtml } from './content-guard';
import { addContentSrcset, uploadSrcset } from './images';
import { addInternalLinks } from './internal-links';
import { trimWords, wordCount } from './text';

/**
 * Articles du blog, de deux sources :
 *  - les fichiers src/content/blog/*.md du dépôt, lus au build (voir le README du dossier) ;
 *  - les articles publiés par n8n via l'API /api/blog/publish/… et stockés en base (src/lib/blog-db.ts).
 * Les deux sont présentés sous la même forme. Un slug présent des deux côtés laisse gagner le
 * fichier du dépôt (l'API refuse d'ailleurs de le réutiliser).
 */
export type PostImage = { src: string; width?: number; height?: number; alt?: string; srcset?: string };

export type Post = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  date: string;
  modified: string;
  image: PostImage | null;
  html: string;
  /** Mots du contenu brut (str_word_count de WordPress) : temps de lecture du thème. */
  words: number;
  /** wordCount des données structurées BlogPosting. */
  wordCount: number;
  readingMinutes: number;
  /** Temps de lecture annoncé par Rank Math (twitter:data2) : mots / 250, arrondi au-dessus. */
  rankMathMinutes: number;
  /** Fichier du dépôt ou article publié par n8n. */
  source: 'markdown' | 'api';
  /** Catégorie (articles publiés par n8n uniquement). */
  category: string | null;
  /** Image à la une puis images du contenu (sitemap des articles). */
  images: string[];
};

/** Article sans son contenu : listes, cartes, sitemaps, flux. */
export type PostSummary = Omit<Post, 'html'>;

export const POSTS_PER_PAGE = 9;
const DIR = path.join(process.cwd(), 'src/content/blog');

let cache: Post[] | null = null;

/** En-tête YAML entre deux lignes « --- » (types YAML standard uniquement, aucun code exécuté). */
function frontMatter(src: string): { data: Record<string, unknown>; content: string } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(src);
  if (!m) return { data: {}, content: src };
  const data = yaml.load(m[1]);
  return { data: data && typeof data === 'object' ? (data as Record<string, unknown>) : {}, content: src.slice(m[0].length) };
}

function loadMarkdown(): Post[] {
  if (cache) return cache;
  if (!fs.existsSync(DIR)) return (cache = []);
  const posts: Post[] = [];
  for (const file of fs.readdirSync(DIR)) {
    if (!file.endsWith('.md') || file === 'README.md') continue;
    const slug = file.slice(0, -3);
    const { data, content } = frontMatter(fs.readFileSync(path.join(DIR, file), 'utf8'));
    if (data.draft) continue;
    const body = data.format === 'markdown' ? (marked.parse(content, { async: false }) as string) : content;
    assertSafeHtml(body, file);
    const p = `/blog/${slug}/`;
    const html = addContentSrcset(addInternalLinks(body, p));
    const text = body.replace(/<[^>]*>/g, ' ');
    // nombres de mots relevés à l'import sur le contenu brut, sinon calculés sur le HTML
    const words = Number(data.words) || wordCount(text);
    const excerpt = String(data.excerpt || trimWords(text, 55, '…'));
    const image = data.image
      ? {
          src: String(data.image),
          width: data.imageWidth ? Number(data.imageWidth) : undefined,
          height: data.imageHeight ? Number(data.imageHeight) : undefined,
          alt: data.imageAlt ? String(data.imageAlt) : undefined,
          srcset: uploadSrcset(String(data.image)),
        }
      : null;
    const inline = [...html.matchAll(/<img\b[^>]*\ssrc="(\/wp-content\/uploads\/[^"]+)"/g)].map((m) => m[1]);
    posts.push({
      slug,
      path: p,
      title: String(data.title),
      seoTitle: String(data.seoTitle || `${data.title} | Kameo`),
      description: String(data.description || trimWords(excerpt, 30, '…')),
      excerpt,
      date: String(data.date),
      modified: String(data.modified || data.date),
      image,
      html,
      words,
      wordCount: Number(data.wordCount) || words,
      // même calcul que le thème : str_word_count / 200, arrondi, minimum 1
      readingMinutes: Math.max(1, Math.round(words / 200)),
      rankMathMinutes: Math.max(1, Math.ceil(words / 250)),
      source: 'markdown',
      category: null,
      images: [...new Set([...(image ? [image.src] : []), ...inline])],
    });
  }
  return (cache = posts.sort(byDate));
}

/** Plus récent d'abord ; à date égale, ordre alphabétique des slugs. */
function byDate(a: PostSummary, b: PostSummary): number {
  return Date.parse(b.date) - Date.parse(a.date) || a.slug.localeCompare(b.slug);
}

/** Articles du dépôt seuls (secours si la base ne répond pas). */
export const getRepoPosts = (): PostSummary[] => loadMarkdown();

/** Slugs des articles du dépôt (l'API de publication ne peut pas les reprendre). */
export const markdownSlugs = () => new Set(loadMarkdown().map((p) => p.slug));

export async function getAllPosts(): Promise<PostSummary[]> {
  const md = loadMarkdown();
  const taken = new Set(md.map((p) => p.slug));
  const api = (await listApiPosts()).filter((p) => !taken.has(p.slug));
  return api.length ? [...md, ...api].sort(byDate) : md;
}

/**
 * Pour les sitemaps, le flux RSS, llms.txt et la recherche : si la base ne répond pas, les
 * articles du dépôt plutôt qu'une erreur 500 (qui ferait se désabonner les agrégateurs).
 * Les pages, elles, lèvent l'erreur : Next continue de servir leur dernière version.
 */
export async function getAllPostsOrRepo(): Promise<PostSummary[]> {
  try {
    return await getAllPosts();
  } catch (err) {
    console.error('[blog] base des articles injoignable :', err instanceof Error ? err.message : err);
    return getRepoPosts();
  }
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return loadMarkdown().find((p) => p.slug === slug) ?? (await getApiPost(slug)) ?? undefined;
}

export const pageCount = async () => Math.max(1, Math.ceil((await getAllPosts()).length / POSTS_PER_PAGE));
export const getPage = async (n: number) => (await getAllPosts()).slice((n - 1) * POSTS_PER_PAGE, n * POSTS_PER_PAGE);

const FR_DATE = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' });
/** Date au format « 14 mars 2026 » (get_the_date('j F Y')). */
export const frDate = (iso: string) => FR_DATE.format(new Date(iso));
