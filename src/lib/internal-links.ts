/**
 * Maillage interne automatique blog → pages de service (section 9b-ter de functions.php).
 * Transforme la première occurrence d'expressions-clés en lien vers la page de service :
 * jamais dans un lien, un titre, du code ou une citation ; une insertion par segment de
 * texte ; un lien par page cible ; 6 liens au maximum par article ; pas d'auto-lien.
 * L'ordre compte : expressions les plus spécifiques d'abord.
 */
const LINK_MAP: [string, string][] = [
  ['création de site WordPress', '/creation-site-wordpress/'],
  ['refonte de site WordPress', '/refonte-wordpress/'],
  ['maintenance WordPress', '/maintenance-wordpress/'],
  ['refonte WordPress', '/refonte-wordpress/'],
  ['agence WordPress', '/agence-wordpress-paris/'],
  ['création de site e-commerce', '/creation-site-ecommerce/'],
  ['site e-commerce', '/creation-site-ecommerce/'],
  ['boutique en ligne', '/creation-site-ecommerce/'],
  ['WooCommerce', '/creation-site-ecommerce/'],
  ['CRM sur-mesure', '/creation-crm-sur-mesure/'],
  ['identité visuelle', '/expertises-branding/'],
  ['charte graphique', '/expertises-branding/'],
  ['motion design', '/expertises-motion/'],
  ['marketplace', '/creation-marketplace/'],
  ['site vitrine', '/creation-site-wordpress/'],
  ['refonte de site', '/refonte-wordpress/'],
  ['site WordPress', '/creation-site-wordpress/'],
  ['mises à jour', '/maintenance-wordpress/'],
  ['mise à jour', '/maintenance-wordpress/'],
  ['maintenance', '/maintenance-wordpress/'],
  ['développement sur-mesure', '/developpement-sur-mesure/'],
  ['développement sur mesure', '/developpement-sur-mesure/'],
  ['logiciel métier', '/developpement-sur-mesure/'],
  ['logiciel sur-mesure', '/developpement-sur-mesure/'],
  ['outil métier', '/developpement-sur-mesure/'],
  ['application métier', '/developpement-sur-mesure/'],
  ['application web', '/developpement-sur-mesure/'],
  ['CRM sur mesure', '/creation-crm-sur-mesure/'],
  ['IA générative', '/creation-saas-ia/'],
  ['intelligence artificielle', '/creation-saas-ia/'],
  ['application SaaS', '/creation-saas-ia/'],
  ['marketplace multi-vendeurs', '/creation-marketplace/'],
  ['e-commerce', '/creation-site-ecommerce/'],
];

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const PATTERNS = LINK_MAP.map(([phrase, path]) => ({
  path,
  // équivalent de (?<![\w-])…(?![\w-]) avec /iu : bornes « mot » Unicode
  re: new RegExp(`(?<![\\p{L}\\p{N}_-])(${escapeRe(phrase)})(?![\\p{L}\\p{N}_-])`, 'iu'),
}));
const OPEN_SKIP = /^<(a|h[1-6]|script|style|code|pre|blockquote)\b/i;
const CLOSE_SKIP = /^<\/(a|h[1-6]|script|style|code|pre|blockquote)\s*>/i;

export function addInternalLinks(html: string, currentPath: string): string {
  if (html.length < 400) return html;
  const current = currentPath.replace(/\/+$/, '');
  const parts = html.split(/(<[^>]+>)/);
  const used = new Set<string>();
  let skip = 0;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;
    if (part[0] === '<') {
      if (OPEN_SKIP.test(part)) skip++;
      else if (CLOSE_SKIP.test(part)) skip = Math.max(0, skip - 1);
      continue;
    }
    if (skip > 0 || used.size >= 6) continue;
    for (const { path, re } of PATTERNS) {
      if (used.has(path) || path.replace(/\/+$/, '') === current) continue;
      if (re.test(part)) {
        parts[i] = part.replace(re, `<a href="${path}">$1</a>`);
        used.add(path);
        break;
      }
    }
  }
  return parts.join('');
}
