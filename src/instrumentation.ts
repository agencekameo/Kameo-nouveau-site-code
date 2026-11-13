/* Démarrage du serveur : après chaque mise en ligne, IndexNow prévient Bing des pages modifiées
   (voir src/lib/indexnow.ts). Rien en développement ni pendant la construction du site. */
export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  if (process.env.NODE_ENV !== 'production' || process.env.NEXT_PHASE === 'phase-production-build') return;
  const { indexNowAuDemarrage } = await import('./lib/indexnow');
  indexNowAuDemarrage();
}
