import { readFile } from 'node:fs/promises';
import { NextResponse } from 'next/server';
import { FICHIER_ETAT } from '@/lib/indexnow';

/* Dernier envoi IndexNow fait au démarrage du serveur (src/lib/indexnow.ts) : pour vérifier qu'une
   mise en ligne a bien prévenu Bing. Seulement des adresses publiques du site, rien de secret. */
export const dynamic = 'force-dynamic';

const ENTETES = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' };

export async function GET() {
  try {
    return NextResponse.json(JSON.parse(await readFile(FICHIER_ETAT, 'utf8')), { headers: ENTETES });
  } catch {
    return NextResponse.json({ etat: 'aucun envoi depuis le démarrage du serveur' }, { headers: ENTETES });
  }
}
