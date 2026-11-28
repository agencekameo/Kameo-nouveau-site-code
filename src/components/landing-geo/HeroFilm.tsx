'use client';

import { useEffect, useRef, useState } from 'react';

/*
 * Landing /visibilite-ia/ : le film (demande de Louison du 28/11/2026), sous les logos clients et juste avant les avis
 * (déplacé le 28/11/2026). 51 s muettes, en boucle, sans voix : un titre par chapitre et un seul mouvement à la fois
 * (version 2 du 28/11/2026, la première allait trop vite). Avant, vos clients vous trouvaient sur Google ; aujourd'hui
 * ils demandent à l'IA (33 millions de Français chaque mois, Arcom) ; sans Kameo, ChatGPT recommande vos concurrents ;
 * avec Kameo, vous passez 1er et vos clients vous appellent.
 * Animation codée avec le moteur Keyframes (Remotion), hors de ce dépôt : Documents/Keyframes/full-visual-v2-0.2.2/
 * engine/full-visual/src/kameo (BRIEF.md). Deux rendus de même durée : ordinateur 2:1, téléphone et tablette 4:5
 * (recomposé, pas recadré). Fichiers dans public/videos/visibilite-ia/.
 * - Le film suit la taille de la fenêtre (et, en plein écran, son orientation) : on passe d'un rendu à l'autre au même
 *   instant du film. L'image est mise à l'échelle dans son cadre, jamais recadrée.
 * - Boutons lecture/pause et plein écran (28/11/2026). Une pause demandée reste en place : le film ne repart pas tout
 *   seul en revenant à l'écran. Plein écran : le cadre entier (avec les boutons), sinon, sur iPhone, le lecteur du
 *   système.
 * - Sans JavaScript et tant que la vidéo n'est pas prête : la première image (identique à la première image du film).
 * - « Réduire les animations » : pas de lecture automatique, l'image de fin (votre entreprise 1re sur ChatGPT,
 *   « Devenez 1er sur ChatGPT »), choisie par <picture> ; le bouton lecture lance le film à la demande.
 * - La vidéo ne se télécharge qu'après le chargement de la page, quand le film approche de l'écran, et ne joue que
 *   visible à l'écran.
 * Pour les lecteurs d'écran, le film est décrit par un texte masqué.
 */
const DIR = '/videos/visibilite-ia';
const PHONE = '(max-width: 1023px)';
const REDUCE = '(prefers-reduced-motion: reduce)';

type Kind = 'mobile' | 'ordinateur';
/** iPhone : pas de plein écran pour un bloc, seulement pour la vidéo (lecteur du système). */
type IosVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

const Ico = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d={d} />
  </svg>
);
const PLAY = 'M8 5.6v12.8a1 1 0 0 0 1.5.86l10.2-6.4a1 1 0 0 0 0-1.72L9.5 4.74A1 1 0 0 0 8 5.6z';
const PAUSE = 'M7 5h3.2v14H7zM13.8 5H17v14h-3.2z';
const FULL = 'M4 4h6v2.4H6.4V10H4zM14 4h6v6h-2.4V6.4H14zM4 14h2.4v3.6H10V20H4zM17.6 14H20v6h-6v-2.4h3.6z';
const EXIT = 'M7.6 4H10v6H4V7.6h3.6zM14 4h2.4v3.6H20V10h-6zM4 14h6v6H7.6v-3.6H4zM14 14h6v2.4h-3.6V20H14z';

export default function HeroFilm() {
  const box = useRef<HTMLDivElement>(null);
  const video = useRef<IosVideo>(null);
  /** La pause demandée par le visiteur : le film ne repart pas tout seul. */
  const userPaused = useRef(false);
  /** Instant du film à reprendre après un changement de rendu (secondes, 0 : rien à reprendre). */
  const resumeAt = useRef(0);
  const kindRef = useRef<Kind>('ordinateur');
  const [kind, setKind] = useState<Kind>('ordinateur');
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [full, setFull] = useState(false);
  const [canFull, setCanFull] = useState(false);
  const src = armed ? `${DIR}/film-${kind}.mp4` : null;

  // Quel rendu : celui de la taille de la fenêtre ; en plein écran, celui de l'orientation de l'écran.
  useEffect(() => {
    const update = () => {
      const isFull = !!box.current && document.fullscreenElement === box.current;
      setFull(isFull);
      const k: Kind = isFull
        ? window.innerWidth >= window.innerHeight
          ? 'ordinateur'
          : 'mobile'
        : window.matchMedia(PHONE).matches
          ? 'mobile'
          : 'ordinateur';
      if (k === kindRef.current) return;
      kindRef.current = k;
      resumeAt.current = video.current?.currentTime ?? 0;
      setShown(false);
      setKind(k);
    };
    update();
    setCanFull(!!document.fullscreenEnabled || 'webkitEnterFullscreen' in HTMLVideoElement.prototype);
    window.addEventListener('resize', update);
    document.addEventListener('fullscreenchange', update);
    return () => {
      window.removeEventListener('resize', update);
      document.removeEventListener('fullscreenchange', update);
    };
  }, []);

  // Téléchargement : après le chargement de la page, quand le film est à moins d'un écran
  useEffect(() => {
    const el = box.current;
    if (!el || window.matchMedia(REDUCE).matches) return;
    let io: IntersectionObserver | null = null;
    const watch = () => {
      io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          io?.disconnect();
          setArmed(true);
        },
        { rootMargin: '0px 0px 100% 0px' },
      );
      io.observe(el);
    };
    if (document.readyState === 'complete') watch();
    else window.addEventListener('load', watch, { once: true });
    return () => {
      window.removeEventListener('load', watch);
      io?.disconnect();
    };
  }, []);

  // Lecture seulement à l'écran, et jamais contre une pause demandée
  useEffect(() => {
    const v = video.current;
    if (!src || !v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) v.pause();
        else if (!userPaused.current) v.play().catch(() => {});
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  const play = () => {
    userPaused.current = false;
    if (video.current) video.current.play().catch(() => {});
    else setArmed(true); // « réduire les animations » : le film se charge à la demande
  };
  const toggle = () => {
    const v = video.current;
    if (v && !v.paused) {
      userPaused.current = true;
      v.pause();
    } else play();
  };
  const fullscreen = () => {
    const el = box.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
      return;
    }
    if (document.fullscreenEnabled) el.requestFullscreen().catch(() => {});
    else video.current?.webkitEnterFullscreen?.();
    play();
  };

  return (
    <div ref={box} className="vi-film__box">
      <picture>
        <source media={`${REDUCE} and ${PHONE}`} srcSet={`${DIR}/film-mobile-fin.webp`} width={1080} height={1350} />
        <source media={REDUCE} srcSet={`${DIR}/film-ordinateur-fin.webp`} width={1920} height={960} />
        <source media={PHONE} srcSet={`${DIR}/film-mobile-debut.webp`} width={1080} height={1350} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${DIR}/film-ordinateur-debut.webp`} width={1920} height={960} alt="" loading="lazy" decoding="async" />
      </picture>
      {src && (
        <video
          ref={video}
          className={'vi-film__video' + (shown ? ' is-shown' : '')}
          src={src}
          muted
          playsInline
          loop
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onLoadedMetadata={(e) => {
            if (resumeAt.current > 0) e.currentTarget.currentTime = resumeAt.current;
          }}
          onLoadedData={() => {
            if (resumeAt.current === 0) setShown(true);
          }}
          onSeeked={() => {
            resumeAt.current = 0;
            setShown(true);
          }}
          onPlaying={() => setShown(true)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      )}
      <div className="vi-film__ctrl">
        <button
          type="button"
          className="vi-film__btn"
          onClick={toggle}
          aria-label={playing ? 'Mettre le film en pause' : 'Lire le film'}
          title={playing ? 'Pause' : 'Lecture'}
          data-cta="film-lecture"
        >
          <Ico d={playing ? PAUSE : PLAY} />
        </button>
        {canFull && (
          <button
            type="button"
            className="vi-film__btn"
            onClick={fullscreen}
            aria-label={full ? 'Quitter le plein écran' : 'Voir le film en plein écran'}
            title={full ? 'Quitter le plein écran' : 'Plein écran'}
            data-cta="film-plein-ecran"
          >
            <Ico d={full ? EXIT : FULL} />
          </button>
        )}
      </div>
      <p className="sr-only">
        Film sans son. Avant, vos clients vous trouvaient sur Google et vous appelaient. Aujourd’hui, 33&nbsp;millions de
        Français utilisent l’IA chaque mois. Sans Kameo, quand un client demande à ChatGPT, il recommande vos concurrents et
        pas vous : le client appelle un concurrent. Avec Kameo, on mesure ce que disent les IA, on corrige votre site et on
        vous fait citer dans les avis, les annuaires, les comparatifs et les médias. Votre entreprise passe en première
        recommandation de ChatGPT, et vos clients vous appellent. Devenez 1er sur ChatGPT.
      </p>
    </div>
  );
}
