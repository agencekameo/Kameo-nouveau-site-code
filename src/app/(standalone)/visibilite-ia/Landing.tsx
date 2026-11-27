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
import Body from './Body';
import css from './styles';
import type { Variante } from './variantes';

/*
 * Landing page Ads « visibilité IA » : promotion de l'accompagnement GEO (fond blanc), noindex, hors sitemap, en trois
 * versions (variantes.ts) : /visibilite-ia/ (générale), /visibilite-ia/auto-ecole/ et /visibilite-ia/ecole/.
 * Même socle que /appel-strategique/ : GTM (pixel Meta, ClicCalendly, Schedule sur /rdv-confirme/), Clarity,
 * consentement, fenêtre Calendly (ouverture automatique après #equipe), bouton WhatsApp (sans bulle).
 * Les pages qui l'affichent exportent revalidate = 60 : prix et offre suivent la date (voir page.tsx).
 */

const titre = (v: Variante) => `Que disent ChatGPT et les IA ${v.deVotre} ? | Kameo`;

export function metadataLanding(v: Variante): Metadata {
  const [essentiel] = plansGeo();
  const base = `Que disent ChatGPT, Gemini, Perplexity et Claude ${v.deVotre} ? Diagnostic gratuit de 30 min en visio.`;
  const description = promoGeoActive()
    ? `${base} ${GEO_PROMO.nom} : accompagnement GEO dès ${euros(prixDuJour(essentiel))} HT/mois pour toute signature jusqu’au ${GEO_PROMO.finTexte}.`
    : `${base} Accompagnement GEO à prix publics, dès ${euros(prixDuJour(essentiel))} HT/mois.`;
  return pageMetadata({ path: v.path, title: titre(v), description: fr(description).replace(/(\d) (?=\d{3}\b|€)/g, '$1 '), noindex: true });
}

export default function Landing({ v }: { v: Variante }) {
  const offre = promoGeoActive();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <TagManager />
      <ClarityTracker />
      <Body v={v} />
      <JsonLd data={[...themeSchemas({ path: v.path }), websiteGraph({ path: v.path, title: titre(v) })]} />
      <ViEffects offre={offre} metier={v.metier ?? 'general'} />
      {/* Ouverture automatique une fois les prix et l'équipe dépassés (une fois par visite) */}
      <CalendlyModal
        label="Réserver votre diagnostic gratuit"
        utm={{ utm_source: 'landing', utm_campaign: 'geo', ...(v.metier && { utm_content: v.metier }) }}
        autoOpenAfter="#equipe"
        notice={
          <>
            Voyons ensemble ce que les IA disent {v.deVous}. C’est <strong>gratuit</strong>.
          </>
        }
      />
      <WhatsAppButton message={v.messageWa} bubble={false} />
      <SiteEffects />
    </>
  );
}
