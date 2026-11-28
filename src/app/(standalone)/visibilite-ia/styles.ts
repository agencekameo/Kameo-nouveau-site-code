/*
 * Styles de la landing /visibilite-ia/ (accompagnement GEO, fond blanc). Injectés par <style> sur cette page
 * seulement : jetons --vi-*, classes préfixées vi- (aucune collision avec main.css ni avec l'autre landing).
 * Écrits pour le téléphone d'abord (390 px), puis enrichis à 640, 768 et 1024 px.
 * Pièges de main.css neutralisés dans la portée .vi : em en couleur, focus coloré, titres. Le bouton flottant
 * (.vi-fab), la fenêtre Calendly (.lpcal) et la barre mobile sont hors du flux : leurs styles sont ici aussi.
 */
const css = `
:root {
  --vi-bg: #FFFFFF; --vi-bg-soft: #F7F7F9; --vi-bg-sunk: #F0F1F4;
  /* Fond des blocs : jamais blanc sur la page blanche (demande de Benjamin, 27/11/2026) */
  --vi-block: #F2F3F6;
  --vi-tint: linear-gradient(136.79deg, #FDF2F7 5.13%, #FFF7F1 84.98%);
  --vi-tint-soft: linear-gradient(136.79deg, rgba(225,75,137,.06) 5.13%, rgba(248,144,60,.06) 84.98%);
  --vi-ink: #0F1115; --vi-ink-2: #23262D; --vi-text: #3F4552; --vi-muted: #5C6371; --vi-faint: #767D8C;
  --vi-line: #E6E8EC; --vi-line-2: #D5D9E0; --vi-line-3: #EEF0F3;
  --vi-coral: #ED6E63; --vi-wa: #178A47;
  --vi-grad: linear-gradient(136.79deg, #E14B89 5.13%, #F8903C 84.98%);
  --vi-grad-h: linear-gradient(90deg, #E14B89 0%, #F8903C 100%);
  --vi-grad-text: linear-gradient(100deg, #D0457F 0%, #CF5B1F 100%);

  --vi-ff-head: "Satoshi", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --vi-ff-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --vi-ff-mono: "Fragment Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;

  --vi-gutter: 20px; --vi-section: 64px; --vi-head-gap: 28px;

  --vi-sh-1: 0 1px 2px rgba(15,17,21,.06);
  --vi-sh-2: 0 1px 2px rgba(15,17,21,.04), 0 6px 16px -6px rgba(15,17,21,.08);
  --vi-sh-4: 0 2px 4px rgba(15,17,21,.04), 0 24px 56px -20px rgba(15,17,21,.20), 0 48px 96px -40px rgba(225,75,137,.28);
  --vi-sh-glow: 0 1px 2px rgba(15,17,21,.04), 0 28px 64px -28px rgba(225,75,137,.42), 0 12px 28px -14px rgba(248,144,60,.28);
  --vi-sh-btn: inset 0 1px 0 rgba(255,255,255,.35), inset 0 0 0 1px rgba(15,17,21,.06), 0 8px 20px -8px rgba(237,110,99,.6);
  --vi-sh-btn-h: inset 0 1px 0 rgba(255,255,255,.35), inset 0 0 0 1px rgba(15,17,21,.06), 0 14px 30px -10px rgba(237,110,99,.65);

  --vi-ease-out: cubic-bezier(.16, 1, .3, 1);
  --vi-ease-std: cubic-bezier(.22, .61, .36, 1);
  --vi-ease-in: cubic-bezier(.4, 0, 1, 1);
}
@media (min-width: 768px) { :root { --vi-gutter: 32px; --vi-section: 88px; --vi-head-gap: 40px; } }
@media (min-width: 1024px) { :root { --vi-gutter: 40px; --vi-section: 112px; --vi-head-gap: 56px; } }

/* ━━ Base ━━ */
body:has(.vi) { background: #FFFFFF; }
.vi {
  color-scheme: light; background: var(--vi-bg); color: var(--vi-text);
  font: 400 16px/1.55 var(--vi-ff-body); -webkit-font-smoothing: antialiased;
  overflow-x: hidden; --c-accent: #0F1115;
}
@supports (overflow-x: clip) { .vi { overflow-x: clip; } }
/* Indépendant de main.css : la mise en page tient même si la feuille globale ne charge pas */
.vi, .vi *, .vi *::before, .vi *::after { box-sizing: border-box; }
.vi .sr-only { position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
.vi img { max-width: 100%; height: auto; }
.vi h1, .vi h2, .vi h3 { font-family: var(--vi-ff-head); color: var(--vi-ink); text-wrap: balance; }
.vi p { text-wrap: pretty; }
.vi em { font: inherit; font-style: normal; color: inherit; letter-spacing: inherit; }
.vi strong, .vi b { font-weight: 600; color: var(--vi-ink-2); }
.vi sup { font-size: .7em; line-height: 0; vertical-align: .45em; letter-spacing: 0; }
.vi :focus-visible { outline: 2px solid var(--vi-ink); outline-offset: 3px; border-radius: 6px; }
.vi ::selection { background: rgba(237,110,99,.22); color: var(--vi-ink); }
.vi [hidden] { display: none !important; }
.vi section[id] { scroll-margin-top: 12px; }
.vi-nowrap { white-space: nowrap; }
.vi-ico { display: block; width: 20px; height: 20px; flex: none; fill: none; stroke: currentColor; stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round; }
.vi-star { display: block; width: 14px; height: 14px; flex: none; fill: url(#vi-grad-stroke); }
.vi-stars { display: inline-flex; gap: 2px; flex: none; }
/* Icônes du sprite (/icons.svg) et pastilles d'icône */
.vi-i { display: block; width: 20px; height: 20px; flex: none; fill: currentColor; }
.vi-defs { position: absolute; width: 0; height: 0; overflow: hidden; }
.vi-wrap { width: 100%; max-width: calc(1160px + 2 * var(--vi-gutter)); margin-inline: auto; padding-inline: var(--vi-gutter); }
.vi-gt {
  background: var(--vi-grad-text); -webkit-background-clip: text; background-clip: text;
  color: transparent; -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone; box-decoration-break: clone;
}
@media (forced-colors: active) { .vi-gt { background: none; color: CanvasText; -webkit-text-fill-color: CanvasText; } }
.vi-dim { color: var(--vi-faint); }
/* Titre : 2e ligne insécable, le nom de l'IA (AiRotator) puis « en 1 mois ». Seul le nom affiché occupe la case ; les autres
   sont posés par-dessus, hors du flux. La case glisse d'une largeur à l'autre (largeur posée par AiRotator, en em).
   overflow-x: clip coupe le nom qui arrive pendant que la case s'élargit, sans toucher aux jambages (p, y). */
.vi-h1__l2 { white-space: nowrap; }
/* Avec l'espacement serré du titre, l'encre de la dernière lettre (le « y » de Perplexity) dépassait de la case du mot :
   le dégradé (background-clip: text) ne la peignait pas et overflow-x la coupait (signalé par Benjamin le 28/11/2026).
   Marge intérieure à droite (et en bas pour les jambages) : la zone peinte et la case s'agrandissent ; la marge négative de
   la case garde « en 1 mois » à la même place, avec ou sans JavaScript. */
.vi-rot__box { display: inline-block; position: relative; white-space: nowrap; overflow-x: clip; margin-right: -.14em; }
.vi-rot__w { display: inline-block; padding: 0 .14em .1em 0; margin-bottom: -.1em; }
.vi-rot__w:not(.is-on) { position: absolute; left: 0; top: 0; visibility: hidden; }
@media (prefers-reduced-motion: no-preference) {
  .vi-rot__box { transition: width .45s ease; }
  .vi-rot__w { transition: opacity .35s ease, transform .35s ease; }
  .vi-rot__w:not(.is-on) { visibility: visible; opacity: 0; transform: translateY(.28em); }
  .vi-rot__w.is-on { opacity: 1; transform: none; transition-delay: .12s; }
  .vi-rot__w.is-out { transform: translateY(-.28em); }
}
.vi-inline { color: inherit; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; text-decoration-color: var(--vi-line-2); }
@media (hover: hover) { .vi-inline:hover { text-decoration-color: currentColor; } }

/* ━━ Titres de section ━━ */
.vi-sec { position: relative; padding-block: var(--vi-section); }
/* Page entièrement blanche : ce sont les blocs (--vi-block) qui ressortent, plus les bandeaux de section. */
.vi-sec--soft { background: transparent; }
.vi-srcline { font: 400 12.5px/1.5 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-srcline a { color: inherit; text-decoration: underline dotted; text-underline-offset: 3px; }
@media (hover: hover) { .vi-srcline a:hover { color: var(--vi-ink); text-decoration-style: solid; } }
.vi-head { max-width: 720px; margin: 0 auto var(--vi-head-gap); text-align: center; }
.vi-head .vi-sub { margin-inline: auto; }
/* Plus de petit titre au-dessus des titres de section (28/11/2026) */
.vi-head .vi-h2 { margin-top: 0; }
.vi-eyebrow { display: inline-flex; align-items: center; gap: 10px; font: 400 12px/1.4 var(--vi-ff-mono); letter-spacing: .08em; text-transform: uppercase; color: var(--vi-ink-2); }
.vi-eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 1.5px; background: var(--vi-grad); flex: none; }
.vi-h2 { margin-top: 12px; font: 800 clamp(1.75rem, 1.35rem + 1.7vw, 2.75rem)/1.1 var(--vi-ff-head); letter-spacing: -0.03em; }
.vi-sub { margin-top: 12px; max-width: 36em; font-size: 16px; line-height: 1.55; color: var(--vi-text); }
@media (min-width: 1024px) { .vi-h2 { margin-top: 16px; } .vi-sub { margin-top: 16px; font-size: 18px; } }

/* ━━ Boutons ━━ */
.vi-btn {
  position: relative; isolation: isolate; overflow: hidden;
  display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 12px;
  min-height: 60px; padding: 8px 8px 8px 22px; border-radius: 999px;
  background: var(--vi-grad); color: var(--vi-ink);
  font: 700 17px/1.2 var(--vi-ff-head); letter-spacing: -0.01em; text-align: left; text-decoration: none;
  box-shadow: var(--vi-sh-btn);
  transition: transform 200ms var(--vi-ease-std), box-shadow 200ms var(--vi-ease-std);
}
.vi-btn__txt { display: flex; flex-direction: column; align-items: flex-start; min-width: 0; }
.vi-btn__sub { margin-top: 3px; font: 500 13px/1.2 var(--vi-ff-body); letter-spacing: 0; color: var(--vi-ink); }
.vi-btn__arrow { width: 44px; height: 44px; border-radius: 50%; background: #fff; color: var(--vi-ink); display: grid; place-items: center; flex: none; box-shadow: 0 1px 2px rgba(15,17,21,.14); transition: transform 200ms var(--vi-ease-std); }
.vi-btn__arrow .vi-ico { width: 18px; height: 18px; stroke-width: 2; }
.vi-btn::after { content: ""; position: absolute; inset: 0; z-index: -1; background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,.45) 50%, transparent 65%); transform: translateX(-120%); transition: transform 700ms var(--vi-ease-out); }
@media (hover: hover) {
  .vi-btn:hover { transform: translateY(-1px); box-shadow: var(--vi-sh-btn-h); }
  .vi-btn:hover .vi-btn__arrow { transform: translateX(3px); }
  .vi-btn:hover::after { transform: translateX(120%); }
}
.vi-btn:active { transform: scale(.985); }
/* Texte blanc sur le dégradé (boutons du haut de page, de la barre du haut et des formules, demandes de Benjamin du 28/11/2026) :
   ombre légère pour la lisibilité côté orange. */
.vi-btn--white { color: #fff; text-shadow: 0 1px 2px rgba(15,17,21,.28); }
.vi-btn--outline { background: #fff; box-shadow: inset 0 0 0 1.5px var(--vi-ink); }
.vi-btn--outline::after { display: none; }
.vi-btn--outline .vi-btn__arrow { background: var(--vi-ink); color: #fff; box-shadow: none; }
@media (hover: hover) { .vi-btn--outline:hover { background: var(--vi-bg-soft); box-shadow: inset 0 0 0 1.5px var(--vi-ink); } }
@media (min-width: 640px) {
  .vi-btn { display: inline-flex; width: auto; justify-content: center; padding-left: 26px; }
  .vi-btn--lg { min-height: 68px; padding: 10px 10px 10px 30px; font-size: 19px; gap: 16px; }
  .vi-btn--lg .vi-btn__arrow { width: 48px; height: 48px; }
}

/* ━━ Pastilles ━━ */
.vi-chip-promo { display: inline-flex; align-items: center; height: 22px; padding: 0 8px; border-radius: 6px; background: #0F1115; color: #fff; font: 400 11px/1 var(--vi-ff-mono); letter-spacing: .06em; text-transform: uppercase; white-space: nowrap; flex: none; }
.vi-count { font: 400 12.5px/1.4 var(--vi-ff-mono); color: var(--vi-ink-2); font-variant-numeric: tabular-nums; white-space: nowrap; }
.vi-count::before { content: ""; display: inline-block; width: 6px; height: 6px; margin-right: 8px; border-radius: 50%; background: var(--vi-coral); vertical-align: 1px; }
/* La puce du compte à rebours pulse pour être vue (demande de Benjamin du 28/11/2026), sauf si le visiteur refuse les animations. */
@media (prefers-reduced-motion: no-preference) { .vi-count::before { animation: vi-dot-pulse 1.6s ease-in-out infinite; } }
@keyframes vi-dot-pulse { 0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(237,110,99,.65); } 60% { opacity: .7; box-shadow: 0 0 0 6px rgba(237,110,99,0); } }
.vi-ai { display: inline-flex; align-items: center; gap: 7px; height: 32px; padding: 0 14px 0 12px; border-radius: 999px; background: #fff; border: 1px solid var(--vi-line); font: 500 14px/1 var(--vi-ff-body); color: var(--vi-ink-2); white-space: nowrap; }
.vi-ai::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--vi-grad); }
.vi-src { margin-top: 10px; font: 400 12px/1.5 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-src a { color: inherit; text-decoration: underline dotted; text-underline-offset: 3px; }
@media (hover: hover) { .vi-src a:hover { color: var(--vi-ink); text-decoration-style: solid; } }

/* ━━ Bandeau d'offre ━━ */
.vi-offre {
  position: relative; display: flex; align-items: center; justify-content: center; gap: 10px;
  min-height: 44px; padding: 8px var(--vi-gutter);
  background: var(--vi-ink);
  font: 500 13.5px/1.35 var(--vi-ff-body); color: #fff; text-decoration: none;
}
.vi-offre::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: var(--vi-grad-h); }
@media (hover: hover) { .vi-offre:hover { background: var(--vi-ink-2); } }
.vi-offre .vi-chip-promo { background: var(--vi-grad); color: var(--vi-ink); }
.vi-offre .vi-count { color: rgba(255,255,255,.78); }
.vi-offre__txt { min-width: 0; font-weight: 600; white-space: nowrap; }
/* Compte à rebours visible aussi sur téléphone (seule indication de fin depuis le 28/11/2026) : sous 640 px, il passe
   sur une 2e ligne, centrée, avec la flèche. */
.vi-offre { flex-wrap: wrap; row-gap: 2px; }
.vi-offre__count { display: inline-flex; align-items: center; }
.vi-offre .vi-count { font-size: 12.5px; color: #fff; }
.vi-offre__go .vi-ico { width: 16px; height: 16px; stroke-width: 2; }
@media (max-width: 639.98px) {
  .vi-offre { padding-top: 7px; padding-bottom: 8px; }
  .vi-offre__count { flex-basis: 100%; justify-content: center; }
  .vi-offre__go { display: none; }
}
@media (min-width: 640px) {
  .vi-offre { flex-wrap: nowrap; gap: 16px; font-size: 14px; }
  .vi-offre .vi-count { font-size: 13px; }
}
/* Bandeau collant en haut de l'écran (28/11/2026). Téléphone et tablette : .vi-stick n'a pas de boîte, le bandeau colle seul
   (la barre du haut défile). Ordinateur : bandeau et barre du haut collent ensemble (.vi-stick). Sous la fenêtre Calendly
   et le bandeau cookies (z-index 10001 et 10000), au-dessus de la page. */
.vi-stick { display: contents; }
.vi-offre { position: sticky; top: 0; z-index: 40; }
/* Ancres (« Voir nos accompagnements », « Voir les avis clients ») : la section ne passe pas sous le bandeau */
.vi:has(.vi-offre:not([hidden])) section[id] { scroll-margin-top: 72px; }
@media (min-width: 1024px) {
  .vi-stick { display: block; position: sticky; top: 0; z-index: 40; }
  .vi-stick .vi-offre { position: relative; top: auto; }
  .vi-stick .vi-top { position: relative !important; top: auto; }
  .vi:has(.vi-offre:not([hidden])) section[id] { scroll-margin-top: 132px; }
}

/* ━━ Barre du haut ━━ */
.vi-top { position: relative; z-index: 30; }
.vi-top__in { display: flex; align-items: center; justify-content: space-between; height: 60px; }
.vi-logo { display: inline-flex; align-items: center; gap: 9px; color: var(--vi-ink); }
.vi-logo__mark { width: 23px; height: 26px; overflow: hidden; flex: none; }
.vi-logo__mark img { display: block; width: auto; height: 26px; max-width: none; }
.vi-logo__word { font: 700 20px/1 var(--vi-ff-head); letter-spacing: -0.03em; }
.vi-top__right { display: flex; align-items: center; gap: 16px; }
.vi-top__cta { display: none !important; }
@media (min-width: 768px) {
  .vi-top__in { height: 72px; }
  .vi-logo__mark { width: 26px; height: 30px; } .vi-logo__mark img { height: 30px; } .vi-logo__word { font-size: 22px; }
}
@media (min-width: 1024px) {
  .vi-top { position: sticky; top: 0; background: rgba(255,255,255,.88); -webkit-backdrop-filter: saturate(1.4) blur(12px); backdrop-filter: saturate(1.4) blur(12px); border-bottom: 1px solid transparent; transition: border-color .2s; }
  .vi.is-past-hero .vi-top { border-bottom-color: var(--vi-line); }
  /* Bouton de l'en-tête visible dès l'arrivée, texte explicite (27/11/2026) */
  .vi-top__cta { display: inline-flex !important; width: auto; min-height: 44px; padding: 0 22px; font-size: 15px; }
  .vi section[id] { scroll-margin-top: 88px; }
}

/* ━━ Héros ━━ */
.vi-hero { position: relative; padding: 12px 0 56px; }
.vi-hero__halo { position: absolute; inset: -120px 0 auto; height: 620px; pointer-events: none; background: radial-gradient(60% 50% at 85% 20%, rgba(248,144,60,.10), transparent 70%), radial-gradient(50% 45% at 15% 0%, rgba(225,75,137,.08), transparent 70%); }
/* minmax(0, 1fr) : la bande de logos (largeur max-content) ne doit pas élargir la colonne du héros sur téléphone. */
.vi-hero__grid { position: relative; display: grid; grid-template-columns: minmax(0, 1fr); gap: 40px; }
/* La colonne du texte sert de repère au titre (container-type) : voir .vi-h1 ci-dessous. */
.vi-hero__text { min-width: 0; container-type: inline-size; }
.vi-hero .vi-badge { display: inline-flex; }
.vi-h1 { margin-top: 16px; font: 900 clamp(2rem, 1.45rem + 2.8vw, 4rem)/1.03 var(--vi-ff-head); letter-spacing: -0.035em; }
/* La 2e ligne du titre est insécable et le nom de l'IA change ; la plus longue, « Perplexity en 1 mois », mesure 8,83 em.
   Le titre ne dépasse jamais 11 % de la largeur de sa colonne (11cqi) : cette ligne tient toujours dans la colonne, sans
   mordre sur l'espace qui la sépare de la photo (28/11/2026). */
@supports (font-size: 1cqi) { .vi-h1 { font-size: min(clamp(2rem, 1.45rem + 2.8vw, 4rem), 11cqi); } }
.vi-lead { margin-top: 14px; max-width: 32em; font-size: 17px; line-height: 1.5; color: var(--vi-text); }
.vi-hero__cta { margin-top: 24px; }
/* Photo des dirigeants à droite du titre, à la place du téléphone (28/11/2026, format Pennylane) */
.vi-hero__photo { position: relative; margin: 0; aspect-ratio: 3 / 2; border-radius: 20px; background: var(--vi-bg-sunk); box-shadow: var(--vi-sh-2); }
.vi-hero__photo img { display: block; width: 100%; height: 100%; object-fit: cover; border-radius: inherit; }

/* Problème, solution, résultat sous le titre (proposition 3 retenue le 28/11/2026, à la place de la phrase d'accroche) */
.vi-psr { display: grid; gap: 10px; margin-top: 18px; max-width: 34em; }
.vi-psr li { display: grid; grid-template-columns: 36px minmax(0, 1fr); align-items: center; gap: 12px; font: 500 16px/1.4 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-psr__ico { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 11px; background: var(--vi-bg-sunk); }
.vi-psr__ico .vi-i { width: 16px; height: 16px; fill: var(--vi-muted); }
.vi-psr li:not(.is-pb) .vi-psr__ico { background: var(--vi-tint); box-shadow: inset 0 0 0 1px rgba(237,110,99,.22); }
.vi-psr li:not(.is-pb) .vi-psr__ico .vi-i { fill: url(#vi-grad-stroke); }
.vi-psr li.is-win { font-weight: 700; color: var(--vi-ink); }
@media (min-width: 1024px) { .vi-psr { margin-top: 22px; gap: 12px; } .vi-psr li { font-size: 17px; } }

/* Étiquette posée sur la photo */
/* Une grande pastille avec les prénoms (28/11/2026) : une ligne ; sous 480 px, les prénoms puis le rôle sur deux lignes. */
.vi-hero__chip { position: absolute; top: 12px; left: 12px; max-width: calc(100% - 24px); padding: 9px 14px; border-radius: 16px; background: rgba(15,17,21,.8); color: #fff; font: 500 14px/1.3 var(--vi-ff-body); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); }
.vi-hero__chip strong { font-weight: 700; color: inherit; }
@media (max-width: 479.98px) {
  .vi-hero__chip-sep { display: none; }
  .vi-hero__chip-role { display: block; }
  .vi-hero__chip-role::first-letter { text-transform: uppercase; }
}
@media (min-width: 480px) { .vi-hero__chip { top: 14px; left: auto; right: 14px; padding: 9px 16px; border-radius: 999px; white-space: nowrap; } }
@media (min-width: 1024px) { .vi-hero__chip { top: 18px; right: 18px; padding: 11px 20px; font-size: 15.5px; } }
/* Bande de preuves façon Pennylane (28/11/2026) : logos clients qui défilent (styles .logos__* de main.css), coupés à
   droite par les chiffres et le lien vers les avis. Téléphone : logos puis texte, l'un sous l'autre. */
.vi-proof { display: grid; grid-template-columns: minmax(0, 1fr); gap: 16px; margin-top: 36px; }
.vi-logos { min-width: 0; }
.vi-logos .logos__viewport { max-width: none; -webkit-mask-image: linear-gradient(90deg, transparent, #000 32px, #000 calc(100% - 32px), transparent); mask-image: linear-gradient(90deg, transparent, #000 32px, #000 calc(100% - 32px), transparent); }
.vi-logos .logos__viewport::before, .vi-logos .logos__viewport::after { display: none; }
.vi-logos .logos__track { gap: 44px; }
.vi-logos .logo-item img { height: 34px; }
.vi-proof__txt p { font: 500 15.5px/1.45 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-proof__txt strong { font-weight: 700; }
.vi-proof__link { display: inline-flex; align-items: center; gap: 4px; min-height: 44px; font: 600 15px/1.2 var(--vi-ff-body); color: var(--vi-ink); text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 6px; }
.vi-proof__link .vi-ico { width: 16px; height: 16px; stroke-width: 2; transition: transform 200ms var(--vi-ease-std); }
@media (hover: hover) { .vi-proof__link:hover .vi-ico { transform: translateX(3px); } }
@media (min-width: 768px) {
  .vi-hero { padding: 32px 0 88px; }
  .vi-hero__text, .vi-hero__photo { max-width: 640px; }
  .vi-lead { font-size: 19px; }
  .vi-proof { margin-top: 48px; }
}
@media (min-width: 1024px) {
  .vi-hero { padding: 40px 0 112px; }
  /* Photo plus grande (28/11/2026) : colonne de droite plus large que le texte, format un peu plus haut (7:5). Écart entre
     le texte et la photo élargi le même jour (64 à 104 px), le titre s'ajustant à sa colonne (11cqi). */
  .vi-hero__grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr); column-gap: clamp(64px, 6.5vw, 104px); align-items: center; }
  .vi-hero__text, .vi-hero__photo { max-width: none; }
  .vi-hero__photo { aspect-ratio: 7 / 5; border-radius: 24px; }
  /* Logos à gauche, coupés net par un fondu court à droite ; chiffres et lien à droite */
  .vi-proof { grid-template-columns: minmax(0, 1fr) minmax(320px, 400px); column-gap: 48px; align-items: center; margin-top: 64px; }
  .vi-logos .logos__viewport { -webkit-mask-image: linear-gradient(90deg, transparent, #000 48px, #000 calc(100% - 72px), transparent); mask-image: linear-gradient(90deg, transparent, #000 48px, #000 calc(100% - 72px), transparent); }
  .vi-proof__txt p { font-size: 16px; }
  .vi-h1 { margin-top: 24px; }
  .vi-lead { margin-top: 20px; }
  .vi-hero__cta { margin-top: 32px; }
}

/* ━━ Film (HeroFilm.tsx), sous les logos clients : 4:5 sur téléphone et tablette (largeur limitée), 2:1 sur ordinateur ;
   en plein écran, le film de l'orientation. L'image est mise à l'échelle, jamais recadrée (contain). Boutons lecture et
   plein écran en bas à gauche, là où le film ne dessine rien (à gauche du téléphone, ou sous lui en 4:5). ━━ */
.vi-film { margin-top: 40px; }
.vi-film__box { position: relative; aspect-ratio: 4 / 5; max-width: 520px; margin-inline: auto; overflow: hidden; border-radius: 20px; background: #F4F5F8; border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-2); }
.vi-film__box img, .vi-film__video { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: contain; }
.vi-film__video { opacity: 0; transition: opacity 200ms linear; }
.vi-film__video.is-shown { opacity: 1; }
/* Téléphone : ronds de 32 px dans la bande libre sous le téléphone du film, zone de toucher de 48 px (::after). */
.vi-film__ctrl { position: absolute; left: 10px; bottom: 8px; z-index: 1; display: flex; gap: 12px; }
.vi-film__btn { position: relative; display: grid; place-items: center; width: 32px; height: 32px; min-width: 0; min-height: 0; padding: 0; border: 0; border-radius: 50%; background: rgba(15,17,21,.8); color: #fff; cursor: pointer; -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); transition: background-color 160ms var(--vi-ease-std); }
.vi-film__btn::after { content: ""; position: absolute; inset: -8px; }
.vi-film__btn svg { width: 14px; height: 14px; fill: currentColor; }
.vi .vi-film__btn:focus-visible { border-radius: 50%; }
@media (hover: hover) { .vi-film__btn:hover { background: var(--vi-ink); } }
.vi-film__box:fullscreen { width: 100%; height: 100%; max-width: none; aspect-ratio: auto; border: 0; border-radius: 0; box-shadow: none; }
.vi-film__box:fullscreen .vi-film__ctrl { left: 24px; bottom: 24px; }
@media (min-width: 768px) {
  .vi-film { margin-top: 48px; }
  .vi-film__ctrl { left: 14px; bottom: 14px; gap: 10px; }
  .vi-film__btn { width: 40px; height: 40px; }
  .vi-film__btn svg { width: 18px; height: 18px; }
}
@media (min-width: 1024px) {
  .vi-film { margin-top: 64px; }
  .vi-film__box { aspect-ratio: 2 / 1; max-width: none; border-radius: 28px; }
  .vi-film__ctrl { left: 18px; bottom: 18px; }
  .vi-film__btn { width: 44px; height: 44px; }
}

/* ━━ 3 · Résultats ━━ */
.vi-cases { display: grid; gap: 16px; }
.vi-case { display: flex; flex-direction: column; padding: 22px 22px 20px; border-radius: 24px; background: var(--vi-block); border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-2); }
.vi-case__top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vi-case__logo { display: flex; align-items: center; height: 64px; }
.vi-case__logo img { display: block; width: auto; height: 64px; max-width: 160px; object-fit: contain; object-position: left center; }
.vi-case__logo--omega img { width: 150px; height: auto; }
.vi-case__logo--cdp69 img { height: 40px; }
/* 5 étoiles entre le logo et le nom (28/11/2026) */
.vi-case > .vi-stars { margin-top: 14px; }
.vi-case > .vi-stars .vi-star { width: 16px; height: 16px; }
.vi-case > .vi-stars + .vi-case__name { margin-top: 8px; }
.vi-case__name { margin-top: 16px; font: 800 20px/1.25 var(--vi-ff-head); letter-spacing: -0.02em; }
.vi-case__name span { font: 500 14px/1 var(--vi-ff-body); letter-spacing: 0; color: var(--vi-muted); }
.vi-case__big { margin-top: 16px; font: 900 40px/1.02 var(--vi-ff-head); letter-spacing: -0.035em; color: var(--vi-ink); }
.vi-case__txt { margin-top: 8px; margin-bottom: 18px; font-size: 15.5px; color: var(--vi-text); }
.vi-case__src { margin-top: auto; padding-top: 14px; border-top: 1px dashed var(--vi-line-2); font: 400 11.5px/1.5 var(--vi-ff-mono); color: var(--vi-muted); }
@media (min-width: 768px) {
  .vi-cases { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; max-width: 980px; margin-inline: auto; }
  .vi-case:last-child:nth-child(odd) { grid-column: 1 / -1; }
  .vi-case { padding: 28px 30px 24px; }
  .vi-case__big { font-size: 48px; }
}
@media (min-width: 1024px) {
  .vi-cases { grid-template-columns: repeat(3, minmax(0, 1fr)); max-width: 1120px; }
  .vi-case:last-child:nth-child(odd) { grid-column: auto; }
}

/* ━━ 5 · Formules ━━ */
.vi-promo { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; margin-bottom: 20px; padding: 14px 16px; border-radius: 16px; background: var(--vi-tint); }
.vi-promo__txt { flex: 1 1 220px; font: 500 14.5px/1.45 var(--vi-ff-body); color: var(--vi-ink-2); }
/* Ligne courte (28/11/2026). Téléphone : pastille et compte à rebours en haut, la phrase dessous. Plus large : une ligne,
   centrée. */
@media (max-width: 767.98px) {
  .vi-promo { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 10px 12px; }
  .vi-promo .vi-count { grid-column: 2; grid-row: 1; justify-self: end; }
  .vi-promo__txt { grid-column: 1 / -1; }
}
@media (min-width: 768px) {
  .vi-promo { justify-content: center; gap: 12px 20px; }
  .vi-promo__txt { flex: 0 1 auto; }
}
.vi-planset { min-width: 0; margin: 0; padding: 0; border: 0; }
.vi-planset__radio { position: absolute; width: 1px; height: 1px; margin: 0; opacity: 0; pointer-events: none; }
.vi-seg { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 4px; margin-bottom: 16px; padding: 4px; border-radius: 999px; background: var(--vi-bg-sunk); }
.vi-seg__opt { display: grid; place-items: center; min-height: 44px; padding: 0 6px; border-radius: 999px; font: 700 15px/1 var(--vi-ff-head); color: var(--vi-muted); cursor: pointer; transition: background-color 200ms, color 200ms, box-shadow 200ms; user-select: none; -webkit-user-select: none; }
#vi-p-essentiel:checked ~ .vi-seg .vi-seg__opt--essentiel,
#vi-p-croissance:checked ~ .vi-seg .vi-seg__opt--croissance,
#vi-p-autorite:checked ~ .vi-seg .vi-seg__opt--autorite { background: #fff; color: var(--vi-ink); box-shadow: 0 1px 2px rgba(15,17,21,.1), 0 2px 8px -2px rgba(15,17,21,.08); }
#vi-p-essentiel:focus-visible ~ .vi-seg .vi-seg__opt--essentiel,
#vi-p-croissance:focus-visible ~ .vi-seg .vi-seg__opt--croissance,
#vi-p-autorite:focus-visible ~ .vi-seg .vi-seg__opt--autorite { outline: 2px solid var(--vi-ink); outline-offset: 2px; }
@media (max-width: 1023.98px) {
  .vi-plan { display: none; }
  #vi-p-essentiel:checked ~ .vi-plans .vi-plan--essentiel,
  #vi-p-croissance:checked ~ .vi-plans .vi-plan--croissance,
  #vi-p-autorite:checked ~ .vi-plans .vi-plan--autorite { display: block; animation: vi-fade 280ms var(--vi-ease-out); }
  .vi-plans { max-width: 560px; margin-inline: auto; }
  .vi-seg { max-width: 560px; margin-inline: auto; margin-bottom: 16px; }
}
@keyframes vi-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
.vi-plan__in { position: relative; display: flex; flex-direction: column; height: 100%; padding: 24px 20px 20px; border-radius: 24px; background: var(--vi-block); border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-2); }
.vi-plan--star .vi-plan__in { border: 1.5px solid transparent; background: linear-gradient(var(--vi-block),var(--vi-block)) padding-box, var(--vi-grad) border-box; box-shadow: var(--vi-sh-glow); }
.vi-plan__top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vi-plan__name { font: 800 24px/1.1 var(--vi-ff-head); letter-spacing: -0.025em; }
.vi-plan__badge { display: inline-flex; align-items: center; height: 26px; padding: 0 10px; border-radius: 999px; background: var(--vi-grad); color: var(--vi-ink); font: 700 11.5px/1 var(--vi-ff-head); letter-spacing: .05em; text-transform: uppercase; }
/* Logos des 4 IA mesurées, sous le nom et la description de la formule */
.vi-ia-logos { display: flex; align-items: center; gap: 14px; margin-top: 14px; }
.vi-ia-logos svg { display: block; width: 22px; height: 22px; flex: none; }
.vi-plan__price { margin-top: 18px; padding-top: 18px; border-top: 1px solid var(--vi-line-3); }
/* Réduction Black Friday (28/11/2026) : pastille « −30 % | BLACK FRIDAY », prix de l'offre en dégradé, puis « au lieu de 600 €
   HT/mois à partir du 1er décembre ». Ce prix n'est jamais barré (fixé le 27/11/2026, jamais pratiqué avant l'offre). */
.vi-plan__deal { display: inline-flex; align-items: stretch; height: 32px; margin-bottom: 12px; overflow: hidden; border-radius: 10px; box-shadow: 0 6px 16px -8px rgba(237,110,99,.7); }
.vi-plan__pct { display: inline-flex; align-items: center; padding: 0 11px; background: var(--vi-grad); color: var(--vi-ink); font: 900 17px/1 var(--vi-ff-head); letter-spacing: -0.02em; white-space: nowrap; }
.vi-plan__dealname { display: inline-flex; align-items: center; padding: 0 11px; background: var(--vi-ink); color: #fff; font: 400 11.5px/1 var(--vi-ff-mono); letter-spacing: .07em; text-transform: uppercase; white-space: nowrap; }
.vi-plan__num[data-vi-promo] { background: var(--vi-grad-text); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
@media (forced-colors: active) { .vi-plan__num[data-vi-promo] { background: none; color: CanvasText; -webkit-text-fill-color: CanvasText; } }
.vi-plan__after { margin-top: 8px; font: 500 14.5px/1.4 var(--vi-ff-body); color: var(--vi-muted); }
.vi-plan__after strong { font-weight: 700; color: var(--vi-ink-2); white-space: nowrap; }
.vi-plan__amount { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 8px; }
.vi-plan__num { font: 900 48px/1 var(--vi-ff-head); letter-spacing: -0.04em; color: var(--vi-ink); }
.vi-plan__unit { font: 500 15px/1.2 var(--vi-ff-body); color: var(--vi-muted); }
.vi-plan__engage { margin-top: 8px; font-size: 14px; color: var(--vi-muted); }
.vi-plan__pts { flex: 1 0 auto; margin-top: 20px; }
.vi-plan__lead { margin-bottom: 10px; font: 600 14.5px/1.4 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-checks { display: grid; gap: 10px; }
.vi-checks li { display: grid; grid-template-columns: 20px minmax(0, 1fr); gap: 10px; font-size: 15.5px; line-height: 1.45; color: var(--vi-ink-2); }
.vi-check { width: 20px; height: 20px; margin-top: 1px; color: var(--vi-coral); stroke-width: 2.2; }
.vi-plan__more { margin-top: 18px; margin-bottom: 16px; border-top: 1px solid var(--vi-line-3); border-bottom: 1px solid var(--vi-line-3); }
.vi-plan__more summary { display: flex; align-items: center; justify-content: space-between; min-height: 48px; font: 600 14.5px/1.2 var(--vi-ff-body); color: var(--vi-ink); cursor: pointer; list-style: none; }
.vi-plan__more summary::-webkit-details-marker { display: none; }
.vi-plan__chev { width: 18px; height: 18px; transition: transform 200ms var(--vi-ease-std); }
.vi-plan__more[open] .vi-plan__chev { transform: rotate(180deg); }
.vi-plan__items { display: grid; gap: 8px; padding-bottom: 14px; }
.vi-plan__items li { position: relative; padding-left: 14px; font-size: 14px; line-height: 1.5; color: var(--vi-text); }
.vi-plan__items li::before { content: ""; position: absolute; left: 0; top: .62em; width: 5px; height: 5px; border-radius: 50%; background: var(--vi-line-2); }
.vi-plan__in > .vi-btn { display: flex; width: 100%; justify-content: space-between; margin-top: auto; min-height: 56px; padding: 6px 6px 6px 22px; font-size: 16px; }
.vi-plan__in > .vi-btn .vi-btn__arrow { width: 42px; height: 42px; }
@media (min-width: 1024px) {
  .vi-seg, .vi-planset__radio { display: none; }
  .vi-plans { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; align-items: stretch; }
  .vi-plan__in { padding: 32px 28px 28px; }
  .vi-plan__num { font-size: 56px; }
}

/* ━━ Avis Trustpilot : deux rangées qui défilent en sens inverse, sur toute la largeur ━━ */
.vi-avis__note { display: flex; justify-content: center; margin: calc(16px - var(--vi-head-gap)) 0 28px; }
/* Cas clients entre la note Trustpilot et les avis (28/11/2026) */
.vi-avis__cases { margin-bottom: 36px; }
@media (min-width: 1024px) { .vi-avis__cases { margin-bottom: 56px; } }
.vi-avis__note .vi-badge { display: inline-flex; }
.vi-avis { position: relative; display: grid; gap: 14px; }
.vi-marquee { overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent); mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent); }
.vi-marquee__track { display: flex; width: max-content; animation: vi-marquee var(--dur, 80s) linear infinite; }
.vi-marquee--rev .vi-marquee__track { animation-direction: reverse; }
/* Marge à droite (et non gap) : les deux moitiés de la piste ont la même largeur, la boucle à −50 % tombe juste */
.vi-marquee__track > li { display: flex; flex: none; width: min(80vw, 320px); margin-right: 14px; }
@keyframes vi-marquee { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(-50%, 0, 0); } }
@media (hover: hover) { .vi-marquee:hover .vi-marquee__track { animation-play-state: paused; } }
.vi-marquee:focus-within .vi-marquee__track { animation-play-state: paused; }
.vi-rev { position: relative; display: flex; flex-direction: column; width: 100%; padding: 20px; border-radius: 20px; background: var(--vi-block); border: 1px solid var(--vi-line); transition: border-color 200ms; }
.vi-rev__top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vi-rev__src { font: 400 11px/1 var(--vi-ff-mono); letter-spacing: .04em; color: var(--vi-muted); }
.vi-rev__t { margin-top: 12px; font: 700 16.5px/1.3 var(--vi-ff-head); letter-spacing: -0.01em; color: var(--vi-ink); }
/* Texte limité à 5 lignes (6 sur ordinateur) : les cartes d'une rangée gardent une hauteur raisonnable ; l'avis
   complet est à un clic sur Trustpilot, et les lecteurs d'écran le lisent en entier. */
.vi-rev__txt { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5; overflow: hidden; margin: 8px 0 16px; font-size: 14.5px; line-height: 1.55; color: var(--vi-text); }
@media (min-width: 768px) { .vi-rev__txt { -webkit-line-clamp: 6; } }
.vi-rev__foot { display: flex; align-items: center; gap: 10px; margin-top: auto; padding-top: 14px; border-top: 1px solid var(--vi-line); }
.vi-rev__av { display: grid; place-items: center; width: 36px; height: 36px; flex: none; border-radius: 50%; color: #fff; font: 700 12.5px/1 var(--vi-ff-head); }
.vi-rev__who { flex: 1; min-width: 0; }
.vi-rev__who strong { display: block; font: 700 14px/1.25 var(--vi-ff-head); color: var(--vi-ink); }
.vi-rev__who span { display: block; overflow: hidden; font-size: 12.5px; color: var(--vi-muted); white-space: nowrap; text-overflow: ellipsis; }
.vi-rev__link { display: grid; place-items: center; width: 36px; height: 36px; flex: none; border-radius: 50%; background: #fff; border: 1px solid var(--vi-line); color: var(--vi-ink-2); transition: background-color 200ms, color 200ms; }
.vi-rev__link .vi-i { width: 13px; height: 13px; }
/* Lien étiré : toute la carte ouvre l'avis sur Trustpilot */
.vi-rev__link::after { content: ""; position: absolute; inset: 0; border-radius: 20px; }
.vi-rev:focus-within { border-color: var(--vi-ink); }
@media (hover: hover) { .vi-rev:hover { border-color: var(--vi-line-2); } .vi-rev:hover .vi-rev__link { background: var(--vi-ink); color: #fff; } }
@media (min-width: 768px) {
  .vi-avis { gap: 18px; }
  .vi-marquee__track > li { width: 340px; margin-right: 18px; }
  .vi-rev { padding: 24px; }
  .vi-marquee { -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
}
/* « Réduire les animations » : plus de défilement automatique, des bandes à faire glisser (sans les copies de boucle) */
@media (prefers-reduced-motion: reduce) {
  .vi-marquee { overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; -webkit-mask-image: none; mask-image: none; }
  .vi-marquee__track { animation: none; padding-inline: var(--vi-gutter); }
  .vi-marquee__track > li { scroll-snap-align: center; }
  .vi-marquee__dup { display: none !important; }
}

/* ━━ Pastille Trustpilot (haut de page, avis) ; section équipe retirée le 28/11/2026 ━━ */
.vi-badge { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 8px 14px; border-radius: 14px; background: var(--vi-block); font-size: 13.5px; line-height: 1.35; color: var(--vi-ink-2); text-decoration: none; text-align: left; }
.vi-badge strong { color: var(--vi-ink); }
@media (hover: hover) { .vi-badge:hover { background: var(--vi-bg-sunk); } }

/* ━━ 7 · Diagnostic (final) ━━ */
.vi-final { overflow: hidden; background: radial-gradient(60% 60% at 50% 0%, rgba(225,75,137,.10), transparent 70%), radial-gradient(50% 50% at 90% 100%, rgba(248,144,60,.10), transparent 70%), var(--vi-bg-soft); }
.vi-final__in { display: flex; flex-direction: column; align-items: center; max-width: 1120px; text-align: center; }
/* Réservation intégrée à la page (Calendly, demande de Benjamin du 28/11/2026) */
/* Calendly dessine son propre cadre : pas de second cadre autour. En attendant (chargement, ou clic sans accord cookies) :
   une carte avec la silhouette du calendrier. */
/* Largeur limitée à 440 px (28/11/2026, « couper les bords inutiles ») : Calendly passe alors dans sa présentation compacte,
   le calendrier occupe toute la carte au lieu de flotter au milieu de grandes marges blanches. Coins arrondis et ombre
   donnés par l'encart (l'iframe en position fixe pendant le rendu à l'avance n'est pas concernée par overflow). */
.vi-cal { position: relative; width: 100%; max-width: 440px; overflow: hidden; border-radius: 20px; background: #fff; box-shadow: var(--vi-sh-4); text-align: left; }
.vi-cal__frame { display: block; width: 100%; border: 0; opacity: 0; transition: opacity .3s ease, height .3s ease; }
.vi-cal__frame.is-ready { opacity: 1; }
/* Rendu à l'avance (CalendlyInline) : dans l'écran pour que le navigateur dessine Calendly, mais invisible, derrière la
   page et sans clic ; la priorité !important couvre .is-ready, prêt avant l'arrivée du visiteur. */
.vi-cal__frame.is-warming { position: fixed !important; top: 0; left: 0; z-index: -1; opacity: 0 !important; pointer-events: none; transition: none; }
.vi-cal__frame.is-warming + .vi-cal__wait { position: relative; }
.vi-cal__wait { position: relative; display: grid; place-items: center; width: 100%; min-height: 460px; margin: 0 auto; padding: 28px 20px; overflow: hidden; background: #fff; text-align: center; }
.vi-cal__frame + .vi-cal__wait { position: absolute; top: 0; left: 0; right: 0; }
.vi-cal__skel { position: absolute; inset: 28px 16px auto; display: flex; flex-direction: column; align-items: center; gap: 22px; opacity: .5; pointer-events: none; }
.vi-cal__skel-t { font: 700 17px/1.2 var(--vi-ff-head); color: var(--vi-ink); }
.vi-cal__skel-grid { display: grid; grid-template-columns: repeat(7, 30px); gap: 16px 10px; }
.vi-cal__skel-grid i { width: 30px; height: 30px; border-radius: 50%; background: var(--vi-bg-sunk); }
.vi-cal__gate { position: relative; display: grid; justify-items: center; gap: 12px; padding: 18px 20px; border-radius: 18px; background: rgba(255,255,255,.9); box-shadow: 0 8px 30px rgba(15,17,21,.08); }
.vi-cal__gate p { max-width: 30em; font: 500 13.5px/1.45 var(--vi-ff-body); color: var(--vi-muted); }
.vi-final__t { margin-top: 24px; font-weight: 900; font-size: clamp(1.875rem, 1.4rem + 2vw, 3rem); line-height: 1.06; letter-spacing: -0.035em; }
.vi-final__pts { display: grid; gap: 10px; margin-top: 20px; }
.vi-final__pts li { display: flex; align-items: center; justify-content: center; gap: 10px; font: 500 15.5px/1.35 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-final__pts .vi-i { width: 16px; height: 16px; fill: url(#vi-grad-stroke); }
@media (min-width: 768px) { .vi-final__pts { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 28px; } }
.vi-final__cta { display: flex; justify-content: center; width: 100%; margin-top: 28px; }

/* ━━ Ligne légale ━━ */
.vi-legal { margin-top: 56px; text-align: center; font: 400 11.5px/1.8 var(--vi-ff-body); color: var(--vi-faint); }
.vi-legal a, .vi-legal .ckb-settings { color: inherit; font: inherit; text-decoration: none; }
.vi-legal .ckb-settings { display: inline; min-height: 0; min-width: 0; padding: 0; vertical-align: baseline; background: none; border: 0; cursor: pointer; }
.vi-legal a:hover, .vi-legal .ckb-settings:hover { color: var(--vi-ink); text-decoration: underline; text-underline-offset: 3px; }

/* ━━ Barre d'action mobile (< 768 px) ━━ */
.vi-sticky { display: none; }
@media (max-width: 767.98px) {
  .vi { padding-bottom: calc(72px + env(safe-area-inset-bottom)); }
  .vi-sticky {
    display: grid; grid-template-columns: minmax(0, 1fr); align-items: center;
    position: fixed; left: 0; right: 0; bottom: 0; z-index: 300;
    padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
    background: rgba(255,255,255,.92); -webkit-backdrop-filter: saturate(1.4) blur(16px); backdrop-filter: saturate(1.4) blur(16px);
    border-top: 1px solid var(--vi-line); box-shadow: 0 -10px 28px -14px rgba(15,17,21,.16);
    transform: translateY(calc(100% + 1px)); visibility: hidden;
    transition: transform 320ms var(--vi-ease-in), visibility 0s linear 320ms;
  }
  .vi-sticky.is-shown { transform: none; visibility: visible; transition: transform 320ms var(--vi-ease-out), visibility 0s; }
  .vi-fab { display: none !important; }
  html:has(.vi-sticky.is-shown) { scroll-padding-bottom: 88px; }
}
.vi-sticky__cta { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 52px; padding: 6px 6px 6px 18px; border-radius: 999px; background: var(--vi-grad); color: var(--vi-ink); box-shadow: var(--vi-sh-btn); text-decoration: none; }
.vi-sticky__txt { min-width: 0; }
.vi-sticky__l1 { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font: 700 15px/1.15 var(--vi-ff-head); letter-spacing: -0.01em; }
.vi-sticky__l2 { display: block; margin-top: 2px; font: 500 12px/1.2 var(--vi-ff-body); color: var(--vi-ink); }
.vi-sticky__cta .vi-btn__arrow { width: 40px; height: 40px; }

/* ━━ Bandeau cookies plus compact sur téléphone (le bouton du héros reste au-dessus) ━━ */
@media (max-width: 639.98px) {
  body:has(.vi) .ckb { padding: 12px 14px; }
  body:has(.vi) .ckb__sign { display: none; }
  body:has(.vi) .ckb__text { margin-top: 4px; }
  body:has(.vi) .ckb__actions { margin-top: 10px; }
}

/* ━━ Fenêtre Calendly aux couleurs de cette page (composant partagé non modifié) ━━ */
.lpcal .lpcal__gate-btn { background: var(--vi-grad); color: var(--vi-ink); box-shadow: var(--vi-sh-btn); font: 700 16px/1.2 var(--vi-ff-head); padding: 14px 24px; }
.lpcal .lpcal__gate-btn:hover { box-shadow: var(--vi-sh-btn-h); }
.lpcal .lpcal__gate-btn:focus-visible { outline: 2px solid var(--vi-ink); }
.lpcal .lpcal__notice { background: linear-gradient(90deg, rgba(225,75,137,.07), rgba(248,144,60,.07)), #fff; border-bottom-color: var(--vi-line); }
.lpcal .lpcal__notice strong { color: var(--vi-ink); font-weight: 700; }
.lpcal .lpcal__notice svg circle { fill: url(#vi-grad-stroke); }
.lpcal .lpcal__close { color: var(--vi-ink); }
.lpcal .lpcal__slow a { color: var(--vi-ink); }

/* ━━ Bouton flottant Calendly (à partir de 768 px), à la place du bouton WhatsApp depuis le 28/11/2026 ━━ */
.vi-fab { position: fixed; right: 24px; bottom: 24px; z-index: 400; display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 24px 0 20px; border-radius: 999px; background: var(--vi-grad); color: #fff; text-shadow: 0 1px 2px rgba(15,17,21,.28); font: 700 16px/1 var(--vi-ff-head); letter-spacing: -0.01em; text-decoration: none; box-shadow: var(--vi-sh-btn), 0 18px 36px -14px rgba(15,17,21,.35); transition: transform 200ms var(--vi-ease-std), box-shadow 200ms var(--vi-ease-std), opacity 200ms var(--vi-ease-std), visibility 0s; }
.vi-fab .vi-ico { width: 20px; height: 20px; stroke-width: 2; filter: drop-shadow(0 1px 1px rgba(15,17,21,.22)); }
@media (hover: hover) { .vi-fab:hover { transform: translateY(-2px); box-shadow: var(--vi-sh-btn-h), 0 22px 40px -14px rgba(15,17,21,.4); } }
.vi-fab:focus-visible { outline: 2px solid var(--vi-ink); outline-offset: 3px; }
.vi.is-fab-off .vi-fab { opacity: 0; visibility: hidden; transform: translateY(12px); transition: transform 200ms var(--vi-ease-std), opacity 200ms var(--vi-ease-std), visibility 0s linear 200ms; }

/* ━━ Révélations au défilement (état de départ seulement sous .vi-io, posé par ViEffects) ━━ */
@media (prefers-reduced-motion: no-preference) {
  .vi.vi-io [data-vi-reveal] { transition: opacity 560ms var(--vi-ease-out), transform 560ms var(--vi-ease-out); transition-delay: calc(var(--vi-i, 0) * 80ms); }
  .vi.vi-io [data-vi-reveal]:not(.is-in) { opacity: 0; transform: translate3d(0, 16px, 0); }
}
@media print {
  .vi [data-vi-reveal] { opacity: 1 !important; transform: none !important; }
  .vi-sticky, .vi-fab, .vi-offre { display: none !important; }
}
`;

export default css;
