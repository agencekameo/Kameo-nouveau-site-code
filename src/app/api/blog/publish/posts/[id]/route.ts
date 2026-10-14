import type { NextRequest } from 'next/server';
import { eq, or } from 'drizzle-orm';
import { guard, handle, json, revalidateBlog } from '@/lib/blog-api';
import { getDb } from '@/lib/db';
import { blogPosts } from '@/lib/db-tables';

/* DELETE /api/blog/publish/posts/<id ou slug> — supprimer un article publié par n8n. */
export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ id: string }> };

export async function DELETE(req: NextRequest, { params }: Ctx) {
  const denied = guard(req, 'posts-delete', 10);
  if (denied) return denied;
  return handle('posts/delete', async () => {
    const { id } = await params;
    const db = await getDb();
    const [post] = await db
      .select({ id: blogPosts.id, slug: blogPosts.slug })
      .from(blogPosts)
      .where(or(eq(blogPosts.id, id), eq(blogPosts.slug, id)))
      .limit(1);
    if (!post) return json({ error: `Post "${id}" not found` }, 404);
    await db.delete(blogPosts).where(eq(blogPosts.id, post.id));
    revalidateBlog();
    return json({ ok: true, deleted: post.slug });
  });
}
