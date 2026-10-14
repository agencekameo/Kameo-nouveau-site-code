'use client';

import { useEffect } from 'react';
import { onConsent, readConsent, type Consent } from '@/lib/consent';
import { TRACKER } from '@/lib/site';

/* Tracker taap.it (mesure d'audience), chargé uniquement après consentement. */
export default function AudienceTracker() {
  useEffect(() => {
    const apply = (c: Consent | null) => {
      if (!c?.audience || document.querySelector('script[data-kameo-tracker]')) return;
      const s = document.createElement('script');
      s.async = true;
      s.src = TRACKER.src;
      s.dataset.project = TRACKER.project;
      s.dataset.trackOutbound = 'true';
      s.dataset.trackForms = 'true';
      s.dataset.kameoTracker = '';
      document.head.appendChild(s);
    };
    apply(readConsent());
    return onConsent(apply);
  }, []);
  return null;
}
