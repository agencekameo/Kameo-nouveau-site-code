/* Styles communs aux 5 pages du pilier « Développement sur-mesure » (bloc <style> des gabarits). */
const css = `
:root { --accent-gradient: linear-gradient(136.79deg, #E14B89 5.13%, #F8903C 84.98%); }

/* Silo back */
.silo-back { padding: clamp(96px, 12vw, 132px) 0 20px; background: #fff; border-bottom: 1px solid rgba(15,17,21,.04); }
.silo-back__link { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: rgba(15,17,21,.55); text-decoration: none; transition: color .2s; }
.silo-back__link:hover { color: #ED6E63; }
.silo-back__link svg { width: 12px; height: 12px; }

/* Why 6-cards */
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

/* Steps */
.ccrea-steps { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
.ccrea-steps__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
.ccrea-steps__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0; }
.ccrea-steps__list { list-style: none; padding: 0; max-width: 880px; margin: 0 auto; }
.ccrea-steps__item { background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 18px; padding: clamp(24px,2.8vw,32px); margin-bottom: 16px; display: grid; grid-template-columns: 80px 1fr; gap: 28px; align-items: start; }
.ccrea-steps__num { font-family: 'Satoshi',sans-serif; font-weight: 900; font-size: 44px; letter-spacing: -.04em; color: #ED6E63; line-height: 1; }
.ccrea-steps__name { font-size: 19px; font-weight: 800; letter-spacing: -.02em; color: #0f1115; margin: 0 0 10px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.ccrea-steps__duration { font-size: 11px; font-weight: 700; letter-spacing: .04em; color: #ED6E63; background: rgba(237,110,99,.1); padding: 3px 9px; border-radius: 999px; text-transform: uppercase; }
.ccrea-steps__desc { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.65; margin: 0 0 12px; }
.ccrea-steps__deliv { font-size: 13px; color: rgba(15,17,21,.6); display: flex; gap: 6px; align-items: flex-start; }
.ccrea-steps__deliv strong { color: #0f1115; font-weight: 700; min-width: 76px; }
@media (max-width: 640px) { .ccrea-steps__item { grid-template-columns: 1fr; gap: 6px; } }

/* Stack technique */
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

/* Cas d'usage */
.ccrea-cases { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
.ccrea-cases__head { text-align: center; max-width: 720px; margin: 0 auto clamp(40px,5vw,56px); }
.ccrea-cases__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0; }
.ccrea-cases__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; max-width: 1120px; margin: 0 auto; }
.ccrea-cases__card { background: #fff; border: 1px solid rgba(15,17,21,.06); border-radius: 22px; padding: clamp(28px,3vw,36px); }
.ccrea-cases__tag { display: inline-block; background: rgba(237,110,99,.1); color: #ED6E63; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; padding: 5px 11px; border-radius: 999px; margin-bottom: 16px; }
.ccrea-cases__name { font-size: 18px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 10px; line-height: 1.3; }
.ccrea-cases__text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0; }
@media (max-width: 900px) { .ccrea-cases__grid { grid-template-columns: 1fr; } }

/* Mid CTA */
.ccrea-midcta { padding: clamp(32px,5vw,56px) 0; background: #fff; }
.ccrea-midcta__box { max-width: 1100px; margin: 0 auto; background: linear-gradient(135deg, #fff 0%, #FFF0EE 100%); border: 1px solid rgba(237,110,99,.22); border-radius: 22px; padding: clamp(28px,4vw,40px) clamp(28px,4vw,48px); display: flex; justify-content: space-between; align-items: center; gap: 28px; box-shadow: 0 24px 50px -28px rgba(237,110,99,.18); position: relative; overflow: hidden; }
.ccrea-midcta__box::before { content: ''; position: absolute; inset: 0; background: radial-gradient(55% 60% at 50% 0%, rgba(237,110,99,.08), transparent 70%); pointer-events: none; }
.ccrea-midcta__left { position: relative; flex: 1; min-width: 0; }
.ccrea-midcta__title { font-size: clamp(20px,2.4vw,26px); font-weight: 900; letter-spacing: -.02em; line-height: 1.2; color: #0f1115; margin: 0 0 8px; }
.ccrea-midcta__text { font-size: 14.5px; color: rgba(15,17,21,.65); line-height: 1.5; margin: 0; }
.ccrea-midcta__btn { position: relative; flex: 0 0 auto; display: inline-flex; align-items: center; gap: 10px; padding: 15px 28px; font-size: 15px; font-weight: 800; letter-spacing: -.01em; border-radius: 999px; text-decoration: none; background: var(--accent-gradient); color: #fff; box-shadow: 0 14px 28px -10px rgba(237,110,99,.5); transition: transform .2s; white-space: nowrap; }
.ccrea-midcta__btn:hover { transform: translateY(-2px); }
@media (max-width: 760px) { .ccrea-midcta__box { flex-direction: column; text-align: center; } }

/* Final CTA */
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

/* Hero secondary btn */
.page-hero__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 8px; }
.page-hero__btn--secondary { background: transparent !important; color: #0f1115 !important; border: 1.5px solid rgba(15,17,21,.18) !important; }
.page-hero__btn--secondary:hover { background: #F9FAFB !important; border-color: rgba(15,17,21,.3) !important; }

/* FAQ spacing */
.expertise-faq__title { margin-bottom: clamp(40px, 5vw, 56px) !important; }

/* Silo hub cards (pilier) */
.silo-hub { padding: clamp(64px,8vw,100px) 0; background: #F9FAFB; }
.silo-hub__head { text-align: center; max-width: 760px; margin: 0 auto clamp(40px,5vw,56px); }
.silo-hub__eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: rgba(237,110,99,.9); margin-bottom: 14px; display: inline-block; }
.silo-hub__title { font-size: clamp(28px,3.4vw,44px); font-weight: 900; letter-spacing: -.03em; line-height: 1.1; color: #0f1115; margin: 0 0 14px; }
.silo-hub__intro { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.65; max-width: 62ch; margin: 0 auto; }
.silo-hub__grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 22px; max-width: 1100px; margin: 0 auto; }
.silo-hub__card { background: #fff; border: 1px solid rgba(15,17,21,.08); border-radius: 22px; padding: clamp(28px,3vw,36px); text-decoration: none; color: inherit; transition: transform .25s, border-color .25s, box-shadow .25s; display: block; }
.silo-hub__card:hover { transform: translateY(-4px); border-color: rgba(237,110,99,.35); box-shadow: 0 24px 50px -20px rgba(237,110,99,.2); }
.silo-hub__card-icon { width: 52px; height: 52px; border-radius: 14px; background: var(--accent-gradient); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 22px; box-shadow: 0 14px 28px -10px rgba(237,110,99,.45); }
.silo-hub__card-title { font-size: 22px; font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 12px; line-height: 1.3; }
.silo-hub__card-text { font-size: 15px; color: rgba(15,17,21,.65); line-height: 1.6; margin: 0 0 20px; }
.silo-hub__card-link { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 800; color: #ED6E63; text-transform: uppercase; letter-spacing: .06em; }
.silo-hub__card-link svg { width: 14px; height: 14px; transition: transform .2s; }
.silo-hub__card:hover .silo-hub__card-link svg { transform: translate(2px,-2px); }
@media (max-width: 760px) { .silo-hub__grid { grid-template-columns: 1fr; } }
`;
export default css;
