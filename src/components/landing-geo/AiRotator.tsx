'use client';

import { useEffect, useRef, useState } from 'react';

/*
 * Titre de la landing /visibilite-ia/ : le nom de l'IA change tout seul, ChatGPT, Gemini, Claude puis Perplexity
 * (demande de Benjamin du 27/11/2026, à la place de « en 1 mois » écrit lettre par lettre).
 * - Titre sur 2 lignes (demande du 27/11) : le nom ouvre la 2e ligne, suivi de « en 1 mois » (Body.tsx, ligne
 *   insécable). La case prend la largeur du nom affiché et glisse d'une largeur à l'autre (en em, pour suivre la taille
 *   du titre) : « en 1 mois » reste collé au nom, et la 2e ligne tient même avec Perplexity, le plus long.
 * - 3 tours, puis arrêt sur ChatGPT. Rien ne bouge si le visiteur refuse les animations, ni sans JavaScript
 *   (ChatGPT affiché, rendu serveur, à sa largeur).
 * - Lecteurs d'écran : la liste complète, lue une seule fois ; les noms qui défilent sont masqués.
 * Styles : .vi-rot* dans src/app/(standalone)/visibilite-ia/styles.ts.
 */
const NOMS = ['ChatGPT', 'Gemini', 'Claude', 'Perplexity'] as const;
const PAS_MS = 2200;
const TOURS = 3;

export default function AiRotator() {
  const [tick, setTick] = useState(0);
  const box = useRef<HTMLSpanElement>(null);
  const mots = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = box.current;
    if (!el) return;
    /** Largeur de la case = largeur du nom k, en em (suit la taille du titre si la fenêtre change). */
    const largeur = (k: number) => {
      const mot = mots.current[k];
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (mot && fs) el.style.width = `${mot.offsetWidth / fs}em`;
    };
    largeur(0);
    const fin = NOMS.length * TOURS;
    let n = 0;
    const t = window.setInterval(() => {
      n += 1;
      largeur(n % NOMS.length);
      setTick(n);
      if (n >= fin) window.clearInterval(t);
    }, PAS_MS);
    return () => window.clearInterval(t);
  }, []);

  const on = tick % NOMS.length;
  const out = tick > 0 ? (tick - 1) % NOMS.length : -1;

  return (
    <span className="vi-rot">
      <span className="sr-only">ChatGPT, Gemini, Claude et Perplexity</span>
      <span className="vi-rot__box" ref={box} aria-hidden="true">
        {NOMS.map((nom, k) => (
          <span
            key={nom}
            ref={(m) => {
              mots.current[k] = m;
            }}
            className={'vi-rot__w vi-gt' + (k === on ? ' is-on' : k === out ? ' is-out' : '')}
          >
            {nom}
          </span>
        ))}
      </span>
    </span>
  );
}
