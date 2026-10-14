'use client';

import { openConsentSettings } from '@/lib/consent';

/* Lien « Gestion des cookies » des pieds de page : rouvre le bandeau de consentement. */
export default function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" className={['ckb-settings', className].filter(Boolean).join(' ')} onClick={openConsentSettings}>
      Gestion des cookies
    </button>
  );
}
