'use client';

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { SHOTS } from './lpWorks.shots';

/*
 * Landing page Ads, bloc Réalisations (choix de Benjamin du 01/11/2026) : aperçus immersifs de 3 sites.
 * Chaque site est une capture de la page entière, version ordinateur et téléphone
 * (scripts/capture-realisations.mjs), découpée en tranches chargées au fil du défilement. Elle s'affiche
 * dans une fenêtre de navigateur où l'on fait défiler le site ; des onglets changent de projet, un mode
 * plein écran (flèches, Échap) agrandit l'aperçu, un lien mène au site réel.
 * Captures plutôt que sites en direct (iframe) : parissgnews.fr interdit l'affichage dans un autre site
 * (frame-ancestors 'none'), et un site en direct chargerait ses cookies, bandeaux et traceurs sur la landing.
 * Écran tactile : la fenêtre ne défile pas dans la page, où le doigt resterait piégé ; un toucher ouvre
 * le plein écran, où l'on fait défiler le site.
 * Le plein écran est rendu dans <body> (portail) : la section crée un contexte d'empilement (z-index 1 du
 * fond sombre) sous les sections suivantes.
 */
type Project = { id: string; name: string; tag: string; desc: string; url: string };

const PROJECTS: Project[] = [
  {
    id: 'dronespec',
    name: 'DroneSpec',
    tag: 'BTP',
    desc: 'Site vitrine d’un spécialiste de l’inspection et des relevés par drone.',
    url: 'https://dronespec.fr/',
  },
  {
    id: 'sunshine-resort',
    name: 'Sunshine Resort',
    tag: 'Hôtellerie',
    desc: 'Site d’un resort de cinq villas de luxe en Guadeloupe.',
    url: 'https://sunshine-resort.kameo-test.fr/',
  },
  {
    id: 'paris-sg-news',
    name: 'Paris SG News',
    tag: 'Média',
    desc: 'Site d’actualité indépendant consacré au Paris Saint-Germain.',
    url: 'https://parissgnews.fr/',
  },
];

const host = (url: string) => new URL(url).host;
const n = PROJECTS.length;
const MOBILE = '(max-width: 767px)';

type Device = 'desktop' | 'mobile';

/**
 * Captures du site. Avant que la page soit interactive, les deux versions sont dans la page (chargement
 * différé, la feuille de style n'affiche que celle de l'écran) ; ensuite, seule celle de l'écran.
 */
function Shots({ p, device, warm }: { p: Project; device: Device | null; warm: boolean }) {
  const s = SHOTS[p.id];
  return (
    <>
      {(device ? [device] : (['desktop', 'mobile'] as const)).map((d) => (
        <div key={d} className={`lp2-shot lp2-shot--${d}`}>
          {s[d].tiles.map((h, i) => (
            <img
              key={i}
              src={`/images/landing_page/realisations/${p.id}/${d}-${String(i + 1).padStart(2, '0')}.webp`}
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
const ExternalIcon = () => (
  <svg viewBox="0 0 14 14" width="13" height="13" aria-hidden="true">
    <path
      d="M3 11L11 3M11 3H6M11 3V8"
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
  const [scrolled, setScrolled] = useState(false);
  const [warm, setWarm] = useState<Set<string>>(() => new Set());
  const [device, setDevice] = useState<Device | null>(null);
  const activeRef = useRef(active);
  const viewportRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLDivElement>(null);
  const fullViewportRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const p = PROJECTS[active];

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

  // Onglets : flèches gauche et droite (motif ARIA des onglets)
  const onTabsKey = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (active + (e.key === 'ArrowRight' ? 1 : -1) + n) % n;
    select(next);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  };

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Version des captures selon la largeur de l'écran (téléphone en dessous de 768 px)
  useEffect(() => {
    const mq = window.matchMedia(MOBILE);
    const update = () => setDevice(mq.matches ? 'mobile' : 'desktop');
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Plein écran : page figée, Échap, flèches, focus gardé dans la fenêtre puis rendu
  useEffect(() => {
    if (!full) return;
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const before = { overflow: html.style.overflow, paddingRight: html.style.paddingRight };
    html.style.overflow = 'hidden';
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    fullViewportRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFull(false);
      else if (e.key === 'ArrowRight') select(activeRef.current + 1);
      else if (e.key === 'ArrowLeft') select(activeRef.current - 1);
      else if (e.key === 'Tab' && fullRef.current) {
        const f = [...fullRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex="0"]')];
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
      <div className="lp2-show__tabs" role="tablist" aria-label="Projets" ref={tabsRef} onKeyDown={onTabsKey}>
        {PROJECTS.map((proj, i) => (
          <button
            key={proj.id}
            type="button"
            role="tab"
            id={`lp2-show-tab-${proj.id}`}
            aria-selected={i === active}
            aria-controls="lp2-show-panel"
            tabIndex={i === active ? 0 : -1}
            className="lp2-show__tab"
            onClick={() => select(i)}
          >
            {proj.name}
            <span className="lp2-show__tab-tag">{proj.tag}</span>
          </button>
        ))}
      </div>

      <div className="lp2-show__window" id="lp2-show-panel" role="tabpanel" aria-labelledby={`lp2-show-tab-${p.id}`}>
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
            <a className="lp2-show__act" href={p.url} target="_blank" rel="noopener" aria-label={`Visiter le site ${p.name}`}>
              <span className="lp2-show__act-label">Voir le site</span>
              <ExternalIcon />
            </a>
          </span>
        </div>
        <div
          className="lp2-show__viewport"
          ref={viewportRef}
          tabIndex={0}
          aria-label={`Aperçu du site ${p.name} : faites défiler pour l’explorer`}
          onScroll={() => {
            if (!scrolled) setScrolled(true);
            heat(p.id);
          }}
        >
          <Shots p={p} device={device} warm={warm.has(p.id)} />
        </div>
        <span className={'lp2-show__hint' + (scrolled ? ' is-hidden' : '')} aria-hidden="true">
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
      <p className="lp2-show__caption">
        <strong>{p.name}</strong> · {p.desc}
      </p>

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
              <a className="lp2-full__visit" href={p.url} target="_blank" rel="noopener" aria-label={`Visiter le site ${p.name}`}>
                <span className="lp2-full__visit-label">Voir le site</span>
                <ExternalIcon />
              </a>
              <button type="button" className="lp2-full__btn lp2-full__close" aria-label="Fermer" onClick={() => setFull(false)}>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div
              className="lp2-full__viewport"
              ref={fullViewportRef}
              tabIndex={0}
              aria-label={`Site ${p.name} : faites défiler pour l’explorer`}
            >
              <div className="lp2-full__page">
                <Shots p={p} device={device} warm />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
