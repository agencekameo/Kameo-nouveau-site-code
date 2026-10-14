import type { NextRequest } from 'next/server';
import { eq, or } from 'drizzle-orm';
import { guard, handle, json, postUrl, readJson, resolveCategoryId, revalidateBlog, str } from '@/lib/blog-api';
import { getDb } from '@/lib/db';
import { blogMedia, blogPosts } from '@/lib/db-tables';

/*
 * POST /api/blog/publish/posts/<id ou slug>/meta — métadonnées SEO et catégorie d'un article.
 * Écriture partielle : un champ absent garde sa valeur, un champ envoyé à null l'efface.
 * Champs : meta_title, meta_description, focus_keyword, category, et en plus d'Omega
 * excerpt, featured_media et status (« publish » publie un brouillon).
 */
export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ id: string }> };
const TEXT_FIELDS = [
  ['meta_title', 300],
  ['meta_description', 500],
  ['focus_keyword', 200],
  ['excerpt', 1000],
] as const;

export async function POST(req: NextRequest, { params }: Ctx) {
  const denied = guard(req, 'posts-meta', 40);
  if (denied) return denied;
  return handle('posts/meta', async () => {
    const { id } = await params;
    const body = await readJson(req);
    if (!body) return json({ error: 'Invalid JSON body' }, 400);
    const db = await getDb();
    const [post] = await db
      .select({ id: blogPosts.id, slug: blogPosts.slug, status: blogPosts.status, published_at: blogPosts.published_at })
      .from(blogPosts)
      .where(or(eq(blogPosts.id, id), eq(blogPosts.slug, id)))
      .limit(1);
    if (!post) return json({ error: `Post "${id}" not found` }, 404);

    const set: Partial<typeof blogPosts.$inferInsert> = { updated_at: new Date() };
    for (const [key, max] of TEXT_FIELDS) if (key in body) set[key] = str(body[key], max);
    if ('category' in body) set.category_id = await resolveCategoryId(db, body.category);
    if ('featured_media' in body) {
      const media = str(body.featured_media, 64);
      if (media && !(await db.select({ id: blogMedia.id }).from(blogMedia).where(eq(blogMedia.id, media)).limit(1)).length)
        return json({ error: `Featured media "${media}" not found` }, 400);
      set.featured_media_id = media;
    }
    if ('status' in body) {
      const status = str(body.status);
      if (status !== 'publish' && status !== 'draft') return json({ error: `Unknown status "${status}" (accepted: publish, draft)` }, 400);
      set.status = status;
      if (status === 'publish' && !post.published_at) set.published_at = new Date();
    }

    await db.update(blogPosts).set(set).where(eq(blogPosts.id, post.id));
    revalidateBlog();
    return json({ ok: true, id: post.id, slug: post.slug, status: set.status ?? post.status, url: postUrl(post.slug) });
  });
}
