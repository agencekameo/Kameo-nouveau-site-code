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
.calendly-overlay { display: flex !important; align-items: center !important; justify-content: center !important; padding: 15px !important; box-sizing: border-box !important; }
.calendly-overlay .calendly-popup { position: relative !important; top: auto !important; left: auto !important; right: auto !important; bottom: auto !important; transform: none !important; width: 100% !important; max-width: 460px !important; height: min(640px, calc(100vh - 30px)) !important; max-height: calc(100vh - 30px) !important; margin: 0 !important; background: #ffffff !important; border-radius: 18px !important; overflow: hidden !important; box-shadow: 0 24px 60px -10px rgba(15,17,21,.45) !important; }
.calendly-overlay .calendly-popup-content { height: 100% !important; background: #ffffff !important; border-radius: 18px !important; overflow: hidden !important; }
.calendly-overlay .calendly-popup iframe { height: 100% !important; width: 100% !important; border: 0 !important; background: #ffffff !important; }
/* Croix de fermeture : pastille blanche + X orange Kameo (au lieu de la croix blanche par défaut, invisible) */
.calendly-popup-close { top: 14px !important; right: 14px !important; width: 36px !important; height: 36px !important; background: #ffffff !important; border-radius: 50% !important; box-shadow: 0 2px 8px rgba(15,17,21,.18) !important; color: transparent !important; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M6 6l12 12M18 6L6 18' stroke='%23ED6E63' stroke-width='2.5' stroke-linecap='round' fill='none'/></svg>") !important; background-repeat: no-repeat !important; background-position: center !important; background-size: 16px !important; }
.calendly-popup-close svg, .calendly-popup-close img { display: none !important; }
@media (prefers-reduced-motion: reduce) { .cpop, .cpop__close, .cpop__widget, .cpop__loader, .cpop__skel, .cpop__skel--cell { transition: none; animation: none; } }
  
`;
export default css;
