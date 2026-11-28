/*
 * Corps de la landing /visibilite-ia/ (accompagnement GEO, fond blanc). Pensée d'abord pour le téléphone : le
 * trafic vient des publicités (Meta, LinkedIn, Google) et se lit surtout sur mobile. Une idée par écran, une ligne
 * de texte par carte, une mini-illustration par idée (comme /appel-strategique/), un seul appel à l'action : le
 * diagnostic gratuit (Calendly).
 * Composant serveur, rien n'exige JavaScript : sur mobile, le choix de formule est un groupe de boutons radio.
 * Faits et chiffres : src/content/geo.ts et src/lib/site.ts (prix, offre, formules, engagements, FAQ) ; relevés
 * clients et chiffre Arcom repris de /agence-geo/. L'offre Black Friday (PROMO_LANDING de geo.ts, propre à cette landing) est une couche : chaque élément d'offre
 * ([data-vi-promo]) a son équivalent permanent ([data-vi-nopromo], rendu masqué), Countdown bascule à l'échéance.
 * Icônes : sprite du site (/icons.svg). Illustrations : HTML et CSS décoratifs (aria-hidden), sans chiffre inventé.
 * Toutes les classes sont préfixées vi- (styles.ts).
 * Une page, trois versions : générale, auto-écoles, écoles (variantes.ts) ; tous les textes propres à une cible
 * viennent de la variante reçue (v), le reste est commun.
 */
import type { CSSProperties, ReactNode } from 'react';
import CookieSettingsLink from '@/components/consent/CookieSettingsLink';
import { fr } from '@/components/geo/GeoBlocks';
import AiRotator from '@/components/landing-geo/AiRotator';
import CalendlyInline from '@/components/landing-geo/CalendlyInline';
import LogosClients from '@/components/landing-geo/LogosClients';
import LogosIA from '@/components/landing-geo/LogosIA';
import Countdown from '@/components/landing-geo/Countdown';
import {
  GEO_ENGINES,
  PROMO_LANDING,
  auditsGeo,
  euros,
  noteEngagementGeo,
  plansGeo,
  prixApresLanding,
  prixLanding,
  promoLandingActive,
  type GeoOffer,
} from '@/content/geo';
import { CONTACT, PROOF, SOCIAL } from '@/lib/site';
import type { FormuleId, Variante } from './variantes';

/** Espace insécable, écrite en échappement : un copier-coller l'avait changée en espace normale (titre coupé entre « 1 » et « mois », prix coupés). */
const nb = '\u00a0';

/** Prix jamais coupés en fin de ligne : euros() de geo.ts met une espace normale. */
const eur = (n: number) => euros(n).replace(/ /g, nb);
/** « 1er décembre » sans coupure : début des prix normaux (diagnostics réservés à partir de cette date). */
const REPRISE = PROMO_LANDING.repriseCourte.replace(' ', nb);
/** Texte lu dans geo.ts : espaces insécables (fr), apostrophes typographiques (hors balises HTML). */
const t = (s: string) => fr(s).replace(/'(?![^<]*>)/g, '’');

const FABRIQUE_URL = 'https://www.lafabriquedunet.fr/agences/pages/agences-geo-ile-de-france-paris';

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
const ICalendar = () => (
  <Ico>
    <rect x="3" y="4.25" width="14" height="12.75" rx="2.5" />
    <path d="M3 8.5h14M7 2.5v3.5M13 2.5v3.5" />
  </Ico>
);
const ICheck = () => (
  <Ico className="vi-check">
    <path d="M4.5 10.5l3.5 3.5 7.5-8" />
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

/* ───────────────────────── Briques ───────────────────────── */

/** Mot à trait d'union (auto-école, post-bac, conseilles-tu ?) : jamais coupé au trait d'union en fin de ligne. */
const MOT_TRAIT = /([A-Za-zÀ-ÖØ-öø-ÿŒœ]+(?:-[A-Za-zÀ-ÖØ-öø-ÿŒœ]+)+(?: [?!:;»])?)/;
/** Texte d'une variante : espaces insécables (fr) et mots à trait d'union insécables. */
function Nw({ children }: { children: string }) {
  const parts = fr(children).split(MOT_TRAIT);
  if (parts.length === 1) return <>{parts[0]}</>;
  return (
    <>
      {parts.map((p, i) =>
        i % 2 ? (
          <span key={i} className="vi-nowrap">
            {p}
          </span>
        ) : (
          p || null
        ),
      )}
    </>
  );
}

/** Lien externe : nouvel onglet, annoncé aux lecteurs d'écran. */
function Ext({ href, children, className, label, cta }: { href: string; children: ReactNode; className?: string; label?: string; cta?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener" className={className} aria-label={label} data-cta={cta}>
      {children}
      {!label && <span className="sr-only"> (nouvel onglet)</span>}
    </a>
  );
}

/** Bouton principal : lien Calendly (ouvert dans la fenêtre CalendlyModal) sauf autre href, texte encre sur le dégradé (blanc avec white). */
function Cta({
  cta,
  children,
  size,
  outline,
  white,
  href = CONTACT.calendly,
  label,
  sub,
}: {
  cta: string;
  children: ReactNode;
  size?: 'lg';
  outline?: boolean;
  white?: boolean;
  href?: string;
  label?: string;
  sub?: ReactNode;
}) {
  const cls = ['vi-btn', size && `vi-btn--${size}`, outline && 'vi-btn--outline', white && 'vi-btn--white'].filter(Boolean).join(' ');
  return (
    <a className={cls} href={href} data-cta={cta} aria-label={label}>
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

/** Note Trustpilot : la même pastille au-dessus du titre et sous l'équipe. */
const TrustBadge = () => (
  <Ext href={SOCIAL.trustpilot} className="vi-badge">
    <Stars />
    <span>
      <strong>{PROOF.avisNote}/5</strong> Trustpilot · {PROOF.avisNombre}&nbsp;avis
    </span>
  </Ext>
);

/** Titre de section, seul : petits titres et descriptions retirés de toutes les sections (demande de Benjamin du 28/11/2026). */
function Head({ id, children }: { id: string; children: ReactNode }) {
  return (
    <header className="vi-head" data-vi-reveal="">
      <h2 className="vi-h2" id={id}>
        {children}
      </h2>
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

function Illu({ kind, v }: { kind: 'ask' | 'answer' | 'call' | 'measure' | 'fix' | 'authority'; v: Variante }) {
  return (
    <div className={`vi-illu vi-illu--${kind}`} aria-hidden="true">
      {kind === 'ask' && (
        <div className="vi-mini-ask">
          <span className="vi-mini-ask__ia">IA</span>
          <span className="vi-mini-ask__txt">{fr(v.miniAsk)}</span>
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
            <Icon id={v.miniCall.icon} />
            {v.miniCall.txt}
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
          <span className="vi-mini-net__chip vi-mini-net__chip--a">{v.sources[0]}</span>
          <span className="vi-mini-net__chip vi-mini-net__chip--b">{v.sources[1]}</span>
          <span className="vi-mini-net__you">Vous</span>
          <span className="vi-mini-net__chip vi-mini-net__chip--c">{v.sources[2]}</span>
          <span className="vi-mini-net__chip vi-mini-net__chip--d">{v.sources[3]}</span>
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── Contenus ───────────────────────── */

/* Textes des cartes : variantes.ts (etapes, methode) ; ici, l'illustration de chaque carte et les titres communs. */
const ILLU_ETAPES = ['ask', 'answer', 'call'] as const;
const METHODE = [
  { illu: 'measure', t: 'Mesurer' },
  { illu: 'fix', t: 'Corriger' },
  { illu: 'authority', t: 'Notoriété' },
] as const;

/** Trois ou quatre points par carte, résumés des offres de geo.ts (nom des audits par auditsGeo()) ; formules revues le 27/11/2026. */
const points = (express: GeoOffer, complet: GeoOffer): Record<string, { lead?: string; items: string[] }> => ({
  essentiel: {
    items: [`${express.name} offert au démarrage`, 'Erreurs des IA corrigées à la source', 'Corrections techniques et 3 pages améliorées par mois'],
  },
  croissance: {
    lead: 'Tout l’Essentiel, et :',
    items: [
      `${complet.name} offert au démarrage`,
      'Fiche ChatGPT revendiquée, si vous êtes éligible',
      '2 contenus et 1 inscription (annuaires, avis) par mois',
      '3 démarches par mois auprès de comparatifs et de médias',
    ],
  },
  autorite: {
    lead: 'Tout Croissance, et :',
    items: ['Fiches Google et Bing créées, puis tenues à jour', '4 nouveaux contenus par mois', '1 heure par mois avec Benjamin Dayan, fondateur'],
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
      {/* 5 étoiles aux couleurs de Kameo entre le logo et le nom (demande de Benjamin du 28/11/2026) */}
      <Stars />
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

/* ───────────────────────── Visuel du héros ───────────────────────── */

/** Pictogrammes de l'écran du téléphone (dessins simples, traits) : SVG décoratifs. */
const GptIco = ({ d, className = '' }: { d: string; className?: string }) => (
  <svg className={'vi-gpt__ico ' + className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d={d} />
  </svg>
);

/**
 * « La réponse » : un téléphone avec l'écran de l'application ChatGPT (demande de Benjamin du 28/11/2026 : « un téléphone et
 * un vrai design de ChatGPT, pour qu'on comprenne l'idée »). Illustration dessinée, pas une capture, réponse fictive (mention
 * sous le téléphone). Rangées composées une à une au chargement (CSS seul).
 */
function HeroChat({ v }: { v: Variante }) {
  const { q, rows, cites, slot, intro } = v.chat;
  return (
    <figure className="vi-chat" aria-labelledby="vi-chat-desc">
      <p id="vi-chat-desc" className="sr-only">
        {fr(`Illustration : sur un téléphone, ChatGPT répond à « ${q} » en citant ${cites}. La place de la vôtre reste vide.`)}
      </p>
      <div className="vi-phone" aria-hidden="true">
        <div className="vi-phone__screen">
          <div className="vi-phone__status">
            <span>9:41</span>
            <span className="vi-phone__island" />
            <span className="vi-phone__sys">
              <svg viewBox="0 0 18 12">
                <rect x="0" y="8" width="3" height="4" rx="1" />
                <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
                <rect x="10" y="3" width="3" height="9" rx="1" />
                <rect x="15" y="0" width="3" height="12" rx="1" />
              </svg>
              <svg viewBox="0 0 24 18" className="vi-phone__wifi">
                <path d="M2 6.5a15 15 0 0 1 20 0M5.5 10a10 10 0 0 1 13 0M9 13.5a5 5 0 0 1 6 0" />
              </svg>
              <span className="vi-phone__bat">
                <i />
              </span>
            </span>
          </div>
          <div className="vi-gpt__bar">
            <GptIco d="M4 9h16M4 15h10" />
            <span className="vi-gpt__title">
              ChatGPT
              <GptIco d="m9 6 6 6-6 6" className="vi-gpt__chev" />
            </span>
            <GptIco d="M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M17.5 3.5a2.1 2.1 0 0 1 3 3L13 14l-4 1 1-4z" />
          </div>
          <div className="vi-gpt__body">
            <p className="vi-gpt__q">
              <Nw>{q}</Nw>
            </p>
            <div className="vi-gpt__a">
              <p className="vi-gpt__row" style={{ '--i': 0 } as CSSProperties}>
                <Nw>{intro ?? `Voici ${cites} à contacter :`}</Nw>
              </p>
              <ol className="vi-gpt__list">
                {rows.map((r, i) => (
                  <li key={r.name} className="vi-gpt__row" style={{ '--i': i + 1 } as CSSProperties}>
                    <b>
                      <Nw>{r.name}</Nw>
                    </b>{' '}
                    — <Nw>{r.desc}</Nw>
                  </li>
                ))}
              </ol>
              <div className="vi-gpt__row vi-gpt__you" style={{ '--i': rows.length + 1 } as CSSProperties}>
                <Slot>
                  <Nw>{slot}</Nw>
                </Slot>
              </div>
              <div className="vi-gpt__acts">
                <GptIco d="M8 8h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM4 16V5a1 1 0 0 1 1-1h11" />
                <GptIco d="M7 11v9H4v-9zM7 11l4-7a2 2 0 0 1 3 1.7V9h5a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7" />
                <GptIco d="M7 13V4H4v9zM7 13l4 7a2 2 0 0 0 3-1.7V15h5a2 2 0 0 0 2-2.3l-1.2-7A2 2 0 0 0 17.8 4H7" />
                <GptIco d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5" />
              </div>
            </div>
          </div>
          <div className="vi-gpt__input">
            <GptIco d="M12 5v14M5 12h14" className="vi-gpt__plus" />
            <span className="vi-gpt__ph">Poser une question</span>
            <GptIco d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM5 11a7 7 0 0 0 14 0M12 18v3" />
            <span className="vi-gpt__voice">
              <GptIco d="M6 10v4M10 7v10M14 9v6M18 11v2" />
            </span>
          </div>
          <span className="vi-phone__home" />
        </div>
      </div>
    </figure>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function Body({ v }: { v: Variante }) {
  const cas = v.ordreCas ? v.ordreCas.flatMap((id) => CAS.filter((c) => c.id === id)) : CAS;
  const promo = promoLandingActive();
  const plans = plansGeo();
  const [EXPRESS, COMPLET] = auditsGeo();
  const POINTS = points(EXPRESS, COMPLET);
  /* Pendant l'offre : son prix de départ, jamais un pourcentage ni un prix barré (choix de Benjamin du 28/11/2026 : les prix normaux ne sont affichés que depuis le 27/11/2026). */
  const desPrix = (
    <>
      Dès {eur(prixLanding(plans[0]))}
      {nb}HT/mois
    </>
  );
  const prixApres = `${plans
    .slice(0, -1)
    .map((p) => eur(p.price))
    .join(', ')} et ${eur(plans[plans.length - 1].price)}`;
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
            <span className="vi-chip-promo">{PROMO_LANDING.nom}</span>
            <span className="vi-offre__txt">
              {desPrix}
              <span className="vi-offre__date">
                {' '}
                jusqu’à <span className="vi-offre__long">{PROMO_LANDING.finTexte.replace(/ /g, nb)}</span>
                <span className="vi-offre__short">{PROMO_LANDING.finCourte.replace(/ /g, nb)}</span>
              </span>
            </span>
            <span className="vi-offre__count">
              <Countdown end={PROMO_LANDING.fin} />
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
              {/* Ordinateur : visible dès l'arrivée, texte explicite (demande de Benjamin du 27/11/2026) */}
              <a className="vi-btn vi-btn--white vi-top__cta" href={CONTACT.calendly} data-cta="top">
                Réserver mon diagnostic gratuit
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
                {/* Titre sur 2 lignes (demande de Benjamin du 27/11/2026) : la 2e ligne, insécable, commence par le nom de l'IA qui
                    change tout seul (AiRotator), suivi de « en 1 mois » ; « Perplexity en 1 mois » tient sur une ligne jusqu'à 360 px. */}
                <h1 className="vi-h1" id="vi-h1">
                  <Nw>{v.h1}</Nw>
                  <br />
                  <span className="vi-h1__l2">
                    <AiRotator /> <span className="vi-gt">{`en${nb}1${nb}mois`}</span>
                  </span>
                </h1>
                <p className="vi-lead">
                  <Nw>{v.lead}</Nw>
                </p>
                {/* Demandes de Benjamin du 28/11/2026 : le bouton mène aux formules, en texte blanc, sans précision dessous. */}
                <div className="vi-hero__cta">
                  <Cta cta="hero-formules" size="lg" white href="#formules">
                    Voir nos accompagnements
                  </Cta>
                </div>
                {/* Logos clients qui défilent sous le bouton, dans la colonne de gauche : ils s'arrêtent avant le téléphone
                    (demande de Benjamin du 28/11/2026). */}
                <LogosClients />
              </div>
              <HeroChat v={v} />
            </div>
            {/* 3 chiffres sous le haut de page, sur toute la largeur, en noir et sans fond (demandes de Benjamin du 28/11/2026).
                « +50 » : PROOF.projetsTotal (50 projets, src/lib/site.ts). */}
            <div className="vi-wrap">
              <ul className="vi-stats">
                <li>
                  <b>+{PROOF.projetsTotal}</b>
                  <span>entreprises accompagnées</span>
                </li>
                <li>
                  <b>100&nbsp;%</b>
                  <span>de clients satisfaits</span>
                </li>
                <li>
                  <b>2&nbsp;semaines</b>
                  <span>en moyenne pour les premiers résultats</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ━━ 2 · Résultats clients (avant « Ce qui a changé » depuis le 28/11/2026, demande de Benjamin) ━━ */}
          <section className="vi-sec" id="resultats" aria-labelledby="resultats-t">
            <div className="vi-wrap">
              <Head id="resultats-t">
                Nos clients, cités par les IA
              </Head>
              <div className="vi-cases">
                {cas.map((c, i) => (
                  <Cas key={c.id} c={c} i={i} />
                ))}
              </div>
            </div>
          </section>

          {/* ━━ 3 · Ce qui a changé ━━ */}
          <section className="vi-sec vi-sec--soft" id="enjeu" aria-labelledby="enjeu-t">
            <div className="vi-wrap">
              {/* Chiffre Arcom et Médiamétrie (juin 2026) ; mention de la source retirée à la demande de Benjamin du 28/11/2026. */}
              <Head id="enjeu-t">
                <span className="vi-gt">33&nbsp;millions</span> de Français utilisent l’IA
              </Head>
              <ol className="vi-cards">
                {v.etapes.map((e, i) => (
                  <li key={e.t} className="vi-card" data-vi-reveal="" style={{ '--vi-i': i } as CSSProperties}>
                    <Illu kind={ILLU_ETAPES[i]} v={v} />
                    <div className="vi-card__body">
                      <span className="vi-card__n" aria-hidden="true">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="vi-card__t">
                          <Nw>{e.t}</Nw>
                        </h3>
                        <p className="vi-card__p">
                          <Nw>{e.p}</Nw>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ━━ 4 · Formules (avant la méthode depuis le 28/11/2026, demande de Benjamin) ━━ */}
          <section className="vi-sec" id="formules" aria-labelledby="formules-t">
            <div className="vi-wrap">
              <Head id="formules-t">
                3 formules, des prix clairs
              </Head>

              {promo && (
                <div className="vi-promo" data-vi-promo="" data-vi-reveal="">
                  <span className="vi-chip-promo">{PROMO_LANDING.nom}</span>
                  <p className="vi-promo__txt">
                    {desPrix} pour tout diagnostic réservé d’ici {PROMO_LANDING.finTexte.replace(/ /g, nb)}&nbsp;: ce prix reste le vôtre
                    pendant tout l’engagement si vous signez ensuite. Pour un diagnostic réservé à partir du{' '}
                    {PROMO_LANDING.repriseTexte.replace(' ', nb)}&nbsp;: {prixApres}
                    {nb}HT/mois.
                  </p>
                  <Countdown end={PROMO_LANDING.fin} />
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
                    const apres = promo ? prixApresLanding(p) : null;
                    const pts = POINTS[p.id];
                    const qui = v.pourQui?.[p.id as FormuleId] ?? p.pourQui;
                    return (
                      <li key={p.id} id={`formule-${p.id}`} className={`vi-plan vi-plan--${p.id}` + (star ? ' vi-plan--star' : '')}>
                        <article className="vi-plan__in" aria-labelledby={`vi-plan-${p.id}`}>
                          <div className="vi-plan__top">
                            <h3 className="vi-plan__name" id={`vi-plan-${p.id}`}>
                              {p.name}
                            </h3>
                            {star && <span className="vi-plan__badge">Recommandé</span>}
                          </div>
                          {qui && (
                            <p className="vi-plan__who">
                              <Nw>{t(qui)}</Nw>
                            </p>
                          )}
                          <LogosIA />
                          <div className="vi-plan__price">
                            {apres !== null && (
                              <p className="vi-plan__was" data-vi-promo="">
                                <span className="vi-chip-promo">{PROMO_LANDING.nom}</span>
                                <span className="vi-plan__after">
                                  {eur(apres)}
                                  {nb}HT dès le {REPRISE}
                                </span>
                              </p>
                            )}
                            <p className="vi-plan__amount">
                              {apres !== null ? (
                                <>
                                  <span className="vi-plan__num" data-vi-promo="">
                                    {eur(prixLanding(p))}
                                  </span>
                                  <span className="vi-plan__num" data-vi-nopromo="" hidden>
                                    {eur(p.price)}
                                  </span>
                                </>
                              ) : (
                                <span className="vi-plan__num">{eur(prixLanding(p))}</span>
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
                                    <span>
                                      {p.questions}&nbsp;questions de {v.qui} suivies
                                    </span>
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
                          <Cta cta={`formule-${p.id}`} white label={`Réserver mon diagnostic gratuit (formule ${p.name})`}>
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

          {/* ━━ 5 · Méthode ━━ */}
          <section className="vi-sec vi-sec--soft" id="methode" aria-labelledby="methode-t">
            <div className="vi-wrap">
              <Head id="methode-t">
                3 étapes pour être cité
              </Head>
              <ol className="vi-cards">
                {METHODE.map((m, i) => (
                  <li key={m.t} className="vi-card" data-vi-reveal="" style={{ '--vi-i': i } as CSSProperties}>
                    <Illu kind={m.illu} v={v} />
                    <div className="vi-card__body">
                      <span className="vi-card__n" aria-hidden="true">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="vi-card__t">{m.t}</h3>
                        <p className="vi-card__p">
                          <Nw>{v.methode[i]}</Nw>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ━━ 6 · Équipe (bloc pleine largeur, demande de Benjamin du 27/11/2026) ━━ */}
          <section className="vi-sec vi-sec--soft" id="equipe" aria-labelledby="equipe-t">
            <div className="vi-wrap">
              <div className="vi-team" data-vi-reveal="">
                <h2 className="vi-h2 vi-team__t" id="equipe-t">
                  Une équipe <span className="vi-gt">jeune, dynamique et performante</span>
                </h2>
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

          {/* ━━ 7 · Réservation : Calendly intégré à la page (demande de Benjamin du 28/11/2026, à la place du dernier appel à
              l'action) ; la FAQ a été retirée le 27/11/2026 à sa demande ━━ */}
          <section className="vi-sec vi-final" id="diagnostic" aria-labelledby="diagnostic-t">
            <div className="vi-wrap vi-final__in">
              <Head id="diagnostic-t">
                Réservez votre <span className="vi-gt">diagnostic gratuit</span>
              </Head>
              <CalendlyInline preloadAfter="#formules" utm={{ utm_source: 'landing', utm_campaign: 'geo', ...(v.metier && { utm_content: v.metier }) }} />
            </div>
            {/* Plus de pied de page (demande de Benjamin, 27/11/2026) : les liens légaux restent, en une ligne discrète,
                pour la CNIL (retrait du consentement aux cookies) et les régies publicitaires. */}
            <p className="vi-wrap vi-legal">
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
          </section>
        </main>

        {/* ━━ Bouton flottant (à partir de 768 px), à la place du bouton WhatsApp depuis le 28/11/2026 (demande de Benjamin) :
            lien calendly.com, donc fenêtre Calendly et ClicCalendly comme les autres boutons. ViEffects le masque quand la
            réservation intégrée (#diagnostic) est à l'écran ou que la fenêtre est ouverte. ━━ */}
        <a className="vi-fab" href={CONTACT.calendly} data-cta="flottant">
          <ICalendar />
          Prendre rendez-vous
        </a>

        {/* ━━ Barre d'action mobile (affichée par ViEffects une fois le héros passé), sans le rond WhatsApp depuis le
            28/11/2026 (demande de Benjamin) : plus aucun accès WhatsApp ni téléphone sur la landing. ━━ */}
        <div className="vi-sticky" id="vi-sticky">
          <a className="vi-sticky__cta" href={CONTACT.calendly} data-cta="sticky">
            <span className="vi-sticky__txt">
              <span className="vi-sticky__l1">Prendre rendez-vous avec un expert</span>
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
