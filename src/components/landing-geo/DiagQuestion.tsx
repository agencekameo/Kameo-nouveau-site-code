'use client';

import { useEffect, useState } from 'react';

/*
 * Landing /visibilite-ia/ : question de l'illustration de #diagnostic. Elle reprend, dans la page seulement,
 * ce que le visiteur a écrit dans le test (événement vi:test de QuestionTest) ; sinon les crochets restent.
 */
export default function DiagQuestion() {
  const [f, setF] = useState<{ metier: string; ville: string }>({ metier: '', ville: '' });

  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent<{ metier: string; ville: string }>).detail;
      if (d) setF({ metier: d.metier || '', ville: d.ville || '' });
    };
    window.addEventListener('vi:test', on);
    return () => window.removeEventListener('vi:test', on);
  }, []);

  const v = (text: string, ph: string) => <span className={'vi-q__var' + (text ? '' : ' is-empty')}>{text || ph}</span>;

  return (
    <p className="vi-diag__bubble" data-clarity-mask="true">
      Je cherche {v(f.metier, '[votre métier]')}
      {f.metier && !f.ville ? null : <> à {v(f.ville, '[votre ville]')}</>}. Qui me <span className="vi-nowrap">conseilles-tu&nbsp;?</span>
    </p>
  );
}
