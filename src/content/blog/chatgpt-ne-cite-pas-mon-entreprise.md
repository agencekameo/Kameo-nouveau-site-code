---
title: "Pourquoi ChatGPT ne cite pas mon entreprise (et comment y remédier)"
seoTitle: "Pourquoi ChatGPT ne cite pas mon entreprise : 8 causes | Kameo"
description: "Votre entreprise n'apparaît pas dans ChatGPT ? Un test de 10 minutes, puis 8 causes fréquentes : comment les vérifier et les corriger. Chiffres sourcés."
excerpt: "ChatGPT recommande vos concurrents, jamais vous ? Faites le constat en 10 minutes, puis passez en revue les 8 causes les plus fréquentes, avec pour chacune comment la vérifier et comment la corriger."
date: "2026-11-09T16:20:00+01:00"
modified: "2026-11-09T16:20:00+01:00"
image: "/wp-content/uploads/2026/11/kameo-chatgpt-ne-cite-pas-mon-entreprise.jpg"
imageWidth: 1600
imageHeight: 900
imageAlt: "Pourquoi ChatGPT ne vous cite pas : une réponse d'IA qui recommande vos concurrents, cités par plus de sources"
format: markdown
---
Si ChatGPT cite vos concurrents mais jamais votre entreprise, il y a en général une raison concrète : il ne peut pas lire votre site, il ne le trouve pas dans les moteurs de recherche, ou il trouve ailleurs plus d'informations sur vos concurrents (comparatifs, annuaires, avis). La plupart de ces causes se vérifient en quelques minutes, et chacune a sa correction.

Ce guide est un diagnostic : un test de 10 minutes, puis 8 causes à vérifier et à corriger. Il relève du [GEO](/glossaire-geo/#geo), l'optimisation pour les IA ; la méthode complète se trouve dans notre guide du [référencement ChatGPT](/blog/referencement-chatgpt/).

> **En bref.** Si même votre nom ne fait pas remonter votre site dans ChatGPT, la cause est sans doute technique : robot bloqué, mauvaise indexation, texte affiché en JavaScript. S'il vous connaît mais recommande vos concurrents, elle est plutôt hors de votre site : avis, annuaires, articles, comparatifs. Personne ne peut garantir une citation, mais chaque cause se travaille.

> **Qui a écrit ce guide ?** L'équipe de Kameo, agence web de 6 personnes fondée en 2023, qui crée des sites WordPress et des applications sur-mesure et propose des audits GEO. Nous vendons ce type de diagnostic et avons donc intérêt à vous en convaincre : c'est pourquoi chaque vérification décrite ici peut se faire sans nous, et chaque chiffre est sourcé en fin d'article. Informations vérifiées le 9 novembre 2026.

## Le test de 10 minutes : votre entreprise apparaît-elle dans ChatGPT ?

Ouvrez ChatGPT dans une discussion temporaire (sans la mémoire de vos échanges), puis :

1. **Préparez 5 questions** de vos clients, par exemple « quel [métier] choisir à [ville] ? », « quels sont les meilleurs [services] pour [type de client] ? » ou « que penses-tu de [votre entreprise] ? ».
2. **Posez chacune deux fois**, dans deux discussions séparées.
3. **Notez si vous êtes** absent, [mentionné](/glossaire-geo/#mention) (votre nom apparaît), [cité](/glossaire-geo/#citation) (un lien renvoie vers vous) ou [recommandé](/glossaire-geo/#recommandation) (présenté comme un bon choix).
4. **Ouvrez les sources** sous la réponse : qui apparaît à votre place, grâce à quels sites ?

| Ce que vous constatez | Causes à vérifier d'abord |
|---|---|
| Même avec votre nom, ChatGPT ne trouve pas votre site | 1, 2 et 3 : robot, indexation, JavaScript |
| Il décrit mal vos services, vos prix ou votre adresse | 4 et 5 : pages floues, informations contradictoires |
| Il recommande vos concurrents, pas vous | 6, 7 et 8 : autres sites, avis, comparatifs |

## 8 causes fréquentes, et comment les corriger

### 1. Le robot de ChatGPT est bloqué

La recherche de ChatGPT passe par un robot, [OAI-SearchBot](/glossaire-geo/#oai-searchbot) : selon OpenAI, un site qui le bloque n'apparaît pas dans ses réponses de recherche. Rien à voir avec [GPTBot](/glossaire-geo/#gptbot), qui collecte des textes pour l'entraînement : le bloquer ne vous retire pas de la recherche.

**Comment le vérifier.** Ouvrez le fichier [robots.txt](/glossaire-geo/#robots-txt) de votre site (votresite.fr/robots.txt) : il bloque le robot s'il contient `Disallow: /` sous `User-agent: OAI-SearchBot`, ou sous `User-agent: *` sans groupe propre à OAI-SearchBot. Demandez aussi à votre hébergeur si son pare-feu le refuse. Sous Cloudflare, qui a bloqué par défaut les robots d'IA de ses nouveaux clients dès juillet 2025 puis a revu ses réglages, vérifiez dans Security, puis Settings, que la recherche (« Search ») est autorisée.

**Comment corriger.** Autorisez-le (`User-agent: OAI-SearchBot`, puis `Allow: /`) et faites autoriser par votre hébergeur les adresses IP qu'OpenAI publie pour lui. OpenAI prend en compte la modification en 24 heures environ : la porte est ouverte, sans garantie de citation.

### 2. Votre site est mal indexé sur Google ou sur Bing

ChatGPT cite surtout des pages bien placées dans les moteurs : selon AirOps (mars 2026), 43,2 % des pages classées premières sur Google sont citées par ChatGPT ; un test plus petit de Seer Interactive (février 2025) trouvait 87 % de ses citations dans le top 20 de Bing.

**Comment le vérifier.** Tapez `site:votresite.fr` dans Google, puis dans Bing : vos pages principales doivent apparaître. Consultez aussi le rapport d'indexation de la Search Console (voir comment [utiliser la Google Search Console](/blog/utiliser-google-search-console-audit-seo/)) et de Bing Webmaster Tools.

**Comment corriger.** Déclarez votre site dans ces deux outils, envoyez-y votre plan du site et corrigez les pages exclues : balise « noindex » (interdiction d'indexer) oubliée, doublons, liens cassés.

### 3. Votre texte s'affiche en JavaScript

Certains sites n'affichent leur texte qu'après l'exécution d'un script : c'est le [rendu JavaScript](/glossaire-geo/#rendu-javascript). Lors d'une étude de Vercel (décembre 2024), aucun des grands robots d'IA (OpenAI, Anthropic, Perplexity…) n'exécutait le JavaScript ; Gemini faisait exception, car il s'appuie sur l'infrastructure de Googlebot.

**Comment le vérifier.** Faites un clic droit sur une page importante et affichez son code source. Cherchez-y (Ctrl+F) une phrase de votre texte ou un prix : s'il n'y est pas, il est chargé en JavaScript.

**Comment corriger.** Le contenu essentiel doit figurer dans la page envoyée par le serveur (rendu côté serveur ou pré-rendu). Un WordPress classique le fait naturellement ; un site construit avec React ou Vue doit être configuré en ce sens.

### 4. Vos pages ne répondent pas aux questions de vos clients

ChatGPT lit beaucoup et cite peu : selon AirOps, il ne cite que 15 % des pages qu'il consulte. Une page qui promet « des solutions adaptées à vos besoins » sans dire pour qui, où, en combien de temps ni à quel prix a peu de chances d'être retenue.

**Comment le vérifier.** Listez les 10 questions que vos clients posent avant d'acheter, et cherchez pour chacune la page qui y répond dès ses premières lignes.

**Comment corriger.** Une page par service, l'essentiel en haut, des faits énoncés directement : ce sont les consignes de Bing depuis février 2026. Ajoutez une FAQ et des éléments vérifiables : fourchettes de prix, délais, réalisations.

### 5. Vos informations se contredisent d'un site à l'autre

Ancienne adresse sur un annuaire, horaires différents sur votre fiche Google : face à des sources contradictoires, une IA peut hésiter, se tromper ou inventer (une [hallucination](/glossaire-geo/#hallucination)), et préférer un concurrent aux informations nettes. Bing recommande d'ailleurs des noms clairs et cohérents.

**Comment le vérifier.** Demandez à ChatGPT vos coordonnées, vos horaires et vos services, puis comparez avec la réalité et avec vos différentes fiches.

**Comment corriger.** Fixez une version de référence et appliquez-la partout, en commençant par votre site et votre fiche Google. Supprimez les doublons et les anciennes adresses.

### 6. Vous êtes absent des sites que ChatGPT lit

Pour recommander une entreprise, les IA s'appuient beaucoup sur d'autres sites, les [sources tierces](/glossaire-geo/#source-tierce) : annuaires, presse, avis, LinkedIn. Pour les [Aperçus IA](/glossaire-geo/#apercus-ia) de Google, Ahrefs (mai 2025) a mesuré que les [mentions d'une marque](/glossaire-geo/#mentions-de-marque) sont bien plus liées à sa visibilité (corrélation de 0,66) que les liens vers son site (0,22).

**Comment le vérifier.** Reprenez les sources de votre test et cherchez « [votre métier] [votre ville] » sur Google : figurez-vous dans les annuaires et les médias qui reviennent ?

**Comment corriger.** Complétez vos fiches dans les annuaires de votre métier, animez une page LinkedIn et proposez aux médias de votre secteur une information utile. Entreprise de proximité ? Voyez notre guide pour les [entreprises locales](/blog/chatgpt-entreprise-locale/).

### 7. Vous avez peu d'avis authentiques

Les plateformes d'[avis clients](/glossaire-geo/#avis-clients) font partie des sources que les IA consultent pour juger une entreprise. Trois avis anciens disent peu de chose de vous, à une IA comme à un prospect.

**Comment le vérifier.** Comptez vos avis récents sur Google et sur les plateformes de votre secteur, et comparez avec les concurrents cités à votre place.

**Comment corriger.** Demandez un avis à chaque client satisfait, au bon moment, avec un lien direct, et répondez à tous. Ne triez pas les clients sollicités : le règlement de Google Maps interdit de ne solliciter que les avis positifs.

### 8. Vos concurrents figurent dans les comparatifs « les meilleurs… »

Pour recommander logiciels, produits ou agences, ChatGPT s'appuie largement sur les [listes « les meilleurs… »](/glossaire-geo/#listes-meilleurs) : 43,8 % des pages qu'il cite dans ces réponses (Ahrefs, décembre 2025). Si vos concurrents y figurent et pas vous, la différence se joue souvent là.

**Comment le vérifier.** Cherchez « meilleur [votre métier] [votre ville] » sur Google, notez les comparatifs de la première page et regardez s'ils figurent dans les sources de ChatGPT.

**Comment corriger.** Écrivez aux auteurs des comparatifs indépendants avec des faits vérifiables : spécialité, références, avis. Si vous publiez votre propre comparatif, dites que vous y figurez et expliquez votre méthode.

## La part de hasard dans les réponses

Même quand tout va bien, ChatGPT ne vous citera pas à chaque fois. Selon SparkToro (janvier 2026), la même question redonne la même liste de marques moins d'une fois sur 100, et dans le même ordre environ une fois sur 1 000 : c'est la [variabilité des réponses](/glossaire-geo/#variabilite). Une absence isolée ne prouve rien. Oubliez aussi votre « place » dans la réponse : seule compte la fréquence à laquelle vous apparaissez, bien plus stable. Pour la suivre, voyez comment [mesurer sa visibilité dans les IA](/blog/mesurer-visibilite-ia/).

## Ce qu'il ne faut pas faire

- **Publier de faux avis.** C'est une pratique commerciale trompeuse (article L121-4 du Code de la consommation, 28°), et Google interdit d'offrir une contrepartie contre un avis.
- **Fabriquer des classements.** Un comparatif « indépendant » où vous vous placez premier trompe vos prospects ; un article de média payé sans le dire est aussi une pratique trompeuse (même article, 11°).
- **Cacher des consignes pour les IA.** Un texte invisible qui leur demande de vous recommander : Bing classe ces manipulations (« injections de prompt ») parmi les abus depuis février 2026.
- **Miser sur la publicité.** Depuis le 24 août 2026, ChatGPT affiche en France, pour les offres gratuite et Go, des annonces signalées comme sponsorisées, sous la réponse. OpenAI affirme que les annonceurs n'influencent pas les réponses : une annonce ne vous y fait pas entrer.

## Quand demander un audit

Un regard extérieur devient utile si vous restez absent sans trouver la cause, si votre site repose sur une technique que vous ne maîtrisez pas, si vous ignorez quelles sources comptent dans votre secteur, ou si ChatGPT répète des erreurs sur vous. C'est le métier d'une [agence GEO](/agence-geo/) : mesurer, trouver la cause, corriger dans l'ordre.

## Questions fréquentes

<details>
<summary>Pourquoi ChatGPT recommande-t-il mes concurrents et pas moi ?</summary>

Le plus souvent, parce qu'il trouve sur eux plus de sources : comparatifs, annuaires, avis, articles. Les sources affichées sous ses réponses montrent où ils sont présents et vous non : c'est là qu'il faut agir.

</details>

<details>
<summary>Mon entreprise n'apparaît pas du tout dans ChatGPT : par où commencer ?</summary>

Par la technique, plus rapide à vérifier : robots.txt et pare-feu qui laissent passer OAI-SearchBot, pages indexées sur Google et Bing, texte visible sans JavaScript. Ensuite : votre contenu, la cohérence de vos informations, votre présence sur d'autres sites.

</details>

<details>
<summary>ChatGPT me citait et ne me cite plus : que s'est-il passé ?</summary>

Reposez d'abord la question plusieurs fois : les réponses varient. Si l'absence se confirme, cherchez ce qui a changé : pare-feu, refonte qui a modifié le robots.txt ou passé le texte en JavaScript, concurrent entré dans un comparatif, avis qui se raréfient.

</details>

<details>
<summary>Combien de temps faut-il pour que les corrections se voient ?</summary>

Il n'existe pas de délai fiable. Un changement de robots.txt est pris en compte en 24 heures environ, mais une page doit encore être indexée, lue et jugée utile, et le travail sur les avis ou les comparatifs prend des mois. Mesurez dans la durée.

</details>

## Trouver précisément ce qui vous bloque

Pour un état des lieux précis, notre [audit GEO](/audit-geo/) pose les questions de vos clients à ChatGPT, Gemini, Perplexity et Claude, vérifie votre site et vous remet un plan d'action priorisé ; sa version complète vous compare à 3 concurrents directs et liste les sites que les IA citent dans votre secteur. Pour corriger et mesurer dans la durée, l'[accompagnement GEO](/accompagnement-geo/) suit 50 questions clés chaque mois. Rendez-vous en visio, partout en France.

## Sources

- OpenAI, [documentation des robots d'OpenAI](https://developers.openai.com/api/docs/bots).
- Cloudflare, [blocage par défaut](https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/) (juillet 2025), [réglages par usage](https://developers.cloudflare.com/changelog/post/2026-07-01-ai-traffic-options/) (juillet 2026) et [documentation](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/).
- AirOps, [rapport sur les citations de ChatGPT](https://www.airops.com/report/influence-of-retrieval-fanout-and-google-serps-in-chatgpt), mars 2026.
- Seer Interactive, [citations de ChatGPT et résultats de Bing](https://www.seerinteractive.com/insights/87-percent-of-searchgpt-citations-match-bings-top-results), février 2025.
- Vercel, [The rise of the AI crawler](https://vercel.com/blog/the-rise-of-the-ai-crawler), décembre 2024.
- Search Engine Journal, [Bing ajoute le GEO à ses consignes](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/), février 2026.
- Ahrefs, [mentions de marque et Aperçus IA](https://ahrefs.com/blog/ai-overview-brand-correlation/), mai 2025, et [listes « meilleurs X » et IA](https://ahrefs.com/blog/best-lists-research/), décembre 2025.
- Google, [règlement sur les contenus ajoutés dans Maps](https://support.google.com/contributionpolicy/answer/7400114?hl=fr).
- SparkToro, [l'inconstance des recommandations des IA](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/), janvier 2026.
- Légifrance, [article L121-4 du Code de la consommation](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563107).
- Siècle Digital, [la publicité arrive dans ChatGPT en France](https://siecledigital.fr/2026/08/20/la-publicite-arrive-dans-chatgpt-en-france-des-le-24-aout-voici-ce-qui-va-changer/), août 2026.
