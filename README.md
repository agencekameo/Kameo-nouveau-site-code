# agence-kameo.fr — site Next.js

Migration du thème WordPress **Kameo v2.10.7** vers **Next.js 16 / React 19**.
Même design, mêmes URLs, même SEO, sans WordPress.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production (pages statiques)
npm start          # sert le build
npm run lint       # vérification TypeScript
```

Node.js 20 ou plus récent.

## Variables d'environnement

Seul le formulaire de contact en a besoin (`/api/contact`). Sans elles, le site fonctionne mais
le formulaire répond par une erreur.

| Variable       | Rôle                                                   |
| -------------- | ------------------------------------------------------ |
| `SMTP_HOST`    | serveur SMTP (ex. celui de l'hébergeur de messagerie)  |
| `SMTP_PORT`    | 465 par défaut (SSL), 587 pour STARTTLS                |
| `SMTP_USER`    | identifiant SMTP                                       |
| `SMTP_PASS`    | mot de passe SMTP                                      |
| `CONTACT_TO`   | destinataire, `contact@agence-kameo.fr` par défaut     |
| `CONTACT_FROM` | expéditeur, `SMTP_USER` par défaut                     |

## Où modifier quoi

| Contenu                                                    | Fichier                                         |
| ---------------------------------------------------------- | ----------------------------------------------- |
| Téléphone, email, Calendly, réseaux, chiffres de preuve    | `src/lib/site.ts`                               |
| Une page (texte, sections)                                 | `src/app/(site)/<slug>/page.tsx`                |
| En-tête, menu, pied de page                                | `src/components/Header.tsx`, `Footer.tsx`, `MobileNav.tsx` |
| Études de cas (réalisations)                               | `src/content/realisations.ts`                   |
| Articles du blog                                           | `src/content/blog/*.md` (voir le `README.md` du dossier) |
| Landing page Ads / confirmation de RDV                     | `src/app/(standalone)/…`                        |
| Titres et meta descriptions                                | constantes `TITLE` / `DESCRIPTION` de chaque page |
| Données structurées (Organization, LocalBusiness, Service…) | `src/lib/schema.ts`                             |
| Redirections 301 et URLs supprimées (410)                  | `src/lib/redirects.ts`                          |
| Styles                                                     | `src/styles/main.css` (CSS du thème, inchangé)  |
| Bandeau cookies, traceurs soumis au consentement           | `src/components/consent/`, `src/lib/consent.ts` |

Après une modification de contenu, avancer `CONTENT_UPDATED` dans `src/lib/site.ts`
(date `lastmod` des sitemaps).

## Structure

```
src/
  app/
    (site)/            pages avec en-tête et pied de page
    (standalone)/      landing page Ads (/landingpage/) et /rdv-confirme/
    api/contact/       envoi du formulaire de contact
    sitemap_index.xml/ page-sitemap.xml/ post-sitemap.xml/ realisation-sitemap.xml/
    llms.txt/ feed/    synthèse pour moteurs génératifs, flux RSS
    gone-410/          réponse des contenus supprimés
  components/          composants partagés (en-tête, menu mobile, effets, formulaire…)
  content/             réalisations et articles
  lib/                 SEO, schémas, redirections, blog, utilitaires
  proxy.ts             redirections 301, 410, « / » final, recherche
public/                images, polices, vidéo, sprite d'icônes, robots.txt, humans.txt
migration/             outils de la migration (voir plus bas)
docs/                  analyse Search Console et décisions de tri du blog
```

## SEO : ce qui est conservé

- **URLs identiques** à WordPress, « / » final compris (ajouté par une redirection 301 comme sous WordPress).
- **Titres, meta descriptions, canonicals, robots, Open Graph, Twitter** : repris des filtres du thème
  appliqués à Rank Math (`kameo_get_custom_title`, `kameo_get_custom_description`).
- **Données structurées** de la section 9b du thème, aux mêmes `@id` : Person, Organization,
  LocalBusiness, BreadcrumbList, Service + Offer, Blog, BlogPosting, ItemList, CreativeWork, FAQPage,
  et le graphe complet des 4 pages du silo WordPress.
- **Fil d'Ariane visible** aligné sur le balisage.
- **Sitemaps** aux mêmes adresses que Rank Math (`/sitemap_index.xml`, `/sitemap.xml` y redirige).
- **robots.txt, llms.txt, humans.txt, security.txt** et le flux `/feed/`.
- **Toutes les redirections 301 et les 410** du thème, en un seul saut.
- **Maillage interne automatique** des articles vers les pages de service (même table d'expressions).
- Les fichiers de l'ancien thème (`/wp-content/themes/kameo-theme/images/…`) redirigent vers `/images/…`.
  Les images des articles gardent leur adresse `/wp-content/uploads/…`.
- **Icône du site** (mêmes fichiers et adresses, `/favicon.ico` redirigé comme sous WordPress) et **balise de
  validation Search Console** de la page d'accueil (`GOOGLE_SITE_VERIFICATION` dans `src/lib/site.ts`) :
  ne pas la retirer, elle peut être la méthode de validation de la propriété.
- **Graphe Rank Math** WebSite + WebPage aux mêmes `@id`, avec les dates réelles des pages
  (`src/content/pages.ts`), la recherche interne sur l'accueil et l'image principale des articles.

Le 14/10/2026, le site Next.js a été comparé au site WordPress en ligne sur ses 95 URLs : statuts, titres,
descriptions, robots, canonicals, Open Graph, données structurées (nœud par nœud), texte des 16 articles
(identique au caractère près) et rendu visuel (mêmes hauteurs de page). Les écarts restants sont les
améliorations listées ci-dessous.

## Corrections et améliorations par rapport à la v2

- Pagination du blog réparée : les numéros s'empilaient verticalement et la page courante n'était pas mise en valeur.
- Redirections en un seul saut (les URL sans « / » final passaient par deux redirections).
- Sprite d'icônes chargé une fois et mis en cache, au lieu de 84 Ko de SVG répétés dans chaque page.
- GSAP chargé depuis le site au lieu d'un CDN tiers ; import WebGL inexistant (`@paper-design/shaders@0.4`,
  en échec à chaque visite) retiré, rendu identique.
- Marquees de logos et de projets dupliqués au rendu : plus de saut de mise en page à l'exécution du JS.
- Sommaire des articles généré dans le HTML, avec les ancres `#heading-N` déjà indexées par Google.
- Chiffres de preuve harmonisés : 23 avis et plus de 50 projets partout (le silo WordPress affichait 21 avis
  et la landing « +47 projets »).
- Meta descriptions des 22 réalisations tirées du résumé du projet, au lieu d'un texte générique.
- Navigation entre pages sans rechargement complet (préchargement des liens).
- Image `pattern-bg.png` absente du thème retirée du CSS.
- Vidéo de la landing : le bouton lecture fonctionne dès le premier clic.
- Liens des articles vers l'ancien domaine `agencekameo.fr` (sans tiret) réécrits vers les pages actuelles.
- FAQ des articles publiées en données structurées FAQPage.
- Les 4 illustrations manquantes de la landing page (`images/landing_page/illu_*.png`) ajoutées.
- Images des articles servies en WebP redimensionné (`srcset`) : 45 Ko au lieu de 1 Mo pour une image à la
  une. Les PNG d'origine gardent leur adresse (Open Graph, sitemap, Google Images).
- Sitemap des articles avec toutes les images du contenu ; `lastmod` = vraie date de modification.
- Anciennes adresses de la landing (`/lp-rdv/`, `/lp-rdv-v2/`, en 404 sous WordPress) redirigées vers `/landingpage/`.
- Titres d'articles corrects dans les données structurées (WordPress y laissait `&rsquo;` en toutes lettres).
- **Bandeau cookies** conforme CNIL (le site n'en avait pas) : le tracker taap.it et le pixel Meta ne se chargent
  qu'après accord ; « Tout refuser » aussi visible que « Tout accepter » ; choix conservé 6 mois et modifiable
  via « Gestion des cookies » en pied de page ; politique de confidentialité mise à jour (elle citait Google
  Analytics, absent du site). Calendly et Google Maps restent des services intégrés décrits dans la politique.

## Blog : tri des articles

Décisions et chiffres dans `docs/analyse-search-console.md`. Les articles conservés sont listés dans
`migration/blog-curation.json` ; les articles supprimés redirigent (301) vers l'article ou la page de
service qui répond à la même intention (`BLOG_PRUNING` dans `src/lib/redirects.ts`).

### Importer les articles

Les articles sont dans la base WordPress, pas dans le thème. Les 16 articles conservés ont été importés
le 14/10/2026 depuis l'export WordPress (Outils → Exporter), WordPress 7.1.3. Pour relancer l'import :

```bash
# depuis un export WordPress, avec le formatting.php de la même version de WordPress
# (wp-includes/formatting.php) et le dossier uploads du site :
node migration/import-wordpress.mjs --wxr export.xml --formatting formatting.php --uploads ./wp-content/uploads
# ou directement depuis le site en ligne (API REST) :
node migration/import-wordpress.mjs --site https://agence-kameo.fr
```

Le WordPress en ligne a été piraté puis nettoyé le 14/10/2026 (voir `docs/analyse-search-console.md`,
section 6). En cas de doute, préférer l'export du 14/10/2026, déjà vérifié. Prendre `formatting.php` dans le
dépôt officiel (`https://github.com/WordPress/WordPress/blob/7.1.3/wp-includes/formatting.php`), jamais
sur le serveur piraté : le script l'exécute. L'importeur n'écrit que des images (signature vérifiée) et
uniquement dans `public/wp-content/uploads/`.

Le script :

- rend le contenu comme WordPress l'affichait (typographie française, paragraphes) ;
- réécrit les liens internes vers leur destination finale, y compris les liens vers l'ancien domaine
  `agencekameo.fr` ;
- copie les images dans `public/wp-content/uploads/` (mêmes adresses qu'en WordPress) et liste celles
  qu'il n'a pas trouvées dans `migration/out/images-manquantes.json` ;
- liste dans `migration/out/articles-non-classes.json` les articles publiés que le tri ne couvre pas.

Les FAQ des articles (blocs `<details>`) sont aussi publiées en données structurées FAQPage.

Après un import, générer les variantes WebP des images :

```bash
node migration/optimize-images.mjs
```

Les réalisations (`src/content/realisations.ts`) reprennent les textes, l'ordre et les dates enregistrés
dans la base WordPress en ligne : la version des textes présente dans le thème v2.10.7 (sans tirets
cadratins) n'avait jamais été appliquée au site.

## Mise en production

Le site a besoin d'un serveur Node.js (proxy de redirections et formulaire de contact). **Vercel**
convient sans configuration ; un hébergement Node classique fonctionne aussi avec `npm run build && npm start`.

Avant de basculer le DNS :

1. Renseigner les variables SMTP et envoyer un message de test depuis `/contact/`.
2. Mettre à jour le nom de l'hébergeur dans les mentions légales et la politique de confidentialité
   (PlanetHoster aujourd'hui) si le site change d'hébergeur.
3. Vérifier quelques redirections (`curl -I https://…/blog/cout-maintenance-site-wordpress/`).

Après la bascule :

1. Soumettre `https://agence-kameo.fr/sitemap_index.xml` dans la Search Console et vérifier que la propriété
   reste validée (balise conservée sur l'accueil).
2. Suivre le rapport « Pages » pendant 4 semaines (404 inattendues, redirections).
3. Mettre à jour les URLs de la landing page dans Google Ads / Meta si elles pointaient vers `/wp-…`.

## Sécurité

- **En-têtes HTTP** (`next.config.ts`) : HSTS, `nosniff`, interdiction d'affichage dans un cadre,
  `Referrer-Policy`, `Permissions-Policy`. La Content Security Policy complète est publiée en
  **Report-Only** : après la mise en ligne, ouvrir les pages principales (accueil, contact, landing,
  confirmation de rendez-vous) avec la console du navigateur ; si aucun signalement « Content Security
  Policy » n'apparaît pour taap.it, le pixel Meta et Calendly, renommer l'en-tête en
  `Content-Security-Policy` pour l'appliquer.
- **Redirections** : uniquement vers le site lui-même (les chemins de l'ancien thème contenant `..`, `//`
  ou un double encodage sont refusés).
- **Formulaire de contact** : requête JSON du site lui-même uniquement, 20 Ko maximum, longueur des champs
  bornée, champs d'une ligne nettoyés (pas d'en-tête ni de ligne ajoutés au mail), 5 envois par heure et
  par adresse IP et 60 au total, STARTTLS obligatoire sur le port 587. Pour aller plus loin : un
  anti-robot (Cloudflare Turnstile) ou le pare-feu de l'hébergeur.
- **Articles** : le build échoue si un article contient du code (`<script>`, `on…=`, `javascript:`), un
  contenu masqué ou une image d'un domaine inconnu (`src/lib/content-guard.ts`). L'en-tête des fichiers
  Markdown est lu en YAML strict, sans exécution de code.
- **Dépendances** : `npm audit` sans vulnérabilité au 14/10/2026 (nodemailer 10, `gray-matter` remplacé).
- **Secrets** : uniquement dans les variables d'environnement de l'hébergeur ; tous les fichiers `.env*`
  sont exclus de git.

## Outils de migration (`migration/`)

Conservés pour la traçabilité : ils ont produit et vérifié les pages.

- `wp-harness/` : exécute les gabarits PHP du thème hors WordPress pour obtenir le HTML de référence.
- `measure-whitespace.cjs` : mesure dans Chromium les espaces réellement rendus.
- `html-to-jsx.mjs`, `generate-pages.mjs`, `generate-standalone.mjs` : conversion HTML → JSX.
- `visual-compare.cjs`, `imgdiff.py`, `dom-diff.mjs`, `box-diff.cjs` : comparaison visuelle, DOM et géométrique
  avec la référence.
- `check-redirects.mjs` : vérifie l'absence de chaînes de redirection.
- `import-wordpress.mjs` : import des articles ; `optimize-images.mjs` : variantes WebP des images.
- `check-meta.mjs` : compare titres, descriptions, robots et canonicals aux valeurs du thème.
