/**
 * Pages WordPress : titre de la page (texte alternatif de l'image Open Graph sous Rank Math)
 * et dates de publication et de modification, relevées sur le site en ligne le 14/10/2026.
 * Utilisées pour les données structurées WebPage, les balises article:* et les sitemaps.
 * Après une modification de fond d'une page, avancer sa date « modified ».
 */
export type PageInfo = { label: string; published: string; modified: string };

export const PAGES: Record<string, PageInfo> = {
  '/': { label: 'Accueil', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-31T12:00:00+00:00' }, // prix e-commerce 2 999 € (28/10/2026) ; équipe, prix du sur-mesure (30/10/2026) ; maillage, FAQ et données GEO (31/10/2026)
  '/notre-agence/': { label: 'Notre agence', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-31T12:00:00+00:00' }, // Paris uniquement (14/10/2026) ; chefs de projet (30/10/2026) ; maillage, FAQ et données GEO (31/10/2026)
  '/benjamin-dayan/': { label: 'Benjamin Dayan — Fondateur', published: '2026-09-23T15:17:34+00:00', modified: '2026-10-31T12:00:00+00:00' }, // expertise WordPress, équipe (30/10/2026) ; maillage, FAQ et données GEO (31/10/2026)
  '/agence-wordpress-paris/': { label: 'Agence WordPress Paris', published: '2026-06-11T08:39:03+00:00', modified: '2026-10-31T12:00:00+00:00' }, // délais des offres (24/10/2026), page refaite pour les réponses des IA (30/10/2026) ; maillage, FAQ et données GEO (31/10/2026)
  '/creation-site-wordpress/': { label: 'Création de site WordPress', published: '2026-06-11T08:39:05+00:00', modified: '2026-10-31T12:00:00+00:00' }, // prix e-commerce 2 999 € (28/10/2026) ; Elementor Pro, équipe (30/10/2026) ; maillage, FAQ et données GEO (31/10/2026)
  '/refonte-wordpress/': { label: 'Refonte WordPress', published: '2026-06-11T08:39:06+00:00', modified: '2026-10-31T12:00:00+00:00' }, // Elementor Pro, équipe, Défikart (30/10/2026) ; maillage, FAQ et données GEO (31/10/2026)
  '/maintenance-wordpress/': { label: 'Maintenance WordPress', published: '2026-06-11T08:39:07+00:00', modified: '2026-10-31T12:00:00+00:00' }, // équipe (30/10/2026) ; maillage, FAQ et données GEO (31/10/2026)
  '/expertises-branding/': { label: 'Expertises Branding', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-30T12:00:00+00:00' }, // délais en jours (24/10/2026) ; sans bureaux, 26 avis (30/10/2026)
  '/expertises-motion/': { label: 'Expertises Motion Design', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-30T12:00:00+00:00' }, // délais en jours (24/10/2026) ; sans bureaux, 26 avis (30/10/2026)
  '/developpement-sur-mesure/': { label: 'Développement sur-mesure', published: '2026-09-18T12:15:28+00:00', modified: '2026-10-30T12:00:00+00:00' }, // délais des offres (24/10/2026) ; sans bureaux (30/10/2026)
  '/creation-site-ecommerce/': { label: 'Création de site e-commerce', published: '2026-09-18T12:15:30+00:00', modified: '2026-10-31T12:00:00+00:00' }, // délais des offres (24/10/2026) ; maillage, FAQ et données GEO (31/10/2026)
  '/creation-marketplace/': { label: 'Création de marketplace', published: '2026-09-18T12:15:30+00:00', modified: '2026-10-24T12:00:00+00:00' }, // délais des offres (24/10/2026)
  '/creation-crm-sur-mesure/': { label: 'Création de CRM sur-mesure', published: '2026-09-18T12:15:30+00:00', modified: '2026-10-16T16:47:04+00:00' },
  '/creation-saas-ia/': { label: 'Création de SaaS IA', published: '2026-09-18T12:15:31+00:00', modified: '2026-10-24T12:00:00+00:00' }, // délais des offres (24/10/2026)
  '/realisations/': { label: 'Réalisations', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-31T12:00:00+00:00' }, // lien vers les sites WordPress (30/10/2026) ; maillage, FAQ et données GEO (31/10/2026)
  '/realisations/wordpress/': { label: 'Réalisations WordPress', published: '2026-10-30T12:00:00+00:00', modified: '2026-10-31T12:00:00+00:00' }, // portfolio WordPress (30/10/2026) ; maillage, FAQ et données GEO (31/10/2026)
  '/contact/': { label: 'Contact', published: '2026-05-05T19:49:13+00:00', modified: '2026-05-05T19:49:13+00:00' },
  '/blog/': { label: 'Blog', published: '2026-05-05T19:49:13+00:00', modified: '2026-05-05T19:49:13+00:00' },
  '/mentions-legales/': { label: 'Mentions légales', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-30T12:00:00+00:00' }, // siège, SIRET et adresse de correspondance (30/10/2026)
  '/politique-de-confidentialite/': { label: 'Politique de confidentialité', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-30T12:00:00+00:00' }, // cookies (14/10/2026), badge La Fabrique du Net (16/10/2026), Google Tag Manager (23/10/2026), Microsoft Clarity (23/10/2026), Calendly préchargé après accord sur la landing et l'accueil (24/10/2026), et au survol sur les articles (27/10/2026), Google Analytics (30/10/2026)
  '/appel-strategique/': { label: 'Appel stratégique', published: '2026-05-06T00:18:28+00:00', modified: '2026-10-28T12:00:00+00:00' }, // ex-/landingpage/ (24/10/2026) ; prix e-commerce 2 999 € (28/10/2026)
  '/rdv-confirme/': { label: 'Rendez-vous confirmé', published: '2026-06-01T08:10:48+00:00', modified: '2026-06-11T11:08:43+00:00' },
};

/** Informations d'une page ; les pages de pagination du blog reprennent celles du blog. */
export function pageInfo(path: string): PageInfo | undefined {
  return PAGES[path] ?? (path.startsWith('/blog/page/') ? PAGES['/blog/'] : undefined);
}
