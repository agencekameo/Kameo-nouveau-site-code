'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/*
 * Landing page Ads, bloc Réalisations : une maquette par projet (images de src/content/realisations.ts),
 * agrandie au clic dans une visionneuse plein écran : flèches et clavier (← →) pour passer d'un projet
 * à l'autre, glisser sur mobile, Échap, croix ou clic à côté de l'image pour fermer.
 * La visionneuse est rendue dans <body> (portail) : la section crée un contexte d'empilement
 * (z-index 1 du fond sombre) sous l'en-tête et les sections suivantes.
 */
type Work = {
  name: string;
  tag: string;
  desc: string;
  src: string;
  alt: string;
  large?: boolean;
};

const WORKS: Work[] = [
  {
    name: 'Défikart',
    tag: 'Loisirs',
    desc: 'Site vitrine du plus grand karting indoor de Toulouse.',
    src: '/images/projects/defikart/screen01.webp',
    alt: 'Site de Défikart affiché sur un ordinateur portable',
    large: true,
  },
  {
    name: 'Medical Market',
    tag: 'Santé',
    desc: 'Boutique e-commerce de matériel médical.',
    src: '/images/projects/medical-market/mockup3.webp',
    alt: 'Boutique en ligne Medical Market affichée sur un ordinateur portable',
    large: true,
  },
  {
    name: 'Villa de Luxe Bonifacio',
    tag: 'Location de luxe',
    desc: 'Site vitrine premium de villas d’exception en Corse.',
    src: '/images/projects/villa-de-luxe-bonifacio/siteWeb_LandingPage%20(2).webp',
    alt: 'Site de Villa de Luxe Bonifacio affiché sur un ordinateur portable',
  },
  {
    name: 'Axistone Capital',
    tag: 'Finance',
    desc: 'Site institutionnel d’un fonds d’investissement immobilier.',
    src: '/images/projects/axistone-capital/siteWeb_LandingPage%20(5).webp',
    alt: 'Site d’Axistone Capital affiché sur un ordinateur portable',
  },
  {
    name: 'DroneSpec',
    tag: 'BTP',
    desc: 'Site vitrine d’un spécialiste des relevés par drone.',
    src: '/images/projects/dronespec/screen01.webp',
    alt: 'Site de DroneSpec affiché sur un ordinateur portable',
  },
];

export default function LpWorks() {
  const [index, setIndex] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const n = WORKS.length;
  const open = index !== null;

  const go = (step: number) => setIndex((i) => (i === null ? i : (i + step + n) % n));
  const close = () => setIndex(null);

  // Visionneuse ouverte : page figée, clavier, focus gardé dans la visionneuse puis rendu
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const before = {
      overflow: html.style.overflow,
      paddingRight: html.style.paddingRight,
    };
    html.style.overflow = 'hidden';
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    boxRef.current?.querySelector<HTMLElement>('.lpbox__close')?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Tab' && boxRef.current) {
        const f = [...boxRef.current.querySelectorAll<HTMLElement>('button')];
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
  }, [open]);

  const w = index === null ? null : WORKS[index];

  return (
    <>
      <div className="lp2-works__grid">
        {WORKS.map((work, i) => (
          <article
            key={work.name}
            className={'lp2-works__card' + (work.large ? ' lp2-works__card--lg' : '')}
            data-reveal=""
            style={i ? { transitionDelay: `${(i * 0.08).toFixed(2)}s` } : undefined}
          >
            <button
              type="button"
              className="lp2-works__media"
              aria-label={`Agrandir l’image : ${work.name}`}
              onClick={(e) => {
                opener.current = e.currentTarget;
                setIndex(i);
              }}
            >
              <img src={work.src} alt={work.alt} loading="lazy" width="1600" height="1066" />
              <span className="lp2-works__zoom" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div className="lp2-works__body">
              <div className="lp2-works__head">
                <h3 className="lp2-works__name">{work.name}</h3>
                <span className="lp2-works__tag">{work.tag}</span>
              </div>
              <p className="lp2-works__desc">{work.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {w &&
        createPortal(
          <div
            ref={boxRef}
            className="lpbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${w.name} : image ${index! + 1} sur ${n}`}
            onTouchStart={(e) =>
              (touch.current = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
              })
            }
            onTouchEnd={(e) => {
              const t = touch.current;
              touch.current = null;
              if (!t) return;
              const dx = e.changedTouches[0].clientX - t.x;
              const dy = e.changedTouches[0].clientY - t.y;
              if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
            }}
          >
            <div className="lpbox__backdrop" onClick={close} />
            <figure className="lpbox__figure" key={w.src}>
              <div className="lpbox__frame">
                <img className="lpbox__img" src={w.src} alt={w.alt} width="1600" height="1066" />
              </div>
              <figcaption className="lpbox__caption">
                <span className="lpbox__name">{w.name}</span>
                <span className="lpbox__tag">{w.tag}</span>
                <span className="lpbox__desc">{w.desc}</span>
              </figcaption>
            </figure>
            <p className="lpbox__count" aria-hidden="true">
              {index! + 1} / {n}
            </p>
            <button type="button" className="lpbox__close" aria-label="Fermer" onClick={close}>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              className="lpbox__nav lpbox__nav--prev"
              aria-label="Projet précédent"
              onClick={() => go(-1)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M15 5l-7 7 7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="lpbox__nav lpbox__nav--next"
              aria-label="Projet suivant"
              onClick={() => go(1)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M9 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}
