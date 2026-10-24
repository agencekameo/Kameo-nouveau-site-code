/* Styles de la landing page Ads (bloc <style> du <head> de page-lp-rdv-v2.php). */
const css = `
    /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       TASTE-SKILL v2 — LP RDV
       DESIGN_VARIANCE: 8 | MOTION_INTENSITY: 6 | VISUAL_DENSITY: 4
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

    *, *::before, *::after { box-sizing: border-box; }

    :root {
      --ink:      #0f1115;
      --ink-2:    #3a3d45;
      --muted:    #697289;
      --line:     #e4e6ea;
      --surface:  #ffffff;
      --bg:       #f8f8f6;
      --accent:   #ED6E63;   /* coral midpoint du gradient pink/orange */
      --accent-gradient: linear-gradient(136.79deg, #E14B89 5.13%, #F8903C 84.98%);
      --accent-rgb: 237, 110, 99;
      --accent-s: #fdf1f0;
      --r-sm:  8px;
      --r-md:  14px;
      --r-lg:  22px;
      --r-xl:  32px;
      --ease:  cubic-bezier(0.16, 1, 0.3, 1);
    }

    html { scroll-behavior: smooth; overflow-x: hidden; max-width: 100vw; }
    body {
      font-family: 'Satoshi', system-ui, sans-serif;
      background: var(--bg);
      color: var(--ink);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      max-width: 100vw;
      position: relative; /* contraint le scroll horizontal des descendants fixed/absolute */
    }
    /* Garde-fou : aucune section/div ne doit dépasser le viewport */
    main, section, .container { max-width: 100vw; }

    /* Force le navbar fixed à rester dans le viewport sur mobile */
    .nav-wrap, .nav { max-width: 100vw; box-sizing: border-box; }
    img { display: block; max-width: 100%; }
    a { text-decoration: none; color: inherit; }

    /* ── Entry stagger ── */
    [data-reveal] {
      opacity: 0;
      transform: translateY(22px);
      transition: opacity .65s var(--ease), transform .65s var(--ease);
    }
    [data-reveal].is-visible {
      opacity: 1;
      transform: none;
    }

    /* ━━ HERO WRAP — full-bleed container for background layers ━━ */
    .lp2-hero-wrap {
      position: relative;
      overflow: hidden;
      background: var(--bg);
    }

    /* ── Animated mesh gradient ── */
    .lp2-hero__mesh {
      position: absolute; inset: 0; z-index: 0; pointer-events: none;
      background:
        radial-gradient(ellipse at 14% 52%, rgba(237,110,99,.11) 0%, transparent 52%),
        radial-gradient(ellipse at 86% 8%,  rgba(15,17,21,.06)  0%, transparent 42%),
        radial-gradient(ellipse at 62% 97%, rgba(237,110,99,.08) 0%, transparent 44%);
      animation: heroMesh 18s ease-in-out infinite alternate;
    }
    @keyframes heroMesh {
      0%   { transform: scale(1)    translate(0,  0); }
      33%  { transform: scale(1.07) translate(3%, 4%); }
      66%  { transform: scale(0.96) translate(-4%,2%); }
      100% { transform: scale(1.04) translate(2%,-4%); }
    }

    /* ── Cursor spotlight ── */
    .lp2-hero__cursor {
      position: absolute; inset: 0; z-index: 0; pointer-events: none;
      background: radial-gradient(800px circle at var(--cursor-x,-200%) var(--cursor-y,-200%), rgba(237,110,99,.07), transparent 45%);
    }

    /* ── Dot grid pattern (same as main site hero) ── */
    .lp2-hero__dots {
      position: absolute; inset: 0; z-index: 0; pointer-events: none;
      background-image: radial-gradient(circle, rgba(15,17,21,.10) 1px, transparent 1px);
      background-size: 26px 26px;
      background-position: 0 0;
    }

    /* ━━ HERO — SPLIT SCREEN (Rule 3: Anti-Center Bias) ━━ */
    .lp2-hero {
      min-height: calc(100dvh - 62px);
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      align-items: center;
      gap: 0;
      max-width: 1280px;
      margin: 0 auto;
      padding: clamp(48px,6vw,80px) clamp(20px,4vw,48px);
      position: relative;
      z-index: 1; /* stack above background layers in .lp2-hero-wrap */
    }

    /* Ensure text content sits above mesh layers */
    .lp2-hero__left, .lp2-hero__right { position: relative; z-index: 1; }

    .lp2-hero__left { padding-right: clamp(32px,4vw,64px); }
    .lp2-hero__tag {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 12px; font-weight: 700;
      letter-spacing: .08em; text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 28px;
    }
    .lp2-hero__tag-dot {
      width: 6px; height: 6px;
      background: var(--accent); border-radius: 50%;
      animation: pulse-dot 1.8s ease-in-out infinite;
    }
    @keyframes pulse-dot {
      0%,100% { opacity:1; transform:scale(1); }
      50%      { opacity:.4; transform:scale(.65); }
    }
    .lp2-hero__h1 {
      font-size: clamp(44px, 5.4vw, 78px);
      font-weight: 900;
      letter-spacing: -.05em;
      line-height: 1.0;
      color: var(--ink);
      margin-bottom: 24px;
    }
    .lp2-hero__h1 span {
      color: var(--accent);
      position: relative;
      display: inline-block;
    }
    /* Animated underline on accent word, triggered by reveal */
    .lp2-hero__h1 span::after {
      content: '';
      position: absolute;
      bottom: 2px; left: 0;
      width: 100%; height: 4px;
      background: linear-gradient(90deg, var(--accent), rgba(237,110,99,.35));
      border-radius: 2px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform .8s var(--ease) .4s;
    }
    [data-reveal].is-visible .lp2-hero__h1 span::after { transform: scaleX(1); }
    .lp2-hero__sub {
      font-size: clamp(15px,1.6vw,18px);
      color: var(--muted);
      line-height: 1.65;
      max-width: 54ch;
      margin-bottom: 40px;
    }
    .lp2-cta-row {
      display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
      margin-bottom: 40px;
    }
    /* Primary CTA — directional hover fill */
    .lp2-cta-primary {
      position: relative; overflow: hidden;
      display: inline-flex; align-items: center; gap: 10px;
      background: var(--ink); color: #fff;
      font-family: 'Satoshi', sans-serif;
      font-size: 16px; font-weight: 700;
      padding: 16px 32px;
      border-radius: var(--r-xl);
      border: none; cursor: pointer;
      transition: box-shadow .3s var(--ease);
      box-shadow: 0 6px 28px rgba(15,17,21,.16);
      animation: ctaGlowPulse 2.8s ease-out infinite;
    }
    @keyframes ctaGlowPulse {
      0%   { box-shadow: 0 6px 28px rgba(15,17,21,.16), 0 0 0 0   rgba(237,110,99,.45); }
      65%  { box-shadow: 0 6px 28px rgba(15,17,21,.16), 0 0 0 14px rgba(237,110,99,0); }
      100% { box-shadow: 0 6px 28px rgba(15,17,21,.16), 0 0 0 0   rgba(237,110,99,0); }
    }
    .lp2-cta-primary::before {
      content: '';
      position: absolute; inset: 0;
      background: var(--accent-gradient);
      transform: translateX(-101%);
      transition: transform .4s var(--ease);
      z-index: 0;
    }
    .lp2-cta-primary:hover::before { transform: translateX(0); }
    .lp2-cta-primary span:not(.lp2-cta-ring), .lp2-cta-primary svg { position: relative; z-index: 1; }
    .lp2-cta-social {
      font-size: 13px; color: var(--muted);
      display: flex; align-items: center; gap: 6px;
    }
    .lp2-cta-social strong { color: var(--ink); }

    .lp2-hero__trust {
      display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
      padding-top: 32px;
      border-top: 1px solid var(--line);
    }
    .lp2-trust-item {
      display: flex; align-items: center; gap: 6px;
      font-size: 13px; color: var(--muted);
    }
    .lp2-trust-item svg { color: #22c55e; }

    /* ── Right panel: live social proof widget ── */
    .lp2-hero__right {
      position: relative;
      padding-left: clamp(24px,3vw,48px);
      animation: heroFloat 8s ease-in-out infinite;
      animation-delay: 1s;
    }
    @keyframes heroFloat {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-14px); }
    }
    .lp2-widget-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 12px;
    }
    .lp2-widget {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--r-lg);
      padding: 22px 20px;
      box-shadow: 0 2px 16px rgba(15,17,21,.05);
      transition: box-shadow .25s var(--ease), transform .25s var(--ease);
    }
    .lp2-widget:hover {
      box-shadow: 0 8px 32px rgba(15,17,21,.1);
      transform: translateY(-3px);
    }
    /* Spotlight border on hover */
    .lp2-widget { position: relative; overflow: hidden; }
    .lp2-widget::after {
      content: '';
      position: absolute; inset: 0;
      border-radius: inherit;
      opacity: 0;
      transition: opacity .3s;
      background: radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(237,110,99,.08), transparent 60%);
      pointer-events: none;
    }
    .lp2-widget:hover::after { opacity: 1; }

    .lp2-widget--wide { grid-column: 1/-1; }
    .lp2-widget__label {
      font-size: 11px; font-weight: 700;
      letter-spacing: .08em; text-transform: uppercase;
      color: var(--muted); margin-bottom: 10px;
    }
    .lp2-widget__big {
      font-size: 44px; font-weight: 900;
      letter-spacing: -.04em; line-height: 1;
      color: var(--ink);
    }
    .lp2-widget__big span { color: var(--accent); }
    .lp2-widget__sub { font-size: 13px; color: var(--muted); margin-top: 6px; }

    .lp2-widget__quote {
      font-size: 14px; font-style: italic;
      line-height: 1.6; color: var(--ink-2);
      margin-bottom: 14px;
    }
    .lp2-widget__author {
      display: flex; align-items: center; gap: 10px;
    }
    .lp2-widget__avatar {
      width: 32px; height: 32px; border-radius: 50%;
      background: var(--ink); color: #fff;
      font-size: 12px; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .lp2-widget__aname { font-size: 13px; font-weight: 700; color: var(--ink); }
    .lp2-widget__arole { font-size: 11px; color: var(--muted); }
    .lp2-widget__live {
      display: flex; align-items: center; gap: 6px;
      font-size: 12px; font-weight: 600; color: #16a34a;
      margin-bottom: 10px;
    }
    .lp2-live-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: #16a34a;
      animation: pulse-dot 1.6s ease-in-out infinite;
    }
    .lp2-widget__slots {
      font-size: 28px; font-weight: 900;
      letter-spacing: -.03em; color: var(--ink);
    }
    .lp2-widget__slots em {
      font-style: normal; color: var(--accent);
    }
    .lp2-widget__slots-sub {
      font-size: 12px; color: var(--muted); margin-top: 4px;
    }

    /* ━━ MARQUEE LOGOS ━━ */
    .lp2-marquee-wrap {
      border-top: 1px solid rgba(255,255,255,.07);
      border-bottom: 1px solid rgba(255,255,255,.07);
      padding: 32px 0 36px;
      overflow: hidden;
      position: relative;
    }
    .lp2-marquee-label {
      display: flex; align-items: center; justify-content: center; gap: 10px;
      font-size: clamp(20px, 2.4vw, 32px);
      font-weight: 900;
      letter-spacing: -.04em;
      text-transform: none;
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,.38) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 26px;
    }
    .lp2-marquee {
      display: flex; gap: 0;
      width: max-content;             /* CRITIQUE : sans ça, translateX(-50%) se calcule sur la largeur du parent (viewport), pas du contenu */
      animation: marquee 36s linear infinite;
      will-change: transform;
    }
    .lp2-marquee:hover { animation-play-state: paused; }
    @media (max-width: 768px) {
      .lp2-marquee { animation-duration: 24s; } /* mobile : un peu plus rapide qu'ordi */
    }
    @keyframes marquee {
      from { transform: translate3d(0, 0, 0); }
      to   { transform: translate3d(-50%, 0, 0); }
    }
    .lp2-marquee__item {
      flex-shrink: 0;
      padding: 0 40px;
      display: flex; align-items: center;
    }
    .lp2-marquee__item img {
      height: 50px;
      width: auto;
      display: block;
      transition: opacity .35s ease;
      user-select: none;
      pointer-events: none;
      opacity: .85;
    }
    .lp2-marquee__item:hover img {
      opacity: 1;
    }

    /* ━━ STATS ASYMMETRIC (not 3 equal cards) ━━ */
    .lp2-stats {
      max-width: 1280px; margin: 0 auto;
      padding: clamp(64px,8vw,100px) clamp(20px,4vw,48px);
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 2px;
    }
    .lp2-stat {
      padding: 44px 36px;
      background: var(--surface);
      border: 1px solid var(--line);
    }
    .lp2-stat:first-child { border-radius: var(--r-xl) 0 0 var(--r-xl); }
    .lp2-stat:last-child  { border-radius: 0 var(--r-xl) var(--r-xl) 0; }
    .lp2-stat:first-child .lp2-stat__num { font-size: clamp(52px,6vw,80px); }
    .lp2-stat__num {
      font-size: clamp(40px,4vw,58px);
      font-weight: 900; letter-spacing: -.05em;
      line-height: 1; color: var(--ink);
      margin-bottom: 8px;
    }
    .lp2-stat__num em { font-style: normal; color: var(--accent); }
    .lp2-stat__desc { font-size: 14px; color: var(--muted); max-width: 28ch; line-height: 1.5; }

    /* ━━ BENTO SERVICES (Anti-3-equal-cards rule) ━━ */
    .lp2-section {
      max-width: 1280px; margin: 0 auto;
      padding: clamp(64px,8vw,100px) clamp(20px,4vw,48px);
    }
    .lp2-eyebrow {
      font-size: 11px; font-weight: 700;
      letter-spacing: .1em; text-transform: uppercase;
      color: var(--accent); margin-bottom: 16px;
    }
    .lp2-h2 {
      font-size: clamp(28px,3.2vw,44px);
      font-weight: 900; letter-spacing: -.03em;
      line-height: 1.1; color: var(--ink);
      max-width: 18ch; margin-bottom: clamp(40px,5vw,64px);
    }
    .lp2-bento {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      grid-template-rows: auto auto;
      gap: 12px;
    }
    .lp2-bcard {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--r-lg);
      padding: 36px 32px;
      position: relative; overflow: hidden;
      transition: box-shadow .25s var(--ease), transform .25s var(--ease);
    }
    .lp2-bcard::after {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(500px at var(--mx,50%) var(--my,50%), rgba(237,110,99,.06), transparent 65%);
      opacity: 0; transition: opacity .3s; pointer-events: none;
      border-radius: inherit;
    }
    .lp2-bcard:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(15,17,21,.09); }
    .lp2-bcard:hover::after { opacity: 1; }
    .lp2-bcard--tall { grid-row: span 2; }
    .lp2-bcard__icon {
      width: 44px; height: 44px; border-radius: var(--r-sm);
      background: var(--accent-s);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 20px;
    }
    .lp2-bcard__icon svg { color: var(--accent); }
    .lp2-bcard__title {
      font-size: 22px; font-weight: 800;
      letter-spacing: -.02em; color: var(--ink);
      margin-bottom: 12px;
    }
    .lp2-bcard__text { font-size: 14px; color: var(--muted); line-height: 1.65; }
    .lp2-bcard__result {
      margin-top: 28px; padding-top: 20px;
      border-top: 1px solid var(--line);
    }
    .lp2-bcard__result-num {
      font-size: 32px; font-weight: 900;
      letter-spacing: -.04em; color: var(--accent);
      line-height: 1;
    }
    .lp2-bcard__result-label { font-size: 12px; color: var(--muted); margin-top: 4px; }

    /* ━━ TESTIMONIALS — 2-col masonry-style ━━ */
    .lp2-testimonials-bg {
      background: var(--ink);
      padding: clamp(64px,8vw,100px) 0;
    }
    .lp2-testi-inner {
      max-width: 1280px; margin: 0 auto;
      padding: 0 clamp(20px,4vw,48px);
    }
    .lp2-testi-header { margin-bottom: clamp(40px,5vw,64px); }
    .lp2-testi-header .lp2-eyebrow { color: rgba(237,110,99,.85); }
    .lp2-testi-header .lp2-h2 { color: #fff; }
    .lp2-testi-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .lp2-testi {
      background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.1);
      border-radius: var(--r-lg);
      padding: 28px;
      /* Liquid glass inner refraction */
      box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
      backdrop-filter: blur(8px);
      display: flex; flex-direction: column; gap: 18px;
      transition: background .25s;
    }
    .lp2-testi:hover { background: rgba(255,255,255,.08); }
    .lp2-testi--accent { border-color: rgba(237,110,99,.3); background: rgba(237,110,99,.07); }
    .lp2-testi__stars { display: flex; gap: 3px; color: #fbbf24; font-size: 13px; }
    .lp2-testi__quote {
      font-size: 15px; line-height: 1.7;
      color: rgba(255,255,255,.82); flex: 1;
    }
    .lp2-testi__footer {
      display: flex; align-items: center; gap: 12px;
      padding-top: 16px; border-top: 1px solid rgba(255,255,255,.08);
    }
    .lp2-testi__av {
      width: 38px; height: 38px; border-radius: 50%;
      background: var(--accent-gradient); color: #fff;
      font-size: 13px; font-weight: 800;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .lp2-testi__name { font-size: 14px; font-weight: 700; color: #fff; }
    .lp2-testi__role { font-size: 11px; color: rgba(255,255,255,.45); }
    .lp2-testi__co {
      margin-left: auto;
      font-size: 11px; font-weight: 700;
      letter-spacing: .04em;
      color: rgba(255,255,255,.35);
      text-transform: uppercase;
    }

    /* ━━ PROCESS — horizontal timeline ━━ */
    .lp2-process {
      position: relative;
      padding: clamp(64px,8vw,100px) 0;
    }
    .lp2-process > .container { position: relative; z-index: 1; }
    .lp2-process .lp2-eyebrow { color: rgba(237,110,99,.8) !important; }
    .lp2-process .lp2-h2 {
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,.38) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; color: transparent !important;
    }
    .lp2-timeline {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 0;
      margin-top: clamp(40px,5vw,64px);
      position: relative;
    }
    .lp2-timeline::before {
      content: '';
      position: absolute; top: 22px;
      left: 12.5%; right: 12.5%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.14) 25%, rgba(255,255,255,.14) 75%, transparent);
    }
    .lp2-tstep { padding: 0 28px; text-align: center; }
    .lp2-tstep__num {
      width: 44px; height: 44px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 15px; font-weight: 900;
      margin: 0 auto 24px;
      position: relative; z-index: 1;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.12);
      color: rgba(255,255,255,.55);
      backdrop-filter: blur(6px);
    }
    .lp2-tstep__text { margin-left: auto; margin-right: auto; max-width: 32ch; }
    .lp2-tstep:nth-child(2) .lp2-tstep__num {
      background: var(--accent-gradient);
      border-color: transparent;
      color: #fff;
      box-shadow: 0 0 28px rgba(237,110,99,.4);
    }
    .lp2-tstep__title { font-size: 18px; font-weight: 800; letter-spacing: -.02em; color: rgba(255,255,255,.9); margin-bottom: 10px; }
    .lp2-tstep__text { font-size: 14px; color: rgba(255,255,255,.4); line-height: 1.65; }

    /* ━━ FINAL CTA — mesh gradient background ━━ */
    .lp2-final {
      max-width: 1280px; margin: 0 auto;
      padding: clamp(64px,8vw,100px) clamp(20px,4vw,48px);
    }
    .lp2-final__inner {
      border-radius: var(--r-xl);
      padding: clamp(52px,7vw,96px) clamp(40px,6vw,80px);
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: clamp(32px,4vw,64px);
      /* Verre sombre — même langage que les pricing cards */
      background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.09);
      box-shadow: 0 16px 48px -12px rgba(0,0,0,.55),
                  inset 0 1px 0 rgba(255,255,255,.07);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      position: relative; overflow: hidden;
    }
    /* Lueur rouge coin supérieur droit */
    .lp2-final__inner::before {
      content: '';
      position: absolute; top: -80px; right: -80px;
      width: 420px; height: 420px;
      background: radial-gradient(circle, rgba(237,110,99,.18) 0%, transparent 65%);
      pointer-events: none; z-index: 0;
    }
    /* Lueur rouge coin inférieur gauche */
    .lp2-final__inner::after {
      content: '';
      position: absolute; bottom: -60px; left: 10%;
      width: 300px; height: 300px;
      background: radial-gradient(circle, rgba(237,110,99,.08) 0%, transparent 65%);
      pointer-events: none; z-index: 0;
    }
    .lp2-final__left { position: relative; z-index: 1; }
    .lp2-final__eyebrow {
      font-size: 11px; font-weight: 700;
      letter-spacing: .1em; text-transform: uppercase;
      color: rgba(237,110,99,.8); margin-bottom: 14px;
    }
    .lp2-final__h2 {
      font-size: clamp(28px,3.2vw,46px);
      font-weight: 900; letter-spacing: -.035em;
      line-height: 1.08; color: #fff;
      margin-bottom: 16px;
    }
    .lp2-final__sub { font-size: 15px; color: rgba(255,255,255,.55); line-height: 1.6; }
    .lp2-final__right { position: relative; z-index: 1; flex-shrink: 0; }
    .lp2-final__cta {
      display: inline-flex; align-items: center; gap: 10px;
      background: #fff; color: var(--ink);
      font-family: 'Satoshi', sans-serif;
      font-size: 16px; font-weight: 800;
      padding: 18px 34px; border-radius: var(--r-xl);
      white-space: nowrap;
      transition: background .2s, transform .2s var(--ease), box-shadow .2s;
    }
    .lp2-final__cta:hover {
      background: var(--accent-gradient); color: #fff;
      transform: translateY(-2px);
      box-shadow: 0 12px 36px rgba(237,110,99,.3);
    }
    .lp2-final__meta {
      margin-top: 14px;
      display: flex; gap: 16px; flex-wrap: wrap;
    }
    .lp2-final__meta-item {
      font-size: 12px; color: rgba(255,255,255,.4);
      display: flex; align-items: center; gap: 5px;
    }

    /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       CINEMATIC HERO 2 — adapté de motion-footer
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

    .lp2-cinematic {
      position: relative;
      min-height: 100vh;
      background: var(--ink);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: clamp(100px,12vw,140px) clamp(20px,4vw,48px) 0;
    }

    /* ── Grid background avec fade mask ── */
    .lp2-cin__grid {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: linear-gradient(to bottom, transparent, black 22%, black 72%, transparent);
      -webkit-mask-image: linear-gradient(to bottom, transparent, black 22%, black 72%, transparent);
      z-index: 0;
    }

    /* ── Aurora glow ── */
    .lp2-cin__aurora {
      position: absolute;
      top: 50%; left: 50%;
      width: 75vw; height: 65vh;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(237,110,99,.13) 0%, rgba(237,110,99,.05) 40%, transparent 70%);
      animation: cin-breathe 11s ease-in-out infinite alternate;
      pointer-events: none;
      z-index: 0;
    }
    @keyframes cin-breathe {
      0%   { transform: translate(-50%,-50%) scale(1);    opacity: .55; }
      100% { transform: translate(-50%,-50%) scale(1.18); opacity: 1; }
    }

    /* ── Giant background watermark ── */
    .lp2-cin__watermark {
      position: absolute;
      bottom: -6vh; left: 50%;
      transform: translateX(-50%);
      font-size: 27vw;
      font-weight: 900;
      letter-spacing: -.06em;
      line-height: .75;
      color: transparent;
      -webkit-text-stroke: 1px rgba(255,255,255,.055);
      background: linear-gradient(180deg, rgba(255,255,255,.11) 0%, transparent 65%);
      -webkit-background-clip: text;
      background-clip: text;
      white-space: nowrap;
      pointer-events: none;
      user-select: none;
      z-index: 0;
    }

    /* ── Diagonal marquee ── */
    .lp2-cin__marquee-wrap {
      position: absolute;
      top: clamp(56px,7vw,80px); left: 0;
      width: 100%; overflow: hidden;
      transform: rotate(-1.8deg) scaleX(1.08);
      border-top: 1px solid rgba(255,255,255,.07);
      border-bottom: 1px solid rgba(255,255,255,.07);
      background: rgba(255,255,255,.028);
      backdrop-filter: blur(6px);
      padding: 11px 0;
      z-index: 5;
      pointer-events: none;
    }
    .lp2-cin__marquee-track {
      display: flex;
      width: max-content;
      animation: cin-marquee 40s linear infinite;
      font-size: 10px; font-weight: 800;
      letter-spacing: .22em; text-transform: uppercase;
      color: rgba(255,255,255,.32);
    }
    @keyframes cin-marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .lp2-cin__mitem {
      display: inline-flex; align-items: center;
      padding: 0 28px; gap: 20px;
      white-space: nowrap;
    }
    .lp2-cin__msep { color: rgba(237,110,99,.55); font-size: 8px; }

    /* ── Main content ── */
    .lp2-cin__content {
      position: relative; z-index: 10;
      text-align: center;
      max-width: 860px;
      margin: 0 auto;
    }
    .lp2-cin__eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 11px; font-weight: 700;
      letter-spacing: .1em; text-transform: uppercase;
      color: rgba(237,110,99,.8);
      margin-bottom: 26px;
    }
    .lp2-cin__eyebrow-dot {
      width: 5px; height: 5px; border-radius: 50%;
      background: rgba(237,110,99,.8);
      animation: pulse-dot 1.8s ease-in-out infinite;
    }

    /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       Widget Trustpilot — étoiles carrées vertes officielles
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    .tp-widget {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      margin: 0 auto 32px;
      padding: 10px 18px 10px 12px;
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 999px;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
      text-decoration: none;
      color: inherit;
      transition: background .25s var(--ease), border-color .25s var(--ease);
    }
    .tp-widget:hover {
      background: rgba(255,255,255,.07);
      border-color: rgba(255,255,255,.14);
    }

    /* Rangée de 5 étoiles carrées avec partial fill */
    .tp-widget__stars {
      position: relative;
      display: inline-block;
      line-height: 0;
    }
    .tp-widget__row {
      display: inline-flex;
      gap: 2px;
    }
    .tp-widget__row--fill {
      position: absolute; inset: 0;
      width: var(--rating, 100%);
      overflow: hidden;
    }
    .tp-square {
      display: inline-block;
      width: 22px; height: 22px;
      flex-shrink: 0;
    }
    .tp-square svg { width: 100%; height: 100%; display: block; }
    .tp-square rect { fill: #DCDCE6; }              /* étoile "vide" — gris officiel Trustpilot */
    .tp-square--on rect { fill: #00B67A; }          /* étoile "pleine" — vert officiel Trustpilot */

    /* Texte du score */
    .tp-widget__text {
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
      white-space: nowrap;
    }
    .tp-widget__score {
      font-size: 15px;
      font-weight: 800;
      color: #fff;
      letter-spacing: -.01em;
    }
    .tp-widget__count {
      font-size: 12px;
      color: rgba(255,255,255,.55);
    }

    /* Responsive : sur petit écran on cache "· +21 avis" pour économiser de la place */
    @media (max-width: 420px) {
      .tp-widget { padding: 8px 14px 8px 10px; gap: 10px; }
      .tp-square { width: 18px; height: 18px; }
      .tp-widget__count { font-size: 11px; }
    }

    /* Metallic gradient heading */
    .lp2-cin__h2 {
      font-size: clamp(42px, 6.2vw, 90px);
      font-weight: 900;
      letter-spacing: -.055em;
      line-height: .97;
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,.4) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 22px;
    }
    .lp2-cin__sub {
      font-size: clamp(15px,1.5vw,18px);
      color: rgba(255,255,255,.48);
      line-height: 1.7;
      max-width: 50ch;
      margin: 0 auto 48px;
    }

    /* Micro-copie sous le CTA : lève les objections en 1 ligne */
    .lp2-cin__microcopy {
      margin: 20px auto 0;
      font-size: 12.5px;
      letter-spacing: .02em;
      color: rgba(255,255,255,.45);
      text-align: center;
      max-width: 56ch;
    }

    /* ── Glass pill buttons ── */
    .lp2-cin__pills {
      display: flex; flex-wrap: wrap;
      justify-content: center; gap: 14px;
    }
    .lp2-cin__pill {
      position: relative;
      display: inline-flex; align-items: center; gap: 10px;
      padding: 16px 36px;
      border-radius: 100px;
      font-family: 'Satoshi', sans-serif;
      font-size: 15px; font-weight: 700;
      color: rgba(255,255,255,.72);
      background: linear-gradient(145deg, rgba(255,255,255,.07) 0%, rgba(255,255,255,.02) 100%);
      border: 1px solid rgba(255,255,255,.11);
      backdrop-filter: blur(16px);
      box-shadow: 0 10px 30px -10px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.09);
      transition: all .38s cubic-bezier(.16,1,.3,1);
      cursor: pointer;
      text-decoration: none;
      will-change: transform;
    }
    .lp2-cin__pill:hover {
      background: linear-gradient(145deg, rgba(255,255,255,.12) 0%, rgba(255,255,255,.05) 100%);
      border-color: rgba(255,255,255,.22);
      color: #fff;
      box-shadow: 0 20px 40px -10px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.14);
    }
    .lp2-cin__pill--primary {
      background: #ffffff;
      color: var(--ink);
      border-color: transparent;
      box-shadow: 0 8px 32px rgba(255,255,255,.14), inset 0 1px 0 rgba(255,255,255,.6);
    }
    .lp2-cin__pill--primary:hover {
      background: var(--accent-gradient);
      color: #fff;
      border-color: transparent;
      box-shadow: 0 14px 40px rgba(237,110,99,.32), inset 0 1px 0 rgba(255,255,255,.2);
    }

    /* ── Bottom bar ── */
    .lp2-cin__bottom {
      position: relative; z-index: 20;
      width: 100%;
      margin-top: clamp(56px,8vw,100px);
      padding: 28px clamp(20px,4vw,48px) 40px;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 14px;
    }
    .lp2-cin__copy {
      font-size: 11px; font-weight: 600;
      letter-spacing: .1em; text-transform: uppercase;
      color: rgba(255,255,255,.28);
    }
    .lp2-cin__badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 10px 20px; border-radius: 100px;
      font-size: 10px; font-weight: 700;
      letter-spacing: .08em; text-transform: uppercase;
      color: rgba(255,255,255,.38);
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.07);
    }
    .lp2-cin__badge-heart {
      color: var(--accent);
      animation: cin-heartbeat 2s cubic-bezier(.25,1,.5,1) infinite;
    }
    @keyframes cin-heartbeat {
      0%,100% { transform: scale(1); }
      15%,45% { transform: scale(1.35); }
      30%      { transform: scale(1.05); }
    }
    .lp2-cin__top-btn {
      width: 44px; height: 44px; border-radius: 50%;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.1);
      color: rgba(255,255,255,.45);
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
      transition: all .28s var(--ease);
      will-change: transform;
    }
    .lp2-cin__top-btn:hover {
      background: rgba(255,255,255,.12);
      color: #fff;
      transform: translateY(-2px);
    }
    .lp2-cin__top-btn svg {
      transition: transform .3s var(--ease);
    }
    .lp2-cin__top-btn:hover svg { transform: translateY(-3px); }

    /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       TESTIMONIALS — 3-col infinite scroll
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

    .lp2-treviews {
      position: relative;
      padding: clamp(80px,10vw,120px) 0 0;
    }
    .lp2-trev__inner {
      position: relative; z-index: 1;
      max-width: 1280px; margin: 0 auto;
      padding: 0 clamp(20px,4vw,48px);
    }
    /* ── Centered header ── */
    .lp2-trev__header {
      text-align: center;
      max-width: 580px;
      margin: 0 auto clamp(48px,6vw,72px);
    }
    .lp2-trev__eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 11px; font-weight: 700;
      letter-spacing: .1em; text-transform: uppercase;
      color: rgba(237,110,99,.8); margin-bottom: 22px;
    }
    .lp2-trev__h2 {
      font-size: clamp(34px,4.4vw,62px);
      font-weight: 900; letter-spacing: -.055em; line-height: .97;
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,.38) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 16px;
    }
    .lp2-trev__sub {
      font-size: 15px; color: rgba(255,255,255,.4);
      line-height: 1.6; margin-bottom: 24px;
    }
    /* Trustpilot badge */
    .lp2-trev__tp {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 9px 20px; border-radius: 100px;
      font-size: 12px; font-weight: 700; letter-spacing: .03em;
      color: rgba(255,255,255,.5);
      background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.1);
      text-decoration: none;
      transition: background .25s, color .25s, border-color .25s;
    }
    .lp2-trev__tp:hover {
      background: rgba(255,255,255,.09);
      color: rgba(255,255,255,.82);
      border-color: rgba(255,255,255,.2);
    }
    .lp2-trev__tp-star { color: #00b67a; letter-spacing: 0; font-size: 11px; }
    .lp2-trev__tp-score { color: rgba(255,255,255,.7); font-weight: 800; }

    /* ── Scrolling columns wrapper ── */
    .lp2-tscroll {
      display: flex;
      justify-content: center;
      gap: 16px;
      max-height: 700px;
      overflow: hidden;
      mask-image: linear-gradient(to bottom, transparent, black 14%, black 82%, transparent);
      -webkit-mask-image: linear-gradient(to bottom, transparent, black 14%, black 82%, transparent);
    }
    /* Column = flex container, duplicated content scrolls up */
    .lp2-tscroll__col {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      width: 296px;
      will-change: transform;   /* JS-driven, see inline script */
    }
    /* Each set of cards — padding-bottom matches gap for seamless loop */
    .lp2-tscroll__set {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-bottom: 16px;
    }
    /* Col 2 hidden below 768px, col 3 hidden below 1024px */
    .lp2-tscroll__col--md { display: none; }
    .lp2-tscroll__col--lg { display: none; }

    /* ── Individual review card ── */
    .lp2-tcard {
      background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 20px;
      padding: 24px;
      box-shadow: 0 10px 30px -10px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.07);
      backdrop-filter: blur(8px);
      transition: background .25s, border-color .25s, transform .25s var(--ease);
      flex-shrink: 0;
    }
    .lp2-tcard:hover {
      background: rgba(255,255,255,.085);
      border-color: rgba(255,255,255,.16);
      transform: translateY(-3px);
    }
    .lp2-tcard--accent {
      border-color: rgba(237,110,99,.28);
      background: rgba(237,110,99,.08);
    }
    .lp2-tcard__stars {
      display: flex; gap: 2px;
      color: #fbbf24; font-size: 12px;
      margin-bottom: 12px;
    }
    .lp2-tcard__text {
      font-size: 13.5px; line-height: 1.75;
      color: rgba(255,255,255,.68);
      margin-bottom: 16px;
      font-style: italic;
    }
    .lp2-tcard__foot {
      display: flex; align-items: center; gap: 10px;
      padding-top: 14px;
      border-top: 1px solid rgba(255,255,255,.07);
    }
    .lp2-tcard__av {
      width: 34px; height: 34px; border-radius: 50%;
      font-size: 11px; font-weight: 800;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: #fff;
    }
    .lp2-tcard__name {
      font-size: 13px; font-weight: 700;
      color: rgba(255,255,255,.88); line-height: 1.2;
    }
    .lp2-tcard__role { font-size: 11px; color: rgba(255,255,255,.36); margin-top: 2px; }
    .lp2-tcard__title {
      font-size: 13px; font-weight: 700;
      color: rgba(255,255,255,.82);
      margin-bottom: 8px; line-height: 1.3;
    }
    .lp2-tcard__co {
      margin-left: auto; flex-shrink: 0;
      font-size: 10px; font-weight: 700;
      letter-spacing: .06em; text-transform: uppercase;
      color: rgba(255,255,255,.26);
    }

    /* ━━ RESPONSIVE ━━ */
    @media (min-width: 768px) {
      .lp2-tscroll__col--md { display: flex; }
    }
    @media (min-width: 1024px) {
      .lp2-tscroll__col--lg { display: flex; }
    }

    @media (max-width: 900px) {
      .lp2-cinematic { padding-top: 70px; } /* moins d'espace en haut sur mobile */
      .lp2-cin__bottom { flex-direction: column; align-items: center; text-align: center; gap: 18px; }
      .lp2-cin__watermark { font-size: 40vw; bottom: -1vh; }
      .lp2-cin__marquee-wrap { top: 110px; } /* descendre le bandeau pour qu'il ne chevauche pas la nav pill flottante */
      .lp2-hero { grid-template-columns: 1fr; min-height: auto; padding-top: 48px; }
      .lp2-hero__left { padding-right: 0; margin-bottom: 48px; }
      .lp2-hero__right { padding-left: 0; }
      .lp2-timeline { grid-template-columns: 1fr; gap: 32px; }
      .lp2-timeline::before { display: none; }
      .lp2-final__inner { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) {
      .lp2-widget-wrap { grid-template-columns: 1fr; }
      .lp2-widget--wide { grid-column: 1; }
    }

    /* ── Résultats Search Console ── */
    .lp2-results { padding: clamp(64px,8vw,100px) 0; position: relative; }
    .lp2-results .lp2-eyebrow { color: rgba(237,110,99,.8) !important; }
    .lp2-results .lp2-h2 {
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,.38) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; color: transparent;
    }
    .lp2-results__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .lp2-results__card {
      background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 24px;
      padding: clamp(20px,2.4vw,28px);
      box-shadow: 0 10px 30px -10px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.07);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    .lp2-results__head {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 16px;
    }
    .lp2-results__client {
      font-family: 'Satoshi', sans-serif; font-weight: 700; font-size: 15px;
      color: rgba(255,255,255,.92);
    }
    .lp2-results__period {
      font-size: 12px; font-weight: 600; letter-spacing: .03em;
      color: rgba(237,110,99,.9);
      background: rgba(237,110,99,.12);
      border: 1px solid rgba(237,110,99,.25);
      padding: 4px 12px; border-radius: 999px;
    }
    .lp2-results__chart {
      position: relative;
      border-radius: 14px; overflow: hidden;
      background: rgba(0,0,0,.25);
      border: 1px solid rgba(255,255,255,.06);
      margin-bottom: 20px;
      min-height: 130px;
    }
    .lp2-results__chart img { width: 100%; height: auto; display: block; }
    /* Placeholder graphique (affiché si l'image manque, via onerror) */
    .lp2-results__chart-ph {
      flex-direction: column; align-items: center; justify-content: center;
      gap: 8px; padding: 16px;
    }
    .lp2-results__chart-ph svg { width: 100%; height: 110px; display: block; }
    .lp2-results__chart-label {
      font-size: 11px; letter-spacing: .04em; text-transform: uppercase;
      color: rgba(255,255,255,.35);
    }
    .lp2-results__stats {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
    }
    .lp2-results__stat {
      display: flex; flex-direction: column; align-items: center; text-align: center;
      padding: 10px 6px;
      background: rgba(255,255,255,.03);
      border-radius: 12px;
    }
    .lp2-results__num {
      font-family: 'Satoshi', sans-serif; font-weight: 900;
      font-size: clamp(18px, 2.2vw, 24px);
      letter-spacing: -.02em;
      background: var(--accent-gradient);
      -webkit-background-clip: text; background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.1;
    }
    .lp2-results__lbl {
      font-size: 11.5px; color: rgba(255,255,255,.5); margin-top: 4px; line-height: 1.3;
    }
    .lp2-results__source {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      margin: 28px auto 0; text-align: center;
      font-size: 12.5px; color: rgba(255,255,255,.42);
    }
    @media (max-width: 720px) {
      .lp2-results__grid { grid-template-columns: 1fr; }
    }

    /* ── Réalisations : 2 grandes cartes puis 3 ; carrousel horizontal sur mobile ── */
    .lp2-works { padding: clamp(64px,8vw,100px) 0 clamp(16px,3vw,40px); position: relative; }
    .lp2-works .lp2-eyebrow {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      color: rgba(237,110,99,.8) !important;
    }
    .lp2-works .lp2-h2 {
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,.38) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text; color: transparent;
    }
    .lp2-works__grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;
      max-width: 1140px;
      margin: 0 auto;
    }
    .lp2-works__card {
      grid-column: span 2;
      display: flex; flex-direction: column;
      background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 24px;
      padding: 10px 10px 18px;
      box-shadow: 0 10px 30px -10px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.07);
      transition: opacity .65s var(--ease), transform .65s var(--ease), border-color .25s, background .25s;
    }
    .lp2-works__card--lg { grid-column: span 3; }
    .lp2-works__card:hover {
      background: rgba(255,255,255,.07);
      border-color: rgba(255,255,255,.17);
    }
    .lp2-works__media {
      aspect-ratio: 16 / 10;
      border-radius: 16px;
      overflow: hidden;
      background: #d9d9d9;
    }
    /* maquettes cadrées serré : l'ordinateur occupe davantage la vignette */
    .lp2-works__media img {
      width: 100%; height: 100%; display: block;
      object-fit: cover;
      transform: scale(1.08);
      transition: transform .7s var(--ease);
    }
    .lp2-works__card:hover .lp2-works__media img { transform: scale(1.13); }
    .lp2-works__body { padding: 16px 8px 0; }
    .lp2-works__head {
      display: flex; align-items: center; justify-content: space-between;
      gap: 12px; margin-bottom: 6px;
    }
    .lp2-works__name {
      font-family: 'Satoshi', sans-serif; font-weight: 700; font-size: 16px;
      letter-spacing: -.01em; line-height: 1.25;
      color: rgba(255,255,255,.92); margin: 0;
    }
    .lp2-works__tag {
      flex: 0 0 auto;
      font-size: 11.5px; font-weight: 600; letter-spacing: .03em;
      color: rgba(237,110,99,.9);
      background: rgba(237,110,99,.12);
      border: 1px solid rgba(237,110,99,.25);
      padding: 3px 10px; border-radius: 999px;
      white-space: nowrap;
    }
    .lp2-works__desc {
      font-size: 13.5px; line-height: 1.5;
      color: rgba(255,255,255,.5); margin: 0;
    }
    @media (max-width: 900px) {
      .lp2-works__grid { grid-template-columns: 1fr 1fr; }
      .lp2-works__card, .lp2-works__card--lg { grid-column: auto; }
      .lp2-works__card:first-child { grid-column: 1 / -1; }
    }
    @media (max-width: 640px) {
      .lp2-works__grid {
        display: flex;
        gap: 12px;
        overflow-x: auto;
        overscroll-behavior-x: contain;
        scroll-snap-type: x mandatory;
        scroll-padding-inline: var(--space-gutter);
        margin-inline: calc(-1 * var(--space-gutter));
        padding: 2px var(--space-gutter) 6px;
        scrollbar-width: none;
      }
      .lp2-works__grid::-webkit-scrollbar { display: none; }
      .lp2-works__card,
      .lp2-works__card--lg,
      .lp2-works__card:first-child { flex: 0 0 84%; scroll-snap-align: start; }
    }

    /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       TARIFS — dark theme (overrides main.css)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    .lp2-tarifs {
      position: relative;
      overflow: hidden;
    }
    .lp2-tarifs > .container { position: relative; z-index: 1; }

    /* Eyebrow + H2 */
    .lp2-tarifs .lp2-eyebrow {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      color: rgba(237,110,99,.8) !important;
    }
    .lp2-tarifs .lp2-h2 {
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,.38) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent !important;
      max-width: 100% !important;
      font-size: clamp(28px,3.8vw,52px) !important;
    }

    /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       DARK STAGE — fond commun à toutes les sections sombres
       Une seule grille, pas de rupture entre sections
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    .lp2-dark-stage {
      background: var(--ink);
      position: relative;
    }
    /* Grille unique — origine fixe, pas de mask → aucune interruption */
    .lp2-dark-stage__grid {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
      background-image:
        linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    /* Lueur A — haut (pricing / process) */
    .lp2-dark-stage__aurora--a {
      position: absolute; left: 50%; top: 8%;
      width: 80vw; height: 55vh; border-radius: 50%;
      background: radial-gradient(circle, rgba(237,110,99,.12) 0%, rgba(237,110,99,.03) 45%, transparent 72%);
      transform: translateX(-50%);
      pointer-events: none; z-index: 0;
    }
    /* Lueur B — milieu (avis) */
    .lp2-dark-stage__aurora--b {
      position: absolute; left: 28%; top: 48%;
      width: 70vw; height: 55vh; border-radius: 50%;
      background: radial-gradient(circle, rgba(237,110,99,.09) 0%, rgba(237,110,99,.02) 50%, transparent 72%);
      transform: translateX(-50%);
      pointer-events: none; z-index: 0;
    }
    /* Lueur C — bas (final CTA) */
    .lp2-dark-stage__aurora--c {
      position: absolute; left: 68%; top: 82%;
      width: 75vw; height: 55vh; border-radius: 50%;
      background: radial-gradient(circle, rgba(237,110,99,.11) 0%, rgba(237,110,99,.03) 45%, transparent 72%);
      transform: translateX(-50%);
      pointer-events: none; z-index: 0;
    }
    /* Sections internes : toutes transparentes, au-dessus de la grille */
    .lp2-dark-stage > .lp2-marquee-wrap,
    .lp2-dark-stage > .lp2-hero-video,
    .lp2-dark-stage > .lp2-benef,
    .lp2-dark-stage > .lp2-tarifs,
    .lp2-dark-stage > .lp2-process,
    .lp2-dark-stage > .lp2-results,
    .lp2-dark-stage > .lp2-works,
    .lp2-dark-stage > .lp2-treviews,
    .lp2-dark-stage > .lp2-faq,
    .lp2-dark-stage > .lp2-final { position: relative; z-index: 1; }

    /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       FAQ — accordéons natifs <details>
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    .lp2-faq {
      padding: clamp(64px, 8vw, 100px) 0 clamp(40px, 5vw, 64px);
    }
    .lp2-faq__header {
      text-align: center;
      max-width: 640px;
      margin: 0 auto clamp(40px, 5vw, 56px);
    }
    .lp2-faq__eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 11px; font-weight: 700;
      letter-spacing: .1em; text-transform: uppercase;
      color: rgba(237,110,99,.85);
      margin-bottom: 22px;
    }
    .lp2-faq__h2 {
      font-size: clamp(30px, 3.8vw, 52px);
      font-weight: 900; letter-spacing: -.04em; line-height: 1.05;
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,.42) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 0 0 16px;
    }
    .lp2-faq__sub {
      font-size: 15px; color: rgba(255,255,255,.5);
      line-height: 1.6; margin: 0;
    }

    .lp2-faq__list {
      max-width: 820px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .lp2-faq__item {
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 18px;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow: 0 8px 24px -8px rgba(0,0,0,.4),
                  inset 0 1px 0 rgba(255,255,255,.05);
      overflow: hidden;
      transition: background .25s var(--ease), border-color .25s var(--ease);
    }
    .lp2-faq__item:hover {
      background: rgba(255,255,255,.065);
      border-color: rgba(255,255,255,.14);
    }
    .lp2-faq__item[open] {
      background: rgba(255,255,255,.07);
      border-color: rgba(237,110,99,.3);
    }

    .lp2-faq__q {
      list-style: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 22px 26px;
      font-size: clamp(15px, 1.5vw, 17px);
      font-weight: 700;
      letter-spacing: -.01em;
      color: rgba(255,255,255,.92);
      user-select: none;
    }
    .lp2-faq__q::-webkit-details-marker { display: none; }
    .lp2-faq__q::marker { content: ""; }

    .lp2-faq__chevron {
      flex-shrink: 0;
      width: 32px; height: 32px;
      border-radius: 50%;
      display: inline-flex; align-items: center; justify-content: center;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.1);
      color: rgba(255,255,255,.6);
      transition: transform .35s var(--ease), background .25s, color .25s;
    }
    .lp2-faq__chevron svg { width: 14px; height: 14px; }
    .lp2-faq__item[open] .lp2-faq__chevron {
      transform: rotate(180deg);
      background: rgba(237,110,99,.18);
      color: #fff;
      border-color: rgba(237,110,99,.4);
    }

    .lp2-faq__a {
      padding: 0 26px 24px;
      font-size: 14.5px;
      line-height: 1.75;
      color: rgba(255,255,255,.62);
      animation: faq-fade .35s var(--ease);
    }
    .lp2-faq__a p { margin: 0; }
    .lp2-faq__a strong {
      color: rgba(255,255,255,.85);
      font-weight: 700;
    }
    @keyframes faq-fade {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 640px) {
      .lp2-faq__q  { padding: 18px 20px; font-size: 14.5px; }
      .lp2-faq__a  { padding: 0 20px 20px; font-size: 14px; }
    }

    /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       BÉNÉFICES — Bento 2×2
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    .lp2-benef {
      padding: clamp(64px, 8vw, 100px) 0;
    }
    .lp2-benef__eyebrow {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      color: rgba(237,110,99,.85) !important;
    }
    .lp2-benef__h2 {
      text-align: center;
      max-width: 100% !important;
      margin-left: auto !important;
      margin-right: auto !important;
      margin-bottom: clamp(40px, 5vw, 64px) !important;
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,.42) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent !important;
    }

    .lp2-benef__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;        /* chaque ligne s'adapte au contenu de la plus haute */
      align-items: stretch;         /* cartes même ligne = même hauteur */
      gap: 16px;
      max-width: 1080px;
      margin: 0 auto;
    }
    /* Bento asymétrique : cartes 1 et 4 larges (2/3), cartes 2 et 3 étroites (1/3) */
    .lp2-benef__card:nth-child(1) { grid-column: span 2; }
    .lp2-benef__card:nth-child(2) { grid-column: span 1; }
    .lp2-benef__card:nth-child(3) { grid-column: span 1; }
    .lp2-benef__card:nth-child(4) { grid-column: span 2; }

    .lp2-benef__card {
      position: relative;
      padding: clamp(22px, 2.6vw, 32px);
      border-radius: 24px;
      background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.09);
      box-shadow: 0 10px 30px -10px rgba(0,0,0,.5),
                  inset 0 1px 0 rgba(255,255,255,.07);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: background .25s var(--ease),
                  border-color .25s var(--ease),
                  transform .25s var(--ease);
      overflow: hidden;
    }
    /* Spotlight sous le curseur */
    .lp2-benef__card::after {
      content: '';
      position: absolute; inset: 0;
      border-radius: inherit;
      background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%),
                                  rgba(237,110,99,.10), transparent 60%);
      opacity: 0;
      transition: opacity .35s var(--ease);
      pointer-events: none;
    }
    .lp2-benef__card:hover {
      background: rgba(255,255,255,.085);
      border-color: rgba(255,255,255,.18);
      transform: translateY(-3px);
    }
    .lp2-benef__card:hover::after { opacity: 1; }

    /* Illustration en haut de carte — image brute, aucun wrapper visuel */
    .lp2-benef__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 140px;
      margin-bottom: 18px;
    }
    /* Carte 1 (large) : illustration plus grande */
    .lp2-benef__card:nth-child(1) .lp2-benef__icon { height: 180px; }
    /* Carte 4 (large) : illustration encore plus grande (remplit l'espace vide) */
    .lp2-benef__card:nth-child(4) .lp2-benef__icon { height: 230px; }
    .lp2-benef__icon img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      display: block;
    }

    .lp2-benef__title {
      font-size: clamp(18px, 1.8vw, 22px);
      font-weight: 800;
      letter-spacing: -.02em;
      line-height: 1.25;
      color: rgba(255,255,255,.95);
      margin: 0 0 12px;
    }
    .lp2-benef__text {
      font-size: 14.5px;
      line-height: 1.7;
      color: rgba(255,255,255,.55);
      margin: 0;
    }

    @media (max-width: 720px) {
      .lp2-benef__grid { grid-template-columns: 1fr; }
      .lp2-benef__card:nth-child(n) { grid-column: span 1; }
      .lp2-benef__icon { height: 130px; margin-bottom: 14px; }
      .lp2-benef__card:nth-child(1) .lp2-benef__icon { height: 150px; }
      .lp2-benef__card:nth-child(4) .lp2-benef__icon { height: 180px; }
    }

    /* Hero video sur fond dark stage — override le fond blanc de .hero-video */
    .lp2-hero-video {
      background: transparent !important;
      padding: clamp(48px, 6vw, 80px) 0 clamp(24px, 3vw, 40px) !important;
    }
    .lp2-hero-video .hero-video__frame {
      border: 1px solid rgba(255,255,255,.08);
      box-shadow: 0 24px 60px -16px rgba(0,0,0,.6),
                  inset 0 1px 0 rgba(255,255,255,.05);
    }

    /* CTA "Prendre rdv" sous les 3 cards de pricing */
    .lp2-tarifs__cta {
      margin-top: clamp(40px, 5vw, 56px);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .lp2-tarifs__cta-sub {
      font-size: 13px;
      color: rgba(255,255,255,.5);
      margin: 0;
      letter-spacing: .02em;
    }

    /* Wrapper global — effacer le fond blanc de main.css */
    .lp2-tarifs .pricing__wrap {
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
      padding: 0 !important;
    }

    /* Cards — verre sombre, identique aux cartes avis */
    .lp2-tarifs .pcard-offer {
      background: rgba(255,255,255,.05) !important;
      border: 1px solid rgba(255,255,255,.09) !important;
      box-shadow: 0 10px 30px -10px rgba(0,0,0,.5),
                  inset 0 1px 0 rgba(255,255,255,.07) !important;
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      transition: background .25s, border-color .25s, transform .25s var(--ease) !important;
      position: relative !important;
      z-index: 1 !important;
    }
    /* Élever la carte dont le tooltip est visible au-dessus des sœurs
       (backdrop-filter crée un stacking context isolé par carte) */
    .lp2-tarifs .pcard-offer:hover,
    .lp2-tarifs .pcard-offer:has(.pcard-offer__tip:hover),
    .lp2-tarifs .pcard-offer:has(.pcard-offer__tip:focus-within) {
      z-index: 10 !important;
    }
    .lp2-tarifs .pcard-offer:hover {
      background: rgba(255,255,255,.085) !important;
      border-color: rgba(255,255,255,.17) !important;
      transform: translateY(-4px) !important;
      box-shadow: 0 20px 50px -12px rgba(0,0,0,.6),
                  inset 0 1px 0 rgba(255,255,255,.1) !important;
    }
    /* Carte "Popular" (Site vitrine) — glow rouge */
    .lp2-tarifs .pcard-offer--popular {
      border-color: rgba(237,110,99,.35) !important;
      background: rgba(237,110,99,.09) !important;
      box-shadow: 0 12px 44px -8px rgba(237,110,99,.22),
                  inset 0 1px 0 rgba(255,255,255,.08) !important;
    }
    .lp2-tarifs .pcard-offer--popular:hover {
      background: rgba(237,110,99,.13) !important;
      border-color: rgba(237,110,99,.5) !important;
    }

    /* Icône */
    .lp2-tarifs .pcard-offer__icon {
      background: rgba(237,110,99,.16) !important;
      color: var(--accent) !important;
      border-color: rgba(237,110,99,.22) !important;
    }
    /* Titre offre */
    .lp2-tarifs .pcard-offer__title,
    .lp2-tarifs .pcard-offer__title-row .pcard-offer__title {
      color: rgba(255,255,255,.92) !important;
    }
    /* Description */
    .lp2-tarifs .pcard-offer__desc {
      color: rgba(255,255,255,.4) !important;
    }
    /* Badge Popular */
    .lp2-tarifs .pcard-offer__badge {
      background: rgba(237,110,99,.2) !important;
      color: #ff6b55 !important;
      border-color: rgba(237,110,99,.38) !important;
    }
    /* Bloc prix */
    .lp2-tarifs .pcard-offer__price-block {
      border-top-color: rgba(255,255,255,.08) !important;
      border-bottom-color: rgba(255,255,255,.08) !important;
    }
    .lp2-tarifs .pcard-offer__from {
      color: rgba(237,110,99,.75) !important;
    }
    .lp2-tarifs .pcard-offer__price {
      color: #ffffff !important;
    }
    .lp2-tarifs .pcard-offer__price small {
      color: rgba(255,255,255,.36) !important;
    }
    /* Liste features */
    .lp2-tarifs .pcard-offer__list li {
      color: rgba(255,255,255,.6) !important;
      border-bottom-color: rgba(255,255,255,.06) !important;
    }
    .lp2-tarifs .pcard-offer__list li > i:first-child {
      color: var(--accent) !important;
    }
    /* Mobile : main.css donne 48 px de haut à chaque caractéristique (cible tactile), alors
       qu'elles ne sont pas cliquables ; les cartes doublaient de hauteur. */
    @media (max-width: 768px) {
      .lp2-tarifs .pcard-offer__list { gap: 11px; }
      .lp2-tarifs .pcard-offer__list li { min-height: 0; }
    }
    /* Tooltip */
    .lp2-tarifs .pcard-offer__info {
      color: rgba(255,255,255,.25) !important;
    }
    .lp2-tarifs .pcard-offer__tooltip {
      background: #1a1a1a !important;
      color: rgba(255,255,255,.75) !important;
      border-color: rgba(255,255,255,.1) !important;
    }

    /* ━━ FOOTER MINIMALISTE ━━ */
    .lp2-footer {
      background: var(--ink);
      border-top: 1px solid rgba(255,255,255,.07);
      padding: 28px 0;
    }
    .lp2-footer__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }
    .lp2-footer__logo { display: inline-flex; text-decoration: none; }
    .lp2-footer__logo img {
      height: 26px; width: auto;
      opacity: .6;
      transition: opacity .25s ease;
      display: block;
    }
    .lp2-footer__logo:hover img { opacity: 1; }
    .lp2-footer__copy {
      font-size: 12px;
      color: rgba(255,255,255,.25);
      margin: 0;
    }
    .lp2-footer__legal {
      display: flex; gap: 20px;
    }
    .lp2-footer__legal a {
      font-size: 12px;
      color: rgba(255,255,255,.28);
      text-decoration: none;
      transition: color .2s ease;
    }
    .lp2-footer__legal a:hover { color: rgba(255,255,255,.7); }
    @media (max-width: 640px) {
      .lp2-footer__inner { flex-direction: column; align-items: center; text-align: center; gap: 12px; }
    }

    /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       LIQUID METAL BUTTON
       Border = WebGL chrome shader (CSS shimmer fallback)
       Interior = dark gradient pill
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    .lm-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      border-radius: 100px;
      cursor: pointer;
      isolation: isolate;
      text-decoration: none;
    }

    /* Outer rim — CSS shimmer while WebGL loads, then canvas takes over */
    .lm-shader {
      position: absolute;
      inset: -2px;
      border-radius: 100px;
      overflow: hidden;
      z-index: 0;
      background: linear-gradient(
        125deg,
        #6e6e6e 0%, #d0d0d0 16%, #898989 28%,
        #efefef 42%, #999 55%,
        #d5d5d5 70%, #707070 100%
      );
      background-size: 280% 280%;
      animation: lm-css-shimmer 3.8s ease-in-out infinite;
    }
    @keyframes lm-css-shimmer {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    /* When WebGL is active, canvas fills the rim */
    .lm-shader canvas {
      position: absolute;
      inset: 0;
      width: 100% !important;
      height: 100% !important;
      display: block;
    }
    /* WebGL active: suppress CSS fallback */
    .lm-shader.is-webgl-active {
      animation: none;
      background: none;
    }

    /* Pink → Orange gradient inner body */
    .lm-bg {
      position: absolute;
      inset: 2px;
      border-radius: 97px;
      background: var(--accent-gradient);
      z-index: 1;
      transition: filter .28s ease;
    }
    .lm-btn:hover .lm-bg {
      filter: brightness(1.08) saturate(1.1);
    }

    /* Text label */
    .lm-label {
      position: relative;
      z-index: 2;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 36px;
      font-family: 'Satoshi', sans-serif;
      font-size: 15px; font-weight: 700;
      color: rgba(255,255,255,.86);
      white-space: nowrap;
      pointer-events: none;
      transition: color .25s ease;
      letter-spacing: -.01em;
    }
    .lm-btn:hover .lm-label { color: #fff; }

    /* Invisible full-cover click layer */
    .lm-trigger {
      position: absolute;
      inset: 0;
      z-index: 3;
      border-radius: 100px;
      overflow: hidden;      /* clips ripple */
    }

    /* Click ripple */
    .lm-ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,.2);
      transform: scale(0);
      pointer-events: none;
      animation: lm-ripple-burst .65s ease-out forwards;
    }
    @keyframes lm-ripple-burst {
      to { transform: scale(5); opacity: 0; }
    }

    /* Large variant for final CTA */
    .lm-btn--lg .lm-label {
      padding: 18px 40px;
      font-size: 16px;
      font-weight: 800;
    }
  `;
export default css;
