import type { Metadata, Viewport } from 'next';
import ReactDOM from 'react-dom';
import '@/styles/fonts.css';
import '@/styles/main.css';
import '@/styles/consent.css';
import AudienceTracker from '@/components/consent/AudienceTracker';
import GoogleAnalytics from '@/components/consent/GoogleAnalytics';
import CookieBanner from '@/components/consent/CookieBanner';
import { GEO, SITE_ICON, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: 'Kameo, Agence web Paris' }],
  alternates: { types: { 'application/rss+xml': [{ url: '/feed/', title: 'Blog Kameo' }] } },
  // Icône du site (réglage WordPress « Identité du site », hors thème)
  icons: {
    icon: [
      { url: `${SITE_ICON}-32x32.png`, sizes: '32x32' },
      { url: `${SITE_ICON}-192x192.png`, sizes: '192x192' },
    ],
    apple: `${SITE_ICON}-180x180.png`,
  },
  other: {
    'msapplication-TileImage': `${SITE_URL}${SITE_ICON}-270x270.png`,
    'geo.region': 'FR-75',
    'geo.placename': 'Paris',
    'geo.position': `${GEO.lat};${GEO.lng}`,
    ICBM: `${GEO.lat}, ${GEO.lng}`,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F1115',
};

/* Polices de texte préchargées (section 12 de functions.php). */
const PRELOAD_FONTS = ['Satoshi-500.woff2', 'Satoshi-700.woff2', 'Satoshi-900.woff2', 'UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2'];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  for (const f of PRELOAD_FONTS) ReactDOM.preload(`/fonts/${f}`, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
  return (
    <html lang="fr-FR">
      <body>
        {children}
        {/* traceurs chargés seulement après consentement (taap.it et Google Analytics ici, pixel Meta sur la landing) */}
        <AudienceTracker />
        <GoogleAnalytics />
        <CookieBanner />
      </body>
    </html>
  );
}
