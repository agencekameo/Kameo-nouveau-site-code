/**
 * Consentement aux cookies (recommandations CNIL) : aucun traceur avant un choix explicite,
 * refus aussi simple que l'acceptation, choix conservé 6 mois puis redemandé, modifiable à
 * tout moment (« Gestion des cookies » en pied de page).
 *
 * Catégories soumises au consentement :
 *  - audience  : mesure d'audience taap.it et Google Analytics 4 (toutes les pages,
 *                src/components/consent/GoogleAnalytics.tsx) et Microsoft Clarity (landing page),
 *                src/components/consent/ClarityTracker.tsx ;
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
    // Google Analytics d'abord informé du refus : sinon gtag réécrit _ga_… en quittant la page, après l'effacement
    const pub = c.marketing ? 'granted' : 'denied';
    window.gtag?.('consent', 'update', { analytics_storage: c.audience ? 'granted' : 'denied', ad_storage: pub, ad_user_data: pub, ad_personalization: pub });
    // cookies Meta, Clarity et Google Analytics posés sur ce domaine (ceux de taap.it, Meta et Clarity sur leurs domaines expirent d'eux-mêmes)
    const names = ['_fbp', '_fbc', '_clck', '_clsk', '_ga', '_ga_FEZJYLD8L8'];
    for (const name of names) document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${location.hostname.replace(/^www\./, '')}`;
    for (const name of names) document.cookie = `${name}=; Max-Age=0; Path=/`;
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
