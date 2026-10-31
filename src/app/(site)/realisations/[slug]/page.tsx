import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import RealisationCard from '@/components/RealisationCard';
import { REALISATIONS, getRealisation, prestations, type Img, type Realisation } from '@/content/realisations';
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

/*
 * Ligne « Voir aussi » du bloc « Le projet en bref » : offres correspondant au projet,
 * déduites des seules données vérifiées (technologies, refonte, prestations). Trois liens au plus.
 */
function offerLinks(r: Realisation): [string, string][] {
  const tech = r.technologies ?? [];
  const wp = tech.includes('WordPress');
  const out: [string, string][] = [];
  if (wp && r.refonte) out.push(['/refonte-wordpress/', 'Refonte de site WordPress']);
  if (tech.includes('WooCommerce') || tech.includes('Shopify')) out.push(['/creation-site-ecommerce/', 'Création de site e-commerce']);
  if (wp && !r.refonte) out.push(['/creation-site-wordpress/', 'Création de site WordPress']);
  if (/\b(?:da|direction artistique|logo)\b/i.test(r.service)) out.push(['/expertises-branding/', 'Branding et identité visuelle']);
  if (wp) out.push(['/realisations/wordpress/', 'Nos autres réalisations WordPress']);
  return out.slice(0, 3);
}

/* « Direction artistique, Site web, Réseaux sociaux » → « Direction artistique, site web, réseaux sociaux ». */
const prestationsPhrase = (list: string[]) =>
  list.map((p, i) => (i === 0 ? p : p.charAt(0).toLowerCase() + p.slice(1))).join(', ');

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
  const prest = prestations(r);
  if (prest.length) cw.about = prest;
  if (r.technologies?.length) cw.keywords = r.technologies;
  if (r.client) cw.sourceOrganization = { '@type': 'Organization', name: r.client };
  if (r.siteUrl) cw.workExample = { '@type': 'WebSite', url: r.siteUrl };
  return cw;
}

/* Icônes du bloc « Le projet en bref » (même tracé que les pastilles d'origine). */
const ICONS = {
  client: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  secteur: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 13h18" />
    </>
  ),
  duree: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  suivi: (
    <>
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <path d="M21 4v5h-5" />
    </>
  ),
  refonte: (
    <>
      <path d="M4 8h14l-3.5-3.5" />
      <path d="M20 16H6l3.5 3.5" />
    </>
  ),
  prestations: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  technologies: (
    <>
      <path d="M8.5 7L3.5 12l5 5" />
      <path d="M15.5 7l5 5-5 5" />
    </>
  ),
  resultats: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 6-6.5" />
    </>
  ),
};

type BriefEntry = { key: string; label: string; icon: React.ReactNode; value: React.ReactNode };

/*
 * Fiche du projet : uniquement les données renseignées, aucune ligne vide. Les valeurs courtes
 * (client, secteur, délai, accompagnement) partagent la première rangée, les valeurs longues
 * (type de projet, prestations, technologies) la deuxième, les résultats mesurés la troisième.
 */
function ProjectBrief({ r }: { r: Realisation }) {
  const prest = prestations(r);
  const short: BriefEntry[] = [{ key: 'client', label: 'Client', icon: ICONS.client, value: r.client || r.title }];
  if (r.secteur) short.push({ key: 'secteur', label: 'Secteur', icon: ICONS.secteur, value: r.secteur });
  if (r.duree) short.push({ key: 'duree', label: 'Délai de réalisation', icon: ICONS.duree, value: r.duree });
  if (r.suivi) short.push({ key: 'suivi', label: 'Accompagnement après la mise en ligne', icon: ICONS.suivi, value: r.suivi });
  const long: BriefEntry[] = [];
  if (r.refonte) long.push({ key: 'refonte', label: 'Type de projet', icon: ICONS.refonte, value: r.refonte });
  if (prest.length)
    long.push({ key: 'prestations', label: 'Ce que Kameo a réalisé', icon: ICONS.prestations, value: prestationsPhrase(prest) });
  if (r.technologies?.length)
    long.push({
      key: 'technologies',
      label: 'Technologies',
      icon: ICONS.technologies,
      value: (
        <ul className="proj-meta__tags">
          {r.technologies.flatMap((t, i) => [i > 0 ? ' ' : null, <li className="proj-meta__tag" key={t}>{t}</li>])}
        </ul>
      ),
    });
  const links = offerLinks(r);
  return (
    <section className="proj-brief" aria-labelledby="projet-en-bref">
      <h2 className="proj-brief__title" id="projet-en-bref">
        Le projet en bref
      </h2>
      <dl className="proj-meta">
        {short.map((e) => (
          <BriefItem key={e.key} entry={e} span={Math.floor(12 / short.length)} />
        ))}
        {long.map((e) => (
          <BriefItem key={e.key} entry={e} span={Math.floor(12 / long.length)} />
        ))}
        {r.resultats && r.resultats.length > 0 && (
          <BriefItem
            entry={{ key: 'resultats', label: 'Résultats mesurés', icon: ICONS.resultats, value: <Results r={r} /> }}
            span={12}
            className="proj-meta__item--results"
          />
        )}
      </dl>
      {links.length > 0 && (
        <p className="proj-links">
          <span className="proj-links__label">Voir aussi&nbsp;:</span>
          {links.map(([href, label]) => (
            <Fragment key={href}>
              {' '}
              <Link href={href} className="proj-links__link">
                {label}
              </Link>
            </Fragment>
          ))}
        </p>
      )}
    </section>
  );
}

function BriefItem({ entry, span, className }: { entry: BriefEntry; span: number; className?: string }) {
  return (
    <div
      className={className ? `proj-meta__item ${className}` : 'proj-meta__item'}
      style={{ '--span': span } as React.CSSProperties}
    >
      <dt className="proj-meta__label">
        <span className="proj-meta__icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {entry.icon}
          </svg>
        </span>
        {entry.label}
      </dt>
      <dd className="proj-meta__value">{entry.value}</dd>
    </div>
  );
}

/* Résultats mesurés : chiffres, période et source de la mesure, puis la capture de l'outil quand elle existe. */
function Results({ r }: { r: Realisation }) {
  return (
    <div className="proj-results">
      <div className="proj-results__main">
        <ul className="proj-results__list">
          {r.resultats!.map((x) => (
            <li className="proj-results__item" key={x.libelle}>
              <span className="proj-results__value">{x.valeur}</span>{' '}
              <span className="proj-results__label">{x.libelle}</span>
              {x.detail && (
                <>
                  {' '}
                  <span className="proj-results__detail">({x.detail})</span>
                </>
              )}
            </li>
          ))}
        </ul>
        {(r.periodeResultats || r.sourceResultats) && (
          <p className="proj-results__note">
            {r.periodeResultats && <>Période de mesure&nbsp;: {r.periodeResultats}.</>}
            {r.periodeResultats && r.sourceResultats && ' '}
            {r.sourceResultats && <>Source&nbsp;: {r.sourceResultats}.</>}
          </p>
        )}
      </div>
      {r.preuveResultats && (
        <figure className="proj-results__proof">
          <img
            src={r.preuveResultats.img.src}
            alt={r.preuveResultats.legende}
            loading="lazy"
            width={r.preuveResultats.img.width}
            height={r.preuveResultats.img.height}
          />
          <figcaption>{r.preuveResultats.legende}</figcaption>
        </figure>
      )}
    </div>
  );
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
            {/* Le projet en bref (remplace les pastilles Client / Service rendu / Réalisation / Accompagnement) */}
            <ProjectBrief r={r} />
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
            {/* Offres proposées pour un projet comparable : la liste est déduite du texte du projet,
                elle ne détaille donc pas les prestations réellement réalisées (voir « Le projet en bref »). */}
            <p className="proj-related__intro">
              Nos offres pour un projet comparable. Parlons du vôtre&nbsp;: brief découverte de 30&nbsp;minutes, gratuit et sans
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
