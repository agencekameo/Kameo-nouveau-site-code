import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteEffects from '@/components/SiteEffects';

/* Pages régénérées au plus toutes les heures : les prix GEO et l'offre en cours (GEO_PROMO, en-tête
   compris) se mettent à jour seuls, par exemple à la fin du Black Friday, sans nouvelle mise en ligne. */
export const revalidate = 3600;

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
