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

  /* ── Symptômes ─────────────────────────────────────────────────────── */
  .refonte-symptoms { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .refonte-symptoms__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .refonte-symptoms__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0 0 14px; color: #0f1115; }
  .refonte-symptoms__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 60ch; margin: 0 auto; }
  .refonte-symptoms__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
  .refonte-symptom { background: #F9FAFB; border: 1px solid rgba(15,17,21,.06); border-radius: 18px; padding: 26px; transition: transform .25s, box-shadow .25s, border-color .25s; }
  .refonte-symptom:hover { transform: translateY(-3px); border-color: rgba(237,110,99,.25); box-shadow: 0 18px 40px -20px rgba(15,17,21,.12); }
  .refonte-symptom__icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(237,110,99,.1); color: #ED6E63; display: inline-flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 14px; }
  .refonte-symptom__title { font-size: 17px; font-weight: 800; letter-spacing: -.02em; margin: 0 0 8px; color: #0f1115; }
  .refonte-symptom__text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0; }
  @media (max-width: 900px) { .refonte-symptoms__grid { grid-template-columns: 1fr; } }

  /* ── Promesse "0 perte SEO" ────────────────────────────────────────── */
  .ref-promise { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .ref-promise__wrap { max-width: 1100px; margin: 0 auto; background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%); border: 1px solid rgba(237,110,99,.22); border-radius: 28px; padding: clamp(40px,6vw,64px) clamp(28px,5vw,56px); position: relative; overflow: hidden; box-shadow: 0 32px 60px -28px rgba(237,110,99,.2); }
  .ref-promise__wrap::before { content: ''; position: absolute; inset: 0; background: radial-gradient(55% 60% at 50% 0%, rgba(237,110,99,.12), transparent 70%); pointer-events: none; }
  .ref-promise__head { position: relative; text-align: center; max-width: 720px; margin: 0 auto clamp(36px,5vw,48px); }
  .ref-promise__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .ref-promise__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0 0 18px; color: #0f1115; }
  .ref-promise__stat { display: flex; align-items: center; gap: 20px; justify-content: center; flex-wrap: wrap; max-width: 640px; margin: 0 auto; }
  .ref-promise__num { font-family: 'Satoshi',sans-serif; font-weight: 900; font-size: clamp(56px,8vw,96px); letter-spacing: -.05em; line-height: 1; background: var(--accent-gradient); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .ref-promise__num-lbl { font-size: clamp(16px,1.8vw,20px); font-weight: 800; color: #0f1115; letter-spacing: -.01em; line-height: 1.3; text-align: left; max-width: 18ch; }
  .ref-promise__pillars { position: relative; display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-top: clamp(36px,5vw,48px); }
  .ref-promise__pillar { background: #fff; border: 1px solid rgba(15,17,21,.07); border-radius: 18px; padding: clamp(22px,2.5vw,28px); text-align: left; }
  .ref-promise__pillar-icon { width: 42px; height: 42px; border-radius: 11px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 17px; margin-bottom: 14px; box-shadow: 0 12px 22px -10px rgba(237,110,99,.45); }
  .ref-promise__pillar-name { font-size: 16px; font-weight: 800; letter-spacing: -.02em; color: #0f1115; margin: 0 0 6px; }
  .ref-promise__pillar-text { font-size: 14px; color: rgba(15,17,21,.65); line-height: 1.55; margin: 0; }
  @media (max-width: 900px) { .ref-promise__pillars { grid-template-columns: 1fr; } }

  /* ── Méthode 6 étapes détaillée ─────────────────────────────────────── */
  .refonte-method { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .refonte-method__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .refonte-method__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0; }
  .refonte-method__list { list-style: none; padding: 0; margin: 0; max-width: 880px; margin-left: auto; margin-right: auto; }
  .refonte-method__item { background: #F9FAFB; border: 1px solid rgba(15,17,21,.06); border-radius: 18px; padding: clamp(24px,2.8vw,32px); margin-bottom: 16px; display: grid; grid-template-columns: 80px 1fr; gap: 28px; align-items: start; }
  .refonte-method__num { font-family: 'Satoshi',sans-serif; font-weight: 900; font-size: 44px; letter-spacing: -.04em; color: #ED6E63; line-height: 1; }
  .refonte-method__name { font-size: 19px; font-weight: 800; letter-spacing: -.02em; color: #0f1115; margin: 0 0 10px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .refonte-method__duration { font-size: 11px; font-weight: 700; letter-spacing: .04em; color: #ED6E63; background: rgba(237,110,99,.1); padding: 3px 9px; border-radius: 999px; text-transform: uppercase; }
  .refonte-method__desc { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.65; margin: 0 0 12px; }
  .refonte-method__deliv { font-size: 13px; color: rgba(15,17,21,.6); display: flex; gap: 6px; align-items: flex-start; }
  .refonte-method__deliv strong { color: #0f1115; font-weight: 700; min-width: 76px; }
  @media (max-width: 640px) { .refonte-method__item { grid-template-columns: 1fr; gap: 6px; } }

  /* ── 3 colonnes "Garde / Améliore / Refait" ────────────────────────── */
  .ref-cols { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .ref-cols__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .ref-cols__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .ref-cols__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 62ch; margin: 0 auto; }
  .ref-cols__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; max-width: 1100px; margin: 0 auto; }
  .ref-col { background: #fff; border: 1px solid rgba(15,17,21,.07); border-radius: 22px; padding: clamp(26px,2.8vw,32px); box-shadow: 0 14px 32px -22px rgba(15,17,21,.12); transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s, border-color .3s; display: flex; flex-direction: column; position: relative; overflow: hidden; }
  .ref-col::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; }
  .ref-col--keep::before { background: linear-gradient(90deg, #22C55E, #16A34A); }
  .ref-col--imp::before { background: var(--accent-gradient); }
  .ref-col--new::before { background: linear-gradient(90deg, #64748B, #1E293B); }
  .ref-col:hover { transform: translateY(-4px); box-shadow: 0 24px 50px -22px rgba(15,17,21,.18); }
  .ref-col__head { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; padding-bottom: 20px; border-bottom: 1px solid rgba(15,17,21,.06); }
  .ref-col__icon { width: 48px; height: 48px; border-radius: 13px; display: inline-flex; align-items: center; justify-content: center; font-size: 18px; color: #fff; flex: 0 0 auto; }
  .ref-col--keep .ref-col__icon { background: linear-gradient(135deg, #22C55E, #16A34A); box-shadow: 0 14px 26px -10px rgba(34,197,94,.45); }
  .ref-col--imp .ref-col__icon { background: var(--accent-gradient); box-shadow: 0 14px 26px -10px rgba(237,110,99,.45); }
  .ref-col--new .ref-col__icon { background: linear-gradient(135deg, #475569, #1E293B); box-shadow: 0 14px 26px -10px rgba(15,17,21,.3); }
  .ref-col__title { font-size: 19px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0; line-height: 1.2; }
  .ref-col__count { font-size: 11.5px; font-weight: 700; color: rgba(15,17,21,.5); letter-spacing: .06em; text-transform: uppercase; margin-top: 3px; }
  .ref-col__list { list-style: none; padding: 0; margin: 0; font-size: 14.5px; color: rgba(15,17,21,.78); flex: 1; }
  .ref-col__list li { padding-left: 24px; position: relative; margin-bottom: 14px; line-height: 1.5; font-weight: 500; }
  .ref-col__list li::before { content: ''; position: absolute; left: 0; top: 8px; width: 9px; height: 9px; border-radius: 50%; }
  .ref-col--keep .ref-col__list li::before { background: #22C55E; box-shadow: 0 0 0 4px rgba(34,197,94,.12); }
  .ref-col--imp .ref-col__list li::before { background: #ED6E63; box-shadow: 0 0 0 4px rgba(237,110,99,.12); }
  .ref-col--new .ref-col__list li::before { background: rgba(15,17,21,.45); box-shadow: 0 0 0 4px rgba(15,17,21,.06); }
  @media (max-width: 900px) { .ref-cols__grid { grid-template-columns: 1fr; } }

  /* ── Mid-page CTA ──────────────────────────────────────────────────── */
  .ref-midcta { padding: clamp(32px,5vw,56px) 0; background: #fff; }
  .ref-midcta__box { max-width: 1100px; margin: 0 auto; background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%); border: 1px solid rgba(237,110,99,.22); border-radius: 22px; padding: clamp(28px,4vw,40px) clamp(28px,4vw,48px); display: flex; justify-content: space-between; align-items: center; gap: 28px; box-shadow: 0 24px 50px -28px rgba(237,110,99,.18); position: relative; overflow: hidden; }
  .ref-midcta__box::before { content: ''; position: absolute; inset: 0; background: radial-gradient(55% 60% at 50% 0%, rgba(237,110,99,.08), transparent 70%); pointer-events: none; }
  .ref-midcta__left { position: relative; flex: 1; min-width: 0; }
  .ref-midcta__title { font-size: clamp(20px,2.4vw,26px); font-weight: 900; letter-spacing: -.02em; line-height: 1.2; color: #0f1115; margin: 0 0 8px; }
  .ref-midcta__text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.5; margin: 0; }
  .ref-midcta__btn { position: relative; flex: 0 0 auto; display: inline-flex; align-items: center; gap: 10px; padding: 15px 28px; font-size: 15px; font-weight: 800; letter-spacing: -.01em; border-radius: 999px; text-decoration: none; background: var(--accent-gradient); color: #fff; box-shadow: 0 14px 28px -10px rgba(237,110,99,.5); transition: transform .2s; white-space: nowrap; }
  .ref-midcta__btn:hover { transform: translateY(-2px); }
  @media (max-width: 760px) { .ref-midcta__box { flex-direction: column; text-align: center; } }

  /* ── Stack outils refonte ──────────────────────────────────────────── */
  .ref-stack { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .ref-stack__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
  .ref-stack__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .ref-stack__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 62ch; margin: 0 auto; }
  .ref-stack__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; max-width: 1140px; margin: 0 auto; }
  .ref-stack__card { background: #fff; border: 1px solid rgba(15,17,21,.07); border-radius: 20px; padding: clamp(24px,2.6vw,30px); transition: transform .3s cubic-bezier(.16,1,.3,1), border-color .3s, box-shadow .3s; position: relative; overflow: hidden; box-shadow: 0 14px 32px -22px rgba(15,17,21,.12); }
  .ref-stack__card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-gradient); opacity: 0; transition: opacity .3s; }
  .ref-stack__card:hover { transform: translateY(-4px); border-color: rgba(237,110,99,.22); box-shadow: 0 24px 50px -22px rgba(15,17,21,.18); }
  .ref-stack__card:hover::before { opacity: 1; }
  .ref-stack__icon { width: 48px; height: 48px; border-radius: 13px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 19px; margin-bottom: 18px; box-shadow: 0 14px 26px -10px rgba(237,110,99,.45); }
  .ref-stack__name { font-size: 12px; font-weight: 800; color: rgba(15,17,21,.5); letter-spacing: .12em; text-transform: uppercase; margin: 0 0 16px; }
  .ref-stack__list { list-style: none; padding: 0; margin: 0; font-size: 14px; color: rgba(15,17,21,.78); }
  .ref-stack__list li { margin-bottom: 11px; padding-left: 26px; position: relative; line-height: 1.5; font-weight: 500; }
  .ref-stack__list li::before { content: ''; position: absolute; left: 0; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: rgba(237,110,99,.12); }
  .ref-stack__list li::after { content: ''; position: absolute; left: 4.5px; top: 7.5px; width: 6px; height: 3.5px; border-left: 1.8px solid #ED6E63; border-bottom: 1.8px solid #ED6E63; transform: rotate(-45deg); }
  @media (max-width: 900px) { .ref-stack__grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 540px) { .ref-stack__grid { grid-template-columns: 1fr; } }

  /* ── Cas projets refonte ───────────────────────────────────────────── */
  .ref-cases { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .ref-cases__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .ref-cases__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .ref-cases__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0; }
  .ref-cases__grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; max-width: 1100px; margin: 0 auto; }
  .ref-case { background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 22px; overflow: hidden; box-shadow: 0 24px 50px -28px rgba(15,17,21,.14); transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s; display: flex; flex-direction: column; }
  .ref-case:hover { transform: translateY(-4px); box-shadow: 0 32px 60px -28px rgba(15,17,21,.2); }
  .ref-case__link { display: flex; flex-direction: column; height: 100%; color: inherit; text-decoration: none; }
  .ref-case__visit { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 700; color: #ED6E63; margin-top: 16px; align-self: flex-start; transition: gap .2s; }
  .ref-case__visit svg { width: 12px; height: 12px; transition: transform .2s; }
  .ref-case:hover .ref-case__visit { gap: 10px; }
  .ref-case:hover .ref-case__visit svg { transform: translate(2px, -2px); }
  .ref-case__media { aspect-ratio: 16/10; background: #F9FAFB; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; }
  .ref-case__media img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ref-case__media--logo { background: linear-gradient(135deg, #FFF6F4 0%, #FFE8E2 100%); padding: 40px; }
  .ref-case__media--logo img { width: auto; height: auto; max-width: 60%; max-height: 60%; object-fit: contain; filter: drop-shadow(0 8px 20px rgba(15,17,21,.1)); }
  .ref-case__body { padding: clamp(24px,2.8vw,32px); flex: 1; display: flex; flex-direction: column; }
  .ref-case__tag { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 800; letter-spacing: .05em; color: #ED6E63; background: rgba(237,110,99,.1); border: 1px solid rgba(237,110,99,.2); padding: 4px 11px; border-radius: 999px; align-self: flex-start; text-transform: uppercase; margin-bottom: 14px; }
  .ref-case__name { font-size: 22px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 10px; }
  .ref-case__text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0 0 22px; flex: 1; }
  .ref-case__stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
  .ref-case__stat { background: #F9FAFB; border: 1px solid rgba(15,17,21,.05); border-radius: 12px; padding: 12px 8px; text-align: center; }
  .ref-case__stat-num { font-family: 'Satoshi',sans-serif; font-weight: 900; font-size: 20px; letter-spacing: -.02em; color: #0f1115; line-height: 1; display: block; }
  .ref-case__stat-lbl { font-size: 11px; color: rgba(15,17,21,.55); margin-top: 6px; line-height: 1.3; }
  @media (max-width: 760px) { .ref-cases__grid { grid-template-columns: 1fr; } }

  /* ── Équipe ────────────────────────────────────────────────────────── */
  .ref-team { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
  .ref-team__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
  .ref-team__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .ref-team__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .ref-team__intro { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.65; max-width: 56ch; margin: 0 auto; }
  .ref-team__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; max-width: 900px; margin: 0 auto; }
  .ref-team__card { background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 22px; padding: clamp(28px,3vw,36px); text-align: center; transition: transform .25s, box-shadow .25s; }
  .ref-team__card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px -20px rgba(15,17,21,.12); }
  .ref-team__avatar { width: 110px; height: 110px; border-radius: 50%; overflow: hidden; margin: 0 auto 22px; display: block; box-shadow: 0 14px 30px -10px rgba(15,17,21,.18); border: 3px solid #fff; position: relative; }
  .ref-team__avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ref-team__name { font-size: 19px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 4px; }
  .ref-team__role { font-size: 13px; font-weight: 600; color: #ED6E63; margin: 0 0 12px; }
  .ref-team__bio { font-size: 14px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0; }
  @media (max-width: 760px) { .ref-team__grid { grid-template-columns: 1fr; max-width: 420px; } }

  /* ── Refonte complète vs Rafraîchissement ──────────────────────────── */
  .ref-choice { padding: clamp(64px,8vw,100px) 0; background: #fff; }
  .ref-choice__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
  .ref-choice__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .ref-choice__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 62ch; margin: 0 auto; }
  .ref-choice__grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; max-width: 1000px; margin: 0 auto; }
  .ref-choice__card { background: #F9FAFB; border: 1px solid rgba(15,17,21,.08); border-radius: 22px; padding: clamp(28px,3vw,36px); display: flex; flex-direction: column; }
  .ref-choice__card--featured { border-color: rgba(237,110,99,.4); background: linear-gradient(135deg, #fff, #FFF6F4); box-shadow: 0 24px 50px -28px rgba(237,110,99,.18); }
  .ref-choice__name { font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: rgba(15,17,21,.55); margin: 0 0 12px; }
  .ref-choice__card--featured .ref-choice__name { color: #ED6E63; }
  .ref-choice__h3 { font-size: 22px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 12px; }
  .ref-choice__catch { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0 0 22px; }
  .ref-choice__meta { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 0 0 22px; padding: 16px; background: #fff; border-radius: 14px; border: 1px solid rgba(15,17,21,.05); }
  .ref-choice__meta-lbl { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: rgba(15,17,21,.5); margin: 0 0 4px; }
  .ref-choice__meta-val { font-size: 15px; font-weight: 800; color: #0f1115; margin: 0; letter-spacing: -.01em; }
  .ref-choice__list { list-style: none; padding: 0; margin: 0 0 24px; font-size: 14px; color: rgba(15,17,21,.7); flex: 1; }
  .ref-choice__list li { padding-left: 24px; position: relative; margin-bottom: 10px; line-height: 1.5; }
  .ref-choice__list li::before { content: ''; position: absolute; left: 0; top: 6px; width: 12px; height: 7px; border-left: 2px solid #ED6E63; border-bottom: 2px solid #ED6E63; transform: rotate(-45deg); }
  .ref-choice__when { font-size: 13px; color: rgba(15,17,21,.55); padding: 14px 16px; background: rgba(237,110,99,.05); border-radius: 12px; border-left: 3px solid #ED6E63; line-height: 1.5; }
  .ref-choice__when strong { color: #0f1115; font-weight: 700; }
  @media (max-width: 760px) { .ref-choice__grid { grid-template-columns: 1fr; } }

  /* ── Garanties post-refonte ────────────────────────────────────────── */
  .ref-guard { padding: clamp(48px,6vw,72px) 0; background: #F9FAFB; }
  .ref-guard__wrap { max-width: 1100px; margin: 0 auto; background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 28px; padding: clamp(36px,5vw,56px); display: grid; grid-template-columns: 1fr 1.4fr; gap: clamp(28px,4vw,56px); align-items: center; box-shadow: 0 24px 50px -28px rgba(15,17,21,.12); }
  .ref-guard__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
  .ref-guard__title { font-size: clamp(26px,3.2vw,38px); font-weight: 900; letter-spacing: -.03em; line-height: 1.15; color: #0f1115; margin: 0 0 14px; }
  .ref-guard__text { font-size: 15px; color: rgba(15,17,21,.65); line-height: 1.65; margin: 0; }
  .ref-guard__list { list-style: none; padding: 0; margin: 0; display: grid; gap: 14px; }
  .ref-guard__item { display: flex; gap: 14px; align-items: flex-start; }
  .ref-guard__check { flex: 0 0 auto; width: 28px; height: 28px; border-radius: 50%; background: rgba(237,110,99,.12); color: #ED6E63; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; }
  .ref-guard__name { font-size: 15px; font-weight: 800; color: #0f1115; margin: 0 0 2px; }
  .ref-guard__desc { font-size: 13.5px; color: rgba(15,17,21,.6); line-height: 1.5; margin: 0; }
  @media (max-width: 900px) { .ref-guard__wrap { grid-template-columns: 1fr; } }

  /* ── CTA final dans card ───────────────────────────────────────────── */
  .refonte-cta { padding: clamp(48px,6vw,80px) 0 clamp(64px,8vw,100px); background: #fff; }
  .refonte-cta__container { max-width: 980px; margin: 0 auto; padding: 0 24px; }
  .refonte-cta__box { background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%); border: 1px solid rgba(237,110,99,.2); border-radius: 28px; padding: clamp(48px,7vw,80px) clamp(28px,5vw,56px); text-align: center; position: relative; overflow: hidden; box-shadow: 0 32px 60px -28px rgba(237,110,99,.22); }
  .refonte-cta__box::before { content: ''; position: absolute; inset: 0; background: radial-gradient(55% 60% at 50% 0%, rgba(237,110,99,.12), transparent 70%); pointer-events: none; }
  .refonte-cta__wrap { position: relative; max-width: 640px; margin: 0 auto; }
  .refonte-cta__title { font-size: clamp(28px,3.6vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; margin: 0 0 18px; color: #0f1115; }
  .refonte-cta__text { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0 0 32px; }
  .refonte-cta__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .refonte-cta__btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 30px; font-size: 15px; font-weight: 800; letter-spacing: -.01em; border-radius: 999px; text-decoration: none; transition: transform .2s; }
  .refonte-cta__btn--primary { background: var(--accent-gradient); color: #fff; box-shadow: 0 14px 28px -10px rgba(237,110,99,.5); }
  .refonte-cta__btn--secondary { background: #fff; color: #0f1115; border: 1px solid rgba(15,17,21,.12); }
  .refonte-cta__btn:hover { transform: translateY(-2px); }

  .expertise-faq__title { margin-bottom: clamp(40px, 5vw, 56px) !important; }

  /* === 3 TYPES DE REFONTE === */
  .ref-types { padding: clamp(64px,8vw,100px) 0; background: #fff; border-top: 1px solid rgba(15,17,21,.06); }
  .ref-types__head { text-align: center; max-width: 800px; margin: 0 auto clamp(40px,5vw,56px); }
  .ref-types__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(225,75,137,.95); margin-bottom: 14px; display: inline-block; }
  .ref-types__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
  .ref-types__intro { font-size: 16px; color: rgba(15,17,21,.65); line-height: 1.65; max-width: 65ch; margin: 0 auto; }
  .ref-types__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; max-width: 1180px; margin: 0 auto clamp(40px,5vw,56px); }
  .ref-types__card { background: #F9FAFB; border: 1px solid rgba(15,17,21,.08); border-radius: 22px; padding: clamp(28px,3vw,36px); display: flex; flex-direction: column; gap: 14px; }
  .ref-types__card--featured { background: linear-gradient(180deg, rgba(225,75,137,.04), rgba(248,144,60,.04)); border-color: rgba(225,75,137,.2); }
  .ref-types__num { font-size: 36px; font-weight: 900; color: rgba(225,75,137,.85); letter-spacing: -.04em; line-height: 1; margin-bottom: 4px; }
  .ref-types__name { font-size: 20px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0; }
  .ref-types__hook { font-size: 15px; color: rgba(15,17,21,.75); line-height: 1.6; margin: 0; font-style: italic; }
  .ref-types__detail { font-size: 14.5px; color: rgba(15,17,21,.7); line-height: 1.65; margin: 0; }
  .ref-types__detail strong { color: #0f1115; font-weight: 700; }
  .ref-types__price { margin-top: auto; padding-top: 14px; border-top: 1px solid rgba(15,17,21,.08); font-size: 14px; color: #0f1115; }
  .ref-types__verdict { max-width: 900px; margin: 0 auto; padding: 28px; background: #F9FAFB; border: 1px solid rgba(15,17,21,.06); border-radius: 18px; font-size: 15.5px; line-height: 1.7; color: rgba(15,17,21,.78); text-align: center; }
  @media (max-width: 960px) { .ref-types__grid { grid-template-columns: 1fr; max-width: 560px; } }

  /* Liens des réponses de FAQ : soulignés comme .seo-about__text a (main.css ne les distingue pas du texte). */
  .expertise-faq__a a { color: #0f1115; font-weight: 600; text-decoration: underline; text-decoration-color: #E14B89; text-decoration-thickness: 1.5px; text-underline-offset: 3px; }
  .expertise-faq__a a:hover { text-decoration-color: #0f1115; }
  `;
export default css;
