/**
 * Génère src/app/(site)/<route>/page.tsx pour chaque page statique du thème,
 * à partir du HTML rendu par le harnais PHP (migration/wp-harness) et des mesures
 * d'espaces (migration/measure-whitespace.cjs).
 *
 * Usage : node migration/generate-pages.mjs <renderDir> <ws.json>
 */
import fs from 'node:fs';
import path from 'node:path';
import * as prettier from 'prettier';
import { parseDocument, convertNodes, convertElement, findAll, attrsOf, textContent, warnings, SITE } from './html-to-jsx.mjs';

const [renderDir, wsFile] = process.argv.slice(2);
const WS = JSON.parse(fs.readFileSync(wsFile, 'utf8'));
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const THEME = `${SITE}/wp-content/themes/kameo-theme`;

const SILO_WP = ['agence-wordpress-paris', 'creation-site-wordpress', 'refonte-wordpress', 'maintenance-wordpress'];
const SERVICES = ['agence-wordpress-paris', 'creation-site-wordpress', 'refonte-wordpress', 'maintenance-wordpress',
  'expertises-branding', 'expertises-motion', 'developpement-sur-mesure', 'creation-site-ecommerce',
  'creation-marketplace', 'creation-crm-sur-mesure', 'creation-saas-ia'];

const PAGES = [
  'index', 'notre-agence', 'benjamin-dayan', 'agence-wordpress-paris', 'creation-site-wordpress', 'refonte-wordpress',
  'maintenance-wordpress', 'expertises-branding', 'expertises-motion', 'developpement-sur-mesure',
  'creation-site-ecommerce', 'creation-marketplace', 'creation-crm-sur-mesure', 'creation-saas-ia', 'contact',
  'mentions-legales', 'politique-de-confidentialite',
];

/* Bloc <style> identique sur les 5 pages du pilier développement */
const SHARED_CSS = Object.fromEntries(['developpement-sur-mesure', 'creation-site-ecommerce', 'creation-marketplace', 'creation-crm-sur-mesure', 'creation-saas-ia'].map((s) => [s, 'dev-silo']));
const absJson = (s) => s.split(`${THEME}/images/`).join(`${SITE}/images/`).split(`${THEME}/video/`).join(`${SITE}/video/`);

function pascal(slug) {
  return slug.split(/[^a-z0-9]+/i).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join('');
}

/* Hooks de conversion communs à toutes les pages */
function makeCtx(file, route, extras = {}) {
  const ctx = {
    file, ws: WS[route], keepComments: true, components: new Set(), ...extras,
    onElement(n, c) {
      const a = attrsOf(n);
      // JSON-LD du corps : extrait vers schema.ts
      if (n.tagName === 'script' && a.type === 'application/ld+json') {
        c.bodySchemas.push(JSON.parse(absJson(textContent(n))));
        return '';
      }
      // Marquees : la copie que créait main.js est rendue côté serveur (inerte, masquée)
      if ((a.id === 'carouselTrack' || a.id === 'logosTrack') && !n._dup) {
        n._dup = true;
        const kids = n.childNodes.filter((k) => k.tagName);
        const clones = kids.map((k) => ({ ...k, attrs: [...k.attrs, { name: 'inert', value: '' }, { name: 'aria-hidden', value: 'true' }] }));
        const saved = n.childNodes;
        n.childNodes = [...saved, ...clones.map((cl) => { cl.parentNode = n; return cl; })];
        const out = convertElement(n, c);
        n.childNodes = saved;
        return out;
      }
      if (n.tagName === 'form' && a.id === 'contactForm') {
        c.components.add('ContactForm');
        fs.writeFileSync(path.join(ROOT, 'migration/out/contact-form.jsx.txt'), convertNodes([{ ...n, _skipHook: true }], { ...c, onElement: null }));
        return '<ContactForm />';
      }
      if (a.id === 'calendlyPopup') {
        c.components.add('CalendlyPopup');
        fs.writeFileSync(path.join(ROOT, 'migration/out/calendly-popup.jsx.txt'), convertNodes([n], { ...c, onElement: null }));
        return '';
      }
      return undefined;
    },
  };
  ctx.bodySchemas = [];
  return ctx;
}

async function fmt(code) {
  return prettier.format(code, { parser: 'typescript', printWidth: 120, singleQuote: true });
}

fs.mkdirSync(path.join(ROOT, 'migration/out'), { recursive: true });

for (const name of PAGES) {
  const file = path.join(renderDir, name + '.html');
  const meta = JSON.parse(fs.readFileSync(path.join(renderDir, name + '.meta.json'), 'utf8'));
  const route = name === 'index' ? '/' : `/${name}/`;
  const { body } = parseDocument(fs.readFileSync(file, 'utf8'));
  const ctx = makeCtx(file, route);

  const tops = body.childNodes.filter((n) => n.tagName);
  const main = tops.find((n) => n.tagName === 'main');
  const styles = tops.filter((n) => n.tagName === 'style' && !attrsOf(n).id);
  const css = styles.map((s) => textContent(s)).join('\n');
  // JSON-LD posés hors <main> (graphe du silo)
  for (const s of tops.filter((n) => n.tagName === 'script' && attrsOf(n).type === 'application/ld+json')) {
    ctx.bodySchemas.push(JSON.parse(absJson(textContent(s))));
  }
  // Popup Calendly de l'accueil (div + style + script hors main)
  const popup = tops.find((n) => attrsOf(n).id === 'calendlyPopup');
  if (popup) ctx.onElement(popup, ctx);

  const mainJsx = convertNodes([main], ctx);
  const crumbs = (meta.crumbs || []).map((c) => ({ name: c.name, path: c.item.replace(SITE, '') || '/' }));
  const slug = name === 'index' ? '' : name;
  const dir = path.join(ROOT, 'src/app/(site)', slug);
  fs.mkdirSync(dir, { recursive: true });

  const isSilo = SILO_WP.includes(name);
  const noindex = meta.robots && meta.robots.index === 'noindex';
  const comp = pascal(name === 'index' ? 'home' : name) + 'Page';

  const imports = [
    "import type { Metadata } from 'next';",
    ctx.usesLink ? "import Link from 'next/link';" : null,
    crumbs.length > 1 ? "import Breadcrumb from '@/components/Breadcrumb';" : null,
    "import JsonLd from '@/components/JsonLd';",
    ctx.components.has('ContactForm') ? "import ContactForm from '@/components/ContactForm';" : null,
    ctx.components.has('CalendlyPopup') ? "import CalendlyPopup from '@/components/CalendlyPopup';" : null,
    "import { pageMetadata } from '@/lib/seo';",
    !isSilo ? "import { themeSchemas, websiteGraph } from '@/lib/schema';" : null,
    ctx.bodySchemas.length ? "import { pageSchemas } from './schema';" : null,
    css ? (SHARED_CSS[name] ? `import css from '@/styles/pages/${SHARED_CSS[name]}';` : "import css from './styles';") : null,
  ].filter(Boolean);

  const schemaParts = [];
  if (!isSilo) {
    schemaParts.push(`...themeSchemas({ path: PATH, crumbs: ${crumbs.length ? 'CRUMBS' : 'null'}${SERVICES.includes(name) ? `, serviceSlug: '${name}'` : ''} })`);
  }
  if (ctx.bodySchemas.length) schemaParts.push('...pageSchemas');
  if (!isSilo) schemaParts.push('websiteGraph({ path: PATH, title: TITLE, description: DESCRIPTION })');

  const code = `${imports.join('\n')}

const PATH = ${JSON.stringify(route)};
const TITLE = ${JSON.stringify(meta.title)};
const DESCRIPTION = ${JSON.stringify(meta.description || '')};
${crumbs.length ? `const CRUMBS = ${JSON.stringify(crumbs)};` : ''}

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION${noindex ? ', noindex: true' : ''} });

export default function ${comp}() {
  return (
    <>
      ${crumbs.length > 1 ? '<Breadcrumb items={CRUMBS} />' : ''}
      ${css ? '<style dangerouslySetInnerHTML={{ __html: css }} />' : ''}
      ${mainJsx}
      ${ctx.components.has('CalendlyPopup') ? '<CalendlyPopup />' : ''}
      <JsonLd data={[${schemaParts.join(', ')}]} />
    </>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), await fmt(code));
  if (css && SHARED_CSS[name]) {
    // CSS identique sur plusieurs pages : module partagé
  } else if (css) {
    const safe = css.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    fs.writeFileSync(path.join(dir, 'styles.ts'), `/* Styles propres à la page (bloc <style> du gabarit WordPress). */\nconst css = \`${safe}\`;\nexport default css;\n`);
  }
  if (ctx.bodySchemas.length) {
    fs.writeFileSync(path.join(dir, 'schema.ts'), await fmt(`/* Données structurées propres à la page (émises dans le corps par le gabarit WordPress). */\nexport const pageSchemas: object[] = ${JSON.stringify(ctx.bodySchemas, null, 2)};\n`));
  }
  console.log(`generated ${route} (${ctx.bodySchemas.length} schemas, css ${css.length})`);
}
if (warnings.length) console.log('WARNINGS:\n' + warnings.join('\n'));
