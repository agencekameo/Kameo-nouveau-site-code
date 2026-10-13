import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteEffects from '@/components/SiteEffects';

/* Gabarit commun : lien d'évitement, en-tête, contenu de page, pied de page. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu principal
      </a>
      <Header />
      {children}
      <Footer />
      <SiteEffects />
    </>
  );
}
