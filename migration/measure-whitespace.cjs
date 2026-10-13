/* Measures, in a real browser and with the original theme CSS, which whitespace
   text nodes actually render. Output feeds html-to-jsx so the generated JSX keeps
   exactly the visible spaces and nothing else. JS is disabled so the DOM is the
   parser's DOM, identical to what parse5 builds. */
const { chromium } = require(process.env.PW_PATH || '/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const [,, base, routesFile, outFile] = process.argv;
const routes = JSON.parse(fs.readFileSync(routesFile, 'utf8'));
const VIEWPORTS = [{ width: 1440, height: 900 }, { width: 390, height: 844 }, { width: 900, height: 1000 }];

function measure() {
  const out = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n, i = 0;
  const rectsOf = (node, a, b) => {
    const r = document.createRange();
    r.setStart(node, a); r.setEnd(node, b);
    return Array.from(r.getClientRects()).some((x) => x.width > 0.01);
  };
  while ((n = walker.nextNode())) {
    const t = n.data;
    const p = n.parentElement;
    const parentRendered = p ? p.getClientRects().length > 0 : false;
    const rec = { i, parentRendered };
    if (!/\S/.test(t)) rec.ws = t.length ? rectsOf(n, 0, t.length) : false;
    else {
      if (/^\s/.test(t)) { const m = t.match(/^\s+/)[0].length; rec.lead = rectsOf(n, 0, m); }
      if (/\s$/.test(t)) { const m = t.match(/\s+$/)[0].length; rec.trail = rectsOf(n, t.length - m, t.length); }
    }
    out.push(rec);
    i++;
  }
  return out;
}

(async () => {
  const browser = await chromium.launch();
  const result = {};
  for (const route of routes) {
    const merged = [];
    for (const vp of VIEWPORTS) {
      const ctx = await browser.newContext({ viewport: vp, javaScriptEnabled: false });
      const page = await ctx.newPage();
      await page.route(/^(?!http:\/\/localhost:8765)/, (r) => r.abort());
      await page.goto(base + route, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts && document.fonts.ready);
      const m = await page.evaluate(measure);
      m.forEach((rec, k) => {
        const cur = merged[k] || (merged[k] = { i: rec.i, parentRendered: false });
        cur.parentRendered = cur.parentRendered || rec.parentRendered;
        for (const key of ['ws', 'lead', 'trail']) if (key in rec) cur[key] = Boolean(cur[key]) || rec[key];
      });
      await ctx.close();
    }
    result[route] = merged;
    process.stderr.write(`measured ${route} (${merged.length} text nodes)\n`);
  }
  await browser.close();
  fs.writeFileSync(outFile, JSON.stringify(result));
})();
