/*
 * Styles de la landing /visibilite-ia/ (accompagnement GEO, fond blanc). Injectés par <style> sur cette page
 * seulement : jetons --vi-*, classes préfixées vi- (aucune collision avec main.css ni avec l'autre landing).
 * Écrits pour le téléphone d'abord (390 px), puis enrichis à 640, 768 et 1024 px.
 * Pièges de main.css neutralisés dans la portée .vi : em en couleur, focus coloré, titres. Le bouton WhatsApp
 * (.lpwa), la fenêtre Calendly (.lpcal) et la barre mobile sont hors du flux : leurs styles sont ici aussi.
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
.vi-tile { display: grid; place-items: center; width: 48px; height: 48px; flex: none; border-radius: 14px; background: linear-gradient(136.79deg, rgba(225,75,137,.12) 5.13%, rgba(248,144,60,.12) 84.98%); box-shadow: inset 0 0 0 1px rgba(237,110,99,.16); }
.vi-tile .vi-i { width: 22px; height: 22px; fill: url(#vi-grad-stroke); }
.vi-tile--sm { width: 40px; height: 40px; border-radius: 12px; }
.vi-tile--sm .vi-i { width: 18px; height: 18px; }
@media (forced-colors: active) { .vi-tile .vi-i, .vi-badge__ico { fill: CanvasText; } }
.vi-wa-ico { display: block; width: 20px; height: 20px; flex: none; fill: currentColor; }
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
.vi-head .vi-h2, .vi-team__t { margin-top: 0; }
/* « 33 millions de Français utilisent l'IA » sur une seule ligne dès que la largeur le permet (demande de Benjamin du 28/11/2026) */
#enjeu .vi-head { max-width: none; }
@media (min-width: 900px) { #enjeu .vi-h2 { white-space: nowrap; } }
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
.vi-btn-ghost { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 0 20px; border-radius: 999px; background: #fff; border: 1px solid var(--vi-line-2); font: 700 15px/1.2 var(--vi-ff-head); color: var(--vi-ink); text-decoration: none; transition: border-color .2s; }
@media (hover: hover) { .vi-btn-ghost:hover { border-color: var(--vi-ink); } }
.vi-btn-ghost .vi-ico, .vi-btn-ghost .vi-wa-ico { width: 18px; height: 18px; }
.vi-btn-ghost .vi-wa-ico { color: var(--vi-wa); }

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

/* Emplacement « Votre entreprise ? » : cadre en pointillés dégradés */
.vi-slot { position: relative; display: flex; align-items: center; gap: 12px; min-height: 52px; padding: 10px 14px; border-radius: 12px; background: var(--vi-tint-soft); }
.vi-slot__frame { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; }
.vi-slot__frame rect { fill: none; stroke: url(#vi-grad-stroke); stroke-width: 1.5; stroke-dasharray: 6 5; vector-effect: non-scaling-stroke; }
.vi-slot__q { position: relative; width: 28px; height: 28px; flex: none; border-radius: 50%; display: grid; place-items: center; border: 1.5px solid transparent; background: linear-gradient(#fff,#fff) padding-box, var(--vi-grad) border-box; font: 900 14px/1 var(--vi-ff-head); }
.vi-slot__q > span { background: var(--vi-grad-text); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.vi-slot__label { font: 700 15.5px/1.25 var(--vi-ff-head); color: var(--vi-ink); letter-spacing: -0.01em; }
@media (prefers-reduced-motion: no-preference) {
  .vi-slot__q::after { content: ""; position: absolute; inset: -1.5px; border-radius: 50%; border: 2px solid rgba(237,110,99,.45); opacity: 0; animation: vi-pulse 2400ms cubic-bezier(.4,0,.2,1) 1.6s 3; }
}
@keyframes vi-pulse { 0% { opacity: .9; transform: scale(1); } 70%, 100% { opacity: 0; transform: scale(1.7); } }

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
.vi-offre__txt { min-width: 0; font-weight: 600; }
.vi-offre__date { font-weight: 400; color: rgba(255,255,255,.78); }
.vi-offre__long, .vi-offre__count { display: none; }
.vi-offre__go .vi-ico { width: 16px; height: 16px; stroke-width: 2; }
@media (min-width: 640px) {
  .vi-offre { gap: 16px; font-size: 14px; }
  .vi-offre__long { display: inline; } .vi-offre__short { display: none; }
  .vi-offre__count { display: inline; }
}

/* ━━ Barre du haut ━━ */
.vi-top { position: relative; z-index: 30; }
.vi-top__in { display: flex; align-items: center; justify-content: space-between; height: 60px; }
.vi-logo { display: inline-flex; align-items: center; gap: 9px; color: var(--vi-ink); }
.vi-logo__mark { width: 23px; height: 26px; overflow: hidden; flex: none; }
.vi-logo__mark img { display: block; width: auto; height: 26px; max-width: none; }
.vi-logo__word { font: 700 20px/1 var(--vi-ff-head); letter-spacing: -0.03em; }
.vi-top__right { display: flex; align-items: center; gap: 16px; }
.vi-top__tel { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--vi-line-2); background: #fff; color: var(--vi-ink); }
.vi-top__tel .vi-ico { width: 18px; height: 18px; }
.vi-top__num { display: none; }
.vi-top__cta { display: none !important; }
@media (min-width: 768px) {
  .vi-top__in { height: 72px; }
  .vi-logo__mark { width: 26px; height: 30px; } .vi-logo__mark img { height: 30px; } .vi-logo__word { font-size: 22px; }
  .vi-top__tel { display: inline-flex; gap: 8px; width: auto; height: 44px; border: 0; border-radius: 0; background: none; font: 600 15px/1 var(--vi-ff-body); white-space: nowrap; }
  .vi-top__tel .vi-ico { width: 16px; height: 16px; }
  .vi-top__num { display: inline; }
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
.vi-hero__grid { position: relative; display: grid; gap: 40px; }
.vi-hero .vi-badge { display: inline-flex; }
.vi-h1 { margin-top: 16px; font: 900 clamp(2rem, 1.45rem + 2.8vw, 4rem)/1.03 var(--vi-ff-head); letter-spacing: -0.035em; }
.vi-lead { margin-top: 14px; max-width: 32em; font-size: 17px; line-height: 1.5; color: var(--vi-text); }
.vi-hero__cta { margin-top: 24px; }
/* Preuves au bas du haut de page (28/11/2026) : 3 chiffres en petits blocs, puis les logos clients (styles .logos__* de main.css) */
.vi-proof { position: relative; margin-top: 36px; }
/* Téléphone : un bloc par ligne, chiffre à gauche ; à partir de 640 px : 3 blocs côte à côte, chiffre au-dessus. */
.vi-stats { display: grid; grid-template-columns: 1fr; gap: 8px; }
.vi-stats li { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 16px; background: var(--vi-block); border: 1px solid var(--vi-line); }
.vi-stats b { font: 900 24px/1 var(--vi-ff-head); letter-spacing: -0.03em; white-space: nowrap; }
.vi-stats span { font: 500 14px/1.3 var(--vi-ff-body); color: var(--vi-text); }
.vi-logos { margin-top: 28px; }
.vi-logos .logos__viewport { max-width: none; }
.vi-logos .logo-item img { height: 40px; }
@media (min-width: 640px) {
  .vi-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
  .vi-stats li { flex-direction: column; align-items: flex-start; gap: 6px; padding: 18px 20px; }
  .vi-stats b { font-size: 28px; }
  .vi-stats span { font-size: 14.5px; }
}
@media (min-width: 1024px) { .vi-proof { margin-top: 64px; } .vi-stats b { font-size: 32px; } }
.vi-hero__note { margin-top: 10px; font: 500 14px/1.35 var(--vi-ff-body); color: var(--vi-muted); text-align: center; }
@media (min-width: 640px) { .vi-hero__note { text-align: left; padding-left: 4px; } }
@media (min-width: 768px) {
  .vi-hero { padding: 32px 0 88px; }
  .vi-hero__text, .vi-chat { max-width: 640px; }
  .vi-lead { font-size: 19px; }
}
@media (min-width: 1024px) {
  .vi-hero { padding: 40px 0 112px; }
  .vi-hero__grid { grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); column-gap: clamp(40px, 5vw, 80px); align-items: center; }
  .vi-hero__text, .vi-chat { max-width: none; }
  .vi-h1 { margin-top: 24px; }
  .vi-lead { margin-top: 20px; }
  .vi-hero__cta { margin-top: 32px; }
}

/* Visuel « la réponse » : téléphone et écran façon ChatGPT (illustration, 28/11/2026) */
.vi-chat { margin: 0; display: grid; justify-items: center; }
.vi-phone { position: relative; width: min(100%, 320px); padding: 9px; border-radius: 46px; background: #121418; box-shadow: var(--vi-sh-4), inset 0 0 0 1.5px #2C2F36; }
.vi-phone__screen { position: relative; display: flex; flex-direction: column; overflow: hidden; border-radius: 37px; background: #fff; color: #0D0D0D; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Segoe UI", Roboto, sans-serif; }
.vi-phone__status { position: relative; display: flex; align-items: center; justify-content: space-between; height: 46px; padding: 4px 26px 0 32px; font: 600 14px/1 -apple-system, BlinkMacSystemFont, "Inter", sans-serif; }
.vi-phone__island { position: absolute; top: 11px; left: 50%; width: 92px; height: 27px; border-radius: 20px; background: #121418; transform: translateX(-50%); }
.vi-phone__sys { display: flex; align-items: center; gap: 5px; }
.vi-phone__sys svg { width: 17px; height: 11px; fill: #0D0D0D; }
.vi-phone__sys .vi-phone__wifi { width: 16px; height: 12px; fill: none; stroke: #0D0D0D; stroke-width: 2.6; stroke-linecap: round; }
.vi-phone__bat { position: relative; width: 24px; height: 12px; padding: 1.5px; border: 1px solid rgba(13,13,13,.45); border-radius: 4px; }
.vi-phone__bat i { display: block; width: 78%; height: 100%; border-radius: 2px; background: #0D0D0D; }
.vi-phone__home { display: block; width: 112px; height: 5px; margin: 8px auto 9px; border-radius: 3px; background: #121418; }
.vi-gpt__ico { width: 22px; height: 22px; flex: none; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.vi-gpt__bar { display: flex; align-items: center; justify-content: space-between; padding: 6px 16px 8px; color: #0D0D0D; }
.vi-gpt__title { display: inline-flex; align-items: center; gap: 2px; font-size: 17px; font-weight: 600; letter-spacing: -0.01em; }
.vi-gpt__title .vi-gpt__chev { width: 16px; height: 16px; color: #8F8F8F; stroke-width: 2.2; }
.vi-gpt__body { display: flex; flex-direction: column; gap: 14px; padding: 10px 16px 14px; }
.vi-gpt__q { align-self: flex-end; max-width: 84%; padding: 10px 14px; border-radius: 20px; background: #F2F2F2; font-size: 14.5px; line-height: 1.4; }
.vi-gpt__a { font-size: 14.5px; line-height: 1.5; color: #0D0D0D; }
.vi-gpt__list { margin: 6px 0 0; padding-left: 1.25em; list-style: decimal; }
.vi-gpt__list li { margin-top: 4px; padding-left: 2px; }
.vi-gpt__list li::marker { font-weight: 600; }
.vi-gpt__list b { font-weight: 650; }
.vi-gpt__you { margin-top: 12px; }
.vi-gpt__you .vi-slot { width: 100%; min-height: 46px; }
.vi-gpt__acts { display: flex; gap: 14px; margin-top: 12px; color: #8F8F8F; }
.vi-gpt__acts .vi-gpt__ico { width: 17px; height: 17px; }
.vi-gpt__input { display: flex; align-items: center; gap: 10px; min-height: 48px; margin: 4px 10px 0; padding: 6px 6px 6px 12px; border: 1px solid #E3E3E3; border-radius: 26px; background: #fff; box-shadow: 0 6px 18px rgba(0,0,0,.06); color: #6B6B6B; }
.vi-gpt__ph { flex: 1; min-width: 0; font-size: 15px; color: #8F8F8F; white-space: nowrap; }
.vi-gpt__plus { color: #0D0D0D; }
.vi-gpt__voice { display: grid; place-items: center; width: 36px; height: 36px; flex: none; border-radius: 50%; background: #0D0D0D; color: #fff; }
.vi-gpt__voice .vi-gpt__ico { width: 18px; height: 18px; stroke-width: 2.4; }
@media (min-width: 1024px) {
  .vi-phone { width: 340px; }
  .vi-gpt__q, .vi-gpt__a { font-size: 15px; }
}
@media (prefers-reduced-motion: no-preference) {
  .vi-gpt__row { animation: vi-rise 600ms var(--vi-ease-out) both; animation-delay: calc(500ms + var(--i, 0) * 260ms); }
}
@keyframes vi-rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }

/* ━━ Cartes illustrées (2 · Ce qui a changé, 4 · Méthode), comme /appel-strategique/ ━━ */
.vi-cards { display: grid; gap: 16px; }
.vi-card { overflow: hidden; border-radius: 24px; background: var(--vi-block); border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-2); }
.vi-card__body { display: grid; grid-template-columns: 32px minmax(0, 1fr); gap: 14px; padding: 20px 20px 22px; }
.vi-card__n { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; background: #fff; font: 700 14px/1 var(--vi-ff-head); color: var(--vi-ink); }
.vi-card__t { font: 800 19px/1.25 var(--vi-ff-head); letter-spacing: -0.02em; }
.vi-card__p { margin-top: 4px; font-size: 15.5px; color: var(--vi-muted); }
@media (min-width: 768px) {
  .vi-cards { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
  .vi-card__body { grid-template-columns: minmax(0, 1fr); gap: 12px; padding: 22px 24px 26px; }
  .vi-card__t { font-size: 20px; }
}

/* Mini-illustrations : décor HTML et CSS, dans un cadre teinté à fine grille */
.vi-illu {
  position: relative; display: grid; place-items: center; height: 164px; padding: 18px 20px;
  background:
    radial-gradient(60% 80% at 50% 100%, rgba(225,75,137,.08), transparent 70%),
    linear-gradient(var(--vi-line-3) 1px, transparent 1px) 0 0 / 22px 22px,
    linear-gradient(90deg, var(--vi-line-3) 1px, transparent 1px) 0 0 / 22px 22px,
    var(--vi-bg-soft);
  border-bottom: 1px solid var(--vi-line-3);
}
.vi-mini-ask { display: flex; align-items: center; gap: 10px; width: 100%; max-width: 300px; min-height: 52px; padding: 6px 6px 6px 8px; border-radius: 26px; background: #fff; border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-2); }
.vi-mini-ask__ia { display: grid; place-items: center; width: 30px; height: 30px; flex: none; border-radius: 50%; background: var(--vi-ink); color: #fff; font: 700 11px/1 var(--vi-ff-head); }
/* Les questions des versions par cible sont plus longues (« Quelle est la meilleure auto-école ? ») : 2 lignes au besoin. */
.vi-mini-ask__txt { flex: 1; min-width: 0; font: 500 14.5px/1.25 var(--vi-ff-body); color: var(--vi-ink); }
.vi-mini-ask__send { display: grid; place-items: center; width: 38px; height: 38px; flex: none; border-radius: 50%; background: var(--vi-grad); color: var(--vi-ink); }
.vi-mini-ask__send .vi-ico { width: 16px; height: 16px; stroke-width: 2.2; }
.vi-mini-list { display: grid; gap: 6px; width: 100%; max-width: 260px; }
.vi-mini-list__row { display: flex; align-items: center; gap: 8px; height: 26px; padding: 0 8px; border-radius: 8px; background: #fff; border: 1px solid var(--vi-line); }
.vi-mini-list__row b { display: grid; place-items: center; width: 16px; height: 16px; flex: none; border-radius: 50%; background: var(--vi-bg-sunk); font: 700 9.5px/1 var(--vi-ff-head); color: var(--vi-ink-2); }
.vi-mini-list__row i { display: block; width: var(--w); height: 6px; border-radius: 3px; background: #DADDE3; }
.vi-slot--sm { min-height: 30px; padding: 0 8px; gap: 8px; border-radius: 8px; background: #fff; }
.vi-slot--sm .vi-slot__q { width: 18px; height: 18px; font-size: 10px; border-width: 1.25px; }
.vi-slot--sm .vi-slot__label { font-size: 12.5px; }
.vi-mini-call { display: grid; justify-items: center; gap: 10px; }
.vi-mini-call__pill { display: inline-flex; align-items: center; gap: 10px; height: 44px; padding: 0 16px 0 6px; border-radius: 999px; background: #fff; border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-2); font: 600 14px/1 var(--vi-ff-body); color: var(--vi-ink); white-space: nowrap; }
.vi-mini-call__pill .vi-i { box-sizing: content-box; width: 14px; height: 14px; padding: 9px; border-radius: 50%; background: #E8F5EE; fill: var(--vi-wa); }
.vi-mini-call__stat { display: inline-flex; align-items: center; gap: 8px; height: 30px; padding: 0 12px; border-radius: 8px; background: #fff; border: 1px dashed var(--vi-line-2); font: 400 11.5px/1 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-mini-call__stat b { font-weight: 400; color: var(--vi-coral); }
.vi-mini-bars { display: grid; gap: 9px; width: 100%; max-width: 270px; }
.vi-mini-bars__row { display: grid; grid-template-columns: 74px minmax(0, 1fr); align-items: center; gap: 10px; font: 400 11.5px/1 var(--vi-ff-mono); color: var(--vi-ink-2); }
.vi-mini-bars__row i { position: relative; display: block; height: 10px; border-radius: 5px; background: #E9EBEF; overflow: hidden; }
.vi-mini-bars__row i::after { content: ""; position: absolute; inset: 0 auto 0 0; width: var(--w); border-radius: inherit; background: var(--vi-grad-h); }
.vi-mini-page { width: 100%; max-width: 240px; padding: 0 0 10px; border-radius: 12px; background: #fff; border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-2); overflow: hidden; }
.vi-mini-page__bar { display: flex; gap: 5px; padding: 8px 10px; margin-bottom: 6px; border-bottom: 1px solid var(--vi-line-3); }
.vi-mini-page__bar i { width: 7px; height: 7px; border-radius: 50%; background: #DADDE3; }
.vi-mini-page__row { display: flex; align-items: center; gap: 8px; padding: 5px 12px; }
.vi-mini-page__row .vi-i { width: 15px; height: 15px; fill: #0F7B4F; }
.vi-mini-page__row i { display: block; height: 7px; border-radius: 4px; background: #E3E6EA; }
.vi-mini-net { position: relative; display: grid; grid-template-columns: 1fr auto 1fr; grid-template-rows: auto auto; align-items: center; column-gap: 18px; row-gap: 14px; width: 100%; max-width: 300px; }
.vi-mini-net::before { content: ""; position: absolute; left: 12%; right: 12%; top: 50%; border-top: 1px dashed var(--vi-line-2); }
.vi-mini-net__chip { position: relative; justify-self: center; height: 28px; padding: 0 11px; display: inline-flex; align-items: center; border-radius: 999px; background: #fff; border: 1px solid var(--vi-line); font: 500 12px/1 var(--vi-ff-body); color: var(--vi-ink-2); white-space: nowrap; box-shadow: var(--vi-sh-1); }
.vi-mini-net__chip--a { grid-column: 1; grid-row: 1; } .vi-mini-net__chip--b { grid-column: 1; grid-row: 2; }
.vi-mini-net__chip--c { grid-column: 3; grid-row: 1; } .vi-mini-net__chip--d { grid-column: 3; grid-row: 2; }
.vi-mini-net__you { position: relative; grid-column: 2; grid-row: 1 / span 2; display: grid; place-items: center; width: 62px; height: 62px; border-radius: 50%; border: 1.5px solid transparent; background: linear-gradient(#fff,#fff) padding-box, var(--vi-grad) border-box; font: 800 14px/1 var(--vi-ff-head); color: var(--vi-ink); box-shadow: var(--vi-sh-glow); }

/* Chiffre sourcé */

/* ━━ 3 · Résultats ━━ */
.vi-cases { display: grid; gap: 16px; }
.vi-case { display: flex; flex-direction: column; padding: 22px 22px 20px; border-radius: 24px; background: var(--vi-block); border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-2); }
.vi-case__top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vi-case__logo { display: flex; align-items: center; height: 64px; }
.vi-case__logo img { display: block; width: auto; height: 64px; max-width: 160px; object-fit: contain; object-position: left center; }
.vi-case__logo--omega img { width: 150px; height: auto; }
.vi-case__logo--cdp69 img { height: 40px; }
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
.vi-plan__who { margin-top: 6px; font-size: 15px; color: var(--vi-muted); }
/* Logos des 4 IA mesurées, sous le nom et la description de la formule */
.vi-ia-logos { display: flex; align-items: center; gap: 14px; margin-top: 14px; }
.vi-ia-logos svg { display: block; width: 22px; height: 22px; flex: none; }
.vi-plan__price { margin-top: 18px; padding-top: 18px; border-top: 1px solid var(--vi-line-3); }
.vi-plan__was { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 15px; }
/* Prix des signatures à partir du 1er décembre, pendant l'offre : jamais barré (prix du 27/11/2026, jamais pratiqué avant l'offre). */
.vi-plan__after { font: 600 14px/1.35 var(--vi-ff-body); color: var(--vi-muted); }
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
.vi-perks { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; max-width: 560px; margin: 20px auto 0; }
.vi-perks li { display: grid; justify-items: center; align-content: start; gap: 8px; padding: 14px 6px; border-radius: 16px; background: var(--vi-block); font: 600 13px/1.3 var(--vi-ff-body); color: var(--vi-ink-2); text-align: center; }
@media (min-width: 1024px) {
  .vi-seg, .vi-planset__radio { display: none; }
  .vi-plans { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; align-items: stretch; }
  .vi-plan__in { padding: 32px 28px 28px; }
  .vi-plan__num { font-size: 56px; }
  .vi-perks { max-width: 760px; gap: 16px; margin-top: 32px; }
  .vi-perks li { grid-auto-flow: column; justify-content: center; align-items: center; gap: 12px; padding: 14px 18px; font-size: 14.5px; text-align: left; }
}

/* ━━ 6 · Engagement et équipe ━━ */
.vi-team { padding: 32px 22px; border-radius: 24px; background: var(--vi-block); border: 1px solid var(--vi-line); text-align: center; }
.vi-team__t { margin-top: 12px; }
.vi-team__faces { display: flex; justify-content: center; gap: 28px; margin-top: 28px; }
.vi-face { display: grid; justify-items: center; gap: 10px; margin: 0; }
.vi-face img { display: block; width: 84px; height: 84px; border-radius: 50%; object-fit: cover; background: var(--vi-bg-sunk); box-shadow: 0 0 0 4px #fff, 0 0 0 5px var(--vi-line); }
.vi-face figcaption strong { display: block; font: 700 16px/1.25 var(--vi-ff-head); color: var(--vi-ink); }
.vi-face figcaption span { display: block; margin-top: 2px; font-size: 13.5px; color: var(--vi-muted); }
.vi-team__p { margin-top: 18px; font-size: 15.5px; color: var(--vi-ink-2); }
.vi-badges { display: grid; gap: 8px; margin-top: 18px; }
.vi-badge { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 8px 14px; border-radius: 14px; background: var(--vi-block); font-size: 13.5px; line-height: 1.35; color: var(--vi-ink-2); text-decoration: none; text-align: left; }
.vi-badge strong { color: var(--vi-ink); }
.vi-badge__ico { width: 16px; height: 16px; fill: url(#vi-grad-stroke); }
@media (hover: hover) { .vi-badge:hover { background: var(--vi-bg-sunk); } }
/* Dans le bloc équipe (gris), les pastilles passent en blanc */
.vi-team .vi-badge { background: #fff; }
@media (hover: hover) { .vi-team .vi-badge:hover { background: var(--vi-bg-soft); } }
@media (min-width: 768px) {
  .vi-team { padding: 48px 40px; }
  .vi-badges { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 860px; margin-inline: auto; }
}
@media (min-width: 1024px) { .vi-team { padding: 64px 48px; } .vi-team__faces { gap: 48px; margin-top: 36px; } }

/* ━━ 7 · Diagnostic (final) ━━ */
.vi-final { overflow: hidden; background: radial-gradient(60% 60% at 50% 0%, rgba(225,75,137,.10), transparent 70%), radial-gradient(50% 50% at 90% 100%, rgba(248,144,60,.10), transparent 70%), var(--vi-bg-soft); }
.vi-final__in { display: flex; flex-direction: column; align-items: center; max-width: 1120px; text-align: center; }
/* Réservation intégrée à la page (Calendly, demande de Benjamin du 28/11/2026) */
/* Calendly dessine son propre cadre : pas de second cadre autour. En attendant (chargement, ou clic sans accord cookies) :
   une carte avec la silhouette du calendrier. */
.vi-cal { position: relative; width: 100%; max-width: 1040px; text-align: left; }
.vi-cal__frame { display: block; width: 100%; border: 0; opacity: 0; transition: opacity .3s ease, height .3s ease; }
.vi-cal__frame.is-ready { opacity: 1; }
.vi-cal__wait { position: relative; display: grid; place-items: center; width: 100%; max-width: 640px; min-height: 460px; margin: 0 auto; padding: 28px 20px; overflow: hidden; border-radius: 20px; background: #fff; border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-4); text-align: center; }
.vi-cal__frame + .vi-cal__wait { position: absolute; top: 0; left: 0; right: 0; }
.vi-cal__skel { position: absolute; inset: 28px 16px auto; display: flex; flex-direction: column; align-items: center; gap: 22px; opacity: .5; pointer-events: none; }
.vi-cal__skel-t { font: 700 17px/1.2 var(--vi-ff-head); color: var(--vi-ink); }
.vi-cal__skel-grid { display: grid; grid-template-columns: repeat(7, 30px); gap: 16px 10px; }
.vi-cal__skel-grid i { width: 30px; height: 30px; border-radius: 50%; background: var(--vi-bg-sunk); }
.vi-cal__gate { position: relative; display: grid; justify-items: center; gap: 12px; padding: 18px 20px; border-radius: 18px; background: rgba(255,255,255,.9); box-shadow: 0 8px 30px rgba(15,17,21,.08); }
.vi-cal__gate p { max-width: 30em; font: 500 13.5px/1.45 var(--vi-ff-body); color: var(--vi-muted); }
.vi-cal__btn { width: auto; border: 0; cursor: pointer; }
.vi-final .vi-slot { width: auto; padding-right: 18px; background: #fff; }
.vi-final__t { margin-top: 24px; font-weight: 900; font-size: clamp(1.875rem, 1.4rem + 2vw, 3rem); line-height: 1.06; letter-spacing: -0.035em; }
.vi-final__pts { display: grid; gap: 10px; margin-top: 20px; }
.vi-final__pts li { display: flex; align-items: center; justify-content: center; gap: 10px; font: 500 15.5px/1.35 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-final__pts .vi-i { width: 16px; height: 16px; fill: url(#vi-grad-stroke); }
@media (min-width: 768px) { .vi-final__pts { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 28px; } }
.vi-final__cta { display: flex; justify-content: center; width: 100%; margin-top: 28px; }
.vi-final__alt { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; width: 100%; margin-top: 24px; }
.vi-final__alt .vi-btn-ghost { padding: 0 12px; }
@media (min-width: 640px) { .vi-final__alt { display: flex; justify-content: center; width: auto; } .vi-final__alt .vi-btn-ghost { padding: 0 20px; } }

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
    display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 10px; align-items: center;
    position: fixed; left: 0; right: 0; bottom: 0; z-index: 300;
    padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
    background: rgba(255,255,255,.92); -webkit-backdrop-filter: saturate(1.4) blur(16px); backdrop-filter: saturate(1.4) blur(16px);
    border-top: 1px solid var(--vi-line); box-shadow: 0 -10px 28px -14px rgba(15,17,21,.16);
    transform: translateY(calc(100% + 1px)); visibility: hidden;
    transition: transform 320ms var(--vi-ease-in), visibility 0s linear 320ms;
  }
  .vi-sticky.is-shown { transform: none; visibility: visible; transition: transform 320ms var(--vi-ease-out), visibility 0s; }
  .lpwa { display: none !important; }
  html:has(.vi-sticky.is-shown) { scroll-padding-bottom: 88px; }
}
.vi-sticky__wa { display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%; background: #fff; border: 1px solid var(--vi-line-2); color: var(--vi-wa); }
.vi-sticky__wa .vi-wa-ico { width: 24px; height: 24px; }
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

/* ━━ Bouton WhatsApp flottant (à partir de 768 px) ━━ */
.lpwa { position: fixed; right: 24px; bottom: 24px; z-index: 400; display: flex; flex-direction: column; align-items: flex-end; gap: 12px; pointer-events: none; }
.lpwa > * { pointer-events: auto; }
.lpwa__btn { width: 56px; height: 56px; border-radius: 50%; display: grid; place-items: center; background: #0F1115; color: #25D366; box-shadow: 0 12px 28px -10px rgba(15,17,21,.45), 0 2px 6px rgba(15,17,21,.14); transition: transform 200ms cubic-bezier(.22,.61,.36,1); }
.lpwa__btn svg { display: block; width: 28px; height: 28px; fill: currentColor; }
.lpwa__btn:hover { transform: translateY(-2px); }
.lpwa__btn:focus-visible { outline: 2px solid #0F1115; outline-offset: 3px; }

/* ━━ Révélations au défilement (état de départ seulement sous .vi-io, posé par ViEffects) ━━ */
@media (prefers-reduced-motion: no-preference) {
  .vi.vi-io [data-vi-reveal] { transition: opacity 560ms var(--vi-ease-out), transform 560ms var(--vi-ease-out); transition-delay: calc(var(--vi-i, 0) * 80ms); }
  .vi.vi-io [data-vi-reveal]:not(.is-in) { opacity: 0; transform: translate3d(0, 16px, 0); }
}
@media print {
  .vi [data-vi-reveal] { opacity: 1 !important; transform: none !important; }
  .vi-sticky, .lpwa, .vi-offre { display: none !important; }
}
`;

export default css;
