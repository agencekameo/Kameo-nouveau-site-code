/*
 * Corps de la landing /visibilite-ia/ (accompagnement GEO, fond blanc). Pensée d'abord pour le téléphone : le
 * trafic vient des publicités (Meta, LinkedIn, Google) et se lit surtout sur mobile. Une idée par écran, une ligne
 * de texte par carte, un seul appel à l'action : le diagnostic gratuit (Calendly).
 * Composant serveur, rien n'exige JavaScript : sur mobile, le choix de formule est un groupe de boutons radio.
 * Faits et chiffres : src/content/geo.ts et src/lib/site.ts (prix, offre, formules, engagements, FAQ) ; relevés
 * clients repris de /agence-geo/ (le chiffre Arcom est dans le film du haut de page, HeroFilm.tsx). L'offre Black Friday (PROMO_LANDING de geo.ts, propre à cette landing) est une couche : chaque élément d'offre
 * ([data-vi-promo]) a son équivalent permanent ([data-vi-nopromo], rendu masqué), Countdown bascule à l'échéance.
 * Icônes : sprite du site (/icons.svg). L'histoire (Google hier, l'IA aujourd'hui, Kameo) est racontée par le film du
 * haut de page (HeroFilm.tsx), qui remplace les illustrations et la section « 3 étapes » (retirée le 28/11/2026).
 * Toutes les classes sont préfixées vi- (styles.ts).
 * Une page, trois versions : générale, auto-écoles, écoles (variantes.ts) ; tous les textes propres à une cible
 * viennent de la variante reçue (v), le reste est commun.
 */
import type { CSSProperties, ReactNode } from 'react';
import CookieSettingsLink from '@/components/consent/CookieSettingsLink';
import { fr } from '@/components/geo/GeoBlocks';
import AiRotator from '@/components/landing-geo/AiRotator';
import CalendlyInline from '@/components/landing-geo/CalendlyInline';
import HeroFilm from '@/components/landing-geo/HeroFilm';
import LogosClients from '@/components/landing-geo/LogosClients';
import LogosIA from '@/components/landing-geo/LogosIA';
import Countdown from '@/components/landing-geo/Countdown';
import { AVIS_TRUSTPILOT, type AvisClient } from '@/content/avis';
import {
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
import type { Variante } from './variantes';

/** Espace insécable, écrite en échappement : un copier-coller l'avait changée en espace normale (titre coupé entre « 1 » et « mois », prix coupés). */
const nb = '\u00a0';

/** Prix jamais coupés en fin de ligne : euros() de geo.ts met une espace normale. */
const eur = (n: number) => euros(n).replace(/ /g, nb);
/** « 1er décembre » sans coupure : début des prix normaux (diagnostics réservés à partir de cette date). */
const REPRISE = PROMO_LANDING.repriseCourte.replace(' ', nb);
/** Texte lu dans geo.ts : espaces insécables (fr), apostrophes typographiques (hors balises HTML). */
const t = (s: string) => fr(s).replace(/'(?![^<]*>)/g, '’');


/* ───────────────────────── Icônes ───────────────────────── */

/** Icône du sprite du site (public/icons.svg, symboles i-*). */
const Icon = ({ id, className = '' }: { id: string; className?: string }) => (
  <svg className={'vi-i ' + className} aria-hidden="true" focusable="false">
    <use href={`/icons.svg#i-${id}`} />
  </svg>
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

/** Note Trustpilot : la même pastille au-dessus du titre du haut de page et sous le titre des avis. */
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

/* ───────────────────────── Avis Trustpilot ───────────────────────── */

/**
 * Carte d'avis : toute la carte mène à l'avis sur Trustpilot (lien étiré). Les cartes en double (dup), qui ne servent
 * qu'à la boucle du défilement, sont cachées aux lecteurs d'écran et sorties de l'ordre de tabulation.
 */
function Avis({ a, dup }: { a: AvisClient; dup?: boolean }) {
  return (
    <article className="vi-rev">
      <div className="vi-rev__top">
        <Stars />
        <span className="vi-rev__src">Trustpilot</span>
      </div>
      <p className="vi-rev__t">{fr(a.titre)}</p>
      <p className="vi-rev__txt">«&nbsp;{fr(a.texte)}&nbsp;»</p>
      <div className="vi-rev__foot">
        <span className="vi-rev__av" style={{ background: a.couleur }} aria-hidden="true">
          {a.initiales}
        </span>
        <span className="vi-rev__who">
          <strong>{a.nom}</strong>
          <span>{a.role}</span>
        </span>
        <a className="vi-rev__link" href={a.url} target="_blank" rel="noopener" tabIndex={dup ? -1 : undefined} data-cta={dup ? undefined : 'avis'}>
          <span className="sr-only">Lire l’avis de {a.nom} sur Trustpilot (nouvel onglet)</span>
          <Icon id="solid-arrow-up-right-from-square" />
        </a>
      </div>
    </article>
  );
}

/** Une rangée qui défile en boucle : les avis, puis leur copie (masquée) pour une boucle sans à-coup. */
function AvisRow({ avis, reverse }: { avis: AvisClient[]; reverse?: boolean }) {
  return (
    <div className={'vi-marquee' + (reverse ? ' vi-marquee--rev' : '')}>
      <ul className="vi-marquee__track" style={{ '--dur': `${avis.length * 8}s` } as CSSProperties}>
        {avis.map((a) => (
          <li key={a.url}>
            <Avis a={a} />
          </li>
        ))}
        {avis.map((a) => (
          <li key={`dup-${a.url}`} className="vi-marquee__dup" aria-hidden="true">
            <Avis a={a} dup />
          </li>
        ))}
      </ul>
    </div>
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
  /* Sur téléphone, Essentiel s'ouvre par défaut (demande de Benjamin, 27/11/2026) ; « Recommandé » reste sur la formule mise en avant. */
  const defaut = plans.find((p) => p.id === 'essentiel') ?? plans[0];
  /* Haut de page (proposition 3) : textes tirés de la version. « Vos clients », « Vos futurs élèves »… ; « Votre
     entreprise », « Votre auto-école »… (v.chat.slot sans le point d'interrogation). */
  const quiMaj = v.qui.charAt(0).toUpperCase() + v.qui.slice(1);
  const nomSlot = v.chat.slot.replace(/\s*\?\s*$/, '');
  const nomCite = nomSlot.charAt(0).toLowerCase() + nomSlot.slice(1);

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

        {/* Bandeau d'offre et barre du haut regroupés (28/11/2026) : le bandeau reste collé en haut de l'écran pendant le
            défilement. Téléphone et tablette : le bandeau seul est collant (.vi-stick sans boîte) ; ordinateur : le bandeau
            et la barre du haut, ensemble. À la fin de l'offre, le bandeau disparaît (Countdown) et seule la barre reste. */}
        <div className="vi-stick">
        {/* ━━ Bandeau d'offre (seulement pendant l'offre) : le prix, puis le compte à rebours à la minute, qui dit seul
            jusqu'à quand l'offre vaut (« jusqu'à lundi soir (30 novembre) » retiré le 28/11/2026, à la demande). ━━ */}
        {promo && (
          <a className="vi-offre" href="#formules" data-vi-promo="" data-cta="bandeau-offre">
            <span className="vi-chip-promo">{PROMO_LANDING.nom}</span>
            <span className="vi-offre__txt">{desPrix}</span>
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
        </div>

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
                {/* Problème, solution, résultat (proposition 3 retenue le 28/11/2026, à la place de la phrase d'accroche) : on
                    comprend d'un coup d'œil ce que Kameo résout. Textes tirés de la version (vos clients, vos futurs élèves…). */}
                <ol className="vi-psr">
                  <li className="is-pb">
                    <span className="vi-psr__ico">
                      <Icon id="solid-magnifying-glass" />
                    </span>
                    <span>
                      <Nw>{`${quiMaj} ne passent plus par Google : ils demandent à ChatGPT.`}</Nw>
                    </span>
                  </li>
                  <li>
                    <span className="vi-psr__ico">
                      <Icon id="solid-wand-magic-sparkles" />
                    </span>
                    <span>
                      <Nw>{`Kameo fait citer et recommander ${nomCite} par les IA.`}</Nw>
                    </span>
                  </li>
                  <li className="is-win">
                    <span className="vi-psr__ico">
                      <Icon id="solid-arrow-trend-up" />
                    </span>
                    <span>
                      <Nw>{'En moins d’un mois, vous êtes parmi leurs premières recommandations.'}</Nw>
                    </span>
                  </li>
                </ol>
                {/* Demandes de Benjamin du 28/11/2026 : le bouton mène aux formules, en texte blanc, sans précision dessous. */}
                <div className="vi-hero__cta">
                  <Cta cta="hero-formules" size="lg" white href="#formules">
                    Voir nos accompagnements
                  </Cta>
                </div>
              </div>
              {/* Photo des dirigeants à la place du téléphone (28/11/2026, format Pennylane) ; le téléphone ChatGPT a sa propre
                  section juste après. Image prioritaire (premier écran), deux tailles. */}
              <figure className="vi-hero__photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/benjamin-louison-podcast.webp"
                  srcSet="/images/benjamin-louison-podcast-800.webp 800w, /images/benjamin-louison-podcast.webp 1600w"
                  sizes="(min-width: 1024px) 640px, (min-width: 768px) 640px, 100vw"
                  width={1600}
                  height={1067}
                  alt="Benjamin Dayan et Louison Boutet, les dirigeants de Kameo"
                  fetchPriority="high"
                  decoding="async"
                />
                {/* Étiquette posée sur la photo (proposition 3, 28/11/2026), avec les prénoms depuis le 28/11/2026 (demande de
                    Louison : une seule grande pastille). Sur une ligne ; sous 480 px, le rôle passe sous les prénoms. La petite
                    réponse ChatGPT qui l'accompagnait est retirée le 28/11/2026 : le film plus bas raconte toute l'histoire. */}
                <span className="vi-hero__chip">
                  <strong>Benjamin et Louison</strong>
                  <span className="vi-hero__chip-sep">, </span>
                  <span className="vi-hero__chip-role">experts du référencement IA</span>
                </span>
              </figure>
            </div>
            {/* Bande de preuves façon Pennylane (28/11/2026) : logos clients qui défilent, coupés à droite par les chiffres et
                le lien vers les avis. Chiffres de Benjamin du 28/11/2026 ; « +50 » : PROOF.projetsTotal (src/lib/site.ts). */}
            <div className="vi-wrap vi-proof">
              <LogosClients />
              <div className="vi-proof__txt">
                <p>
                  <strong className="vi-gt">+{PROOF.projetsTotal}&nbsp;entreprises accompagnées</strong>, 100&nbsp;% de clients satisfaits et
                  des premiers résultats en 2&nbsp;semaines en moyenne.
                </p>
                <a className="vi-proof__link" href="#avis" data-cta="preuves-avis">
                  Voir les avis clients
                  <svg className="vi-ico" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                    <path d="M8 5l5 5-5 5" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Film du haut de page (28/11/2026, demande de Louison) : 51 s muettes en boucle, sur toute la largeur, sous les
                logos clients et juste avant les avis (déplacé le 28/11/2026). Google hier, l'IA aujourd'hui, le client qui part
                chez un concurrent cité, puis Kameo. Boutons pause et plein écran. */}
            <div className="vi-wrap vi-film">
              <HeroFilm />
            </div>
          </section>

          {/* ━━ 2 · « Nos clients nous recommandent », juste après le haut de page (28/11/2026) : note Trustpilot, cas clients cités par les IA, puis tous les avis, avec le lien de chacun, sur deux rangées qui défilent en sens inverse
              (demande du 28/11/2026). Défilement en pause au survol et au clavier, sans bouton pause (choix du 28/11/2026) ;
              avec « réduire les animations », les rangées deviennent de simples bandes à faire glisser. Avis sur nos
              projets web et SEO (src/content/avis.ts), jamais présentés comme des résultats GEO. ━━ */}
          <section className="vi-sec" id="avis" aria-labelledby="avis-t">
            <div className="vi-wrap">
              <Head id="avis-t">
                Nos clients <span className="vi-gt">nous recommandent</span>
              </Head>
              <div className="vi-avis__note" data-vi-reveal="">
                <TrustBadge />
              </div>
              {/* Cas clients (Défikart, CDP69, OmegaCloud) entre la note Trustpilot et les avis : l'ancienne section « Nos
                  clients, cités par les IA » est fondue dans celle-ci (28/11/2026). */}
              <div className="vi-cases vi-avis__cases">
                {cas.map((c, i) => (
                  <Cas key={c.id} c={c} i={i} />
                ))}
              </div>
            </div>
            {/* Pas de bouton pause (demande du 28/11/2026) : le défilement s'arrête seulement le temps du survol d'une carte
                ou du passage au clavier, pour pouvoir lire et cliquer. */}
            <div className="vi-avis">
              <AvisRow avis={AVIS_TRUSTPILOT.filter((_, i) => i % 2 === 0)} />
              <AvisRow avis={AVIS_TRUSTPILOT.filter((_, i) => i % 2 === 1)} reverse />
            </div>
          </section>

          {/* ━━ 3 · Formules (ordre des sections revu le 28/11/2026 ; la section « 3 étapes pour être dans la réponse », juste avant,
              est retirée le 28/11/2026 : le film du haut de page la raconte) ━━ */}
          <section className="vi-sec" id="formules" aria-labelledby="formules-t">
            <div className="vi-wrap">
              <Head id="formules-t">
                3 formules, des prix clairs
              </Head>

              {promo && (
                /* Ligne d'offre raccourcie le 28/11/2026 (« beaucoup trop de texte ») : plus de prix répétés, ils sont dans les
                   cartes juste dessous (prix de l'offre, puis prix normal dès le 1er décembre) ; le compte à rebours dit la fin. */
                <div className="vi-promo" data-vi-promo="" data-vi-reveal="">
                  <span className="vi-chip-promo">{PROMO_LANDING.nom}</span>
                  <p className="vi-promo__txt">
                    Réservez votre diagnostic avant la fin&nbsp;: ces prix restent les vôtres pendant tout l’engagement.
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
                    return (
                      <li key={p.id} id={`formule-${p.id}`} className={`vi-plan vi-plan--${p.id}` + (star ? ' vi-plan--star' : '')}>
                        <article className="vi-plan__in" aria-labelledby={`vi-plan-${p.id}`}>
                          <div className="vi-plan__top">
                            <h3 className="vi-plan__name" id={`vi-plan-${p.id}`}>
                              {p.name}
                            </h3>
                            {star && <span className="vi-plan__badge">Recommandé</span>}
                          </div>
                          {/* Description « pour qui » sous le nom retirée le 28/11/2026 (demande) */}
                          <LogosIA />
                          {/* Réduction rendue évidente (28/11/2026) : pastille « −30 % Black Friday », prix de l'offre en dégradé,
                              puis le prix à partir du 1er décembre, jamais barré (prix fixé le 27/11/2026, jamais pratiqué avant
                              l'offre : pas de prix de référence fictif). La remise est calculée sur ce prix, dit en clair. */}
                          <div className="vi-plan__price">
                            {apres !== null && (
                              <p className="vi-plan__deal" data-vi-promo="">
                                <span className="vi-plan__pct">
                                  −{Math.round(PROMO_LANDING.remise * 100)}
                                  {nb}%
                                </span>
                                <span className="vi-plan__dealname">{PROMO_LANDING.nom}</span>
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
                            {apres !== null && (
                              <p className="vi-plan__after" data-vi-promo="">
                                au lieu de{' '}
                                <strong>
                                  {eur(apres)}
                                  {nb}HT/mois
                                </strong>{' '}
                                à partir du {REPRISE}
                              </p>
                            )}
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
              {/* Pastilles sous les formules (audit offert, 12 mois pour 11, formule choisie ensemble) retirées le 28/11/2026. */}
            </div>
          </section>

          {/* ━━ 4 · Réservation (section « 33 millions » retirée le 28/11/2026 : son chiffre est dans le film du haut de page), dernière section de la page (équipe retirée le 28/11/2026) : Calendly intégré à la page (demande de Benjamin du 28/11/2026, à la place du dernier appel à
              l'action) ; la FAQ a été retirée le 27/11/2026 à sa demande ━━ */}
          <section className="vi-sec vi-final" id="diagnostic" aria-labelledby="diagnostic-t">
            <div className="vi-wrap vi-final__in">
              <Head id="diagnostic-t">
                Réservez votre <span className="vi-gt">diagnostic gratuit</span>
              </Head>
              <CalendlyInline preloadAfter="#avis" utm={{ utm_source: 'landing', utm_campaign: 'geo', ...(v.metier && { utm_content: v.metier }) }} />
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
          {/* Section « Une équipe jeune, dynamique et performante » retirée le 28/11/2026 (demande). */}
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
