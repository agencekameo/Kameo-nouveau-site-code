import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import { PROOF } from '@/lib/site';

const PATH = '/expertises-motion/';
const TITLE = 'Agence motion design Paris : vidéos sur-mesure | Kameo';
const DESCRIPTION =
  'Création de vidéos motion design, trailers et animations par notre agence motion parisienne. Brand film, teaser, motion branding pour PME et marques.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Expertises', path: '/agence-wordpress-paris/' },
  { name: 'Motion design', path: '/expertises-motion/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function ExpertisesMotionPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />

      <main id="main">
        {/* ============ PAGE HERO ============ */}
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Motion <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Agence motion design à Paris&nbsp;: <br />
              <span className="page-hero__title-muted">création de vidéos animées sur-mesure</span>
            </h1>
            <p className="page-hero__text">
              Notre agence motion design parisienne, basée dans le 2<sup>e</sup> arrondissement, crée des vidéos animées
              et trailers qui captent l’attention en quelques secondes. Du teaser percutant au brand film soigné, chaque
              image est pensée pour engager, convaincre et convertir vos prospects en clients.
            </p>
            {/* Barre de réassurance */}
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                <strong>★ 4,6/5</strong> sur Trustpilot · {PROOF.avisNombre} avis
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
            <h2 className="sr-only">Pourquoi choisir Kameo pour votre motion design</h2>
            <div className="features__wrap">
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-play" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Des vidéos qui captivent dès la première seconde</h3>
                </div>
                <p className="feature__text">
                  Dans un monde où l’attention se mesure en millisecondes, nous concevons des vidéos conçues pour
                  stopper le scroll et accrocher immédiatement le regard. Chaque séquence est soigneusement rythmée pour
                  garder votre audience engagée de la première à la dernière image.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-film" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Storytelling visuel qui convertit</h3>
                </div>
                <p className="feature__text">
                  Une bonne vidéo ne se contente pas d’être belle&nbsp;: elle raconte une histoire qui résonne. Nous
                  construisons une narration visuelle claire, émotionnelle et stratégique pour que votre message
                  atteigne sa cible, crée du lien et pousse à l’action.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-mobile-screen-button" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Contenu adapté à tous vos formats</h3>
                </div>
                <p className="feature__text">
                  Reels Instagram, YouTube, publicités TikTok, présentations corporate, landing pages… nous déclinons
                  votre contenu dans tous les formats dont vous avez besoin, en respectant les codes visuels de chaque
                  plateforme pour un impact maximal à chaque diffusion.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Motion branding cohérent avec votre identité</h3>
                </div>
                <p className="feature__text">
                  Votre identité visuelle prend vie. Couleurs, typographies, ton de voix&nbsp;: nous animons votre
                  univers graphique avec cohérence pour que chaque vidéo soit instantanément reconnaissable et renforce
                  la notoriété de votre marque à chaque vue.
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
                Notre process motion design en 4 étapes
              </h2>
              <p className="expertise-process__intro">
                Du brief créatif à la livraison de votre vidéo, notre agence motion parisienne suit une méthode éprouvée
                pour livrer des contenus visuels qui captent et convertissent.
              </p>
            </header>
            <ol className="expertise-process__steps">
              <li className="expertise-process__step">
                <span className="expertise-process__num">01</span>
                <h3 className="expertise-process__step-title">Brief &amp; storyboard</h3>
                <p className="expertise-process__step-text">
                  Atelier de cadrage&nbsp;: objectifs business, audience, ton, format. Rédaction du script et création
                  du storyboard image par image.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">02</span>
                <h3 className="expertise-process__step-title">Direction artistique</h3>
                <p className="expertise-process__step-text">
                  Définition de l’univers graphique, palette chromatique, typographie animée et style d’illustration.
                  Validation avant production.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">03</span>
                <h3 className="expertise-process__step-title">Animation &amp; voix off</h3>
                <p className="expertise-process__step-text">
                  Animation des éléments graphiques, intégration de la voix off (comédiens pro si besoin) et habillage
                  sonore sur-mesure.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">04</span>
                <h3 className="expertise-process__step-title">Livraison multi-format</h3>
                <p className="expertise-process__step-text">
                  Export aux formats nécessaires (16:9, 9:16 vertical pour Reels/TikTok, 1:1 carré). Diffusion optimisée
                  par plateforme.
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
                Devis sous 24h, sans engagement{' '}
              </span>
              <h2 className="pricing__title">Nos offres motion design</h2>
              <p className="pricing__intro">
                Teaser, brand film, motion branding&nbsp;: chaque projet est <strong>devisé sur-mesure</strong> selon la
                durée, le niveau d’animation et le nombre de formats demandés. Échelonnement 3× sans frais au-delà de
                3&nbsp;000&nbsp;€ HT.
              </p>
            </header>
            <div className="pricing__wrap">
              {/* Teaser & Reel */}
              <article className="pcard-offer">
                <span className="pcard-offer__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-clapperboard" />
                  </svg>
                </span>
                <h3 className="pcard-offer__title">Teaser &amp; reel</h3>
                <p className="pcard-offer__desc">
                  Une vidéo courte et percutante pour capter l’attention sur les réseaux et présenter votre marque en
                  quelques secondes.
                </p>
                <div className="pcard-offer__price-block">
                  <p className="pcard-offer__price pcard-offer__price--text">Sur devis</p>
                </div>
                <ul className="pcard-offer__list">
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-file-video" />
                    </svg>
                    1 vidéo (15 à 30&nbsp;s)
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-clock" />
                    </svg>
                    Livré en 14 jours
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Motion graphique
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-music" />
                    </svg>
                    Musique &amp; sound design{' '}
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
                        Sélection d’une bande sonore libre de droits et mixage audio professionnel.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-mobile-screen-button" />
                    </svg>
                    Format réseaux sociaux{' '}
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
                        Déclinaison 9:16, 1:1 et 16:9 pour Instagram, TikTok et YouTube.
                      </span>
                    </span>
                  </li>
                </ul>
              </article>
              {/* Brand Film */}
              <article className="pcard-offer">
                <span className="pcard-offer__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-film" />
                  </svg>
                </span>
                <div className="pcard-offer__title-row">
                  <h3 className="pcard-offer__title">Brand Film</h3>
                  <span className="pcard-offer__badge">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-fire" />
                    </svg>
                    Popular{' '}
                  </span>
                </div>
                <p className="pcard-offer__desc">
                  Un film de marque soigné qui raconte votre histoire, valorise votre offre et inspire confiance auprès
                  de vos prospects.
                </p>
                <div className="pcard-offer__price-block">
                  <p className="pcard-offer__price pcard-offer__price--text">Sur devis</p>
                </div>
                <ul className="pcard-offer__list">
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-file-video" />
                    </svg>
                    Jusqu’à 3 vidéos
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-clock" />
                    </svg>
                    Livré en 21 jours
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-list-check" />
                    </svg>
                    Storyboard inclus{' '}
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
                        Schématisation scène par scène de votre vidéo avant production pour valider la narration.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Motion graphique
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-music" />
                    </svg>
                    Musique &amp; sound design{' '}
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
                        Sélection d’une bande sonore libre de droits et mixage audio professionnel.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-mobile-screen-button" />
                    </svg>
                    Déclinaisons réseaux sociaux{' '}
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
                        Toutes les versions adaptées aux formats Instagram, TikTok, YouTube et LinkedIn.
                      </span>
                    </span>
                  </li>
                </ul>
              </article>
              {/* Campagne Premium */}
              <article className="pcard-offer pcard-offer--dark">
                <span className="pcard-offer__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-crown" />
                  </svg>
                </span>
                <h3 className="pcard-offer__title">Campagne complète</h3>
                <p className="pcard-offer__desc">
                  Une stratégie vidéo sur mesure avec accompagnement dédié, de la conception à la diffusion.
                </p>
                <div className="pcard-offer__price-block">
                  <p className="pcard-offer__price pcard-offer__price--text">Sur devis</p>
                </div>
                <ul className="pcard-offer__list">
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-file-video" />
                    </svg>
                    Vidéos illimitées
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-clock" />
                    </svg>
                    Livré selon planning
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-list-check" />
                    </svg>
                    Storyboard inclus{' '}
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
                        Schématisation scène par scène de votre vidéo avant production pour valider la narration.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Motion graphique
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-music" />
                    </svg>
                    Musique &amp; sound design{' '}
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
                        Sélection d’une bande sonore libre de droits et mixage audio professionnel.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-mobile-screen-button" />
                    </svg>
                    Déclinaisons réseaux sociaux{' '}
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
                        Toutes les versions adaptées aux formats Instagram, TikTok, YouTube et LinkedIn.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-paintbrush" />
                    </svg>
                    Direction artistique
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-headset" />
                    </svg>
                    Accompagnement dédié
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
                Tout savoir sur le motion design à Paris
              </h2>
              <p className="expertise-faq__intro">
                Les questions que nos clients PME, startups et marques nous posent le plus avant de démarrer un projet
                vidéo.
              </p>
            </header>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien coûte une vidéo motion design en 2026&nbsp;?{' '}
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
                    Le prix dépend du <strong>format et du niveau d’animation</strong>. À titre indicatif&nbsp;:{' '}
                    <strong>teaser/reel</strong> 30s à partir de ~1 200&nbsp;€ HT, <strong>brand film</strong> 60-90s
                    entre 3 000 et 6 000&nbsp;€ HT, <strong>motion branding</strong> complet (intro + outro + assets
                    sociaux) sur devis. Chaque projet est cadré précisément lors de l’appel découverte pour éviter tout
                    devis surprise.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien de temps prend la création d’une vidéo motion&nbsp;?{' '}
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
                    14 à 21 jours pour un teaser ou reel court, 28 à 42 jours pour un brand film complet (script +
                    storyboard + animation + voix off + montage). Les délais sont engagés dans le devis avec{' '}
                    <strong>jalons de validation à chaque étape</strong> (storyboard, animatique, V1, livraison finale).
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Quels formats vidéo sont livrés&nbsp;?{' '}
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
                    On livre votre vidéo dans <strong>tous les formats nécessaires</strong> pour vos canaux de
                    diffusion&nbsp;: <strong>16:9 horizontal</strong> (YouTube, site web, présentation),{' '}
                    <strong>9:16 vertical</strong> (Instagram Reels, TikTok, Shorts, Stories),{' '}
                    <strong>1:1 carré</strong> (LinkedIn, Facebook feed). Versions avec/sans sous-titres incluses pour
                    la diffusion sociale.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  La voix off et la musique sont-elles incluses&nbsp;?{' '}
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
                    Pour les brand films et trailers, oui&nbsp;: <strong>casting voix off pro</strong> (FR / anglais /
                    autres langues sur demande), <strong>musique sous licence commerciale</strong> et{' '}
                    <strong>sound design</strong> sur-mesure inclus dans le devis. Pour un teaser purement visuel, la
                    musique est optionnelle. Tous les droits sont cédés à votre marque, sans royalties à long terme.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Êtes-vous une agence motion design parisienne&nbsp;?{' '}
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
                    Kameo a son adresse à Paris, au 9 rue des Colonnes (Paris 2<sup>e</sup>), et son{' '}
                    <strong>équipe travaille à distance</strong>. Nos motion designers travaillent en interne, sans
                    sous-traitance. Nous accompagnons des clients à Paris, en France et à l’international, en visio.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Pouvez-vous décliner une charte graphique existante en motion design&nbsp;?{' '}
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
                    Bien sûr, c’est même un cas très fréquent. Si vous avez déjà une charte graphique (logo, palette,
                    typo), notre équipe l'<strong>extend en motion</strong> : système d’animation cohérent du logo,
                    transitions signature, comportements typographiques, motion guidelines. Vous obtenez un{' '}
                    <strong>motion branding</strong> qui prolonge votre identité statique sans la trahir.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="expertise-outro">
          <div className="container">
            <h2 className="expertise-outro__title">Et après un film de marque ?</h2>
            <p className="expertise-outro__text">
              Une marque bien posée mérite un support qui la serve. Nous concevons aussi les sites et les outils qui la
              font vivre.
            </p>
            <ul className="expertise-outro__links">
              <li>
                <Link href="/creation-site-wordpress/">création de votre site WordPress</Link>
              </li>
              <li>
                <Link href="/expertises-branding/">identité visuelle</Link>
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
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'expertises-motion' }),
          ...pageSchemas,
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
