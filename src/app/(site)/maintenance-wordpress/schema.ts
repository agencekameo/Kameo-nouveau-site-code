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
        '@id': 'https://agence-kameo.fr/maintenance-wordpress/#breadcrumb',
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
            name: 'Maintenance WordPress',
            item: 'https://agence-kameo.fr/maintenance-wordpress/',
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://agence-kameo.fr/maintenance-wordpress/#service',
        name: 'Maintenance WordPress mensuelle à Paris',
        serviceType: 'WordPress maintenance &amp; support',
        description:
          'Maintenance WordPress à Paris : mises à jour, sauvegardes, monitoring sécurité 24/7, support technique. Forfaits dès 79 € HT/mois sans engagement.',
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
          {
            '@type': 'Country',
            name: 'France',
          },
        ],
        url: 'https://agence-kameo.fr/maintenance-wordpress/',
        isRelatedTo: {
          '@id': 'https://agence-kameo.fr/agence-wordpress-paris/',
        },
        offers: [
          {
            '@type': 'Offer',
            name: 'Maintenance Essentiel',
            price: '79',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '79',
              priceCurrency: 'EUR',
              billingDuration: 'P1M',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Maintenance Pro',
            price: '149',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '149',
              priceCurrency: 'EUR',
              billingDuration: 'P1M',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Maintenance Premium',
            price: '299',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '299',
              priceCurrency: 'EUR',
              billingDuration: 'P1M',
              valueAddedTaxIncluded: false,
            },
          },
        ],
        dateModified: '2026-10-12T10:00:00+00:00',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://agence-kameo.fr/maintenance-wordpress/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Mon site WordPress fonctionne, pourquoi payer pour de la maintenance ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Sans maintenance, votre site WordPress accumule de la dette technique : plugins obsolètes, failles, baisse de perf. Quand l'incident arrive (piratage, MAJ ratée), c'est 5 à 10 fois plus cher à corriger en urgence qu'en prévention.",
            },
          },
          {
            '@type': 'Question',
            name: "Reprenez-vous les sites WordPress que vous n'avez pas créés ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, n'importe quel thème, n'importe quel hébergeur. Audit gratuit en 48 h pour évaluer l'état du site avant entrée en maintenance.",
            },
          },
          {
            '@type': 'Question',
            name: 'Que se passe-t-il si mon site tombe en dehors des heures ouvrées ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Monitoring Pingdom détecte la panne immédiatement. SLA contractuel de 24 h ouvrées pour tous les forfaits. Forfait Premium propose un canal prioritaire avec procédure d'urgence.",
            },
          },
          {
            '@type': 'Question',
            name: "Les heures d'évolutions non utilisées sont-elles reportées ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: '1 h par mois sur les forfaits Pro et Premium, reportables sur le mois suivant uniquement. Au-delà, tarif horaire dégressif : 85 € HT/h Essentiel, 75 € HT/h Pro, 65 € HT/h Premium.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que se passe-t-il si je résilie le contrat ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Résiliation chaque fin de mois avec préavis de 15 jours. Sauvegarde complète remise + procédure de transfert + accès aux outils.',
            },
          },
          {
            '@type': 'Question',
            name: 'Faut-il être hébergé chez vous pour souscrire ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Deux options. Hébergement Kameo via notre partenariat PlanetHoster (recommandé, accès complet à toutes les fonctionnalités du forfait), ou maintenance sur votre hébergeur actuel (o2switch, OVH, WP Engine, Hostinger…) avec certaines fonctionnalités limitées car l'environnement serveur n'est pas sous notre contrôle.",
            },
          },
          {
            '@type': 'Question',
            name: 'Combien de temps gardez-vous les sauvegardes ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '30 jours Essentiel, 60 jours Pro, 90 jours Premium. Stockage externalisé chez PlanetHoster.',
            },
          },
          {
            '@type': 'Question',
            name: 'Gérez-vous les sites WooCommerce et e-commerce ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, ~30 % des sites sous contrat sont WooCommerce. Tests staging avec scénario d'achat complet, monitoring panier, sauvegardes renforcées en période commerciale.",
            },
          },
          {
            '@type': 'Question',
            name: 'Vos forfaits incluent-ils le développement de nouvelles fonctionnalités ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dans la limite des heures incluses (1 h/mois sur Pro et Premium) : oui pour les micro-fonctionnalités. Au-delà : devis dédié.',
            },
          },
        ],
        dateModified: '2026-10-12T10:00:00+00:00',
      },
    ],
  },
];
