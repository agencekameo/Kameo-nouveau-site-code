import { timingSafeEqual } from 'node:crypto';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse, after } from 'next/server';
import { revalidateBlog } from '@/lib/blog-api';
import { BLOG_CACHE_TAG } from '@/lib/blog-remote';

/*
 * POST /api/revalidate : appelée par l'outil de rédaction « Blog » à chaque publication, mise à
 * jour ou suppression d'article. En-tête x-revalidate-secret (variable BLOG_REVALIDATE_SECRET),
 * corps facultatif { paths: ["/blog/mon-article", …] }.
 * Purge le cache des appels à l'API (étiquette « blog », expiration immédiate), les chemins reçus,
 * puis tout le blog (liste, pages, sitemaps, flux, llms.txt). Une fois la réponse envoyée, le site
 * redemande lui-même ces pages : Next les régénère aussitôt, et le premier visiteur (ou le robot
 * prévenu par IndexNow) reçoit déjà la nouvelle version au lieu de l'ancienne.
 */
export const dynamic = 'force-dynamic';

function sameSecret(given: string | null, expected: string): boolean {
  if (!given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(req: Request) {
  const secret = process.env.BLOG_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ ok: false, error: 'BLOG_REVALIDATE_SECRET non configuré' }, { status: 503 });
  if (!sameSecret(req.headers.get('x-revalidate-secret'), secret)) {
    return NextResponse.json({ ok: false, error: 'secret invalide' }, { status: 401 });
  }

  let paths: string[] = [];
  try {
    const body: unknown = await req.json();
    const list = body && typeof body === 'object' ? (body as { paths?: unknown }).paths : undefined;
    if (Array.isArray(list)) {
      paths = list
        .filter((p): p is string => typeof p === 'string' && p.startsWith('/') && !p.startsWith('//') && p.length <= 300)
        .map((p) => p.split(/[?#]/)[0])
        .slice(0, 200);
    }
  } catch {
    // corps vide ou invalide : purge générale seulement
  }

  revalidateTag(BLOG_CACHE_TAG, { expire: 0 });
  for (const p of paths) {
    // le site sert ses pages avec « / » final : les deux formes, quelle que soit celle reçue
    const bare = p.replace(/\/+$/, '') || '/';
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
  return NextResponse.json({ ok: true });
}
