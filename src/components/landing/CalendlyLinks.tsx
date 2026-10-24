'use client';

import { useEffect } from 'react';
import { loadCalendlyScript, loadCalendlyStyles } from '@/lib/calendly';
import { CONTACT } from '@/lib/site';
import overlayCss from '../calendly-overlay.styles';

/*
 * Landing page Ads : les liens Calendly de la page (en-tête, hero, offres, contact, menu mobile)
 * ouvrent la prise de rendez-vous dans une fenêtre sur la page, au lieu de calendly.com dans un
 * nouvel onglet. Les liens gardent leur adresse calendly.com : sans JavaScript, ou si le widget ne
 * se charge pas, ils s'ouvrent comme avant ; et le déclencheur GTM « Clic - Lien Calendly »
 * (événement Meta ClicCalendly, sans « Vérifier la validation ») les compte toujours.
 * Calendly reprend lui-même les paramètres utm_* de l'adresse de la page.
 * Après la réservation, Calendly prévient la page (message calendly.event_scheduled) : elle part
 * vers /rdv-confirme/, qui déclenche la conversion Schedule comme la redirection Calendly
 * le faisait dans l'onglet calendly.com.
 */
const POPUP_URL = `${CONTACT.calendly}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ED6E63`;
const CONFIRM_PATH = '/rdv-confirme/';

export default function CalendlyLinks() {
  useEffect(() => {
    let failed = false;
    let leaving = false;
    const onFail = () => (failed = true);

    const open = () => {
      loadCalendlyStyles();
      loadCalendlyScript(
        () => window.Calendly?.initPopupWidget?.({ url: POPUP_URL }),
        // widget indisponible après le clic : prise de rendez-vous sur calendly.com
        () => window.location.assign(CONTACT.calendly),
      );
    };

    const onClick = (e: MouseEvent) => {
      if (failed || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href^="https://calendly.com/"]');
      if (!link) return;
      // preventDefault seulement : le clic doit encore atteindre GTM (ClicCalendly)
      e.preventDefault();
      // au tour suivant : le menu mobile se ferme d'abord et rend le défilement à la page,
      // que la fenêtre Calendly bloque puis restaure à sa fermeture
      window.setTimeout(open, 0);
    };

    const onMessage = (e: MessageEvent) => {
      if (leaving || e.origin !== 'https://calendly.com' || e.data?.event !== 'calendly.event_scheduled') return;
      leaving = true;
      window.location.assign(CONFIRM_PATH);
    };

    // widget préchargé une fois la page chargée : la fenêtre s'ouvre sans attendre au clic
    const preload = () => {
      loadCalendlyStyles();
      loadCalendlyScript(() => {}, onFail);
    };
    let cancelPreload = () => {};
    const schedule = () => {
      if (typeof window.requestIdleCallback === 'function') {
        const id = window.requestIdleCallback(preload, { timeout: 2000 });
        cancelPreload = () => window.cancelIdleCallback(id);
      } else {
        const id = window.setTimeout(preload, 1000);
        cancelPreload = () => window.clearTimeout(id);
      }
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    document.addEventListener('click', onClick, true);
    window.addEventListener('message', onMessage);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('message', onMessage);
      window.removeEventListener('load', schedule);
      cancelPreload();
    };
  }, []);

  return <style id="calendly-overlay-styles" dangerouslySetInnerHTML={{ __html: overlayCss }} />;
}
