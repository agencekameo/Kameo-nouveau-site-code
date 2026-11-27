/*
 * Corps de la landing /visibilite-ia/ (accompagnement GEO, fond blanc). Pensée d'abord pour le téléphone : le
 * trafic vient des publicités (Meta, LinkedIn, Google) et se lit surtout sur mobile. Une idée par écran, une ligne
 * de texte par carte, une mini-illustration par idée (comme /appel-strategique/), un seul appel à l'action : le
 * diagnostic gratuit (Calendly).
 * Composant serveur, rien n'exige JavaScript : sur mobile, le choix de formule est un groupe de boutons radio.
 * Faits et chiffres : src/content/geo.ts et src/lib/site.ts (prix, offre, formules, engagements, FAQ) ; relevés
 * clients et chiffre Arcom repris de /agence-geo/. L'offre Black Friday est une couche : chaque élément d'offre
 * ([data-vi-promo]) a son équivalent permanent ([data-vi-nopromo], rendu masqué), Countdown bascule à l'échéance.
 * Icônes : sprite du site (/icons.svg). Illustrations : HTML et CSS décoratifs (aria-hidden), sans chiffre inventé.
 * Toutes les classes sont préfixées vi- (styles.ts).
 */
import type { CSSProperties, ReactNode } from 'react';
import CookieSettingsLink from '@/components/consent/CookieSettingsLink';
import { fr } from '@/components/geo/GeoBlocks';
import Countdown from '@/components/landing-geo/Countdown';
import {
  GEO_ENGINES,
  GEO_PROMO,
  auditsGeo,
  euros,
  faqAccompagnement,
  faqAgence,
  noteEngagementGeo,
  plansGeo,
  prixBarre,
  prixDuJour,
  promoGeoActive,
  remiseGeoUniforme,
  remiseMaxGeo,
  type FaqItem,
  type GeoOffer,
} from '@/content/geo';
import { CONTACT, PROOF, SOCIAL } from '@/lib/site';

const nb = ' ';

/** Prix jamais coupés en fin de ligne : euros() de geo.ts met une espace normale. */
const eur = (n: number) => euros(n).replace(/ /g, nb);
/** « 30/11 » tiré de GEO_PROMO.fin, jamais écrit en dur. */
const JOUR_MOIS_FIN = `${GEO_PROMO.fin.slice(8, 10)}/${GEO_PROMO.fin.slice(5, 7)}`;
/** Texte lu dans geo.ts : espaces insécables (fr), apostrophes typographiques (hors balises HTML). */
const t = (s: string) => fr(s).replace(/'(?![^<]*>)/g, '’');

/** Message prérempli de WhatsApp, le même partout sur la page (bouton flottant, final, barre mobile). */
export const MESSAGE_WA = 'Bonjour Kameo, je voudrais savoir ce que les IA disent de mon entreprise.';
const WA_HREF = `${CONTACT.whatsapp}?text=${encodeURIComponent(MESSAGE_WA)}`;
const TEL_HREF = `tel:${CONTACT.phoneE164}`;
const FABRIQUE_URL = 'https://www.lafabriquedunet.fr/agences/pages/agences-geo-ile-de-france-paris';
const ARCOM_URL =
  'https://www.arcom.fr/en/find-out-more/studies-and-data/studies-reviews-and-reports/artificial-intelligence-services-audience-barometer-1st-edition';

/* ───────────────────────── Icônes ───────────────────────── */

/** Icône du sprite du site (public/icons.svg, symboles i-*). */
const Icon = ({ id, className = '' }: { id: string; className?: string }) => (
  <svg className={'vi-i ' + className} aria-hidden="true" focusable="false">
    <use href={`/icons.svg#i-${id}`} />
  </svg>
);
/** Pastille d'icône (fond teinté, icône en dégradé). */
const Tile = ({ id, sm }: { id: string; sm?: boolean }) => (
  <span className={'vi-tile' + (sm ? ' vi-tile--sm' : '')} aria-hidden="true">
    <Icon id={id} />
  </span>
);

const Ico = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <svg className={'vi-ico ' + className} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    {children}
  </svg>
);
const IArrow = () => (
  <Ico>
    <path d="M4 10h11M11 5.5l4.5 4.5-4.5 4.5" />
  </Ico>
);
const ICheck = () => (
  <Ico className="vi-check">
    <path d="M4.5 10.5l3.5 3.5 7.5-8" />
  </Ico>
);
const IPhone = () => (
  <Ico>
    <path d="M6.6 3.5H4.8c-.7 0-1.3.6-1.2 1.3.6 6 5.4 10.8 11.4 11.4.7.1 1.3-.5 1.3-1.2v-1.8c0-.5-.4-1-.9-1.1l-2.3-.5c-.4-.1-.8 0-1.1.3l-.9.9a9.6 9.6 0 0 1-3.6-3.6l.9-.9c.3-.3.4-.7.3-1.1l-.5-2.3c-.1-.5-.6-.9-1.1-.9z" />
  </Ico>
);
const IStar = () => (
  <svg className="vi-star" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.8l-5.1 2.7 1-5.7-4.1-4 5.7-.8z" />
  </svg>
);
const Stars = () => (
  <span className="vi-stars" aria-hidden="true">
    <IStar />
    <IStar />
    <IStar />
    <IStar />
    <IStar />
  </span>
);
const IWhatsApp = () => (
  <svg className="vi-wa-ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2.2A9.7 9.7 0 0 0 3.6 16.8L2.3 21.7l5-1.3A9.7 9.7 0 1 0 12 2.2zm0 17.7c-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3c-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.6-.4z" />
  </svg>
);

/* ───────────────────────── Briques ───────────────────────── */

/** Lien externe : nouvel onglet, annoncé aux lecteurs d'écran. */
function Ext({ href, children, className, label, cta }: { href: string; children: ReactNode; className?: string; label?: string; cta?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener" className={className} aria-label={label} data-cta={cta}>
      {children}
      {!label && <span className="sr-only"> (nouvel onglet)</span>}
    </a>
  );
}

/** Bouton principal : lien Calendly (ouvert dans la fenêtre CalendlyModal), texte encre sur le dégradé. */
function Cta({ cta, children, size, outline, label, sub }: { cta: string; children: ReactNode; size?: 'lg'; outline?: boolean; label?: string; sub?: ReactNode }) {
  const cls = ['vi-btn', size && `vi-btn--${size}`, outline && 'vi-btn--outline'].filter(Boolean).join(' ');
  return (
    <a className={cls} href={CONTACT.calendly} data-cta={cta} aria-label={label}>
      <span className="vi-btn__txt">
        <span className="vi-btn__main">{children}</span>
        {sub && <span className="vi-btn__sub">{sub}</span>}
      </span>
      <span className="vi-btn__arrow" aria-hidden="true">
        <IArrow />
      </span>
    </a>
  );
}

const SUB_CTA = <>Diagnostic gratuit · 30&nbsp;min en visio</>;

/** Note Trustpilot : la même pastille au-dessus du titre et sous l'équipe. */
const TrustBadge = () => (
  <Ext href={SOCIAL.trustpilot} className="vi-badge">
    <Stars />
    <span>
      <strong>{PROOF.avisNote}/5</strong> Trustpilot · {PROOF.avisNombre}&nbsp;avis
    </span>
  </Ext>
);

function Head({ id, eyebrow, children, sub }: { id: string; eyebrow: string; children: ReactNode; sub?: ReactNode }) {
  return (
    <header className="vi-head" data-vi-reveal="">
      <p className="vi-eyebrow">{eyebrow}</p>
      <h2 className="vi-h2" id={id}>
        {children}
      </h2>
      {sub && <p className="vi-sub">{sub}</p>}
    </header>
  );
}

/** L'emplacement « Votre entreprise ? » : cadre en pointillés dégradés (motif de la page). */
function Slot({ children = <>Votre entreprise&nbsp;?</>, sm }: { children?: ReactNode; sm?: boolean }) {
  return (
    <span className={'vi-slot' + (sm ? ' vi-slot--sm' : '')}>
      <svg className="vi-slot__frame" aria-hidden="true" focusable="false">
        <rect x="0" y="0" width="100%" height="100%" rx="12" ry="12" />
      </svg>
      <span className="vi-slot__q" aria-hidden="true">
        <span>?</span>
      </span>
      <span className="vi-slot__label">{children}</span>
    </span>
  );
}

/* ───────────────────────── Mini-illustrations (décoratives) ───────────────────────── */

function Illu({ kind }: { kind: 'ask' | 'answer' | 'call' | 'measure' | 'fix' | 'authority' }) {
  return (
    <div className={`vi-illu vi-illu--${kind}`} aria-hidden="true">
      {kind === 'ask' && (
        <div className="vi-mini-ask">
          <span className="vi-mini-ask__ia">IA</span>
          <span className="vi-mini-ask__txt">Qui me conseilles-tu&nbsp;?</span>
          <span className="vi-mini-ask__send">
            <IArrow />
          </span>
        </div>
      )}
      {kind === 'answer' && (
        <div className="vi-mini-list">
          {['A', 'B', 'C'].map((l, i) => (
            <span key={l} className="vi-mini-list__row" style={{ '--w': `${70 - i * 12}%` } as CSSProperties}>
              <b>{l}</b>
              <i />
            </span>
          ))}
          <Slot sm>Vous&nbsp;?</Slot>
        </div>
      )}
      {kind === 'call' && (
        <div className="vi-mini-call">
          <span className="vi-mini-call__pill">
            <Icon id="solid-phone" />
            Appel · Entreprise&nbsp;A
          </span>
          <span className="vi-mini-call__stat">
            <span>Votre site</span>
            <b>aucune visite</b>
          </span>
        </div>
      )}
      {kind === 'measure' && (
        <div className="vi-mini-bars">
          {GEO_ENGINES.map((e, i) => (
            <span key={e} className="vi-mini-bars__row">
              <span>{e}</span>
              <i style={{ '--w': `${[62, 28, 46, 36][i % 4]}%` } as CSSProperties} />
            </span>
          ))}
        </div>
      )}
      {kind === 'fix' && (
        <div className="vi-mini-page">
          <span className="vi-mini-page__bar">
            <i />
            <i />
            <i />
          </span>
          {[78, 64, 52].map((w) => (
            <span key={w} className="vi-mini-page__row">
              <Icon id="solid-circle-check" />
              <i style={{ width: `${w}%` }} />
            </span>
          ))}
        </div>
      )}
      {kind === 'authority' && (
        <div className="vi-mini-net">
          <span className="vi-mini-net__chip vi-mini-net__chip--a">Avis</span>
          <span className="vi-mini-net__chip vi-mini-net__chip--b">Annuaires</span>
          <span className="vi-mini-net__you">Vous</span>
          <span className="vi-mini-net__chip vi-mini-net__chip--c">Comparatifs</span>
          <span className="vi-mini-net__chip vi-mini-net__chip--d">Médias</span>
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── Contenus ───────────────────────── */

const HERO_ROWS = [
  { name: 'Entreprise A', desc: 'très bien notée' },
  { name: 'Entreprise B', desc: 'citée dans un comparatif' },
  { name: 'Entreprise C', desc: 'prix clairs sur son site' },
];

const ETAPES: { illu: 'ask' | 'answer' | 'call'; t: string; p: string }[] = [
  { illu: 'ask', t: 'Votre client demande à une IA', p: 'Plutôt que de chercher sur Google.' },
  { illu: 'answer', t: 'L’IA cite quelques noms', p: 'Pas de deuxième page.' },
  { illu: 'call', t: 'Il appelle l’un d’eux', p: 'Sans passer par votre site.' },
];

const METHODE: { illu: 'measure' | 'fix' | 'authority'; t: string; p: string }[] = [
  { illu: 'measure', t: 'Mesurer', p: 'Les questions de vos clients, posées aux 4 IA toutes les deux semaines.' },
  { illu: 'fix', t: 'Corriger', p: 'Votre site rendu lisible par les IA, et leurs erreurs sur vous corrigées.' },
  { illu: 'authority', t: 'Faire autorité', p: 'Votre présence là où les IA puisent leurs réponses.' },
];

/** Trois points par carte, lus dans les offres de geo.ts (nom des audits par auditsGeo()). */
const points = (express: GeoOffer, complet: GeoOffer): Record<string, { lead?: string; items: string[] }> => ({
  essentiel: {
    items: [`${express.name} offert au démarrage`, 'Erreurs des IA corrigées à la source', 'Corrections techniques et 3 pages améliorées par mois'],
  },
  croissance: {
    lead: 'Tout l’Essentiel, et :',
    items: [
      `${complet.name} offert au démarrage`,
      'Fiche ChatGPT revendiquée, si vous êtes éligible',
      '2 contenus et 2 inscriptions (annuaires, avis) par mois',
    ],
  },
  autorite: {
    lead: 'Tout Croissance, et :',
    items: ['3 démarches par mois auprès de comparatifs et de médias', '4 nouveaux contenus par mois', '1 heure par mois avec Benjamin Dayan, fondateur'],
  },
});

/*
 * Résultats clients : relevés de l'outil de suivi Kameo (captures du 23/11/2026), logos dans
 * public/images/logo clients/. Sous chaque cas : depuis quand le client est suivi (demande de Benjamin, 27/11/2026).
 * Défikart est un client web (site publié en juillet 2026) : jamais présenté comme un travail GEO. OmegaCloud
 * appartient au même groupe que Kameo : la mention a été retirée de cette page à la demande de Benjamin (27/11/2026).
 */
type CasClient = { id: string; logo: { src: string; w: number; h: number }; nom: string; activite: string; ia: string; big: ReactNode; txt: ReactNode; depuis: string };
const CAS: CasClient[] = [
  {
    id: 'defikart',
    logo: { src: '/images/logo clients/Defikart-couleur.png', w: 312, h: 312 },
    nom: 'Défikart',
    activite: 'karting, Toulouse',
    ia: 'ChatGPT',
    big: (
      <>
        1<sup>er</sup>
      </>
    ),
    txt: (
      <>
        nommé par ChatGPT sur <span className="vi-nowrap">«&nbsp;karting toulouse&nbsp;»</span>
      </>
    ),
    depuis: 'Client depuis juillet 2026',
  },
  {
    id: 'cdp69',
    logo: { src: '/images/logo clients/CDP69.png', w: 180, h: 180 },
    nom: 'CDP69',
    activite: 'autocars, Lyon',
    ia: '4 IA',
    big: (
      <>
        3<sup>e</sup>
      </>
    ),
    txt: (
      <>
        en 7&nbsp;jours sur «&nbsp;transport scolaire sortie pédagogique Lyon&nbsp;», où il était absent. Désormais cité par les 4&nbsp;IA.
      </>
    ),
    depuis: 'Accompagné depuis le 16/11/2026',
  },
  {
    id: 'omega',
    logo: { src: '/images/logo clients/OmegaCloud.svg', w: 1189, h: 222 },
    nom: 'OmegaCloud',
    activite: 'hébergeur, Rennes',
    ia: '4 IA',
    big: (
      <>
        1<sup>er</sup>
      </>
    ),
    txt: (
      <>
        sur «&nbsp;meilleurs VPS pour le trading en France&nbsp;». Et 31&nbsp;% des réponses des 4&nbsp;IA le citent, contre 11&nbsp;% neuf jours
        plus tôt.
      </>
    ),
    depuis: 'Accompagné depuis le 14/11/2026',
  },
];

function Cas({ c, i }: { c: CasClient; i: number }) {
  return (
    <article className="vi-case" data-vi-reveal="" style={{ '--vi-i': i } as CSSProperties} aria-labelledby={`case-${c.id}`}>
      <div className="vi-case__top">
        <span className={`vi-case__logo vi-case__logo--${c.id}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.logo.src} width={c.logo.w} height={c.logo.h} alt="" loading="lazy" decoding="async" />
        </span>
        <span className="vi-ai">{c.ia}</span>
      </div>
      <h3 className="vi-case__name" id={`case-${c.id}`}>
        {c.nom} <span>· {c.activite}</span>
      </h3>
      <p className="vi-case__big">
        <span className="vi-gt">{c.big}</span>
      </p>
      <p className="vi-case__txt">{c.txt}</p>
      <p className="vi-case__src">{c.depuis}</p>
    </article>
  );
}

/** FAQ : libellé affiché (mots du visiteur) et réponse lue dans geo.ts par sa question exacte. */
const FAQ_GEO: [string, 'agence' | 'accompagnement', string][] = [
  ['Le GEO remplace-t-il mon référencement Google ?', 'agence', 'Le GEO remplace-t-il le SEO ?'],
  ['Combien de temps avant les premiers effets ?', 'agence', 'Combien de temps faut-il pour être cité par ChatGPT ou les autres IA ?'],
  ['Je ne suis pas technique. Que faut-il vous fournir ?', 'accompagnement', 'Que faut-il vous fournir pour démarrer ?'],
];

/* ───────────────────────── Visuel du héros ───────────────────────── */

/** « La réponse » : illustration (pas une capture), rangées composées une à une au chargement (CSS seul). */
function HeroChat() {
  return (
    <figure className="vi-chat" aria-labelledby="vi-chat-desc">
      <p id="vi-chat-desc" className="sr-only">
        Illustration&nbsp;: une IA répond à «&nbsp;Je cherche un plombier à Nantes. Qui me conseilles-tu&nbsp;?&nbsp;» en citant trois
        entreprises. La place de la vôtre reste vide.
      </p>
      <div className="vi-chat__card" aria-hidden="true">
        <div className="vi-chat__bar">
          {GEO_ENGINES.map((e, i) => (
            <span key={e} className={'vi-chat__tab' + (i === 0 ? ' is-on' : '')}>
              {e}
            </span>
          ))}
        </div>
        <div className="vi-chat__body">
          <p className="vi-chat__q">
            Je cherche un plombier à Nantes. Qui me <span className="vi-nowrap">conseilles-tu&nbsp;?</span>
          </p>
          <p className="vi-chat__who">
            <span className="vi-chat__ia">IA</span>
            Réponse de l’IA
          </p>
          <ol className="vi-chat__list">
            {HERO_ROWS.map((r, i) => (
              <li key={r.name} className="vi-chat__row" style={{ '--i': i } as CSSProperties}>
                <span className="vi-chat__n">{i + 1}</span>
                <span className="vi-chat__txt">
                  <b>{r.name}</b> <span>— {r.desc}</span>
                </span>
              </li>
            ))}
            <li className="vi-chat__row vi-chat__row--you" style={{ '--i': HERO_ROWS.length } as CSSProperties}>
              <Slot />
            </li>
          </ol>
        </div>
        <p className="vi-chat__foot">Illustration · réponse fictive</p>
      </div>
    </figure>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function Body() {
  const promo = promoGeoActive();
  const plans = plansGeo();
  const [EXPRESS, COMPLET] = auditsGeo();
  const POINTS = points(EXPRESS, COMPLET);
  const moisEngagement = Number(noteEngagementGeo().match(/\d+/)?.[0] ?? 6);
  const remise = remiseGeoUniforme() ? <>−{remiseMaxGeo()}&nbsp;% sur chaque formule</> : <>Jusqu’à −{remiseMaxGeo()}&nbsp;%</>;
  const faqSrc: Record<'agence' | 'accompagnement', FaqItem[]> = { agence: faqAgence(), accompagnement: faqAccompagnement() };
  const faq = [
    {
      label: 'Que se passe-t-il pendant le diagnostic gratuit ?',
      a: `30${nb}minutes en visio. Nous posons en direct 5${nb}questions de vos clients à ${GEO_ENGINES.slice(0, -1).join(', ')} et ${GEO_ENGINES[GEO_ENGINES.length - 1]}, en partage d’écran, puis nous choisissons ensemble le bon format : audit ou accompagnement.`,
    },
    {
      label: 'Le diagnostic m’engage-t-il à signer ?',
      a: `Non. Vous voyez les réponses des IA, que vous signiez ou non. Si vous choisissez un accompagnement, il comprend ${moisEngagement}${nb}mois d’engagement, puis il est sans engagement.`,
    },
    ...FAQ_GEO.map(([label, from, q]) => ({ label, a: faqSrc[from].find((f) => f.q === q)?.a })).filter(
      (f): f is { label: string; a: string } => !!f.a,
    ),
  ];
  /* Sur téléphone, Essentiel s'ouvre par défaut (demande de Benjamin, 27/11/2026) ; « Recommandé » reste sur la formule mise en avant. */
  const defaut = plans.find((p) => p.id === 'essentiel') ?? plans[0];

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu principal
      </a>
      <div className="vi">
        <svg className="vi-defs" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="vi-grad-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="5%" stopColor="#E14B89" />
              <stop offset="85%" stopColor="#F8903C" />
            </linearGradient>
          </defs>
        </svg>

        {/* ━━ Bandeau d'offre (seulement pendant l'offre) ━━ */}
        {promo && (
          <a className="vi-offre" href="#formules" data-vi-promo="" data-cta="bandeau-offre">
            <span className="vi-chip-promo">{GEO_PROMO.nom}</span>
            <span className="vi-offre__txt">
              {remise}
              <span className="vi-offre__date">
                {' '}
                jusqu’au <span className="vi-offre__long">{GEO_PROMO.finTexte}</span>
                <span className="vi-offre__short">{JOUR_MOIS_FIN}</span>
              </span>
            </span>
            <span className="vi-offre__count">
              <Countdown end={GEO_PROMO.fin} />
            </span>
            <span className="vi-offre__go" aria-hidden="true">
              <IArrow />
            </span>
          </a>
        )}

        {/* ━━ Barre du haut (sans navigation) ━━ */}
        <header className="vi-top">
          <div className="vi-wrap vi-top__in">
            <span className="vi-logo">
              <span className="vi-logo__mark" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hero.webp" width={400} height={126} alt="" decoding="async" />
              </span>
              <span className="vi-logo__word">Kameo</span>
            </span>
            <div className="vi-top__right">
              <a className="vi-top__tel" href={TEL_HREF} data-cta="tel-top" aria-label={`Appeler Kameo au ${CONTACT.phone}`}>
                <IPhone />
                <span className="vi-top__num">{CONTACT.phone}</span>
              </a>
              {/* Ordinateur : visible une fois le héros passé (ViEffects : .is-past-hero) */}
              <a className="vi-btn vi-top__cta" href={CONTACT.calendly} data-cta="top">
                Voir ce que les IA disent de moi
              </a>
            </div>
          </div>
        </header>

        <main id="contenu">
          {/* ━━ 1 · Héros ━━ */}
          <section className="vi-hero" id="hero" aria-labelledby="vi-h1">
            <div className="vi-hero__halo" aria-hidden="true" />
            <div className="vi-wrap vi-hero__grid">
              <div className="vi-hero__text">
                <TrustBadge />
                <h1 className="vi-h1" id="vi-h1">
                  Devenez visible sur <span className="vi-gt">ChatGPT en 1&nbsp;mois</span>
                </h1>
                <p className="vi-lead">On mesure ce que les IA disent de vous, et on corrige ce qui les empêche de vous citer.</p>
                <div className="vi-hero__cta">
                  <Cta cta="hero" size="lg" sub={SUB_CTA}>
                    Voir ce que les IA disent de moi
                  </Cta>
                </div>
              </div>
              <HeroChat />
            </div>
          </section>

          {/* ━━ 2 · Ce qui a changé ━━ */}
          <section className="vi-sec vi-sec--soft" id="enjeu" aria-labelledby="enjeu-t">
            <div className="vi-wrap">
              <Head
                id="enjeu-t"
                eyebrow="Ce qui a changé"
                sub={
                  <span className="vi-srcline">
                    Source&nbsp;: <Ext href={ARCOM_URL}>Arcom et Médiamétrie, juin 2026</Ext>
                  </span>
                }
              >
                <span className="vi-gt">33&nbsp;millions</span> de Français utilisent un service d’IA chaque mois.
              </Head>
              <ol className="vi-cards">
                {ETAPES.map((e, i) => (
                  <li key={e.t} className="vi-card" data-vi-reveal="" style={{ '--vi-i': i } as CSSProperties}>
                    <Illu kind={e.illu} />
                    <div className="vi-card__body">
                      <span className="vi-card__n" aria-hidden="true">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="vi-card__t">{e.t}</h3>
                        <p className="vi-card__p">{e.p}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ━━ 3 · Résultats clients ━━ */}
          <section className="vi-sec" id="resultats" aria-labelledby="resultats-t">
            <div className="vi-wrap">
              <Head id="resultats-t" eyebrow="Résultats clients" sub="Relevés Kameo de novembre 2026 : les réponses des IA varient d’un essai à l’autre.">
                Nos clients, cités par les IA
              </Head>
              <div className="vi-cases">
                {CAS.map((c, i) => (
                  <Cas key={c.id} c={c} i={i} />
                ))}
              </div>
            </div>
          </section>

          {/* ━━ 4 · Méthode ━━ */}
          <section className="vi-sec vi-sec--soft" id="methode" aria-labelledby="methode-t">
            <div className="vi-wrap">
              <Head id="methode-t" eyebrow="Notre méthode" sub="Et chaque mois, un rapport clair, IA par IA.">
                3 étapes pour être cité
              </Head>
              <ol className="vi-cards">
                {METHODE.map((m, i) => (
                  <li key={m.t} className="vi-card" data-vi-reveal="" style={{ '--vi-i': i } as CSSProperties}>
                    <Illu kind={m.illu} />
                    <div className="vi-card__body">
                      <span className="vi-card__n" aria-hidden="true">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="vi-card__t">{m.t}</h3>
                        <p className="vi-card__p">{fr(m.p)}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ━━ 5 · Formules ━━ */}
          <section className="vi-sec" id="formules" aria-labelledby="formules-t">
            <div className="vi-wrap">
              <Head id="formules-t" eyebrow="Formules et prix" sub="Prix hors taxes, par mois, affichés avant tout rendez-vous.">
                3 formules, des prix clairs
              </Head>

              {promo && (
                <div className="vi-promo" data-vi-promo="" data-vi-reveal="">
                  <span className="vi-chip-promo">{GEO_PROMO.nom}</span>
                  <p className="vi-promo__txt">
                    {remise} pour toute signature jusqu’au {GEO_PROMO.finTexte}. Prix conservé pendant l’engagement.
                  </p>
                  <Countdown end={GEO_PROMO.fin} />
                </div>
              )}

              {/* Mobile et tablette : une formule à la fois (boutons radio, sans JavaScript). Ordinateur : les trois côte à côte. */}
              <fieldset className="vi-planset">
                <legend className="sr-only">Formule à afficher</legend>
                {plans.map((p) => (
                  <input
                    key={p.id}
                    type="radio"
                    name="vi-plan"
                    id={`vi-p-${p.id}`}
                    className="vi-planset__radio"
                    defaultChecked={p.id === defaut.id}
                    aria-controls={`formule-${p.id}`}
                  />
                ))}
                <div className="vi-seg">
                  {plans.map((p) => (
                    <label key={p.id} htmlFor={`vi-p-${p.id}`} className={`vi-seg__opt vi-seg__opt--${p.id}`}>
                      {p.name}
                    </label>
                  ))}
                </div>
                <ul className="vi-plans">
                  {plans.map((p) => {
                    const star = !!p.featured;
                    const barre = promo ? prixBarre(p) : null;
                    const pts = POINTS[p.id];
                    return (
                      <li key={p.id} id={`formule-${p.id}`} className={`vi-plan vi-plan--${p.id}` + (star ? ' vi-plan--star' : '')}>
                        <article className="vi-plan__in" aria-labelledby={`vi-plan-${p.id}`}>
                          <div className="vi-plan__top">
                            <h3 className="vi-plan__name" id={`vi-plan-${p.id}`}>
                              {p.name}
                            </h3>
                            {star && <span className="vi-plan__badge">Recommandé</span>}
                          </div>
                          {p.pourQui && <p className="vi-plan__who">{t(p.pourQui)}</p>}
                          <div className="vi-plan__price">
                            {barre !== null && (
                              <p className="vi-plan__was" data-vi-promo="">
                                <span className="vi-chip-promo">{GEO_PROMO.nom}</span>
                                <del className="vi-strike">
                                  <span className="sr-only">Prix après l’offre&nbsp;: </span>
                                  {eur(barre)}&nbsp;HT
                                </del>
                              </p>
                            )}
                            <p className="vi-plan__amount">
                              {barre !== null ? (
                                <>
                                  <span className="vi-plan__num" data-vi-promo="">
                                    {eur(prixDuJour(p))}
                                  </span>
                                  <span className="vi-plan__num" data-vi-nopromo="" hidden>
                                    {eur(p.price)}
                                  </span>
                                </>
                              ) : (
                                <span className="vi-plan__num">{eur(prixDuJour(p))}</span>
                              )}
                              <span className="vi-plan__unit">HT / mois</span>
                            </p>
                            <p className="vi-plan__engage">{noteEngagementGeo()}</p>
                          </div>
                          {pts && (
                            <div className="vi-plan__pts">
                              {pts.lead && <p className="vi-plan__lead">{fr(pts.lead)}</p>}
                              <ul className="vi-checks">
                                {p.questions && (
                                  <li>
                                    <ICheck />
                                    <span>{p.questions}&nbsp;questions de vos clients suivies</span>
                                  </li>
                                )}
                                {pts.items.map((it) => (
                                  <li key={it}>
                                    <ICheck />
                                    <span>{fr(it)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <details className="vi-plan__more">
                            <summary>
                              Tout ce qui est inclus
                              <svg className="vi-ico vi-plan__chev" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                                <path d="M5 8l5 5 5-5" />
                              </svg>
                            </summary>
                            <ul className="vi-plan__items">
                              {p.items.map((it) => (
                                <li key={it}>{t(it)}</li>
                              ))}
                            </ul>
                          </details>
                          <Cta cta={`formule-${p.id}`} outline={!star} label={`Réserver mon diagnostic gratuit (formule ${p.name})`}>
                            Réserver mon diagnostic
                          </Cta>
                        </article>
                      </li>
                    );
                  })}
                </ul>
              </fieldset>
              <ul className="vi-perks" data-vi-reveal="">
                <li>
                  <Tile id="solid-magnifying-glass-chart" sm />
                  <span>Audit offert au démarrage</span>
                </li>
                <li>
                  <Tile id="solid-piggy-bank" sm />
                  <span>12&nbsp;mois pour le prix de 11</span>
                </li>
                <li>
                  <Tile id="solid-handshake" sm />
                  <span>Formule choisie ensemble</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ━━ 6 · Engagement et équipe ━━ */}
          <section className="vi-sec vi-sec--soft" id="garanties" aria-labelledby="garanties-t">
            <div className="vi-wrap vi-trustgrid">
              <div className="vi-promise" data-vi-reveal="">
                <Tile id="solid-shield-halved" />
                <h2 className="vi-h2" id="garanties-t">
                  Travail non fait, travail non facturé.
                </h2>
                <p className="vi-promise__p">
                  Chaque mois, ce qui est prévu dans votre formule est fait et mesuré. Sinon, c’est déduit de votre facture suivante.
                </p>
              </div>

              <div className="vi-team" data-vi-reveal="" style={{ '--vi-i': 1 } as CSSProperties}>
                <div className="vi-team__faces">
                  {[
                    { src: '/images/benjamin.webp', nom: 'Benjamin Dayan', role: 'Président' },
                    { src: '/images/Louison.webp', nom: 'Louison Boutet', role: 'Directeur général' },
                  ].map((m) => (
                    <figure key={m.nom} className="vi-face">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={m.src} width={400} height={400} alt="" loading="lazy" decoding="async" />
                      <figcaption>
                        <strong>{m.nom}</strong>
                        <span>{m.role}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <p className="vi-team__p">Une équipe de 6, sans sous-traitance. Rendez-vous en visio, partout en France.</p>
                <ul className="vi-badges">
                  <li>
                    <TrustBadge />
                  </li>
                  <li>
                    <Ext href={FABRIQUE_URL} className="vi-badge">
                      <Icon id="solid-medal" className="vi-badge__ico" />
                      <span>
                        <strong>
                          8<sup>e</sup>
                        </strong>{' '}
                        des «&nbsp;meilleures agences GEO à Paris&nbsp;» · La Fabrique du Net
                      </span>
                    </Ext>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ━━ 7 · FAQ ━━ */}
          <section className="vi-sec" id="faq" aria-labelledby="faq-t">
            <div className="vi-wrap vi-faqwrap">
              <Head id="faq-t" eyebrow="FAQ">
                Vos questions
              </Head>
              <div className="vi-faq">
                {faq.map((f) => (
                  <details key={f.label} className="vi-faq__item">
                    <summary className="vi-faq__q">
                      <span>{fr(f.label)}</span>
                      <span className="vi-faq__icon" aria-hidden="true" />
                    </summary>
                    <p className="vi-faq__a">{t(f.a)}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ━━ 8 · Diagnostic (CTA final) ━━ */}
          <section className="vi-sec vi-final" id="diagnostic" aria-labelledby="diagnostic-t">
            <div className="vi-wrap vi-final__in" data-vi-reveal="">
              <Slot>Votre entreprise, cette fois&nbsp;?</Slot>
              <h2 className="vi-h2 vi-final__t" id="diagnostic-t">
                Que dit <span className="vi-gt">ChatGPT</span> de vous&nbsp;?
              </h2>
              <ul className="vi-final__pts">
                <li>
                  <Icon id="solid-clock" />
                  30&nbsp;min en visio
                </li>
                <li>
                  <Icon id="solid-comment-dots" />5 questions posées en direct aux 4&nbsp;IA
                </li>
                <li>
                  <Icon id="solid-circle-check" />
                  Gratuit, que vous signiez ou non
                </li>
              </ul>
              <div className="vi-final__cta">
                <Cta cta="final" size="lg" sub={SUB_CTA}>
                  Voir ce que les IA disent de moi
                </Cta>
              </div>
              <div className="vi-final__alt">
                <Ext href={WA_HREF} className="vi-btn-ghost" cta="whatsapp-final" label="Écrire sur WhatsApp à Kameo (nouvel onglet)">
                  <IWhatsApp />
                  WhatsApp
                </Ext>
                <a href={TEL_HREF} className="vi-btn-ghost" data-cta="tel-final" aria-label={`Appeler le ${CONTACT.phone} (Kameo)`}>
                  <IPhone />
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* ━━ Ligne légale ━━ */}
        <footer className="vi-legal" id="vi-legal">
          <p className="vi-wrap">
            <span>© {new Date().getFullYear()} Kameo</span>
            <span aria-hidden="true"> · </span>
            <a href="/mentions-legales/" target="_blank" rel="noopener">
              Mentions légales<span className="sr-only"> (nouvel onglet)</span>
            </a>
            <span aria-hidden="true"> · </span>
            <a href="/politique-de-confidentialite/" target="_blank" rel="noopener">
              Confidentialité<span className="sr-only"> (nouvel onglet)</span>
            </a>
            <span aria-hidden="true"> · </span>
            <CookieSettingsLink />
          </p>
        </footer>

        {/* ━━ Barre d'action mobile (affichée par ViEffects une fois le héros passé) ━━ */}
        <div className="vi-sticky" id="vi-sticky">
          <Ext href={WA_HREF} className="vi-sticky__wa" cta="whatsapp-sticky" label="Écrire à Kameo sur WhatsApp (nouvel onglet)">
            <IWhatsApp />
          </Ext>
          <a className="vi-sticky__cta" href={CONTACT.calendly} data-cta="sticky">
            <span className="vi-sticky__txt">
              <span className="vi-sticky__l1">Voir ce que les IA disent de moi</span>
              <span className="vi-sticky__l2">Gratuit · 30&nbsp;min en visio</span>
            </span>
            <span className="vi-btn__arrow" aria-hidden="true">
              <IArrow />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
