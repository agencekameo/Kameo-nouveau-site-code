/**
 * Données structurées — port de la section 9b de functions.php (v2.10.7).
 * Mêmes entités, mêmes @id, mêmes valeurs : Person #benjamin, Organization
 * #organization, LocalBusiness #localbusiness, BreadcrumbList, Blog, BlogPosting,
 * ItemList, Service + Offer, CreativeWork des réalisations.
 */
import { CONTACT, GEO, SITE_URL, SOCIAL, abs } from './site';

const HOME = SITE_URL + '/';
const ORG_ID = HOME + '#organization';
const LOCAL_ID = HOME + '#localbusiness';
const BENJAMIN_ID = HOME + '#benjamin';
const LOGO = abs('/images/hero.webp');
const OG_IMG = abs('/images/og-image.jpg');

type Json = Record<string, unknown>;
export type Crumb = { name: string; path: string };

export const personBenjamin = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': BENJAMIN_ID,
  name: 'Benjamin Dayan',
  jobTitle: 'Fondateur & CEO',
  worksFor: { '@id': ORG_ID },
  sameAs: [SOCIAL.founderLinkedin],
  knowsAbout: ['WordPress', 'SEO', 'Design web', 'Direction artistique', 'SaaS IA', 'Motion Design'],
});

export const organization = (): Json => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Kameo',
  alternateName: 'Agence Kameo',
  url: HOME,
  logo: { '@type': 'ImageObject', url: LOGO },
  image: OG_IMG,
  description:
    'Agence web, branding et motion design à Paris. Création de sites internet sur-mesure, identités visuelles et vidéos animées.',
  foundingDate: '2023-10-11',
  founder: { '@id': BENJAMIN_ID },
  employee: [{ '@id': BENJAMIN_ID }],
  slogan: 'Design web stratégique et campagnes conçues pour générer des résultats.',
  knowsAbout: [
    'WordPress', 'WooCommerce', 'Elementor', 'SEO technique', 'Schema.org', 'Motion Design', 'Branding', 'SaaS',
    'React', 'Next.js', 'Claude API', 'OpenAI API', 'Stripe Connect', 'Développement sur-mesure', 'CRM sur-mesure',
    'Marketplace multi-vendeurs',
  ],
  email: CONTACT.email,
  telephone: CONTACT.phoneE164,
  sameAs: [
    SOCIAL.instagram,
    SOCIAL.linkedin,
    SOCIAL.trustpilot,
    'https://www.sortlist.com/agency/kameo',
    'https://www.pappers.fr/entreprise/kameo-980573984',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT.phoneE164,
    email: CONTACT.email,
    contactType: 'customer service',
    areaServed: 'FR',
    availableLanguage: ['French', 'English'],
  },
});

export const localBusiness = (): Json => ({
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': LOCAL_ID,
  name: 'Kameo, agence web à Paris',
  url: HOME,
  image: OG_IMG,
  parentOrganization: { '@id': ORG_ID },
  telephone: CONTACT.phoneE164,
  email: CONTACT.email,
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9 rue des Colonnes',
    addressLocality: 'Paris',
    postalCode: '75002',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
  areaServed: [
    { '@type': 'City', name: 'Paris' },
    { '@type': 'Country', name: 'France' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
});

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

const SERVICES: Record<string, { name: string; serviceType: string; description: string; offers?: Json }> = {
  'agence-wordpress-paris': {
    name: 'Agence WordPress Paris',
    serviceType: 'WordPress development & SEO',
    description: 'Agence WordPress à Paris : création, refonte et maintenance de sites WordPress sur-mesure pour PME, startups et marques.',
  },
  'creation-site-wordpress': {
    name: 'Création de site WordPress',
    serviceType: 'WordPress website creation',
    description: 'Création de site WordPress sur-mesure : landing page, vitrine, e-commerce WooCommerce. Thème custom, SEO inclus.',
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
  },
  'expertises-branding': {
    name: 'Branding & identité visuelle',
    serviceType: 'Brand identity design',
    description: 'Création d’identité visuelle : logo, charte graphique, direction artistique et stratégie de marque.',
    offers: offre(799),
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
    offers: offre(8000),
  },
  'creation-site-ecommerce': {
    name: 'Création de site e-commerce sur-mesure',
    serviceType: 'E-commerce website development',
    description:
      "Création de boutique en ligne sur-mesure : Shopify Plus, WooCommerce, Prestashop ou headless Next.js. Tunnel optimisé, SEO baked-in, catalogue jusqu'à 10 000 SKU.",
    offers: offre(12000, 40000),
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
    offers: offre(10000),
  },
  'creation-saas-ia': {
    name: 'Création de SaaS avec intelligence artificielle',
    serviceType: 'AI-powered SaaS development',
    description:
      'Développement de SaaS avec IA générative : intégration Claude/GPT, RAG sur base documentaire, agents autonomes, auth multi-tenant, billing Stripe. MVP livré en 8 à 12 semaines.',
    offers: offre(8000, 60000),
  },
};

export function serviceSchema(slug: string): Json | null {
  const s = SERVICES[slug];
  if (!s) return null;
  const out: Json = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'France' },
    url: abs('/' + slug + '/'),
  };
  if (s.offers) out.offers = s.offers;
  return out;
}

export const itemListSchema = (items: { path: string; name: string }[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': abs('/realisations/') + '#list',
  name: 'Réalisations Kameo',
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
 * (Person, Organization, LocalBusiness, BreadcrumbList puis nœuds propres au type).
 * Les 4 pages du silo WordPress portent à la place leur propre @graph unifié.
 */
export function themeSchemas(opts: {
  path: string;
  crumbs?: Crumb[] | null;
  serviceSlug?: string;
  extra?: Json[];
}): Json[] {
  const out: Json[] = [personBenjamin(), organization(), localBusiness()];
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
 * nœuds Person, Organization, Article et BreadcrumbList).
 */
export function websiteGraph(opts: { path: string; title: string; description?: string }): Json {
  const url = abs(opts.path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': HOME + '#website',
        url: HOME,
        name: 'Agence Kameo',
        publisher: { '@id': ORG_ID },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'WebPage',
        '@id': url + '#webpage',
        url,
        name: opts.title,
        ...(opts.description ? { description: opts.description } : {}),
        isPartOf: { '@id': HOME + '#website' },
        inLanguage: 'fr-FR',
      },
    ],
  };
}
