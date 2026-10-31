import { PROOF } from '@/lib/site';

/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://agence-kameo.fr/#faq',
    inLanguage: 'fr-FR',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Qui est Kameo ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Kameo est une agence web parisienne fondée en 2023 par Benjamin Dayan. C'est une équipe intégrée de 7 personnes, spécialisée dans deux métiers : la création de sites WordPress sur-mesure et le développement d'applications métier, c'est-à-dire des CRM, des marketplaces et des SaaS intégrant l'IA. Plus de 50 projets livrés, note Trustpilot ${PROOF.avisNote}/5 sur ${PROOF.avisNombre} avis.`,
        },
      },
      {
        '@type': 'Question',
        name: "Où est basée l'agence Kameo ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Kameo a son adresse au 9 rue des Colonnes, Paris 2e. Les rendez-vous se font en visio, sans déplacement, avec des clients à Paris et dans toute la France.",
        },
      },
      {
        '@type': 'Question',
        name: 'Kameo travaille-t-elle avec des PME ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui : Kameo s'adresse surtout aux PME, aux startups et aux indépendants, à Paris et dans toute la France. Pour eux, nos prix sont publics et fixés à l'avance, le devis arrive sous 24 h, et les deux dirigeants, Benjamin Dayan et Louison Boutet, pilotent eux-mêmes les projets, en visio, sans déplacement.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quels services propose Kameo ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Deux piliers. D'abord les sites internet : création WordPress sur-mesure dès 1 299 € HT, refonte, maintenance dès 79 € HT par mois et e-commerce. Ensuite les applications métier : CRM sur-mesure dès 7 999 € HT, marketplace dès 8 000 € HT et SaaS avec IA dès 8 000 € HT.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien coûte un site chez Kameo ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Une landing WordPress démarre à 1 299 € HT, un site vitrine à 1 999 € HT, une boutique WooCommerce à 2 999 € HT. Pour une application métier sur-mesure (CRM, marketplace, SaaS), comptez à partir de 7 999 € HT ; pour un e-commerce sur-mesure, à partir de 12 000 € HT. Le devis chiffré arrive sous 24 h après un échange découverte de 30 minutes, sans frais.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kameo travaille-t-elle avec des freelances ou en offshore ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Non. Designer, développeur, expert SEO, motion designer et chef de projet travaillent ensemble, dans une même équipe. Aucune sous-traitance, aucun offshore, aucune plateforme de freelances. Vous avez un seul interlocuteur du début à la fin.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment contacter Kameo ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Par email à contact@agence-kameo.fr, ou en réservant un rendez-vous visio de 30 minutes sans frais depuis la page contact. Nous sommes joignables du lundi au vendredi, de 9 h à 17 h, avec une réponse sous 24 h. Adresse : 9 rue des Colonnes, 75002 Paris ; les rendez-vous se font en visio, sans déplacement.',
        },
      },
    ],
  },
];
