import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import TagManager from '@/components/consent/TagManager';
import { themeSchemas } from '@/lib/schema';
import { abs } from '@/lib/site';
import Body from './Body';
import css from './styles';

/* Page de confirmation après réservation Calendly (page-rdv-confirme.php). */

/* Calendly peut ajouter le nom et l'e-mail de l'invité à l'adresse de redirection (option « Passer les
   détails de l'événement à votre page redirigée ») : retirés de l'URL dès l'analyse du HTML, avant
   tout traceur (pixel Meta via GTM, mesure d'audience), qui l'enverraient à des tiers. */
const STRIP_QUERY = "if(location.search)history.replaceState(history.state,'',location.pathname+location.hash)";
export const metadata: Metadata = {
  title: { absolute: 'Rendez-vous confirmé · Kameo' },
  robots: { index: false, follow: false },
  alternates: { canonical: abs('/rdv-confirme/') },
};

export default function RdvConfirmePage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: STRIP_QUERY }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" precedence="default" />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <TagManager />
      <Body />
      <JsonLd data={themeSchemas({ path: '/rdv-confirme/' })} />
    </>
  );
}
