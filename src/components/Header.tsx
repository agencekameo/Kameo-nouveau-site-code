'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import MobileNav from './MobileNav';
import { CONTACT } from '@/lib/site';

/* Navigation flottante pilule + mega menu Expertises (header.php + js/main.js). */

const EXPERTISE_SLUGS = [
  'agence-wordpress-paris', 'creation-site-wordpress', 'refonte-wordpress', 'maintenance-wordpress',
  'expertises-branding', 'expertises-motion', 'developpement-sur-mesure', 'creation-site-ecommerce',
  'creation-marketplace', 'creation-crm-sur-mesure', 'creation-saas-ia',
];

/** Slug courant au sens de header.php : front-page, slug de page, « realisations » ou « blog ». */
export function currentSlug(pathname: string): string {
  const seg = pathname.split('/').filter(Boolean);
  if (seg.length === 0) return 'front-page';
  if (seg[0] === 'realisations') return 'realisations';
  if (seg[0] === 'blog') return 'blog';
  return seg[0];
}

export default function Header() {
  const pathname = usePathname() || '/';
  const slug = currentSlug(pathname);
  const [subOpen, setSubOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const subRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const active = (s: string) => (s === slug ? ' nav__link--active' : '');

  // Nouvelle page : on referme menus et tiroir (le thème rechargeait la page)
  useEffect(() => {
    setSubOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

  // Ombre de la nav au scroll, rAF + diff check
  useEffect(() => {
    let ticking = false;
    let last = window.scrollY > 20;
    setScrolled(last);
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const s = window.scrollY > 20;
        if (s !== last) {
          setScrolled(s);
          last = s;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mega menu : clic extérieur et Escape ferment ; Escape ferme aussi le tiroir
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (subRef.current && !subRef.current.contains(e.target as Node)) setSubOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSubOpen(false);
        setDrawerOpen(false);
      }
    };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Fermeture du tiroir au passage en desktop (> 960 px)
  useEffect(() => {
    let lastW: number | null = null;
    let ticking = false;
    const onResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const w = window.innerWidth;
        if (lastW !== null && w > 960 && lastW <= 960) setDrawerOpen(false);
        lastW = w;
        ticking = false;
      });
    };
    const init = () => (lastW = window.innerWidth);
    const idle = typeof window.requestIdleCallback === 'function' ? window.requestIdleCallback(init) : window.setTimeout(init, 250);
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      if (typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(idle);
    };
  }, []);

  const openSub = () => {
    window.clearTimeout(closeTimer.current);
    setSubOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setSubOpen(false), 150);
  };

  return (
    <header className={'nav-wrap' + (scrolled ? ' is-scrolled' : '')} id="header">
      <div className="nav">
        <Link href="/" className="nav__logo" aria-label="Kameo, Accueil">
          <img
            src="/images/hero.webp"
            srcSet="/images/hero-mobile.webp 200w, /images/hero.webp 400w"
            sizes="(max-width: 768px) 200px, 400px"
            alt="Kameo"
            className="nav__logo-img"
            width="400"
            height="126"
            fetchPriority="high"
          />
        </Link>
        <nav className="nav__links" aria-label="Navigation principale">
          <Link href="/" className={'nav__link' + active('front-page')}>
            Accueil
          </Link>
          <Link href="/notre-agence/" className={'nav__link' + active('notre-agence')}>
            Notre agence
          </Link>
          <div
            ref={subRef}
            className={'nav__sub' + (subOpen ? ' is-open' : '')}
            data-sub=""
            onMouseEnter={openSub}
            onMouseLeave={scheduleClose}
          >
            <button
              className={'nav__link nav__link--has-sub' + (EXPERTISE_SLUGS.includes(slug) ? ' nav__link--active' : '')}
              type="button"
              aria-expanded={subOpen ? 'true' : 'false'}
              aria-haspopup="true"
              data-sub-trigger=""
              onClick={(e) => {
                e.stopPropagation();
                if (subOpen) setSubOpen(false);
                else openSub();
              }}
            >
              Expertises <Icon name="chevron-down" />
            </button>
            <div className="mega-menu" role="menu" aria-label="Expertises">
              <p className="mega-menu__label">Expertises</p>
              <div className="mega-group">
                <Link href="/agence-wordpress-paris/" className="mega-item" role="menuitem">
                  <span className="mega-item__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="16" rx="2.5" />
                      <path d="M3 9h18" />
                      <circle cx="6.5" cy="6.5" r=".6" fill="currentColor" stroke="none" />
                      <circle cx="8.5" cy="6.5" r=".6" fill="currentColor" stroke="none" />
                      <circle cx="10.5" cy="6.5" r=".6" fill="currentColor" stroke="none" />
                      <path d="M9.5 13l-2 2 2 2M14.5 13l2 2-2 2" />
                    </svg>
                  </span>
                  <div className="mega-item__body">
                    <strong className="mega-item__title">Agence WordPress Paris</strong>
                    <p className="mega-item__desc">Création, refonte et maintenance de sites WordPress</p>
                  </div>
                </Link>
                <div className="mega-group__sub">
                  <MegaSub href="/creation-site-wordpress/" title="Création de site WordPress">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M8 13h6M8 17h4" />
                  </MegaSub>
                  <MegaSub href="/refonte-wordpress/" title="Refonte site WordPress">
                    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                    <polyline points="21 3 21 8 16 8" />
                    <polyline points="3 21 3 16 8 16" />
                  </MegaSub>
                  <MegaSub href="/maintenance-wordpress/" title="Maintenance WordPress">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </MegaSub>
                </div>
              </div>
              <div className="mega-group">
                <Link href="/developpement-sur-mesure/" className="mega-item" role="menuitem">
                  <span className="mega-item__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                      <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                  </span>
                  <div className="mega-item__body">
                    <strong className="mega-item__title">Développement sur-mesure</strong>
                    <p className="mega-item__desc">E-commerce, marketplace, CRM, SaaS avec IA</p>
                  </div>
                </Link>
                <div className="mega-group__sub">
                  <MegaSub href="/creation-site-ecommerce/" title="Création de site e-commerce">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </MegaSub>
                  <MegaSub href="/creation-marketplace/" title="Création de marketplace">
                    <path d="M3 9l1-4h16l1 4" />
                    <path d="M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
                    <path d="M3 9h18" />
                    <path d="M8 13h8" />
                  </MegaSub>
                  <MegaSub href="/creation-crm-sur-mesure/" title="Création de CRM sur-mesure">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </MegaSub>
                  <MegaSub href="/creation-saas-ia/" title="Création de SaaS IA">
                    <path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4v2a4 4 0 0 0 8 0v-2a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4V6a4 4 0 0 0-4-4z" />
                    <path d="M9 10h.01M15 10h.01" />
                    <path d="M9 15c.5.5 1.5 1 3 1s2.5-.5 3-1" />
                  </MegaSub>
                </div>
              </div>
              <Link href="/expertises-branding/" className="mega-item" role="menuitem">
                <span className="mega-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a9 9 0 1 0 0 18 2 2 0 0 0 2-2v-.5a1.5 1.5 0 0 1 1.5-1.5H18a3 3 0 0 0 3-3 9 9 0 0 0-9-11z" />
                    <circle cx="7.5" cy="11" r="1.1" fill="currentColor" stroke="none" />
                    <circle cx="11" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
                    <circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
                    <circle cx="17.5" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <div className="mega-item__body">
                  <strong className="mega-item__title">Branding</strong>
                  <p className="mega-item__desc">Conception d’identité visuelle (Logo, Charte graphique, Bannière…)</p>
                </div>
              </Link>
              <Link href="/expertises-motion/" className="mega-item" role="menuitem">
                <span className="mega-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="7" width="13" height="10" rx="2" />
                    <path d="M15.5 10.5 L21.5 7.5 L21.5 16.5 L15.5 13.5 Z" />
                  </svg>
                </span>
                <div className="mega-item__body">
                  <strong className="mega-item__title">Motion design / Trailer</strong>
                  <p className="mega-item__desc">Animations vidéo et trailers percutants pour donner vie à vos projets</p>
                </div>
              </Link>
            </div>
          </div>
          <Link href="/realisations/" className={'nav__link' + active('realisations')}>
            Réalisations
          </Link>
          <Link href="/contact/" className={'nav__link' + active('contact')}>
            Contact
          </Link>
        </nav>
        <a href={CONTACT.calendly} target="_blank" rel="noopener" className="nav__cta">
          Prendre rdv <Icon name="arrow-up-right-from-square" />
        </a>
        <button
          className={'nav__burger' + (drawerOpen ? ' is-open' : '')}
          id="burger"
          aria-label="Ouvrir le menu"
          aria-expanded={drawerOpen ? 'true' : 'false'}
          onClick={() => setDrawerOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <MobileNav open={drawerOpen} onClose={() => setDrawerOpen(false)} pathname={pathname} />
    </header>
  );
}

function MegaSub({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="mega-sub" role="menuitem">
      <span className="mega-sub__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {children}
        </svg>
      </span>
      <span className="mega-sub__title">{title}</span>
    </Link>
  );
}
