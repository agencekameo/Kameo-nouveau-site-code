/**
 * Glossaire GEO (/glossaire-geo/) : définitions courtes, chiffres datés et sourcés (recherches du
 * 09/11/2026). Une ancre par terme (#id), reprise dans le DefinedTermSet de la page.
 * Les définitions sont en HTML simple (<a>) : affichées telles quelles, reprises sans balises
 * dans les données structurées.
 */
export type GlossaryTerm = { id: string; name: string; def: string };
export type GlossaryGroup = { id: string; title: string; terms: GlossaryTerm[] };

export const GLOSSAIRE_MAJ = '2026-11-09';

export const GLOSSAIRE: GlossaryGroup[] = [
  {
    id: 'bases',
    title: 'Les notions de base',
    terms: [
      {
        id: 'geo',
        name: 'GEO (Generative Engine Optimization)',
        def: "Ensemble des techniques qui rendent une entreprise visible dans les réponses des IA génératives : ChatGPT, Gemini, Perplexity, Claude ou les Aperçus IA de Google. Le terme vient d'une <a href=\"https://arxiv.org/abs/2311.09735\" target=\"_blank\" rel=\"noopener\">étude publiée en novembre 2023</a> par des chercheurs de Princeton et de l'IIT Delhi. Voir notre <a href=\"/agence-geo/\">agence GEO</a>.",
      },
      {
        id: 'referencement-ia',
        name: 'Référencement IA',
        def: "Nom courant du GEO en français : faire apparaître son entreprise dans les réponses des intelligences artificielles, comme le référencement naturel le fait dans les résultats de Google.",
      },
      {
        id: 'seo',
        name: 'SEO (référencement naturel)',
        def: "Optimisation d'un site pour apparaître dans les résultats des moteurs de recherche comme Google ou Bing. Le GEO s'appuie sur lui : une page bien référencée a plus de chances d'être lue, puis citée, par les IA.",
      },
      {
        id: 'aeo',
        name: 'AEO (Answer Engine Optimization)',
        def: "Optimisation pour les moteurs de réponse : fournir la réponse directe à une question. Le terme est né avec les extraits optimisés de Google et les assistants vocaux ; le travail recoupe largement celui du GEO.",
      },
      {
        id: 'llmo',
        name: 'LLMO (Large Language Model Optimization)',
        def: "Autre nom du GEO, centré sur les grands modèles de langage. Il est peu recherché en France.",
      },
      {
        id: 'ia-generative',
        name: 'IA générative',
        def: "Intelligence artificielle capable de produire du texte, des images ou du code à partir d'une demande. ChatGPT, Gemini, Claude et Perplexity en font partie.",
      },
      {
        id: 'llm',
        name: 'LLM (grand modèle de langage)',
        def: "Modèle d'IA entraîné sur de très grandes quantités de textes pour comprendre et produire du langage. C'est le moteur des assistants comme ChatGPT ou Claude.",
      },
    ],
  },
  {
    id: 'moteurs',
    title: 'Les IA et les moteurs',
    terms: [
      {
        id: 'moteur-de-reponse',
        name: 'Moteur de réponse',
        def: "Outil qui répond à une question par un texte rédigé, au lieu d'une liste de liens. Perplexity en est l'exemple type.",
      },
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        def: "Assistant d'OpenAI. Pour les questions d'actualité ou de choix, il cherche sur le web et cite ses sources. Voir notre guide du <a href=\"/blog/referencement-chatgpt/\">référencement ChatGPT</a>.",
      },
      {
        id: 'gemini',
        name: 'Gemini',
        def: "IA de Google, qui s'appuie sur la recherche Google pour répondre. Un site bien indexé et une fiche d'établissement Google cohérente comptent pour elle.",
      },
      {
        id: 'perplexity',
        name: 'Perplexity',
        def: "Moteur de réponse qui cite ses sources avec des liens à chaque réponse.",
      },
      {
        id: 'claude',
        name: 'Claude',
        def: "Assistant d'Anthropic, capable de chercher sur le web et de citer alors ses sources.",
      },
      {
        id: 'copilot',
        name: 'Copilot',
        def: "Assistant de Microsoft, qui s'appuie sur l'index de Bing : être bien indexé sur Bing compte aussi.",
      },
      {
        id: 'apercus-ia',
        name: 'Aperçus IA (AI Overviews)',
        def: "Résumés rédigés par l'IA en haut des résultats Google, disponibles en France depuis le 22 juillet 2026. Ils citent en moyenne près de 7 sources, dont 6 sur 10 sont déjà dans le top 10 des résultats (<a href=\"https://seranking.com/fr/blog/etude-apercus-ia-france/\" target=\"_blank\" rel=\"noopener\">SE Ranking, août 2026</a>).",
      },
      {
        id: 'mode-ia',
        name: 'Mode IA (AI Mode)',
        def: "Mode de recherche conversationnel de Google, lancé en France en même temps que les Aperçus IA. Il découpe la question en plusieurs recherches lancées en parallèle.",
      },
    ],
  },
  {
    id: 'mesure',
    title: 'La mesure',
    terms: [
      {
        id: 'mention',
        name: 'Mention',
        def: "Le nom de votre entreprise apparaît dans la réponse d'une IA, sans lien vers votre site.",
      },
      {
        id: 'citation',
        name: 'Citation',
        def: "La réponse renvoie, par un lien, vers votre site ou vers une page qui parle de vous.",
      },
      {
        id: 'recommandation',
        name: 'Recommandation',
        def: "L'IA présente votre entreprise comme un bon choix pour la question posée. C'est le résultat le plus précieux.",
      },
      {
        id: 'taux-de-citation',
        name: "Taux de citation (taux d'apparition)",
        def: "Part des questions suivies pour lesquelles votre entreprise apparaît dans la réponse d'une IA. Il se suit dans le temps, IA par IA.",
      },
      {
        id: 'part-de-voix-ia',
        name: 'Part de voix IA',
        def: "Votre présence dans les réponses des IA comparée à celle de vos concurrents, sur les mêmes questions.",
      },
      {
        id: 'panel-de-questions',
        name: 'Panel de questions (prompts)',
        def: "Liste fixe de questions que vos clients posent réellement, posées régulièrement aux IA pour mesurer votre visibilité. Kameo en suit 50 par mois dans ses <a href=\"/accompagnement-geo/\">accompagnements GEO</a>.",
      },
      {
        id: 'variabilite',
        name: 'Variabilité des réponses',
        def: "Une IA ne redonne presque jamais la même réponse : selon <a href=\"https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/\" target=\"_blank\" rel=\"noopener\">SparkToro (janvier 2026)</a>, la même liste de marques revient moins d'une fois sur 100. D'où l'intérêt de suivre une tendance plutôt qu'un rang.",
      },
      {
        id: 'recherche-sans-clic',
        name: 'Recherche sans clic (zero-click)',
        def: "Recherche où l'internaute obtient sa réponse sans cliquer sur un site, par exemple grâce à un Aperçu IA.",
      },
    ],
  },
  {
    id: 'technique',
    title: 'La technique',
    terms: [
      {
        id: 'robot-ia',
        name: "Robot d'indexation IA (crawler)",
        def: "Programme qui parcourt les sites pour le compte d'une IA : pour l'entraîner, ou pour trouver des sources au moment d'une question.",
      },
      {
        id: 'oai-searchbot',
        name: 'OAI-SearchBot',
        def: "Robot de recherche d'OpenAI : c'est lui qui permet à un site d'apparaître dans les réponses de recherche de ChatGPT (<a href=\"https://developers.openai.com/api/docs/bots\" target=\"_blank\" rel=\"noopener\">documentation d'OpenAI</a>).",
      },
      {
        id: 'gptbot',
        name: 'GPTBot',
        def: "Robot d'OpenAI qui collecte des contenus pour entraîner ses modèles. Le bloquer ne retire pas un site de la recherche de ChatGPT.",
      },
      {
        id: 'robots-txt',
        name: 'robots.txt',
        def: "Fichier placé à la racine d'un site qui indique aux robots ce qu'ils peuvent explorer. Un robots.txt trop strict, ou un pare-feu qui bloque les robots d'IA, peut rendre un site invisible pour elles.",
      },
      {
        id: 'llms-txt',
        name: 'llms.txt',
        def: "Fichier proposé en 2024 pour résumer un site à l'intention des modèles de langage. Google indique ne pas l'utiliser, et une étude de SE Ranking sur environ 300 000 domaines n'a trouvé aucun lien avec les citations.",
      },
      {
        id: 'donnees-structurees',
        name: 'Données structurées (schema.org)',
        def: "Balisage invisible qui décrit le contenu d'une page aux moteurs : entreprise, prix, questions fréquentes. Utiles aux moteurs de recherche, elles n'ont pas montré de gain de citations dans les IA lors d'un test d'Ahrefs publié en mai 2026.",
      },
      {
        id: 'rendu-javascript',
        name: 'Rendu JavaScript',
        def: "Contenu qui ne s'affiche qu'après l'exécution d'un script dans le navigateur. La plupart des robots d'IA n'exécutent pas le JavaScript : ce contenu leur reste invisible.",
      },
      {
        id: 'fan-out',
        name: 'Fan-out (sous-requêtes)',
        def: "Découpage d'une question en plusieurs recherches lancées en parallèle par l'IA. Selon <a href=\"https://www.airops.com/report/influence-of-retrieval-fanout-and-google-serps-in-chatgpt\" target=\"_blank\" rel=\"noopener\">AirOps (mars 2026)</a>, ChatGPT le fait dans 89,6 % de ses recherches.",
      },
      {
        id: 'rag',
        name: 'RAG (génération augmentée par récupération)',
        def: "Technique par laquelle une IA va chercher des documents, pages web ou bases internes, avant de rédiger sa réponse, au lieu de répondre de mémoire.",
      },
      {
        id: 'date-de-coupure',
        name: 'Date de coupure (knowledge cutoff)',
        def: "Date à laquelle s'arrêtent les données d'entraînement d'un modèle. Ce qu'il « sait » de vous sans chercher sur le web date d'avant.",
      },
      {
        id: 'hallucination',
        name: 'Hallucination',
        def: "Information fausse présentée comme vraie par une IA. Elle se corrige à la source : votre site, vos fiches et les pages qui parlent de vous.",
      },
    ],
  },
  {
    id: 'leviers',
    title: 'Les leviers',
    terms: [
      {
        id: 'source-tierce',
        name: 'Source tierce',
        def: "Site qui n'est pas le vôtre et qui parle de vous : annuaire, comparatif, média, plateforme d'avis. Les IA s'appuient beaucoup sur elles pour recommander une entreprise.",
      },
      {
        id: 'mentions-de-marque',
        name: 'Mentions de marque',
        def: "Apparitions du nom de votre entreprise sur le web, avec ou sans lien. <a href=\"https://ahrefs.com/blog/ai-overview-brand-correlation/\" target=\"_blank\" rel=\"noopener\">Ahrefs (mai 2025)</a> a mesuré qu'elles sont plus liées à la visibilité dans les Aperçus IA (corrélation de 0,66) que les liens vers le site (0,22).",
      },
      {
        id: 'listes-meilleurs',
        name: 'Listes « les meilleurs… »',
        def: "Comparatifs qui classent des produits ou des agences. Selon <a href=\"https://ahrefs.com/blog/best-lists-research/\" target=\"_blank\" rel=\"noopener\">Ahrefs (décembre 2025)</a>, ils forment 43,8 % des pages citées par ChatGPT pour recommander logiciels, produits et agences.",
      },
      {
        id: 'avis-clients',
        name: 'Avis clients',
        def: "Les plateformes d'avis font partie des sources que les IA consultent pour juger une entreprise. Seuls comptent les avis authentiques : les faux avis sont interdits par le Code de la consommation (article L121-4).",
      },
      {
        id: 'e-e-a-t',
        name: 'E-E-A-T',
        def: "Critères de qualité de Google : expérience, expertise, autorité et fiabilité. Un auteur identifié, des sources citées et des informations vérifiables y contribuent.",
      },
      {
        id: 'audit-geo',
        name: 'Audit GEO',
        def: "Diagnostic ponctuel de la visibilité d'une entreprise dans les IA et de ce qui bloque sur son site, avec un plan d'action priorisé. Voir notre <a href=\"/audit-geo/\">audit GEO</a>.",
      },
      {
        id: 'accompagnement-geo',
        name: 'Accompagnement GEO',
        def: "Suivi mensuel de la visibilité dans les IA, avec les corrections du site et les actions de notoriété. Voir notre <a href=\"/accompagnement-geo/\">accompagnement GEO</a>.",
      },
    ],
  },
];

export const GLOSSAIRE_TERMS = GLOSSAIRE.flatMap((g) => g.terms);
