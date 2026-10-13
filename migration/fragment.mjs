// Prints the JSX of one element (selected by tag#id or tag.class) from a rendered page.
import { parseDocument, convertNodes, findAll, attrsOf, warnings } from './html-to-jsx.mjs';
import fs from 'node:fs';
import * as prettier from 'prettier';
const [file, route, wsFile, selector] = process.argv.slice(2);
const html = fs.readFileSync(file, 'utf8');
const ws = JSON.parse(fs.readFileSync(wsFile, 'utf8'))[route];
const { body } = parseDocument(html);
const [tag, rest] = selector.split(/(?=[#.])/).reduce((a, x, i) => (i === 0 ? [x, ''] : [a[0], a[1] + x]), ['', '']);
const el = findAll(body, (n) => n.tagName === tag && (!rest || (rest[0] === '#' ? attrsOf(n).id === rest.slice(1) : (attrsOf(n).class || '').split(' ').includes(rest.slice(1)))))[0];
const ctx = { file, ws, keepComments: true };
const jsx = convertNodes([el], ctx);
console.log(await prettier.format(`const x = (<>${jsx}</>);`, { parser: 'typescript', printWidth: 120 }));
if (warnings.length) console.error(warnings.join('\n'));
