import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { GeoCta, GeoEngines, GeoFaq, GeoHeroActions, GeoMaj, GeoMidCta, GeoOfferCard, faqSchema } from '@/components/geo/GeoBlocks';
import { FAQ_AUDIT, GEO_AUDITS, GEO_ENGINES, euros } from '@/content/geo';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import css from '@/styles/pages/geo';

const PATH = '/audit-geo/';
const [EXPRESS, COMPLET] = GEO_AUDITS;
const TITLE = `Audit GEO dès ${euros(EXPRESS.price)} HT : votre visibilité dans les IA | Kameo`;
const DESCRIPTION = `Audit GEO : ce que ChatGPT, Gemini, Perplexity et Claude disent de vous, et un plan d’action priorisé. Express ${euros(EXPRESS.price)} HT, Complet ${euros(COMPLET.price)} HT.`;
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Agence GEO', path: '/agence-geo/' },
  { name: 'Audit GEO', path: PATH },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

const BOTH = 'Express et Complet';

export default function AuditGeoPage() {
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
              Audit GEO · Visibilité IA <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Audit GEO&nbsp;: découvrez ce que <br />
              <span className="page-hero__title-muted">les IA disent de votre entreprise</span>
            </h1>
            <p className="page-hero__text">
              Vos clients demandent déjà à ChatGPT, Gemini, Perplexity et Claude quel prestataire choisir. L’audit GEO
              mesure si ces IA vous citent, ce qu’elles disent de vous et qui elles recommandent à votre place, puis
              vous remet un plan d’action priorisé.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                Express <strong>{euros(EXPRESS.price)} HT</strong>
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Complet <strong>{euros(COMPLET.price)} HT</strong>
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Prix <strong>déduit</strong> si vous continuez avec nous
              </span>
            </div>
            <GeoHeroActions anchor="#audits" anchorLabel="Comparer les 2 audits" cta="Demander mon audit" />
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
                  L’audit GEO en bref
                </h2>
                <p className="geo-brief__text">
                  Un <strong>audit GEO</strong>, ou audit de visibilité IA, mesure la place d’une entreprise dans les
                  réponses des intelligences artificielles génératives et repère ce qui l’empêche d’y être citée.
                </p>
                <p className="geo-brief__text">
                  Kameo propose deux formats&nbsp;: l’<strong>{EXPRESS.name}</strong> à {euros(EXPRESS.price)} HT, pour
                  savoir où vous en êtes et quoi corriger en priorité, et l’<strong>{COMPLET.name}</strong> à{' '}
                  {euros(COMPLET.price)} HT, pour comprendre pourquoi vos concurrents sont cités avant vous.
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
                    <strong>Diagnostic technique</strong> de ce qui empêche les IA de bien vous comprendre
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Plan d’action priorisé</strong>, applicable seul ou avec nous
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Paiement unique</strong>, prix déduit si vous passez à un accompagnement dans le mois
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ LES 2 AUDITS ============ */}
        <section className="geo-section geo-section--soft" id="audits" aria-labelledby="geo-audits-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Tarifs</span>
              <h2 className="geo-head__title" id="geo-audits-title">
                Deux audits GEO, deux niveaux de détail
              </h2>
              <p className="geo-head__intro">
                Faire le point une fois, sans abonnement. Prix hors taxes, en paiement unique.
              </p>
            </header>
            <div className="geo-plans__grid geo-plans__grid--2">
              <GeoOfferCard offer={EXPRESS} />
              <GeoOfferCard offer={COMPLET} badge="Le plus complet" />
            </div>
            <ul className="geo-terms">
              <li>
                <span className="geo-terms__icon" aria-hidden="true">
                  <Icon name="credit-card" />
                </span>
                <span>
                  <strong>Paiement unique</strong>, sans abonnement ni engagement.
                </span>
              </li>
              <li>
                <span className="geo-terms__icon" aria-hidden="true">
                  <Icon name="percent" />
                </span>
                <span>
                  <strong>Prix déduit</strong> si vous passez à un <Link href="/accompagnement-geo/">accompagnement</Link>{' '}
                  dans le mois qui suit votre audit.
                </span>
              </li>
              <li>
                <span className="geo-terms__icon" aria-hidden="true">
                  <Icon name="list-check" />
                </span>
                <span>
                  <strong>Le plan vous appartient</strong> : appliquez-le seul, avec votre prestataire ou avec nous.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ============ CE QUE L'AUDIT ANALYSE ============ */}
        <section className="geo-section" aria-labelledby="geo-scope-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Contenu de l’audit</span>
              <h2 className="geo-head__title" id="geo-scope-title">
                Ce que l’audit GEO analyse
              </h2>
              <p className="geo-head__intro">
                Ce que les IA répondent, ce qui bloque sur votre site, et pour l’audit Complet, ce qui fait gagner vos
                concurrents.
              </p>
            </header>
            <ul className="geo-cards">
              <li className="geo-card">
                <span className="geo-card__tag">{BOTH}</span>
                <h3 className="geo-card__title">Votre visibilité dans les 4 IA</h3>
                <p className="geo-card__text">
                  Nous posons à ChatGPT, Gemini, Perplexity et Claude les questions que vos clients leur posent&nbsp;: «&nbsp;quel
                  prestataire choisir pour…&nbsp;», «&nbsp;meilleur … à Lyon&nbsp;», «&nbsp;avis sur votre marque&nbsp;». Pour chaque réponse&nbsp;:
                  êtes-vous absent, mentionné, cité ou recommandé&nbsp;?
                </p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">{BOTH}</span>
                <h3 className="geo-card__title">Ce que les IA disent de vous</h3>
                <p className="geo-card__text">
                  Vos services, vos prix, votre zone, vos avis&nbsp;: les IA les présentent-elles correctement&nbsp;? Une
                  information fausse ou datée se repère, puis se corrige à la source.
                </p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">{BOTH}</span>
                <h3 className="geo-card__title">L’accès des robots d’IA</h3>
                <p className="geo-card__text">
                  Votre robots.txt, votre hébergeur ou votre pare-feu bloquent-ils les robots d’OpenAI, de Perplexity,
                  d’Anthropic ou de Google&nbsp;? Cloudflare, par exemple, les a bloqués par défaut sur les nouveaux sites à partir de juillet 2025, avant d’assouplir ces réglages&nbsp;: mieux vaut vérifier les vôtres. Et votre
                  contenu reste-t-il lisible sans JavaScript, que la plupart de ces robots n’exécutent pas&nbsp;?
                </p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">{BOTH}</span>
                <h3 className="geo-card__title">La structure de votre site</h3>
                <p className="geo-card__text">
                  Pages qui répondent clairement aux questions, données structurées (entreprise, services, prix,
                  questions fréquentes), informations identiques sur votre site, votre fiche Google et les annuaires.
                </p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">Complet</span>
                <h3 className="geo-card__title">Vos 3 concurrents directs</h3>
                <p className="geo-card__text">
                  Qui les IA citent-elles à votre place, sur quelles questions, et grâce à quoi&nbsp;: avis, annuaires,
                  contenus, presse&nbsp;? Vous voyez précisément l’écart à combler.
                </p>
              </li>
              <li className="geo-card">
                <span className="geo-card__tag">Complet</span>
                <h3 className="geo-card__title">Les sources de votre secteur</h3>
                <p className="geo-card__text">
                  La liste des sites, annuaires, comparatifs et médias que les IA citent comme sources dans votre
                  secteur&nbsp;: les endroits où votre entreprise doit être présente.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ============ DÉROULÉ ============ */}
        <section className="expertise-process" aria-labelledby="process-title" style={{ background: '#F9FAFB' }}>
          <div className="container">
            <header className="expertise-process__head">
              <span className="expertise-process__eyebrow">
                <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
                Déroulé <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
              </span>
              <h2 className="expertise-process__title" id="process-title">
                Comment se déroule votre audit GEO
              </h2>
              <p className="expertise-process__intro">
                Quatre étapes, en visio et à distance&nbsp;: vous n’avez rien de technique à préparer.
              </p>
            </header>
            <ol className="expertise-process__steps">
              <li className="expertise-process__step">
                <span className="expertise-process__num">01</span>
                <h3 className="expertise-process__step-title">Cadrage</h3>
                <p className="expertise-process__step-text">
                  Un échange en visio sur vos services, vos clients et les questions qu’ils se posent&nbsp;; pour l’audit
                  Complet, le choix de vos 3 concurrents directs.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">02</span>
                <h3 className="expertise-process__step-title">Tests dans les IA</h3>
                <p className="expertise-process__step-text">
                  Les questions de vos clients posées à ChatGPT, Gemini, Perplexity et Claude, réponses relevées et
                  analysées une à une.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">03</span>
                <h3 className="expertise-process__step-title">Diagnostic du site</h3>
                <p className="expertise-process__step-text">
                  Accès des robots, contenu, structure et données de votre site, cohérence de vos informations sur le
                  web.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">04</span>
                <h3 className="expertise-process__step-title">Rapport et plan d’action</h3>
                <p className="expertise-process__step-text">
                  Le rapport et le plan d’action priorisé&nbsp;; pour l’audit Complet, une restitution d’une heure en visio
                  pour le parcourir ensemble.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <GeoMidCta
          title="Et après l’audit ?"
          text="Appliquez le plan seul, ou confiez-le nous : si vous démarrez un accompagnement GEO dans le mois, le prix de l’audit est déduit."
          href="/accompagnement-geo/"
          label="Voir l’accompagnement"
        />

        {/* ============ GRATUIT OU PAYANT ============ */}
        <section className="geo-section" aria-labelledby="geo-free-title">
          <div className="container">
            <header className="geo-head">
              <span className="geo-head__eyebrow">Audit gratuit ou payant</span>
              <h2 className="geo-head__title" id="geo-free-title">
                Pourquoi un audit plutôt qu’un score gratuit&nbsp;?
              </h2>
            </header>
            <div className="geo-prose">
              <p>
                Des outils en ligne donnent gratuitement un score de visibilité IA. C’est utile pour une première idée,
                mais ils testent le plus souvent des questions génériques et s’arrêtent au constat&nbsp;: ils ne disent ni
                pourquoi les IA vous ignorent, ni quoi corriger en premier sur votre site.
              </p>
              <p>
                L’audit GEO de Kameo part des <strong>questions de vos clients</strong>, vérifie votre site point par
                point et se termine par un <strong>plan d’action priorisé</strong> que vous pouvez appliquer dès le
                lendemain. Pour une première idée par vous-même, faites notre <Link href="/test-visibilite-ia/">test gratuit en 10 questions</Link>&nbsp;; et si vous voulez en parler, le diagnostic express de 30 minutes est gratuit.
              </p>
              <p>
                Pour faire un premier test vous-même, suivez notre guide du{' '}
                <Link href="/blog/referencement-chatgpt/">référencement ChatGPT</Link>&nbsp;; la méthode complète est
                présentée sur notre page <Link href="/agence-geo/">agence GEO</Link>.
              </p>
            </div>
          </div>
        </section>

        <GeoFaq items={FAQ_AUDIT} title="Vos questions sur l’audit GEO" />

        <GeoCta
          title="Découvrez ce que les IA disent de vous"
          text="Diagnostic express gratuit : 30 minutes en visio pour poser en direct 5 questions de vos clients aux IA, en partage d’écran, et choisir l’audit adapté à votre situation."
          secondary={{ href: '/accompagnement-geo/', label: 'Voir l’accompagnement GEO' }}
        />
      </main>

      <JsonLd
        data={[
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'audit-geo' }),
          faqSchema(FAQ_AUDIT, PATH),
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
