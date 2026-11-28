'use client';

import { useEffect, useRef, useState } from 'react';
import { onConsent, readConsent, type Consent } from '@/lib/consent';
import { CONTACT } from '@/lib/site';

/*
 * Calendly intégré à la page, dans la dernière section de la landing /visibilite-ia/ (demande de Benjamin du 28/11/2026 :
 * « un formulaire Calendly intégré directement à la page »). Même intégration que CalendlyModal (sans widget.js :
 * embed_domain, embed_type, paramètres utm_* de la page, à défaut ceux reçus en props) et même règle de consentement
 * (politique de confidentialité, § 9.2) : Calendly pèse environ 4 Mo et dépose ses propres traceurs, il n'est chargé
 * d'office qu'avec l'accord « Mesure d'audience » ET « Publicité », quand la section approche de l'écran. Sans cet accord,
 * le bouton « Voir les créneaux disponibles » le charge (action du visiteur).
 * Hauteur : message calendly.page_height. Réservation confirmée (calendly.event_scheduled) : la page part vers
 * /rdv-confirme/, qui déclenche les conversions (Schedule pour Meta, appointment_scheduled pour ChatGPT Ads).
 */
const CALENDLY_ORIGIN = 'https://calendly.com';
const CONFIRM_PATH = '/rdv-confirme/';
const UTM_KEYS = ['utm_campaign', 'utm_source', 'utm_medium', 'utm_content', 'utm_term'] as const;
const START_HEIGHT = 700;

type Utm = Partial<Record<(typeof UTM_KEYS)[number], string>>;

const consented = (c: Consent | null) => !!c?.audience && !!c.marketing;

function embedUrl(utm: Utm) {
  const url = new URL(CONTACT.calendly);
  const q = url.searchParams;
  q.set('embed_domain', location.host);
  q.set('embed_type', 'Inline');
  const page = new URLSearchParams(location.search);
  for (const k of UTM_KEYS) {
    const v = page.get(k) || utm[k];
    if (v) q.set(k, v);
  }
  q.set('hide_event_type_details', '1');
  q.set('hide_gdpr_banner', '1');
  q.set('primary_color', 'ED6E63');
  return url.toString();
}

export default function CalendlyInline({ utm = {} }: { utm?: Utm }) {
  const [src, setSrc] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [height, setHeight] = useState(START_HEIGHT);
  const box = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const utmRef = useRef(utm);
  const load = () => setSrc((s) => s ?? embedUrl(utmRef.current));

  // Avec l'accord cookies (à l'arrivée ou pendant la visite) : chargement quand la section approche de l'écran
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let io: IntersectionObserver | null = null;
    const watch = (c: Consent | null) => {
      if (!consented(c) || io) return;
      io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          io?.disconnect();
          setSrc((s) => s ?? embedUrl(utmRef.current));
        },
        { rootMargin: '600px 0px' },
      );
      io.observe(el);
    };
    watch(readConsent());
    const off = onConsent(watch);
    return () => {
      off();
      io?.disconnect();
    };
  }, []);

  // Messages de l'iframe Calendly : hauteur, affichage, réservation confirmée
  useEffect(() => {
    let leaving = false;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== CALENDLY_ORIGIN || e.source !== frame.current?.contentWindow) return;
      const event = e.data?.event;
      if (event === 'calendly.page_height') {
        const h = parseInt(e.data.payload?.height, 10);
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

  return (
    <div ref={box} className="vi-cal">
      {src && (
        <iframe
          ref={frame}
          src={src}
          title="Calendly : choisissez la date de votre diagnostic"
          className={'vi-cal__frame' + (ready ? ' is-ready' : '')}
          style={{ height }}
        />
      )}
      {!ready && (
        <div className="vi-cal__wait">
          {/* Silhouette du calendrier, le temps du chargement ou en attendant le clic */}
          <div className="vi-cal__skel" aria-hidden="true">
            <p className="vi-cal__skel-t">Sélectionnez la date et l’heure</p>
            <div className="vi-cal__skel-grid">
              {Array.from({ length: 35 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
          </div>
          <div className="vi-cal__gate">
            {src ? (
              <p>Chargement du calendrier…</p>
            ) : (
              <>
                <button type="button" className="vi-btn vi-btn--white vi-cal__btn" onClick={load}>
                  Voir les créneaux disponibles
                </button>
                <p>Calendrier fourni par Calendly, qui dépose ses propres cookies.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
