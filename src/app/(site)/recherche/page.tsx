import type { Metadata } from 'next';
import Link from 'next/link';
import { search } from '@/lib/search';

/* Résultats de la recherche interne (« /?s=… », réécrit par le proxy). Non indexée. */
export const metadata: Metadata = {
  title: { absolute: 'Recherche | Kameo' },
  robots: { index: false, follow: true },
};

type Props = { searchParams: Promise<{ s?: string | string[] }> };

export default async function SearchPage({ searchParams }: Props) {
  const raw = (await searchParams).s; // « ?s=a&s=b » donne un tableau
  const q = (Array.isArray(raw) ? (raw[0] ?? '') : (raw ?? '')).slice(0, 100);
  const results = search(q);
  return (
    <main id="main">
      <section className="page-hero error-404">
        <div className="container error-404__inner">
          <span className="page-hero__eyebrow">
            <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
            Recherche <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
          </span>
          <h1 className="error-404__title">{q ? `Résultats pour « ${q} »` : 'Rechercher sur le site'}</h1>
          <form role="search" method="get" className="error-404__search" action="/">
            <label className="error-404__search-label" htmlFor="s-search">
              Rechercher sur le site
            </label>
            <div className="error-404__search-row">
              <input type="search" id="s-search" name="s" placeholder="Rechercher un article, un service…" defaultValue={q} />
              <button type="submit" className="btn btn--primary">
                Rechercher
              </button>
            </div>
          </form>
          <nav className="error-404__links" aria-label="Résultats">
            <p className="error-404__links-title">
              {q ? `${results.length} résultat${results.length > 1 ? 's' : ''}` : 'Ou reprenez ici :'}
            </p>
            <ul>
              {(q ? results : results.slice(0, 0)).map((r) => (
                <li key={r.path}>
                  <Link href={r.path}>
                    {r.title} <small>({r.kind})</small>
                  </Link>
                </li>
              ))}
              {!q || !results.length ? (
                <>
                  <li>
                    <Link href="/agence-wordpress-paris/">Agence WordPress Paris</Link>
                  </li>
                  <li>
                    <Link href="/developpement-sur-mesure/">Développement sur-mesure</Link>
                  </li>
                  <li>
                    <Link href="/realisations/">Nos réalisations</Link>
                  </li>
                  <li>
                    <Link href="/blog/">Le blog</Link>
                  </li>
                </>
              ) : null}
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}
