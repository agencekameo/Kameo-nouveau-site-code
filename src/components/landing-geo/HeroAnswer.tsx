'use client';

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';

/*
 * Landing /visibilite-ia/ : le visuel du héros, « la réponse » (illustration, pas une capture).
 * Rendu serveur, sans JavaScript ou avec prefers-reduced-motion : variante 1, onglet ChatGPT, rangées et
 * puces visibles, aucun mouvement. Sur ordinateur (≥ 1024 px), mouvement permis, visuel à l'écran et
 * onglet du navigateur visible : boucle de 4 variantes (3,6 s chacune), 2 tours, puis arrêt sur la
 * première. Bouton pause (WCAG 2.2.2). Les animations CSS vivent sous .vi-answer.is-cycling (styles.ts).
 * Sous 1024 px : pas de boucle ; les rangées apparaissent une fois au défilement (data-vi-reveal, ViEffects).
 */

type Variant = { metier: string; ville: string };
type Row = { name: string; desc: string };

const STEP_MS = 3600;
const LEAVE_MS = 200;
const ROUNDS = 2;

const SCALE = ['Absent', 'Mentionné', 'Cité', 'Recommandé'];

function Scale() {
  return (
    <ol className="vi-scale vi-scale--unknown">
      {SCALE.map((s) => (
        <li key={s}>
          <span className="vi-scale__bar" />
          <span className="vi-scale__lbl">{s}</span>
        </li>
      ))}
    </ol>
  );
}

export default function HeroAnswer({
  engines,
  variants,
  rows,
}: {
  engines: readonly string[];
  variants: Variant[];
  rows: Row[];
}) {
  const fig = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  const [tab, setTab] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [cycling, setCycling] = useState(false);
  const [enabled, setEnabled] = useState(false); // boucle possible : ordinateur, mouvement permis
  const [done, setDone] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageShown, setPageShown] = useState(true);
  const [ind, setInd] = useState<{ x: number; w: number } | null>(null);
  const steps = useRef(0);
  const tabRef = useRef(0);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(wide.matches && !calm.matches);
    update();
    wide.addEventListener('change', update);
    calm.addEventListener('change', update);
    return () => {
      wide.removeEventListener('change', update);
      calm.removeEventListener('change', update);
    };
  }, []);

  // Visuel à l'écran (25 %) et onglet du navigateur visible
  useEffect(() => {
    const el = fig.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => setVisible(es[es.length - 1].isIntersecting), { threshold: 0.25 });
    io.observe(el);
    const onVis = () => setPageShown(document.visibilityState === 'visible');
    onVis();
    document.addEventListener('visibilitychange', onVis);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  const running = enabled && !done && !userPaused && visible && pageShown;

  // Une variante toutes les 3,6 s : les rangées s'effacent, l'onglet avance, puis la nouvelle réponse se compose
  useEffect(() => {
    if (!running) return;
    const total = variants.length * ROUNDS;
    let alive = true;
    let t1 = 0;
    let t2 = 0;
    let pending: number | null = null;
    const land = (next: number) => {
      pending = null;
      setV(next);
      setLeaving(false);
      if (steps.current >= total) setDone(true);
    };
    const schedule = () => {
      t1 = window.setTimeout(() => {
        const next = (tabRef.current + 1) % variants.length;
        tabRef.current = next;
        steps.current += 1;
        pending = next;
        setCycling(true);
        setLeaving(true);
        setTab(next);
        t2 = window.setTimeout(() => {
          land(next);
          if (alive && steps.current < total) schedule();
        }, LEAVE_MS);
      }, STEP_MS - LEAVE_MS);
    };
    schedule();
    return () => {
      alive = false;
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      // Boucle suspendue en pleine transition (visuel hors écran, pause) : la nouvelle réponse s'affiche tout de suite
      if (pending !== null) land(pending);
    };
  }, [running, variants.length]);

  // Indicateur d'onglet (ordinateur) : position mesurée sur l'onglet actif, il glisse d'un onglet à l'autre
  useLayoutEffect(() => {
    if (!enabled) return setInd(null);
    const span = tabsRef.current?.querySelectorAll<HTMLElement>('[data-tab]')[tab];
    if (span) setInd({ x: span.offsetLeft, w: span.offsetWidth });
  }, [enabled, tab]);

  const q = variants[v];
  const cls = ['vi-answer', cycling && 'is-cycling', leaving && 'is-leaving', done && 'is-done', userPaused && 'is-paused']
    .filter(Boolean)
    .join(' ');

  return (
    <figure ref={fig} className={cls} aria-labelledby="vi-answer-desc">
      <p id="vi-answer-desc" className="sr-only">
        Illustration&nbsp;: une IA répond à la question «&nbsp;Je cherche {variants[0].metier} à {variants[0].ville}. Qui me
        conseilles-tu&nbsp;?&nbsp;» en citant trois entreprises. La place de la vôtre reste vide.
      </p>
      <div className="vi-answer__card vi-ui" aria-hidden="true">
        <div className="vi-ui__bar">
          <span className={'vi-tabs' + (ind ? ' has-ind' : '')} ref={tabsRef}>
            {ind && <span className="vi-tabs__ind" style={{ '--x': `${ind.x}px`, '--w': `${ind.w}px` } as CSSProperties} />}
            {engines.map((e, i) => (
              <span key={e} data-tab="" className={i === tab ? 'is-on' : undefined}>
                {e}
              </span>
            ))}
          </span>
        </div>
        <div className="vi-answer__body">
          <p className="vi-answer__who vi-answer__who--right">Votre futur client</p>
          <div className="vi-answer__ask">
            <p className="vi-answer__bubble" key={`q${v}`}>
              Je cherche{' '}
              <span className="vi-answer__var">
                {q.metier} à {q.ville}
              </span>
              . Qui me <span className="vi-nowrap">conseilles-tu&nbsp;?</span>
            </p>
          </div>
          <p className="vi-answer__who">
            <span className="vi-answer__ia">IA</span> Réponse de l’IA
            {cycling && (
              <span className="vi-answer__dots" key={`d${v}`}>
                <i />
                <i />
                <i />
              </span>
            )}
          </p>
          <div className="vi-answer__skel">
            <i style={{ width: '92%' }} />
            <i style={{ width: '64%' }} />
          </div>
          <ol className="vi-answer__list" key={`l${v}`}>
            {rows.map((r, i) => (
              <li
                className="vi-answer__row"
                key={r.name}
                style={{ '--i': i, '--vi-i': i } as CSSProperties}
                data-vi-reveal={cycling ? undefined : ''}
              >
                <span className="vi-answer__rank">{i + 1}</span>
                <span className="vi-answer__mono">{r.name.slice(-1)}</span>
                <span className="vi-answer__txt">
                  <b>{r.name}</b> <span>— {r.desc}</span>
                </span>
                <span className="vi-answer__cite">{i + 1}</span>
              </li>
            ))}
            <li className="vi-answer__row vi-answer__row--slot">
              <span className="vi-answer__rank">{rows.length + 1}</span>
              <span className="vi-slot">
                <svg className="vi-slot__frame" focusable="false">
                  <rect x="0" y="0" width="100%" height="100%" rx="14" ry="14" />
                </svg>
                <span className="vi-slot__q">
                  <span>?</span>
                </span>
                <span className="vi-slot__label">Votre entreprise&nbsp;?</span>
              </span>
            </li>
          </ol>
        </div>
        <div className="vi-answer__inscale">
          <p className="vi-answer__inscale-t">Comment l’IA vous présente</p>
          <div className="vi-answer__sat-track">
            <span className="vi-answer__pin">
              <span className="vi-gt">?</span>
            </span>
            <Scale />
          </div>
        </div>
        <div className="vi-ui__foot">
          <span className="vi-illu">Illustration · réponse fictive</span>
        </div>
      </div>
      <button
        type="button"
        className="vi-answer__pause"
        hidden={!enabled || done}
        aria-pressed={userPaused}
        aria-label={userPaused ? 'Reprendre l’animation' : 'Mettre l’animation en pause'}
        onClick={() => setUserPaused((p) => !p)}
      >
        <svg className="vi-ico" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          {userPaused ? <path d="M7 5l8 5-8 5z" /> : <path d="M7.5 5v10M12.5 5v10" />}
        </svg>
      </button>
      <div className="vi-answer__sat vi-answer__sat--scale" aria-hidden="true">
        <p className="vi-answer__sat-t">Comment l’IA vous présente</p>
        <div className="vi-answer__sat-track">
          <span className="vi-answer__pin">
            <span className="vi-gt">?</span>
          </span>
          <Scale />
        </div>
      </div>
    </figure>
  );
}
