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
        dateModified: '2026-10-12T10:00:00+00:00',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://agence-kameo.fr/refonte-wordpress/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Risque-t-on vraiment de perdre du SEO en refondant ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Sans méthode oui. Avec un audit exhaustif, un plan de redirections 301 et 90 jours de monitoring : non. Aucune de nos refontes WordPress n'a perdu de trafic depuis 2023.",
            },
          },
          {
            '@type': 'Question',
            name: 'Combien coûte une refonte de site WordPress ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Toujours chiffrée sur-mesure selon le périmètre. Audit gratuit en 48 h pour budget réaliste. Comptez 4 à 14 semaines de projet selon l'ampleur.",
            },
          },
          {
            '@type': 'Question',
            name: 'Que se passe-t-il si certaines URLs ne peuvent pas être conservées ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Pour chaque URL qui change, redirection 301 permanente vers l'URL nouvelle la plus pertinente. Google transfère 99 % du jus SEO.",
            },
          },
          {
            '@type': 'Question',
            name: 'Peut-on migrer un site depuis Wix, Webflow, Drupal ou autre CMS ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, environ 30 % de nos refontes sont des migrations depuis Wix, Webflow, Squarespace, Drupal, Joomla, Shopify vers WordPress.',
            },
          },
          {
            '@type': 'Question',
            name: "Que devient l'ancien site pendant les travaux de refonte ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "L'ancien site reste en ligne. La refonte est construite en parallèle sur un environnement de staging privé. Bascule en une seule fois.",
            },
          },
          {
            '@type': 'Question',
            name: 'Combien de temps avant de récupérer mes positions Google après bascule ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Avec un plan 301 maîtrisé, vous ne devriez pas perdre vos positions. Google traite les 301 en quelques jours à semaines. Trafic remonte +10 à +30 % en 3 mois.',
            },
          },
          {
            '@type': 'Question',
            name: 'Faut-il refaire tout le contenu du site ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Non. Les contenus evergreen qui rankent doivent être préservés. C'est votre capital SEO.",
            },
          },
          {
            '@type': 'Question',
            name: 'Refonte ou rafraîchissement : comment trancher ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Au moins 3 des 6 symptômes au rouge : refonte complète. Un seul symptôme : rafraîchissement ciblé. Audit gratuit en 48 h pour trancher.',
            },
          },
          {
            '@type': 'Question',
            name: 'Faites-vous le suivi après la mise en ligne ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '90 jours de monitoring Search Console inclus, 30 jours de support technique gratuit, reporting hebdomadaire. Au-delà : forfait maintenance dès 79 € HT/mois.',
            },
          },
        ],
        dateModified: '2026-10-12T10:00:00+00:00',
      },
    ],
  },
];
