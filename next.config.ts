import type { NextConfig } from 'next';

/*
 * En-têtes de sécurité.
 *
 * Origines tierces réellement utilisées par le site :
 *  - taap.it                    : tracker de liens (toutes les pages)
 *  - assets.calendly.com        : widget.js et widget.css (popup de rendez-vous, badge mobile)
 *  - calendly.com               : iframe de prise de rendez-vous
 *  - www.googletagmanager.com   : Google Tag Manager (landing page, confirmation), après consentement
 *  - *.clarity.ms, c.bing.com   : Microsoft Clarity (landing page), après consentement « Mesure d'audience »
 *  - connect.facebook.net       : Meta Pixel, chargé par Google Tag Manager
 *  - www.facebook.com           : pixel <noscript> et envoi des événements
 *  - www.google.com             : carte Google Maps (contact, agence WordPress Paris)
 *  - fonts.googleapis.com / fonts.gstatic.com : police de /rdv-confirme/
 *  - cdn.prod.website-files.com : logo Calendly de l'encart des articles
 *  - www.lafabriquedunet.fr     : badge d'avis du pied de page (script, sans cookie ni requête)
 *  - outilblog.nexus-games.fr   : images des articles de l'outil de rédaction « Blog »
 *  - YouTube (nocookie), Vimeo  : vidéos éventuellement intégrées à ces articles
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
  "script-src 'self' 'unsafe-inline' https://taap.it https://assets.calendly.com https://connect.facebook.net https://www.lafabriquedunet.fr https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms",
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com",
  "img-src 'self' data: https://www.facebook.com https://cdn.prod.website-files.com https://assets.calendly.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com https://outilblog.nexus-games.fr",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://taap.it https://*.taap.it https://www.facebook.com https://connect.facebook.net https://calendly.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com",
  "frame-src https://calendly.com https://www.google.com https://www.youtube-nocookie.com https://www.youtube.com https://player.vimeo.com",
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
  // Image Docker (Dockerfile) : serveur autonome, sans node_modules complet. `npm start` reste inchangé.
  ...(process.env.NEXT_OUTPUT_STANDALONE === '1' ? { output: 'standalone' as const } : {}),
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
