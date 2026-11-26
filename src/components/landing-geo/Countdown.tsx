'use client';

import { useEffect, useRef, useState } from 'react';

/*
 * Landing /visibilite-ia/ : compte à rebours honnête jusqu'à la fin d'une offre (GEO_PROMO.fin).
 * - Cible fixe, jamais remise à zéro ; jours et heures, puis heures et minutes le dernier jour ; jamais de secondes.
 * - Mise à jour à chaque minute pleine, sans annonce aux lecteurs d'écran (pas d'aria-live).
 * - Rendu serveur et sans JavaScript : rien (la date est déjà écrite dans la phrase).
 * - À l'échéance : il disparaît avec son conteneur ; tous les éléments d'offre ([data-vi-promo]) sont masqués et
 *   leurs équivalents permanents ([data-vi-nopromo], rendus masqués) affichés. Vaut aussi pour une page servie
 *   depuis le cache après la fin de l'offre : la bascule se fait au chargement.
 */
const MIN = 60_000;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;
const nb = ' ';
const pl = (n: number, mot: string) => `${n}${nb}${mot}${n > 1 ? 's' : ''}`;

function format(ms: number): { text: string; label: string } {
  const j = Math.floor(ms / DAY);
  const h = Math.floor((ms % DAY) / HOUR);
  const m = Math.floor((ms % HOUR) / MIN);
  if (ms >= DAY) {
    return {
      text: h > 0 ? `Fin dans ${j}${nb}j ${h}${nb}h` : `Fin dans ${j}${nb}j`,
      label: h > 0 ? `Fin de l’offre dans ${pl(j, 'jour')} et ${pl(h, 'heure')}` : `Fin de l’offre dans ${pl(j, 'jour')}`,
    };
  }
  if (ms >= HOUR) {
    return {
      text: `Dernier jour · fin dans ${h}${nb}h ${String(m).padStart(2, '0')}${nb}min`,
      label: `Dernier jour${nb}: fin de l’offre dans ${pl(h, 'heure')} et ${pl(m, 'minute')}`,
    };
  }
  return {
    text: `Dernier jour · fin dans ${Math.max(m, 1)}${nb}min`,
    label: `Dernier jour${nb}: fin de l’offre dans ${pl(Math.max(m, 1), 'minute')}`,
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
