/* Compare la structure DOM (balises, attributs, textes) de <main> entre la référence
   WordPress et le site Next.js. Usage : node migration/dom-diff.mjs <refUrl> <nextUrl> [selector] */
import { parse } from 'parse5';
const [refUrl, nextUrl, sel = 'main'] = process.argv.slice(2);
const SITE_RE = /http:\/\/localhost:\d+/g;
const THEME = '/wp-content/themes/kameo-theme';

function norm(v) {
  return v.replace(SITE_RE, '').split(THEME + '/images/').join('/images/').split(THEME + '/video/').join('/video/')
    .replace(/^#i-/, '/icons.svg#i-').replace(/%20/g, ' ').replace(/\s+/g, ' ').trim();
}
function find(n, tag) {
  for (const c of n.childNodes || []) { if (c.tagName === tag) return c; const r = find(c, tag); if (r) return r; }
}
function lines(n, depth, out) {
  for (const c of n.childNodes || []) {
    if (c.nodeName === '#comment') continue;
    if (c.nodeName === '#text') {
      const t = c.value.replace(/\s+/g, ' ').trim();
      if (t) out.push('  '.repeat(depth) + JSON.stringify(t));
      continue;
    }
    if (!c.tagName) continue;
    if (c.tagName === 'script' || c.tagName === 'style') { out.push('  '.repeat(depth) + `<${c.tagName}>`); continue; }
    const attrs = (c.attrs || []).filter((a) => !['style'].includes(a.name) || true).map((a) => `${a.prefix ? a.prefix + ':' : ''}${a.name}=${JSON.stringify(norm(a.value))}`).sort();
    out.push('  '.repeat(depth) + `<${c.tagName} ${attrs.join(' ')}>`);
    lines(c, depth + 1, out);
  }
  return out;
}
async function get(url) {
  const html = await (await fetch(url)).text();
  const doc = parse(html);
  const el = find(doc, sel);
  return el ? lines({ childNodes: [el] }, 0, []) : ['<no ' + sel + '>'];
}
const a = await get(refUrl), b = await get(nextUrl);
// diff simple (LCS ligne à ligne)
const n = a.length, m = b.length;
const dp = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));
for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
let i = 0, j = 0, shown = 0;
const out = [];
while (i < n || j < m) {
  if (i < n && j < m && a[i] === b[j]) { i++; j++; continue; }
  if (j < m && (i === n || dp[i][j + 1] >= dp[i + 1][j])) { out.push('+ ' + b[j++]); }
  else { out.push('- ' + a[i++]); }
}
console.log(`ref lines ${n}, next lines ${m}, diff lines ${out.length}`);
console.log(out.slice(0, Number(process.env.MAX || 80)).join('\n'));
