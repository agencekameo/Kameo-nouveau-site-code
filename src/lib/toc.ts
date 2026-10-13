/**
 * Sommaire de l'article : ajoute un id aux h2/h3 qui n'en ont pas, selon le schéma du
 * thème (heading-0, heading-1…), et renvoie les entrées. Le thème le faisait en JS côté
 * navigateur ; le faire au rendu met les ancres dans le HTML (liens « Aller à » de Google).
 */
export type TocItem = { id: string; text: string; level: 2 | 3 };

const decode = (s: string) =>
  s
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#0?39;|&rsquo;|&#8217;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .trim();

export function buildToc(html: string): { html: string; items: TocItem[] } {
  const items: TocItem[] = [];
  let i = 0;
  const out = html.replace(/<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi, (m, lvl: string, attrs = '', inner: string) => {
    const idx = i++;
    const found = /\sid\s*=\s*["']([^"']+)["']/i.exec(attrs);
    const id = found ? found[1] : `heading-${idx}`;
    items.push({ id, text: decode(inner), level: Number(lvl) as 2 | 3 });
    return found ? m : `<h${lvl}${attrs} id="${id}">${inner}</h${lvl}>`;
  });
  return { html: out, items };
}
