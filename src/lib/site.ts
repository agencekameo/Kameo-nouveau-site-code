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
  address: '9 rue des colonnes, Paris 75002',
  calendly: 'https://calendly.com/contact-agence-kameo/30min',
} as const;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/agence_kameo/',
  linkedin: 'https://www.linkedin.com/company/agence-kameo/',
  founderLinkedin: 'https://www.linkedin.com/in/benjamin-dayan/',
  trustpilot: 'https://fr.trustpilot.com/review/agence-kameo.fr',
} as const;

/* Chiffres arrêtés avec le client le 09/10/2026 (voir thème v2.10.0). */
export const PROOF = {
  projetsTotal: 50,
  avisNombre: 23,
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

export const CONTENT_UPDATED = '2026-10-16T16:47:04+00:00';

export const abs = (path = '/') => SITE_URL + (path.startsWith('/') ? path : '/' + path);
export const img = (file: string) => '/images/' + file.split('/').map(encodeURIComponent).join('/');
