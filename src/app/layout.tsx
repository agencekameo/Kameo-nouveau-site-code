import type { Metadata, Viewport } from 'next';
import '@/styles/fonts.css';
import '@/styles/main.css';
import { GEO, SITE_NAME, SITE_URL, TRACKER } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: 'Kameo, Agence web Paris' }],
  alternates: { types: { 'application/rss+xml': [{ url: '/feed/', title: 'Blog Kameo' }] } },
  other: {
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
  return (
    <html lang="fr-FR">
      <head>
        <link rel="preconnect" href="https://taap.it" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://taap.it" />
        <script
          async
          src={TRACKER.src}
          data-project={TRACKER.project}
          data-track-outbound="true"
          data-track-forms="true"
        />
        {PRELOAD_FONTS.map((f) => (
          <link key={f} rel="preload" href={`/fonts/${f}`} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
