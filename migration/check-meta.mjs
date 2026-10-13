/* Compare titre, description, canonical et robots des pages Next.js avec les valeurs
   calculées par le thème (harnais PHP, fichiers *.meta.json). */
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
const [renderDir, base] = process.argv.slice(2);
const find = (n, pred, out = []) => { for (const c of n.childNodes || []) { if (c.tagName && pred(c)) out.push(c); find(c, pred, out); } return out; };
const attr = (n, k) => (n.attrs.find((a) => a.name === k) || {}).value;
let bad = 0;
for (const f of fs.readdirSync(renderDir).filter((x) => x.endsWith('.meta.json'))) {
  const name = f.replace('.meta.json', '');
  if (name === '404' || name === 'blog' || name.startsWith('realisations__')) continue;
  const route = name === 'index' ? '/' : `/${name}/`;
  const m = JSON.parse(fs.readFileSync(path.join(renderDir, f), 'utf8'));
  const html = await (await fetch(base + route)).text();
  const doc = parse(html);
  const title = find(doc, (n) => n.tagName === 'title')[0]?.childNodes[0]?.value;
  const metas = find(doc, (n) => n.tagName === 'meta');
  const desc = attr(metas.find((x) => attr(x, 'name') === 'description') || { attrs: [] }, 'content');
  const robots = attr(metas.find((x) => attr(x, 'name') === 'robots') || { attrs: [] }, 'content') || '';
  const canon = attr(find(doc, (n) => n.tagName === 'link' && attr(n, 'rel') === 'canonical')[0] || { attrs: [] }, 'href');
  const issues = [];
  const expTitle = name === 'rdv-confirme' ? 'Rendez-vous confirmé · Kameo' : m.title;
  if (title !== expTitle) issues.push(`title « ${title} » ≠ « ${expTitle} »`);
  if (m.description && desc !== m.description && name !== 'realisations') issues.push(`description diff`);
  const noindex = m.robots.index === 'noindex' || name === 'rdv-confirme';
  if (noindex !== robots.includes('noindex')) issues.push(`robots « ${robots} »`);
  if (canon !== m.canonical && !(name === 'rdv-confirme')) issues.push(`canonical ${canon} ≠ ${m.canonical}`);
  if (issues.length) { bad++; console.log(route, issues.join(' | ')); }
}
console.log(bad ? `${bad} page(s) en écart` : 'métadonnées identiques sur toutes les pages');
