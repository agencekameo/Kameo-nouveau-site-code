export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'À qui appartient mon site une fois livré ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vous, à 100%. Code, design, nom de domaine, accès admin : tout vous est cédé à la livraison finale. Aucun lock-in, aucune licence cachée, aucune redevance. Vous pouvez à tout moment migrer chez un autre hébergeur ou demander à un autre prestataire de reprendre le projet. C’est votre site.',
        },
      },
      {
        '@type': 'Question',
        name: 'Et l’hébergement et le nom de domaine, qui s’en occupe ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On gère tout pour vous si vous le souhaitez : nom de domaine + hébergement haute performance (CDN, SSL gratuit, sauvegardes quotidiennes) pour environ 15€/mois facturé annuellement. Si vous avez déjà un hébergeur, on s’adapte et on migre le site chez vous sans frais supplémentaires.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelles sont les conditions de paiement ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un acompte de 50 % pour démarrer, le solde versé à la livraison finale. Sur les projets supérieurs à 3 000€ HT, on peut échelonner en 3 fois sans frais. Tout est facturé en HT avec TVA française, par virement bancaire.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien d’aller-retours sont inclus dans le prix ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Illimités sur toutes les phases de validation (wireframes, maquettes, intégration). On ne livre que quand vous êtes 100 % satisfait. Seules les demandes hors-périmètre (ex : ajout d’une fonctionnalité non prévue au cahier des charges) feront l’objet d’un avenant chiffré et validé avant exécution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Gérez-vous aussi le SEO et la publicité en continu après la livraison ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, au-delà de la livraison : on propose des forfaits acquisition mensuels : SEO continu (audit, rédaction d’articles, netlinking), Google Ads et Meta Ads. C’est optionnel et facturé séparément à partir de 400€ HT/mois. On en discute lors de l’appel découverte si l’acquisition continue vous intéresse.',
        },
      },
      {
        '@type': 'Question',
        name: 'Sur quelle technologie est développé mon site ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Par défaut : WordPress avec un thème codé sur-mesure (pas un thème acheté), pour la rapidité d’édition côté admin et la robustesse SEO. Pour un e-commerce, on intègre WooCommerce. Pour des cas particuliers, on maîtrise l’ensemble des technologies et CMS du marché (Next.js, React, Shopify, Webflow, Framer, Astro, headless…). On choisit la stack adaptée à votre besoin, pas l’inverse.',
        },
      },
    ],
  },
];
