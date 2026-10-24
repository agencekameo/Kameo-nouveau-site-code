'use client';

import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '@/lib/site';
import css from './CalendlyModal.styles';

/*
 * Landing page Ads : prise de rendez-vous Calendly dans une fenêtre sur la page.
 * - Les liens calendly.com de la page (en-tête, hero, offres, contact, menu mobile) l'ouvrent au clic.
 *   Ils restent des liens calendly.com : sans JavaScript ils s'ouvrent comme avant, et le déclencheur
 *   GTM « Clic - Lien Calendly » (ClicCalendly, sans « Vérifier la validation ») les compte toujours.
 * - La fenêtre s'ouvre tout de suite, avec la silhouette du calendrier le temps que Calendly
 *   s'affiche (environ 2 s et 4 Mo au premier chargement). Calendly n'est chargé qu'au premier clic :
 *   il dépose ses propres traceurs (Segment, Stripe, pixel Meta…), annoncés par la politique de
 *   confidentialité « lorsqu'il s'affiche ». Il reste ensuite en place : rouvrir est instantané.
 * - Intégration sans widget.js, avec la même adresse que l'intégration officielle (embed_domain,
 *   embed_type, paramètres utm_* de la page). À 480 px de large au plus, Calendly affiche sa mise en
 *   page compacte, sans cadre ni marge, sur fond transparent : la fenêtre a exactement la taille du
 *   module, et sa hauteur suit le message calendly.page_height.
 * - Après la réservation (message calendly.event_scheduled), la page part vers /rdv-confirme/, qui
 *   déclenche la conversion Schedule.
 */
const CALENDLY_ORIGIN = 'https://calendly.com';
const CONFIRM_PATH = '/rdv-confirme/';
const UTM_KEYS = ['utm_campaign', 'utm_source', 'utm_medium', 'utm_content', 'utm_term'];
const CALENDAR_HEIGHT = 602; // hauteur du calendrier compact (calendly.page_height)
const SLOW_MS = 9000;

function embedUrl() {
  const url = new URL(CONTACT.calendly);
  const q = url.searchParams;
  q.set('embed_domain', location.host);
  q.set('embed_type', 'Inline');
  const page = new URLSearchParams(location.search);
  for (const k of UTM_KEYS) {
    const v = page.get(k);
    if (v) q.set(k, v);
  }
  q.set('hide_event_type_details', '1');
  q.set('hide_gdpr_banner', '1');
  q.set('primary_color', 'ED6E63');
  return url.toString();
}

const WEEKDAYS = ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'];

export default function CalendlyModal() {
  const [src, setSrc] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);
  const [height, setHeight] = useState(CALENDAR_HEIGHT);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLElement | null>(null);

  // Clic sur un lien calendly.com de la page (hors fenêtre) : ouverture
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href^="https://calendly.com/"]') as HTMLAnchorElement | null;
      if (!link || link.closest('.lpcal')) return;
      // preventDefault seulement : le clic doit encore atteindre GTM (ClicCalendly)
      e.preventDefault();
      trigger.current = link;
      setSrc((s) => s ?? embedUrl());
      setOpen(true);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Messages de l'iframe Calendly : affichage, hauteur, réservation confirmée
  useEffect(() => {
    let leaving = false;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== CALENDLY_ORIGIN || e.source !== frameRef.current?.contentWindow) return;
      const event = e.data?.event;
      if (event === 'calendly.page_height') {
        const h = parseInt(e.data.payload?.height, 10);
        // 2 px, 26 px… pendant le chargement : seule la hauteur du contenu affiché compte
        if (h > 200) {
          setHeight(h);
          setReady(true);
        }
      } else if (event === 'calendly.event_type_viewed') {
        setReady(true);
      } else if (event === 'calendly.event_scheduled' && !leaving) {
        leaving = true;
        window.location.assign(CONFIRM_PATH);
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  // Fenêtre ouverte : page figée, Échap, focus sur « Fermer » puis rendu au bouton cliqué
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const before = { overflow: html.style.overflow, paddingRight: html.style.paddingRight };
    html.style.overflow = 'hidden';
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const t = window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 60);
    return () => {
      html.style.overflow = before.overflow;
      html.style.paddingRight = before.paddingRight;
      document.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
      trigger.current?.focus({ preventScroll: true });
    };
  }, [open]);

  // Calendly ne s'affiche pas (réseau, bloqueur) : lien de secours dans la fenêtre
  useEffect(() => {
    if (!open || ready) return;
    const t = window.setTimeout(() => setSlow(true), SLOW_MS);
    return () => window.clearTimeout(t);
  }, [open, ready]);

  const close = () => setOpen(false);

  return (
    <>
      <div className={'lpcal' + (open ? ' is-open' : '')} aria-hidden={open ? undefined : 'true'} inert={!open}>
        <div className="lpcal__backdrop" onClick={close} />
        <div className="lpcal__dialog" role="dialog" aria-modal="true" aria-label="Réserver votre appel stratégique">
          <button ref={closeRef} type="button" className="lpcal__close" aria-label="Fermer" onClick={close}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </button>
          <div className="lpcal__panel" style={{ height }}>
            {src && (
              <iframe
                ref={frameRef}
                src={src}
                title="Calendly : choisissez la date de votre appel"
                className={'lpcal__frame' + (ready ? ' is-ready' : '')}
                style={{ height }}
              />
            )}
            <div className={'lpcal__skel' + (ready ? ' is-hidden' : '')} aria-hidden={ready ? 'true' : undefined}>
              <p className="lpcal__skel-title">Choisissez un jour</p>
              <span className="lpcal__shimmer lpcal__skel-month" />
              <div className="lpcal__skel-week">
                {WEEKDAYS.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <div className="lpcal__skel-grid">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className="lpcal__shimmer lpcal__skel-day" />
                ))}
              </div>
              <span className="lpcal__shimmer lpcal__skel-tz" />
              {slow && (
                <p className="lpcal__slow">
                  Le calendrier tarde à s’afficher.{' '}
                  <a href={CONTACT.calendly} target="_blank" rel="noopener">
                    Ouvrir Calendly dans un nouvel onglet
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <style id="lpcal-styles" dangerouslySetInnerHTML={{ __html: css }} />
    </>
  );
}
