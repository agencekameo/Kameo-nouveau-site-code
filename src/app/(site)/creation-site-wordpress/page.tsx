import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import css from './styles';
import { PROOF } from '@/lib/site';

const PATH = '/creation-site-wordpress/';
const TITLE = 'Création site WordPress Paris : 3 formats dès 1 499 € | Kameo';
const DESCRIPTION =
  'Création site WordPress à Paris : landing 1 499 €, vitrine 2 999 €, e-commerce 4 999 €. Thème custom, SEO inclus. Devis gratuit sous 24 h.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Agence WordPress Paris', path: '/agence-wordpress-paris/' },
  { name: 'Création site WordPress', path: '/creation-site-wordpress/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function CreationSiteWordpressPage() {
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
              Création WordPress <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Création de site WordPress à Paris : <br />
              <span className="page-hero__title-muted">3 formats, prix transparents, livré rapide</span>
            </h1>
            <p className="page-hero__text">
              Landing page, site vitrine ou e-commerce WooCommerce : on conçoit votre site WordPress sur-mesure, sans
              page-builder lourd, avec le SEO baked-in dès la stratégie. Devis détaillé sous 24 h, livraison en 2 à 8
              semaines selon le format.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                <strong>★ 4,6/5</strong> sur Trustpilot · {PROOF.avisNombre} avis
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                <strong>50+ sites WordPress</strong> livrés
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Délais respectés à <strong>97 %</strong>
              </span>
            </div>
            <div className="page-hero__actions">
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="page-hero__btn"
              >
                Réserver mon brief gratuit{' '}
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
              <a href="#formats" className="page-hero__btn page-hero__btn--secondary">
                Voir les 3 formats{' '}
              </a>
            </div>
          </div>
        </section>
        {/* ============ POURQUOI NOUS (6 features création) ============ */}
        <section className="ccrea-why">
          <div className="container">
            <header className="ccrea-why__head">
              <span className="ccrea-why__eyebrow">Pourquoi Kameo pour votre création</span>
              <h2 className="ccrea-why__title">Une création WordPress sans mauvaise surprise</h2>
            </header>
            <div className="ccrea-why__grid">
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-stopwatch" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Devis détaillé sous 24 h</h3>
                <p className="ccrea-why__text">
                  Après un brief de 30 minutes, vous recevez un devis chiffré avec périmètre fonctionnel, planning
                  précis et livrables détaillés. Tarif fixe, aucune zone grise.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-calendar-check" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Délai garanti à 97 %</h3>
                <p className="ccrea-why__text">
                  Notre équipe intégrée tient ses engagements. Sur 50+ projets livrés depuis 2023, 97 % l'ont été dans
                  le délai annoncé au devis. Aucun chef de projet intermédiaire qui dilue l'info.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-code" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Thème WordPress 100 % sur-mesure</h3>
                <p className="ccrea-why__text">
                  Zéro page-builder lourd (Elementor, Divi, WPBakery). On code un thème WordPress custom, performant,
                  sécurisé, facile à maintenir et que Google indexe sans friction.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">SEO natif dès la stratégie</h3>
                <p className="ccrea-why__text">
                  Audit mots-clés, architecture en silos, balisage Schema.org, Core Web Vitals 90+ : votre site
                  WordPress arrive prêt à ranker dès la mise en ligne. Pas de SEO bricolé à posteriori.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-graduation-cap" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Formation Gutenberg incluse</h3>
                <p className="ccrea-why__text">
                  Vous éditez vos contenus comme dans Notion grâce à des blocks Gutenberg sur-mesure. Formation visio
                  d'1 h.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-handshake" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Zéro sous-traitance</h3>
                <p className="ccrea-why__text">
                  Designer, développeur, expert SEO et rédacteur travaillent côte à côte dans nos bureaux du 2
                  <sup>e</sup>. Un seul interlocuteur, une responsabilité claire, des décisions rapides.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ 3 FORMATS ============ */}
        <section className="pricing" id="formats">
          <div className="container">
            <header className="pricing__head">
              <span className="pricing__badge">
                <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#i-solid-check" />
                </svg>
                Tarifs transparents, sans devis surprise{' '}
              </span>
              <h2 className="pricing__title">Nos offres de création de site WordPress</h2>
              <p className="pricing__intro">
                Landing page dès <strong>1&nbsp;499 € HT</strong>, site vitrine dès <strong>2&nbsp;999 € HT</strong>,
                e-commerce dès <strong>4&nbsp;999 € HT</strong>. Échelonnement 3× sans frais au-delà de 3&nbsp;000 € HT.
              </p>
            </header>
            <div className="pricing__wrap">
              <article className="pcard-offer">
                <span className="pcard-offer__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-file-lines" />
                  </svg>
                </span>
                <h3 className="pcard-offer__title">Landing page</h3>
                <p className="pcard-offer__desc">
                  Idéale pour créer ou refondre une page web qui capte l'attention et génère des résultats concrets
                  grâce à un design optimisé pour la conversion.
                </p>
                <div className="pcard-offer__price-block">
                  <span className="pcard-offer__from">À partir de</span>
                  <p className="pcard-offer__price">
                    1&nbsp;499 € <small>HT</small>
                  </p>
                </div>
                <ul className="pcard-offer__list">
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-file" />
                    </svg>
                    1 page
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-clock" />
                    </svg>
                    Livré en 3 semaines
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                    </svg>
                    Optimisation du référencement (SEO)
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Adaptation mobile (responsive)
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-palette" />
                    </svg>
                    Design moderne &amp; épuré
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Animations dynamiques
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-chart-bar" />
                    </svg>
                    Rapport mensuel des statistiques
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-hand-point-up" />
                    </svg>
                    Facile de prise en main
                  </li>
                </ul>
              </article>
              <article className="pcard-offer">
                <span className="pcard-offer__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-heart" />
                  </svg>
                </span>
                <div className="pcard-offer__title-row">
                  <h3 className="pcard-offer__title">Site vitrine</h3>
                  <span className="pcard-offer__badge">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-fire" />
                    </svg>
                    Popular{' '}
                  </span>
                </div>
                <p className="pcard-offer__desc">
                  Conçu pour les entreprises qui souhaitent développer leur présence en ligne avec un site professionnel
                  alliant design et stratégie marketing.
                </p>
                <div className="pcard-offer__price-block">
                  <span className="pcard-offer__from">À partir de</span>
                  <p className="pcard-offer__price">
                    2&nbsp;999 € <small>/HT</small>
                  </p>
                </div>
                <ul className="pcard-offer__list">
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-file" />
                    </svg>
                    Jusqu'à 5 pages
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-clock" />
                    </svg>
                    Livré en 6 semaines
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                    </svg>
                    Optimisation du référencement (SEO)
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Adaptation mobile (responsive)
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-palette" />
                    </svg>
                    Design moderne &amp; épuré
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Animations dynamiques
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-chart-bar" />
                    </svg>
                    Rapport mensuel des statistiques
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-hand-point-up" />
                    </svg>
                    Facile de prise en main
                  </li>
                </ul>
              </article>
              <article className="pcard-offer">
                <span className="pcard-offer__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-bag-shopping" />
                  </svg>
                </span>
                <h3 className="pcard-offer__title">E-commerce</h3>
                <p className="pcard-offer__desc">
                  Pensée pour les marques qui veulent vendre en ligne : catalogue produits, paiement sécurisé et
                  parcours d'achat optimisé pour maximiser vos conversions.
                </p>
                <div className="pcard-offer__price-block">
                  <span className="pcard-offer__from">À partir de</span>
                  <p className="pcard-offer__price">
                    4&nbsp;999 € <small>/HT</small>
                  </p>
                </div>
                <ul className="pcard-offer__list">
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-file" />
                    </svg>
                    Pages illimitées &amp; catalogue produits
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-clock" />
                    </svg>
                    Livré en 8 semaines
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                    </svg>
                    Optimisation du référencement (SEO)
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-credit-card" />
                    </svg>
                    Paiement sécurisé &amp; multi-devises
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Adaptation mobile (responsive)
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-palette" />
                    </svg>
                    Design moderne &amp; épuré
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-chart-bar" />
                    </svg>
                    Rapport mensuel des statistiques
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-hand-point-up" />
                    </svg>
                    Gestion des stocks intuitive
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        {/* ============ COMPARATIF DES 3 FORMULES ============ */}
        <section className="ccrea-compare">
          <div className="container">
            <header className="ccrea-compare__head">
              <h2 className="ccrea-compare__title">Le détail des 3 formules en un coup d'œil</h2>
            </header>
            <div className="ccrea-compare__wrap">
              <table className="ccrea-compare__table">
                <thead>
                  <tr>
                    <th scope="col">Inclusion</th>
                    <th scope="col">Landing</th>
                    <th scope="col">Vitrine</th>
                    <th scope="col">E-commerce</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Nombre de pages</th>
                    <td>1</td>
                    <td>5</td>
                    <td>Illimité + catalogue</td>
                  </tr>
                  <tr>
                    <th scope="row">Délai de livraison</th>
                    <td>1 à 2 semaines</td>
                    <td>3 à 6 semaines</td>
                    <td>5 à 8 semaines</td>
                  </tr>
                  <tr>
                    <th scope="row">Thème WordPress sur-mesure</th>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Maquette Figma validée avant dev</th>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SEO technique et éditorial inclus</th>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Blog Gutenberg pré-configuré</th>
                    <td>
                      <span className="ccrea-compare__dash">—</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">WooCommerce (paiement, stocks)</th>
                    <td>
                      <span className="ccrea-compare__dash">—</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__dash">—</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Multilingue (WPML/Polylang)</th>
                    <td>Option</td>
                    <td>Option</td>
                    <td>Option</td>
                  </tr>
                  <tr>
                    <th scope="row">Formation Gutenberg (visio 1 h)</th>
                    <td>
                      <span className="ccrea-compare__dash">—</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                    <td>
                      <span className="ccrea-compare__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Support post-livraison</th>
                    <td>30 jours</td>
                    <td>30 jours</td>
                    <td>30 jours</td>
                  </tr>
                  <tr>
                    <th scope="row">À partir de (HT)</th>
                    <td>
                      <strong>1 499 €</strong>
                    </td>
                    <td>
                      <strong>2 999 €</strong>
                    </td>
                    <td>
                      <strong>4 999 €</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* ============ MÉTHODOLOGIE 6 ÉTAPES DÉTAILLÉE ============ */}
        <section className="ccrea-steps">
          <div className="container">
            <header className="ccrea-steps__head">
              <h2 className="ccrea-steps__title">Le KAMEO-Framework appliqué à la création WordPress</h2>
            </header>
            <ol className="ccrea-steps__list">
              <li className="ccrea-steps__item">
                <span className="ccrea-steps__num">01</span>
                <div>
                  <h3 className="ccrea-steps__name">
                    Brief découverte <span className="ccrea-steps__duration">30 min · gratuit</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    RDV visio ou dans nos bureaux Paris 2<sup>e</sup>. On comprend votre activité, votre cible, vos
                    concurrents, vos objectifs business et votre budget. Si on est faits pour bosser ensemble, on
                    enchaîne. Sinon on vous oriente honnêtement.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrables :</strong>compte-rendu écrit, recommandation honnête.
                  </p>
                </div>
              </li>
              <li className="ccrea-steps__item">
                <span className="ccrea-steps__num">02</span>
                <div>
                  <h3 className="ccrea-steps__name">
                    Devis détaillé <span className="ccrea-steps__duration">24 h</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    Vous recevez un devis chiffré sous 24 h avec périmètre fonctionnel, planning, livrables par étape et
                    tarif fixe. Conditions de paiement : 40 % à la commande, 40 % à la livraison de la maquette, 20 % à
                    la mise en ligne.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrables :</strong>devis détaillé, conditions de vente, planning.
                  </p>
                </div>
              </li>
              <li className="ccrea-steps__item">
                <span className="ccrea-steps__num">03</span>
                <div>
                  <h3 className="ccrea-steps__name">
                    Audit SEO et cadrage stratégique <span className="ccrea-steps__duration">2 à 3 j</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    Étude des mots-clés de votre secteur, analyse SERP, benchmark concurrents, sitemap et arborescence
                    en silos. Le squelette SEO est défini avant tout design ou code. C'est la base d'un site qui
                    rankera.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrables :</strong>rapport SEO, sitemap, plan éditorial, validation client.
                  </p>
                </div>
              </li>
              <li className="ccrea-steps__item">
                <span className="ccrea-steps__num">04</span>
                <div>
                  <h3 className="ccrea-steps__name">
                    Rédaction et maquettes <span className="ccrea-steps__duration">4 à 10 j</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    En parallèle : notre rédacteur web rédige les contenus SEO de chaque page, notre directrice
                    artistique conçoit les maquettes Figma. Vous validez les deux avant qu'on code une seule ligne.
                    Maximum 2 cycles de retours inclus.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrables :</strong>contenus rédigés, maquette Figma desktop + mobile.
                  </p>
                </div>
              </li>
              <li className="ccrea-steps__item">
                <span className="ccrea-steps__num">05</span>
                <div>
                  <h3 className="ccrea-steps__name">
                    Développement WordPress sur-mesure <span className="ccrea-steps__duration">7 à 18 j</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    Thème WordPress custom, blocks Gutenberg dédiés à vos besoins éditoriaux, intégration au pixel près,
                    optimisation des Core Web Vitals, balisage Schema.org, sécurité. Code propre, versionné Git,
                    documenté.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrables :</strong>site en environnement de staging, accès pour recette.
                  </p>
                </div>
              </li>
              <li className="ccrea-steps__item">
                <span className="ccrea-steps__num">06</span>
                <div>
                  <h3 className="ccrea-steps__name">
                    Mise en ligne et formation <span className="ccrea-steps__duration">1 à 2 j</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    Migration vers votre hébergement final, mise en ligne, soumission à Google Search Console, formation
                    visio à l'admin Gutenberg (1 h) et remise de la documentation Notion personnalisée. Bonus : 30 jours
                    de support technique inclus.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrables :</strong>site en ligne, formation, documentation, support 30 j.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        {/* ============ STACK TECHNIQUE ============ */}
        <section className="ccrea-stack">
          <div className="container">
            <header className="ccrea-stack__head">
              <h2 className="ccrea-stack__title">La stack technique de votre site WordPress</h2>
              <p className="ccrea-stack__intro">
                Pas de magie : on utilise des outils éprouvés, bien maîtrisés, et on évite tout ce qui plombe les
                performances ou crée de la dette technique inutile.
              </p>
            </header>
            <div className="ccrea-stack__grid">
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-code" />
                  </svg>
                </span>
                <h3 className="ccrea-stack__card-name">Front-end</h3>
                <ul className="ccrea-stack__card-list">
                  <li>WordPress 6.x</li>
                  <li>Thème custom (PHP, Twig optionnel)</li>
                  <li>Gutenberg + blocks ACF Pro</li>
                  <li>CSS moderne (variables, grid)</li>
                  <li>JavaScript vanilla léger</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-bolt" />
                  </svg>
                </span>
                <h3 className="ccrea-stack__card-name">Performance</h3>
                <ul className="ccrea-stack__card-list">
                  <li>Images WebP optimisées</li>
                  <li>Lazy-loading natif</li>
                  <li>CSS critique inliné</li>
                  <li>Cache serveur + CDN</li>
                  <li>Core Web Vitals 90+ mobile</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                  </svg>
                </span>
                <h3 className="ccrea-stack__card-name">SEO</h3>
                <ul className="ccrea-stack__card-list">
                  <li>Yoast ou Rank Math</li>
                  <li>Schema.org JSON-LD</li>
                  <li>Sitemap.xml dynamique</li>
                  <li>Robots.txt et redirections</li>
                  <li>Search Console intégré</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-shield-halved" />
                  </svg>
                </span>
                <h3 className="ccrea-stack__card-name">Sécurité</h3>
                <ul className="ccrea-stack__card-list">
                  <li>Durcissement admin (URL, 2FA)</li>
                  <li>Wordfence ou Sucuri</li>
                  <li>Sauvegardes externalisées</li>
                  <li>SSL Let's Encrypt</li>
                  <li>RGPD (consentement, formulaires)</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        {/* ============ COMPARATIF VS AUTRES TECHNO ============ */}
        <section className="ccrea-vs" id="comparatif">
          <div className="container">
            <header className="ccrea-vs__head">
              <h2 className="ccrea-vs__title">WordPress sur-mesure vs les autres solutions</h2>
              <p className="ccrea-vs__intro">
                On a vu passer toutes les techno. Notre conviction est que{' '}
                <strong>WordPress sur-mesure reste le meilleur rapport puissance / prix / pérennité</strong> pour 90 %
                des projets PME. Voici notre comparatif honnête.
              </p>
            </header>
            <div className="ccrea-vs__wrap">
              <table className="ccrea-vs__table">
                <thead>
                  <tr>
                    <th scope="col">Critère</th>
                    <th scope="col" className="is-winner">
                      <span className="ccrea-vs__winner-badge">
                        <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                          <use href="/icons.svg#i-solid-crown" />
                        </svg>
                        Recommandé
                      </span>
                      <span className="ccrea-vs__winner-title">WordPress sur-mesure</span>
                    </th>
                    <th scope="col">WP + page-builder</th>
                    <th scope="col">Webflow</th>
                    <th scope="col">Wix / Squarespace</th>
                    <th scope="col">Shopify</th>
                    <th scope="col">Framer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Coût initial</th>
                    <td className="is-winner ccrea-vs__rate--top">€€</td>
                    <td className="ccrea-vs__rate--mid">€€</td>
                    <td className="ccrea-vs__rate--mid">€€€</td>
                    <td className="ccrea-vs__rate--top">€</td>
                    <td className="ccrea-vs__rate--mid">€€</td>
                    <td className="ccrea-vs__rate--mid">€€</td>
                  </tr>
                  <tr>
                    <th scope="row">Coût récurrent (abo)</th>
                    <td className="is-winner ccrea-vs__rate--top">0 €</td>
                    <td className="ccrea-vs__rate--top">0 €</td>
                    <td className="ccrea-vs__rate--low">~30 €/mois</td>
                    <td className="ccrea-vs__rate--low">~25 €/mois</td>
                    <td className="ccrea-vs__rate--low">~40 €/mois + %</td>
                    <td className="ccrea-vs__rate--low">~20 €/mois</td>
                  </tr>
                  <tr>
                    <th scope="row">SEO technique</th>
                    <td className="is-winner ccrea-vs__rate--top">Excellent</td>
                    <td className="ccrea-vs__rate--mid">Bon mais lourd</td>
                    <td className="ccrea-vs__rate--mid">Bon</td>
                    <td className="ccrea-vs__rate--low">Limité</td>
                    <td className="ccrea-vs__rate--mid">Bon</td>
                    <td className="ccrea-vs__rate--mid">Bon</td>
                  </tr>
                  <tr>
                    <th scope="row">Performance (CWV)</th>
                    <td className="is-winner ccrea-vs__rate--top">Optimale</td>
                    <td className="ccrea-vs__rate--low">Souvent lente</td>
                    <td className="ccrea-vs__rate--top">Bonne</td>
                    <td className="ccrea-vs__rate--mid">Variable</td>
                    <td className="ccrea-vs__rate--mid">Bonne</td>
                    <td className="ccrea-vs__rate--top">Excellente</td>
                  </tr>
                  <tr>
                    <th scope="row">Liberté / personnalisation</th>
                    <td className="is-winner ccrea-vs__rate--top">Totale</td>
                    <td className="ccrea-vs__rate--mid">Limitée par builder</td>
                    <td className="ccrea-vs__rate--mid">Bonne</td>
                    <td className="ccrea-vs__rate--low">Très limitée</td>
                    <td className="ccrea-vs__rate--low">Cadre e-commerce</td>
                    <td className="ccrea-vs__rate--mid">Design-first</td>
                  </tr>
                  <tr>
                    <th scope="row">Propriété / portabilité</th>
                    <td className="is-winner ccrea-vs__rate--top">100 % à vous</td>
                    <td className="ccrea-vs__rate--top">100 % à vous</td>
                    <td className="ccrea-vs__rate--low">Hébergé Webflow</td>
                    <td className="ccrea-vs__rate--low">Lock-in plateforme</td>
                    <td className="ccrea-vs__rate--low">Lock-in Shopify</td>
                    <td className="ccrea-vs__rate--low">Hébergé Framer</td>
                  </tr>
                  <tr>
                    <th scope="row">Évolutivité long terme</th>
                    <td className="is-winner ccrea-vs__rate--top">Excellente</td>
                    <td className="ccrea-vs__rate--mid">Bonne</td>
                    <td className="ccrea-vs__rate--mid">Bonne</td>
                    <td className="ccrea-vs__rate--low">Plafond rapide</td>
                    <td className="ccrea-vs__rate--mid">Bonne (e-com)</td>
                    <td className="ccrea-vs__rate--mid">Bonne</td>
                  </tr>
                  <tr>
                    <th scope="row">E-commerce sérieux</th>
                    <td className="is-winner ccrea-vs__rate--top">WooCommerce</td>
                    <td className="ccrea-vs__rate--mid">WooCommerce</td>
                    <td className="ccrea-vs__rate--mid">Webflow Ecommerce</td>
                    <td className="ccrea-vs__rate--low">Limité</td>
                    <td className="ccrea-vs__rate--top">Cœur de métier</td>
                    <td className="ccrea-vs__rate--low">Pas adapté</td>
                  </tr>
                  <tr>
                    <th scope="row">Adapté pour…</th>
                    <td className="is-winner ccrea-vs__rate--top">PME, scale-ups, marques</td>
                    <td className="ccrea-vs__rate--mid">Indépendants</td>
                    <td className="ccrea-vs__rate--mid">Startups design-driven</td>
                    <td className="ccrea-vs__rate--mid">Très petits projets</td>
                    <td className="ccrea-vs__rate--mid">Pure-player e-com</td>
                    <td className="ccrea-vs__rate--mid">Sites portfolio</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* ============ CAS CLIENTS CHIFFRÉS ============ */}
        <section
          className="wp-cases"
          style={{ padding: 'clamp(64px, 8vw, 100px) 0', background: '#fff' }}
          id="cas-clients"
        >
          <div className="container">
            <header style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto clamp(40px, 5vw, 56px)' }}>
              <span className="ccrea-why__eyebrow">Cas clients récents</span>
              <h2
                style={{
                  fontSize: 'clamp(28px,3.4vw,44px)',
                  fontWeight: '900',
                  letterSpacing: '-.03em',
                  lineHeight: '1.1',
                  color: '#0f1115',
                  margin: '0',
                }}
              >
                Les chiffres parlent. <br />
                Pour nous.
              </h2>
            </header>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '22px',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              <article
                style={{
                  background: '#fff',
                  border: '1px solid rgba(15,17,21,.08)',
                  borderRadius: '22px',
                  padding: 'clamp(22px,2.4vw,30px)',
                  boxShadow: '0 24px 50px -28px rgba(15,17,21,.14)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <span style={{ fontWeight: '800', fontSize: '16px', color: '#0f1115' }}>Nexus Games</span>
                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: '600',
                      letterSpacing: '.04em',
                      color: '#ED6E63',
                      background: 'rgba(237,110,99,.1)',
                      border: '1px solid rgba(237,110,99,.25)',
                      padding: '4px 11px',
                      borderRadius: '999px',
                    }}
                  >
                    6 mois post-lancement
                  </span>
                </div>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'rgba(15,17,21,.04)',
                    border: '1px solid rgba(15,17,21,.06)',
                    marginBottom: '18px',
                    minHeight: '130px',
                  }}
                >
                  <img
                    src="/images/landing_page/Nexusgames.webp"
                    alt="Site WordPress Nexus Games par Kameo : courbe Search Console"
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    width="1292"
                    height="394"
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
                  <div
                    style={{
                      background: '#F9FAFB',
                      border: '1px solid rgba(15,17,21,.05)',
                      borderRadius: '10px',
                      padding: '12px 6px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Satoshi',sans-serif",
                        fontWeight: '900',
                        fontSize: 'clamp(18px,2vw,22px)',
                        letterSpacing: '-.02em',
                        color: '#0f1115',
                      }}
                    >
                      ×3
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(15,17,21,.55)', marginTop: '4px', lineHeight: '1.3' }}>
                      clics / jour
                      <br />
                      180 → 550
                    </div>
                  </div>
                  <div
                    style={{
                      background: '#F9FAFB',
                      border: '1px solid rgba(15,17,21,.05)',
                      borderRadius: '10px',
                      padding: '12px 6px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Satoshi',sans-serif",
                        fontWeight: '900',
                        fontSize: 'clamp(18px,2vw,22px)',
                        letterSpacing: '-.02em',
                        color: '#0f1115',
                      }}
                    >
                      ×10
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(15,17,21,.55)', marginTop: '4px', lineHeight: '1.3' }}>
                      impressions
                      <br />4 K → 40 K
                    </div>
                  </div>
                  <div
                    style={{
                      background: '#F9FAFB',
                      border: '1px solid rgba(15,17,21,.05)',
                      borderRadius: '10px',
                      padding: '12px 6px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Satoshi',sans-serif",
                        fontWeight: '900',
                        fontSize: 'clamp(18px,2vw,22px)',
                        letterSpacing: '-.02em',
                        color: '#0f1115',
                      }}
                    >
                      18 → 4
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(15,17,21,.55)', marginTop: '4px', lineHeight: '1.3' }}>
                      position moyenne
                    </div>
                  </div>
                </div>
              </article>
              <article
                style={{
                  background: '#fff',
                  border: '1px solid rgba(15,17,21,.08)',
                  borderRadius: '22px',
                  padding: 'clamp(22px,2.4vw,30px)',
                  boxShadow: '0 24px 50px -28px rgba(15,17,21,.14)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <span style={{ fontWeight: '800', fontSize: '16px', color: '#0f1115' }}>Medical Market</span>
                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: '600',
                      letterSpacing: '.04em',
                      color: '#ED6E63',
                      background: 'rgba(237,110,99,.1)',
                      border: '1px solid rgba(237,110,99,.25)',
                      padding: '4px 11px',
                      borderRadius: '999px',
                    }}
                  >
                    6 mois post-lancement
                  </span>
                </div>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'rgba(15,17,21,.04)',
                    border: '1px solid rgba(15,17,21,.06)',
                    marginBottom: '18px',
                    minHeight: '130px',
                  }}
                >
                  <img
                    src="/images/landing_page/MedicalMarket.webp"
                    alt="Site WordPress Medical Market par Kameo : courbe Search Console"
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    width="1280"
                    height="393"
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px' }}>
                  <div
                    style={{
                      background: '#F9FAFB',
                      border: '1px solid rgba(15,17,21,.05)',
                      borderRadius: '10px',
                      padding: '12px 6px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Satoshi',sans-serif",
                        fontWeight: '900',
                        fontSize: 'clamp(18px,2vw,22px)',
                        letterSpacing: '-.02em',
                        color: '#0f1115',
                      }}
                    >
                      ×10
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(15,17,21,.55)', marginTop: '4px', lineHeight: '1.3' }}>
                      de clics
                      <br />6 → 60
                    </div>
                  </div>
                  <div
                    style={{
                      background: '#F9FAFB',
                      border: '1px solid rgba(15,17,21,.05)',
                      borderRadius: '10px',
                      padding: '12px 6px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Satoshi',sans-serif",
                        fontWeight: '900',
                        fontSize: 'clamp(18px,2vw,22px)',
                        letterSpacing: '-.02em',
                        color: '#0f1115',
                      }}
                    >
                      ×3,6
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(15,17,21,.55)', marginTop: '4px', lineHeight: '1.3' }}>
                      impressions
                      <br />
                      700 → 2 500
                    </div>
                  </div>
                  <div
                    style={{
                      background: '#F9FAFB',
                      border: '1px solid rgba(15,17,21,.05)',
                      borderRadius: '10px',
                      padding: '12px 6px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Satoshi',sans-serif",
                        fontWeight: '900',
                        fontSize: 'clamp(18px,2vw,22px)',
                        letterSpacing: '-.02em',
                        color: '#0f1115',
                      }}
                    >
                      +20%
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(15,17,21,.55)', marginTop: '4px', lineHeight: '1.3' }}>
                      commandes en ligne
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* ============ ÉQUIPE ============ */}
        {/* ============ WOOCOMMERCE APPROFONDI ============ */}
        <section className="ccrea-woo">
          <div className="container">
            <header className="ccrea-woo__head">
              <span className="ccrea-woo__eyebrow">E-commerce WordPress</span>
              <h2 className="ccrea-woo__title">
                WooCommerce : pourquoi c'est devenu la solution e-commerce de référence sur WordPress
              </h2>
              <p className="ccrea-woo__intro">
                23 % des boutiques en ligne mondiales tournent sous WooCommerce. Cette domination n'est pas un hasard :
                voici concrètement ce que WooCommerce apporte à un e-commerce français, et quand c'est pertinent de
                l'utiliser plutôt qu'une alternative SaaS.
              </p>
            </header>
            <div className="ccrea-woo__grid">
              <article className="ccrea-woo__card">
                <h3 className="ccrea-woo__card-title">Paiement &amp; encaissement</h3>
                <p className="ccrea-woo__card-text">
                  WooCommerce s'intègre nativement à Stripe, PayPal, Mollie, Adyen, Klarna, Apple Pay, Google Pay. La
                  passerelle Stripe gère 3D Secure 2, virements SEPA, paiement en 3 ou 4 fois sans frais, abonnements
                  récurrents. Tout est cadré PCI-DSS sans que vous ayez à stocker une seule donnée bancaire.
                </p>
              </article>
              <article className="ccrea-woo__card">
                <h3 className="ccrea-woo__card-title">TVA &amp; comptabilité française</h3>
                <p className="ccrea-woo__card-text">
                  Calcul automatique de la TVA selon le pays de livraison, gestion des taux multiples (5,5 % / 10 % / 20
                  %), génération de factures PDF conformes (article 289 CGI), export vers les outils de compta français
                  : Pennylane, Sellsy, Sage, Cegid via API ou Zapier.
                </p>
              </article>
              <article className="ccrea-woo__card">
                <h3 className="ccrea-woo__card-title">Logistique &amp; livraison</h3>
                <p className="ccrea-woo__card-text">
                  Connexion native à Chronopost, Colissimo, Mondial Relay, DPD, UPS. Calcul du tarif selon poids et
                  destination, génération automatique des étiquettes, suivi colis intégré au compte client. Pour les
                  gros volumes, intégration avec les WMS (Boxtal, ShipStation).
                </p>
              </article>
              <article className="ccrea-woo__card">
                <h3 className="ccrea-woo__card-title">Stock &amp; produits</h3>
                <p className="ccrea-woo__card-text">
                  Gestion des variations (taille, couleur, finition), stocks par entrepôt, alertes seuil bas, ventes
                  croisées et upsell automatiques, produits téléchargeables, produits sur abonnement. Import / export
                  CSV ou Excel pour mettre à jour le catalogue en masse.
                </p>
              </article>
              <article className="ccrea-woo__card">
                <h3 className="ccrea-woo__card-title">SEO e-commerce natif</h3>
                <p className="ccrea-woo__card-text">
                  URLs propres, balisage Schema.org Product et Offer, données structurées avis (AggregateRating),
                  sitemap produits dédié, optimisation des images au format WebP, lazy loading. Yoast WooCommerce ou
                  Rank Math complète avec les méta-titres dynamiques et le contrôle des facettes.
                </p>
              </article>
              <article className="ccrea-woo__card">
                <h3 className="ccrea-woo__card-title">Marketing &amp; conversion</h3>
                <p className="ccrea-woo__card-text">
                  Coupons et promos avancées (premier achat, panier minimum, BOGO), abandons de panier avec relance
                  email (Klaviyo, Brevo), pop-ups exit-intent, programme de fidélité (points, parrainage), live chat
                  (Crisp, Tidio). Tunnel de conversion entièrement personnalisable.
                </p>
              </article>
            </div>
            <div className="ccrea-woo__vs">
              <h3 className="ccrea-woo__vs-title">WooCommerce vs Shopify vs Prestashop : notre lecture honnête</h3>
              <p className="ccrea-woo__vs-text">
                <strong>WooCommerce</strong> gagne sur le contrôle, la flexibilité, le SEO, le coût récurrent (pas
                d'abonnement plateforme, juste hébergement + plugins). Idéal de 50 à 5 000 références, avec un besoin de
                contenu éditorial fort (blog, guides, magazine). <br />
                <br />
                <strong>Shopify</strong> gagne sur la rapidité de mise en route et la robustesse opérationnelle, au prix
                d'un abonnement mensuel + commission, d'un SEO contraint (URLs imposées, blog limité) et d'un lock-in
                fort. <br />
                <br />
                <strong>Prestashop</strong> reste pertinent en France pour les gros catalogues B2B, mais souffre d'un
                écosystème plus pauvre que WooCommerce et de coûts modules plus élevés à long terme. <br />
                <br />
                Pour la majorité des e-commerces français entre 50 et 5 000 SKU,{' '}
                <strong>WooCommerce reste le meilleur rapport contrôle / coût / SEO</strong>. Notre{' '}
                <a href="agence-wordpress-paris.html" style={{ color: '#ED6E63', fontWeight: '700' }}>
                  agence WordPress à Paris
                </a>{' '}
                a livré plus de 15 e-commerces WooCommerce depuis 2023, voir notre cas{' '}
                <a href="#cas-clients" style={{ color: '#ED6E63', fontWeight: '700' }}>
                  Medical Market
                </a>{' '}
                pour un exemple concret.{' '}
              </p>
            </div>
          </div>
        </section>
        <section className="ccrea-team">
          <div className="container">
            <header className="ccrea-team__head">
              <span className="ccrea-team__eyebrow">L'équipe qui code votre site</span>
              <h2 className="ccrea-team__title">
                Vous bossez avec ces 3 personnes, pas avec un commercial puis un sous-traitant
              </h2>
              <p className="ccrea-team__intro">
                Designer, développeur, fondateur : nos 3 profils qui prennent en charge votre projet de A à Z. Vous les
                rencontrez au brief, vous travaillez avec eux pendant tout le projet, ils vous forment à la livraison.
              </p>
            </header>
            <div className="ccrea-team__grid">
              <article className="ccrea-team__card">
                <div className="ccrea-team__avatar">
                  <img
                    src="/images/benjamin.webp"
                    alt="Benjamin Dayan, Fondateur Kameo agence WordPress Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="ccrea-team__name">Benjamin Dayan</h3>
                <p className="ccrea-team__role">Fondateur · Stratégie &amp; SEO</p>
                <p className="ccrea-team__bio">
                  Pilote la stratégie SEO, le cadrage projet et la relation client. Garantit que votre site WordPress
                  sera conçu pour ranker dès la mise en ligne.
                </p>
              </article>
              <article className="ccrea-team__card">
                <div className="ccrea-team__avatar">
                  <img
                    src="/images/Aysha.webp"
                    alt="Aysha, Directrice artistique Kameo agence WordPress Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="ccrea-team__name">Aysha</h3>
                <p className="ccrea-team__role">Directrice artistique</p>
                <p className="ccrea-team__bio">
                  Conçoit les maquettes Figma de votre site WordPress. Design pensé pour guider le regard, créer la
                  confiance et déclencher l'action.
                </p>
              </article>
              <article className="ccrea-team__card">
                <div className="ccrea-team__avatar">
                  <img
                    src="/images/Louison.webp"
                    alt="Louison Boutet, Lead developpeur WordPress Kameo Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="ccrea-team__name">Louison Boutet</h3>
                <p className="ccrea-team__role">Lead développeur WordPress</p>
                <p className="ccrea-team__bio">
                  Développe le thème WordPress sur-mesure, code les blocks Gutenberg dédiés, optimise les Core Web
                  Vitals et gère la mise en ligne.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ GARANTIES POST-LIVRAISON ============ */}
        <section className="ccrea-guard">
          <div className="container">
            <div className="ccrea-guard__wrap">
              <div>
                <span className="ccrea-guard__eyebrow">Garanties post-livraison</span>
                <h2 className="ccrea-guard__title">Ce qui se passe une fois le site mis en ligne</h2>
                <p className="ccrea-guard__text">
                  Beaucoup d'agences disparaissent à la livraison. Pas nous. Notre engagement post-mise en ligne est
                  cadré, écrit dans le devis, et appliqué à la lettre. Vous n'êtes jamais seul devant votre site.
                </p>
              </div>
              <ul className="ccrea-guard__list">
                <li className="ccrea-guard__item">
                  <span className="ccrea-guard__check">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-check" />
                    </svg>
                  </span>
                  <div>
                    <p className="ccrea-guard__name">30 jours de support technique inclus</p>
                    <p className="ccrea-guard__desc">
                      Bug, blocage admin, micro-ajustement : on intervient sans facturer pendant un mois après la mise
                      en ligne.
                    </p>
                  </div>
                </li>
                <li className="ccrea-guard__item">
                  <span className="ccrea-guard__check">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-check" />
                    </svg>
                  </span>
                  <div>
                    <p className="ccrea-guard__name">Formation Gutenberg (1 h en visio)</p>
                    <p className="ccrea-guard__desc">
                      On vous forme à l'admin de votre site WordPress sur les cas d'usage réels : ajouter une page,
                      modifier le menu, publier un article.
                    </p>
                  </div>
                </li>
                <li className="ccrea-guard__item">
                  <span className="ccrea-guard__check">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-check" />
                    </svg>
                  </span>
                  <div>
                    <p className="ccrea-guard__name">Sauvegarde de remise en service</p>
                    <p className="ccrea-guard__desc">
                      Vous gardez une sauvegarde complète du site livré. En cas de problème grave, on peut tout
                      restaurer en moins d'une heure.
                    </p>
                  </div>
                </li>
                <li className="ccrea-guard__item">
                  <span className="ccrea-guard__check">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-check" />
                    </svg>
                  </span>
                  <div>
                    <p className="ccrea-guard__name">Option maintenance dès 79 € HT/mois</p>
                    <p className="ccrea-guard__desc">
                      Pour aller plus loin que les 30 jours offerts, notre forfait maintenance prend le relais. Sans
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
        {/* ============ CARROUSEL PROJETS WP ============ */}
        <section className="carousel" aria-label="Nos projets WordPress">
          <div className="carousel__track" id="carouselTrack">
            <article className="pcard">
              <Link href="/realisations/medical-market/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/medical-market.webp"
                    width="800"
                    height="445"
                    alt="Projet Medical Market"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Medical Market</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>DA</span>
                      <span>Site Web</span>
                      <span>Réseaux sociaux</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard">
              <Link href="/realisations/dronespec/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/dronespec.webp"
                    width="800"
                    height="600"
                    alt="Projet DroneSpec"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">DroneSpec</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>DA</span>
                      <span>Site Web</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard">
              <Link href="/realisations/les-cars-du-plateau/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/les-cars-du-plateau.webp"
                    width="1535"
                    height="829"
                    alt="Projet Les Cars du Plateau"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Les Cars du Plateau</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>DA</span>
                      <span>Site Web</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard">
              <Link href="/realisations/mobile-house/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/mobile-house.webp"
                    width="800"
                    height="452"
                    alt="Projet Mobile House"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Mobile House</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>Site Web</span>
                      <span>Fiche Google</span>
                      <span>SEO</span>
                    </div>
                    <div className="pcard__stat">
                      <strong>+65%</strong> Inscriptions newsletter
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard">
              <Link href="/realisations/claimz/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/claimz.webp"
                    width="800"
                    height="454"
                    alt="Projet Claimz"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Claimz</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>DA</span>
                      <span>Site Web</span>
                      <span>Réseaux Sociaux</span>
                    </div>
                    <div className="pcard__stat">
                      <strong>+120%</strong> Performance pub
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard">
              <Link href="/realisations/le-101/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/le-101.webp"
                    width="800"
                    height="441"
                    alt="Projet Le 101"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Le 101</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>DA</span>
                      <span>Site Web</span>
                      <span>Réseaux sociaux</span>
                    </div>
                    <div className="pcard__stat">
                      <strong>+40%</strong> Taux de conversion
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard" inert aria-hidden="true">
              <Link href="/realisations/medical-market/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/medical-market.webp"
                    width="800"
                    height="445"
                    alt="Projet Medical Market"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Medical Market</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>DA</span>
                      <span>Site Web</span>
                      <span>Réseaux sociaux</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard" inert aria-hidden="true">
              <Link href="/realisations/dronespec/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/dronespec.webp"
                    width="800"
                    height="600"
                    alt="Projet DroneSpec"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">DroneSpec</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>DA</span>
                      <span>Site Web</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard" inert aria-hidden="true">
              <Link href="/realisations/les-cars-du-plateau/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/les-cars-du-plateau.webp"
                    width="1535"
                    height="829"
                    alt="Projet Les Cars du Plateau"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Les Cars du Plateau</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>DA</span>
                      <span>Site Web</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard" inert aria-hidden="true">
              <Link href="/realisations/mobile-house/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/mobile-house.webp"
                    width="800"
                    height="452"
                    alt="Projet Mobile House"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Mobile House</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>Site Web</span>
                      <span>Fiche Google</span>
                      <span>SEO</span>
                    </div>
                    <div className="pcard__stat">
                      <strong>+65%</strong> Inscriptions newsletter
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard" inert aria-hidden="true">
              <Link href="/realisations/claimz/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/claimz.webp"
                    width="800"
                    height="454"
                    alt="Projet Claimz"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Claimz</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>DA</span>
                      <span>Site Web</span>
                      <span>Réseaux Sociaux</span>
                    </div>
                    <div className="pcard__stat">
                      <strong>+120%</strong> Performance pub
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard" inert aria-hidden="true">
              <Link href="/realisations/le-101/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/le-101.webp"
                    width="800"
                    height="441"
                    alt="Projet Le 101"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Le 101</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>DA</span>
                      <span>Site Web</span>
                      <span>Réseaux sociaux</span>
                    </div>
                    <div className="pcard__stat">
                      <strong>+40%</strong> Taux de conversion
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </div>
          <div className="carousel__cta">
            <Link href="/realisations/" className="btn btn--outline-pill">
              Voir plus de projets{' '}
              <span className="btn--outline-pill__icon">
                <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#i-solid-arrow-up-right-from-square" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
        {/* ============ FAQ création-spécifique ============ */}
        <section className="expertise-faq" aria-labelledby="faq-title">
          <div className="container">
            <h2 className="expertise-faq__title" id="faq-title">
              Questions fréquentes sur la création de site WordPress
            </h2>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que comprend exactement le tarif de 1 499 € pour une landing page WordPress ?{' '}
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
                    Le tarif inclut : <strong>une page WordPress sur-mesure</strong> (pas un template), le copywriting
                    orienté conversion par notre rédacteur, le design Figma desktop et mobile, le développement sur
                    thème custom (zéro page-builder), un formulaire de contact connecté, le tracking GA4 et Meta Pixel,
                    la conformité RGPD, le SEO technique et la mise en ligne. <strong>Hors périmètre :</strong> le
                    contenu photo/vidéo, l'hébergement (50 à 500 €/an au choix), le nom de domaine.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que comprend le tarif vitrine 2 999 € HT ? Combien de pages exactement ?{' '}
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
                    Le forfait vitrine couvre <strong>5 pages</strong> validées au devis : accueil, à propos, services,
                    blog et contact. Au-delà de 5 pages ou pour des fonctionnalités spécifiques (espace membre,
                    multilingue, intégration CRM) : on bascule sur un devis sur-mesure. La formation Gutenberg d'1 h est
                    incluse.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que comprend le tarif e-commerce 4 999 € HT sur WooCommerce ?{' '}
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
                    Le forfait e-commerce couvre WooCommerce sur-mesure pour <strong>jusqu'à 50 fiches produits</strong>{' '}
                    (catalogue manuel ou import CSV), le tunnel de commande optimisé, le paiement Stripe ou Mollie, la
                    gestion des stocks, les fiches produits SEO-friendly, le pixel Meta + GA4 e-commerce, et la
                    formation à la gestion catalogue. Au-delà de 50 SKU ou pour des intégrations spécifiques (ERP,
                    marketplace, dropshipping), devis sur-mesure.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Pourquoi un thème WordPress sur-mesure plutôt qu'un Elementor / Divi pré-fait ?{' '}
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
                    Les <strong>page-builders Elementor, Divi ou WPBakery</strong> sont rapides à mettre en place mais
                    hérités de code lourd qui plombe les Core Web Vitals (LCP &gt; 3 s, CLS instable), gonfle la base de
                    données et complique la maintenance. Un <strong>thème WordPress sur-mesure</strong> avec blocks
                    Gutenberg dédiés génère 70 % de poids en moins, charge en moins de 1,5 s, est mieux référencé, et
                    facile à faire évoluer. C'est notre choix systématique pour tous les projets.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que se passe-t-il si je veux ajouter des pages ou fonctionnalités en cours de projet ?{' '}
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
                    Pas de problème, mais on cadre clairement : on évalue ensemble l'impact sur le périmètre, le délai
                    et le tarif. Si l'ajout reste dans le format prévu, on l'intègre sans surcoût. Si ça dépasse, on
                    signe un <strong>avenant écrit</strong> qui chiffre exactement le supplément. Pas de surprise sur la
                    facture finale.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Mon site WordPress sera-t-il facile à modifier moi-même après livraison ?{' '}
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
                    Oui, vos contenus, vos pages, votre blog, vos images : tout se gère via l'éditeur{' '}
                    <strong>Gutenberg moderne</strong>, avec des blocks Kameo sur-mesure qui ressemblent à l'édition
                    dans Notion. La formation visio d'1 h vous donne tous les réflexes. Pour les évolutions plus
                    techniques (nouvelle fonction, intégration CRM), notre forfait{' '}
                    <Link href="/maintenance-wordpress/">maintenance</Link> prend le relais.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que se passe-t-il après la livraison ? Garantie, support, maintenance ?{' '}
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
                    Inclus dans tous les forfaits : <strong>30 jours de support technique</strong> gratuit (bug, blocage
                    admin, micro-ajustement), formation Gutenberg d'1 h en visio, et sauvegarde de remise en service.
                    Au-delà des 30 jours, notre{' '}
                    <Link href="/maintenance-wordpress/">forfait maintenance WordPress</Link> dès 79 € HT/mois prend le
                    relais (mises à jour, sauvegardes, sécurité, support). Sans engagement.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        {/* ============ CTA FINAL ============ */}
        <section className="creation-cta">
          <div className="creation-cta__container">
            <div className="creation-cta__box">
              <div className="creation-cta__wrap">
                <h2 className="creation-cta__title">Démarrons votre projet WordPress</h2>
                <p className="creation-cta__text">
                  Un brief découverte de 30 minutes, gratuit, sans engagement. Vous repartez avec une recommandation
                  honnête, même si on ne travaille pas ensemble. Devis détaillé sous 24 h.
                </p>
                <div className="creation-cta__actions">
                  <a
                    href="https://calendly.com/contact-agence-kameo/30min"
                    target="_blank"
                    rel="noopener"
                    className="creation-cta__btn creation-cta__btn--primary"
                  >
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-calendar-check" />
                    </svg>
                    Réserver mon brief découverte{' '}
                  </a>
                  <Link href="/realisations/" className="creation-cta__btn creation-cta__btn--secondary">
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
