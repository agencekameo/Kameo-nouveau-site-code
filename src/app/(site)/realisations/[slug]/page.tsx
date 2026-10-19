import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import RealisationCard from '@/components/RealisationCard';
import { REALISATIONS, getRealisation, type Img, type Realisation } from '@/content/realisations';
import { realisationDescription, realisationTitle, relatedServices } from '@/lib/realisation-seo';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, type Crumb } from '@/lib/schema';
import { CONTACT, SITE_URL, abs } from '@/lib/site';

/* Étude de cas (single-realisation.php). */

export const dynamicParams = false;
export function generateStaticParams() {
  return REALISATIONS.map((r) => ({ slug: r.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getRealisation((await params).slug);
  if (!r) return {};
  return pageMetadata({
    path: `/realisations/${r.slug}/`,
    title: realisationTitle(r),
    description: realisationDescription(r),
    image: r.hero ? abs(r.hero.src) : undefined,
    imageAlt: r.title,
    imageWidth: r.hero?.width,
    imageHeight: r.hero?.height,
  });
}

const Picture = ({ img, alt }: { img: Img; alt: string }) => (
  <img src={img.src} alt={alt} loading="lazy" width={img.width} height={img.height} />
);

/*
 * « Autres projets » : les 4 réalisations les plus récentes hors projet courant
 * (WP_Query orderby date DESC du thème, l'article précédent/suivant n'existant pas).
 * Les réalisations ex aequo sur la date sont départagées dans l'ordre observé sur le
 * site WordPress en ligne.
 */
const MOST_RECENT = ['defikart', 'le-101', 'medical-market', 'claimz', 'les-cars-du-plateau'];
function otherProjects(r: Realisation): Realisation[] {
  return MOST_RECENT.filter((slug) => slug !== r.slug)
    .slice(0, 4)
    .map((slug) => getRealisation(slug)!);
}

function creativeWork(r: Realisation) {
  const url = abs(`/realisations/${r.slug}/`);
  const cw: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': url + '#projet',
    name: r.title,
    url,
    inLanguage: 'fr-FR',
    creator: { '@id': SITE_URL + '/#organization' },
    provider: { '@id': SITE_URL + '/#organization' },
    datePublished: r.date,
    dateModified: r.modified,
    isPartOf: { '@type': 'CollectionPage', name: 'Réalisations', url: abs('/realisations/') },
  };
  if (r.description) cw.description = r.description;
  if (r.hero) cw.image = abs(r.hero.src);
  if (r.service) cw.about = r.service.split(',').map((s) => s.trim()).filter(Boolean);
  if (r.client) cw.sourceOrganization = { '@type': 'Organization', name: r.client };
  if (r.siteUrl) cw.workExample = { '@type': 'WebSite', url: r.siteUrl };
  return cw;
}

export default async function RealisationPage({ params }: Props) {
  const r = getRealisation((await params).slug);
  if (!r) notFound();
  const path = `/realisations/${r.slug}/`;
  const crumbs: Crumb[] = [
    { name: 'Accueil', path: '/' },
    { name: 'Réalisations', path: '/realisations/' },
    { name: r.title, path },
  ];
  const others = otherProjects(r);
  const related = relatedServices(r);

  return (
    <>
      <Breadcrumb items={crumbs} />
      <main id="main">
        <div className="container">
          <Link href="/realisations/" className="proj-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 3L5 8l5 5" />
            </svg>
            Retour aux réalisations{' '}
          </Link>
          {/* ── Project card ── */}
          <div className="proj-card">
            <div className="proj-card__top">
              <h1 className="proj-header__title">{r.title}</h1>
              {r.description && <p className="proj-header__desc">{r.description}</p>}
              {r.siteUrl && (
                <a href={r.siteUrl} className="proj-header__cta" target="_blank" rel="noopener">
                  Voir le site{' '}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" />
                  </svg>
                </a>
              )}
            </div>
            {r.hero && (
              <div className="proj-hero">
                <img src={r.hero.src} alt={`${r.title}, aperçu du projet`} fetchPriority="high" decoding="sync" width={r.hero.width} height={r.hero.height} />
              </div>
            )}
            {/* Meta pills */}
            <div className="proj-meta">
              <MetaItem label="Client" value={r.client || r.title}>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </MetaItem>
              {r.service && (
                <MetaItem label="Service rendu" value={r.service}>
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </MetaItem>
              )}
              {r.duree && (
                <MetaItem label="Durée" value={r.duree}>
                  <rect x="2" y="5" width="20" height="15" rx="2.5" />
                  <path d="M2 10h20" />
                  <circle cx="7" cy="7.5" r=".8" fill="currentColor" stroke="none" />
                  <circle cx="10" cy="7.5" r=".8" fill="currentColor" stroke="none" />
                </MetaItem>
              )}
            </div>
          </div>
        </div>
        {/* ── Content sections ── */}
        <div className="container">
          {r.sections.map((sec, idx) =>
            idx === 2 ? (
              <TextOnly key={idx} sec={sec} solo={r.solo} title={r.title} />
            ) : (
              <div className="proj-section-stack" key={idx}>
                {(sec.title || sec.body) && (
                  <div className="proj-section-stack__text">
                    {sec.title && <h2 className="proj-section__title">{sec.title}</h2>}
                    {sec.body && <p className="proj-section__body">{sec.body}</p>}
                  </div>
                )}
                {(sec.img1 || sec.img2) && (
                  <div className="proj-section-stack__imgs">
                    {sec.img1 && (
                      <div className="proj-section-stack__img">
                        <Picture img={sec.img1} alt={r.title} />
                      </div>
                    )}
                    {sec.img2 && (
                      <div className="proj-section-stack__img">
                        <Picture img={sec.img2} alt={r.title} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ),
          )}
          {/* Citation client */}
          {r.quote && (
            <div className="proj-section-stack__text" style={{ margin: 'clamp(40px,5vw,72px) auto clamp(40px,5vw,64px)' }}>
              <blockquote className="proj-quote">
                <p className="proj-quote__text">{r.quote}</p>
                {r.quoteAuthor && <p className="proj-quote__author">{r.quoteAuthor}</p>}
              </blockquote>
            </div>
          )}
          {/* Image finale pleine largeur */}
          {r.fullImg && (
            <div className="proj-fullimg" style={{ marginBottom: '0' }}>
              <Picture img={r.fullImg} alt={`${r.title}, image complète`} />
            </div>
          )}
        </div>
        {/* ── CTA ── */}
        <div className="container">
          <div className="proj-page-cta">
            <a href={CONTACT.calendly} target="_blank" rel="noopener" className="proj-page-cta__btn">
              Réserver un appel gratuit avec nous{' '}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 11L11 3M11 3H6M11 3V8" />
              </svg>
            </a>
          </div>
        </div>
        {/* ── Autres projets ── */}
        <div className="container">
          <section className="proj-other">
            <h2 className="proj-other__head">Autres projets</h2>
            <div className="proj-other__grid">
              {others.map((o) => (
                <RealisationCard key={o.slug} r={o} />
              ))}
            </div>
          </section>
        </div>
        {/* ── Prestations liées ── */}
        <section className="proj-related">
          <div className="container">
            <h2 className="proj-related__head">Un projet similaire&nbsp;?</h2>
            <p className="proj-related__intro">
              Voici les prestations mobilisées sur ce projet. Parlons du vôtre&nbsp;: brief découverte de 30&nbsp;minutes, gratuit et sans
              engagement.
            </p>
            <div className="proj-related__grid">
              {related.map(([href, label, desc]) => (
                <Link href={href} className="proj-related__card" key={href}>
                  <span className="proj-related__card-title">{label}</span>
                  <span className="proj-related__card-desc">{desc}</span>
                  <span className="proj-related__card-arrow" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <JsonLd
        data={[
          ...themeSchemas({ path, crumbs }),
          creativeWork(r),
        ]}
      />
    </>
  );
}

function MetaItem({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  return (
    <div className="proj-meta__item">
      <span className="proj-meta__icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {children}
        </svg>
      </span>
      <div>
        <p className="proj-meta__label">{label}</p>
        <p className="proj-meta__value">{value}</p>
      </div>
    </div>
  );
}

/* Troisième section : image solo pleine largeur puis texte seul. */
function TextOnly({ sec, solo, title }: { sec: Realisation['sections'][number]; solo: Img | null; title: string }) {
  return (
    <>
      {solo && (
        <div className="proj-section-stack__imgs" style={{ marginBottom: '16px' }}>
          <div className="proj-section-stack__img" style={{ gridColumn: '1/-1', aspectRatio: '4/3' }}>
            <Picture img={solo} alt={title} />
          </div>
        </div>
      )}
      <div className="proj-section-stack__text" style={{ margin: 'clamp(40px,5vw,72px) auto clamp(40px,5vw,64px)' }}>
        {sec.title && <h2 className="proj-section__title">{sec.title}</h2>}
        {sec.body && <p className="proj-section__body">{sec.body}</p>}
      </div>
    </>
  );
}
