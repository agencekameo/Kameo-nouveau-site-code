import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';

const PATH = '/expertises-branding/';
const TITLE = 'Agence branding Paris : logo et identité dès 799 € | Kameo';
const DESCRIPTION =
  'Création d’identité visuelle, logo et charte graphique par notre agence branding parisienne. Branding premium sur-mesure pour PME, startups et marques.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Expertises', path: '/agence-wordpress-paris/' },
  { name: 'Branding', path: '/expertises-branding/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function ExpertisesBrandingPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />

      <main id="main">
        {/* ============ PAGE HERO ============ */}
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Branding <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Agence branding à Paris&nbsp;: <br />
              <span className="page-hero__title-muted">création d’identité visuelle &amp; logo sur-mesure</span>
            </h1>
            <p className="page-hero__text">
              Notre agence branding parisienne, basée dans le 2<sup>e</sup> arrondissement, façonne des identités
              visuelles fortes pour PME, startups et marques. Logo, charte graphique, direction artistique&nbsp;: chaque
              élément est pensé pour renforcer votre présence à Paris, en France et à l’international.
            </p>
            {/* Barre de réassurance */}
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                <strong>★ 4,6/5</strong> sur Trustpilot · 23 avis
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                <strong>50+ marques</strong> accompagnées depuis 2023
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                9 rue des Colonnes,{' '}
                <strong>
                  Paris 2<sup>e</sup>
                </strong>
              </span>
            </div>
            <a href="#offres" className="page-hero__btn">
              Nos offres{' '}
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
          </div>
        </section>
        {/* ============ FEATURES ============ */}
        <section className="features">
          <div className="container">
            <h2 className="sr-only">Pourquoi choisir Kameo pour votre branding</h2>
            <div className="features__wrap">
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-palette" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Identité visuelle forte et mémorable</h3>
                </div>
                <p className="feature__text">
                  Nous créons bien plus qu’un logo&nbsp;: nous donnons vie à l’essence de votre marque à travers une
                  identité visuelle cohérente et distinctive. Couleurs, typographies, éléments graphiques : chaque choix
                  est stratégique pour ancrer votre image dans l’esprit de vos clients.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-medal" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Positionnement clair qui vous différencie de la concurrence</h3>
                </div>
                <p className="feature__text">
                  Dans un marché saturé, la clarté est votre meilleur atout. Nous définissons avec précision ce qui vous
                  rend unique, votre promesse de valeur et votre ton de voix pour que votre audience comprenne
                  immédiatement pourquoi vous choisir plutôt qu’un autre.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-clipboard-list" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Cohérence sur tous vos supports de communication</h3>
                </div>
                <p className="feature__text">
                  Du site web aux réseaux sociaux, de vos cartes de visite à vos présentations commerciales&nbsp;: votre
                  marque doit parler d’une seule voix. Nous créons un univers graphique et éditorial harmonieux qui
                  renforce votre reconnaissance et votre professionnalisme à chaque point de contact.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-lightbulb" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Image de marque professionnelle qui inspire confiance</h3>
                </div>
                <p className="feature__text">
                  Votre branding est le reflet de votre sérieux et de votre expertise. Nous construisons une image de
                  marque solide et crédible qui rassure vos prospects, valorise votre offre et vous permet de vous
                  positionner comme leader sur votre marché.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ NOTRE MÉTHODE EN 4 ÉTAPES ============ */}
        <section className="expertise-process" aria-labelledby="process-title">
          <div className="container">
            <header className="expertise-process__head">
              <span className="expertise-process__eyebrow">
                <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
                Notre méthode <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
              </span>
              <h2 className="expertise-process__title" id="process-title">
                Notre process de branding en 4 étapes
              </h2>
              <p className="expertise-process__intro">
                De l’immersion dans votre univers jusqu’à la livraison de votre charte graphique, notre agence
                parisienne suit une méthode éprouvée pour construire une identité qui vous démarque durablement.
              </p>
            </header>
            <ol className="expertise-process__steps">
              <li className="expertise-process__step">
                <span className="expertise-process__num">01</span>
                <h3 className="expertise-process__step-title">Immersion &amp; positionnement</h3>
                <p className="expertise-process__step-text">
                  Atelier de découverte de votre marque, votre marché et votre cible. Définition du positionnement et de
                  la plateforme de marque.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">02</span>
                <h3 className="expertise-process__step-title">Recherche créative</h3>
                <p className="expertise-process__step-text">
                  Moodboards, exploration typographique et palette chromatique. 2 à 3 directions artistiques distinctes
                  pour valider l’angle.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">03</span>
                <h3 className="expertise-process__step-title">Conception identité</h3>
                <p className="expertise-process__step-text">
                  Logo principal, déclinaisons, système graphique cohérent. Application sur supports clés (carte de
                  visite, signature email, réseaux).
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">04</span>
                <h3 className="expertise-process__step-title">Livraison &amp; charte graphique</h3>
                <p className="expertise-process__step-text">
                  Charte graphique complète (PDF + fichiers natifs), guidelines d’usage, déclinaisons éditoriales. Vous
                  repartez avec toute votre marque.
                </p>
              </li>
            </ol>
          </div>
        </section>
        {/* ============ CARROUSEL PROJETS ============ */}
        <section className="carousel" aria-label="Nos projets">
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
        </section>
        {/* ============ PRICING ============ */}
        <section className="pricing" id="offres">
          <div className="container">
            <header className="pricing__head">
              <span className="pricing__badge">
                <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#i-solid-check" />
                </svg>
                Tarifs transparents, sans devis surprise{' '}
              </span>
              <h2 className="pricing__title">Nos offres de branding</h2>
              <p className="pricing__intro">
                Identité visuelle complète dès <strong>799&nbsp;€ HT</strong>, branding complet dès{' '}
                <strong>999&nbsp;€ HT</strong>, ou refonte complète sur devis. Échelonnement 3× sans frais au-delà de
                3&nbsp;000&nbsp;€ HT.
              </p>
            </header>
            <div className="pricing__wrap">
              <article className="pcard-offer">
                <span className="pcard-offer__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-file-lines" />
                  </svg>
                </span>
                <h3 className="pcard-offer__title">Branding essentiel</h3>
                <p className="pcard-offer__desc">
                  Les bases solides de votre identité visuelle pour démarrer avec professionnalisme.
                </p>
                <div className="pcard-offer__price-block">
                  <span className="pcard-offer__from">À partir de</span>
                  <p className="pcard-offer__price">
                    799&nbsp;€ <small>/HT</small>
                  </p>
                </div>
                <ul className="pcard-offer__list">
                  <li>
                    <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-user-check" />
                    </svg>
                    2 proposition de logo
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-clock" />
                    </svg>
                    Livré en 2 semaines
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-chart-column" />
                    </svg>
                    Charte graphique
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Palette de couleur &amp; Typographies{' '}
                    <span className="pcard-offer__tip">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pcard-offer__info"
                        aria-hidden="true"
                      >
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                      <span className="pcard-offer__tooltip">
                        Sélection de couleurs et polices définissant l’ADN visuel de votre marque.
                      </span>
                    </span>
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
                  <h3 className="pcard-offer__title">Branding Complet</h3>
                  <span className="pcard-offer__badge">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-fire" />
                    </svg>
                    Best seller{' '}
                  </span>
                </div>
                <p className="pcard-offer__desc">
                  Une image de marque cohérente, prête à déployer sur tous vos supports.
                </p>
                <div className="pcard-offer__price-block">
                  <span className="pcard-offer__from">À partir de</span>
                  <p className="pcard-offer__price">
                    999&nbsp;€ <small>/HT</small>
                  </p>
                </div>
                <ul className="pcard-offer__list">
                  <li>
                    <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-user-check" />
                    </svg>
                    3 propositions de logo
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-clock" />
                    </svg>
                    Livré en 3 semaines
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-chart-column" />
                    </svg>
                    Charte graphique
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Palette de couleur &amp; Typographies{' '}
                    <span className="pcard-offer__tip">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pcard-offer__info"
                        aria-hidden="true"
                      >
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                      <span className="pcard-offer__tooltip">
                        Sélection de couleurs et polices définissant l’ADN visuel de votre marque.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-globe" />
                    </svg>
                    Bannières réseaux sociaux{' '}
                    <span className="pcard-offer__tip">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pcard-offer__info"
                        aria-hidden="true"
                      >
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                      <span className="pcard-offer__tooltip">
                        Visuels aux bonnes dimensions pour LinkedIn, Instagram et Facebook.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-globe" />
                    </svg>
                    Mockups{' '}
                    <span className="pcard-offer__tip">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pcard-offer__info"
                        aria-hidden="true"
                      >
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                      <span className="pcard-offer__tooltip">
                        Mises en situation réalistes pour visualiser votre identité sur vos supports physiques et
                        digitaux.
                      </span>
                    </span>
                  </li>
                </ul>
              </article>
              <article className="pcard-offer pcard-offer--dark">
                <span className="pcard-offer__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-crown" />
                  </svg>
                </span>
                <h3 className="pcard-offer__title">Branding Premium</h3>
                <p className="pcard-offer__desc">Stratégie de marque sur mesure avec accompagnement dédié.</p>
                <div className="pcard-offer__price-block">
                  <p className="pcard-offer__price pcard-offer__price--text">Sur devis</p>
                </div>
                <ul className="pcard-offer__list">
                  <li>
                    <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-user-check" />
                    </svg>
                    3 propositions de logo
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-clock" />
                    </svg>
                    Livré en 3 semaines
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-chart-column" />
                    </svg>
                    Charte graphique
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Palette de couleur &amp; Typographies{' '}
                    <span className="pcard-offer__tip">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pcard-offer__info"
                        aria-hidden="true"
                      >
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                      <span className="pcard-offer__tooltip">
                        Sélection de couleurs et polices définissant l’ADN visuel de votre marque.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-globe" />
                    </svg>
                    Bannières réseaux sociaux{' '}
                    <span className="pcard-offer__tip">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pcard-offer__info"
                        aria-hidden="true"
                      >
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                      <span className="pcard-offer__tooltip">
                        Visuels aux bonnes dimensions pour LinkedIn, Instagram et Facebook.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-globe" />
                    </svg>
                    Mockups{' '}
                    <span className="pcard-offer__tip">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pcard-offer__info"
                        aria-hidden="true"
                      >
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                      <span className="pcard-offer__tooltip">
                        Mises en situation réalistes pour visualiser votre identité sur vos supports physiques et
                        digitaux.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-globe" />
                    </svg>
                    Templates (posts / stories…)
                    <span className="pcard-offer__tip">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pcard-offer__info"
                        aria-hidden="true"
                      >
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                      </svg>
                      <span className="pcard-offer__tooltip">
                        Modèles Canva / Figma prêts à l’emploi pour vos publications Instagram, Facebook et LinkedIn.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-id-card" />
                    </svg>
                    Cartes de visite
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-file-lines" />
                    </svg>
                    Flyers / menu
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        {/* ============ FAQ ============ */}
        <section className="expertise-faq" aria-labelledby="faq-title">
          <div className="container">
            <header className="expertise-faq__head">
              <span className="expertise-faq__eyebrow">Questions fréquentes</span>
              <h2 className="expertise-faq__title" id="faq-title">
                Tout savoir sur la création d’identité visuelle à Paris
              </h2>
              <p className="expertise-faq__intro">
                Les questions que nos clients PME, startups et marques nous posent le plus avant de démarrer un projet
                de branding.
              </p>
            </header>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Quel est le prix d’une identité visuelle complète à Paris&nbsp;?{' '}
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
                    Chez Kameo, le branding démarre à <strong>799&nbsp;€ HT</strong> (logo + charte essentielle),{' '}
                    <strong>999&nbsp;€ HT</strong> pour un branding complet (charte étendue, déclinaisons, bannières
                    réseaux). Pour une refonte de marque complète ou un naming, on établit un devis sur-mesure après
                    l’appel découverte. Échelonnement 3× sans frais possible au-delà de 3&nbsp;000&nbsp;€ HT.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien de temps prend la création d’une identité de marque&nbsp;?{' '}
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
                    De 2 à 4 semaines selon la complexité&nbsp;: 2 semaines pour une identité essentielle (logo +
                    charte), 3 à 4 semaines pour un branding complet avec déclinaisons et système graphique. Les délais
                    sont <strong>engagés par écrit dans le devis</strong>, avec validations par étapes (moodboards,
                    propositions logo, finalisation).
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que contient exactement la charte graphique livrée&nbsp;?{' '}
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
                    Vous recevez&nbsp;: <strong>fichiers natifs</strong> (Illustrator, Figma) +{' '}
                    <strong>exports finaux</strong> (PNG, SVG, PDF, EPS), <strong>guidelines d’usage</strong>{' '}
                    (typographies, palette, espaces, déclinaisons) sous forme de PDF, ainsi que les déclinaisons clés
                    (carte de visite, signature mail, bannières LinkedIn / Instagram / Facebook au bon format). Tout est{' '}
                    <strong>cédé sans licence cachée</strong>.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Êtes-vous une agence branding parisienne&nbsp;? Travaillez-vous à distance&nbsp;?{' '}
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
                    Oui, Kameo est une <strong>agence branding et création graphique située à Paris</strong>, au 9 rue
                    des Colonnes (Paris 2<sup>e</sup>). Nous accueillons nos clients en RDV physique pour les ateliers
                    d’immersion sur Paris et Île-de-France, et travaillons en 100% visio pour les clients en région et à
                    l’international.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien de propositions de logo allez-vous me présenter&nbsp;?{' '}
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
                    Selon l’offre&nbsp;: <strong>2 propositions de logo</strong> pour le branding essentiel,{' '}
                    <strong>3 propositions</strong> pour le branding complet. Chaque proposition est{' '}
                    <strong>argumentée stratégiquement</strong> (intention, références, positionnement). Vous choisissez
                    une direction, on raffine ensuite jusqu’à validation finale, aller-retours illimités sur la version
                    sélectionnée.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Puis-je commander uniquement un logo, sans la charte graphique&nbsp;?{' '}
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
                    Techniquement oui, mais on le déconseille fortement. Un logo seul, sans système graphique cohérent
                    (typographies, palette, déclinaisons), perd 80% de son impact dès qu’il est utilisé hors contexte.
                    Notre offre essentielle à <strong>799&nbsp;€ HT inclut logo + charte minimale</strong> pour garantir
                    une cohérence visuelle dès le J1.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="expertise-outro">
          <div className="container">
            <h2 className="expertise-outro__title">Et après une identité visuelle ?</h2>
            <p className="expertise-outro__text">
              Une marque bien posée mérite un support qui la serve. Nous concevons aussi les sites et les outils qui la
              font vivre.
            </p>
            <ul className="expertise-outro__links">
              <li>
                <Link href="/creation-site-wordpress/">création de votre site WordPress</Link>
              </li>
              <li>
                <Link href="/agence-wordpress-paris/">notre expertise WordPress</Link>
              </li>
              <li>
                <Link href="/realisations/">nos réalisations</Link>
              </li>
            </ul>
            <a
              href="https://calendly.com/contact-agence-kameo/30min"
              target="_blank"
              rel="noopener"
              className="btn btn--primary"
            >
              Réserver un échange de 30 minutes
              <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                <use href="/icons.svg#i-solid-arrow-right" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <JsonLd
        data={[
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'expertises-branding' }),
          ...pageSchemas,
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
