/**
 * Génère les deux pages autonomes (gabarits avec leur propre <html>) :
 * la landing page Ads (page-lp-rdv-v2.php) et la confirmation de RDV (page-rdv-confirme.php).
 * Usage : node migration/generate-standalone.mjs <renderDir> <ws.json>
 */
import fs from 'node:fs';
import path from 'node:path';
import * as prettier from 'prettier';
import { parseDocument, convertNodes, findAll, attrsOf, textContent, warnings, SITE } from './html-to-jsx.mjs';

const [renderDir, wsFile] = process.argv.slice(2);
const WS = JSON.parse(fs.readFileSync(wsFile, 'utf8'));
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const THEME = `${SITE}/wp-content/themes/kameo-theme`;
const absJson = (s) => s.split(`${THEME}/images/`).join(`${SITE}/images/`);
const fmt = (code) => prettier.format(code, { parser: 'typescript', printWidth: 120, singleQuote: true });
const cssModule = (css, comment) =>
  `/* ${comment} */\nconst css = \`${css.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`;\nexport default css;\n`;

async function build(name, route, outDir, opts) {
  const html = fs.readFileSync(path.join(renderDir, name + '.html'), 'utf8');
  const { head, body } = parseDocument(html);
  const schemas = [];
  const ctx = {
    file: name, ws: WS[route], keepComments: true, components: new Set(),
    onElement(n, c) {
      const a = attrsOf(n);
      if (n.tagName === 'script') {
        if (a.type === 'application/ld+json') schemas.push(JSON.parse(absJson(textContent(n))));
        return '';
      }
      if (n.tagName === 'svg' && a.id === 'kameo-icons') return '';
      if (n.tagName === 'header' && a.id === 'header' && opts.header) { c.components.add(opts.header); return `<${opts.header} />`; }
      return undefined;
    },
  };
  const headCss = findAll(head, (n) => n.tagName === 'style').map((s) => textContent(s)).join('\n');
  const tops = body.childNodes.filter((n) => n.tagName && !(n.tagName === 'img' && /facebook\.com\/tr/.test(attrsOf(n).src || '')) && n.tagName !== 'noscript');
  const jsx = convertNodes(tops, ctx);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'styles.ts'), cssModule(headCss, opts.cssComment));
  if (schemas.length) fs.writeFileSync(path.join(outDir, 'schema.ts'), await fmt(`export const pageSchemas: object[] = ${JSON.stringify(schemas, null, 2)};\n`));
  const body_ = `const Body = () => (<>${jsx}</>);\nexport default Body;\n`;
  const imports = [ctx.usesLink ? "import Link from 'next/link';" : null, ...[...ctx.components].map((c) => `import ${c} from '@/components/landing/${c}';`)].filter(Boolean).join('\n');
  fs.writeFileSync(path.join(outDir, 'Body.tsx'), await fmt(`/* Corps de la page, converti depuis le gabarit WordPress. */\n${imports}\n\n${body_}`));
  console.log(`generated ${route}: ${schemas.length} schemas, css ${headCss.length}`);
}

await build('landingpage', '/landingpage/', path.join(ROOT, 'src/app/(standalone)/landingpage'), {
  header: 'LpHeader',
  cssComment: 'Styles de la landing page Ads (bloc <style> du <head> de page-lp-rdv-v2.php).',
});
await build('rdv-confirme', '/rdv-confirme/', path.join(ROOT, 'src/app/(standalone)/rdv-confirme'), {
  cssComment: 'Styles de la page de confirmation de rendez-vous (page-rdv-confirme.php).',
});
if (warnings.length) console.log('WARNINGS:\n' + warnings.join('\n'));
