'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';
import { CONTACT } from '@/lib/site';

/* Menu mobile en tiroir latéral — port de la section « Menu mobile » de js/main.js.
   Rendu dans <body> (portail) pour échapper au contexte d'empilement de .nav-wrap. */

type Item = { href: string; icon: string; text: string; match?: string[] };
type Sub = { href: string; icon: string; title: string; desc: string; match: string[] };

const MAIN: Item[] = [
  { href: '/', icon: 'fa-house', text: 'Accueil', match: ['index.html', '/', ''] },
  { href: '/notre-agence/', icon: 'fa-building', text: 'Notre agence', match: ['notre-agence'] },
];
const EXPERTISES: Sub[] = [
  { href: '/agence-wordpress-paris/', icon: 'fa-desktop', title: 'Agence WordPress', desc: "Vue d'ensemble de notre offre", match: ['agence-wordpress-paris', 'expertises-web'] },
  { href: '/creation-site-wordpress/', icon: 'fa-file-lines', title: 'Création WordPress', desc: 'Landing, vitrine, e-commerce sur-mesure', match: ['creation-site-wordpress'] },
  { href: '/refonte-wordpress/', icon: 'fa-arrows-rotate', title: 'Refonte WordPress', desc: 'Moderniser sans perdre votre SEO', match: ['refonte-wordpress'] },
  { href: '/maintenance-wordpress/', icon: 'fa-wrench', title: 'Maintenance WordPress', desc: 'Forfaits dès 79 € HT/mois', match: ['maintenance-wordpress'] },
  { href: '/developpement-sur-mesure/', icon: 'fa-code', title: 'Développement sur-mesure', desc: 'E-commerce, marketplace, CRM, SaaS IA', match: ['developpement-sur-mesure'] },
  { href: '/creation-site-ecommerce/', icon: 'fa-cart-shopping', title: 'Création e-commerce', desc: 'WooCommerce, Shopify, headless', match: ['creation-site-ecommerce'] },
  { href: '/creation-marketplace/', icon: 'fa-shop', title: 'Création marketplace', desc: 'Multi-vendeurs, Stripe Connect', match: ['creation-marketplace'] },
  { href: '/creation-crm-sur-mesure/', icon: 'fa-users-gear', title: 'CRM sur-mesure', desc: 'Alternative Salesforce / HubSpot', match: ['creation-crm-sur-mesure'] },
  { href: '/creation-saas-ia/', icon: 'fa-brain', title: 'SaaS avec IA', desc: 'Claude, GPT, RAG, multi-tenant', match: ['creation-saas-ia'] },
  { href: '/expertises-branding/', icon: 'fa-palette', title: 'Branding', desc: 'Logo, Charte graphique…', match: ['expertises-branding'] },
  { href: '/expertises-motion/', icon: 'fa-film', title: 'Motion design', desc: 'Animations & trailers', match: ['expertises-motion'] },
];
const AFTER: Item[] = [
  { href: '/realisations/', icon: 'fa-table-cells', text: 'Réalisations', match: ['realisations'] },
  { href: '/contact/', icon: 'fa-envelope', text: 'Contact', match: ['contact'] },
  { href: '/blog/', icon: 'fa-pen-nib', text: 'Blog', match: ['blog'] },
];
/* Landing page one-page : liste des sections. */
const LP_LINKS: Item[] = [
  { href: '#benefices', icon: 'fa-bolt', text: 'Pourquoi Kameo' },
  { href: '#process', icon: 'fa-list-check', text: 'Notre processus' },
  { href: '#resultats', icon: 'fa-chart-line', text: 'Résultats' },
  { href: '#realisations', icon: 'fa-table-cells', text: 'Réalisations' },
  { href: '#tarifs', icon: 'fa-tag', text: 'Nos offres' },
  { href: '#avis', icon: 'fa-star', text: 'Avis clients' },
  { href: '#faq', icon: 'fa-circle-question', text: 'FAQ' },
  { href: '#rdv', icon: 'fa-envelope', text: 'Contact' },
];

function NavItem({ item, active, lp }: { item: Item; active: boolean; lp: boolean }) {
  const inner = (
    <>
      <span className="mnav__icon">
        <Icon name={item.icon} />
      </span>
      <span className="mnav__text">{item.text}</span>
      <Icon name="chevron-right" className="mnav__arrow" />
    </>
  );
  const className = 'mnav__item' + (active ? ' is-active' : '');
  return lp ? (
    <a href={item.href} className={className}>
      {inner}
    </a>
  ) : (
    <Link href={item.href} className={className}>
      {inner}
    </Link>
  );
}

export default function MobileNav({
  open,
  onClose,
  pathname,
  variant = 'site',
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
  variant?: 'site' | 'lp';
}) {
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<Element | null>(null);
  const lp = variant === 'lp';

  useEffect(() => setMounted(true), []);

  // Focus : bouton fermer à l'ouverture, restitution à la fermeture (WCAG 2.4.3)
  useEffect(() => {
    if (!mounted) return;
    if (open) {
      lastFocused.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      const t = window.setTimeout(() => closeRef.current?.focus(), 50);
      const trap = (e: KeyboardEvent) => {
        if (e.key !== 'Tab' || !navRef.current) return;
        const f = navRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      };
      document.addEventListener('keydown', trap);
      return () => {
        window.clearTimeout(t);
        document.removeEventListener('keydown', trap);
      };
    }
    document.body.style.overflow = '';
    const el = lastFocused.current as HTMLElement | null;
    if (el && typeof el.focus === 'function') el.focus();
    lastFocused.current = null;
  }, [open, mounted]);

  const currentSlug = (pathname.split('/').filter(Boolean).pop() || 'index.html').replace(/\.html$/, '').toLowerCase();
  const isCurrent = useCallback(
    (match?: string[]) => !!match && match.some((m) => m.replace(/\.html$/, '').toLowerCase() === currentSlug),
    [currentSlug],
  );

  if (!mounted) return null;

  const onNavClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a')) onClose();
  };

  return createPortal(
    <>
      <div
        ref={navRef}
        className={'mobile-nav' + (open ? ' is-open' : '')}
        id="mobileNav"
        aria-hidden={open ? undefined : 'true'}
        inert={!open}
        onClick={onNavClick}
      >
        <div className="mobile-nav__header">
          {lp ? (
            <a href="#cin-hero" className="mobile-nav__brand">
              <img src="/images/hero.webp" alt="Kameo" width="400" height="126" />
            </a>
          ) : (
            <Link href="/" className="mobile-nav__brand">
              <img src="/images/hero.webp" alt="Kameo" width="400" height="126" />
            </Link>
          )}
          <button ref={closeRef} type="button" className="mobile-nav__close" aria-label="Fermer le menu" onClick={onClose}>
            <Icon name="xmark" />
          </button>
        </div>
        <div className="mobile-nav__body">
          {(lp ? LP_LINKS : MAIN).map((it) => (
            <NavItem key={it.href} item={it} active={isCurrent(it.match)} lp={lp} />
          ))}
          {!lp && (
            <>
              <div className="mnav__sep" />
              <span className="mnav__label">Expertises</span>
              <div className="mnav__sub">
                {EXPERTISES.map((s) => (
                  <Link key={s.href} href={s.href} className={'mnav__sub-item' + (isCurrent(s.match) ? ' is-active' : '')}>
                    <span className="mnav__sub-icon">
                      <Icon name={s.icon} />
                    </span>
                    <span className="mnav__sub-body">
                      <strong className="mnav__sub-title">{s.title}</strong>
                      <span className="mnav__sub-desc">{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mnav__sep" />
              {AFTER.map((it) => (
                <NavItem key={it.href} item={it} active={isCurrent(it.match)} lp={false} />
              ))}
            </>
          )}
        </div>
        <div className="mobile-nav__footer">
          <a href={CONTACT.calendly} target="_blank" rel="noopener" className="btn btn--primary">
            Prendre rdv&nbsp;
            <Icon name="arrow-right" />
          </a>
        </div>
      </div>
      <div className={'mobile-nav-overlay' + (open ? ' is-open' : '')} onClick={onClose} />
    </>,
    document.body,
  );
}
