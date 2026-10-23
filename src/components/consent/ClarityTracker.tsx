'use client';

import { useEffect } from 'react';
import { onConsent, readConsent, type Consent } from '@/lib/consent';

/*
 * Microsoft Clarity (projet z24q82d1c2) : cartes de chaleur et relecture des visites de la landing
 * page Ads. Chargé uniquement après consentement « Mesure d'audience », puis informé du choix par son
 * API de consentement (exigée par Microsoft pour les visiteurs européens) : stockage analytique
 * accordé, stockage publicitaire selon le choix « Publicité ».
 */
const CLARITY_ID = 'z24q82d1c2';

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] };
declare global {
  interface Window {
    clarity?: ClarityFn;
  }
}

function loadClarity(c: Consent) {
  if (!window.clarity) {
    // équivalent du code d'installation fourni par Clarity
    const fn: ClarityFn = (...args) => {
      (fn.q = fn.q || []).push(args);
    };
    window.clarity = fn;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    document.head.appendChild(s);
  }
  window.clarity('consentv2', { ad_Storage: c.marketing ? 'granted' : 'denied', analytics_Storage: 'granted' });
}

export default function ClarityTracker() {
  useEffect(() => {
    const apply = (c: Consent | null) => c?.audience && loadClarity(c);
    apply(readConsent());
    return onConsent(apply);
  }, []);
  return null;
}
