import { getAllPostsOrRepo } from '@/lib/blog';
import { SITE_URL, abs } from '@/lib/site';

/* Flux RSS du blog (/feed/, annoncé dans le <head> de chaque page). */
// régénéré à chaque publication n8n (revalidatePath), 60 s au plus sinon
export const revalidate = 60;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const cdata = (s: string) => `<![CDATA[${s.replaceAll(']]>', ']]]]><![CDATA[>')}]]>`;

export async function GET() {
  const posts = (await getAllPostsOrRepo()).slice(0, 20);
  const items = posts
    .map(
      (p) => `\t\t<item>
\t\t\t<title>${esc(p.title)}</title>
\t\t\t<link>${abs(p.path)}</link>
\t\t\t<guid isPermaLink="true">${abs(p.path)}</guid>
\t\t\t<dc:creator><![CDATA[Benjamin Dayan]]></dc:creator>
\t\t\t<pubDate>${new Date(p.date).toUTCString()}</pubDate>
\t\t\t<description>${cdata(p.excerpt)}</description>
\t\t</item>`,
    )
    .join('\n');
  const last = posts[0] ? new Date(posts[0].modified).toUTCString() : new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
\t<channel>
\t\t<title>Blog Kameo</title>
\t\t<atom:link href="${abs('/feed/')}" rel="self" type="application/rss+xml" />
\t\t<link>${SITE_URL}/blog/</link>
\t\t<description>Conseils et stratégies web, branding et SEO par l'agence Kameo.</description>
\t\t<lastBuildDate>${last}</lastBuildDate>
\t\t<language>fr-FR</language>
${items}
\t</channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=UTF-8' } });
}
