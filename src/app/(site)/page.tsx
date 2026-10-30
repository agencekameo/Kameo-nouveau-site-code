import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import CalendlyPopup from '@/components/CalendlyPopup';
import { pageMetadata } from '@/lib/seo';
import { GOOGLE_SITE_VERIFICATION, PROOF } from '@/lib/site';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';

const PATH = '/';
const TITLE = 'Agence web Paris : création de site internet sur-mesure | Kameo';
const DESCRIPTION =
  'Kameo, agence web à Paris : création de site internet sur-mesure (WordPress, Framer, e-commerce). Design premium, SEO natif, livraison rapide. Devis gratuit.';

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  googleVerification: GOOGLE_SITE_VERIFICATION,
});

export default function HomePage() {
  return (
    <>
      <main id="main">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="hero__bg" aria-hidden="true" />
          <div className="container hero__inner">
            {/* Widget Trustpilot */}
            <a
              href="https://fr.trustpilot.com/review/agence-kameo.fr"
              target="_blank"
              rel="noopener"
              className="tp-widget tp-widget--light"
              aria-label={`Voir nos ${PROOF.avisNombre} avis sur Trustpilot, note 4,6 sur 5`}
            >
              <div className="tp-widget__stars" style={{ '--rating': '92%' }} aria-hidden="true">
                <span className="tp-widget__row tp-widget__row--bg">
                  <span className="tp-square">
                    <svg viewBox="0 0 96 96">
                      <rect width="96" height="96" />
                      <path d="M48 14 L58 40 L86 40 L63 56 L72 84 L48 67 L24 84 L33 56 L10 40 L38 40 Z" fill="#fff" />
                    </svg>
                  </span>
                  <span className="tp-square">
                    <svg viewBox="0 0 96 96">
                      <rect width="96" height="96" />
                      <path d="M48 14 L58 40 L86 40 L63 56 L72 84 L48 67 L24 84 L33 56 L10 40 L38 40 Z" fill="#fff" />
                    </svg>
                  </span>
                  <span className="tp-square">
                    <svg viewBox="0 0 96 96">
                      <rect width="96" height="96" />
                      <path d="M48 14 L58 40 L86 40 L63 56 L72 84 L48 67 L24 84 L33 56 L10 40 L38 40 Z" fill="#fff" />
                    </svg>
                  </span>
                  <span className="tp-square">
                    <svg viewBox="0 0 96 96">
                      <rect width="96" height="96" />
                      <path d="M48 14 L58 40 L86 40 L63 56 L72 84 L48 67 L24 84 L33 56 L10 40 L38 40 Z" fill="#fff" />
                    </svg>
                  </span>
                  <span className="tp-square">
                    <svg viewBox="0 0 96 96">
                      <rect width="96" height="96" />
                      <path d="M48 14 L58 40 L86 40 L63 56 L72 84 L48 67 L24 84 L33 56 L10 40 L38 40 Z" fill="#fff" />
                    </svg>
                  </span>
                </span>
                <span className="tp-widget__row tp-widget__row--fill">
                  <span className="tp-square tp-square--on">
                    <svg viewBox="0 0 96 96">
                      <rect width="96" height="96" />
                      <path d="M48 14 L58 40 L86 40 L63 56 L72 84 L48 67 L24 84 L33 56 L10 40 L38 40 Z" fill="#fff" />
                    </svg>
                  </span>
                  <span className="tp-square tp-square--on">
                    <svg viewBox="0 0 96 96">
                      <rect width="96" height="96" />
                      <path d="M48 14 L58 40 L86 40 L63 56 L72 84 L48 67 L24 84 L33 56 L10 40 L38 40 Z" fill="#fff" />
                    </svg>
                  </span>
                  <span className="tp-square tp-square--on">
                    <svg viewBox="0 0 96 96">
                      <rect width="96" height="96" />
                      <path d="M48 14 L58 40 L86 40 L63 56 L72 84 L48 67 L24 84 L33 56 L10 40 L38 40 Z" fill="#fff" />
                    </svg>
                  </span>
                  <span className="tp-square tp-square--on">
                    <svg viewBox="0 0 96 96">
                      <rect width="96" height="96" />
                      <path d="M48 14 L58 40 L86 40 L63 56 L72 84 L48 67 L24 84 L33 56 L10 40 L38 40 Z" fill="#fff" />
                    </svg>
                  </span>
                  <span className="tp-square tp-square--on">
                    <svg viewBox="0 0 96 96">
                      <rect width="96" height="96" />
                      <path d="M48 14 L58 40 L86 40 L63 56 L72 84 L48 67 L24 84 L33 56 L10 40 L38 40 Z" fill="#fff" />
                    </svg>
                  </span>
                </span>
              </div>
              <span className="tp-widget__text">
                <strong className="tp-widget__score">4,6</strong>
                <span className="tp-widget__count">sur Trustpilot · {PROOF.avisNombre} avis</span>
              </span>
            </a>
            <p className="hero__eyebrow">Design · SEO · Conversion</p>
            <h1 className="hero__title">
              Agence web à Paris&nbsp;: des sites <br />
              sur-mesure qui convertissent
            </h1>
            <p className="hero__description">
              Des sites web haut de gamme, conçus sur-mesure pour refléter l’excellence de votre activité.
            </p>
            <a href="https://calendly.com/contact-agence-kameo/30min" target="_blank" rel="noopener" className="slots">
              <span className="slots__dot" />
              <strong>2 créneaux</strong>
              <span className="slots__text">disponibles pour ce mois</span>
              <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                <use href="/icons.svg#i-solid-arrow-up-right-from-square" />
              </svg>
            </a>
            <div className="hero__actions">
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="btn btn--dark"
              >
                <span className="btn__icon">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-phone" />
                  </svg>
                </span>
                Prendre rendez-vous{' '}
              </a>
              <Link href="/realisations/" className="btn btn--outline">
                Réalisations{' '}
                <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#i-solid-arrow-up-right-from-square" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        {/* ============ HERO VIDEO ============ */}
        <section className="hero-video">
          <div className="container">
            <div className="hero-video__frame">
              <video
                className="hero-video__media"
                data-src="/video/kameo-motion-v2b.mp4"
                poster="/images/og-image.webp"
                width="1920"
                height="1080"
                muted
                loop
                playsInline
                preload="none"
                aria-label="Présentation Kameo en motion design"
              />
              <div className="hero-video__controls">
                <input
                  type="range"
                  className="hero-video__scrub"
                  min="0"
                  max="100"
                  defaultValue="0"
                  step="0.1"
                  aria-label="Position de lecture"
                />
                <button type="button" className="hero-video__btn" data-action="play" aria-label="Lecture / Pause">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-play" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="hero-video__btn"
                  data-action="mute"
                  aria-label="Activer / Couper le son"
                >
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-volume-xmark" />
                  </svg>
                </button>
              </div>
            </div>
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
                    alt="Projet Medical Market"
                    loading="lazy"
                    width="800"
                    height="445"
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
                    alt="Projet DroneSpec"
                    loading="lazy"
                    width="800"
                    height="600"
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
                    alt="Projet Les Cars du Plateau"
                    loading="lazy"
                    width="1100"
                    height="594"
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
                    alt="Projet Mobile House"
                    loading="lazy"
                    width="800"
                    height="452"
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
                    alt="Projet Claimz"
                    loading="lazy"
                    width="800"
                    height="454"
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
                    alt="Projet Le 101"
                    loading="lazy"
                    width="800"
                    height="441"
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
                    alt="Projet Medical Market"
                    loading="lazy"
                    width="800"
                    height="445"
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
                    alt="Projet DroneSpec"
                    loading="lazy"
                    width="800"
                    height="600"
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
                    alt="Projet Les Cars du Plateau"
                    loading="lazy"
                    width="1100"
                    height="594"
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
                    alt="Projet Mobile House"
                    loading="lazy"
                    width="800"
                    height="452"
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
                    alt="Projet Claimz"
                    loading="lazy"
                    width="800"
                    height="454"
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
                    alt="Projet Le 101"
                    loading="lazy"
                    width="800"
                    height="441"
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
        {/* ============ CARROUSEL LOGOS CLIENTS ============ */}
        <section className="logos" aria-label="Ils nous font confiance">
          <p className="logos__eyebrow">Ils nous font confiance</p>
          <div className="logos__viewport">
            <div className="logos__track" id="logosTrack">
              <div className="logo-item">
                <img
                  width="230"
                  height="180"
                  src="/images/logo clients/Dronespec.webp"
                  alt="Dronespec"
                  loading="lazy"
                />
              </div>
              <div className="logo-item">
                <img
                  width="617"
                  height="180"
                  src="/images/logo clients/Medical Market.webp"
                  alt="Medical Market"
                  loading="lazy"
                />
              </div>
              <div className="logo-item">
                <img width="499" height="180" src="/images/logo clients/Claimz.webp" alt="Claimz" loading="lazy" />
              </div>
              <div className="logo-item">
                <img
                  width="342"
                  height="180"
                  src="/images/logo clients/Be Cherry.webp"
                  alt="Be Cherry"
                  loading="lazy"
                />
              </div>
              <div className="logo-item">
                <img width="261" height="180" src="/images/logo clients/Ohvale.webp" alt="Ohvale" loading="lazy" />
              </div>
              <div className="logo-item">
                <img width="350" height="180" src="/images/logo clients/Qunfil.webp" alt="Qunfil" loading="lazy" />
              </div>
              <div className="logo-item">
                <img width="180" height="180" src="/images/logo clients/Valeos.webp" alt="Valeos" loading="lazy" />
              </div>
              <div className="logo-item">
                <img
                  width="379"
                  height="180"
                  src="/images/logo clients/Axistone Capital.webp"
                  alt="Axistone Capital"
                  loading="lazy"
                />
              </div>
              <div className="logo-item">
                <img
                  width="464"
                  height="180"
                  src="/images/logo clients/Villa de luxe Bonifacio.webp"
                  alt="Villa de luxe Bonifacio"
                  loading="lazy"
                />
              </div>
              <div className="logo-item">
                <img
                  width="494"
                  height="180"
                  src="/images/logo clients/Compagnie des Autocars Lyonnais.webp"
                  alt="Compagnie des Autocars Lyonnais"
                  loading="lazy"
                />
              </div>
              <div className="logo-item">
                <img width="180" height="180" src="/images/logo clients/Defikart.webp" alt="Defikart" loading="lazy" />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  width="230"
                  height="180"
                  src="/images/logo clients/Dronespec.webp"
                  alt="Dronespec"
                  loading="lazy"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  width="617"
                  height="180"
                  src="/images/logo clients/Medical Market.webp"
                  alt="Medical Market"
                  loading="lazy"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img width="499" height="180" src="/images/logo clients/Claimz.webp" alt="Claimz" loading="lazy" />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  width="342"
                  height="180"
                  src="/images/logo clients/Be Cherry.webp"
                  alt="Be Cherry"
                  loading="lazy"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img width="261" height="180" src="/images/logo clients/Ohvale.webp" alt="Ohvale" loading="lazy" />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img width="350" height="180" src="/images/logo clients/Qunfil.webp" alt="Qunfil" loading="lazy" />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img width="180" height="180" src="/images/logo clients/Valeos.webp" alt="Valeos" loading="lazy" />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  width="379"
                  height="180"
                  src="/images/logo clients/Axistone Capital.webp"
                  alt="Axistone Capital"
                  loading="lazy"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  width="464"
                  height="180"
                  src="/images/logo clients/Villa de luxe Bonifacio.webp"
                  alt="Villa de luxe Bonifacio"
                  loading="lazy"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  width="494"
                  height="180"
                  src="/images/logo clients/Compagnie des Autocars Lyonnais.webp"
                  alt="Compagnie des Autocars Lyonnais"
                  loading="lazy"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img width="180" height="180" src="/images/logo clients/Defikart.webp" alt="Defikart" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
        {/* ============ IMPACT / STATS ============ */}
        <section className="impact">
          <div className="container">
            <div className="impact__head">
              <span className="impact__eyebrow">
                <span className="impact__bracket impact__bracket--tr" aria-hidden="true" />
                Impact <span className="impact__bracket impact__bracket--bl" aria-hidden="true" />
              </span>
              <h2 className="impact__title">
                L’excellence, <br />
                <span className="impact__title-muted">au service de résultats concrets.</span>
              </h2>
            </div>
            <div className="stats">
              <article className="stat">
                <span className="stat__number">+50</span>
                <h3 className="stat__title">Entreprises accompagnées</h3>
                <p className="stat__text">
                  De PME parisiennes aux marques premium, Kameo transforme chaque projet en une expérience digitale
                  unique : création de site internet sur-mesure, refonte ou lancement e-commerce.
                </p>
              </article>
              <article className="stat">
                <span className="stat__number">95%</span>
                <h3 className="stat__title">Clients satisfaits</h3>
                <p className="stat__text">
                  Accompagnement sur-mesure par une équipe intégrée, sans sous-traitance. Note Trustpilot 4,6/5
                  sur {PROOF.avisNombre} avis vérifiés.
                </p>
              </article>
              <article className="stat">
                <span className="stat__number">Depuis 2023</span>
                <h3 className="stat__title">Croissance continue</h3>
                <p className="stat__text">
                  Notre agence web parisienne grandit avec ses clients : 3 ans d’existence, plus de 50 sites livrés, et
                  une roadmap pensée pour la conversion durable.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ À PROPOS / NOTRE APPROCHE (SEO contextual) ============ */}
        <section className="seo-about">
          <div className="container seo-about__inner">
            <span className="seo-about__eyebrow">
              <span className="seo-about__bracket seo-about__bracket--tr" aria-hidden="true" />À propos de Kameo{' '}
              <span className="seo-about__bracket seo-about__bracket--bl" aria-hidden="true" />
            </span>
            <h2 className="seo-about__title">
              Kameo, votre agence web à Paris <br />
              <span className="seo-about__title-muted">depuis 2023</span>
            </h2>
            <p className="seo-about__text">
              Implantée au cœur du 2<sup>e</sup> arrondissement, <strong>Kameo est une agence web parisienne</strong>{' '}
              spécialisée dans la création de sites internet sur-mesure pour PME, startups et marques premium. Depuis
              2023, plus de 50 entreprises nous ont confié leur présence en ligne : du site vitrine WordPress au
              e-commerce WooCommerce, en passant par le <Link href="/expertises-branding/">branding</Link> et le{' '}
              <Link href="/expertises-motion/">motion design</Link>.{' '}
            </p>
            <p className="seo-about__text">
              Notre approche tient en une équipe intégrée à taille humaine, <strong>sans sous-traitance</strong>.
              Designer, développeur web, motion designer et chargé SEO travaillent dans une même équipe. Cette
              proximité garantit une cohérence visuelle, une réactivité et un niveau de finition que les grosses agences
              ne peuvent pas offrir à ces tarifs.{' '}
            </p>
            <p className="seo-about__text">
              Que vous cherchiez à{' '}
              <strong>
                <Link href="/refonte-wordpress/">refondre votre site WordPress</Link>
              </strong>
              , lancer une nouvelle activité ou attaquer un nouveau marché, notre{' '}
              <Link href="/agence-wordpress-paris/">agence WordPress parisienne</Link> combine design premium, SEO natif
              et accompagnement humain. L’objectif n’est pas de livrer un beau site : c’est de transformer votre
              présence en ligne en moteur de croissance mesurable.{' '}
            </p>
            <p className="seo-about__text">
              Quand le besoin dépasse le site vitrine, nous prenons le relais en{' '}
              <strong>
                <Link href="/developpement-sur-mesure/">développement sur-mesure</Link>
              </strong>{' '}
              : <Link href="/creation-site-ecommerce/">boutique e-commerce</Link> à fort volume,{' '}
              <Link href="/creation-marketplace/">marketplace multi-vendeurs</Link> avec paiement redistribué,{' '}
              <Link href="/creation-crm-sur-mesure/">CRM sur-mesure</Link> calqué sur votre process commercial, ou{' '}
              <Link href="/creation-saas-ia/">SaaS avec IA générative</Link>. Même équipe, même exigence, code dont vous
              restez propriétaire.{' '}
            </p>
          </div>
        </section>
        {/* ============ BENTO / NOS SERVICES ============ */}
        <section className="bento" id="services">
          <div className="container">
            <header className="bento__head">
              <span className="bento__eyebrow">
                <span className="bento__bracket bento__bracket--tr" aria-hidden="true" />
                Nos services <span className="bento__bracket bento__bracket--bl" aria-hidden="true" />
              </span>
              <h2 className="bento__title">
                Une palette d’expertises digitales <br />
                <span className="bento__title-muted">orchestrée avec précision et créativité</span>
              </h2>
            </header>
            <div className="bento__grid">
              <article className="bento__card bento__card--dev">
                <div className="bento__card-body">
                  <h3 className="bento__card-title">Développement Web</h3>
                  <p className="bento__card-text">
                    Nous concevons des sites internet et applications web d’exception, vitrines ou e-commerce, alliant
                    performance, intuitivité et esthétique raffinée pour une expérience digitale remarquable.
                  </p>
                </div>
                <div className="bento__dev-visual" aria-hidden="true">
                  <img loading="lazy" src="/images/mockup-mobile.webp" alt="" width="560" height="1036" />
                </div>
              </article>
              <article className="bento__card bento__card--ads">
                <div className="bento__card-body">
                  <h3 className="bento__card-title">Publicités / Ads</h3>
                  <p className="bento__card-text">
                    Nous pilotons vos campagnes publicitaires sur Meta et Google pour maximiser votre visibilité et
                    générer des résultats mesurables.
                  </p>
                  <ul className="bento__chips">
                    <li>
                      <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-solid-vector-square" />
                      </svg>
                      Visuels publicitaires
                    </li>
                    <li>
                      <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-solid-users-viewfinder" />
                      </svg>
                      Audience insights
                    </li>
                    <li>
                      <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-regular-object-ungroup" />
                      </svg>
                      Image de marque
                    </li>
                    <li>
                      <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-solid-quote-right" />
                      </svg>
                      Tracking &amp; intégrations
                    </li>
                    <li>
                      <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-regular-window-restore" />
                      </svg>
                      Landing pages optimisées
                    </li>
                    <li>
                      <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-regular-file-lines" />
                      </svg>
                      Messages persuasifs
                    </li>
                    <li>
                      <svg className="icon" viewBox="0 0 488 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-brands-google" />
                      </svg>
                      Performance &amp; visibilité
                    </li>
                  </ul>
                </div>
              </article>
              <article className="bento__card bento__card--branding">
                <div className="bento__split">
                  <div className="bento__split-left">
                    <h3 className="bento__card-title">Branding</h3>
                    <p className="bento__card-text">
                      Façonnez une identité visuelle forte et cohérente pour révéler l’essence de votre marque.
                    </p>
                    <a
                      href="https://calendly.com/contact-agence-kameo/30min"
                      target="_blank"
                      rel="noopener"
                      className="btn--outline-pill bento__cta"
                    >
                      Réserver un appel{' '}
                      <span className="btn--outline-pill__icon">
                        <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                          <use href="/icons.svg#i-solid-arrow-up-right-from-square" />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="bento__checklist" aria-label="Livrables branding">
                    <ul>
                      <li className="is-done">
                        <span>Logo</span>
                        <span className="bento__check" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-check" />
                          </svg>
                        </span>
                      </li>
                      <li className="is-done">
                        <span>Charte graphique</span>
                        <span className="bento__check" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-check" />
                          </svg>
                        </span>
                      </li>
                      <li className="is-done">
                        <span>Bannière</span>
                        <span className="bento__check" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-check" />
                          </svg>
                        </span>
                      </li>
                      <li>
                        <span>Icônes</span>
                        <span className="bento__check" aria-hidden="true" />
                      </li>
                      <li>
                        <span>Templates</span>
                        <span className="bento__check" aria-hidden="true" />
                      </li>
                      <li>
                        <span>Visuels</span>
                        <span className="bento__check" aria-hidden="true" />
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="bento__card bento__card--social">
                <div className="bento__card-body">
                  <h3 className="bento__card-title">Réseaux sociaux / Fiche Google</h3>
                  <p className="bento__card-text">
                    Transformez chaque point de contact en opportunité&nbsp;: réseaux sociaux animés sur-mesure et fiche
                    Google optimisée pour maximiser votre visibilité et vos conversions.
                  </p>
                </div>
                <div className="bento__widgets" aria-hidden="true">
                  <div className="widget widget--marketo">
                    <div className="widget__head">
                      <span className="widget__logo">
                        <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                          <use href="/icons.svg#i-solid-asterisk" />
                        </svg>
                      </span>
                      <div className="widget__head-text">
                        <strong>Marketo.</strong>
                        <small>Ecom Solutions</small>
                      </div>
                      <svg className="icon widget__chev" viewBox="0 0 320 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-solid-sort" />
                      </svg>
                    </div>
                    <ul className="widget__rows">
                      <li>
                        <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                          <use href="/icons.svg#i-solid-table-cells-large" />
                        </svg>
                        Overview
                      </li>
                      <li className="is-muted">
                        <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                          <use href="/icons.svg#i-solid-chart-pie" />
                        </svg>
                        Performance
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget--integrations">
                    <div className="widget__int-head">
                      <span className="widget__icon-sq">
                        <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                          <use href="/icons.svg#i-solid-table-cells-large" />
                        </svg>
                      </span>
                      <div className="widget__int-text">
                        <strong>Integrations</strong>
                        <p>Boost you workflow with powerful third-party apps</p>
                      </div>
                    </div>
                    <div className="widget__tabs">
                      <span className="is-active">All apps</span>
                      <span>Connected</span>
                      <span>Disconnected</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="bento__card bento__card--dark">
                <div className="bento__card--dark__dots" aria-hidden="true" />
                <div className="bento__card--dark__fade" aria-hidden="true" />
                <h3 className="bento__card-title bento__card-title--light">
                  Design d’exception, <br />
                  Marketing intelligent, <br />
                  <span className="bento__card-title-muted">Croissance sans limite</span>
                </h3>
                <a
                  href="https://calendly.com/contact-agence-kameo/30min"
                  target="_blank"
                  rel="noopener"
                  className="btn--outline-pill btn--outline-pill--light bento__cta"
                >
                  Réserver un appel{' '}
                  <span className="btn--outline-pill__icon">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-arrow-up-right-from-square" />
                    </svg>
                  </span>
                </a>
              </article>
            </div>
          </div>
        </section>
        {/* ============ PROCESS ============ */}
        <section className="process">
          <div className="container process__grid">
            <div className="process__head">
              <span className="process__eyebrow">
                <span className="process__bracket process__bracket--tr" aria-hidden="true" />
                Process <span className="process__bracket process__bracket--bl" aria-hidden="true" />
              </span>
              <h2 className="process__title">
                Des process <br />
                <span className="process__title-muted">optimisés &amp; efficaces.</span>
              </h2>
              <p className="process__text">
                Immersion totale dans votre univers pour comprendre et aligner notre stratégie sur vos réels besoins.
              </p>
            </div>
            <ol className="timeline" id="timeline">
              <li className="tl-item">
                <div className="tl-marker">
                  <span className="tl-num">1.</span>
                </div>
                <div className="tl-body">
                  <h3 className="tl-title">Découverte et Analyse</h3>
                  <p className="tl-text">
                    On analyse vos objectifs, votre audience et vos défis pour définir la stratégie parfaite ensemble.
                  </p>
                </div>
              </li>
              <li className="tl-item">
                <div className="tl-marker">
                  <span className="tl-num">2.</span>
                </div>
                <div className="tl-body">
                  <h3 className="tl-title">Stratégie sur-mesure</h3>
                  <p className="tl-text">
                    Mise en place d’un plan d’action personnalisé et d’une feuille de route claire pour atteindre vos
                    objectifs.
                  </p>
                </div>
              </li>
              <li className="tl-item">
                <div className="tl-marker">
                  <span className="tl-num">3.</span>
                </div>
                <div className="tl-body">
                  <h3 className="tl-title">Validation de stratégie</h3>
                  <p className="tl-text">
                    Vous visualisez et validez la stratégie proposée avant le lancement de la phase de production.
                  </p>
                </div>
              </li>
              <li className="tl-item">
                <div className="tl-marker">
                  <span className="tl-num">4.</span>
                </div>
                <div className="tl-body">
                  <h3 className="tl-title">Déploiement</h3>
                  <p className="tl-text">
                    Déploiement de votre projet avec mise en ligne optimisée et configuration complète de tous les
                    outils.
                  </p>
                </div>
              </li>
              <li className="tl-item">
                <div className="tl-marker">
                  <span className="tl-num">5.</span>
                </div>
                <div className="tl-body">
                  <h3 className="tl-title">Suivi &amp; accompagnement</h3>
                  <p className="tl-text">
                    Accompagnement continu, suivi des résultats et ajustements réguliers pour garantir la réussite de
                    votre projet.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        {/* ============ FAQ (v2.10.0) ============
         Ces 6 questions étaient balisées en FAQPage dans functions.php sans
         être affichées nulle part, ce qui contrevient aux règles Google : le
         balisage doit décrire un contenu visible. Elles sont désormais rendues
         ici, et le FAQPage est généré depuis ce HTML par kameo_faq_flush().
         Bénéfice second : des réponses courtes et autonomes sur l'identité de
         l'agence, c'est exactement ce qu'un moteur génératif peut citer. */}
        <section className="expertise-faq" aria-labelledby="home-faq-title">
          <div className="container">
            <h2 className="expertise-faq__title" id="home-faq-title">
              Les questions qu'on nous pose le plus souvent
            </h2>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  <span>Qui est Kameo ?</span>
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
                    Kameo est une agence web parisienne fondée en 2023 par Benjamin Dayan. C'est un studio intégré, basé
                    avec une adresse au 9 rue des Colonnes dans le 2e arrondissement, spécialisé dans deux métiers : la création de sites
                    WordPress sur-mesure et le développement d'applications métier, c'est-à-dire des CRM, des
                    marketplaces et des SaaS intégrant l'IA. Plus de 50 projets livrés, note Trustpilot 4,6/5 sur{' '}
                    {PROOF.avisNombre} avis.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  <span>Où est basée l'agence Kameo ?</span>
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
                    Kameo a son adresse au 9 rue des Colonnes, Paris 2e. Les rendez-vous se font en visio, sans
                    déplacement, avec des clients à Paris et dans toute la France.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  <span>Quels services propose Kameo ?</span>
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
                    Deux piliers. D'abord les sites internet :{' '}
                    <Link href="/creation-site-wordpress/">création WordPress sur-mesure</Link> dès 1 299 € HT,{' '}
                    <Link href="/refonte-wordpress/">refonte</Link>,{' '}
                    <Link href="/maintenance-wordpress/">maintenance</Link> dès 79 € HT par mois et{' '}
                    <Link href="/creation-site-ecommerce/">e-commerce</Link>. Ensuite les applications métier :{' '}
                    <Link href="/creation-crm-sur-mesure/">CRM sur-mesure</Link> dès 7 999 € HT,{' '}
                    <Link href="/creation-marketplace/">marketplace</Link> dès 8 000 € HT et{' '}
                    <Link href="/creation-saas-ia/">SaaS avec IA</Link> dès 8 000 € HT.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  <span>Combien coûte un site chez Kameo ?</span>
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
                    Une landing WordPress démarre à 1 299 € HT, un site vitrine à 1 999 € HT, une boutique WooCommerce à
                    2 999 € HT. Pour une application métier sur-mesure (CRM, marketplace, SaaS), comptez à partir de
                    7 999 € HT ; pour un e-commerce sur-mesure, à partir de 12 000 € HT. Le devis chiffré arrive sous
                    24 h après un échange découverte de 30 minutes, sans frais.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  <span>Kameo travaille-t-elle avec des freelances ou en offshore ?</span>
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
                    Non. Designer, développeur, expert SEO, motion designer et chef de projet travaillent ensemble,
                    dans une même équipe. Aucune sous-traitance, aucun offshore, aucune plateforme de
                    freelances. Vous avez un seul interlocuteur du début à la fin.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  <span>Comment contacter Kameo ?</span>
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
                    Par email à contact@agence-kameo.fr, ou en réservant un rendez-vous visio de 30 minutes sans frais
                    depuis la <Link href="/contact/">page contact</Link>. Réponse sous 24 h en semaine. Bureaux au 9 rue
                    des Colonnes, 75002 Paris.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>
      <CalendlyPopup />
      <JsonLd
        data={[
          ...themeSchemas({ path: PATH, crumbs: null }),
          ...pageSchemas,
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
