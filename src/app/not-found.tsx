import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteEffects from '@/components/SiteEffects';

/* Page 404 (404.php) : recherche + liens piliers, car elle reçoit le trafic des anciennes URLs. */

export const metadata: Metadata = {
  title: { absolute: 'Page introuvable (404) | Kameo' },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main">
        <section className="page-hero error-404">
          <div className="container error-404__inner">
            <span className="error-404__code" aria-hidden="true">
              404
            </span>
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Page introuvable <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="error-404__title">Oups, cette page n’existe pas</h1>
            <p className="error-404__text">
              La page que vous cherchez a peut-être été déplacée, supprimée ou l’adresse a été mal saisie.
            </p>
            <div className="error-404__actions">
              <Link href="/" className="btn btn--primary">
                Retour à l’accueil{' '}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 11L11 3M11 3H6M11 3V8" />
                </svg>
              </Link>
              <Link href="/contact/" className="btn btn--ghost">
                Nous contacter{' '}
              </Link>
            </div>
            <form role="search" method="get" className="error-404__search" action="/">
              <label className="error-404__search-label" htmlFor="s404">
                Rechercher sur le site
              </label>
              <div className="error-404__search-row">
                <input type="search" id="s404" name="s" placeholder="Rechercher un article, un service…" defaultValue="" />
                <button type="submit" className="btn btn--primary">
                  Rechercher
                </button>
              </div>
            </form>
            <nav className="error-404__links" aria-label="Pages principales">
              <p className="error-404__links-title">Ou reprenez ici&nbsp;:</p>
              <ul>
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
              </ul>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
