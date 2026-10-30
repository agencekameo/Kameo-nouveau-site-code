import { getAllPostsOrRepo } from '@/lib/blog';
import { REALISATIONS } from '@/content/realisations';
import { CONTACT, CONTENT_UPDATED, PROOF, SITE_URL, SOCIAL } from '@/lib/site';

/* /llms.txt (standard llmstxt.org) — synthèse du site pour les moteurs génératifs.
   Source unique, reprise de la section 0 de functions.php. v3 : ajout des articles de
   référence du blog, que les moteurs génératifs citent sur les requêtes informationnelles. */

// régénéré à chaque publication n8n (revalidatePath), 60 s au plus sinon
export const revalidate = 60;

export async function GET() {
  const home = SITE_URL + '/';
  const avis = PROOF.avisNote;
  const nbAvis = PROOF.avisNombre;
  const projets = PROOF.projetsTotal;
  const cas = REALISATIONS.length;
  const posts = await getAllPostsOrRepo();
  // date du dernier changement réel : contenu des pages ou article le plus récent
  const maj = [CONTENT_UPDATED, ...posts.map((p) => p.modified)].sort().at(-1)!.slice(0, 10);
  const blog = posts.length
    ? `\n## Articles de référence du blog\n\n${posts.map((p) => `- [${p.title}](${SITE_URL}${p.path}) : ${p.description}`).join('\n')}\n`
    : '';
  const txt = `# Kameo, agence web et développement sur-mesure à Paris

> Agence web fondée en 2023 par Benjamin Dayan. Deux métiers : la création de sites WordPress sur-mesure à prix publics (landing 1 299 € HT, vitrine 1 999 € HT, e-commerce WooCommerce 2 999 € HT, site vitrine livré en 14 jours), construits avec Elementor Pro ou sur un thème codé selon le projet, et le développement d'applications métier (CRM, outils internes, marketplaces, SaaS). Équipe de 7 personnes : les deux dirigeants, Benjamin Dayan et Louison Boutet, pilotent les projets et accompagnent les clients en visio, partout en France. Adresse : 9 rue des Colonnes, 75002 Paris. Note Trustpilot ${avis}/5 sur ${nbAvis} avis vérifiés. Plus de ${projets} projets livrés, dont environ trois quarts de sites WordPress, et ${cas} présentés en études de cas.

Dernière mise à jour : ${maj}

## Pages principales

- [Accueil](${home}) : agence web à Paris, création de site internet sur-mesure et développement d'applications métier.
- [Notre agence](${home}notre-agence/) : l'équipe Kameo, la méthodologie, les valeurs.
- [Benjamin Dayan](${home}benjamin-dayan/) : fondateur et dirigeant de Kameo ; il pilote les projets avec Louison Boutet.
- [Contact](${home}contact/) : formulaire, adresse, téléphone, rendez-vous de 30 minutes sans frais.
- [Blog](${home}blog/) : conseils sur la création de site, le choix d'un prestataire et les outils métier.

## Métier 1 : création de sites internet

- [Agence WordPress Paris](${home}agence-wordpress-paris/) : création, refonte et maintenance de sites WordPress sur-mesure. Devis sous 24 h.
- [Création de site WordPress](${home}creation-site-wordpress/) : landing dès 1 299 € HT, vitrine dès 1 999 € HT, e-commerce WooCommerce dès 2 999 € HT. Référencement inclus.
- [Refonte WordPress](${home}refonte-wordpress/) : audit sous 48 h, plan de redirections 301 maîtrisé, design sur-mesure, performance.
- [Maintenance WordPress](${home}maintenance-wordpress/) : forfaits sans engagement dès 79 € HT par mois. Mises à jour, sauvegardes, sécurité, supervision.
- [Création de site e-commerce](${home}creation-site-ecommerce/) : WooCommerce, Shopify, architecture découplée.

## Métier 2 : développement sur-mesure et applications métier

- [Développement sur-mesure](${home}developpement-sur-mesure/) : vue d'ensemble des applications métier développées par Kameo.
- [Création de CRM sur-mesure](${home}creation-crm-sur-mesure/) : développement d'un CRM adapté au processus commercial réel de l'entreprise, code et données propriétaires, à partir de 7 999 € HT.
- [Création de SaaS avec IA](${home}creation-saas-ia/) : conception et développement d'applications SaaS intégrant l'IA générative, premier périmètre à partir de 8 000 € HT.
- [Création de marketplace](${home}creation-marketplace/) : plateforme multi-vendeurs, paiement scindé via Stripe Connect, à partir de 8 000 € HT.

## Expertises complémentaires

- [Branding et identité visuelle](${home}expertises-branding/) : logo, charte graphique, déclinaisons. Forfait essentiel dès 499 € HT.
- [Motion design](${home}expertises-motion/) : brand film, teaser, motion branding, vidéos animées.

## Réalisations

- [Portfolio](${home}realisations/) : ${cas} études de cas détaillées, sur plus de ${projets} projets livrés depuis 2023.
- [Portfolio WordPress](${home}realisations/wordpress/) : 14 sites WordPress livrés, dont 3 boutiques WooCommerce, avec secteur et construction (Elementor Pro ou thème codé).
- [Medical Market](${home}realisations/medical-market/) : e-commerce santé, hausse des commandes constatée sur les six mois suivant la mise en ligne.
- [Claimz](${home}realisations/claimz/) : application SaaS dans le domaine juridique.
- [Axistone Capital](${home}realisations/axistone-capital/) : site institutionnel en gestion de patrimoine.
- [DroneSpec](${home}realisations/dronespec/) : site WordPress dans le secteur des drones professionnels.
- [Villa de luxe Bonifacio](${home}realisations/villa-de-luxe-bonifacio/) : vitrine dans l'immobilier de luxe.
${blog}
## Informations entreprise

- **Nom commercial** : Kameo (Agence Kameo)
- **Forme juridique** : SAS
- **SIRET** : 980 573 984 00021
- **Année de création** : 2023
- **Dirigeants** : Benjamin Dayan (fondateur) et Louison Boutet (directeur général), qui sont aussi les chefs de projet
- **Siège social** : 1862 avenue La Lauragaise, 31670 Labège, France (transfert à Paris en cours)
- **Adresse à Paris** : 9 rue des Colonnes, 75002 Paris, France
- **Équipe** : 7 personnes ; rendez-vous en visio, du lundi au vendredi de 9 h à 17 h
- **Téléphone** : +33 6 62 37 99 85
- **Email** : ${CONTACT.email}
- **Site web** : ${SITE_URL}
- **Trustpilot** : ${SOCIAL.trustpilot} (${avis}/5 sur ${nbAvis} avis)
- **LinkedIn** : ${SOCIAL.linkedin}
- **Instagram** : ${SOCIAL.instagram}

## Spécialités

- Création de sites WordPress sur-mesure avec Elementor Pro ou un thème codé, à partir d'une maquette créée pour le client et non d'un gabarit acheté
- Développement de CRM et d'outils métier internes, en remplacement de tableurs ou de logiciels inadaptés
- Applications SaaS et intégration d'IA générative dans des outils d'entreprise
- Marketplaces multi-vendeurs avec paiement scindé
- E-commerce WooCommerce et Shopify
- Refonte de sites existants avec conservation du référencement acquis
- Identité visuelle complète et motion design

## Zone d'intervention

Paris, l'Île-de-France et toute la France : les rendez-vous se font en visio, sans déplacement.
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } });
}
