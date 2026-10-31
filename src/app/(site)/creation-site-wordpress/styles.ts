/* Styles propres à la page (bloc <style> du gabarit WordPress). */
const css = `
  :root { --accent-gradient: linear-gradient(136.79deg, #E14B89 5.13%, #F8903C 84.98%); }

  /* ── Breadcrumb retour pillier ───────────────────────────────────────── */
  .silo-back { padding: clamp(96px, 12vw, 132px) 0 20px; background: #fff; border-bottom: 1px solid rgba(15,17,21,.04); }
  .silo-back__link { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: rgba(15,17,21,.55); text-decoration: none; transition: color .2s; }
  .silo-back__link:hover { color: #ED6E63; }
  .silo-back__link svg { width: 12px; height: 12px; }

  /* ── Pourquoi nous (features création-spécifiques) ─────────────────── */
  .ccrea-why { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .ccrea-why__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
  .ccrea-why__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .ccrea-why__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0; color: #0f1115; }
  .ccrea-why__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; max-width: 1100px; margin: 0 auto; }
  .ccrea-why__card { background: #F9FAFB; border: 1px solid rgba(15,17,21,.06); border-radius: 18px; padding: clamp(22px,2.5vw,28px); transition: transform .25s, border-color .25s, box-shadow .25s; }
  .ccrea-why__card:hover { transform: translateY(-3px); border-color: rgba(237,110,99,.25); box-shadow: 0 18px 40px -20px rgba(15,17,21,.12); }
  .ccrea-why__icon { width: 44px; height: 44px; border-radius: 12px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 17px; margin-bottom: 18px; }
  .ccrea-why__name { font-size: 17px; font-weight: 800; letter-spacing: -.02em; color: #0f1115; margin: 0 0 8px; line-height: 1.3; }
  .ccrea-why__text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0; }
  @media (max-width: 900px) { .ccrea-why__grid { grid-template-columns: 1fr; } }

  /* ── 3 formats (cards) ──────────────────────────────────────────────── */
  .creation-formats { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .creation-formats__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .creation-formats__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .creation-formats__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 60ch; margin: 0 auto; }
  .creation-formats__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
  .creation-format { background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 22px; padding: clamp(24px,2.6vw,32px); position: relative; box-shadow: 0 18px 40px -24px rgba(15,17,21,.1); }
  .creation-format--featured { border-color: rgba(237,110,99,.4); box-shadow: 0 24px 50px -20px rgba(237,110,99,.18); }
  .creation-format__pop { position: absolute; top: -12px; left: 24px; background: var(--accent-gradient); color: #fff; padding: 6px 14px; border-radius: 999px; font-size: 11px; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 6px; }
  .creation-format__head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
  .creation-format__icon { width: 44px; height: 44px; border-radius: 12px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 18px; }
  .creation-format__delay { font-size: 12px; font-weight: 600; letter-spacing: .04em; color: #ED6E63; background: rgba(237,110,99,.1); padding: 4px 10px; border-radius: 999px; }
  .creation-format__title { font-size: 22px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 10px; }
  .creation-format__text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0 0 18px; min-height: 60px; }
  .creation-format__price { font-size: 13px; color: rgba(15,17,21,.55); margin: 0 0 18px; }
  .creation-format__price strong { display: block; font-size: 28px; color: #0f1115; font-weight: 900; letter-spacing: -.02em; margin-top: 4px; }
  .creation-format__list { list-style: none; padding: 0; margin: 0; font-size: 14px; color: rgba(15,17,21,.7); }
  .creation-format__list li { padding-left: 22px; position: relative; margin-bottom: 8px; line-height: 1.5; }
  .creation-format__list li::before { content: ''; position: absolute; left: 0; top: 7px; width: 11px; height: 6px; border-left: 2px solid #ED6E63; border-bottom: 2px solid #ED6E63; transform: rotate(-45deg); }
  @media (max-width: 900px) { .creation-formats__grid { grid-template-columns: 1fr; } }

  /* ── Tableau comparatif inclusions ──────────────────────────────────── */
  .ccrea-compare { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .ccrea-compare__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
  .ccrea-compare__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0; }
  .ccrea-compare__wrap { max-width: 1000px; margin: 0 auto; overflow-x: auto; border-radius: 24px; border: 1px solid rgba(15,17,21,.08); box-shadow: 0 24px 50px -28px rgba(15,17,21,.12); }
  .ccrea-compare__table { width: 100%; border-collapse: collapse; background: #fff; min-width: 720px; }
  .ccrea-compare__table th, .ccrea-compare__table td { padding: 16px 18px; text-align: left; font-size: 14px; border-bottom: 1px solid rgba(15,17,21,.06); }
  .ccrea-compare__table thead th { background: #F9FAFB; font-weight: 800; color: #0f1115; font-size: 13px; letter-spacing: .02em; text-transform: uppercase; }
  .ccrea-compare__table thead th:not(:first-child) { text-align: center; }
  .ccrea-compare__table tbody th { font-weight: 700; color: #0f1115; }
  .ccrea-compare__table tbody td { color: rgba(15,17,21,.75); text-align: center; }
  .ccrea-compare__table tbody tr:last-child th, .ccrea-compare__table tbody tr:last-child td { border-bottom: 0; }
  .ccrea-compare__check { display: inline-block; width: 18px; height: 18px; border-radius: 50%; background: var(--accent-gradient); color: #fff; line-height: 18px; font-size: 11px; font-weight: 900; text-align: center; }
  .ccrea-compare__dash { color: rgba(15,17,21,.3); font-weight: 600; }

  /* ── Méthodologie 6 étapes détaillée ────────────────────────────────── */
  .ccrea-steps { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .ccrea-steps__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .ccrea-steps__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0; }
  .ccrea-steps__list { list-style: none; padding: 0; margin: 0; max-width: 880px; margin-left: auto; margin-right: auto; }
  .ccrea-steps__item { background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 18px; padding: clamp(24px,2.8vw,32px); margin-bottom: 16px; display: grid; grid-template-columns: 80px 1fr; gap: 28px; align-items: start; }
  .ccrea-steps__num { font-family: 'Satoshi',sans-serif; font-weight: 900; font-size: 44px; letter-spacing: -.04em; color: #ED6E63; line-height: 1; }
  .ccrea-steps__name { font-size: 19px; font-weight: 800; letter-spacing: -.02em; color: #0f1115; margin: 0 0 10px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .ccrea-steps__duration { font-size: 11px; font-weight: 700; letter-spacing: .04em; color: #ED6E63; background: rgba(237,110,99,.1); padding: 3px 9px; border-radius: 999px; text-transform: uppercase; }
  .ccrea-steps__desc { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.65; margin: 0 0 12px; }
  .ccrea-steps__deliv { font-size: 13px; color: rgba(15,17,21,.6); display: flex; gap: 6px; align-items: flex-start; }
  .ccrea-steps__deliv strong { color: #0f1115; font-weight: 700; min-width: 76px; }
  @media (max-width: 640px) { .ccrea-steps__item { grid-template-columns: 1fr; gap: 6px; } }

  /* ── Stack technique ────────────────────────────────────────────────── */
  .ccrea-stack { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .ccrea-stack__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
  .ccrea-stack__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .ccrea-stack__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 62ch; margin: 0 auto; }
  .ccrea-stack__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; max-width: 1140px; margin: 0 auto; }
  .ccrea-stack__card { background: #fff; border: 1px solid rgba(15,17,21,.07); border-radius: 20px; padding: clamp(24px,2.6vw,30px); transition: transform .3s cubic-bezier(.16,1,.3,1), border-color .3s, box-shadow .3s; position: relative; overflow: hidden; box-shadow: 0 14px 32px -22px rgba(15,17,21,.12); }
  .ccrea-stack__card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-gradient); opacity: 0; transition: opacity .3s; }
  .ccrea-stack__card:hover { transform: translateY(-4px); border-color: rgba(237,110,99,.22); box-shadow: 0 24px 50px -22px rgba(15,17,21,.18); }
  .ccrea-stack__card:hover::before { opacity: 1; }
  .ccrea-stack__icon { width: 48px; height: 48px; border-radius: 13px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 19px; margin-bottom: 18px; box-shadow: 0 14px 26px -10px rgba(237,110,99,.45); }
  .ccrea-stack__card-name { font-size: 12px; font-weight: 800; color: rgba(15,17,21,.5); letter-spacing: .12em; text-transform: uppercase; margin: 0 0 16px; }
  .ccrea-stack__card-list { list-style: none; padding: 0; margin: 0; font-size: 14px; color: rgba(15,17,21,.78); }
  .ccrea-stack__card-list li { margin-bottom: 11px; padding-left: 26px; position: relative; line-height: 1.5; font-weight: 500; }
  .ccrea-stack__card-list li::before { content: ""; position: absolute; left: 0; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: rgba(237,110,99,.12); }
  .ccrea-stack__card-list li::after { content: ""; position: absolute; left: 4.5px; top: 7.5px; width: 6px; height: 3.5px; border-left: 1.8px solid #ED6E63; border-bottom: 1.8px solid #ED6E63; transform: rotate(-45deg); }
  @media (max-width: 900px) { .ccrea-stack__grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 540px) { .ccrea-stack__grid { grid-template-columns: 1fr; } }

  /* ── Comparatif vs autres techno ────────────────────────────────────── */
  .ccrea-vs { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .ccrea-vs__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .ccrea-vs__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .ccrea-vs__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 62ch; margin: 0 auto; }
  .ccrea-vs__wrap { max-width: 1140px; margin: 0 auto; overflow-x: auto; border-radius: 26px; border: 1px solid rgba(15,17,21,.08); box-shadow: 0 32px 60px -28px rgba(15,17,21,.18); background: #fff; }
  .ccrea-vs__table { width: 100%; border-collapse: separate; border-spacing: 0; background: #fff; min-width: 940px; font-size: 13.5px; }
  .ccrea-vs__table th, .ccrea-vs__table td { padding: 16px 14px; text-align: center; vertical-align: middle; line-height: 1.4; }
  .ccrea-vs__table thead th { background: #F9FAFB; font-weight: 800; color: rgba(15,17,21,.55); font-size: 11.5px; letter-spacing: .08em; text-transform: uppercase; padding: 22px 12px; border-bottom: 1px solid rgba(15,17,21,.08); }
  .ccrea-vs__table thead th:first-child { text-align: left; padding-left: 24px; background: #fff; }
  .ccrea-vs__table thead th.is-winner { background: var(--accent-gradient); color: #fff; position: relative; padding-top: 16px; padding-bottom: 18px; }
  .ccrea-vs__winner-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 9.5px; font-weight: 900; letter-spacing: .15em; background: rgba(255,255,255,.22); padding: 4px 9px; border-radius: 999px; margin-bottom: 9px; backdrop-filter: blur(4px); }
  .ccrea-vs__winner-badge i { font-size: 10px; color: #FFE08F; }
  .ccrea-vs__winner-title { display: block; font-size: 11.5px; font-weight: 900; color: #fff; letter-spacing: .08em; }
  .ccrea-vs__table tbody tr { transition: background .2s; }
  .ccrea-vs__table tbody tr:hover { background: rgba(15,17,21,.018); }
  .ccrea-vs__table tbody th { text-align: left; font-weight: 700; color: #0f1115; padding: 16px 22px; background: #FAFBFC; font-size: 13px; border-right: 1px solid rgba(15,17,21,.05); border-bottom: 1px solid rgba(15,17,21,.04); }
  .ccrea-vs__table tbody td { border-bottom: 1px solid rgba(15,17,21,.04); font-size: 13.5px; }
  .ccrea-vs__table tbody td.is-winner { background: linear-gradient(180deg, rgba(237,110,99,.07), rgba(237,110,99,.03)); font-weight: 700; color: #0f1115; box-shadow: inset 1.5px 0 0 rgba(237,110,99,.28), inset -1.5px 0 0 rgba(237,110,99,.28); }
  .ccrea-vs__table tbody tr:last-child td, .ccrea-vs__table tbody tr:last-child th { border-bottom: 0; }
  .ccrea-vs__table tbody tr:last-child td.is-winner { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; box-shadow: inset 1.5px 0 0 rgba(237,110,99,.28), inset -1.5px 0 0 rgba(237,110,99,.28), inset 0 -1.5px 0 rgba(237,110,99,.28); }
  .ccrea-vs__rate--top { color: #0f1115; font-weight: 800; }
  .ccrea-vs__rate--mid { color: rgba(15,17,21,.6); font-weight: 500; }
  .ccrea-vs__rate--low { color: rgba(15,17,21,.35); font-weight: 500; }

  /* ── Équipe ─────────────────────────────────────────────────────────── */
  .ccrea-team { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .ccrea-team__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
  .ccrea-team__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .ccrea-team__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .ccrea-team__intro { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.65; max-width: 56ch; margin: 0 auto; }
  .ccrea-team__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; max-width: 900px; margin: 0 auto; }
  .ccrea-team__card { background: #F9FAFB; border: 1px solid rgba(15,17,21,.06); border-radius: 22px; padding: clamp(28px,3vw,36px); text-align: center; transition: transform .25s, box-shadow .25s; }
  .ccrea-team__card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px -20px rgba(15,17,21,.12); }
  .ccrea-team__avatar { width: 110px; height: 110px; border-radius: 50%; overflow: hidden; margin: 0 auto 22px; display: block; box-shadow: 0 14px 30px -10px rgba(15,17,21,.18); border: 3px solid #fff; position: relative; }
  .ccrea-team__avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ccrea-team__name { font-size: 19px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 4px; }
  .ccrea-team__role { font-size: 13px; font-weight: 600; color: #ED6E63; margin: 0 0 12px; }
  .ccrea-team__bio { font-size: 14px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0; }
  @media (max-width: 760px) { .ccrea-team__grid { grid-template-columns: 1fr; max-width: 420px; } }

  /* ── Garanties post-livraison ───────────────────────────────────────── */
  .ccrea-guard { padding: clamp(48px,6vw,72px) 0; background: #F9FAFB; }
  .ccrea-guard__wrap { max-width: 1100px; margin: 0 auto; background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 28px; padding: clamp(36px,5vw,56px); display: grid; grid-template-columns: 1fr 1.4fr; gap: clamp(28px,4vw,56px); align-items: center; box-shadow: 0 24px 50px -28px rgba(15,17,21,.12); }
  .ccrea-guard__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .ccrea-guard__title { font-size: clamp(26px,3.2vw,38px); font-weight: 900; letter-spacing: -.03em; line-height: 1.15; color: #0f1115; margin: 0 0 14px; }
  .ccrea-guard__text { font-size: 15px; color: rgba(15,17,21,.65); line-height: 1.65; margin: 0; }
  .ccrea-guard__list { list-style: none; padding: 0; margin: 0; display: grid; gap: 14px; }
  .ccrea-guard__item { display: flex; gap: 14px; align-items: flex-start; }
  .ccrea-guard__check { flex: 0 0 auto; width: 28px; height: 28px; border-radius: 50%; background: rgba(237,110,99,.12); color: #ED6E63; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; }
  .ccrea-guard__name { font-size: 15px; font-weight: 800; color: #0f1115; margin: 0 0 2px; }
  .ccrea-guard__desc { font-size: 13.5px; color: rgba(15,17,21,.6); line-height: 1.5; margin: 0; }
  @media (max-width: 900px) { .ccrea-guard__wrap { grid-template-columns: 1fr; } }

  /* ── CTA final dans card (même style que pillier) ───────────────────── */
  .creation-cta { padding: clamp(48px,6vw,80px) 0 clamp(64px,8vw,100px); background: #fff; }
  .creation-cta__container { max-width: 980px; margin: 0 auto; padding: 0 24px; }
  .creation-cta__box { background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%); border: 1px solid rgba(237,110,99,.2); border-radius: 28px; padding: clamp(48px,7vw,80px) clamp(28px,5vw,56px); text-align: center; position: relative; overflow: hidden; box-shadow: 0 32px 60px -28px rgba(237,110,99,.22); }
  .creation-cta__box::before { content: ''; position: absolute; inset: 0; background: radial-gradient(55% 60% at 50% 0%, rgba(237,110,99,.12), transparent 70%); pointer-events: none; }
  .creation-cta__wrap { position: relative; max-width: 640px; margin: 0 auto; }
  .creation-cta__title { font-size: clamp(28px,3.6vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0 0 18px; color: #0f1115; }
  .creation-cta__text { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0 0 32px; }
  .creation-cta__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .creation-cta__btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 30px; font-size: 15px; font-weight: 800; letter-spacing: -.01em; border-radius: 999px; text-decoration: none; transition: transform .2s; }
  .creation-cta__btn--primary { background: var(--accent-gradient); color: #fff; box-shadow: 0 14px 28px -10px rgba(237,110,99,.5); }
  .creation-cta__btn--secondary { background: #fff; color: #0f1115; border: 1px solid rgba(15,17,21,.12); }
  .creation-cta__btn:hover { transform: translateY(-2px); }

  /* ── Hero : dual CTA ─────────────────────────────────────────────────── */
  .page-hero__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 8px; }
  .page-hero__btn--secondary { background: transparent !important; color: #0f1115 !important; border: 1.5px solid rgba(15,17,21,.18) !important; }
  .page-hero__btn--secondary:hover { background: #F9FAFB !important; border-color: rgba(15,17,21,.3) !important; }

  /* ── Mid-page CTA bar ───────────────────────────────────────────────── */
  .ccrea-midcta { padding: clamp(32px,5vw,56px) 0; background: #fff; }
  .ccrea-midcta__box { max-width: 1100px; margin: 0 auto; background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%); border: 1px solid rgba(237,110,99,.22); border-radius: 22px; padding: clamp(28px,4vw,40px) clamp(28px,4vw,48px); display: flex; justify-content: space-between; align-items: center; gap: 28px; box-shadow: 0 24px 50px -28px rgba(237,110,99,.18); position: relative; overflow: hidden; }
  .ccrea-midcta__box::before { content: ''; position: absolute; inset: 0; background: radial-gradient(55% 60% at 50% 0%, rgba(237,110,99,.08), transparent 70%); pointer-events: none; }
  .ccrea-midcta__left { position: relative; flex: 1; min-width: 0; }
  .ccrea-midcta__title { font-size: clamp(20px,2.4vw,26px); font-weight: 900; letter-spacing: -.02em; line-height: 1.2; color: #0f1115; margin: 0 0 8px; }
  .ccrea-midcta__text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.5; margin: 0; }
  .ccrea-midcta__btn { position: relative; flex: 0 0 auto; display: inline-flex; align-items: center; gap: 10px; padding: 15px 28px; font-size: 15px; font-weight: 800; letter-spacing: -.01em; border-radius: 999px; text-decoration: none; background: var(--accent-gradient); color: #fff; box-shadow: 0 14px 28px -10px rgba(237,110,99,.5); transition: transform .2s; white-space: nowrap; }
  .ccrea-midcta__btn:hover { transform: translateY(-2px); }
  @media (max-width: 760px) { .ccrea-midcta__box { flex-direction: column; text-align: center; } }
  /* FAQ : espace sous le titre */
  .expertise-faq__title { margin-bottom: clamp(40px, 5vw, 56px) !important; }

  /* === WOOCOMMERCE APPROFONDI === */
  .ccrea-woo { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; border-top: 1px solid rgba(15,17,21,.06); }
  .ccrea-woo__head { text-align: center; max-width: 800px; margin: 0 auto clamp(40px,5vw,56px); }
  .ccrea-woo__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.95); margin-bottom: 14px; display: inline-block; }
  .ccrea-woo__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .ccrea-woo__intro { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.65; max-width: 65ch; margin: 0 auto; }
  .ccrea-woo__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; max-width: 1120px; margin: 0 auto clamp(48px,6vw,72px); }
  .ccrea-woo__card { background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 22px; padding: clamp(24px,2.8vw,32px); transition: transform .25s, box-shadow .25s; }
  .ccrea-woo__card:hover { transform: translateY(-3px); box-shadow: 0 18px 40px -22px rgba(15,17,21,.12); }
  .ccrea-woo__card-title { font-size: 17px; font-weight: 800; letter-spacing: -.01em; color: #0f1115; margin: 0 0 12px; }
  .ccrea-woo__card-text { font-size: 14.5px; color: rgba(15,17,21,.68); line-height: 1.65; margin: 0; }
  .ccrea-woo__vs { max-width: 940px; margin: 0 auto; padding: clamp(32px,4vw,44px); background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 22px; }
  .ccrea-woo__vs-title { font-size: 22px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 18px; }
  .ccrea-woo__vs-text { font-size: 15.5px; color: rgba(15,17,21,.75); line-height: 1.7; margin: 0; }
  .ccrea-woo__vs-text strong { color: #0f1115; font-weight: 700; }
  @media (max-width: 960px) { .ccrea-woo__grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 620px) { .ccrea-woo__grid { grid-template-columns: 1fr; } }

  /* Liens des réponses de FAQ : soulignés comme .seo-about__text a (main.css ne les distingue pas du texte). */
  .expertise-faq__a a { color: #0f1115; font-weight: 600; text-decoration: underline; text-decoration-color: #E14B89; text-decoration-thickness: 1.5px; text-underline-offset: 3px; }
  .expertise-faq__a a:hover { text-decoration-color: #0f1115; }
  `;
export default css;
