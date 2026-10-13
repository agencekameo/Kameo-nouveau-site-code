import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
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
  image: { src: string; width?: number; height?: number } | null;
  html: string;
  words: number;
  readingMinutes: number;
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
    const html = addInternalLinks(body, p);
    const text = body.replace(/<[^>]*>/g, ' ');
    const words = wordCount(text);
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
      image: data.image ? { src: String(data.image), width: data.imageWidth, height: data.imageHeight } : null,
      html,
      words,
      // même calcul que le thème : str_word_count / 200, arrondi, minimum 1
      readingMinutes: Math.max(1, Math.round(words / 200)),
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
