/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://agence-kameo.fr/#benjamin',
        name: 'Benjamin Dayan',
        jobTitle: 'Fondateur & CEO',
        worksFor: {
          '@id': 'https://agence-kameo.fr/#organization',
        },
        sameAs: ['https://www.linkedin.com/in/benjamin-dayan/'],
        knowsAbout: ['WordPress', 'SEO', 'Design web', 'Direction artistique', 'SaaS IA', 'Motion Design'],
      },
      {
        '@type': 'Organization',
        '@id': 'https://agence-kameo.fr/#organization',
        name: 'Kameo',
        alternateName: 'Agence Kameo',
        url: 'https://agence-kameo.fr/',
        logo: 'https://agence-kameo.fr/images/hero.webp',
        foundingDate: '2023-10-11',
        founder: {
          '@id': 'https://agence-kameo.fr/#benjamin',
        },
        employee: [
          {
            '@id': 'https://agence-kameo.fr/#benjamin',
          },
        ],
        knowsAbout: [
          'WordPress',
          'WooCommerce',
          'Elementor',
          'SEO technique',
          'Schema.org',
          'Motion Design',
          'Branding',
          'SaaS',
          'React',
          'Next.js',
          'Claude API',
          'OpenAI API',
          'Stripe Connect',
          'Développement sur-mesure',
          'CRM sur-mesure',
          'Marketplace multi-vendeurs',
          'Direction artistique',
        ],
        slogan: 'Design web stratégique et campagnes conçues pour générer des résultats.',
        sameAs: [
          'https://www.linkedin.com/company/agence-kameo/',
          'https://fr.trustpilot.com/review/agence-kameo.fr',
          'https://www.instagram.com/agence_kameo/',
          'https://www.sortlist.com/agency/kameo',
          'https://www.pappers.fr/entreprise/kameo-980573984',
        ],
      },
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': 'https://agence-kameo.fr/#localbusiness',
        name: 'Kameo',
        url: 'https://agence-kameo.fr/',
        image: 'https://agence-kameo.fr/images/hero.webp',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '9 rue des Colonnes',
          addressLocality: 'Paris',
          postalCode: '75002',
          addressRegion: 'Île-de-France',
          addressCountry: 'FR',
        },
        telephone: '+33662379985',
        priceRange: '€€',
        areaServed: [
          {
            '@type': 'City',
            name: 'Paris',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Île-de-France',
          },
          {
            '@type': 'Country',
            name: 'France',
          },
        ],
        sameAs: ['https://www.linkedin.com/company/agence-kameo/', 'https://fr.trustpilot.com/review/agence-kameo.fr'],
      },
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
        dateModified: '2026-10-30T12:00:00+00:00',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://agence-kameo.fr/agence-wordpress-paris/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Combien coûte la création d\'un site WordPress par une agence à Paris ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Une création WordPress sur-mesure chez Kameo démarre à 1 299 € HT. Le prix exact dépend du format (landing, vitrine, e-commerce), du nombre de pages, du niveau d\'ambition graphique, des intégrations spécifiques (CRM, paiement, multilingue) et du contenu à rédiger. Voir les 3 formats détaillés avec tarifs sur la page Création WordPress.',
            },
          },
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
              text: 'Un freelance WordPress est généralement excellent sur une compétence (design OU dev OU SEO) mais doit sous-traiter le reste, ce qui rallonge les délais et fragmente la responsabilité. Une agence WordPress à Paris comme Kameo réunit designer, développeur, expert SEO et rédacteur dans une même équipe : un seul interlocuteur, un projet cohérent, une garantie de continuité si quelqu\'un est en congé ou malade. Et un encadrement contractuel plus solide.',
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
            name: 'Comment démarre-t-on un projet WordPress avec Kameo ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Première étape : un rendez-vous découverte de 30 minutes en visio pour comprendre votre activité, vos objectifs, votre cible, vos contraintes et votre budget. Deuxième étape : nous vous envoyons sous 24 h un devis détaillé avec planning, livrables et tarif fixe. Si ça vous convient, on lance le projet la semaine suivante. Réservez votre RDV découverte ici.',
            },
          },
        ],
        dateModified: '2026-10-30T12:00:00+00:00',
      },
    ],
  },
];
