/*
 * Fenêtre Calendly (CalendlyModal.tsx : landing, articles du blog) : fond flouté, module Calendly seul
 * (carte blanche aux angles arrondis, à sa taille exacte), bouton Fermer à l'extérieur, silhouette du calendrier
 * pendant le chargement. Au-dessus du bandeau cookies (z-index 10000).
 * Fenêtre fermée : transparente et inerte, mais jamais en visibility: hidden autour de l'iframe, que le
 * navigateur cesserait d'afficher ; Calendly préchargé y finit ainsi son rendu et s'ouvre prêt.
 */
const css = `
.lpcal {
  position: fixed; inset: 0; z-index: 10001;
  display: grid; place-items: center;
  padding: 24px;
  pointer-events: none;
}
.lpcal.is-open { pointer-events: auto; }
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
  transition: height .3s cubic-bezier(.16,1,.3,1);
}
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
/* animée seulement quand elle est visible (la fenêtre fermée reste dans la page) */
.lpcal.is-open .lpcal__skel:not(.is-hidden) .lpcal__shimmer { animation: lpcal-shimmer 1.3s ease-in-out infinite; }
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

@media (max-width: 640px) {
  .lpcal { padding: 66px 12px 14px; }
  .lpcal__panel { max-height: calc(100vh - 80px); max-height: calc(100dvh - 80px); border-radius: 18px; }
  .lpcal__close { top: -54px; right: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .lpcal, .lpcal__backdrop, .lpcal__dialog, .lpcal__panel, .lpcal__frame, .lpcal__skel, .lpcal__close { transition: none; }
  .lpcal .lpcal__shimmer { animation: none !important; }
}
`;
export default css;
