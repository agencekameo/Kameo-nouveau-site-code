'use client';

import { useEffect } from 'react';
import { onConsent, readConsent, type Consent } from '@/lib/consent';

/*
 * Google Analytics 4 (flux Web « Kameo », ID de mesure G-FEZJYLD8L8), sur toutes les pages. Chargé
 * uniquement après consentement « Mesure d'audience », puis tenu informé du choix par le mode
 * consentement de Google : stockage analytique accordé, stockage et personnalisation publicitaires
 * selon le choix « Publicité ».
 * Les changements de page côté client (navigation Next.js) sont comptés par la mesure améliorée de
 * GA4 (« changements de page selon l'historique du navigateur », activée dans le flux) : aucun
 * page_view n'est envoyé à la main, il serait compté deux fois.
 * Cookies _ga et _ga_FEZJYLD8L8 limités à 13 mois (recommandation CNIL ; 2 ans par défaut chez Google).
 */
export const GA_ID = 'G-FEZJYLD8L8';
const TREIZE_MOIS = 395 * 24 * 3600;

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function loadAnalytics(c: Consent) {
  const pub = c.marketing ? 'granted' : 'denied';
  const choix = { analytics_storage: 'granted', ad_storage: pub, ad_user_data: pub, ad_personalization: pub };
  if (document.querySelector('script[data-kameo-ga]')) {
    window.gtag?.('consent', 'update', choix);
    return;
  }
  // équivalent du code d'installation fourni par Google (gtag.js lit l'objet `arguments` lui-même)
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('consent', 'default', choix);
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { cookie_expires: TREIZE_MOIS });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s.dataset.kameoGa = '';
  document.head.appendChild(s);
}

export default function GoogleAnalytics() {
  useEffect(() => {
    const apply = (c: Consent | null) => c?.audience && loadAnalytics(c);
    apply(readConsent());
    return onConsent(apply);
  }, []);
  return null;
}
