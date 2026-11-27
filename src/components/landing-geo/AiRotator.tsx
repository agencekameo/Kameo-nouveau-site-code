'use client';

import { useEffect, useState } from 'react';

/*
 * Titre de la landing /visibilite-ia/ : le nom de l'IA change tout seul, ChatGPT, Gemini, Claude puis Perplexity
 * (demande de Benjamin du 27/11/2026, à la place de « en 1 mois » écrit lettre par lettre).
 * - Mise en page fixe : les 4 noms sont empilés dans la même case de grille, qui prend la largeur du plus long.
 *   Body.tsx passe à la ligne juste après : l'espace laissé par un nom plus court reste invisible en fin de ligne,
 *   et le titre ne saute jamais d'une ligne à l'autre.
 * - 3 tours, puis arrêt sur ChatGPT. Rien ne bouge si le visiteur refuse les animations, ni sans JavaScript
 *   (ChatGPT affiché, rendu serveur).
 * - Lecteurs d'écran : la liste complète, lue une seule fois ; les noms qui défilent sont masqués.
 * Styles : .vi-rot* dans src/app/(standalone)/visibilite-ia/styles.ts.
 */
const NOMS = ['ChatGPT', 'Gemini', 'Claude', 'Perplexity'] as const;
const PAS_MS = 2200;
const TOURS = 3;

export default function AiRotator() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const fin = NOMS.length * TOURS;
    let n = 0;
    const t = window.setInterval(() => {
      n += 1;
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
      <span className="vi-rot__box" aria-hidden="true">
        {NOMS.map((nom, k) => (
          <span key={nom} className={'vi-rot__w vi-gt' + (k === on ? ' is-on' : k === out ? ' is-out' : '')}>
            {nom}
          </span>
        ))}
      </span>
    </span>
  );
}
