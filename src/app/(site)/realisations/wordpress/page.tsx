import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import RealisationCard from '@/components/RealisationCard';
import { REALISATIONS, type Realisation } from '@/content/realisations';
import { PROOF } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';
import { itemListSchema, themeSchemas, websiteGraph, type Crumb } from '@/lib/schema';

/**
 * Réalisations construites sous WordPress, vérifiées le 30/10/2026 sur les sites en ligne
 * (thème, Elementor et WooCommerce chargés par la page d'accueil). Répond à la sous-requête
 * « portfolio / références agence WordPress Paris » sans concurrencer /realisations/ (tous les projets).
 */
const WORDPRESS: { slug: string; secteur: string; type: string; construction: 'Elementor Pro' | 'Thème codé sur mesure' }[] = [
  { slug: 'medical-market', secteur: 'Vente de matériel de santé', type: 'Boutique WooCommerce', construction: 'Thème codé sur mesure' },
  { slug: 'dronespec', secteur: 'Relevés par drone pour le BTP', type: 'Site vitrine', construction: 'Thème codé sur mesure' },
  { slug: 'defikart', secteur: 'Karting indoor à Toulouse', type: 'Site vitrine', construction: 'Elementor Pro' },
  { slug: 'axistone-capital', secteur: 'Investissement immobilier', type: 'Site vitrine', construction: 'Elementor Pro' },
  { slug: 'les-cars-du-plateau', secteur: 'Transport de voyageurs', type: 'Site vitrine', construction: 'Thème codé sur mesure' },
  { slug: 'imperatrice-developpement', secteur: 'Formation en intelligence économique', type: 'Site vitrine', construction: 'Thème codé sur mesure' },
  { slug: 'casajaia', secteur: 'Maison et art de vivre', type: 'Boutique WooCommerce', construction: 'Elementor Pro' },
  { slug: 'sed-paris', secteur: 'Matériel de manutention', type: 'Boutique WooCommerce', construction: 'Elementor Pro' },
  { slug: 'villa-de-luxe-bonifacio', secteur: 'Location de villas en Corse', type: 'Site vitrine', construction: 'Elementor Pro' },
  { slug: 'wineguide', secteur: 'Œnotourisme en Provence', type: 'Site vitrine', construction: 'Elementor Pro' },
  { slug: 'claimz', secteur: 'Gestion de sinistres', type: 'Site vitrine', construction: 'Elementor Pro' },
  { slug: 'agence-marnat', secteur: 'Agence de communication', type: 'Site vitrine', construction: 'Elementor Pro' },
  { slug: 'qunfil', secteur: 'Art textile', type: 'Site vitrine', construction: 'Elementor Pro' },
  { slug: 'ohvale', secteur: 'Mini-motos de compétition', type: 'Site vitrine', construction: 'Elementor Pro' },
];

const SITES = WORDPRESS.map((w) => ({ ...w, r: REALISATIONS.find((r) => r.slug === w.slug) })).filter(
  (s): s is (typeof WORDPRESS)[number] & { r: Realisation } => Boolean(s.r),
);
const N = SITES.length;
const N_ELEMENTOR = SITES.filter((s) => s.construction === 'Elementor Pro').length;
const N_SHOPS = SITES.filter((s) => s.type === 'Boutique WooCommerce').length;

const PATH = '/realisations/wordpress/';
const TITLE = `Portfolio agence WordPress Paris : ${N} sites livrés | Kameo`;
const DESCRIPTION = `${N} sites WordPress livrés par Kameo : vitrines et boutiques WooCommerce, construits avec Elementor Pro ou un thème codé, avec secteur et étude de cas.`;
const CRUMBS: Crumb[] = [
  { name: 'Accueil', path: '/' },
  { name: 'Réalisations', path: '/realisations/' },
  { name: 'Sites WordPress', path: PATH },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

const css = `
  .rwp-hero .real-hero__desc { max-width: 640px; font-size: 16px; }
  .rwp-facts { padding: 0 0 clamp(40px, 5vw, 64px); }
  .rwp-title { font-family: var(--ff-heading); font-size: clamp(24px, 3vw, 32px); font-weight: 900; letter-spacing: -.02em; line-height: 1.2; color: var(--c-ink); text-align: center; margin: 0 0 12px; }
  .rwp-lead { max-width: 660px; margin: 0 auto 28px; text-align: center; font-size: 15.5px; line-height: 1.6; color: var(--c-muted-2); }
  .rwp-table-wrap { max-width: 1000px; margin: 0 auto; overflow-x: auto; background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 18px; }
  .rwp-table { width: 100%; min-width: 680px; border-collapse: collapse; font-size: 14.5px; }
  .rwp-table th, .rwp-table td { padding: 13px 18px; text-align: left; vertical-align: middle; border-bottom: 1px solid rgba(15,17,21,.06); }
  .rwp-table th { background: #F9FAFB; font-size: 12px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: rgba(15,17,21,.55); }
  .rwp-table tr:last-child td { border-bottom: 0; }
  .rwp-table td a { color: var(--c-ink); font-weight: 700; text-decoration: none; }
  .rwp-table td a:hover { color: var(--c-accent); }
  .rwp-table td .rwp-ext { font-weight: 500; color: rgba(15,17,21,.55); font-size: 13.5px; }
  .rwp-tag { display: inline-block; padding: 3px 10px; border-radius: 999px; font-size: 12.5px; font-weight: 600; white-space: nowrap; background: rgba(225,75,137,.08); color: #E14B89; }
  .rwp-tag--code { background: rgba(15,17,21,.06); color: var(--c-ink); }
  .rwp-cta { padding: 0 0 clamp(60px, 8vw, 100px); text-align: center; }
  .rwp-cta__links { display: flex; flex-wrap: wrap; gap: 14px 22px; align-items: center; justify-content: center; }
  .rwp-cta__link { font-weight: 700; color: var(--c-ink); }
  @media (max-width: 640px) {
    .rwp-table { min-width: 0; }
    .rwp-table thead { display: none; }
    .rwp-table tbody, .rwp-table tr, .rwp-table td { display: block; }
    .rwp-table tr { padding: 14px 16px; border-bottom: 1px solid rgba(15,17,21,.06); }
    .rwp-table tr:last-child { border-bottom: 0; }
    .rwp-table td { padding: 2px 0; border: 0; }
    .rwp-table td:first-child { font-size: 16px; margin-bottom: 4px; }
    .rwp-table td[data-label]::before { content: attr(data-label) ' : '; color: rgba(15,17,21,.5); }
    .rwp-table td .rwp-tag { margin: 6px 0 4px; }
  }
`;

export default function RealisationsWordPressPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main id="main">
        {/* ============ HERO ============ */}
        <section className="real-hero rwp-hero">
          <div className="container">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Réalisations WordPress <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="real-hero__title">Portfolio WordPress : {N} sites livrés par Kameo</h1>
            <p className="real-hero__desc">
              Sites vitrines et boutiques WooCommerce conçus par notre agence WordPress, avec Elementor Pro ou un thème
              codé sur mesure. Kameo a livré plus de {PROOF.projetsTotal} sites depuis 2023, dont environ trois quarts sous
              WordPress.
            </p>
          </div>
        </section>
        {/* ============ TABLEAU ============ */}
        <section className="rwp-facts">
          <div className="container">
            <h2 className="rwp-title">Les {N} sites en un coup d'œil</h2>
            <p className="rwp-lead">
              {N_ELEMENTOR} sites construits avec Elementor Pro, {N - N_ELEMENTOR} sur un thème codé sur mesure, dont{' '}
              {N_SHOPS} boutiques WooCommerce. Résultat publié : sur les six mois suivant sa mise en ligne, Medical Market
              a multiplié ses clics Google par 10 et augmenté ses commandes en ligne de 20&nbsp;%.
            </p>
            <div className="rwp-table-wrap">
              <table className="rwp-table">
                <thead>
                  <tr>
                    <th scope="col">Client</th>
                    <th scope="col">Secteur</th>
                    <th scope="col">Type de site</th>
                    <th scope="col">Construction</th>
                    <th scope="col">Site</th>
                  </tr>
                </thead>
                <tbody>
                  {SITES.map((s) => (
                    <tr key={s.slug}>
                      <td>
                        <Link href={`/realisations/${s.slug}/`}>{s.r.title}</Link>
                      </td>
                      <td data-label="Secteur">{s.secteur}</td>
                      <td data-label="Type">{s.type}</td>
                      <td>
                        <span className={s.construction === 'Elementor Pro' ? 'rwp-tag' : 'rwp-tag rwp-tag--code'}>
                          {s.construction}
                        </span>
                      </td>
                      <td>
                        <a className="rwp-ext" href={s.r.siteUrl} target="_blank" rel="noopener">
                          {s.r.siteUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* ============ GRILLE ============ */}
        <section className="real-grid-section">
          <div className="container">
            <div className="real-grid">
              {SITES.map((s) => (
                <RealisationCard key={s.slug} r={s.r} detailed />
              ))}
            </div>
          </div>
        </section>
        {/* ============ SUITE ============ */}
        <section className="rwp-cta">
          <div className="container">
            <h2 className="rwp-title">Un projet WordPress ?</h2>
            <p className="rwp-lead">
              Landing page dès 1 299 € HT, site vitrine dès 1 999 € HT, boutique WooCommerce dès 2 999 € HT. Devis sous
              24 h.
            </p>
            <div className="rwp-cta__links">
              <Link href="/contact/" className="btn btn--primary">
                Demander un devis
              </Link>
              <Link href="/agence-wordpress-paris/#tarifs" className="rwp-cta__link">
                Voir nos tarifs WordPress
              </Link>
              <Link href="/realisations/" className="rwp-cta__link">
                Toutes nos réalisations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <JsonLd
        data={[
          ...themeSchemas({
            path: PATH,
            crumbs: CRUMBS,
            extra: [
              itemListSchema(
                SITES.map((s) => ({ path: `/realisations/${s.slug}/`, name: s.r.title })),
                { path: PATH, name: 'Réalisations WordPress de Kameo' },
              ),
            ],
          }),
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
