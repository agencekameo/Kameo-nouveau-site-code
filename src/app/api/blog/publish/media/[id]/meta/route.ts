import type { NextRequest } from 'next/server';
import { eq } from 'drizzle-orm';
import { guard, handle, json, readJson, revalidateBlog, str } from '@/lib/blog-api';
import { getDb } from '@/lib/db';
import { blogMedia } from '@/lib/db-tables';

/*
 * POST /api/blog/publish/media/<id>/meta — titre, texte alternatif, légende et description
 * d'une image. Écriture partielle : un champ absent garde sa valeur, null l'efface.
 */
export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ id: string }> };
const FIELDS = [
  ['title', 300],
  ['alt_text', 500],
  ['caption', 1000],
  ['description', 2000],
] as const;

export async function POST(req: NextRequest, { params }: Ctx) {
  const denied = guard(req, 'media-meta', 40);
  if (denied) return denied;
  return handle('media/meta', async () => {
    const { id } = await params;
    const body = await readJson(req);
    if (!body) return json({ error: 'Invalid JSON body' }, 400);
    const db = await getDb();
    const [media] = await db.select({ id: blogMedia.id }).from(blogMedia).where(eq(blogMedia.id, id)).limit(1);
    if (!media) return json({ error: `Media "${id}" not found` }, 404);

    const set: Partial<typeof blogMedia.$inferInsert> = {};
    for (const [key, max] of FIELDS) if (key in body) set[key] = str(body[key], max);
    if (Object.keys(set).length) {
      await db.update(blogMedia).set(set).where(eq(blogMedia.id, id));
      // le texte alternatif s'affiche dans les articles qui utilisent l'image
      revalidateBlog();
    }
    return json({ ok: true });
  });
}
