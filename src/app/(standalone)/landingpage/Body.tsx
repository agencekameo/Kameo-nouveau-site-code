/* Corps de la page, converti depuis le gabarit WordPress. */
import Link from 'next/link';
import LpHeader from '@/components/landing/LpHeader';

const Body = () => (
  <>
    <a className="skip-link" href="#main">
      Aller au contenu principal
    </a>
    <LpHeader />
    <main id="main">
      {/* ━━ CINEMATIC HERO ━━ */}
      <section className="lp2-cinematic" id="cin-hero">
        {/* Background layers */}
        <div className="lp2-cin__grid" aria-hidden="true" />
        <div className="lp2-cin__aurora" aria-hidden="true" />
        <div className="lp2-cin__watermark" aria-hidden="true">
          KAMEO
        </div>
        {/* Diagonal marquee */}
        <div className="lp2-cin__marquee-wrap" aria-hidden="true">
          <div className="lp2-cin__marquee-track">
            {/* Set 1 */}
            <span className="lp2-cin__mitem">
              Sites web sur-mesure<span className="lp2-cin__msep">✦</span>
            </span>
            <span className="lp2-cin__mitem">
              Identité visuelle premium<span className="lp2-cin__msep">✦</span>
            </span>
            <span className="lp2-cin__mitem">
              +47 projets livrés<span className="lp2-cin__msep">✦</span>
            </span>
            <span className="lp2-cin__mitem">
              Motion design<span className="lp2-cin__msep">✦</span>
            </span>
            <span className="lp2-cin__mitem">
              Résultats mesurables<span className="lp2-cin__msep">✦</span>
            </span>
            <span className="lp2-cin__mitem">
              Agence parisienne<span className="lp2-cin__msep">✦</span>
            </span>
            {/* Set 2 (duplicate for loop) */}
            <span className="lp2-cin__mitem">
              Sites web sur-mesure<span className="lp2-cin__msep">✦</span>
            </span>
            <span className="lp2-cin__mitem">
              Identité visuelle premium<span className="lp2-cin__msep">✦</span>
            </span>
            <span className="lp2-cin__mitem">
              +47 projets livrés<span className="lp2-cin__msep">✦</span>
            </span>
            <span className="lp2-cin__mitem">
              Motion design<span className="lp2-cin__msep">✦</span>
            </span>
            <span className="lp2-cin__mitem">
              Résultats mesurables<span className="lp2-cin__msep">✦</span>
            </span>
            <span className="lp2-cin__mitem">
              Agence parisienne<span className="lp2-cin__msep">✦</span>
            </span>
          </div>
        </div>
        {/* Main content */}
        <div className="lp2-cin__content">
          <a
            href="https://fr.trustpilot.com/review/agence-kameo.fr"
            target="_blank"
            rel="noopener"
            className="tp-widget"
            id="cin-eyebrow"
            aria-label="Voir tous nos avis sur Trustpilot, note 4,6 sur 5"
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
              <span className="tp-widget__count">sur Trustpilot · +21 avis</span>
            </span>
          </a>
          <h1 className="lp2-cin__h2" id="cin-h2">
            Votre futur site web. <br />
            Pensé pour convertir.{' '}
          </h1>
          <p className="lp2-cin__sub" id="cin-sub">
            <strong style={{ color: 'rgba(255,255,255,.92)' }}>50+ entreprises nous font déjà confiance.</strong>
            <br />
            Devis sous 24 h, design premium, livraison rapide, zéro sous-traitance.{' '}
          </p>
          <div className="lp2-cin__pills" id="cin-pills">
            <div className="lm-btn">
              <div className="lm-shader" aria-hidden="true" />
              <div className="lm-bg" aria-hidden="true" />
              <span className="lm-label">
                Réserver mon RDV gratuit{' '}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 11L11 3M11 3H6M11 3V8" />
                </svg>
              </span>
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="lm-trigger"
                aria-label="Réserver mon RDV gratuit"
              />
            </div>
          </div>
          <p className="lp2-cin__microcopy" id="cin-microcopy">
            Sans engagement · Devis transparent sous 24 h · Aucune sous-traitance{' '}
          </p>
        </div>
      </section>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         DARK STAGE, fond commun
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="lp2-dark-stage">
        <div className="lp2-dark-stage__grid" aria-hidden="true" />
        <div className="lp2-dark-stage__aurora--a" aria-hidden="true" />
        <div className="lp2-dark-stage__aurora--b" aria-hidden="true" />
        <div className="lp2-dark-stage__aurora--c" aria-hidden="true" />
        {/* ━━ VIDEO MOTION KAMEO ━━ */}
        <section className="hero-video lp2-hero-video">
          <div className="container">
            <div className="hero-video__frame">
              <video
                className="hero-video__media"
                src="/video/MOTION-KAMEO.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
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
                  <svg className="icon" viewBox="0 0 320 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-pause" />
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
        {/* ━━ MARQUEE LOGOS ━━ */}
        <div className="lp2-marquee-wrap">
          <p className="lp2-marquee-label">Ils nous font confiance</p>
          <div className="lp2-marquee" aria-hidden="true">
            {/* Set 1, 11 logos */}
            <div className="lp2-marquee__item">
              <img
                src="/images/logo clients/Axistone Capital.webp"
                alt="Axistone Capital"
                loading="lazy"
                width="379"
                height="180"
              />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Be Cherry.webp" alt="Be Cherry" loading="lazy" width="342" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Claimz.webp" alt="Claimz" loading="lazy" width="499" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img
                src="/images/logo clients/Compagnie des Autocars Lyonnais.webp"
                alt="Compagnie des Autocars Lyonnais"
                loading="lazy"
                width="494"
                height="180"
              />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Defikart.webp" alt="Defikart" loading="lazy" width="180" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Dronespec.webp" alt="Dronespec" loading="lazy" width="230" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img
                src="/images/logo clients/Medical Market.webp"
                alt="Medical Market"
                loading="lazy"
                width="617"
                height="180"
              />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Ohvale.webp" alt="Ohvale" loading="lazy" width="261" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Qunfil.webp" alt="Qunfil" loading="lazy" width="350" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Valeos.webp" alt="Valeos" loading="lazy" width="180" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img
                src="/images/logo clients/Villa de luxe Bonifacio.webp"
                alt="Villa de luxe Bonifacio"
                loading="lazy"
                width="464"
                height="180"
              />
            </div>
            {/* Set 2, duplicate pour loop infini */}
            <div className="lp2-marquee__item">
              <img
                src="/images/logo clients/Axistone Capital.webp"
                alt="Axistone Capital"
                loading="lazy"
                width="379"
                height="180"
              />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Be Cherry.webp" alt="Be Cherry" loading="lazy" width="342" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Claimz.webp" alt="Claimz" loading="lazy" width="499" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img
                src="/images/logo clients/Compagnie des Autocars Lyonnais.webp"
                alt="Compagnie des Autocars Lyonnais"
                loading="lazy"
                width="494"
                height="180"
              />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Defikart.webp" alt="Defikart" loading="lazy" width="180" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Dronespec.webp" alt="Dronespec" loading="lazy" width="230" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img
                src="/images/logo clients/Medical Market.webp"
                alt="Medical Market"
                loading="lazy"
                width="617"
                height="180"
              />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Ohvale.webp" alt="Ohvale" loading="lazy" width="261" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Qunfil.webp" alt="Qunfil" loading="lazy" width="350" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img src="/images/logo clients/Valeos.webp" alt="Valeos" loading="lazy" width="180" height="180" />
            </div>
            <div className="lp2-marquee__item">
              <img
                src="/images/logo clients/Villa de luxe Bonifacio.webp"
                alt="Villa de luxe Bonifacio"
                loading="lazy"
                width="464"
                height="180"
              />
            </div>
          </div>
        </div>
        {/* ━━ BÉNÉFICES, Bento 2×2 ━━ */}
        <section className="lp2-benef" id="benefices">
          <div className="container">
            <p className="lp2-eyebrow lp2-benef__eyebrow" data-reveal="" style={{ textAlign: 'center' }}>
              <span className="lp2-cin__eyebrow-dot" />
              Pourquoi Kameo{' '}
            </p>
            <h2 className="lp2-h2 lp2-benef__h2" data-reveal="" style={{ transitionDelay: '.08s' }}>
              4 raisons concrètes <br />
              de nous confier votre site.
            </h2>
            <div className="lp2-benef__grid">
              <article className="lp2-benef__card" data-reveal="">
                <span className="lp2-benef__icon" aria-hidden="true">
                  <img src="/images/landing_page/illu_site_conversion.png" alt="" loading="lazy" />
                </span>
                <h3 className="lp2-benef__title">Des sites pensés pour convertir</h3>
                <p className="lp2-benef__text">
                  Chaque section, chaque CTA : chaque animation est conçue avec un objectif business clair. Pas de
                  design pour le design : du design qui vend.
                </p>
              </article>
              <article className="lp2-benef__card" data-reveal="" style={{ transitionDelay: '.100s' }}>
                <span className="lp2-benef__icon" aria-hidden="true">
                  <img src="/images/landing_page/illu_delais_respectes.png" alt="" loading="lazy" />
                </span>
                <h3 className="lp2-benef__title">Des délais respectés au jour près</h3>
                <p className="lp2-benef__text">
                  2 à 4 semaines selon l’offre. Engagement écrit dans le devis, suivi hebdomadaire, jamais de mauvaise
                  surprise.
                </p>
              </article>
              <article className="lp2-benef__card" data-reveal="" style={{ transitionDelay: '.200s' }}>
                <span className="lp2-benef__icon" aria-hidden="true">
                  <img src="/images/landing_page/illu_ref_gg_seo.png" alt="" loading="lazy" />
                </span>
                <h3 className="lp2-benef__title">Un référencement Google solide dès le J1</h3>
                <p className="lp2-benef__text">
                  Architecture sémantique, Core Web Vitals optimisés, balisage structuré, contenu travaillé pour les
                  bons mots-clés. Votre site arrive sur Google avec une base SEO propre. Pas besoin d’attendre 6 mois.
                </p>
              </article>
              <article className="lp2-benef__card" data-reveal="" style={{ transitionDelay: '.300s' }}>
                <span className="lp2-benef__icon" aria-hidden="true">
                  <img src="/images/landing_page/illu_id_visu.png" alt="" loading="lazy" />
                </span>
                <h3 className="lp2-benef__title">Une identité qui vous démarque</h3>
                <p className="lp2-benef__text">
                  Branding, motion, web : un univers cohérent qui marque les esprits. Vos clients vous reconnaissent au
                  premier coup d'œil, vos concurrents ne peuvent plus vous copier.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ━━ PROCESS ━━ */}
        <section className="lp2-process" id="process">
          <div className="container">
            <p className="lp2-eyebrow" data-reveal="" style={{ textAlign: 'center' }}>
              <span className="lp2-cin__eyebrow-dot" />
              Comment ça marche{' '}
            </p>
            <h2
              className="lp2-h2"
              data-reveal=""
              style={{
                transitionDelay: '.08s',
                textAlign: 'center',
                maxWidth: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 'clamp(40px,5vw,64px)',
              }}
            >
              De l’idée au site en ligne. <br />
              En 4 étapes claires.
            </h2>
            <div className="lp2-timeline">
              <div className="lp2-tstep" data-reveal="">
                <div className="lp2-tstep__num">1</div>
                <div className="lp2-tstep__title">Audit SEO</div>
                <p className="lp2-tstep__text">
                  On analyse vos mots-clés, vos concurrents et vos opportunités pour bâtir une stratégie SEO claire.
                </p>
              </div>
              <div className="lp2-tstep" data-reveal="" style={{ transitionDelay: '.12s' }}>
                <div className="lp2-tstep__num">2</div>
                <div className="lp2-tstep__title">Rédaction optimisée</div>
                <p className="lp2-tstep__text">
                  Un rédacteur expert rédige chaque page : du contenu pensé pour Google et pour convertir vos clients.
                </p>
              </div>
              <div className="lp2-tstep" data-reveal="" style={{ transitionDelay: '.24s' }}>
                <div className="lp2-tstep__num">3</div>
                <div className="lp2-tstep__title">Maquettes sur-mesure</div>
                <p className="lp2-tstep__text">
                  Notre DA conçoit une maquette unique, pensée pour guider le regard et déclencher l’action.
                </p>
              </div>
              <div className="lp2-tstep" data-reveal="" style={{ transitionDelay: '.36s' }}>
                <div className="lp2-tstep__num">4</div>
                <div className="lp2-tstep__title">Développement &amp; mise en ligne</div>
                <p className="lp2-tstep__text">
                  On intègre au pixel près, on optimise la performance et on met en ligne un site rapide, prêt à
                  convertir.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ━━ RÉSULTATS SEARCH CONSOLE ━━ */}
        <section className="lp2-results" id="resultats">
          <div className="container">
            <p className="lp2-eyebrow" data-reveal="" style={{ textAlign: 'center' }}>
              <span className="lp2-cin__eyebrow-dot" />
              Résultats réels{' '}
            </p>
            <h2
              className="lp2-h2"
              data-reveal=""
              style={{
                transitionDelay: '.08s',
                textAlign: 'center',
                maxWidth: '100%',
                margin: '0 auto clamp(40px,5vw,64px)',
              }}
            >
              Les chiffres parlent. <br />
              Pas nous.
            </h2>
            <div className="lp2-results__grid">
              {/* CLIENT 1 */}
              <article className="lp2-results__card" data-reveal="">
                <div className="lp2-results__head">
                  <span className="lp2-results__client">Nexus Games</span>
                  <span className="lp2-results__period">6 mois</span>
                </div>
                <div className="lp2-results__chart">
                  <img
                    src="/images/landing_page/Nexusgames.webp"
                    alt="Courbe Google Search Console, Nexus Games"
                    loading="lazy"
                    width="1292"
                    height="394"
                  />
                  <div className="lp2-results__chart-ph" style={{ display: 'none' }}>
                    {' '}
                    <svg viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true">
                      {' '}
                      <defs>
                        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(237,110,99,.35)" />
                          <stop offset="100%" stopColor="rgba(237,110,99,0)" />
                        </linearGradient>
                      </defs>{' '}
                      <path
                        d="M0,110 L40,100 L80,92 L120,78 L160,60 L200,48 L240,30 L280,18 L320,8 L320,120 L0,120 Z"
                        fill="url(#g1)"
                      />{' '}
                      <path
                        d="M0,110 L40,100 L80,92 L120,78 L160,60 L200,48 L240,30 L280,18 L320,8"
                        fill="none"
                        stroke="#ED6E63"
                        strokeWidth="2.5"
                      />{' '}
                    </svg>{' '}
                    <span className="lp2-results__chart-label">Capture Google Search Console</span>{' '}
                  </div>
                </div>
                <div className="lp2-results__stats">
                  <div className="lp2-results__stat">
                    <span className="lp2-results__num">×3</span>
                    <span className="lp2-results__lbl">
                      clics / jour
                      <br />
                      180 → 550
                    </span>
                  </div>
                  <div className="lp2-results__stat">
                    <span className="lp2-results__num">×10</span>
                    <span className="lp2-results__lbl">
                      impressions
                      <br />4 K → 40 K
                    </span>
                  </div>
                  <div className="lp2-results__stat">
                    <span className="lp2-results__num">18 → 4</span>
                    <span className="lp2-results__lbl">position moyenne</span>
                  </div>
                </div>
              </article>
              {/* CLIENT 2 */}
              <article className="lp2-results__card" data-reveal="" style={{ transitionDelay: '.12s' }}>
                <div className="lp2-results__head">
                  <span className="lp2-results__client">Medical Market</span>
                  <span className="lp2-results__period">6 mois</span>
                </div>
                <div className="lp2-results__chart">
                  <img
                    src="/images/landing_page/MedicalMarket.webp"
                    alt="Courbe Google Search Console, Medical Market"
                    loading="lazy"
                    width="1280"
                    height="393"
                  />
                  <div className="lp2-results__chart-ph" style={{ display: 'none' }}>
                    {' '}
                    <svg viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true">
                      {' '}
                      <defs>
                        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(237,110,99,.35)" />
                          <stop offset="100%" stopColor="rgba(237,110,99,0)" />
                        </linearGradient>
                      </defs>{' '}
                      <path
                        d="M0,112 L40,108 L80,95 L120,88 L160,70 L200,55 L240,42 L280,28 L320,20 L320,120 L0,120 Z"
                        fill="url(#g2)"
                      />{' '}
                      <path
                        d="M0,112 L40,108 L80,95 L120,88 L160,70 L200,55 L240,42 L280,28 L320,20"
                        fill="none"
                        stroke="#ED6E63"
                        strokeWidth="2.5"
                      />{' '}
                    </svg>{' '}
                    <span className="lp2-results__chart-label">Capture Google Search Console</span>{' '}
                  </div>
                </div>
                <div className="lp2-results__stats">
                  <div className="lp2-results__stat">
                    <span className="lp2-results__num">×10</span>
                    <span className="lp2-results__lbl">
                      de clics
                      <br />6 → 60
                    </span>
                  </div>
                  <div className="lp2-results__stat">
                    <span className="lp2-results__num">×3,6</span>
                    <span className="lp2-results__lbl">
                      impressions
                      <br />
                      700 → 2 500
                    </span>
                  </div>
                  <div className="lp2-results__stat">
                    <span className="lp2-results__num">+20%</span>
                    <span className="lp2-results__lbl">commandes en ligne</span>
                  </div>
                </div>
              </article>
            </div>
            <p className="lp2-results__source" data-reveal="">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Données réelles extraites de Google Search Console{' '}
            </p>
          </div>
        </section>
        {/* ━━ PRICING ━━ */}
        <section id="tarifs" className="lp2-tarifs" style={{ padding: 'clamp(64px,8vw,100px) 0' }}>
          <div className="container">
            <p className="lp2-eyebrow" data-reveal="" style={{ textAlign: 'center' }}>
              <span className="lp2-cin__eyebrow-dot" />
              Nos offres{' '}
            </p>
            <h2
              className="lp2-h2"
              data-reveal=""
              style={{
                transitionDelay: '.08s',
                textAlign: 'center',
                maxWidth: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 'clamp(40px,5vw,64px)',
              }}
            >
              Transparent sur les prix, <br />
              exigeant sur les résultats.
            </h2>
            <div className="pricing__wrap">
              <article className="pcard-offer" data-reveal="">
                <span className="pcard-offer__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-file-lines" />
                  </svg>
                </span>
                <h3 className="pcard-offer__title">Landing Page</h3>
                <p className="pcard-offer__desc">
                  Idéale pour créer ou refondre une page web qui capte l’attention et génère des résultats concrets
                  grâce à un design optimisé pour la conversion.
                </p>
                <div className="pcard-offer__price-block">
                  <span className="pcard-offer__from">À partir de</span>
                  <p className="pcard-offer__price">
                    1&nbsp;499&nbsp;€ <small>HT</small>
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
                    Adaptation mobile (responsive){' '}
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
                        Votre site s’adapte parfaitement à tous les écrans&nbsp;: smartphone, tablette et desktop.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-palette" />
                    </svg>
                    Design moderne &amp; épuré{' '}
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
                        Maquettes sur mesure avec une identité visuelle soignée, cohérente et tendance.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Animations dynamiques{' '}
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
                        Micro-animations et transitions fluides pour une expérience utilisateur engageante et mémorable.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-chart-bar" />
                    </svg>
                    Rapport mensuel des statistiques{' '}
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
                        Rapport mensuel clair&nbsp;: trafic, sources, conversions et performances de votre site.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-hand-point-up" />
                    </svg>
                    Facile de prise en main
                  </li>
                </ul>
              </article>
              <article className="pcard-offer" data-reveal="" style={{ transitionDelay: '.1s' }}>
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
                    2&nbsp;999&nbsp;€ <small>/HT</small>
                  </p>
                </div>
                <ul className="pcard-offer__list">
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-file" />
                    </svg>
                    Jusqu’à 5 pages
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
                    Adaptation mobile (responsive){' '}
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
                        Votre site s’adapte parfaitement à tous les écrans&nbsp;: smartphone, tablette et desktop.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-palette" />
                    </svg>
                    Design moderne &amp; épuré{' '}
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
                        Maquettes sur mesure avec une identité visuelle soignée, cohérente et tendance.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Animations dynamiques{' '}
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
                        Micro-animations et transitions fluides pour une expérience utilisateur engageante et mémorable.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-chart-bar" />
                    </svg>
                    Rapport mensuel des statistiques{' '}
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
                        Rapport mensuel clair&nbsp;: trafic, sources, conversions et performances de votre site.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-hand-point-up" />
                    </svg>
                    Facile de prise en main
                  </li>
                </ul>
              </article>
              <article className="pcard-offer" data-reveal="" style={{ transitionDelay: '.2s' }}>
                <span className="pcard-offer__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-bag-shopping" />
                  </svg>
                </span>
                <h3 className="pcard-offer__title">E-commerce</h3>
                <p className="pcard-offer__desc">
                  Pensée pour les marques qui veulent vendre en ligne&nbsp;: catalogue produits, paiement sécurisé et
                  parcours d’achat optimisé pour maximiser vos conversions.
                </p>
                <div className="pcard-offer__price-block">
                  <span className="pcard-offer__from">À partir de</span>
                  <p className="pcard-offer__price">
                    4&nbsp;999&nbsp;€ <small>/HT</small>
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
                    Paiement sécurisé &amp; multi-devises{' '}
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
                        Intégration Stripe / PayPal avec gestion multi-devises et certificat SSL inclus.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                    </svg>
                    Adaptation mobile (responsive){' '}
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
                        Votre site s’adapte parfaitement à tous les écrans&nbsp;: smartphone, tablette et desktop.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-palette" />
                    </svg>
                    Design moderne &amp; épuré{' '}
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
                        Maquettes sur mesure avec une identité visuelle soignée, cohérente et tendance.
                      </span>
                    </span>
                  </li>
                  <li>
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-regular-chart-bar" />
                    </svg>
                    Rapport mensuel des statistiques{' '}
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
                        Rapport mensuel clair&nbsp;: trafic, sources, conversions et performances de votre site.
                      </span>
                    </span>
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
            <div className="lp2-tarifs__cta" data-reveal="" style={{ transitionDelay: '.2s' }}>
              <div className="lm-btn">
                <div className="lm-shader" aria-hidden="true" />
                <div className="lm-bg" aria-hidden="true" />
                <span className="lm-label">
                  Prendre rdv{' '}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 11L11 3M11 3H6M11 3V8" />
                  </svg>
                </span>
                <a
                  href="https://calendly.com/contact-agence-kameo/30min"
                  target="_blank"
                  rel="noopener"
                  className="lm-trigger"
                  aria-label="Prendre rdv"
                />
              </div>
              <p className="lp2-tarifs__cta-sub">30 min · Gratuit · Sans engagement</p>
            </div>
          </div>
        </section>
        {/* ━━ TESTIMONIALS, 3-col infinite scroll ━━ */}
        <section className="lp2-treviews" id="avis">
          {/* Background layers */}
          <div className="lp2-trev__inner">
            {/* Header */}
            <div className="lp2-trev__header" data-reveal="">
              <p className="lp2-trev__eyebrow">
                <span className="lp2-cin__eyebrow-dot" />
                Ce que nos clients disent{' '}
              </p>
              <h2 className="lp2-trev__h2">
                Ils en parlent <br />
                mieux que nous.
              </h2>
              <p className="lp2-trev__sub">Des retours authentiques, directement depuis nos clients.</p>
              <a
                href="https://fr.trustpilot.com/review/agence-kameo.fr"
                target="_blank"
                rel="noopener"
                className="lp2-trev__tp"
                aria-label="Voir tous les avis sur Trustpilot"
              >
                <span className="lp2-trev__tp-star">★★★★★</span>
                <span className="lp2-trev__tp-score">4,6</span>sur Trustpilot{' '}
              </a>
            </div>
            {/* 3 scrolling columns, 17 avis Trustpilot réels */}
            <div className="lp2-tscroll">
              {/* ━━ Col 1 (always visible, 22s), 6 reviews ━━ */}
              <div className="lp2-tscroll__col" style={{ '--dur': '40s' }}>
                {/* Set 1 */}
                <div className="lp2-tscroll__set">
                  <div className="lp2-tcard lp2-tcard--accent">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Équipe fiable et transparente</p>
                    <p className="lp2-tcard__text">
                      « Équipe efficace, impliquée, à l’écoute, transparente, disponible, fiable, qui tient ses délais,
                      vous donnent des conseils et fait le maximum pour répondre à vos besoins. Je recommande&nbsp;! »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#0ea5e9' }}>
                        CT
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Céline Taranto</div>
                        <div className="lp2-tcard__role">Cliente Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Un grand merci à l’agence Kameo</p>
                    <p className="lp2-tcard__text">
                      « J’ai été satisfaite de la conception de mon site internet au delà de mes attentes. Les délais
                      ont été respectés et le rendu impeccable&nbsp;: rien à dire, je recommande à 100%. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#14b8a6' }}>
                        NN
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Noella Ngo Hongla</div>
                        <div className="lp2-tcard__role">Cliente Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Au top&nbsp;!</p>
                    <p className="lp2-tcard__text">
                      « Au top&nbsp;! Rapide, efficace et un rapport qualité/prix incroyable. Merci »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: 'var(--accent)' }}>
                        MM
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Maud Marie</div>
                        <div className="lp2-tcard__role">Cliente Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Vous pouvez y aller les yeux fermés&nbsp;!</p>
                    <p className="lp2-tcard__text">
                      « J’ai fait appel à Kameo pour réaliser mon site e-commerce. Malgré le fait que je n’avais aucune
                      connaissance dans le domaine, ils ont su créer le site qui me correspond à 100%&nbsp;! Ils ont
                      fait preuve d’écoute, de patience et de bienveillance. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#ec4899' }}>
                        AS
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Atelier Songe</div>
                        <div className="lp2-tcard__role">Site e-commerce</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Un accompagnement professionnel</p>
                    <p className="lp2-tcard__text">
                      « Une équipe très à l’écoute et particulièrement sensible aux remarques du client. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#0f766e' }}>
                        JN
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Julien Nava</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Très bonne agence</p>
                    <p className="lp2-tcard__text">« Très bonne agence. Sérieuse et réactive. Merci »</p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#10b981' }}>
                        CD
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Celia D.</div>
                        <div className="lp2-tcard__role">Cliente Kameo</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Set 2, duplicate identique pour loop sans couture */}
                <div className="lp2-tscroll__set">
                  <div className="lp2-tcard lp2-tcard--accent">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Équipe fiable et transparente</p>
                    <p className="lp2-tcard__text">
                      « Équipe efficace, impliquée, à l’écoute, transparente, disponible, fiable, qui tient ses délais,
                      vous donnent des conseils et fait le maximum pour répondre à vos besoins. Je recommande&nbsp;! »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#0ea5e9' }}>
                        CT
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Céline Taranto</div>
                        <div className="lp2-tcard__role">Cliente Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Un grand merci à l’agence Kameo</p>
                    <p className="lp2-tcard__text">
                      « J’ai été satisfaite de la conception de mon site internet au delà de mes attentes. Les délais
                      ont été respectés et le rendu impeccable&nbsp;: rien à dire, je recommande à 100%. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#14b8a6' }}>
                        NN
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Noella Ngo Hongla</div>
                        <div className="lp2-tcard__role">Cliente Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Au top&nbsp;!</p>
                    <p className="lp2-tcard__text">
                      « Au top&nbsp;! Rapide, efficace et un rapport qualité/prix incroyable. Merci »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: 'var(--accent)' }}>
                        MM
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Maud Marie</div>
                        <div className="lp2-tcard__role">Cliente Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Vous pouvez y aller les yeux fermés&nbsp;!</p>
                    <p className="lp2-tcard__text">
                      « J’ai fait appel à Kameo pour réaliser mon site e-commerce. Malgré le fait que je n’avais aucune
                      connaissance dans le domaine, ils ont su créer le site qui me correspond à 100%&nbsp;! Ils ont
                      fait preuve d’écoute, de patience et de bienveillance. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#ec4899' }}>
                        AS
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Atelier Songe</div>
                        <div className="lp2-tcard__role">Site e-commerce</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Un accompagnement professionnel</p>
                    <p className="lp2-tcard__text">
                      « Une équipe très à l’écoute et particulièrement sensible aux remarques du client. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#0f766e' }}>
                        JN
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Julien Nava</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Très bonne agence</p>
                    <p className="lp2-tcard__text">« Très bonne agence. Sérieuse et réactive. Merci »</p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#10b981' }}>
                        CD
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Celia D.</div>
                        <div className="lp2-tcard__role">Cliente Kameo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ━━ Col 2 (md+, 28s), 6 reviews ━━ */}
              <div className="lp2-tscroll__col lp2-tscroll__col--md" style={{ '--dur': '50s' }}>
                {/* Set 1 */}
                <div className="lp2-tscroll__set">
                  <div className="lp2-tcard lp2-tcard--accent">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Une agence SEO réactive et experte</p>
                    <p className="lp2-tcard__text">
                      « Benjamin se distingue par une excellente écoute et une vraie compréhension des besoins. Louison
                      apporte une expertise technique SEO solide, avec une parfaite maîtrise des enjeux liés à la
                      structure du site, aux performances et à l’indexation. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#8b5cf6' }}>
                        VD
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Verena Dey</div>
                        <div className="lp2-tcard__role">Cliente SEO Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Une agence sérieuse et professionnelle</p>
                    <p className="lp2-tcard__text">
                      « L’agence Kameo accompagne efficacement les professionnels dans leur transformation digitale.
                      L’équipe est à l’écoute, disponible et apporte des solutions adaptées aux besoins concrets. Un
                      accompagnement de qualité que je recommande. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#6366f1' }}>
                        PS
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Paul Sornicle</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Merci à toute l’équipe Kameo</p>
                    <p className="lp2-tcard__text">
                      « Je tiens à remercier l’équipe Kameo pour leur professionnalisme. Merci pour l’évolution, merci
                      d’avoir relancé mon entreprise au sommet. Mention spéciale à Benjamin. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#1d4ed8' }}>
                        IO
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Ilan Ohayon</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Extrêmement content du travail effectué</p>
                    <p className="lp2-tcard__text">
                      « Nouveau logo, charte graphique et site internet. Merci à Nadra et Ben pour leur patience et
                      professionnalisme. Ils ont su répondre à toutes les attentes. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#15803d' }}>
                        AM
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Andrea Miranda</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Première expérience réussie</p>
                    <p className="lp2-tcard__text">
                      « Première expérience pour moi, complètement novice. L’équipe a su répondre à mes attentes avec
                      beaucoup de patience et de gentillesse, malgré que j’étais parfois indécise. Très bonne
                      expérience. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#1e40af' }}>
                        SM
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Sophie Mounsi</div>
                        <div className="lp2-tcard__role">Cliente Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Satisfait</p>
                    <p className="lp2-tcard__text">« Satisfait du résultat, du suivi et des échanges. »</p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#f59e0b' }}>
                        MB
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Mateo Bertei</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Set 2, duplicate */}
                <div className="lp2-tscroll__set">
                  <div className="lp2-tcard lp2-tcard--accent">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Une agence SEO réactive et experte</p>
                    <p className="lp2-tcard__text">
                      « Benjamin se distingue par une excellente écoute et une vraie compréhension des besoins. Louison
                      apporte une expertise technique SEO solide, avec une parfaite maîtrise des enjeux liés à la
                      structure du site, aux performances et à l’indexation. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#8b5cf6' }}>
                        VD
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Verena Dey</div>
                        <div className="lp2-tcard__role">Cliente SEO Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Une agence sérieuse et professionnelle</p>
                    <p className="lp2-tcard__text">
                      « L’agence Kameo accompagne efficacement les professionnels dans leur transformation digitale.
                      L’équipe est à l’écoute, disponible et apporte des solutions adaptées aux besoins concrets. Un
                      accompagnement de qualité que je recommande. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#6366f1' }}>
                        PS
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Paul Sornicle</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Merci à toute l’équipe Kameo</p>
                    <p className="lp2-tcard__text">
                      « Je tiens à remercier l’équipe Kameo pour leur professionnalisme. Merci pour l’évolution, merci
                      d’avoir relancé mon entreprise au sommet. Mention spéciale à Benjamin. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#1d4ed8' }}>
                        IO
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Ilan Ohayon</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Extrêmement content du travail effectué</p>
                    <p className="lp2-tcard__text">
                      « Nouveau logo, charte graphique et site internet. Merci à Nadra et Ben pour leur patience et
                      professionnalisme. Ils ont su répondre à toutes les attentes. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#15803d' }}>
                        AM
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Andrea Miranda</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Première expérience réussie</p>
                    <p className="lp2-tcard__text">
                      « Première expérience pour moi, complètement novice. L’équipe a su répondre à mes attentes avec
                      beaucoup de patience et de gentillesse, malgré que j’étais parfois indécise. Très bonne
                      expérience. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#1e40af' }}>
                        SM
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Sophie Mounsi</div>
                        <div className="lp2-tcard__role">Cliente Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Satisfait</p>
                    <p className="lp2-tcard__text">« Satisfait du résultat, du suivi et des échanges. »</p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#f59e0b' }}>
                        MB
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Mateo Bertei</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ━━ Col 3 (lg+, 18s), 5 reviews ━━ */}
              <div className="lp2-tscroll__col lp2-tscroll__col--lg" style={{ '--dur': '33s' }}>
                {/* Set 1 */}
                <div className="lp2-tscroll__set">
                  <div className="lp2-tcard lp2-tcard--accent">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Une agence sérieuse et de confiance</p>
                    <p className="lp2-tcard__text">
                      « Une agence qui a su me comprendre et répondre précisément à mes attentes. Grâce à leur écoute et
                      réactivité, mon site sneakerslimited.fr me correspond à 100%. Ça fait maintenant presque 1 an que
                      je leur confie mon site et toujours aussi réactifs&nbsp;! »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#f97316' }}>
                        CA
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Andréa Charvet</div>
                        <div className="lp2-tcard__role">sneakerslimited.fr</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Super réactif et très à l’écoute</p>
                    <p className="lp2-tcard__text">
                      « L’entreprise Kameo est super réactive et très à l’écoute. Ils m’ont aidé à développer le site
                      comme je le souhaitais. Je recommande fortement. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#64748b' }}>
                        OR
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Orel</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Création de site sur mesure</p>
                    <p className="lp2-tcard__text">
                      « Création de site sur mesure avec un gros système de personnalisation. Une demande particulière
                      parfaitement réalisée. Merci à Nadra pour le travail effectué. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#7c3aed' }}>
                        PS
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Pontinha Solène</div>
                        <div className="lp2-tcard__role">Site sur mesure</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Très satisfait, délais respectés</p>
                    <p className="lp2-tcard__text">
                      « Très satisfait de la réalisation, délai respecté. Je recommande. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#374151' }}>
                        CH
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Christophe</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Des professionnels sérieux</p>
                    <p className="lp2-tcard__text">« Des professionnels sérieux et à l’écoute de nos demandes. »</p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#be185d' }}>
                        So
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Sornicle</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Set 2, duplicate */}
                <div className="lp2-tscroll__set">
                  <div className="lp2-tcard lp2-tcard--accent">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Une agence sérieuse et de confiance</p>
                    <p className="lp2-tcard__text">
                      « Une agence qui a su me comprendre et répondre précisément à mes attentes. Grâce à leur écoute et
                      réactivité, mon site sneakerslimited.fr me correspond à 100%. Ça fait maintenant presque 1 an que
                      je leur confie mon site et toujours aussi réactifs&nbsp;! »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#f97316' }}>
                        CA
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Andréa Charvet</div>
                        <div className="lp2-tcard__role">sneakerslimited.fr</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Super réactif et très à l’écoute</p>
                    <p className="lp2-tcard__text">
                      « L’entreprise Kameo est super réactive et très à l’écoute. Ils m’ont aidé à développer le site
                      comme je le souhaitais. Je recommande fortement. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#64748b' }}>
                        OR
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Orel</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Création de site sur mesure</p>
                    <p className="lp2-tcard__text">
                      « Création de site sur mesure avec un gros système de personnalisation. Une demande particulière
                      parfaitement réalisée. Merci à Nadra pour le travail effectué. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#7c3aed' }}>
                        PS
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Pontinha Solène</div>
                        <div className="lp2-tcard__role">Site sur mesure</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Très satisfait, délais respectés</p>
                    <p className="lp2-tcard__text">
                      « Très satisfait de la réalisation, délai respecté. Je recommande. »
                    </p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#374151' }}>
                        CH
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Christophe</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                  <div className="lp2-tcard">
                    <div className="lp2-tcard__stars">★★★★★</div>
                    <p className="lp2-tcard__title">Des professionnels sérieux</p>
                    <p className="lp2-tcard__text">« Des professionnels sérieux et à l’écoute de nos demandes. »</p>
                    <div className="lp2-tcard__foot">
                      <div className="lp2-tcard__av" style={{ background: '#be185d' }}>
                        So
                      </div>
                      <div>
                        <div className="lp2-tcard__name">Sornicle</div>
                        <div className="lp2-tcard__role">Client Kameo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.lp2-tscroll */}
          </div>
          {/* /.lp2-trev__inner */}
        </section>
        {/* ━━ FAQ ━━ */}
        <section className="lp2-faq" id="faq">
          <div className="container">
            <div className="lp2-faq__header" data-reveal="">
              <p className="lp2-faq__eyebrow">
                <span className="lp2-cin__eyebrow-dot" />
                Questions fréquentes{' '}
              </p>
              <h2 className="lp2-faq__h2">
                Vos questions. <br />
                Nos réponses.
              </h2>
              <p className="lp2-faq__sub">
                Une question qui n’apparaît pas ? Posez-la nous directement lors de l’appel.
              </p>
            </div>
            <div className="lp2-faq__list" data-reveal="" style={{ transitionDelay: '.1s' }}>
              <details className="lp2-faq__item">
                <summary className="lp2-faq__q">
                  À qui appartient mon site une fois livré ?{' '}
                  <span className="lp2-faq__chevron" aria-hidden="true">
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
                <div className="lp2-faq__a">
                  <p>
                    Vous, à 100%. Code, design, nom de domaine, accès admin : tout vous est cédé à la livraison finale.{' '}
                    <strong>Aucun lock-in, aucune licence cachée, aucune redevance.</strong> Vous pouvez à tout moment
                    migrer chez un autre hébergeur ou demander à un autre prestataire de reprendre le projet. C’est
                    votre site.
                  </p>
                </div>
              </details>
              <details className="lp2-faq__item">
                <summary className="lp2-faq__q">
                  Et l’hébergement et le nom de domaine, qui s’en occupe ?{' '}
                  <span className="lp2-faq__chevron" aria-hidden="true">
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
                <div className="lp2-faq__a">
                  <p>
                    On gère tout pour vous si vous le souhaitez : nom de domaine + hébergement haute performance (CDN,
                    SSL gratuit, sauvegardes quotidiennes) pour environ <strong>15€/mois facturé annuellement</strong>.
                    Si vous avez déjà un hébergeur, on s’adapte et on migre le site chez vous sans frais
                    supplémentaires.
                  </p>
                </div>
              </details>
              <details className="lp2-faq__item">
                <summary className="lp2-faq__q">
                  Quelles sont les conditions de paiement ?{' '}
                  <span className="lp2-faq__chevron" aria-hidden="true">
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
                <div className="lp2-faq__a">
                  <p>
                    Un acompte de <strong>50 % pour démarrer</strong>, le solde versé à la livraison finale. Sur les
                    projets supérieurs à 3&nbsp;000€&nbsp;HT, on peut échelonner en <strong>3 fois sans frais</strong>.
                    Tout est facturé en HT avec TVA française, par virement bancaire.
                  </p>
                </div>
              </details>
              <details className="lp2-faq__item">
                <summary className="lp2-faq__q">
                  Combien d’aller-retours sont inclus dans le prix ?{' '}
                  <span className="lp2-faq__chevron" aria-hidden="true">
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
                <div className="lp2-faq__a">
                  <p>
                    <strong>Illimités</strong> sur toutes les phases de validation (wireframes, maquettes, intégration).
                    On ne livre que quand vous êtes 100 % satisfait. Seules les demandes hors-périmètre (ex : ajout
                    d’une fonctionnalité non prévue au cahier des charges) feront l’objet d’un avenant chiffré et validé
                    avant exécution.
                  </p>
                </div>
              </details>
              <details className="lp2-faq__item">
                <summary className="lp2-faq__q">
                  Gérez-vous aussi le SEO et la publicité en continu après la livraison ?{' '}
                  <span className="lp2-faq__chevron" aria-hidden="true">
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
                <div className="lp2-faq__a">
                  <p>
                    Oui, au-delà de la livraison : on propose des forfaits <strong>acquisition</strong> mensuels : SEO
                    continu (audit, rédaction d’articles, netlinking), Google Ads et Meta Ads. C’est optionnel et
                    facturé séparément à partir de <strong>400€ HT/mois</strong>. On en discute lors de l’appel
                    découverte si l’acquisition continue vous intéresse.
                  </p>
                </div>
              </details>
              <details className="lp2-faq__item">
                <summary className="lp2-faq__q">
                  Sur quelle technologie est développé mon site ?{' '}
                  <span className="lp2-faq__chevron" aria-hidden="true">
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
                <div className="lp2-faq__a">
                  <p>
                    Par défaut : <strong>WordPress avec un thème codé sur-mesure</strong> (pas un thème acheté), pour la
                    rapidité d’édition côté admin et la robustesse SEO. Pour un e-commerce, on intègre WooCommerce.{' '}
                    <strong>Pour des cas particuliers, on maîtrise l’ensemble des technologies et CMS du marché</strong>{' '}
                    (Next.js, React, Shopify, Webflow, Framer, Astro, headless…). On choisit la stack adaptée à votre
                    besoin, pas l’inverse.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        {/* ━━ FINAL CTA ━━ */}
        <section className="lp2-final" id="rdv">
          <div className="lp2-final__inner" data-reveal="">
            <div className="lp2-final__left">
              <p className="lp2-final__eyebrow">30 minutes. Gratuit. Sans engagement.</p>
              <h2 className="lp2-final__h2">
                Votre prochain client <br />
                vous attend.
              </h2>
              <p className="lp2-final__sub">
                Réservez un créneau. On analyse ensemble ce que vous pouvez améliorer, et comment aller chercher plus de
                clients dès ce mois-ci.
              </p>
              <div className="lp2-final__meta">
                <span className="lp2-final__meta-item">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Aucun engagement{' '}
                </span>
                <span className="lp2-final__meta-item">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  30 min chrono{' '}
                </span>
                <span className="lp2-final__meta-item">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2H4.18A2 2 0 0 1 2 19.92v-3" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Choisissez votre créneau{' '}
                </span>
              </div>
            </div>
            <div className="lp2-final__right">
              <div className="lm-btn lm-btn--lg">
                <div className="lm-shader" aria-hidden="true" />
                <div className="lm-bg" aria-hidden="true" />
                <span className="lm-label">
                  Réserver mon RDV gratuit{' '}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 11L11 3M11 3H6M11 3V8" />
                  </svg>
                </span>
                <a
                  href="https://calendly.com/contact-agence-kameo/30min"
                  target="_blank"
                  rel="noopener"
                  className="lm-trigger"
                  aria-label="Réserver mon RDV gratuit"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* /.lp2-dark-stage */}
    </main>
    <footer className="lp2-footer">
      <div className="container lp2-footer__inner">
        <a href="#" className="lp2-footer__logo" aria-label="Kameo, Accueil">
          <img loading="lazy" src="/images/hero.webp" alt="Kameo" width="400" height="126" />
        </a>
        <p className="lp2-footer__copy">© 2026 Agence Kameo. Tous droits réservés.</p>
        <nav className="lp2-footer__legal" aria-label="Liens légaux">
          <Link href="/mentions-legales/">Mentions légales</Link>
          <Link href="/politique-de-confidentialite/">Politique de confidentialité</Link>
        </nav>
      </div>
    </footer>
  </>
);
export default Body;
