/*
 * Widget Calendly (assets.calendly.com) : chargement partagé par la popup de l'accueil
 * (src/components/CalendlyPopup.tsx) et la landing page Ads (src/components/landing/CalendlyLinks.tsx).
 */

export const CALENDLY_WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js';
export const CALENDLY_WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';

type CalendlyApi = {
  initBadgeWidget?: (o: Record<string, unknown>) => void;
  initInlineWidget?: (o: { url: string; parentElement: HTMLElement }) => void;
  initPopupWidget?: (o: { url: string }) => void;
};
declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

/** Charge widget.js une seule fois ; `onerror` si le script ne peut pas être chargé (bloqueur, réseau). */
export function loadCalendlyScript(onload: () => void, onerror?: () => void) {
  if (window.Calendly) return onload();
  let s = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_WIDGET_JS}"]`);
  if (s?.dataset.failed) return onerror?.();
  if (!s) {
    s = document.createElement('script');
    s.src = CALENDLY_WIDGET_JS;
    s.async = true;
    const el = s;
    el.addEventListener('error', () => (el.dataset.failed = '1'), { once: true });
    document.head.appendChild(s);
  }
  s.addEventListener('load', onload, { once: true });
  if (onerror) s.addEventListener('error', onerror, { once: true });
}

/** Feuille de style du widget (popup et badge), une seule fois. */
export function loadCalendlyStyles() {
  if (document.querySelector(`link[href="${CALENDLY_WIDGET_CSS}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = CALENDLY_WIDGET_CSS;
  document.head.appendChild(link);
}
