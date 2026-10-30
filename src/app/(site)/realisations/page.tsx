import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import RealisationCard from '@/components/RealisationCard';
import { REALISATIONS } from '@/content/realisations';
import { pageMetadata } from '@/lib/seo';
import { itemListSchema, themeSchemas, websiteGraph, type Crumb } from '@/lib/schema';

const PATH = '/realisations/';
const TITLE = 'Portfolio agence web Paris : nos réalisations | Kameo';
// v3 — le nombre de réalisations suit le portfolio réel (la v2 annonçait 21 pour 22 publiées)
const DESCRIPTION = `Portfolio de l’agence Kameo : ${REALISATIONS.length} réalisations clients en web, branding et motion design. PME, startups et marques premium accompagnées avec succès.`;
const CRUMBS: Crumb[] = [
  { name: 'Accueil', path: '/' },
  { name: 'Réalisations', path: '/realisations/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function RealisationsPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <main id="main">
        {/* ============ HERO ============ */}
        <section className="real-hero">
          <div className="container">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Réalisations <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="real-hero__title">
              Des idées transformées <br />
              en succès concrets{' '}
            </h1>
            <p className="real-hero__desc">Explorez nos réalisations qui allient audace créative et performances mesurables.</p>
            <p className="real-hero__desc" style={{ marginTop: '12px' }}>
              <Link href="/realisations/wordpress/" style={{ fontWeight: 700, color: 'var(--c-ink)' }}>
                Voir uniquement nos sites WordPress →
              </Link>
            </p>
          </div>
        </section>
        {/* ============ GRILLE PROJETS ============ */}
        <section className="real-grid-section">
          <div className="container">
            <div className="real-grid">
              {REALISATIONS.map((r) => (
                <RealisationCard key={r.slug} r={r} detailed />
              ))}
            </div>
          </div>
        </section>
      </main>
      <JsonLd
        data={[
          ...themeSchemas({
            path: PATH,
            crumbs: CRUMBS,
            extra: [itemListSchema(REALISATIONS.map((r) => ({ path: `/realisations/${r.slug}/`, name: r.title })))],
          }),
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
