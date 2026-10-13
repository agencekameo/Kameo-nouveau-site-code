/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://agence-kameo.fr/creation-site-ecommerce/#faq',
    inLanguage: 'fr-FR',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quel est le budget d'un site e-commerce sur-mesure ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un site e-commerce sur-mesure démarre à 12 000 € HT pour un catalogue jusqu'à 100 produits (Shopify Plus ou WooCommerce custom), monte à 25-40 000 € HT pour un catalogue riche multi-catégories avec ERP connecté, et 50 000 €+ pour un headless Next.js/Medusa avec expérience premium. Devis détaillé sous 24 h après brief découverte.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle plateforme e-commerce choisir : Shopify, WooCommerce ou headless ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ça dépend de votre volume et ambition. Shopify : rapide à monter, très propre pour BtoC jusqu'à 500 k€/an, mais coût par transaction et rigidité sur les règles métier. WooCommerce : plus souple, meilleure maîtrise du SEO, idéal jusqu'à 1 M€/an quand vous voulez posséder votre stack. Headless (Next.js + Medusa/Sanity) : performance maximale, expérience premium, quand vous visez 1 M€+ et un site UX/branding fort. On recommande la stack après brief.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps pour livrer un site e-commerce ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un catalogue simple (jusqu'à 100 SKU) : 6 semaines. Un catalogue riche multi-catégories : 8 à 10 semaines. Un headless Next.js premium : 10 à 14 semaines. Ces délais incluent stratégie, design UX du tunnel, intégration technique, connexion moyens de paiement, tests, formation admin.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le tunnel de conversion sera-t-il optimisé ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, c'est au cœur de la mission. Nous designons le tunnel en 3 clics maximum, avec panier persistant, checkout en une page, indicateurs de progression, upsells intelligents, relances abandon panier via email/SMS. On mesure le taux de conversion avant/après et on itère les 30 premiers jours pour maximiser le revenu par visiteur.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment fonctionne l'intégration avec ma comptabilité et mon ERP ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On connecte le back-office e-commerce à votre outil de comptabilité (Pennylane, Sage, EBP, QuickBooks) via API ou webhook pour synchroniser automatiquement les commandes, factures et remises. Idem pour votre ERP (Odoo, SAP, Cegid) : stock, catalogue et statuts commande restent alignés en temps réel. Zéro double saisie.',
        },
      },
    ],
  },
];
