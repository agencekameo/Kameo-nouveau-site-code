'use client';

import { useState, type CSSProperties } from 'react';

/*
 * Landing /visibilite-ia/, section « méthode » : sélecteur Essentiel · Croissance · Autorité qui pilote
 * l'équation de la mesure (questions × IA × passages × relevés = réponses analysées par mois) et la grille
 * de points. Toutes les valeurs viennent de src/content/geo.ts, calculées côté serveur et passées en props.
 * Croissance au rendu serveur (et sans JavaScript).
 */

export type MeasurePlan = { id: string; name: string; questions: number; total: number; totalTxt: string };

const clarityEvent = (name: string) => window.clarity?.('event', name);

export default function MeasureSwitch({
  plans,
  engines,
  passages,
  releves,
  initial = 1,
}: {
  plans: MeasurePlan[];
  engines: number;
  passages: number;
  releves: number;
  initial?: number;
}) {
  const [i, setI] = useState(initial);
  const [announce, setAnnounce] = useState('');
  const [touched, setTouched] = useState(false); // les nombres ne « roulent » qu'après un choix du visiteur
  const p = plans[i];

  const pick = (n: number) => {
    if (n === i) return;
    setI(n);
    setTouched(true);
    setAnnounce(`Avec ${plans[n].name} : ${plans[n].totalTxt} réponses analysées par mois.`);
    clarityEvent(`mesure_${plans[n].id}`);
  };

  return (
    <div className={'vi-measure' + (touched ? ' is-touched' : '')}>
      <div className="vi-measure__head">
        <div className="vi-step__title">
          <p className="vi-step__n">Étape 1</p>
          <h3 className="vi-step__h">Mesurer</h3>
        </div>
        <div className="vi-switch-wrap">
          <p className="vi-switch__lbl" id="vi-switch-lbl">
            Voir la mesure pour la formule
          </p>
          <div className="vi-switch" role="group" aria-labelledby="vi-switch-lbl">
            {plans.map((pl, n) => (
              <button key={pl.id} type="button" className="vi-switch__btn" aria-pressed={n === i} onClick={() => pick(n)}>
                {pl.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="vi-measure__intro">
        Vos questions sont établies avec vous&nbsp;: celles que vos clients posent vraiment. Chacune est posée {passages}&nbsp;fois à
        chaque IA, toutes les deux semaines.
      </p>

      <div className="vi-eq" aria-hidden="true">
        <span className="vi-eq__term">
          <span className="vi-eq__num">
            <span key={p.questions} className="vi-eq__roll">
              {p.questions}
            </span>
          </span>
          <span className="vi-eq__lbl">questions suivies</span>
        </span>
        <span className="vi-eq__op">×</span>
        <span className="vi-eq__term">
          <span className="vi-eq__num">{engines}</span>
          <span className="vi-eq__lbl">IA</span>
          <span className="vi-eq__leg">ChatGPT, Gemini, Perplexity, Claude</span>
        </span>
        <span className="vi-eq__op">×</span>
        <span className="vi-eq__term">
          <span className="vi-eq__num">{passages}</span>
          <span className="vi-eq__lbl">passages</span>
          <span className="vi-eq__leg">par question et par IA</span>
        </span>
        <span className="vi-eq__op">×</span>
        <span className="vi-eq__term">
          <span className="vi-eq__num">{releves}</span>
          <span className="vi-eq__lbl">relevés</span>
          <span className="vi-eq__leg">par mois</span>
        </span>
        <span className="vi-eq__res">
          <span className="vi-eq__op vi-eq__op--eq">=</span>
          <span className="vi-eq__term vi-eq__term--res">
          <span className="vi-eq__num vi-eq__num--res">
            <span key={p.total} className="vi-eq__roll vi-gt">
              {p.totalTxt}
            </span>
          </span>
            <span className="vi-eq__lbl vi-eq__lbl--res">réponses analysées par mois</span>
          </span>
        </span>
      </div>
      <p className="sr-only">
        {p.questions} questions × {engines} IA × {passages} passages × {releves} relevés = {p.totalTxt} réponses analysées par mois,
        avec la formule {p.name}.
      </p>
      <p className="sr-only" aria-live="polite">
        {announce}
      </p>

      <div className="vi-measure__grid">
        <div className="vi-dotsbox">
          <div className="vi-dots" style={{ '--total': p.total } as CSSProperties} aria-hidden="true" />
          <p className="vi-dots__lbl vi-dots__lbl--lg">1 point = 1 réponse analysée</p>
          <p className="vi-dots__lbl vi-dots__lbl--sm">1 point = 4 réponses analysées</p>
        </div>
        <div className="vi-measure__notes">
          <p className="vi-measure__note">
            Pas de «&nbsp;position&nbsp;» fixe&nbsp;: le rang change presque à chaque essai. Nous suivons d’abord la part des réponses
            qui vous nomment, IA par IA.
          </p>
          <p className="vi-measure__note">Nous ne commentons une évolution que si elle dépasse la marge d’erreur de la mesure.</p>
          <div className="vi-measure__scale">
            <p className="vi-measure__scale-t">Ce que nous relevons dans chaque réponse</p>
            <ol className="vi-scale">
              {['Absent', 'Mentionné', 'Cité', 'Recommandé'].map((s) => (
                <li key={s}>
                  <span className="vi-scale__bar" />
                  <span className="vi-scale__lbl">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
