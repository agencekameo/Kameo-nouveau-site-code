import type { NextConfig } from 'next';

/*
 * En-têtes de sécurité.
 *
 * Origines tierces réellement utilisées par le site :
 *  - taap.it                    : tracker de liens (toutes les pages)
 *  - assets.calendly.com        : widget.js et widget.css (popup de rendez-vous, badge mobile)
 *  - calendly.com               : iframe de prise de rendez-vous
 *  - connect.facebook.net       : Meta Pixel (landing page, confirmation de rendez-vous)
 *  - www.facebook.com           : pixel <noscript> et envoi des événements
 *  - www.google.com             : carte Google Maps (contact, agence WordPress Paris)
 *  - fonts.googleapis.com / fonts.gstatic.com : police de /rdv-confirme/
 *  - cdn.prod.website-files.com : logo Calendly de l'encart des articles
 *
 * La politique complète (CSP_REPORT_ONLY) est d'abord publiée en « Report-Only » : les navigateurs
 * signalent dans la console ce qu'elle bloquerait, sans rien bloquer. Une fois vérifié en production
 * que le tracker, le pixel et Calendly ne déclenchent aucun signalement, renommer l'en-tête en
 * « Content-Security-Policy ». La partie appliquée dès maintenant (CSP) ne peut rien casser :
 * pas d'encadrement par un site tiers, pas de plugin, pas de <base> ni de formulaire détourné.
 * 'unsafe-inline' est nécessaire dans script-src : Next.js insère des scripts inline et les pages
 * sont prérendues, donc sans nonce possible.
 */
const CSP = ["object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'", 'upgrade-insecure-requests'].join('; ');

const CSP_REPORT_ONLY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://taap.it https://assets.calendly.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com",
  "img-src 'self' data: https://www.facebook.com https://cdn.prod.website-files.com https://assets.calendly.com",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://taap.it https://*.taap.it https://www.facebook.com https://connect.facebook.net https://calendly.com",
  "frame-src https://calendly.com https://www.google.com",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

const SECURITY_HEADERS = [
  { key: 'Content-Security-Policy', value: CSP },
  { key: 'Content-Security-Policy-Report-Only', value: CSP_REPORT_ONLY },
  // sans includeSubDomains : les sous-domaines (messagerie…) ne sont pas tous garantis en HTTPS
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), usb=(), browsing-topics=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
];

const nextConfig: NextConfig = {
  // URLs WordPress conservées à l'identique : /notre-agence/, /blog/mon-article/…
  trailingSlash: true,
  // Le « / » final et toutes les redirections sont gérés par src/proxy.ts, en un seul
  // saut 301 (Next ajouterait sinon un 308 avant chaque redirection).
  skipTrailingSlashRedirect: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  async headers() {
    return [{ source: '/:path*', headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
