/**
 * Redirections et URLs supprimées.
 *
 * 1. THEME_REDIRECTS — reprises telles quelles de la section 9b-bis de functions.php (v2.10.7).
 * 2. BLOG_PRUNING   — tri des articles d'octobre 2026 (export Search Console 12 mois) :
 *    un article supprimé redirige vers l'article ou la page de service qui répond à la même
 *    intention, pour conserver son autorité. Détail des décisions : docs/analyse-search-console.md.
 * 3. LEGACY         — anciennes URLs encore vues par Google (ancienne arborescence, brouillons
 *    Elementor, archives de catégories), jamais traitées par le thème.
 * 4. Fichiers du thème WordPress (images, polices, vidéo) servis désormais depuis /public.
 *
 * Toutes les cibles sont des pages vivantes (vérifié par migration/check-redirects.mjs) :
 * aucune chaîne de redirection.
 */

export const THEME_REDIRECTS: Record<string, string> = {
  '/blog/audit-seo-definition-methodologie': '/blog/audit-seo-technique-approfondi/',
  '/blog/guide-complet-audit-seo-etape-par-etape': '/blog/audit-seo-technique-approfondi/',
  '/blog/meilleurs-exemples-audit-seo-reussis': '/blog/audit-seo-technique-approfondi/',
  '/blog/comment-ameliorer-son-referencement-seo-guide-complet-3': '/agence-wordpress-paris/',
  '/blog/comment-choisir-agence-web-projet-2': '/creation-site-wordpress/',
  '/blog/prix-creation-site-internet-professionnel': '/creation-site-wordpress/',
  '/blog/shopify-vs-prestashop-quelle-plateforme-choisir': '/creation-site-ecommerce/',
  '/blog/shopify-guide-complet-lancer-ecommerce': '/creation-site-ecommerce/',
  '/blog/cocon-semantique-exemples-concrets-mise-en-pratique': '/agence-wordpress-paris/',
  '/blog/prestashop-guide-complet-creer-boutique': '/creation-site-ecommerce/',
  '/blog/tout-savoir-avis-clients-guide-complet': '/agence-wordpress-paris/',
  '/blog/comment-faire-analyse-mots-cles-seo-efficace-2': '/agence-wordpress-paris/',
  '/expertises/web': '/creation-site-wordpress/',
  '/blog/creer-site-internet-restaurant': '/creation-site-wordpress/',
  '/blog/comment-choisir-agence-prestashop-criteres-conseils': '/creation-site-ecommerce/',
  '/legal/terms-of-service': '/mentions-legales/',
  '/legal/privacy-policy': '/politique-de-confidentialite/',
  '/expertises/branding': '/expertises-branding/',
  '/blog/comment-faire-analyse-mots-cles-seo-efficace': '/agence-wordpress-paris/',
  '/blog/google-my-business-website-guide-complet': '/agence-wordpress-paris/',
  '/blog/quels-outils-auditer-seo-wordpress': '/agence-wordpress-paris/',
  '/blog/creer-site-internet-organisme-de-formation': '/creation-site-wordpress/',
  '/blog/creation-site-internet-par-ou-commencer': '/creation-site-wordpress/',
  '/blog/tarifs-audit-seo-combien-prevoir-2026': '/agence-wordpress-paris/',
  '/blog/comment-rediger-cahier-des-charges-site-web': '/creation-site-wordpress/',
  '/blog/meilleurs-outils-crm-pme': '/creation-crm-sur-mesure/',
  '/realisations/ma-naturo-zen': '/realisations/',
  '/blog/auditer-seo-site-ecommerce-booster-ventes': '/creation-site-ecommerce/',
  '/blog/comment-estimer-budget-projet-site-internet': '/creation-site-wordpress/',
  '/realisations/cal69': '/realisations/',
  '/blog/comment-choisir-agence-shopify-guide-complet': '/creation-site-ecommerce/',
  '/blog/prestashop-guide-complet-creer-boutique-2': '/creation-site-ecommerce/',
  '/blog/comment-ameliorer-referencement-seo-guide-complet': '/agence-wordpress-paris/',
  '/blog/comment-faire-audit-seo-technique-wordpress': '/agence-wordpress-paris/',
  '/blog/pourquoi-realiser-audit-referencement-naturel-regulierement': '/agence-wordpress-paris/',
  '/blog/meilleurs-createurs-sites-web-paris-2026': '/creation-site-wordpress/',
  '/blog/pourquoi-avocat-site-internet-professionnel': '/agence-wordpress-paris/',
  '/blog/deleguer-creation-site-internet': '/creation-site-wordpress/',
  '/realisations/auxilio-medical': '/realisations/',
  '/realisations/custom-lawyer': '/realisations/',
  '/blog/formation-google-my-business-visibilite-locale': '/agence-wordpress-paris/',
  '/blog/comment-choisir-agence-wordpress-specialisee-paris': '/agence-wordpress-paris/',
  '/blog/eviter-duplicate-content-seo': '/agence-wordpress-paris/',
  '/blog/comment-creer-logo-professionnel-entreprise-2': '/expertises-branding/',
  '/blog/comment-ameliorer-referencement-naturel-google-2': '/agence-wordpress-paris/',
  '/realisations/imperatrice-développement': '/realisations/imperatrice-developpement/',
  '/blog/comment-trouver-agence-web-paris': '/agence-wordpress-paris/',
  '/realisations/sneakers-limited': '/realisations/',
  '/blog/pourquoi-faire-appel-agence-web-site-entreprise': '/agence-wordpress-paris/',
  '/blog/comment-ameliorer-referencement-naturel-google': '/agence-wordpress-paris/',
  '/realisations/tony-moga': '/realisations/',
  '/blog/comment-auditer-seo-site-wordpress': '/agence-wordpress-paris/',
  '/blog/creer-compte-google-my-business-entreprise-2026': '/agence-wordpress-paris/',
  '/realisations/meat-butcher': '/realisations/',
  '/realisations/gold-standing': '/realisations/',
  '/realisations/cabinet-esnault': '/realisations/',
  '/blog/top-10-meilleures-agences-seo-paris-2026': '/agence-wordpress-paris/',
  '/blog/cout-maintenance-site-wordpress': '/maintenance-wordpress/',
  '/blog/maintenance-wordpress-pourquoi-cruciale': '/maintenance-wordpress/',
  // Migration de slug v1 (expertises-web → agence-wordpress-paris)
  '/expertises-web': '/agence-wordpress-paris/',
};

const A = '/blog/';
const PRE_AUDIT = A + 'pre-audit-seo-comment-realiser/';
const AUDIT_PILIER = A + 'audit-seo-technique-approfondi/';
const AUDIT_TARIFS = A + 'tarifs-audit-seo-selon-taille-site/';
const AUDIT_MODELES = A + 'modeles-audit-seo-structurer/';
const GSC = A + 'utiliser-google-search-console-audit-seo/';
const SEO_ECOM = A + 'comment-optimiser-referencement-boutique-en-ligne/';
const CHOISIR_AGENCE = A + 'criteres-choisir-agence-creation-site-web/';
const GMB_CONNEXION = A + 'connexion-google-my-business/';
const GMB_FICHE = A + 'fiche-google-my-business-pourquoi-en-creer-une/';

/** Articles supprimés lors du tri d'octobre 2026, avec leur nouvelle adresse. */
export const BLOG_PRUNING: Record<string, string> = {
  // — Cannibalisation des pages de service (même intention que la page qui vend) —
  '/blog/choisir-agence-web-wordpress-paris': '/agence-wordpress-paris/',
  '/blog/comment-choisir-agence-web-wordpress-paris': '/agence-wordpress-paris/',
  '/blog/tarif-creation-site-internet-guide': '/creation-site-wordpress/',
  '/blog/comment-obtenir-devis-fiable-site-internet': '/creation-site-wordpress/',
  '/blog/prix-site-internet-variation-agences': '/creation-site-wordpress/',
  '/blog/creer-site-internet-professionnel-paris': '/creation-site-wordpress/',
  '/blog/creer-site-internet-sur-mesure-entreprise': '/creation-site-wordpress/',
  '/blog/site-internet-sur-mesure-vs-template': '/creation-site-wordpress/',
  '/blog/site-web-sur-mesure-pme-se-demarquer': '/creation-site-wordpress/',
  '/blog/site-internet-professionnel-credibilite-pme': '/creation-site-wordpress/',
  '/blog/site-sur-mesure-therapeute': '/creation-site-wordpress/',
  '/blog/creer-site-internet-cabinet-avocats': '/creation-site-wordpress/',
  '/blog/creer-site-internet-artisan': '/creation-site-wordpress/',
  '/blog/reussir-refonte-site-wordpress': '/refonte-wordpress/',
  '/blog/refonte-site-wordpress-expert': '/refonte-wordpress/',
  '/blog/planifier-refonte-complete-site-wordpress': '/refonte-wordpress/',
  '/blog/tarifs-maintenance-wordpress-2026': '/maintenance-wordpress/',
  '/blog/comment-choisir-agence-maintenance-wordpress': '/maintenance-wordpress/',
  '/blog/activer-mode-maintenance-wordpress': '/maintenance-wordpress/',

  // — Cannibalisation entre articles : on garde le mieux placé de chaque grappe —
  // Pré-audit SEO
  '/blog/comment-preparer-pre-audit-seo-avant-refonte': PRE_AUDIT,
  '/blog/audit-seo-avant-refonte-site': PRE_AUDIT,
  // Méthode d'audit SEO (pilier : audit-seo-technique-approfondi)
  '/blog/audit-technique-seo-comment-realiser': AUDIT_PILIER,
  '/blog/audit-seo-technique-complet-site': AUDIT_PILIER,
  '/blog/comment-realiser-audit-contenu-seo-approfondi': AUDIT_PILIER,
  '/blog/comment-realiser-audit-seo-on-page-complet': AUDIT_PILIER,
  '/blog/audit-seo-definition-objectifs': AUDIT_PILIER,
  '/blog/audit-seo-definition-importance-site': AUDIT_PILIER,
  '/blog/pourquoi-realiser-audit-seo-complet-site': AUDIT_PILIER,
  '/blog/pourquoi-faire-audit-seo-2026': AUDIT_PILIER,
  '/blog/audit-seo-pourquoi-en-faire-un': AUDIT_PILIER,
  '/blog/guide-complet-audit-seo-10-etapes': AUDIT_PILIER,
  '/blog/etapes-audit-seo-efficace': AUDIT_PILIER,
  '/blog/audit-seo-complet-site-web': AUDIT_PILIER,
  '/blog/auditer-site-web-freins-referencement': AUDIT_PILIER,
  '/blog/audit-seo-gratuit-ce-quil-revele-sur-votre-site': AUDIT_PILIER,
  '/blog/comment-realiser-audit-seo-local-paris': AUDIT_PILIER,
  '/blog/audit-seo-complet-site-wordpress': AUDIT_PILIER,
  '/blog/points-cles-audit-seo-wordpress-reussi': AUDIT_PILIER,
  '/blog/meilleurs-outils-audit-seo-2026': AUDIT_PILIER,
  '/blog/comment-se-former-audit-seo-professionnel': AUDIT_PILIER,
  '/blog/comment-faire-audit-seo-local-entreprise': AUDIT_PILIER,
  // Rapport et modèles d'audit
  '/blog/elements-rapport-audit-seo': AUDIT_MODELES,
  '/blog/analyser-comprendre-rapport-audit-seo': AUDIT_MODELES,
  '/blog/creer-modele-audit-seo-personnalise': AUDIT_MODELES,
  // Suivi des performances
  '/blog/analyser-performances-seo-site-web': GSC,
  // Prix, devis et choix d'un prestataire d'audit
  '/blog/prix-audit-seo-2026': AUDIT_TARIFS,
  '/blog/demander-devis-audit-seo-personnalise': AUDIT_TARIFS,
  '/blog/choisir-freelance-audit-seo': AUDIT_TARIFS,
  '/blog/comment-faire-auditer-son-site-seo-paris': AUDIT_TARIFS,
  '/blog/comment-choisir-agence-audit-seo-paris': AUDIT_TARIFS,
  '/blog/comment-choisir-agence-audit-seo': AUDIT_TARIFS,
  // SEO e-commerce
  '/blog/comment-auditer-seo-boutique-prestashop': SEO_ECOM,
  // Choisir une agence web
  '/blog/choisir-agence-web-site-vitrine': CHOISIR_AGENCE,
  '/blog/comment-choisir-agence-web-projet': CHOISIR_AGENCE,
  '/blog/comment-choisir-agence-web-projet-site-internet': CHOISIR_AGENCE,
  '/blog/comment-trouver-agence-web-serieuse-projet-digital': CHOISIR_AGENCE,
  '/blog/pourquoi-confier-creation-site-web-professionnel': CHOISIR_AGENCE,
  '/blog/avantages-confier-site-web-agence-specialisee': CHOISIR_AGENCE,
  '/blog/creation-site-web-agence-specialisee': CHOISIR_AGENCE, // publié le 20/09/2026, aucune impression
  // Google My Business : accès au compte
  '/blog/acceder-gerer-compte-google-my-business': GMB_CONNEXION,
  '/blog/acceder-espace-google-my-business-configuration': GMB_CONNEXION,
  // Google My Business : créer et optimiser sa fiche
  '/blog/creer-fiche-google-my-business-gratuitement': GMB_FICHE,
  '/blog/creer-optimiser-page-google-my-business': GMB_FICHE,
  '/blog/configurer-google-business-profile': GMB_FICHE,
  '/blog/referencer-son-entreprise-sur-google-my-business': GMB_FICHE,
  '/blog/optimiser-page-google-business-attirer-clients': GMB_FICHE,
  '/blog/google-my-business-comment-en-tirer-le-meilleur-parti': GMB_FICHE,
  '/blog/fiche-google-business-vitrine-locale': GMB_FICHE,
  '/blog/optimiser-informations-contact-fiche-google-business': GMB_FICHE,
  '/blog/gerer-demandes-contact-google-my-business': GMB_FICHE,
  '/blog/structurer-page-google-my-business-seo-local': GMB_FICHE,
};

/** Anciennes URLs hors blog encore présentes dans la Search Console. */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // réalisation retirée du portfolio le 19/10/2026
  '/realisations/serrurier-24': '/realisations/',
  '/guide-seo-pour-tpe-pme-boostez-votre-visibilite-et-attirez-plus-de-clients': AUDIT_PILIER,
  '/les-10-erreurs-frequentes-a-eviter-lors-de-la-creation-de-votre-site-web': '/creation-site-wordpress/',
  '/refonte-de-site-internet-quand-et-pourquoi-est-ce-necessaire': '/refonte-wordpress/',
  '/logo-professionnel-ameliorer-la-credibilite-de-votre-marque': '/expertises-branding/',
  '/pourquoi-une-identite-visuelle-forte-est-essentielle-pour-votre-tpe-pme': '/expertises-branding/',
  '/limportance-de-lidentite-visuelle-pour-un-site-internet': '/expertises-branding/',
  '/site-web-pourquoi-la-maintenance-de-votre-site-web-est-cruciale': '/maintenance-wordpress/',
  '/etapes-simples-pour-maintenir-votre-site-web-a-jour-et-securise': '/maintenance-wordpress/',
  '/limportance-du-responsive-dans-le-developpement-dun-site-web': '/creation-site-wordpress/',
  '/expertises/motiondesign': '/expertises-motion/',
  '/articles': '/blog/',
  '/portfolios': '/realisations/',
  '/category/site-internet': '/blog/',
  '/category/reseaux-sociaux': '/blog/',
  '/category/charte-graphique': '/blog/',
  '/categories/site-vitrine': '/blog/',
  '/author/admin': '/benjamin-dayan/',
  '/accueil': '/',
};

/**
 * Contenus réellement supprimés, sans équivalent : 410 Gone (sortie d'index plus rapide
 * qu'un 404 et pas de soft 404 vers une page hors sujet).
 */
export const GONE: string[] = [
  // Section 9b-bis du thème (sujets hors offre ou doublons)
  '/blog/extension-navigateur-guide-complet',
  '/blog/comment-referencier-son-entreprise-sur-google',
  '/blog/top-10-meilleurs-plugins-wordpress-mise-en-page',
  '/blog/comment-choisir-agence-social-media-criteres-essentiels',
  '/blog/inbound-marketing-comment-attirer-plus-clients',
  '/blog/inbound-marketing-comment-attirer-plus-de-clients',
  '/blog/comment-reussir-campagne-emailing-conseils',
  '/blog/meilleurs-exemples-sites-wordpress-pme',
  '/blog/cout-site-internet-professionnel-sur-mesure',
  '/blog/prix-site-internet-sur-mesure',
  '/blog/guide-complet-choisir-son-cms',
  // Articles de démonstration en anglais livrés avec un ancien thème
  '/blog/landing-pages-that-convert',
  '/blog/mastering-customer-journey',
  '/blog/smart-design-drives-growth',
  // Pages de défiguration publiées lors du piratage du WordPress (13/10/2026)
  '/blog/2d75c88c8a26',
  '/blog/64931b0482a3',
  '/blog/64931b0482a3-2',
  // Brouillons Elementor et anciennes offres abandonnées (réseaux sociaux, fiche Google, publicité)
  '/elementor-5166',
  '/elementor-5099',
  '/community-management-les-bonnes-pratiques-pour-les-entreprises-locales',
  '/comment-la-gestion-des-reseaux-sociaux-boost-les-ventes-de-votre-tpe-pme',
  '/expertises/fiche-google',
  '/expertises/réseaux-sociaux',
  '/expertises/publicité',
];

/** Les trois tables dans l'ordre d'application. */
export const ALL_REDIRECTS: Record<string, string> = { ...THEME_REDIRECTS, ...BLOG_PRUNING, ...LEGACY_REDIRECTS };

/** Préfixes de l'ancien thème WordPress : images, vidéo, polices et sprite servis depuis /public. */
export const PREFIX_REDIRECTS: [string, string][] = [
  ['/wp-content/themes/kameo-theme/images/', '/images/'],
  ['/wp-content/themes/kameo-theme/video/', '/video/'],
  ['/wp-content/themes/kameo-theme/fonts/', '/fonts/'],
  ['/wp-content/themes/kameo-theme/icons.svg', '/icons.svg'],
];

/** Redirections techniques héritées de WordPress / Rank Math. */
export const TECHNICAL_REDIRECTS: Record<string, string> = {
  '/sitemap.xml': '/sitemap_index.xml',
  '/wp-sitemap.xml': '/sitemap_index.xml',
  '/blog/page/1': '/blog/',
  '/blog/feed': '/feed/',
  // anciennes adresses de la landing page Ads (404 sur le WordPress en ligne)
  '/lp-rdv': '/landingpage/',
  '/lp-rdv-v2': '/landingpage/',
  // WordPress redirige /favicon.ico vers l'icône du site
  '/favicon.ico': '/wp-content/uploads/2026/05/cropped-favicon-dark-32x32.png',
};

/** Retire les « / » finaux (boucle linéaire : la regex /\/+$/ est quadratique sur « //////x »). */
const norm = (p: string) => {
  let end = p.length;
  while (end > 1 && p.charCodeAt(end - 1) === 47) end--;
  return p.slice(0, end);
};
const TABLE = new Map<string, string>(Object.entries({ ...ALL_REDIRECTS, ...TECHNICAL_REDIRECTS }).map(([k, v]) => [norm(k), v]));
const GONE_SET = new Set(GONE.map(norm));

/** Cible d'une redirection 301 pour un chemin (décodé), ou null. */
export function redirectTarget(path: string): string | null {
  const hit = TABLE.get(norm(path));
  if (hit) return hit;
  for (const [from, to] of PREFIX_REDIRECTS) {
    if (!path.startsWith(from)) continue;
    const rest = path.slice(from.length);
    // Ni « . »/« .. », ni antislash, ni « % » (double encodage), ni « // », ni caractère de contrôle :
    // « /images/..//evil.com » serait résolu en « //evil.com », une redirection vers un autre site.
    if (/(^|\/)\.{1,2}(\/|$)|[\\%]|\/\/|[\u0000-\u001f\u007f]/.test(rest)) return null;
    return to + rest;
  }
  return null;
}

export const isGone = (path: string) => GONE_SET.has(norm(path));
