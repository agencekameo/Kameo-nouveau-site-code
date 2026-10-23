/**
 * Consentement aux cookies (recommandations CNIL) : aucun traceur avant un choix explicite,
 * refus aussi simple que l'acceptation, choix conservé 6 mois puis redemandé, modifiable à
 * tout moment (« Gestion des cookies » en pied de page).
 *
 * Catégories soumises au consentement :
 *  - audience  : mesure d'audience taap.it (toutes les pages) ;
 *  - marketing : Google Tag Manager GTM-W8S6WQB9 et le pixel Meta qu'il charge (landing page Ads et
 *                confirmation de rendez-vous), src/components/consent/TagManager.tsx.
 */
export type Consent = { v: 1; audience: boolean; marketing: boolean; date: string };

const COOKIE = 'kameo_consent';
const MAX_AGE = 182 * 24 * 3600; // 6 mois
const CHANGE = 'kameo:consent';
const OPEN = 'kameo:consent-open';

export function readConsent(): Consent | null {
  if (typeof document === 'undefined') return null;
  const raw = document.cookie.split('; ').find((c) => c.startsWith(COOKIE + '='));
  if (!raw) return null;
  try {
    const c = JSON.parse(decodeURIComponent(raw.slice(COOKIE.length + 1)));
    return c && c.v === 1 ? { v: 1, audience: !!c.audience, marketing: !!c.marketing, date: String(c.date) } : null;
  } catch {
    return null;
  }
}

/** Enregistre le choix ; un retrait de consentement recharge la page pour arrêter les traceurs. */
export function saveConsent(choice: { audience: boolean; marketing: boolean }): void {
  const before = readConsent();
  const c: Consent = { v: 1, audience: choice.audience, marketing: choice.marketing, date: new Date().toISOString() };
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(c))}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  const withdrawn = (before?.audience && !c.audience) || (before?.marketing && !c.marketing);
  if (withdrawn) {
    // cookies Meta posés sur ce domaine (ceux de taap.it et de Meta sur leurs domaines expirent d'eux-mêmes)
    for (const name of ['_fbp', '_fbc']) document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${location.hostname.replace(/^www\./, '')}`;
    for (const name of ['_fbp', '_fbc']) document.cookie = `${name}=; Max-Age=0; Path=/`;
    location.reload();
    return;
  }
  window.dispatchEvent(new CustomEvent<Consent>(CHANGE, { detail: c }));
}

/** Abonnement aux changements de consentement ; renvoie la fonction de désabonnement. */
export function onConsent(cb: (c: Consent) => void): () => void {
  const h = (e: Event) => cb((e as CustomEvent<Consent>).detail);
  window.addEventListener(CHANGE, h);
  return () => window.removeEventListener(CHANGE, h);
}

/** Rouvre le panneau de choix (lien « Gestion des cookies »). */
export const openConsentSettings = () => window.dispatchEvent(new Event(OPEN));
export function onConsentOpen(cb: () => void): () => void {
  window.addEventListener(OPEN, cb);
  return () => window.removeEventListener(OPEN, cb);
}
