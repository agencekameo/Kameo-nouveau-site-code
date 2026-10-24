/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le prix d’une identité visuelle complète à Paris ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chez Kameo, le branding démarre à 499€ HT (logo + charte essentielle), 999€ HT pour un branding complet (charte étendue, déclinaisons, bannières réseaux). Pour une refonte de marque complète ou un naming, on établit un devis sur-mesure après l’appel découverte. Échelonnement 3× sans frais possible au-delà de 3 000€ HT.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps prend la création d’une identité de marque ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'De 14 à 28 jours selon la complexité : 14 jours pour une identité essentielle (logo + charte), 21 à 28 jours pour un branding complet avec déclinaisons et système graphique. Les délais sont engagés par écrit dans le devis, avec validations par étapes (moodboards, propositions logo, finalisation).',
        },
      },
      {
        '@type': 'Question',
        name: 'Que contient exactement la charte graphique livrée ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vous recevez : fichiers natifs (Illustrator, Figma) + exports finaux (PNG, SVG, PDF, EPS), guidelines d’usage (typographies, palette, espaces, déclinaisons) sous forme de PDF, ainsi que les déclinaisons clés (carte de visite, signature mail, bannières LinkedIn / Instagram / Facebook au bon format). Tout est cédé sans licence cachée.',
        },
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous une agence branding parisienne ? Travaillez-vous à distance ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, Kameo est une agence branding et création graphique située à Paris, au 9 rue des Colonnes (Paris 2e). Nous accueillons nos clients en RDV physique pour les ateliers d’immersion sur Paris et Île-de-France, et travaillons en 100% visio pour les clients en région et à l’international.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de propositions de logo allez-vous me présenter ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Selon l’offre : 2 propositions de logo pour le branding essentiel, 3 propositions pour le branding complet. Chaque proposition est argumentée stratégiquement (intention, références, positionnement). Vous choisissez une direction, on raffine ensuite jusqu’à validation finale, aller-retours illimités sur la version sélectionnée.',
        },
      },
      {
        '@type': 'Question',
        name: 'Puis-je commander uniquement un logo, sans la charte graphique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Techniquement oui, mais on le déconseille fortement. Un logo seul, sans système graphique cohérent (typographies, palette, déclinaisons), perd 80% de son impact dès qu’il est utilisé hors contexte. Notre offre essentielle à 499€ HT inclut logo + charte minimale pour garantir une cohérence visuelle dès le J1.',
        },
      },
    ],
  },
];
