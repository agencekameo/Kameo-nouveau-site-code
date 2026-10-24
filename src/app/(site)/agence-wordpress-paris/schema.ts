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
        serviceType: 'WordPress development, SEO &amp; maintenance',
        description:
          'Agence WordPress à Paris : création, refonte et maintenance de sites WordPress sur-mesure pour PME, startups et marques exigeantes. Zéro sous-traitance.',
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
        dateModified: '2026-06-11T08:39:03+00:00',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://agence-kameo.fr/agence-wordpress-paris/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Combien coûte une agence WordPress à Paris ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chez Kameo, une création WordPress démarre à 1 299 € HT. Tarifs détaillés par format (landing, vitrine, e-commerce) sur la page Création WordPress. Refonte et maintenance ont leurs propres grilles tarifaires.',
            },
          },
          {
            '@type': 'Question',
            name: "Quel délai pour qu'une agence WordPress livre mon site ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: '14 jours pour une landing page ou un site vitrine WordPress, 1 mois pour un e-commerce WooCommerce.',
            },
          },
          {
            '@type': 'Question',
            name: "Pourquoi choisir une agence WordPress plutôt qu'un freelance ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Une agence WordPress regroupe designer, développeur, expert SEO et rédacteur sous le même toit : un seul interlocuteur, un projet cohérent, une garantie de continuité.',
            },
          },
          {
            '@type': 'Question',
            name: 'WordPress est-il adapté à un site e-commerce sérieux ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, WooCommerce propulse plus de 23 % des boutiques en ligne mondiales. Pour des catalogues jusqu'à plusieurs milliers de références, c'est une solution mature et économique.",
            },
          },
          {
            '@type': 'Question',
            name: 'Faites-vous la maintenance WordPress après la mise en ligne ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, nous proposons des forfaits de maintenance WordPress mensuels avec interlocuteur dédié, support réactif et enveloppe d'évolutions incluses.",
            },
          },
          {
            '@type': 'Question',
            name: 'Le SEO est-il vraiment inclus dans la création du site WordPress ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, SEO technique (vitesse, Schema.org, sitemap) et SEO éditorial (audit mots-clés, architecture en silos, rédaction optimisée) sont inclus.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment démarre-t-on un projet WordPress avec Kameo ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Un RDV découverte de 30 min (gratuit). Sous 24 h vous recevez un devis détaillé avec planning, livrables et tarif fixe. Si ça convient, on lance le projet la semaine suivante.',
            },
          },
        ],
        dateModified: '2026-06-11T08:39:03+00:00',
      },
    ],
  },
];
