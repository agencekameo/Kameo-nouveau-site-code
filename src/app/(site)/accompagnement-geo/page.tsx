import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { GeoCta, GeoEngines, GeoFaq, GeoHeroActions, GeoMidCta, GeoOfferCard, GeoTerms, faqSchema } from '@/components/geo/GeoBlocks';
import { FAQ_ACCOMPAGNEMENT, GEO_AUDITS, GEO_ENGINES, GEO_MIN_MONTHS, GEO_PLANS, GEO_QUESTIONS, euros } from '@/content/geo';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import css from '@/styles/pages/geo';

const PATH = '/accompagnement-geo/';
const [ESSENTIEL, CROISSANCE, AUTORITE] = GEO_PLANS;
const EXPRESS = GEO_AUDITS[0];
const TITLE = `Accompagnement GEO dès ${euros(ESSENTIEL.price)} HT/mois, audit offert | Kameo`;
const DESCRIPTION = `Accompagnement GEO : mesure mensuelle sur ChatGPT, Gemini, Perplexity et Claude, corrections et notoriété. 3 formules de ${euros(ESSENTIEL.price)} à ${euros(AUTORITE.price)} HT/mois, audit offert.`;
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Agence GEO', path: '/agence-geo/' },
  { name: 'Accompagnement GEO', path: PATH },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

const REPONSES = GEO_QUESTIONS * GEO_ENGINES.length;
const YES = '✓';
const NO = '—';

/* Comparatif des formules : [ligne, Essentiel, Croissance, Autorité] */
const ROWS: [string, boolean, boolean, boolean][] = [
  ['Audit GEO Express et plan d’action offerts au démarrage', true, true, true],
  ['Corrections techniques appliquées sur votre site', true, true, true],
  [`Mesure mensuelle : ${GEO_QUESTIONS} questions clés × ${GEO_ENGINES.length} IA`, true, true, true],
  ['Analyse des résultats et rapport mensuel', true, true, true],
  ['Stratégie de notoriété (fiches, avis, comparatifs)', true, true, true],
  ['Création de fiches et profils, jusqu’à 3 par mois', false, true, true],
  ['Inscription dans les annuaires et comparatifs consultés par les IA', false, true, true],
  ['Stratégie de collecte d’avis clients', false, true, true],
  ['Contenus optimisés pour les IA, jusqu’à 5 par mois', false, false, true],
  ['Cartographie mensuelle des médias cités par les IA', false, false, true],
  ['Call mensuel de suivi', false, false, true],
];

export default function AccompagnementGeoPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main id="main">
        {/* ============ HÉROS ============ */}
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Accompagnement GEO <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Accompagnement GEO&nbsp;: progressez chaque mois <br />
              <span className="page-hero__title-muted">dans les réponses des IA</span>
            </h1>
            <p className="page-hero__text">
              Mesurer, corriger, faire autorité&nbsp;: chaque mois, Kameo suit votre visibilité dans ChatGPT, Gemini,
              Perplexity et Claude, applique les corrections sur votre site et développe votre présence sur les sites
              que les IA utilisent comme sources.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                Dès <strong>{euros(ESSENTIEL.price)} HT/mois</strong>
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Audit Express <strong>offert</strong>
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                <strong>{REPONSES} réponses</strong> analysées chaque mois
              </span>
            </div>
            <GeoHeroActions anchor="#formules" anchorLabel="Voir les 3 formules" />
            <GeoEngines items={GEO_ENGINES} />
          </div>
        </section>

        {/* ============ EN BREF ============ */}
        <section className="geo-brief" aria-labelledby="geo-brief-title">
          <div className="container">
            <div className="geo-brief__box">
              <div>
                <h2 className="geo-brief__label" id="geo-brief-title">
                  L’accompagnement GEO en bref
                </h2>
                <p className="geo-brief__text">
                  Un <strong>accompagnement GEO</strong> est un suivi mensuel de votre visibilité dans les réponses des
                  intelligences artificielles, avec le travail qui la fait progresser&nbsp;: corrections du site, présence
                  sur les plateformes que les IA consultent, avis clients et contenus.
                </p>
                <p className="geo-brief__text">
                  Kameo propose trois formules&nbsp;: <strong>{ESSENTIEL.name}</strong> à {euros(ESSENTIEL.price)} HT,{' '}
                  <strong>{CROISSANCE.name}</strong> à {euros(CROISSANCE.price)} HT et <strong>{AUTORITE.name}</strong>{' '}
                  à {euros(AUTORITE.price)} HT par mois, avec un engagement de {GEO_MIN_MONTHS} mois minimum.
                </p>
              </div>
              <ul className="geo-brief__facts">
                <li>
                  <span>
                    <strong>Audit GEO Express offert</strong> au démarrage (valeur {euros(EXPRESS.price)} HT)
                  </span>
                </li>
                <li>
                  <span>
                    <strong>
                      {GEO_QUESTIONS} questions × {GEO_ENGINES.length} IA
                    </strong>{' '}
                    mesurées chaque mois, soit {REPONSES} réponses
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Rapport mensuel clair</strong> : ce qui progresse, ce qui recule, qui est cité à votre place
                  </span>
                </li>
                <li>
                  <span>
                    <strong>1 mois offert</strong> pour tout engagement annuel
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ 3 FORMULES ============ */}
        <section className="geo-section geo-section--soft" id="formules" aria-labelledby="geo-plans-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Tarifs</span>
              <h2 className="geo-head__title" id="geo-plans-title">
                3 formules d’accompagnement GEO
              </h2>
              <p className="geo-head__intro">
                Progresser chaque mois, avec l’audit offert au démarrage. Prix hors taxes, par mois.
              </p>
            </header>
            <div className="geo-plans__grid">
              <GeoOfferCard offer={ESSENTIEL} />
              <GeoOfferCard offer={CROISSANCE} badge="Recommandé" />
              <GeoOfferCard offer={AUTORITE} />
            </div>
            <GeoTerms />
          </div>
        </section>

        {/* ============ COMPARATIF ============ */}
        <section className="geo-section" aria-labelledby="geo-compare-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Comparatif</span>
              <h2 className="geo-head__title" id="geo-compare-title">
                Ce que comprend chaque formule
              </h2>
            </header>
            <div className="geo-table-wrap">
              <table className="geo-table geo-table--plans">
                <caption className="sr-only">Comparatif des formules Essentiel, Croissance et Autorité</caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr-only">Prestation</span>
                    </th>
                    <th scope="col">{ESSENTIEL.name}</th>
                    <th scope="col" className="is-hot">
                      {CROISSANCE.name}
                    </th>
                    <th scope="col">{AUTORITE.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([label, ...cells]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      {cells.map((on, i) => (
                        <td key={i} className={on ? 'is-yes' : 'is-no'}>
                          <span aria-hidden="true">{on ? YES : NO}</span>
                          <span className="sr-only">{on ? 'Inclus' : 'Non inclus'}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="geo-table__price">
                    <th scope="row">Prix par mois</th>
                    {GEO_PLANS.map((p) => (
                      <td key={p.id}>{euros(p.price)} HT</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============ CHAQUE MOIS ============ */}
        <section className="expertise-process" aria-labelledby="process-title" style={{ background: '#F9FAFB' }}>
          <div className="container">
            <header className="expertise-process__head">
              <span className="expertise-process__eyebrow">
                <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
                Chaque mois <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
              </span>
              <h2 className="expertise-process__title" id="process-title">
                Un cycle mensuel, du constat aux actions
              </h2>
              <p className="expertise-process__intro">
                Le premier mois démarre par l’Audit GEO Express et son plan d’action&nbsp;; ensuite, le même cycle se répète
                chaque mois.
              </p>
            </header>
            <ol className="expertise-process__steps">
              <li className="expertise-process__step">
                <span className="expertise-process__num">01</span>
                <h3 className="expertise-process__step-title">Mesurer</h3>
                <p className="expertise-process__step-text">
                  Vos {GEO_QUESTIONS} questions clés posées à ChatGPT, Gemini, Perplexity et Claude&nbsp;: absent, mentionné,
                  cité ou recommandé, IA par IA.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">02</span>
                <h3 className="expertise-process__step-title">Analyser</h3>
                <p className="expertise-process__step-text">
                  Ce qui a progressé ou reculé, les concurrents cités à votre place et les sources que les IA ont
                  utilisées.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">03</span>
                <h3 className="expertise-process__step-title">Agir</h3>
                <p className="expertise-process__step-text">
                  Corrections sur votre site, puis selon la formule&nbsp;: fiches et annuaires, collecte d’avis, contenus
                  optimisés pour les IA.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">04</span>
                <h3 className="expertise-process__step-title">Rendre compte</h3>
                <p className="expertise-process__step-text">
                  Un rapport mensuel clair et les priorités du mois suivant&nbsp;; avec la formule Autorité, un call pour en
                  parler.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* ============ POURQUOI 6 MOIS ============ */}
        <section className="geo-section" aria-labelledby="geo-time-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Engagement</span>
              <h2 className="geo-head__title" id="geo-time-title">
                Pourquoi {GEO_MIN_MONTHS} mois minimum&nbsp;?
              </h2>
            </header>
            <div className="geo-prose">
              <p>
                Les IA ne prennent pas en compte vos changements du jour au lendemain. Une page corrigée doit être
                relue par leurs robots, une nouvelle fiche doit être indexée, des avis doivent s’accumuler, et chaque IA
                renouvelle ses sources à son propre rythme.
              </p>
              <p>
                Leurs réponses varient aussi d’un essai à l’autre&nbsp;: un mois isolé ne prouve rien. Suivre les mêmes{' '}
                {GEO_QUESTIONS} questions pendant {GEO_MIN_MONTHS} mois permet de distinguer une vraie progression
                d’une variation passagère. C’est le délai réaliste pour juger le travail, et nous le disons avant de
                commencer.
              </p>
            </div>
          </div>
        </section>

        <GeoMidCta
          title="Pas encore sûr de la formule ?"
          text={`Commencez par un audit GEO : vous saurez où vous en êtes, et son prix est déduit si vous démarrez un accompagnement dans le mois.`}
          href="/audit-geo/"
          label="Voir l’audit GEO"
        />

        <GeoFaq items={FAQ_ACCOMPAGNEMENT} title="Vos questions sur l’accompagnement GEO" />

        <GeoCta
          title="Choisissez votre accompagnement GEO"
          text="Un appel de 30 minutes, gratuit et en visio : on regarde votre situation et on vous conseille la formule qui vous correspond."
          secondary={{ href: '/agence-geo/', label: 'Notre approche du GEO' }}
        />
      </main>

      <JsonLd
        data={[
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'accompagnement-geo' }),
          faqSchema(FAQ_ACCOMPAGNEMENT, PATH),
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
