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
        name: 'Kameo, agence web à Paris',
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
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '48.8688998',
          longitude: '2.3398863',
        },
        telephone: '+33662379985',
        priceRange: '€€€',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00',
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
          {
            '@type': 'Country',
            name: 'France',
          },
        ],
        sameAs: ['https://www.linkedin.com/company/agence-kameo/', 'https://fr.trustpilot.com/review/agence-kameo.fr'],
      },
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
          'Création de site WordPress à Paris : landing page, vitrine, e-commerce WooCommerce sur-mesure. Thème custom, SEO inclus, livraison en 2 semaines à 1 mois.',
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
            price: '3999',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '3999',
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
        ],
        dateModified: '2026-06-11T08:39:05+00:00',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://agence-kameo.fr/creation-site-wordpress/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Que comprend exactement le tarif de 1 299 € pour une landing page WordPress ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Page sur-mesure, copywriting, design Figma, dev sur thème custom, formulaire, tracking GA4 + Meta Pixel, RGPD, SEO technique et mise en ligne. Hors périmètre : photos/vidéos, hébergement, nom de domaine.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que comprend le tarif vitrine 1 999 € HT ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Jusqu'à 5 pages, thème WordPress sur-mesure, architecture SEO en silos, blog Gutenberg, formation 1 h, tracking, RGPD. Au-delà : devis sur-mesure.",
            },
          },
          {
            '@type': 'Question',
            name: 'Que comprend le tarif e-commerce 3 999 € HT sur WooCommerce ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "WooCommerce jusqu'à 50 fiches produits, tunnel optimisé, Stripe/Mollie, fiches SEO, pixel e-commerce, formation gestion catalogue. Au-delà : devis sur-mesure.",
            },
          },
          {
            '@type': 'Question',
            name: "Pourquoi un thème WordPress sur-mesure plutôt qu'Elementor ou Divi ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Un thème custom génère 70 % de poids en moins, charge sous 1,5 s, est mieux référencé et facile à faire évoluer. Les page-builders plombent les Core Web Vitals.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que se passe-t-il après la livraison ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '30 jours de support gratuit, formation Gutenberg 1 h en visio, documentation Notion. Au-delà : forfait maintenance dès 79 € HT/mois sans engagement.',
            },
          },
        ],
        dateModified: '2026-06-11T08:39:05+00:00',
      },
    ],
  },
];
