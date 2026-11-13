import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { GeoCta, GeoEngines, GeoFaq, GeoHeroActions, GeoMaj, faqSchema, fr } from '@/components/geo/GeoBlocks';
import { GEO_ENGINES, type FaqItem } from '@/content/geo';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import css from '@/styles/pages/geo';

/*
 * Test gratuit de visibilité dans les IA (étape 2 du plan GEO, 09/11/2026) : 10 questions à poser soi-même,
 * sans inscription ni e-mail, et une grille de lecture. Pas de score automatique, comme le dit la page
 * Audit GEO : le test donne une première idée, l'audit et la mesure mensuelle donnent une vraie mesure.
 */
const PATH = '/test-visibilite-ia/';
const TITLE = 'Test gratuit : votre visibilité dans ChatGPT et les IA | Kameo';
const DESCRIPTION =
  'Testez gratuitement votre visibilité dans ChatGPT, Gemini, Perplexity et Claude : 10 questions à poser vous-même en 15 minutes, et la grille pour lire les réponses.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Agence GEO', path: '/agence-geo/' },
  { name: 'Test de visibilité IA', path: PATH },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

const QUESTIONS: { q: string; why: string }[] = [
  { q: 'Quel est le meilleur [votre métier] à [votre ville] ?', why: 'Votre visibilité locale.' },
  { q: 'Quelle entreprise me conseilles-tu pour [votre service principal] ?', why: 'La recommandation directe, celle qui compte le plus.' },
  { q: 'Quels sont les meilleurs [prestataires de votre métier] en France ?', why: 'Votre présence dans les listes et les comparatifs.' },
  { q: 'Que penses-tu de [votre entreprise] ?', why: 'Ce que l’IA sait de vous, et si c’est exact.' },
  { q: '[Votre entreprise] avis', why: 'Votre réputation telle que l’IA la résume.' },
  { q: 'Combien coûte [votre service] chez [votre entreprise] ?', why: 'Vos informations pratiques : prix, offres, délais.' },
  { q: 'Quelles sont les alternatives à [votre principal concurrent] ?', why: 'Si l’IA vous cite face à lui.' },
  { q: 'Compare [votre entreprise] et [un concurrent].', why: 'Comment l’IA vous positionne.' },
  { q: 'Comment choisir un [votre métier] ?', why: 'Les sites que l’IA cite comme sources dans votre secteur.' },
  { q: '[Une question que vos clients vous posent souvent]', why: 'Si l’IA vous associe à votre expertise.' },
];

const FAQ_TEST: FaqItem[] = [
  {
    q: 'Le test est-il vraiment gratuit ?',
    a: 'Oui. Il n’y a rien à remplir ni d’e-mail à laisser : vous posez vous-même les questions aux IA, gratuitement, avec leurs versions de base.',
  },
  {
    q: 'Pourquoi poser les questions dans une fenêtre de navigation privée ?',
    a: 'Pour que l’IA ne s’appuie pas sur votre historique ou sur ce qu’elle sait déjà de vous grâce à votre compte. Vous voyez ainsi une réponse plus proche de celle que reçoit un futur client.',
  },
  {
    q: 'Pourquoi les réponses changent-elles d’une fois à l’autre ?',
    a: 'Les IA ne redonnent presque jamais la même réponse : selon une étude de SparkToro publiée en janvier 2026, la même liste de marques revient moins d’une fois sur 100. Un test donne une première idée ; pour une vraie mesure, il faut suivre les mêmes questions dans le temps.',
  },
  {
    q: 'Quelle différence avec un audit GEO ?',
    a: 'Le test vous donne un premier constat. L’<a href="/audit-geo/">audit GEO</a> va plus loin : il part des questions propres à votre métier, vérifie si les robots des IA peuvent lire votre site, repère ce qui vous freine et se termine par un plan d’action priorisé.',
  },
];

export default function TestVisibiliteIaPage() {
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
              Test gratuit <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Testez votre visibilité dans les IA&nbsp;: <br />
              <span className="page-hero__title-muted">10 questions à poser vous-même, en 15 minutes</span>
            </h1>
            <p className="page-hero__text">
              Gratuit, sans inscription ni e-mail&nbsp;: posez ces questions à ChatGPT, Gemini, Perplexity et Claude, puis
              notez ce qu’elles répondent. En un quart d’heure, vous saurez si les IA vous connaissent, ce qu’elles disent
              de vous et qui elles recommandent à votre place.
            </p>
            <GeoHeroActions anchor="#test" anchorLabel="Commencer le test" />
            <GeoEngines items={GEO_ENGINES} />
            <GeoMaj path={PATH} />
          </div>
        </section>

        {/* ============ AVANT DE COMMENCER ============ */}
        <section className="geo-brief" aria-labelledby="test-avant-title">
          <div className="container">
            <div className="geo-brief__box">
              <div>
                <h2 className="geo-brief__label" id="test-avant-title">
                  Avant de commencer
                </h2>
                <p className="geo-brief__text">
                  Posez chaque question comme le ferait un client, en français, à chacune des quatre IA. Regardez aussi les
                  Aperçus IA de Google pour la même recherche. Notez la date&nbsp;: les réponses évoluent avec le temps.
                </p>
              </div>
              <ul className="geo-brief__facts">
                <li>
                  <span>
                    <strong>Fenêtre de navigation privée</strong>, ou déconnecté de votre compte
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Remplacez les crochets</strong> par votre métier, votre ville, votre marque
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Copiez chaque réponse</strong> ou faites une capture d’écran datée
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ LES 10 QUESTIONS ============ */}
        <section className="geo-section geo-section--soft" id="test" aria-labelledby="test-questions-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Le test</span>
              <h2 className="geo-head__title" id="test-questions-title">
                Les 10 questions à poser aux IA
              </h2>
              <p className="geo-head__intro">Ce sont les questions que vos futurs clients posent déjà.</p>
            </header>
            <ol className="geo-report">
              {QUESTIONS.map((x) => (
                <li key={x.q}>
                  <span>
                    <span className="geo-report__title">« {fr(x.q)} »</span>
                    <span className="geo-report__text">{fr(x.why)}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ GRILLE DE LECTURE ============ */}
        <section className="geo-section" aria-labelledby="test-grille-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Lire les réponses</span>
              <h2 className="geo-head__title" id="test-grille-title">
                Absent, mentionné, cité ou recommandé&nbsp;?
              </h2>
              <p className="geo-head__intro">
                Pour chaque réponse, notez l’un de ces quatre résultats, puis vérifiez que ce que l’IA dit de vous est exact.
              </p>
            </header>
            <ul className="geo-cards geo-cards--2">
              <li className="geo-card">
                <span className="geo-card__tag">0</span>
                <h3 className="geo-card__title">Absent</h3>
                <p className="geo-card__text">Votre entreprise n’apparaît pas du tout dans la réponse.</p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">M</span>
                <h3 className="geo-card__title">
                  <Link href="/glossaire-geo/#mention">Mentionné</Link>
                </h3>
                <p className="geo-card__text">Votre nom apparaît, sans lien vers votre site.</p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">C</span>
                <h3 className="geo-card__title">
                  <Link href="/glossaire-geo/#citation">Cité</Link>
                </h3>
                <p className="geo-card__text">Un lien renvoie vers votre site ou vers une page qui parle de vous.</p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">R</span>
                <h3 className="geo-card__title">
                  <Link href="/glossaire-geo/#recommandation">Recommandé</Link>
                </h3>
                <p className="geo-card__text">L’IA vous présente comme un bon choix. C’est le meilleur résultat.</p>
              </li>
            </ul>
            <p className="geo-source" style={{ marginTop: 'clamp(28px,4vw,40px)', marginBottom: 12 }}>
              Recopiez cette grille et notez 0, M, C ou R dans chaque case.
            </p>
            <div className="geo-table-wrap">
              <table className="geo-table geo-table--plans">
                <caption className="sr-only">Grille à recopier pour noter les réponses des IA</caption>
                <thead>
                  <tr>
                    <th scope="col">Question</th>
                    {GEO_ENGINES.map((e) => (
                      <th scope="col" key={e}>
                        {e}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((n) => (
                    <tr key={n}>
                      <th scope="row">Question {n}</th>
                      {GEO_ENGINES.map((e) => (
                        <td key={e} className="is-no">
                          …
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <th scope="row">… jusqu’à la question 10</th>
                    {GEO_ENGINES.map((e) => (
                      <td key={e} className="is-no">
                        …
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="geo-source">
              Notez aussi les entreprises citées à votre place et les sites que les IA donnent comme sources&nbsp;: c’est là
              qu’il faut être présent.
            </p>
          </div>
        </section>

        {/* ============ ET ENSUITE ============ */}
        <section className="geo-section geo-section--soft" aria-labelledby="test-suite-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Et ensuite&nbsp;?</span>
              <h2 className="geo-head__title" id="test-suite-title">
                Que faire selon vos résultats
              </h2>
            </header>
            <ul className="geo-cards">
              <li className="geo-card">
                <h3 className="geo-card__title">Absent presque partout</h3>
                <p className="geo-card__text">
                  Commencez par notre guide{' '}
                  <Link href="/blog/chatgpt-ne-cite-pas-mon-entreprise/">pourquoi ChatGPT ne cite pas mon entreprise</Link>
                  &nbsp;: huit causes à vérifier, et comment les corriger.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Des informations fausses</h3>
                <p className="geo-card__text">
                  Corrigez-les à la source&nbsp;: votre site, votre fiche Google, les annuaires. Les IA reprennent ce
                  qu’elles lisent sur le web.
                </p>
              </li>
              <li className="geo-card">
                <h3 className="geo-card__title">Vos concurrents passent devant</h3>
                <p className="geo-card__text">
                  Regardez les sources citées pour eux&nbsp;: comparatifs, annuaires, avis. Notre guide du{' '}
                  <Link href="/blog/referencement-chatgpt/">référencement ChatGPT</Link> explique comment y entrer.
                </p>
              </li>
            </ul>
            <p className="geo-source">
              Les limites du test&nbsp;: les réponses des IA varient d’un essai à l’autre, et dix questions ne suffisent pas
              pour une mesure fiable. C’est le rôle de l’<Link href="/audit-geo/">audit GEO</Link> et de la{' '}
              <Link href="/blog/mesurer-visibilite-ia/">mesure mensuelle</Link>.
            </p>
          </div>
        </section>

        <GeoFaq items={FAQ_TEST} title="Vos questions sur le test" />

        <GeoCta
          title="Faites le test avec nous, en direct"
          text="Diagnostic express gratuit : 30 minutes en visio, on pose en direct 5 questions de vos clients aux IA, en partage d’écran, puis on vous dit par où commencer."
          secondary={{ href: '/audit-geo/', label: 'Voir l’audit GEO' }}
        />
      </main>

      <JsonLd
        data={[...themeSchemas({ path: PATH, crumbs: CRUMBS }), faqSchema(FAQ_TEST, PATH), websiteGraph({ path: PATH, title: TITLE })]}
      />
    </>
  );
}
