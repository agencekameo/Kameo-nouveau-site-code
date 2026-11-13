import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { GeoCta, GeoEngines, GeoFaq, GeoHeroActions, GeoMidCta, GeoPromoBanner, GeoTerms, faqSchema } from '@/components/geo/GeoBlocks';
import {
  GEO_AUDITS,
  GEO_ENGINES,
  GEO_PLANS,
  GEO_PROMO,
  GEO_QUESTIONS,
  GEO_RESOURCES,
  euros,
  faqAgence,
  prixBarre,
  prixDuJour,
  promoGeoActive,
} from '@/content/geo';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { PROOF } from '@/lib/site';
import css from '@/styles/pages/geo';

const PATH = '/agence-geo/';
const TITLE = 'Agence GEO Paris : référencement IA sur ChatGPT et Gemini | Kameo';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Agence GEO', path: PATH },
];

/* Prix des accompagnements : suivent l'offre en cours (GEO_PROMO), donc calculés à l'affichage. */
export function generateMetadata(): Metadata {
  const description = `Agence GEO (Generative Engine Optimization) : soyez cité par ChatGPT, Gemini, Perplexity et Claude. Audit dès ${euros(GEO_AUDITS[0].price)} HT, accompagnement dès ${euros(prixDuJour(GEO_PLANS[0]))} HT/mois.`;
  return pageMetadata({ path: PATH, title: TITLE, description });
}

const AUDIT_MIN = euros(GEO_AUDITS[0].price);
const REPONSES = GEO_QUESTIONS * GEO_ENGINES.length;

export default function AgenceGeoPage() {
  const promo = promoGeoActive();
  const PLAN_MIN = euros(prixDuJour(GEO_PLANS[0]));
  const faq = faqAgence();
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
              Agence GEO · Référencement IA <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Agence GEO&nbsp;: faites partie des réponses <br />
              <span className="page-hero__title-muted">que ChatGPT, Gemini et les IA recommandent</span>
            </h1>
            <p className="page-hero__text">
              Vos futurs clients ne posent plus seulement leurs questions à Google&nbsp;: ils demandent à ChatGPT, Gemini,
              Perplexity ou Claude quel prestataire choisir. Kameo mesure ce que ces IA disent de vous, corrige ce qui
              les empêche de vous citer et installe votre marque parmi les entreprises qu’elles recommandent.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                Audit dès <strong>{AUDIT_MIN} HT</strong>
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                {promo ? (
                  <>
                    <strong>{GEO_PROMO.nom}</strong>&nbsp;: accompagnement dès <strong>{PLAN_MIN} HT/mois</strong>
                  </>
                ) : (
                  <>
                    Accompagnement dès <strong>{PLAN_MIN} HT/mois</strong>
                  </>
                )}
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                <strong>★ {PROOF.avisNote}/5</strong> sur Trustpilot · {PROOF.avisNombre} avis
              </span>
            </div>
            <GeoHeroActions anchor="#offres" anchorLabel="Voir les offres et les prix" />
            <GeoEngines items={GEO_ENGINES} />
          </div>
        </section>

        {/* ============ EN BREF ============ */}
        <section className="geo-brief" aria-labelledby="geo-brief-title">
          <div className="container">
            <div className="geo-brief__box">
              <div>
                <h2 className="geo-brief__label" id="geo-brief-title">
                  Le GEO en bref
                </h2>
                <p className="geo-brief__text">
                  Le <strong>GEO (Generative Engine Optimization)</strong>, aussi appelé référencement IA, consiste à
                  rendre une entreprise visible dans les réponses des intelligences artificielles génératives&nbsp;: ChatGPT,
                  Gemini, Perplexity, Claude ou les Aperçus IA de Google. Là où le SEO vise une place dans une liste de
                  liens, le GEO vise une place dans la réponse elle-même.
                </p>
                <p className="geo-brief__text">
                  Kameo, agence GEO et web fondée en 2023, propose deux formats : un{' '}
                  <Link href="/audit-geo/">audit GEO</Link> ponctuel (Express {euros(GEO_AUDITS[0].price)} HT, Complet{' '}
                  {euros(GEO_AUDITS[1].price)} HT) et un <Link href="/accompagnement-geo/">accompagnement GEO</Link>{' '}
                  mensuel, de {PLAN_MIN} à {euros(prixDuJour(GEO_PLANS[2]))} HT par mois
                  {promo ? ` (prix ${GEO_PROMO.nom} jusqu’au ${GEO_PROMO.finTexte})` : ''}.
                </p>
              </div>
              <ul className="geo-brief__facts">
                <li>
                  <span>
                    <strong>{GEO_ENGINES.length} IA testées</strong> : ChatGPT, Gemini, Perplexity et Claude
                  </span>
                </li>
                <li>
                  <span>
                    <strong>{REPONSES} réponses analysées</strong> chaque mois en accompagnement ({GEO_QUESTIONS}{' '}
                    questions × {GEO_ENGINES.length} IA)
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Corrections appliquées</strong> sur votre site par une équipe qui conçoit des sites depuis 2023
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Prix publics</strong>, audit déduit si vous continuez avec nous
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ GEO ET SEO ============ */}
        <section className="geo-section geo-section--soft" aria-labelledby="geo-def-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">GEO ou référencement IA</span>
              <h2 className="geo-head__title" id="geo-def-title">
                Être la réponse, pas seulement un lien
              </h2>
            </header>
            <div className="geo-prose">
              <p>
                Quand on demande à une IA «&nbsp;quelle agence choisir pour…&nbsp;» ou «&nbsp;quel logiciel pour gérer…&nbsp;», elle ne
                renvoie pas dix liens&nbsp;: elle rédige une réponse et n’y cite que quelques entreprises. Pour choisir, elle
                s’appuie sur ce qu’elle trouve sur le web au moment de la question (votre site, les annuaires, les avis,
                les comparatifs, la presse) et sur ce qu’elle a appris pendant son entraînement.
              </p>
              <p>
                Le GEO travaille ces deux leviers&nbsp;: rendre votre site <strong>facile à lire et à citer</strong> pour les
                IA, et multiplier les <strong>sources fiables</strong> qui parlent de vous. Il ne remplace pas le SEO, il
                le prolonge.
              </p>
              <p>
                Le terme vient d’une{' '}
                <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener">
                  étude publiée en novembre 2023
                </a>{' '}
                par des chercheurs de Princeton et de l’IIT Delhi&nbsp;: citer ses sources, ajouter des citations et des
                statistiques y augmentait jusqu’à environ 40 % la part d’une page reprise dans les réponses, alors que
                le bourrage de mots-clés n’apportait rien.
              </p>
            </div>
            <div className="geo-table-wrap" style={{ marginTop: 'clamp(28px,4vw,40px)' }}>
              <table className="geo-table geo-table--stack">
                <caption className="sr-only">Différences entre le SEO et le GEO</caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="sr-only">Critère</span>
                    </th>
                    <th scope="col">SEO (référencement naturel)</th>
                    <th scope="col" className="is-hot">
                      GEO (référencement IA)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Objectif</th>
                    <td data-label="SEO">Être bien classé dans les résultats de Google</td>
                    <td data-label="GEO" className="is-geo">Être cité et recommandé dans la réponse d’une IA</td>
                  </tr>
                  <tr>
                    <th scope="row">Ce que voit l’internaute</th>
                    <td data-label="SEO">Une liste de liens</td>
                    <td data-label="GEO" className="is-geo">Une réponse rédigée qui ne cite que quelques sources</td>
                  </tr>
                  <tr>
                    <th scope="row">Où</th>
                    <td data-label="SEO">Google, Bing</td>
                    <td data-label="GEO" className="is-geo">ChatGPT, Gemini, Perplexity, Claude, Aperçus IA de Google, Copilot</td>
                  </tr>
                  <tr>
                    <th scope="row">Leviers</th>
                    <td data-label="SEO">Contenu, technique, liens entrants</td>
                    <td data-label="GEO" className="is-geo">Réponses claires, données structurées, informations cohérentes, avis, annuaires, médias</td>
                  </tr>
                  <tr>
                    <th scope="row">Mesure</th>
                    <td data-label="SEO">Positions, clics, trafic</td>
                    <td data-label="GEO" className="is-geo">Citations et recommandations, concurrents cités, sources utilisées par les IA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="geo-source">
              Point commun&nbsp;: un site rapide, lisible et bien structuré sert les deux. C’est par là que commence tout
              travail de GEO.
            </p>
          </div>
        </section>

        {/* ============ CHIFFRES ============ */}
        <section className="geo-section" aria-labelledby="geo-stats-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Pourquoi maintenant</span>
              <h2 className="geo-head__title" id="geo-stats-title">
                Le GEO en quatre chiffres
              </h2>
            </header>
            <ul className="geo-stats">
              <li className="geo-stat">
                <p className="geo-stat__value">Juillet 2026</p>
                <p className="geo-stat__text">Lancement en France des Aperçus IA et du Mode IA de Google, le 22 juillet.</p>
                <p className="geo-stat__src">
                  Source&nbsp;:{' '}
                  <a
                    href="https://blog.google/intl/fr-fr/nouveautes-produits/explorez-obtenez-des-r%C3%A9ponses/recherche-ia-apercus-mode/"
                    target="_blank"
                    rel="noopener"
                  >
                    Google France
                  </a>
                </p>
              </li>
              <li className="geo-stat">
                <p className="geo-stat__value">52,6 %</p>
                <p className="geo-stat__text">des recherches françaises étudiées affichaient un Aperçu IA en août 2026.</p>
                <p className="geo-stat__src">
                  Source&nbsp;:{' '}
                  <a href="https://seranking.com/fr/blog/etude-apercus-ia-france/" target="_blank" rel="noopener">
                    SE Ranking, août 2026
                  </a>
                </p>
              </li>
              <li className="geo-stat">
                <p className="geo-stat__value">33 millions</p>
                <p className="geo-stat__text">
                  de Français utilisent un service d’IA chaque mois&nbsp;; ChatGPT capte 76 % du temps passé.
                </p>
                <p className="geo-stat__src">
                  Source&nbsp;:{' '}
                  <a
                    href="https://www.arcom.fr/en/find-out-more/studies-and-data/studies-reviews-and-reports/artificial-intelligence-services-audience-barometer-1st-edition"
                    target="_blank"
                    rel="noopener"
                  >
                    Arcom et Médiamétrie, juin 2026
                  </a>
                </p>
              </li>
              <li className="geo-stat">
                <p className="geo-stat__value">43,8 %</p>
                <p className="geo-stat__text">
                  des pages citées par ChatGPT pour recommander logiciels, produits ou agences sont des listes «&nbsp;les
                  meilleurs…&nbsp;».
                </p>
                <p className="geo-stat__src">
                  Source&nbsp;:{' '}
                  <a href="https://ahrefs.com/blog/best-lists-research/" target="_blank" rel="noopener">
                    Ahrefs, décembre 2025
                  </a>
                </p>
              </li>
            </ul>
            <p className="geo-source">
              À nuancer&nbsp;: pour chercher une information, 59 % des utilisateurs d’IA préfèrent encore un moteur de
              recherche (
              <a
                href="https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/barometre-du-numerique/le-barometre-du-numerique-edition-2026.html"
                target="_blank"
                rel="noopener"
              >
                Baromètre du numérique 2026
              </a>
              ). Le GEO complète le SEO, il ne le remplace pas.
            </p>
          </div>
        </section>

        {/* ============ POURQUOI LES IA NE VOUS CITENT PAS ============ */}
        <section className="geo-section geo-section--soft" aria-labelledby="geo-why-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Diagnostic</span>
              <h2 className="geo-head__title" id="geo-why-title">
                Pourquoi les IA ne vous citent pas (encore)
              </h2>
              <p className="geo-head__intro">
                Six blocages fréquents&nbsp;: les trois premiers se corrigent sur votre site, les trois autres en dehors.
              </p>
            </header>
            <ul className="geo-cards">
              <li className="geo-card">
                <h3 className="geo-card__title">Leurs robots ne peuvent pas lire votre site</h3>
                <p className="geo-card__text">
                  Un fichier robots.txt trop strict, un pare-feu qui bloque les robots d’IA, ou un contenu affiché en
                  JavaScript, que la plupart de ces robots ne lisent pas&nbsp;: l’IA ne voit alors qu’une page vide.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Vos pages ne répondent pas aux questions</h3>
                <p className="geo-card__text">
                  Services flous, prix absents, pas de réponse claire à «&nbsp;pour qui&nbsp;?&nbsp;», «&nbsp;combien&nbsp;?&nbsp;», «&nbsp;en combien de
                  temps&nbsp;?&nbsp;»&nbsp;: l’IA cite plus volontiers une page qui répond franchement.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Les IA ne savent pas qui vous êtes</h3>
                <p className="geo-card__text">
                  Pas de page «&nbsp;à propos&nbsp;» claire, des services décrits en termes vagues, une ville ou une zone jamais
                  nommée&nbsp;: l’IA peine à vous relier à votre métier et à votre clientèle.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Vos informations se contredisent</h3>
                <p className="geo-card__text">
                  Nom, adresse, services ou prix différents entre votre site, votre fiche Google et les annuaires&nbsp;: les
                  IA se méfient des sources qui se contredisent et préfèrent un concurrent plus net.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Personne d’autre ne parle de vous</h3>
                <p className="geo-card__text">
                  Les IA croisent leurs sources&nbsp;: absent des annuaires, des comparatifs, des avis, de LinkedIn ou des
                  médias de votre secteur, vous passez après ceux dont on parle, même avec un bon site.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Vos concurrents ont pris la place</h3>
                <p className="geo-card__text">
                  Une réponse d’IA ne cite que quelques noms. Ceux qui ont travaillé leur présence avant vous occupent
                  ces places, question après question.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <GeoMidCta
          title="Que disent les IA de votre entreprise ?"
          text={`L’Audit GEO Express vous le montre, IA par IA, avec un plan d’action priorisé, pour ${AUDIT_MIN} HT.`}
          href="/audit-geo/"
          label="Découvrir l’audit GEO"
        />

        {/* ============ MÉTHODE ============ */}
        <section className="geo-section geo-section--soft" aria-labelledby="geo-method-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Notre méthode</span>
              <h2 className="geo-head__title" id="geo-method-title">
                Mesurer, corriger, faire autorité
              </h2>
              <p className="geo-head__intro">
                Trois étapes, dans cet ordre&nbsp;: on ne corrige bien que ce qu’on a mesuré, et une marque ne devient une
                référence que si son site est déjà lisible par les IA.
              </p>
            </header>
            <ol className="geo-steps">
              <li className="geo-step">
                <span className="geo-step__num">Étape 1</span>
                <h3 className="geo-step__name">Mesurer</h3>
                <p className="geo-step__text">
                  On interroge les principales IA comme le feraient vos clients, pour savoir si elles vous citent et ce
                  qu’elles disent de vous.
                </p>
                <ul className="geo-step__list">
                  <li>Les questions de vos clients, posées à ChatGPT, Gemini, Perplexity et Claude</li>
                  <li>Absent, mentionné, cité ou recommandé : le constat IA par IA</li>
                  <li>Les concurrents et les sources cités à votre place</li>
                </ul>
              </li>
              <li className="geo-step">
                <span className="geo-step__num">Étape 2</span>
                <h3 className="geo-step__name">Corriger</h3>
                <p className="geo-step__text">
                  On rend votre site lisible par les IA&nbsp;: structure, données, contenus et accès des robots.
                </p>
                <ul className="geo-step__list">
                  <li>Accès des robots d’IA (robots.txt, pare-feu, hébergeur)</li>
                  <li>Pages qui répondent clairement, lisibles sans JavaScript</li>
                  <li>Informations identiques partout, données structurées à jour</li>
                </ul>
              </li>
              <li className="geo-step">
                <span className="geo-step__num">Étape 3</span>
                <h3 className="geo-step__name">Faire autorité</h3>
                <p className="geo-step__text">
                  On renforce votre présence sur les sites, annuaires et médias que les IA utilisent comme sources.
                </p>
                <ul className="geo-step__list">
                  <li>Fiches et profils sur les plateformes clés</li>
                  <li>Annuaires, comparatifs et listes que les IA consultent</li>
                  <li>Avis clients et médias de votre secteur</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        {/* ============ OFFRES ============ */}
        <section className="geo-section" id="offres" aria-labelledby="geo-offers-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Offres et prix</span>
              <h2 className="geo-head__title" id="geo-offers-title">
                Un audit pour faire le point, un accompagnement pour progresser
              </h2>
              <p className="geo-head__intro">
                Des prix publics, hors taxes, sans surprise. Commencez par un audit, ou démarrez directement un
                accompagnement&nbsp;: l’Audit GEO Express y est offert.
              </p>
            </header>
            <GeoPromoBanner />
            <div className="geo-paths">
              <Link href="/audit-geo/" className="geo-path">
                <p className="geo-path__kicker">Audits ponctuels</p>
                <h3 className="geo-path__title">Audit GEO</h3>
                <p className="geo-path__text">
                  Faire le point une fois&nbsp;: votre visibilité dans les 4 IA, ce qui bloque sur votre site et un plan
                  d’action priorisé.
                </p>
                <ul className="geo-path__offers">
                  {GEO_AUDITS.map((o) => (
                    <li key={o.id}>
                      {o.name}
                      <span>
                        {euros(o.price)} <small>HT</small>
                      </span>
                    </li>
                  ))}
                </ul>
                <span className="geo-path__link">Découvrir les audits →</span>
              </Link>
              <Link href="/accompagnement-geo/" className="geo-path">
                <p className="geo-path__kicker">Accompagnements mensuels</p>
                <h3 className="geo-path__title">Accompagnement GEO</h3>
                <p className="geo-path__text">
                  Progresser chaque mois&nbsp;: mesure sur {GEO_QUESTIONS} questions clés, corrections, présence externe et
                  contenus, selon la formule.
                </p>
                <ul className="geo-path__offers">
                  {GEO_PLANS.map((o) => {
                    const barre = prixBarre(o);
                    return (
                      <li key={o.id}>
                        {o.name}
                        <span>
                          {barre !== null && (
                            <del>
                              <span className="sr-only">Prix normal : </span>
                              {euros(barre)}
                            </del>
                          )}
                          {euros(prixDuJour(o))} <small>HT/mois</small>
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <span className="geo-path__link">Comparer les formules →</span>
              </Link>
            </div>
            <GeoTerms />
          </div>
        </section>

        {/* ============ MESURE ============ */}
        <section className="geo-section geo-section--soft" aria-labelledby="geo-measure-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Mesure</span>
              <h2 className="geo-head__title" id="geo-measure-title">
                Comment nous mesurons votre visibilité dans les IA
              </h2>
              <p className="geo-head__intro">
                Une méthode simple et vérifiable&nbsp;: les mêmes questions, les mêmes IA, chaque mois.
              </p>
            </header>
            <ul className="geo-cards geo-cards--2">
              <li className="geo-card">
                <h3 className="geo-card__title">Absent, mentionné, cité ou recommandé</h3>
                <p className="geo-card__text">
                  Pour chaque question et chaque IA, nous notons si votre entreprise est absente, simplement mentionnée,
                  citée avec un lien vers votre site, ou recommandée comme un bon choix.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Ce que les IA disent de vous</h3>
                <p className="geo-card__text">
                  Vos services, vos prix, votre zone&nbsp;: une information fausse ou datée dans une réponse se corrige à la
                  source, sur votre site ou sur le site qui l’a diffusée.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Qui apparaît à votre place</h3>
                <p className="geo-card__text">
                  Les concurrents cités sur vos questions et les sites que les IA utilisent pour répondre dans votre
                  secteur&nbsp;: c’est là qu’il faut être présent.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Une tendance, pas une capture</h3>
                <p className="geo-card__text">
                  Les réponses des IA changent d’un essai à l’autre&nbsp;: selon{' '}
                  <a
                    href="https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/"
                    target="_blank"
                    rel="noopener"
                  >
                    SparkToro (janvier 2026)
                  </a>
                  , la même liste de marques revient moins d’une fois sur 100. D’où {GEO_QUESTIONS} questions suivies
                  chaque mois sur {GEO_ENGINES.length} IA, soit {REPONSES} réponses, plutôt qu’un «&nbsp;rang&nbsp;» trompeur.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ============ MOTEURS ============ */}
        <section className="geo-section" aria-labelledby="geo-engines-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Les IA qui comptent</span>
              <h2 className="geo-head__title" id="geo-engines-title">
                Référencement sur ChatGPT, Gemini, Perplexity, Claude et les Aperçus IA
              </h2>
              <p className="geo-head__intro">
                Chaque IA a sa façon de chercher et de citer. Le socle est le même&nbsp;: un site que leurs robots peuvent
                lire, et des sources fiables qui parlent de vous.
              </p>
            </header>
            <ul className="geo-cards">
              <li className="geo-card">
                <span className="geo-card__tag">OpenAI</span>
                <h3 className="geo-card__title">ChatGPT</h3>
                <p className="geo-card__text">
                  Pour les questions de choix ou d’actualité, ChatGPT cherche sur le web et cite ses sources. C’est son
                  robot de recherche, OAI-SearchBot, qui doit pouvoir lire votre site&nbsp;; GPTBot, lui, sert à
                  l’entraînement.
                </p>
                <p className="geo-card__text">
                  Notre guide&nbsp;: <Link href="/blog/referencement-chatgpt/">le référencement ChatGPT en 8 étapes</Link>.
                </p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">Google</span>
                <h3 className="geo-card__title">Gemini</h3>
                <p className="geo-card__text">
                  L’IA de Google s’appuie sur la recherche Google&nbsp;: un site bien indexé et des informations cohérentes
                  avec votre fiche d’établissement Google jouent directement.
                </p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">Perplexity AI</span>
                <h3 className="geo-card__title">Perplexity</h3>
                <p className="geo-card__text">
                  Ce moteur de réponse cite ses sources avec des liens à chaque réponse&nbsp;: chaque citation peut vous
                  amener des visiteurs déjà convaincus.
                </p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">Anthropic</span>
                <h3 className="geo-card__title">Claude</h3>
                <p className="geo-card__text">
                  L’assistant d’Anthropic peut chercher sur le web et cite alors ses sources. Ses robots, comme
                  ClaudeBot et Claude-SearchBot, doivent avoir accès à vos pages.
                </p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">Google</span>
                <h3 className="geo-card__title">Aperçus IA et Mode IA</h3>
                <p className="geo-card__text">
                  En France depuis le 22 juillet 2026, ces réponses de Google citent en moyenne près de 7 sources, dont 6
                  sur 10 sont déjà dans le top 10 des résultats (SE Ranking, août 2026)&nbsp;: SEO et GEO y travaillent
                  ensemble.
                </p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">Microsoft</span>
                <h3 className="geo-card__title">Copilot</h3>
                <p className="geo-card__text">
                  L’assistant de Microsoft s’appuie sur l’index de Bing, qui a ajouté le GEO à ses consignes pour les
                  sites en février 2026&nbsp;: être bien indexé sur Bing compte aussi.
                </p>
              </li>
            </ul>
            <p className="geo-source">
              La mesure mensuelle porte sur ChatGPT, Gemini, Perplexity et Claude&nbsp;; les corrections profitent aussi aux
              Aperçus IA de Google et à Copilot.
            </p>
          </div>
        </section>

        {/* ============ POURQUOI KAMEO ============ */}
        <section className="geo-section geo-section--soft" aria-labelledby="geo-kameo-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Pourquoi Kameo</span>
              <h2 className="geo-head__title" id="geo-kameo-title">
                Une agence GEO qui construit aussi des sites
              </h2>
            </header>
            <ul className="geo-cards">
              <li className="geo-card">
                <h3 className="geo-card__title">Les corrections, pas seulement les conseils</h3>
                <p className="geo-card__text">
                  Les corrections techniques sont appliquées par l’équipe qui conçoit des{' '}
                  <Link href="/agence-wordpress-paris/">sites WordPress</Link> et des{' '}
                  <Link href="/developpement-sur-mesure/">applications sur-mesure</Link> depuis 2023, sans
                  sous-traitance.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Des prix publics</h3>
                <p className="geo-card__text">
                  Audit dès {AUDIT_MIN} HT, accompagnement dès {PLAN_MIN} HT par mois&nbsp;: vous connaissez le prix avant
                  même de nous appeler.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Une méthode appliquée chez nous d’abord</h3>
                <p className="geo-card__text">
                  Robots d’IA autorisés, pages qui répondent aux questions, informations identiques sur le site et les
                  annuaires&nbsp;: nous l’avons d’abord fait pour agence-kameo.fr.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Une mesure transparente</h3>
                <p className="geo-card__text">
                  Les mêmes questions chaque mois, IA par IA, et un rapport clair&nbsp;: ce qui progresse, ce qui recule, qui
                  est cité à votre place.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Pas de fausse promesse</h3>
                <p className="geo-card__text">
                  Personne ne peut garantir une citation dans ChatGPT. Nous nous engageons sur le travail et sur la
                  transparence, pas sur une «&nbsp;première place&nbsp;».
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Les dirigeants en direct</h3>
                <p className="geo-card__text">
                  Vous échangez avec <Link href="/benjamin-dayan/">Benjamin Dayan</Link> et Louison Boutet, en visio,
                  sans intermédiaire. Kameo est noté {PROOF.avisNote}/5 sur Trustpilot ({PROOF.avisNombre} avis).
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ============ PARIS ET FRANCE ============ */}
        <section className="geo-section" aria-labelledby="geo-local-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Paris et partout en France</span>
              <h2 className="geo-head__title" id="geo-local-title">
                Une agence GEO à Paris, des rendez-vous en visio
              </h2>
            </header>
            <div className="geo-prose">
              <p>
                Kameo a son adresse au 9 rue des Colonnes, à Paris 2e. Audits, restitutions et points mensuels se font
                en visio&nbsp;: pas de déplacement, des rendez-vous qui s’adaptent à votre agenda, que vous soyez à Paris, à
                Lyon, à Bordeaux ou ailleurs en France.
              </p>
              <p>
                Les IA répondent aussi aux questions locales&nbsp;: «&nbsp;quel avocat à Nantes&nbsp;?&nbsp;», «&nbsp;quelle agence
                web à Lille&nbsp;?&nbsp;». Si votre clientèle est locale, nous testons les questions liées à votre ville et à votre zone
                d’intervention, et nous vérifions que votre fiche Google et vos annuaires disent la même chose que votre
                site.
              </p>
            </div>
          </div>
        </section>

        {/* ============ RESSOURCES ============ */}
        <section className="geo-section geo-section--soft" id="ressources" aria-labelledby="geo-res-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Ressources</span>
              <h2 className="geo-head__title" id="geo-res-title">
                Pour aller plus loin
              </h2>
              <p className="geo-head__intro">Nos guides et outils gratuits pour comprendre et agir, même sans nous.</p>
            </header>
            <ul className="geo-cards">
              {GEO_RESOURCES.map((r) => (
                <li className="geo-card" key={r.href}>
                  <span className="geo-card__tag">{r.tag}</span>
                  <h3 className="geo-card__title">
                    <Link href={r.href}>{r.title}</Link>
                  </h3>
                  <p className="geo-card__text">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <GeoFaq items={faq} title="Vos questions sur le GEO et notre agence" />

        <GeoCta
          title="Faites partie des réponses que les IA recommandent"
          text="Diagnostic express gratuit : 30 minutes en visio, on pose en direct 5 questions de vos clients à ChatGPT, Gemini, Perplexity et Claude, en partage d’écran, puis on choisit ensemble le bon format, audit ou accompagnement."
          secondary={{ href: '/audit-geo/', label: 'Voir l’audit GEO' }}
        />
      </main>

      <JsonLd
        data={[
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'agence-geo' }),
          faqSchema(faq, PATH),
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
