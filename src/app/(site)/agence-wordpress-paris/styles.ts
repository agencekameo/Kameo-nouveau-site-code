/* Styles propres à la page (bloc <style> du gabarit WordPress). */
const css = `
  :root { --accent-gradient: linear-gradient(136.79deg, #E14B89 5.13%, #F8903C 84.98%); }
  /* ── Sections spécifiques pillier WordPress ───────────────────────────── */
  .wp-services { padding: clamp(64px, 8vw, 100px) 0; background: #fff; }
  .wp-services__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px, 5vw, 56px); }
  .wp-services__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .wp-services__title { font-size: clamp(28px, 3.4vw, 44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0 0 14px; color: #0f1115; }
  .wp-services__intro { font-size: clamp(15px, 1.4vw, 17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 60ch; margin: 0 auto; }
  .wp-services__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .wp-service-card { background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 22px; padding: clamp(28px, 3vw, 36px); display: flex; flex-direction: column; transition: transform .3s cubic-bezier(.16,1,.3,1), border-color .3s, box-shadow .3s; }
  .wp-service-card:hover { transform: translateY(-4px); border-color: rgba(237,110,99,.4); box-shadow: 0 24px 50px -20px rgba(237,110,99,.18); }
  .wp-service-card__icon { width: 56px; height: 56px; border-radius: 14px; background: var(--accent-gradient); display: inline-flex; align-items: center; justify-content: center; color: #fff; font-size: 24px; margin-bottom: 24px; box-shadow: 0 12px 24px -8px rgba(237,110,99,.45); }
  .wp-service-card__title { font-size: 22px; font-weight: 900; letter-spacing: -.02em; margin: 0 0 14px; color: #0f1115; }
  .wp-service-card__text { font-size: 15px; color: rgba(15,17,21,.65); line-height: 1.65; margin: 0 0 22px; flex: 1; }
  .wp-service-card__list { list-style: none; padding: 0; margin: 0 0 26px; font-size: 14px; color: rgba(15,17,21,.7); }
  .wp-service-card__list li { padding-left: 24px; position: relative; margin-bottom: 10px; line-height: 1.5; }
  .wp-service-card__list li::before { content: ''; position: absolute; left: 0; top: 7px; width: 12px; height: 7px; border-left: 2px solid #ED6E63; border-bottom: 2px solid #ED6E63; transform: rotate(-45deg); }
  .wp-service-card__cta { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700; color: #ED6E63; text-decoration: none; transition: gap .2s; }
  .wp-service-card__cta:hover { gap: 12px; }
  .wp-service-card__cta svg { width: 14px; height: 14px; transition: transform .2s; }
  .wp-service-card__cta:hover svg { transform: translateX(3px); }
  @media (max-width: 900px) { .wp-services__grid { grid-template-columns: 1fr; } }

  /* ── Override : 6 étapes du process en grille 3×2 centrée ────────────── */
  .expertise-process__steps--six { grid-template-columns: repeat(3, 1fr); }
  @media (max-width: 900px) { .expertise-process__steps--six { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .expertise-process__steps--six { grid-template-columns: 1fr; } }

  /* ── Chiffres clés (carte connectée, dividers) ───────────────────────── */
  .wp-stats { padding: clamp(64px, 8vw, 100px) 0; background: #fff; }
  .wp-stats__head { text-align: center; max-width: 720px; margin: 0 auto clamp(48px, 6vw, 64px); }
  .wp-stats__title { font-size: clamp(28px, 3.4vw, 44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0; }
  .wp-stats__grid { display: grid; grid-template-columns: repeat(4, 1fr); max-width: 1100px; margin: 0 auto; background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 24px; box-shadow: 0 28px 60px -28px rgba(15,17,21,.14); overflow: hidden; }
  .wp-stat { padding: clamp(30px, 3.6vw, 46px) clamp(20px, 2.5vw, 28px); text-align: center; position: relative; }
  .wp-stat:not(:last-child) { border-right: 1px solid rgba(15,17,21,.06); }
  .wp-stat__icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(237,110,99,.1); color: #ED6E63; display: inline-flex; align-items: center; justify-content: center; font-size: 17px; margin-bottom: 22px; }
  .wp-stat__num { font-family: 'Satoshi', sans-serif; font-weight: 900; font-size: clamp(38px, 4.8vw, 56px); letter-spacing: -.04em; line-height: 1; color: #0f1115; margin-bottom: 12px; display: block; }
  .wp-stat__lbl { font-size: 13px; color: rgba(15,17,21,.55); line-height: 1.5; max-width: 24ch; margin: 0 auto; }
  @media (max-width: 900px) {
    .wp-stats__grid { grid-template-columns: repeat(2, 1fr); }
    .wp-stat:nth-child(2) { border-right: 0; }
    .wp-stat:nth-child(1), .wp-stat:nth-child(2) { border-bottom: 1px solid rgba(15,17,21,.06); }
  }
  @media (max-width: 560px) {
    .wp-stats__grid { grid-template-columns: 1fr; }
    .wp-stat { border-right: 0 !important; }
    .wp-stat:not(:last-child) { border-bottom: 1px solid rgba(15,17,21,.06); }
  }

  /* ── Cas clients chiffrés ────────────────────────────────────────────── */
  .wp-cases { padding: clamp(64px, 8vw, 100px) 0; background: #fff; }
  .wp-cases__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px, 5vw, 56px); }
  .wp-cases__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .wp-cases__title { font-size: clamp(28px, 3.4vw, 44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0; color: #0f1115; }
  .wp-cases__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; max-width: 1000px; margin: 0 auto; }
  .wp-case { background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 22px; padding: clamp(22px, 2.4vw, 30px); box-shadow: 0 24px 50px -28px rgba(15,17,21,.14); }
  .wp-case__head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
  .wp-case__client { font-weight: 800; font-size: 16px; color: #0f1115; }
  .wp-case__period { font-size: 11.5px; font-weight: 600; letter-spacing: .04em; color: #ED6E63; background: rgba(237,110,99,.1); border: 1px solid rgba(237,110,99,.25); padding: 4px 11px; border-radius: 999px; }
  .wp-case__image { position: relative; border-radius: 12px; overflow: hidden; background: rgba(15,17,21,.04); border: 1px solid rgba(15,17,21,.06); margin-bottom: 18px; min-height: 130px; }
  .wp-case__image img { width: 100%; height: auto; display: block; }
  .wp-case__stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .wp-case__stat { background: #fff; border: 1px solid rgba(15,17,21,.05); border-radius: 10px; padding: 12px 6px; text-align: center; }
  .wp-case__num { font-family: 'Satoshi', sans-serif; font-weight: 900; font-size: clamp(18px, 2vw, 22px); letter-spacing: -.02em; color: #0f1115; display: block; }
  .wp-case__lbl { font-size: 11px; color: rgba(15,17,21,.55); margin-top: 4px; line-height: 1.3; }
  @media (max-width: 760px) { .wp-cases__grid { grid-template-columns: 1fr; } }

  /* ── Pourquoi WordPress (LSI éducatif) ───────────────────────────────── */
  .wp-why { padding: clamp(64px, 8vw, 100px) 0; background: #fff; position: relative; }
  .wp-why__head { text-align: center; max-width: 820px; margin: 0 auto clamp(48px, 6vw, 64px); }
  .wp-why__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .wp-why__title { font-size: clamp(28px, 3.4vw, 44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0 0 22px; color: #0f1115; }
  .wp-why__intro { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.75; margin: 0; }
  .wp-why__intro strong { color: #0f1115; font-weight: 700; }
  .wp-why__intro + .wp-why__intro { margin-top: 16px; }
  .wp-why__grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 22px; max-width: 1140px; margin: 0 auto; }
  .wp-why__adv { flex: 0 1 calc((100% - 44px) / 3); min-width: 280px; max-width: 360px; background: #F9FAFB; border: 1px solid rgba(15,17,21,.06); border-radius: 20px; padding: clamp(26px, 2.8vw, 32px); transition: transform .3s cubic-bezier(.16,1,.3,1), border-color .3s, box-shadow .3s; position: relative; overflow: hidden; }
  .wp-why__adv::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-gradient); opacity: 0; transition: opacity .3s; }
  .wp-why__adv:hover { transform: translateY(-4px); border-color: rgba(237,110,99,.25); box-shadow: 0 22px 50px -24px rgba(15,17,21,.18); background: #fff; }
  .wp-why__adv:hover::before { opacity: 1; }
  .wp-why__adv-icon { width: 50px; height: 50px; border-radius: 13px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 22px; box-shadow: 0 14px 26px -10px rgba(237,110,99,.5); }
  .wp-why__adv-title { font-size: 18px; font-weight: 800; letter-spacing: -.02em; color: #0f1115; margin: 0 0 10px; line-height: 1.3; }
  .wp-why__adv-text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.65; margin: 0; }
  @media (max-width: 920px) { .wp-why__adv { flex: 0 1 calc((100% - 22px) / 2); max-width: none; } }
  @media (max-width: 620px) { .wp-why__adv { flex: 1 1 100%; max-width: 500px; } }

  /* ── Bloc local Paris ────────────────────────────────────────────────── */
  .wp-local { padding: clamp(48px, 6vw, 72px) 0; background: #fff; }
  .wp-local__wrap { max-width: 760px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: clamp(28px, 4vw, 56px); align-items: center; }
  .wp-local__title { font-size: clamp(24px, 3vw, 36px); font-weight: 900; letter-spacing: -.03em; line-height: 1.15; margin: 0 0 16px; }
  .wp-local__text { font-size: 15px; color: rgba(15,17,21,.7); line-height: 1.75; margin-bottom: 18px; }
  .wp-local__address { display: flex; align-items: flex-start; gap: 14px; padding: 18px 22px; background: #fff; border: 1px solid rgba(15,17,21,.07); border-radius: 16px; margin-bottom: 14px; }
  .wp-local__address i { color: #ED6E63; font-size: 18px; margin-top: 2px; }
  .wp-local__address-text { font-size: 14.5px; line-height: 1.5; }
  .wp-local__address-text strong { display: block; font-size: 15px; margin-bottom: 4px; }
  @media (max-width: 900px) { .wp-local__wrap { grid-template-columns: 1fr; } }

  /* ── CTA final ───────────────────────────────────────────────────────── */
  /* ── FAQ : espacement titre + chevrons ──────────────────────────────── */
  .expertise-faq__title { margin-bottom: clamp(40px, 5vw, 56px) !important; }

  /* ── CTA final dans une card ────────────────────────────────────────── */
  .wp-final { padding: clamp(48px, 6vw, 80px) 0 clamp(64px, 8vw, 100px); background: #fff; }
  .wp-final__container { max-width: 980px; margin: 0 auto; padding: 0 24px; }
  .wp-final__box {
    background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%);
    border: 1px solid rgba(237,110,99,.2);
    border-radius: 28px;
    padding: clamp(48px, 7vw, 80px) clamp(28px, 5vw, 56px);
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 32px 60px -28px rgba(237,110,99,.22);
  }
  .wp-final__box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(55% 60% at 50% 0%, rgba(237,110,99,.12), transparent 70%);
    pointer-events: none;
  }
  .wp-final__wrap { position: relative; max-width: 640px; margin: 0 auto; }
  .wp-final__title { font-size: clamp(28px, 3.6vw, 44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0 0 18px; color: #0f1115; }
  .wp-final__text { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0 0 32px; }
  .wp-final__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .wp-final__cta { display: inline-flex; align-items: center; gap: 10px; padding: 16px 30px; font-size: 15px; font-weight: 800; letter-spacing: -.01em; border-radius: 999px; text-decoration: none; transition: transform .2s; }
  .wp-final__cta--primary { background: var(--accent-gradient); color: #fff; box-shadow: 0 14px 28px -10px rgba(237,110,99,.5); }
  .wp-final__cta--secondary { background: #fff; color: #0f1115; border: 1px solid rgba(15,17,21,.12); }
  .wp-final__cta:hover { transform: translateY(-2px); }

    /* === ÉQUIPE WP === */
    .wp-team { padding: clamp(64px,8vw,100px) 0; background: #fff; border-top: 1px solid rgba(15,17,21,.06); }
    .wp-team__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
    .wp-team__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(225,75,137,.95); margin-bottom: 14px; display: inline-block; }
    .wp-team__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
    .wp-team__intro { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.65; max-width: 60ch; margin: 0 auto; }
    .wp-team__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; max-width: 980px; margin: 0 auto; }
    .wp-team__card { background: #F9FAFB; border: 1px solid rgba(15,17,21,.06); border-radius: 22px; padding: clamp(28px,3vw,36px); text-align: center; transition: transform .25s, box-shadow .25s; }
    .wp-team__card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px -20px rgba(15,17,21,.12); }
    .wp-team__avatar { width: 110px; height: 110px; border-radius: 50%; overflow: hidden; margin: 0 auto 22px; display: block; box-shadow: 0 14px 30px -10px rgba(15,17,21,.18); border: 3px solid #fff; }
    .wp-team__avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .wp-team__name { font-size: 19px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 4px; }
    .wp-team__role { font-size: 13px; font-weight: 600; color: #E14B89; margin: 0 0 12px; }
    .wp-team__bio { font-size: 14px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0; }
    @media (max-width: 760px) { .wp-team__grid { grid-template-columns: 1fr; max-width: 420px; } }

    /* === TÉMOIGNAGES === */
    .wp-reviews { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
    .wp-reviews__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
    .wp-reviews__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(248,144,60,.95); margin-bottom: 14px; display: inline-block; }
    .wp-reviews__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
    .wp-reviews__intro { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.65; max-width: 60ch; margin: 0 auto; }
    .wp-reviews__intro a { color: #E14B89; text-decoration: none; border-bottom: 1px solid rgba(225,75,137,.3); }
    .wp-reviews__intro a:hover { border-bottom-color: #E14B89; }
    .wp-reviews__grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; max-width: 1080px; margin: 0 auto; }
    .wp-review { background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 22px; padding: clamp(28px,3vw,36px); display: flex; flex-direction: column; gap: 18px; transition: transform .25s, box-shadow .25s; }
    .wp-review:hover { transform: translateY(-3px); box-shadow: 0 18px 40px -20px rgba(15,17,21,.12); }
    .wp-review--placeholder { background: repeating-linear-gradient(45deg, #fafafa, #fafafa 10px, #f3f3f3 10px, #f3f3f3 20px); opacity: .8; }
    .wp-review__stars { color: #FFB400; font-size: 18px; letter-spacing: 2px; }
    .wp-review__text { font-size: 16px; color: #0f1115; line-height: 1.6; margin: 0; font-style: italic; }
    .wp-review__text::before { content: open-quote; }
    .wp-review__text::after { content: close-quote; }
    .wp-review__author { display: flex; align-items: center; gap: 14px; margin: 0; }
    .wp-review__author img { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
    .wp-review__avatar-placeholder { width: 56px; height: 56px; border-radius: 50%; background: rgba(15,17,21,.08); display: flex; align-items: center; justify-content: center; font-weight: 900; color: rgba(15,17,21,.4); flex-shrink: 0; font-size: 22px; }
    .wp-review__avatar-initials { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 17px; letter-spacing: -.02em; flex-shrink: 0; }
    .wp-review__author strong { display: block; font-size: 15px; font-weight: 800; color: #0f1115; }
    .wp-review__role { font-size: 13px; color: rgba(15,17,21,.6); }
    .wp-reviews__cta { text-align: center; margin-top: clamp(40px,5vw,56px); }
    @media (max-width: 760px) { .wp-reviews__grid { grid-template-columns: 1fr; } }

  
    /* === QUAND CHOISIR WORDPRESS === */
    .wp-when { padding: clamp(64px,8vw,100px) 0; background: #fff; border-top: 1px solid rgba(15,17,21,.06); }
    .wp-when__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
    .wp-when__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(225,75,137,.95); margin-bottom: 14px; display: inline-block; }
    .wp-when__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
    .wp-when__intro { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.65; max-width: 65ch; margin: 0 auto; }
    .wp-when__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; max-width: 1100px; margin: 0 auto; }
    .wp-when__col { padding: clamp(28px,3vw,36px); border-radius: 22px; border: 1px solid rgba(15,17,21,.08); }
    .wp-when__col--yes { background: rgba(16,185,129,.04); border-color: rgba(16,185,129,.2); }
    .wp-when__col--no  { background: rgba(239,68,68,.04);  border-color: rgba(239,68,68,.2); }
    .wp-when__col-title { font-size: 19px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 20px; display: flex; align-items: center; gap: 10px; }
    .wp-when__col--yes .wp-when__col-title i { color: #059669; }
    .wp-when__col--no  .wp-when__col-title i { color: #dc2626; }
    .wp-when__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
    .wp-when__list li { font-size: 14.5px; line-height: 1.6; color: rgba(15,17,21,.78); padding-left: 18px; position: relative; }
    .wp-when__list li::before { content: ""; position: absolute; left: 0; top: 9px; width: 6px; height: 6px; border-radius: 50%; background: rgba(15,17,21,.25); }
    .wp-when__list li strong { color: #0f1115; font-weight: 700; }
    .wp-when__verdict { max-width: 880px; margin: clamp(40px,5vw,56px) auto 0; padding: 28px; background: #F9FAFB; border: 1px solid rgba(15,17,21,.06); border-radius: 18px; font-size: 16px; line-height: 1.7; color: rgba(15,17,21,.78); text-align: center; }
    @media (max-width: 800px) { .wp-when__grid { grid-template-columns: 1fr; } }

  `;
export default css;
