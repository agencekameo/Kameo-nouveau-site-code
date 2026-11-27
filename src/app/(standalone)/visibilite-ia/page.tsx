import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SiteEffects from '@/components/SiteEffects';
import CalendlyModal from '@/components/CalendlyModal';
import ClarityTracker from '@/components/consent/ClarityTracker';
import TagManager from '@/components/consent/TagManager';
import { fr } from '@/components/geo/GeoBlocks';
import WhatsAppButton from '@/components/landing/WhatsAppButton';
import ViEffects from '@/components/landing-geo/ViEffects';
import { GEO_PROMO, euros, plansGeo, prixDuJour, promoGeoActive } from '@/content/geo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import Body, { MESSAGE_WA } from './Body';
import css from './styles';

/*
 * Landing page Ads « visibilité IA » : promotion de l'accompagnement GEO (fond blanc), noindex, hors sitemap.
 * Même socle que /appel-strategique/ : GTM (pixel Meta, ClicCalendly, Schedule sur /rdv-confirme/), Clarity,
 * consentement, fenêtre Calendly (ouverture automatique après #equipe), bouton WhatsApp (sans bulle).
 */
const PATH = '/visibilite-ia/';
const TITLE = 'Que disent ChatGPT et les IA de votre entreprise ? | Kameo';

/*
 * Prix et offre suivent la date : page régénérée au plus toutes les minutes, comme le blog et llms.txt, qui
 * affichent aussi l'offre. Une page servie depuis le cache après l'échéance bascule seule côté client
 * (Countdown : [data-vi-promo] masqués, [data-vi-nopromo] affichés).
 */
export const revalidate = 60;

export function generateMetadata(): Metadata {
  const [essentiel] = plansGeo();
  const base = 'Que disent ChatGPT, Gemini, Perplexity et Claude de votre entreprise ? Diagnostic gratuit de 30 min en visio.';
  const description = promoGeoActive()
    ? `${base} ${GEO_PROMO.nom} : accompagnement GEO dès ${euros(prixDuJour(essentiel))} HT/mois pour toute signature jusqu’au ${GEO_PROMO.finTexte}.`
    : `${base} Accompagnement GEO à prix publics, dès ${euros(prixDuJour(essentiel))} HT/mois.`;
  return pageMetadata({ path: PATH, title: TITLE, description: fr(description).replace(/(\d) (?=\d{3}\b|€)/g, '$1 '), noindex: true });
}

export default function Page() {
  const offre = promoGeoActive();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <TagManager />
      <ClarityTracker />
      <Body />
      <JsonLd data={[...themeSchemas({ path: PATH }), websiteGraph({ path: PATH, title: TITLE })]} />
      <ViEffects offre={offre} />
      {/* Ouverture automatique une fois les prix et l'équipe dépassés (une fois par visite) */}
      <CalendlyModal
        label="Réserver votre diagnostic gratuit"
        utm={{ utm_source: 'landing', utm_campaign: 'geo' }}
        autoOpenAfter="#equipe"
        notice={
          <>
            Voyons ensemble ce que les IA disent de vous. C’est <strong>gratuit</strong>.
          </>
        }
      />
      <WhatsAppButton message={MESSAGE_WA} bubble={false} />
      <SiteEffects />
    </>
  );
}
