/*
 * Avis Trustpilot de Kameo (https://fr.trustpilot.com/review/agence-kameo.fr), affichés dans l'encart « avis » de la
 * landing /visibilite-ia/. Repris tels quels de la landing /appel-strategique/ le 28/11/2026 : textes de ses cartes
 * (appel-strategique/Body.tsx) et liens de chaque avis (TP_REVIEWS de src/components/landing/LandingEffects.tsx).
 * Ce sont des avis sur nos projets web et SEO : jamais présentés comme des résultats GEO.
 * Un avis ajouté sur Trustpilot s'ajoute ici (texte exact, lien de l'avis), et dans les deux fichiers ci-dessus pour
 * /appel-strategique/.
 */
export type AvisClient = {
  nom: string;
  /** Sous le nom : « Cliente Kameo », le type de projet ou le site du client. */
  role: string;
  initiales: string;
  /** Couleur de la pastille aux initiales (celle de /appel-strategique/). */
  couleur: string;
  titre: string;
  /** Texte de l'avis, sans guillemets (ajoutés à l'affichage). */
  texte: string;
  /** Lien direct vers l'avis sur Trustpilot. */
  url: string;
};

export const AVIS_TRUSTPILOT: AvisClient[] = [
  {
    nom: 'Céline Taranto',
    role: 'Cliente Kameo',
    initiales: 'CT',
    couleur: '#0ea5e9',
    titre: 'Équipe fiable et transparente',
    texte:
      'Équipe efficace, impliquée, à l’écoute, transparente, disponible, fiable, qui tient ses délais, vous donnent des conseils et fait le maximum pour répondre à vos besoins. Je recommande !',
    url: 'https://fr.trustpilot.com/reviews/69b7d14dbf55648f616329ae',
  },
  {
    nom: 'Noella Ngo Hongla',
    role: 'Cliente Kameo',
    initiales: 'NN',
    couleur: '#14b8a6',
    titre: 'Un grand merci à l’agence Kameo',
    texte:
      'J’ai été satisfaite de la conception de mon site internet au delà de mes attentes. Les délais ont été respectés et le rendu impeccable : rien à dire, je recommande à 100%.',
    url: 'https://fr.trustpilot.com/reviews/6984c96e8c84368a7e4e276b',
  },
  {
    nom: 'Maud Marie',
    role: 'Cliente Kameo',
    initiales: 'MM',
    couleur: '#ED6E63',
    titre: 'Au top !',
    texte: 'Au top ! Rapide, efficace et un rapport qualité/prix incroyable. Merci',
    url: 'https://fr.trustpilot.com/reviews/65c4f5cf517cfcb055aa6dec',
  },
  {
    nom: 'Atelier Songe',
    role: 'Site e-commerce',
    initiales: 'AS',
    couleur: '#ec4899',
    titre: 'Vous pouvez y aller les yeux fermés !',
    texte:
      'J’ai fait appel à Kameo pour réaliser mon site e-commerce. Malgré le fait que je n’avais aucune connaissance dans le domaine, ils ont su créer le site qui me correspond à 100% ! Ils ont fait preuve d’écoute, de patience et de bienveillance.',
    url: 'https://fr.trustpilot.com/reviews/698763ffb7000e584f3decb2',
  },
  {
    nom: 'Julien Nava',
    role: 'Client Kameo',
    initiales: 'JN',
    couleur: '#0f766e',
    titre: 'Un accompagnement professionnel',
    texte: 'Une équipe très à l’écoute et particulièrement sensible aux remarques du client.',
    url: 'https://fr.trustpilot.com/reviews/65d8bca3f33bfb2a075a9ea6',
  },
  {
    nom: 'Celia D.',
    role: 'Cliente Kameo',
    initiales: 'CD',
    couleur: '#10b981',
    titre: 'Très bonne agence',
    texte: 'Très bonne agence. Sérieuse et réactive. Merci',
    url: 'https://fr.trustpilot.com/reviews/698eaef3f8baeb9dbb48672e',
  },
  {
    nom: 'Verena Dey',
    role: 'Cliente SEO Kameo',
    initiales: 'VD',
    couleur: '#8b5cf6',
    titre: 'Une agence SEO réactive et experte',
    texte:
      'Benjamin se distingue par une excellente écoute et une vraie compréhension des besoins. Louison apporte une expertise technique SEO solide, avec une parfaite maîtrise des enjeux liés à la structure du site, aux performances et à l’indexation.',
    url: 'https://fr.trustpilot.com/reviews/699db5bba3956c16d29e3b18',
  },
  {
    nom: 'Paul Sornicle',
    role: 'Client Kameo',
    initiales: 'PS',
    couleur: '#6366f1',
    titre: 'Une agence sérieuse et professionnelle',
    texte:
      'L’agence Kameo accompagne efficacement les professionnels dans leur transformation digitale. L’équipe est à l’écoute, disponible et apporte des solutions adaptées aux besoins concrets. Un accompagnement de qualité que je recommande.',
    url: 'https://fr.trustpilot.com/reviews/6985b552ce5d03c086ced244',
  },
  {
    nom: 'Ilan Ohayon',
    role: 'Client Kameo',
    initiales: 'IO',
    couleur: '#1d4ed8',
    titre: 'Merci à toute l’équipe Kameo',
    texte:
      'Je tiens à remercier l’équipe Kameo pour leur professionnalisme. Merci pour l’évolution, merci d’avoir relancé mon entreprise au sommet. Mention spéciale à Benjamin.',
    url: 'https://fr.trustpilot.com/reviews/65fc8f367c74c7cea65d56fa',
  },
  {
    nom: 'Andrea Miranda',
    role: 'Client Kameo',
    initiales: 'AM',
    couleur: '#15803d',
    titre: 'Extrêmement content du travail effectué',
    texte:
      'Nouveau logo, charte graphique et site internet. Merci à Nadra et Ben pour leur patience et professionnalisme. Ils ont su répondre à toutes les attentes.',
    url: 'https://fr.trustpilot.com/reviews/65ef227ec0bd260303d2b7f6',
  },
  {
    nom: 'Sophie Mounsi',
    role: 'Cliente Kameo',
    initiales: 'SM',
    couleur: '#1e40af',
    titre: 'Première expérience réussie',
    texte:
      'Première expérience pour moi, complètement novice. L’équipe a su répondre à mes attentes avec beaucoup de patience et de gentillesse, malgré que j’étais parfois indécise. Très bonne expérience.',
    url: 'https://fr.trustpilot.com/reviews/66e176cf8a3aad47e01c4fba',
  },
  {
    nom: 'Mateo Bertei',
    role: 'Client Kameo',
    initiales: 'MB',
    couleur: '#f59e0b',
    titre: 'Satisfait',
    texte: 'Satisfait du résultat, du suivi et des échanges.',
    url: 'https://fr.trustpilot.com/reviews/698b108386f077d8eecabad7',
  },
  {
    nom: 'Andréa Charvet',
    role: 'sneakerslimited.fr',
    initiales: 'CA',
    couleur: '#f97316',
    titre: 'Une agence sérieuse et de confiance',
    texte:
      'Une agence qui a su me comprendre et répondre précisément à mes attentes. Grâce à leur écoute et réactivité, mon site sneakerslimited.fr me correspond à 100%. Ça fait maintenant presque 1 an que je leur confie mon site et toujours aussi réactifs !',
    url: 'https://fr.trustpilot.com/reviews/67cf5940f60e1c971a818a81',
  },
  {
    nom: 'Orel',
    role: 'Client Kameo',
    initiales: 'OR',
    couleur: '#64748b',
    titre: 'Super réactif et très à l’écoute',
    texte:
      'L’entreprise Kameo est super réactive et très à l’écoute. Ils m’ont aidé à développer le site comme je le souhaitais. Je recommande fortement.',
    url: 'https://fr.trustpilot.com/reviews/66e84381faf16ffd4c65e754',
  },
  {
    nom: 'Pontinha Solène',
    role: 'Site sur mesure',
    initiales: 'PS',
    couleur: '#7c3aed',
    titre: 'Création de site sur mesure',
    texte:
      'Création de site sur mesure avec un gros système de personnalisation. Une demande particulière parfaitement réalisée. Merci à Nadra pour le travail effectué.',
    url: 'https://fr.trustpilot.com/reviews/66dc9551cf10a8fdd539b17f',
  },
  {
    nom: 'Christophe',
    role: 'Client Kameo',
    initiales: 'CH',
    couleur: '#374151',
    titre: 'Très satisfait, délais respectés',
    texte: 'Très satisfait de la réalisation, délai respecté. Je recommande.',
    url: 'https://fr.trustpilot.com/reviews/65eae02034651bafa6e5af10',
  },
  {
    nom: 'Sornicle',
    role: 'Client Kameo',
    initiales: 'So',
    couleur: '#be185d',
    titre: 'Des professionnels sérieux',
    texte: 'Des professionnels sérieux et à l’écoute de nos demandes.',
    url: 'https://fr.trustpilot.com/reviews/65dedc36624c597f9787cfe4',
  },
];
