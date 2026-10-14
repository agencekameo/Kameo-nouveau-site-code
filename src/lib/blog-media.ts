import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Images déposées par n8n (POST /api/blog/publish/media), servies par /blog-media/<fichier>.
 *
 * Le fichier d'origine garde son adresse (Open Graph, sitemap, Google Images) ; des variantes
 * WebP redimensionnées sont écrites à côté (<id>-<largeur>w.webp), aux mêmes largeurs que
 * migration/optimize-images.mjs pour les images importées de WordPress : une image générée
 * par IA pèse ~1 Mo en PNG, ~40 Ko en WebP 768 px.
 */
export const MEDIA_PREFIX = '/blog-media/';
const WIDTHS = [300, 768, 1024, 1400];

/** Types acceptés, reconnus à la signature du fichier et non à ce que déclare l'appelant. */
export const MEDIA_TYPES = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
  'image/gif': 'gif',
} as const;
export type MediaMime = keyof typeof MEDIA_TYPES;
const MIME_BY_EXT: Record<string, MediaMime> = { png: 'image/png', jpg: 'image/jpeg', webp: 'image/webp', gif: 'image/gif' };

/** Nom d'un fichier déposé : identifiant ULID, variante éventuelle, extension connue. Rien d'autre n'est servi. */
const FILE_RE = /^([0-9A-HJKMNP-TV-Z]{26})(?:-(\d{2,4})w)?\.(png|jpg|webp|gif)$/;

// Les chemins du dossier de dépôt sont marqués turbopackIgnore : il est hors du code (volume
// Docker), le traçage des fichiers du build ne doit pas l'inclure.
export function uploadsRoot(): string {
  const env = process.env.BLOG_UPLOADS_ROOT?.trim();
  return env ? path.resolve(/*turbopackIgnore: true*/ env) : path.join(/*turbopackIgnore: true*/ process.cwd(), '.blog-uploads');
}

/** Chemin disque d'un fichier servi, ou null si le nom n'est pas celui d'une image déposée. */
export function mediaFilePath(filename: string): { file: string; mime: MediaMime } | null {
  const m = FILE_RE.exec(filename);
  if (!m) return null;
  return { file: path.join(/*turbopackIgnore: true*/ uploadsRoot(), filename), mime: MIME_BY_EXT[m[3]] };
}

export function sniffImage(buf: Buffer): MediaMime | null {
  if (buf.length >= 8 && buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'image/png';
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'image/jpeg';
  if (buf.length >= 12 && buf.toString('latin1', 0, 4) === 'RIFF' && buf.toString('latin1', 8, 12) === 'WEBP') return 'image/webp';
  if (buf.length >= 6 && /^GIF8[79]a$/.test(buf.toString('latin1', 0, 6))) return 'image/gif';
  return null;
}

export type StoredImage = { filename: string; width: number | null; height: number | null; variants: number[] };

/**
 * Écrit l'image et ses variantes WebP. sharp sert aussi à lire les dimensions ; s'il manque
 * ou échoue, l'image est quand même enregistrée, sans variantes (le site sert alors l'original).
 */
export async function storeImage(id: string, buf: Buffer, mime: MediaMime): Promise<StoredImage> {
  const root = uploadsRoot();
  await fs.mkdir(root, { recursive: true });
  const filename = `${id}.${MEDIA_TYPES[mime]}`;
  await fs.writeFile(path.join(/*turbopackIgnore: true*/ root, filename), buf, { flag: 'wx' });

  let width: number | null = null;
  let height: number | null = null;
  const variants: number[] = [];
  try {
    const sharp = (await import('sharp')).default;
    const meta = await sharp(buf).metadata();
    width = meta.width ?? null;
    height = meta.height ?? null;
    // GIF animé laissé tel quel
    if (width && !(mime === 'image/gif' && (meta.pages ?? 1) > 1)) {
      const targets = [...new Set([...WIDTHS.filter((w) => w < width!), Math.min(width, WIDTHS[WIDTHS.length - 1])])];
      for (const w of targets) {
        const out = path.join(/*turbopackIgnore: true*/ root, `${id}-${w}w.webp`);
        await sharp(buf).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
        variants.push(w);
      }
    }
  } catch (err) {
    console.warn('[blog-media] variantes WebP non générées :', err instanceof Error ? err.message : err);
  }
  return { filename, width, height, variants };
}

/** srcset des variantes d'une image déposée (« 300,768 » → « /blog-media/ID-300w.webp 300w, … »). */
export function mediaSrcset(filename: string, variants: string | null | undefined): string | undefined {
  const m = FILE_RE.exec(filename);
  const widths = (variants ?? '')
    .split(',')
    .map(Number)
    .filter((w) => Number.isInteger(w) && w > 0);
  if (!m || !widths.length) return undefined;
  return widths.map((w) => `${MEDIA_PREFIX}${m[1]}-${w}w.webp ${w}w`).join(', ');
}

/** Identifiant d'une image déposée à partir d'une adresse /blog-media/… (absolue ou relative). */
export function mediaIdFromUrl(src: string): string | null {
  const i = src.indexOf(MEDIA_PREFIX);
  if (i === -1) return null;
  const m = FILE_RE.exec(src.slice(i + MEDIA_PREFIX.length));
  return m && !m[2] ? m[1] : null;
}
