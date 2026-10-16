/**
 * Pages WordPress : titre de la page (texte alternatif de l'image Open Graph sous Rank Math)
 * et dates de publication et de modification, relevées sur le site en ligne le 14/10/2026.
 * Utilisées pour les données structurées WebPage, les balises article:* et les sitemaps.
 * Après une modification de fond d'une page, avancer sa date « modified ».
 */
export type PageInfo = { label: string; published: string; modified: string };

export const PAGES: Record<string, PageInfo> = {
  '/': { label: 'Accueil', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-16T16:47:04+00:00' },
  '/notre-agence/': { label: 'Notre agence', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-14T10:00:00+00:00' }, // Paris uniquement (14/10/2026)
  '/benjamin-dayan/': { label: 'Benjamin Dayan — Fondateur', published: '2026-09-23T15:17:34+00:00', modified: '2026-09-23T15:17:34+00:00' },
  '/agence-wordpress-paris/': { label: 'Agence WordPress Paris', published: '2026-06-11T08:39:03+00:00', modified: '2026-10-16T16:47:04+00:00' },
  '/creation-site-wordpress/': { label: 'Création de site WordPress', published: '2026-06-11T08:39:05+00:00', modified: '2026-10-16T16:47:04+00:00' },
  '/refonte-wordpress/': { label: 'Refonte WordPress', published: '2026-06-11T08:39:06+00:00', modified: '2026-06-11T08:39:06+00:00' },
  '/maintenance-wordpress/': { label: 'Maintenance WordPress', published: '2026-06-11T08:39:07+00:00', modified: '2026-06-11T08:39:07+00:00' },
  '/expertises-branding/': { label: 'Expertises Branding', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-16T16:47:04+00:00' },
  '/expertises-motion/': { label: 'Expertises Motion Design', published: '2026-05-05T19:49:13+00:00', modified: '2026-05-05T19:49:13+00:00' },
  '/developpement-sur-mesure/': { label: 'Développement sur-mesure', published: '2026-09-18T12:15:28+00:00', modified: '2026-10-16T16:47:04+00:00' },
  '/creation-site-ecommerce/': { label: 'Création de site e-commerce', published: '2026-09-18T12:15:30+00:00', modified: '2026-09-18T12:15:30+00:00' },
  '/creation-marketplace/': { label: 'Création de marketplace', published: '2026-09-18T12:15:30+00:00', modified: '2026-09-18T12:15:30+00:00' },
  '/creation-crm-sur-mesure/': { label: 'Création de CRM sur-mesure', published: '2026-09-18T12:15:30+00:00', modified: '2026-10-16T16:47:04+00:00' },
  '/creation-saas-ia/': { label: 'Création de SaaS IA', published: '2026-09-18T12:15:31+00:00', modified: '2026-09-18T12:15:31+00:00' },
  '/realisations/': { label: 'Réalisations', published: '2026-05-05T19:49:13+00:00', modified: '2026-05-05T19:49:13+00:00' },
  '/contact/': { label: 'Contact', published: '2026-05-05T19:49:13+00:00', modified: '2026-05-05T19:49:13+00:00' },
  '/blog/': { label: 'Blog', published: '2026-05-05T19:49:13+00:00', modified: '2026-05-05T19:49:13+00:00' },
  '/mentions-legales/': { label: 'Mentions légales', published: '2026-05-05T19:49:13+00:00', modified: '2026-05-17T15:24:01+00:00' },
  '/politique-de-confidentialite/': { label: 'Politique de confidentialité', published: '2026-05-05T19:49:13+00:00', modified: '2026-10-14T14:00:00+00:00' }, // cookies (14/10/2026)
  '/landingpage/': { label: 'Landing Page', published: '2026-05-06T00:18:28+00:00', modified: '2026-10-16T16:47:04+00:00' },
  '/rdv-confirme/': { label: 'Rendez-vous confirmé', published: '2026-06-01T08:10:48+00:00', modified: '2026-06-11T11:08:43+00:00' },
};

/** Informations d'une page ; les pages de pagination du blog reprennent celles du blog. */
export function pageInfo(path: string): PageInfo | undefined {
  return PAGES[path] ?? (path.startsWith('/blog/page/') ? PAGES['/blog/'] : undefined);
}
