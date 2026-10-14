import fs from 'node:fs';
import path from 'node:path';
import { SIZES } from './sizes';

/**
 * Variantes WebP des images d'articles (<nom>-<largeur>w.webp, générées par
 * migration/optimize-images.mjs) : srcset lu au build. L'attribut src garde l'image
 * d'origine, que citent l'Open Graph, le sitemap et Google Images.
 */
const PUBLIC = path.join(process.cwd(), 'public');


export function uploadSrcset(src: string): string | undefined {
  if (!src.startsWith('/wp-content/uploads/') || !/\.(png|jpe?g)$/i.test(src)) return undefined;
  const file = path.join(PUBLIC, decodeURIComponent(src));
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) return undefined;
  const stem = path.basename(file).replace(/\.(png|jpe?g)$/i, '');
  const urlStem = src.replace(/\.(png|jpe?g)$/i, '');
  const widths = fs
    .readdirSync(dir)
    .map((f) => (f.startsWith(stem + '-') ? /^-(\d+)w\.webp$/.exec(f.slice(stem.length)) : null))
    .filter((m): m is RegExpExecArray => !!m)
    .map((m) => Number(m[1]))
    .sort((a, b) => a - b);
  return widths.length ? widths.map((w) => `${urlStem}-${w}w.webp ${w}w`).join(', ') : undefined;
}

/** Ajoute srcset et sizes aux images du contenu d'un article qui ont des variantes. */
export function addContentSrcset(html: string): string {
  return html.replace(/<img\b(?![^>]*\ssrcset=)([^>]*?)\ssrc="([^"]+)"([^>]*)>/g, (m, before: string, src: string, after: string) => {
    const set = uploadSrcset(src);
    return set ? `<img${before} src="${src}" srcset="${set}" sizes="${SIZES.content}"${after}>` : m;
  });
}
