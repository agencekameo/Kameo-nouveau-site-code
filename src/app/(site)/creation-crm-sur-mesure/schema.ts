/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */
export const pageSchemas: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://agence-kameo.fr/creation-crm-sur-mesure/#faq',
    inLanguage: 'fr-FR',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Un CRM sur-mesure est-il rentable face à Salesforce ou HubSpot ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ça devient rentable dès que vous payez 15 000 € HT/an de licences Salesforce ou HubSpot, ou que le SaaS bloque un workflow essentiel. Un CRM sur-mesure démarre à 10 000 € HT en développement (one-shot), puis coûte 100-300 € HT/mois d'hébergement. Salesforce Enterprise à 150 € HT/user/mois × 15 users = 27 000 € HT/an à vie. Break-even en 5 mois, puis économies durables.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on migrer les données depuis un CRM existant ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, on prévoit systématiquement une phase de migration à la fin du développement : export depuis Salesforce / HubSpot / Pipedrive / Zoho via leur API ou fichier CSV, mapping des champs vers votre nouveau modèle de données, import contrôlé avec rapport d'erreurs, validation manuelle sur un échantillon, puis migration complète. Aucune donnée perdue.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le CRM sera-t-il hébergé où et sous quelle conformité ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Hébergement au choix : OVH (data-centers Roubaix/Gravelines), Scaleway (Paris), Clever Cloud, ou AWS EU (Paris) / Azure EU. Chiffrement au repos (AES-256) et en transit (TLS 1.3), logs d'audit horodatés, RGPD baked-in (registre traitements, DPA, droit à l'oubli automatisé, export données). Nous fournissons la doc conformité complète.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on intégrer nos outils métiers (comptabilité, marketing, téléphonie) ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, c'est même le principal avantage. Intégration native ou via webhook / API avec : compta (Pennylane, Sage, EBP, Cegid), marketing (Brevo, Mailchimp, Sarbacane), téléphonie (Aircall, Ringover, RingCentral), calendrier (Google, Outlook), signature (DocuSign, Yousign), docs (Google Drive, Sharepoint), data (Metabase, Looker, Power BI).",
        },
      },
      {
        '@type': 'Question',
        name: "Combien d'utilisateurs peut-on connecter au CRM sur-mesure ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Aucune limite technique et surtout aucun coût par utilisateur. Chez Salesforce ou HubSpot vous payez chaque utilisateur ajouté ; sur votre CRM sur-mesure, les 5, 50 ou 500 utilisateurs coûtent le même prix. Les permissions sont gérées par rôle (admin, manager, commercial, marketing, lecture seule) et par équipe. L'ajout de nouveaux utilisateurs se fait via le back-office admin en 30 secondes.",
        },
      },
    ],
  },
];
