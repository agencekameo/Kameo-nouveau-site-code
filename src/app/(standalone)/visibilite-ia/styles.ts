/*
 * Styles de la landing /visibilite-ia/ (accompagnement GEO, fond blanc). Injectés par <style> sur cette page
 * seulement : jetons --vi-*, classes préfixées vi- (aucune collision avec main.css, SiteEffects ou l'autre landing).
 * Les pièges de main.css (reset, em rouge, focus rouge, img/svg en bloc, boutons à 48 px sous 769 px,
 * prefers-reduced-motion) sont neutralisés dans la portée .vi. Le bouton WhatsApp (.lpwa), la fenêtre
 * Calendly et la barre mobile sont hors du flux : leurs styles sont ici aussi.
 */
const css = `
:root {
  --vi-bg: #FFFFFF; --vi-bg-soft: #F7F7F9; --vi-bg-sunk: #F2F3F6;
  --vi-tint: linear-gradient(136.79deg, #FDF2F7 5.13%, #FFF7F1 84.98%);
  --vi-tint-soft: linear-gradient(136.79deg, rgba(225,75,137,.06) 5.13%, rgba(248,144,60,.06) 84.98%);
  --vi-ink: #0F1115; --vi-ink-2: #23262D; --vi-text: #3F4552; --vi-muted: #5C6371; --vi-faint: #7D8494; --vi-field: #858C99;
  --vi-line: #E6E8EC; --vi-line-2: #D5D9E0; --vi-line-3: #EEF0F3; --vi-skel: #E9EBEF;
  --vi-hatch: repeating-linear-gradient(135deg, #E9EBEF 0 6px, #F3F4F6 6px 12px);
  --vi-pink: #E14B89; --vi-orange: #F8903C; --vi-coral: #ED6E63;
  --vi-grad: linear-gradient(136.79deg, #E14B89 5.13%, #F8903C 84.98%);
  --vi-grad-h: linear-gradient(90deg, #E14B89 0%, #F8903C 100%);
  --vi-grad-text: linear-gradient(100deg, #D0457F 0%, #CF5B1F 100%);
  --vi-ok: #0F7B4F; --vi-ok-bg: #E8F5EE; --vi-wa: #178A47;

  --vi-ff-head: "Satoshi", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --vi-ff-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --vi-ff-mono: "Fragment Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;

  --vi-section: clamp(4rem, 2.857rem + 4.762vw, 7rem);
  --vi-head-gap: clamp(2rem, 1.443rem + 2.286vw, 3.5rem);
  --vi-card-pad: clamp(1.25rem, .971rem + 1.143vw, 2rem);
  --vi-gutter: 16px; --vi-gap: 16px;

  --vi-r-xs: 6px; --vi-r-sm: 10px; --vi-r-field: 12px; --vi-r-md: 14px; --vi-r-lg: 20px; --vi-r-xl: 28px; --vi-r-2xl: 36px;

  --vi-sh-1: 0 1px 2px rgba(15,17,21,.05);
  --vi-sh-2: 0 1px 2px rgba(15,17,21,.04), 0 4px 12px -2px rgba(15,17,21,.06);
  --vi-sh-3: 0 1px 2px rgba(15,17,21,.04), 0 12px 32px -12px rgba(15,17,21,.14);
  --vi-sh-4: 0 2px 4px rgba(15,17,21,.04), 0 24px 56px -20px rgba(15,17,21,.20), 0 48px 96px -40px rgba(225,75,137,.28);
  --vi-sh-glow: 0 1px 2px rgba(15,17,21,.04), 0 32px 72px -28px rgba(225,75,137,.45), 0 12px 28px -14px rgba(248,144,60,.30);
  --vi-sh-btn: inset 0 1px 0 rgba(255,255,255,.35), inset 0 0 0 1px rgba(15,17,21,.06), 0 6px 16px -6px rgba(237,110,99,.55);
  --vi-sh-btn-h: inset 0 1px 0 rgba(255,255,255,.35), inset 0 0 0 1px rgba(15,17,21,.06), 0 14px 30px -10px rgba(237,110,99,.65);

  --vi-ease-out: cubic-bezier(.16, 1, .3, 1);
  --vi-ease-in-out: cubic-bezier(.65, 0, .35, 1);
  --vi-ease-std: cubic-bezier(.22, .61, .36, 1);
  --vi-ease-in: cubic-bezier(.4, 0, 1, 1);
}
@media (min-width: 640px) { :root { --vi-gutter: 24px; } }
@media (min-width: 768px) { :root { --vi-gap: 20px; } }
@media (min-width: 1024px) { :root { --vi-gutter: 40px; --vi-gap: 24px; } }

/* ━━ Base ━━ */
body:has(.vi) { background: #FFFFFF; }
.vi {
  color-scheme: light;
  background: var(--vi-bg); color: var(--vi-text);
  font-family: var(--vi-ff-body); font-size: clamp(1rem, .977rem + .095vw, 1.0625rem); line-height: 1.6;
  overflow-x: hidden;
  --c-accent: #0F1115;
  -webkit-font-smoothing: antialiased;
}
@supports (overflow-x: clip) { .vi { overflow-x: clip; } }
.vi h1, .vi h2, .vi h3, .vi h4 { font-family: var(--vi-ff-head); color: var(--vi-ink); text-wrap: balance; }
.vi p { text-wrap: pretty; }
.vi em { font: inherit; font-style: normal; color: inherit; letter-spacing: inherit; }
.vi strong, .vi b { font-weight: 600; color: var(--vi-ink-2); }
.vi sup { font-size: .75em; line-height: 0; vertical-align: .38em; letter-spacing: 0; }
.vi-frac__place sup, .vi-trust__fab sup, .vi-fab__date sup { font-size: .85em; vertical-align: .3em; }
/* :not(.vi-strike) : sans lui, cette règle (0,1,1) annulait le trait des prix barrés des cartes */
.vi del:not(.vi-strike) { text-decoration: none; }
.vi :focus-visible { outline: 2px solid var(--vi-ink); outline-offset: 3px; }
.vi ::selection { background: rgba(237,110,99,.22); color: var(--vi-ink); }
.vi [hidden] { display: none !important; }
.vi section[id] { scroll-margin-top: 16px; }
@media (min-width: 768px) { .vi section[id] { scroll-margin-top: 88px; } }
.vi-nowrap { white-space: nowrap; }
.vi-ico { display: block; width: 20px; height: 20px; flex: none; fill: none; stroke: currentColor; stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round; }
.vi-star { display: block; width: 15px; height: 15px; flex: none; fill: url(#vi-grad-stroke); }
.vi-wa-ico { display: block; width: 20px; height: 20px; flex: none; fill: currentColor; }
.vi-defs { position: absolute; width: 0; height: 0; overflow: hidden; }
.vi-wrap { width: 100%; max-width: calc(1200px + 2 * var(--vi-gutter)); margin-inline: auto; padding-inline: var(--vi-gutter); }

.vi-gt {
  background: var(--vi-grad-text); -webkit-background-clip: text; background-clip: text;
  color: transparent; -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone; box-decoration-break: clone;
}
@media (forced-colors: active) { .vi-gt { background: none; color: CanvasText; -webkit-text-fill-color: CanvasText; } }
.vi-dim { color: var(--vi-faint); }

/* ━━ Typographie de section ━━ */
.vi-sec { position: relative; padding-block: var(--vi-section); }
.vi-sec--soft { background: var(--vi-bg-soft); }
.vi-eyebrow { display: inline-flex; align-items: center; gap: 10px; font: 400 .75rem/1.4 var(--vi-ff-mono); letter-spacing: .08em; text-transform: uppercase; color: var(--vi-ink-2); }
.vi-eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 1.5px; background: var(--vi-grad); flex: none; }
.vi-head { max-width: 760px; margin-bottom: var(--vi-head-gap); }
#angle-mort .vi-head { max-width: none; }
.vi-h2 { margin-top: 12px; max-width: 22em; font: 700 clamp(1.75rem, 1.379rem + 1.524vw, 2.75rem)/1.08 var(--vi-ff-head); letter-spacing: -0.028em; }
.vi-h2--manifest { max-width: 18em; font-weight: 900; font-size: clamp(1.875rem, 1.393rem + 1.98vw, 3rem); line-height: 1.04; letter-spacing: -0.033em; }
.vi-h2--lines > span { display: block; }
.vi-h3 { font: 700 clamp(1.25rem, 1.157rem + .381vw, 1.5rem)/1.2 var(--vi-ff-head); letter-spacing: -0.018em; }
.vi-chapo { margin-top: 14px; max-width: 34em; font-size: clamp(1.0625rem, .993rem + .286vw, 1.25rem); line-height: 1.55; letter-spacing: -0.006em; color: var(--vi-text); }
@media (min-width: 1024px) {
  .vi-h2 { margin-top: 16px; }
  .vi-chapo { margin-top: 20px; }
  .vi-head--split { max-width: none; display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); column-gap: 48px; align-items: end; }
  .vi-head--split .vi-chapo { margin-top: 0; padding-bottom: 6px; }
}
.vi-micro { margin-top: 12px; font: 500 .8125rem/1.45 var(--vi-ff-body); color: var(--vi-muted); }
.vi-inline { color: var(--vi-ink); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; text-decoration-color: var(--vi-line-2); transition: text-decoration-color .2s; }
@media (hover: hover) { .vi-inline:hover { text-decoration-color: var(--vi-ink); } }

/* ━━ Boutons ━━ */
.vi-btn {
  position: relative; isolation: isolate; overflow: hidden;
  display: inline-flex; align-items: center; justify-content: center; gap: 12px;
  min-height: 56px; padding: 8px 8px 8px 24px; border-radius: 999px;
  background: var(--vi-grad); color: var(--vi-ink);
  font: 700 1.0625rem/1.2 var(--vi-ff-head); letter-spacing: -0.01em; text-align: left; text-decoration: none;
  box-shadow: var(--vi-sh-btn);
  transition: transform 200ms var(--vi-ease-std), box-shadow 200ms var(--vi-ease-std), background-color 200ms var(--vi-ease-std);
}
.vi-btn__txt { display: flex; flex-direction: column; align-items: flex-start; text-align: left; min-width: 0; }
.vi-btn__sub { margin-top: 3px; font: 500 12.5px/1.2 var(--vi-ff-body); letter-spacing: 0; color: var(--vi-ink); }
@media (min-width: 640px) { .vi-btn--lg .vi-btn__sub, .vi-btn--xl .vi-btn__sub { font-size: 13px; } }
.vi-btn__arrow { width: 40px; height: 40px; border-radius: 50%; background: #fff; color: var(--vi-ink); display: grid; place-items: center; flex: none; box-shadow: 0 1px 2px rgba(15,17,21,.14); transition: transform 200ms var(--vi-ease-std); }
.vi-btn__arrow .vi-ico { width: 18px; height: 18px; stroke-width: 2; }
.vi-btn::after { content: ""; position: absolute; inset: 0; z-index: -1; background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,.45) 50%, transparent 65%); transform: translateX(-120%); transition: transform 700ms var(--vi-ease-out); }
@media (hover: hover) {
  .vi-btn:hover { transform: translateY(-1px); box-shadow: var(--vi-sh-btn-h); }
  .vi-btn:hover .vi-btn__arrow { transform: translateX(3px); }
  .vi-btn:hover::after { transform: translateX(120%); }
}
.vi-btn:active { transform: translateY(0) scale(.985); }
.vi-btn--block { width: 100%; justify-content: space-between; }
.vi-btn--outline { background: #fff; box-shadow: inset 0 0 0 1.5px var(--vi-ink); }
.vi-btn--outline::after { display: none; }
.vi-btn--outline .vi-btn__arrow { background: var(--vi-ink); color: #fff; box-shadow: none; }
@media (hover: hover) { .vi-btn--outline:hover { background: var(--vi-bg-soft); box-shadow: inset 0 0 0 1.5px var(--vi-ink); } }
@media (min-width: 640px) {
  .vi-btn--lg { min-height: 64px; padding: 10px 10px 10px 28px; font-size: 18px; }
  .vi-btn--lg .vi-btn__arrow { width: 44px; height: 44px; }
  .vi-btn--xl { min-height: 72px; padding: 10px 10px 10px 32px; font-size: 20px; gap: 16px; }
  .vi-btn--xl .vi-btn__arrow { width: 52px; height: 52px; }
}
@media (max-width: 639.98px) {
  .vi-btn { width: 100%; justify-content: space-between; padding: 8px 8px 8px 20px; font-size: 16px; gap: 10px; }
  .vi-btn__arrow { width: 36px; height: 36px; }
  .vi-btn--xl { min-height: 64px; font-size: 18px; padding: 10px 10px 10px 22px; }
  .vi-btn--xl .vi-btn__arrow { width: 44px; height: 44px; }
}
.vi-link { display: inline-flex; align-items: center; gap: 6px; min-height: 44px; font: 500 16px/1.3 var(--vi-ff-body); color: var(--vi-ink); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 4px; text-decoration-color: var(--vi-line-2); transition: text-decoration-color .2s; }
@media (hover: hover) { .vi-link:hover { text-decoration-color: var(--vi-ink); } }
.vi-link--sm { font-size: 14px; }
.vi-ico--ext { width: 14px; height: 14px; }
.vi-btn-ghost { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 0 20px; border-radius: 999px; background: #fff; border: 1px solid var(--vi-line-2); font: 700 15px/1.2 var(--vi-ff-head); color: var(--vi-ink); text-decoration: none; transition: border-color .2s; }
@media (hover: hover) { .vi-btn-ghost:hover { border-color: var(--vi-ink); } }
.vi-btn-ghost .vi-ico, .vi-btn-ghost .vi-wa-ico { width: 18px; height: 18px; }
.vi-btn-ghost .vi-wa-ico { color: var(--vi-wa); }

/* ━━ Pastilles, étiquettes, sources ━━ */
.vi-chip-promo { display: inline-flex; align-items: center; height: 22px; padding: 0 8px; border-radius: 6px; background: #0F1115; color: #fff; font: 400 11px/1 var(--vi-ff-mono); letter-spacing: .06em; text-transform: uppercase; white-space: nowrap; flex: none; }
.vi-count { font: 400 clamp(.75rem, .738rem + .048vw, .78125rem)/1.4 var(--vi-ff-mono); color: var(--vi-ink-2); font-variant-numeric: tabular-nums; white-space: nowrap; }
.vi-count::before { content: ""; display: inline-block; width: 6px; height: 6px; margin-right: 8px; border-radius: 50%; background: var(--vi-coral); vertical-align: 1px; }
.vi-illu { display: inline-flex; align-items: center; gap: 6px; padding: 3px 8px; border-radius: var(--vi-r-xs); background: var(--vi-bg-sunk); color: var(--vi-muted); font: 400 .6875rem/1.3 var(--vi-ff-mono); letter-spacing: .02em; white-space: nowrap; }
.vi-illu::before { content: ""; width: 8px; height: 8px; border: 1px dashed currentColor; border-radius: 2px; flex: none; }
.vi-tag { display: inline-flex; align-items: center; height: 22px; padding: 0 8px; border-radius: 6px; background: var(--vi-bg-sunk); color: var(--vi-muted); font: 400 11px/1 var(--vi-ff-mono); white-space: nowrap; }
.vi-tag--new { background: var(--vi-grad); color: var(--vi-ink); font: 700 11px/1 var(--vi-ff-head); letter-spacing: .06em; text-transform: uppercase; }
.vi-src { display: flex; align-items: baseline; gap: 8px; margin-top: 12px; font: 400 clamp(.75rem, .738rem + .048vw, .78125rem)/1.5 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-src::before { content: ""; width: 16px; height: 1px; background: var(--vi-line-2); flex: none; transform: translateY(-3px); }
.vi-src a, .vi-honest a, .vi-note__txt a { text-decoration: underline dotted; text-underline-offset: 3px; }
.vi-src a:hover, .vi-honest a:hover, .vi-note__txt a:hover { color: var(--vi-ink); text-decoration-style: solid; }
.vi .vi-strike { text-decoration: line-through; text-decoration-thickness: 1.5px; text-decoration-color: var(--vi-coral); text-decoration-skip-ink: none; color: var(--vi-muted); }
.vi-ai { display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 12px 0 10px; border-radius: 999px; background: #fff; border: 1px solid var(--vi-line); font: 500 13px/1 var(--vi-ff-body); color: var(--vi-ink-2); white-space: nowrap; }
.vi-ai::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--vi-faint); }

/* Échelle à 4 crans */
.vi-scale { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 4px; }
.vi-scale__bar { display: block; height: 6px; border-radius: 3px; background: #C9CDD5; }
.vi-scale li:nth-child(2) .vi-scale__bar { background: linear-gradient(90deg, rgba(225,75,137,.32), rgba(237,110,99,.32)); }
.vi-scale li:nth-child(3) .vi-scale__bar { background: linear-gradient(90deg, rgba(225,75,137,.62), rgba(242,126,80,.62)); }
.vi-scale li:nth-child(4) .vi-scale__bar { background: var(--vi-grad-h); }
.vi-scale__lbl { display: block; margin-top: 8px; font: 400 .6875rem/1.3 var(--vi-ff-mono); color: var(--vi-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.vi-scale li:nth-child(2) .vi-scale__lbl, .vi-scale li:nth-child(3) .vi-scale__lbl { text-align: center; }
.vi-scale li:nth-child(4) .vi-scale__lbl { text-align: right; }
.vi-scale--unknown .vi-scale__bar { background: var(--vi-skel) !important; }
.vi-scale--pick li:not(.is-on) .vi-scale__bar { background: var(--vi-skel); }

/* Emplacement « Votre entreprise ? » */
.vi-slot { position: relative; display: flex; align-items: center; gap: 12px; min-height: 60px; padding: 12px 16px; border-radius: var(--vi-r-md); background: var(--vi-tint-soft); }
.vi-slot__frame { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; }
.vi-slot__frame rect { fill: none; stroke: url(#vi-grad-stroke); stroke-width: 1.5; stroke-dasharray: 6 5; vector-effect: non-scaling-stroke; }
.vi-slot__q { position: relative; width: 32px; height: 32px; flex: none; border-radius: 50%; display: grid; place-items: center; border: 1.5px solid transparent; background: linear-gradient(#fff,#fff) padding-box, var(--vi-grad) border-box; font: 900 16px/1 var(--vi-ff-head); }
.vi-slot__q > span { background: var(--vi-grad-text); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent; }
.vi-slot__label { font: 700 16px/1.25 var(--vi-ff-head); color: var(--vi-ink); letter-spacing: -0.01em; }
.vi-slot--sm { min-height: 48px; padding: 8px 12px; gap: 10px; }
.vi-slot--sm .vi-slot__q { width: 26px; height: 26px; font-size: 13px; }
.vi-slot--sm .vi-slot__label { font-size: 15px; }
@media (prefers-reduced-motion: no-preference) {
  .vi-slot__q::after { content: ""; position: absolute; inset: -1.5px; border-radius: 50%; border: 2px solid rgba(237,110,99,.45); opacity: 0; animation: vi-pulse 2400ms cubic-bezier(.4,0,.2,1) 2; }
  .vi-answer.is-cycling .vi-slot__q::after { animation-iteration-count: infinite; }
  .vi-answer.is-done .vi-slot__q::after, .vi-answer.is-paused .vi-slot__q::after { animation: none; }
  .vi.vi-io [data-vi-reveal]:not(.is-in) .vi-slot__q::after, .vi.vi-io [data-vi-fill]:not(.is-in) .vi-slot__q::after { animation: none; }
}
@keyframes vi-pulse { 0% { transform: scale(1); opacity: 1; } 70%, 100% { transform: scale(1.55); opacity: 0; } }

/* Cartes, cadres d'interface, encarts */
.vi-card { background: #fff; border: 1px solid var(--vi-line); border-radius: var(--vi-r-lg); padding: var(--vi-card-pad); box-shadow: var(--vi-sh-2); }
.vi-ui { background: #fff; border: 1px solid var(--vi-line); border-radius: var(--vi-r-xl); overflow: hidden; box-shadow: var(--vi-sh-3); }
.vi-ui__bar { min-height: 52px; padding: 0 12px; display: flex; align-items: center; justify-content: space-between; gap: 12px; border-bottom: 1px solid var(--vi-line-3); }
.vi-ui__foot { position: relative; border-top: 1px solid var(--vi-line-3); padding: 12px 20px; display: flex; align-items: center; justify-content: flex-end; }
@media (max-width: 639.98px) { .vi-ui { border-radius: 20px; } .vi-ui__bar { min-height: 44px; padding: 0 8px; } .vi-ui__foot { padding: 10px 14px; } }
.vi-tabs { position: relative; display: inline-flex; gap: 2px; padding: 3px; border-radius: 999px; background: var(--vi-bg-sunk); }
.vi-tabs > span:not(.vi-tabs__ind) { position: relative; z-index: 1; height: 30px; padding: 0 12px; display: inline-flex; align-items: center; border-radius: 999px; font: 500 13px/1 var(--vi-ff-body); color: var(--vi-muted); white-space: nowrap; transition: color 320ms var(--vi-ease-in-out); }
.vi-tabs > .is-on { background: #fff; color: var(--vi-ink) !important; box-shadow: 0 1px 2px rgba(15,17,21,.08), 0 1px 1px rgba(15,17,21,.04); }
.vi-tabs.has-ind > .is-on { background: transparent; box-shadow: none; }
.vi-tabs__ind { position: absolute; z-index: 0; left: 0; top: 3px; height: 30px; width: var(--w); transform: translateX(var(--x)); border-radius: 999px; background: #fff; box-shadow: 0 1px 2px rgba(15,17,21,.08), 0 1px 1px rgba(15,17,21,.04); transition: transform 320ms var(--vi-ease-in-out), width 320ms var(--vi-ease-in-out); }
@media (max-width: 639.98px) { .vi-tabs > span:not(.vi-tabs__ind) { height: 28px; padding: 0 9px; font-size: 12.5px; } .vi-tabs__ind { height: 28px; } }
.vi-note { background: #fff; border: 1px dashed var(--vi-line-2); border-radius: var(--vi-r-lg); padding: 24px 28px; }
@media (max-width: 639.98px) { .vi-note { padding: 20px; } }
.vi-strip { margin-top: auto; background: var(--vi-tint-soft); border-radius: var(--vi-r-field); padding: 12px 16px; }
.vi-strip__lbl { display: flex; align-items: center; gap: 8px; font: 400 11px/1.3 var(--vi-ff-mono); letter-spacing: .06em; text-transform: uppercase; color: var(--vi-muted); }
.vi-strip__lbl::before { content: ""; width: 5px; height: 5px; border-radius: 1px; background: var(--vi-grad); flex: none; }
.vi-strip__txt { display: block; margin-top: 6px; font: 500 14.5px/1.5 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-strip--solo { margin-top: 16px; }
.vi-strip--solo .vi-strip__txt { margin-top: 0; }
.vi-checks { margin-top: 20px; display: grid; gap: 12px; }
.vi-checks li { display: flex; gap: 10px; align-items: flex-start; font-size: 15.5px; line-height: 1.5; color: var(--vi-ink-2); }
.vi-check { width: 20px; height: 20px; padding: 3px; margin-top: 1px; border-radius: 50%; background: rgba(225,75,137,.08); stroke: url(#vi-grad-stroke); stroke-width: 2.4; }

/* Face-à-face */
.vi-vs { display: grid; grid-template-columns: 1fr; border: 1px solid var(--vi-line); border-radius: var(--vi-r-xl); overflow: hidden; background: #fff; }
.vi-vs__col { padding: var(--vi-card-pad); min-width: 0; }
.vi-vs__col + .vi-vs__col { border-top: 1px solid var(--vi-line); }
.vi-vs__col--alt { background: var(--vi-bg-soft); }
@media (min-width: 768px) { .vi-vs { grid-template-columns: 1fr 1fr; } .vi-vs__col + .vi-vs__col { border-top: 0; border-left: 1px solid var(--vi-line); } }
@media (min-width: 1024px) { .vi-vs__col { padding: 40px; } }

/* ━━ Bandeau d'offre ━━ */
.vi-offre { position: relative; background: linear-gradient(90deg, rgba(225,75,137,.07), rgba(248,144,60,.07)), #fff; }
.vi-offre::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: var(--vi-grad-h); opacity: .55; }
.vi-offre__in { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 6px 16px; padding: 10px 16px; font: 400 14px/1.45 var(--vi-ff-body); color: var(--vi-ink-2); text-align: center; }
.vi-offre__in strong { color: var(--vi-ink); }
.vi-offre__l2 { display: inline-flex; align-items: center; gap: 16px; }
.vi-offre__link { display: inline-flex; align-items: center; min-height: 44px; margin-block: -12px; padding-inline: 4px; font-weight: 600; color: var(--vi-ink); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; white-space: nowrap; }
.vi-offre__dshort { display: none; }
@media (min-width: 1400px) { .vi-offre__short { display: none; } }
@media (max-width: 1399.98px) { .vi-offre__long { display: none; } }
@media (max-width: 639.98px) {
  .vi-offre__in { display: block; text-align: left; font-size: 13px; padding: 9px 16px; }
  .vi-offre__in .vi-chip-promo { display: inline-flex; height: 20px; margin-right: 8px; vertical-align: 1px; }
  .vi-offre__l2 { display: flex; margin-top: 4px; gap: 16px; }
  .vi-offre__date { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
  .vi-offre__dshort { display: inline; }
}

/* ━━ Barre du haut ━━ */
.vi-top { position: relative; z-index: 2; }
.vi-top__in { display: flex; align-items: center; justify-content: space-between; height: 56px; }
@media (min-width: 1024px) { .vi-top__in { height: 72px; } }
.vi-logo { display: inline-flex; align-items: center; gap: 9px; color: var(--vi-ink); }
.vi-logo__mark { width: 26px; height: 30px; overflow: hidden; flex: none; }
.vi-logo__mark img { display: block; width: auto; height: 30px; max-width: none; }
.vi-logo__word { font: 700 22px/1 var(--vi-ff-head); letter-spacing: -0.03em; }
.vi-top__tel { display: inline-flex; align-items: center; gap: 14px; }
.vi-top__hours { font: 400 12px/1 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-top__num { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; font: 600 15px/1 var(--vi-ff-body); color: var(--vi-ink); white-space: nowrap; }
.vi-top__num .vi-ico { width: 16px; height: 16px; }
.vi-top__num:hover { text-decoration: underline; text-underline-offset: 3px; }
.vi-top__round { display: none; width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--vi-line-2); place-items: center; color: var(--vi-ink-2); background: #fff; }
.vi-top__round .vi-ico { width: 18px; height: 18px; }
.vi-top__cta { display: none; }
@media (min-width: 768px) {
  .vi-top { position: sticky; top: 0; z-index: 30; background: rgba(255,255,255,.9); -webkit-backdrop-filter: saturate(1.4) blur(10px); backdrop-filter: saturate(1.4) blur(10px); border-bottom: 1px solid transparent; transition: border-color .2s; }
  .vi.is-past-hero .vi-top { border-bottom-color: var(--vi-line); }
  .vi.is-past-hero .vi-top__cta { display: inline-flex; min-height: 44px; height: 44px; padding: 0 18px; font-size: 15px; }
  .vi.is-past-hero .vi-top__hours { display: none; }
}
@media (max-width: 639.98px) {
  .vi-logo__mark { width: 23px; height: 26px; } .vi-logo__mark img { height: 26px; } .vi-logo__word { font-size: 20px; }
  .vi-top__tel { display: none; } .vi-top__round { display: grid; }
}

/* ━━ Héros ━━ */
.vi-hero { position: relative; isolation: isolate; padding: 20px 0 56px; }
@media (min-width: 1024px) { .vi-hero { padding: 40px 0 112px; } }
.vi-hero::before {
  content: ""; position: absolute; inset: 0; z-index: -2; pointer-events: none;
  background-image: linear-gradient(to right, rgba(15,17,21,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,17,21,.06) 1px, transparent 1px);
  background-size: 56px 56px; background-position: center top;
  -webkit-mask-image: radial-gradient(ellipse 60% 70% at 72% 42%, #000 25%, transparent 72%), linear-gradient(to bottom, transparent 0, #000 120px);
  -webkit-mask-composite: source-in;
  mask-image: radial-gradient(ellipse 60% 70% at 72% 42%, #000 25%, transparent 72%), linear-gradient(to bottom, transparent 0, #000 120px);
  mask-composite: intersect;
}
.vi-hero__halo { position: absolute; z-index: -1; pointer-events: none; width: 1040px; height: 820px; right: -300px; top: 50%; transform: translateY(-50%);
  background: radial-gradient(closest-side at 34% 50%, rgba(225,75,137,.14), transparent), radial-gradient(closest-side at 60% 66%, rgba(248,144,60,.13), transparent); }
@media (max-width: 1023.98px) {
  .vi-hero::before { -webkit-mask-image: radial-gradient(ellipse 90% 45% at 50% 78%, #000 20%, transparent 70%); mask-image: radial-gradient(ellipse 90% 45% at 50% 78%, #000 20%, transparent 70%); -webkit-mask-composite: source-over; mask-composite: add; }
  .vi-hero__halo { width: 480px; height: 420px; right: 50%; top: auto; bottom: 40px; transform: translateX(50%); }
}
.vi-hero__grid { display: grid; gap: 32px; }
.vi-hero__text { min-width: 0; }
@media (min-width: 640px) and (max-width: 1023.98px) { .vi-hero__text { max-width: 680px; } .vi-hero .vi-answer { max-width: 680px; } }
@media (min-width: 1024px) { .vi-hero__grid { grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); column-gap: clamp(40px, 5vw, 80px); align-items: center; } }
@media (min-width: 1280px) { .vi-hero__grid { grid-template-columns: minmax(0, 640px) minmax(0, 1fr); } }
.vi-hero__eyebrow { display: flex; gap: 10px; align-items: baseline; font: 400 12px/1.4 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-hero__eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 1.5px; background: var(--vi-grad); flex: none; transform: translateY(-1px); }
@media (min-width: 1024px) { .vi-hero__eyebrow { font-size: 12.5px; } }
.vi-h1 { margin-top: 14px; font: 900 clamp(2rem, 1.3425rem + 2.697vw, 3.5rem)/1.02 var(--vi-ff-head); letter-spacing: -0.035em; color: var(--vi-ink); }
.vi-h1 > span { display: block; }
.vi-lead { margin-top: 14px; max-width: 34em; font-size: clamp(1.0625rem, .993rem + .286vw, 1.25rem); line-height: 1.55; letter-spacing: -0.006em; color: var(--vi-text); }
@media (min-width: 1024px) { .vi-h1, .vi-lead { margin-top: 24px; } }
.vi-cta-row { margin-top: 22px; display: flex; flex-direction: column; align-items: flex-start; }
.vi-cta-row .vi-micro { order: 2; margin-top: 10px; }
.vi-cta-row .vi-link { order: 3; margin-top: 4px; }
@media (min-width: 640px) {
  .vi-cta-row { flex-direction: row; flex-wrap: wrap; align-items: center; column-gap: 24px; }
  .vi-cta-row .vi-btn { flex: none; }
  .vi-cta-row .vi-link { order: 1; margin-top: 0; }
  .vi-cta-row .vi-micro { order: 3; flex-basis: 100%; margin-top: 12px; }
}
@media (min-width: 1024px) { .vi-cta-row { margin-top: 36px; } }
/* Variantes courtes sous 640 px (surtitre, sous-titre, libellé du test) : le bouton du héros reste au-dessus du bandeau cookies */
.vi-only-sm, .vi-lead__s { display: none; }
@media (max-width: 639.98px) {
  .vi-only-lg, .vi-lead__l { display: none; }
  .vi-only-sm, .vi-lead__s { display: inline; }
  .vi-hero { padding-top: 12px; }
  .vi-h1, .vi-lead { margin-top: 10px; }
  .vi-cta-row { margin-top: 18px; }
  body:has(.vi) .ckb { padding: 12px 14px; }
  body:has(.vi) .ckb__sign { display: none; }
  body:has(.vi) .ckb__text { margin-top: 4px; }
  body:has(.vi) .ckb__actions { margin-top: 10px; }
}
.vi-trust { margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--vi-line); }
@media (min-width: 1024px) { .vi-trust { margin-top: 36px; padding-top: 20px; } }
.vi-trust__row { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; font: 500 14px/1.4 var(--vi-ff-body); color: var(--vi-ink-2); }
@media (min-width: 640px) and (max-width: 1023.98px), (min-width: 1280px) {
  .vi-trust__row { flex-direction: row; align-items: center; gap: 20px; }
  .vi-trust__row > * + * { padding-left: 20px; border-left: 1px solid var(--vi-line-2); }
}
.vi-trust__item { display: inline-flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.vi-trust__tp { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; margin-block: -12px; }
.vi-trust__pp { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.vi-trust__new { margin-top: 14px; display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; font: 500 14px/1.45 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-trust__tp:hover .vi-trust__note, .vi-trust__tp:hover .vi-u { text-decoration: underline; text-underline-offset: 3px; }
.vi-trust__note { font: 700 15px/1 var(--vi-ff-head); color: var(--vi-ink); }
.vi-trust__price strong { color: var(--vi-ink); font-weight: 600; }
.vi-trust__fab { display: none; margin-top: 12px; font: 400 12px/1.5 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-trust__fab a { text-decoration: underline dotted; text-underline-offset: 3px; }
.vi-trust__fab a:hover { color: var(--vi-ink); }
@media (min-width: 1024px) { .vi-trust__fab { display: block; } }

/* Visuel « la réponse » */
.vi-answer { position: relative; max-width: 600px; min-width: 0; }
@media (min-width: 1360px) { .vi-hero .vi-answer { margin-bottom: 40px; } }
@media (min-width: 1280px) { .vi-hero .vi-answer { margin-right: calc(-1 * clamp(0px, (100vw - 1280px) / 2, 80px)); } }
.vi-answer__card { box-shadow: var(--vi-sh-4); }
@media (max-width: 639.98px) { .vi-answer__card { box-shadow: var(--vi-sh-3); } }
.vi-answer__body { padding: 24px 28px; }
@media (max-width: 639.98px) { .vi-answer__body { padding: 16px; } }
.vi-answer__who { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-answer__who--right { justify-content: flex-end; }
.vi-answer__ia { width: 22px; height: 22px; border-radius: 6px; background: var(--vi-ink); color: #fff; display: grid; place-items: center; font: 700 10px/1 var(--vi-ff-head); letter-spacing: 0; flex: none; }
.vi-answer__ask { min-height: 72px; display: flex; align-items: flex-end; justify-content: flex-end; margin-bottom: 20px; }
.vi-answer__bubble { max-width: 86%; background: var(--vi-bg-sunk); border-radius: 20px 20px 6px 20px; padding: 12px 16px; font: 400 15.5px/1.45 var(--vi-ff-body); color: var(--vi-ink-2); }
@media (max-width: 639.98px) { .vi-answer__ask { min-height: 64px; margin-bottom: 16px; } .vi-answer__bubble { max-width: 92%; font-size: 14.5px; } }
@media (min-width: 1024px) { .vi-answer__var { display: inline-block; } }
.vi-answer__skel { display: grid; gap: 6px; margin: 4px 0 14px; }
.vi-answer__skel i { display: block; height: 8px; border-radius: 4px; background: var(--vi-skel); }
@media (max-width: 639.98px) { .vi-hero .vi-answer__skel { display: none; } }
.vi-answer__dots { display: inline-flex; gap: 4px; margin-left: 4px; }
.vi-answer__dots i { width: 5px; height: 5px; border-radius: 50%; background: var(--vi-faint); opacity: 0; }
.vi-answer__list { display: grid; gap: 8px; }
.vi-answer__row { display: grid; grid-template-columns: 20px 28px minmax(0, 1fr) auto; gap: 10px; align-items: center; padding: 10px 12px; border-radius: 12px; background: #fff; border: 1px solid var(--vi-line-3); }
.vi-answer__rank { font: 400 12px/1 var(--vi-ff-mono); color: var(--vi-faint); text-align: center; }
.vi-answer__mono { width: 28px; height: 28px; border-radius: 8px; background: var(--vi-bg-sunk); display: grid; place-items: center; font: 700 13px/1 var(--vi-ff-head); color: var(--vi-ink-2); }
.vi-answer__txt { font: 400 14px/1.4 var(--vi-ff-body); color: var(--vi-muted); min-width: 0; }
.vi-answer__txt b { font-weight: 600; font-size: 14.5px; color: var(--vi-ink-2); }
.vi-answer__cite { height: 20px; min-width: 20px; padding: 0 6px; border-radius: 6px; display: grid; place-items: center; font: 400 11px/1 var(--vi-ff-mono); background: rgba(225,75,137,.10); border: 1px solid rgba(225,75,137,.30); color: var(--vi-ink); }
.vi-answer__row--slot { grid-template-columns: 20px minmax(0, 1fr); padding: 0 0 0 12px; border: 0; background: none; }
@media (max-width: 639.98px) {
  .vi-answer__row { grid-template-columns: 18px 24px minmax(0, 1fr); padding: 9px 10px; }
  .vi-answer__row--slot { grid-template-columns: 18px minmax(0, 1fr); padding: 0 0 0 10px; }
  .vi-answer__mono { width: 24px; height: 24px; font-size: 12px; }
  .vi-answer__cite { display: none; }
  .vi-answer__txt b { display: block; font-size: 14px; }
  .vi-answer__txt > span { font-size: 12.5px; }
  .vi-answer .vi-slot { min-height: 56px; }
}
.vi-answer__inscale { display: none; padding: 16px 16px 18px; }
.vi-answer__inscale-t { margin-bottom: 18px; font: 400 11px/1.3 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .06em; color: var(--vi-ink-2); }
@media (min-width: 640px) { .vi-answer__inscale { padding: 18px 28px 20px; } }
@media (max-width: 1359.98px) { .vi-answer__inscale { display: block; } }
.vi-answer__pause { position: absolute; top: 10px; right: 10px; z-index: 4; width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--vi-line-2); background: #fff; display: grid; place-items: center; color: var(--vi-ink-2); cursor: pointer; }
.vi-answer__pause .vi-ico { width: 12px; height: 12px; stroke-width: 2.2; }
@media (hover: hover) { .vi-answer__pause:hover { border-color: var(--vi-ink); } }
.vi-answer__sat { position: absolute; z-index: 3; background: #fff; border: 1px solid var(--vi-line); }
.vi-answer__sat--scale { display: none; left: -48px; bottom: -44px; width: 320px; border-radius: var(--vi-r-md); padding: 14px 16px; box-shadow: var(--vi-sh-3); }
.vi-answer__sat-t { margin-bottom: 18px; font: 400 11px/1.3 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .06em; color: var(--vi-ink-2); }
.vi-answer__sat-track { position: relative; }
.vi-answer__pin { position: absolute; left: 50%; top: -6px; transform: translateX(-50%); z-index: 1; width: 18px; height: 18px; border-radius: 50%; border: 1.5px solid transparent; background: linear-gradient(#fff,#fff) padding-box, var(--vi-grad) border-box; display: grid; place-items: center; font: 900 11px/1 var(--vi-ff-head); }
@media (min-width: 1360px) { .vi-answer__sat--scale { display: block; } }

/* Animation de la boucle (ordinateur seulement : .is-cycling n'est posé qu'à ≥ 1024 px, mouvement permis) */
@media (prefers-reduced-motion: no-preference) {
  .vi-answer.is-cycling .vi-answer__var { animation: vi-type 520ms steps(20, end) 40ms both; }
  .vi-answer.is-cycling .vi-answer__dots i { animation: vi-wait 400ms ease-in-out 700ms both; }
  .vi-answer.is-cycling .vi-answer__dots i:nth-child(2) { animation-delay: 820ms; }
  .vi-answer.is-cycling .vi-answer__dots i:nth-child(3) { animation-delay: 940ms; }
  .vi-answer.is-cycling .vi-answer__row:not(.vi-answer__row--slot) { animation: vi-row 380ms var(--vi-ease-out) both; animation-delay: calc(1100ms + var(--i) * 110ms); }
  .vi-answer.is-cycling .vi-answer__cite { animation: vi-lit 240ms var(--vi-ease-std) both; animation-delay: calc(1600ms + var(--i) * 120ms); }
  .vi .vi-answer.is-leaving .vi-answer__row:not(.vi-answer__row--slot) { animation: vi-row-out 200ms var(--vi-ease-in) both; }
  .vi .vi-answer.is-paused .vi-answer__var, .vi .vi-answer.is-paused .vi-answer__dots i, .vi .vi-answer.is-paused .vi-answer__row, .vi .vi-answer.is-paused .vi-answer__cite { animation: none; }
}
@keyframes vi-type { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
@keyframes vi-row { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
@keyframes vi-row-out { from { opacity: 1; } to { opacity: 0; } }
@keyframes vi-lit { from { background: var(--vi-bg-sunk); color: var(--vi-muted); border-color: transparent; } to { background: rgba(225,75,137,.10); color: var(--vi-ink); border-color: rgba(225,75,137,.30); } }
@keyframes vi-wait { 0% { opacity: 0; transform: none; } 35% { opacity: 1; transform: translateY(-3px); } 70% { opacity: 1; transform: none; } 100% { opacity: 0; } }

/* ━━ 2 · L'angle mort ━━ */
.vi-scene { display: grid; gap: 16px; }
.vi-scene__item { position: relative; display: grid; grid-template-columns: 28px minmax(0, 1fr); gap: 14px; }
.vi-scene__item:not(:last-child)::before { content: ""; position: absolute; left: 13.5px; top: 30px; bottom: -16px; border-left: 1px dashed var(--vi-line-2); }
.vi-scene__dot { position: relative; z-index: 1; width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--vi-line-2); background: #fff; display: grid; place-items: center; font: 400 12px/1 var(--vi-ff-mono); color: var(--vi-ink-2); }
.vi-scene__card { background: #fff; border: 1px solid var(--vi-line); border-radius: var(--vi-r-lg); padding: var(--vi-card-pad); box-shadow: var(--vi-sh-2); min-width: 0; }
.vi-scene__frame { position: relative; height: 140px; border-radius: 14px; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 18px;
  background: linear-gradient(to right, rgba(15,17,21,.03) 1px, transparent 1px) 0 0 / 16px 16px, linear-gradient(to bottom, rgba(15,17,21,.03) 1px, transparent 1px) 0 0 / 16px 16px, var(--vi-bg-soft); }
.vi-scene__lbl { margin-top: 20px; font: 400 12px/1.4 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-scene__txt { margin-top: 8px; font: 500 clamp(1.0625rem, .993rem + .286vw, 1.25rem)/1.4 var(--vi-ff-head); letter-spacing: -0.01em; color: var(--vi-ink); }
@media (min-width: 1024px) {
  .vi-scene { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; padding-top: 44px; position: relative; }
  .vi-scene::before { content: ""; position: absolute; top: 14px; left: calc(100% / 6); right: calc(100% / 6); border-top: 1px dashed var(--vi-line-2); }
  .vi-scene__item { display: block; }
  .vi-scene__item:not(:last-child)::before { display: none; }
  .vi-scene__dot { position: absolute; top: -44px; left: 50%; transform: translateX(-50%); }
  .vi-scene__card { height: 100%; }
  .vi-scene__frame { height: 168px; }
}
.vi-scene__illu { width: 100%; max-width: 300px; }
.vi-scene__illu--ask { display: flex; flex-direction: column; gap: 10px; }
.vi-scene__who { font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-scene__input { display: flex; align-items: center; gap: 2px; height: 44px; padding: 0 6px 0 16px; border-radius: 999px; background: #fff; border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-1); font: 400 14px/1 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-scene__qtxt { min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
@media (min-width: 1024px) and (max-width: 1199.98px) { .vi-scene__input { padding-left: 14px; font-size: 13px; } .vi-scene__frame { padding: 14px; } }
.vi-scene__caret { width: 2px; flex: none; height: 16px; border-radius: 1px; background: var(--vi-grad); }
.vi-scene__send { margin-left: auto; width: 32px; height: 32px; border-radius: 50%; background: var(--vi-ink); display: grid; place-items: center; flex: none; }
.vi-scene__send svg { width: 16px; height: 16px; fill: none; stroke: #fff; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.vi-scene__illu--answer { display: grid; gap: 10px; }
.vi-scene__line { display: flex; align-items: center; gap: 8px; }
.vi-scene__line::after { content: ""; flex: 1; height: 8px; border-radius: 4px; background: var(--vi-skel); }
.vi-scene__line b { width: 22px; height: 22px; border-radius: 6px; background: rgba(225,75,137,.10); display: grid; place-items: center; font: 700 12px/1 var(--vi-ff-head); color: var(--vi-ink); flex: none; }
.vi-scene__illu--call { display: flex; flex-direction: column; gap: 18px; }
.vi-scene__notif { align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; padding: 9px 12px; border-radius: 12px; background: #fff; box-shadow: var(--vi-sh-3); border: 1px solid var(--vi-line-3); font: 500 13px/1 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-scene__notif .vi-ico { width: 14px; height: 14px; }
.vi-scene__stats { display: grid; grid-template-columns: 1fr auto; gap: 6px 10px; align-items: center; }
.vi-scene__stats-t { grid-column: 1 / -1; font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-ink-2); }
.vi-scene__flat { height: 0; border-top: 1.5px dashed var(--vi-faint); }
.vi-scene__stats-n { font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
@media (prefers-reduced-motion: no-preference) {
  .vi.vi-io .vi-scene__item.is-in .vi-scene__caret { animation: vi-blink 1s steps(1) 3; }
}
@keyframes vi-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

.vi-bascule { margin-top: 40px; }
@media (min-width: 1024px) { .vi-bascule { margin-top: 64px; } }
.vi-vs__col--ia { background: var(--vi-tint-soft), #fff; }
.vi-bascule__vis { display: flex; flex-direction: column; gap: 6px; min-height: 176px; padding: 16px 18px; border-radius: 14px; background: #fff; border: 1px solid var(--vi-line); }
@media (min-width: 768px) { .vi-bascule__vis { height: 200px; gap: 7px; } }
.vi-bascule__res { display: flex; align-items: center; gap: 8px; }
.vi-bascule__res i { width: 8px; height: 8px; border-radius: 50%; background: var(--vi-skel); flex: none; }
.vi-bascule__res b { display: block; height: 6px; border-radius: 3px; background: var(--vi-skel); }
@media (min-width: 768px) { .vi-bascule__res b { height: 7px; } }
.vi-bascule__pages { margin-top: auto; padding-top: 4px; font: 400 11px/1 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-bascule__vis--ia { gap: 10px; }
.vi-bascule__ans { display: block; height: 8px; border-radius: 4px; background: var(--vi-skel); }
.vi-bascule__cite { display: flex; align-items: center; gap: 8px; }
.vi-bascule__cite b { width: 22px; height: 22px; border-radius: 6px; background: rgba(225,75,137,.10); display: grid; place-items: center; font: 700 12px/1 var(--vi-ff-head); color: var(--vi-ink); flex: none; }
.vi-bascule__cite i { display: block; height: 8px; border-radius: 4px; background: var(--vi-skel); }
.vi-bascule__slotrow { margin-top: auto; display: flex; align-items: center; gap: 12px; }
.vi-bascule__slotrow .vi-slot { min-height: 40px; width: 64px; padding: 6px; justify-content: center; }
.vi-bascule__none { font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-bascule__t { margin-top: 20px; font: 700 clamp(1.25rem, 1.157rem + .381vw, 1.5rem)/1.2 var(--vi-ff-head); letter-spacing: -0.018em; }
.vi-bascule__c { margin-top: 6px; color: var(--vi-text); }
.vi-after { margin-top: 32px; max-width: 760px; font-size: clamp(1.0625rem, .993rem + .286vw, 1.25rem); line-height: 1.55; color: var(--vi-ink-2); }
.vi-def { position: relative; margin-top: 28px; max-width: 760px; padding-left: 20px; }
.vi-def::before { content: ""; position: absolute; left: 0; top: 2px; bottom: 2px; width: 3px; border-radius: 2px; background: linear-gradient(180deg, #E14B89, #F8903C); }
.vi-def__lbl { font: 400 11px/1.3 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .08em; color: var(--vi-muted); }
.vi-def__txt { margin-top: 6px; font: 500 clamp(1.125rem, 1.079rem + .19vw, 1.25rem)/1.45 var(--vi-ff-head); letter-spacing: -0.01em; color: var(--vi-ink); }
.vi-def__txt strong { font-weight: 700; color: var(--vi-ink); }
.vi-stats__t { margin-top: 56px; font: 700 clamp(1.25rem, 1.157rem + .381vw, 1.5rem)/1.2 var(--vi-ff-head); letter-spacing: -0.018em; }
@media (min-width: 1024px) { .vi-stats__t { margin-top: 72px; } }
.vi-stats { margin-top: 24px; display: grid; gap: 28px; }
.vi-stat { position: relative; padding-top: 20px; border-top: 1px solid var(--vi-ink); }
.vi-stat::before { content: ""; position: absolute; left: 0; top: -2px; width: 40px; height: 3px; background: var(--vi-grad-h); transform-origin: left; }
.vi-stat__num { font: 900 clamp(2.25rem, 1.414rem + 3.429vw, 4.5rem)/.95 var(--vi-ff-head); letter-spacing: -0.045em; color: var(--vi-ink); white-space: nowrap; }
.vi-stat__unit { font-size: .42em; font-weight: 700; letter-spacing: -0.02em; }
.vi-stat__txt { margin-top: 14px; font-size: 16px; line-height: 1.55; color: var(--vi-text); }
.vi-stat__aside { display: block; margin-top: 6px; font-weight: 500; font-size: 15px; color: var(--vi-ink-2); }
@media (max-width: 767.98px) {
  .vi-stat { display: grid; grid-template-columns: 116px minmax(0, 1fr); gap: 12px; align-items: start; }
  .vi-stat__num { font-size: 34px; }
  .vi-stat__unit { display: block; margin-top: 4px; font-size: 18px; }
  .vi-stat__txt { margin-top: 0; }
}
@media (min-width: 1024px) { .vi-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 40px; } .vi-stat { padding-top: 24px; } }
.vi-nuance { margin-top: 40px; }
.vi .vi-note__t { font: 400 12px/1.4 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .06em; color: var(--vi-ink-2); }
.vi-note__txt { margin-top: 8px; max-width: 68ch; }

/* ━━ 3 · Le test ━━ */
.vi-tool { display: grid; gap: 24px; padding: 16px; border-radius: var(--vi-r-lg); background: var(--vi-bg-soft); border: 1px solid var(--vi-line); }
@media (min-width: 640px) { .vi-tool { padding: 24px; border-radius: 28px; gap: 32px; } }
@media (min-width: 1024px) { .vi-tool { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 40px; padding: 40px; border-radius: var(--vi-r-2xl); } }
.vi-tool__side, .vi-tool__out { min-width: 0; }
.vi-tool__fields { display: grid; gap: 20px; }
.vi-field label { display: block; margin-bottom: 8px; font: 600 14px/1.4 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-field label small { font-size: inherit; font-weight: 400; color: var(--vi-muted); }
.vi-field input { width: 100%; height: 52px; padding: 0 16px; border-radius: var(--vi-r-field); border: 1px solid var(--vi-field); background: #fff; color: var(--vi-ink); font: 400 16px/1.2 var(--vi-ff-body); box-shadow: inset 0 1px 2px rgba(15,17,21,.04); transition: border-color 120ms, box-shadow 120ms; -webkit-appearance: none; appearance: none; }
.vi-field input::placeholder { color: #6B7280; opacity: 1; }
.vi-field input:hover { border-color: var(--vi-ink-2); }
.vi .vi-field input:focus-visible { outline: 2px solid var(--vi-ink); outline-offset: 1px; border-color: var(--vi-ink); box-shadow: 0 0 0 5px rgba(237,110,99,.16); }
.vi-field__help { margin-top: 8px; font: 400 13px/1.45 var(--vi-ff-body); color: var(--vi-muted); }
.vi-tool__notes { margin-top: 24px; display: grid; gap: 14px; }
/* Sous 1024 px : champs, puis questions (visibles pendant la saisie), puis encarts */
@media (max-width: 1023.98px) {
  .vi-tool { display: flex; flex-direction: column; }
  .vi-tool__side { display: contents; }
  .vi-tool__fields { order: 1; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 16px 12px; }
  .vi-tool__fields .vi-field:first-child { grid-column: 1 / -1; }
  .vi #vi-nom-aide { display: none; }
  .vi-tool__out { order: 2; }
  .vi-tool__notes { order: 3; margin-top: 0; }
  .vi-field input { scroll-margin-top: 40px; }
}
@media (max-width: 639.98px) { .vi-field label small { display: block; } }
.vi-tool__tip { display: flex; gap: 12px; align-items: flex-start; padding: 14px 16px; border-radius: 14px; background: #fff; border: 1px solid var(--vi-line); font: 400 14px/1.5 var(--vi-ff-body); color: var(--vi-text); }
.vi-tool__tip .vi-ico { width: 18px; height: 18px; margin-top: 1px; color: var(--vi-faint); }
.vi-tool__privacy { display: flex; gap: 8px; align-items: center; font: 400 12px/1.45 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-tool__privacy .vi-ico { width: 14px; height: 14px; }
.vi-tool__outhead { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 14px; }
.vi-tool__title { font: 400 12px/1.4 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .08em; color: var(--vi-ink-2); }
.vi-live { display: inline-flex; align-items: center; gap: 8px; font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-live::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--vi-ok); }
.vi-qs { display: grid; gap: 12px; }
.vi-q { background: #fff; border: 1px solid var(--vi-line); border-radius: var(--vi-r-md); padding: 20px 20px 18px; }
.vi-q__top { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.vi-q__n { font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-q__text { margin-top: 10px; font: 500 19px/1.4 var(--vi-ff-head); letter-spacing: -0.01em; color: var(--vi-ink); overflow-wrap: anywhere; }
.vi-q__var { color: var(--vi-ink); background: var(--vi-grad-h) 0 100% / 100% 2px no-repeat; background-color: transparent; padding-bottom: 1px; border-radius: 2px; animation: vi-flash 600ms ease-out; }
.vi-q__var.is-empty { font: 400 .86em/1.2 var(--vi-ff-mono); color: var(--vi-muted); background: var(--vi-bg-sunk); border-radius: 6px; padding: 1px 6px; animation: none; white-space: nowrap; }
@keyframes vi-flash { from { background-color: rgba(237,110,99,.18); } to { background-color: transparent; } }
.vi-q__why { margin-top: 10px; font: 400 14px/1.5 var(--vi-ff-body); color: var(--vi-muted); }
.vi-q__why strong { color: var(--vi-ink-2); }
.vi-copy { display: inline-flex; align-items: center; gap: 6px; height: 36px; padding: 0 12px; border-radius: 10px; border: 1px solid var(--vi-line-2); background: #fff; font: 500 13.5px/1 var(--vi-ff-body); color: var(--vi-ink); white-space: nowrap; flex: none; transition: border-color .2s, background-color .2s, color .2s; }
.vi-copy .vi-ico { width: 16px; height: 16px; }
@media (hover: hover) { .vi-copy:hover { border-color: var(--vi-ink); } }
.vi-copy.is-done { color: var(--vi-ok); background: var(--vi-ok-bg); border-color: rgba(15,123,79,.35); }
.vi-copy.is-fail { color: var(--vi-ink-2); background: var(--vi-bg-sunk); }
@media (max-width: 768px) { .vi-copy { height: 48px; min-height: 48px; } }
@media (max-width: 639.98px) {
  .vi-q { display: flex; flex-direction: column; padding: 16px; }
  .vi-q__top { display: contents; }
  .vi-q__text { font-size: 17px; }
  .vi-copy { order: 4; align-self: flex-start; margin-top: 14px; }
}
.vi-grille { margin-top: 48px; }
.vi-grille__cells { margin-top: 20px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
@media (min-width: 1024px) { .vi-grille__cells { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; } }
.vi-grille__cell { background: #fff; border: 1px solid var(--vi-line); border-radius: var(--vi-r-md); padding: 16px; }
@media (min-width: 640px) { .vi-grille__cell { padding: 20px; } }
.vi-grille__t { margin-top: 14px; font: 700 16px/1.3 var(--vi-ff-head); color: var(--vi-ink); }
.vi-grille__d { margin-top: 4px; font-size: 13.5px; line-height: 1.5; color: var(--vi-text); }
@media (min-width: 640px) { .vi-grille__t { font-size: 17px; } .vi-grille__d { font-size: 14px; } }
.vi-honest { margin-top: 24px; max-width: 760px; font-size: 14px; line-height: 1.55; color: var(--vi-muted); }
.vi-sec-cta { margin-top: 32px; display: flex; flex-direction: column; align-items: flex-start; }
@media (min-width: 1024px) { .vi-sec-cta { margin-top: 40px; } }
.vi-sec-cta__lead { max-width: 40em; margin-bottom: 16px; font: 500 18px/1.45 var(--vi-ff-head); letter-spacing: -0.01em; color: var(--vi-ink); text-wrap: pretty; }
.vi-sec-cta__lead strong { font-weight: 700; color: var(--vi-ink); }
.vi-sec-cta__lead--lg { font-size: 24px; font-weight: 700; margin-bottom: 16px; }

/* ━━ 5 · Les blocages ━━ */
.vi-group + .vi-group { margin-top: 48px; }
.vi .vi-group__t { display: flex; align-items: center; gap: 12px; font: 400 12px/1.4 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .08em; color: var(--vi-ink-2); }
.vi-group__t::after { content: ""; flex: 1; height: 1px; background: var(--vi-line); }
.vi-group__n { width: 22px; height: 22px; border-radius: 50%; background: #fff; border: 1px solid var(--vi-line); display: grid; place-items: center; font: 400 11px/1 var(--vi-ff-mono); letter-spacing: 0; }
.vi-group__cards { margin-top: 20px; display: grid; gap: 16px; }
@media (min-width: 1024px) { .vi-group__cards { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; } }
.vi-block { display: flex; flex-direction: column; gap: 12px; padding: 20px; }
@media (min-width: 640px) { .vi-block { padding: 28px; } }
.vi-block__n { font: 400 12px/1 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-block__t { font: 700 clamp(1.0625rem, 1.016rem + .19vw, 1.1875rem)/1.3 var(--vi-ff-head); letter-spacing: -0.01em; }
.vi-block__p { font-size: 15px; line-height: 1.6; color: var(--vi-text); }
@media (min-width: 640px) { .vi-block__p { font-size: 15.5px; } }
.vi-robot { margin-bottom: 6px; }
.vi-robot__vis { position: relative; display: grid; grid-template-columns: 1fr 1fr; gap: 6px 8px; }
.vi-robot__frame { height: 84px; display: flex; flex-direction: column; border: 1px solid var(--vi-line); border-radius: 10px; overflow: hidden; background: #fff; }
@media (min-width: 640px) { .vi-robot__frame { height: 96px; } }
.vi-robot__bar { height: 12px; display: flex; align-items: center; gap: 3px; padding: 0 6px; border-bottom: 1px solid var(--vi-line-3); flex: none; }
.vi-robot__bar i { width: 4px; height: 4px; border-radius: 50%; background: var(--vi-skel); }
.vi-robot__page { flex: 1; display: flex; flex-direction: column; gap: 5px; padding: 8px; }
.vi-robot__page b { display: block; height: 26px; border-radius: 6px; background: var(--vi-tint-soft), var(--vi-bg-sunk); flex: none; }
.vi-robot__page i { display: block; height: 6px; border-radius: 3px; background: var(--vi-skel); }
.vi-robot__page--empty { margin: 8px; border: 1px dashed var(--vi-line-2); border-radius: 6px; }
.vi-robot__cap { font: 400 .6875rem/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
/* Mini-illustrations des cartes 02 et 03 (ordinateur) : même gabarit que la carte 01, titres alignés */
.vi-mini { display: none; }
@media (min-width: 1024px) {
  .vi-mini { display: grid; align-content: start; gap: 6px; }
  .vi-group__cards .vi-robot { min-height: 132px; }
}
.vi-mini__frame { height: 96px; display: flex; flex-direction: column; justify-content: center; gap: 10px; padding: 12px 14px; border: 1px solid var(--vi-line); border-radius: 10px; background: #fff; }
.vi-mini__row { display: grid; grid-template-columns: 72px minmax(0, 1fr); align-items: center; gap: 10px; }
.vi-mini__k { font: 400 .6875rem/1.2 var(--vi-ff-mono); color: var(--vi-ink-2); white-space: nowrap; }
.vi-mini__val { display: block; height: 8px; border-radius: 4px; background: var(--vi-skel); }
.vi-mini__empty { display: block; height: 14px; border-radius: 4px; border: 1px dashed var(--vi-line-2); }
.vi-robot__tag { position: absolute; top: 18px; right: 6px; }
.vi-band { margin-top: 40px; display: grid; gap: 20px; align-items: center; padding: 24px; border-radius: var(--vi-r-xl); border: 1px solid rgba(225,75,137,.18);
  background: linear-gradient(to right, rgba(15,17,21,.04) 1px, transparent 1px) 0 0 / 32px 32px, linear-gradient(to bottom, rgba(15,17,21,.04) 1px, transparent 1px) 0 0 / 32px 32px, var(--vi-tint); }
.vi-band__t { font: 700 20px/1.25 var(--vi-ff-head); letter-spacing: -0.015em; color: var(--vi-ink); text-wrap: balance; }
.vi-band__cta { display: flex; flex-direction: column; align-items: flex-start; }
@media (min-width: 1024px) { .vi-band { margin-top: 56px; grid-template-columns: minmax(0, 1fr) auto; gap: 32px; padding: 32px 40px; } .vi-band__t { font-size: 24px; } }

/* ━━ 6 · La méthode ━━ */
.vi-bento { display: grid; gap: 20px; }
.vi-bento .vi-card { border-radius: 20px; padding: 20px; min-width: 0; }
@media (min-width: 640px) { .vi-bento .vi-card { border-radius: var(--vi-r-xl); padding: 32px; } }
@media (min-width: 1024px) { .vi-bento { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); } .vi-bento__m { grid-column: 1 / -1; } .vi-bento .vi-bento__m { padding: 40px; } }
.vi-step__n { font: 400 12px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-step__h { margin-top: 6px; font: 700 clamp(1.5rem, 1.268rem + .952vw, 2rem)/1.1 var(--vi-ff-head); letter-spacing: -0.02em; }
.vi-step__p { margin-top: 14px; color: var(--vi-text); }
.vi-measure__head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 16px 24px; }
.vi-switch-wrap { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
.vi-switch__lbl { font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-switch { display: inline-grid; grid-template-columns: repeat(3, auto); gap: 2px; padding: 4px; border-radius: 999px; background: var(--vi-bg-sunk); }
.vi-switch__btn { height: 40px; padding: 0 18px; border-radius: 999px; font: 600 14px/1 var(--vi-ff-body); color: var(--vi-muted); transition: background-color 200ms, box-shadow 200ms, color 200ms; }
@media (hover: hover) { .vi-switch__btn:not([aria-pressed="true"]):hover { color: var(--vi-ink); } }
.vi-switch__btn[aria-pressed="true"] { background: var(--vi-ink); color: #fff; box-shadow: none; }
@media (max-width: 768px) { .vi-switch__btn { height: 48px; } }
@media (max-width: 639.98px) {
  .vi-switch-wrap { width: 100%; align-items: stretch; }
  .vi-switch { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .vi-switch__btn { padding: 0 6px; }
}
.vi-measure__intro { margin-top: 16px; max-width: 62ch; color: var(--vi-text); }
.vi-eq { margin-top: 28px; display: flex; flex-wrap: wrap; align-items: baseline; gap: 14px 18px; }
.vi-eq__term { display: flex; flex-direction: column; align-items: center; text-align: center; min-width: 0; }
.vi-eq__num { display: block; overflow: clip; font: 900 clamp(1.75rem, 1.518rem + .952vw, 2.5rem)/1.12 var(--vi-ff-head); letter-spacing: -0.03em; color: var(--vi-ink); font-variant-numeric: tabular-nums; }
.vi-eq__num--res { font-size: clamp(2.5rem, 2.036rem + 1.905vw, 4rem); line-height: 1.05; }
.vi-eq__roll { display: inline-block; }
.vi-eq__lbl { margin-top: 6px; font: 400 12px/1.35 var(--vi-ff-mono); color: var(--vi-ink-2); }
.vi-eq__leg { margin-top: 2px; max-width: 17ch; font: 400 12.5px/1.4 var(--vi-ff-body); color: var(--vi-muted); }
.vi-eq__op { font: 400 26px/1 var(--vi-ff-head); color: var(--vi-muted); position: relative; top: -.1em; }
.vi-eq__lbl--res { color: var(--vi-ink-2); }
.vi-eq__res { display: contents; }
@media (prefers-reduced-motion: no-preference) { .vi-measure.is-touched .vi-eq__roll { animation: vi-roll 280ms var(--vi-ease-out) both; } }
@keyframes vi-roll { from { opacity: 0; transform: translateY(40%); } to { opacity: 1; transform: none; } }
@media (max-width: 639.98px) {
  .vi-eq { display: grid; grid-template-columns: minmax(0, 1fr) 14px minmax(0, 1fr) 14px minmax(0, 1fr) 14px minmax(0, 1fr); column-gap: 4px; row-gap: 18px; align-items: baseline; }
  .vi-eq__res { grid-column: 1 / -1; display: flex; justify-content: center; align-items: baseline; gap: 12px; }
  .vi-eq__res .vi-eq__op { font-size: 26px; top: -.35em; }
  .vi-eq__num { font-size: 28px; }
  .vi-eq__lbl { font-size: 11px; }
  .vi-eq__leg { display: none; }
  .vi-eq__op { font-size: 20px; text-align: center; }
  .vi-eq__num--res { font-size: 40px; }
}
.vi-measure__grid { margin-top: 32px; display: grid; gap: 24px; }
@media (min-width: 1280px) { .vi-measure__grid { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 32px; align-items: start; } }
.vi-dotsbox { display: flex; flex-direction: column; gap: 14px; padding: 24px; border-radius: var(--vi-r-lg); background: var(--vi-bg-soft); container-type: inline-size; }
@media (max-width: 639.98px) { .vi-dotsbox { padding: 16px; } }
.vi-dots { --pitch: 8px; --per-row: 60; width: calc(60 * var(--pitch)); max-width: 100%; height: calc(var(--total) / var(--per-row) * var(--pitch)); background: var(--vi-grad);
  -webkit-mask: radial-gradient(circle at center, #000 1.6px, transparent 2.1px) 0 0 / var(--pitch) var(--pitch);
  mask: radial-gradient(circle at center, #000 1.6px, transparent 2.1px) 0 0 / var(--pitch) var(--pitch);
  transition: none; }
@media (min-width: 768px) { .vi-dots { --pitch: clamp(8px, 100cqi / 60, 12px); } }
@media (max-width: 767.98px) { .vi-dots { --pitch: 9px; --per-row: 120; width: calc(30 * var(--pitch)); } }
.vi-dots__lbl { font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
@media (max-width: 767.98px) { .vi-dots__lbl--lg { display: none; } }
@media (min-width: 768px) { .vi-dots__lbl--sm { display: none; } }
.vi-measure__notes { display: flex; flex-direction: column; gap: 20px; }
.vi-measure__note { position: relative; padding-left: 16px; color: var(--vi-text); }
.vi-measure__note::before { content: ""; position: absolute; left: 0; top: 3px; bottom: 3px; width: 2px; border-radius: 1px; background: linear-gradient(180deg, #E14B89, #F8903C); }
.vi-measure__scale { margin-top: 4px; }
.vi-measure__scale-t { margin-bottom: 12px; font: 400 11px/1.3 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .06em; color: var(--vi-ink-2); }
.vi-src-map { margin-top: 28px; padding-top: 24px; border-top: 1px solid var(--vi-line-3); }
.vi .vi-src-map__t { font: 400 12px/1.4 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .06em; color: var(--vi-ink-2); }
.vi-src-map__rows { margin-top: 14px; display: grid; gap: 10px; }
.vi-src-map__rows li { display: grid; grid-template-columns: auto minmax(24px, 1fr) auto; align-items: center; gap: 4px 12px; }
.vi-src-map__from { justify-self: start; display: inline-flex; align-items: center; min-height: 32px; padding: 5px 12px; border-radius: 16px; border: 1px solid var(--vi-line); background: #fff; font: 500 13px/1.3 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-src-map__link { position: relative; height: 0; border-top: 1px dashed var(--vi-faint); }
.vi-src-map__link::after { content: ""; position: absolute; right: 0; top: -4px; width: 6px; height: 6px; border-top: 1.5px solid var(--vi-faint); border-right: 1.5px solid var(--vi-faint); transform: rotate(45deg); }
.vi-src-map__to { min-width: 72px; padding: 7px 12px; border-radius: 8px; background: var(--vi-bg-sunk); border: 1px solid var(--vi-line-2); font: 700 13px/1.2 var(--vi-ff-head); color: var(--vi-ink); text-align: center; }
.vi-src-map__note { grid-column: 1 / -1; padding-left: 12px; font: 400 11px/1.4 var(--vi-ff-mono); color: var(--vi-muted); }
@media (max-width: 639.98px) { .vi-src-map__from { font-size: 12.5px; } .vi-src-map__to { min-width: 60px; } }
.vi-new { margin-top: 20px; padding: 16px 18px; border-radius: 14px; border: 1px solid rgba(225,75,137,.28); background: #FFF7F5; }
.vi-new__head { display: flex; align-items: center; gap: 10px; }
.vi-new__date { font: 400 12px/1 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-new__txt { margin-top: 10px; font-size: 15px; line-height: 1.55; color: var(--vi-ink-2); }

/* ━━ 4 · Les résultats ━━ */
/* Mobile : Défikart, OmegaCloud, encart, CTA (ordre du code). Ordinateur : l'encart et le CTA sous Défikart, à côté
   du relevé OmegaCloud, qui s'étire sur toute la hauteur (plus de vide sous Défikart, CTA près de la preuve). */
.vi-results { display: grid; gap: 20px; }
.vi-results .vi-honesty { margin-top: 4px; }
.vi-results .vi-sec-cta { margin-top: 12px; }
@media (min-width: 1024px) {
  .vi-results { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); grid-template-rows: auto auto 1fr; align-items: start; }
  .vi-case--defi { grid-area: 1 / 1; }
  .vi-case--omega { grid-column: 2; grid-row: 1 / span 3; align-self: stretch; }
  .vi-results .vi-honesty { grid-area: 2 / 1; margin-top: 0; }
  .vi-results .vi-sec-cta { grid-area: 3 / 1; margin-top: 8px; }
}
#resultats { isolation: isolate; }
#resultats::before { content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background-image: linear-gradient(to right, rgba(15,17,21,.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,17,21,.045) 1px, transparent 1px);
  background-size: 56px 56px; background-position: center top;
  -webkit-mask-image: radial-gradient(ellipse 60% 50% at 20% 60%, #000 20%, transparent 70%); mask-image: radial-gradient(ellipse 60% 50% at 20% 60%, #000 20%, transparent 70%); }
.vi-case { display: flex; flex-direction: column; gap: 16px; padding: 20px; min-width: 0; }
@media (min-width: 640px) { .vi-case { padding: 32px; } }
.vi-case__kind { font: 400 12px/1.4 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-case__name { margin-top: 4px; font: 700 clamp(1.5rem, 1.384rem + .476vw, 1.75rem)/1.1 var(--vi-ff-head); letter-spacing: -0.02em; }
.vi-case--defi .vi-case__name { margin-top: -10px; }
.vi-case__query { align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; height: 36px; padding: 0 14px; border-radius: 999px; background: var(--vi-bg-sunk); font: 400 13px/1 var(--vi-ff-mono); color: var(--vi-ink); }
.vi-case__query .vi-ico { width: 14px; height: 14px; }
.vi-case__big { display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px 12px; }
.vi-case__big .vi-gt { font: 900 clamp(3.5rem, 2.804rem + 2.857vw, 5.5rem)/1 var(--vi-ff-head); letter-spacing: -0.04em; padding-right: .04em; }
/* Rang écrit en toutes lettres (« Nommé en premier ») : le « 1 » de Satoshi 900 se lit comme un 7 */
.vi-case__big--words .vi-gt { font-size: clamp(2.5rem, 1.95rem + 2.3vw, 4.25rem); line-height: .98; }
.vi-case__big sup { font-size: .46em; vertical-align: .95em; margin-left: .02em; letter-spacing: -0.02em; }
.vi-case__mid { margin-block: auto; display: flex; flex-direction: column; gap: 14px; }
.vi-case__mid .vi-case__muted { margin-top: -4px; }
.vi-case__on { font: 700 22px/1.2 var(--vi-ff-head); color: var(--vi-ink); letter-spacing: -0.015em; }
.vi-case__lead { display: grid; gap: 8px; }
.vi-case__leg { font: 400 13px/1.45 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-case__txt { font-size: 16px; color: var(--vi-text); }
.vi-case__muted { font-size: 15px; color: var(--vi-muted); }
.vi-case__src { margin-top: auto; padding-top: 16px; border-top: 1px dashed var(--vi-line-2); }
.vi-case__mid + .vi-case__src { margin-top: 0; }
.vi-case__head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 10px 16px; }
.vi-case__group { display: flex; gap: 10px; align-items: flex-start; padding: 10px 14px; border-radius: 10px; background: var(--vi-bg-sunk); font: 500 14.5px/1.5 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-case__group .vi-ico { width: 16px; height: 16px; margin-top: 3px; }
.vi-releve { width: 100%; border-collapse: collapse; table-layout: fixed; }
.vi-releve thead th { padding: 0 0 4px; font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); text-align: left; }
.vi-releve thead th:first-child { width: 96px; }
.vi-releve thead th:last-child { width: 150px; padding-left: 14px; }
.vi-releve__q th { padding: 18px 0 6px; font: 600 15px/1.4 var(--vi-ff-body); color: var(--vi-ink-2); text-align: left; }
.vi-releve tbody:first-of-type .vi-releve__q th { padding-top: 10px; }
.vi-frac th, .vi-frac td { padding: 5px 0; vertical-align: middle; }
.vi-frac__ia { font: 500 14px/1.3 var(--vi-ff-body); color: var(--vi-ink-2); text-align: left; }
.vi-frac__val { white-space: nowrap; }
.vi-frac__bar { --n: 6; display: inline-grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); gap: 3px; width: calc(100% - 56px); vertical-align: middle; }
.vi-frac__bar i { display: block; height: 10px; border-radius: 3px; background: var(--vi-skel); }
.vi-frac__bar i.is-full { background: var(--vi-grad-h) no-repeat; background-size: calc(var(--n) * 100%) 100%; background-position: calc(var(--k) / max(var(--n) - 1, 1) * 100%) 0; transform-origin: left; }
.vi-frac--long .vi-frac__bar { gap: 2px; }
.vi-frac--long .vi-frac__bar i { height: 8px; border-radius: 2px; }
.vi-frac__num { display: inline-block; width: 48px; text-align: right; vertical-align: middle; font: 400 13px/1 var(--vi-ff-mono); color: var(--vi-ink); }
.vi-frac__place { padding-left: 14px !important; font: 400 12px/1.4 var(--vi-ff-mono); color: var(--vi-muted); }
@media (max-width: 639.98px) {
  .vi-releve, .vi-releve tbody, .vi-releve thead { display: block; }
  .vi-releve thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
  .vi-releve tr { display: grid; grid-template-columns: minmax(0, 1fr); row-gap: 6px; }
  .vi-releve tbody .vi-frac { padding: 6px 0 8px; }
  .vi-releve__q th { display: block; padding: 14px 0 2px; }
  .vi-frac th, .vi-frac td { display: block; padding: 0; }
  .vi-frac__val { display: flex !important; align-items: center; gap: 10px; }
  .vi-frac__bar { flex: 1; width: auto; }
  .vi-frac--long .vi-frac__bar i { height: 4px; }
  .vi-frac__num { width: auto; }
  .vi-frac__place { padding-left: 0 !important; }
}
.vi-case__gemini { display: flex; gap: 10px; align-items: center; font-size: 14px; color: var(--vi-muted); }
.vi-ring { width: 10px; height: 10px; border-radius: 50%; border: 1.5px solid var(--vi-faint); flex: none; }
.vi-honesty { margin-top: 24px; }
.vi-honesty__txt { font: 500 16px/1.5 var(--vi-ff-head); letter-spacing: -0.005em; color: var(--vi-ink); max-width: 70ch; }

/* ━━ 7 · Le rapport ━━ */
.vi-report__bar { flex-wrap: wrap; padding: 10px 12px 10px 20px; row-gap: 10px; }
.vi-report__title { font: 700 15px/1.3 var(--vi-ff-head); color: var(--vi-ink); }
.vi-report__title strong { font-weight: 700; color: var(--vi-ink); }
.vi-report__title span { font: 400 12px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
@media (max-width: 1023.98px) { .vi-report__tabs { display: none; } }
@media (max-width: 639.98px) { .vi-report__bar { padding: 10px 12px; } .vi-report__illu { white-space: normal; } }
.vi-report__grid { padding: 12px; display: grid; gap: 8px; background: var(--vi-bg-soft); }
@media (min-width: 640px) { .vi-report__grid { padding: 16px; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); } .vi-tile--star { grid-column: span 2; } }
@media (min-width: 1024px) { .vi-report__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.vi-tile { display: flex; flex-direction: column; min-width: 0; min-height: 200px; padding: 20px; border-radius: var(--vi-r-md); background: #fff; border: 1px solid var(--vi-line-3); }
.vi-tile__t { font: 700 16px/1.3 var(--vi-ff-head); letter-spacing: -0.01em; }
.vi-tile__d { margin-top: 6px; font-size: 13.5px; line-height: 1.5; color: var(--vi-muted); }
.vi-tile__schema { margin-top: auto; padding-top: 16px; }
.vi-tile--star { border: 1.5px solid transparent; background: linear-gradient(#FFF8F6, #FFF8F6) padding-box, var(--vi-grad) border-box; }
.vi-tile--star .vi-tile__t { font-size: 22px; letter-spacing: -0.02em; }
.vi-tile__kicker { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 8px; font: 400 11px/1.3 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .06em; color: var(--vi-ink-2); }
.vi-tile__kicker::before { content: ""; width: 6px; height: 6px; border-radius: 1.5px; background: var(--vi-grad); }
.vi-hatch { display: block; height: 10px; border-radius: 4px; background: var(--vi-hatch); }
.vi-tile__s--rows { display: grid; gap: 8px; }
.vi-tile__row { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 10px; }
.vi-tile__row .vi-ico { width: 16px; height: 16px; color: var(--vi-faint); }
.vi-tile__eng { width: 72px; font: 400 .6875rem/1.2 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-tile__s--who { display: grid; gap: 8px; }
.vi-tile__s--who .vi-tile__row { grid-template-columns: 24px auto minmax(0, 1fr); }
.vi-tile__sq { width: 24px; height: 24px; border-radius: 6px; background: var(--vi-bg-sunk); display: grid; place-items: center; font: 700 12px/1 var(--vi-ff-head); color: var(--vi-ink-2); }
.vi-tile__lbl { font: 400 .6875rem/1 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-tile__s--who .vi-slot { margin-top: 2px; }
.vi-tile__sqs { display: flex; gap: 4px; }
.vi-tile__sqs .vi-hatch { width: 12px; height: 12px; border-radius: 3px; }
.vi-tile__s--boxes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
.vi-tile__box { display: flex; flex-direction: column; gap: 6px; min-height: 64px; padding: 8px; border: 1px solid var(--vi-line); border-radius: 10px; }
.vi-tile__boxl { font: 400 .6875rem/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-tile__dash { margin-top: auto; font: 700 20px/1 var(--vi-ff-head); color: var(--vi-faint); }
.vi-tile .vi-scale { gap: 3px; }
.vi-tile .vi-scale__lbl { font-size: .6875rem; }
@media (max-width: 1279.98px) { .vi-tile .vi-scale__lbl { display: none; } }
.vi-tile__cb { width: 14px; height: 14px; border: 1.5px solid var(--vi-line-2); border-radius: 4px; }
@media (max-width: 639.98px) {
  .vi-tile { min-height: 0; padding: 14px 16px; }
  .vi-tile--star { padding: 18px; }
  .vi-tile:not(.vi-tile--star) { display: block; }
  .vi-tile:not(.vi-tile--star) .vi-tile__t { font-size: 15px; }
  .vi-tile:not(.vi-tile--star) .vi-tile__d { font-size: 13px; margin-top: 2px; }
  .vi-tile:not(.vi-tile--star) .vi-tile__schema { display: none; }
  .vi-tile--star .vi-tile__t { font-size: 20px; }
}

/* ━━ 8 · Les formules ━━ */
.vi-head--plans { max-width: none; display: grid; gap: 28px; }
@media (min-width: 1024px) { .vi-head--plans { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); column-gap: 48px; align-items: center; } }
.vi-choose__t { font: 400 12px/1.4 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .06em; color: var(--vi-ink-2); }
.vi-choose ul { margin-top: 10px; display: grid; gap: 8px; }
.vi-choose__a { display: flex; justify-content: space-between; align-items: center; gap: 12px; min-height: 48px; padding: 8px 14px 8px 18px; border-radius: 14px; background: #fff; border: 1px solid var(--vi-line-2); font: 500 14px/1.35 var(--vi-ff-body); color: var(--vi-text); transition: border-color .2s; }
@media (hover: hover) { .vi-choose__a:hover { border-color: var(--vi-ink); } }
.vi-choose__to { display: inline-flex; align-items: center; gap: 8px; font: 700 15px/1 var(--vi-ff-head); color: var(--vi-ink); white-space: nowrap; }
.vi-choose__to .vi-ico { width: 16px; height: 16px; transform: rotate(90deg); }
.vi-offerline { margin-bottom: 32px; display: flex; flex-wrap: wrap; align-items: center; gap: 10px 14px; padding: 12px 16px; border-radius: 14px; background: #fff; border: 1px solid rgba(225,75,137,.25); }
@media (min-width: 640px) { .vi-offerline { padding: 12px 20px; } }
.vi-offerline__txt { flex: 1 1 380px; font-size: 14.5px; line-height: 1.5; color: var(--vi-ink-2); }
.vi-offerline__txt strong { color: var(--vi-ink); }
.vi-plans { display: grid; gap: 24px; padding-top: 13px; max-width: 560px; margin-inline: auto; }
@media (min-width: 1024px) { .vi-plans { max-width: none; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: stretch; } }
@media (max-width: 1023.98px) { .vi-plan--star { margin-top: 8px; } }
.vi-plan { display: flex; min-width: 0; scroll-margin-top: 24px; }
@media (min-width: 768px) { .vi-plan { scroll-margin-top: 96px; } }
.vi-plan__in { position: relative; flex: 1; display: flex; flex-direction: column; gap: 20px; padding: 24px; border-radius: 20px; background: #fff; border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-2); }
@media (min-width: 640px) { .vi-plan__in { padding: 32px; border-radius: var(--vi-r-xl); } }
.vi-plan--star .vi-plan__in { padding-top: 40px; border: 2px solid transparent; background: linear-gradient(180deg, #FFEFEC 0, #FFFFFF 260px) padding-box, var(--vi-grad) border-box; box-shadow: var(--vi-sh-glow); }
#formules { background: radial-gradient(ellipse 42% 30% at 50% 56%, rgba(225,75,137,.08), transparent 70%), var(--vi-bg-soft); }
.vi-plan__badge { position: absolute; top: -13px; left: 24px; height: 26px; padding: 0 12px; border-radius: 999px; background: var(--vi-grad); color: var(--vi-ink); font: 700 12px/26px var(--vi-ff-head); text-transform: uppercase; letter-spacing: .04em; box-shadow: 0 6px 14px -6px rgba(237,110,99,.6); }
@media (min-width: 640px) { .vi-plan__badge { left: 32px; } }
.vi-plan__name { font: 700 24px/1.15 var(--vi-ff-head); letter-spacing: -0.02em; }
.vi-plan__tag { margin-top: 8px; font-size: 15px; line-height: 1.5; color: var(--vi-text); }
.vi-plan__who { margin-top: 10px; font-size: 14px; line-height: 1.5; color: var(--vi-muted); }
.vi-plan__who strong { color: var(--vi-ink-2); }
.vi-plan__price { padding-top: 20px; border-top: 1px solid var(--vi-line-3); }
.vi-plan__promo { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 15px; }
.vi-plan__amount { display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px 8px; }
.vi-plan__num { font: 900 clamp(2.5rem, 2.129rem + 1.524vw, 3.5rem)/1 var(--vi-ff-head); letter-spacing: -0.04em; color: var(--vi-ink); white-space: nowrap; }
.vi-plan__unit { font: 500 15px/1 var(--vi-ff-body); color: var(--vi-muted); }
.vi-plan__engage { margin-top: 10px; font-size: 14px; color: var(--vi-text); }
.vi-plan__total { margin-top: 4px; font: 400 clamp(.75rem, .738rem + .048vw, .78125rem)/1.5 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-plan__metric { align-self: flex-start; padding: 8px 12px; border-radius: 10px; background: var(--vi-bg-sunk); font: 400 clamp(.75rem, .738rem + .048vw, .78125rem)/1.4 var(--vi-ff-mono); color: var(--vi-ink-2); }
.vi-plan__lead { margin-bottom: 10px; font: 600 14px/1.4 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-checks--plan { margin-top: 0; gap: 10px; }
.vi-checks--plan li { font-size: 15px; color: var(--vi-text); }
.vi-plan__more summary { display: inline-flex; align-items: center; gap: 6px; min-height: 44px; list-style: none; cursor: pointer; font: 600 14px/1.2 var(--vi-ff-body); color: var(--vi-ink); }
.vi-plan__more summary::-webkit-details-marker { display: none; }
.vi-plan__more summary:hover .vi-plan__more-l, .vi-plan__more summary:hover::before { text-decoration: underline; text-underline-offset: 3px; }
.vi-plan__chev { width: 16px; height: 16px; transition: transform 240ms var(--vi-ease-out); }
.vi-plan__more[open] .vi-plan__chev { transform: rotate(180deg); }
.vi-plan__more[open] summary::before { content: "Masquer le détail"; content: "Masquer le détail" / ""; }
.vi-plan__more[open] .vi-plan__more-l { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.vi-plan__items { margin-top: 8px; display: grid; gap: 8px; font-size: 14px; line-height: 1.5; color: var(--vi-muted); }
.vi-plan__items li { position: relative; padding-left: 14px; }
.vi-plan__items li::before { content: ""; position: absolute; left: 0; top: .62em; width: 4px; height: 4px; border-radius: 50%; background: var(--vi-faint); }
.vi-plan__cta { margin-top: auto; padding-top: 4px; }
.vi-plan__cta .vi-btn { font-size: 16px; padding: 8px 8px 8px 20px; gap: 8px; }
.vi-plan__cta .vi-btn__arrow { width: 36px; height: 36px; }
@supports (grid-template-rows: subgrid) {
  @media (min-width: 1024px) {
    .vi-plans { row-gap: 0; }
    .vi-plan { display: grid; grid-row: span 6; grid-template-rows: subgrid; }
    .vi-plan__in { grid-row: 1 / -1; display: grid; grid-template-rows: subgrid; row-gap: 20px; }
    .vi-plan__cta { align-self: end; margin-top: 0; }
  }
}
@media (min-width: 1024px) and (max-width: 1279.98px) { .vi-plan__in { padding: 24px; } .vi-plan--star .vi-plan__in { padding-top: 32px; } .vi-plan__badge { left: 24px; } }
.vi-plan__micro { margin-top: 10px; font: 400 13px/1.45 var(--vi-ff-body); color: var(--vi-muted); text-align: center; }
.vi-terms { margin-top: 32px; display: grid; gap: 12px; }
@media (min-width: 640px) { .vi-terms { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 1024px) { .vi-terms { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.vi-term { display: flex; flex-direction: column; gap: 10px; padding: 18px; border-radius: var(--vi-r-md); background: #fff; border: 1px solid var(--vi-line); }
.vi-term__ico { width: 22px; height: 22px; stroke: url(#vi-grad-stroke); }
@media (max-width: 639.98px) { .vi-term { flex-direction: row; align-items: flex-start; gap: 12px; padding: 16px; } .vi-term__ico { margin-top: 1px; } }
.vi-term p { font-size: 14px; line-height: 1.5; color: var(--vi-text); }
.vi-term p strong { color: var(--vi-ink); }
.vi-plans-after { margin-top: 24px; max-width: 760px; display: grid; gap: 12px; }
.vi-plans-after__audit { font-size: 15px; color: var(--vi-text); }
.vi-plans-after__market { font-size: 15px; color: var(--vi-text); }
.vi-plans-after__exit { margin-top: 8px; font: 500 18px/1.45 var(--vi-ff-head); letter-spacing: -0.005em; color: var(--vi-ink-2); }

/* ━━ 9 · Les garanties ━━ */
.vi-guar__t { display: flex; align-items: center; gap: 12px; font: 700 clamp(1.25rem, 1.157rem + .381vw, 1.5rem)/1.2 var(--vi-ff-head); letter-spacing: -0.018em; }
.vi-guar__badge { width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid transparent; background: linear-gradient(#fff,#fff) padding-box, var(--vi-grad) border-box; display: grid; place-items: center; flex: none; }
.vi-guar__badge .vi-check { width: 16px; height: 16px; padding: 0; margin: 0; background: none; }
.vi-checks--guar { gap: 16px; }
.vi-checks--guar li { font-size: 16px; }
.vi-dashes { margin-top: 20px; display: grid; gap: 14px; }
.vi-dashes li { position: relative; padding-left: 24px; color: var(--vi-text); }
.vi-dashes li::before { content: ""; position: absolute; left: 0; top: .8em; width: 12px; height: 1.5px; background: var(--vi-faint); }
.vi-guar__big { position: relative; margin-top: 24px; padding-left: 18px; font: 700 20px/1.25 var(--vi-ff-head); letter-spacing: -0.015em; color: var(--vi-ink); }
.vi-guar__big::before { content: ""; position: absolute; left: 0; top: 2px; bottom: 2px; width: 3px; border-radius: 2px; background: linear-gradient(180deg, #E14B89, #F8903C); }
@media (min-width: 640px) { .vi-guar__big { font-size: 24px; } }
.vi-guar__proof { margin-top: 20px; font-size: 15px; color: var(--vi-text); }
.vi-tl { margin-top: 40px; padding: 24px 20px; border-radius: 20px; }
@media (min-width: 640px) { .vi-tl { padding: 32px; border-radius: var(--vi-r-xl); } }
@media (min-width: 1024px) { .vi-tl { margin-top: 56px; padding: 40px 48px; } }
.vi-tl__head { display: grid; gap: 10px; }
@media (min-width: 1024px) { .vi-tl__head { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 40px; align-items: end; } }
.vi-tl__lead { font-size: 17px; line-height: 1.55; color: var(--vi-text); }
.vi-tl__h { display: none; }
.vi-tl__dot { position: relative; width: 14px; height: 14px; border-radius: 50%; border: 2px solid transparent; background: linear-gradient(#fff,#fff) padding-box, var(--vi-line-2) border-box; }
.vi-tl__dot.is-key { background: linear-gradient(#fff,#fff) padding-box, var(--vi-grad) border-box; }
.vi-tl__dot::before { content: ""; position: absolute; inset: -2px; border-radius: 50%; border: 2px solid var(--vi-line-2); background: #fff; opacity: 0; transition: opacity 300ms var(--vi-ease-out); transition-delay: calc(var(--k, 0) * 50ms); }
.vi-tl__dot::after { content: ""; position: absolute; left: 50%; top: 50%; width: 6px; height: 6px; margin: -3px 0 0 -3px; border-radius: 50%; background: var(--vi-grad); transition: transform 300ms var(--vi-ease-out); transition-delay: calc(var(--k, 0) * 50ms); }
@media (min-width: 768px) {
  .vi-tl__h { display: block; position: relative; height: 212px; margin-top: 32px; --col: calc((100% - 64px) / var(--n, 12)); }
  .vi-tl__track { position: absolute; inset: 0; }
  .vi-tl__line { position: absolute; left: calc(var(--col) * .5); right: 64px; top: 80px; height: 2px; margin-top: -1px; background: var(--vi-line-2); }
  .vi-tl__end { position: absolute; left: calc(100% - 64px); right: 0; top: 80px; height: 0; margin-top: -1px; border-top: 2px dashed var(--vi-line-2); }
  .vi-tl__zone { position: absolute; left: calc(var(--col) * 2.1); width: calc(var(--col) * 2.8); top: 66px; height: 28px; border-radius: 999px; background: rgba(237,110,99,.08); border: 1px dashed rgba(225,75,137,.35); }
  .vi-tl__track .vi-tl__dot { position: absolute; top: 73px; left: calc(var(--col) * (var(--k) + .5) - 7px); }
  .vi-tl__month { position: absolute; top: 100px; left: calc(var(--col) * (var(--m) * var(--per, 2) + var(--per, 2) / 2)); transform: translateX(-50%); font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); white-space: nowrap; }
  .vi-tl__notes { position: absolute; inset: 0; }
  .vi-tl__note { position: absolute; font: 400 14px/1.4 var(--vi-ff-body); color: var(--vi-ink-2); }
  .vi-tl__note--start, .vi-tl__note--bilan { bottom: calc(100% - 59px); max-width: calc(var(--col) * 4.6); }
  .vi-tl__note--start { left: calc(var(--col) * .5 - 7px); }
  .vi-tl__note--bilan { left: calc(var(--col) * 5.5 - 7px); }
  .vi-tl__note--start::after, .vi-tl__note--bilan::after { content: ""; position: absolute; left: 6.5px; top: calc(100% + 3px); height: 10px; width: 1px; background: var(--vi-faint); }
  .vi-tl__note--zone { top: 130px; left: calc(var(--col) * 2.1); max-width: calc(var(--col) * 4.4); font-size: 13.5px; color: var(--vi-text); }
  .vi-tl__note--end { top: 130px; right: 0; max-width: min(300px, calc(var(--col) * 4.2)); text-align: right; font-size: 13.5px; color: var(--vi-text); }
}
.vi-tl__v { position: relative; isolation: isolate; margin-top: 24px; display: grid; }
@media (min-width: 768px) { .vi-tl__v { display: none; } }
.vi-tl__vrow { position: relative; display: grid; grid-template-columns: 14px 56px minmax(0, 1fr); column-gap: 12px; align-items: start; min-height: 30px; }
.vi-tl__vrow::before { content: ""; position: absolute; left: 6px; top: 0; bottom: 0; width: 2px; background: var(--vi-line-2); z-index: -1; }
.vi-tl__vrow:first-child::before { top: 15px; }
.vi-tl__vrow:nth-last-child(2)::before { bottom: auto; height: 15px; }
.vi-tl__vrow .vi-tl__dot { grid-column: 1; margin-top: 8px; }
.vi-tl__vm { grid-column: 2; padding-top: 7px; font: 400 11px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-tl__vnote { grid-column: 3; padding: 4px 0 8px; font: 400 13.5px/1.4 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-tl__vrow.is-zone::after { content: ""; position: absolute; left: -6px; right: 0; top: 0; bottom: 0; z-index: -2; background: rgba(237,110,99,.08); }
.vi-tl__vrow.is-zone:nth-child(3)::after { border-radius: 10px 10px 0 0; }
.vi-tl__vrow.is-zone:nth-child(5)::after { border-radius: 0 0 10px 10px; }
.vi-tl__vnote--zone { color: var(--vi-text); }
.vi-tl__vend { position: relative; padding: 48px 0 0 26px; }
.vi-tl__vend::before { content: ""; position: absolute; left: 6px; top: 0; height: 40px; border-left: 2px dashed var(--vi-line-2); }
.vi-tl__vend .vi-tl__vnote { display: block; padding: 0; }
.vi-tl__foot { margin-top: 28px; font-size: 15px; color: var(--vi-text); }
@media (min-width: 768px) { .vi-tl__foot { margin-top: 12px; } }
.vi-excl { margin-top: 24px; max-width: 760px; font-size: 13.5px; line-height: 1.55; color: var(--vi-muted); }
.vi .vi-excl__lbl { font: 400 12px/1 var(--vi-ff-mono); text-transform: uppercase; letter-spacing: .06em; color: var(--vi-ink-2); }

/* ━━ 10 · L'équipe ━━ */
.vi-team { display: grid; gap: 48px; }
@media (min-width: 1024px) { .vi-team { grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); column-gap: clamp(48px, 7vw, 104px); align-items: start; } }
.vi-team__left, .vi-team__right { min-width: 0; }
.vi-team__people { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.vi-person img { display: block; width: 100%; height: auto; aspect-ratio: 1; object-fit: cover; border-radius: 20px; background: var(--vi-bg-sunk); filter: grayscale(1) contrast(1.04) brightness(1.02); }
.vi-person figcaption { margin-top: 12px; display: flex; flex-direction: column; gap: 2px; }
.vi-person strong { font: 700 17px/1.3 var(--vi-ff-head); color: var(--vi-ink); }
.vi-person span { font-size: 14px; color: var(--vi-muted); }
.vi-figs { margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--vi-line); display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px 12px; }
@media (min-width: 640px) { .vi-figs { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.vi-figs__n { display: block; font: 900 28px/1 var(--vi-ff-head); letter-spacing: -0.03em; color: var(--vi-ink); }
.vi-figs__l { display: block; margin-top: 6px; font: 400 11.5px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-facts { margin-top: 24px; display: grid; gap: 12px; }
.vi-facts li { position: relative; padding-left: 18px; font-size: 16px; color: var(--vi-text); }
.vi-facts li::before { content: ""; position: absolute; left: 0; top: .62em; width: 6px; height: 6px; border-radius: 1.5px; background: var(--vi-grad); }
.vi-fab { margin-top: 28px; padding: 20px; border-radius: var(--vi-r-md); background: #fff; border: 1px solid var(--vi-line); }
.vi-fab__date { font: 400 12px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-fab__t { margin-top: 6px; font: 700 17px/1.35 var(--vi-ff-head); color: var(--vi-ink); letter-spacing: -0.01em; }
.vi-fab__r { margin-top: 6px; font-size: 14px; line-height: 1.5; color: var(--vi-muted); }
.vi-fab .vi-link { margin-top: 2px; }
.vi-reviews__note { margin-top: 6px; font: 400 12px/1.4 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-reviews { margin-top: 20px; display: grid; gap: 16px; }
.vi-review { position: relative; padding: 20px; border-radius: 20px; background: #fff; border: 1px solid var(--vi-line); box-shadow: var(--vi-sh-1); }
@media (min-width: 640px) { .vi-review { padding: 28px; } }
.vi-review__stars > span { display: flex; gap: 2px; }
.vi-star--sm { width: 14px; height: 14px; }
.vi-review__title { margin-top: 10px; font: 700 17px/1.3 var(--vi-ff-head); color: var(--vi-ink); letter-spacing: -0.01em; }
.vi-review__txt { margin-top: 8px; }
.vi-review__txt p { font-size: 16px; line-height: 1.65; color: var(--vi-ink-2); }
.vi-review__foot { margin-top: 16px; display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; }
.vi-review__av { width: 36px; height: 36px; border-radius: 50%; background: var(--vi-bg-sunk); display: grid; place-items: center; font: 700 13px/1 var(--vi-ff-head); color: var(--vi-ink-2); flex: none; }
.vi-review__who { flex: 1; display: flex; flex-direction: column; gap: 2px; min-width: 140px; }
.vi-review__who strong { font: 700 15px/1.3 var(--vi-ff-head); color: var(--vi-ink); }
.vi-review__who span { font: 400 12px/1.3 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-review__link { display: inline-flex; align-items: center; min-height: 44px; font-size: 14px; color: var(--vi-ink); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; text-decoration-color: var(--vi-line-2); }
.vi-review__link:hover { text-decoration-color: var(--vi-ink); }
.vi-reviews__all { margin-top: 20px; font-size: 14px; color: var(--vi-ink-2); }
.vi-u { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }

/* ━━ 11 · FAQ ━━ */
.vi-faqwrap { display: grid; gap: 8px; }
.vi-faqwrap .vi-head { margin-bottom: 24px; }
@media (min-width: 1024px) {
  .vi-faqwrap { grid-template-columns: minmax(0, 4fr) minmax(0, 7fr); column-gap: clamp(40px, 8vw, 120px); }
  .vi-faqwrap__side { position: sticky; top: 104px; align-self: start; }
  .vi-faqwrap .vi-head { margin-bottom: 0; }
}
.vi-faq__contact p { font-size: 15px; line-height: 1.6; color: var(--vi-text); }
.vi-faq__contact .vi-final__btns { margin-top: 12px; }
.vi-faq__contact--lg .vi-final__btns { flex-direction: column; align-items: flex-start; gap: 12px; }
.vi-faq__contact--lg { display: none; margin-top: 24px; max-width: 34ch; }
.vi-faq__contact--sm { margin-top: 28px; }
@media (min-width: 1024px) { .vi-faq__contact--lg { display: block; } .vi-faq__contact--sm { display: none; } }
.vi-faq { border-top: 1px solid var(--vi-line); min-width: 0; }
.vi-faq__item { border-bottom: 1px solid var(--vi-line); }
.vi-faq__q { list-style: none; cursor: pointer; display: grid; grid-template-columns: minmax(0, 1fr) 32px; gap: 14px; align-items: center; padding: 18px 0; font: 700 clamp(1.0625rem, 1.016rem + .19vw, 1.1875rem)/1.35 var(--vi-ff-head); color: var(--vi-ink); letter-spacing: -0.01em; }
@media (min-width: 640px) { .vi-faq__q { gap: 20px; padding: 22px 0; } }
.vi-faq__q::-webkit-details-marker { display: none; }
.vi .vi-faq__q:focus-visible { outline-offset: 4px; border-radius: 8px; }
.vi-faq__icon { position: relative; width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--vi-line-2); transition: transform 320ms var(--vi-ease-out), background-color 200ms, border-color 200ms; }
.vi-faq__icon::before, .vi-faq__icon::after { content: ""; position: absolute; left: 50%; top: 50%; width: 12px; height: 1.75px; border-radius: 1px; background: var(--vi-ink-2); transform: translate(-50%, -50%); }
.vi-faq__icon::after { transform: translate(-50%, -50%) rotate(90deg); }
.vi-faq__item[open] .vi-faq__icon { transform: rotate(45deg); background: var(--vi-bg-sunk); border-color: transparent; }
@media (hover: hover) { .vi-faq__q:hover .vi-faq__icon { border-color: var(--vi-ink); } }
.vi-faq__a { padding: 0 0 22px; max-width: 68ch; color: var(--vi-text); }
@media (min-width: 640px) { .vi-faq__a { padding: 0 52px 24px 0; } }
.vi-faq__a strong { color: var(--vi-ink-2); }
@supports selector(::details-content) {
  .vi { interpolate-size: allow-keywords; }
  .vi-faq__item::details-content { block-size: 0; overflow: clip; transition: block-size 300ms var(--vi-ease-out), content-visibility 300ms allow-discrete; }
  .vi-faq__item[open]::details-content { block-size: auto; }
}

/* ━━ 12 · Diagnostic ━━ */
.vi-final { isolation: isolate; overflow: hidden; padding-block: calc(var(--vi-section) * 1.15); border-top: 1px solid rgba(225,75,137,.16);
  background: linear-gradient(136.79deg, rgba(225,75,137,.07) 5.13%, rgba(248,144,60,.07) 84.98%), #FFFFFF; }
.vi-final::before { content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background-image: linear-gradient(to right, rgba(15,17,21,.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,17,21,.045) 1px, transparent 1px);
  background-size: 56px 56px; background-position: center top;
  -webkit-mask-image: radial-gradient(ellipse 70% 80% at 30% 50%, #000 20%, transparent 70%); mask-image: radial-gradient(ellipse 70% 80% at 30% 50%, #000 20%, transparent 70%); }
.vi-final__grid { display: grid; gap: 48px; align-items: center; }
@media (min-width: 1024px) { .vi-final__grid { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 64px; } }
.vi-final__text { min-width: 0; }
.vi-final__l1, .vi-final__l2 { display: block; }
.vi-steps { margin-top: 32px; display: grid; gap: 18px; max-width: 600px; }
.vi-steps__item { position: relative; display: grid; grid-template-columns: 36px minmax(0, 1fr); gap: 16px; align-items: start; }
.vi-steps__item:not(:last-child)::before { content: ""; position: absolute; left: 17.5px; top: 40px; bottom: -14px; border-left: 1px dashed var(--vi-line-2); }
.vi-steps__dot { width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid transparent; background: linear-gradient(#fff,#fff) padding-box, var(--vi-grad) border-box; display: grid; place-items: center; font: 400 13px/1 var(--vi-ff-mono); color: var(--vi-ink); }
.vi-steps__item p { padding-top: 1px; font-size: 16px; line-height: 1.5; color: var(--vi-ink-2); }
@media (min-width: 640px) { .vi-steps__item p { font-size: 17px; } }
.vi-steps__n { display: block; margin-bottom: 2px; font: 400 11px/1.4 var(--vi-ff-mono); color: var(--vi-muted); }
.vi-final__cta { margin-top: 36px; }
.vi-final__pp { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; }
.vi-final__offer { margin-top: 16px; display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; font-size: 14px; line-height: 1.5; color: var(--vi-ink-2); }
.vi-final__contact { margin-top: 28px; padding-top: 20px; border-top: 1px solid rgba(15,17,21,.08); }
.vi-final__ask { font: 500 15px/1.4 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-final__btns { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 10px; }
@media (max-width: 639.98px) { .vi-final__btns { flex-direction: column; } .vi-final__btns .vi-btn-ghost { width: 100%; } }
.vi-final__vis { display: none; }
@media (min-width: 640px) { .vi-final__vis { display: block; width: 100%; max-width: 440px; } }
@media (min-width: 1024px) { .vi-final__vis { justify-self: end; } }
.vi-diag__bar { justify-content: flex-start; flex-wrap: wrap; gap: 6px; padding: 12px 14px; }
.vi-diag__body { padding: 22px 24px; }
.vi-diag__ask { min-height: 64px; display: flex; align-items: flex-end; justify-content: flex-end; margin-bottom: 18px; }
.vi-diag__bubble { max-width: 92%; padding: 12px 16px; border-radius: 20px 20px 6px 20px; background: var(--vi-bg-sunk); font: 400 15px/1.5 var(--vi-ff-body); color: var(--vi-ink-2); }
.vi-diag__bubble .vi-q__var { animation: none; }
.vi-diag__bubble .vi-q__var.is-empty { background: #fff; }
.vi-diag__skel { display: grid; margin-bottom: 16px; }

/* ━━ Ligne légale ━━ */
.vi-legal { padding: 24px 0; background: #fff; border-top: 1px solid var(--vi-line); }
@media (min-width: 1024px) { .vi-legal { padding: 28px 0; } }
.vi-legal p { text-align: center; font: 400 13px/2 var(--vi-ff-body); color: var(--vi-muted); }
.vi-legal a, .vi-legal .ckb-settings { color: inherit; font: inherit; text-decoration: none; }
.vi-legal .ckb-settings { display: inline; min-height: 0; min-width: 0; padding: 0; vertical-align: baseline; }
.vi-legal a:hover, .vi-legal .ckb-settings:hover { color: var(--vi-ink); text-decoration: underline; text-underline-offset: 3px; }

/* ━━ Barre d'action mobile ━━ */
.vi-sticky { display: none; }
@media (max-width: 767.98px) {
  .vi { padding-bottom: calc(68px + env(safe-area-inset-bottom)); }
  .vi-sticky {
    display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 10px; align-items: center;
    position: fixed; left: 0; right: 0; bottom: 0; z-index: 300;
    padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
    background: rgba(255,255,255,.92);
    -webkit-backdrop-filter: saturate(1.4) blur(16px); backdrop-filter: saturate(1.4) blur(16px);
    border-top: 1px solid var(--vi-line); box-shadow: 0 -10px 28px -14px rgba(15,17,21,.16);
    transform: translateY(calc(100% + 1px)); visibility: hidden;
    transition: transform 320ms var(--vi-ease-in), visibility 0s linear 320ms;
  }
  .vi-sticky.is-shown { transform: none; visibility: visible; transition: transform 320ms var(--vi-ease-out), visibility 0s; }
  .lpwa { display: none !important; }
}
.vi-sticky__wa { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; background: #fff; border: 1px solid var(--vi-line-2); color: var(--vi-wa); }
.vi-sticky__wa .vi-wa-ico { width: 24px; height: 24px; }
.vi-sticky__cta { min-height: 48px; padding: 6px 6px 6px 18px; border-radius: 999px; background: var(--vi-grad); color: var(--vi-ink); display: flex; align-items: center; justify-content: space-between; gap: 8px; box-shadow: var(--vi-sh-btn); text-decoration: none; }
.vi-sticky__txt { min-width: 0; }
.vi-sticky__l1 { display: block; font: 700 15px/1.15 var(--vi-ff-head); letter-spacing: -0.01em; }
.vi-sticky__l2 { display: block; margin-top: 1px; font: 500 12px/1.2 var(--vi-ff-body); color: var(--vi-ink); }
.vi-sticky__short { display: none; }
@media (max-width: 359.98px) { .vi-sticky__long { display: none; } .vi-sticky__short { display: inline; } }
.vi-sticky__cta .vi-btn__arrow { width: 36px; height: 36px; }

/* ━━ Parcours mobile plus court (< 768 px) : rien de ce qui est retiré n'est une preuve ━━ */
@media (max-width: 767.98px) {
  .vi-scene__frame { display: none; }
  .vi-scene__lbl { margin-top: 0; }
  .vi-dotsbox { display: none; }
  /* Cartes de prix complètes (Croissance renvoie à « Tout l'Essentiel ») ; en échange, les listes de la méthode,
     qui redisent les bandeaux « Ce que nous faisons » et les points des cartes, sont retirées */
  .vi-bento__c > .vi-checks, .vi-bento__a > .vi-checks { display: none; }
  html:has(.vi-sticky.is-shown) { scroll-padding-bottom: 88px; }
}

/* ━━ Fenêtre Calendly aux couleurs de cette page (composant partagé non modifié ; 0,2,0 bat sa feuille, injectée après) ━━ */
.lpcal .lpcal__gate-btn { background: var(--vi-grad); color: var(--vi-ink); box-shadow: var(--vi-sh-btn); font: 700 16px/1.2 var(--vi-ff-head); padding: 14px 24px; }
.lpcal .lpcal__gate-btn:hover { box-shadow: var(--vi-sh-btn-h); }
.lpcal .lpcal__gate-btn:focus-visible { outline: 2px solid var(--vi-ink); }
.lpcal .lpcal__notice { background: linear-gradient(90deg, rgba(225,75,137,.07), rgba(248,144,60,.07)), #fff; border-bottom-color: var(--vi-line); }
.lpcal .lpcal__notice strong { color: var(--vi-ink); font-weight: 700; }
.lpcal .lpcal__notice svg circle { fill: url(#vi-grad-stroke); }
.lpcal .lpcal__close { color: var(--vi-ink); }
.lpcal .lpcal__slow a { color: var(--vi-ink); }

/* ━━ Bouton WhatsApp flottant (ordinateur) ━━ */
.lpwa { position: fixed; right: 24px; bottom: 24px; z-index: 400; display: flex; flex-direction: column; align-items: flex-end; gap: 12px; pointer-events: none; }
.lpwa > * { pointer-events: auto; }
.lpwa__btn { width: 56px; height: 56px; border-radius: 50%; display: grid; place-items: center; background: #0F1115; color: #25D366; box-shadow: 0 12px 28px -10px rgba(15,17,21,.45), 0 2px 6px rgba(15,17,21,.14); transition: transform 200ms cubic-bezier(.22,.61,.36,1); }
.lpwa__btn svg { display: block; width: 28px; height: 28px; fill: currentColor; }
.lpwa__btn:hover { transform: translateY(-2px); }
.lpwa__btn:focus-visible { outline: 2px solid #0F1115; outline-offset: 3px; }
.lpwa__bubble { position: relative; max-width: 260px; padding: 12px 40px 12px 14px; background: #fff; color: #23262D; border: 1px solid #E6E8EC; border-radius: 14px 14px 4px 14px; box-shadow: 0 12px 32px -12px rgba(15,17,21,.18); font: 500 14px/1.4 "Inter", system-ui, sans-serif; animation: vi-pop 320ms cubic-bezier(.16,1,.3,1) both; }
.lpwa__bubble-link { display: block; color: inherit; text-decoration: none; }
.lpwa__bubble-link strong { font-weight: 700; color: #0F1115; }
.lpwa__bubble-line { display: block; white-space: nowrap; }
.lpwa__bubble-close { position: absolute; top: 6px; right: 6px; width: 28px; height: 28px; border-radius: 8px; display: grid; place-items: center; color: #5C6371; }
.lpwa__bubble-close svg { display: block; }
.lpwa__bubble-close:hover { background: #F2F3F6; color: #0F1115; }
.lpwa__bubble-close:focus-visible { outline: 2px solid #0F1115; outline-offset: 2px; }
@keyframes vi-pop { from { opacity: 0; transform: translateY(8px) scale(.97); } to { opacity: 1; transform: none; } }

/* ━━ Révélations au défilement (état de départ seulement sous .vi-io, posé par ViEffects) ━━ */
@media (prefers-reduced-motion: no-preference) {
  .vi.vi-io [data-vi-reveal] { transition: opacity 560ms var(--vi-ease-out), transform 560ms var(--vi-ease-out); transition-delay: calc(var(--vi-i, 0) * 70ms); }
  .vi.vi-io [data-vi-reveal]:not(.is-in) { opacity: 0; transform: translate3d(0, 16px, 0); }
  .vi.vi-io .vi-stat::before { transition: transform 700ms var(--vi-ease-out) calc(var(--vi-i, 0) * 70ms + 120ms); }
  .vi.vi-io .vi-stat:not(.is-in)::before { transform: scaleX(0); }
  .vi.vi-io .vi-frac__bar i.is-full { transition: transform 300ms var(--vi-ease-out); transition-delay: calc(var(--k) * 35ms + 150ms); }
  .vi.vi-io .vi-releve:not(.is-in) .vi-frac__bar i.is-full { transform: scaleX(0); }
  .vi.vi-io .vi-tl__h:not(.is-in) .vi-tl__dot::before, .vi.vi-io .vi-tl__v:not(.is-in) .vi-tl__dot::before { opacity: 1; }
  .vi.vi-io .vi-tl__h:not(.is-in) .vi-tl__dot::after, .vi.vi-io .vi-tl__v:not(.is-in) .vi-tl__dot::after { transform: scale(0); }
  .vi.vi-io .vi-report .vi-tile { transition: opacity 400ms var(--vi-ease-out), transform 400ms var(--vi-ease-out); transition-delay: calc(var(--t, 0) * 50ms + 150ms); }
  .vi.vi-io .vi-report:not(.is-in) .vi-tile { opacity: 0; transform: translateY(10px); }
}
@media print {
  .vi [data-vi-reveal], .vi .vi-tile { opacity: 1 !important; transform: none !important; }
  .vi-sticky, .lpwa, .vi-offre { display: none !important; }
}
`;

export default css;
