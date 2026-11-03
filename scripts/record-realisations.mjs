#!/usr/bin/env node
/*
 * Vidéos téléphone des sites de la section « Nos réalisations » de la landing /appel-strategique/ (LpWorks.tsx) :
 * sur mobile, chaque site est montré par une courte vidéo muette en boucle de sa version téléphone qui défile, au
 * lieu du site en direct (lourd et saccadé sur téléphone). Les animations et vidéos de fond des sites y jouent.
 * - Chrome sans interface (Google Chrome installé sur le Mac), piloté par son protocole de débogage, en iPhone :
 *   390 × 585 px (2:3), écran ×2, tactile, navigateur Safari iOS → images de 780 × 1170.
 * - Statistiques et publicité bloquées : l'enregistrement ne fausse pas les chiffres des clients.
 * - Bandeaux cookies masqués (rien n'est accepté), barres de défilement cachées.
 * - Un premier passage met la page en cache (images, vidéos), puis elle est rechargée pour être filmée : les images
 *   s'affichent sans délai et les animations d'apparition se jouent pendant le défilement filmé.
 * - Film en temps réel (Page.startScreencast, chaque image datée par Chrome) : 1,5 s d'arrêt en haut de page,
 *   défilement doux (350 px/s, départ et arrêt progressifs), court arrêt final ; ramené à 30 images/s constantes.
 * - Encodage H.264 par AVFoundation (scripts/encode-video.swift) : ~1,1 Mbit/s, sans son, en-tête en début de
 *   fichier ; affiche (poster) WebP = première image de la vidéo.
 * Sorties : public/video/realisations/<projet>-mobile.mp4 et <projet>-mobile.webp
 *
 * Usage : node scripts/record-realisations.mjs [projet…]   (sans argument : les trois sites)
 */
import { execFileSync, spawn } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public/video/realisations');
const ENCODER = path.join(ROOT, 'scripts/encode-video.swift');
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const SITES = [
  { id: 'dronespec', url: 'https://dronespec.fr/' },
  { id: 'sunshine-resort', url: 'https://sunshine-resort.kameo-test.fr/' },
  { id: 'paris-sg-news', url: 'https://parissgnews.fr/' },
];

// Téléphone émulé : taille en pixels CSS, densité d'écran (la vidéo fait width × dpr sur height × dpr)
const PHONE = {
  width: 390, height: 585, dpr: 2,
  ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
};
// Déroulé, en millisecondes : attente après chargement, arrêt en haut, défilement (dont rampes de départ et
// d'arrêt), arrêt final ; vitesse de croisière en pixels CSS par seconde → 350 × (8 − 1,4) ≈ 2 300 px parcourus
const TIMING = { settle: 2500, hold: 1500, scroll: 8000, ramp: 1400, end: 500, speed: 350 };
const FPS = 30;
const KEY_INTERVAL = 150; // une image clé toutes les 5 s
const BITRATE = 1_100_000; // bit/s
const MAX_BYTES = 1_500_000; // au-delà, nouvel encodage à débit réduit
const JPEG_QUALITY = 92; // images envoyées par Chrome pendant le film
const POSTER_QUALITY = 80;

const BLOCKED = [
  '*googletagmanager.com*', '*google-analytics.com*', '*analytics.google.com*', '*doubleclick.net*',
  '*googleadservices.com*', '*googlesyndication.com*', '*google.com/pagead*', '*google.com/ccm*', '*facebook.net*',
  '*facebook.com/tr*', '*clarity.ms*', '*hotjar*', '*taap.it*', '*matomo*', '*plausible.io*', '*tiktok.com*',
  '*snap.licdn.com*', '*bat.bing.com*', '*cloudflareinsights.com*', '*/_vercel/insights/*',
  '*/_vercel/speed-insights/*', '*stats.wp.com*', '*pixel.wp.com*', '*wp-statistics*', '*koko-analytics*',
  '*/burst/v1/*',
];

const HIDE_CSS = `
#cmplz-cookiebanner-container, .cmplz-cookiebanner, .cmplz-soft-cookiewall, #cmplz-manage-consent, .cmplz-manage-consent,
#CybotCookiebotDialog, #onetrust-consent-sdk, .cky-consent-container, .cky-overlay, #tarteaucitronRoot,
#axeptio_overlay, #cookie-notice, #moove_gdpr_cookie_info_bar { display: none !important; }
html { scroll-behavior: auto !important; scrollbar-width: none !important; }
::-webkit-scrollbar { display: none !important; }
`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Chrome choisit un port libre (--remote-debugging-port=0) et l'écrit dans son dossier de profil : on se connecte
// ainsi à ce Chrome-là, jamais à un autre lancé en parallèle.
async function cdp(profile) {
  const file = path.join(profile, 'DevToolsActivePort');
  for (let i = 0; i < 100; i++) {
    const [port, browser] = existsSync(file) ? readFileSync(file, 'utf8').split('\n') : [];
    if (port && browser) {
      const ws = new WebSocket(`ws://127.0.0.1:${port.trim()}${browser.trim()}`);
      await new Promise((res, rej) => ((ws.onopen = res), (ws.onerror = rej)));
      let id = 0;
      const pending = new Map();
      const listeners = new Set();
      ws.onmessage = (ev) => {
        const m = JSON.parse(ev.data);
        if (m.id && pending.has(m.id)) {
          const p = pending.get(m.id);
          pending.delete(m.id);
          if (m.error) p.reject(new Error(`${p.method} : ${m.error.message}`));
          else p.resolve(m.result);
        } else for (const l of listeners) l(m);
      };
      const send = (method, params = {}, sessionId) =>
        new Promise((resolve, reject) => {
          const n = ++id;
          pending.set(n, { resolve, reject, method });
          ws.send(JSON.stringify({ id: n, method, params, sessionId }));
        });
      const on = (l) => (listeners.add(l), () => listeners.delete(l));
      const once = (method, sessionId, timeout) =>
        new Promise((resolve) => {
          const t = setTimeout(() => (off(), resolve(null)), timeout);
          const off = on((m) => {
            if (m.method === method && m.sessionId === sessionId) {
              clearTimeout(t);
              off();
              resolve(m.params);
            }
          });
        });
      return { ws, send, on, once };
    }
    await sleep(200);
  }
  throw new Error('Chrome ne répond pas');
}

// Nouvel onglet en iPhone, chargé avec l'adresse du site (erreur si le site ne répond pas : on ne filme pas une
// page d'erreur à la place de la vidéo existante)
async function open({ send, on, once }, url) {
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  const S = (m, p) => send(m, p, sessionId);
  await S('Page.enable');
  await S('Network.enable');
  await S('Network.setBlockedURLs', { urls: BLOCKED });
  await S('Network.setUserAgentOverride', { userAgent: PHONE.ua, platform: 'iPhone' });
  await S('Emulation.setDeviceMetricsOverride', { width: PHONE.width, height: PHONE.height, deviceScaleFactor: PHONE.dpr, mobile: true });
  await S('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  await S('Emulation.setFocusEmulationEnabled', { enabled: true });
  await S('Page.addScriptToEvaluateOnNewDocument', {
    source: `document.addEventListener('DOMContentLoaded', () => { const s = document.createElement('style'); s.textContent = ${JSON.stringify(HIDE_CSS)}; document.head.appendChild(s); });`,
  });
  await S('Page.bringToFront');
  const close = () => send('Target.closeTarget', { targetId }).catch(() => {});
  let status = 0;
  const off = on((m) => {
    if (m.method !== 'Network.responseReceived' || m.sessionId !== sessionId || m.params.type !== 'Document') return;
    status ||= m.params.response.status; // page principale : la première reçue
  });
  try {
    const loaded = once('Page.loadEventFired', sessionId, 45000);
    const { errorText } = await S('Page.navigate', { url });
    if (errorText) throw new Error(`${url} : ${errorText}`);
    await loaded;
    if (status >= 400) throw new Error(`${url} : erreur HTTP ${status}`);
  } catch (e) {
    await close();
    throw e;
  } finally {
    off();
  }
  const evaluate = async (expression) => {
    const r = await S('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (r.exceptionDetails) throw new Error(`script de page : ${r.exceptionDetails.exception?.description || r.exceptionDetails.text}`);
    return r.result.value;
  };
  return { sessionId, S, evaluate, close };
}

// Déroulé exécuté dans la page, image par image (requestAnimationFrame, horloge réelle) : arrêt en haut, défilement à
// vitesse de croisière avec départ et arrêt progressifs (rampes en cosinus), arrêt final. Rend l'heure du départ.
function timeline({ hold, scroll, ramp, end, speed }) {
  const max = Math.max(0, document.scrollingElement.scrollHeight - innerHeight);
  const D = scroll / 1000, R = ramp / 1000;
  let V = speed, L = V * (D - R);
  if (L > max) {
    // page trop courte : défilement plus lent
    L = max;
    V = L / (D - R);
  }
  const rampDist = (t) => V * (t / 2 - (R / (2 * Math.PI)) * Math.sin((Math.PI * t) / R));
  const y = (t) => (t <= 0 ? 0 : t >= D ? L : t < R ? rampDist(t) : t <= D - R ? V * (R / 2 + t - R) : L - rampDist(D - t));
  scrollTo(0, 0);
  return new Promise((resolve) =>
    requestAnimationFrame((t0) => {
      const step = (now) => {
        scrollTo(0, y((now - t0 - hold) / 1000));
        if (now - t0 < hold + scroll + end) requestAnimationFrame(step);
        else resolve({ start: performance.timeOrigin + t0, distance: Math.round(L), speed: Math.round(V), y: Math.round(scrollY) });
      };
      requestAnimationFrame(step);
    }),
  );
}

// 1er passage : page parcourue au-delà de la zone filmée, pour mettre images et vidéos en cache
async function warmUp(client, site) {
  const tab = await open(client, site.url);
  try {
    await sleep(TIMING.settle);
    const until = (TIMING.speed * (TIMING.scroll - TIMING.ramp)) / 1000 + 3 * PHONE.height;
    await tab.evaluate(`(async () => {
      for (let y = 0; y < ${until}; y += ${Math.round(PHONE.height * 0.6)}) { scrollTo(0, y); await new Promise(r => setTimeout(r, 250)); }
      await new Promise(r => setTimeout(r, 1500));
    })()`);
  } finally {
    await tab.close();
  }
}

// 2e passage, filmé : chaque image rendue par Chrome arrive avec l'heure de son affichage
async function film(client, site) {
  const tab = await open(client, site.url);
  const frames = [];
  const off = client.on((m) => {
    if (m.method !== 'Page.screencastFrame' || m.sessionId !== tab.sessionId) return;
    client.send('Page.screencastFrameAck', { sessionId: m.params.sessionId }, tab.sessionId).catch(() => {});
    frames.push({ ts: m.params.metadata.timestamp * 1000, jpeg: Buffer.from(m.params.data, 'base64') });
  });
  try {
    await sleep(TIMING.settle - 400);
    await tab.S('Page.startScreencast', {
      format: 'jpeg', quality: JPEG_QUALITY, maxWidth: PHONE.width * PHONE.dpr, maxHeight: PHONE.height * PHONE.dpr, everyNthFrame: 1,
    });
    await sleep(400); // première image reçue avant le départ
    const run = await tab.evaluate(`(${timeline})(${JSON.stringify(TIMING)})`);
    await tab.S('Page.stopScreencast');
    return { frames, run };
  } finally {
    off();
    await tab.close();
  }
}

// Cadence constante : l'image k de la vidéo est la dernière image affichée par Chrome à l'instant départ + k / FPS
// (une image qui reste à l'écran est répétée). La grille est calée sur le rythme d'affichage de Chrome pour ne pas
// hésiter entre deux images voisines.
function resample(frames, start) {
  const ts = frames.map((f) => f.ts);
  const gaps = ts.slice(1).map((t, i) => t - ts[i]).sort((a, b) => a - b);
  const period = gaps[Math.floor(gaps.length / 2)] || 1000 / 60;
  let sx = 0, sy = 0;
  for (const t of ts) {
    const a = (2 * Math.PI * (t - start)) / period;
    sx += Math.cos(a);
    sy += Math.sin(a);
  }
  const phase = (((Math.atan2(sy, sx) / (2 * Math.PI)) * period) % period + period) % period;
  const total = TIMING.hold + TIMING.scroll + TIMING.end;
  const picks = [];
  let j = 0;
  for (let k = 0; k < Math.round((total / 1000) * FPS); k++) {
    const t = start + phase + (k * 1000) / FPS + period / 2;
    while (j + 1 < frames.length && frames[j + 1].ts <= t) j++;
    picks.push(j);
  }
  return picks;
}

async function record(client, site, work, encoder) {
  await warmUp(client, site);
  const { frames, run } = await film(client, site);
  if (frames.length < 2 || frames[0].ts > run.start) throw new Error(`${site.id} : images manquantes au départ du film`);
  const picks = resample(frames, run.start);

  const dir = path.join(work, site.id);
  mkdirSync(dir, { recursive: true });
  const used = [...new Set(picks)];
  for (const i of used) writeFileSync(path.join(dir, `${i}.jpg`), frames[i].jpeg);
  const list = path.join(dir, 'liste.txt');
  writeFileSync(list, picks.map((i) => path.join(dir, `${i}.jpg`)).join('\n') + '\n');

  const mp4 = path.join(dir, 'video.mp4');
  let bitrate = BITRATE;
  for (let attempt = 1; ; attempt++) {
    execFileSync(encoder, [list, mp4, String(bitrate), String(FPS), String(KEY_INTERVAL)], { stdio: ['ignore', 'ignore', 'inherit'] });
    const size = statSync(mp4).size;
    if (size <= MAX_BYTES) break;
    if (attempt === 3) {
      console.warn(`${site.id} : vidéo de ${Math.round(size / 1024)} Ko, au-dessus de la cible malgré la baisse du débit`);
      break;
    }
    bitrate = Math.floor((bitrate * MAX_BYTES * 0.95) / size);
  }
  const video = path.join(OUT_DIR, `${site.id}-mobile.mp4`);
  const poster = path.join(OUT_DIR, `${site.id}-mobile.webp`);
  copyFileSync(mp4, video);
  await sharp(frames[picks[0]].jpeg).webp({ quality: POSTER_QUALITY, effort: 6 }).toFile(poster);

  const ko = (f) => `${Math.round(statSync(f).size / 1024)} Ko`;
  console.log(
    `${site.id} : ${(picks.length / FPS).toFixed(1)} s, ${picks.length} images (${used.length} différentes, ${frames.length} reçues), ` +
      `défilement ${run.distance} px à ${run.speed} px/s, ${Math.round(bitrate / 1000)} kbit/s → vidéo ${ko(video)}, affiche ${ko(poster)}`,
  );
}

const wanted = process.argv.slice(2);
const unknown = wanted.filter((id) => !SITES.some((s) => s.id === id));
if (unknown.length) {
  console.error(`Projet inconnu : ${unknown.join(', ')} (au choix : ${SITES.map((s) => s.id).join(', ')})`);
  process.exit(1);
}
const sites = wanted.length ? SITES.filter((s) => wanted.includes(s.id)) : SITES;

mkdirSync(OUT_DIR, { recursive: true });
const work = mkdtempSync(path.join(tmpdir(), 'kameo-record-'));
const profile = path.join(work, 'chrome');
let chrome;
try {
  // encodeur compilé une fois (plus rapide que l'interpréteur swift à chaque vidéo)
  const encoder = path.join(work, 'encode-video');
  execFileSync('swiftc', ['-O', ENCODER, '-o', encoder], { stdio: ['ignore', 'ignore', 'inherit'] });
  chrome = spawn(
    CHROME,
    [
      '--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`, '--no-first-run',
      '--no-default-browser-check', '--hide-scrollbars', '--mute-audio', '--disable-extensions',
      // fenêtre à la taille du téléphone et vraie densité ×2 : le film sort directement en 780 × 1170
      `--window-size=${PHONE.width},${PHONE.height}`, `--force-device-scale-factor=${PHONE.dpr}`, 'about:blank',
    ],
    { stdio: 'ignore' },
  );
  chrome.on('error', (e) => console.error(`Chrome n'a pas démarré : ${e.message}`));
  const client = await cdp(profile);
  for (const site of sites) {
    try {
      await record(client, site, work, encoder);
    } catch (e) {
      // un site en panne n'empêche pas les autres ; ses fichiers existants restent en place
      console.error(`${site.id} : échec, fichiers existants conservés — ${e.message}`);
      process.exitCode = 1;
    }
  }
  client.ws.close();
} finally {
  if (chrome) {
    const exited = new Promise((r) => (chrome.exitCode !== null || chrome.signalCode !== null ? r() : chrome.once('exit', r)));
    chrome.kill();
    await Promise.race([exited, sleep(5000)]);
  }
  rmSync(work, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
}
