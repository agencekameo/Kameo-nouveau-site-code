/**
 * Variantes WebP redimensionnées des images d'articles (public/wp-content/uploads).
 *
 *   node migration/optimize-images.mjs
 *
 * Pour chaque PNG/JPEG, écrit <nom>-<largeur>w.webp à côté de l'original, aux largeurs
 * utiles à l'affichage (cartes 365 px, contenu 700 px, image à la une 1144 px, écrans
 * haute densité). L'original garde son adresse : c'est lui que citent l'Open Graph, le
 * sitemap et Google Images. Le site sert les variantes via srcset (src/lib/images.ts).
 * Les variantes déjà présentes sont conservées.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIR = path.join(ROOT, 'public/wp-content/uploads');
const WIDTHS = [300, 768, 1024, 1400];

const files = [];
(function walk(d) {
  if (!fs.existsSync(d)) return;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    // icône du site et variantes déjà générées exclues
    else if (/\.(png|jpe?g)$/i.test(e.name) && !e.name.startsWith('cropped-')) files.push(p);
  }
})(DIR);

let created = 0;
let before = 0;
let after = 0;
for (const file of files) {
  const { width } = await sharp(file).metadata();
  const base = file.replace(/\.(png|jpe?g)$/i, '');
  const widths = [...new Set([...WIDTHS.filter((w) => w < width), Math.min(width, WIDTHS.at(-1))])];
  before += fs.statSync(file).size;
  for (const w of widths) {
    const out = `${base}-${w}w.webp`;
    if (!fs.existsSync(out)) {
      await sharp(file).resize({ width: w }).webp({ quality: 78 }).toFile(out);
      created++;
    }
  }
  after += fs.statSync(`${base}-${widths.at(-1)}w.webp`).size;
}
const mo = (n) => (n / 1048576).toFixed(1) + ' Mo';
console.log(`${files.length} images, ${created} variantes créées. Plus grande variante : ${mo(after)} contre ${mo(before)} en original.`);
