/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://agence-kameo.fr/creation-saas-ia/#faq',
    inLanguage: 'fr-FR',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel budget pour un MVP de SaaS avec IA ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un premier périmètre démarre à 8 000 € HT. Un MVP complet (auth multi-tenant, prompt engineering, streaming, billing Stripe, dashboard admin) se situe autour de 22 000 € HT, et monte à 40-60 000 € HT pour un produit avec RAG sur base documentaire client, agents, guardrails avancés et connecteurs métier. Coûts d'inférence IA (Anthropic, OpenAI) séparés, généralement 100-500 €/mois au démarrage, à répercuter dans votre pricing.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel modèle IA choisir : Claude, GPT, Gemini, Llama ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ça dépend de votre cas d'usage. Claude (Sonnet 5, Opus 5) : meilleur pour le raisonnement, l'analyse de docs longs, la génération de code, le service client B2B. GPT-4/5 : très polyvalent, écosystème d'outils riche. Gemini : bon rapport prix/qualité, intégration Google native. Llama / Mistral : quand vous voulez héberger le modèle en propre (souveraineté). On recommande selon le cas d'usage et le budget d'inférence.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment maîtriser les coûts d'API IA au fur et à mesure de la croissance ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Plusieurs leviers : prompt caching Anthropic (jusqu'à 90 % de réduction sur les tokens répétés), choix modèle par tâche (Haiku pour du simple, Sonnet pour du complexe, Opus uniquement quand nécessaire), quotas par utilisateur selon le plan tarifaire, batching des requêtes non-temps réel, fallback vers un modèle moins cher en cas de dépassement quota. Notre monitoring temps réel identifie les dérives.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment gérer la confidentialité des données envoyées aux modèles IA ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Plusieurs niveaux. API cloud (Anthropic, OpenAI) : leurs conditions garantissent que vos données API ne sont pas utilisées pour entraîner leurs modèles (contrats DPA disponibles). Filtrage PII avant envoi (anonymisation automatique noms, emails, numéros). Hébergement UE (Anthropic AWS Europe, OpenAI Azure Europe). Pour la souveraineté totale, self-hosting de Llama 3, Mistral ou Qwen sur vos serveurs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le SaaS supporte-t-il le multi-tenant (plusieurs entreprises clientes) ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, c'est un pilier de tout SaaS sérieux : on le fait dès le sprint 1. Chaque entreprise cliente a son isolation logique en base de données (schéma dédié ou row-level security PostgreSQL), ses propres users et permissions, son branding custom (logo, couleurs, sous-domaine dédié), son quota d'usage. La facturation Stripe est également multi-tenant : chaque compte client a son abonnement, ses factures, sa carte enregistrée.",
        },
      },
    ],
  },
];
