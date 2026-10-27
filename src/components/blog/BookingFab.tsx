'use client';

import { useEffect, useState } from 'react';
import { CONTACT } from '@/lib/site';

/*
 * Articles du blog : bouton flottant « Prendre RDV avec un expert », en bas à droite. C'est un lien
 * calendly.com que CalendlyModal, monté sur la même page, ouvre dans une fenêtre sans quitter
 * l'article ; sans JavaScript, il ouvre Calendly dans un nouvel onglet.
 * Il apparaît après un court instant et s'efface quand l'encadré « Prendre un rendez-vous » de fin
 * d'article est à l'écran (doublon). Sur les écrans où ils se chevaucheraient, il laisse la place au
 * bandeau cookies et à l'encart « Prendre rendez-vous » de certains articles tant qu'ils sont
 * ouverts (blog-rdv.css).
 */
const DELAY_MS = 1200;

export default function BookingFab() {
  const [shown, setShown] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShown(true), DELAY_MS);
    const cta = document.querySelector('.article-cta');
    const io = cta && 'IntersectionObserver' in window ? new IntersectionObserver(([e]) => setCtaInView(e.isIntersecting)) : null;
    if (cta && io) io.observe(cta);
    return () => {
      window.clearTimeout(t);
      io?.disconnect();
    };
  }, []);

  return (
    <a href={CONTACT.calendly} target="_blank" rel="noopener" className={'rdvfab' + (shown && !ctaInView ? ' is-shown' : '')}>
      <span className="rdvfab__avatar" aria-hidden="true">
        <img src="/images/benjamin.webp" alt="" width="40" height="40" decoding="async" />
      </span>
      <span className="rdvfab__text">
        <span className="rdvfab__title">
          <span className="rdvfab__lead">Prendre </span>RDV avec un expert
        </span>
        <span className="rdvfab__sub">Appel gratuit · 30 min</span>
      </span>
      <span className="rdvfab__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
          <rect x="3.5" y="5" width="17" height="15.5" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M3.5 10h17M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    </a>
  );
}
