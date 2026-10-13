/* Styles propres à la page (bloc <style> du gabarit WordPress). */
const css = `
:root { --accent-gradient: linear-gradient(136.79deg, #E14B89 5.13%, #F8903C 84.98%); }
.bio-hero { padding: clamp(96px,12vw,140px) 0 clamp(48px,6vw,80px); background: #fff; }
.bio-hero__grid { display: grid; grid-template-columns: 280px 1fr; gap: clamp(28px,4vw,56px); max-width: 1080px; margin: 0 auto; align-items: center; }
@media (max-width: 760px) { .bio-hero__grid { grid-template-columns: 1fr; text-align: center; } }
.bio-hero__photo { width: 100%; aspect-ratio: 1; border-radius: 24px; overflow: hidden; background: linear-gradient(135deg, #F9FAFB, #F0F0F5); border: 1px solid rgba(15,17,21,.08); display: flex; align-items: center; justify-content: center; color: rgba(15,17,21,.35); font-size: 15px; }
.bio-hero__photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.bio-hero__monogram { font-family: 'Satoshi', sans-serif; font-weight: 900; font-size: 72px; letter-spacing: -.04em; background: var(--accent-gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }
.bio-hero__eyebrow { display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #ED6E63; margin-bottom: 14px; }
.bio-hero__title { font-size: clamp(32px,4.5vw,56px); font-weight: 900; letter-spacing: -.03em; line-height: 1.05; margin: 0 0 18px; color: #0f1115; }
.bio-hero__role { font-size: clamp(15px,1.4vw,17px); color: rgba(15,17,21,.65); line-height: 1.5; margin: 0 0 24px; }
.bio-hero__links { display: flex; gap: 12px; flex-wrap: wrap; }
@media (max-width: 760px) { .bio-hero__links { justify-content: center; } }
.bio-hero__link { display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 999px; font-size: 14px; font-weight: 700; text-decoration: none; background: #F9FAFB; color: #0f1115; border: 1px solid rgba(15,17,21,.08); transition: transform .2s, border-color .2s; }
.bio-hero__link:hover { transform: translateY(-2px); border-color: rgba(237,110,99,.35); }

.bio-body { padding: clamp(48px,6vw,80px) 0; background: #F9FAFB; }
.bio-body__wrap { max-width: 720px; margin: 0 auto; }
.bio-body h2 { font-size: clamp(22px,2.4vw,30px); font-weight: 900; letter-spacing: -.02em; color: #0f1115; margin: 0 0 16px; }
.bio-body h2 + p { margin-top: 0; }
.bio-body p { font-size: 16px; line-height: 1.7; color: rgba(15,17,21,.75); margin: 0 0 20px; }
.bio-body ul { padding-left: 24px; margin: 0 0 32px; }
.bio-body ul li { margin-bottom: 10px; font-size: 15.5px; line-height: 1.6; color: rgba(15,17,21,.75); }
.bio-body__section { margin-bottom: clamp(40px,5vw,56px); }
`;
export default css;
