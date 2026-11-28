'use client';

import { useEffect, useRef, useState } from 'react';

/*
 * Landing /visibilite-ia/ : compte à rebours honnête jusqu'à la fin d'une offre (PROMO_LANDING.fin de geo.ts).
 * - Cible fixe, jamais remise à zéro.
 * - À la minute (secondes essayées puis retirées le 28/11/2026) : « Fin dans 2 j 07 h 12 min », puis
 *   « Dernier jour · 07 h 12 min ». Chiffres à largeur fixe (tabular-nums dans styles.ts).
 * - Mis à jour à chaque minute pleine, sans annonce aux lecteurs d'écran (pas d'aria-live).
 * - Rendu serveur et sans JavaScript : rien.
 * - À l'échéance : il disparaît avec son conteneur ; tous les éléments d'offre ([data-vi-promo]) sont masqués et
 *   leurs équivalents permanents ([data-vi-nopromo], rendus masqués) affichés. Vaut aussi pour une page servie
 *   depuis le cache après la fin de l'offre : la bascule se fait au chargement.
 */
const SEC = 1000;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;
const nb = ' ';
const pl = (n: number, mot: string) => `${n}${nb}${mot}${n > 1 ? 's' : ''}`;
const d2 = (n: number) => String(n).padStart(2, '0');

function format(ms: number): { text: string; label: string } {
  const j = Math.floor(ms / DAY);
  const h = Math.floor((ms % DAY) / HOUR);
  const m = Math.floor((ms % HOUR) / MIN);
  const hm = `${d2(h)}${nb}h ${d2(m)}${nb}min`;
  if (ms >= DAY) {
    return {
      text: `Fin dans ${j}${nb}j ${hm}`,
      label: `Fin de l’offre dans ${pl(j, 'jour')}, ${pl(h, 'heure')} et ${pl(m, 'minute')}`,
    };
  }
  return {
    text: `Dernier jour · ${hm}`,
    label: `Dernier jour${nb}: fin de l’offre dans ${pl(h, 'heure')} et ${pl(Math.max(m, 1), 'minute')}`,
  };
}

export default function Countdown({ end }: { end: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [state, setState] = useState<{ text: string; label: string } | null>(null);

  useEffect(() => {
    const target = Date.parse(end);
    let timer = 0;
    const tick = () => {
      const left = target - Date.now();
      if (left <= 0) {
        setState(null);
        // Le conteneur de l'offre (bandeau, ligne au-dessus des formules) se retire avec le compte à rebours
        ref.current?.closest<HTMLElement>('[data-vi-promo]')?.setAttribute('hidden', '');
        document.querySelectorAll<HTMLElement>('[data-vi-promo]').forEach((el) => el.setAttribute('hidden', ''));
        document.querySelectorAll<HTMLElement>('[data-vi-nopromo]').forEach((el) => el.removeAttribute('hidden'));
        return;
      }
      setState(format(left));
      // Prochaine mise à jour pile à la minute suivante
      timer = window.setTimeout(tick, left % MIN || MIN);
    };
    tick();
    return () => window.clearTimeout(timer);
  }, [end]);

  return (
    <span ref={ref} className="vi-count" hidden={!state}>
      {state && (
        <>
          <span aria-hidden="true">{state.text}</span>
          <span className="sr-only">{state.label}</span>
        </>
      )}
    </span>
  );
}
