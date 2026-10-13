/* Vérifie qu'aucune redirection ne pointe vers une URL elle-même redirigée ou supprimée. */
import fs from 'node:fs';
const src = fs.readFileSync(new URL('../src/lib/redirects.ts', import.meta.url), 'utf8');
// évaluation légère du module TS : uniquement les tables littérales, avant les fonctions
const js = src
  .slice(0, src.indexOf("/** Préfixes de l'ancien thème"))
  .replace(/export /g, '')
  .replace(/: Record<string, string>/g, '')
  .replace(/: string\[\]/g, '');
const mod = new Function(js + '; return { THEME_REDIRECTS, BLOG_PRUNING, LEGACY_REDIRECTS, GONE };')();
const all = { ...mod.THEME_REDIRECTS, ...mod.BLOG_PRUNING, ...mod.LEGACY_REDIRECTS };
const norm = (p) => p.replace(/\/$/, '');
const sources = new Set(Object.keys(all).map(norm));
const gone = new Set(mod.GONE.map(norm));
let bad = 0;
for (const [from, to] of Object.entries(all)) {
  if (sources.has(norm(to))) { console.log('CHAIN', from, '→', to, '→', all[norm(to)] ?? all[to]); bad++; }
  if (gone.has(norm(to))) { console.log('TO GONE', from, '→', to); bad++; }
  if (!to.endsWith('/')) { console.log('NO SLASH', from, '→', to); bad++; }
}
for (const g of gone) if (sources.has(g)) { console.log('BOTH', g); bad++; }
console.log(Object.keys(all).length, 'redirections,', gone.size, 'URLs 410,', bad, 'problème(s)');
process.exit(bad ? 1 : 0);
