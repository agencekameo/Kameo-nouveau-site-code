import type { NextRequest } from 'next/server';
import { eq } from 'drizzle-orm';
import { monotonicFactory } from 'ulid';
import {
  countWords,
  externalImages,
  guard,
  handle,
  htmlToText,
  json,
  postUrl,
  readJson,
  resolveCategoryId,
  revalidateBlog,
  sanitizeContent,
  slugConflict,
  slugify,
  str,
} from '@/lib/blog-api';
import { getDb } from '@/lib/db';
import { blogMedia, blogPosts } from '@/lib/db-tables';
import { trimWords } from '@/lib/text';

/*
 * POST /api/blog/publish/posts — créer un article (n8n). Même contrat que le site Omega.
 * Requis : title, content (HTML), slug. Facultatifs : status (« draft » par défaut, ou
 * « publish »), excerpt, featured_media, category, lang, meta_title, meta_description, focus_keyword.
 */
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

const ulid = monotonicFactory();
const STATUSES = new Set(['publish', 'draft']);

export async function POST(req: NextRequest) {
  const denied = guard(req, 'posts', 20);
  if (denied) return denied;
  return handle('posts/create', async () => {
    const body = await readJson(req);
    if (!body) return json({ error: 'Invalid JSON body' }, 400);

    const title = str(body.title, 300);
    const content = typeof body.content === 'string' ? body.content : null;
    // le slug retenu (normalisé) est celui de la réponse : c'est lui qui fait foi
    const slug = slugify(str(body.slug, 300) ?? '');
    if (!title || !content?.trim() || !slug) return json({ error: 'Missing required fields: title, content, slug' }, 400);
    const status = str(body.status) ?? 'draft';
    if (!STATUSES.has(status)) return json({ error: `Unknown status "${status}" (accepted: publish, draft)` }, 400);

    const conflict = slugConflict(slug);
    if (conflict) return json({ error: `Slug "${slug}" cannot be used: ${conflict}`, slug }, 409);

    const db = await getDb();
    const [existing] = await db.select({ id: blogPosts.id }).from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    // l'identifiant existant est renvoyé : le scénario peut enchaîner sur /meta ou une suppression
    if (existing) return json({ error: `Slug "${slug}" already in use`, id: existing.id, slug }, 409);

    const featured = str(body.featured_media, 64);
    if (featured) {
      const [media] = await db.select({ id: blogMedia.id }).from(blogMedia).where(eq(blogMedia.id, featured)).limit(1);
      if (!media) return json({ error: `Featured media "${featured}" not found` }, 400);
    }

    const content_html = sanitizeContent(content);
    if (!htmlToText(content_html)) return json({ error: 'Content is empty once cleaned' }, 400);
    const words = countWords(content_html);
    const lang = str(body.lang, 10) ?? 'fr';
    const id = ulid();

    await db.insert(blogPosts).values({
      id,
      slug,
      title,
      content_html,
      excerpt: str(body.excerpt, 1000) ?? trimWords(htmlToText(content_html), 55, '…'),
      meta_title: str(body.meta_title, 300),
      meta_description: str(body.meta_description, 500),
      focus_keyword: str(body.focus_keyword, 200),
      category_id: await resolveCategoryId(db, body.category),
      featured_media_id: featured,
      lang,
      status,
      reading_minutes: Math.max(1, Math.round(words / 200)),
      word_count: words,
      published_at: status === 'publish' ? new Date() : null,
    });

    revalidateBlog();
    const warnings = externalImages(content_html).map((u) => `External image, not hosted by the site: ${u}`);
    return json({ id, slug, title, status, lang, url: postUrl(slug), ...(warnings.length ? { warnings } : {}) }, 201);
  });
}
