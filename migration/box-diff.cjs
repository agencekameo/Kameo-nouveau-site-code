/* Compare les boîtes (position/taille) de tous les éléments de <main> entre deux URLs. */
const { chromium } = require(process.env.PW_PATH || '/opt/node22/lib/node_modules/playwright');
const [,, refUrl, nextUrl, width = '390', sel = 'main'] = process.argv;
async function boxes(browser, url) {
  const ctx = await browser.newContext({ viewport: { width: +width, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.route('**/*', (r) => (r.request().url().startsWith('http://localhost:') ? r.continue() : r.abort()));
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(600);
  const res = await page.evaluate((sel) => {
    const root = document.querySelector(sel);
    const out = [];
    const walk = (el, path) => {
      Array.from(el.children).forEach((c, i) => {
        const p = path + '>' + c.tagName.toLowerCase() + (c.className && typeof c.className === 'string' ? '.' + c.className.trim().split(/\s+/)[0] : '') + `[${i}]`;
        const r = c.getBoundingClientRect();
        out.push([p, Math.round(r.top + scrollY), Math.round(r.left), Math.round(r.width), Math.round(r.height)]);
        walk(c, p);
      });
    };
    walk(root, sel);
    return out;
  }, sel);
  await ctx.close();
  return res;
}
(async () => {
  const b = await chromium.launch();
  const A = await boxes(b, refUrl), B = await boxes(b, nextUrl);
  const mb = new Map(B.map((x) => [x[0], x]));
  let shown = 0;
  for (const a of A) {
    const x = mb.get(a[0]);
    if (!x) continue;
    if (a[1] !== x[1] || a[2] !== x[2] || a[3] !== x[3] || a[4] !== x[4]) {
      console.log(a[0].slice(-120), 'ref', a.slice(1).join(','), 'next', x.slice(1).join(','));
      if (++shown > (+process.env.MAXB || 15)) break;
    }
  }
  await b.close();
})();
