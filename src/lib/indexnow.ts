import { readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { SITE_URL } from '@/lib/site';

/*
 * IndexNow automatique : à chaque démarrage du serveur, donc après chaque mise en ligne, le site
 * prévient Bing (et Yandex, Seznam, Naver…) des pages modifiées ces 3 derniers jours, d'après la
 * balise « lastmod » des sitemaps (dates de src/content/pages.ts et des articles). Bing alimente
 * Copilot et une partie des réponses de ChatGPT.
 * - Une seule fois par version (BUILD_ID) : un simple redémarrage du conteneur ne renvoie rien.
 * - Rien en développement ni pendant la construction ; INDEXNOW=off le coupe ; INDEXNOW_ESSAI=1
 *   prépare la liste sans rien envoyer (tests en local).
 * - Le dernier envoi se lit sur /api/indexnow/, pour vérifier une mise en ligne.
 * Envoi à la main si besoin : scripts/indexnow.mjs (npm run indexnow).
 */
export const INDEXNOW_KEY = '0f487ec7851372b75e51580284a6fe01';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const JOURS = 3;
/** Laisse au nouveau serveur le temps de répondre au public avant de prévenir les moteurs. */
const DELAI_MS = 60_000;
export const FICHIER_ETAT = path.join(tmpdir(), 'kameo-indexnow.json');

export type EtatIndexNow = {
  date: string;
  version: string;
  adresses: string[];
  /** Code HTTP d'IndexNow (200 ou 202 : accepté), ou ce qui s'est passé à la place. */
  statut: number | 'essai' | 'rien à envoyer' | 'erreur';
  detail?: string;
};

const balises = (xml: string, nom: string) =>
  [...xml.matchAll(new RegExp(`<${nom}>([\\s\\S]*?)</${nom}>`, 'g'))].map((m) => m[1].trim());

async function version(): Promise<string> {
  try {
    return (await readFile(path.join(process.cwd(), '.next', 'BUILD_ID'), 'utf8')).trim();
  } catch {
    return 'inconnue';
  }
}

/** Pages des sitemaps modifiées ces derniers jours, lues sur le serveur lui-même (sans passer par Internet). */
async function adressesRecentes(): Promise<string[]> {
  const local = `http://127.0.0.1:${process.env.PORT || 3000}`;
  const lire = async (url: string) => {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`${url} : HTTP ${res.status}`);
    return res.text();
  };
  const limite = Date.now() - JOURS * 86_400_000;
  const adresses = new Set<string>();
  for (const sitemap of balises(await lire(`${local}/sitemap_index.xml`), 'loc')) {
    for (const bloc of balises(await lire(sitemap.replace(SITE_URL, local)), 'url')) {
      const loc = balises(bloc, 'loc')[0];
      const lastmod = balises(bloc, 'lastmod')[0];
      if (loc && lastmod && Date.parse(lastmod) >= limite) adresses.add(loc);
    }
  }
  return [...adresses];
}

async function envoyer(): Promise<void> {
  const v = await version();
  // Déjà fait pour cette version (redémarrage du même conteneur) : rien à renvoyer.
  try {
    const precedent = JSON.parse(await readFile(FICHIER_ETAT, 'utf8')) as EtatIndexNow;
    if (v !== 'inconnue' && precedent.version === v && precedent.statut !== 'erreur') return;
  } catch {
    // premier envoi de ce conteneur
  }
  const etat: EtatIndexNow = { date: new Date().toISOString(), version: v, adresses: [], statut: 'rien à envoyer' };
  try {
    etat.adresses = await adressesRecentes();
    if (etat.adresses.length && process.env.INDEXNOW_ESSAI === '1') {
      etat.statut = 'essai';
    } else if (etat.adresses.length) {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          host: new URL(SITE_URL).host,
          key: INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
          urlList: etat.adresses.slice(0, 10_000),
        }),
      });
      etat.statut = res.status;
      if (!res.ok) etat.detail = (await res.text()).slice(0, 300);
    }
  } catch (err) {
    etat.statut = 'erreur';
    etat.detail = String(err).slice(0, 300);
  }
  await writeFile(FICHIER_ETAT, JSON.stringify(etat, null, 2)).catch(() => {});
  console.log(`[IndexNow] ${etat.adresses.length} adresse(s), statut ${etat.statut}${etat.detail ? ` : ${etat.detail}` : ''}`);
}

/** Appelé au démarrage du serveur par src/instrumentation.ts ; l'envoi part une minute plus tard. */
export function indexNowAuDemarrage(): void {
  if (process.env.INDEXNOW === 'off') return;
  setTimeout(() => {
    void envoyer();
  }, DELAI_MS);
}
