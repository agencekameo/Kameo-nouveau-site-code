/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
import { identityGraphNodes } from '@/lib/schema';
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@graph': [
      ...identityGraphNodes(),
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://agence-kameo.fr/refonte-wordpress/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: 'https://agence-kameo.fr/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Agence WordPress Paris',
            item: 'https://agence-kameo.fr/agence-wordpress-paris/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Refonte WordPress',
            item: 'https://agence-kameo.fr/refonte-wordpress/',
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://agence-kameo.fr/refonte-wordpress/#service',
        name: 'Refonte de site WordPress à Paris',
        serviceType: 'Refonte WordPress sans perte de SEO',
        description:
          'Refonte de site WordPress à Paris sans perdre votre SEO existant. Audit gratuit 48 h, plan de redirections 301 maîtrisé, monitoring 90 jours post-bascule.',
        provider: {
          '@id': 'https://agence-kameo.fr/#localbusiness',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Paris',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Île-de-France',
          },
        ],
        url: 'https://agence-kameo.fr/refonte-wordpress/',
        isRelatedTo: {
          '@id': 'https://agence-kameo.fr/agence-wordpress-paris/',
        },
        dateModified: '2026-10-31T12:00:00+00:00',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://agence-kameo.fr/refonte-wordpress/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Risque-t-on vraiment de perdre du SEO en refondant ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Sans méthode : oui, et c'est la première cause de chute de trafic post-refonte (changement d'URLs sans 301, contenus supprimés sans redirection, balises titre cassées, sitemap obsolète). Avec notre méthode : non. Sur l'ensemble de nos refontes WordPress livrées depuis 2023, aucune n'a perdu de trafic organique. La clé : un audit exhaustif AVANT, un plan de redirections 301 validé avec vous, et 90 jours de monitoring après bascule.",
            },
          },
          {
            '@type': 'Question',
            name: "Combien coûte une refonte de site WordPress ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Une refonte WordPress est toujours chiffrée sur-mesure selon le périmètre exact à reprendre : nombre de pages à migrer, niveau de complexité (e-commerce vs vitrine), volume de contenu, intégrations spécifiques (CRM, espace membre, multilingue). Notre audit gratuit en 48 h vous donne un budget réaliste avant tout engagement. Comptez en règle générale 4 à 14 semaines de projet selon l'ampleur.",
            },
          },
          {
            '@type': 'Question',
            name: "Que se passe-t-il si certaines URLs ne peuvent pas être conservées ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "C'est fréquent (changement d'arborescence, fusion de pages, dépublication d'anciens contenus). Pour chaque URL qui change, on met en place une redirection 301 permanente vers l'URL nouvelle la plus pertinente. Google considère la 301 comme un déménagement définitif et transfère 99 % du jus SEO vers la nouvelle URL. Les positions Google et les backlinks externes suivent automatiquement.",
            },
          },
          {
            '@type': 'Question',
            name: "Peut-on migrer un site depuis Wix, Webflow, Drupal ou autre CMS ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, environ 30 % de nos refontes sont des migrations depuis un autre CMS vers WordPress (Wix, Webflow, Squarespace, Drupal, Joomla, Shopify). La méthodologie est la même : audit du site existant, mapping des URLs, redirections 301 systématiques, reprise des contenus dans WordPress. La complexité dépend du volume de pages et du format des contenus à importer.",
            },
          },
          {
            '@type': 'Question',
            name: "Que devient l'ancien site pendant les travaux de refonte ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "L'ancien site reste en ligne et 100 % fonctionnel jusqu'à la bascule. La refonte est construite en parallèle sur un environnement de staging privé (URL non indexable par Google), où vous pouvez tester et valider chaque page. La bascule production se fait en une seule fois, en général un dimanche soir pour minimiser l'impact business, avec activation immédiate des redirections.",
            },
          },
          {
            '@type': 'Question',
            name: "Combien de temps avant de récupérer mes positions Google après bascule ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Avec un plan de redirections 301 correctement maîtrisé, vous ne devriez pas perdre vos positions au moment de la bascule. Google traite les 301 en quelques jours à quelques semaines et transfère le ranking. Sur nos refontes, le trafic Search Console reste stable la première semaine puis remonte généralement de +10 à +30 % dans les 3 mois (effet de la nouvelle perf et du SEO repensé). Si une dérive est détectée par notre monitoring, on corrige sous 24 h.",
            },
          },
          {
            '@type': 'Question',
            name: "Faut-il refaire tout le contenu du site ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Non, et c'est une mauvaise idée. Les contenus evergreen qui rankent (articles de blog qui génèrent du trafic, pages produits bien positionnées) doivent être préservés tels quels, c'est votre capital SEO. Notre travail consiste à : (1) identifier ces contenus dans l'audit, (2) les réintégrer à l'identique dans la nouvelle architecture, (3) améliorer ceux qui peuvent l'être (balises titre, méta-description, maillage), (4) reprendre les contenus datés ou inefficaces.",
            },
          },
          {
            '@type': 'Question',
            name: "Refonte ou rafraîchissement : comment trancher ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "La règle simple : si au moins 3 des 6 symptômes listés plus haut sont au rouge (lenteur + design daté + positions baissent + bugs + UX KO + plugins obsolètes), refonte complète. Si un seul symptôme domine et que le reste fonctionne, rafraîchissement ciblé (2 à 4 fois moins cher). Notre audit gratuit en 48 h vous oriente honnêtement vers la solution la plus rentable pour vous.",
            },
          },
          {
            '@type': 'Question',
            name: "Faites-vous le suivi après la mise en ligne ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, c'est central dans notre engagement. 90 jours de monitoring Search Console inclus dans tous nos contrats de refonte (suivi quotidien des positions, du trafic, des erreurs de crawl), 30 jours de support technique gratuit, et reporting hebdomadaire. Au-delà, notre forfait maintenance WordPress dès 79 € HT/mois prend le relais.",
            },
          },
        ],
        dateModified: '2026-10-31T12:00:00+00:00',
      },
    ],
  },
];
