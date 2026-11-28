import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SiteEffects from '@/components/SiteEffects';
import CalendlyModal from '@/components/CalendlyModal';
import ClarityTracker from '@/components/consent/ClarityTracker';
import TagManager from '@/components/consent/TagManager';
import { fr } from '@/components/geo/GeoBlocks';
import ViEffects from '@/components/landing-geo/ViEffects';
import { euros, plansGeo, promoLandingActive } from '@/content/geo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import Body from './Body';
import css from './styles';
import type { Variante } from './variantes';

/*
 * Landing page Ads « visibilité IA » : promotion de l'accompagnement GEO (fond blanc), noindex, hors sitemap, en trois
 * versions (variantes.ts) : /visibilite-ia/ (générale), /visibilite-ia/auto-ecole/ et /visibilite-ia/ecole/.
 * Même socle que /appel-strategique/ : GTM (pixel Meta, ClicCalendly, Schedule sur /rdv-confirme/), Clarity,
 * consentement, fenêtre Calendly (au clic seulement) ; bouton flottant Calendly dans Body.tsx (plus de WhatsApp flottant).
 * Les pages qui l'affichent exportent revalidate = 60 : prix et offre suivent la date (voir page.tsx).
 */

const titre = (v: Variante) => `Que disent ChatGPT et les IA ${v.deVotre} ? | Kameo`;

/*
 * Description (résumé du lien lu par Facebook et Instagram pour l'aperçu des pubs) : toujours le prix public, jamais
 * l'offre du moment. Meta lit cet aperçu quand les pubs sont créées et peut le garder après la fin de l'offre ; les pubs
 * de la campagne GEO ne doivent citer ni « Black Friday » ni ses prix (relecture du plan, 27/11/2026).
 */
export function metadataLanding(v: Variante): Metadata {
  const [essentiel] = plansGeo();
  const description = `Que disent ChatGPT, Gemini, Perplexity et Claude ${v.deVotre} ? Diagnostic gratuit de 30 min en visio. Accompagnement GEO à prix publics, dès ${euros(essentiel.price)} HT/mois.`;
  return pageMetadata({ path: v.path, title: titre(v), description: fr(description).replace(/(\d) (?=\d{3}\b|€)/g, '$1 '), noindex: true });
}

export default function Landing({ v }: { v: Variante }) {
  const offre = promoLandingActive();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <TagManager />
      <ClarityTracker />
      <Body v={v} />
      <JsonLd data={[...themeSchemas({ path: v.path }), websiteGraph({ path: v.path, title: titre(v) })]} />
      <ViEffects offre={offre} metier={v.metier ?? 'general'} />
      {/* Fenêtre Calendly des boutons de la page. Plus d'ouverture automatique depuis le 28/11/2026 : la dernière section
          intègre Calendly directement (CalendlyInline), la fenêtre l'aurait recouverte. */}
      <CalendlyModal
        label="Réserver votre diagnostic gratuit"
        utm={{ utm_source: 'landing', utm_campaign: 'geo', ...(v.metier && { utm_content: v.metier }) }}
        notice={
          <>
            Voyons ensemble ce que les IA disent {v.deVous}. C’est <strong>gratuit</strong>.
          </>
        }
      />
      <SiteEffects />
    </>
  );
}
