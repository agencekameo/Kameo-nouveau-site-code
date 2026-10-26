import { createPublicKey, verify } from 'node:crypto';
import { revalidatePath, revalidateTag } from 'next/cache';
import { after } from 'next/server';
import { revalidateBlog } from '@/lib/blog-api';
import { BLOG_TOOL } from '@/lib/blog-tool';

/*
 * POST /api/revalidate : appelée par l'outil de rédaction « Blog » à chaque publication, et pour
 * vérifier que le site est relié. Vérification de la signature telle que fournie par l'outil
 * (Ed25519 sur « timestamp.corps », en-têtes x-blog-timestamp et x-blog-signature, 5 min) : seule
 * sa clé publique est dans le code (src/lib/blog-tool.ts), aucun secret à configurer.
 * Puis, propre à ce site : chemins reçus purgés avec et sans « / » final (le site sert ses pages
 * avec), tout le blog purgé (liste, pages, sitemaps, flux, llms.txt), et une fois la réponse
 * envoyée, ces pages redemandées pour que Next les régénère aussitôt.
 */
export const dynamic = 'force-dynamic';

// Demandes signées par l'outil « Blog » (Ed25519) : seule sa clé publique est dans le code.
const toolKey = createPublicKey({ key: Buffer.from(BLOG_TOOL.publicKey, 'base64'), format: 'der', type: 'spki' });

export async function POST(request: Request) {
  const body = await request.text();
  const timestamp = request.headers.get('x-blog-timestamp') ?? '';
  const signature = Buffer.from(request.headers.get('x-blog-signature') ?? '', 'base64');
  const recent = Math.abs(Date.now() - Number(timestamp)) < 5 * 60_000;
  if (!recent || !verify(null, Buffer.from(`${timestamp}.${body}`), toolKey, signature)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  // corps vide ou sans chemins (vérification de la liaison) : purge générale seulement
  let paths: string[] = [];
  try {
    const parsed = JSON.parse(body) as { paths?: unknown };
    if (Array.isArray(parsed?.paths)) {
      paths = parsed.paths
        .filter((p): p is string => typeof p === 'string' && p.startsWith('/') && !p.startsWith('//') && p.length <= 300)
        .map((p) => p.split(/[?#]/)[0])
        .slice(0, 200);
    }
  } catch {
    // corps non JSON : rien à cibler
  }

  revalidateTag('blog', { expire: 0 });
  for (const path of paths) {
    const bare = path.replace(/\/+$/, '') || '/';
    revalidatePath(bare);
    if (bare !== '/') revalidatePath(bare + '/');
  }
  revalidateBlog();

  // pages du blog seulement (chemins reçus, liste), plus le sitemap des articles et le flux
  const blogPages = paths.map((p) => (p.replace(/\/+$/, '') || '') + '/').filter((p) => p.startsWith('/blog/'));
  const warm = [...new Set([...blogPages, '/blog/', '/post-sitemap.xml', '/feed/'])].slice(0, 30);
  after(async () => {
    const origin = `http://127.0.0.1:${process.env.PORT || 3000}`;
    for (const p of warm) {
      await fetch(origin + p, { headers: { 'x-kameo-warmup': '1' }, signal: AbortSignal.timeout(15_000) }).catch(() => {});
    }
  });
  return Response.json({ ok: true });
}
