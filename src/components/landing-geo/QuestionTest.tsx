'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/*
 * Landing /visibilite-ia/, section « test » : le visiteur écrit ce que ses clients cherchent, sa ville et le
 * nom de son entreprise ; trois questions à poser aux IA se composent en direct.
 * - Rien n'est envoyé : aucune saisie dans une URL, un stockage, Clarity (champs et cartes masqués par
 *   data-clarity-mask), GTM ou Calendly. Seuls les événements test_genere et test_copie, sans contenu.
 * - Sans JavaScript : les champs sont masqués (<noscript> de Body.tsx) et les cartes gardent leurs crochets.
 * - La saisie est aussi reprise, dans la page seulement, par l'illustration de #diagnostic (événement vi:test).
 * - Sous 1024 px : champs, puis questions, puis encarts (styles.ts) ; le champ métier remonte en haut de l'écran au focus.
 */

type Fields = { metier: string; ville: string; nom: string };
type Part = { text: string; empty: boolean; key: string };

const EMPTY: Fields = { metier: '', ville: '', nom: '' };
const PH = { metier: '[un plombier]', ville: '[Nantes]', nom: '[votre entreprise]' };
const nb = ' ';

/** Saisie nettoyée : espaces superflus et ponctuation finale retirés. */
const clean = (s: string) => s.replace(/\s+/g, ' ').trim().replace(/[\s.,;:!?…]+$/u, '');

const clarityEvent = (name: string) => window.clarity?.('event', name);

function questions(f: Fields, flash: Fields): Part[][] {
  const started = !!(f.metier || f.ville || f.nom);
  const part = (k: keyof Fields): Part => ({ text: f[k] || PH[k], empty: !f[k], key: `${k}:${flash[k]}` });
  const withVille = !started || !!f.ville;
  const t = (text: string): Part => ({ text, empty: false, key: '' });
  return [
    withVille
      ? [t('Je cherche '), part('metier'), t(' à '), part('ville'), t(`. Qui me conseilles-tu${nb}?`)]
      : [t('Je cherche '), part('metier'), t(`. Qui me conseilles-tu${nb}?`)],
    withVille ? [t('Comment choisir '), part('metier'), t(' à '), part('ville'), t(`${nb}?`)] : [t('Comment choisir '), part('metier'), t(`${nb}?`)],
    [t('Que penses-tu de '), part('nom'), t(`${nb}?`)],
  ];
}

const REVEALS = [
  'la recommandation directe, celle qui compte le plus.',
  'les sites que l’IA cite comme sources dans votre secteur.',
  `ce que l’IA sait de vous, et si c’est exact. Votre nom est dans la question${nb}: elle vérifie l’exactitude, pas la visibilité.`,
];

const CopyIcon = () => (
  <svg className="vi-ico" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <rect x="7" y="7" width="9" height="9" rx="2" />
    <path d="M13 4.5H6A1.5 1.5 0 0 0 4.5 6v7" />
  </svg>
);
const CheckIcon = () => (
  <svg className="vi-ico" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <path d="M4.5 10.5l3.5 3.5 7.5-8" />
  </svg>
);

export default function QuestionTest({ children }: { children?: ReactNode }) {
  const [raw, setRaw] = useState<Fields>(EMPTY);
  const [flash, setFlash] = useState<Fields>(EMPTY);
  const [copied, setCopied] = useState<{ i: number; ok: boolean } | null>(null);
  const [live, setLive] = useState('');
  const [copyMsg, setCopyMsg] = useState('');
  const generated = useRef(false);
  const timers = useRef<{ flash?: number; live?: number; copy?: number }>({});

  const f: Fields = { metier: clean(raw.metier), ville: clean(raw.ville), nom: clean(raw.nom) };
  const qs = questions(f, flash);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRaw((r) => ({ ...r, [k]: value }));
  };

  // Éclair sur le mot modifié (anti-rebond 120 ms), annonce polie 600 ms après la dernière frappe
  useEffect(() => {
    const t = timers.current;
    window.clearTimeout(t.flash);
    window.clearTimeout(t.live);
    const cur = { metier: clean(raw.metier), ville: clean(raw.ville), nom: clean(raw.nom) };
    t.flash = window.setTimeout(() => setFlash(cur), 120);
    const started = !!(cur.metier || cur.ville || cur.nom);
    if (started) {
      t.live = window.setTimeout(() => {
        setLive((s) => (s === 'Questions mises à jour.' ? 'Questions mises à jour.​' : 'Questions mises à jour.'));
        if (!generated.current) {
          generated.current = true;
          clarityEvent('test_genere');
        }
      }, 600);
    }
    // Reprise dans l'illustration de #diagnostic (dans la page seulement)
    window.dispatchEvent(new CustomEvent('vi:test', { detail: { metier: cur.metier, ville: cur.ville } }));
    return () => {
      window.clearTimeout(t.flash);
      window.clearTimeout(t.live);
    };
  }, [raw]);

  useEffect(() => () => window.clearTimeout(timers.current.copy), []);

  // Sous 1024 px, les questions suivent les champs : au focus du premier champ, la page remonte pour que la
  // carte « Question 1 » reste visible au-dessus du clavier (après l'ouverture du clavier, qui fait défiler).
  const toCards = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!window.matchMedia('(max-width: 1023.98px)').matches) return;
    const el = e.currentTarget;
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(() => el.scrollIntoView({ block: 'start', behavior: smooth ? 'smooth' : 'auto' }), 300);
  };

  const copy = async (i: number) => {
    const text = qs[i].map((p) => p.text).join('').replace(/ /g, ' ');
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      ok = false;
    }
    setCopied({ i, ok });
    setCopyMsg(ok ? `Question ${i + 1} copiée` : 'Copie impossible, sélectionnez le texte de la question');
    if (ok) clarityEvent('test_copie');
    window.clearTimeout(timers.current.copy);
    timers.current.copy = window.setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="vi-tool">
      <div className="vi-tool__side">
      <div className="vi-tool__fields">
        <div className="vi-field">
          <label htmlFor="vi-metier">Ce que vos clients cherchent</label>
          <input
            id="vi-metier"
            type="text"
            value={raw.metier}
            onChange={set('metier')}
            onFocus={toCards}
            placeholder="un plombier"
            autoComplete="off"
            enterKeyHint="done"
            maxLength={60}
            data-clarity-mask="true"
            aria-describedby="vi-metier-aide"
          />
          <p className="vi-field__help" id="vi-metier-aide">
            Écrivez-le comme eux, avec l’article&nbsp;: «&nbsp;un plombier&nbsp;», «&nbsp;une agence web&nbsp;», «&nbsp;un
            expert-comptable&nbsp;»…
          </p>
        </div>
        <div className="vi-field">
          <label htmlFor="vi-ville">
            Votre ville <small>(facultatif)</small>
          </label>
          <input
            id="vi-ville"
            type="text"
            value={raw.ville}
            onChange={set('ville')}
            placeholder="Nantes"
            autoComplete="off"
            enterKeyHint="done"
            maxLength={60}
            data-clarity-mask="true"
          />
        </div>
        <div className="vi-field">
          <label htmlFor="vi-nom">
            <span className="vi-only-lg">Le nom de votre entreprise</span>
            <span className="vi-only-sm">Votre entreprise</span> <small>(facultatif)</small>
          </label>
          <input
            id="vi-nom"
            type="text"
            value={raw.nom}
            onChange={set('nom')}
            placeholder="Votre entreprise"
            autoComplete="off"
            enterKeyHint="done"
            maxLength={60}
            data-clarity-mask="true"
            aria-describedby="vi-nom-aide"
          />
          <p className="vi-field__help" id="vi-nom-aide">
            Pour la question sur votre réputation.
          </p>
        </div>
      </div>
      {children}
      </div>

      <div className="vi-tool__out">
        <div className="vi-tool__outhead">
          <p className="vi-tool__title">Vos 3 questions</p>
          <p className="vi-live" aria-hidden="true">
            Mise à jour en direct
          </p>
        </div>
        <ol className="vi-qs" data-clarity-mask="true">
          {qs.map((parts, i) => {
            const state = copied?.i === i ? (copied.ok ? 'is-done' : 'is-fail') : '';
            return (
              <li className="vi-q" key={i}>
                <div className="vi-q__top">
                  <span className="vi-q__n">Question {i + 1}</span>
                  <button
                    type="button"
                    className={'vi-copy ' + state}
                    onClick={() => copy(i)}
                    aria-label={state === 'is-fail' ? 'Sélectionnez le texte' : state ? 'Copié' : `Copier la question ${i + 1}`}
                  >
                    {state === 'is-done' ? <CheckIcon /> : <CopyIcon />}
                    <span aria-hidden="true">{state === 'is-done' ? 'Copié' : state === 'is-fail' ? 'Sélectionnez le texte' : 'Copier'}</span>
                  </button>
                </div>
                <p className="vi-q__text">
                  «&nbsp;
                  {parts.map((p, j) =>
                    p.key ? (
                      <span key={p.key + j} className={'vi-q__var' + (p.empty ? ' is-empty' : '')}>
                        {p.text}
                      </span>
                    ) : (
                      <span key={j}>{p.text}</span>
                    ),
                  )}
                  &nbsp;»
                </p>
                <p className="vi-q__why">
                  <strong>Ce que ça révèle&nbsp;:</strong> {REVEALS[i]}
                </p>
              </li>
            );
          })}
        </ol>
        <p className="sr-only" aria-live="polite">
          {live}
        </p>
        <p className="sr-only" aria-live="polite">
          {copyMsg}
        </p>
      </div>
    </div>
  );
}
