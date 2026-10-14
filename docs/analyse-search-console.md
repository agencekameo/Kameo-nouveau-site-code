# Analyse Search Console et tri du blog

Source : exports Search Console du 13/10/2026, 12 derniers mois, recherche Web
(« Performances » et « Fonctionnalités d'IA générative »). Les exports ne croisent pas
requêtes et pages : les rapprochements requête → page ci-dessous sont déduits des sujets.

## 1. Vue d'ensemble

| Indicateur (12 mois)          | Valeur          |
| ----------------------------- | --------------- |
| Clics                         | 383             |
| Impressions                   | 43 931          |
| CTR moyen                     | 0,87 %          |
| Position moyenne              | ≈ 29            |
| Impressions dans les réponses IA de Google | 255 (depuis mai 2026) |
| Mobile / ordinateur           | 114 / 267 clics (CTR mobile 1,13 %, ordinateur 0,80 %) |

### Évolution mensuelle

| Mois     | Clics | Impressions | Position |
| -------- | ----: | ----------: | -------: |
| 2025-10  | 25    | 1 632       | 45,7     |
| 2025-11  | 37    | 1 743       | 46,8     |
| 2025-12  | 0     | 0           | —        |
| 2026-01  | 0     | 0           | —        |
| 2026-02  | 4     | 61          | 18,4     |
| 2026-03  | 67    | 5 783       | 15,6     |
| 2026-04  | 26    | 3 267       | 11,8     |
| 2026-05  | 61    | 2 500       | 14,9     |
| 2026-06  | 47    | 5 075       | 20,1     |
| 2026-07  | 41    | 6 459       | 30,7     |
| 2026-08  | 30    | 9 429       | 38,6     |
| 2026-09  | 31    | 5 936       | 38,8     |
| 2026-10* | 14    | 2 046       | 39,5     |

\* jusqu'au 10/10.

À retenir :

- **Décembre 2025 et janvier 2026 sont vides** : aucune impression pendant deux mois. Le site était
  très probablement hors ligne ou bloqué (noindex, changement de domaine ou de propriété). À vérifier,
  et à éviter absolument au moment de la bascule vers Next.js.
- **Depuis juin, les impressions montent mais la position moyenne s'effondre (15 → 39) et les clics
  baissent.** Le site apparaît sur beaucoup plus de requêtes, mais loin (pages 3 à 5) : c'est l'effet
  des dizaines d'articles « audit SEO » et « Google My Business » produits en série, qui diluaient le
  site. Le thème a commencé à les désindexer début octobre ; le tri ci-dessous termine le travail.
- **Les réponses IA de Google (AI Overviews) montent depuis juillet** : 6 impressions en juin, 94 en
  août, 45 sur les 10 premiers jours d'octobre. C'est le canal qui progresse.

### Marque contre hors marque

Sur les requêtes identifiées par Google (les requêtes rares sont anonymisées) :

- requêtes de marque (« agence kameo », « kameo », « kaméo ») : **152 clics sur 169, soit 90 %** ;
- 990 requêtes hors marque : **17 clics** pour 32 361 impressions.

Le site vit aujourd'hui de sa notoriété (Trustpilot, bouche-à-oreille, Ads) et le référencement
hors marque ne rapporte presque rien. Les pages qui vendent sont trop loin :

| Requête                         | Impressions | Position | Page visée                 |
| ------------------------------- | ----------: | -------: | -------------------------- |
| agence wordpress paris          | 2 067       | 39       | /agence-wordpress-paris/   |
| forfait maintenance wordpress   | 1 269       | 32       | /maintenance-wordpress/    |
| maintenance wordpress paris     | 609         | 19       | /maintenance-wordpress/    |
| agence motion design paris      | 599         | 75       | /expertises-motion/        |
| agence seo paris                | 499         | 35       | aucune page de service SEO |
| refonte site wordpress agence   | 407         | 23       | /refonte-wordpress/        |
| tarif maintenance wordpress     | 351         | 41       | /maintenance-wordpress/    |
| agence de branding paris        | 277         | 65       | /expertises-branding/      |
| création site wordpress paris   | 238         | 44       | /creation-site-wordpress/  |
| création site internet avocats  | 217         | 78       | (article supprimé)         |

### Répartition par type de page

| Type          | URLs vues | Clics | Impressions | Impressions IA |
| ------------- | --------: | ----: | ----------: | -------------: |
| Pages         | 45        | 328   | 22 194      | 106            |
| Réalisations  | 30        | 13    | 1 280       | 3              |
| Blog          | 145       | 49    | 23 282      | 151            |

La page d'accueil fait à elle seule 303 clics (marque). Le blog fait la moitié des impressions mais
13 % des clics.

## 2. Problèmes relevés

1. **Cannibalisation des pages de service par le blog.** Les articles « tarifs maintenance WordPress »,
   « choisir une agence WordPress à Paris », « réussir sa refonte WordPress », « tarif création site
   internet »… visent exactement les requêtes des pages qui vendent. Google hésite entre les deux et ne
   pousse aucune des deux : `/maintenance-wordpress/` fait 3 586 impressions en position 38 avec
   **0 clic**.
2. **Grappes d'articles quasi identiques.** 25 articles sur l'audit SEO (définition, étapes, technique,
   complet, approfondi, avant refonte…), 19 sur Google My Business, 7 sur « comment choisir une agence
   web ». Chaque grappe se partage les mêmes requêtes.
3. **Sujets hors offre** (Google My Business, extensions de navigateur, inbound, emailing) : ils
   attirent des visiteurs qui ne deviendront jamais clients.
4. **Anciennes URLs encore vues par Google** (ancienne arborescence `/expertises/…`, brouillons
   Elementor, articles publiés à la racine, archives de catégories) : désormais redirigées ou en 410.
5. **Incohérences de chiffres** : 21 avis sur le silo WordPress contre 23 ailleurs, « +47 projets »
   sur la landing contre « plus de 50 » : corrigé.
6. **Implantation** : la page « Notre agence » parlait de « 2 villes (Toulouse & Paris) » alors que les
   données structurées et le llms.txt affirment une adresse unique à Paris. **Décision (14/10/2026) :
   Paris uniquement**, la mention de Toulouse est retirée. Les impressions sur « agence web toulouse »
   (621) vont disparaître : c'est voulu, ces visiteurs cherchent une agence locale à Toulouse. Les
   mentions de Toulouse qui restent concernent le client Défikart (karting à Toulouse).

## 3. Règles du tri

1. **Performance** : un article est conservé s'il a obtenu **au moins un clic** ou **au moins une
   impression dans les réponses IA de Google** sur 12 mois. Sinon, il est supprimé.
2. **Cannibalisation** : parmi les articles conservés, quand deux articles visent la même intention,
   on garde le plus performant (clics, puis impressions IA, puis position). Quand un article vise
   l'intention d'une page de service, il est supprimé au profit de la page de service.
3. **Aucune URL ne meurt** : chaque article supprimé redirige (301) vers l'article gagnant de sa grappe
   ou vers la page de service correspondante, pour conserver son autorité. Seuls les contenus sans
   aucun équivalent passent en 410.

Les articles publiés qui n'apparaissent pas du tout dans l'export (zéro impression en 12 mois) n'ont
pas performé : l'import les liste dans `migration/out/articles-non-classes.json` pour leur attribuer
une redirection avant la mise en ligne.

**Import du 14/10/2026** (export WordPress) : 91 articles publiés. Les 16 conservés sont importés. Un
seul article publié n'avait aucune impression et n'était pas encore couvert :
`creation-site-web-agence-specialisee`, redirigé vers `criteres-choisir-agence-creation-site-web`.
Trois autres sont des pages piratées (voir section 6) et passent en 410.

## 4. Résultat

| Lot                                   | Articles | Clics 12 mois | Impressions | Impressions IA |
| ------------------------------------- | -------: | ------------: | ----------: | -------------: |
| Conservés                             | 16       | 20            | 5 152       | 105            |
| Supprimés lors de ce tri (301)        | 70       | 4             | 8 439       | 35             |
| Déjà redirigés ou en 410 par le thème | 59       | 25            | 9 691       | 11             |

### Articles conservés

| Article | Clics | Impr. | Position | IA | Remarque |
| ------- | ----: | ----: | -------: | -: | -------- |
| connexion-google-my-business | 1 | 191 | 9,2 | 35 | était en noindex, réindexé ; absorbe 2 doublons |
| signaler-probleme-google-my-business-corriger-fiche | 4 | 614 | 15,9 | 23 | |
| comment-optimiser-referencement-boutique-en-ligne | 1 | 477 | 15,9 | 11 | absorbe l'article Prestashop |
| pre-audit-seo-comment-realiser | 3 | 874 | 7,0 | 8 | absorbe 2 doublons « pré-audit » |
| criteres-choisir-agence-creation-site-web | 0 | 69 | 12,5 | 10 | pilier « choisir une agence web » (6 doublons) |
| tarifs-audit-seo-selon-taille-site | 0 | 169 | 13,8 | 7 | pilier prix/devis d'audit (6 doublons) |
| contacter-support-google-my-business | 2 | 166 | 8,3 | 3 | |
| utiliser-google-search-console-audit-seo | 4 | 682 | 17,4 | 0 | |
| creer-application-web-performante-entreprise | 2 | 37 | 13,5 | 1 | |
| creer-site-vitrine-pme-locale | 0 | 88 | 12,4 | 2 | |
| fiche-google-my-business-pourquoi-en-creer-une | 0 | 1 020 | 39,6 | 2 | était en noindex, réindexé ; absorbe 10 articles GMB |
| modeles-audit-seo-structurer | 2 | 94 | 12,8 | 0 | était en noindex, réindexé ; absorbe 3 doublons |
| audit-seo-technique-approfondi | 0 | 393 | 10,4 | 1 | pilier méthode d'audit (20 doublons) |
| comment-auditer-seo-boutique-shopify | 1 | 168 | 10,7 | 0 | |
| pourquoi-choisir-developpement-logiciel-metier-sur-mesure | 0 | 99 | 16,8 | 1 | soutient le pilier développement |
| top-10-meilleures-agences-wordpress-paris-2026 | 0 | 11 | 5,5 | 1 | comparatif, utile en GEO |

**Google My Business : conservés (décision du 14/10/2026).** Quatre des seize articles conservés
parlent de Google My Business, que Kameo ne vend pas. Ils restent parce qu'ils performent (63 des
105 impressions IA du blog), et ils sont de nouveau indexables alors que le thème v2.10.0 les avait
passés en noindex.

### Articles supprimés

La liste complète, avec la destination de chaque redirection, est dans `BLOG_PRUNING`
(`src/lib/redirects.ts`). Par famille :

- **vers les pages de service** (19) : pricing et devis de création de site, sites pour avocats,
  artisans, thérapeutes → `/creation-site-wordpress/` ; refonte → `/refonte-wordpress/` ;
  maintenance et tarifs de maintenance → `/maintenance-wordpress/` ; « choisir une agence WordPress
  à Paris » → `/agence-wordpress-paris/` ;
- **audit SEO** (33) : regroupés sur les quatre piliers conservés (méthode, pré-audit, modèles,
  tarifs) ;
- **Google My Business** (12) : regroupés sur « connexion » et « pourquoi créer une fiche » ;
- **choisir une agence web** (6) : regroupés sur « critères pour choisir une agence ».

## 5. Recommandations pour la suite

1. **Ne pas recréer de contenu en série.** Un article par intention, relu, avec un angle que les pages
   de service ne couvrent pas (cas clients, comparatifs, retours d'expérience chiffrés).
2. **Remonter les pages de service** : elles reçoivent maintenant l'autorité des 70 articles
   redirigés. Ajouter sur chacune une FAQ courte issue des requêtes de l'export (tarif, délai, « pas
   cher », « freelance ») et des liens depuis les études de cas.
3. **Créer la page de service SEO / GEO** évoquée dans le thème : « agence seo paris » (499
   impressions), « meilleure agence seo paris », les articles prix d'audit attendent une cible
   commerciale. Elle remplacera `/agence-wordpress-paris/` comme destination des redirections SEO.
4. **Motion design et branding** sont en position 65 à 80 : pages à enrichir (cas clients, vidéos,
   tarifs visibles) ou à reconsidérer.
5. **Suivre les réponses IA** dans la Search Console : c'est le canal qui progresse. Les articles
   conservés sont ceux qu'elles citent.
6. **Mise en ligne** : resoumettre `sitemap_index.xml`, surveiller le rapport « Pages » pendant quatre
   semaines, et ne jamais laisser le site hors ligne comme en décembre-janvier.

## 6. Sécurité : le WordPress en ligne a été piraté

L'export du 14/10/2026 contient **trois articles publiés le 13/10/2026 à 15:50 sans auteur**, intitulés
« Hacked by trenggalek6etar » (`/blog/2d75c88c8a26/`, `/blog/64931b0482a3/`,
`/blog/64931b0482a3-2/`). Ce sont des pages de défiguration (fond noir, un titre), sans lien ni script.
L'absence d'auteur indique une faille (extension ou thème vulnérable, ou accès à la base) plutôt qu'une
connexion avec un compte.

Les 16 articles conservés ont été vérifiés : contenu sain, non modifié depuis leur publication. Dans le
site Next.js, les trois URLs piratées répondent 410 (contenu supprimé définitivement).

À faire sur le WordPress tant qu'il est en ligne :

1. Supprimer les trois articles et vider la corbeille.
2. Changer tous les mots de passe : comptes WordPress, mots de passe d'application, FTP/SFTP, base de
   données, hébergeur (PlanetHoster). Régénérer les clés de sécurité de `wp-config.php`.
3. Vérifier la liste des utilisateurs administrateurs et supprimer tout compte inconnu.
4. Mettre à jour WordPress, le thème et toutes les extensions ; supprimer celles qui ne servent plus.
5. Faire analyser les fichiers (Wordfence ou l'outil de l'hébergeur) à la recherche de portes dérobées,
   et prévenir l'hébergeur.
6. Basculer vers le site Next.js dès que possible : il n'a ni base de données ni interface
   d'administration, ce qui supprime l'essentiel de la surface d'attaque. Une fois la bascule faite,
   fermer l'ancien WordPress.
