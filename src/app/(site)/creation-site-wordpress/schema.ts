/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
import { identityGraphNodes } from '@/lib/schema';
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@graph': [
      ...identityGraphNodes(),
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://agence-kameo.fr/creation-site-wordpress/#breadcrumb',
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
            name: 'Création site WordPress',
            item: 'https://agence-kameo.fr/creation-site-wordpress/',
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://agence-kameo.fr/creation-site-wordpress/#service',
        name: 'Création de site WordPress sur-mesure',
        serviceType: 'Création de site WordPress',
        description:
          'Création de site WordPress à Paris : landing page, vitrine, e-commerce WooCommerce sur-mesure. Design sur-mesure, Elementor Pro ou thème codé, SEO inclus, livraison en 14 jours à 1 mois.',
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
        url: 'https://agence-kameo.fr/creation-site-wordpress/',
        isRelatedTo: {
          '@id': 'https://agence-kameo.fr/agence-wordpress-paris/',
        },
        offers: [
          {
            '@type': 'Offer',
            name: 'Landing page WordPress',
            price: '1299',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '1299',
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Site vitrine WordPress',
            price: '1999',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '1999',
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'E-commerce WordPress (WooCommerce)',
            price: '2999',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '2999',
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
        ],
        dateModified: '2026-10-31T12:00:00+00:00',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://agence-kameo.fr/creation-site-wordpress/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Que comprend exactement le tarif de 1 299 € pour une landing page WordPress ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le tarif inclut : une page WordPress sur-mesure (pas un template), le copywriting orienté conversion par notre rédacteur, le design Figma desktop et mobile, l'intégration sur WordPress, un formulaire de contact connecté, le tracking GA4 et Meta Pixel, la conformité RGPD, le SEO technique et la mise en ligne. Hors périmètre : le contenu photo/vidéo, l'hébergement (50 à 500 €/an au choix), le nom de domaine.",
            },
          },
          {
            '@type': 'Question',
            name: "Que comprend le tarif vitrine 1 999 € HT ? Combien de pages exactement ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le forfait vitrine couvre jusqu'à 5 pages validées au devis : accueil, à propos, services, blog et contact. Au-delà de 5 pages ou pour des fonctionnalités spécifiques (espace membre, multilingue, intégration CRM) : on bascule sur un devis sur-mesure. La formation d'1 h à l'édition du site est incluse.",
            },
          },
          {
            '@type': 'Question',
            name: "Que comprend le tarif e-commerce 2 999 € HT sur WooCommerce ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le forfait e-commerce couvre WooCommerce sur-mesure pour jusqu'à 50 fiches produits (catalogue manuel ou import CSV), le tunnel de commande optimisé, le paiement Stripe ou Mollie, la gestion des stocks, les fiches produits SEO-friendly, le pixel Meta + GA4 e-commerce, et la formation à la gestion catalogue. Au-delà de 50 SKU ou pour des intégrations spécifiques (ERP, marketplace, dropshipping), devis sur-mesure.",
            },
          },
          {
            '@type': 'Question',
            name: "Elementor Pro ou thème codé : comment choisissez-vous ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Selon le projet. La plupart de nos sites sont construits avec Elementor Pro, comme Défikart ou Axistone Capital : vous modifiez vous-même textes, images et pages, en visuel, et n'importe quel prestataire WordPress peut reprendre le site. Certains projets, comme DroneSpec ou Medical Market, ont un thème codé sur mesure. Dans les deux cas, le design part d'une maquette Figma créée pour vous, jamais d'un thème acheté. Notre portfolio WordPress indique la construction de chaque site.",
            },
          },
          {
            '@type': 'Question',
            name: "Que se passe-t-il si je veux ajouter des pages ou fonctionnalités en cours de projet ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Pas de problème, mais on cadre clairement : on évalue ensemble l'impact sur le périmètre, le délai et le tarif. Si l'ajout reste dans le format prévu, on l'intègre sans surcoût. Si ça dépasse, on signe un avenant écrit qui chiffre exactement le supplément. Pas de surprise sur la facture finale.",
            },
          },
          {
            '@type': 'Question',
            name: "Mon site WordPress sera-t-il facile à modifier moi-même après livraison ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, vos contenus, vos pages, votre blog, vos images : tout se modifie depuis l'administration WordPress, en visuel avec Elementor Pro sur la plupart de nos sites. La formation visio d'1 h vous donne tous les réflexes. Pour les évolutions plus techniques (nouvelle fonction, intégration CRM), notre forfait maintenance prend le relais.",
            },
          },
          {
            '@type': 'Question',
            name: "Que se passe-t-il après la livraison du site ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Inclus dans tous les forfaits : 30 jours de support technique gratuit (bug, blocage admin, micro-ajustement), formation d'1 h en visio, et sauvegarde de remise en service. Au-delà des 30 jours, notre forfait maintenance WordPress dès 79 € HT/mois prend le relais (mises à jour, sauvegardes, sécurité, support). Sans engagement.",
            },
          },
        ],
        dateModified: '2026-10-31T12:00:00+00:00',
      },
    ],
  },
];
