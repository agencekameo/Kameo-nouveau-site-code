---
title: "Rendre un site WordPress lisible par les IA : le guide GEO"
seoTitle: "GEO WordPress : un site lisible par ChatGPT et les IA | Kameo"
description: "GEO WordPress : 10 points à vérifier pour que ChatGPT, Gemini et les autres IA lisent votre site, du robots.txt au llms.txt. Comment vérifier, quoi faire."
excerpt: "Réglage de visibilité, robots.txt, pare-feu, JavaScript, indexation, llms.txt : la liste de contrôle en 10 points pour qu'un site WordPress soit lisible par ChatGPT, Gemini, Perplexity et Claude, avec pour chacun comment vérifier et quoi faire."
date: "2026-11-09T16:40:00+01:00"
modified: "2026-11-09T16:40:00+01:00"
image: "/wp-content/uploads/2026/11/kameo-geo-wordpress.jpg"
imageWidth: 1600
imageHeight: 900
imageAlt: "Rendre un site WordPress lisible par ChatGPT, Gemini, Perplexity et Claude : la liste de contrôle GEO"
format: markdown
---
Pour qu'une IA cite votre site, ses robots doivent d'abord pouvoir le lire. Un site WordPress part plutôt bien : ses pages arrivent complètes chez ChatGPT, Gemini, Perplexity ou Claude. Mais une case cochée par erreur, un pare-feu trop strict ou un chiffre affiché par JavaScript suffisent à leur cacher une partie du site.

Ce guide applique à WordPress le [GEO (Generative Engine Optimization)](/glossaire-geo/#geo), aussi appelé [référencement IA](/glossaire-geo/#referencement-ia) : 10 points à contrôler, avec pour chacun comment vérifier et quoi faire.

> **En bref.** WordPress envoie des pages complètes, faciles à lire pour les robots des IA. Ce qui bloque : case « ne pas indexer » cochée, robots.txt ou pare-feu trop strict, contenus affichés en JavaScript, pages mal indexées ou floues. Données structurées et llms.txt restent facultatifs. Et un site lisible n'est jamais assuré d'être cité.

> **Qui a écrit ce guide ?** L'équipe de Kameo, une agence web qui crée des sites WordPress depuis 2023 et propose des audits et des accompagnements GEO : nous avons donc intérêt à ce que vous preniez le sujet au sérieux. Chiffres datés et sourcés, réglages vérifiés auprès de chaque éditeur. Informations vérifiées le 9 novembre 2026.

## Pourquoi WordPress part avec un avantage, et où ça coince

WordPress fabrique chaque page sur le serveur et l'envoie entière : textes, prix et coordonnées sont déjà dans le code que reçoit le robot. C'est un atout : selon Vercel (décembre 2024), les robots d'OpenAI, ClaudeBot (Anthropic) et PerplexityBot n'exécutent pas le JavaScript ; parmi les grands acteurs, seuls Gemini, adossé à l'infrastructure de Google, et AppleBot le font. Les blocages viennent plutôt de ce qu'on y ajoute : un réglage oublié, une extension de sécurité, un widget animé.

## La liste de contrôle en 10 points

### 1. La case « Demander aux moteurs de recherche de ne pas indexer ce site »

Elle se trouve dans **Réglages > Lecture**, rubrique « Visibilité par les moteurs de recherche ». Cochée pendant la construction du site, elle est parfois oubliée au lancement. Depuis WordPress 5.3, elle ajoute à chaque page une balise `noindex`, qui demande aux moteurs de ne pas l'indexer. Or Google ne reprend dans ses [Aperçus IA](/glossaire-geo/#apercus-ia) que des pages indexées.

- **Comment vérifier :** regardez Réglages > Lecture, ou cherchez « noindex » dans le code source d'une page.
- **Quoi faire :** décochez, enregistrez, puis renvoyez votre plan du site dans la Search Console (point 5).

### 2. Le fichier robots.txt, virtuel ou réel

Le [robots.txt](/glossaire-geo/#robots-txt) dit aux robots ce qu'ils peuvent explorer. Sans fichier à la racine, WordPress en génère un virtuel, qui n'interdit que l'administration ; un vrai fichier le remplace. Yoast SEO le modifie dans Outils > Éditeur de fichiers, Rank Math dans ses réglages généraux (mode avancé).

| Éditeur | Robot de recherche (à autoriser) | Robot d'entraînement (au choix) |
|---|---|---|
| OpenAI | [OAI-SearchBot](/glossaire-geo/#oai-searchbot) | [GPTBot](/glossaire-geo/#gptbot) |
| Anthropic | Claude-SearchBot | ClaudeBot |
| Perplexity | PerplexityBot | aucun déclaré |

Chez Google, le nom Google-Extended règle l'usage de vos pages par Gemini, pour s'entraîner et pour répondre ; il n'a aucun effet sur la recherche Google.

Piège classique : un robot nommé dans son propre groupe ignore les règles de `User-agent: *` ; les autres les suivent. Pour refuser l'entraînement d'OpenAI sans quitter sa recherche :

```
User-agent: GPTBot
Disallow: /

User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
```

- **Comment vérifier :** ouvrez `votresite.fr/robots.txt` et cherchez un `Disallow: /` sous `*` ou sous un robot de recherche.
- **Quoi faire :** retirez ces interdictions (OpenAI en tient compte en 24 heures environ). Notre [guide du référencement ChatGPT](/blog/referencement-chatgpt/) détaille le rôle de chaque robot.

### 3. L'extension de sécurité, le pare-feu et le CDN

Une extension de sécurité, le pare-feu de l'hébergeur ou un CDN (réseau qui sert votre site depuis des serveurs proches des visiteurs) peuvent bloquer les robots inconnus ou trop pressés. Cloudflare a annoncé en juillet 2025 bloquer par défaut les robots d'IA, en commençant par ses nouveaux clients ; ses valeurs par défaut ont changé depuis, et ses réglages se font par usage (recherche, agent, entraînement) dans Security > Settings.

- **Comment vérifier :** relisez ces réglages et le journal des requêtes bloquées, et interrogez votre hébergeur. Dans les journaux du serveur, les robots de recherche doivent recevoir des pages, pas des erreurs 403.
- **Quoi faire :** autorisez au moins les robots de recherche ; OpenAI et Perplexity publient leurs adresses IP. Gardez le pare-feu, indispensable pour [sécuriser un site WordPress](/blog/comment-securiser-site-wordpress/), mais réglez-le.

### 4. Le contenu affiché par JavaScript

Certains éléments n'apparaissent qu'après l'exécution d'un script : c'est le [rendu JavaScript](/glossaire-geo/#rendu-javascript). Le compteur animé d'Elementor (widget Counter), par exemple, écrit dans le code de la page son nombre de départ, 0 par défaut : un robot qui n'exécute pas le JavaScript peut lire « 0 client » au lieu de « 250 clients ». Même risque pour les avis chargés par un widget externe.

- **Comment vérifier :** clic droit, « Afficher le code source de la page », puis cherchez (Ctrl+F) vos prix, services, chiffres et avis. L'outil « Inspecter » ne convient pas : il montre la page après les scripts.
- **Quoi faire :** écrivez l'essentiel en texte simple, par exemple le chiffre du compteur dans une phrase.

### 5. L'indexation sur Google et sur Bing

Une page doit être indexée par Google pour figurer dans un Aperçu IA, et ChatGPT cite surtout des pages bien placées : selon AirOps (mars 2026), 43,2 % des pages classées premières sur Google sont citées par ChatGPT.

- **Comment vérifier :** dans la Search Console, consultez le rapport d'indexation des pages ; dans ses Paramètres, vérifiez que le site n'est pas exclu des fonctions d'IA de la recherche (il y est inclus par défaut). Déclarez aussi le site dans Bing Webmaster Tools.
- **Quoi faire :** envoyez votre plan du site (`/wp-sitemap.xml`, ou `/sitemap_index.xml` avec Yoast SEO) et corrigez les pages exclues, comme dans notre [audit SEO WordPress en 9 points](/blog/seo-audit-wordpress/).

### 6. La structure des pages

En février 2026, Bing a ajouté à ses consignes des conseils simples : énoncer les faits clairement, traiter un sujet par page, placer l'essentiel en haut. Et selon l'étude fondatrice du GEO (Princeton et IIT Delhi, novembre 2023), citer ses sources, ajouter des citations et des statistiques augmente jusqu'à environ 40 % la part d'une page reprise dans les réponses d'un banc d'essai.

- **Comment vérifier :** lisez le haut de chaque page de service et ses intertitres : comprend-on ce que vous faites, pour qui, où et à quel prix ?
- **Quoi faire :** une page par service, un résumé en haut, des intertitres qui reprennent les questions de vos clients, une FAQ. Dans Elementor, le réglage « Balise HTML » fait d'un titre un vrai H2 ou H3.

### 7. Les mêmes informations partout

Nom, adresse, téléphone, services, prix : ces informations figurent à plusieurs endroits du site et ailleurs (fiche Google, LinkedIn, annuaires). Si elles se contredisent, l'IA hésite. Bing recommande de nommer l'entreprise de la même façon partout, et Google rappelle que la fiche d'établissement aide les entreprises locales à apparaître dans ses réponses IA (mai 2026).

- **Comment vérifier :** comparez ces informations source par source, et demandez à ChatGPT « Que sais-tu de [votre entreprise] ? ».
- **Quoi faire :** corrigez à la source, à commencer par le site et la « Représentation du site » de Yoast SEO (nom, logo, réseaux sociaux). Si ChatGPT vous ignore, voyez [pourquoi ChatGPT ne cite pas votre entreprise](/blog/chatgpt-ne-cite-pas-mon-entreprise/).

### 8. Les données structurées et le fichier llms.txt

Les [données structurées](/glossaire-geo/#donnees-structurees) décrivent la page aux moteurs dans un langage commun, schema.org ; Yoast SEO en ajoute par défaut. Utiles à Google, elles ne sont pas nécessaires à ses fonctions d'IA (Google, mai 2026), et Ahrefs n'a mesuré aucun gain de citations après leur ajout (mai 2026).

Le [llms.txt](/glossaire-geo/#llms-txt), proposé en septembre 2024 par Jeremy Howard, présente les pages principales du site aux IA. Yoast SEO (Réglages > Fonctionnalités du site > Outils d'IA) et Rank Math (module llms.txt) le génèrent. Mais Google dit ignorer ce type de fichier (mai 2026), et SE Ranking n'a trouvé aucun lien avec les citations sur environ 300 000 domaines (novembre 2025).

- **Comment vérifier :** passez une page au [test des résultats enrichis](https://search.google.com/test/rich-results) de Google, et ouvrez `votresite.fr/llms.txt`.
- **Quoi faire :** une seule extension SEO, un balisage fidèle à ce que la page affiche, comme l'exige Google, et le llms.txt en option, après les points 1 à 7.

### 9. Des auteurs identifiés et une vraie page « À propos »

Google recommande de nommer l'auteur là où le lecteur s'y attend, avec un lien vers sa présentation ; pour lui, la confiance prime parmi les critères [E-E-A-T](/glossaire-geo/#e-e-a-t). Une page « À propos » factuelle donne aussi aux IA des faits à reprendre.

- **Comment vérifier :** vos articles nomment-ils leur auteur ? Votre page « À propos » dit-elle qui dirige l'entreprise, depuis quand et pour qui vous travaillez ?
- **Quoi faire :** remplissez la biographie du profil WordPress de chaque auteur, que le thème peut afficher, et rédigez une page « À propos » cohérente avec le point 7.

### 10. La vitesse

Nous n'avons trouvé aucune étude solide montrant qu'une page rapide est plus souvent citée par les IA. Mais Google recommande de bons Core Web Vitals, et il explore moins un site qui ralentit ou renvoie des erreurs.

- **Comment vérifier :** le rapport Core Web Vitals de la Search Console, ou PageSpeed Insights.
- **Quoi faire :** une seule extension de cache, des images légères : voir notre guide pour [améliorer les Core Web Vitals d'un site WordPress](/blog/core-web-vitals-wordpress/).

## Le récapitulatif

| Point | Où vérifier | Priorité |
|---|---|---|
| 1. Visibilité par les moteurs | Réglages > Lecture | Bloquant |
| 2. robots.txt | /robots.txt | Bloquant |
| 3. Sécurité, pare-feu, CDN | Réglages, journaux | Bloquant |
| 4. JavaScript | Code source de la page | Important |
| 5. Indexation | Search Console, Bing | Important |
| 6. Structure des pages | Haut de page, intertitres | Important |
| 7. Informations identiques | Site, fiche Google, annuaires | Important |
| 8. Données structurées, llms.txt | Test des résultats enrichis | Facultatif |
| 9. Auteurs, « À propos » | Articles, page « À propos » | Utile |
| 10. Vitesse | Core Web Vitals | Utile |

## Ce que fait Kameo sur les sites WordPress

Kameo crée des sites WordPress, avec Elementor Pro ou un thème codé selon le projet, en interne et sans sous-traitance. Nous avons d'abord appliqué notre méthode GEO à notre propre site, sans résultats chiffrés publiés à ce jour. Pour un site existant, nos audits GEO vérifient l'accès des robots, le contenu, les données structurées et la cohérence des informations, puis posent les questions de vos clients à ChatGPT, Gemini, Perplexity et Claude. Une [refonte WordPress](/refonte-wordpress/) est aussi le bon moment pour tout régler.

## Questions fréquentes sur le GEO et WordPress

<details>
<summary>Faut-il une extension spéciale pour être cité par ChatGPT ?</summary>

Non. Une extension SEO comme Yoast SEO ou Rank Math suffit pour le robots.txt, le plan du site, les données structurées et le llms.txt. Méfiez-vous de toute extension qui promet des citations.

</details>

<details>
<summary>Faut-il créer un fichier llms.txt sur WordPress ?</summary>

C'est facultatif : Yoast SEO et Rank Math le génèrent, mais Google dit l'ignorer et aucune étude n'a montré de lien avec les citations. Réglez d'abord les points 1 à 7.

</details>

<details>
<summary>Un site fait avec Elementor est-il lisible par les IA ?</summary>

Oui pour l'essentiel : Elementor produit, comme WordPress, des pages complètes côté serveur. Vérifiez seulement les éléments animés et les contenus chargés par des scripts (point 4).

</details>

<details>
<summary>Combien de temps après ces corrections serai-je cité ?</summary>

Personne ne peut le dire, ni garantir une citation. OpenAI tient compte d'un nouveau robots.txt en 24 heures environ, mais le reste évolue plus lentement : apprenez à [mesurer votre visibilité dans les IA](/blog/mesurer-visibilite-ia/) sur plusieurs mois.

</details>

## Faire vérifier votre site WordPress

Vous pouvez faire ces contrôles vous-même. Pour un état des lieux, notre [audit GEO](/audit-geo/) vérifie votre site, pose les questions de vos clients aux IA et vous remet un plan d'action priorisé. L'[accompagnement GEO](/accompagnement-geo/) applique ensuite les corrections techniques et mesure chaque mois votre visibilité sur 50 questions clés. Notre méthode est détaillée sur la page [agence GEO](/agence-geo/).

## Sources

- WordPress, [réglages de lecture](https://wordpress.org/documentation/article/settings-reading-screen/), [version 5.3](https://make.wordpress.org/core/2019/09/02/changes-to-prevent-search-engines-indexing-sites/) et [robots.txt virtuel](https://developer.wordpress.org/reference/functions/do_robots/).
- Vercel, [robots d'IA et JavaScript](https://vercel.com/blog/the-rise-of-the-ai-crawler), décembre 2024.
- Yoast, [robots.txt](https://yoast.com/help/how-to-edit-robots-txt-through-yoast/), [llms.txt](https://yoast.com/help/enable-llmstxt/) et [représentation du site](https://yoast.com/help/yoast-seo-settings-site-representation/) ; Rank Math, [robots.txt](https://rankmath.com/kb/how-to-edit-robots-txt-with-rank-math/) et [llms.txt](https://rankmath.com/kb/llms-txt/).
- Robots d'[OpenAI](https://developers.openai.com/api/docs/bots), d'[Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), de [Perplexity](https://docs.perplexity.ai/guides/bots) et de [Google](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) ; IETF, [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html), septembre 2022.
- Cloudflare, [blocage par défaut](https://blog.cloudflare.com/content-independence-day-no-ai-crawl-without-compensation/), juillet 2025, et [réglages actuels](https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/), novembre 2026.
- Elementor, [code du widget Counter](https://github.com/elementor/elementor/blob/main/includes/widgets/counter.php).
- Google, [guide sur ses fonctions d'IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), mai 2026, et [réglage de la Search Console](https://support.google.com/webmasters/answer/16908024?hl=fr).
- AirOps, [étude sur les sources de ChatGPT](https://www.airops.com/report/influence-of-retrieval-fanout-and-google-serps-in-chatgpt), mars 2026.
- Search Engine Journal, [Bing ajoute le GEO à ses consignes](https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/), février 2026.
- Aggarwal et al., [GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735), novembre 2023.
- Google, [règles des données structurées](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) ; Ahrefs, [données structurées et citations des IA](https://ahrefs.com/fr/blog/citations-ia-schema/), mai 2026.
- [llmstxt.org](https://llmstxt.org/), septembre 2024 ; Search Engine Journal, [étude de SE Ranking](https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/), novembre 2025.
- Google, [contenus utiles](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) et [exploration](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget).
