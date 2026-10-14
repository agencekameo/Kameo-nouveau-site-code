import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import css from './styles';
import { PROOF } from '@/lib/site';

const PATH = '/refonte-wordpress/';
const TITLE = 'Refonte de site WordPress à Paris : audit gratuit | Kameo';
const DESCRIPTION =
  'Refonte de site WordPress à Paris sans perte de SEO. Audit gratuit en 48 h. Plan de redirections 301 maîtrisé, design custom, performance optimisée.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Agence WordPress Paris', path: '/agence-wordpress-paris/' },
  { name: 'Refonte WordPress', path: '/refonte-wordpress/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function RefonteWordpressPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main id="main">
        {/* ============ BREADCRUMB BACK ============ */}
        <div className="silo-back">
          <div className="container">
            <Link href="/agence-wordpress-paris/" className="silo-back__link">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 4L6 8l4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Retour à l'agence WordPress Paris{' '}
            </Link>
          </div>
        </div>
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Refonte WordPress <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Refonte de site WordPress à Paris : <br />
              <span className="page-hero__title-muted">moderniser sans perdre votre SEO</span>
            </h1>
            <p className="page-hero__text">
              Votre site WordPress est lent, daté, mal positionné ou ne convertit plus. Nous le repensons en profondeur,
              design, performance, SEO, sécurité, avec un plan de redirections 301 maîtrisé.{' '}
              <strong>Zéro perte de trafic organique sur l'ensemble de nos refontes depuis 2023</strong>. Audit gratuit
              en 48 h.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                <strong>★ 4,6/5</strong> sur Trustpilot · {PROOF.avisNombre} avis
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                <strong>0 %</strong> de perte de trafic post-refonte
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Audit gratuit en <strong>48 h</strong>
              </span>
            </div>
            <div className="page-hero__actions">
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="page-hero__btn"
              >
                Demander mon audit gratuit{' '}
                <span className="page-hero__btn-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                    <path
                      d="M4 12 L12 4 M6 4 H12 V10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <a href="#methode" className="page-hero__btn page-hero__btn--secondary">
                Voir notre méthode{' '}
              </a>
            </div>
          </div>
        </section>
        {/* ============ SYMPTÔMES ============ */}
        <section className="refonte-symptoms">
          <div className="container">
            <header className="refonte-symptoms__head">
              <h2 className="refonte-symptoms__title">
                6 signaux clairs qu'il est temps de refondre votre site WordPress
              </h2>
              <p className="refonte-symptoms__intro">
                Si votre site WordPress coche au moins 3 de ces 6 cases, une refonte n'est plus une option mais un
                investissement urgent pour votre business.
              </p>
            </header>
            <div className="refonte-symptoms__grid">
              <article className="refonte-symptom">
                <span className="refonte-symptom__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-gauge-high" />
                  </svg>
                </span>
                <h3 className="refonte-symptom__title">Le site est lent (&gt; 3 s)</h3>
                <p className="refonte-symptom__text">
                  Score PageSpeed mobile sous 50, Core Web Vitals au rouge, plus de 3 secondes de chargement : vous
                  perdez des visiteurs et des positions Google chaque jour.
                </p>
              </article>
              <article className="refonte-symptom">
                <span className="refonte-symptom__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-mobile-screen" />
                  </svg>
                </span>
                <h3 className="refonte-symptom__title">Mobile non optimisé</h3>
                <p className="refonte-symptom__text">
                  Texte qui dépasse, boutons trop petits, menu qui buggue : 60 % de votre trafic est sur mobile et vit
                  une expérience dégradée. C'est rédhibitoire pour Google.
                </p>
              </article>
              <article className="refonte-symptom">
                <span className="refonte-symptom__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-chart-line" />
                  </svg>
                </span>
                <h3 className="refonte-symptom__title">Positions Google qui baissent</h3>
                <p className="refonte-symptom__text">
                  Vous perdez des places dans la SERP sans raison évidente. Google a fait évoluer ses critères ; votre
                  site, lui, n'a pas suivi. Le retour à la normale demande une refonte technique.
                </p>
              </article>
              <article className="refonte-symptom">
                <span className="refonte-symptom__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-paint-roller" />
                  </svg>
                </span>
                <h3 className="refonte-symptom__title">Design daté</h3>
                <p className="refonte-symptom__text">
                  Votre site reflète 2018, pas 2026. Vos concurrents ont l'air plus modernes, plus sérieux, plus pros.
                  La perception de marque en souffre, le taux de conversion aussi.
                </p>
              </article>
              <article className="refonte-symptom">
                <span className="refonte-symptom__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-bug" />
                  </svg>
                </span>
                <h3 className="refonte-symptom__title">Bugs et plugins en conflit</h3>
                <p className="refonte-symptom__text">
                  Pages cassées, formulaires qui n'envoient pas, plugins en conflit, admin instable : votre installation
                  WordPress est devenue ingérable et fragilise tout l'écosystème.
                </p>
              </article>
              <article className="refonte-symptom">
                <span className="refonte-symptom__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-hand-pointer" />
                  </svg>
                </span>
                <h3 className="refonte-symptom__title">Taux de conversion en chute</h3>
                <p className="refonte-symptom__text">
                  Les visiteurs viennent mais ne convertissent plus : ni demandes de devis, ni inscriptions, ni achats.
                  L'UX a pris un coup de vieux et les frictions s'accumulent.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ PROMESSE 0 PERTE SEO ============ */}
        <section className="ref-promise">
          <div className="container">
            <div className="ref-promise__wrap">
              <header className="ref-promise__head">
                <span className="ref-promise__eyebrow">Notre engagement</span>
                <h2 className="ref-promise__title">Refondre sans perdre votre SEO existant</h2>
                <div className="ref-promise__stat">
                  <span className="ref-promise__num">0&nbsp;%</span>
                  <span className="ref-promise__num-lbl">
                    de perte de trafic organique sur toutes nos refontes WordPress depuis 2023
                  </span>
                </div>
              </header>
              <div className="ref-promise__pillars">
                <article className="ref-promise__pillar">
                  <span className="ref-promise__pillar-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                    </svg>
                  </span>
                  <h3 className="ref-promise__pillar-name">Audit SEO exhaustif</h3>
                  <p className="ref-promise__pillar-text">
                    Crawl complet du site existant, liste de toutes les URLs indexées par Google et de leur trafic via
                    Search Console.
                  </p>
                </article>
                <article className="ref-promise__pillar">
                  <span className="ref-promise__pillar-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-arrows-turn-to-dots" />
                    </svg>
                  </span>
                  <h3 className="ref-promise__pillar-name">Plan de redirections 301</h3>
                  <p className="ref-promise__pillar-text">
                    Mapping URL par URL entre l'ancien et le nouveau site. Aucune URL importante ne se retrouve en 404.
                    Le jus SEO est transféré.
                  </p>
                </article>
                <article className="ref-promise__pillar">
                  <span className="ref-promise__pillar-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-binoculars" />
                    </svg>
                  </span>
                  <h3 className="ref-promise__pillar-name">Monitoring 90 jours</h3>
                  <p className="ref-promise__pillar-text">
                    Surveillance quotidienne post-bascule via Search Console pendant 90 jours. Corrections immédiates si
                    une URL s'égare ou si une position dérape.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* ============ MID-CTA APRÈS PROMESSE ============ */}
        <section className="ref-midcta">
          <div className="container">
            <div className="ref-midcta__box">
              <div className="ref-midcta__left">
                <h3 className="ref-midcta__title">Convaincu par notre engagement zéro perte SEO ?</h3>
                <p className="ref-midcta__text">
                  Réservez 30 minutes pour qu'on discute de votre site actuel et de votre refonte idéale. Sans
                  engagement.
                </p>
              </div>
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="ref-midcta__btn"
              >
                <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#i-solid-calendar-check" />
                </svg>
                Réserver un RDV{' '}
              </a>
            </div>
          </div>
        </section>
        {/* ============ MÉTHODE 6 ÉTAPES ============ */}
        <section className="refonte-method" id="methode">
          <div className="container">
            <header className="refonte-method__head">
              <h2 className="refonte-method__title">Le KAMEO-Framework appliqué à la refonte WordPress, en 6 étapes</h2>
            </header>
            <ol className="refonte-method__list">
              <li className="refonte-method__item">
                <span className="refonte-method__num">01</span>
                <div>
                  <h3 className="refonte-method__name">
                    Audit complet du site existant <span className="refonte-method__duration">3 à 5 j</span>
                  </h3>
                  <p className="refonte-method__desc">
                    Crawl exhaustif du site (URLs, balises, contenus dupliqués, 404), export Search Console (trafic,
                    positions, requêtes), audit performance (Core Web Vitals, PageSpeed), audit sécurité
                    (vulnérabilités, plugins obsolètes), audit UX. Rapport synthèse remis en main propre.
                  </p>
                  <p className="refonte-method__deliv">
                    <strong>Livrables :</strong>rapport d'audit, classeur Sheets URLs+trafic, plan d'action priorisé.
                  </p>
                </div>
              </li>
              <li className="refonte-method__item">
                <span className="refonte-method__num">02</span>
                <div>
                  <h3 className="refonte-method__name">
                    Plan de redirections 301 <span className="refonte-method__duration">2 à 3 j</span>
                  </h3>
                  <p className="refonte-method__desc">
                    Recensement de toutes les URLs indexées et trafic-générantes. Cartographie URL ancien → URL nouveau
                    avec arbitrage par cas (conserver, fusionner, rediriger, dépublier). Validation conjointe avec vous
                    avant tout dev. Aucune URL importante ne tombera en 404.
                  </p>
                  <p className="refonte-method__deliv">
                    <strong>Livrables :</strong>fichier de mapping URLs (Sheets), schéma de redirections, validation
                    client.
                  </p>
                </div>
              </li>
              <li className="refonte-method__item">
                <span className="refonte-method__num">03</span>
                <div>
                  <h3 className="refonte-method__name">
                    Nouvelle stratégie SEO et arborescence <span className="refonte-method__duration">3 à 5 j</span>
                  </h3>
                  <p className="refonte-method__desc">
                    Si vos positions ont baissé, on identifie pourquoi (contenu vieillissant, intent shift, perte de
                    backlinks, problème technique). Nouveau ciblage de mots-clés, restructuration en silos, refonte des
                    balises titre et meta-description, plan éditorial pour récupérer les requêtes perdues.
                  </p>
                  <p className="refonte-method__deliv">
                    <strong>Livrables :</strong>nouveau sitemap, plan de silos, balises optimisées par page.
                  </p>
                </div>
              </li>
              <li className="refonte-method__item">
                <span className="refonte-method__num">04</span>
                <div>
                  <h3 className="refonte-method__name">
                    Nouveau design et nouvelle UX <span className="refonte-method__duration">7 à 15 j</span>
                  </h3>
                  <p className="refonte-method__desc">
                    Maquettes Figma sur-mesure desktop + mobile, validées avant tout développement. Refonte des parcours
                    utilisateurs, hiérarchie visuelle revue, calls-to-action testés. Pas un thème déguisé, pas un
                    page-builder bloated : un design qui colle à votre marque et qui convertit.
                  </p>
                  <p className="refonte-method__deliv">
                    <strong>Livrables :</strong>maquettes Figma desktop + mobile, 2 cycles de retours.
                  </p>
                </div>
              </li>
              <li className="refonte-method__item">
                <span className="refonte-method__num">05</span>
                <div>
                  <h3 className="refonte-method__name">
                    Développement WordPress et reprise base de données{' '}
                    <span className="refonte-method__duration">10 à 20 j</span>
                  </h3>
                  <p className="refonte-method__desc">
                    Nouveau thème WordPress sur-mesure (zéro page-builder) sur environnement de staging. Migration
                    propre des contenus, articles, médias, utilisateurs. Nettoyage de la base : doublons, entrées
                    orphelines, tables inutiles. Plugins remis à plat. Sécurité durcie.
                  </p>
                  <p className="refonte-method__deliv">
                    <strong>Livrables :</strong>site refondu sur staging, accès recette, exports de validation.
                  </p>
                </div>
              </li>
              <li className="refonte-method__item">
                <span className="refonte-method__num">06</span>
                <div>
                  <h3 className="refonte-method__name">
                    Bascule, redirections actives et monitoring SEO{' '}
                    <span className="refonte-method__duration">2 à 4 j + 90 j de monitoring</span>
                  </h3>
                  <p className="refonte-method__desc">
                    Mise en ligne en pré-prod, validation finale, bascule production. Activation immédiate du plan de
                    redirections 301. Soumission du nouveau sitemap à Google. Monitoring quotidien Search Console
                    pendant 90 jours : si une URL s'égare ou si une position dérape, on corrige sous 24 h.
                  </p>
                  <p className="refonte-method__deliv">
                    <strong>Livrables :</strong>site en ligne, redirections actives, monitoring 90 j, formation
                    Gutenberg.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        {/* ============ COLONNES GARDE / AMÉLIORE / REFAIT ============ */}
        <section className="ref-cols">
          <div className="container">
            <header className="ref-cols__head">
              <h2 className="ref-cols__title">Ce qu'on garde, ce qu'on améliore, ce qu'on refait</h2>
              <p className="ref-cols__intro">
                Une refonte WordPress réussie n'est pas un "tout refaire". Le travail consiste à{' '}
                <strong>identifier précisément ce qui mérite d'être conservé</strong> (votre capital SEO, par exemple)
                et ce qui doit être amélioré ou recréé. Voici notre grille de décision.
              </p>
            </header>
            <div className="ref-cols__grid">
              <article className="ref-col ref-col--keep">
                <header className="ref-col__head">
                  <span className="ref-col__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-check" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="ref-col__title">On garde</h3>
                    <p className="ref-col__count">2 éléments</p>
                  </div>
                </header>
                <ul className="ref-col__list">
                  <li>URLs trafic-générantes</li>
                  <li>Backlinks externes</li>
                </ul>
              </article>
              <article className="ref-col ref-col--imp">
                <header className="ref-col__head">
                  <span className="ref-col__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-arrow-up" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="ref-col__title">On améliore</h3>
                    <p className="ref-col__count">4 éléments</p>
                  </div>
                </header>
                <ul className="ref-col__list">
                  <li>Contenus evergreen</li>
                  <li>Balises titre &amp; meta-description</li>
                  <li>Maillage interne</li>
                  <li>Articles de blog datés</li>
                </ul>
              </article>
              <article className="ref-col ref-col--new">
                <header className="ref-col__head">
                  <span className="ref-col__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-arrows-rotate" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="ref-col__title">On refait</h3>
                    <p className="ref-col__count">5 éléments</p>
                  </div>
                </header>
                <ul className="ref-col__list">
                  <li>Thème WordPress</li>
                  <li>Page-builder (Elementor, Divi)</li>
                  <li>Design et UX</li>
                  <li>Performance et Core Web Vitals</li>
                  <li>Plugins de sécurité et sauvegardes</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        {/* ============ MID-PAGE CTA ============ */}
        <section className="ref-midcta">
          <div className="container">
            <div className="ref-midcta__box">
              <div className="ref-midcta__left">
                <h3 className="ref-midcta__title">Envie d'un audit honnête de votre site WordPress actuel ?</h3>
                <p className="ref-midcta__text">
                  48 h pour un rapport complet (performance, SEO, UX, sécurité) avec recommandations priorisées et
                  budget réaliste. Sans engagement.
                </p>
              </div>
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="ref-midcta__btn"
              >
                <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#i-solid-magnifying-glass" />
                </svg>
                Demander mon audit gratuit{' '}
              </a>
            </div>
          </div>
        </section>
        {/* ============ STACK OUTILS REFONTE ============ */}
        <section className="ref-stack">
          <div className="container">
            <header className="ref-stack__head">
              <h2 className="ref-stack__title">Les outils qu'on utilise pour ne rien casser</h2>
              <p className="ref-stack__intro">
                Une refonte WordPress sans perte de SEO repose autant sur la méthode que sur les outils. Voici la stack
                utilisée sur chacun de nos projets de refonte.
              </p>
            </header>
            <div className="ref-stack__grid">
              <article className="ref-stack__card">
                <span className="ref-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                  </svg>
                </span>
                <h3 className="ref-stack__name">Audit &amp; crawl</h3>
                <ul className="ref-stack__list">
                  <li>Google Search Console</li>
                  <li>Google Analytics 4</li>
                  <li>Ahrefs ou Semrush</li>
                  <li>PageSpeed Insights</li>
                </ul>
              </article>
              <article className="ref-stack__card">
                <span className="ref-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-arrows-turn-to-dots" />
                  </svg>
                </span>
                <h3 className="ref-stack__name">Mapping &amp; redirections</h3>
                <ul className="ref-stack__list">
                  <li>Spreadsheet d'URL mapping</li>
                  <li>Plugin Redirection (WP)</li>
                  <li>Fichier .htaccess ou nginx</li>
                  <li>Tests de masse des 301</li>
                  <li>Soumission sitemap nouveau</li>
                </ul>
              </article>
              <article className="ref-stack__card">
                <span className="ref-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-gauge-high" />
                  </svg>
                </span>
                <h3 className="ref-stack__name">Performance &amp; SEO on-page</h3>
                <ul className="ref-stack__list">
                  <li>Yoast ou Rank Math</li>
                  <li>Schema.org JSON-LD</li>
                  <li>WP Rocket ou cache nginx</li>
                  <li>Images WebP optimisées</li>
                  <li>Core Web Vitals 90+ mobile</li>
                </ul>
              </article>
              <article className="ref-stack__card">
                <span className="ref-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-binoculars" />
                  </svg>
                </span>
                <h3 className="ref-stack__name">Monitoring post-bascule</h3>
                <ul className="ref-stack__list">
                  <li>Search Console quotidien 90 j</li>
                  <li>Suivi positions (Ahrefs)</li>
                  <li>Alertes 404 et crawl errors</li>
                  <li>Reporting hebdo client</li>
                  <li>Plan de roll-back si incident</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        {/* ============ CAS PROJETS REFONTE ============ */}
        <section className="ref-cases">
          <div className="container">
            <header className="ref-cases__head">
              <span className="ref-cases__eyebrow">Projets de refonte récents</span>
              <h2 className="ref-cases__title">
                Les chiffres parlent.
                <br />
                Pour nous.
              </h2>
            </header>
            <div className="ref-cases__grid">
              <article className="ref-case">
                <a href="https://dronespec.fr/" target="_blank" rel="noopener noreferrer" className="ref-case__link">
                  <div className="ref-case__media">
                    <img
                      src="/images/portfolio/dronespec.webp"
                      alt="Refonte WordPress du site Dronespec par Kameo"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  </div>
                  <div className="ref-case__body">
                    <span className="ref-case__tag">
                      <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-solid-arrows-rotate" />
                      </svg>
                      Refonte WordPress
                    </span>
                    <h3 className="ref-case__name">DroneSpec</h3>
                    <p className="ref-case__text">
                      Site WordPress entièrement repensé : nouveau design industriel premium, refonte des silos SEO
                      autour des cas d'usage drone professionnel, redirections 301 sur l'ensemble du catalogue produits.
                      Migration depuis un ancien thème Avada vers un thème custom léger.
                    </p>
                    <div className="ref-case__stats">
                      <div className="ref-case__stat">
                        <span className="ref-case__stat-num">0&nbsp;%</span>
                        <span className="ref-case__stat-lbl">perte de trafic</span>
                      </div>
                      <div className="ref-case__stat">
                        <span className="ref-case__stat-num">+62</span>
                        <span className="ref-case__stat-lbl">PageSpeed mobile</span>
                      </div>
                      <div className="ref-case__stat">
                        <span className="ref-case__stat-num">3 sem.</span>
                        <span className="ref-case__stat-lbl">de livraison</span>
                      </div>
                    </div>
                    <span className="ref-case__visit">
                      Voir le site dronespec.fr{' '}
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M4 12 L12 4 M6 4 H12 V10"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </article>
              <article className="ref-case">
                <a href="https://defikart.fr/" target="_blank" rel="noopener noreferrer" className="ref-case__link">
                  <div className="ref-case__media ref-case__media--logo">
                    <img
                      src="/images/logo clients/Defikart.webp"
                      alt="Refonte WordPress du site Defikart par Kameo"
                      loading="lazy"
                      width="180"
                      height="180"
                    />
                  </div>
                  <div className="ref-case__body">
                    <span className="ref-case__tag">
                      <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-solid-arrows-rotate" />
                      </svg>
                      Refonte WordPress
                    </span>
                    <h3 className="ref-case__name">Defikart</h3>
                    <p className="ref-case__text">
                      Refonte complète du site WordPress pour la plus grande piste de karting outdoor de Paris. Nouveau
                      design dynamique, intégration du module de réservation en ligne, refonte SEO local pour les
                      recherches "karting Paris" et alentours. Conservation des URLs principales.
                    </p>
                    <div className="ref-case__stats">
                      <div className="ref-case__stat">
                        <span className="ref-case__stat-num">0&nbsp;%</span>
                        <span className="ref-case__stat-lbl">perte de trafic</span>
                      </div>
                      <div className="ref-case__stat">
                        <span className="ref-case__stat-num">×2,4</span>
                        <span className="ref-case__stat-lbl">réservations en ligne</span>
                      </div>
                      <div className="ref-case__stat">
                        <span className="ref-case__stat-num">4 sem.</span>
                        <span className="ref-case__stat-lbl">de livraison</span>
                      </div>
                    </div>
                    <span className="ref-case__visit">
                      Voir le site defikart.fr{' '}
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M4 12 L12 4 M6 4 H12 V10"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </section>
        {/* ============ MID-CTA APRÈS CAS PROJETS ============ */}
        <section className="ref-midcta">
          <div className="container">
            <div className="ref-midcta__box">
              <div className="ref-midcta__left">
                <h3 className="ref-midcta__title">Votre site WordPress mérite la même attention</h3>
                <p className="ref-midcta__text">
                  Discutons de votre projet de refonte en 30 minutes de visio. Audit gratuit en 48 h à la clé.
                </p>
              </div>
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="ref-midcta__btn"
              >
                <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#i-solid-calendar-check" />
                </svg>
                Réserver un RDV{' '}
              </a>
            </div>
          </div>
        </section>
        {/* ============ ÉQUIPE ============ */}
        {/* ============ 3 TYPES DE REFONTE ============ */}
        <section className="ref-types">
          <div className="container">
            <header className="ref-types__head">
              <span className="ref-types__eyebrow">Avant de lancer un projet</span>
              <h2 className="ref-types__title">Les 3 types de refonte WordPress : laquelle est la vôtre ?</h2>
              <p className="ref-types__intro">
                « Refonte » ne veut pas dire la même chose pour tout le monde. Refaire le design ? Optimiser la vitesse
                ? Repenser la stratégie SEO ? Voici les 3 niveaux que nous distinguons systématiquement en début de
                mission, pour cadrer le bon périmètre et le bon budget.
              </p>
            </header>
            <div className="ref-types__grid">
              <article className="ref-types__card">
                <div className="ref-types__num">01</div>
                <h3 className="ref-types__name">Refonte technique &amp; performance</h3>
                <p className="ref-types__hook">
                  Votre site marche, mais il est lent, dépassé techniquement, plus aux normes accessibilité, ou bloqué
                  sur une version obsolète de WordPress.
                </p>
                <p className="ref-types__detail">
                  <strong>Périmètre :</strong> migration WordPress &amp; PHP vers la dernière version, refonte du thème
                  (souvent vieillissant), optimisation Core Web Vitals (LCP, INP, CLS), passage en HTTPS, mise en
                  conformité RGPD &amp; accessibilité RGAA, audit sécurité, restructuration des templates ACF /
                  Gutenberg.
                </p>
                <p className="ref-types__detail">
                  <strong>Quand c'est suffisant :</strong> quand le design et l'arborescence restent pertinents, mais
                  que la techno ne suit plus.
                </p>
                <p className="ref-types__price">
                  <strong>Budget :</strong> Sur devis · <strong>Délai :</strong> 4 à 8 semaines
                </p>
              </article>
              <article className="ref-types__card ref-types__card--featured">
                <div className="ref-types__num">02</div>
                <h3 className="ref-types__name">Refonte visuelle &amp; ergonomique</h3>
                <p className="ref-types__hook">
                  Votre site est techniquement OK, mais visuellement daté, peu différenciant, et ne convertit plus en
                  2026.
                </p>
                <p className="ref-types__detail">
                  <strong>Périmètre :</strong> nouvelle identité graphique (Figma), refonte UX des parcours clés (page
                  d'accueil, page service, formulaire de contact), nouveau système de design (typographies, couleurs,
                  composants), nouveau thème WordPress sur-mesure ou refonte profonde de l'existant, blocks Gutenberg
                  dédiés à votre métier, animations et micro-interactions.
                </p>
                <p className="ref-types__detail">
                  <strong>Quand c'est suffisant :</strong> quand l'arborescence et le contenu fonctionnent, mais que
                  vous perdez face à des concurrents au design plus moderne.
                </p>
                <p className="ref-types__price">
                  <strong>Budget :</strong> Sur devis · <strong>Délai :</strong> 6 à 10 semaines
                </p>
              </article>
              <article className="ref-types__card">
                <div className="ref-types__num">03</div>
                <h3 className="ref-types__name">Refonte stratégique &amp; SEO</h3>
                <p className="ref-types__hook">
                  Votre site ne génère pas assez de leads / ventes. Le trafic SEO stagne ou recule. Votre proposition de
                  valeur n'est plus claire.
                </p>
                <p className="ref-types__detail">
                  <strong>Périmètre :</strong> audit SEO complet (Screaming Frog, Ahrefs, Search Console), refonte de
                  l'arborescence en silos thématiques, audit sémantique des mots-clés, réécriture intégrale des contenus
                  SEO, plan de redirections 301 maîtrisé, refonte du design + des templates, monitoring SEO 90 jours
                  post-mise en ligne pour sécuriser la transition.
                </p>
                <p className="ref-types__detail">
                  <strong>Quand c'est nécessaire :</strong> quand le diagnostic révèle des problèmes profonds
                  (cannibalisation, mauvaise intention de recherche, contenu thin, arborescence en plat-de-pâtes).
                </p>
                <p className="ref-types__price">
                  <strong>Budget :</strong> Sur devis · <strong>Délai :</strong> 8 à 14 semaines
                </p>
              </article>
            </div>
            <p className="ref-types__verdict">
              Notre approche : <strong>l'audit gratuit de 48 h cadre lequel des 3 niveaux est le bon pour vous</strong>.
              Pas de surfacturation, pas de refonte stratégique vendue quand une refonte technique suffit. Pour
              comprendre comment tout ça s'inscrit dans une démarche WordPress complète, voir aussi la{' '}
              <a href="/creation-site-wordpress/" style={{ color: '#E14B89', fontWeight: '700' }}>
                création de site WordPress
              </a>{' '}
              (si vous démarrez de zéro) et la{' '}
              <a href="/maintenance-wordpress/" style={{ color: '#E14B89', fontWeight: '700' }}>
                maintenance WordPress mensuelle
              </a>{' '}
              (qui prend le relai après la refonte).
            </p>
          </div>
        </section>
        <section className="ref-team">
          <div className="container">
            <header className="ref-team__head">
              <span className="ref-team__eyebrow">L'équipe qui pilote votre refonte</span>
              <h2 className="ref-team__title">3 personnes responsables, du premier audit à la mise en ligne</h2>
              <p className="ref-team__intro">
                Vous bossez avec ces trois profils du début à la fin. Pas de commercial qui vend puis disparaît, pas de
                sous-traitance qui décharge la responsabilité.
              </p>
            </header>
            <div className="ref-team__grid">
              <article className="ref-team__card">
                <div className="ref-team__avatar">
                  <img
                    src="/images/benjamin.webp"
                    alt="Benjamin Dayan, Fondateur Kameo agence WordPress Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="ref-team__name">Benjamin Dayan</h3>
                <p className="ref-team__role">Fondateur · Audit &amp; stratégie SEO</p>
                <p className="ref-team__bio">
                  Pilote l'audit initial, le plan de redirections, la stratégie SEO. Garantit que le SEO existant est
                  préservé et que les positions Google sont récupérées si elles ont chuté.
                </p>
              </article>
              <article className="ref-team__card">
                <div className="ref-team__avatar">
                  <img
                    src="/images/Aysha.webp"
                    alt="Aysha, Directrice artistique Kameo agence WordPress Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="ref-team__name">Aysha</h3>
                <p className="ref-team__role">Directrice artistique</p>
                <p className="ref-team__bio">
                  Conçoit les maquettes Figma du nouveau site WordPress. Design moderne pensé pour rajeunir votre marque
                  et améliorer drastiquement les taux de conversion existants.
                </p>
              </article>
              <article className="ref-team__card">
                <div className="ref-team__avatar">
                  <img
                    src="/images/Louison.webp"
                    alt="Louison Boutet, Lead developpeur WordPress Kameo Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="ref-team__name">Louison Boutet</h3>
                <p className="ref-team__role">Lead développeur WordPress</p>
                <p className="ref-team__bio">
                  Développe le nouveau thème WordPress, migre proprement la base de données, active les redirections
                  301, gère la bascule production sans incident.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ REFONTE COMPLÈTE VS RAFRAÎCHISSEMENT ============ */}
        <section className="ref-choice">
          <div className="container">
            <header className="ref-choice__head">
              <h2 className="ref-choice__title">Refonte complète ou simple rafraîchissement ?</h2>
              <p className="ref-choice__intro">
                Tous les sites WordPress qui sous-performent ne méritent pas une refonte complète. Un{' '}
                <strong>rafraîchissement ciblé</strong> peut parfois suffire, et coûter 2 à 3 fois moins cher. Notre
                audit gratuit vous oriente honnêtement vers l'une ou l'autre.
              </p>
            </header>
            <div className="ref-choice__grid">
              <article className="ref-choice__card ref-choice__card--featured">
                <div className="ref-choice__name">Refonte complète</div>
                <h3 className="ref-choice__h3">Repenser le site de zéro</h3>
                <p className="ref-choice__catch">
                  Quand le site est globalement à bout de souffle : design daté + perf au rouge + positions Google qui
                  chutent + plugins en conflit.
                </p>
                <div className="ref-choice__meta">
                  <div>
                    <p className="ref-choice__meta-lbl">Délai</p>
                    <p className="ref-choice__meta-val">4 à 10 semaines</p>
                  </div>
                  <div>
                    <p className="ref-choice__meta-lbl">Tarif</p>
                    <p className="ref-choice__meta-val">Sur devis</p>
                  </div>
                </div>
                <ul className="ref-choice__list">
                  <li>Audit complet du site existant</li>
                  <li>Nouvelle stratégie SEO et arborescence</li>
                  <li>Nouveau design + nouvelle UX</li>
                  <li>Nouveau thème WordPress sur-mesure</li>
                  <li>Plan de redirections 301 complet</li>
                  <li>Migration et nettoyage de la base</li>
                  <li>Monitoring 90 jours post-bascule</li>
                </ul>
                <p className="ref-choice__when">
                  <strong>Quand choisir :</strong> au moins 3 des 6 symptômes du tableau plus haut.
                </p>
              </article>
              <article className="ref-choice__card">
                <div className="ref-choice__name">Rafraîchissement ciblé</div>
                <h3 className="ref-choice__h3">Réparer l'essentiel sans tout refaire</h3>
                <p className="ref-choice__catch">
                  Quand un seul aspect du site cloche (perf OU design OU SEO) mais le reste fonctionne. Idéal pour
                  préserver le budget.
                </p>
                <div className="ref-choice__meta">
                  <div>
                    <p className="ref-choice__meta-lbl">Délai</p>
                    <p className="ref-choice__meta-val">1 à 3 semaines</p>
                  </div>
                  <div>
                    <p className="ref-choice__meta-lbl">Tarif</p>
                    <p className="ref-choice__meta-val">Sur devis</p>
                  </div>
                </div>
                <ul className="ref-choice__list">
                  <li>Optimisation perf (Core Web Vitals, cache)</li>
                  <li>Rafraîchissement design ciblé</li>
                  <li>Audit SEO + correctifs prioritaires</li>
                  <li>Mise à jour thème et plugins</li>
                  <li>Sécurisation et nettoyage base</li>
                  <li>Le site existant reste en place</li>
                </ul>
                <p className="ref-choice__when">
                  <strong>Quand choisir :</strong> un seul symptôme bloquant, reste du site OK.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ GARANTIES POST-REFONTE ============ */}
        <section className="ref-guard">
          <div className="container">
            <div className="ref-guard__wrap">
              <div>
                <span className="ref-guard__eyebrow">Garanties post-refonte</span>
                <h2 className="ref-guard__title">Ce qui se passe une fois la nouvelle version mise en ligne</h2>
                <p className="ref-guard__text">
                  Une refonte WordPress ne s'arrête pas à la bascule. Les 90 jours qui suivent sont les plus critiques
                  pour le SEO. Notre engagement écrit dans le devis couvre tout cet après.
                </p>
              </div>
              <ul className="ref-guard__list">
                <li className="ref-guard__item">
                  <span className="ref-guard__check">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-check" />
                    </svg>
                  </span>
                  <div>
                    <p className="ref-guard__name">Monitoring Search Console 90 jours</p>
                    <p className="ref-guard__desc">
                      Surveillance quotidienne des positions Google, du trafic organique et des erreurs de crawl.
                      Correction sous 24 h si une URL s'égare ou si une position dérape.
                    </p>
                  </div>
                </li>
                <li className="ref-guard__item">
                  <span className="ref-guard__check">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-check" />
                    </svg>
                  </span>
                  <div>
                    <p className="ref-guard__name">Plan de roll-back complet</p>
                    <p className="ref-guard__desc">
                      L'ancien site est sauvegardé tel quel pendant 30 jours. En cas d'incident majeur, restauration
                      possible en moins de 2 heures.
                    </p>
                  </div>
                </li>
                <li className="ref-guard__item">
                  <span className="ref-guard__check">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-check" />
                    </svg>
                  </span>
                  <div>
                    <p className="ref-guard__name">Formation Gutenberg (1 h en visio)</p>
                    <p className="ref-guard__desc">
                      Tour complet du nouveau back-office WordPress : ajouter une page, modifier les contenus, gérer le
                      blog, publier des médias. Documentation incluse.
                    </p>
                  </div>
                </li>
                <li className="ref-guard__item">
                  <span className="ref-guard__check">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-check" />
                    </svg>
                  </span>
                  <div>
                    <p className="ref-guard__name">Support technique 30 jours inclus</p>
                    <p className="ref-guard__desc">
                      Bug, blocage admin, micro-ajustement : on intervient sans facturer pendant un mois après la
                      bascule en production.
                    </p>
                  </div>
                </li>
                <li className="ref-guard__item">
                  <span className="ref-guard__check">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-check" />
                    </svg>
                  </span>
                  <div>
                    <p className="ref-guard__name">Option maintenance dès 79 € HT/mois</p>
                    <p className="ref-guard__desc">
                      Pour aller plus loin que les 90 jours offerts, notre forfait maintenance prend le relais. Sans
                      engagement, résiliable chaque mois.{' '}
                      <Link href="/maintenance-wordpress/" style={{ color: '#ED6E63' }}>
                        Voir les forfaits
                      </Link>
                      .
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* ============ FAQ refonte-specific ============ */}
        <section className="expertise-faq" aria-labelledby="faq-title">
          <div className="container">
            <h2 className="expertise-faq__title" id="faq-title">
              Questions fréquentes sur la refonte WordPress
            </h2>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Risque-t-on vraiment de perdre du SEO en refondant ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    Sans méthode : oui, et c'est <strong>la première cause de chute de trafic post-refonte</strong>{' '}
                    (changement d'URLs sans 301, contenus supprimés sans redirection, balises titre cassées, sitemap
                    obsolète). Avec notre méthode : non. Sur l'ensemble de nos refontes WordPress livrées depuis 2023,{' '}
                    <strong>aucune n'a perdu de trafic organique</strong>. La clé : un audit exhaustif AVANT, un plan de
                    redirections 301 validé avec vous, et 90 jours de monitoring après bascule.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien coûte une refonte de site WordPress ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    Une refonte WordPress est <strong>toujours chiffrée sur-mesure</strong> selon le périmètre exact à
                    reprendre : nombre de pages à migrer, niveau de complexité (e-commerce vs vitrine), volume de
                    contenu, intégrations spécifiques (CRM, espace membre, multilingue). Notre audit gratuit en 48 h
                    vous donne un budget réaliste avant tout engagement. Comptez en règle générale 4 à 10 semaines de
                    projet selon l'ampleur.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que se passe-t-il si certaines URLs ne peuvent pas être conservées ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    C'est fréquent (changement d'arborescence, fusion de pages, dépublication d'anciens contenus). Pour
                    chaque URL qui change, on met en place une <strong>redirection 301 permanente</strong> vers l'URL
                    nouvelle la plus pertinente. Google considère la 301 comme un déménagement définitif et transfère 99
                    % du jus SEO vers la nouvelle URL. Les positions Google et les backlinks externes suivent
                    automatiquement.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Peut-on migrer un site depuis Wix, Webflow, Drupal ou autre CMS ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    Oui, environ 30 % de nos refontes sont des migrations depuis un autre CMS vers WordPress (Wix,
                    Webflow, Squarespace, Drupal, Joomla, Shopify). La méthodologie est la même : audit du site
                    existant, mapping des URLs, redirections 301 systématiques, reprise des contenus dans WordPress. La
                    complexité dépend du volume de pages et du format des contenus à importer.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que devient l'ancien site pendant les travaux de refonte ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    L'ancien site <strong>reste en ligne et 100 % fonctionnel</strong> jusqu'à la bascule. La refonte
                    est construite en parallèle sur un environnement de <strong>staging privé</strong> (URL non
                    indexable par Google), où vous pouvez tester et valider chaque page. La bascule production se fait
                    en une seule fois, en général un dimanche soir pour minimiser l'impact business, avec activation
                    immédiate des redirections.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien de temps avant de récupérer mes positions Google après bascule ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    Avec un plan de redirections 301 correctement maîtrisé, vous ne{' '}
                    <strong>devriez pas perdre vos positions</strong> au moment de la bascule. Google traite les 301 en
                    quelques jours à quelques semaines et transfère le ranking. Sur nos refontes, le trafic Search
                    Console reste stable la première semaine puis remonte généralement de +10 à +30 % dans les 3 mois
                    (effet de la nouvelle perf et du SEO repensé). Si une dérive est détectée par notre monitoring, on
                    corrige sous 24 h.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Faut-il refaire tout le contenu du site ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    Non, et c'est une mauvaise idée. Les <strong>contenus evergreen qui rankent</strong> (articles de
                    blog qui génèrent du trafic, pages produits bien positionnées) doivent être préservés tels quels,
                    c'est votre capital SEO. Notre travail consiste à : (1) identifier ces contenus dans l'audit, (2)
                    les réintégrer à l'identique dans la nouvelle architecture, (3) améliorer ceux qui peuvent l'être
                    (balises titre, méta-description, maillage), (4) reprendre les contenus datés ou inefficaces.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Refonte ou rafraîchissement : comment trancher ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    La règle simple : si <strong>au moins 3 des 6 symptômes</strong> listés plus haut sont au rouge
                    (lenteur + design daté + positions baissent + bugs + UX KO + plugins obsolètes),{' '}
                    <strong>refonte complète</strong>. Si <strong>un seul symptôme</strong> domine et que le reste
                    fonctionne, <strong>rafraîchissement ciblé</strong> (2 à 4 fois moins cher). Notre audit gratuit en
                    48 h vous oriente honnêtement vers la solution la plus rentable pour vous.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Faites-vous le suivi après la mise en ligne ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    Oui, c'est central dans notre engagement. <strong>90 jours de monitoring Search Console</strong>{' '}
                    inclus dans tous nos contrats de refonte (suivi quotidien des positions, du trafic, des erreurs de
                    crawl), <strong>30 jours de support technique</strong> gratuit, et reporting hebdomadaire. Au-delà,
                    notre <Link href="/maintenance-wordpress/">forfait maintenance WordPress</Link> dès 79 € HT/mois
                    prend le relais.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        {/* ============ CTA FINAL ============ */}
        <section className="refonte-cta">
          <div className="refonte-cta__container">
            <div className="refonte-cta__box">
              <div className="refonte-cta__wrap">
                <h2 className="refonte-cta__title">Audit gratuit de votre site WordPress en 48 h</h2>
                <p className="refonte-cta__text">
                  Envoyez-nous l'URL de votre site actuel : nous vous renvoyons sous 48 h un audit performance, SEO et
                  UX, avec un plan de refonte priorisé et un budget réaliste. Sans engagement.
                </p>
                <div className="refonte-cta__actions">
                  <a
                    href="https://calendly.com/contact-agence-kameo/30min"
                    target="_blank"
                    rel="noopener"
                    className="refonte-cta__btn refonte-cta__btn--primary"
                  >
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-magnifying-glass" />
                    </svg>
                    Demander mon audit gratuit{' '}
                  </a>
                  <Link href="/realisations/" className="refonte-cta__btn refonte-cta__btn--secondary">
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-eye" />
                    </svg>
                    Voir nos réalisations{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <JsonLd data={[...pageSchemas, websiteGraph({ path: PATH, title: TITLE })]} />
    </>
  );
}
