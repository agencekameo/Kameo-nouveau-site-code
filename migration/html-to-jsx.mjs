/**
 * HTML → JSX converter used once to port the PHP-rendered Kameo templates.
 *
 * Faithfulness rules:
 *  - parsing uses parse5 (WHATWG parser, same DOM as the browser);
 *  - whitespace is kept exactly where Chromium rendered it with the original CSS
 *    (see measure-whitespace.cjs), and nowhere else;
 *  - internal links become <Link>, theme asset URLs are remapped to /public;
 *  - <style>/<script> bodies are kept verbatim through dangerouslySetInnerHTML.
 */
import { parse as p5parse } from 'parse5';

export const SITE = 'https://agence-kameo.fr';
const THEME = `${SITE}/wp-content/themes/kameo-theme`;

const ATTR_MAP = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly',
  maxlength: 'maxLength', minlength: 'minLength', autocomplete: 'autoComplete',
  autofocus: 'autoFocus', autoplay: 'autoPlay', playsinline: 'playsInline',
  crossorigin: 'crossOrigin', fetchpriority: 'fetchPriority', srcset: 'srcSet',
  frameborder: 'frameBorder', allowfullscreen: 'allowFullScreen', novalidate: 'noValidate',
  enctype: 'encType', datetime: 'dateTime', colspan: 'colSpan', rowspan: 'rowSpan',
  contenteditable: 'contentEditable', spellcheck: 'spellCheck', 'accept-charset': 'acceptCharset',
  'http-equiv': 'httpEquiv', referrerpolicy: 'referrerPolicy', inputmode: 'inputMode',
  enterkeyhint: 'enterKeyHint', formaction: 'formAction', hreflang: 'hrefLang',
  itemprop: 'itemProp', itemscope: 'itemScope', itemtype: 'itemType', charset: 'charSet',
  'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', 'xmlns:xlink': 'xmlnsXlink',
  cellpadding: 'cellPadding', cellspacing: 'cellSpacing', usemap: 'useMap',
};
const BOOLEAN = new Set(['muted', 'loop', 'playsinline', 'autoplay', 'controls', 'defer', 'async',
  'hidden', 'disabled', 'required', 'checked', 'selected', 'multiple', 'open', 'readonly',
  'novalidate', 'allowfullscreen', 'inert', 'itemscope', 'reversed', 'autofocus', 'default', 'nomodule']);
const NUMERIC = new Set(['tabIndex', 'rows', 'cols', 'colSpan', 'rowSpan', 'maxLength', 'minLength', 'size', 'span', 'start']);
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta',
  'source', 'track', 'wbr']);
const INLINE = new Set(['a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'button', 'cite', 'code', 'data', 'dfn',
  'em', 'i', 'img', 'input', 'kbd', 'label', 'mark', 'q', 's', 'samp', 'select', 'small', 'span',
  'strong', 'sub', 'sup', 'svg', 'textarea', 'time', 'u', 'var', 'video', 'audio', 'picture',
  'iframe', 'canvas', 'object', 'output', 'meter', 'progress', 'del', 'ins', 'wbr']);

export const warnings = [];

export function mapUrl(url) {
  if (typeof url !== 'string') return url;
  return url
    .split(`${THEME}/images/`).join('/images/')
    .split(`${THEME}/fonts/`).join('/fonts/')
    .split(`${THEME}/video/`).join('/video/')
    .split(`${THEME}/icons.svg`).join('/icons.svg');
}

export function internalPath(href) {
  if (!href) return null;
  if (href === SITE || href === SITE + '/') return '/';
  if (href.startsWith(SITE + '/')) return href.slice(SITE.length);
  if (href.startsWith('/') && !href.startsWith('//')) return href;
  return null;
}

const camel = (name) => name.replace(/[-:]([a-z])/g, (_, c) => c.toUpperCase());

function jsxAttrName(name) {
  const lower = name.toLowerCase();
  if (ATTR_MAP[lower]) return ATTR_MAP[lower];
  if (lower.startsWith('data-') || lower.startsWith('aria-')) return lower;
  if (/^on[a-z]+$/.test(lower)) return null;
  if (name.includes('-') || name.includes(':')) return camel(name);
  return name;
}

const jsString = (s) => JSON.stringify(s);

function attrValue(v) {
  if (/[\\{}]/.test(v) || v.includes('\n')) return `{${jsString(v)}}`;
  return '"' + v.replace(/&/g, '&amp;').replace(/"/g, '&quot;') + '"';
}

export function styleToObject(css) {
  const out = [];
  let depth = 0, cur = '';
  const parts = [];
  for (const ch of css) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { parts.push(cur); cur = ''; continue; }
    cur += ch;
  }
  parts.push(cur);
  for (const part of parts) {
    const i = part.indexOf(':');
    if (i < 0) continue;
    const prop = part.slice(0, i).trim();
    const val = part.slice(i + 1).trim();
    if (!prop) continue;
    let key;
    if (prop.startsWith('--')) key = jsString(prop);
    else if (/^-webkit-/i.test(prop)) key = 'Webkit' + camel(prop.slice(8).toLowerCase()).replace(/^./, (c) => c.toUpperCase());
    else if (/^-moz-/i.test(prop)) key = 'Moz' + camel(prop.slice(5).toLowerCase()).replace(/^./, (c) => c.toUpperCase());
    else if (/^-ms-/i.test(prop)) key = 'ms' + camel(prop.slice(4).toLowerCase()).replace(/^./, (c) => c.toUpperCase());
    else key = camel(prop.toLowerCase());
    out.push(`${key}: ${jsString(mapUrl(val))}`);
  }
  return `{{ ${out.join(', ')} }}`;
}

function escapeText(t) {
  return t
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/ /g, '&nbsp;')
    .replace(/[{}]/g, (c) => `{${jsString(c)}}`);
}

/* ---------- parse + text node indexing (same order as the browser TreeWalker) ---------- */
export function parseDocument(html) {
  const doc = p5parse(html, { scriptingEnabled: false });
  const html_ = doc.childNodes.find((n) => n.nodeName === 'html');
  const body = html_.childNodes.find((n) => n.nodeName === 'body');
  const head = html_.childNodes.find((n) => n.nodeName === 'head');
  let i = 0;
  (function walk(n) {
    for (const c of n.childNodes || []) {
      if (c.nodeName === '#text') c._idx = i++;
      if (c.nodeName === 'template') continue;
      walk(c);
    }
  })(body);
  return { doc, head, body, textCount: i };
}

export const tagOf = (n) => (n.tagName || '');
export const attrsOf = (n) => {
  const o = {};
  for (const a of n.attrs || []) o[a.prefix ? `${a.prefix}:${a.name}` : a.name] = a.value;
  return o;
};
export const cls = (n) => (attrsOf(n).class || '').split(/\s+/).filter(Boolean);

export function textContent(n) {
  if (n.nodeName === '#text') return n.value;
  return (n.childNodes || []).map(textContent).join('');
}

export function findAll(n, pred, out = []) {
  for (const c of n.childNodes || []) {
    if (c.tagName && pred(c)) out.push(c);
    findAll(c, pred, out);
  }
  return out;
}

/* ---------- conversion ---------- */
export function convertNodes(nodes, ctx) {
  return nodes.map((n) => convertNode(n, ctx)).join('');
}

function wsInfo(n, ctx) {
  return ctx.ws && n._idx !== undefined ? ctx.ws[n._idx] : undefined;
}

function conservativeKeep(n) {
  // Without a measurement: keep whitespace unless it sits between block-level elements.
  const p = n.parentNode;
  const sib = p ? p.childNodes : [];
  const k = sib.indexOf(n);
  const isBlock = (x) => x && x.tagName && !INLINE.has(x.tagName);
  const parentInline = p && p.tagName && INLINE.has(p.tagName);
  let prev = null, next = null;
  for (let j = k - 1; j >= 0; j--) { if (sib[j].nodeName === '#comment') continue; if (sib[j].nodeName === '#text' && !/\S/.test(sib[j].value)) continue; prev = sib[j]; break; }
  for (let j = k + 1; j < sib.length; j++) { if (sib[j].nodeName === '#comment') continue; if (sib[j].nodeName === '#text' && !/\S/.test(sib[j].value)) continue; next = sib[j]; break; }
  if (!parentInline && (!prev || isBlock(prev)) && (!next || isBlock(next))) return false;
  return true;
}

function inPre(n) {
  for (let p = n.parentNode; p; p = p.parentNode) if (p.tagName === 'pre' || p.tagName === 'textarea') return true;
  return false;
}

function convertText(n, ctx) {
  if (inPre(n)) return `{${jsString(n.value)}}`;
  const info = wsInfo(n, ctx);
  const measured = info && info.parentRendered;
  const collapsed = n.value.replace(/[ \t\n\r\f]+/g, ' ');
  if (!/\S/.test(collapsed)) {
    const keep = measured ? info.ws : conservativeKeep(n);
    return keep ? '{" "}' : '';
  }
  let text = collapsed;
  let lead = '', trail = '';
  if (text.startsWith(' ')) {
    text = text.slice(1);
    if (measured ? info.lead : conservativeKeep(n)) lead = ' ';
  }
  if (text.endsWith(' ')) {
    text = text.slice(0, -1);
    if (measured ? info.trail : conservativeKeep(n)) trail = ' ';
  }
  // A space adjacent to an element on the same JSX line survives; Prettier keeps it safe.
  return (lead ? '{" "}' : '') + escapeText(text) + (trail ? '{" "}' : '');
}

function convertNode(n, ctx) {
  if (n.nodeName === '#comment') {
    const t = n.data.trim().replace(/\*\//g, '* /');
    if (!t || !ctx.keepComments) return '';
    return `{/* ${t} */}`;
  }
  if (n.nodeName === '#text') return convertText(n, ctx);
  if (n.tagName) return convertElement(n, ctx);
  return '';
}

export function convertElement(n, ctx) {
  const tag = n.tagName;
  if (ctx.onElement) {
    const r = ctx.onElement(n, ctx);
    if (typeof r === 'string') return r;
  }
  const attrs = attrsOf(n);

  let component = tag;
  if (tag === 'a' && attrs.href !== undefined) {
    const ip = internalPath(attrs.href);
    const isAsset = ip && /\.(pdf|xml|txt|jpe?g|png|webp|mp4|svg|zip)([#?]|$)/i.test(ip);
    if (ip && !attrs.target && !isAsset && !ip.startsWith('/wp-')) {
      component = 'Link';
      ctx.usesLink = true;
      attrs.href = ip;
    } else if (ip) {
      attrs.href = mapUrl(attrs.href).replace(SITE, '') || '/';
    }
  }
  if (tag === 'use') {
    for (const k of ['href', 'xlink:href']) {
      if (attrs[k] && attrs[k].startsWith('#i-')) attrs[k] = '/icons.svg' + attrs[k];
    }
  }

  const parts = [];
  for (const [rawName, rawVal] of Object.entries(attrs)) {
    const lname = rawName.toLowerCase();
    if (/^on[a-z]+$/.test(lname)) {
      warnings.push(`${ctx.file}: inline handler ${rawName} on <${tag}>: ${rawVal.slice(0, 100)}`);
      continue;
    }
    let name = jsxAttrName(rawName);
    if (!name) continue;
    let val = rawVal;
    if (['src', 'href', 'poster', 'data-src', 'srcset', 'content', 'action', 'xlink:href'].includes(lname)) val = mapUrl(val);
    if (lname === 'style') { if (val.trim()) parts.push(`style=${styleToObject(val)}`); continue; }
    if (lname === 'value' && ['input', 'select'].includes(tag) && !['submit', 'button', 'hidden', 'radio', 'checkbox', 'range'].includes((attrs.type || '').toLowerCase())) name = 'defaultValue';
    if (lname === 'value' && tag === 'input' && (attrs.type || '').toLowerCase() === 'range') name = 'defaultValue';
    if (lname === 'checked') { parts.push('defaultChecked'); continue; }
    if (BOOLEAN.has(lname) && (val === '' || val.toLowerCase() === lname)) { parts.push(name); continue; }
    if (NUMERIC.has(name) && /^-?\d+$/.test(val)) { parts.push(`${name}={${val}}`); continue; }
    parts.push(`${name}=${attrValue(val)}`);
  }
  const open = `<${component}${parts.length ? ' ' + parts.join(' ') : ''}`;

  if (tag === 'style' || tag === 'script') {
    const body = (n.childNodes || []).map((c) => c.value || '').join('');
    if (!body.trim()) return `${open} />`;
    return `${open} dangerouslySetInnerHTML={{ __html: ${jsString(body)} }} />`;
  }
  if (tag === 'textarea') {
    const body = (n.childNodes || []).map((c) => c.value || '').join('');
    return body ? `${open} defaultValue=${attrValue(body)} />` : `${open} />`;
  }
  const kids = tag === 'template' ? (n.content ? n.content.childNodes : []) : n.childNodes || [];
  if (VOID.has(tag) || kids.length === 0) return `${open} />`;
  const inner = convertNodes(kids, ctx);
  if (!inner) return `${open} />`;
  return `${open}>${inner}</${component}>`;
}
