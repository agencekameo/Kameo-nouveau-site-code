#!/usr/bin/env node
/*
 * IndexNow : prévient Bing (et Yandex, Seznam, Naver…) que des pages du site ont changé, pour qu'ils
 * les relisent sans attendre leur passage habituel. Bing alimente Copilot et une partie des réponses
 * de ChatGPT : c'est le premier levier pour que les IA voient vite les pages à jour.
 *
 * Clé : public/0f487ec7851372b75e51580284a6fe01.txt, servie à la racine du site.
 * À lancer après une mise en ligne (pas pendant : les moteurs liraient l'ancienne version) :
 *   npm run indexnow                    toutes les adresses des sitemaps
 *   npm run indexnow -- --jours 3       celles modifiées ces 3 derniers jours (balise lastmod)
 *   npm run indexnow -- /agence-geo/    seulement les adresses données
 */
const SITE = 'https://agence-kameo.fr';
const KEY = '0f487ec7851372b75e51580284a6fe01';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const i = args.indexOf('--jours');
const jours = i >= 0 ? Number(args[i + 1]) : null;
const chemins = args.filter((a, n) => a.startsWith('/') && args[n - 1] !== '--jours');

const texte = async (url) => {
  const res = await fetch(url, { headers: { 'User-Agent': 'Kameo-IndexNow/1.0' } });
  if (!res.ok) throw new Error(`${url} : HTTP ${res.status}`);
  return res.text();
};
const balises = (xml, nom) => [...xml.matchAll(new RegExp(`<${nom}>([\\s\\S]*?)</${nom}>`, 'g'))].map((m) => m[1].trim());

async function adressesDesSitemaps() {
  const index = await texte(`${SITE}/sitemap_index.xml`);
  const sitemaps = balises(index, 'loc');
  const urls = [];
  for (const s of sitemaps) {
    const xml = await texte(s);
    for (const bloc of balises(xml, 'url')) {
      const loc = balises(bloc, 'loc')[0];
      const lastmod = balises(bloc, 'lastmod')[0];
      if (loc) urls.push({ loc, lastmod });
    }
  }
  return urls;
}

let urlList;
if (chemins.length) {
  urlList = chemins.map((c) => SITE + c);
} else {
  const toutes = await adressesDesSitemaps();
  const limite = jours ? Date.now() - jours * 86_400_000 : null;
  urlList = [...new Set(toutes.filter((u) => !limite || (u.lastmod && Date.parse(u.lastmod) >= limite)).map((u) => u.loc))];
}

if (!urlList.length) {
  console.log('Aucune adresse à envoyer.');
  process.exit(0);
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urlList.slice(0, 10_000) }),
});
// 200 : reçu ; 202 : reçu, clé en cours de vérification ; 4xx : refus (clé, format, trop de requêtes).
console.log(`IndexNow : ${urlList.length} adresse(s) envoyée(s), réponse HTTP ${res.status}${res.ok ? ' (acceptée)' : ''}`);
if (!res.ok) {
  console.log(await res.text());
  process.exit(1);
}
