import type { Metadata } from 'next';
import Landing, { metadataLanding } from './Landing';
import { GENERAL } from './variantes';

/*
 * Landing page Ads « visibilité IA », version générale. Les versions par cible (auto-écoles, écoles) sont sous
 * /visibilite-ia/[metier]/ ; rendu commun dans Landing.tsx, textes dans variantes.ts.
 */

/*
 * Prix et offre suivent la date : page régénérée au plus toutes les minutes, comme le blog et llms.txt, qui
 * affichent aussi l'offre. Une page servie depuis le cache après l'échéance bascule seule côté client
 * (Countdown : [data-vi-promo] masqués, [data-vi-nopromo] affichés).
 */
export const revalidate = 60;

export function generateMetadata(): Metadata {
  return metadataLanding(GENERAL);
}

export default function Page() {
  return <Landing v={GENERAL} />;
}
