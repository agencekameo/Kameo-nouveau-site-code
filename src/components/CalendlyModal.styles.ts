/*
 * Fenêtre Calendly (CalendlyModal.tsx : landing, articles du blog) : fond flouté, module Calendly seul
 * (carte blanche aux angles arrondis, à sa taille exacte), bouton Fermer à l'extérieur, silhouette du calendrier
 * pendant le chargement, message optionnel en haut (landing : rendez-vous gratuit), bouton « Voir les créneaux
 * disponibles » quand la fenêtre s'ouvre seule sans accord cookies. Au-dessus du bandeau cookies (z-index 10000).
 * Fenêtre fermée : transparente et inerte, mais jamais en visibility: hidden autour de l'iframe, que le
 * navigateur cesserait d'afficher ; Calendly préchargé y finit ainsi son rendu et s'ouvre prêt.
 * Écran tactile : fermée, elle est aussi poussée hors de l'écran (après son fondu de fermeture) ; sur iPhone,
 * un cadre invisible laissé au milieu de l'écran peut capter le défilement malgré pointer-events: none.
 * Pas sur ordinateur : un cadre hors de l'écran n'y est plus dessiné, et le calendrier préchargé ne s'ouvrirait
 * plus instantanément.
 */
const css = `
.lpcal {
  position: fixed; inset: 0; z-index: 10001;
  display: grid; place-items: center;
  padding: 24px;
  pointer-events: none;
}
.lpcal.is-open { pointer-events: auto; }
@media (hover: none) {
  .lpcal { transform: translate3d(-300vw, 0, 0); transition: transform 0s linear .4s; }
  .lpcal.is-open { transform: none; transition: none; }
}
.lpcal__backdrop {
  position: absolute; inset: 0;
  background: rgba(8, 9, 12, .5);
  -webkit-backdrop-filter: blur(14px) saturate(1.15);
  backdrop-filter: blur(14px) saturate(1.15);
  opacity: 0; visibility: hidden;
  transition: opacity .3s cubic-bezier(.16,1,.3,1), visibility 0s linear .3s;
}
.lpcal.is-open .lpcal__backdrop { opacity: 1; visibility: visible; transition-delay: 0s; }
.lpcal__dialog {
  position: relative;
  width: min(480px, 100%);
  opacity: 0;
  transform: translateY(16px) scale(.98);
  transition: opacity .3s cubic-bezier(.16,1,.3,1), transform .4s cubic-bezier(.16,1,.3,1);
}
.lpcal.is-open .lpcal__dialog { opacity: 1; transform: none; }
.lpcal__panel {
  position: relative;
  max-height: calc(100vh - 48px);
  max-height: calc(100dvh - 48px);
  overflow-x: hidden; overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.08);
}
/* Zone du calendrier : sa hauteur suit calendly.page_height */
.lpcal__body { position: relative; overflow: hidden; transition: height .3s cubic-bezier(.16,1,.3,1); }
/* Message en haut de la fenêtre (landing : rendez-vous gratuit) */
.lpcal__notice {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  padding: 14px 20px;
  background: #fdf1ef;
  border-bottom: 1px solid rgba(237,110,99,.2);
  font-family: 'Satoshi', system-ui, -apple-system, sans-serif;
}
.lpcal__notice svg { flex: none; }
.lpcal__notice p { margin: 0; font-size: 15px; line-height: 1.4; color: #1a1a1a; letter-spacing: -.005em; }
.lpcal__notice strong { font-weight: 800; color: #b8443a; }
.lpcal__frame {
  display: block; width: 100%; border: 0;
  opacity: 0; transition: opacity .25s ease;
}
.lpcal__frame.is-ready { opacity: 1; }
.lpcal__close {
  position: absolute; top: 0; right: -56px; z-index: 2;
  width: 42px; height: 42px; border-radius: 50%; border: 0;
  display: grid; place-items: center;
  background: #fff; color: #ED6E63; cursor: pointer;
  box-shadow: 0 6px 20px rgba(0,0,0,.35);
  transition: transform .25s cubic-bezier(.16,1,.3,1);
}
.lpcal__close:hover { transform: rotate(90deg); }
.lpcal__close:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }

/* Silhouette du calendrier compact de Calendly, le temps qu'il s'affiche */
.lpcal__skel {
  position: absolute; inset: 0 0 auto; height: 602px; z-index: 1;
  display: flex; flex-direction: column; align-items: center;
  padding: 30px 24px 0;
  background: #fff;
  font-family: 'Satoshi', system-ui, -apple-system, sans-serif;
  transition: opacity .25s ease, visibility 0s linear 0s;
}
.lpcal__skel.is-hidden { opacity: 0; visibility: hidden; transition: opacity .25s ease, visibility 0s linear .25s; }
.lpcal__skel-title { margin: 0 0 30px; font-size: 18px; font-weight: 700; color: #1a1a1a; letter-spacing: -.01em; }
.lpcal__shimmer {
  display: block;
  background: linear-gradient(90deg, #f0f1f3 0%, #e3e5e8 50%, #f0f1f3 100%);
  background-size: 200% 100%;
}
/* animée seulement pendant le chargement, fenêtre ouverte (la fenêtre fermée reste dans la page) */
.lpcal.is-open .lpcal__skel.is-loading .lpcal__shimmer { animation: lpcal-shimmer 1.3s ease-in-out infinite; }
@keyframes lpcal-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
.lpcal__skel-month { width: 120px; height: 14px; border-radius: 7px; }
.lpcal__skel-week, .lpcal__skel-grid {
  display: grid; grid-template-columns: repeat(7, 1fr);
  width: 100%; max-width: 360px; justify-items: center;
}
.lpcal__skel-week { margin: 26px 0 14px; font-size: 11px; color: #6b6f76; }
.lpcal__skel-grid { gap: 34px 0; margin-top: 4px; }
.lpcal__skel-grid .lpcal__skel-day:first-child { grid-column-start: 4; }
.lpcal__skel-day { width: 18px; height: 12px; border-radius: 6px; }
.lpcal__skel-tz { align-self: flex-start; width: 170px; height: 12px; border-radius: 6px; margin: 40px 0 0 max(0px, calc((100% - 360px) / 2)); }
.lpcal__slow { margin: 26px 0 0; padding: 0 8px; font-size: 13.5px; line-height: 1.5; color: #4d5055; text-align: center; }
.lpcal__slow a { color: #ED6E63; font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }

/* Ouverture automatique sans accord cookies : silhouette fixe et bouton qui charge Calendly au clic */
.lpcal__gate {
  position: absolute; inset: 0; z-index: 2;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  padding: 24px; text-align: center;
  background: linear-gradient(180deg, rgba(255,255,255,.2) 0%, rgba(255,255,255,.92) 40%, rgba(255,255,255,.92) 100%);
  font-family: 'Satoshi', system-ui, -apple-system, sans-serif;
}
.lpcal__gate-btn {
  display: inline-flex; align-items: center;
  padding: 13px 22px; border: 0; border-radius: 999px;
  background: #ED6E63; color: #fff;
  font: 700 15px/1.2 'Satoshi', system-ui, -apple-system, sans-serif;
  cursor: pointer;
  box-shadow: 0 10px 24px -8px rgba(237,110,99,.55);
  transition: transform .2s, box-shadow .2s;
}
.lpcal__gate-btn:hover { transform: translateY(-1px); box-shadow: 0 14px 28px -8px rgba(237,110,99,.6); }
.lpcal__gate-btn:focus-visible { outline: 2px solid #1a1a1a; outline-offset: 3px; }
.lpcal__gate-note { margin: 0; max-width: 260px; font-size: 12px; line-height: 1.45; color: rgba(15,17,21,.6); }

@media (max-width: 640px) {
  .lpcal { padding: 66px 12px 14px; }
  .lpcal__panel { max-height: calc(100vh - 80px); max-height: calc(100dvh - 80px); border-radius: 18px; }
  .lpcal__close { top: -54px; right: 0; }
  .lpcal__notice { padding: 12px 16px; }
  .lpcal__notice p { font-size: 14px; }
}
@media (prefers-reduced-motion: reduce) {
  .lpcal, .lpcal__backdrop, .lpcal__dialog, .lpcal__panel, .lpcal__body, .lpcal__frame, .lpcal__skel, .lpcal__close, .lpcal__gate-btn { transition: none; }
  .lpcal .lpcal__shimmer { animation: none !important; }
}
`;
export default css;
