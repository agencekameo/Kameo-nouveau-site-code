import overlayCss from './calendly-overlay.styles';

/* Styles de la popup Calendly de l'accueil (bloc <style id="cpop-styles"> de front-page.php). */
const css = `
.cpop { position: fixed; bottom: 20px; right: 20px; z-index: 9999; pointer-events: none; opacity: 0; transform: translateY(16px); transition: opacity .3s cubic-bezier(.16,1,.3,1), transform .3s cubic-bezier(.16,1,.3,1); }
.cpop[aria-hidden="false"] { opacity: 1; pointer-events: auto; transform: translateY(0); }
.cpop__backdrop { display: none; }
.cpop__panel { position: relative; background: #fff; border-radius: 18px; width: 400px; height: min(700px, calc(100vh - 40px)); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 24px 60px -10px rgba(15,17,21,.35), 0 0 0 1px rgba(15,17,21,.06); }
.cpop__close { position: absolute; top: 10px; right: 10px; z-index: 3; width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,.92); border: 0; color: #0f1115; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background .2s, transform .2s; box-shadow: 0 2px 8px rgba(15,17,21,.12); }
.cpop__close:hover { background: #fff; transform: rotate(90deg); }
.cpop__head { padding: 14px 20px 12px; border-bottom: 1px solid rgba(15,17,21,.06); flex-shrink: 0; }
.cpop__title { font-family: 'Satoshi', system-ui, sans-serif; font-size: 15.5px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0; line-height: 1.25; }
.cpop__frame { position: relative; flex: 1; min-height: 0; overflow: hidden; }
.cpop__loader { position: absolute; inset: 0; padding: 20px; display: flex; flex-direction: column; gap: 14px; z-index: 1; pointer-events: none; }
.cpop__loader.is-hidden { opacity: 0; transition: opacity .25s; }
.cpop__skel { background: linear-gradient(90deg, rgba(15,17,21,.04) 0%, rgba(15,17,21,.08) 50%, rgba(15,17,21,.04) 100%); background-size: 200% 100%; border-radius: 8px; animation: cpop-shimmer 1.4s ease-in-out infinite; }
.cpop__skel--title { height: 16px; width: 60%; }
.cpop__skel--cal-head { height: 28px; width: 80%; margin-top: 8px; }
.cpop__skel--grid { flex: 1; display: grid; grid-template-columns: repeat(7, 1fr); grid-template-rows: repeat(5, 1fr); gap: 6px; margin-top: 8px; }
.cpop__skel--cell { background: linear-gradient(90deg, rgba(15,17,21,.04) 0%, rgba(15,17,21,.08) 50%, rgba(15,17,21,.04) 100%); background-size: 200% 100%; border-radius: 6px; animation: cpop-shimmer 1.4s ease-in-out infinite; }
@keyframes cpop-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
.cpop__widget { position: relative; z-index: 2; width: 100%; height: 100% !important; min-height: 640px; opacity: 0; transition: opacity .25s; }
.cpop__widget.is-loaded { opacity: 1; }
.cpop__widget iframe { border: 0 !important; height: 100% !important; }
@media (max-width: 768px) { .cpop { display: none !important; } }
/* Fallback styles pour le badge widget Calendly — au cas où widget.css est bloqué (CSP, CDN down…) */
.calendly-badge-widget { position: fixed !important; right: 20px !important; bottom: 15px !important; z-index: 9998 !important; }
.calendly-badge-content { display: inline-flex !important; align-items: center !important; padding: 14px 24px !important; background: #ED6E63 !important; color: #fff !important; border-radius: 25px !important; cursor: pointer !important; box-shadow: 0 8px 24px -6px rgba(237,110,99,.5) !important; font-family: 'Satoshi', system-ui, sans-serif !important; font-weight: 700 !important; font-size: 15px !important; line-height: 1.2 !important; }
.calendly-badge-content:hover { transform: translateY(-2px) !important; transition: transform .2s !important; }
@media (prefers-reduced-motion: reduce) { .cpop, .cpop__close, .cpop__widget, .cpop__loader, .cpop__skel, .cpop__skel--cell { transition: none; animation: none; } }
  ${overlayCss}
`;
export default css;
