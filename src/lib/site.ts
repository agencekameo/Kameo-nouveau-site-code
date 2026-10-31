/**
 * Données globales du site — équivalent du panneau Customizer « Kameo » du thème
 * WordPress (kameo_opt) et des « chiffres de preuve » (section 00 de functions.php).
 * Toute affirmation chiffrée du site passe par ces constantes.
 */
export const SITE_URL = 'https://agence-kameo.fr';
export const SITE_NAME = 'Agence Kameo';

export const CONTACT = {
  phone: '06 62 37 99 85',
  phoneE164: '+33662379985',
  phoneDisplayIntl: '+33 6 62 37 99 85',
  email: 'contact@agence-kameo.fr',
  /** Même écriture partout (NAP) : voir ADDRESS pour la version structurée. */
  address: '9 rue des Colonnes, 75002 Paris',
  calendly: 'https://calendly.com/contact-agence-kameo/30min',
  /** Discussion WhatsApp (même numéro que le téléphone). */
  whatsapp: 'https://wa.me/33662379985',
} as const;

/**
 * Identité de la société (mentions légales), source unique des données structurées.
 * Le SIREN est formé des 9 premiers chiffres du SIRET.
 */
export const COMPANY = {
  /** Nom commercial. */
  name: 'Kameo',
  alternateName: 'Agence Kameo',
  /** Dénomination sociale ; forme juridique : SAS. */
  legalName: 'KAMEO',
  legalForm: 'SAS',
  siret: '98057398400021',
  siren: '980573984',
  vatID: 'FR54980573984',
  foundingDate: '2023-10-11',
  /** Équipe : 6 personnes, dirigeants compris. */
  teamSize: 6,
} as const;

/**
 * Adresse publique (adresse de correspondance). Personne ne travaille à cette adresse
 * et aucun client n'y est reçu : les rendez-vous se font en visio. Le siège social
 * est à Labège (transfert à Paris en cours, voir les mentions légales).
 */
export const ADDRESS = {
  streetAddress: '9 rue des Colonnes',
  postalCode: '75002',
  addressLocality: 'Paris',
  addressRegion: 'Île-de-France',
  addressCountry: 'FR',
} as const;

/** Joignabilité par téléphone et e-mail (ce ne sont pas des horaires d'accueil). */
export const HOURS = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '09:00',
  closes: '17:00',
} as const;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/agence_kameo/',
  linkedin: 'https://www.linkedin.com/company/agence-kameo/',
  founderLinkedin: 'https://www.linkedin.com/in/benjamin-dayan/',
  trustpilot: 'https://fr.trustpilot.com/review/agence-kameo.fr',
} as const;

/**
 * Fiches officielles de l'agence (annuaires, plateformes, registre), reprises en sameAs.
 * Les avis Trustpilot ne sont jamais balisés en Review / AggregateRating : Google interdit
 * de baliser des avis recueillis sur un autre site.
 */
export const PROFILES = {
  sortlist: 'https://www.sortlist.fr/agency/kameo',
  /** Adresse historique de la fiche Sortlist, conservée. */
  sortlistCom: 'https://www.sortlist.com/agency/kameo',
  laFabriqueDuNet: 'https://www.lafabriquedunet.fr/agences/agence/kameo',
  codeur: 'https://www.codeur.com/-agencekameo',
  pappers: 'https://www.pappers.fr/entreprise/kameo-980573984',
} as const;

/* Chiffres arrêtés avec le client le 09/10/2026 (voir thème v2.10.0). */
export const PROOF = {
  projetsTotal: 50,
  avisNombre: 26,
  avisNote: '4,6',
} as const;
export const avisNoteSchema = () => PROOF.avisNote.replace(',', '.');

/* Coordonnées de l'établissement, source unique (kameo_geo). */
export const GEO = { lat: '48.8688998', lng: '2.3398863' } as const;

/* Script de suivi injecté dans le <head> de toutes les pages (kameo_head_scripts). */
export const TRACKER = {
  src: 'https://taap.it/scripts/tracker.js',
  project: 'pk_35a0d6dabc61e293c20a1f243568f00f',
} as const;

/* Date de dernière mise à jour du contenu des pages (sitemaps). À avancer quand une page change. */
/** Icône du site (mêmes fichiers et adresses que sous WordPress). */
export const SITE_ICON = '/wp-content/uploads/2026/05/cropped-favicon-dark';

/** Balise de validation de la propriété Search Console, présente sur l'accueil WordPress. */
export const GOOGLE_SITE_VERIFICATION = 'i8B4YTZYfB95QooLeJsDbIMjkJtJ-zv4_r8QuzANVw0';

export const CONTENT_UPDATED = '2026-10-31T12:00:00+00:00';

/** URL absolue d'un chemin du site ; une URL déjà absolue (images de l'outil de rédaction) est gardée telle quelle. */
export const abs = (path = '/') => (/^https?:\/\//i.test(path) ? path : SITE_URL + (path.startsWith('/') ? path : '/' + path));
export const img = (file: string) => '/images/' + file.split('/').map(encodeURIComponent).join('/');
