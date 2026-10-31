/**
 * Données structurées — port de la section 9b de functions.php (v2.10.7).
 * Mêmes entités, mêmes @id : Person #benjamin et #louison, Organization
 * #organization, LocalBusiness #localbusiness, BreadcrumbList, Blog, BlogPosting,
 * ItemList, Service + Offer, CreativeWork des réalisations.
 *
 * Identité : uniquement des faits vérifiés (mentions légales, site.ts). Pas de Review
 * ni d'AggregateRating issus de Trustpilot (avis recueillis sur un autre site, interdit
 * par les consignes Google) : Trustpilot n'apparaît qu'en sameAs. Pas d'horaires
 * d'ouverture sur l'adresse parisienne, où aucun client n'est reçu : les horaires
 * sont ceux de la joignabilité (ContactPoint.hoursAvailable).
 */
import { pageInfo } from '@/content/pages';
import { ADDRESS, COMPANY, CONTACT, HOURS, PROFILES, SITE_URL, SOCIAL, abs } from './site';

const HOME = SITE_URL + '/';
const ORG_ID = HOME + '#organization';
const LOCAL_ID = HOME + '#localbusiness';
const BENJAMIN_ID = HOME + '#benjamin';
const LOUISON_ID = HOME + '#louison';
const LOGO = abs('/images/hero.webp');
const OG_IMG = abs('/images/og-image.jpg');

type Json = Record<string, unknown>;
export type Crumb = { name: string; path: string };

/* Zone d'intervention : Paris, l'Île-de-France et le reste de la France (rendez-vous en visio). */
const areaServed = (): Json[] => [
  { '@type': 'City', name: 'Paris' },
  { '@type': 'AdministrativeArea', name: 'Île-de-France' },
  { '@type': 'Country', name: 'France' },
];

/* Adresse publique de correspondance, identique dans tous les nœuds. */
const postalAddress = (): Json => ({ '@type': 'PostalAddress', ...ADDRESS });

/* Téléphone et e-mail, joignables du lundi au vendredi de 9 h à 17 h, en français. */
const contactPoint = (): Json => ({
  '@type': 'ContactPoint',
  contactType: 'customer service',
  telephone: CONTACT.phoneE164,
  email: CONTACT.email,
  url: abs('/contact/'),
  areaServed: 'FR',
  availableLanguage: 'fr',
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [...HOURS.days],
    opens: HOURS.opens,
    closes: HOURS.closes,
  },
});

const ORG_DESCRIPTION =
  "Agence web à Paris fondée en 2023 par Benjamin Dayan : création, refonte et maintenance de sites WordPress sur-mesure (Elementor Pro ou thème codé), développement d'applications sur-mesure (CRM, marketplaces, SaaS avec IA), branding et motion design. " +
  `Équipe de ${COMPANY.teamSize} personnes ; rendez-vous en visio, sans déplacement, pour des clients à Paris, en Île-de-France et dans toute la France.`;

export const personBenjamin = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': BENJAMIN_ID,
  name: 'Benjamin Dayan',
  jobTitle: 'Fondateur et président',
  url: abs('/benjamin-dayan/'),
  image: abs('/images/benjamin.webp'),
  worksFor: { '@id': ORG_ID },
  sameAs: [SOCIAL.founderLinkedin],
  knowsAbout: ['WordPress', 'SEO', 'Design web', 'Direction artistique', 'SaaS IA', 'Motion Design'],
});

/** Directeur général (mandataire social avec Benjamin Dayan) : aucun autre attribut que ceux vérifiés. */
export const personLouison = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': LOUISON_ID,
  name: 'Louison Boutet',
  jobTitle: 'Directeur général',
  worksFor: { '@id': ORG_ID },
});

export const organization = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: COMPANY.name,
  alternateName: COMPANY.alternateName,
  legalName: COMPANY.legalName,
  url: HOME,
  logo: { '@type': 'ImageObject', url: LOGO },
  image: OG_IMG,
  description: ORG_DESCRIPTION,
  foundingDate: COMPANY.foundingDate,
  founder: { '@id': BENJAMIN_ID },
  employee: [{ '@id': BENJAMIN_ID }, { '@id': LOUISON_ID }],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: COMPANY.teamSize },
  vatID: COMPANY.vatID,
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'SIRET', value: COMPANY.siret },
    { '@type': 'PropertyValue', propertyID: 'SIREN', value: COMPANY.siren },
  ],
  address: postalAddress(),
  areaServed: areaServed(),
  knowsLanguage: 'fr',
  slogan: 'Design web stratégique et campagnes conçues pour générer des résultats.',
  knowsAbout: [
    'WordPress', 'WooCommerce', 'Elementor', 'SEO technique', 'Schema.org', 'Motion Design', 'Branding', 'SaaS',
    'React', 'Next.js', 'Claude API', 'OpenAI API', 'Stripe Connect', 'Développement sur-mesure', 'CRM sur-mesure',
    'Marketplace multi-vendeurs', 'Direction artistique',
  ],
  email: CONTACT.email,
  telephone: CONTACT.phoneE164,
  sameAs: [
    SOCIAL.instagram,
    SOCIAL.linkedin,
    SOCIAL.trustpilot,
    PROFILES.sortlistCom,
    PROFILES.pappers,
    PROFILES.sortlist,
    PROFILES.laFabriqueDuNet,
    PROFILES.codeur,
  ],
  contactPoint: contactPoint(),
});

export const localBusiness = (): Json => ({
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': LOCAL_ID,
  name: COMPANY.name,
  url: HOME,
  image: OG_IMG,
  description: ORG_DESCRIPTION,
  parentOrganization: { '@id': ORG_ID },
  telephone: CONTACT.phoneE164,
  email: CONTACT.email,
  priceRange: '€€',
  address: postalAddress(),
  areaServed: areaServed(),
});

/**
 * Les entités d'identité (Person ×2, Organization, LocalBusiness) sans @context, prêtes à
 * être insérées dans le @graph d'une page (pages du silo WordPress) : chaque @id porte
 * alors exactement les mêmes données sur tout le site.
 */
export function identityGraphNodes(): Json[] {
  return [personBenjamin(), personLouison(), organization(), localBusiness()].map((node) => {
    const copy = { ...node };
    delete copy['@context'];
    return copy;
  });
}

export const breadcrumbList = (path: string, crumbs: Crumb[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': abs(path) + '#breadcrumb',
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
});

export const blogSchema = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': abs('/blog/'),
  name: 'Blog Kameo',
  description: "Conseils et stratégies web, branding et SEO par l'agence Kameo.",
  url: abs('/blog/'),
  inLanguage: 'fr-FR',
  publisher: { '@id': ORG_ID },
});

/* Balisage des prix réellement affichés dans les pages (kameo_offre). */
function offre(min: number, max?: number): Json {
  if (max === undefined) {
    return {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: min, priceCurrency: 'EUR', valueAddedTaxIncluded: false },
    };
  }
  return { '@type': 'AggregateOffer', availability: 'https://schema.org/InStock', lowPrice: min, highPrice: max, priceCurrency: 'EUR', offerCount: 1 };
}

/* Forfait mensuel « à partir de », HT (maintenance). */
function offreMensuelle(min: number): Json {
  return {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      minPrice: min,
      priceCurrency: 'EUR',
      valueAddedTaxIncluded: false,
      unitCode: 'MON',
      unitText: 'mois',
    },
  };
}

/* Les trois formats WordPress à prix publics, HT. */
const offresWordpress = (): Json[] => [
  { ...offre(1299), name: 'Landing page WordPress' },
  { ...offre(1999), name: 'Site vitrine WordPress' },
  { ...offre(2999), name: 'E-commerce WordPress (WooCommerce)' },
];

const SERVICES: Record<string, { name: string; serviceType: string; description: string; offers?: Json | Json[] }> = {
  'agence-wordpress-paris': {
    name: 'Agence WordPress Paris',
    serviceType: 'WordPress development & SEO',
    description: 'Agence WordPress à Paris : création, refonte et maintenance de sites WordPress sur-mesure pour PME, startups et marques.',
    offers: offresWordpress(),
  },
  'creation-site-wordpress': {
    name: 'Création de site WordPress',
    serviceType: 'WordPress website creation',
    description:
      'Création de site WordPress sur-mesure : landing page, vitrine, e-commerce WooCommerce, construits avec Elementor Pro ou sur un thème codé selon le projet. SEO inclus.',
    offers: offresWordpress(),
  },
  'refonte-wordpress': {
    name: 'Refonte de site WordPress',
    serviceType: 'WordPress website redesign',
    description: 'Refonte de site WordPress avec plan de redirections 301 maîtrisé. Audit performance, SEO, UX et migration sans perte.',
  },
  'maintenance-wordpress': {
    name: 'Maintenance WordPress',
    serviceType: 'WordPress maintenance & support',
    description: 'Maintenance WordPress mensuelle : mises à jour, sauvegardes, monitoring sécurité 24/7 et support technique.',
    offers: offreMensuelle(79),
  },
  'expertises-branding': {
    name: 'Branding & identité visuelle',
    serviceType: 'Brand identity design',
    description: 'Création d’identité visuelle : logo, charte graphique, direction artistique et stratégie de marque.',
    offers: offre(499),
  },
  'expertises-motion': {
    name: 'Motion design & vidéo',
    serviceType: 'Motion graphics',
    description: 'Vidéos animées, motion design, trailers et habillages graphiques pour donner vie à vos projets.',
    offers: offre(1200, 6000),
  },
  'developpement-sur-mesure': {
    name: "Développement d'applications sur-mesure",
    serviceType: 'Custom application development',
    description:
      "Développement d'applications sur-mesure à Paris : e-commerce, marketplaces multi-vendeurs, CRM propriétaires et SaaS avec IA. Code propriétaire, hébergement en France.",
    /* Le moins cher des formats affichés sur la page : le CRM, dès 7 999 € HT. */
    offers: offre(7999),
  },
  'creation-site-ecommerce': {
    name: 'Création de site e-commerce sur-mesure',
    serviceType: 'E-commerce website development',
    description:
      "Création de boutique en ligne sur-mesure : Shopify Plus, WooCommerce, Prestashop ou headless Next.js. Tunnel optimisé, SEO intégré, catalogue jusqu'à 10 000 SKU.",
    offers: offre(2999, 50000),
  },
  'creation-marketplace': {
    name: 'Création de marketplace multi-vendeurs',
    serviceType: 'Marketplace platform development',
    description:
      'Développement de marketplace BtoC ou BtoB : onboarding vendeurs, split de paiement Stripe Connect ou Mangopay, KYC intégré, dashboard admin complet.',
    offers: offre(8000, 60000),
  },
  'creation-crm-sur-mesure': {
    name: 'Création de CRM sur-mesure',
    serviceType: 'Custom CRM development',
    description:
      'CRM sur-mesure adapté à votre pipeline commercial : contacts, tâches, deals, reporting, intégrations métier (Pennylane, Aircall, Yousign), RGPD natif, hébergement en France.',
    offers: offre(7999),
  },
  'creation-saas-ia': {
    name: 'Création de SaaS avec intelligence artificielle',
    serviceType: 'AI-powered SaaS development',
    description:
      'Développement de SaaS avec IA générative : intégration Claude/GPT, RAG sur base documentaire, agents autonomes, auth multi-tenant, billing Stripe. MVP livré en 2 mois.',
    offers: offre(8000, 60000),
  },
};

export function serviceSchema(slug: string): Json | null {
  const s = SERVICES[slug];
  if (!s) return null;
  const url = abs('/' + slug + '/');
  const out: Json = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': url + '#service',
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    provider: { '@id': ORG_ID },
    areaServed: areaServed(),
    url,
  };
  if (s.offers) out.offers = s.offers;
  return out;
}

export const itemListSchema = (
  items: { path: string; name: string }[],
  opts: { path?: string; name?: string } = {},
): Json => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': abs(opts.path ?? '/realisations/') + '#list',
  name: opts.name ?? 'Réalisations Kameo',
  numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(it.path), name: it.name })),
});

export type PostingInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  wordCount: number;
};
export const blogPosting = (p: PostingInput): Json => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': abs(p.path) + '#article',
  headline: p.title,
  description: p.description,
  image: p.image ? abs(p.image) : OG_IMG,
  datePublished: p.datePublished,
  dateModified: p.dateModified,
  author: { '@id': BENJAMIN_ID },
  publisher: { '@id': ORG_ID },
  mainEntityOfPage: { '@type': 'WebPage', '@id': abs(p.path) },
  inLanguage: 'fr-FR',
  wordCount: p.wordCount,
});

/**
 * FAQPage généré depuis les questions-réponses visibles d'un contenu (<details><summary>),
 * comme kameo_faq_jsonld_from_html() le faisait pour les pages de service : le balisage
 * décrit exactement ce que lit le visiteur.
 */
export function faqFromHtml(html: string, path: string): Json | null {
  const strip = (s: string) =>
    s
      .replace(/<[^>]*>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&#8217;|&rsquo;/g, '’')
      .replace(/&laquo;/g, '«')
      .replace(/&raquo;/g, '»')
      .replace(/&#8230;/g, '…')
      .replace(/&amp;/g, '&')
      .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
      .replace(/\s+/g, ' ')
      .trim();
  const items: Json[] = [];
  for (const m of html.matchAll(/<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi)) {
    const q = strip(m[1]);
    const a = strip(m[2]);
    if (q && a) items.push({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } });
  }
  if (!items.length) return null;
  return { '@context': 'https://schema.org', '@type': 'FAQPage', '@id': abs(path) + '#faq', inLanguage: 'fr-FR', mainEntity: items };
}

/**
 * Le bloc que le thème émettait dans le <head> de chaque page hors silo WordPress
 * (Person ×2, Organization, LocalBusiness, BreadcrumbList puis nœuds propres au type).
 * Les 4 pages du silo WordPress portent à la place leur propre @graph unifié
 * (voir identityGraphNodes() pour y reprendre les mêmes entités).
 */
export function themeSchemas(opts: {
  path: string;
  crumbs?: Crumb[] | null;
  serviceSlug?: string;
  extra?: Json[];
}): Json[] {
  const out: Json[] = [personBenjamin(), personLouison(), organization(), localBusiness()];
  if (opts.crumbs && opts.crumbs.length) out.push(breadcrumbList(opts.path, opts.crumbs));
  if (opts.extra) out.push(...opts.extra);
  if (opts.serviceSlug) {
    const s = serviceSchema(opts.serviceSlug);
    if (s) out.push(s);
  }
  return out;
}

/**
 * Graphe WebSite + WebPage qu'ajoutait Rank Math (après filtrage par le thème des
 * nœuds Person, Organization, Article et BreadcrumbList), à l'identique du site en
 * ligne : dates de la page, référence au fil d'Ariane, recherche interne sur
 * l'accueil, image principale (ImageObject) sur les articles.
 */
export type GraphImage = { url: string; width?: number; height?: number; caption?: string };

export function websiteGraph(opts: { path: string; title: string; published?: string; modified?: string; image?: GraphImage }): Json {
  const url = abs(opts.path);
  const info = pageInfo(opts.path);
  const isHome = opts.path === '/';
  const published = opts.published ?? info?.published;
  const modified = opts.modified ?? info?.modified;
  const img = opts.image ? { ...opts.image, url: abs(opts.image.url) } : null;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': HOME + '#website',
        url: SITE_URL,
        name: 'Agence Kameo',
        alternateName: COMPANY.name,
        publisher: { '@id': ORG_ID },
        inLanguage: 'fr-FR',
        ...(isHome
          ? {
              potentialAction: {
                '@type': 'SearchAction',
                target: HOME + '?s={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }
          : {}),
      },
      ...(img
        ? [
            {
              '@type': 'ImageObject',
              '@id': img.url,
              url: img.url,
              ...(img.width ? { width: String(img.width) } : {}),
              ...(img.height ? { height: String(img.height) } : {}),
              ...(img.caption ? { caption: img.caption } : {}),
              inLanguage: 'fr-FR',
            },
          ]
        : []),
      {
        '@type': 'WebPage',
        '@id': url + '#webpage',
        url,
        name: opts.title,
        ...(published ? { datePublished: published } : {}),
        ...(modified ? { dateModified: modified } : {}),
        ...(isHome ? { about: { '@id': ORG_ID } } : {}),
        isPartOf: { '@id': HOME + '#website' },
        ...(img ? { primaryImageOfPage: { '@id': img.url } } : {}),
        inLanguage: 'fr-FR',
        ...(isHome ? {} : { breadcrumb: { '@id': url + '#breadcrumb' } }),
      },
    ],
  };
}
