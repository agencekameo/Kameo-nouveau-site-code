import JsonLd from '@/components/JsonLd';
import SiteEffects from '@/components/SiteEffects';
import ClarityTracker from '@/components/consent/ClarityTracker';
import TagManager from '@/components/consent/TagManager';
import LandingEffects from '@/components/landing/LandingEffects';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import Body from './Body';
import { pageSchemas } from './schema';
import css from './styles';

/* Landing page Ads « appel stratégique » (page-lp-rdv-v2.php), noindex. */
export const LP_TITLE = 'Réservez votre appel stratégique | Kameo';
export const LP_DESCRIPTION =
  'Planifiez un appel découverte gratuit de 30 min avec Kameo. Audit express, objectifs et leviers de croissance pour votre site et votre acquisition.';

export default function LandingPage({ path }: { path: string }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <TagManager />
      <ClarityTracker />
      <Body />
      <JsonLd data={[...themeSchemas({ path }), ...pageSchemas, websiteGraph({ path, title: LP_TITLE })]} />
      <LandingEffects />
      <SiteEffects />
    </>
  );
}
