import type { Realisation } from '@/content/realisations';
import { clampText } from './text';

/* Titles des réalisations (kameo_get_custom_title, v2.10.0) : « <projet> : <prestation> | Kameo »,
   la prestation étant normalisée depuis la méta service et « site web » privilégiée. */
const NORMALISE: Record<string, string> = {
  'site web': 'création de site internet',
  'direction artistique': 'direction artistique',
  da: 'direction artistique',
  logo: 'création de logo',
};
const len = (s: string) => Array.from(s).length;

export function realisationTitle(r: Realisation): string {
  const parts = r.service.split(',').map((x) => x.trim().toLowerCase());
  let lib = '';
  if (parts.includes('site web')) lib = NORMALISE['site web'];
  else for (const p of parts) if (NORMALISE[p]) { lib = NORMALISE[p]; break; }
  if (lib) {
    const withBrand = `${r.title} : ${lib} | Kameo`;
    if (len(withBrand) <= 60) return withBrand;
    const noBrand = `${r.title} : ${lib}`;
    if (len(noBrand) <= 60) return noBrand;
  }
  return `${r.title} | Kameo`;
}

/* v3 — meta description tirée du résumé du projet. La v2 servait « <projet>, découvrez ce
   projet réalisé par l’agence Kameo. » sur les 22 pages, faute d'extrait saisi. */
export function realisationDescription(r: Realisation): string {
  return r.description ? clampText(r.description, 158) : `${r.title}, découvrez ce projet réalisé par l’agence Kameo.`;
}

/* Prestations liées (bloc « Un projet similaire ? ») : déduites des données vérifiées du projet
   (technologies, refonte, prestations réellement livrées), jamais du texte libre, qui faisait
   proposer le motion design sur « émotion » ou WordPress sur un site Shopify. Trois au maximum. */
export function relatedServices(r: Realisation): [string, string, string][] {
  const tech = r.technologies ?? [];
  const prestations = r.service.toLowerCase().split(',').map((x) => x.trim());
  const out = new Map<string, [string, string]>();
  const add = (path: string, label: string, desc: string) => !out.has(path) && out.set(path, [label, desc]);
  if (r.refonte) add('/refonte-wordpress/', 'Refonte de site WordPress', 'Moderniser sans perdre votre SEO');
  if (tech.includes('WooCommerce') || tech.includes('Shopify'))
    add('/creation-site-ecommerce/', 'Création de site e-commerce', 'Boutique en ligne sur-mesure, tunnel optimisé');
  if (tech.includes('WordPress'))
    add('/creation-site-wordpress/', 'Création de site WordPress', 'Site vitrine sur-mesure, SEO inclus');
  if (!out.has('/creation-site-wordpress/') && !out.has('/creation-site-ecommerce/') && prestations.includes('site web'))
    add('/', 'Création de site internet', 'Site vitrine ou e-commerce sur-mesure');
  if (prestations.some((p) => p === 'da' || p === 'direction artistique' || p === 'logo'))
    add('/expertises-branding/', 'Branding et identité visuelle', 'Logo, charte graphique, direction artistique');
  if (prestations.some((p) => /^(motion|vidéo|video)/u.test(p)))
    add('/expertises-motion/', 'Motion design', 'Animations et vidéos de marque');
  if (tech.includes('WordPress')) add('/agence-wordpress-paris/', 'Agence WordPress à Paris', 'Création, refonte et maintenance');
  if (!out.size) add('/', 'Création de site internet', 'Site vitrine ou e-commerce sur-mesure');
  return Array.from(out.entries())
    .slice(0, 3)
    .map(([p, [l, d]]) => [p, l, d]);
}
