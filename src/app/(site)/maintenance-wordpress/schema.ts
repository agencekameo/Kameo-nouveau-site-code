/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
import { identityGraphNodes } from '@/lib/schema';
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@graph': [
      ...identityGraphNodes(),
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
        serviceType: 'Maintenance et support de sites WordPress',
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
        dateModified: '2026-10-31T12:00:00+00:00',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://agence-kameo.fr/maintenance-wordpress/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Combien coûte la maintenance d'un site WordPress ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Nous proposons trois forfaits mensuels, sans engagement : Essentiel à 79 € HT par mois (mises à jour, sauvegardes, sécurité et support), Pro à 149 € HT par mois (avec en plus 1 h de développement par mois) et Premium à 299 € HT par mois (avec en plus un suivi SEO mensuel). La résiliation est possible chaque mois, avec un préavis de 15 jours.",
            },
          },
          {
            '@type': 'Question',
            name: "Mon site WordPress fonctionne, pourquoi payer pour de la maintenance ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "\"Fonctionne\" est un état temporaire. Sans maintenance régulière, votre site WordPress accumule de la dette technique invisible : plugins obsolètes, base de données qui gonfle, failles de sécurité non corrigées, baisse progressive des Core Web Vitals. Le risque devient visible quand l'incident arrive (piratage, mise à jour qui casse tout, perf qui chute), et il coûte alors 5 à 10 fois plus cher à corriger en urgence qu'en prévention. La maintenance, c'est l'assurance vie de votre site.",
            },
          },
          {
            '@type': 'Question',
            name: "Reprenez-vous les sites WordPress que vous n'avez pas créés ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, c'est même une part importante de nos contrats de maintenance. Site créé par une autre agence, un freelance ou vous-même, n'importe quel thème (Avada, Divi, Elementor, custom…) sur n'importe quel hébergeur : on s'adapte à l'existant. Premier réflexe : un audit gratuit en 48 h pour comprendre dans quel état est le site et identifier les éventuels correctifs préalables avant l'entrée en maintenance.",
            },
          },
          {
            '@type': 'Question',
            name: "Que se passe-t-il si mon site tombe en dehors des heures ouvrées ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Notre monitoring uptime (Pingdom) détecte la panne immédiatement et nous alerte. Notre SLA contractuel est de 24 h ouvrées pour tous les forfaits. En pratique sur les pannes critiques, nous intervenons souvent plus vite, mais c'est l'engagement contractuel maximum. Pour les sites stratégiques nécessitant une réactivité 24/7 hors heures ouvrées, le forfait Premium propose un canal prioritaire avec procédure d'urgence.",
            },
          },
          {
            '@type': 'Question',
            name: "Les heures d'évolutions non utilisées sont-elles reportées ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Les heures incluses (1 h par mois sur les forfaits Pro et Premium) sont reportables sur le mois suivant uniquement (pas au-delà). Cela permet de lisser sur 2 mois si vous avez besoin de capitaliser pour une plus grosse évolution. Au-delà du quota inclus, les heures supplémentaires sont facturées à un tarif horaire dégressif selon le forfait (85 € HT/h sur Essentiel, 75 € HT/h sur Pro, 65 € HT/h sur Premium).",
            },
          },
          {
            '@type': 'Question',
            name: "Que se passe-t-il si je résilie le contrat ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Résiliation chaque fin de mois avec un préavis de 15 jours. Aucune pénalité. À la sortie, on vous remet une sauvegarde complète et fraîche de votre site, une procédure de transfert vers votre nouveau prestataire (ou vers vous), et les accès complets à tous les outils mis en place (monitoring, sauvegardes externalisées). Nous croyons que vous devez rester parce que vous êtes satisfaits, pas parce que vous êtes coincés.",
            },
          },
          {
            '@type': 'Question',
            name: "Faut-il être hébergé chez vous pour souscrire ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Deux options. Option recommandée, hébergement Kameo via notre partenariat PlanetHoster : vous bénéficiez de l'intégralité des fonctionnalités du forfait (staging dédié, sauvegardes externalisées contrôlées, monitoring fin, intervention infra prioritaire en cas d'incident serveur). Option alternative, vous restez chez votre hébergeur actuel (o2switch, OVH, WP Engine, Hostinger…) : la maintenance reste possible, mais certaines fonctionnalités liées au serveur (staging automatisé, contrôle profond des perfs, intervention infra en cas de panne) seront limitées ou indisponibles, puisque l'environnement n'est pas sous notre contrôle. On cadre ensemble au brief le scénario qui colle à votre besoin.",
            },
          },
          {
            '@type': 'Question',
            name: "Combien de temps gardez-vous les sauvegardes ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Sauvegardes quotidiennes externalisées (hors de votre hébergeur, externalisé chez PlanetHoster). 30 jours sur Essentiel, 60 jours sur Pro, 90 jours sur Premium. Vérification d'intégrité automatique chaque semaine pour s'assurer que les sauvegardes sont restaurables. À la résiliation du contrat, on vous remet la dernière sauvegarde complète.",
            },
          },
          {
            '@type': 'Question',
            name: "Gérez-vous les sites WooCommerce et e-commerce ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, environ 30 % des sites sous contrat avec nous sont des e-commerces WooCommerce. Notre approche est la même mais avec quelques spécificités : mises à jour testées en environnement de staging avec scénario complet d'achat (pour vérifier que le tunnel de commande reste fonctionnel), monitoring spécifique du panier et du paiement, sauvegardes plus fréquentes en période commerciale (Black Friday, soldes). Le forfait Pro ou Premium est généralement recommandé pour un e-commerce sérieux.",
            },
          },
          {
            '@type': 'Question',
            name: "Vos forfaits incluent-ils le développement de nouvelles fonctionnalités ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Dans la limite des heures de développement incluses (1 h/mois sur les forfaits Pro et Premium) : oui, on développe des micro-fonctionnalités (nouveau formulaire, nouvelle section sur une page, intégration d'un widget tiers, ajustement UX). Pour les grosses fonctionnalités (refonte d'une section, intégration CRM, espace membre, multilingue) : on chiffre le développement dans un devis dédié hors forfait.",
            },
          },
        ],
        dateModified: '2026-10-31T12:00:00+00:00',
      },
    ],
  },
];
