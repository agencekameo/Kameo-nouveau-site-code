'use client';

import { useEffect } from 'react';
import { onConsent } from '@/lib/consent';

/*
 * Landing /visibilite-ia/ : comportements de la page.
 * - Révélations au défilement ([data-vi-reveal], [data-vi-fill]) : l'état final est l'état par défaut du CSS ;
 *   l'état de départ n'existe que sous .vi.vi-io, posé APRÈS avoir marqué .is-in ce qui est déjà à l'écran.
 *   Rien n'est caché sans JavaScript ni avec prefers-reduced-motion.
 * - Barre d'action mobile (#vi-sticky) et bouton de l'en-tête collant (ordinateur, classe .is-past-hero sur .vi) :
 *   affichés quand le bouton du héros est passé, retirés quand #diagnostic est à l'écran ou que la fenêtre
 *   Calendly (.lpcal) est ouverte.
 * - Microsoft Clarity (seulement s'il est chargé, accord « Mesure d'audience ») : cta_<emplacement> au clic
 *   (data-cta), whatsapp_* et tel_*, whatsapp_flottant, formule_details, faq_ouverte ; étiquettes de session
 *   « offre », « metier » (general, auto-ecole, ecole : version de la page) et « utm_source ». Jamais de contenu saisi.
 */

const clarity = (...args: unknown[]) => window.clarity?.(...args);

export default function ViEffects({ offre, metier = 'general' }: { offre: boolean; metier?: string }) {
  // Révélations
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.vi');
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-vi-reveal], [data-vi-fill]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }),
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    );
    const vh = window.innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add('is-in');
      else io.observe(el);
    });
    root.classList.add('vi-io');
    return () => io.disconnect();
  }, []);

  // Barre d'action mobile
  useEffect(() => {
    const bar = document.getElementById('vi-sticky');
    const hero = document.querySelector<HTMLElement>('[data-cta="hero"]');
    const diag = document.getElementById('diagnostic');
    if (!bar || !hero || !diag) return;
    let pastHero = false;
    let diagIn = false;
    let calOpen = false;
    const root = document.querySelector<HTMLElement>('.vi');
    const apply = () => {
      const show = pastHero && !diagIn && !calOpen;
      bar.classList.toggle('is-shown', show);
      root?.classList.toggle('is-past-hero', show);
    };
    const ioHero = new IntersectionObserver((es) => {
      const e = es[es.length - 1];
      pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
      apply();
    });
    const ioDiag = new IntersectionObserver((es) => {
      diagIn = es[es.length - 1].isIntersecting;
      apply();
    });
    ioHero.observe(hero);
    ioDiag.observe(diag);
    let mo: MutationObserver | null = null;
    const cal = document.querySelector('.lpcal');
    if (cal) {
      mo = new MutationObserver(() => {
        calOpen = cal.classList.contains('is-open');
        apply();
      });
      mo.observe(cal, { attributes: true, attributeFilter: ['class'] });
    }
    return () => {
      ioHero.disconnect();
      ioDiag.disconnect();
      mo?.disconnect();
    };
  }, []);

  // Clarity : clics, ouvertures, étiquettes de session
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Bouton WhatsApp flottant (.lpwa, hors de .vi, sans data-cta)
      if ((e.target as Element | null)?.closest?.('.lpwa a')) {
        clarity('event', 'whatsapp_flottant');
        return;
      }
      const el = (e.target as Element | null)?.closest?.<HTMLElement>('.vi [data-cta], .vi-sticky [data-cta]');
      const where = el?.dataset.cta;
      if (!where) return;
      const name = /^(whatsapp|tel)/.test(where) ? where : `cta_${where}`;
      clarity('event', name.replace(/-/g, '_'));
    };
    const onToggle = (e: Event) => {
      const d = e.target as HTMLDetailsElement | null;
      if (!d || d.tagName !== 'DETAILS' || !d.open) return;
      if (d.classList.contains('vi-plan__more')) clarity('event', 'formule_details');
      else if (d.classList.contains('vi-faq__item')) clarity('event', 'faq_ouverte');
    };
    document.addEventListener('click', onClick, true);
    document.addEventListener('toggle', onToggle, true);

    const tag = () => {
      if (!window.clarity) return;
      clarity('set', 'offre', offre ? 'oui' : 'non');
      clarity('set', 'metier', metier);
      const src = new URLSearchParams(location.search).get('utm_source');
      if (src) clarity('set', 'utm_source', src.slice(0, 60));
    };
    tag();
    const off = onConsent(() => window.setTimeout(tag, 0));
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('toggle', onToggle, true);
      off();
    };
  }, [offre, metier]);

  return null;
}
