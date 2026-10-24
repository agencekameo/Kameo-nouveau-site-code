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

/* Prestations liées (bloc « Un projet similaire ? », v2.8.1) : déduites de la prestation,
   du titre, du résumé et du texte des sections. Trois au maximum. */
export function relatedServices(r: Realisation): [string, string, string][] {
  const hay = [r.service, r.title, r.description, ...r.sections.flatMap((s) => [s.body, s.title])].join(' ');
  const out = new Map<string, [string, string]>();
  const add = (path: string, label: string, desc: string) => !out.has(path) && out.set(path, [label, desc]);
  if (/e-commerce|ecommerce|boutique|woocommerce|prestashop|shopify/iu.test(hay))
    add('/creation-site-ecommerce/', 'Création de site e-commerce', 'Boutique en ligne sur-mesure, tunnel optimisé');
  if (/marketplace|multi-vendeur|multi vendeur/iu.test(hay))
    add('/creation-marketplace/', 'Création de marketplace', 'Plateforme multi-vendeurs, paiement redistribué');
  if (/\bcrm\b/iu.test(hay))
    add('/creation-crm-sur-mesure/', 'CRM sur-mesure', 'Adapté à votre process commercial');
  if (/\bsaas\b|intelligence artificielle|\bia\b/iu.test(hay))
    add('/creation-saas-ia/', 'Création de SaaS avec IA', 'MVP livré en 2 mois');
  if (/direction artistique|\bda\b|logo|identité visuelle|charte/iu.test(hay))
    add('/expertises-branding/', 'Branding & identité visuelle', 'Logo, charte graphique, direction artistique');
  if (/motion|vidéo|video|trailer/iu.test(hay)) add('/expertises-motion/', 'Motion design', 'Animations et vidéos de marque');
  if (/site web|site internet|wordpress|vitrine/iu.test(hay))
    add('/creation-site-wordpress/', 'Création de site WordPress', 'Site vitrine sur-mesure, SEO inclus');
  add('/agence-wordpress-paris/', 'Agence WordPress à Paris', 'Création, refonte et maintenance');
  return Array.from(out.entries())
    .slice(0, 3)
    .map(([p, [l, d]]) => [p, l, d]);
}
