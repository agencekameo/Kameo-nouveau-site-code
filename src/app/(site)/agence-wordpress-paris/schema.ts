/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
import { identityGraphNodes } from '@/lib/schema';
import { PROOF } from '@/lib/site';
import { NB_WOOCOMMERCE, REALISATIONS_WORDPRESS } from '@/content/realisations';

export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@graph': [
      ...identityGraphNodes(),
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://agence-kameo.fr/agence-wordpress-paris/#breadcrumb',
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
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://agence-kameo.fr/agence-wordpress-paris/#service',
        name: 'Agence WordPress à Paris',
        serviceType: 'Création, refonte et maintenance de sites WordPress',
        description:
          'Agence WordPress à Paris : création, refonte et maintenance de sites WordPress sur-mesure pour PME, startups et marques exigeantes, à prix publics dès 1 299 € HT.',
        offers: [
          { '@type': 'Offer', name: 'Landing page WordPress', price: '1299', priceCurrency: 'EUR', priceSpecification: { '@type': 'PriceSpecification', price: '1299', priceCurrency: 'EUR', valueAddedTaxIncluded: false } },
          { '@type': 'Offer', name: 'Site vitrine WordPress', price: '1999', priceCurrency: 'EUR', priceSpecification: { '@type': 'PriceSpecification', price: '1999', priceCurrency: 'EUR', valueAddedTaxIncluded: false } },
          { '@type': 'Offer', name: 'E-commerce WordPress (WooCommerce)', price: '2999', priceCurrency: 'EUR', priceSpecification: { '@type': 'PriceSpecification', price: '2999', priceCurrency: 'EUR', valueAddedTaxIncluded: false } },
        ],
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
        url: 'https://agence-kameo.fr/agence-wordpress-paris/',
        dateModified: '2026-10-31T12:00:00+00:00',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://agence-kameo.fr/agence-wordpress-paris/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quel délai pour qu\'une agence WordPress livre mon site ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Comptez 14 jours pour une landing page ou un site vitrine WordPress, et 1 mois pour un e-commerce WooCommerce. Ces délais incluent la stratégie SEO, le design, le développement, la recette et la formation. Nous tenons ces délais parce que la même équipe mène tout le projet, sans intermédiaire.',
            },
          },
          {
            '@type': 'Question',
            name: 'Pourquoi choisir une agence WordPress plutôt qu\'un freelance ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Un freelance WordPress est généralement excellent sur une compétence (design OU dev OU SEO) mais doit sous-traiter le reste, ce qui rallonge les délais et fragmente la responsabilité. Une agence WordPress à Paris comme Kameo réunit design, développement, SEO et rédaction dans une même équipe : un seul interlocuteur, un projet cohérent, une garantie de continuité si quelqu\'un est en congé ou malade. Et un encadrement contractuel plus solide.',
            },
          },
          {
            '@type': 'Question',
            name: "WordPress est-il adapté au site d'une PME ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, dans la plupart des cas : environ trois quarts des sites que nous livrons sont sous WordPress. Une PME y gagne un site qu'elle peut modifier elle-même et dont elle reste propriétaire, avec un budget connu d'avance : 1 999 € HT pour un site vitrine livré en 14 jours. Pour une application métier complexe, nous recommandons plutôt un développement sur-mesure.",
            },
          },
          {
            '@type': 'Question',
            name: 'WordPress est-il vraiment adapté à un site e-commerce sérieux ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, WooCommerce, le plugin e-commerce de WordPress, propulse plus de 23 % des boutiques en ligne dans le monde. Il gère le paiement Stripe, Mollie, PayPal, les stocks multi-entrepôts, les abonnements, le multilingue, l\'export ERP. Pour des catalogues jusqu\'à plusieurs milliers de références, WooCommerce est une solution mature, performante et économique comparée à Shopify ou Magento. Au-delà de 10 000 SKU avec contraintes lourdes, nous évaluons ensemble si une autre techno serait plus adaptée.',
            },
          },
          {
            '@type': 'Question',
            name: 'Faites-vous la maintenance WordPress après la mise en ligne ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, c\'est même central dans notre approche. Un site WordPress demande des mises à jour régulières (cœur, thème, plugins), des sauvegardes externalisées, une surveillance sécurité. Nous proposons des forfaits de maintenance WordPress mensuels avec un interlocuteur dédié, du support réactif, et une enveloppe d\'évolutions incluses chaque mois. Voir notre page maintenance WordPress pour le détail.',
            },
          },
          {
            '@type': 'Question',
            name: 'Le SEO est-il vraiment inclus dans la création du site WordPress ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, et c\'est notre différenciation principale. Le SEO technique (vitesse, Schema.org, sitemap, robots.txt, balisage sémantique) et le SEO éditorial (audit mots-clés, architecture en silos, rédaction des balises et contenus optimisés) sont inclus dans tous nos sites WordPress. Nos clients voient bouger leur positionnement Google dans les 3 à 6 mois suivant la mise en ligne, preuve à l\'appui, voir les cas Nexus Games et Medical Market plus haut.',
            },
          },
          {
            '@type': 'Question',
            name: 'Avez-vous des exemples de sites WordPress réalisés ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Oui. Notre portfolio WordPress présente ${REALISATIONS_WORDPRESS.length} sites livrés, dont ${NB_WOOCOMMERCE} boutiques WooCommerce, avec pour chacun le secteur du client, la construction (Elementor Pro ou thème codé sur mesure), un lien vers le site en ligne et une étude de cas.`,
            },
          },
          {
            '@type': 'Question',
            name: "Quels sont les avis clients sur l'agence Kameo ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Kameo est noté ${PROOF.avisNote}/5 sur Trustpilot, sur ${PROOF.avisNombre} avis. Vous pouvez tous les lire sur notre page Trustpilot ; quelques-uns sont reproduits plus haut sur cette page.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Comment démarre-t-on un projet WordPress avec Kameo ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Première étape : un rendez-vous découverte de 30 minutes en visio pour comprendre votre activité, vos objectifs, votre cible, vos contraintes et votre budget. Deuxième étape : nous vous envoyons sous 24 h un devis détaillé avec planning, livrables et tarif fixe. Si ça vous convient, on lance le projet la semaine suivante. Réservez votre RDV découverte ici.',
            },
          },
        ],
        dateModified: '2026-10-31T12:00:00+00:00',
      },
    ],
  },
];
