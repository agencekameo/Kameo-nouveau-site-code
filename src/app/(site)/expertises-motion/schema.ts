/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Combien coûte une vidéo motion design en 2026 ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le prix dépend du format et du niveau d’animation. À titre indicatif : teaser/reel 30s à partir de ~1 200€ HT, brand film 60-90s entre 3 000 et 6 000€ HT, motion branding complet (intro + outro + assets sociaux) sur devis. Chaque projet est cadré précisément lors de l’appel découverte pour éviter tout devis surprise.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps prend la création d’une vidéo motion ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '14 à 21 jours pour un teaser ou reel court, 28 à 42 jours pour un brand film complet (script + storyboard + animation + voix off + montage). Les délais sont engagés dans le devis avec jalons de validation à chaque étape (storyboard, animatique, V1, livraison finale).',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels formats vidéo sont livrés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On livre votre vidéo dans tous les formats nécessaires pour vos canaux de diffusion : 16:9 horizontal (YouTube, site web, présentation), 9:16 vertical (Instagram Reels, TikTok, Shorts, Stories), 1:1 carré (LinkedIn, Facebook feed). Versions avec/sans sous-titres incluses pour la diffusion sociale.',
        },
      },
      {
        '@type': 'Question',
        name: 'La voix off et la musique sont-elles incluses ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour les brand films et trailers, oui : casting voix off pro (FR / anglais / autres langues sur demande), musique sous licence commerciale et sound design sur-mesure inclus dans le devis. Pour un teaser purement visuel, la musique est optionnelle. Tous les droits sont cédés à votre marque, sans royalties à long terme.',
        },
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous une agence motion design parisienne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kameo a son adresse à Paris, au 9 rue des Colonnes (Paris 2e), et son équipe travaille à distance. Nos motion designers travaillent en interne, sans sous-traitance. Nous accompagnons des clients à Paris, en France et à l’international, en visio.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pouvez-vous décliner une charte graphique existante en motion design ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bien sûr, c’est même un cas très fréquent. Si vous avez déjà une charte graphique (logo, palette, typo), notre équipe l’extend en motion : système d’animation cohérent du logo, transitions signature, comportements typographiques, motion guidelines. Vous obtenez un motion branding qui prolonge votre identité statique sans la trahir.',
        },
      },
    ],
  },
];
