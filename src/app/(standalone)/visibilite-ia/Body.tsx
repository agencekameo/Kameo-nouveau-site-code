/*
 * Corps de la landing /visibilite-ia/ (accompagnement GEO, fond blanc). Composant serveur ; seules les parties
 * interactives sont des composants client (src/components/landing-geo/).
 * Faits et chiffres : src/content/geo.ts et src/lib/site.ts uniquement (prix, offre, formules, rapport, FAQ).
 * L'offre Black Friday est une couche : chaque élément d'offre a son équivalent permanent, sans trou.
 * Toutes les classes sont préfixées vi- (styles.ts) ; aucune classe de main.css, de SiteEffects ni de LandingEffects.
 */
import type { CSSProperties, ReactNode } from 'react';
import CookieSettingsLink from '@/components/consent/CookieSettingsLink';
import { fr } from '@/components/geo/GeoBlocks';
import Countdown from '@/components/landing-geo/Countdown';
import DiagQuestion from '@/components/landing-geo/DiagQuestion';
import HeroAnswer from '@/components/landing-geo/HeroAnswer';
import MeasureSwitch from '@/components/landing-geo/MeasureSwitch';
import QuestionTest from '@/components/landing-geo/QuestionTest';
import {
  GEO_ENGAGEMENTS,
  GEO_ENGINES,
  GEO_PASSAGES,
  GEO_PROMO,
  GEO_RAPPORT,
  GEO_RELEVES_PAR_MOIS,
  auditsGeo,
  euros,
  faqAccompagnement,
  faqAgence,
  nombre,
  noteEngagementGeo,
  plansGeo,
  prixBarre,
  prixDuJour,
  promoGeoActive,
  remiseGeoUniforme,
  remiseMaxGeo,
  reponsesParMois,
  termsGeo,
  type FaqItem,
  type GeoOffer,
} from '@/content/geo';
import { COMPANY, CONTACT, HOURS, PROOF, SOCIAL } from '@/lib/site';

const nb = ' ';

/** Prix et nombres jamais coupés en fin de ligne : euros() et nombre() de geo.ts mettent une espace normale. */
const eur = (n: number) => euros(n).replace(/ /g, nb);
const num = (n: number) => nombre(n).replace(/ /g, nb);
/** « 30/11 » tiré de GEO_PROMO.fin (bandeau mobile), jamais écrit en dur. */
const JOUR_MOIS_FIN = `${GEO_PROMO.fin.slice(8, 10)}/${GEO_PROMO.fin.slice(5, 7)}`;
/**
 * Badge « Nouveau » de la fiche ChatGPT (ouverte le 10/11/2026) : retiré seul après trois mois (page régénérée
 * toutes les minutes). La phrase datée, elle, reste affichée.
 */
const NOUVEAU_FICHE_JUSQUA = '2027-02-10T00:00:00+01:00';

/** Texte lu dans geo.ts : espaces insécables (fr), apostrophes typographiques (hors balises HTML). */
const t = (s: string) => fr(s).replace(/'(?![^<]*>)/g, '’');
/** HTML lu dans geo.ts : idem, et « e-mail » jamais coupé en fin de ligne. */
const tHtml = (s: string) => t(s).replace(/e-mail/g, '<span class="vi-nowrap">e-mail</span>');

/** Message prérempli de WhatsApp, le même partout sur la page (bouton flottant, FAQ, final, barre mobile). */
export const MESSAGE_WA = 'Bonjour Kameo, je voudrais savoir ce que les IA disent de mon entreprise.';
const WA_HREF = `${CONTACT.whatsapp}?text=${encodeURIComponent(MESSAGE_WA)}`;
const TEL_HREF = `tel:${CONTACT.phoneE164}`;
const FABRIQUE_URL = 'https://www.lafabriquedunet.fr/agences/pages/agences-geo-ile-de-france-paris';

const JOUR_COURT: Record<string, string> = { Monday: 'Lun', Tuesday: 'Mar', Wednesday: 'Mer', Thursday: 'Jeu', Friday: 'Ven', Saturday: 'Sam', Sunday: 'Dim' };
const JOUR: Record<string, string> = { Monday: 'lundi', Tuesday: 'mardi', Wednesday: 'mercredi', Thursday: 'jeudi', Friday: 'vendredi', Saturday: 'samedi', Sunday: 'dimanche' };
const heure = (t: string) => `${parseInt(t, 10)}${nb}h`;
const PREMIER_JOUR = HOURS.days[0];
const DERNIER_JOUR = HOURS.days[HOURS.days.length - 1];
const HEURES_COURT = `${JOUR_COURT[PREMIER_JOUR]}–${JOUR_COURT[DERNIER_JOUR].toLowerCase()}, ${heure(HOURS.opens)}–${heure(HOURS.closes)}`;
const HEURES_LONG = `du ${JOUR[PREMIER_JOUR]} au ${JOUR[DERNIER_JOUR]}, de ${heure(HOURS.opens)} à ${heure(HOURS.closes)}`;

/* ───────────────────────── Icônes (SVG en ligne : → ★ ✓ ne sont pas dans les polices) ───────────────────────── */

const Ico = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <svg className={'vi-ico ' + className} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    {children}
  </svg>
);
const IArrow = () => (
  <Ico>
    <path d="M4 10h12M11 5l5 5-5 5" />
  </Ico>
);
const ICheck = ({ className }: { className?: string }) => (
  <Ico className={className}>
    <path d="M4.5 10.5l3.5 3.5 7.5-8" />
  </Ico>
);
const IExt = () => (
  <Ico className="vi-ico--ext">
    <path d="M8 5h7v7M15 5l-9 9" />
  </Ico>
);
const IPhone = () => (
  <Ico>
    <path d="M6.5 3.5h-2a1 1 0 0 0-1 1.1A13 13 0 0 0 15.4 16.5a1 1 0 0 0 1.1-1v-2l-3-1.3-1.5 1.5a9 9 0 0 1-4.7-4.7L8.8 7.5 7.5 4.5z" />
  </Ico>
);
const IInfo = () => (
  <Ico>
    <circle cx="10" cy="10" r="7" />
    <path d="M10 9v5M10 6.5v.01" />
  </Ico>
);
const ILock = () => (
  <Ico>
    <rect x="4.5" y="9" width="11" height="8" rx="2" />
    <path d="M7 9V6.5a3 3 0 0 1 6 0V9" />
  </Ico>
);
const IWindow = () => (
  <Ico>
    <rect x="2.5" y="4" width="15" height="12" rx="2" />
    <path d="M2.5 7.5h15M6.5 12.2c.8-.9 2.2-.9 3 0M10.5 12.2c.8-.9 2.2-.9 3 0" />
  </Ico>
);
const ISearch = () => (
  <Ico>
    <circle cx="9" cy="9" r="5" />
    <path d="M13 13l3.5 3.5" />
  </Ico>
);
const ILink = () => (
  <Ico>
    <path d="M8.5 11.5l3-3M7 9l-1.5 1.5a2.5 2.5 0 0 0 3.5 3.5L10.5 12.5M13 11l1.5-1.5A2.5 2.5 0 0 0 11 6L9.5 7.5" />
  </Ico>
);
const IDoc = () => (
  <Ico>
    <path d="M6 3.5h5.5L15 7v9.5H6z" />
    <path d="M11 3.5V7h4" />
  </Ico>
);
const IStar = ({ className = 'vi-star' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="M10 2.5l2.3 4.9 5.2.6-3.9 3.6 1.1 5.2L10 14.2l-4.7 2.6 1.1-5.2-3.9-3.6 5.2-.6z" />
  </svg>
);
const IWhatsApp = () => (
  <svg className="vi-wa-ico" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);
/** Icônes des conditions (termsGeo), en trait dégradé ; repli : coche. */
const TERM_ICONS: Record<string, ReactNode> = {
  'unlock-keyhole': (
    <>
      <rect x="4.5" y="9" width="11" height="8" rx="2" />
      <path d="M7 9V6.5a3 3 0 0 1 5.8-1" />
    </>
  ),
  'piggy-bank': (
    <>
      <rect x="3" y="4" width="14" height="13" rx="2" />
      <path d="M3 8h14M7 2.5v3M13 2.5v3M7 11.5h2M11 11.5h2M7 14h2" />
    </>
  ),
  'shield-halved': (
    <>
      <path d="M10 2.8l6 2.2v4.6c0 3.6-2.5 6.4-6 7.6-3.5-1.2-6-4-6-7.6V5z" />
      <path d="M7.3 10l2 2 3.6-3.8" />
    </>
  ),
  percent: (
    <>
      <path d="M15 5L5 15" />
      <circle cx="6.5" cy="6.5" r="2" />
      <circle cx="13.5" cy="13.5" r="2" />
    </>
  ),
};

/* ───────────────────────── Petits composants ───────────────────────── */

/** Lien externe : nouvel onglet, annoncé aux lecteurs d'écran. */
function Ext({ href, children, className, label, cta }: { href: string; children: ReactNode; className?: string; label?: string; cta?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener" className={className} aria-label={label} data-cta={cta}>
      {children}
      {!label && <span className="sr-only"> (nouvel onglet)</span>}
    </a>
  );
}

/**
 * Bouton principal : lien Calendly (ouvert dans la fenêtre CalendlyModal), texte encre sur le dégradé.
 * sub : seconde ligne dans le bouton (« Diagnostic gratuit · 30 min en visio »), pour dire que le clic ouvre un rendez-vous.
 */
function Cta({
  cta,
  children,
  size,
  block,
  outline,
  label,
  sub,
}: {
  cta: string;
  children: ReactNode;
  size?: 'lg' | 'xl';
  block?: boolean;
  outline?: boolean;
  label?: string;
  sub?: ReactNode;
}) {
  const cls = ['vi-btn', size && `vi-btn--${size}`, block && 'vi-btn--block', outline && 'vi-btn--outline', sub && 'vi-btn--sub']
    .filter(Boolean)
    .join(' ');
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

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="vi-eyebrow">{children}</p>;
}

/** Sans JavaScript : le test garde ses cartes à crochets (comme /test-visibilite-ia/). */
const NOSCRIPT_CSS = [
  '.vi-tool__fields,.vi-live,.vi-copy,.vi-tool__privacy{display:none!important}',
  '.vi-tool{grid-template-columns:minmax(0,1fr)!important}',
  '.vi-tool__side{order:2}',
  '.vi-tool__notes{margin-top:0!important}',
].join('');

const SCALE = ['Absent', 'Mentionné', 'Cité', 'Recommandé'];
function Scale({ pick, labels = true, className = '' }: { pick?: number; labels?: boolean; className?: string }) {
  return (
    <ol className={'vi-scale' + (pick !== undefined ? ' vi-scale--pick' : '') + (className ? ' ' + className : '')} aria-hidden="true">
      {SCALE.map((s, i) => (
        <li key={s} className={pick === i ? 'is-on' : undefined}>
          <span className="vi-scale__bar" />
          {labels && <span className="vi-scale__lbl">{s}</span>}
        </li>
      ))}
    </ol>
  );
}

/** L'emplacement « Votre entreprise ? » en pointillés dégradés (motif de la page). */
function Slot({ label = `Votre entreprise${nb}?`, sm, noLabel }: { label?: string; sm?: boolean; noLabel?: boolean }) {
  return (
    <span className={'vi-slot' + (sm ? ' vi-slot--sm' : '')} aria-hidden="true">
      <svg className="vi-slot__frame" focusable="false">
        <rect x="0" y="0" width="100%" height="100%" rx="14" ry="14" />
      </svg>
      <span className="vi-slot__q">
        <span>?</span>
      </span>
      {!noLabel && <span className="vi-slot__label">{label}</span>}
    </span>
  );
}

/** Contact de la FAQ : deux boutons (WhatsApp, téléphone), comme dans le CTA final. */
function FaqContact({ className }: { className: string }) {
  return (
    <div className={'vi-faq__contact ' + className}>
      <p>
        Une autre question&nbsp;? {HEURES_LONG.charAt(0).toUpperCase() + HEURES_LONG.slice(1)}.
      </p>
      <div className="vi-final__btns">
        <Ext href={WA_HREF} className="vi-btn-ghost" cta="whatsapp-faq" label="Écrire sur WhatsApp à Kameo (nouvel onglet)">
          <IWhatsApp />
          Écrire sur WhatsApp
        </Ext>
        <a href={TEL_HREF} className="vi-btn-ghost" data-cta="tel-faq" aria-label={`Appeler le ${CONTACT.phone} (Kameo)`}>
          <IPhone />
          Appeler le {CONTACT.phone}
        </a>
      </div>
    </div>
  );
}

function Fabrique({ children }: { children: ReactNode }) {
  return <Ext href={FABRIQUE_URL}>{children}</Ext>;
}

/* ───────────────────────── Contenus ───────────────────────── */

const HERO_VARIANTS = [
  { metier: 'un plombier', ville: 'Nantes' },
  { metier: 'un avocat', ville: 'Nantes' },
  { metier: 'une agence web', ville: 'Lille' },
  { metier: 'un garage', ville: 'Rennes' },
];
const HERO_ROWS = [
  { name: 'Entreprise A', desc: 'très bien notée par ses clients' },
  { name: 'Entreprise B', desc: 'citée dans un comparatif local' },
  { name: 'Entreprise C', desc: 'prix et services clairs sur son site' },
];

const BLOCAGES: { group: string; cards: { t: string; p: string; do: string; illu?: 'robot' | 'questions' | 'fiche' }[] }[] = [
  {
    group: 'Sur votre site',
    cards: [
      {
        t: 'Les robots des IA ne peuvent pas lire votre site',
        p: 'Un fichier de réglage trop strict (robots.txt), un pare-feu qui bloque les robots des IA, ou un contenu affiché en JavaScript, que la plupart de ces robots ne lisent pas : l’IA ne voit alors qu’une page vide.',
        do: 'Accès des robots corrigé, pages inscrites dans Google, Bing et Brave, puis vérifiées chaque mois. Dans les 3 formules.',
        illu: 'robot',
      },
      {
        t: 'Vos pages ne répondent pas aux questions',
        p: 'Services flous, prix absents, pas de réponse claire à « pour qui ? », « combien ? » ou « en combien de temps ? ». L’IA cite plus volontiers une page qui répond franchement.',
        do: '3, 5 ou 10 pages existantes améliorées chaque mois selon la formule, et de nouveaux contenus dès Croissance.',
        illu: 'questions',
      },
      {
        t: 'Les IA ne savent pas qui vous êtes',
        p: 'Pas de page « à propos » claire, des services décrits en termes vagues, une ville ou une zone jamais nommée : l’IA peine à vous relier à votre métier et à votre clientèle.',
        do: 'Corrections techniques de votre site et informations identiques partout (site, fiches, annuaires). Dans les 3 formules.',
        illu: 'fiche',
      },
    ],
  },
  {
    group: 'En dehors de votre site',
    cards: [
      {
        t: 'Vos informations se contredisent',
        p: 'Nom, adresse, services ou prix différents entre votre site, votre fiche Google et les annuaires : les IA se méfient des sources qui se contredisent et préfèrent un concurrent plus net.',
        do: 'Les erreurs des IA sur votre entreprise repérées, puis corrigées à la source. Dans les 3 formules.',
      },
      {
        t: 'Personne d’autre ne parle de vous',
        p: 'Les IA croisent leurs sources : absent des annuaires, des comparatifs, des avis, de LinkedIn ou des médias de votre secteur, vous passez après ceux dont on parle, même avec un bon site.',
        do: 'Annuaires et sites d’avis, avec les textes prêts dans Essentiel, 2 inscriptions par mois faites par nous dès Croissance, et des démarches auprès de comparatifs et de médias avec Autorité.',
      },
      {
        t: 'Vos concurrents ont pris la place',
        p: 'Sur les questions de vos clients, d’autres noms reviennent déjà. Pour prendre une place, il faut d’abord savoir qui l’occupe, et sur quels sites les IA les trouvent.',
        do: 'Qui est cité à votre place, et d’où viennent les réponses, dans votre rapport, chaque mois.',
      },
    ],
  },
];

/** Points clés des cartes. Valeur des audits offerts lue dans auditsGeo() (jamais additionnée au prix). */
const points = (express: GeoOffer, complet: GeoOffer): Record<string, { lead?: string; items: string[] }> => ({
  essentiel: {
    items: [
      `${express.name} offert au démarrage (${eur(express.price)} HT s’il est pris seul)`,
      'Erreurs des IA corrigées à la source',
      'Indexation et corrections techniques, 3 pages améliorées par mois',
      '3 actions par mois à faire vous-même, textes prêts',
    ],
  },
  croissance: {
    lead: 'Tout l’Essentiel, et :',
    items: [
      `${complet.name} offert au démarrage (${eur(complet.price)} HT s’il est pris seul)`,
      'Fiche ChatGPT revendiquée et tenue à jour, si vous êtes éligible',
      '2 nouveaux contenus par mois, validés par vous',
      `2 inscriptions par mois dans les annuaires et sites d’avis, un point de 30${nb}min chaque mois`,
    ],
  },
  autorite: {
    lead: 'Tout Croissance, et :',
    items: [
      'Audit GEO Complet élargi : 60 questions, 5 concurrents',
      '3 démarches par mois auprès de comparatifs et de médias',
      '4 nouveaux contenus par mois, validés par vous',
      '1 heure par mois avec Benjamin Dayan, fondateur',
    ],
  },
});

/** FAQ : libellé affiché (mots du visiteur) et réponse lue dans geo.ts par sa question exacte. */
const FAQ: [string, 'agence' | 'accompagnement', string][] = [
  ['Le GEO remplace-t-il mon référencement Google ?', 'agence', 'Le GEO remplace-t-il le SEO ?'],
  ['Le GEO est-il utile pour une PME ou une entreprise locale ?', 'agence', 'Le GEO est-il utile pour une PME ou une entreprise locale ?'],
  ['Combien de temps avant les premiers effets ?', 'agence', 'Combien de temps faut-il pour être cité par ChatGPT ou les autres IA ?'],
  ['Peut-on payer pour apparaître dans ChatGPT ?', 'agence', 'Peut-on payer pour apparaître dans ChatGPT ?'],
  ['Quelle différence avec un outil de suivi de visibilité IA ?', 'accompagnement', 'Quelle différence avec un outil de suivi de visibilité IA ?'],
  ['Et si une IA dit quelque chose de faux sur mon entreprise ?', 'accompagnement', 'Que faites-vous si une IA dit quelque chose de faux sur mon entreprise ?'],
  ['Je ne suis pas technique. Que faut-il vous fournir ?', 'accompagnement', 'Que faut-il vous fournir pour démarrer ?'],
];

/** Relevés OmegaCloud des 14 et 15 novembre 2026 (seules les valeurs connues) ; la 1re ligne est le chiffre vedette (en tête de carte, hors tableau). */
const RELEVE_OMEGA: { q: ReactNode; rows: { ia: string; n: number; of: number; place: ReactNode }[] }[] = [
  {
    q: <>«&nbsp;Quels sont les meilleurs hébergeurs de VPS Windows en France&nbsp;?&nbsp;»</>,
    rows: [{ ia: 'ChatGPT', n: 6, of: 6, place: <>2<sup>e</sup> (1<sup>re</sup> au mieux)</> }],
  },
  {
    q: <>Question sur les VPS pour le trading</>,
    rows: [
      { ia: 'Claude', n: 3, of: 6, place: <>1<sup>re</sup></> },
      { ia: 'ChatGPT', n: 3, of: 6, place: <>2<sup>e</sup> (1<sup>re</sup> au mieux)</> },
      { ia: 'Perplexity', n: 1, of: 6, place: <>3<sup>e</sup></> },
    ],
  },
  { q: <>Question sur les VPS Linux</>, rows: [{ ia: `Les ${GEO_ENGINES.length}${nb}IA`, n: 0, of: 24, place: <>pas encore cité</> }] },
];
const OMEGA_VEDETTE = RELEVE_OMEGA[0].rows[0];

const AVIS = [
  {
    titre: 'Une agence SEO réactive et experte',
    texte:
      'Benjamin se distingue par une excellente écoute et une vraie compréhension des besoins. Louison apporte une expertise technique SEO solide, avec une parfaite maîtrise des enjeux liés à la structure du site, aux performances et à l’indexation.',
    nom: 'Verena Dey',
    role: 'Cliente SEO Kameo',
    initiales: 'VD',
    url: 'https://fr.trustpilot.com/reviews/699db5bba3956c16d29e3b18',
  },
  {
    titre: 'Équipe fiable et transparente',
    texte: 'Équipe efficace, impliquée, à l’écoute, transparente, disponible, fiable, qui tient ses délais […] Je recommande !',
    nom: 'Céline Taranto',
    role: 'Cliente Kameo',
    initiales: 'CT',
    url: 'https://fr.trustpilot.com/reviews/69b7d14dbf55648f616329ae',
  },
  {
    titre: 'Première expérience réussie',
    texte:
      'Première expérience pour moi, complètement novice. L’équipe a su répondre à mes attentes avec beaucoup de patience et de gentillesse […]. Très bonne expérience.',
    nom: 'Sophie Mounsi',
    role: 'Cliente Kameo',
    initiales: 'SM',
    url: 'https://fr.trustpilot.com/reviews/66e176cf8a3aad47e01c4fba',
  },
];

/* ───────────────────────── Illustrations (décoratives, aria-hidden) ───────────────────────── */

function SceneIllu({ n }: { n: number }) {
  if (n === 0)
    return (
      <div className="vi-scene__illu vi-scene__illu--ask">
        <span className="vi-scene__who">Votre futur client</span>
        <span className="vi-scene__input">
          <span className="vi-scene__qtxt">
            Qui me <span className="vi-nowrap">conseilles-tu{nb}?</span>
          </span>
          <i className="vi-scene__caret" />
          <span className="vi-scene__send">
            <svg viewBox="0 0 20 20" focusable="false">
              <path d="M10 15V5M5.5 9.5L10 5l4.5 4.5" />
            </svg>
          </span>
        </span>
      </div>
    );
  if (n === 1)
    return (
      <div className="vi-scene__illu vi-scene__illu--answer">
        <span className="vi-scene__line" style={{ width: '92%' }}>
          <b>A</b>
        </span>
        <span className="vi-scene__line" style={{ width: '78%' }}>
          <b>B</b>
        </span>
        <span className="vi-scene__line" style={{ width: '86%' }}>
          <b>C</b>
        </span>
        <span className="vi-scene__line" style={{ width: '40%' }} />
      </div>
    );
  return (
    <div className="vi-scene__illu vi-scene__illu--call">
      <span className="vi-scene__notif">
        <IPhone />
        Appel <IArrow /> Entreprise A
      </span>
      <span className="vi-scene__stats">
        <span className="vi-scene__stats-t">Vos statistiques</span>
        <span className="vi-scene__flat" />
        <span className="vi-scene__stats-n">aucune alerte</span>
      </span>
    </div>
  );
}

const hatch = (w = '100%') => <i className="vi-hatch" style={{ width: w }} />;

function TileSchema({ title }: { title: string }) {
  switch (title) {
    case 'Votre taux de présence':
      return (
        <div className="vi-tile__s vi-tile__s--rows">
          {GEO_ENGINES.map((e) => (
            <span key={e} className="vi-tile__row">
              <span className="vi-tile__eng">{e}</span>
              {hatch()}
            </span>
          ))}
        </div>
      );
    case 'Comment vous apparaissez':
      return (
        <div className="vi-tile__s">
          <Scale />
        </div>
      );
    case 'Qui est cité à votre place':
      return (
        <div className="vi-tile__s vi-tile__s--who">
          {['A', 'B', 'C'].map((l) => (
            <span key={l} className="vi-tile__row">
              <span className="vi-tile__sq">{l}</span>
              <span className="vi-tile__lbl">Concurrent</span>
              {hatch()}
            </span>
          ))}
          <Slot sm label="Vous" />
        </div>
      );
    case 'D’où viennent les réponses':
      return (
        <div className="vi-tile__s vi-tile__s--rows">
          {['88%', '72%', '60%'].map((w) => (
            <span key={w} className="vi-tile__row">
              <ILink />
              {hatch(w)}
            </span>
          ))}
        </div>
      );
    case 'Vos pages indexées':
      return (
        <div className="vi-tile__s vi-tile__s--rows">
          {['Google', 'Bing', 'Brave'].map((m) => (
            <span key={m} className="vi-tile__row">
              <span className="vi-tile__eng">{m}</span>
              <span className="vi-tile__sqs">
                {Array.from({ length: 6 }, (_, i) => (
                  <i key={i} className="vi-hatch" />
                ))}
              </span>
            </span>
          ))}
        </div>
      );
    case 'Ce que cela vous apporte':
      return (
        <div className="vi-tile__s vi-tile__s--boxes">
          {['Visites venues des IA', 'Citations dans Copilot', 'Fiche ChatGPT'].map((b) => (
            <span key={b} className="vi-tile__box">
              <span className="vi-tile__boxl">{b}</span>
              <span className="vi-tile__dash">—</span>
            </span>
          ))}
        </div>
      );
    case 'Ce que nous avons fait':
      return (
        <div className="vi-tile__s vi-tile__s--rows">
          {['90%', '74%', '82%'].map((w) => (
            <span key={w} className="vi-tile__row">
              <span className="vi-tile__cb" />
              {hatch(w)}
            </span>
          ))}
        </div>
      );
    case 'Vos données':
      return (
        <div className="vi-tile__s vi-tile__s--rows">
          {['70%', '54%'].map((w) => (
            <span key={w} className="vi-tile__row">
              <IDoc />
              {hatch(w)}
            </span>
          ))}
        </div>
      );
    default:
      return <div className="vi-tile__s vi-tile__s--rows">{hatch()}</div>;
  }
}

/* ───────────────────────── Page ───────────────────────── */

export default function Body() {
  const promo = promoGeoActive();
  const ficheNouvelle = Date.now() < Date.parse(NOUVEAU_FICHE_JUSQUA);
  const plans = plansGeo();
  const [ESSENTIEL, CROISSANCE, AUTORITE] = plans;
  const moisEngagement = Number(noteEngagementGeo().match(/\d+/)?.[0] ?? 6);
  const releves = moisEngagement * GEO_RELEVES_PAR_MOIS;
  /** Index du relevé du bilan des 3 mois (6e relevé), mis en avant dans la frise avec le démarrage. */
  const releveBilan = 3 * GEO_RELEVES_PAR_MOIS - 1;
  const [EXPRESS, COMPLET] = auditsGeo();
  const POINTS = points(EXPRESS, COMPLET);
  /** Engagements écrits noir sur blanc : lus dans geo.ts (GEO_ENGAGEMENTS), jamais recopiés. */
  const ENG = Object.fromEntries(GEO_ENGAGEMENTS) as Record<string, string>;
  const lc = (s = '') => s.charAt(0).toLowerCase() + s.slice(1);
  const remise = remiseGeoUniforme() ? (
    <>
      <strong>−{remiseMaxGeo()}&nbsp;%</strong> sur chaque formule d’accompagnement GEO
    </>
  ) : (
    <>
      Jusqu’à <strong>−{remiseMaxGeo()}&nbsp;%</strong> sur l’accompagnement GEO
    </>
  );
  const faqSrc: Record<'agence' | 'accompagnement', FaqItem[]> = { agence: faqAgence(), accompagnement: faqAccompagnement() };
  /** Deux questions propres à la landing, sur le rendez-vous lui-même (faits : AG l.831, microcopies de la page). */
  const faqLanding = [
    {
      label: 'Que se passe-t-il pendant le diagnostic gratuit ?',
      a: `30${nb}minutes en visio. Nous posons en direct 5${nb}questions de vos clients à ${GEO_ENGINES.slice(0, -1).join(', ')} et ${GEO_ENGINES[GEO_ENGINES.length - 1]}, en partage d’écran, puis nous choisissons ensemble le bon format : audit ou accompagnement.`,
    },
    {
      label: 'Le diagnostic m’engage-t-il à signer ?',
      a: `Non. Vous voyez les réponses des IA, que vous signiez ou non. Si vous choisissez un accompagnement, il comprend ${moisEngagement}${nb}mois d’engagement, puis il est sans engagement.`,
    },
  ];
  const faq = [
    ...faqLanding,
    ...FAQ.map(([label, from, q]) => ({ label, a: faqSrc[from].find((f) => f.q === q)?.a })).filter(
      (f): f is { label: string; a: string } => !!f.a,
    ),
  ];
  const rapportVedette = GEO_RAPPORT.find(([t]) => t === 'Qui est cité à votre place');
  const rapport = rapportVedette ? [rapportVedette, ...GEO_RAPPORT.filter((r) => r !== rapportVedette)] : GEO_RAPPORT;
  const prixPublics = (
    <>
      Prix publics&nbsp;: dès <strong>{eur(ESSENTIEL.price)}&nbsp;HT/mois</strong>
    </>
  );
  /* Chaque élément d'offre ([data-vi-promo]) a son équivalent permanent ([data-vi-nopromo], rendu masqué pendant
     l'offre) : Countdown bascule de l'un à l'autre à l'échéance, même sur une page servie depuis le cache. */
  const prixHero =
    promo && prixBarre(ESSENTIEL) !== null ? (
      <>
        <span className="vi-trust__pp" data-vi-promo="">
          <span className="vi-chip-promo">{GEO_PROMO.nom}</span>
          <span>
            Dès <strong>{eur(prixDuJour(ESSENTIEL))}&nbsp;HT/mois</strong> au lieu de{' '}
            <span className="vi-strike">{eur(ESSENTIEL.price)}&nbsp;HT</span>
          </span>
        </span>
        <span data-vi-nopromo="" hidden>
          {prixPublics}
        </span>
      </>
    ) : (
      <span>{prixPublics}</span>
    );

  return (
    <>
      {/* Sans JavaScript : ce qui n'a de sens qu'avec lui (champs du test, Copier, compte à rebours) est masqué */}
      <noscript dangerouslySetInnerHTML={{ __html: `<style>${NOSCRIPT_CSS}</style>` }} />
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
          <div className="vi-offre" id="vi-offre" data-vi-promo="">
            <p className="vi-offre__in">
              <span className="vi-chip-promo">{GEO_PROMO.nom}</span>{' '}
              <span className="vi-offre__long">
                {remise} pour toute signature jusqu’au {GEO_PROMO.finTexte} inclus. Prix conservé pendant tout l’engagement.
              </span>
              <span className="vi-offre__short">
                {remiseGeoUniforme() ? <>−{remiseMaxGeo()}&nbsp;% sur chaque formule</> : <>jusqu’à −{remiseMaxGeo()}&nbsp;% sur l’accompagnement</>}, pour
                toute signature
                <span className="vi-offre__date"> jusqu’au {GEO_PROMO.finTexte} inclus</span>
                <span className="vi-offre__dshort" aria-hidden="true">
                  {' '}
                  jusqu’au {JOUR_MOIS_FIN}
                </span>
              </span>{' '}
              <span className="vi-offre__l2">
                <Countdown end={GEO_PROMO.fin} />
                <a href="#formules" className="vi-offre__link">
                  Voir les prix
                </a>
              </span>
            </p>
          </div>
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
            <div className="vi-top__tel">
              <span className="vi-top__hours">{HEURES_COURT}</span>
              <a className="vi-top__num" href={TEL_HREF} data-cta="tel-top" aria-label={`Appeler Kameo au ${CONTACT.phone}`}>
                <IPhone />
                {CONTACT.phone}
              </a>
              {/* Ordinateur : visible une fois le héros passé (ViEffects : .is-past-hero), en-tête collant */}
              <a className="vi-btn vi-top__cta" href={CONTACT.calendly} data-cta="top">
                Voir ce que les IA disent de moi
              </a>
            </div>
            <a className="vi-top__round" href={TEL_HREF} data-cta="tel-top" aria-label={`Appeler Kameo au ${CONTACT.phone}`}>
              <IPhone />
            </a>
          </div>
        </header>

        <main id="contenu">
          {/* ━━ 1 · Héros ━━ */}
          <section className="vi-hero" id="hero" aria-labelledby="vi-h1">
            <div className="vi-hero__halo" aria-hidden="true" />
            <div className="vi-wrap vi-hero__grid">
              <div className="vi-hero__text">
                <p className="vi-hero__eyebrow">
                  <span className="vi-only-lg">PME, indépendants, commerces · votre visibilité dans ChatGPT et les IA</span>
                  <span className="vi-only-sm">PME et commerces · ChatGPT et les IA</span>
                </p>
                <h1 className="vi-h1" id="vi-h1">
                  <span>Vos clients demandent à ChatGPT qui choisir.</span>{' '}
                  <span>
                    Votre nom est-il <span className="vi-gt">dans la réponse</span>&nbsp;?
                  </span>
                </h1>
                <p className="vi-lead">
                  <span className="vi-lead__l">
                    Kameo mesure ce que ChatGPT, Gemini, Perplexity et Claude répondent à vos clients, corrige ce qui les empêche de vous
                    citer et développe votre présence là où elles cherchent leurs réponses.
                  </span>
                  <span className="vi-lead__s">Kameo mesure ce que les IA répondent à vos clients et corrige ce qui les empêche de vous citer.</span>
                </p>
                <div className="vi-cta-row">
                  <Cta cta="hero" size="lg" sub={<>Diagnostic gratuit · 30&nbsp;min en visio</>}>
                    Voir ce que les IA disent de moi
                  </Cta>
                  <a className="vi-link" href="#formules">
                    Voir les formules et les prix <span aria-hidden="true">↓</span>
                  </a>
                  <p className="vi-micro">Un rendez-vous en visio&nbsp;: nous posons vos questions en direct aux 4&nbsp;IA, en partage d’écran.</p>
                </div>
                <div className="vi-trust" role="group" aria-label="Indicateurs de confiance">
                  <div className="vi-trust__row">
                    <Ext href={SOCIAL.trustpilot} className="vi-trust__item vi-trust__tp">
                      <IStar />
                      <span>
                        <span className="vi-trust__note">{PROOF.avisNote}/5</span> sur Trustpilot · {PROOF.avisNombre}&nbsp;avis
                      </span>
                    </Ext>
                    <p className="vi-trust__item vi-trust__price">{prixHero}</p>
                  </div>
                  {/* Hors offre : l'actualité qui donne une raison d'agir maintenant (pendant l'offre, le Black Friday tient ce rôle) */}
                  <p className="vi-trust__new" data-vi-nopromo={promo ? '' : undefined} hidden={promo}>
                    {ficheNouvelle && <span className="vi-tag vi-tag--new">Nouveau</span>}
                    <span>Depuis le 10&nbsp;novembre 2026, les entreprises peuvent revendiquer leur fiche ChatGPT.</span>
                  </p>
                  <p className="vi-trust__fab">
                    8<sup>e</sup> de la sélection «&nbsp;<Fabrique>Les meilleures agences GEO à Paris</Fabrique>&nbsp;» de La Fabrique du Net
                    (relevé du 18/11/2026)
                  </p>
                </div>
              </div>
              <HeroAnswer engines={GEO_ENGINES} variants={HERO_VARIANTS} rows={HERO_ROWS} />
            </div>
          </section>

          {/* ━━ 2 · L'angle mort ━━ */}
          <section className="vi-sec vi-sec--soft" id="angle-mort" aria-labelledby="angle-mort-t">
            <div className="vi-wrap">
              <header className="vi-head" data-vi-reveal="">
                <Eyebrow>Ce qui a changé</Eyebrow>
                <h2 className="vi-h2 vi-h2--manifest" id="angle-mort-t">
                  <span className="vi-dim">Quand ChatGPT recommande un concurrent,</span> personne ne vous prévient.
                </h2>
              </header>

              <ol className="vi-scene">
                {[
                  ['1 · La question', <>Votre futur client demande à une IA&nbsp;: «&nbsp;Qui me conseilles-tu&nbsp;?&nbsp;»</>],
                  ['2 · La réponse', <>L’IA rédige une réponse et n’y cite que quelques entreprises.</>],
                  ['3 · Le choix', <>Il contacte l’une d’elles. Il n’est jamais passé par votre site&nbsp;: rien dans vos statistiques, aucune alerte.</>],
                ].map(([lbl, txt], i) => (
                  <li key={i} className="vi-scene__item" data-vi-reveal="" style={{ '--vi-i': i } as CSSProperties}>
                    <span className="vi-scene__dot" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div className="vi-scene__card">
                      <div className="vi-scene__frame" aria-hidden="true">
                        <SceneIllu n={i} />
                      </div>
                      <p className="vi-scene__lbl">{lbl}</p>
                      <p className="vi-scene__txt">{txt}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="vi-vs vi-bascule" data-vi-reveal="">
                <p className="sr-only">Sur Google, une page de dix liens et une page suivante. Dans une réponse d’IA, quelques noms seulement.</p>
                <div className="vi-vs__col">
                  <div className="vi-bascule__vis vi-bascule__vis--g" aria-hidden="true">
                    {['84%', '68%', '90%', '62%', '76%', '88%', '70%', '64%', '82%', '74%'].map((w, i) => (
                      <span key={i} className="vi-bascule__res">
                        <i />
                        <b style={{ width: w }} />
                      </span>
                    ))}
                    <span className="vi-bascule__pages">1 2 3 · Suivant</span>
                  </div>
                  <h3 className="vi-bascule__t">Sur Google</h3>
                  <p className="vi-bascule__c">Dix liens, et une deuxième page.</p>
                </div>
                <div className="vi-vs__col vi-vs__col--ia">
                  <div className="vi-bascule__vis vi-bascule__vis--ia" aria-hidden="true">
                    <span className="vi-bascule__ans" style={{ width: '94%' }} />
                    {['A', 'B', 'C'].map((l, i) => (
                      <span key={l} className="vi-bascule__cite">
                        <b>{l}</b>
                        <i style={{ width: ['72%', '64%', '58%'][i] }} />
                      </span>
                    ))}
                    <span className="vi-bascule__slotrow">
                      <Slot sm noLabel />
                      <span className="vi-bascule__none">Pas de deuxième page</span>
                    </span>
                  </div>
                  <h3 className="vi-bascule__t">Dans une réponse d’IA</h3>
                  <p className="vi-bascule__c">Quelques noms. Pas de deuxième page.</p>
                </div>
              </div>

              <p className="vi-after" data-vi-reveal="">
                Peu de places, donc. Ceux qui ont travaillé leur présence avant vous les occupent, question après question.
              </p>

              <div className="vi-def" data-vi-reveal="">
                <p className="vi-def__lbl">Définition</p>
                <p className="vi-def__txt">
                  Travailler sa place dans ces réponses, c’est ce qu’on appelle le <strong>GEO</strong> (Generative Engine Optimization).
                </p>
              </div>

              <h3 className="vi-stats__t" data-vi-reveal="">
                Trois chiffres, avec leur source
              </h3>
              <ul className="vi-stats">
                <li className="vi-stat" data-vi-reveal="" data-vi-fill="" style={{ '--vi-i': 0 } as CSSProperties}>
                  <p className="vi-stat__num">
                    33 <span className="vi-stat__unit">millions</span>
                  </p>
                  <div className="vi-stat__body">
                    <p className="vi-stat__txt">de Français utilisent un service d’IA chaque mois&nbsp;; ChatGPT capte 76&nbsp;% du temps passé.</p>
                    <p className="vi-src">
                      <span>
                        Source&nbsp;:{' '}
                        <Ext href="https://www.arcom.fr/en/find-out-more/studies-and-data/studies-reviews-and-reports/artificial-intelligence-services-audience-barometer-1st-edition">
                          Arcom et Médiamétrie, juin 2026
                        </Ext>
                      </span>
                    </p>
                  </div>
                </li>
                <li className="vi-stat" data-vi-reveal="" data-vi-fill="" style={{ '--vi-i': 1 } as CSSProperties}>
                  <p className="vi-stat__num">52,6&nbsp;%</p>
                  <div className="vi-stat__body">
                    <p className="vi-stat__txt">
                      des recherches françaises étudiées affichaient un Aperçu IA en août 2026.{' '}
                      <span className="vi-stat__aside">Même Google répond désormais avec une IA.</span>
                    </p>
                    <p className="vi-src">
                      <span>
                        Source&nbsp;: <Ext href="https://seranking.com/fr/blog/etude-apercus-ia-france/">SE Ranking, août 2026</Ext>
                      </span>
                    </p>
                  </div>
                </li>
                <li className="vi-stat" data-vi-reveal="" data-vi-fill="" style={{ '--vi-i': 2 } as CSSProperties}>
                  <p className="vi-stat__num">43,8&nbsp;%</p>
                  <div className="vi-stat__body">
                    <p className="vi-stat__txt">
                      des pages citées par ChatGPT pour recommander logiciels, produits ou agences sont des listes «&nbsp;les meilleurs…&nbsp;».{' '}
                      <span className="vi-stat__aside">Ce que les autres sites disent de vous compte.</span>
                    </p>
                    <p className="vi-src">
                      <span>
                        Source&nbsp;: <Ext href="https://ahrefs.com/blog/best-lists-research/">Ahrefs, décembre 2025</Ext>
                      </span>
                    </p>
                  </div>
                </li>
              </ul>

              <aside className="vi-note vi-nuance" data-vi-reveal="" aria-labelledby="vi-nuance-t">
                <div>
                  <h3 className="vi-note__t" id="vi-nuance-t">
                    Nous préférons vous donner aussi ce chiffre
                  </h3>
                  <p className="vi-note__txt">
                    Pour chercher une information, 59&nbsp;% des utilisateurs d’IA préfèrent encore un moteur de recherche (
                    <Ext href="https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/barometre-du-numerique/le-barometre-du-numerique-edition-2026.html">
                      Baromètre du numérique 2026
                    </Ext>
                    ). Le GEO complète votre référencement Google, il ne le remplace pas.
                  </p>
                </div>
              </aside>
            </div>
          </section>

          {/* ━━ 3 · Le test ━━ */}
          <section className="vi-sec" id="test" aria-labelledby="test-t">
            <div className="vi-wrap">
              <header className="vi-head" data-vi-reveal="">
                <Eyebrow>À vous de voir</Eyebrow>
                <h2 className="vi-h2" id="test-t">
                  Les questions que vos clients posent aux IA
                </h2>
                <p className="vi-chapo">
                  Dites-nous ce que vos clients cherchent&nbsp;: nous composons les questions qu’ils pourraient poser à ChatGPT, Gemini,
                  Perplexity ou Claude.
                </p>
              </header>

              <div className="vi-toolbox" data-vi-reveal="">
                <QuestionTest>
                  <div className="vi-tool__notes">
                    <p className="vi-tool__tip">
                      <IWindow />
                      <span>
                        Si vous les posez vous-même, faites-le dans une fenêtre de navigation privée&nbsp;: la réponse sera plus proche de celle
                        que reçoit un futur client.
                      </span>
                    </p>
                    <p className="vi-tool__privacy">
                      <ILock />
                      <span>Rien n’est envoyé&nbsp;: ce que vous tapez reste dans votre navigateur.</span>
                    </p>
                  </div>
                </QuestionTest>
              </div>

              <div className="vi-grille" data-vi-reveal="">
                <h3 className="vi-h3">Puis lisez la réponse avec cette grille</h3>
                <ul className="vi-grille__cells">
                  {[
                    ['Absent', 'Votre entreprise n’apparaît pas du tout.'],
                    ['Mentionné', 'Votre nom apparaît, sans lien.'],
                    ['Cité', 'Un lien renvoie vers votre site ou une page qui parle de vous.'],
                    ['Recommandé', 'L’IA vous présente comme un bon choix.'],
                  ].map(([t, d], i) => (
                    <li key={t} className="vi-grille__cell">
                      <Scale pick={i} labels={false} />
                      <p className="vi-grille__t">{t}</p>
                      <p className="vi-grille__d">{d}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="vi-honest" data-vi-reveal="">
                Nous ne simulons pas la réponse&nbsp;: elle change d’un essai à l’autre. La même liste de marques revient moins d’une fois sur
                100 (
                <Ext href="https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/">
                  SparkToro, janvier 2026
                </Ext>
                ).
              </p>

              <div className="vi-sec-cta" data-vi-reveal="">
                <p className="vi-sec-cta__lead">
                  <strong>Une réponse isolée ne prouve rien.</strong> En 30&nbsp;minutes, nous posons en direct 5&nbsp;questions de vos clients aux 4&nbsp;IA,
                  en partage d’écran.
                </p>
                <Cta cta="test">Poser ces questions en direct aux 4&nbsp;IA</Cta>
                <p className="vi-micro">Diagnostic gratuit · en visio</p>
              </div>
            </div>
          </section>

          {/* ━━ 4 · Les résultats (la preuve, juste après le test) ━━ */}
          <section className="vi-sec vi-sec--soft" id="resultats" aria-labelledby="resultats-t">
            <div className="vi-wrap">
              <header className="vi-head vi-head--split" data-vi-reveal="">
                <div>
                  <Eyebrow>Résultats clients</Eyebrow>
                  <h2 className="vi-h2" id="resultats-t">
                    Des relevés datés, pas des promesses
                  </h2>
                </div>
                <p className="vi-chapo">Les réponses des IA varient d’un essai à l’autre&nbsp;: ce sont des constats à une date, pas des garanties.</p>
              </header>

              <div className="vi-results">
                <article className="vi-card vi-case vi-case--defi" data-vi-reveal="">
                  <p className="vi-case__kind">Karting indoor · Toulouse</p>
                  <h3 className="vi-case__name">Défikart</h3>
                  <p className="vi-case__query" aria-hidden="true">
                    <ISearch />
                    «&nbsp;karting toulouse&nbsp;»
                  </p>
                  <div className="vi-case__mid">
                    {/* « Nommé », pas « Cité » : sur cette page, « Cité » est le 3e cran de la grille (avec lien), que le relevé ne documente pas */}
                    <p className="vi-case__big vi-case__big--words">
                      <span className="vi-gt">
                        Nommé <span className="vi-nowrap">en premier</span>
                      </span>{' '}
                      <span className="vi-case__on">par ChatGPT</span>
                    </p>
                    <p className="vi-case__txt">À la question «&nbsp;karting toulouse&nbsp;», lors de notre relevé de novembre 2026.</p>
                    <p className="vi-case__muted">Nous avons conçu sa direction artistique et son site WordPress.</p>
                  </div>
                  <p className="vi-src vi-case__src">
                    <span>Relevé Kameo, novembre 2026.</span>
                  </p>
                </article>

                <article className="vi-card vi-case vi-case--omega" data-vi-reveal="" style={{ '--vi-i': 1 } as CSSProperties}>
                  <div className="vi-case__head">
                    <div>
                      <p className="vi-case__kind">Hébergement cloud · Rennes</p>
                      <h3 className="vi-case__name">OmegaCloud</h3>
                    </div>
                    <span className="vi-tag">Extrait des relevés Kameo</span>
                  </div>
                  <div className="vi-case__lead">
                    <p className="vi-case__big">
                      <span className="vi-gt" aria-hidden="true">
                        {OMEGA_VEDETTE.n}/{OMEGA_VEDETTE.of}
                      </span>{' '}
                      <span className="sr-only">
                        {OMEGA_VEDETTE.n} sur {OMEGA_VEDETTE.of}
                      </span>
                      <span className="vi-case__on">réponses de {OMEGA_VEDETTE.ia} le nomment</span>
                    </p>
                    <p className="vi-case__leg">
                      À la question {RELEVE_OMEGA[0].q} · place&nbsp;: {OMEGA_VEDETTE.place}.
                    </p>
                  </div>
                  <p className="vi-case__group">
                    <IInfo />
                    <span>OmegaCloud appartient au même groupe que Kameo&nbsp;: nous le précisons.</span>
                  </p>
                  <table className="vi-releve" role="table" data-vi-fill="">
                    <caption className="sr-only">Autres questions suivies&nbsp;: réponses des IA qui nomment OmegaCloud, relevés des 14 et 15 novembre 2026</caption>
                    <thead role="rowgroup">
                      <tr role="row">
                        <th role="columnheader" scope="col">
                          IA
                        </th>
                        <th role="columnheader" scope="col">
                          Réponses qui le nomment
                        </th>
                        <th role="columnheader" scope="col">
                          Place
                        </th>
                      </tr>
                    </thead>
                    {/* La 1re question est déjà en tête de carte (chiffre vedette) : le tableau donne les autres */}
                    {RELEVE_OMEGA.slice(1).map((g, gi) => (
                      <tbody key={gi} role="rowgroup">
                        <tr role="row" className="vi-releve__q">
                          <th role="rowheader" colSpan={3} scope="rowgroup">
                            {g.q}
                          </th>
                        </tr>
                        {g.rows.map((r) => (
                          <tr role="row" key={r.ia} className={'vi-frac' + (r.of > 6 ? ' vi-frac--long' : '')}>
                            <th role="rowheader" scope="row" className="vi-frac__ia">
                              {r.ia}
                            </th>
                            <td role="cell" className="vi-frac__val">
                              <span className="vi-frac__bar" aria-hidden="true" style={{ '--n': r.of } as CSSProperties}>
                                {Array.from({ length: r.of }, (_, k) => (
                                  <i key={k} className={k < r.n ? 'is-full' : undefined} style={{ '--k': k } as CSSProperties} />
                                ))}
                              </span>
                              <span className="vi-frac__num" aria-hidden="true">
                                {r.n}/{r.of}
                              </span>
                              <span className="sr-only">
                                {r.n} réponse{r.n > 1 ? 's' : ''} sur {r.of}
                              </span>
                            </td>
                            <td role="cell" className="vi-frac__place">
                              {r.place}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ))}
                  </table>
                  <p className="vi-case__gemini">
                    <span className="vi-ring" aria-hidden="true" />
                    Gemini ne le cite encore sur aucune des trois questions.
                  </p>
                  <p className="vi-src vi-case__src">
                    <span>
                      Relevés Kameo des 14 et 15 novembre 2026&nbsp;: 6 réponses par IA et par question, sur ChatGPT, Gemini, Claude et Perplexity.
                    </span>
                  </p>
                </article>

                {/* Ordinateur : l'encart et le CTA prennent la colonne de Défikart, à côté du relevé (ordre de lecture inchangé) */}
                <aside className="vi-note vi-honesty" data-vi-reveal="" aria-label="Ce qui ne marche pas encore">
                  <p className="vi-honesty__txt">
                    Nous publions aussi ce qui ne marche pas encore&nbsp;: 0 réponse sur 24 pour le VPS Linux, aucune citation par Gemini. C’est à cela
                    que sert une mesure.
                  </p>
                </aside>

                <div className="vi-sec-cta" data-vi-reveal="">
                  <p className="vi-sec-cta__lead vi-sec-cta__lead--lg">Et vous&nbsp;?</p>
                  <Cta cta="resultats">Voir ce que les IA disent de moi</Cta>
                </div>
              </div>
            </div>
          </section>

          {/* ━━ 5 · Les blocages ━━ */}
          <section className="vi-sec" id="blocages" aria-labelledby="blocages-t">
            <div className="vi-wrap">
              <header className="vi-head vi-head--split" data-vi-reveal="">
                <div>
                  <Eyebrow>Les causes</Eyebrow>
                  <h2 className="vi-h2" id="blocages-t">
                    Pourquoi les IA citent vos concurrents, et pas vous
                  </h2>
                </div>
                <p className="vi-chapo">
                  Six blocages fréquents&nbsp;: les trois premiers se corrigent sur votre site, les trois autres en dehors.
                </p>
              </header>

              {BLOCAGES.map((g, gi) => (
                <div className="vi-group" key={g.group}>
                  <h3 className="vi-group__t">
                    <span>{g.group}</span>
                    <span className="vi-group__n" aria-hidden="true">
                      {g.cards.length}
                    </span>
                  </h3>
                  <ul className="vi-group__cards">
                    {g.cards.map((c, ci) => (
                      <li key={c.t} className="vi-card vi-block" data-vi-reveal="" style={{ '--vi-i': ci } as CSSProperties}>
                        {c.illu === 'questions' && (
                          <div className="vi-robot vi-mini" aria-hidden="true">
                            <span className="vi-mini__frame">
                              {(
                                [
                                  ['Pour qui', true],
                                  ['Combien', false],
                                  ['Délai', false],
                                ] as const
                              ).map(([k, ok]) => (
                                <span key={k} className="vi-mini__row">
                                  <span className="vi-mini__k">{k}&nbsp;?</span>
                                  <i className={ok ? 'vi-mini__val' : 'vi-mini__empty'} />
                                </span>
                              ))}
                            </span>
                            <span className="vi-robot__cap">Les questions sans réponse sur votre page</span>
                          </div>
                        )}
                        {c.illu === 'fiche' && (
                          <div className="vi-robot vi-mini" aria-hidden="true">
                            <span className="vi-mini__frame">
                              {['Métier', 'Ville', 'Zone'].map((k) => (
                                <span key={k} className="vi-mini__row">
                                  <span className="vi-mini__k">{k}</span>
                                  <i className="vi-mini__empty" />
                                </span>
                              ))}
                            </span>
                            <span className="vi-robot__cap">Ce que l’IA sait de vous</span>
                          </div>
                        )}
                        {c.illu === 'robot' && (
                          <div className="vi-robot">
                            <div className="vi-robot__vis" aria-hidden="true">
                              <span className="vi-robot__frame">
                                <span className="vi-robot__bar">
                                  <i />
                                  <i />
                                  <i />
                                </span>
                                <span className="vi-robot__page">
                                  <b />
                                  <i style={{ width: '90%' }} />
                                  <i style={{ width: '74%' }} />
                                  <i style={{ width: '82%' }} />
                                </span>
                              </span>
                              <span className="vi-robot__frame">
                                <span className="vi-robot__bar">
                                  <i />
                                  <i />
                                  <i />
                                </span>
                                <span className="vi-robot__page vi-robot__page--empty" />
                              </span>
                              <span className="vi-robot__cap">Ce que voit votre visiteur</span>
                              <span className="vi-robot__cap">Ce que voit le robot</span>
                              <span className="vi-illu vi-robot__tag">Exemple</span>
                            </div>
                            <p className="sr-only">Exemple&nbsp;: la même page, complète pour un visiteur, vide pour le robot d’une IA.</p>
                          </div>
                        )}
                        <span className="vi-block__n" aria-hidden="true">
                          {String(gi * 3 + ci + 1).padStart(2, '0')}
                        </span>
                        <h4 className="vi-block__t">{c.t}</h4>
                        <p className="vi-block__p">{fr(c.p)}</p>
                        <div className="vi-strip">
                          <p className="vi-strip__lbl">Ce que nous faisons</p>
                          <p className="vi-strip__txt">{fr(c.do)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="vi-band" data-vi-reveal="">
                <p className="vi-band__t">Lequel vous bloque&nbsp;? On le voit ensemble en 30&nbsp;minutes.</p>
                <div className="vi-band__cta">
                  <Cta cta="blocages">Voir ce que les IA disent de moi</Cta>
                  <p className="vi-micro">Diagnostic gratuit · 30&nbsp;min en visio</p>
                </div>
              </div>
            </div>
          </section>

          {/* ━━ 6 · La méthode ━━ */}
          <section className="vi-sec vi-sec--soft" id="methode" aria-labelledby="methode-t">
            <div className="vi-wrap">
              <header className="vi-head vi-head--split" data-vi-reveal="">
                <div>
                  <Eyebrow>Notre méthode</Eyebrow>
                  <h2 className="vi-h2" id="methode-t">
                    Mesurer, corriger, faire autorité. Chaque mois.
                  </h2>
                </div>
                <p className="vi-chapo">Trois étapes, dans cet ordre&nbsp;: on ne corrige bien que ce qu’on a mesuré.</p>
              </header>

              <div className="vi-bento">
                <div className="vi-card vi-bento__m" data-vi-reveal="">
                  <MeasureSwitch
                    plans={plans.map((p) => {
                      const total = reponsesParMois(p.questions ?? 0);
                      return { id: p.id, name: p.name, questions: p.questions ?? 0, total, totalTxt: num(total) };
                    })}
                    engines={GEO_ENGINES.length}
                    passages={GEO_PASSAGES}
                    releves={GEO_RELEVES_PAR_MOIS}
                  />
                </div>

                <div className="vi-card vi-bento__c" data-vi-reveal="" style={{ '--vi-i': 1 } as CSSProperties}>
                  <div className="vi-step__title">
                    <p className="vi-step__n">Étape 2</p>
                    <h3 className="vi-step__h">Corriger</h3>
                  </div>
                  <p className="vi-step__p">
                    Les corrections sont appliquées sur votre site par notre équipe, sans <span className="vi-nowrap">sous-traitance</span>.
                  </p>
                  <ul className="vi-checks">
                    <li>
                      <ICheck className="vi-check" />
                      Accès des robots des IA et informations identiques partout
                    </li>
                    <li>
                      <ICheck className="vi-check" />
                      3, 5 ou 10 pages existantes améliorées chaque mois, selon la formule
                    </li>
                    <li>
                      <ICheck className="vi-check" />
                      Erreurs des IA sur votre entreprise corrigées à la source
                    </li>
                  </ul>
                  <div className="vi-src-map">
                    <h4 className="vi-src-map__t">D’où les IA tirent leurs réponses</h4>
                    <ul className="vi-src-map__rows">
                      <li>
                        <span className="sr-only">Gemini et les Aperçus IA&nbsp;: Google</span>
                        <span className="vi-src-map__from" aria-hidden="true">
                          Gemini et les Aperçus IA
                        </span>
                        <span className="vi-src-map__link" aria-hidden="true" />
                        <span className="vi-src-map__to" aria-hidden="true">
                          Google
                        </span>
                      </li>
                      <li>
                        <span className="sr-only">Copilot&nbsp;: Bing, dont ChatGPT cite souvent les premiers résultats</span>
                        <span className="vi-src-map__from" aria-hidden="true">
                          Copilot
                        </span>
                        <span className="vi-src-map__link" aria-hidden="true" />
                        <span className="vi-src-map__to" aria-hidden="true">
                          Bing
                        </span>
                        <span className="vi-src-map__note" aria-hidden="true">
                          dont ChatGPT cite souvent les premiers résultats
                        </span>
                      </li>
                      <li>
                        <span className="sr-only">La recherche web de Claude&nbsp;: Brave</span>
                        <span className="vi-src-map__from" aria-hidden="true">
                          La recherche web de Claude
                        </span>
                        <span className="vi-src-map__link" aria-hidden="true" />
                        <span className="vi-src-map__to" aria-hidden="true">
                          Brave
                        </span>
                      </li>
                    </ul>
                    <p className="vi-strip vi-strip--solo">
                      <span className="vi-strip__txt">Vos pages inscrites dans les trois, puis vérifiées chaque mois.</span>
                    </p>
                  </div>
                </div>

                <div className="vi-card vi-bento__a" data-vi-reveal="" style={{ '--vi-i': 2 } as CSSProperties}>
                  <div className="vi-step__title">
                    <p className="vi-step__n">Étape 3</p>
                    <h3 className="vi-step__h">Faire autorité</h3>
                  </div>
                  <div className="vi-new">
                    <p className="vi-new__head">
                      {ficheNouvelle && <span className="vi-tag vi-tag--new">Nouveau</span>}
                      <span className="vi-new__date">10 novembre 2026</span>
                    </p>
                    <p className="vi-new__txt">
                      Depuis le 10&nbsp;novembre 2026, ChatGPT permet aux entreprises de revendiquer gratuitement leur fiche (Business Hub). Dès{' '}
                      {CROISSANCE.name}, nous la revendiquons avec vous, si vous y êtes éligible, et la tenons à jour.
                    </p>
                  </div>
                  <ul className="vi-checks">
                    <li>
                      <ICheck className="vi-check" />
                      <span>
                        Avec {ESSENTIEL.name}&nbsp;: 3 actions par mois à faire vous-même (fiches Google et Bing, annuaires, avis), avec les textes
                        prêts
                      </span>
                    </li>
                    <li>
                      <ICheck className="vi-check" />
                      <span>
                        Dès {CROISSANCE.name}&nbsp;: 2 nouveaux contenus par mois (4 avec {AUTORITE.name}), validés par vous avant publication
                      </span>
                    </li>
                    <li>
                      <ICheck className="vi-check" />
                      <span>
                        Dès {CROISSANCE.name}&nbsp;: 2 inscriptions par mois dans les annuaires et sites d’avis que les IA citent dans votre secteur
                      </span>
                    </li>
                    <li>
                      <ICheck className="vi-check" />
                      <span>
                        Avec {AUTORITE.name}&nbsp;: vos fiches Google et Bing créées ou reprises, et 3 démarches par mois auprès de comparatifs et de
                        médias, sans jamais payer de place
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ━━ 7 · Le rapport ━━ */}
          <section className="vi-sec" id="rapport" aria-labelledby="rapport-t">
            <div className="vi-wrap">
              <header className="vi-head" data-vi-reveal="">
                <Eyebrow>Rapport mensuel</Eyebrow>
                <h2 className="vi-h2" id="rapport-t">
                  Chaque mois, vous voyez ce que vous ne voyiez pas
                </h2>
                <p className="vi-chapo">Dans les trois formules, un rapport clair, IA par IA, en {GEO_RAPPORT.length}&nbsp;rubriques.</p>
              </header>

              <div className="vi-ui vi-report" data-vi-reveal="" data-vi-fill="">
                <div className="vi-ui__bar vi-report__bar">
                  <p className="vi-report__title">
                    <strong>Rapport mensuel</strong> <span>· Votre entreprise</span>
                  </p>
                  <span className="vi-tabs vi-report__tabs" aria-hidden="true">
                    {GEO_ENGINES.map((e, i) => (
                      <span key={e} className={i === 0 ? 'is-on' : undefined}>
                        {e}
                      </span>
                    ))}
                  </span>
                  <span className="vi-illu vi-report__illu">Maquette&nbsp;: structure du rapport, sans données réelles</span>
                </div>
                <ul className="vi-report__grid">
                  {rapport.map(([titre, d], i) => {
                    const star = titre === 'Qui est cité à votre place';
                    return (
                      <li key={titre} className={'vi-tile' + (star ? ' vi-tile--star' : '')} style={{ '--t': i } as CSSProperties}>
                        {star && <p className="vi-tile__kicker">La place que vous ne voyez pas</p>}
                        <h3 className="vi-tile__t">{t(titre)}</h3>
                        <p className="vi-tile__d">{t(d)}</p>
                        <div className="vi-tile__schema" aria-hidden="true">
                          <TileSchema title={titre} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>

          {/* ━━ 8 · Les formules ━━ */}
          <section className="vi-sec vi-sec--soft" id="formules" aria-labelledby="formules-t">
            <div className="vi-wrap">
              <header className="vi-head vi-head--plans" data-vi-reveal="">
                <div>
                  <Eyebrow>Formules et prix</Eyebrow>
                  <h2 className="vi-h2" id="formules-t">
                    Trois formules, des prix publics
                  </h2>
                  <p className="vi-chapo">Prix hors taxes, par mois, affichés avant tout rendez-vous.</p>
                </div>
                <nav className="vi-choose" aria-labelledby="vi-choose-t">
                  <p className="vi-choose__t" id="vi-choose-t">
                    Quelle formule pour vous&nbsp;?
                  </p>
                  <ul>
                    {[
                      ['Une activité principale', ESSENTIEL],
                      ['Jusqu’à 3 services ou 3 villes', CROISSANCE],
                      ['Jusqu’à 6 services ou villes, ou un secteur très disputé', AUTORITE],
                    ].map(([txt, p]) => {
                      const plan = p as GeoOffer;
                      return (
                        <li key={plan.id}>
                          <a className="vi-choose__a" href={`#formule-${plan.id}`}>
                            <span>{txt as string}</span>
                            <span className="vi-choose__to">
                              <span className="sr-only">&nbsp;: </span>
                              {plan.name}
                              <IArrow />
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </header>

              {promo && (
                <div className="vi-offerline" data-vi-promo="" data-vi-reveal="">
                  <span className="vi-chip-promo">{GEO_PROMO.nom}</span>
                  <p className="vi-offerline__txt">
                    {remise} pour toute signature jusqu’au <strong>{GEO_PROMO.finTexte}</strong>. Prix conservé pendant tout votre engagement.
                  </p>
                  <Countdown end={GEO_PROMO.fin} />
                </div>
              )}

              <ul className="vi-plans">
                {plans.map((p, i) => {
                  const featured = p.id === 'croissance';
                  const barre = promo ? prixBarre(p) : null;
                  const pts = POINTS[p.id];
                  const duJour = prixDuJour(p);
                  return (
                    <li
                      key={p.id}
                      id={`formule-${p.id}`}
                      className={'vi-plan' + (featured ? ' vi-plan--star' : '')}
                      data-vi-reveal=""
                      style={{ '--vi-i': i } as CSSProperties}
                    >
                      <article className="vi-plan__in" aria-labelledby={`vi-plan-${p.id}`}>
                        {featured && <p className="vi-plan__badge">Recommandé</p>}
                        <div className="vi-plan__head">
                          <h3 className="vi-plan__name" id={`vi-plan-${p.id}`}>
                            {p.name}
                          </h3>
                          <p className="vi-plan__tag">{t(p.tagline)}</p>
                          {p.pourQui && (
                            <p className="vi-plan__who">
                              <strong>Pour qui&nbsp;:</strong> {t(p.pourQui.charAt(0).toLowerCase() + p.pourQui.slice(1))}
                            </p>
                          )}
                        </div>
                        <div className="vi-plan__price">
                          {barre !== null && (
                            <p className="vi-plan__promo" data-vi-promo="">
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
                                  {eur(duJour)}
                                </span>
                                <span className="vi-plan__num" data-vi-nopromo="" hidden>
                                  {eur(p.price)}
                                </span>
                              </>
                            ) : (
                              <span className="vi-plan__num">{eur(duJour)}</span>
                            )}{' '}
                            <span className="vi-plan__unit">HT / mois</span>
                          </p>
                          <p className="vi-plan__engage">{noteEngagementGeo()}</p>
                          {barre !== null ? (
                            <>
                              <p className="vi-plan__total" data-vi-promo="">
                                Soit {eur(duJour * moisEngagement)}&nbsp;HT sur les {moisEngagement}&nbsp;mois d’engagement, au lieu de{' '}
                                {eur(p.price * moisEngagement)}&nbsp;HT
                              </p>
                              <p className="vi-plan__total" data-vi-nopromo="" hidden>
                                Soit {eur(p.price * moisEngagement)}&nbsp;HT sur les {moisEngagement}&nbsp;mois d’engagement
                              </p>
                            </>
                          ) : (
                            <p className="vi-plan__total">
                              Soit {eur(duJour * moisEngagement)}&nbsp;HT sur les {moisEngagement}&nbsp;mois d’engagement
                            </p>
                          )}
                        </div>
                        <p className="vi-plan__metric">
                          {p.questions}&nbsp;questions · {num(reponsesParMois(p.questions ?? 0))}&nbsp;réponses analysées&nbsp;/&nbsp;mois
                        </p>
                        {pts && (
                          <div className="vi-plan__pts">
                            {pts.lead && <p className="vi-plan__lead">{fr(pts.lead)}</p>}
                            <ul className="vi-checks vi-checks--plan">
                              {pts.items.map((it) => (
                                <li key={it}>
                                  <ICheck className="vi-check" />
                                  <span>{fr(it)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <details className="vi-plan__more">
                          <summary>
                            <span className="vi-plan__more-l">Tout ce qui est inclus</span>
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
                        <div className="vi-plan__cta">
                          <Cta cta={`formule-${p.id}`} block outline={!featured} label={`Réserver mon diagnostic gratuit (formule ${p.name})`}>
                            Réserver mon diagnostic gratuit
                          </Cta>
                          <p className="vi-plan__micro">On valide ensemble la formule pendant les 30&nbsp;minutes.</p>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>

              <ul className="vi-terms" data-vi-reveal="">
                {termsGeo().map((term, i) => (
                  <li key={i} className="vi-term">
                    <svg className="vi-ico vi-term__ico" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                      {TERM_ICONS[term.icon] ?? <path d="M4.5 10.5l3.5 3.5 7.5-8" />}
                    </svg>
                    <p dangerouslySetInnerHTML={{ __html: tHtml(term.html) }} />
                  </li>
                ))}
              </ul>

              <div className="vi-plans-after" data-vi-reveal="">
                <p className="vi-plans-after__market">
                  Le marché&nbsp;: l’accompagnement mensuel d’une PME par une agence coûte de 350 à 3&nbsp;000&nbsp;€&nbsp;HT par mois (relevé Kameo, novembre
                  2026). {ESSENTIEL.name} se situe dans le bas de cette fourchette.
                </p>
                <p className="vi-plans-after__audit">
                  Pas prêt pour un accompagnement&nbsp;? Un audit seul existe aussi&nbsp;: {EXPRESS.name} à {eur(EXPRESS.price)}&nbsp;HT, payé une
                  fois, déduit si vous démarrez un accompagnement dans le mois qui suit.
                </p>
                <p className="vi-plans-after__exit">
                  Pas sûr de la formule&nbsp;? C’est l’objet des 30&nbsp;minutes&nbsp;: on choisit ensemble le bon format, audit ou accompagnement.
                </p>
              </div>
            </div>
          </section>

          {/* ━━ 9 · Les garanties ━━ */}
          <section className="vi-sec" id="garanties" aria-labelledby="garanties-t">
            <div className="vi-wrap">
              <header className="vi-head" data-vi-reveal="">
                <Eyebrow>Nos engagements</Eyebrow>
                <h2 className="vi-h2 vi-h2--lines" id="garanties-t">
                  <span>Ce que nous garantissons.</span> <span className="vi-dim">Ce que personne ne peut garantir.</span>
                </h2>
              </header>

              <div className="vi-vs vi-guar" data-vi-reveal="">
                <div className="vi-vs__col">
                  <h3 className="vi-guar__t">
                    <span className="vi-guar__badge" aria-hidden="true">
                      <ICheck className="vi-check" />
                    </span>
                    Garanti, noir sur blanc
                  </h3>
                  <ul className="vi-checks vi-checks--guar">
                    <li>
                      <ICheck className="vi-check" />
                      <span>{t(ENG['Notre garantie'])}</span>
                    </li>
                    <li>
                      <ICheck className="vi-check" />
                      <span>{t(ENG['Ce qui vous appartient'])}</span>
                    </li>
                    <li>
                      <ICheck className="vi-check" />
                      <span>Les nouveaux contenus sont validés par vous avant publication.</span>
                    </li>
                    <li>
                      <ICheck className="vi-check" />
                      <span>Nos démarches ne paient jamais de place, et nous n’achetons pas d’avis.</span>
                    </li>
                    {promo && (
                      <li data-vi-promo="">
                        <ICheck className="vi-check" />
                        <span>Le prix {GEO_PROMO.nom} est conservé pendant tout votre engagement.</span>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="vi-vs__col vi-vs__col--alt">
                  <h3 className="vi-guar__t">Ce que personne ne peut garantir</h3>
                  <ul className="vi-dashes">
                    <li>{t(ENG['Ce que personne ne peut garantir'])}</li>
                    <li>
                      Même Bing le précise dans ses consignes (février 2026)&nbsp;: le GEO ne garantit pas plus les citations que le SEO ne garantit un
                      classement.
                    </li>
                  </ul>
                  <p className="vi-guar__big">Méfiez-vous de toute promesse de «&nbsp;première place dans ChatGPT&nbsp;».</p>
                  <p className="vi-guar__proof">
                    La preuve de cette transparence&nbsp;: nous publions aussi{' '}
                    <a className="vi-inline" href="#resultats">
                      les «&nbsp;0&nbsp;sur&nbsp;24&nbsp;»
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="vi-card vi-tl" data-vi-reveal="">
                <div className="vi-tl__head">
                  <h3 className="vi-h3">
                    {moisEngagement}&nbsp;mois, c’est {releves}&nbsp;relevés
                  </h3>
                  <p className="vi-tl__lead">Assez pour distinguer une vraie progression d’une variation passagère, IA par IA.</p>
                </div>
                <p className="sr-only">
                  {releves} relevés sur {moisEngagement} mois, un toutes les deux semaines.
                </p>
                {/* Frise horizontale (≥ 768 px) */}
                <div className="vi-tl__h" data-vi-fill="" style={{ '--n': releves, '--per': GEO_RELEVES_PAR_MOIS } as CSSProperties}>
                  <div className="vi-tl__track" aria-hidden="true">
                    <span className="vi-tl__zone" />
                    <span className="vi-tl__line" />
                    <span className="vi-tl__end" />
                    {Array.from({ length: releves }, (_, k) => (
                      <span
                        key={k}
                        className={'vi-tl__dot' + (k === 0 || k === releveBilan ? ' is-key' : '')}
                        style={{ '--k': k } as CSSProperties}
                      />
                    ))}
                    {Array.from({ length: moisEngagement }, (_, m) => (
                      <span key={m} className="vi-tl__month" style={{ '--m': m } as CSSProperties}>
                        Mois {m + 1}
                      </span>
                    ))}
                  </div>
                  <ol className="vi-tl__notes">
                    <li className="vi-tl__note vi-tl__note--start">Démarrage&nbsp;: audit offert et point en visio</li>
                    <li className="vi-tl__note vi-tl__note--zone">En général, premiers effets 4 à 6&nbsp;semaines après les corrections, sans garantie</li>
                    <li className="vi-tl__note vi-tl__note--bilan">Bilan des 3&nbsp;mois</li>
                    <li className="vi-tl__note vi-tl__note--end">
                      Après {moisEngagement}&nbsp;mois&nbsp;: sans engagement, résiliation par simple <span className="vi-nowrap">e-mail</span>, 30&nbsp;jours de préavis
                    </li>
                  </ol>
                </div>
                {/* Frise verticale (< 768 px) */}
                <ol className="vi-tl__v" data-vi-fill="">
                  {Array.from({ length: releves }, (_, k) => (
                    <li key={k} className={'vi-tl__vrow' + (k >= 2 && k <= 4 ? ' is-zone' : '')} style={{ '--k': k } as CSSProperties}>
                      <span className={'vi-tl__dot' + (k === 0 || k === releveBilan ? ' is-key' : '')} aria-hidden="true" />
                      {k % GEO_RELEVES_PAR_MOIS === 0 && (
                        <span className="vi-tl__vm" aria-hidden="true">
                          Mois {k / GEO_RELEVES_PAR_MOIS + 1}
                        </span>
                      )}
                      {k === 0 && <span className="vi-tl__vnote">Démarrage&nbsp;: audit offert et point en visio</span>}
                      {k === 2 && (
                        <span className="vi-tl__vnote vi-tl__vnote--zone">
                          En général, premiers effets 4 à 6&nbsp;semaines après les corrections, sans garantie
                        </span>
                      )}
                      {k === releveBilan && <span className="vi-tl__vnote">Bilan des 3&nbsp;mois</span>}
                    </li>
                  ))}
                  <li className="vi-tl__vend">
                    <span className="vi-tl__vnote">
                      Après {moisEngagement}&nbsp;mois&nbsp;: sans engagement, résiliation par simple <span className="vi-nowrap">e-mail</span>, 30&nbsp;jours de préavis
                    </span>
                  </li>
                </ol>
                <p className="vi-tl__foot">Changer de formule&nbsp;: {t(lc(ENG['Changer de formule']))}</p>
              </div>

              <p className="vi-excl" data-vi-reveal="">
                <strong className="vi-excl__lbl">Non compris&nbsp;:</strong> {t(ENG['Non compris'])}
              </p>

              <div className="vi-sec-cta" data-vi-reveal="">
                <Cta cta="garanties">Voir ce que les IA disent de moi</Cta>
                <p className="vi-micro">Diagnostic gratuit · 30&nbsp;min en visio</p>
              </div>
            </div>
          </section>

          {/* ━━ 10 · L'équipe ━━ */}
          <section className="vi-sec vi-sec--soft" id="equipe" aria-labelledby="equipe-t">
            <div className="vi-wrap">
              <header className="vi-head" data-vi-reveal="">
                <Eyebrow>L’équipe</Eyebrow>
                <h2 className="vi-h2" id="equipe-t">
                  Une équipe qui corrige elle-même votre site, sans <span className="vi-nowrap">sous-traitance</span>
                </h2>
              </header>

              <div className="vi-team">
                <div className="vi-team__left" data-vi-reveal="">
                  <div className="vi-team__people">
                    {[
                      { src: '/images/benjamin.webp', alt: 'Benjamin Dayan, président de Kameo', nom: 'Benjamin Dayan', role: 'Président' },
                      { src: '/images/Louison.webp', alt: 'Louison Boutet, directeur général de Kameo', nom: 'Louison Boutet', role: 'Directeur général' },
                    ].map((m) => (
                      <figure key={m.nom} className="vi-person">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={m.src} width={400} height={400} alt={m.alt} loading="lazy" decoding="async" />
                        <figcaption>
                          <strong>{m.nom}</strong>
                          <span>{m.role}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <ul className="vi-figs">
                    <li>
                      <span className="vi-figs__n">{COMPANY.foundingDate.slice(0, 4)}</span>
                      <span className="vi-figs__l">année de création</span>
                    </li>
                    <li>
                      <span className="vi-figs__n">{COMPANY.teamSize}</span>
                      <span className="vi-figs__l">personnes</span>
                    </li>
                    <li>
                      <span className="vi-figs__n">+{PROOF.projetsTotal}</span>
                      <span className="vi-figs__l">projets livrés</span>
                    </li>
                    <li>
                      <span className="vi-figs__n">{PROOF.avisNote}/5</span>
                      <span className="vi-figs__l">sur Trustpilot</span>
                    </li>
                  </ul>
                  <ul className="vi-facts">
                    <li>
                      Une adresse à Paris 2<sup>e</sup>, des rendez-vous en visio partout en France.
                    </li>
                    <li>
                      Les corrections sont appliquées par l’équipe qui développe des sites WordPress et <span className="vi-nowrap">sur-mesure</span> depuis {COMPANY.foundingDate.slice(0, 4)},
                      sans <span className="vi-nowrap">sous-traitance</span>.
                    </li>
                    <li>
                      Une méthode appliquée chez nous d’abord, pour <span className="vi-nowrap">agence-kameo.fr</span>.
                    </li>
                    <li>Vous échangez directement avec les dirigeants.</li>
                  </ul>
                  <div className="vi-fab">
                    <p className="vi-fab__date">Relevé du 18&nbsp;novembre 2026</p>
                    <p className="vi-fab__t">
                      8<sup>e</sup> de la sélection «&nbsp;Les meilleures agences GEO à Paris&nbsp;» de La Fabrique du Net
                    </p>
                    <p className="vi-fab__r">Il n’existe pas de classement officiel&nbsp;: chaque liste applique ses propres critères.</p>
                    <Ext href={FABRIQUE_URL} className="vi-link vi-link--sm">
                      Voir la sélection
                      <IExt />
                    </Ext>
                  </div>
                </div>

                <div className="vi-team__right" data-vi-reveal="" style={{ '--vi-i': 1 } as CSSProperties}>
                  <h3 className="vi-h3">Ce que nos clients disent de Kameo</h3>
                  <p className="vi-reviews__note">Avis Trustpilot sur nos projets web et SEO</p>
                  <ul className="vi-reviews">
                    {AVIS.map((a) => (
                      <li key={a.nom} className="vi-review">
                        <p className="vi-review__stars">
                          <span aria-hidden="true">
                            {Array.from({ length: 5 }, (_, k) => (
                              <IStar key={k} className="vi-star vi-star--sm" />
                            ))}
                          </span>
                          <span className="sr-only">5 étoiles sur 5</span>
                        </p>
                        <p className="vi-review__title">{a.titre}</p>
                        <blockquote className="vi-review__txt">
                          <p>«&nbsp;{fr(a.texte)}&nbsp;»</p>
                        </blockquote>
                        <div className="vi-review__foot">
                          <span className="vi-review__av" aria-hidden="true">
                            {a.initiales}
                          </span>
                          <p className="vi-review__who">
                            <strong>{a.nom}</strong>
                            <span>{a.role}</span>
                          </p>
                          <Ext href={a.url} className="vi-review__link" label={`Lire l’avis sur Trustpilot de ${a.nom} (nouvel onglet)`}>
                            Lire l’avis sur Trustpilot
                          </Ext>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="vi-reviews__all">
                    <Ext href={SOCIAL.trustpilot} className="vi-trust__tp">
                      <IStar />
                      <span>
                        <span className="vi-trust__note">{PROOF.avisNote}/5</span> sur Trustpilot · {PROOF.avisNombre}&nbsp;avis ·{' '}
                        <span className="vi-u">Voir tous les avis</span>
                      </span>
                    </Ext>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ━━ 11 · FAQ ━━ */}
          <section className="vi-sec" id="faq" aria-labelledby="faq-t">
            <div className="vi-wrap vi-faqwrap">
              <div className="vi-faqwrap__side">
                <header className="vi-head" data-vi-reveal="">
                  <Eyebrow>Questions fréquentes</Eyebrow>
                  <h2 className="vi-h2" id="faq-t">
                    Vos questions avant de réserver
                  </h2>
                </header>
                <FaqContact className="vi-faq__contact--lg" />
              </div>
              <div className="vi-faq">
                {faq.map((f) => (
                  <details key={f.label} className="vi-faq__item">
                    <summary className="vi-faq__q">
                      <span>{fr(f.label)}</span>
                      <span className="vi-faq__icon" aria-hidden="true" />
                    </summary>
                    <div className="vi-faq__a">
                      <p dangerouslySetInnerHTML={{ __html: tHtml(f.a) }} />
                    </div>
                  </details>
                ))}
              </div>
              <FaqContact className="vi-faq__contact--sm" />
            </div>
          </section>

          {/* ━━ 12 · Diagnostic (CTA final) ━━ */}
          <section className="vi-sec vi-final" id="diagnostic" aria-labelledby="diagnostic-t">
            <div className="vi-wrap vi-final__grid">
              <div className="vi-final__text" data-vi-reveal="">
                <Eyebrow>Diagnostic gratuit</Eyebrow>
                <h2 className="vi-h2 vi-h2--manifest" id="diagnostic-t">
                  <span className="vi-final__l1">
                    Votre nom est-il <span className="vi-gt">dans la réponse</span>&nbsp;?
                  </span>{' '}
                  <span className="vi-final__l2">Regardons-le ensemble.</span>
                </h2>
                <ol className="vi-steps">
                  {[
                    'Vous choisissez un créneau de 30 minutes.',
                    'En visio, nous posons en direct 5 questions de vos clients à ChatGPT, Gemini, Perplexity et Claude, en partage d’écran : un premier constat, à une date.',
                    'Nous choisissons ensemble le bon format : audit ou accompagnement.',
                  ].map((s, i) => (
                    <li key={i} className="vi-steps__item">
                      <span className="vi-steps__dot" aria-hidden="true">
                        {i + 1}
                      </span>
                      <p>
                        <span className="vi-steps__n">Étape {i + 1}</span>
                        {s}
                      </p>
                    </li>
                  ))}
                </ol>
                <div className="vi-final__cta">
                  <Cta cta="final" size="xl" sub={<>Diagnostic gratuit · 30&nbsp;min en visio</>}>
                    Voir ce que les IA disent de moi
                  </Cta>
                  <p className="vi-micro">Vous voyez les réponses, que vous signiez ou non.</p>
                  <p className="vi-final__offer">
                    {promo && (
                      <span className="vi-final__pp" data-vi-promo="">
                        <span className="vi-chip-promo">{GEO_PROMO.nom}</span>
                        <span>
                          {remise} pour toute signature jusqu’au {GEO_PROMO.finTexte} inclus.
                        </span>
                      </span>
                    )}
                    <span data-vi-nopromo={promo ? '' : undefined} hidden={promo}>
                      Audit offert au démarrage de chaque accompagnement.
                    </span>
                  </p>
                </div>
                <div className="vi-final__contact">
                  <p className="vi-final__ask">Une question avant&nbsp;?</p>
                  <div className="vi-final__btns">
                    <Ext href={WA_HREF} className="vi-btn-ghost" cta="whatsapp-final" label="Écrire sur WhatsApp à Kameo (nouvel onglet)">
                      <IWhatsApp />
                      Écrire sur WhatsApp
                    </Ext>
                    <a href={TEL_HREF} className="vi-btn-ghost" data-cta="tel-final" aria-label={`Appeler le ${CONTACT.phone} (Kameo)`}>
                      <IPhone />
                      Appeler le {CONTACT.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="vi-final__vis" aria-hidden="true">
                <div className="vi-ui vi-diag">
                  <div className="vi-ui__bar vi-diag__bar">
                    {GEO_ENGINES.map((e) => (
                      <span key={e} className="vi-ai">
                        {e}
                      </span>
                    ))}
                  </div>
                  <div className="vi-diag__body">
                    <p className="vi-answer__who vi-answer__who--right">Votre futur client</p>
                    <div className="vi-diag__ask">
                      <DiagQuestion />
                    </div>
                    <p className="vi-answer__who">
                      <span className="vi-answer__ia">IA</span> Réponse de l’IA
                    </p>
                    <div className="vi-answer__skel vi-diag__skel">
                      <i style={{ width: '90%' }} />
                      <i style={{ width: '70%' }} />
                    </div>
                    <Slot />
                  </div>
                  <div className="vi-ui__foot">
                    <span className="vi-illu">Illustration</span>
                  </div>
                </div>
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
              Politique de confidentialité<span className="sr-only"> (nouvel onglet)</span>
            </a>
            <span aria-hidden="true"> · </span>
            <CookieSettingsLink />
          </p>
        </footer>

        {/* ━━ Barre d'action mobile (affichée par ViEffects) ━━ */}
        <div className="vi-sticky" id="vi-sticky">
          <Ext href={WA_HREF} className="vi-sticky__wa" cta="whatsapp-sticky" label="Écrire à Kameo sur WhatsApp (nouvel onglet)">
            <IWhatsApp />
          </Ext>
          <a className="vi-sticky__cta" href={CONTACT.calendly} data-cta="sticky">
            <span className="vi-sticky__txt">
              <span className="vi-sticky__l1">
                <span className="vi-sticky__long">Voir ce que les IA disent de moi</span>
                <span className="vi-sticky__short">Voir ce que disent les IA</span>
              </span>
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
