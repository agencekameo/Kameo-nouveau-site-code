'use client';

import { useEffect, useRef, useState } from 'react';
import css from './CalendlyPopup.styles';

/*
 * Popup Calendly de l'accueil (front-page.php) :
 *  - desktop : widget inline préchargé à l'idle, popup ouverte après 2,5 s ;
 *  - mobile : badge flottant Calendly « Prendre RDV ».
 */

const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js';
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';
const URL_PARAMS = 'https://calendly.com/contact-agence-kameo/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ED6E63';
const DELAY_MS = 2500;

type CalendlyApi = {
  initBadgeWidget?: (o: Record<string, unknown>) => void;
  initInlineWidget?: (o: { url: string; parentElement: HTMLElement }) => void;
};
declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

function loadWidgetScript(onload: () => void) {
  if (window.Calendly) return onload();
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_JS}"]`);
  if (existing) return existing.addEventListener('load', onload, { once: true });
  const s = document.createElement('script');
  s.src = WIDGET_JS;
  s.async = true;
  s.onload = onload;
  document.head.appendChild(s);
}

export default function CalendlyPopup() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<Element | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const timers: number[] = [];
    let poll: number | undefined;
    let cancelled = false;

    const reveal = () => !cancelled && setLoaded(true);
    const watchReady = () => {
      let attempts = 0;
      const widget = widgetRef.current;
      if (!widget) return;
      // Navigation client : widget.js déjà chargé ne rescanne pas la page
      if (!widget.querySelector('iframe') && window.Calendly?.initInlineWidget) {
        window.Calendly.initInlineWidget({ url: URL_PARAMS, parentElement: widget });
      }
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
    };
    const preload = () => loadWidgetScript(watchReady);

    const initMobileBadge = () => {
      if (!document.querySelector(`link[href*="calendly.com/assets/external/widget.css"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = WIDGET_CSS;
        document.head.appendChild(link);
      }
      loadWidgetScript(() => {
        if (cancelled) return;
        window.Calendly?.initBadgeWidget?.({ url: URL_PARAMS, text: 'Prendre RDV', color: '#ED6E63', textColor: '#ffffff', branding: false });
      });
    };

    const idle = (fn: () => void) =>
      typeof window.requestIdleCallback === 'function' ? window.requestIdleCallback(fn, { timeout: 1500 }) : window.setTimeout(fn, 800);

    const schedule = () => {
      if (isMobile) idle(initMobileBadge);
      else {
        idle(preload);
        timers.push(window.setTimeout(() => !cancelled && openPop(), DELAY_MS));
      }
    };
    const openPop = () => {
      lastFocus.current = document.activeElement;
      preload();
      setOpen(true);
      timers.push(window.setTimeout(() => popRef.current?.querySelector<HTMLElement>('.cpop__close')?.focus(), 320));
    };

    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
      window.clearInterval(poll);
      window.removeEventListener('load', schedule);
      // Le badge mobile ne doit pas suivre le visiteur sur les autres pages
      document.querySelectorAll('.calendly-badge-widget').forEach((b) => b.remove());
    };
  }, []);

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
            <div className={'cpop__loader' + (loaded ? ' is-hidden' : '')} aria-hidden="true">
              <div className="cpop__skel cpop__skel--title" />
              <div className="cpop__skel cpop__skel--cal-head" />
              <div className="cpop__skel--grid">
                {Array.from({ length: 35 }, (_, i) => (
                  <div className="cpop__skel--cell" key={i} />
                ))}
              </div>
            </div>
            <div
              ref={widgetRef}
              className={'calendly-inline-widget cpop__widget' + (loaded ? ' is-loaded' : '')}
              data-url={URL_PARAMS}
              style={{ minWidth: '320px', height: '640px' }}
            />
          </div>
        </div>
      </div>
      <style id="cpop-styles" dangerouslySetInnerHTML={{ __html: css }} />
    </>
  );
}
