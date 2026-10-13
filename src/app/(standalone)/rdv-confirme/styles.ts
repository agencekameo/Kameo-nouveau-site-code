/* Styles de la page de confirmation de rendez-vous (page-rdv-confirme.php). */
const css = `
    :root {
      --ink: #0f1115;
      --accent: #ED6E63;
      --accent-gradient: linear-gradient(136.79deg, #E14B89 5.13%, #F8903C 84.98%);
    }
    *, *::before, *::after { box-sizing: border-box; }
    html, body { height: 100%; margin: 0; }
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: #0f1115;
      color: #fff;
      display: flex; flex-direction: column;
      min-height: 100dvh;
      overflow-x: hidden;
    }
    body::before {
      content: ''; position: fixed; inset: 0;
      background:
        radial-gradient(60% 50% at 50% 0%, rgba(237,110,99,.18), transparent 70%),
        radial-gradient(40% 30% at 80% 100%, rgba(225,75,137,.10), transparent 70%);
      pointer-events: none; z-index: 0;
    }
    .confirm-wrap {
      position: relative; z-index: 1;
      flex: 1;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 32px 24px;
      text-align: center;
    }
    .confirm-logo {
      display: inline-flex; align-items: center;
      margin-bottom: clamp(40px, 6vw, 64px);
    }
    .confirm-logo img { height: 42px; width: auto; display: block; max-width: 200px; }
    .confirm-logo__text {
      font-family: 'Inter', system-ui, sans-serif;
      font-weight: 900; font-size: 26px; letter-spacing: -.04em;
      color: #fff; line-height: 1;
    }
    .confirm-check {
      width: 88px; height: 88px;
      border-radius: 50%;
      background: var(--accent-gradient);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 32px;
      box-shadow: 0 20px 60px -20px rgba(237,110,99,.55), inset 0 1px 0 rgba(255,255,255,.2);
      animation: pop .6s cubic-bezier(.16,1,.3,1) both;
    }
    @keyframes pop {
      0%   { transform: scale(.4); opacity: 0; }
      60%  { transform: scale(1.08); opacity: 1; }
      100% { transform: scale(1); }
    }
    .confirm-check svg { width: 44px; height: 44px; }
    .confirm-h1 {
      font-size: clamp(28px, 4vw, 44px);
      font-weight: 900; letter-spacing: -.03em; line-height: 1.1;
      max-width: 18ch;
      margin: 0 0 18px;
      background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,.55) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .confirm-sub {
      font-size: clamp(15px, 1.5vw, 17px);
      color: rgba(255,255,255,.65);
      line-height: 1.6;
      max-width: 46ch;
      margin: 0 0 14px;
    }
    .confirm-mail {
      font-size: 13.5px;
      color: rgba(255,255,255,.42);
      margin: 0 0 36px;
    }
    .confirm-back {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 14px; font-weight: 600;
      color: rgba(255,255,255,.65);
      text-decoration: none;
      padding: 12px 22px;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 999px;
      transition: all .25s cubic-bezier(.16,1,.3,1);
    }
    .confirm-back:hover {
      color: #fff;
      border-color: rgba(255,255,255,.28);
      transform: translateY(-1px);
    }
    .confirm-back svg { width: 14px; height: 14px; }
    @media (max-width: 540px) {
      .confirm-check { width: 76px; height: 76px; }
      .confirm-check svg { width: 36px; height: 36px; }
    }
  `;
export default css;
