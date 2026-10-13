/** Équivalent de wp_trim_words() : coupe après `num` mots et ajoute `more`. */
export function trimWords(text: string, num = 55, more = '…'): string {
  const words = text
    .replace(/<[^>]*>/g, '')
    .trim()
    .split(/[\n\r\t ]+/)
    .filter(Boolean);
  if (words.length > num) return words.slice(0, num).join(' ') + more;
  return words.join(' ');
}

/** Coupe une description à la frontière de mot la plus proche sous `max` caractères. */
export function clampText(text: string, max = 158): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:.]+$/, '') + '…';
}

/** Nombre de mots au sens de str_word_count() (lettres, apostrophes, traits d'union). */
export function wordCount(text: string): number {
  const m = text.replace(/<[^>]*>/g, ' ').match(/[A-Za-z'-]+/g);
  return m ? m.length : 0;
}
