import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import MetaPixel from '@/components/landing/MetaPixel';
import { themeSchemas } from '@/lib/schema';
import { abs } from '@/lib/site';
import Body from './Body';
import css from './styles';

/* Page de confirmation après réservation Calendly (page-rdv-confirme.php). */
export const metadata: Metadata = {
  title: { absolute: 'Rendez-vous confirmé · Kameo' },
  robots: { index: false, follow: false },
  alternates: { canonical: abs('/rdv-confirme/') },
};

export default function RdvConfirmePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" precedence="default" />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <MetaPixel />
      <Body />
      <JsonLd data={themeSchemas({ path: '/rdv-confirme/' })} />
    </>
  );
}
