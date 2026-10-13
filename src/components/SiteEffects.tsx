'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ICON_VIEWBOX } from '@/lib/icons';

/*
 * Comportements globaux du thème (js/main.js), relancés à chaque page :
 * accordéon FAQ, vidéo du hero, pastille « Voir le projet », frise du process,
 * apparition au scroll, encart publicitaire des articles.
 * Le menu (Header/MobileNav), les marquees (dupliqués au rendu) et le
 * formulaire de contact (ContactForm) sont des composants dédiés.
 */

type Cleanup = () => void;

function faqAccordion(): Cleanup {
  const items = Array.from(document.querySelectorAll<HTMLDetailsElement>('.expertise-faq__list .expertise-faq__item'));
  const onToggle = (e: Event) => {
    const item = e.currentTarget as HTMLDetailsElement;
    if (!item.open || !item.parentElement) return;
    item.parentElement.querySelectorAll<HTMLDetailsElement>('.expertise-faq__item[open]').forEach((o) => {
      if (o !== item) o.open = false;
    });
  };
  items.forEach((i) => i.addEventListener('toggle', onToggle));
  return () => items.forEach((i) => i.removeEventListener('toggle', onToggle));
}

function heroVideo(): Cleanup {
  const video = document.querySelector<HTMLVideoElement>('.hero-video__media');
  if (!video) return () => {};
  const playBtn = document.querySelector<HTMLButtonElement>('.hero-video__btn[data-action="play"]');
  const muteBtn = document.querySelector<HTMLButtonElement>('.hero-video__btn[data-action="mute"]');
  const scrub = document.querySelector<HTMLInputElement>('.hero-video__scrub');
  const offs: Cleanup[] = [];
  const on = <T extends EventTarget>(el: T | null, ev: string, fn: EventListener, opts?: AddEventListenerOptions) => {
    if (!el) return;
    el.addEventListener(ev, fn, opts);
    offs.push(() => el.removeEventListener(ev, fn, opts));
  };

  // Chargement différé : la source n'est posée qu'au dernier moment (poster = LCP).
  // v3 — une vidéo déjà dotée de sa source (landing page) est « armée » d'emblée : en v2,
  // le premier clic sur Lecture ne faisait rien.
  let armed = !video.hasAttribute('data-src');
  const load = (play: boolean) => {
    if (armed) return;
    armed = true;
    const src = video.getAttribute('data-src');
    if (!src) return;
    video.setAttribute('src', src);
    video.removeAttribute('data-src');
    video.load();
    if (play) video.play()?.catch(() => {});
  };

  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection || {};
  const econome = conn.saveData === true || /^([23]g|slow-2g)$/.test(conn.effectiveType || '');
  const lessMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = window.matchMedia('(max-width: 768px)').matches;
  let io: IntersectionObserver | null = null;
  if (!econome && !lessMotion && !small) {
    const frame = document.querySelector('.hero-video__frame') || video;
    io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io?.disconnect();
        load(true);
      }),
      { rootMargin: '200px' },
    );
    io.observe(frame);
  }

  const setIcon = (btn: HTMLButtonElement | null, name: string) => {
    const svg = btn?.querySelector('svg.icon');
    const use = svg?.querySelector('use');
    if (!svg || !use) return;
    use.setAttribute('href', '/icons.svg#i-solid-' + name);
    const vb = ICON_VIEWBOX['i-solid-' + name];
    if (vb) svg.setAttribute('viewBox', vb);
  };
  const setPlayIcon = () => setIcon(playBtn, video.paused ? 'play' : 'pause');
  const setMuteIcon = () => setIcon(muteBtn, video.muted ? 'volume-xmark' : 'volume-high');

  on(playBtn, 'click', () => {
    if (!armed) return load(true);
    if (video.paused) video.play();
    else video.pause();
  });
  on(muteBtn, 'click', () => {
    video.muted = !video.muted;
    setMuteIcon();
  });
  on(video, 'play', setPlayIcon);
  on(video, 'pause', setPlayIcon);
  on(video, 'volumechange', setMuteIcon);
  video.muted = true;
  setPlayIcon();
  setMuteIcon();

  if (scrub) {
    let scrubbing = false;
    const sync = () => {
      if (scrubbing || !isFinite(video.duration) || video.duration === 0) return;
      const pct = (video.currentTime / video.duration) * 100;
      scrub.value = String(pct);
      scrub.style.setProperty('--progress', pct + '%');
    };
    on(video, 'timeupdate', sync);
    on(video, 'loadedmetadata', sync);
    on(scrub, 'input', () => {
      scrubbing = true;
      const pct = parseFloat(scrub.value);
      scrub.style.setProperty('--progress', pct + '%');
      if (isFinite(video.duration)) video.currentTime = (pct / 100) * video.duration;
    });
    on(scrub, 'change', () => (scrubbing = false));
    on(scrub, 'pointerup', () => (scrubbing = false));
  }
  return () => {
    io?.disconnect();
    offs.forEach((f) => f());
  };
}

function carouselPill(): Cleanup {
  const track = document.getElementById('carouselTrack');
  if (!track) return () => {};
  const links = Array.from(track.querySelectorAll<HTMLElement>('.pcard__link'));
  const onMove = (e: MouseEvent) => {
    const link = e.currentTarget as HTMLElement;
    const r = link.getBoundingClientRect();
    link.style.setProperty('--mx', e.clientX - r.left + 'px');
    link.style.setProperty('--my', e.clientY - r.top + 'px');
  };
  links.forEach((l) => l.addEventListener('mousemove', onMove));
  return () => links.forEach((l) => l.removeEventListener('mousemove', onMove));
}

function timeline(): Cleanup {
  const tl = document.getElementById('timeline');
  const offs: Cleanup[] = [];
  if (tl) {
    const items = Array.from(tl.querySelectorAll<HTMLElement>('.tl-item'));
    const update = () => {
      const rect = tl.getBoundingClientRect();
      const anchor = window.innerHeight * 0.5;
      const progress = Math.max(0, Math.min(1, (anchor - rect.top) / rect.height));
      tl.style.setProperty('--progress', progress * 100 + '%');
      items.forEach((it) => {
        const m = it.querySelector('.tl-marker');
        if (!m) return;
        const mr = m.getBoundingClientRect();
        it.classList.toggle('is-active', mr.top + mr.height / 2 <= anchor);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    offs.push(() => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    });
  }
  const bodies = document.querySelectorAll('.tl-body');
  if (bodies.length) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.2, rootMargin: '0px 0px -15% 0px' },
    );
    bodies.forEach((b) => io.observe(b));
    offs.push(() => io.disconnect());
  }
  return () => offs.forEach((f) => f());
}

const REVEAL = [
  '.reviews', '.slots', '.hero__eyebrow', '.hero__title', '.hero__description', '.hero__actions', '.hero-video__frame',
  '.pcard', '.logos__eyebrow', '.logos__track', '.impact__head', '.stat', '.bento__head', '.bento__card', '.process__head', '.step',
  '.about__head', '.about__body', '.about__text', '.about__media', '.values__head', '.values__card', '.story__title',
  '.story__paragraph', '.story__intro', '.team__head', '.team__card', '.team__head-title', '.team__head-desc',
  '.comparison__head', '.comp-card', '.feature__head', '.feature', '.features__head', '.process__step', '.expertise__head',
  '.expertise__card', '.testimonial', '.testimonial__quote', '.testimonial__author', '.real-hero__inner', '.rcard',
  '.contact__info', '.contact__form-col', '.contact__title', '.contact__desc', '.cinfo__item', '.blog-hero__title',
  '.blog-hero__desc', '.bcard', '.blog-pagination', '.article-header', '.article-featured', '.article-body > p',
  '.article-body > h2', '.article-body > h3', '.article-body > ul', '.article-body > ol', '.article-recommended__head',
  '.article-recommended__link', '.article-cta', '.article-tip', '.article-toc', '.proj-card', '.proj-meta__item',
  '.proj-section-stack__text', '.proj-section-stack__img', '.proj-quote', '.proj-fullimg', '.proj-other__head',
  '.proj-other__grid > *', '.proj-page-cta', '.section-head', '.page-hero__inner', '.cta__card', '.cta__content', '.faq-item',
].join(', ');
const HERO_STAGGER = ['.reviews', '.hero__eyebrow', '.hero__title', '.hero__description', '.slots', '.hero__actions'];
const CARD_STAGGER = [
  '.bento__card', '.pcard', '.stat', '.step', '.bento__head', '.impact__head', '.process__head', '.bcard', '.rcard',
  '.team__card', '.feature', '.values__card', '.comp-card', '.cinfo__item', '.proj-meta__item', '.proj-other__grid > *',
].join(', ');

function reveal(pathname: string): Cleanup {
  const last = (pathname.split('/').filter(Boolean).pop() || '').toLowerCase();
  if (last === 'mentions-legales' || last === 'politique-de-confidentialite') return () => {};
  const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL));
  if (!targets.length) return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  targets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .65s cubic-bezier(.16,1,.3,1), transform .65s cubic-bezier(.16,1,.3,1)';
    el.style.willChange = 'opacity, transform';
  });
  HERO_STAGGER.forEach((sel, i) => {
    const el = document.querySelector<HTMLElement>(sel);
    if (el) el.style.transitionDelay = i * 90 + 'ms';
  });
  document.querySelectorAll<HTMLElement>(CARD_STAGGER).forEach((el) => {
    if (!el.parentElement) return;
    const i = Array.from(el.parentElement.children).indexOf(el);
    if (i > 0) el.style.transitionDelay = Math.min(i * 80, 320) + 'ms';
  });
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        const t = e.target as HTMLElement;
        t.style.opacity = '1';
        t.style.transform = 'translateY(0)';
        io.unobserve(t);
      }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  targets.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

function stickyAd(): Cleanup {
  const KEY = 'kameoStickyAdClosedAt';
  const TTL = 24 * 60 * 60 * 1000;
  const offs: Cleanup[] = [];
  document.querySelectorAll<HTMLElement>('.kameo-sticky-ad').forEach((ad) => {
    try {
      const at = parseInt(localStorage.getItem(KEY) || '0', 10);
      if (at && Date.now() - at < TTL) {
        ad.classList.add('is-closed');
        return;
      }
    } catch {}
    const btn = ad.querySelector<HTMLElement>('.kameo-ad-close');
    if (!btn) return;
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0');
    btn.setAttribute('aria-label', 'Fermer la publicité');
    const close = () => {
      ad.classList.add('is-closed');
      try {
        localStorage.setItem(KEY, String(Date.now()));
      } catch {}
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        close();
      }
    };
    btn.addEventListener('click', close);
    btn.addEventListener('keydown', onKey);
    offs.push(() => {
      btn.removeEventListener('click', close);
      btn.removeEventListener('keydown', onKey);
    });
  });
  return () => offs.forEach((f) => f());
}

export default function SiteEffects() {
  const pathname = usePathname() || '/';
  useEffect(() => {
    const cleanups = [faqAccordion(), heroVideo(), carouselPill(), timeline(), reveal(pathname), stickyAd()];
    return () => cleanups.forEach((c) => c());
  }, [pathname]);
  return null;
}
