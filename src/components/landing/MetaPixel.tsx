'use client';

import { useEffect } from 'react';
import { onConsent, readConsent, type Consent } from '@/lib/consent';

/* Meta Pixel (Facebook), ID 820736740875530 — uniquement sur la landing page et la confirmation,
   et seulement après consentement « Publicité ». */
const PIXEL_ID = '820736740875530';

type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue: unknown[]; loaded: boolean; version: string; push: unknown };
declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

function loadPixel() {
  if (window.fbq) return;
  // équivalent du code d'installation fourni par Meta
  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue.push(args);
  } as Fbq;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  window.fbq = n;
  if (!window._fbq) window._fbq = n;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(s);
  n('init', PIXEL_ID);
  n('track', 'PageView');
}

export default function MetaPixel() {
  useEffect(() => {
    const apply = (c: Consent | null) => c?.marketing && loadPixel();
    apply(readConsent());
    return onConsent(apply);
  }, []);
  return null;
}
