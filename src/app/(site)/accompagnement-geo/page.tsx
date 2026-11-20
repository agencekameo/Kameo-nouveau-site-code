import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import {
  GeoCta,
  GeoEngines,
  GeoFaq,
  GeoHeroActions,
  GeoMaj,
  GeoMidCta,
  GeoOfferCard,
  GeoPromoBanner,
  GeoTerms,
  faqSchema,
  fr,
} from '@/components/geo/GeoBlocks';
import {
  GEO_ENGAGEMENTS,
  GEO_ENGINES,
  GEO_MIN_MONTHS,
  GEO_PROMO,
  GEO_QUESTIONS,
  GEO_RAPPORT,
  auditsGeo,
  euros,
  faqAccompagnement,
  fourchetteQuestions,
  grilleDecembreActive,
  nombre,
  plansGeo,
  prixBarre,
  prixDuJour,
  promoGeoActive,
  remiseGeoUniforme,
  remiseMaxGeo,
  reponsesParMois,
} from '@/content/geo';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import css from '@/styles/pages/geo';

const PATH = '/accompagnement-geo/';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Agence GEO', path: '/agence-geo/' },
  { name: 'Accompagnement GEO', path: PATH },
];

/* Titre et description suivent l'offre en cours (GEO_PROMO) et la grille (nouvelle depuis le 20/11/2026) : calculés à l'affichage. */
const titre = () => {
  const [essentiel] = plansGeo();
  return promoGeoActive()
    ? `${GEO_PROMO.nom} : accompagnement GEO dès ${euros(prixDuJour(essentiel))} HT/mois | Kameo`
    : `Accompagnement GEO dès ${euros(prixDuJour(essentiel))} HT/mois, audit offert | Kameo`;
};
const description = () => {
  const plans = plansGeo();
  const de = `3 formules de ${euros(prixDuJour(plans[0]))} à ${euros(prixDuJour(plans[2]))} HT/mois, `;
  const dec = grilleDecembreActive();
  const debut = dec
    ? 'Accompagnement GEO : de 20 à 60 questions suivies sur ChatGPT, Gemini, Perplexity et Claude, corrections, fiches et notoriété.'
    : 'Accompagnement GEO : mesure mensuelle sur ChatGPT, Gemini, Perplexity et Claude, corrections et notoriété.';
  if (promoGeoActive()) return `${debut} ${de}offre ${GEO_PROMO.nom} jusqu'au ${GEO_PROMO.finTexte}.`;
  return `${debut} ${de}${dec ? "3 mois d'engagement." : 'audit offert.'}`;
};

export function generateMetadata(): Metadata {
  return pageMetadata({ path: PATH, title: titre(), description: description() });
}

const REPONSES = GEO_QUESTIONS * GEO_ENGINES.length;
const YES = '✓';
const NO = '—';

/* Comparatif des formules : [ligne, Essentiel, Croissance, Autorité] ; une cellule est incluse (✓), absente (—) ou décrite. */
type Cell = boolean | string;
const ROWS_NOVEMBRE: [string, Cell, Cell, Cell][] = [
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
const ROWS_DECEMBRE: [string, Cell, Cell, Cell][] = [
  ['Pour qui', 'Une activité principale, sur une zone ou toute la France', 'Jusqu’à 3 services ou 3 villes', 'Jusqu’à 6 services ou villes, ou un secteur très disputé'],
  ['Audit offert au démarrage', 'Audit GEO Express', 'Audit GEO Complet', 'Audit GEO Complet élargi (60 questions, 5 concurrents)'],
  ['Questions suivies sur les 4 IA', '20', '40', '60'],
  ['Réponses analysées chaque mois', nombre(reponsesParMois(20)), nombre(reponsesParMois(40)), nombre(reponsesParMois(60))],
  ['Concurrents suivis', 'Ceux cités à votre place', '3, choisis avec vous', '5, choisis avec vous'],
  ['Corrections techniques de votre site', true, true, true],
  ['Indexation dans Google, Bing et Brave', true, true, true],
  ['Pages existantes améliorées chaque mois', '3', '5', '10'],
  ['Fiche ChatGPT (Business Hub)', true, true, true],
  ['Fiches Google et Bing', 'À faire vous-même, textes prêts', 'À faire vous-même, textes prêts', 'Créées ou reprises, puis tenues à jour'],
  ['Annuaires et sites d’avis', 'À faire vous-même, textes prêts', '2 inscriptions par mois', '2 inscriptions par mois'],
  ['Demandes d’avis clients', 'Conseils', 'Méthode et modèles de réponse', 'Méthode et modèles de réponse'],
  ['Erreurs des IA corrigées à la source', false, true, true],
  ['Comparatifs, médias et partenaires', false, false, '3 démarches par mois, sans place payante'],
  ['Nouveaux contenus', false, '2 par mois, validés par vous', '4 par mois, validés par vous'],
  ['Rapport mensuel', true, true, true],
  ['Point en visio', 'Au démarrage et au bilan des 3 mois', '30 minutes chaque mois', '1 heure chaque mois avec le fondateur'],
];

export default function AccompagnementGeoPage() {
  const promo = promoGeoActive();
  const dec = grilleDecembreActive();
  const [ESSENTIEL, CROISSANCE, AUTORITE] = plansGeo();
  const [EXPRESS, COMPLET] = auditsGeo();
  const f = fourchetteQuestions();
  const rows = dec ? ROWS_DECEMBRE : ROWS_NOVEMBRE;
  const faq = faqAccompagnement();
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
                {promo ? (
                  <>
                    <strong>{GEO_PROMO.nom}</strong>&nbsp;: dès <strong>{euros(prixDuJour(ESSENTIEL))} HT/mois</strong>
                  </>
                ) : (
                  <>
                    Dès <strong>{euros(prixDuJour(ESSENTIEL))} HT/mois</strong>
                  </>
                )}
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                {dec ? 'Audit' : 'Audit Express'} <strong>offert</strong>
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                {dec ? (
                  <>
                    <strong>
                      {f.min} à {f.max} questions
                    </strong>{' '}
                    suivies sur 4 IA
                  </>
                ) : (
                  <>
                    <strong>{REPONSES} réponses</strong> analysées chaque mois
                  </>
                )}
              </span>
            </div>
            <GeoHeroActions anchor="#formules" anchorLabel="Voir les 3 formules" />
            <GeoEngines items={GEO_ENGINES} />
            <GeoMaj path={PATH} />
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
                  Kameo propose trois formules&nbsp;: <strong>{ESSENTIEL.name}</strong> à {euros(prixDuJour(ESSENTIEL))}{' '}
                  HT, <strong>{CROISSANCE.name}</strong> à {euros(prixDuJour(CROISSANCE))} HT et{' '}
                  <strong>{AUTORITE.name}</strong> à {euros(prixDuJour(AUTORITE))} HT par mois,{' '}
                  {dec ? <>avec 3&nbsp;mois d’engagement, puis sans engagement.</> : <>avec un engagement de {GEO_MIN_MONTHS} mois minimum.</>}
                  {promo && (
                    <>
                      {' '}
                      Ce sont les prix {GEO_PROMO.nom}, au lieu de {euros(ESSENTIEL.price)}, {euros(CROISSANCE.price)} et{' '}
                      {euros(AUTORITE.price)}, pour toute signature jusqu’au {GEO_PROMO.finTexte}.
                    </>
                  )}
                </p>
              </div>
              <ul className="geo-brief__facts">
                {promo && (
                  <li>
                    <span>
                      <strong>Offre {GEO_PROMO.nom}</strong>&nbsp;:{' '}
                      {remiseGeoUniforme() ? <>−{remiseMaxGeo()}&nbsp;% sur chaque formule</> : <>jusqu’à −{remiseMaxGeo()}&nbsp;%</>}{' '}
                      jusqu’au {GEO_PROMO.finTexte}, prix conservé pendant tout l’engagement
                      {dec ? <>, soit 6&nbsp;mois si vous vous engagez sur 6&nbsp;mois</> : null}
                    </span>
                  </li>
                )}
                {dec ? (
                  <>
                    <li>
                      <span>
                        <strong>Audit offert</strong> au démarrage (valeur {euros(EXPRESS.price)} à {euros(COMPLET.price)} HT)
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>
                          {f.min} à {f.max} questions
                        </strong>{' '}
                        posées 3 fois à {GEO_ENGINES.length} IA toutes les deux semaines
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>Fiche ChatGPT et indexation</strong> dans Google, Bing et Brave, dans les 3 formules
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>3 mois d’engagement</strong>, puis sans engagement
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>Garantie de livrables</strong> : un livrable manquant est déduit de la facture
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>12 mois pour le prix de 11</strong>
                      </span>
                    </li>
                  </>
                ) : (
                  <>
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
                  </>
                )}
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
            <GeoPromoBanner />
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
                  {rows.map(([label, ...cells]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      {cells.map((on, i) =>
                        typeof on === 'string' ? (
                          <td key={i} className="is-txt">
                            {fr(on)}
                          </td>
                        ) : (
                          <td key={i} className={on ? 'is-yes' : 'is-no'}>
                            <span aria-hidden="true">{on ? YES : NO}</span>
                            <span className="sr-only">{on ? 'Inclus' : 'Non inclus'}</span>
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                  <tr className="geo-table__price">
                    <th scope="row">Prix par mois</th>
                    {[ESSENTIEL, CROISSANCE, AUTORITE].map((p) => {
                      const barre = prixBarre(p);
                      return (
                        <td key={p.id}>
                          {euros(prixDuJour(p))} HT
                          {barre !== null && (
                            <del>
                              <span className="sr-only">Prix normal : </span>
                              {euros(barre)}
                            </del>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
            {dec && (
              <p className="geo-table__note">
                {fr('Essentiel et Croissance : 3 actions par mois à faire vous-même (fiches Google et Bing, annuaires, avis), avec les textes prêts. Fiche ChatGPT : si votre entreprise y est éligible.')}
              </p>
            )}
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
                {fr(
                  `Le premier mois démarre par ${dec ? 'l’audit' : 'l’Audit GEO Express'} et son plan d’action ; ensuite, le même cycle se répète chaque mois.`,
                )}
              </p>
            </header>
            <ol className="expertise-process__steps">
              <li className="expertise-process__step">
                <span className="expertise-process__num">01</span>
                <h3 className="expertise-process__step-title">Mesurer</h3>
                <p className="expertise-process__step-text">
                  {fr(
                    dec
                      ? `Vos ${f.min} à ${f.max} questions clés posées 3 fois à ChatGPT, Gemini, Perplexity et Claude, toutes les deux semaines : absent, mentionné, cité ou recommandé, IA par IA.`
                      : `Vos ${GEO_QUESTIONS} questions clés posées à ChatGPT, Gemini, Perplexity et Claude : absent, mentionné, cité ou recommandé, IA par IA.`,
                  )}
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
                  {fr(
                    dec
                      ? 'Un rapport mensuel clair et les priorités du mois suivant ; un point en visio chaque mois avec Croissance et Autorité.'
                      : 'Un rapport mensuel clair et les priorités du mois suivant ; avec la formule Autorité, un call pour en parler.',
                  )}
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* ============ POURQUOI L'ENGAGEMENT ============ */}
        <section className="geo-section" aria-labelledby="geo-time-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Engagement</span>
              <h2 className="geo-head__title" id="geo-time-title">
                {dec ? <>Pourquoi 3&nbsp;mois d’engagement&nbsp;?</> : <>Pourquoi {GEO_MIN_MONTHS} mois minimum&nbsp;?</>}
              </h2>
            </header>
            <div className="geo-prose">
              <p>
                Les IA ne prennent pas en compte vos changements du jour au lendemain&nbsp;: en général, les premiers effets
                se voient 4&nbsp;à&nbsp;6&nbsp;semaines après les corrections. Une page corrigée doit être
                relue par leurs robots, une nouvelle fiche doit être indexée, des avis doivent s’accumuler, et chaque IA
                renouvelle ses sources à son propre rythme.
              </p>
              {dec ? (
                <p>
                  Leurs réponses varient aussi d’un essai à l’autre&nbsp;: un relevé isolé ne prouve rien. Trois mois,
                  c’est six relevés et assez de réponses pour un premier bilan, IA par IA. Ensuite, la formule est sans
                  engagement&nbsp;: vous restez si le travail vous convient, et vous pouvez résilier par simple e-mail,
                  avec 30&nbsp;jours de préavis.
                </p>
              ) : (
                <p>
                  Leurs réponses varient aussi d’un essai à l’autre&nbsp;: un mois isolé ne prouve rien. Suivre les mêmes{' '}
                  {GEO_QUESTIONS} questions pendant {GEO_MIN_MONTHS} mois permet de distinguer une vraie progression
                  d’une variation passagère. C’est le délai réaliste pour juger le travail, et nous le disons avant de
                  commencer.
                </p>
              )}
            </div>
          </div>
        </section>

        {dec && (
          <>
            {/* ============ RAPPORT MENSUEL ============ */}
            <section className="geo-section geo-section--soft" aria-labelledby="geo-report-title">
              <div className="container">
                <header className="geo-head">
                  <span className="geo-head__eyebrow">Rapport mensuel</span>
                  <h2 className="geo-head__title" id="geo-report-title">
                    Ce que vous voyez chaque mois
                  </h2>
                  <p className="geo-head__intro">Dans toutes les formules, un rapport clair, IA par IA.</p>
                </header>
                <div className="geo-table-wrap">
                  <table className="geo-table">
                    <caption className="sr-only">Contenu du rapport mensuel</caption>
                    <tbody>
                      {GEO_RAPPORT.map(([titreLigne, texte]) => (
                        <tr key={titreLigne}>
                          <th scope="row">{titreLigne}</th>
                          <td>{fr(texte)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ============ NOS ENGAGEMENTS ============ */}
            <section className="geo-section" aria-labelledby="geo-commit-title">
              <div className="container">
                <header className="geo-head">
                  <span className="geo-head__eyebrow">Nos engagements</span>
                  <h2 className="geo-head__title" id="geo-commit-title">
                    Ce qui est garanti, et ce qui ne l’est pas
                  </h2>
                </header>
                <ul className="geo-cards geo-cards--2">
                  {GEO_ENGAGEMENTS.map(([titreCarte, texte]) => (
                    <li key={titreCarte} className="geo-card">
                      <h3 className="geo-card__title">{titreCarte}</h3>
                      <p className="geo-card__text">{fr(texte)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        )}

        <GeoMidCta
          title="Pas encore sûr de la formule ?"
          text={`Commencez par un audit GEO : vous saurez où vous en êtes, et son prix est déduit si vous démarrez un accompagnement dans le mois.`}
          href="/audit-geo/"
          label="Voir l’audit GEO"
        />

        <GeoFaq items={faq} title="Vos questions sur l’accompagnement GEO" />

        <GeoCta
          title="Choisissez votre accompagnement GEO"
          text="Diagnostic express gratuit : 30 minutes en visio pour voir, en direct, ce que les IA disent de vous et choisir la formule qui vous correspond."
          secondary={{ href: '/agence-geo/', label: 'Notre approche du GEO' }}
        />
      </main>

      <JsonLd
        data={[
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'accompagnement-geo' }),
          faqSchema(faq, PATH),
          websiteGraph({ path: PATH, title: titre(), signee: true }),
        ]}
      />
    </>
  );
}
