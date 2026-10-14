import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { addContentSrcset, uploadSrcset } from './images';
import { addInternalLinks } from './internal-links';
import { trimWords, wordCount } from './text';

/** Articles du blog, lus au build depuis src/content/blog/*.md (voir le README du dossier). */
export type Post = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  date: string;
  modified: string;
  image: { src: string; width?: number; height?: number; alt?: string; srcset?: string } | null;
  html: string;
  /** Mots du contenu brut (str_word_count de WordPress) : temps de lecture du thème. */
  words: number;
  /** wordCount des données structurées BlogPosting. */
  wordCount: number;
  readingMinutes: number;
  /** Temps de lecture annoncé par Rank Math (twitter:data2) : mots / 250, arrondi au-dessus. */
  rankMathMinutes: number;
};

export const POSTS_PER_PAGE = 9;
const DIR = path.join(process.cwd(), 'src/content/blog');

let cache: Post[] | null = null;

function load(): Post[] {
  if (cache) return cache;
  if (!fs.existsSync(DIR)) return (cache = []);
  const posts: Post[] = [];
  for (const file of fs.readdirSync(DIR)) {
    if (!file.endsWith('.md') || file === 'README.md') continue;
    const slug = file.slice(0, -3);
    const { data, content } = matter(fs.readFileSync(path.join(DIR, file), 'utf8'));
    if (data.draft) continue;
    const body = data.format === 'markdown' ? (marked.parse(content, { async: false }) as string) : content;
    const p = `/blog/${slug}/`;
    const html = addContentSrcset(addInternalLinks(body, p));
    const text = body.replace(/<[^>]*>/g, ' ');
    // nombres de mots relevés à l'import sur le contenu brut, sinon calculés sur le HTML
    const words = Number(data.words) || wordCount(text);
    const excerpt = String(data.excerpt || trimWords(text, 55, '…'));
    posts.push({
      slug,
      path: p,
      title: String(data.title),
      seoTitle: String(data.seoTitle || `${data.title} | Kameo`),
      description: String(data.description || trimWords(excerpt, 30, '…')),
      excerpt,
      date: String(data.date),
      modified: String(data.modified || data.date),
      image: data.image
        ? {
            src: String(data.image),
            width: data.imageWidth,
            height: data.imageHeight,
            alt: data.imageAlt ? String(data.imageAlt) : undefined,
            srcset: uploadSrcset(String(data.image)),
          }
        : null,
      html,
      words,
      wordCount: Number(data.wordCount) || words,
      // même calcul que le thème : str_word_count / 200, arrondi, minimum 1
      readingMinutes: Math.max(1, Math.round(words / 200)),
      rankMathMinutes: Math.max(1, Math.ceil(words / 250)),
    });
  }
  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));
  return (cache = posts);
}

export const getAllPosts = () => load();
export const getPost = (slug: string) => load().find((p) => p.slug === slug);
export const pageCount = () => Math.max(1, Math.ceil(load().length / POSTS_PER_PAGE));
export const getPage = (n: number) => load().slice((n - 1) * POSTS_PER_PAGE, n * POSTS_PER_PAGE);

const FR_DATE = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' });
/** Date au format « 14 mars 2026 » (get_the_date('j F Y')). */
export const frDate = (iso: string) => FR_DATE.format(new Date(iso));
