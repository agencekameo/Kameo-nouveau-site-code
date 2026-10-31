import { getAllPostsOrRepo } from './blog';
import { REALISATIONS } from '@/content/realisations';

/* Index de la recherche interne (formulaire de la page 404). */
export type SearchDoc = { path: string; title: string; text: string; kind: 'Page' | 'Réalisation' | 'Article' };

const PAGES: SearchDoc[] = [
  ['/', 'Agence web Paris : création de site internet sur-mesure', 'Sites web haut de gamme, WordPress, e-commerce, SEO natif, devis gratuit.'],
  ['/notre-agence/', 'Notre agence', "L'équipe Kameo, agence web de 6 personnes : web, branding et motion."],
  ['/benjamin-dayan/', 'Benjamin Dayan, fondateur', 'Parcours du fondateur et président de Kameo : WordPress, SEO, direction artistique.'],
  ['/agence-wordpress-paris/', 'Agence WordPress Paris', 'Création, refonte et maintenance de sites WordPress sur-mesure.'],
  ['/creation-site-wordpress/', 'Création de site WordPress', 'Landing 1 299 €, vitrine 1 999 €, e-commerce 2 999 €. Elementor Pro ou thème codé, SEO inclus.'],
  ['/refonte-wordpress/', 'Refonte WordPress', 'Refonte sans perte de SEO, audit gratuit, plan de redirections 301.'],
  ['/maintenance-wordpress/', 'Maintenance WordPress', 'Mises à jour, sauvegardes, sécurité, support. Dès 79 € HT/mois.'],
  ['/expertises-branding/', 'Branding et identité visuelle', 'Logo, charte graphique, direction artistique dès 499 € HT.'],
  ['/expertises-motion/', 'Motion design', 'Brand film, teaser, motion branding, vidéos animées.'],
  ['/developpement-sur-mesure/', 'Développement sur-mesure', 'Applications métier : e-commerce, marketplace, CRM, SaaS avec IA.'],
  ['/creation-site-ecommerce/', 'Création de site e-commerce', 'WooCommerce, Shopify ou headless, tunnel optimisé conversion.'],
  ['/creation-marketplace/', 'Création de marketplace', 'Plateforme multi-vendeurs, Stripe Connect, KYC, commissions.'],
  ['/creation-crm-sur-mesure/', 'Création de CRM sur-mesure', 'Pipeline adapté à votre métier, intégrations, hébergement en France.'],
  ['/creation-saas-ia/', 'Création de SaaS avec IA', 'Intégration Claude et GPT, RAG, multi-tenant, billing Stripe.'],
  ['/realisations/', 'Réalisations', 'Portfolio des projets web, branding et motion design.'],
  ['/contact/', 'Contact', 'Formulaire, téléphone, email et rendez-vous Calendly.'],
  ['/blog/', 'Blog', 'Conseils web, branding et SEO.'],
].map(([path, title, text]) => ({ path, title, text, kind: 'Page' as const }));

export async function searchIndex(): Promise<SearchDoc[]> {
  const posts = await getAllPostsOrRepo();
  return [
    ...PAGES,
    ...REALISATIONS.map((r) => ({ path: `/realisations/${r.slug}/`, title: r.title, text: `${r.service} ${r.description}`, kind: 'Réalisation' as const })),
    ...posts.map((p) => ({ path: p.path, title: p.title, text: `${p.description} ${p.excerpt}`, kind: 'Article' as const })),
  ];
}

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export async function search(q: string): Promise<SearchDoc[]> {
  const terms = fold(q).split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) return [];
  return (await searchIndex())
    .map((d) => {
      const title = fold(d.title);
      const text = fold(d.text);
      let score = 0;
      for (const t of terms) {
        if (title.includes(t)) score += 3;
        if (text.includes(t)) score += 1;
      }
      return { d, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.d);
}
