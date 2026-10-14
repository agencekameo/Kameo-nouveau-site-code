/* Compare visuellement la référence (HTML rendu du thème WordPress) et le site Next.js.
   Usage : node migration/visual-compare.cjs <refBase> <nextBase> <outDir> <route...> */
const { chromium } = require(process.env.PW_PATH || '/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const path = require('path');
const [,, refBase, nextBase, outDir, ...routes] = process.argv;
const ORIGINS = [new URL(refBase).origin, new URL(nextBase).origin];
const VPS = (process.env.VPS || '1440x900,390x844').split(',').map((s) => { const [w, h] = s.split('x').map(Number); return { width: w, height: h }; });
const FREEZE = `*,*::before,*::after{animation-play-state:paused!important;animation-delay:0s!important;transition:none!important;caret-color:transparent!important}
.cpop{display:none!important}`;

async function shot(browser, url, vp, file) {
  const ctx = await browser.newContext({ viewport: vp, reducedMotion: 'reduce', deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  // seules les ressources des deux sites comparés sont chargées (pas de scripts tiers)
  await page.route('**/*', (r) => {
    const u = r.request().url();
    if (ORIGINS.some((o) => u.startsWith(o))) return r.continue();
    return r.abort();
  });
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(800);
  await page.addStyleTag({ content: FREEZE });
  await page.evaluate(async () => {
    await document.fonts.ready;
    // force le chargement des images lazy
    document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = 'eager'));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(400);
  await page.evaluate(() => Promise.all(Array.from(document.images).filter((i) => !i.complete).map((i) => new Promise((r) => { i.onload = i.onerror = r; }))));
  await page.screenshot({ path: file, fullPage: true });
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  await ctx.close();
  return h;
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  // référence en ligne : passage par le proxy HTTPS de l'environnement s'il existe
  const browser = await chromium.launch();
  const online = (u) => !/^http:\/\/(localhost|127\.0\.0\.1)[:/]/.test(u);
  const proxied = process.env.HTTPS_PROXY ? await chromium.launch({ proxy: { server: process.env.HTTPS_PROXY } }) : browser;
  for (const route of routes) {
    for (const vp of VPS) {
      const tag = (route.replace(/\//g, '_') || '_') + `@${vp.width}`;
      const a = path.join(outDir, tag + '.ref.png');
      const b = path.join(outDir, tag + '.next.png');
      const refRoute = route === '/404/' ? '/__404/' : route;
      const ha = await shot(online(refBase) ? proxied : browser, refBase + refRoute, vp, a);
      const hb = await shot(online(nextBase) ? proxied : browser, nextBase + route, vp, b);
      console.log(JSON.stringify({ route, vp: vp.width, refHeight: ha, nextHeight: hb, a, b }));
    }
  }
  await browser.close();
  if (proxied !== browser) await proxied.close();
})();
