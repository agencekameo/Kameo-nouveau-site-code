import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { GeoCta, fr } from '@/components/geo/GeoBlocks';
import { GLOSSAIRE, GLOSSAIRE_MAJ, GLOSSAIRE_TERMS } from '@/content/geo-glossaire';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { abs } from '@/lib/site';
import css from '@/styles/pages/geo';

const PATH = '/glossaire-geo/';
const N = GLOSSAIRE_TERMS.length;
const TITLE = `Glossaire GEO : ${N} mots du référencement IA expliqués | Kameo`;
const DESCRIPTION = `Glossaire du GEO et du référencement IA : ${N} définitions courtes et sourcées (Aperçus IA, OAI-SearchBot, part de voix, llms.txt…) pour comprendre comment les IA citent les entreprises.`;
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Agence GEO', path: '/agence-geo/' },
  { name: 'Glossaire GEO', path: PATH },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

const plain = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const MAJ = new Date(GLOSSAIRE_MAJ + 'T12:00:00Z').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

/* DefinedTermSet : chaque terme a son ancre sur la page. */
function glossarySchema(): object {
  const url = abs(PATH);
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': url + '#glossaire',
    name: 'Glossaire GEO',
    description: DESCRIPTION,
    url,
    inLanguage: 'fr-FR',
    hasDefinedTerm: GLOSSAIRE_TERMS.map((t) => ({
      '@type': 'DefinedTerm',
      '@id': `${url}#${t.id}`,
      name: t.name,
      description: plain(t.def),
      url: `${url}#${t.id}`,
      inDefinedTermSet: { '@id': url + '#glossaire' },
    })),
  };
}

export default function GlossaireGeoPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main id="main">
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Glossaire GEO <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Glossaire GEO&nbsp;: <br />
              <span className="page-hero__title-muted">les mots du référencement IA, expliqués simplement</span>
            </h1>
            <p className="page-hero__text">
              {N} définitions courtes pour comprendre comment ChatGPT, Gemini et les autres IA choisissent les
              entreprises qu’elles citent. Chiffres datés et sourcés, mis à jour le {MAJ}.
            </p>
          </div>
        </section>

        {/* ============ SOMMAIRE ============ */}
        <section className="geo-brief" aria-label="Sommaire du glossaire">
          <div className="container">
            <nav className="glo-index">
              {GLOSSAIRE.map((g) => (
                <div key={g.id}>
                  <p className="glo-index__title">
                    <a href={`#${g.id}`}>{g.title}</a>
                  </p>
                  <ul className="glo-index__list">
                    {g.terms.map((t) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`}>{t.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </section>

        {/* ============ DÉFINITIONS ============ */}
        <section className="geo-section geo-section--soft">
          <div className="container">
            {GLOSSAIRE.map((g) => (
              <div className="glo-group" key={g.id} id={g.id}>
                <h2 className="glo-group__title">{g.title}</h2>
                {g.terms.map((t) => (
                  <div className="glo-term" id={t.id} key={t.id}>
                    <h3 className="glo-term__name">{t.name}</h3>
                    <p className="glo-term__def" dangerouslySetInnerHTML={{ __html: fr(t.def) }} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <GeoCta
          title="Passer de la théorie à la pratique"
          text="Un appel de 30 minutes, gratuit et en visio : on regarde ensemble ce que les IA disent de votre entreprise et par où commencer."
          secondary={{ href: '/audit-geo/', label: 'Voir l’audit GEO' }}
        />
      </main>

      <JsonLd data={[...themeSchemas({ path: PATH, crumbs: CRUMBS }), glossarySchema(), websiteGraph({ path: PATH, title: TITLE })]} />
    </>
  );
}
