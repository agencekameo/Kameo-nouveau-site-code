/**
 * Offres GEO (visibilité dans les réponses des IA) : source unique des prix, des offres et des
 * FAQ des pages /agence-geo/, /audit-geo/ et /accompagnement-geo/, reprise par leurs données
 * structurées, llms.txt, l'en-tête, l'accueil et les guides du blog (repères <!-- … -->).
 *
 * Grille de novembre : PDF « Offres GEO » de Benjamin (novembre 2026). Prix relevés le 09/11/2026
 * à sa demande : Essentiel 290 → 500 € HT par mois ; puis, le même jour, Croissance 390 → 700 et
 * Autorité 690 → 1 000 € HT par mois, Audit Express 490 → 500 et Audit Complet 790 → 800 € HT
 * (« croissance 700€, autorité 1000€ », « 500€ express, 800€ complet »). Puis, le 12/11/2026,
 * baisse des accompagnements à sa demande : Essentiel 350, Croissance 500 et Autorité 800 € HT
 * par mois (« essentiel à 350, croissance à 500 et autorité à 800 ») ; audits inchangés.
 * Le 13/11/2026, ces prix deviennent une offre Black Friday (« 350 au lieu de 500… ») : prix
 * normaux 500, 700 et 1 000 € HT (price), prix de l'offre dans promoPrice (voir GEO_PROMO).
 *
 * Grille de décembre : décidée par Benjamin le 20/11/2026 (« Oui, on part dessus ») d'après le
 * rapport « Offres GEO concurrentes et grille Kameo » (reports/) : Essentiel 500, Croissance 800 et
 * Autorité 1 500 € HT par mois ; 20, 40 ou 60 questions suivies ; 3 mois d'engagement, puis sans
 * engagement ; garantie de livrables. Prévue d'abord pour le 1er décembre 2026, elle est affichée dès
 * le 20/11/2026 à la demande de Benjamin (« Dès maintenant affiche les nouvelles offres, en incluant
 * la réduction blackfriday en retirant 30% par offre »), avec l'offre Black Friday ; le même jour, à
 * sa demande, Croissance passe à 600 € et Autorité à 1 100 € : 350, 600 et 1 100 € HT par mois
 * (−30, −25 et −27 %) jusqu'au 30/11/2026 (GEO_PROMO), puis les prix normaux. La grille de novembre ne s'affiche plus (GEO_BASCULE passée) ; à retirer du code.
 *
 * Tout ce qui dépend de la date (offre en cours, grille) est calculé à l'affichage, par les
 * fonctions ci-dessous, jamais dans une constante de module figée au démarrage du serveur ; les
 * pages sont régénérées toutes les heures (revalidate du gabarit (site)/layout.tsx ; 60 s pour le
 * blog et llms.txt).
 *
 * Les réponses des FAQ sont en HTML simple (<strong>, <a>) : affichées telles quelles et
 * reprises sans balises dans le FAQPage, pour que le balisage décrive exactement la page.
 */
import { PROOF } from '@/lib/site';

/** Les 4 IA interrogées dans les audits et la mesure. */
export const GEO_ENGINES = ['ChatGPT', 'Gemini', 'Perplexity', 'Claude'] as const;
/** Grille de novembre : questions clés mesurées chaque mois dans les accompagnements. */
export const GEO_QUESTIONS = 50;
/** Grille de novembre : engagement minimum des accompagnements, en mois. */
export const GEO_MIN_MONTHS = 6;

/** Premier instant de la nouvelle grille (dite « de décembre »), heure de Paris : affichée dès le 20/11/2026. */
export const GEO_BASCULE = '2026-11-20T00:00:00+01:00';
/** La nouvelle grille est-elle en vigueur ? À appeler à l'affichage. */
export const grilleDecembreActive = (maintenant: Date = new Date()) => maintenant.getTime() >= Date.parse(GEO_BASCULE);

/** Articles dont un repère suit la grille (voir reperesGeo) : leur texte change seul le jour de la bascule. */
const ARTICLES_GRILLE_GEO = new Set(['/blog/prix-geo/', '/blog/mesurer-visibilite-ia/']);

/** Date de mise à jour d'un article : celle de la bascule, une fois passée, pour ceux dont le texte change ce jour-là. */
export const dateArticleGeo = (path: string, modified: string) =>
  ARTICLES_GRILLE_GEO.has(path) && grilleDecembreActive() && Date.parse(modified) < Date.parse(GEO_BASCULE) ? GEO_BASCULE : modified;

/** Grille de décembre : chaque question posée 3 fois à chaque IA, à chaque relevé. */
export const GEO_PASSAGES = 3;
/** Grille de décembre : relevés par mois (un toutes les deux semaines). */
export const GEO_RELEVES_PAR_MOIS = 2;
/** Réponses analysées par mois en accompagnement (grille de décembre). */
export const reponsesParMois = (questions: number) => questions * GEO_ENGINES.length * GEO_PASSAGES * GEO_RELEVES_PAR_MOIS;
export const nombre = (n: number) => n.toLocaleString('fr-FR').replace(/\s/g, ' ');
/** Réponses analysées par un audit : un seul relevé (grille de décembre). */
export const reponsesAudit = (questions: number) => questions * GEO_ENGINES.length * GEO_PASSAGES;

export type GeoOffer = {
  id: string;
  name: string;
  /** Prix normal HT, en euros (par mois pour les accompagnements). */
  price: number;
  /** Prix HT pendant l'offre en cours (GEO_PROMO) : à lire avec prixDuJour(), jamais directement. */
  promoPrice?: number;
  monthly: boolean;
  /** Ce que l'offre apporte, en une phrase. */
  tagline: string;
  /** Grille de décembre : la situation du client à qui l'offre s'adresse. */
  pourQui?: string;
  /** Grille de décembre : questions suivies (accompagnement) ou mesurées (audit). */
  questions?: number;
  items: string[];
  featured?: boolean;
  cta: string;
};

/* ================= Grille de novembre (jusqu'au 30/11/2026) ================= */

const AUDITS_NOVEMBRE: GeoOffer[] = [
  {
    id: 'express',
    name: 'Audit GEO Express',
    price: 500,
    monthly: false,
    tagline: 'Pour savoir rapidement où vous en êtes et quoi corriger en priorité.',
    items: [
      'Analyse de votre visibilité dans les réponses de ChatGPT, Gemini, Perplexity et Claude.',
      'Diagnostic technique de votre site et de ce qui empêche les IA de bien vous comprendre.',
      "Plan d'action priorisé, que vous pouvez appliquer seul ou avec nous.",
    ],
    cta: 'Réserver un rendez-vous',
  },
  {
    id: 'complet',
    name: 'Audit GEO Complet',
    price: 800,
    monthly: false,
    tagline: 'Pour comprendre pourquoi vos concurrents sont cités avant vous.',
    items: [
      "Tout le contenu de l'Audit GEO Express.",
      'Comparaison de votre visibilité avec celle de 3 concurrents directs.',
      'Liste des sites et médias que les IA citent comme sources dans votre secteur.',
      "Restitution du rapport en visio d'une heure.",
    ],
    featured: true,
    cta: 'Réserver un rendez-vous',
  },
];

const PLANS_NOVEMBRE: GeoOffer[] = [
  {
    id: 'essentiel',
    name: 'Essentiel',
    price: 500,
    promoPrice: 350,
    monthly: true,
    tagline: "On corrige votre site et on vous dit quoi faire à l'extérieur.",
    items: [
      "Audit GEO Express et plan d'action offerts au démarrage.",
      'Application des corrections techniques sur votre site.',
      'Mesure mensuelle de votre visibilité sur 50 questions clés, testées sur ChatGPT, Gemini, Perplexity et Claude.',
      'Analyse des résultats et rapport mensuel clair.',
      'Stratégie de notoriété : où créer vos fiches, comment collecter des avis, dans quels comparatifs apparaître.',
    ],
    cta: 'Réserver un rendez-vous',
  },
  {
    id: 'croissance',
    name: 'Croissance',
    price: 700,
    promoPrice: 500,
    monthly: true,
    tagline: 'On ne se contente plus de conseiller : on crée votre présence externe.',
    items: [
      "Tout le contenu de l'offre Essentiel.",
      'Création de vos fiches et profils sur les plateformes clés, jusqu’à 3 par mois.',
      'Inscription dans les annuaires et comparatifs que les IA consultent.',
      "Mise en place d'une stratégie de collecte d'avis clients.",
    ],
    featured: true,
    cta: 'Réserver un rendez-vous',
  },
  {
    id: 'autorite',
    name: 'Autorité',
    price: 1000,
    promoPrice: 800,
    monthly: true,
    tagline: 'On produit les contenus qui font de vous la référence de votre secteur.',
    items: [
      "Tout le contenu de l'offre Croissance.",
      'Rédaction ou réécriture de contenus optimisés pour les IA, jusqu’à 5 par mois.',
      'Cartographie mensuelle des médias cités par les IA, pour orienter vos relations presse.',
      'Un call mensuel pour faire le point sur les résultats et les priorités.',
    ],
    cta: 'Réserver un rendez-vous',
  },
];

/* ================= Grille de décembre (à partir du 01/12/2026) ================= */

const AUDITS_DECEMBRE: GeoOffer[] = [
  {
    id: 'express',
    name: 'Audit GEO Express',
    price: 500,
    monthly: false,
    questions: 20,
    tagline: 'Pour savoir rapidement où vous en êtes et quoi corriger en priorité.',
    items: [
      `20 questions de vos clients, posées 3 fois à ChatGPT, Gemini, Perplexity et Claude : ${reponsesAudit(20)} réponses analysées.`,
      'Diagnostic technique de votre site et de ce qui empêche les IA de bien vous comprendre.',
      "Plan d'action priorisé, que vous pouvez appliquer seul ou avec nous.",
    ],
    cta: 'Réserver un rendez-vous',
  },
  {
    id: 'complet',
    name: 'Audit GEO Complet',
    price: 800,
    monthly: false,
    questions: 40,
    tagline: 'Pour comprendre pourquoi vos concurrents sont cités avant vous.',
    items: [
      `40 questions de vos clients, posées 3 fois à chaque IA : ${reponsesAudit(40)} réponses analysées.`,
      "Le diagnostic du site et le plan d'action de l'Express.",
      'Comparaison de votre visibilité avec celle de 3 concurrents directs.',
      'Liste des sites et médias que les IA citent comme sources dans votre secteur.',
      "Restitution du rapport en visio d'une heure.",
    ],
    featured: true,
    cta: 'Réserver un rendez-vous',
  },
];

const PLANS_DECEMBRE: GeoOffer[] = [
  {
    id: 'essentiel',
    name: 'Essentiel',
    price: 500,
    promoPrice: 350,
    monthly: true,
    questions: 20,
    tagline: 'Votre site devient lisible par les IA, et vous savez chaque mois où vous en êtes.',
    pourQui: 'Une activité principale, sur une zone ou toute la France.',
    items: [
      "Audit GEO Express offert au démarrage : votre mesure de départ et votre plan d'action.",
      `20 questions suivies, posées 3 fois à ChatGPT, Gemini, Perplexity et Claude toutes les deux semaines : ${reponsesParMois(20)} réponses analysées par mois.`,
      'Votre fiche entreprise ChatGPT (Business Hub) revendiquée, vérifiée avec vous et tenue à jour, si votre entreprise y est éligible.',
      'Vos pages indexées dans Google, Bing et Brave, les moteurs où les IA cherchent leurs sources, avec un contrôle chaque mois.',
      'Corrections techniques de votre site (accès des robots des IA, informations identiques partout) et 3 pages existantes améliorées chaque mois.',
      '3 actions par mois à faire vous-même (fiches Google et Bing, annuaires, avis), avec les textes prêts.',
      'Rapport mensuel, point en visio au démarrage et au bilan des 3 mois.',
    ],
    cta: 'Réserver un rendez-vous',
  },
  {
    id: 'croissance',
    name: 'Croissance',
    price: 800,
    promoPrice: 600,
    monthly: true,
    questions: 40,
    tagline: 'Nous développons votre présence et vos contenus là où les IA cherchent leurs réponses.',
    pourQui: "Jusqu'à 3 services ou 3 villes.",
    items: [
      "Tout l'Essentiel, avec l'Audit GEO Complet offert au démarrage.",
      `40 questions suivies et 3 concurrents : ${reponsesParMois(40)} réponses analysées par mois.`,
      '2 nouveaux contenus par mois sur votre site (pages ou articles), écrits pour répondre aux questions que vous suivez, validés par vous avant publication.',
      'Les erreurs des IA sur votre entreprise (adresse, prix, services) repérées et corrigées à la source : sur votre site, ou en demandant la correction au site qui les a diffusées.',
      "2 inscriptions par mois dans les annuaires et sites d'avis que les IA citent dans votre secteur.",
      "Une méthode de demande d'avis conforme à la loi, avec des modèles de réponse.",
      '5 pages existantes améliorées et un point de 30 minutes en visio chaque mois.',
    ],
    featured: true,
    cta: 'Réserver un rendez-vous',
  },
  {
    id: 'autorite',
    name: 'Autorité',
    price: 1500,
    promoPrice: 1100,
    monthly: true,
    questions: 60,
    tagline: 'Nous faisons parler de vous dans les sources que les IA citent.',
    pourQui: "Jusqu'à 6 services ou villes, ou un secteur très disputé.",
    items: [
      'Tout Croissance, avec un Audit GEO Complet élargi à vos 60 questions et à 5 concurrents.',
      `60 questions suivies et 5 concurrents : ${nombre(reponsesParMois(60))} réponses analysées par mois.`,
      'Vos fiches Google et Bing créées ou reprises, puis tenues à jour.',
      '3 démarches par mois auprès de comparatifs, de médias ou de partenaires choisis parmi les sources des IA, sans jamais payer de place.',
      '4 nouveaux contenus par mois sur votre site (pages ou articles), validés par vous avant publication.',
      '10 pages existantes améliorées chaque mois.',
      '1 heure chaque mois avec Benjamin Dayan, fondateur, et un bilan chaque trimestre.',
    ],
    cta: 'Réserver un rendez-vous',
  },
];

/** Audits de la grille en vigueur. À appeler à l'affichage. */
export const auditsGeo = (): GeoOffer[] => (grilleDecembreActive() ? AUDITS_DECEMBRE : AUDITS_NOVEMBRE);
/** Accompagnements de la grille en vigueur. À appeler à l'affichage. */
export const plansGeo = (): GeoOffer[] => (grilleDecembreActive() ? PLANS_DECEMBRE : PLANS_NOVEMBRE);

/**
 * Offre Black Friday 2026 sur les accompagnements, décidée par Benjamin le 13/11/2026 : le prix
 * promoPrice vaut pour toute signature jusqu'au 30 novembre 2026 inclus et reste celui du client
 * pendant tout son engagement. Depuis le 20/11/2026, elle porte sur la nouvelle grille : 350, 600 et
 * 1 100 € HT par mois au lieu de 500, 800 et 1 500 € (jusqu'à −30 %) ; ensuite, les prix normaux.
 */
export const GEO_PROMO = {
  nom: 'Black Friday',
  /** Dernier instant de l'offre, heure de Paris. */
  fin: '2026-11-30T23:59:59+01:00',
  /** Date affichée partout (pages, FAQ, guide des prix, llms.txt), avec l'année depuis le 16/11/2026. */
  finTexte: '30 novembre 2026',
} as const;

export type GeoTerm = { icon: string; html: string };

/** Conditions des accompagnements de la grille en vigueur. */
export const termsGeo = (): GeoTerm[] =>
  grilleDecembreActive()
    ? [
        { icon: 'unlock-keyhole', html: '<strong>3 mois d’engagement</strong>, puis sans engagement : résiliation par simple e-mail, avec 30 jours de préavis.' },
        ...(promoGeoActive()
          ? [{ icon: 'calendar-check', html: `<strong>${GEO_PROMO.nom} gardé 6 mois</strong> si vous vous engagez sur 6 mois au lieu de 3 : ${remiseGeoUniforme() ? `−${remiseMaxGeo()} %` : 'le prix réduit'} pendant 6 mois.` }]
          : []),
        { icon: 'piggy-bank', html: '<strong>12 mois pour le prix de 11</strong> si vous vous engagez sur un an.' },
        { icon: 'shield-halved', html: '<strong>Garantie de livrables</strong> : un livrable prévu et non fait dans le mois est déduit de votre facture suivante.' },
        { icon: 'percent', html: '<strong>Audit déduit</strong> si vous passez à un accompagnement dans le mois qui suit votre audit.' },
      ]
    : [
        { icon: 'calendar-check', html: `<strong>${GEO_MIN_MONTHS} mois minimum</strong> sur les accompagnements, le temps que les IA prennent en compte les changements.` },
        { icon: 'piggy-bank', html: "<strong>1 mois offert</strong> pour tout engagement annuel, quel que soit l'accompagnement choisi." },
        { icon: 'percent', html: '<strong>Audit déduit</strong> si vous passez à un accompagnement dans le mois qui suit votre audit.' },
      ];

/** Engagement sous le prix d'une formule d'accompagnement. */
export const noteEngagementGeo = () =>
  grilleDecembreActive() ? '3 mois d’engagement, puis sans engagement' : `Engagement de ${GEO_MIN_MONTHS} mois minimum`;

/** Grille de décembre : nos engagements, écrits noir sur blanc (page Accompagnement GEO). */
export const GEO_ENGAGEMENTS: [string, string][] = [
  ['Changer de formule', 'Vers le haut à tout moment, sans nouvel engagement ; vers le bas à la fin de chaque mois, après les 3 premiers mois.'],
  ['Notre garantie', "Chaque livrable prévu dans votre formule est fait dans le mois ; sinon, il est déduit de votre facture suivante, sauf s'il attend un accès ou une validation de votre part."],
  ['Ce que personne ne peut garantir', "Qu'une IA vous cite : ce sont elles qui choisissent leurs sources. Nous nous engageons sur le travail prévu et sur une mesure transparente."],
  ['Ce qui vous appartient', "Vos fiches, vos comptes, vos contenus, votre liste de questions et l'historique des mesures, que vous gardez si vous partez."],
  ['Non compris', "Publicité (y compris dans ChatGPT), achat de liens ou d'articles sponsorisés, places payantes dans les annuaires, refonte du site, traduction, photos et vidéos : devis à part."],
];

/** Grille de décembre : ce que montre le rapport mensuel, dans toutes les formules. */
export const GEO_RAPPORT: [string, string][] = [
  ['Votre taux de présence', "La part des réponses qui vous nomment, IA par IA, avec la marge d'erreur et l'évolution sur 3 mois."],
  ['Comment vous apparaissez', 'Absent, mentionné, cité avec un lien ou recommandé.'],
  ['Qui est cité à votre place', 'Les marques et les concurrents nommés dans les mêmes réponses.'],
  ['D’où viennent les réponses', 'Les sites que les IA citent sur vos questions.'],
  ['Vos pages indexées', 'Celles que Google, Bing et Brave connaissent, et celles qui manquent encore.'],
  ['Ce que cela vous apporte', 'Vos visites venues des IA (si vous avez Google Analytics), vos citations dans Copilot, et les mentions, vues et clics de votre fiche ChatGPT.'],
  ['Ce que nous avons fait', 'La liste des livrables du mois et le plan du mois suivant.'],
  ['Vos données', "La liste de vos questions et l'export de toutes les réponses, sur simple demande."],
];

/** Guides et outils GEO gratuits : section « Pour aller plus loin » de /agence-geo/ et llms.txt. */
export type GeoResource = { href: string; tag: string; title: string; text: string };
export const GEO_RESOURCES: GeoResource[] = [
  { href: '/test-visibilite-ia/', tag: 'Test gratuit', title: 'Testez votre visibilité dans les IA', text: '10 questions à poser vous-même à ChatGPT, Gemini, Perplexity et Claude, et la grille pour lire les réponses.' },
  { href: '/blog/referencement-chatgpt/', tag: 'Guide', title: 'Référencement ChatGPT : être cité en 8 étapes', text: 'Comment ChatGPT choisit les entreprises qu’il cite, et ce que vous pouvez faire dès aujourd’hui.' },
  { href: '/blog/chatgpt-ne-cite-pas-mon-entreprise/', tag: 'Guide', title: 'Pourquoi ChatGPT ne cite pas mon entreprise', text: 'Les causes à vérifier une par une, et comment les corriger.' },
  { href: '/blog/mesurer-visibilite-ia/', tag: 'Guide', title: 'Mesurer sa visibilité dans les IA', text: 'La méthode, les indicateurs et les outils gratuits pour suivre vos progrès.' },
  { href: '/blog/prix-geo/', tag: 'Guide', title: 'Prix du GEO : audit et accompagnement', text: 'Ce que coûte le GEO, ce que comprend chaque niveau, et comment comparer deux offres.' },
  { href: '/blog/geo-vs-seo/', tag: 'Guide', title: 'GEO vs SEO : les différences', text: 'Ce qui change, ce qui reste, et comment faire du GEO sans délaisser le SEO.' },
  { href: '/blog/geo-wordpress/', tag: 'Guide', title: 'Rendre un site WordPress lisible par les IA', text: 'La liste de contrôle pour que ChatGPT et les autres IA puissent lire et citer votre site.' },
  { href: '/blog/chatgpt-entreprise-locale/', tag: 'Guide', title: 'Être recommandé par ChatGPT quand on est une entreprise locale', text: 'Fiche Google, annuaires, avis, pages par zone : les actions qui comptent en local.' },
  { href: '/glossaire-geo/', tag: 'Glossaire', title: 'Glossaire GEO', text: 'Les mots du référencement IA, expliqués simplement et sourcés.' },
];

/** « 1 000 € » : espaces insécables entre les milliers et avant l'euro. */
export const euros = (n: number) => n.toLocaleString('fr-FR').replace(/\s/g, ' ') + ' €';

/** L'offre GEO_PROMO est-elle en cours ? À appeler à l'affichage. */
export const promoGeoActive = (maintenant: Date = new Date()) => maintenant.getTime() <= Date.parse(GEO_PROMO.fin);

/** Prix payé aujourd'hui : celui de l'offre en cours s'il y en a une, sinon le prix normal. */
export const prixDuJour = (o: GeoOffer) => (o.promoPrice !== undefined && promoGeoActive() ? o.promoPrice : o.price);

/** Prix normal à barrer à côté du prix de l'offre ; null hors offre. */
export const prixBarre = (o: GeoOffer) => (o.promoPrice !== undefined && promoGeoActive() ? o.price : null);

/** Plus forte remise de l'offre, en % arrondi (30 %). */
export const remiseMaxGeo = () =>
  Math.round(Math.max(0, ...plansGeo().map((p) => (p.promoPrice !== undefined ? 1 - p.promoPrice / p.price : 0))) * 100);

/** Même remise sur toutes les formules (−30 % chacune) : on écrit « −30 % » et non « jusqu'à −30 % ». */
export const remiseGeoUniforme = () => {
  const remises = plansGeo()
    .filter((p) => p.promoPrice !== undefined)
    .map((p) => Math.round((1 - (p.promoPrice ?? p.price) / p.price) * 100));
  return remises.length > 0 && remises.every((r) => r === remises[0]);
};

/** Conditions de l'offre en une phrase ; vide hors offre. */
export const phrasePromoGeo = () =>
  promoGeoActive()
    ? `Offre ${GEO_PROMO.nom} pour toute signature jusqu'au ${GEO_PROMO.finTexte} : le prix est conservé pendant tout l'engagement${grilleDecembreActive() ? ', soit 6 mois si vous vous engagez sur 6 mois au lieu de 3' : ''}.`
    : '';

/** Grille de décembre : « de 20 à 60 questions », « de 480 à 1 440 réponses ». */
export const fourchetteQuestions = () => {
  const q = PLANS_DECEMBRE.map((p) => p.questions ?? 0);
  return { min: Math.min(...q), max: Math.max(...q), reponsesMin: reponsesParMois(Math.min(...q)), reponsesMax: reponsesParMois(Math.max(...q)) };
};

export type FaqItem = { q: string; a: string };

const prixAudits = () => {
  const [express, complet] = auditsGeo();
  return `l'<strong>${express.name} à ${euros(express.price)} HT</strong> et l'<strong>${complet.name} à ${euros(complet.price)} HT</strong>`;
};
/** « Essentiel à 350 € HT au lieu de 500 €, … » pendant l'offre ; prix normaux ensuite. */
const prixPlans = () => {
  const [essentiel, croissance, autorite] = plansGeo();
  const un = (p: GeoOffer, unite = '') => {
    const barre = prixBarre(p);
    return `<strong>${p.name} à ${euros(prixDuJour(p))} HT${unite}</strong>${barre !== null ? ` au lieu de ${euros(barre)}` : ''}`;
  };
  return `${un(essentiel)}, ${un(croissance)} et ${un(autorite, ' par mois')}`;
};
/** La phrase de l'offre, précédée d'une espace ; rien hors offre. */
const suitePromo = () => (promoGeoActive() ? ` ${phrasePromoGeo()}` : '');

/** Paragraphe de l'offre en cours pour un article (repère <!-- offre-geo -->) ; vide hors offre. */
export const offreGeoHtml = () => {
  if (!promoGeoActive()) return '';
  const [essentiel, croissance, autorite] = plansGeo();
  const un = (p: GeoOffer) => `${p.name} à ${euros(prixDuJour(p))} HT au lieu de ${euros(p.price)}`;
  return `<p><strong>Offre ${GEO_PROMO.nom}</strong> : pour toute signature jusqu'au ${GEO_PROMO.finTexte}, ${un(essentiel)} par mois, ${un(croissance)} et ${un(autorite)}. Le prix est conservé pendant tout l'engagement${grilleDecembreActive() ? ' : engagez-vous sur 6 mois au lieu de 3 pour le garder 6 mois' : ''}. <a href="/accompagnement-geo/#formules">Voir les formules</a></p>`;
};

/** Espaces insécables de la typographie française (avant : ; ? ! », après «), pour les textes insérés dans les articles. */
const insecables = (s: string) => s.replace(/ ([?!:;»])/g, '\u00a0$1').replace(/« /g, '«\u00a0');

/**
 * Grille de décembre : tableau et conditions de Kameo dans le guide des prix (repère <!-- grille-kameo -->), avec
 * l'offre en cours sous le tableau (le repère <!-- offre-geo --> du guide est dans le bloc remplacé).
 */
const grilleKameoHtml = () => {
  const [express, complet] = AUDITS_DECEMBRE;
  const [essentiel, croissance, autorite] = PLANS_DECEMBRE;
  const ligne = (o: GeoOffer, prix: string, contenu: string) => `<tr><td>${o.name}</td><td>${prix}</td><td>${contenu}</td></tr>`;
  return insecables([
    '<table><thead><tr><th>Offre</th><th>Prix HT</th><th>Ce qui est inclus</th></tr></thead><tbody>',
    ligne(express, `${euros(express.price)}, une fois`, `20 questions posées 3 fois à ChatGPT, Gemini, Perplexity et Claude (${reponsesAudit(20)} réponses), diagnostic technique, plan d'action priorisé`),
    ligne(complet, `${euros(complet.price)}, une fois`, `40 questions (${reponsesAudit(40)} réponses), 3 concurrents comparés, les sources que les IA citent dans votre secteur, une restitution d'une heure en visio`),
    ligne(essentiel, `${euros(essentiel.price)} par mois`, `20 questions suivies toutes les deux semaines (${reponsesParMois(20)} réponses par mois), fiche ChatGPT, indexation dans Google, Bing et Brave, corrections techniques, 3 pages améliorées par mois, 3 actions par mois à faire vous-même, rapport mensuel`),
    ligne(croissance, `${euros(croissance.price)} par mois`, `40 questions (${reponsesParMois(40)} réponses par mois), 2 nouveaux contenus par mois, les erreurs des IA corrigées à la source, 2 inscriptions par mois dans les annuaires et sites d'avis, méthode de demande d'avis, 5 pages améliorées et un point mensuel`),
    ligne(autorite, `${euros(autorite.price)} par mois`, `60 questions (${nombre(reponsesParMois(60))} réponses par mois), fiches Google et Bing, 3 démarches par mois auprès de comparatifs et de médias, 4 nouveaux contenus, 10 pages améliorées, une heure par mois avec le fondateur`),
    '</tbody></table>',
    offreGeoHtml(),
    "<p>Les accompagnements demandent 3 mois d'engagement, puis sont sans engagement, résiliables par simple e-mail. L'audit est offert au démarrage, 12 mois coûtent le prix de 11, et le prix d'un audit est déduit si vous démarrez un accompagnement dans le mois qui suit. Un livrable prévu et non fait est déduit de la facture suivante.</p>",
    '<p>Essentiel se situe dans le bas de la fourchette relevée chez les agences. Tout est fait en interne, sans sous-traitance. Notre méthode est présentée sur la page <a href="/agence-geo/">agence GEO à Paris</a>.</p>',
  ].join(''));
};

/** Grille de décembre : réponse « Chez Kameo : … » de la FAQ du guide des prix (repère <!-- prix-kameo-mois -->). */
const prixKameoMois = () => {
  const liste = (prix: number[]) => `${prix.slice(0, -1).map(nombre).join(', ')} ou ${euros(prix[prix.length - 1])}`;
  const normal = `Chez Kameo : ${liste(PLANS_DECEMBRE.map((p) => p.price))} HT par mois, avec 3 mois d'engagement, puis sans engagement.`;
  const promo = PLANS_DECEMBRE.map((p) => p.promoPrice);
  return promoGeoActive() && promo.every((n) => n !== undefined)
    ? `${normal} Offre ${GEO_PROMO.nom} pour toute signature jusqu'au ${GEO_PROMO.finTexte} : ${liste(promo as number[])} HT par mois.`
    : normal;
};

/** Grille de décembre : la mesure de Kameo dans le guide sur la mesure (repère <!-- mesure-kameo -->). */
const mesureKameoHtml = () => {
  const f = fourchetteQuestions();
  return insecables(`<p>En accompagnement, nous établissons avec chaque client la liste de ses questions clés, celles que ses clients posent vraiment : ${f.min}, 40 ou ${f.max} selon la formule. Toutes les deux semaines, chacune est posée 3 fois à ChatGPT, Gemini, Perplexity et Claude dans des conditions comparables, soit de ${nombre(f.reponsesMin)} à ${nombre(f.reponsesMax)} réponses analysées par mois, et nous jugeons l'évolution sur plusieurs mois plutôt que sur une réponse isolée. Le rapport montre, IA par IA, la part des réponses qui citent l'entreprise, si elle est absente, mentionnée, citée avec un lien ou recommandée, qui apparaît à sa place, quelles sources sont citées et l'évolution d'un mois sur l'autre. Pas de « position », pas de garantie : une tendance, avec sa marge d'erreur.</p>`);
};

/**
 * Repères des articles du blog, remplacés à l'affichage (pas dans le cache des articles) :
 * <!-- offre-geo --> devient l'offre en cours (rien hors offre) ; à partir du 01/12/2026, les blocs
 * <!-- grille-kameo -->…<!-- /grille-kameo -->, <!-- prix-kameo-mois -->…<!-- /prix-kameo-mois -->
 * et <!-- mesure-kameo -->…<!-- /mesure-kameo --> sont remplacés par la grille de décembre ; avant,
 * leur texte (grille de novembre) reste tel quel.
 */
export const reperesGeo = (html: string): string => {
  let out = html.replace('<!-- offre-geo -->', offreGeoHtml());
  if (grilleDecembreActive()) {
    out = out
      .replace(/<!-- grille-kameo -->[\s\S]*?<!-- \/grille-kameo -->/, grilleKameoHtml())
      .replace(/<!-- prix-kameo-mois -->[\s\S]*?<!-- \/prix-kameo-mois -->/, insecables(prixKameoMois()))
      .replace(/<!-- mesure-kameo -->[\s\S]*?<!-- \/mesure-kameo -->/, mesureKameoHtml());
  }
  return out;
};

/** FAQ de /agence-geo/ : fonction, pour suivre l'offre en cours et la grille. */
export const faqAgence = (): FaqItem[] => {
  const dec = grilleDecembreActive();
  const [express] = auditsGeo();
  const [essentiel] = plansGeo();
  const f = fourchetteQuestions();
  return [
    {
      q: "Qu'est-ce qu'une agence GEO ?",
      a: `Une agence GEO aide une entreprise à apparaître dans les réponses des intelligences artificielles génératives : ChatGPT, Gemini, Perplexity, Claude ou les Aperçus IA de Google. Elle mesure ce que ces IA disent de l'entreprise, corrige ce qui les empêche de la citer (site illisible pour leurs robots, pages qui ne répondent pas aux questions, informations contradictoires) et renforce sa présence sur les sites qu'elles utilisent comme sources. Kameo propose un <a href="/audit-geo/">audit GEO</a> dès ${euros(express.price)} HT et un <a href="/accompagnement-geo/">accompagnement GEO</a> mensuel dès ${euros(prixDuJour(essentiel))} HT${promoGeoActive() ? ` (offre ${GEO_PROMO.nom} jusqu'au ${GEO_PROMO.finTexte})` : ''}.`,
    },
    {
      q: "Comment s'appelle le référencement sur les IA ?",
      a: "Le nom le plus répandu est <strong>GEO</strong>, pour Generative Engine Optimization, l'optimisation pour les moteurs génératifs. On parle aussi de référencement IA, de SEO pour l'IA, d'AEO (Answer Engine Optimization) ou de LLMO (optimisation pour les grands modèles de langage). Tous ces termes visent le même objectif : être cité et recommandé dans les réponses des IA.",
    },
    {
      q: 'Quelle est la différence entre le GEO et le SEO ?',
      a: "Le SEO vise une bonne place dans la liste de liens de Google. Le GEO vise une place dans la réponse rédigée par une IA, qui ne cite que quelques sources. Les bases sont communes (un site rapide, clair et bien structuré), mais le GEO travaille davantage la clarté des réponses, la cohérence de vos informations sur tout le web et ce que disent de vous les autres sites : avis, annuaires, comparatifs et médias.",
    },
    {
      q: 'Le GEO remplace-t-il le SEO ?',
      a: "Non, il le complète. Les IA qui cherchent sur le web s'appuient en partie sur les moteurs de recherche, et une page bien référencée a plus de chances d'être lue par elles. Google le rappelle dans son guide de mai 2026 : pour ses Aperçus IA, les bonnes pratiques restent celles du SEO. Un bon GEO commence donc par un site sain, puis ajoute le travail sur les réponses, la cohérence de vos informations et la notoriété hors de votre site.",
    },
    {
      q: 'Quelle est la différence entre GEO et AEO ?',
      a: "L'AEO (Answer Engine Optimization) est né avec les extraits optimisés de Google et les assistants vocaux : il vise à fournir la réponse directe à une question. Le GEO, plus récent, vise les réponses rédigées par les IA génératives, qui combinent plusieurs sources. En pratique, le travail est en grande partie le même : des réponses claires, une information fiable et des sources reconnues.",
    },
    {
      q: 'Combien coûte une agence GEO ?',
      a: dec
        ? `Chez Kameo, les prix sont publics. Audits ponctuels : ${prixAudits()}, en paiement unique. Accompagnements mensuels : ${prixPlans()}, avec 3 mois d'engagement, puis sans engagement, et l'audit offert au démarrage.${suitePromo()}`
        : `Chez Kameo, les prix sont publics. Audits ponctuels : ${prixAudits()}, en paiement unique. Accompagnements mensuels : ${prixPlans()}, avec un engagement de ${GEO_MIN_MONTHS} mois minimum et l'Audit GEO Express offert au démarrage.${suitePromo()}`,
    },
    {
      q: 'Quelles sont les meilleures agences GEO à Paris ?',
      a: `Il n'existe pas de classement officiel : chaque liste applique ses propres critères, et certaines sont publiées par des agences elles-mêmes. Pour comparer, regardez les prix affichés, la méthode de mesure et les résultats datés. À titre de repère, Kameo figure à la 8e place de la sélection <a href="https://www.lafabriquedunet.fr/agences/pages/agences-geo-ile-de-france-paris" target="_blank" rel="noopener">« Les meilleures agences GEO à Paris » de La Fabrique du Net</a> (relevé du 18 novembre 2026). Nous ne nous disons pas « la meilleure » : nos prix, notre méthode et nos résultats clients sont sur cette page pour que vous puissiez juger.`,
    },
    {
      q: 'Comment choisir une agence GEO à Paris ?',
      a: "Vérifiez quatre points : des prix publics, une mesure faite IA par IA avec les mêmes questions chaque mois, des corrections appliquées sur votre site et pas seulement conseillées, et aucune promesse de « première place dans ChatGPT ». Inutile en revanche de vous déplacer : chez Kameo, agence GEO dont l'adresse est au 9 rue des Colonnes, à Paris 2e, audits, restitutions et points mensuels se font en visio, à Paris comme partout en France.",
    },
    {
      q: 'Combien de temps faut-il pour être cité par ChatGPT ou les autres IA ?',
      a: dec
        ? "En général, les premiers effets se voient 4 à 6 semaines après les corrections. Ce délai n'est pas garanti : chaque IA renouvelle ses sources à son rythme, et une progression nette se mesure sur plusieurs mois. C'est pourquoi nos accompagnements suivent les mêmes questions toutes les deux semaines et font un premier bilan à 3 mois."
        : `En général, les premiers effets se voient 4 à 6 semaines après les corrections. Ce délai n'est pas garanti : chaque IA renouvelle ses sources à son rythme, et une progression nette se mesure sur plusieurs mois. C'est pourquoi nos accompagnements durent ${GEO_MIN_MONTHS} mois minimum et suivent les mêmes ${GEO_QUESTIONS} questions chaque mois.`,
    },
    {
      q: 'Peut-on garantir d’apparaître dans ChatGPT ?',
      a: "Non. Ce sont les IA qui choisissent les sources qu'elles citent, et leurs réponses varient d'une fois à l'autre. Méfiez-vous de toute promesse de « première place dans ChatGPT ». Kameo s'engage sur le travail réalisé et sur une mesure transparente de vos résultats, IA par IA, chaque mois.",
    },
    {
      q: 'Comment mesurer sa visibilité dans les IA ?',
      a: dec
        ? `On établit la liste des questions que vos clients posent vraiment, on les pose à chaque IA dans des conditions comparables d'un relevé à l'autre, puis on relève si votre entreprise est absente, mentionnée, citée avec un lien ou recommandée, qui apparaît à votre place et quelles sources sont citées. Le rang dans la réponse compte peu : il change presque à chaque essai. En accompagnement, Kameo suit de ${f.min} à ${f.max} questions selon la formule, posées 3 fois à ChatGPT, Gemini, Perplexity et Claude toutes les deux semaines : de ${nombre(f.reponsesMin)} à ${nombre(f.reponsesMax)} réponses analysées par mois.`
        : `On établit la liste des questions que vos clients posent vraiment, on les pose à chaque IA dans des conditions comparables d'un mois sur l'autre, puis on relève si votre entreprise est absente, mentionnée, citée avec un lien ou recommandée, qui apparaît à votre place et quelles sources sont citées. Le rang dans la réponse compte peu : il change presque à chaque essai. En accompagnement, Kameo suit ${GEO_QUESTIONS} questions clés sur ChatGPT, Gemini, Perplexity et Claude, soit ${GEO_QUESTIONS * GEO_ENGINES.length} réponses analysées chaque mois.`,
    },
    {
      q: 'Faut-il un fichier llms.txt ou des données structurées pour être cité ?',
      a: "Ni l'un ni l'autre ne suffit. Le fichier llms.txt, proposé en 2024, résume un site pour les modèles de langage, mais Google indique ne pas l'utiliser et une étude de SE Ranking sur environ 300 000 domaines n'a trouvé aucun lien avec les citations. Les données structurées (schema.org) restent utiles aux moteurs de recherche, mais un test d'Ahrefs publié en mai 2026 n'a mesuré aucun gain de citations après leur ajout. Les leviers sûrs sont ailleurs : l'accès des robots d'IA à votre site, des pages qui répondent clairement, des informations identiques partout et des mentions sur des sites reconnus.",
    },
    {
      q: 'Peut-on payer pour apparaître dans ChatGPT ?',
      a: "Pas dans la réponse elle-même. Depuis le 24 août 2026, ChatGPT affiche en France des publicités pour les utilisateurs des offres gratuite et Go, sous la réponse et signalées comme sponsorisées ; OpenAI affirme que les annonceurs n'influencent pas les réponses. La publicité achète un emplacement à côté de la réponse ; le GEO travaille la réponse.",
    },
    {
      q: 'Le GEO est-il utile pour une PME ou une entreprise locale ?',
      a: "Oui, souvent plus que pour une grande marque. Quand un client demande à une IA quel artisan, quel cabinet ou quelle agence choisir dans sa ville, elle ne cite que quelques noms. Une PME au site clair, présente dans les bons annuaires et bien notée peut en faire partie. Nos offres sont pensées pour les PME, les startups et les indépendants, partout en France.",
    },
    {
      q: 'Pourquoi choisir Kameo comme agence GEO ?',
      a: `Parce que nous construisons des sites : les corrections techniques sont appliquées par l'équipe qui développe des sites WordPress et sur-mesure depuis 2023, sans sous-traitance. Nos prix sont publics, la méthode est d'abord appliquée à notre propre site, et vous échangez directement avec les dirigeants, Benjamin Dayan et Louison Boutet, en visio, partout en France. Kameo est noté ${PROOF.avisNote}/5 sur Trustpilot (${PROOF.avisNombre} avis).`,
    },
  ];
};

/** FAQ de /audit-geo/ : fonction, pour suivre la grille. */
export const faqAudit = (): FaqItem[] => {
  const dec = grilleDecembreActive();
  return [
    {
      q: "Qu'est-ce qu'un audit GEO ?",
      a: "Un audit GEO, ou audit de visibilité IA, mesure la place de votre entreprise dans les réponses des intelligences artificielles et repère ce qui l'empêche d'y être citée. Kameo pose à ChatGPT, Gemini, Perplexity et Claude les questions de vos clients, analyse votre site (accès des robots, contenu, données structurées, cohérence des informations) et vous remet un plan d'action priorisé.",
    },
    {
      q: "Quel est le tarif d'un audit GEO ?",
      a: `Chez Kameo, ${prixAudits()}, en paiement unique, sans abonnement. Si vous passez à un <a href="/accompagnement-geo/">accompagnement GEO</a> dans le mois qui suit votre audit, son prix est déduit.`,
    },
    {
      q: 'Audit GEO Express ou Audit GEO Complet : lequel choisir ?',
      a: dec
        ? `L'Express mesure 20 questions de vos clients, posées 3 fois à chaque IA (${reponsesAudit(20)} réponses), diagnostique votre site et vous remet un plan d'action. Le Complet porte sur 40 questions (${reponsesAudit(40)} réponses) et ajoute la comparaison avec 3 concurrents directs, la liste des sites et médias que les IA citent dans votre secteur, et une restitution d'une heure en visio. Si vos concurrents apparaissent déjà dans les réponses des IA, choisissez le Complet.`
        : "L'Express vous dit où vous en êtes et quoi corriger en priorité. Le Complet ajoute la comparaison avec 3 concurrents directs, la liste des sites et médias que les IA citent comme sources dans votre secteur, et une restitution d'une heure en visio. Si vos concurrents apparaissent déjà dans les réponses des IA, choisissez le Complet.",
    },
    {
      q: "Quelles IA sont analysées pendant l'audit ?",
      a: "ChatGPT, Gemini, Perplexity et Claude, quatre des principaux assistants que vos clients interrogent pour choisir un prestataire. Les corrections recommandées servent aussi les Aperçus IA de Google et Copilot, qui s'appuient sur les moteurs de recherche.",
    },
    {
      q: 'Existe-t-il un audit GEO gratuit ?',
      a: "Des outils en ligne donnent gratuitement un score de visibilité IA, utile pour une première idée. Ils testent rarement les questions propres à votre métier et ne disent pas quoi corriger sur votre site, ni dans quel ordre. L'audit Kameo part des questions de vos clients, diagnostique votre site et vous remet un plan priorisé. Pour une première idée, faites notre <a href=\"/test-visibilite-ia/\">test gratuit en 10 questions</a> ; le diagnostic express de 30 minutes en visio, lui, est gratuit.",
    },
    {
      q: "Puis-je appliquer le plan d'action moi-même ?",
      a: "Oui. Le plan d'action est priorisé et rédigé pour être appliqué par vous ou par votre prestataire. Si vous préférez nous le confier, l'accompagnement GEO l'inclut, et le prix de l'audit est déduit si vous démarrez dans le mois.",
    },
    {
      q: 'Un audit GEO remplace-t-il un audit SEO ?',
      a: "Non, les deux se complètent. L'audit SEO regarde votre place dans les résultats de Google ; l'audit GEO regarde votre place dans les réponses des IA, ce qu'elles disent de vous et les sources qu'elles utilisent. Les points techniques communs, comme l'accès des robots ou la structure du site, sont vérifiés dans l'audit GEO.",
    },
    {
      q: "L'audit garantit-il que les IA me citeront ?",
      a: "Non : personne ne peut le garantir, ce sont les IA qui choisissent leurs sources. L'audit vous dit précisément où vous en êtes, pourquoi, et quoi faire en premier. C'est la base pour progresser.",
    },
  ];
};

/** FAQ de /accompagnement-geo/ : fonction, pour suivre l'offre en cours et la grille. */
export const faqAccompagnement = (): FaqItem[] => {
  if (!grilleDecembreActive()) {
    return [
      {
        q: "Qu'est-ce qu'un accompagnement GEO ?",
        a: `C'est un suivi mensuel de votre visibilité dans les réponses des IA, avec le travail qui va avec. Chaque mois, Kameo mesure ${GEO_QUESTIONS} questions clés sur ChatGPT, Gemini, Perplexity et Claude, applique les corrections sur votre site et, selon la formule, crée vos fiches, développe vos avis et rédige des contenus pensés pour les IA.`,
      },
      {
        q: 'Combien coûte un accompagnement GEO ?',
        a: `Trois formules à prix publics : ${prixPlans()}.${suitePromo()} L'Audit GEO Express et son plan d'action sont offerts au démarrage, et un mois est offert pour tout engagement annuel.`,
      },
      {
        q: `Pourquoi un engagement de ${GEO_MIN_MONTHS} mois minimum ?`,
        a: `Parce que les IA mettent du temps à prendre en compte les changements : les premiers effets se voient en général 4 à 6 semaines après les corrections, et nouvelles pages, fiches et avis ne pèsent vraiment qu'au fil des mois. ${GEO_MIN_MONTHS} mois, c'est le temps qu'il faut pour mesurer une vraie progression sur les mêmes ${GEO_QUESTIONS} questions.`,
      },
      {
        q: 'Quelle formule choisir ?',
        a: "<strong>Essentiel</strong> si vous voulez un site corrigé et une feuille de route pour agir vous-même à l'extérieur. <strong>Croissance</strong> si vous voulez que nous créions votre présence sur les plateformes, annuaires et comparatifs que les IA consultent. <strong>Autorité</strong> si votre secteur est disputé et que vous avez besoin de contenus réguliers pour devenir la référence.",
      },
      {
        q: 'Comment mesurez-vous ma visibilité chaque mois ?',
        a: `Nous établissons avec vous ${GEO_QUESTIONS} questions clés, celles que vos clients posent vraiment, et nous les posons chaque mois à ChatGPT, Gemini, Perplexity et Claude, dans des conditions comparables. Vous voyez, IA par IA, si vous êtes absent, mentionné, cité avec un lien ou recommandé, qui apparaît à votre place et comment cela évolue d'un mois sur l'autre.`,
      },
      {
        q: 'Comment collectez-vous les avis clients ?',
        a: "Avec l'offre Croissance, nous mettons en place une méthode pour demander un avis à vos vrais clients, au bon moment et sur les bonnes plateformes. Nous n'achetons pas d'avis et ne trions pas les clients sollicités : les faux avis sont interdits par le Code de la consommation (article L121-4), et les plateformes comme les IA s'en méfient.",
      },
      {
        q: 'Quelle différence avec un outil de suivi de visibilité IA ?',
        a: "Un outil mesure, mais il ne corrige pas votre site, ne crée pas vos fiches et n'écrit pas vos contenus. Nos accompagnements incluent la mesure et le travail, réalisé par notre équipe, sans sous-traitance.",
      },
      {
        q: 'Que faut-il vous fournir pour démarrer ?',
        a: "Un accès à votre site pour appliquer les corrections, la liste de vos services et de vos zones d'intervention, et le nom de vos principaux concurrents. Le reste se fait de notre côté, avec un rapport clair chaque mois.",
      },
      {
        q: 'Pouvez-vous garantir des résultats ?',
        a: "Personne ne peut garantir qu'une IA vous citera : ce sont elles qui choisissent leurs sources. Nous nous engageons sur le travail prévu dans votre formule et sur une mesure transparente de vos résultats, chaque mois.",
      },
    ];
  }
  const f = fourchetteQuestions();
  return [
    {
      q: "Qu'est-ce qu'un accompagnement GEO ?",
      a: `C'est un suivi de votre visibilité dans les réponses des IA, avec le travail qui la fait progresser. Kameo suit de ${f.min} à ${f.max} questions clés selon la formule, posées 3 fois à ChatGPT, Gemini, Perplexity et Claude toutes les deux semaines, corrige votre site, veille à l'indexation de vos pages, tient à jour votre fiche ChatGPT, améliore vos pages et, selon la formule, écrit de nouveaux contenus, fait corriger à la source les erreurs des IA, développe vos avis, crée vos fiches Google et Bing et vous fait citer par les sources des IA.`,
    },
    {
      q: 'Combien coûte un accompagnement GEO ?',
      a: `Trois formules à prix publics : ${prixPlans()}, avec 3 mois d'engagement, puis sans engagement.${suitePromo()} L'audit est offert au démarrage, et 12 mois coûtent le prix de 11.`,
    },
    {
      q: "Pourquoi 3 mois d'engagement ?",
      a: "Parce que trois mois, c'est six relevés : assez de réponses pour un premier bilan, IA par IA. En général, les premiers effets se voient 4 à 6 semaines après les corrections, sans garantie. Ensuite, la formule est sans engagement : vous restez si le travail vous convient, et vous pouvez résilier par simple e-mail, avec 30 jours de préavis.",
    },
    {
      q: 'Quelle formule choisir ?',
      a: "Elle dépend de l'étendue de votre activité. <strong>Essentiel</strong> pour une activité principale, sur une zone ou toute la France : votre site est corrigé et indexé, votre fiche ChatGPT tenue à jour, vos questions mesurées, et vous recevez chaque mois 3 actions à faire vous-même. <strong>Croissance</strong> jusqu'à 3 services ou 3 villes : nous écrivons 2 contenus par mois, faisons corriger à la source les erreurs des IA sur votre entreprise, vous inscrivons dans les annuaires et sites d'avis qu'elles citent et mettons en place la demande d'avis. <strong>Autorité</strong> jusqu'à 6 services ou villes, ou dans un secteur très disputé : nous créons et tenons à jour vos fiches Google et Bing, démarchons les comparatifs et les médias que les IA citent, et produisons 4 contenus par mois.",
    },
    {
      q: 'Puis-je changer de formule ?',
      a: 'Oui. Vers le haut à tout moment, sans nouvel engagement ; vers le bas à la fin de chaque mois, après les 3 premiers mois.',
    },
    {
      q: 'Créez-vous ma fiche ChatGPT ?',
      a: "Oui, dans les trois formules, si votre entreprise y est éligible. Depuis le 10 novembre 2026, ChatGPT permet aux entreprises de revendiquer gratuitement leur fiche depuis son Business Hub. Nous la revendiquons avec vous (la vérification se fait par SMS, appel ou enregistrement DNS), la complétons et la tenons à jour. Son tableau de bord (mentions, vues de la fiche et clics vers votre site) entre dans votre rapport mensuel. La fiche ne garantit pas d'être recommandé : ChatGPT continue de choisir ses sources.",
    },
    {
      q: 'Que faites-vous si une IA dit quelque chose de faux sur mon entreprise ?',
      a: "Avec Croissance et Autorité, nous repérons dans les réponses suivies les erreurs sur votre entreprise (adresse, prix, services, horaires), retrouvons le site qui les a diffusées et les faisons corriger à la source : nous corrigeons nous-mêmes votre site, et demandons la correction aux annuaires ou aux sites tiers. Les IA en tiennent compte à leur rythme, sans délai garanti.",
    },
    {
      q: "Vous occupez-vous de l'indexation de mes pages ?",
      a: "Oui, dans les trois formules. Une IA qui cherche sur le web ne peut citer qu'une page que son moteur connaît : Gemini et les Aperçus IA s'appuient sur Google, Copilot sur Bing, dont ChatGPT cite souvent les premiers résultats, et la recherche web de Claude sur Brave Search, qu'Anthropic liste parmi ses sous-traitants. Nous déclarons votre site dans la Search Console et dans Bing Webmaster Tools, branchons IndexNow pour signaler chaque nouvelle page, envoyons vos pages à Brave, puis vérifions chaque mois qu'elles sont indexées. Les moteurs restent seuls juges de ce qu'ils indexent.",
    },
    {
      q: 'Comment mesurez-vous ma visibilité ?',
      a: "Nous établissons avec vous la liste de vos questions (20, 40 ou 60 selon la formule), celles que vos clients posent vraiment. Toutes les deux semaines, chacune est posée 3 fois à ChatGPT, Gemini, Perplexity et Claude, dans des conditions comparables. Vous voyez, IA par IA, la part des réponses qui vous nomment, si vous êtes absent, mentionné, cité avec un lien ou recommandé, qui apparaît à votre place et quelles sources sont citées. Nous ne commentons une évolution que si elle dépasse la marge d'erreur de la mesure.",
    },
    {
      q: 'Comment collectez-vous les avis clients ?',
      a: "Avec les formules Croissance et Autorité, nous mettons en place une méthode pour demander un avis à vos vrais clients, au bon moment et sur les bonnes plateformes, avec des modèles de réponse. Nous n'achetons pas d'avis et ne trions pas les clients sollicités : les faux avis sont interdits par le Code de la consommation (article L121-4), et les plateformes comme les IA s'en méfient.",
    },
    {
      q: 'Quelle différence avec un outil de suivi de visibilité IA ?',
      a: "Un outil mesure, mais il ne corrige pas votre site, ne crée pas vos fiches et n'écrit pas vos contenus. Nos accompagnements incluent la mesure et le travail, réalisé par notre équipe, sans sous-traitance.",
    },
    {
      q: 'Que faut-il vous fournir pour démarrer ?',
      a: "Un accès à votre site pour appliquer les corrections, la liste de vos services et de vos zones d'intervention, et le nom de vos principaux concurrents. Le reste se fait de notre côté, avec un rapport clair chaque mois.",
    },
    {
      q: 'Pouvez-vous garantir des résultats ?',
      a: "Personne ne peut garantir qu'une IA vous citera : ce sont elles qui choisissent leurs sources. Nous garantissons en revanche nos livrables : tout livrable prévu dans votre formule et non fait dans le mois est déduit de votre facture suivante.",
    },
  ];
};
