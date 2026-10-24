/*
 * Widget Calendly (assets.calendly.com) de la popup de l'accueil (src/components/CalendlyPopup.tsx).
 * La landing page Ads intègre Calendly sans ce script (src/components/landing/CalendlyModal.tsx).
 */

export const CALENDLY_WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js';
export const CALENDLY_WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';

type CalendlyApi = {
  initBadgeWidget?: (o: Record<string, unknown>) => void;
  initInlineWidget?: (o: { url: string; parentElement: HTMLElement }) => void;
};
declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

/** Charge widget.js une seule fois, puis appelle `onload`. */
export function loadCalendlyScript(onload: () => void) {
  if (window.Calendly) return onload();
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_WIDGET_JS}"]`);
  if (existing) return existing.addEventListener('load', onload, { once: true });
  const s = document.createElement('script');
  s.src = CALENDLY_WIDGET_JS;
  s.async = true;
  s.onload = onload;
  document.head.appendChild(s);
}

/** Feuille de style du widget (badge mobile et sa fenêtre), une seule fois. */
export function loadCalendlyStyles() {
  if (document.querySelector(`link[href="${CALENDLY_WIDGET_CSS}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = CALENDLY_WIDGET_CSS;
  document.head.appendChild(link);
}
