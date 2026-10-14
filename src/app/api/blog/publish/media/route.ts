import type { NextRequest } from 'next/server';
import { monotonicFactory } from 'ulid';
import { guard, handle, json, mediaUrl, str } from '@/lib/blog-api';
import { MEDIA_TYPES, sniffImage, storeImage } from '@/lib/blog-media';
import { getDb } from '@/lib/db';
import { blogMedia } from '@/lib/db-tables';

/*
 * POST /api/blog/publish/media — déposer une image (n8n). Même contrat que le site Omega : le
 * corps est le fichier brut, Content-Type image/png, image/jpeg, image/webp ou image/gif.
 * Acceptés en plus : application/octet-stream et multipart/form-data (premier fichier du
 * formulaire). Le type réel est lu dans le fichier ; son nom est un ULID généré, jamais fourni
 * par l'appelant (on ne pourrait pas écraser une image existante). alt_text et title peuvent
 * être passés en paramètres d'adresse (?alt_text=…&title=…).
 */
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

const ulid = monotonicFactory();
const MAX_BYTES = 15 * 1024 * 1024;
const RAW_TYPES = new Set([...Object.keys(MEDIA_TYPES), 'application/octet-stream', 'binary/octet-stream']);

export async function POST(req: NextRequest) {
  const denied = guard(req, 'media', 20);
  if (denied) return denied;
  return handle('media/upload', async () => {
    const declared = (req.headers.get('content-type') ?? '').split(';')[0].trim().toLowerCase();
    if (Number(req.headers.get('content-length') ?? 0) > MAX_BYTES) return json({ error: 'Image too large (max 15 MB)' }, 413);

    let buf: Buffer;
    if (declared === 'multipart/form-data') {
      const form = await req.formData();
      const file = [...form.values()].find((v): v is File => typeof v !== 'string');
      if (!file) return json({ error: 'No file in the multipart body' }, 400);
      buf = Buffer.from(await file.arrayBuffer());
    } else if (RAW_TYPES.has(declared)) {
      buf = Buffer.from(await req.arrayBuffer());
    } else {
      return json({ error: `Invalid MIME type: "${declared}". Accepted: ${Object.keys(MEDIA_TYPES).join(', ')}` }, 400);
    }

    if (!buf.length) return json({ error: 'Empty body' }, 400);
    if (buf.length > MAX_BYTES)
      return json({ error: `Image too large (${(buf.length / 1024 / 1024).toFixed(1)} MB, max 15 MB)` }, 413);
    const mime = sniffImage(buf);
    if (!mime) return json({ error: `The file is not an image (accepted: ${Object.keys(MEDIA_TYPES).join(', ')})` }, 400);

    const id = ulid();
    const stored = await storeImage(id, buf, mime);
    const url = mediaUrl(stored.filename);
    const q = req.nextUrl.searchParams;
    const db = await getDb();
    await db.insert(blogMedia).values({
      id,
      filename: stored.filename,
      url,
      mime,
      size_bytes: buf.length,
      width: stored.width,
      height: stored.height,
      variants: stored.variants.join(',') || null,
      title: str(q.get('title'), 300),
      alt_text: str(q.get('alt_text') ?? q.get('alt'), 500),
    });
    return json({ id, url, mime, size_bytes: buf.length, width: stored.width, height: stored.height }, 201);
  });
}
