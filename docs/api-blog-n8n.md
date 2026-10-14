# Blog automatisé : API de publication pour n8n

Le système de blog automatisé du site Omega, repris pour agence-kameo.fr : cinq routes HTTP qui
permettent à n8n de déposer une image, créer un article, puis compléter ses métadonnées SEO.
C'est une API de machine à machine, sans interface.

**Le contrat est celui d'Omega** (mêmes adresses, mêmes champs, mêmes réponses) : un scénario n8n
écrit pour Omega fonctionne en changeant l'adresse du site et l'identifiant. Les ajouts propres à
Kameo sont tous facultatifs et signalés « en plus d'Omega ».

## Deux sources d'articles

Les 16 articles importés de WordPress restent des fichiers (`src/content/blog/*.md`) ; les articles
publiés par n8n sont en base PostgreSQL. `src/lib/blog.ts` présente les deux sous la même forme :
liste et pagination du blog, page d'article, « Articles recommandés », sitemaps, flux RSS,
`llms.txt` et recherche interne les mélangent par date.

- Un slug déjà pris par un fichier du dépôt est refusé par l'API (409), comme un slug que le site
  redirige (articles supprimés lors du tri du blog, `BLOG_PRUNING` de `src/lib/redirects.ts`) :
  l'article ne serait jamais affiché.
- Les articles n8n ont le même gabarit que les autres : sommaire, encadré auteur, appel à l'action,
  données structurées BlogPosting et FAQPage (blocs `<details><summary>`), maillage interne
  automatique vers les pages de service (`src/lib/internal-links.ts`).
- Les images du contenu reçoivent le rendu des articles importés (bandeau de 210 px, coins arrondis,
  `src/styles/blog-api.css`) ; dans un `<figure>`, elles gardent leurs proportions.

### Mise à jour des pages

Chaque écriture de l'API rafraîchit les pages concernées (`revalidatePath`) : l'article est en ligne
dès la réponse 201. Les pages du blog, les sitemaps, le flux et `llms.txt` se régénèrent aussi
toutes les 60 secondes au plus : c'est le filet qui complète les pages construites sans accès à la
base (image Docker).

### Si la base ne répond pas

- Les pages déjà en cache restent servies, articles n8n compris (Next garde la dernière version
  quand une régénération échoue). Exception : juste après une publication, une page pas encore
  revisitée répond 500 jusqu'au retour de la base. PostgreSQL redémarre seul (`restart: unless-stopped`).
- Sitemaps, flux RSS, `llms.txt` et recherche retombent sur les articles du dépôt plutôt que sur
  une erreur.
- L'API répond 500 avec le détail (`connect ECONNREFUSED…`) ; sans `DATABASE_URL`, 503.
- Sans `DATABASE_URL` du tout, le site fonctionne comme avant : articles du dépôt seuls.

## Configuration

| Variable | Rôle |
|---|---|
| `BLOG_PUBLISH_USER` | Identifiant de l'authentification Basic (n8n). |
| `BLOG_PUBLISH_PASSWORD` | Mot de passe associé (32 caractères aléatoires). |
| `DATABASE_URL` | Base PostgreSQL. Construite par `docker-compose.yml` à partir de `POSTGRES_PASSWORD`. |
| `BLOG_UPLOADS_ROOT` | Dossier des images. Docker : `/uploads` (volume). Par défaut : `./.blog-uploads`. |
| `DB_SSL` | `false` pour désactiver le SSL vers une base distante (exigé par défaut hors réseau local). |

**Sans `BLOG_PUBLISH_USER` ni `BLOG_PUBLISH_PASSWORD`, toutes les routes répondent 401** : un oubli de
déploiement ferme la porte au lieu de l'ouvrir.

Les tables (`blog_categories`, `blog_media`, `blog_posts`, mêmes colonnes qu'Omega plus `width`,
`height`, `variants` et `word_count`) sont créées par le site au premier accès
(`CREATE TABLE IF NOT EXISTS`, `src/lib/db-tables.ts`) : aucune migration à lancer. Une base créée
avec le script d'Omega est complétée des colonnes manquantes.

Les adresses renvoyées par l'API (`url`) sont absolues et pointent sur `https://agence-kameo.fr`
(`SITE_URL` de `src/lib/site.ts`), pour être insérées telles quelles dans le contenu. Le site les
réécrit en adresses relatives à l'affichage.

### Serveur

- **nginx** devant le conteneur doit accepter les images : `client_max_body_size 16m;` dans le bloc
  `server` (1 Mo par défaut, une image générée par IA en pèse 1 à 2).
- **Volume** : `/uploads` est un volume Docker (`kameo_blog_uploads`). Sans lui, les images
  disparaîtraient au redéploiement.
- Le port local exposé est `APP_PORT` (4005 par défaut ; Omega utilise 4004).

## Sécurité

Chaque route, dans cet ordre :

1. **Authentification Basic** comparée en temps constant (empreintes SHA-256 de même longueur) → `401`.
2. **Limite de débit** par adresse IP et par route, fenêtre de 60 s → `429` avec `Retry-After`.
   L'authentification passe avant : un inconnu qui martèle la route n'épuise pas le quota de n8n.
3. **Erreurs attrapées** → `500 { error, detail }` et une trace serveur `[contexte] ERROR: …`.

Le HTML des articles est nettoyé une fois, à l'écriture (`sanitize-html`) : liste blanche de balises,
aucun `script`, `style` ni attribut `on…`, liens `http`, `https`, `mailto` et `tel` uniquement, `h1`
transformé en `h2` (le titre est le seul `h1` de la page), `rel="noopener noreferrer"` ajouté aux
liens `target="_blank"`. Les images sont reconnues à leur signature (un fichier HTML déclaré
`image/png` est refusé) et nommées par un ULID généré : on ne peut ni écraser une image ni sortir du
dossier de dépôt (`/blog-media/` ne sert que des noms `ULID.ext`).

## Routes

Base : `https://agence-kameo.fr`. Les adresses fonctionnent avec ou sans « / » final.

### `POST /api/blog/publish/media` — déposer une image

20 requêtes par minute. Le corps est le **fichier brut** (comme Omega), `Content-Type` `image/png`,
`image/jpeg`, `image/webp` ou `image/gif`, 15 Mo au plus. En plus d'Omega : `application/octet-stream`
et `multipart/form-data` (premier fichier du formulaire) sont acceptés, et `?alt_text=…&title=…` dans
l'adresse évite l'appel `/meta`.

Réponse `201` :

```json
{ "id": "01M4XX…", "url": "https://agence-kameo.fr/blog-media/01M4XX….png",
  "mime": "image/png", "size_bytes": 1264848, "width": 1024, "height": 1024 }
```

Des variantes WebP (300, 768, 1024 et 1400 px de large) sont écrites à côté de l'original et servies
en `srcset` : une image IA de 1,2 Mo s'affiche en 15 à 50 Ko. L'original garde son adresse (Open
Graph, sitemap). Erreurs : `400` type non accepté, fichier vide ou qui n'est pas une image · `413` trop gros.

### `POST /api/blog/publish/media/<id>/meta` — légendes

40 requêtes par minute. `{ "title", "alt_text", "caption", "description" }`. Écriture partielle :
un champ absent garde sa valeur, un champ à `null` l'efface. Le texte alternatif est repris par les
images du contenu qui n'en ont pas. `404` si l'image n'existe pas, sinon `200 { "ok": true }`.

### `POST /api/blog/publish/posts` — créer un article

20 requêtes par minute.

```jsonc
{
  "title": "Créer un site vitrine : la méthode",     // requis
  "content": "<p>…</p><h2>…</h2>",                    // requis, HTML
  "slug": "creer-site-vitrine-methode",               // requis
  "status": "publish",          // « draft » (défaut) ou « publish »
  "excerpt": "…",               // résumé des cartes du blog (sinon : début du texte)
  "featured_media": "01M4XX…",  // id renvoyé par le dépôt d'image
  "category": "SEO",            // id, slug ou nom ; créée si elle n'existe pas
  "lang": "fr",
  // en plus d'Omega, pour tout envoyer en un appel :
  "meta_title": "…", "meta_description": "…", "focus_keyword": "…"
}
```

Réponse `201` :

```json
{ "id": "01M4XX…", "slug": "creer-site-vitrine-methode", "title": "…", "status": "publish",
  "lang": "fr", "url": "https://agence-kameo.fr/blog/creer-site-vitrine-methode/" }
```

S'y ajoute `warnings` quand le contenu cite une image hébergée ailleurs (elle cassera le jour où son
hébergeur la retire : déposer l'image d'abord).

Ce que la route fait au passage : le **slug est normalisé** (« Créer un Site » → `creer-un-site`, le
slug de la réponse fait foi) ; le **HTML est nettoyé** ; le **temps de lecture** vaut
mots / 200, minimum 1 ; `published_at` n'est posée qu'au statut `publish`.

Erreurs : `400` champ requis manquant, statut inconnu, JSON invalide, `featured_media` introuvable ·
`409` slug déjà pris (l'`id` de l'article existant est renvoyé), réservé à un article du dépôt, ou
redirigé par le site.

### `POST /api/blog/publish/posts/<id ou slug>/meta` — métadonnées SEO

40 requêtes par minute.

```json
{ "meta_title": "…", "meta_description": "…", "focus_keyword": "…", "category": "…" }
```

En plus d'Omega : `excerpt`, `featured_media`, et `status` (`"publish"` met en ligne un brouillon).
Écriture partielle : un champ absent garde sa valeur, `null` l'efface. `meta_title` devient la
balise `<title>` telle quelle (sans suffixe), `meta_description` la meta description ; sans eux :
« Titre | Kameo » et le résumé. `404` si l'article n'existe pas, sinon
`200 { "ok": true, "id", "slug", "status", "url" }`.

### `DELETE /api/blog/publish/posts/<id ou slug>` — supprimer

10 requêtes par minute. `404` si introuvable, sinon `200 { "ok": true, "deleted": "<slug>" }`.
L'adresse de l'article répond ensuite 404.

## Exemple complet

```bash
BASE=https://agence-kameo.fr
AUTH='-u identifiant:motdepasse'

# 1. Image à la une
MEDIA=$(curl -s $AUTH -X POST "$BASE/api/blog/publish/media" \
  -H 'Content-Type: image/png' --data-binary @illustration.png)
MEDIA_ID=$(echo "$MEDIA" | python3 -c 'import json,sys; print(json.load(sys.stdin)["id"])')

# 2. Texte alternatif
curl -s $AUTH -X POST "$BASE/api/blog/publish/media/$MEDIA_ID/meta" \
  -H 'Content-Type: application/json' -d '{"alt_text":"Maquette de site vitrine sur un ordinateur portable"}'

# 3. Article
ARTICLE=$(curl -s $AUTH -X POST "$BASE/api/blog/publish/posts" -H 'Content-Type: application/json' \
  -d "{\"title\":\"Créer un site vitrine : la méthode\",\"slug\":\"creer-site-vitrine-methode\",
       \"content\":\"<p>Introduction…</p><h2>Première étape</h2><p>…</p>\",
       \"status\":\"publish\",\"category\":\"Création de site\",\"featured_media\":\"$MEDIA_ID\"}")
ARTICLE_ID=$(echo "$ARTICLE" | python3 -c 'import json,sys; print(json.load(sys.stdin)["id"])')

# 4. Référencement
curl -s $AUTH -X POST "$BASE/api/blog/publish/posts/$ARTICLE_ID/meta" -H 'Content-Type: application/json' \
  -d '{"meta_title":"Créer un site vitrine : méthode et étapes","meta_description":"…","focus_keyword":"créer un site vitrine"}'

# 5. En cas d'erreur, supprimer (identifiant ou slug)
curl -s $AUTH -X DELETE "$BASE/api/blog/publish/posts/creer-site-vitrine-methode"
```

## Contenu attendu de n8n

- HTML simple : `p`, `h2`, `h3`, listes, `strong`/`b`, `em`, liens, `img`, `table`, `blockquote`,
  `pre`/`code`, `figure`/`figcaption`. Pas de `h1` (converti en `h2`), pas d'attribut `style` (retiré).
- FAQ en blocs `<details><summary>Question ?</summary><p>Réponse.</p></details>` : affichée comme
  dans les articles importés et publiée en données structurées FAQPage.
- Images du contenu : déposées d'abord par `/media`, puis insérées avec l'`url` renvoyée.
- Les `<br />` d'espacement entre les blocs (habituels dans les sorties d'Omega) sont retirés à
  l'affichage : l'espacement vient de la feuille de style.
- Liens internes utiles (le site en ajoute aussi automatiquement, 6 au plus par article) :
  `/creation-site-wordpress/`, `/refonte-wordpress/`, `/maintenance-wordpress/`,
  `/agence-wordpress-paris/`, `/creation-site-ecommerce/`, `/developpement-sur-mesure/`,
  `/creation-crm-sur-mesure/`, `/creation-saas-ia/`, `/creation-marketplace/`,
  `/expertises-branding/`, `/expertises-motion/`, `/realisations/`, `/contact/`.
- Catégories créées d'office (on peut en envoyer d'autres) : Création de site, WordPress,
  E-commerce, SEO et référencement, Référencement local, Développement sur-mesure, SaaS et IA,
  Branding, Motion design. Elles servent à choisir les « Articles recommandés ».
