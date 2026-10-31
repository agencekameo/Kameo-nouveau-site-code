/* Styles propres à la page (bloc <style> du gabarit WordPress). */
const css = `
  :root { --accent-gradient: linear-gradient(136.79deg, #E14B89 5.13%, #F8903C 84.98%); }

  /* ── Breadcrumb retour pillier ─────────────────────────────────────── */
  .silo-back { padding: clamp(96px, 12vw, 132px) 0 20px; background: #fff; border-bottom: 1px solid rgba(15,17,21,.04); }
  .silo-back__link { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: rgba(15,17,21,.55); text-decoration: none; transition: color .2s; }
  .silo-back__link:hover { color: #ED6E63; }
  .silo-back__link svg { width: 12px; height: 12px; }

  /* ── Hero dual CTA ─────────────────────────────────────────────────── */
  .page-hero__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 8px; }
  .page-hero__btn--secondary { background: transparent !important; color: #0f1115 !important; border: 1.5px solid rgba(15,17,21,.18) !important; }
  .page-hero__btn--secondary:hover { background: #F9FAFB !important; border-color: rgba(15,17,21,.3) !important; }

  /* ── Pourquoi maintenir (LSI éducatif) ─────────────────────────────── */
  .maint-why { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .maint-why__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-why__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .maint-why__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0 0 14px; color: #0f1115; }
  .maint-why__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 60ch; margin: 0 auto; }
  .maint-why__intro strong { color: #0f1115; font-weight: 700; }
  .maint-why__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; max-width: 1100px; margin: 0 auto; }
  .maint-why__card { background: #F9FAFB; border: 1px solid rgba(15,17,21,.06); border-radius: 18px; padding: clamp(22px,2.5vw,28px); transition: transform .25s, box-shadow .25s, border-color .25s; }
  .maint-why__card:hover { transform: translateY(-3px); border-color: rgba(237,110,99,.22); box-shadow: 0 18px 40px -20px rgba(15,17,21,.12); }
  .maint-why__icon { width: 44px; height: 44px; border-radius: 12px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 17px; margin-bottom: 18px; box-shadow: 0 12px 22px -10px rgba(237,110,99,.45); }
  .maint-why__name { font-size: 17px; font-weight: 800; letter-spacing: -.02em; color: #0f1115; margin: 0 0 8px; line-height: 1.3; }
  .maint-why__text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0; }
  @media (max-width: 900px) { .maint-why__grid { grid-template-columns: 1fr; } }

  /* ── Ce qu'inclut un forfait (services génériques) ─────────────────── */
  .maint-included { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .maint-included__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-included__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .maint-included__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 60ch; margin: 0 auto; }
  .maint-included__grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 18px; max-width: 1000px; margin: 0 auto; }
  .maint-incl { background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 16px; padding: 22px 26px; display: flex; gap: 18px; align-items: flex-start; transition: transform .25s, box-shadow .25s; }
  .maint-incl:hover { transform: translateY(-2px); box-shadow: 0 14px 32px -22px rgba(15,17,21,.12); }
  .maint-incl__icon { width: 40px; height: 40px; min-width: 40px; border-radius: 11px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 16px; box-shadow: 0 12px 22px -10px rgba(237,110,99,.4); }
  .maint-incl__name { font-size: 16px; font-weight: 800; letter-spacing: -.02em; margin: 0 0 6px; color: #0f1115; }
  .maint-incl__text { font-size: 14px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0; }
  @media (max-width: 700px) { .maint-included__grid { grid-template-columns: 1fr; } }

  /* ── Comparatif "Kameo vs DIY vs hébergeur managé" ─────────────────── */
  .maint-vs { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .maint-vs__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-vs__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .maint-vs__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 62ch; margin: 0 auto; }
  .maint-vs__wrap { max-width: 1100px; margin: 0 auto; overflow-x: auto; border-radius: 26px; border: 1px solid rgba(15,17,21,.08); background: #fff; box-shadow: 0 32px 60px -28px rgba(15,17,21,.18); }
  .maint-vs__table { width: 100%; border-collapse: separate; border-spacing: 0; min-width: 820px; font-size: 13.5px; }
  .maint-vs__table th, .maint-vs__table td { padding: 16px 16px; text-align: center; vertical-align: middle; line-height: 1.4; }
  .maint-vs__table thead th { background: #F9FAFB; font-weight: 800; color: rgba(15,17,21,.55); font-size: 11.5px; letter-spacing: .08em; text-transform: uppercase; padding: 20px 14px; border-bottom: 1px solid rgba(15,17,21,.08); }
  .maint-vs__table thead th:first-child { text-align: left; padding-left: 24px; background: #fff; }
  .maint-vs__table thead th.is-winner { background: var(--accent-gradient); color: #fff; position: relative; padding-top: 14px; padding-bottom: 18px; }
  .maint-vs__winner-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 9.5px; font-weight: 900; letter-spacing: .15em; background: rgba(255,255,255,.22); padding: 4px 9px; border-radius: 999px; margin-bottom: 9px; }
  .maint-vs__winner-badge i { font-size: 10px; color: #FFE08F; }
  .maint-vs__winner-title { display: block; font-size: 11.5px; font-weight: 900; color: #fff; letter-spacing: .08em; }
  .maint-vs__table tbody tr { transition: background .2s; }
  .maint-vs__table tbody tr:hover { background: rgba(15,17,21,.018); }
  .maint-vs__table tbody th { text-align: left; font-weight: 700; color: #0f1115; padding: 16px 22px; background: #FAFBFC; font-size: 13px; border-right: 1px solid rgba(15,17,21,.05); border-bottom: 1px solid rgba(15,17,21,.04); }
  .maint-vs__table tbody td { border-bottom: 1px solid rgba(15,17,21,.04); }
  .maint-vs__table tbody td.is-winner { background: linear-gradient(180deg, rgba(237,110,99,.07), rgba(237,110,99,.03)); font-weight: 700; color: #0f1115; box-shadow: inset 1.5px 0 0 rgba(237,110,99,.28), inset -1.5px 0 0 rgba(237,110,99,.28); }
  .maint-vs__table tbody tr:last-child th, .maint-vs__table tbody tr:last-child td { border-bottom: 0; }
  .maint-vs__rate--top { color: #0f1115; font-weight: 800; }
  .maint-vs__rate--mid { color: rgba(15,17,21,.6); font-weight: 500; }
  .maint-vs__rate--low { color: rgba(15,17,21,.35); font-weight: 500; }

  /* ── 3 forfaits (cards) ────────────────────────────────────────────── */
  .maint-plans { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .maint-plans__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-plans__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .maint-plans__intro { font-size: 15px; color: rgba(15,17,21,.65); max-width: 56ch; margin: 0 auto; line-height: 1.6; }
  .maint-plans__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; max-width: 1100px; margin: 0 auto; }
  .maint-plan { background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 22px; padding: clamp(26px,3vw,34px); display: flex; flex-direction: column; box-shadow: 0 18px 40px -24px rgba(15,17,21,.12); position: relative; transition: transform .3s, box-shadow .3s; }
  .maint-plan:hover { transform: translateY(-3px); box-shadow: 0 24px 50px -22px rgba(15,17,21,.18); }
  .maint-plan--featured { border-color: rgba(237,110,99,.4); box-shadow: 0 24px 50px -20px rgba(237,110,99,.22); }
  .maint-plan__badge { position: absolute; top: -12px; left: 24px; background: var(--accent-gradient); color: #fff; padding: 6px 14px; border-radius: 999px; font-size: 11px; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 6px; }
  .maint-plan__name { font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: rgba(15,17,21,.55); margin: 0 0 12px; }
  .maint-plan--featured .maint-plan__name { color: #ED6E63; }
  .maint-plan__price { font-family: 'Satoshi',sans-serif; font-weight: 900; font-size: 42px; letter-spacing: -.04em; margin: 0 0 4px; line-height: 1; color: #0f1115; }
  .maint-plan__price small { font-size: 14px; font-weight: 600; color: rgba(15,17,21,.55); margin-left: 4px; letter-spacing: 0; }
  .maint-plan__catch { font-size: 14px; color: rgba(15,17,21,.6); margin: 0 0 24px; line-height: 1.5; }
  .maint-plan__sla { display: inline-flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 700; color: #ED6E63; background: rgba(237,110,99,.1); padding: 5px 11px; border-radius: 999px; margin-bottom: 22px; align-self: flex-start; letter-spacing: .02em; }
  .maint-plan__list { list-style: none; padding: 0; margin: 0 0 28px; font-size: 14px; color: rgba(15,17,21,.75); flex: 1; }
  .maint-plan__list li { padding-left: 24px; position: relative; margin-bottom: 10px; line-height: 1.5; }
  .maint-plan__list li::before { content: ''; position: absolute; left: 0; top: 6px; width: 12px; height: 7px; border-left: 2px solid #ED6E63; border-bottom: 2px solid #ED6E63; transform: rotate(-45deg); }
  .maint-plan__list li.muted { color: rgba(15,17,21,.32); }
  .maint-plan__list li.muted::before { border-color: rgba(15,17,21,.18); }
  .maint-plan__cta { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 22px; background: var(--accent-gradient); color: #fff; font-weight: 800; border-radius: 999px; text-decoration: none; font-size: 14px; box-shadow: 0 12px 24px -10px rgba(237,110,99,.5); transition: transform .2s; }
  .maint-plan__cta:hover { transform: translateY(-2px); }
  @media (max-width: 900px) { .maint-plans__grid { grid-template-columns: 1fr; max-width: 480px; } }

  /* ── Tableau inclusions détaillé ───────────────────────────────────── */
  .maint-table { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .maint-table__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-table__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0; }
  .maint-table__wrap { max-width: 1100px; margin: 0 auto; overflow-x: auto; border-radius: 26px; border: 1px solid rgba(15,17,21,.08); background: #fff; box-shadow: 0 32px 60px -28px rgba(15,17,21,.18); }
  .maint-table__table { width: 100%; border-collapse: separate; border-spacing: 0; min-width: 820px; font-size: 13.5px; }
  .maint-table__table thead th { padding: 22px 14px; font-size: 11.5px; font-weight: 800; color: rgba(15,17,21,.55); letter-spacing: .08em; text-transform: uppercase; background: #FAFBFC; border-bottom: 1px solid rgba(15,17,21,.08); text-align: center; vertical-align: top; }
  .maint-table__table thead th:first-child { text-align: left; padding-left: 24px; background: #fff; }
  .maint-table__table thead th.is-featured { background: linear-gradient(180deg, rgba(237,110,99,.12), rgba(237,110,99,.05)); color: #ED6E63; }
  .maint-table__table tbody tr { transition: background .2s; }
  .maint-table__table tbody tr:hover { background: rgba(15,17,21,.018); }
  .maint-table__table tbody th { padding: 14px 22px; font-weight: 700; color: #0f1115; font-size: 13px; background: #FAFBFC; border-right: 1px solid rgba(15,17,21,.05); border-bottom: 1px solid rgba(15,17,21,.04); text-align: left; }
  .maint-table__table tbody td { padding: 14px 14px; text-align: center; border-bottom: 1px solid rgba(15,17,21,.04); color: rgba(15,17,21,.75); }
  .maint-table__table tbody td.is-featured { background: rgba(237,110,99,.03); font-weight: 700; color: #0f1115; }
  .maint-table__table tbody tr:last-child th, .maint-table__table tbody tr:last-child td { border-bottom: 0; }
  .maint-table__check { color: #16A34A; font-weight: 900; font-size: 14px; }
  .maint-table__dash { color: rgba(15,17,21,.3); font-weight: 600; }

  /* ── Mid-page CTA ──────────────────────────────────────────────────── */
  .maint-midcta { padding: clamp(32px,5vw,56px) 0; background: #F9FAFB; }
  .maint-midcta__box { max-width: 1100px; margin: 0 auto; background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%); border: 1px solid rgba(237,110,99,.22); border-radius: 22px; padding: clamp(28px,4vw,40px) clamp(28px,4vw,48px); display: flex; justify-content: space-between; align-items: center; gap: 28px; box-shadow: 0 24px 50px -28px rgba(237,110,99,.18); position: relative; overflow: hidden; }
  .maint-midcta__box::before { content: ''; position: absolute; inset: 0; background: radial-gradient(55% 60% at 50% 0%, rgba(237,110,99,.08), transparent 70%); pointer-events: none; }
  .maint-midcta__left { position: relative; flex: 1; min-width: 0; }
  .maint-midcta__title { font-size: clamp(20px,2.4vw,26px); font-weight: 900; letter-spacing: -.02em; line-height: 1.2; color: #0f1115; margin: 0 0 8px; }
  .maint-midcta__text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.5; margin: 0; }
  .maint-midcta__btn { position: relative; flex: 0 0 auto; display: inline-flex; align-items: center; gap: 10px; padding: 15px 28px; font-size: 15px; font-weight: 800; letter-spacing: -.01em; border-radius: 999px; text-decoration: none; background: var(--accent-gradient); color: #fff; box-shadow: 0 14px 28px -10px rgba(237,110,99,.5); transition: transform .2s; white-space: nowrap; }
  .maint-midcta__btn:hover { transform: translateY(-2px); }
  @media (max-width: 760px) { .maint-midcta__box { flex-direction: column; text-align: center; } }

  /* ── Cas d'usage ───────────────────────────────────────────────────── */
  .maint-cases { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .maint-cases__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-cases__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .maint-cases__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .maint-cases__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 60ch; margin: 0 auto; }
  .maint-cases__grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 22px; max-width: 1100px; margin: 0 auto; }
  .maint-case { background: #F9FAFB; border: 1px solid rgba(15,17,21,.07); border-radius: 22px; padding: clamp(26px,2.8vw,32px); transition: transform .25s, box-shadow .25s, border-color .25s; position: relative; overflow: hidden; }
  .maint-case::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--accent-gradient); opacity: 0; transition: opacity .3s; }
  .maint-case:hover { transform: translateY(-4px); border-color: rgba(237,110,99,.25); box-shadow: 0 24px 50px -22px rgba(15,17,21,.15); background: #fff; }
  .maint-case:hover::before { opacity: 1; }
  .maint-case__head { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
  .maint-case__icon { width: 46px; height: 46px; border-radius: 12px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 18px; flex: 0 0 auto; box-shadow: 0 12px 22px -10px rgba(237,110,99,.45); }
  .maint-case__tag { font-size: 11px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; color: rgba(237,110,99,.85); margin: 0; }
  .maint-case__quote { font-size: 17px; font-weight: 700; letter-spacing: -.01em; color: #0f1115; margin: 0 0 14px; line-height: 1.4; font-style: italic; }
  .maint-case__quote::before { content: '« '; color: rgba(237,110,99,.5); }
  .maint-case__quote::after { content: ' »'; color: rgba(237,110,99,.5); }
  .maint-case__body { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.65; margin: 0 0 12px; }
  .maint-case__action { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #0f1115; padding: 12px 16px; background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 12px; }
  .maint-case__action i { color: #ED6E63; }
  @media (max-width: 760px) { .maint-cases__grid { grid-template-columns: 1fr; } }

  /* ── Stack outils ─────────────────────────────────────────────────── */
  .maint-stack { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .maint-stack__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-stack__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .maint-stack__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 62ch; margin: 0 auto; }
  .maint-stack__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; max-width: 1140px; margin: 0 auto; }
  .maint-stack__card { background: #fff; border: 1px solid rgba(15,17,21,.07); border-radius: 20px; padding: clamp(24px,2.6vw,30px); transition: transform .3s, border-color .3s, box-shadow .3s; position: relative; overflow: hidden; box-shadow: 0 14px 32px -22px rgba(15,17,21,.12); }
  .maint-stack__card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-gradient); opacity: 0; transition: opacity .3s; }
  .maint-stack__card:hover { transform: translateY(-4px); border-color: rgba(237,110,99,.22); box-shadow: 0 24px 50px -22px rgba(15,17,21,.18); }
  .maint-stack__card:hover::before { opacity: 1; }
  .maint-stack__icon { width: 48px; height: 48px; border-radius: 13px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 19px; margin-bottom: 18px; box-shadow: 0 14px 26px -10px rgba(237,110,99,.45); }
  .maint-stack__name { font-size: 12px; font-weight: 800; color: rgba(15,17,21,.5); letter-spacing: .12em; text-transform: uppercase; margin: 0 0 16px; }
  .maint-stack__list { list-style: none; padding: 0; margin: 0; font-size: 14px; color: rgba(15,17,21,.78); }
  .maint-stack__list li { margin-bottom: 11px; padding-left: 26px; position: relative; line-height: 1.5; font-weight: 500; }
  .maint-stack__list li::before { content: ''; position: absolute; left: 0; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: rgba(237,110,99,.12); }
  .maint-stack__list li::after { content: ''; position: absolute; left: 4.5px; top: 7.5px; width: 6px; height: 3.5px; border-left: 1.8px solid #ED6E63; border-bottom: 1.8px solid #ED6E63; transform: rotate(-45deg); }
  @media (max-width: 900px) { .maint-stack__grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 540px) { .maint-stack__grid { grid-template-columns: 1fr; } }

  /* ── Reprise de site existant (4 étapes) ───────────────────────────── */
  .maint-take { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .maint-take__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-take__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .maint-take__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .maint-take__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 62ch; margin: 0 auto; }
  .maint-take__intro strong { color: #0f1115; font-weight: 700; }
  .maint-take__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; max-width: 1140px; margin: 0 auto; position: relative; }
  .maint-take__step { background: #F9FAFB; border: 1px solid rgba(15,17,21,.07); border-radius: 18px; padding: clamp(24px,2.6vw,30px); transition: transform .25s, box-shadow .25s, border-color .25s; }
  .maint-take__step:hover { transform: translateY(-3px); border-color: rgba(237,110,99,.25); box-shadow: 0 18px 40px -20px rgba(15,17,21,.12); }
  .maint-take__num { font-family: 'Satoshi',sans-serif; font-weight: 900; font-size: 36px; letter-spacing: -.04em; color: #ED6E63; line-height: 1; margin-bottom: 14px; display: block; }
  .maint-take__name { font-size: 17px; font-weight: 800; letter-spacing: -.02em; color: #0f1115; margin: 0 0 8px; line-height: 1.3; }
  .maint-take__text { font-size: 14px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0; }
  @media (max-width: 900px) { .maint-take__grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 540px) { .maint-take__grid { grid-template-columns: 1fr; } }

  /* ── Équipe ────────────────────────────────────────────────────────── */
  .maint-team { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .maint-team__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-team__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .maint-team__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .maint-team__intro { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.65; max-width: 56ch; margin: 0 auto; }
  .maint-team__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; max-width: 900px; margin: 0 auto; }
  .maint-team__card { background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 22px; padding: clamp(28px,3vw,36px); text-align: center; transition: transform .25s, box-shadow .25s; }
  .maint-team__card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px -20px rgba(15,17,21,.12); }
  .maint-team__avatar { width: 110px; height: 110px; border-radius: 50%; overflow: hidden; margin: 0 auto 22px; display: block; box-shadow: 0 14px 30px -10px rgba(15,17,21,.18); border: 3px solid #fff; position: relative; }
  .maint-team__avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .maint-team__name { font-size: 19px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 4px; }
  .maint-team__role { font-size: 13px; font-weight: 600; color: #ED6E63; margin: 0 0 12px; }
  .maint-team__bio { font-size: 14px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0; }
  @media (max-width: 760px) { .maint-team__grid { grid-template-columns: 1fr; max-width: 420px; } }

  /* ── CTA final dans card ───────────────────────────────────────────── */
  .maint-cta { padding: clamp(48px,6vw,80px) 0 clamp(64px,8vw,100px); background: #fff; }
  .maint-cta__container { max-width: 980px; margin: 0 auto; padding: 0 24px; }
  .maint-cta__box { background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%); border: 1px solid rgba(237,110,99,.2); border-radius: 28px; padding: clamp(48px,7vw,80px) clamp(28px,5vw,56px); text-align: center; position: relative; overflow: hidden; box-shadow: 0 32px 60px -28px rgba(237,110,99,.22); }
  .maint-cta__box::before { content: ''; position: absolute; inset: 0; background: radial-gradient(55% 60% at 50% 0%, rgba(237,110,99,.12), transparent 70%); pointer-events: none; }
  .maint-cta__wrap { position: relative; max-width: 640px; margin: 0 auto; }
  .maint-cta__title { font-size: clamp(28px,3.6vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0 0 18px; color: #0f1115; }
  .maint-cta__text { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0 0 32px; }
  .maint-cta__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .maint-cta__btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 30px; font-size: 15px; font-weight: 800; letter-spacing: -.01em; border-radius: 999px; text-decoration: none; transition: transform .2s; }
  .maint-cta__btn--primary { background: var(--accent-gradient); color: #fff; box-shadow: 0 14px 28px -10px rgba(237,110,99,.5); }
  .maint-cta__btn--secondary { background: #fff; color: #0f1115; border: 1px solid rgba(15,17,21,.12); }
  .maint-cta__btn:hover { transform: translateY(-2px); }

  .expertise-faq__title { margin-bottom: clamp(40px, 5vw, 56px) !important; }

  /* === PLUGINS CRITIQUES === */
  .maint-plugins { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; border-top: 1px solid rgba(15,17,21,.06); }
  .maint-plugins__head { text-align: center; max-width: 820px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-plugins__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(225,75,137,.95); margin-bottom: 14px; display: inline-block; }
  .maint-plugins__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .maint-plugins__intro { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.65; max-width: 65ch; margin: 0 auto; }
  .maint-plugins__grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 18px; max-width: 1080px; margin: 0 auto clamp(40px,5vw,56px); }
  .maint-plugin-card { background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 18px; padding: clamp(22px,2.6vw,28px); transition: transform .25s, box-shadow .25s; }
  .maint-plugin-card:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -18px rgba(15,17,21,.12); }
  .maint-plugin-card__name { font-size: 17px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 6px; }
  .maint-plugin-card__ex { font-size: 13px; font-weight: 600; color: #E14B89; margin: 0 0 10px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
  .maint-plugin-card__why { font-size: 14px; color: rgba(15,17,21,.68); line-height: 1.65; margin: 0; }
  .maint-plugins__verdict { max-width: 900px; margin: 0 auto; padding: 28px; background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 18px; font-size: 15.5px; line-height: 1.7; color: rgba(15,17,21,.78); text-align: center; }
  @media (max-width: 760px) { .maint-plugins__grid { grid-template-columns: 1fr; max-width: 520px; } }

  /* Liens des réponses de FAQ : soulignés comme .seo-about__text a (main.css ne les distingue pas du texte). */
  .expertise-faq__a a { color: #0f1115; font-weight: 600; text-decoration: underline; text-decoration-color: #E14B89; text-decoration-thickness: 1.5px; text-underline-offset: 3px; }
  .expertise-faq__a a:hover { text-decoration-color: #0f1115; }
  `;
export default css;
