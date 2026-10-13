/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://agence-kameo.fr/creation-marketplace/#faq',
    inLanguage: 'fr-FR',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel budget prévoir pour une marketplace sur-mesure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un premier périmètre démarre à 8 000 € HT. Une marketplace complète (onboarding vendeur, catalogue, panier multi-vendeur, Stripe Connect, dashboard admin) se situe autour de 25 000 € HT, et monte à 40-60 000 € HT pour une version production complète avec KYC intégré, escrow, notation vendeur, messagerie interne. La complexité du multi-tenant impose une architecture solide dès le début, pas de bricolage économique.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment fonctionne le split de paiement entre vendeurs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous intégrons Stripe Connect (ou Mangopay pour le marché FR) : chaque vendeur crée un compte connecté (via un flow d'onboarding intégré à votre marketplace), les paiements des acheteurs arrivent sur votre compte plateforme, puis Stripe reverse automatiquement à chaque vendeur son dû moins votre commission. Zéro manipulation manuelle, conformité DSP2 et lutte anti-blanchiment gérée par Stripe.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment gérer la vérification d'identité des vendeurs (KYC) ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trois options : KYC natif Stripe Connect (le plus simple, upload pièce ID + selfie via leur SDK, validation en 24 h), KYC dédié avec un partenaire spécialisé (Ubble, Onfido, Yousign) pour une expérience customisée, ou KYC manuel pour les MVP avec un dashboard admin dédié. On recommande selon votre volume attendu et votre niveau de risque.',
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on choisir un modèle de commission variable selon les vendeurs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, c'est même un des avantages du sur-mesure. Commission fixe (%), commission par palier (10 % jusqu'à 1 k€, 8 % au-dessus), commission par catégorie de produit, commission dégressive selon ancienneté, abonnement mensuel vendeur + commission réduite, offres promo temporaires. La logique est codée à votre exact besoin, un SaaS packagé de type Sharetribe ne le permet pas.",
        },
      },
      {
        '@type': 'Question',
        name: 'La marketplace peut-elle être BtoB (entreprises) ou BtoC uniquement ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les deux sont possibles. En BtoB, on ajoute : validation manuelle des vendeurs et acheteurs, tarifs négociés par contrat, devis en ligne, facturation d'entreprise avec paiement à 30 jours, comptes multi-utilisateurs par entreprise cliente. Une marketplace BtoB représente 60 % de nos projets marketplace, souvent avec un business model d'abonnement plutôt que de commission.",
        },
      },
    ],
  },
];
