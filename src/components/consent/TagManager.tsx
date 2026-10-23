'use client';

import { useEffect } from 'react';
import { onConsent, readConsent, type Consent } from '@/lib/consent';

/*
 * Google Tag Manager (conteneur GTM-W8S6WQB9, compte « Agence Kameo ») sur la landing page Ads et
 * la confirmation de rendez-vous. Chargé uniquement après consentement « Publicité » : toute balise
 * ajoutée au conteneur est donc soumise à ce choix. Le conteneur porte le pixel Meta 820736740875530
 * (PageView, Schedule à la confirmation de rendez-vous, ClicCalendly au clic sur un lien Calendly),
 * qui n'est plus codé dans le site. Pas de <noscript> : sans JavaScript, aucun accord n'est possible.
 */
export const GTM_ID = 'GTM-W8S6WQB9';

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function loadTagManager() {
  if (document.querySelector('script[data-kameo-gtm]')) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  s.dataset.kameoGtm = '';
  document.head.appendChild(s);
}

export default function TagManager() {
  useEffect(() => {
    const apply = (c: Consent | null) => c?.marketing && loadTagManager();
    apply(readConsent());
    return onConsent(apply);
  }, []);
  return null;
}
