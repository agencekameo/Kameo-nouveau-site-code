/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://agence-kameo.fr/developpement-sur-mesure/#faq',
    inLanguage: 'fr-FR',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Pourquoi choisir un développement sur-mesure plutôt qu'un SaaS packagé ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un SaaS packagé (Shopify, HubSpot, Salesforce) va vite et coûte peu au départ, mais vous êtes locataire. Vous payez tant que vous l'utilisez, vous n'accédez pas au code, vous êtes limité aux fonctionnalités prévues par l'éditeur. Un développement sur-mesure vous rend propriétaire du code, permet des règles métier qu'aucun SaaS ne couvre (multi-tenant complexe, workflows atypiques, intégrations ERP françaises), et supprime les frais récurrents à l'usage. Rentable dès que vous dépassez ~15 000 € HT/an de licences ou que le SaaS bloque une fonctionnalité clé.",
        },
      },
      {
        '@type': 'Question',
        name: "Quel est le budget moyen d'un projet développement sur-mesure ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ça dépend fortement du périmètre. Ordres de grandeur : site e-commerce sur-mesure à partir de 12 000 € HT, marketplace multi-vendeurs à partir de 8 000 € HT, CRM sur-mesure à partir de 7 999 € HT, SaaS avec IA à partir de 8 000 € HT. Après un brief découverte gratuit, on vous envoie un devis détaillé sous 24 h avec périmètre chiffré ligne à ligne.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps prend un projet de développement sur-mesure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un site e-commerce sur-mesure : 6 à 10 semaines. Une marketplace : 10 à 16 semaines. Un CRM personnalisé : 8 à 12 semaines. Un MVP SaaS avec IA : 8 à 14 semaines. Ces délais incluent discovery, design UX, développement, recette et livraison. Nous respectons nos délais à 97 %, équipe intégrée à Paris, zéro sous-traitance, zéro chef de projet intermédiaire.',
        },
      },
      {
        '@type': 'Question',
        name: 'À qui appartient le code source à la livraison ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "À vous, à 100 %. Le code source, la base de données, les credentials d'infrastructure et la documentation technique vous sont livrés dans un dépôt Git privé qui vous appartient. Aucune clause de propriété intellectuelle, aucun abonnement caché pour continuer à utiliser votre propre application. Vous pouvez faire évoluer, migrer ou faire reprendre le projet par une autre équipe à tout moment.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que se passe-t-il après la livraison en termes de maintenance ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Inclus dans tous les forfaits : 30 jours de support technique gratuit (bugs, ajustements, formation admin), documentation Notion complète, formation d'1 h en visio. Au-delà, forfait maintenance dès 149 € HT/mois selon la criticité (mises à jour sécu, monitoring, sauvegardes, support prioritaire). Sans engagement. Vous pouvez aussi reprendre la main en interne : tout est documenté et le code est propre.",
        },
      },
      {
        '@type': 'Question',
        name: 'Travaillez-vous avec des freelances ou en interne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Uniquement en interne, dans nos bureaux du 2e arrondissement de Paris. Designer, développeur front-end, développeur back-end, expert IA et chef de projet travaillent côte à côte. Zéro sous-traitance, zéro équipe offshore, zéro plateforme freelance. Cela nous permet d'être responsables de bout en bout, de communiquer directement avec vous, et de tenir nos délais.",
        },
      },
    ],
  },
];
