import { NextResponse, type NextRequest } from 'next/server';
import { isGone, redirectTarget } from '@/lib/redirects';

/*
 * Aiguillage des requêtes, en un seul saut comme sous WordPress :
 *  1. redirections 301 (thème, tri du blog, anciennes URLs, fichiers de l'ancien thème) ;
 *  2. contenus supprimés → 410 Gone ;
 *  3. ajout du « / » final par 301 (permaliens WordPress) ;
 *  4. recherche « /?s=… » (formulaire de la page 404) → /recherche/.
 */
function decode(p: string): string {
  try {
    return decodeURIComponent(p);
  } catch {
    return p;
  }
}

/** Redirection 301 vers le même site uniquement (défense en profondeur contre les redirections ouvertes). */
function redirectSameOrigin(dest: URL, base: URL) {
  if (dest.origin !== base.origin || dest.pathname.startsWith('//')) return new NextResponse(null, { status: 400 });
  return NextResponse.redirect(dest, 301);
}

export function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const path = decode(url.pathname);

  const target = redirectTarget(path);
  if (target) {
    const dest = new URL(target, url);
    dest.search = url.search;
    return redirectSameOrigin(dest, url);
  }

  if (isGone(path)) {
    const r = url.clone();
    r.pathname = '/gone-410/';
    r.search = '';
    return NextResponse.rewrite(r);
  }

  const last = url.pathname.split('/').pop() || '';
  if (!url.pathname.endsWith('/') && !last.includes('.') && !url.pathname.startsWith('/api/')) {
    // URL standard : le NextURL cloné reformate le chemin et retirerait le « / » ajouté
    return redirectSameOrigin(new URL(url.pathname + '/' + url.search, req.url), new URL(req.url));
  }

  if (url.pathname === '/' && url.searchParams.has('s')) {
    const r = url.clone();
    r.pathname = '/recherche/';
    return NextResponse.rewrite(r);
  }
  return NextResponse.next();
}

export const config = {
  // tout sauf les ressources Next et les fichiers du dossier public
  matcher: ['/((?!_next/|images/|fonts/|video/|wp-content/uploads/|icons\\.svg|robots\\.txt|humans\\.txt|\\.well-known/).*)'],
};
