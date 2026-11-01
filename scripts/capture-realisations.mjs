#!/usr/bin/env node
/*
 * Captures des sites de la section « Nos réalisations » de la landing /appel-strategique/ (LpWorks.tsx),
 * en haute définition : version ordinateur (1280 px de large, écran Retina) et téléphone (390 px, ×3).
 * - Sites affichés en direct (live) : le haut de la page seulement, montré le temps du chargement.
 * - Sites qui refusent l'affichage dans un autre site (live: false) : page entière, qu'on fait défiler.
 * Découpe en tranches WebP dans public/images/landing_page/realisations/<projet>/ ; la liste des tranches
 * est écrite dans src/components/landing/lpWorks.shots.ts.
 *
 * - Chrome sans interface (Google Chrome installé sur le Mac), piloté par son protocole de débogage.
 * - Statistiques et publicité bloquées : la capture ne fausse pas les chiffres des clients.
 * - Bandeaux cookies masqués (rien n'est accepté), page parcourue avant la capture pour charger les
 *   images et déclencher les animations d'apparition.
 *
 * Usage : node scripts/capture-realisations.mjs
 */
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public/images/landing_page/realisations');
const MANIFEST = path.join(ROOT, 'src/components/landing/lpWorks.shots.ts');
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;

const SITES = [
  { id: 'dronespec', url: 'https://dronespec.fr/', live: true },
  { id: 'sunshine-resort', url: 'https://sunshine-resort.kameo-test.fr/', live: true },
  { id: 'paris-sg-news', url: 'https://parissgnews.fr/', live: true },
];

// tile : hauteur d'une tranche en pixels CSS ; out : largeur des images WebP ; max : hauteur capturée au plus
const DEVICES = {
  desktop: {
    width: 1280, height: 860, dpr: 2, mobile: false, out: 2560, tile: 1400, max: 12000, quality: 80,
    ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  },
  mobile: {
    width: 390, height: 844, dpr: 3, mobile: true, out: 1170, tile: 1100, max: 13000, quality: 80,
    ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1',
  },
};

const BLOCKED = [
  '*googletagmanager.com*', '*google-analytics.com*', '*analytics.google.com*', '*doubleclick.net*',
  '*googleadservices.com*', '*googlesyndication.com*', '*facebook.net*', '*facebook.com/tr*', '*clarity.ms*',
  '*hotjar*', '*taap.it*', '*matomo*', '*plausible.io*', '*tiktok.com*', '*snap.licdn.com*', '*bat.bing.com*',
];

const HIDE_CSS = `
#cmplz-cookiebanner-container, .cmplz-cookiebanner, .cmplz-soft-cookiewall, #cmplz-manage-consent, .cmplz-manage-consent,
#CybotCookiebotDialog, #onetrust-consent-sdk, .cky-consent-container, .cky-overlay, #tarteaucitronRoot,
#axeptio_overlay, #cookie-notice, #moove_gdpr_cookie_info_bar { display: none !important; }
html { scroll-behavior: auto !important; }
`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function cdp() {
  for (let i = 0; i < 50; i++) {
    try {
      const v = await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json();
      const ws = new WebSocket(v.webSocketDebuggerUrl);
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
      const once = (method, sessionId, timeout) =>
        new Promise((resolve) => {
          const t = setTimeout(() => (listeners.delete(l), resolve(null)), timeout);
          const l = (m) => {
            if (m.method === method && m.sessionId === sessionId) {
              clearTimeout(t);
              listeners.delete(l);
              resolve(m.params);
            }
          };
          listeners.add(l);
        });
      return { ws, send, once };
    } catch {
      await sleep(200);
    }
  }
  throw new Error('Chrome ne répond pas');
}

async function capture({ send, once }, site, name, d) {
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  const S = (m, p) => send(m, p, sessionId);
  await S('Page.enable');
  await S('Network.enable');
  await S('Network.setBlockedURLs', { urls: BLOCKED });
  await S('Network.setUserAgentOverride', { userAgent: d.ua });
  await S('Emulation.setDeviceMetricsOverride', { width: d.width, height: d.height, deviceScaleFactor: d.dpr, mobile: d.mobile });
  if (d.mobile) await S('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  await S('Page.addScriptToEvaluateOnNewDocument', {
    source: `document.addEventListener('DOMContentLoaded', () => { const s = document.createElement('style'); s.textContent = ${JSON.stringify(HIDE_CSS)}; document.head.appendChild(s); });`,
  });
  const loaded = once('Page.loadEventFired', sessionId, 45000);
  await S('Page.navigate', { url: site.url });
  await loaded;
  await sleep(2500);
  // parcours de la page : images différées et animations d'apparition
  const { result } = await S('Runtime.evaluate', {
    awaitPromise: true,
    returnByValue: true,
    expression: `(async () => {
      const H = () => Math.max(document.documentElement.scrollHeight, document.body ? document.body.scrollHeight : 0);
      for (let y = 0; y < Math.min(H(), ${d.max}); y += Math.round(innerHeight * 0.6)) { scrollTo(0, y); await new Promise(r => setTimeout(r, 260)); }
      scrollTo(0, Math.min(H(), ${d.max})); await new Promise(r => setTimeout(r, 1500));
      scrollTo(0, 0); await new Promise(r => setTimeout(r, 2000));
      return H();
    })()`,
  });
  const full = result.value;
  // site en direct : seulement le haut de la page (une tranche)
  const height = Math.min(full, site.live ? d.tile : d.max);

  // Grandes prises (les animations d'apparition y sont jouées, la photo du haut y est rendue), chacune sous
  // 16 000 pixels réels : au-delà de 16 384, Chrome répète le haut de la page. Puis découpe en tranches.
  const dir = path.join(OUT_DIR, site.id);
  mkdirSync(dir, { recursive: true });
  const segment = Math.floor(16000 / d.dpr / d.tile) * d.tile;
  const tiles = [];
  let i = 1;
  for (let segTop = 0; segTop < height; segTop += segment) {
    const segH = Math.min(segment, height - segTop);
    const shot = await S('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: { x: 0, y: segTop, width: d.width, height: segH, scale: 1 },
    });
    const png = Buffer.from(shot.data, 'base64');
    const { width: pw, height: ph } = await sharp(png).metadata();
    const tilePx = Math.round(d.tile * d.dpr);
    for (let top = 0; top < ph; top += tilePx, i++) {
      const h = Math.min(tilePx, ph - top);
      const outH = Math.round((h * d.out) / pw);
      await sharp(png)
        .extract({ left: 0, top, width: pw, height: h })
        .resize(d.out, outH)
        .webp({ quality: d.quality, effort: 6 })
        .toFile(path.join(dir, `${name}-${String(i).padStart(2, '0')}.webp`));
      tiles.push(outH);
    }
  }
  await send('Target.closeTarget', { targetId });
  console.log(`${site.id} ${name} : page ${full} px, capturé ${height} px, ${tiles.length} tranches`);
  return { w: d.out, tiles };
}

const profile = mkdtempSync(path.join(tmpdir(), 'kameo-capture-'));
const chrome = spawn(
  CHROME,
  [
    '--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, '--no-first-run',
    '--no-default-browser-check', '--hide-scrollbars', '--mute-audio', '--disable-extensions', 'about:blank',
  ],
  { stdio: 'ignore' },
);
try {
  const client = await cdp();
  const shots = {};
  for (const site of SITES) {
    rmSync(path.join(OUT_DIR, site.id), { recursive: true, force: true });
    shots[site.id] = {};
    for (const [name, d] of Object.entries(DEVICES)) shots[site.id][name] = await capture(client, site, name, d);
  }
  client.ws.close();
  const body = Object.entries(shots)
    .map(([id, s]) => `  '${id}': {\n${Object.entries(s).map(([n, v]) => `    ${n}: { w: ${v.w}, tiles: [${v.tiles.join(', ')}] },`).join('\n')}\n  },`)
    .join('\n');
  writeFileSync(
    MANIFEST,
    `/* Généré par scripts/capture-realisations.mjs le ${new Date().toISOString().slice(0, 10)} : ne pas modifier à la main. */\n` +
      `/** Largeur des images et hauteur de chaque tranche, en pixels (public/images/landing_page/realisations/). */\n` +
      `export type Shot = { w: number; tiles: number[] };\n\n` +
      `export const SHOTS: Record<string, { desktop: Shot; mobile: Shot }> = {\n${body}\n};\n`,
  );
  console.log('Liste des tranches :', path.relative(ROOT, MANIFEST));
} finally {
  chrome.kill();
  await sleep(300);
  rmSync(profile, { recursive: true, force: true });
}
