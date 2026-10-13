/* Compare visuellement la référence (HTML rendu du thème WordPress) et le site Next.js.
   Usage : node migration/visual-compare.cjs <refBase> <nextBase> <outDir> <route...> */
const { chromium } = require(process.env.PW_PATH || '/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const path = require('path');
const [,, refBase, nextBase, outDir, ...routes] = process.argv;
const VPS = (process.env.VPS || '1440x900,390x844').split(',').map((s) => { const [w, h] = s.split('x').map(Number); return { width: w, height: h }; });
const FREEZE = `*,*::before,*::after{animation-play-state:paused!important;animation-delay:0s!important;transition:none!important;caret-color:transparent!important}
.cpop{display:none!important}`;

async function shot(browser, url, vp, file) {
  const ctx = await browser.newContext({ viewport: vp, reducedMotion: 'reduce', deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.route('**/*', (r) => {
    const u = r.request().url();
    if (u.startsWith('http://localhost:')) return r.continue();
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
  const browser = await chromium.launch();
  for (const route of routes) {
    for (const vp of VPS) {
      const tag = (route.replace(/\//g, '_') || '_') + `@${vp.width}`;
      const a = path.join(outDir, tag + '.ref.png');
      const b = path.join(outDir, tag + '.next.png');
      const refRoute = route === '/404/' ? '/__404/' : route;
      const ha = await shot(browser, refBase + refRoute, vp, a);
      const hb = await shot(browser, nextBase + route, vp, b);
      console.log(JSON.stringify({ route, vp: vp.width, refHeight: ha, nextHeight: hb, a, b }));
    }
  }
  await browser.close();
})();
