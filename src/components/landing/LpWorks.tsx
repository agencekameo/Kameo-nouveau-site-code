'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { SHOTS } from './lpWorks.shots';

/*
 * Landing page Ads, bloc Réalisations (choix de Benjamin du 01/11/2026) : aperçu du site à gauche, liste
 * des projets à droite (nom, secteur et, pour le projet affiché, un court descriptif).
 * - DroneSpec et Sunshine Resort s'affichent en direct (iframe) : vidéos, animations et défilement du vrai
 *   site, net à toutes les tailles. Dans la fenêtre, le site est rendu à 1 280 px de large (version
 *   ordinateur) puis réduit à la taille de la fenêtre ; en plein écran, à la taille de l'écran. Une capture
 *   du haut de la page (scripts/capture-realisations.mjs) s'affiche le temps du chargement.
 * - Paris SG News interdit l'affichage dans un autre site (X-Frame-Options DENY, frame-ancestors 'none') :
 *   capture complète en haute définition (ordinateur et téléphone), qu'on fait défiler. Passer live à true
 *   (et refaire les captures) quand parissgnews.fr autorise agence-kameo.fr dans frame-ancestors.
 * - Écran tactile : pas de site en direct dans la fenêtre, où le doigt resterait piégé ; un toucher ouvre le
 *   plein écran, où le site s'affiche en direct.
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
    live: true,
  },
  {
    id: 'paris-sg-news',
    name: 'Paris SG News',
    tag: 'Média',
    desc: 'Média indépendant consacré au Paris Saint-Germain : actualités, matchs et mercato.',
    url: 'https://parissgnews.fr/',
    live: false,
  },
];

/** Largeur de rendu des sites en direct dans la fenêtre : leur version ordinateur. */
const SITE_W = 1280;
/** Après le chargement, le site met encore un moment à afficher sa vidéo d'accueil : la capture reste devant. */
const REVEAL_MS = 2000;
const MOBILE = '(max-width: 767px)';
const MOUSE = '(hover: hover) and (pointer: fine)';
const n = PROJECTS.length;

type Device = 'desktop' | 'mobile';

const host = (url: string) => new URL(url).host;
const tile = (p: Project, d: Device, i: number) =>
  `/images/landing_page/realisations/${p.id}/${d}-${String(i + 1).padStart(2, '0')}.webp`;
/** Avant que la page soit interactive, les deux versions (la feuille de style montre celle de l'écran). */
const devices = (device: Device | null): Device[] => (device ? [device] : ['desktop', 'mobile']);

/** Capture complète du site, qu'on fait défiler. */
function Shots({ p, device, warm }: { p: Project; device: Device | null; warm: boolean }) {
  const s = SHOTS[p.id];
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
              // chargement différé ; une fois le visiteur dans l'aperçu, toutes les tranches sans attendre
              loading={device && warm ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
            />
          ))}
        </div>
      ))}
    </>
  );
}

/** Haut de la page en capture : affiché le temps que le site en direct se charge, ou au toucher. */
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

/** Site en direct ; réduit (scaled) pour tenir dans la fenêtre avec sa mise en page d'ordinateur. */
function Live({ p, device, scaled }: { p: Project; device: Device | null; scaled: boolean }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const revealTimer = useRef(0);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => () => window.clearTimeout(revealTimer.current), []);

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
      {(!scaled || box) && (
        <iframe
          src={p.url}
          title={`Site ${p.name} en direct`}
          className={'lp2-live__frame' + (loaded ? ' is-loaded' : '')}
          style={style}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
          onLoad={() => {
            window.clearTimeout(revealTimer.current);
            revealTimer.current = window.setTimeout(() => setLoaded(true), REVEAL_MS);
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
  const activeRef = useRef(active);
  const viewportRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLDivElement>(null);
  const fullViewportRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const hintTimer = useRef(0);
  const p = PROJECTS[active];
  // site en direct dans la fenêtre : ordinateur avec souris seulement
  const liveInline = p.live && mouse && device === 'desktop';

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
  }, [active]);

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

  // Plein écran : page figée, Échap, flèches, focus gardé dans la fenêtre puis rendu
  useEffect(() => {
    if (!full) return;
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const before = { overflow: html.style.overflow, paddingRight: html.style.paddingRight };
    html.style.overflow = 'hidden';
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    // site en direct : focus sur Fermer (Échap ne remonte pas depuis le site) ; capture : défilement au clavier
    (PROJECTS[activeRef.current].live ? closeRef.current : fullViewportRef.current)?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFull(false);
      else if (e.key === 'ArrowRight') select(activeRef.current + 1);
      else if (e.key === 'ArrowLeft') select(activeRef.current - 1);
      else if (e.key === 'Tab' && fullRef.current) {
        const f = [...fullRef.current.querySelectorAll<HTMLElement>('button, iframe, [tabindex="0"]')];
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
      <div className="lp2-show__window" id="lp2-show-window" role="region" aria-label={`Aperçu du site ${p.name}`}>
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
          className={'lp2-show__viewport' + (liveInline ? ' is-live' : '')}
          ref={viewportRef}
          tabIndex={liveInline ? -1 : 0}
          aria-label={`Aperçu du site ${p.name} : faites défiler pour l’explorer`}
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
          {liveInline ? (
            <Live key={p.id} p={p} device={device} scaled />
          ) : p.live ? (
            <Poster p={p} device={device} />
          ) : (
            <Shots p={p} device={device} warm={warm.has(p.id)} />
          )}
        </div>
        <span className={'lp2-show__hint' + (hint ? '' : ' is-hidden')} aria-hidden="true">
          <span className="lp2-show__hint-mouse" />
          Faites défiler pour explorer le site
        </span>
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
            onTouchStart={(e) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
            onTouchEnd={(e) => {
              const t = touch.current;
              touch.current = null;
              if (!t) return;
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
              className={'lp2-full__viewport' + (p.live ? ' is-live' : '')}
              ref={fullViewportRef}
              tabIndex={p.live ? -1 : 0}
              aria-label={`Site ${p.name} : faites défiler pour l’explorer`}
            >
              {p.live ? (
                <Live key={p.id} p={p} device={device} scaled={false} />
              ) : (
                <div className="lp2-full__page">
                  <Shots p={p} device={device} warm />
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
