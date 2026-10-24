/*
 * Fenêtre de prise de rendez-vous Calendly (Calendly.initPopupWidget, et badge mobile de l'accueil) :
 * carte blanche centrée aux couleurs Kameo, étroite sur mobile et tablette, large sur ordinateur
 * (calendrier et horaires côte à côte). Partagé par la popup de l'accueil (CalendlyPopup.styles.ts)
 * et la landing page Ads (landing/CalendlyLinks.tsx).
 * 100dvh : hauteur réellement visible sur mobile (100vh y inclut la zone sous la barre d'adresse).
 * Au-dessus du bandeau cookies (z-index 10000), qui masquait sinon le bas du calendrier sur mobile.
 */
const overlayCss = `
.calendly-overlay { z-index: 10001 !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 15px !important; box-sizing: border-box !important; }
.calendly-overlay .calendly-popup { position: relative !important; top: auto !important; left: auto !important; right: auto !important; bottom: auto !important; transform: none !important; width: 100% !important; max-width: 460px !important; height: min(640px, calc(100vh - 30px)) !important; height: min(640px, calc(100dvh - 30px)) !important; max-height: calc(100vh - 30px) !important; max-height: calc(100dvh - 30px) !important; margin: 0 !important; background: #ffffff !important; border-radius: 18px !important; overflow: hidden !important; box-shadow: 0 24px 60px -10px rgba(15,17,21,.45) !important; }
.calendly-overlay .calendly-popup-content { height: 100% !important; background: #ffffff !important; border-radius: 18px !important; overflow: hidden !important; }
.calendly-overlay .calendly-popup iframe { height: 100% !important; width: 100% !important; border: 0 !important; background: #ffffff !important; }
/* Croix de fermeture : pastille blanche + X orange Kameo (au lieu de la croix blanche par défaut, invisible) */
.calendly-popup-close { top: 14px !important; right: 14px !important; width: 36px !important; height: 36px !important; background: #ffffff !important; border-radius: 50% !important; box-shadow: 0 2px 8px rgba(15,17,21,.18) !important; color: transparent !important; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M6 6l12 12M18 6L6 18' stroke='%23ED6E63' stroke-width='2.5' stroke-linecap='round' fill='none'/></svg>") !important; background-repeat: no-repeat !important; background-position: center !important; background-size: 16px !important; }
.calendly-popup-close svg, .calendly-popup-close img { display: none !important; }
@media (min-width: 976px) { .calendly-overlay .calendly-popup { width: 80% !important; min-width: 900px !important; max-width: 1000px !important; height: min(680px, calc(100vh - 40px)) !important; height: min(680px, calc(100dvh - 40px)) !important; } }
`;
export default overlayCss;
