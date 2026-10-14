import fs from 'node:fs/promises';
import { mediaFilePath } from '@/lib/blog-media';

/*
 * Images déposées par n8n : /blog-media/<ULID>.<ext> et leurs variantes <ULID>-<largeur>w.webp.
 * Seuls ces noms sont servis (aucun chemin ne peut sortir du dossier de dépôt). Les noms ne
 * sont jamais réattribués : le cache est définitif.
 */
export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ filename: string }> };

export async function GET(_req: Request, { params }: Ctx) {
  const media = mediaFilePath((await params).filename);
  if (!media) return new Response('Not found', { status: 404 });
  let data: Buffer;
  try {
    data = await fs.readFile(media.file);
  } catch {
    return new Response('Not found', { status: 404 });
  }
  return new Response(new Uint8Array(data), {
    headers: {
      'Content-Type': media.mime,
      'Content-Length': String(data.length),
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
  });
}
