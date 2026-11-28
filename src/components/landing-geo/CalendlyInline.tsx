'use client';

import { useEffect, useRef, useState } from 'react';
import { readConsent, type Consent } from '@/lib/consent';
import { CONTACT } from '@/lib/site';

/*
 * Calendly intégré à la page, dans la dernière section de la landing /visibilite-ia/ (demande de Benjamin du 28/11/2026 :
 * « un formulaire Calendly intégré directement à la page »). Même intégration que CalendlyModal (sans widget.js :
 * embed_domain, embed_type, paramètres utm_* de la page, à défaut ceux reçus en props).
 * Affiché pour tous les visiteurs, sans bouton à cliquer (demande de Benjamin du 28/11/2026 : « qu'on voie directement le
 * calendrier »). Calendly pèse environ 4 Mo et dépose ses propres traceurs : sans l'accord « Mesure d'audience » ET
 * « Publicité » de notre bandeau, le bandeau cookies de Calendly reste affiché dans le calendrier (pas de hide_gdpr_banner)
 * et c'est Calendly qui demande l'accord pour ses cookies non indispensables (politique de confidentialité, § 9.2). Avec
 * notre accord, son bandeau est masqué.
 * Préchargement, pour être déjà affiché quand le visiteur arrive à la section (« instantané ») : sur ordinateur dès que la
 * page est prête ; sur téléphone 2 s après l'arrivée sur preloadAfter (les formules, quand leur haut monte dans les 40 % du
 * haut de l'écran), moment où la fenêtre CalendlyModal se précharge aussi avec l'accord : ses fichiers sont alors en cache,
 * et le téléphone n'est pas occupé pendant le haut de page (blocages signalés le 04/11/2026) ; dans tous les cas dès que
 * la section est à 2 écrans.
 * Hauteur : message calendly.page_height. Réservation confirmée (calendly.event_scheduled) : la page part vers
 * /rdv-confirme/, qui déclenche les conversions (Schedule pour Meta, appointment_scheduled pour ChatGPT Ads).
 */
const CALENDLY_ORIGIN = 'https://calendly.com';
const CONFIRM_PATH = '/rdv-confirme/';
const UTM_KEYS = ['utm_campaign', 'utm_source', 'utm_medium', 'utm_content', 'utm_term'] as const;
const START_HEIGHT = 700;
/** Téléphone : décalage après la fenêtre CalendlyModal, préchargée au même moment. */
const PHONE_DELAY_MS = 2000;

type Utm = Partial<Record<(typeof UTM_KEYS)[number], string>>;

const consented = (c: Consent | null) => !!c?.audience && !!c.marketing;

/** banniere : bandeau cookies de Calendly affiché (visiteur sans notre accord). */
function embedUrl(utm: Utm, banniere: boolean) {
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
  if (!banniere) q.set('hide_gdpr_banner', '1');
  q.set('primary_color', 'ED6E63');
  return url.toString();
}

export default function CalendlyInline({ utm = {}, preloadAfter }: { utm?: Utm; preloadAfter?: string }) {
  const [src, setSrc] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [height, setHeight] = useState(START_HEIGHT);
  const box = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const utmRef = useRef(utm);

  // Préchargement, pour tous les visiteurs (voir en tête de fichier)
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const stops: (() => void)[] = [];
    const stopAll = () => stops.splice(0).forEach((stop) => stop());
    const start = () => {
      stopAll();
      setSrc((s) => s ?? embedUrl(utmRef.current, !consented(readConsent())));
    };
    const later = (ms: number) => {
      const id = window.setTimeout(start, ms);
      stops.push(() => window.clearTimeout(id));
    };
    /** then() la première fois que target entre dans la zone (rootMargin), puis plus d'observation. */
    const when = (target: Element, rootMargin: string, then: () => void) => {
      const io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          io.disconnect();
          then();
        },
        { rootMargin },
      );
      io.observe(target);
      stops.push(() => io.disconnect());
    };
    when(el, '0px 0px 200% 0px', start); // dans tous les cas : section à 2 écrans
    if (window.matchMedia('(max-width: 767px)').matches) {
      const target = preloadAfter ? document.querySelector(preloadAfter) : null;
      if (target) when(target, '0px 0px -60% 0px', () => later(PHONE_DELAY_MS));
    } else {
      // Ordinateur : dès que la page est prête
      const idle = () => {
        if (typeof window.requestIdleCallback === 'function') {
          const id = window.requestIdleCallback(start, { timeout: 3000 });
          stops.push(() => window.cancelIdleCallback(id));
        } else later(1500);
      };
      if (document.readyState === 'complete') idle();
      else {
        window.addEventListener('load', idle, { once: true });
        stops.push(() => window.removeEventListener('load', idle));
      }
    }
    return stopAll;
  }, [preloadAfter]);

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
          {/* Silhouette du calendrier, le temps du chargement */}
          <div className="vi-cal__skel" aria-hidden="true">
            <p className="vi-cal__skel-t">Sélectionnez la date et l’heure</p>
            <div className="vi-cal__skel-grid">
              {Array.from({ length: 35 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
          </div>
          <div className="vi-cal__gate">
            <p>Chargement du calendrier…</p>
          </div>
        </div>
      )}
    </div>
  );
}
