/*
 * Pages GEO (/agence-geo/, /audit-geo/, /accompagnement-geo/) : blocs propres au silo,
 * dans la charte des pages Expertises (Satoshi, corail #ED6E63, cartes arrondies).
 * Le héros (.page-hero), la FAQ (.expertise-faq) et la méthode (.expertise-process)
 * viennent de main.css.
 */
const css = `
:root { --accent-gradient: linear-gradient(136.79deg, #E14B89 5.13%, #F8903C 84.98%); }

/* Boutons du héros : espacés, le second en blanc bordé (comme les autres pages Expertises) */
.page-hero__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 8px; }
.page-hero__btn--secondary { background: transparent !important; color: #0f1115 !important; border: 1.5px solid rgba(15,17,21,.18) !important; }
.page-hero__btn--secondary:hover { background: #F9FAFB !important; border-color: rgba(15,17,21,.3) !important; }

/* En-tête de section commun */
.geo-head { text-align: center; max-width: 760px; margin: 0 auto clamp(36px,5vw,56px); }
.geo-head__eyebrow { display: inline-block; font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: #ED6E63; margin: 0 0 14px; }
.geo-head__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
.geo-head__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 62ch; margin: 0 auto; }
.geo-section { padding: clamp(64px,8vw,100px) 0; background: #fff; }
.geo-section--soft { background: #F9FAFB; }

/* Moteurs couverts, sous le héros */
.geo-engines { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin: 0; padding: 0; list-style: none; }
.geo-engines li { padding: 7px 14px; border-radius: 999px; background: #fff; border: 1px solid rgba(15,17,21,.1); font-size: 13px; font-weight: 700; color: #0f1115; letter-spacing: -.005em; }

/* En bref : la réponse courte, reprise telle quelle par les moteurs */
.geo-brief { padding: 0 0 clamp(48px,6vw,72px); background: #fff; }
.geo-brief__box { max-width: 1060px; margin: 0 auto; display: grid; grid-template-columns: 1.4fr 1fr; gap: clamp(20px,3.5vw,44px); background: #F9FAFB; border: 1px solid rgba(15,17,21,.07); border-radius: 24px; padding: clamp(24px,3.4vw,40px); }
.geo-brief__label { font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: #ED6E63; margin: 0 0 12px; }
.geo-brief__text { font-size: clamp(15.5px,1.4vw,17px); line-height: 1.7; color: rgba(15,17,21,.78); margin: 0; }
.geo-brief__text + .geo-brief__text { margin-top: 12px; }
.geo-brief__text strong { color: #0f1115; }
.geo-brief__facts { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; align-content: start; }
.geo-brief__facts li { display: grid; grid-template-columns: 22px 1fr; gap: 10px; align-items: start; background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 14px; padding: 12px 14px; font-size: 14px; line-height: 1.5; color: rgba(15,17,21,.72); }
.geo-brief__facts li::before { content: ''; width: 18px; height: 18px; margin-top: 1px; border-radius: 50%; background: rgba(237,110,99,.14) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4 8.5l2.5 2.5L12 5.5' fill='none' stroke='%23ED6E63' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center / 12px no-repeat; }
.geo-brief__facts strong { color: #0f1115; font-weight: 800; }
@media (max-width: 820px) { .geo-brief__box { grid-template-columns: 1fr; } }

.geo-brief__text a { color: #ED6E63; font-weight: 700; text-decoration: underline; text-underline-offset: 2px; }

/* Chiffres sourcés */
.geo-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; max-width: 1120px; margin: 0 auto; padding: 0; list-style: none; }
.geo-stat { display: flex; flex-direction: column; background: #F9FAFB; border: 1px solid rgba(15,17,21,.07); border-radius: 20px; padding: clamp(22px,2.6vw,28px); }
.geo-section--soft .geo-stat { background: #fff; }
.geo-stat__value { font-family: 'Satoshi', sans-serif; font-size: clamp(28px,3vw,38px); font-weight: 900; letter-spacing: -.04em; line-height: 1.05; color: #ED6E63; margin: 0 0 12px; }
.geo-stat__text { flex: 1; font-size: 14.5px; line-height: 1.55; color: rgba(15,17,21,.72); margin: 0 0 14px; }
.geo-stat__src { font-size: 12px; line-height: 1.4; color: rgba(15,17,21,.5); margin: 0; }
.geo-stat__src a { color: inherit; text-decoration: underline; text-underline-offset: 2px; }
@media (max-width: 1020px) { .geo-stats { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 520px) { .geo-stats { grid-template-columns: 1fr; } }

/* Grille de cartes (causes, mesures, livrables) */
.geo-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; max-width: 1120px; margin: 0 auto; padding: 0; list-style: none; }
.geo-cards--2 { grid-template-columns: repeat(2,1fr); max-width: 940px; }
.geo-card { background: #fff; border: 1px solid rgba(15,17,21,.07); border-radius: 20px; padding: clamp(22px,2.6vw,30px); transition: transform .3s, box-shadow .3s, border-color .3s; }
.geo-section--soft .geo-card { background: #fff; }
.geo-section:not(.geo-section--soft) .geo-card { background: #F9FAFB; }
.geo-card:hover { transform: translateY(-3px); border-color: rgba(237,110,99,.25); box-shadow: 0 18px 40px -22px rgba(15,17,21,.16); }
.geo-card__tag { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #ED6E63; background: rgba(237,110,99,.1); padding: 5px 10px; border-radius: 999px; margin: 0 0 14px; }
.geo-card__title { font-size: 18px; font-weight: 800; letter-spacing: -.02em; line-height: 1.3; color: #0f1115; margin: 0 0 8px; }
.geo-card__text { font-size: 14.5px; line-height: 1.6; color: rgba(15,17,21,.66); margin: 0; }
.geo-card__text + .geo-card__text { margin-top: 8px; }
.geo-card__text a { color: #ED6E63; font-weight: 700; text-decoration: underline; text-underline-offset: 2px; }
@media (max-width: 960px) { .geo-cards { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 640px) { .geo-cards, .geo-cards--2 { grid-template-columns: 1fr; } }

/* Les 3 étapes de la méthode */
.geo-steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; max-width: 1120px; margin: 0 auto; padding: 0; list-style: none; }
.geo-step { position: relative; background: #fff; border: 1px solid rgba(15,17,21,.07); border-radius: 22px; padding: clamp(26px,3vw,34px); overflow: hidden; }
.geo-step::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-gradient); }
.geo-step__num { display: block; font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: #ED6E63; margin: 0 0 10px; }
.geo-step__name { font-size: clamp(22px,2.2vw,26px); font-weight: 900; letter-spacing: -.03em; line-height: 1.15; color: #0f1115; margin: 0 0 10px; }
.geo-step__text { font-size: 14.5px; line-height: 1.6; color: rgba(15,17,21,.66); margin: 0 0 16px; }
.geo-step__list { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.geo-step__list li { position: relative; padding-left: 22px; font-size: 14px; line-height: 1.5; color: rgba(15,17,21,.75); }
.geo-step__list li::before { content: ''; position: absolute; left: 2px; top: 6px; width: 10px; height: 6px; border-left: 2px solid #ED6E63; border-bottom: 2px solid #ED6E63; transform: rotate(-45deg); }
@media (max-width: 900px) { .geo-steps { grid-template-columns: 1fr; max-width: 560px; } }

/* Offres et prix */
.geo-plans__group + .geo-plans__group { margin-top: clamp(56px,7vw,88px); }
.geo-plans__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; max-width: 1120px; margin: 0 auto; }
.geo-plans__grid--2 { grid-template-columns: repeat(2,1fr); max-width: 860px; }
.geo-plan { position: relative; display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 22px; padding: clamp(26px,3vw,34px); box-shadow: 0 18px 40px -24px rgba(15,17,21,.12); transition: transform .3s, box-shadow .3s; }
.geo-plan:hover { transform: translateY(-3px); box-shadow: 0 24px 50px -22px rgba(15,17,21,.18); }
.geo-plan--featured { border-color: rgba(237,110,99,.45); box-shadow: 0 24px 50px -20px rgba(237,110,99,.24); }
.geo-plan__badge { position: absolute; top: -12px; left: 24px; display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 999px; background: var(--accent-gradient); color: #fff; font-size: 11px; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; }
.geo-plan__name { font-size: clamp(20px,2vw,24px); font-weight: 900; letter-spacing: -.02em; line-height: 1.2; color: #0f1115; margin: 0 0 6px; }
.geo-plan__for { font-size: 14px; line-height: 1.5; color: rgba(15,17,21,.6); margin: 0 0 20px; }
.geo-plan__price { font-family: 'Satoshi', sans-serif; font-size: 44px; font-weight: 900; letter-spacing: -.04em; line-height: 1; color: #0f1115; margin: 0 0 6px; }
.geo-plan__price small { margin-left: 4px; font-size: 14px; font-weight: 600; letter-spacing: 0; color: rgba(15,17,21,.55); }
.geo-plan__note { font-size: 12.5px; font-weight: 600; color: rgba(15,17,21,.5); margin: 0 0 22px; }
.geo-plan__list { list-style: none; margin: 0 0 26px; padding: 22px 0 0; border-top: 1px solid rgba(15,17,21,.07); flex: 1; display: grid; gap: 11px; align-content: start; }
.geo-plan__list li { position: relative; padding-left: 24px; font-size: 14px; line-height: 1.5; color: rgba(15,17,21,.76); }
.geo-plan__list li::before { content: ''; position: absolute; left: 0; top: 6px; width: 12px; height: 7px; border-left: 2px solid #ED6E63; border-bottom: 2px solid #ED6E63; transform: rotate(-45deg); }
.geo-plan__list li strong { color: #0f1115; }
.geo-plan__cta { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 22px; border-radius: 999px; background: var(--accent-gradient); color: #fff; font-size: 14.5px; font-weight: 800; text-decoration: none; box-shadow: 0 12px 24px -10px rgba(237,110,99,.5); transition: transform .2s; }
.geo-plan__cta:hover { transform: translateY(-2px); }
.geo-plan__cta--ghost { background: #fff; color: #0f1115; border: 1px solid rgba(15,17,21,.14); box-shadow: none; }
.geo-plan__more { display: block; margin-top: 12px; text-align: center; font-size: 13.5px; font-weight: 700; color: #ED6E63; text-decoration: none; }
.geo-plan__more:hover { text-decoration: underline; text-underline-offset: 2px; }
@media (max-width: 960px) { .geo-plans__grid, .geo-plans__grid--2 { grid-template-columns: 1fr; max-width: 520px; } .geo-plan__badge { left: 50%; transform: translateX(-50%); white-space: nowrap; } }

/* Conditions des accompagnements */
.geo-terms { list-style: none; display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; max-width: 1120px; margin: clamp(28px,4vw,40px) auto 0; padding: 0; }
.geo-terms li { display: grid; grid-template-columns: 34px 1fr; gap: 12px; align-items: start; background: #F9FAFB; border: 1px solid rgba(15,17,21,.06); border-radius: 16px; padding: 16px 18px; font-size: 14px; line-height: 1.55; color: rgba(15,17,21,.7); }
.geo-section--soft .geo-terms li { background: #fff; }
.geo-terms li strong { color: #0f1115; }
.geo-terms__icon { width: 34px; height: 34px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: rgba(237,110,99,.12); color: #ED6E63; }
.geo-terms__icon svg { width: 16px; height: 16px; }
@media (max-width: 900px) { .geo-terms { grid-template-columns: 1fr; max-width: 560px; } }

/* Tableaux (SEO / GEO, comparatif des formules) */
.geo-table-wrap { max-width: 1040px; margin: 0 auto; overflow-x: auto; border: 1px solid rgba(15,17,21,.08); border-radius: 20px; background: #fff; -webkit-overflow-scrolling: touch; }
.geo-table { width: 100%; min-width: 620px; border-collapse: collapse; font-size: 14.5px; line-height: 1.5; color: rgba(15,17,21,.75); }
.geo-table caption { padding: 0; }
.geo-table th, .geo-table td { padding: 15px 18px; text-align: left; vertical-align: top; border-bottom: 1px solid rgba(15,17,21,.07); }
.geo-table tr:last-child th, .geo-table tr:last-child td { border-bottom: 0; }
.geo-table thead th { background: #F9FAFB; font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: rgba(15,17,21,.55); }
.geo-table thead th.is-hot { color: #ED6E63; }
.geo-table tbody th { width: 26%; font-weight: 800; color: #0f1115; }
.geo-table td.is-yes, .geo-table td.is-no { text-align: center; font-weight: 800; }
.geo-table td.is-yes { color: #ED6E63; }
.geo-table td.is-no { color: rgba(15,17,21,.28); }
.geo-table--plans thead th:not(:first-child), .geo-table--plans td { text-align: center; }
.geo-table--plans tbody th { width: 40%; font-weight: 700; }
.geo-table__price td { font-weight: 900; color: #0f1115; }
@media (max-width: 640px) {
  /* SEO / GEO : une carte par critère, les deux réponses l'une sous l'autre */
  .geo-table--stack { min-width: 0; }
  .geo-table--stack thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
  .geo-table--stack tr { display: block; padding: 14px 16px; border-bottom: 1px solid rgba(15,17,21,.07); }
  .geo-table--stack tr:last-child { border-bottom: 0; }
  .geo-table--stack th, .geo-table--stack td { display: block; width: auto; padding: 0; border: 0; }
  .geo-table--stack tbody th { width: auto; margin-bottom: 8px; font-size: 12px; letter-spacing: .06em; text-transform: uppercase; color: rgba(15,17,21,.55); }
  .geo-table--stack td + td { margin-top: 6px; }
  .geo-table--stack td::before { content: attr(data-label) '\\00a0: '; font-weight: 800; color: #0f1115; }
  .geo-table--stack td.is-geo::before { color: #ED6E63; }
  /* Comparatif des formules : tient dans la largeur, sans défilement */
  .geo-table--plans { min-width: 0; font-size: 12.5px; }
  .geo-table--plans th, .geo-table--plans td { padding: 11px 8px; }
  .geo-table--plans thead th { font-size: 10px; letter-spacing: .04em; }
  .geo-table--plans tbody th { width: 46%; }
}

/* Liens vers les pages filles (audit, accompagnement) */
.geo-paths { display: grid; grid-template-columns: repeat(2,1fr); gap: 22px; max-width: 1040px; margin: 0 auto; }
.geo-path { position: relative; display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 24px; padding: clamp(26px,3.2vw,38px); color: inherit; text-decoration: none; box-shadow: 0 18px 40px -26px rgba(15,17,21,.14); transition: transform .3s, box-shadow .3s, border-color .3s; }
.geo-path:hover { transform: translateY(-3px); border-color: rgba(237,110,99,.35); box-shadow: 0 26px 54px -24px rgba(15,17,21,.2); }
.geo-path__kicker { font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: #ED6E63; margin: 0 0 10px; }
.geo-path__title { font-size: clamp(22px,2.4vw,28px); font-weight: 900; letter-spacing: -.03em; line-height: 1.15; color: #0f1115; margin: 0 0 10px; }
.geo-path__text { font-size: 14.5px; line-height: 1.6; color: rgba(15,17,21,.66); margin: 0 0 18px; }
.geo-path__offers { list-style: none; margin: 0 0 22px; padding: 0; display: grid; gap: 8px; flex: 1; align-content: start; }
.geo-path__offers li { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; padding: 11px 14px; border-radius: 12px; background: #F9FAFB; font-size: 14.5px; font-weight: 700; color: #0f1115; }
.geo-path__offers li span { font-weight: 900; white-space: nowrap; }
.geo-path__offers li small { font-weight: 600; font-size: 12px; color: rgba(15,17,21,.5); }
.geo-path__link { display: inline-flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 800; color: #ED6E63; }
.geo-path:hover .geo-path__link { text-decoration: underline; text-underline-offset: 3px; }
@media (max-width: 820px) { .geo-paths { grid-template-columns: 1fr; max-width: 560px; } }

/* Sommaire du rapport d'audit */
.geo-report { list-style: none; counter-reset: geo-report; max-width: 880px; margin: 0 auto; padding: 0; display: grid; gap: 12px; }
.geo-report li { counter-increment: geo-report; display: grid; grid-template-columns: 52px 1fr; gap: 16px; align-items: start; background: #fff; border: 1px solid rgba(15,17,21,.07); border-radius: 18px; padding: 18px 22px; }
.geo-report li::before { content: counter(geo-report, decimal-leading-zero); font-family: 'Satoshi', sans-serif; font-size: 28px; font-weight: 900; letter-spacing: -.04em; line-height: 1; color: #ED6E63; }
.geo-report__title { display: block; font-size: 16.5px; font-weight: 800; letter-spacing: -.01em; color: #0f1115; margin: 2px 0 4px; }
.geo-report__text { display: block; font-size: 14px; line-height: 1.6; color: rgba(15,17,21,.66); }
.geo-report__tag { display: inline-block; margin-left: 8px; padding: 2px 8px; border-radius: 999px; background: rgba(237,110,99,.1); color: #ED6E63; font-size: 11px; font-weight: 800; letter-spacing: .04em; vertical-align: 2px; }

/* Bandeau d'appel au milieu de page */
.geo-midcta { padding: clamp(24px,4vw,40px) 0; background: #fff; }
.geo-midcta__box { position: relative; max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 24px; overflow: hidden; background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%); border: 1px solid rgba(237,110,99,.22); border-radius: 22px; padding: clamp(24px,3.4vw,36px) clamp(24px,4vw,44px); }
.geo-midcta__title { font-size: clamp(20px,2.4vw,26px); font-weight: 900; letter-spacing: -.02em; line-height: 1.2; color: #0f1115; margin: 0 0 6px; }
.geo-midcta__text { font-size: 14.5px; line-height: 1.55; color: rgba(15,17,21,.65); margin: 0; }
.geo-midcta__btn { flex: 0 0 auto; display: inline-flex; align-items: center; gap: 10px; padding: 15px 28px; border-radius: 999px; background: var(--accent-gradient); color: #fff; font-size: 15px; font-weight: 800; text-decoration: none; box-shadow: 0 14px 28px -10px rgba(237,110,99,.5); transition: transform .2s; }
.geo-midcta__btn:hover { transform: translateY(-2px); }
@media (max-width: 760px) { .geo-midcta__box { flex-direction: column; text-align: center; } }

/* Appel final */
.geo-cta { padding: clamp(48px,6vw,80px) 0 clamp(64px,8vw,100px); background: #fff; }
.geo-cta__box { position: relative; max-width: 980px; margin: 0 auto; overflow: hidden; text-align: center; background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%); border: 1px solid rgba(237,110,99,.2); border-radius: 28px; padding: clamp(44px,7vw,80px) clamp(24px,5vw,56px); }
.geo-cta__box::before { content: ''; position: absolute; inset: 0; background: radial-gradient(55% 60% at 50% 0%, rgba(237,110,99,.12), transparent 70%); pointer-events: none; }
.geo-cta__wrap { position: relative; max-width: 640px; margin: 0 auto; }
.geo-cta__title { font-size: clamp(28px,3.6vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 16px; }
.geo-cta__text { font-size: 16px; line-height: 1.6; color: rgba(15,17,21,.65); margin: 0 0 30px; }
.geo-cta__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }
.geo-cta__btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 30px; border-radius: 999px; font-size: 15px; font-weight: 800; letter-spacing: -.01em; text-decoration: none; transition: transform .2s; }
.geo-cta__btn:hover { transform: translateY(-2px); }
.geo-cta__btn--primary { background: var(--accent-gradient); color: #fff; box-shadow: 0 14px 28px -10px rgba(237,110,99,.5); }
.geo-cta__btn--secondary { background: #fff; color: #0f1115; border: 1px solid rgba(15,17,21,.12); }
.geo-cta__btn .icon { width: 15px; height: 15px; }

/* Texte courant (définition, cadre) */
.geo-prose { max-width: 780px; margin: 0 auto; font-size: 16px; line-height: 1.75; color: rgba(15,17,21,.75); }
.geo-prose p { margin: 0 0 16px; }
.geo-prose p:last-child { margin-bottom: 0; }
.geo-prose strong { color: #0f1115; }
.geo-prose a { color: #ED6E63; font-weight: 700; text-decoration: underline; text-underline-offset: 2px; }
.geo-source { display: block; max-width: 1040px; margin: 14px auto 0; font-size: 12.5px; line-height: 1.5; color: rgba(15,17,21,.5); text-align: center; }
.geo-source a { color: inherit; text-decoration: underline; text-underline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  .geo-card, .geo-plan, .geo-path, .geo-plan__cta, .geo-midcta__btn, .geo-cta__btn { transition: none; }
  .geo-card:hover, .geo-plan:hover, .geo-path:hover { transform: none; }
}
`;
export default css;
