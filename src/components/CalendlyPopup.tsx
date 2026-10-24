'use client';

import { useEffect, useRef, useState } from 'react';
import { onConsent, readConsent, type Consent } from '@/lib/consent';
import { loadCalendlyScript, loadCalendlyStyles } from '@/lib/calendly';
import css from './CalendlyPopup.styles';

/*
 * Popup Calendly de l'accueil (front-page.php) :
 *  - desktop : popup ouverte après 2,5 s. Calendly (environ 4 Mo, ses propres traceurs) n'y est
 *    préchargé que si le visiteur a accepté « Mesure d'audience » et « Publicité » (politique de
 *    confidentialité, § 9.2) ; sinon la popup montre la silhouette du calendrier et un bouton qui
 *    le charge au clic. Un accord donné pendant la visite le charge aussitôt.
 *  - mobile : badge flottant Calendly « Prendre RDV » (calendrier chargé au clic sur le badge).
 * Le widget est créé explicitement (initInlineWidget), jamais par la détection automatique de
 * widget.js : chargé pour le badge mobile, celle-ci remplissait aussi la popup cachée.
 */

const URL_PARAMS = 'https://calendly.com/contact-agence-kameo/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ED6E63';
const DELAY_MS = 2500;
const consentGiven = (c: Consent | null) => !!(c?.audience && c.marketing);

export default function CalendlyPopup() {
  const [open, setOpen] = useState(false);
  const [requested, setRequested] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<Element | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const timers: number[] = [];
    let cancelled = false;

    const initMobileBadge = () => {
      loadCalendlyStyles();
      loadCalendlyScript(() => {
        if (cancelled) return;
        window.Calendly?.initBadgeWidget?.({ url: URL_PARAMS, text: 'Prendre RDV', color: '#ED6E63', textColor: '#ffffff', branding: false });
      });
    };

    const idle = (fn: () => void) =>
      typeof window.requestIdleCallback === 'function' ? window.requestIdleCallback(fn, { timeout: 1500 }) : window.setTimeout(fn, 800);

    const openPop = () => {
      lastFocus.current = document.activeElement;
      setOpen(true);
      timers.push(window.setTimeout(() => popRef.current?.querySelector<HTMLElement>('.cpop__close')?.focus(), 320));
    };
    const schedule = () => {
      if (isMobile) idle(initMobileBadge);
      else {
        if (consentGiven(readConsent())) idle(() => !cancelled && setRequested(true));
        timers.push(window.setTimeout(() => !cancelled && openPop(), DELAY_MS));
      }
    };

    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });
    // accord donné pendant la visite : calendrier chargé (ordinateur)
    const offConsent = onConsent((c) => !isMobile && consentGiven(c) && setRequested(true));

    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener('load', schedule);
      offConsent();
      // Le badge mobile ne doit pas suivre le visiteur sur les autres pages
      document.querySelectorAll('.calendly-badge-widget').forEach((b) => b.remove());
    };
  }, []);

  // Calendrier demandé (accord cookies ou bouton) : widget inline créé puis affiché une fois chargé
  useEffect(() => {
    if (!requested) return;
    let cancelled = false;
    let poll: number | undefined;
    const timers: number[] = [];
    const reveal = () => !cancelled && setLoaded(true);
    loadCalendlyScript(() => {
      const widget = widgetRef.current;
      if (cancelled || !widget) return;
      if (!widget.querySelector('iframe')) window.Calendly?.initInlineWidget?.({ url: URL_PARAMS, parentElement: widget });
      let attempts = 0;
      poll = window.setInterval(() => {
        attempts++;
        const iframe = widget.querySelector('iframe');
        if (iframe) {
          window.clearInterval(poll);
          iframe.addEventListener('load', reveal, { once: true });
          timers.push(window.setTimeout(reveal, 1200));
        } else if (attempts > 30) {
          window.clearInterval(poll);
          reveal();
        }
      }, 80);
    });
    return () => {
      cancelled = true;
      window.clearInterval(poll);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [requested]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  const close = () => {
    setOpen(false);
    document.body.style.overflow = '';
    const el = lastFocus.current as HTMLElement | null;
    if (el && typeof el.focus === 'function') el.focus();
  };

  return (
    <>
      <div
        ref={popRef}
        id="calendlyPopup"
        className="cpop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cpop-title"
        aria-hidden={open ? 'false' : 'true'}
        inert={!open}
        onClick={(e) => (e.target as HTMLElement).closest('[data-cpop-close]') && close()}
      >
        <div className="cpop__backdrop" data-cpop-close="" />
        <div className="cpop__panel" role="document">
          <button type="button" className="cpop__close" aria-label="Fermer la popup" data-cpop-close="">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <header className="cpop__head">
            <h2 className="cpop__title" id="cpop-title">
              Prenez 30 min gratuites avec notre équipe
            </h2>
          </header>
          <div className="cpop__frame">
            <div className={'cpop__loader' + (loaded ? ' is-hidden' : '') + (requested ? '' : ' is-static')} aria-hidden="true">
              <div className="cpop__skel cpop__skel--title" />
              <div className="cpop__skel cpop__skel--cal-head" />
              <div className="cpop__skel--grid">
                {Array.from({ length: 35 }, (_, i) => (
                  <div className="cpop__skel--cell" key={i} />
                ))}
              </div>
            </div>
            {!requested && (
              <div className="cpop__gate">
                <button type="button" className="cpop__gate-btn" onClick={() => setRequested(true)}>
                  Voir les créneaux disponibles
                </button>
                <p className="cpop__gate-note">Calendrier fourni par Calendly, qui dépose ses propres cookies.</p>
              </div>
            )}
            <div
              ref={widgetRef}
              className={'cpop__widget' + (loaded ? ' is-loaded' : '')}
              style={{ minWidth: '320px', height: '640px' }}
            />
          </div>
        </div>
      </div>
      <style id="cpop-styles" dangerouslySetInnerHTML={{ __html: css }} />
    </>
  );
}
