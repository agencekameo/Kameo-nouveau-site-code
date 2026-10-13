'use client';

import { useEffect, useState } from 'react';
import Icon from '../Icon';
import MobileNav from '../MobileNav';
import { CONTACT } from '@/lib/site';

/* En-tête de la landing page : même structure que le site, liens one-page. */
export default function LpHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    let last = window.scrollY > 20;
    setScrolled(last);
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const s = window.scrollY > 20;
        if (s !== last) setScrolled((last = s));
        ticking = false;
      });
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className={'nav-wrap' + (scrolled ? ' is-scrolled' : '')} id="header">
      <div className="nav">
        <a href="#cin-hero" className="nav__logo" aria-label="Kameo, Haut de page">
          <img src="/images/hero.webp" alt="Kameo" className="nav__logo-img" width="400" height="126" fetchPriority="high" />
        </a>
        <nav className="nav__links" aria-label="Navigation">
          <a href="#avis" className="nav__link">
            Avis clients
          </a>
          <a href="#tarifs" className="nav__link">
            Tarifs
          </a>
          <a href="#rdv" className="nav__link">
            Contact
          </a>
        </nav>
        <a href={CONTACT.calendly} target="_blank" rel="noopener" className="nav__cta" id="magBtn">
          Prendre rdv <Icon name="arrow-up-right-from-square" />
        </a>
        <button
          className={'nav__burger' + (open ? ' is-open' : '')}
          id="burger"
          aria-label="Ouvrir le menu"
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <MobileNav open={open} onClose={() => setOpen(false)} pathname="/landingpage/" variant="lp" />
    </header>
  );
}
