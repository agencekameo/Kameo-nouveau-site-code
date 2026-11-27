/*
 * Textes de la landing /visibilite-ia/ selon la cible de la campagne Meta GEO (lancée le 01/12/2026) : la page
 * générale, /visibilite-ia/auto-ecole/ et /visibilite-ia/ecole/ (validé par Benjamin le 27/11/2026 : « personnalise
 * plus d'éléments que uniquement le haut de landing »). Même page, mêmes prix, mêmes preuves : seuls changent les mots
 * du visiteur (élèves, étudiants), la question posée à l'IA et ce qui en découle, jusqu'au message WhatsApp.
 * Les versions par cible sont noindex et hors du sitemap, comme la page générale : ne pas les ajouter à pages.ts.
 * Espaces insécables : fr() les pose avant « ? ! : ; » au rendu ; « 4 IA » les porte ici ( ).
 */

export type Metier = 'auto-ecole' | 'ecole';
export type FormuleId = 'essentiel' | 'croissance' | 'autorite';
type Carte = { t: string; p: string };

export type Variante = {
  /** Absent pour la page générale. Sert aussi d'étiquette Clarity et d'utm_content Calendly. */
  metier?: Metier;
  path: string;
  /** « de votre entreprise » : titre de l'onglet et description. */
  deVotre: string;
  /** « de vous » : titre final et fenêtre Calendly. */
  deVous: string;
  /** Message prérempli de WhatsApp (bouton flottant, final, barre mobile). */
  messageWa: string;
  /** Titre : début de phrase, avant « ChatGPT en 1 mois ». */
  h1: string;
  lead: string;
  /** Illustration du héros : question posée à l'IA, réponses, place vide. */
  chat: { q: string; rows: { name: string; desc: string }[]; cites: string; slot: string };
  /** Section « Ce qui a changé » : trois cartes et leurs mini-illustrations. */
  etapes: [Carte, Carte, Carte];
  miniAsk: string;
  miniCall: { icon: string; txt: string };
  /** Méthode : textes des cartes Mesurer, Corriger, Notoriété (titres communs). */
  methode: [string, string, string];
  /** Étiquettes autour de « Vous » dans l'illustration Notoriété. */
  sources: [string, string, string, string];
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
  messageWa: 'Bonjour Kameo, je voudrais savoir ce que les IA disent de mon entreprise.',
  h1: 'Devenez visible sur',
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
  etapes: [
    { t: 'Votre client demande à une IA', p: 'Plutôt que de chercher sur Google.' },
    { t: 'L’IA cite quelques noms', p: 'Pas de deuxième page.' },
    { t: 'Il appelle l’un d’eux', p: 'Sans passer par votre site.' },
  ],
  miniAsk: 'Qui me conseilles-tu ?',
  miniCall: { icon: 'solid-phone', txt: 'Appel · Entreprise A' },
  methode: [
    'Les questions de vos clients, posées aux 4 IA toutes les deux semaines.',
    'Votre site rendu lisible par les IA, et leurs erreurs sur vous corrigées.',
    'Votre présence là où les IA puisent leurs réponses.',
  ],
  sources: ['Avis', 'Annuaires', 'Comparatifs', 'Médias'],
  formulesSub: 'Prix hors taxes, par mois, affichés avant tout rendez-vous.',
  qui: 'vos clients',
  final: { slot: 'Votre entreprise, cette fois ?', point: '5 questions posées en direct aux 4 IA' },
};

const AUTO_ECOLE: Variante = {
  metier: 'auto-ecole',
  path: '/visibilite-ia/auto-ecole/',
  deVotre: 'de votre auto-école',
  deVous: 'de votre auto-école',
  messageWa: 'Bonjour Kameo, je voudrais savoir ce que les IA disent de mon auto-école.',
  h1: 'Rendez votre auto-école visible sur',
  lead: 'On mesure ce que les IA disent de votre auto-école, et on corrige ce qui les empêche de la citer.',
  chat: {
    q: 'Quelle auto-école choisir à Lyon ?',
    rows: [
      { name: 'Auto-école A', desc: 'très bien notée' },
      { name: 'Auto-école B', desc: 'taux de réussite affiché' },
      { name: 'Auto-école C', desc: 'tarifs clairs sur son site' },
    ],
    cites: 'trois auto-écoles',
    slot: 'Votre auto-école ?',
  },
  etapes: [
    { t: 'Un futur élève demande à une IA', p: 'Souvent avec ses parents.' },
    { t: 'L’IA cite quelques auto-écoles', p: 'Pas de deuxième page.' },
    { t: 'Il s’inscrit chez l’une d’elles', p: 'Sans passer par votre site.' },
  ],
  /* Court : la bulle coupe au-delà d'environ 22 caractères sur téléphone. */
  miniAsk: 'Quelle auto-école ?',
  miniCall: { icon: 'solid-user-check', txt: 'Inscription · Auto-école A' },
  methode: [
    'Les questions de vos futurs élèves, posées aux 4 IA toutes les deux semaines.',
    'Votre site rendu lisible par les IA, et leurs erreurs sur vos forfaits ou vos horaires corrigées.',
    'Avis, annuaires, comparateurs : votre présence là où les IA puisent leurs réponses.',
  ],
  sources: ['Avis', 'Annuaires', 'Comparateurs', 'Médias'],
  formulesSub: 'Prix hors taxes, par mois, affichés avant tout rendez-vous. Un seul élève de plus par mois couvre la formule Essentiel.',
  qui: 'vos futurs élèves',
  pourQui: {
    essentiel: 'Une auto-école, une ville.',
    croissance: "Jusqu'à 3 agences ou 3 villes.",
    autorite: "Jusqu'à 6 agences ou villes, ou une ville très disputée.",
  },
  final: { slot: 'Votre auto-école, cette fois ?', point: '5 questions de vos futurs élèves, posées en direct aux 4 IA' },
};

const ECOLE: Variante = {
  metier: 'ecole',
  path: '/visibilite-ia/ecole/',
  deVotre: 'de votre école',
  deVous: 'de votre école',
  messageWa: 'Bonjour Kameo, je voudrais savoir ce que les IA disent de mon école.',
  h1: 'Rendez votre école visible sur',
  lead: 'On mesure ce que les IA disent de votre école, et on corrige ce qui les empêche de la citer.',
  chat: {
    q: 'Quelle école de commerce post-bac choisir à Bordeaux ?',
    rows: [
      { name: 'École A', desc: 'très bien notée' },
      { name: 'École B', desc: 'citée dans un classement' },
      { name: 'École C', desc: 'débouchés clairs sur son site' },
    ],
    cites: 'trois écoles',
    slot: 'Votre école ?',
  },
  etapes: [
    { t: 'Un futur étudiant demande à une IA', p: 'Plutôt que de chercher sur Google.' },
    { t: 'L’IA cite quelques écoles', p: 'Pas de deuxième page.' },
    { t: 'Il s’inscrit dans l’une d’elles', p: 'Sans passer par votre site.' },
  ],
  miniAsk: 'Quelle école ?',
  miniCall: { icon: 'solid-user-check', txt: 'Inscription · École A' },
  methode: [
    'Les questions de vos futurs étudiants, posées aux 4 IA toutes les deux semaines.',
    'Votre site rendu lisible par les IA, et leurs erreurs sur vos formations ou vos frais corrigées.',
    'Avis, classements, annuaires : votre présence là où les IA puisent leurs réponses.',
  ],
  sources: ['Avis', 'Classements', 'Annuaires', 'Médias'],
  formulesSub: 'Prix hors taxes, par mois, affichés avant tout rendez-vous. Une à deux inscriptions de plus par an couvrent la formule Essentiel.',
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
