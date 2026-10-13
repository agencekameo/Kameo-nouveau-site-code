# Articles du blog

Un fichier `.md` par article, nommé d'après son slug (`/blog/<slug>/`).

```md
---
title: "Titre affiché (H1)"
seoTitle: "Titre SEO, optionnel (défaut : « Titre | Kameo »)"
description: "Meta description (≈ 155 caractères)"
excerpt: "Résumé affiché sur les cartes du blog"
date: "2026-03-14T09:00:00+01:00"
modified: "2026-09-02T10:30:00+02:00"
image: "/wp-content/uploads/2026/03/mon-image.webp"
imageWidth: 1200
imageHeight: 675
format: html        # html (articles importés de WordPress) ou markdown
---
Contenu de l'article…
```

- `format: html` : le corps est rendu tel quel (articles importés, balisage Gutenberg).
- `format: markdown` : le corps est converti en HTML (nouveaux articles).
- Les liens contextuels vers les pages de service sont ajoutés automatiquement
  (`src/lib/internal-links.ts`), comme le faisait le thème WordPress.
- Les images vont dans `public/wp-content/uploads/…` (mêmes adresses que sous WordPress).
- Le fichier `README.md` est ignoré par le site.
