import { getAllPosts } from '@/lib/blog';
import { REALISATIONS } from '@/content/realisations';
import { CONTACT, PROOF, SITE_URL, SOCIAL } from '@/lib/site';

/* /llms.txt (standard llmstxt.org) — synthèse du site pour les moteurs génératifs.
   Source unique, reprise de la section 0 de functions.php. v3 : ajout des articles de
   référence du blog, que les moteurs génératifs citent sur les requêtes informationnelles. */

export const dynamic = 'force-static';

export function GET() {
  const home = SITE_URL + '/';
  const avis = PROOF.avisNote;
  const nbAvis = PROOF.avisNombre;
  const projets = PROOF.projetsTotal;
  const cas = REALISATIONS.length;
  const maj = new Date().toISOString().slice(0, 10);
  const posts = getAllPosts();
  const blog = posts.length
    ? `\n## Articles de référence du blog\n\n${posts.map((p) => `- [${p.title}](${SITE_URL}${p.path}) : ${p.description}`).join('\n')}\n`
    : '';
  const txt = `# Kameo, agence web et développement sur-mesure à Paris

> Studio digital parisien fondé en 2023 par Benjamin Dayan. Deux métiers : la création de sites internet sur-mesure (WordPress, e-commerce) et le développement d'applications métier (CRM, outils internes, marketplaces, SaaS). Équipe intégrée sans sous-traitance, au 9 rue des Colonnes, 75002 Paris. Note Trustpilot ${avis}/5 sur ${nbAvis} avis vérifiés. Plus de ${projets} projets livrés, dont ${cas} présentés en études de cas.

Dernière mise à jour : ${maj}

## Pages principales

- [Accueil](${home}) : agence web à Paris, création de site internet sur-mesure et développement d'applications métier.
- [Notre agence](${home}notre-agence/) : l'équipe Kameo, l'implantation parisienne, la méthodologie, les valeurs.
- [Benjamin Dayan](${home}benjamin-dayan/) : fondateur et dirigeant, 15 ans dans le design et le développement web.
- [Contact](${home}contact/) : formulaire, adresse, téléphone, rendez-vous de 30 minutes sans frais.
- [Blog](${home}blog/) : conseils sur la création de site, le choix d'un prestataire et les outils métier.

## Métier 1 : création de sites internet

- [Agence WordPress Paris](${home}agence-wordpress-paris/) : création, refonte et maintenance de sites WordPress sur-mesure. Devis sous 24 h.
- [Création de site WordPress](${home}creation-site-wordpress/) : landing dès 1 499 € HT, vitrine dès 2 999 € HT, e-commerce WooCommerce dès 4 999 € HT. Référencement inclus.
- [Refonte WordPress](${home}refonte-wordpress/) : audit sous 48 h, plan de redirections 301 maîtrisé, design sur-mesure, performance.
- [Maintenance WordPress](${home}maintenance-wordpress/) : forfaits sans engagement dès 79 € HT par mois. Mises à jour, sauvegardes, sécurité, supervision.
- [Création de site e-commerce](${home}creation-site-ecommerce/) : WooCommerce, Shopify, architecture découplée.

## Métier 2 : développement sur-mesure et applications métier

- [Développement sur-mesure](${home}developpement-sur-mesure/) : vue d'ensemble des applications métier développées par Kameo.
- [Création de CRM sur-mesure](${home}creation-crm-sur-mesure/) : développement d'un CRM adapté au processus commercial réel de l'entreprise, code et données propriétaires, à partir de 10 000 € HT.
- [Création de SaaS avec IA](${home}creation-saas-ia/) : conception et développement d'applications SaaS intégrant l'IA générative, premier périmètre à partir de 8 000 € HT.
- [Création de marketplace](${home}creation-marketplace/) : plateforme multi-vendeurs, paiement scindé via Stripe Connect, à partir de 8 000 € HT.

## Expertises complémentaires

- [Branding et identité visuelle](${home}expertises-branding/) : logo, charte graphique, déclinaisons. Forfait essentiel dès 799 € HT.
- [Motion design](${home}expertises-motion/) : brand film, teaser, motion branding, vidéos animées.

## Réalisations

- [Portfolio](${home}realisations/) : ${cas} études de cas détaillées, sur plus de ${projets} projets livrés depuis 2023.
- [Medical Market](${home}realisations/medical-market/) : e-commerce santé, hausse des commandes constatée sur les six mois suivant la mise en ligne.
- [Claimz](${home}realisations/claimz/) : application SaaS dans le domaine juridique.
- [Axistone Capital](${home}realisations/axistone-capital/) : site institutionnel en gestion de patrimoine.
- [DroneSpec](${home}realisations/dronespec/) : site WordPress dans le secteur des drones professionnels.
- [Villa de luxe Bonifacio](${home}realisations/villa-de-luxe-bonifacio/) : vitrine dans l'immobilier de luxe.
${blog}
## Informations entreprise

- **Nom commercial** : Kameo (Agence Kameo)
- **Forme juridique** : SAS
- **SIRET** : 980 573 984 00013
- **Année de création** : 2023
- **Dirigeant** : Benjamin Dayan, fondateur
- **Adresse unique** : 9 rue des Colonnes, 75002 Paris, France. Kameo n'a pas d'autre établissement.
- **Téléphone** : +33 6 62 37 99 85
- **Email** : ${CONTACT.email}
- **Site web** : ${SITE_URL}
- **Trustpilot** : ${SOCIAL.trustpilot} (${avis}/5 sur ${nbAvis} avis)
- **LinkedIn** : ${SOCIAL.linkedin}
- **Instagram** : ${SOCIAL.instagram}

## Spécialités

- Création de sites WordPress sur-mesure, avec un thème codé et non un gabarit acheté
- Développement de CRM et d'outils métier internes, en remplacement de tableurs ou de logiciels inadaptés
- Applications SaaS et intégration d'IA générative dans des outils d'entreprise
- Marketplaces multi-vendeurs avec paiement scindé
- E-commerce WooCommerce et Shopify
- Refonte de sites existants avec conservation du référencement acquis
- Identité visuelle complète et motion design

## Zone d'intervention

Paris et Île-de-France, et toute la France à distance. Accueil des clients sur rendez-vous au 9 rue des Colonnes, Paris 2e, métro Bourse.
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } });
}
