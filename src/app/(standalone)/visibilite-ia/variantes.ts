/*
 * Textes de la landing /visibilite-ia/ selon la cible de la campagne Meta GEO (lancée le 01/12/2026) : la page
 * générale, /visibilite-ia/auto-ecole/ et /visibilite-ia/ecole/ (validé par Benjamin le 27/11/2026 : « personnalise
 * plus d'éléments que uniquement le haut de landing »). Même page, mêmes prix, mêmes preuves : seuls changent les mots
 * du visiteur (élèves, étudiants), la question posée à l'IA et ce qui en découle, jusqu'au texte de la fenêtre Calendly.
 * Les versions par cible sont noindex et hors du sitemap, comme la page générale : ne pas les ajouter à pages.ts.
 * Espaces insécables : fr() les pose avant « ? ! : ; » au rendu ; « 4 IA » les porte ici ( ).
 */

export type Metier = 'auto-ecole' | 'ecole';
export type FormuleId = 'essentiel' | 'croissance' | 'autorite';

export type Variante = {
  /** Absent pour la page générale. Sert aussi d'étiquette Clarity et d'utm_content Calendly. */
  metier?: Metier;
  path: string;
  /** « de votre entreprise » : titre de l'onglet et description. */
  deVotre: string;
  /** « de vous » : titre final et fenêtre Calendly. */
  deVous: string;
  /** Titre : début de phrase, avant « ChatGPT en 1 mois ». */
  h1: string;
  lead: string;
  /** Question posée à l'IA, réponses, place vide : les mots de la version pour le film du haut de page (à reprendre dans ses
   *  props pour un rendu par version) ; la place vide, sans « ? », nomme aussi l'entreprise dans le haut de page. */
  chat: { q: string; rows: { name: string; desc: string }[]; cites: string; slot: string; intro?: string };
  /** Formules : sous-titre, « N questions de … suivies », « pour qui » de chaque formule (sinon geo.ts). */
  formulesSub: string;
  qui: string;
  pourQui?: Record<FormuleId, string>;
  /** Ordre des études de cas (identifiants du tableau CAS de Body.tsx), sinon l'ordre par défaut. */
  ordreCas?: string[];
  final: { slot: string; point: string };
};

export const GENERAL: Variante = {
  path: '/visibilite-ia/',
  deVotre: 'de votre entreprise',
  deVous: 'de vous',
  h1: 'Devenez 1er sur',
  lead: 'On mesure ce que les IA disent de vous, et on corrige ce qui les empêche de vous citer.',
  chat: {
    q: 'Je cherche un plombier à Nantes. Qui me conseilles-tu ?',
    rows: [
      { name: 'Entreprise A', desc: 'très bien notée' },
      { name: 'Entreprise B', desc: 'citée dans un comparatif' },
      { name: 'Entreprise C', desc: 'prix clairs sur son site' },
    ],
    cites: 'trois entreprises',
    slot: 'Votre entreprise ?',
  },
  formulesSub: 'Prix hors taxes, par mois, affichés avant tout rendez-vous.',
  qui: 'vos clients',
  final: { slot: 'Votre entreprise, cette fois ?', point: '5 questions posées en direct aux 4 IA' },
};

const AUTO_ECOLE: Variante = {
  metier: 'auto-ecole',
  path: '/visibilite-ia/auto-ecole/',
  deVotre: 'de votre auto-école',
  deVous: 'de votre auto-école',
  h1: 'Rendez votre auto-école 1re sur',
  lead: 'On mesure ce que les IA disent de votre auto-école, et on corrige ce qui les empêche de la citer.',
  chat: {
    q: 'Quelle est la meilleure auto-école à Lyon ?',
    rows: [
      { name: 'Auto-école A', desc: 'très bien notée' },
      { name: 'Auto-école B', desc: 'taux de réussite affiché' },
      { name: 'Auto-école C', desc: 'tarifs clairs sur son site' },
    ],
    cites: 'trois auto-écoles',
    slot: 'Votre auto-école ?',
    intro: 'Voici trois auto-écoles bien notées à Lyon :',
  },
  formulesSub: 'Prix hors taxes, par mois, affichés avant tout rendez-vous. Un seul élève de plus par mois couvre la formule Essentiel.',
  qui: 'vos futurs élèves',
  pourQui: {
    essentiel: 'Une auto-école, une ville.',
    croissance: "Jusqu'à 3 agences ou 3 villes.",
    autorite: "Jusqu'à 6 agences ou villes, ou une ville très disputée.",
  },
  /* Une entreprise locale de transport (CDP69, Lyon) parle davantage à une auto-école qu'un hébergeur. */
  ordreCas: ['cdp69', 'defikart', 'omega'],
  final: { slot: 'Votre auto-école, cette fois ?', point: '5 questions de vos futurs élèves, posées en direct aux 4 IA' },
};

const ECOLE: Variante = {
  metier: 'ecole',
  path: '/visibilite-ia/ecole/',
  deVotre: 'de votre école',
  deVous: 'de votre école',
  h1: 'Rendez votre école 1re sur',
  lead: 'On mesure ce que les IA disent de votre école, et on corrige ce qui les empêche de la citer.',
  chat: {
    q: 'Quelle est la meilleure école de commerce à Bordeaux ?',
    rows: [
      { name: 'École A', desc: 'très bien notée' },
      { name: 'École B', desc: 'citée dans un classement' },
      { name: 'École C', desc: 'débouchés clairs sur son site' },
    ],
    cites: 'trois écoles',
    slot: 'Votre école ?',
    intro: 'Voici trois écoles reconnues à Bordeaux :',
  },
  /* « Quelques » : une à deux inscriptions pour une école (3 000 à 10 000 € par an), davantage pour une formation courte. */
  formulesSub: 'Prix hors taxes, par mois, affichés avant tout rendez-vous. Quelques inscriptions de plus par an couvrent la formule Essentiel.',
  qui: 'vos futurs étudiants',
  pourQui: {
    essentiel: 'Un établissement, un campus.',
    croissance: "Jusqu'à 3 campus ou 3 formations.",
    autorite: "Jusqu'à 6 campus ou formations, ou un secteur très disputé.",
  },
  /* Le cas CDP69 (« transport scolaire sortie pédagogique Lyon ») parle d'abord aux écoles. */
  ordreCas: ['cdp69', 'defikart', 'omega'],
  final: { slot: 'Votre école, cette fois ?', point: '5 questions de vos futurs étudiants, posées en direct aux 4 IA' },
};

export const VARIANTES_METIER: Record<Metier, Variante> = { 'auto-ecole': AUTO_ECOLE, ecole: ECOLE };
