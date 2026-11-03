'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { SHOTS } from './lpWorks.shots';

/*
 * Landing page Ads, bloc Réalisations (choix de Benjamin du 01/11/2026) : aperçu du site à gauche, liste
 * des projets à droite (nom, secteur et, pour le projet affiché, un court descriptif).
 *
 * Trois façons d'afficher un site, selon l'appareil :
 * - Ordinateur avec souris : le site en direct (iframe), vidéos, animations et défilement du vrai site.
 *   Dans la fenêtre, il est rendu à 1 280 px de large puis réduit ; en plein écran, à la taille de
 *   l'écran. La capture du haut de la page s'affiche le temps du chargement. Un site ne s'affiche en
 *   direct que s'il l'accepte (pas de X-Frame-Options, frame-ancestors qui admet agence-kameo.fr) :
 *   sinon live: false, et sa capture complète défile dans la fenêtre.
 * - Téléphone : jamais de site en direct (3 sites complets à charger en 4G, défilement bloqué tant qu'ils
 *   ne sont pas prêts, et un cadre qui défile mal sur iPhone ; constaté le 03/11/2026). Dans la fenêtre,
 *   une vidéo courte et muette de la version mobile du site (scripts/record-realisations.mjs), lue
 *   seulement quand elle est à l'écran ; en plein écran, la page entière en captures haute définition
 *   (scripts/capture-realisations.mjs), qui défile tout de suite, au doigt.
 * - Tablette et autre écran tactile : capture du haut de la page, et page entière en plein écran.
 *
 * Le plein écran est rendu dans <body> (portail) : la section crée un contexte d'empilement (z-index 1 du
 * fond sombre) sous les sections suivantes.
 */
type Project = { id: string; name: string; tag: string; desc: string; url: string; live: boolean };

const PROJECTS: Project[] = [
  {
    id: 'dronespec',
    name: 'DroneSpec',
    tag: 'BTP',
    desc: 'Site vitrine d’un spécialiste du drone professionnel : inspection technique, topographie et modélisation 3D.',
    url: 'https://dronespec.fr/',
    live: true,
  },
  {
    id: 'sunshine-resort',
    name: 'Sunshine Resort',
    tag: 'Hôtellerie',
    desc: 'Site d’un resort de cinq villas de luxe en Guadeloupe, mis en scène par des vidéos des villas.',
    url: 'https://sunshine-resort.kameo-test.fr/',
    // Affiché dans une autre page, le site se recharge en boucle (~4 fois par seconde, mesuré le 03/11/2026) :
    // le « Guest Mode » de LiteSpeed Cache attend son cookie _lscache_vary, refusé hors de son site, et
    // recharge la page tant qu'il ne le trouve pas. Capture en attendant que ce mode soit coupé sur le site.
    live: false,
  },
  {
    id: 'paris-sg-news',
    name: 'Paris SG News',
    tag: 'Média',
    desc: 'Média indépendant consacré au Paris Saint-Germain : actualités, matchs et mercato.',
    url: 'https://parissgnews.fr/',
    live: true,
  },
];

/** Largeur de rendu des sites en direct dans la fenêtre : leur version ordinateur. */
const SITE_W = 1280;
/**
 * Site en direct : il apparaît peu après son premier chargement, et au plus tard REVEAL_MAX_MS après
 * l'ouverture (il s'affiche en moins d'une seconde, mais son événement load peut attendre une grosse vidéo :
 * 10 s pour DroneSpec en 4G). D'ici là, la capture est devant et le site ne reçoit ni clic ni défilement.
 */
const REVEAL_AFTER_LOAD_MS = 300;
const REVEAL_MAX_MS = 2500;
/** Plein écran en captures : les deux premières tranches tout de suite, les suivantes peu après. */
const FIRST_TILES = 2;
const REST_TILES_MS = 1200;
const MOBILE = '(max-width: 767px)';
const MOUSE = '(hover: hover) and (pointer: fine)';
const n = PROJECTS.length;

type Device = 'desktop' | 'mobile';

const host = (url: string) => new URL(url).host;
const tile = (p: Project, d: Device, i: number) =>
  `/images/landing_page/realisations/${p.id}/${d}-${String(i + 1).padStart(2, '0')}.webp`;
const video = (p: Project) => `/video/realisations/${p.id}-mobile`;
/** Avant que la page soit interactive, les deux versions (la feuille de style montre celle de l'écran). */
const devices = (device: Device | null): Device[] => (device ? [device] : ['desktop', 'mobile']);

/**
 * Capture complète du site, qu'on fait défiler. progressive : deux tranches d'abord, les autres peu
 * après (plein écran) ; sinon chargement différé, puis tout dès que le visiteur fait défiler (warm).
 */
function Shots({ p, device, warm, progressive }: { p: Project; device: Device | null; warm?: boolean; progressive?: boolean }) {
  const s = SHOTS[p.id];
  const [all, setAll] = useState(false);

  useEffect(() => {
    if (!progressive) return;
    const t = window.setTimeout(() => setAll(true), REST_TILES_MS);
    return () => window.clearTimeout(t);
  }, [progressive]);

  const eager = (i: number) => !!device && (warm || all || (progressive && i < FIRST_TILES));
  return (
    <>
      {devices(device).map((d) => (
        <div key={d} className={`lp2-shot lp2-shot--${d}`}>
          {s[d].tiles.map((h, i) => (
            <img
              key={i}
              src={tile(p, d, i)}
              width={s[d].w}
              height={h}
              alt={i === 0 ? `Site ${p.name}, page d’accueil` : ''}
              loading={eager(i) ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
            />
          ))}
        </div>
      ))}
    </>
  );
}

/** Haut de la page en capture : affiché le temps que le site en direct se charge, ou sur tablette. */
function Poster({ p, device }: { p: Project; device: Device | null }) {
  const s = SHOTS[p.id];
  return (
    <>
      {devices(device).map((d) => (
        <img
          key={d}
          className={`lp2-live__poster lp2-shot--${d}`}
          src={tile(p, d, 0)}
          width={s[d].w}
          height={s[d].tiles[0]}
          alt={`Site ${p.name}, page d’accueil`}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      ))}
    </>
  );
}

/**
 * Téléphone : vidéo muette, en boucle, de la version mobile du site. Rien n'est téléchargé avant
 * qu'elle approche de l'écran (near, gardé d'un projet à l'autre) ; elle ne joue qu'à l'écran, et pas
 * derrière le plein écran (hold). Pas de lecture automatique en mode « économie de données » ni avec
 * « réduire les animations » : l'image reste affichée.
 */
function PhoneVideo({ p, near, onNear, hold }: { p: Project; near: boolean; onNear: () => void; hold: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const visible = useRef(false);
  const holdRef = useRef(hold);
  const autoplay = useRef(false);

  // lecture si la vidéo est à l'écran et pas couverte par le plein écran (refs : à jour dans les observateurs)
  const sync = () => {
    const v = ref.current;
    if (!v || !autoplay.current) return;
    if (visible.current && !holdRef.current) v.play()?.catch(() => {});
    else v.pause();
  };

  useEffect(() => {
    holdRef.current = hold;
    sync();
    // sync ne lit que des refs
  }, [hold]);

  useEffect(() => {
    const v = ref.current;
    if (!v || near) return;
    const io = new IntersectionObserver((es) => es[es.length - 1].isIntersecting && onNear(), { rootMargin: '800px 0px' });
    io.observe(v);
    return () => io.disconnect();
  }, [near, onNear]);

  useEffect(() => {
    const v = ref.current;
    if (!v || !near) return;
    // lecture automatique muette (iOS l'exige)
    v.muted = true;
    v.defaultMuted = true;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    autoplay.current = !saveData && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!autoplay.current) return;
    // dernier état seulement : un défilement rapide peut livrer une entrée et une sortie d'un coup
    const io = new IntersectionObserver(
      (es) => {
        visible.current = es[es.length - 1].isIntersecting;
        sync();
      },
      { rootMargin: '200px 0px' },
    );
    io.observe(v);
    return () => {
      io.disconnect();
      v.pause();
    };
  }, [near]);

  // retirée de la page (changement de projet) : libérer le décodeur vidéo, qu'iOS garde sinon. Seulement si
  // elle n'est plus dans la page : React rejoue ses effets sur un élément qui reste (mode strict, développement)
  useEffect(() => {
    const v = ref.current;
    return () => {
      if (!v || v.isConnected) return;
      v.pause();
      v.removeAttribute('src');
      v.load();
    };
  }, []);

  return (
    <video
      ref={ref}
      className="lp2-phone"
      src={near ? `${video(p)}.mp4` : undefined}
      poster={near ? `${video(p)}.webp` : undefined}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-label={`Vidéo du site ${p.name} sur téléphone`}
    />
  );
}

/**
 * Site en direct ; réduit (scaled) pour tenir dans la fenêtre avec sa mise en page d'ordinateur. Le cadre
 * n'existe que si enabled : dans la fenêtre, seulement quand elle est à l'écran et pas sous le plein écran
 * (le site se charge alors, et s'arrête dès qu'on quitte la section : DroneSpec télécharge jusqu'à 94 Mo).
 */
function Live({ p, device, scaled, enabled }: { p: Project; device: Device | null; scaled: boolean; enabled: boolean }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const revealTimer = useRef(0);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  const [loaded, setLoaded] = useState(false);
  const frameOn = enabled && (!scaled || !!box);

  // au plus tard REVEAL_MAX_MS après la création du cadre ; un rechargement du site ne relance rien ;
  // cadre retiré : retour à la capture
  useEffect(() => {
    if (!frameOn) return;
    const t = window.setTimeout(() => setLoaded(true), REVEAL_MAX_MS);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(revealTimer.current);
      revealTimer.current = 0;
      setLoaded(false);
    };
  }, [frameOn]);

  useEffect(() => {
    const el = boxRef.current;
    if (!scaled || !el) return;
    const ro = new ResizeObserver(([e]) => setBox({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [scaled]);

  const scale = box ? box.w / SITE_W : 1;
  const style: CSSProperties | undefined =
    scaled && box ? { width: SITE_W, height: Math.ceil(box.h / scale), transform: `scale(${scale})` } : undefined;

  return (
    <div className="lp2-live" ref={boxRef}>
      <Poster p={p} device={scaled ? 'desktop' : device} />
      {frameOn && (
        <iframe
          src={p.url}
          title={`Site ${p.name} en direct`}
          className={'lp2-live__frame' + (loaded ? ' is-loaded' : '')}
          style={style}
          allow="autoplay; fullscreen; picture-in-picture"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
          onLoad={() => {
            if (loaded || revealTimer.current) return;
            revealTimer.current = window.setTimeout(() => setLoaded(true), REVEAL_AFTER_LOAD_MS);
          }}
        />
      )}
    </div>
  );
}

const ExpandIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path
      d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
    <path
      d="M7 11V8a5 5 0 0110 0v3M6 11h12v9H6z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Arrow = ({ dir }: { dir: 'prev' | 'next' }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      d={dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LpWorks() {
  const [active, setActive] = useState(0);
  const [full, setFull] = useState(false);
  const [hint, setHint] = useState(true);
  const [warm, setWarm] = useState<Set<string>>(() => new Set());
  const [device, setDevice] = useState<Device | null>(null);
  const [mouse, setMouse] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [phoneNear, setPhoneNear] = useState(false);
  const markNear = useCallback(() => setPhoneNear(true), []);
  const windowRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(active);
  const liveRef = useRef(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLDivElement>(null);
  const fullViewportRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const hintTimer = useRef(0);
  const p = PROJECTS[active];
  // ordinateur avec souris : site en direct (ou capture qu'on fait défiler) dans la fenêtre et en plein écran
  const desk = mouse && device === 'desktop';
  const live = desk && p.live;

  const heat = (id: string) => setWarm((w) => (w.has(id) ? w : new Set(w).add(id)));
  const select = (i: number) => {
    const next = (i + n) % n;
    setActive(next);
    heat(PROJECTS[next].id);
    // nouveau projet : retour en haut du site
    viewportRef.current?.scrollTo({ top: 0 });
    fullViewportRef.current?.scrollTo({ top: 0 });
  };
  const openFull = (el: HTMLElement | null) => {
    opener.current = el;
    heat(p.id);
    setFull(true);
  };

  useEffect(() => {
    activeRef.current = active;
    liveRef.current = live;
  }, [active, live]);

  // Version des captures (téléphone en dessous de 768 px) et présence d'une souris
  useEffect(() => {
    const mqMobile = window.matchMedia(MOBILE);
    const mqMouse = window.matchMedia(MOUSE);
    const update = () => {
      setDevice(mqMobile.matches ? 'mobile' : 'desktop');
      setMouse(mqMouse.matches);
    };
    update();
    mqMobile.addEventListener('change', update);
    mqMouse.addEventListener('change', update);
    return () => {
      mqMobile.removeEventListener('change', update);
      mqMouse.removeEventListener('change', update);
      window.clearTimeout(hintTimer.current);
    };
  }, []);

  // Fenêtre à l'écran (au moins un cinquième visible) : le site en direct s'y charge ; hors de l'écran, il est retiré
  useEffect(() => {
    const el = windowRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => {
        const e = es[es.length - 1];
        if (e.intersectionRatio >= 0.2) setOnScreen(true);
        else if (!e.isIntersecting) setOnScreen(false);
      },
      { threshold: [0, 0.2] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Plein écran : page figée, Échap, flèches, focus gardé dans la fenêtre puis rendu
  useEffect(() => {
    if (!full) return;
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const before = { overflow: html.style.overflow, paddingRight: html.style.paddingRight };
    html.style.overflow = 'hidden';
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    // site en direct : focus sur Fermer (Échap ne remonte pas depuis le site) ; capture : défilement au clavier
    (liveRef.current ? closeRef.current : fullViewportRef.current)?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFull(false);
      else if (e.key === 'ArrowRight') select(activeRef.current + 1);
      else if (e.key === 'ArrowLeft') select(activeRef.current - 1);
      else if (e.key === 'Tab' && fullRef.current) {
        // pas le site en direct : une fois le focus dedans, Échap et les flèches n'arrivent plus ici
        const f = [...fullRef.current.querySelectorAll<HTMLElement>('button, [tabindex="0"]')];
        const i = f.indexOf(document.activeElement as HTMLElement);
        e.preventDefault();
        f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length]?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = before.overflow;
      html.style.paddingRight = before.paddingRight;
      document.removeEventListener('keydown', onKey);
      opener.current?.focus({ preventScroll: true });
    };
    // select n'utilise que des setters et des refs : pas besoin de le suivre
  }, [full]);

  return (
    <div className="lp2-show" data-reveal="">
      <div
        ref={windowRef}
        className={'lp2-show__window' + (device && !desk ? ' is-touch' : '')}
        id="lp2-show-window"
        role="region"
        aria-label={`Aperçu du site ${p.name}`}
      >
        <div className="lp2-show__bar">
          <span className="lp2-show__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="lp2-show__url">
            <LockIcon />
            {host(p.url)}
          </span>
          <span className="lp2-show__actions">
            <button
              type="button"
              className="lp2-show__act"
              aria-label={`Afficher le site ${p.name} en plein écran`}
              onClick={(e) => openFull(e.currentTarget)}
            >
              <ExpandIcon />
              <span className="lp2-show__act-label">Plein écran</span>
            </button>
          </span>
        </div>
        <div
          className={'lp2-show__viewport' + (desk && !p.live ? '' : ' is-still')}
          ref={viewportRef}
          tabIndex={desk && !p.live ? 0 : -1}
          aria-label={`Aperçu du site ${p.name}`}
          onScroll={() => {
            setHint(false);
            heat(p.id);
          }}
          onMouseEnter={() => {
            // site en direct : le défilement se fait dans le site, invisible d'ici
            window.clearTimeout(hintTimer.current);
            hintTimer.current = window.setTimeout(() => setHint(false), 1800);
          }}
        >
          {live ? (
            <Live key={p.id} p={p} device={device} scaled enabled={onScreen && !full} />
          ) : desk ? (
            <Shots key={p.id} p={p} device={device} warm={warm.has(p.id)} />
          ) : device === 'mobile' ? (
            <PhoneVideo key={p.id} p={p} near={phoneNear} onNear={markNear} hold={full} />
          ) : (
            <Poster p={p} device={device} />
          )}
        </div>
        {desk && (
          <span className={'lp2-show__hint' + (hint ? '' : ' is-hidden')} aria-hidden="true">
            <span className="lp2-show__hint-mouse" />
            Faites défiler pour explorer le site
          </span>
        )}
        {/* Écran tactile : ouverture en plein écran */}
        <button
          type="button"
          className="lp2-show__explore"
          aria-label={`Explorer le site ${p.name} en plein écran`}
          onClick={(e) => openFull(e.currentTarget)}
        >
          <span>
            <ExpandIcon />
            Explorer le site
          </span>
        </button>
      </div>

      <ol className="lp2-show__list" aria-label="Projets">
        {PROJECTS.map((proj, i) => (
          <li key={proj.id} className={'lp2-show__item' + (i === active ? ' is-active' : '')}>
            <button
              type="button"
              className="lp2-show__pick"
              aria-current={i === active ? 'true' : undefined}
              aria-controls="lp2-show-window"
              onClick={() => select(i)}
            >
              <span className="lp2-show__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="lp2-show__name">{proj.name}</span>
              <span className="lp2-show__tag">{proj.tag}</span>
            </button>
            <div className="lp2-show__desc" aria-hidden={i !== active}>
              <div>
                <p>{proj.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {full &&
        createPortal(
          <div
            ref={fullRef}
            className="lp2-full"
            role="dialog"
            aria-modal="true"
            aria-label={`Aperçu du site ${p.name}, projet ${active + 1} sur ${n}`}
            onTouchStart={(e) => {
              // un seul doigt, écran non zoomé : sinon le geste déplace la vue zoomée, il ne change pas de projet
              const zoomed = (window.visualViewport?.scale ?? 1) > 1.01;
              touch.current = e.touches.length === 1 && !zoomed ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
            }}
            onTouchEnd={(e) => {
              const t = touch.current;
              touch.current = null;
              if (!t || e.touches.length > 0) return;
              const dx = e.changedTouches[0].clientX - t.x;
              const dy = e.changedTouches[0].clientY - t.y;
              if (Math.abs(dx) > 70 && Math.abs(dx) > 2 * Math.abs(dy)) select(active + (dx < 0 ? 1 : -1));
            }}
          >
            <div className="lp2-full__bar">
              <div className="lp2-full__title">
                <strong>{p.name}</strong>
                <span>{host(p.url)}</span>
              </div>
              <div className="lp2-full__nav">
                <button type="button" className="lp2-full__btn" aria-label="Projet précédent" onClick={() => select(active - 1)}>
                  <Arrow dir="prev" />
                </button>
                <span className="lp2-full__count" aria-hidden="true">
                  {active + 1} / {n}
                </span>
                <button type="button" className="lp2-full__btn" aria-label="Projet suivant" onClick={() => select(active + 1)}>
                  <Arrow dir="next" />
                </button>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="lp2-full__btn lp2-full__close"
                aria-label="Fermer"
                onClick={() => setFull(false)}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div
              className={'lp2-full__viewport' + (live ? ' is-live' : '')}
              ref={fullViewportRef}
              tabIndex={live ? -1 : 0}
              aria-label={`Site ${p.name} : faites défiler pour l’explorer`}
            >
              {live ? (
                <Live key={p.id} p={p} device={device} scaled={false} enabled />
              ) : (
                <div className="lp2-full__page">
                  <Shots key={p.id} p={p} device={device} progressive />
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
