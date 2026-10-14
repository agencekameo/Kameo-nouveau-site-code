/**
 * Garde-fou du contenu des articles, appliqué au build : le HTML des articles est inséré tel
 * quel dans la page, et il provient d'un WordPress qui a été piraté. Le build échoue si un
 * article contient du code exécutable, un contenu masqué (technique classique de liens de spam)
 * ou une image hébergée sur un domaine inconnu.
 */
const ALLOWED_IMG_HOSTS = new Set([
  // logo Calendly de l'encart « Prendre un rendez-vous » présent dans les articles importés
  'cdn.prod.website-files.com',
]);

export function assertSafeHtml(html: string, file: string): void {
  const problems: string[] = [];
  if (/<\s*\/?\s*(script|iframe|object|embed|form|input|button|textarea|select|style|link|meta|base|frame|frameset|svg|math|template|noscript|applet)\b/i.test(html))
    problems.push('balise interdite');
  if (/\son[a-z]+\s*=/i.test(html)) problems.push('attribut on…= (code JavaScript)');
  if (/\s(href|src|srcset|action|formaction|poster|data|xlink:href)\s*=\s*["']?\s*(javascript|vbscript|data):/i.test(html)) problems.push('URL javascript:/data:');
  if (/\sstyle\s*=\s*["'][^"']*(expression\(|url\(|behavior|-moz-binding|display\s*:\s*none|visibility\s*:\s*hidden|font-size\s*:\s*0)/i.test(html))
    problems.push('style masquant du contenu');
  if (/\ssrcdoc\s*=/i.test(html)) problems.push('attribut srcdoc');
  for (const m of html.matchAll(/<img\b[^>]*\ssrc\s*=\s*["']([^"']+)["']/gi)) {
    if (m[1].startsWith('/')) continue;
    try {
      if (!ALLOWED_IMG_HOSTS.has(new URL(m[1]).hostname)) problems.push(`image externe ${m[1]}`);
    } catch {
      problems.push(`adresse d'image invalide ${m[1]}`);
    }
  }
  if (problems.length) throw new Error(`Contenu refusé dans ${file} : ${[...new Set(problems)].join(', ')}`);
}
