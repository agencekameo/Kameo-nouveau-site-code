/**
 * Offres GEO (visibilité dans les réponses des IA) : source unique des prix, des offres et des
 * FAQ des pages /agence-geo/, /audit-geo/ et /accompagnement-geo/, reprise par leurs données
 * structurées, llms.txt et la recherche interne.
 *
 * Offres : PDF « Offres GEO » de Benjamin (novembre 2026). Prix relevés le 09/11/2026 à sa
 * demande : Essentiel 290 → 500 € HT par mois ; puis, le même jour, Croissance 390 → 700 et
 * Autorité 690 → 1 000 € HT par mois, Audit Express 490 → 500 et Audit Complet 790 → 800 € HT
 * (« croissance 700€, autorité 1000€ », « 500€ express, 800€ complet »).
 *
 * Les réponses des FAQ sont en HTML simple (<strong>, <a>) : affichées telles quelles et
 * reprises sans balises dans le FAQPage, pour que le balisage décrive exactement la page.
 */
import { PROOF } from '@/lib/site';

/** Les 4 IA interrogées dans les audits et la mesure mensuelle. */
export const GEO_ENGINES = ['ChatGPT', 'Gemini', 'Perplexity', 'Claude'] as const;
/** Questions clés mesurées chaque mois dans les accompagnements. */
export const GEO_QUESTIONS = 50;
/** Engagement minimum des accompagnements, en mois. */
export const GEO_MIN_MONTHS = 6;

export type GeoOffer = {
  id: string;
  name: string;
  /** Prix HT, en euros (par mois pour les accompagnements). */
  price: number;
  monthly: boolean;
  /** Pour qui, en une phrase. */
  tagline: string;
  items: string[];
  featured?: boolean;
  cta: string;
};

export const GEO_AUDITS: GeoOffer[] = [
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

export const GEO_PLANS: GeoOffer[] = [
  {
    id: 'essentiel',
    name: 'Essentiel',
    price: 500,
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

/** Conditions des accompagnements (PDF « Offres GEO »). */
export const GEO_TERMS = [
  `<strong>${GEO_MIN_MONTHS} mois minimum</strong> sur les accompagnements, le temps que les IA prennent en compte les changements.`,
  "<strong>1 mois offert</strong> pour tout engagement annuel, quel que soit l'accompagnement choisi.",
  '<strong>Audit déduit</strong> si vous passez à un accompagnement dans le mois qui suit votre audit.',
];

/** « 1 000 € » : espaces insécables entre les milliers et avant l'euro. */
export const euros = (n: number) => n.toLocaleString('fr-FR').replace(/\s/g, ' ') + ' €';

export type FaqItem = { q: string; a: string };

const [express, complet] = GEO_AUDITS;
const [essentiel, croissance, autorite] = GEO_PLANS;
const prixAudits = `l'<strong>${express.name} à ${euros(express.price)} HT</strong> et l'<strong>${complet.name} à ${euros(complet.price)} HT</strong>`;
const prixPlans = `<strong>${essentiel.name} à ${euros(essentiel.price)} HT</strong>, <strong>${croissance.name} à ${euros(croissance.price)} HT</strong> et <strong>${autorite.name} à ${euros(autorite.price)} HT par mois</strong>`;

export const FAQ_AGENCE: FaqItem[] = [
  {
    q: "Qu'est-ce qu'une agence GEO ?",
    a: `Une agence GEO aide une entreprise à apparaître dans les réponses des intelligences artificielles génératives : ChatGPT, Gemini, Perplexity, Claude ou les Aperçus IA de Google. Elle mesure ce que ces IA disent de l'entreprise, corrige ce qui les empêche de la citer (site illisible pour leurs robots, pages qui ne répondent pas aux questions, informations contradictoires) et renforce sa présence sur les sites qu'elles utilisent comme sources. Kameo propose un <a href="/audit-geo/">audit GEO</a> dès ${euros(express.price)} HT et un <a href="/accompagnement-geo/">accompagnement GEO</a> mensuel dès ${euros(essentiel.price)} HT.`,
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
    a: `Chez Kameo, les prix sont publics. Audits ponctuels : ${prixAudits}, en paiement unique. Accompagnements mensuels : ${prixPlans}, avec un engagement de ${GEO_MIN_MONTHS} mois minimum et l'Audit GEO Express offert au démarrage.`,
  },
  {
    q: 'Combien de temps faut-il pour être cité par ChatGPT ou les autres IA ?',
    a: `Il n'y a pas de délai fixe : chaque IA met à jour ses sources à son rythme. Les corrections techniques peuvent produire leurs premiers effets en quelques semaines, mais une progression nette se mesure en général sur plusieurs mois. C'est pourquoi nos accompagnements durent ${GEO_MIN_MONTHS} mois minimum et suivent les mêmes ${GEO_QUESTIONS} questions chaque mois.`,
  },
  {
    q: 'Peut-on garantir d’apparaître dans ChatGPT ?',
    a: "Non. Ce sont les IA qui choisissent les sources qu'elles citent, et leurs réponses varient d'une fois à l'autre. Méfiez-vous de toute promesse de « première place dans ChatGPT ». Kameo s'engage sur le travail réalisé et sur une mesure transparente de vos résultats, IA par IA, chaque mois.",
  },
  {
    q: 'Comment mesurer sa visibilité dans les IA ?',
    a: `On établit la liste des questions que vos clients posent vraiment, on les pose à chaque IA dans des conditions comparables d'un mois sur l'autre, puis on relève si votre entreprise est absente, mentionnée, citée avec un lien ou recommandée, qui apparaît à votre place et quelles sources sont citées. Le rang dans la réponse compte peu : il change presque à chaque essai. En accompagnement, Kameo suit ${GEO_QUESTIONS} questions clés sur ChatGPT, Gemini, Perplexity et Claude, soit ${GEO_QUESTIONS * GEO_ENGINES.length} réponses analysées chaque mois.`,
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

export const FAQ_AUDIT: FaqItem[] = [
  {
    q: "Qu'est-ce qu'un audit GEO ?",
    a: "Un audit GEO, ou audit de visibilité IA, mesure la place de votre entreprise dans les réponses des intelligences artificielles et repère ce qui l'empêche d'y être citée. Kameo pose à ChatGPT, Gemini, Perplexity et Claude les questions de vos clients, analyse votre site (accès des robots, contenu, données structurées, cohérence des informations) et vous remet un plan d'action priorisé.",
  },
  {
    q: "Quel est le tarif d'un audit GEO ?",
    a: `Chez Kameo, ${prixAudits}, en paiement unique, sans abonnement. Si vous passez à un <a href="/accompagnement-geo/">accompagnement GEO</a> dans le mois qui suit votre audit, son prix est déduit.`,
  },
  {
    q: 'Audit GEO Express ou Audit GEO Complet : lequel choisir ?',
    a: "L'Express vous dit où vous en êtes et quoi corriger en priorité. Le Complet ajoute la comparaison avec 3 concurrents directs, la liste des sites et médias que les IA citent comme sources dans votre secteur, et une restitution d'une heure en visio. Si vos concurrents apparaissent déjà dans les réponses des IA, choisissez le Complet.",
  },
  {
    q: "Quelles IA sont analysées pendant l'audit ?",
    a: "ChatGPT, Gemini, Perplexity et Claude, quatre des principaux assistants que vos clients interrogent pour choisir un prestataire. Les corrections recommandées servent aussi les Aperçus IA de Google et Copilot, qui s'appuient sur les moteurs de recherche.",
  },
  {
    q: 'Existe-t-il un audit GEO gratuit ?',
    a: "Des outils en ligne donnent gratuitement un score de visibilité IA, utile pour une première idée. Ils testent rarement les questions propres à votre métier et ne disent pas quoi corriger sur votre site, ni dans quel ordre. L'audit Kameo part des questions de vos clients, diagnostique votre site et vous remet un plan priorisé. L'appel de 30 minutes pour en parler, lui, est gratuit.",
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

export const FAQ_ACCOMPAGNEMENT: FaqItem[] = [
  {
    q: "Qu'est-ce qu'un accompagnement GEO ?",
    a: `C'est un suivi mensuel de votre visibilité dans les réponses des IA, avec le travail qui va avec. Chaque mois, Kameo mesure ${GEO_QUESTIONS} questions clés sur ChatGPT, Gemini, Perplexity et Claude, applique les corrections sur votre site et, selon la formule, crée vos fiches, développe vos avis et rédige des contenus pensés pour les IA.`,
  },
  {
    q: 'Combien coûte un accompagnement GEO ?',
    a: `Trois formules à prix publics : ${prixPlans}. L'Audit GEO Express et son plan d'action sont offerts au démarrage, et un mois est offert pour tout engagement annuel.`,
  },
  {
    q: `Pourquoi un engagement de ${GEO_MIN_MONTHS} mois minimum ?`,
    a: `Parce que les IA mettent du temps à prendre en compte les changements : nouvelles pages, données structurées, fiches et avis ne sont pas repris du jour au lendemain. ${GEO_MIN_MONTHS} mois, c'est le temps qu'il faut pour mesurer une vraie progression sur les mêmes ${GEO_QUESTIONS} questions.`,
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
    q: "Comment collectez-vous les avis clients ?",
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
