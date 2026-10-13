'use client';

import { useEffect } from 'react';

/*
 * Interactions de la landing page (scripts inline de page-lp-rdv-v2.php) :
 * reveal [data-reveal], bouton magnétique, FAQ, cartes Trustpilot cliquables,
 * spotlight, scramble du H1, GSAP (hero cinématique, CTA élastiques),
 * colonnes d'avis infinies, compteur +47.
 *
 * v3 — retiré : l'import du shader WebGL depuis esm.sh (@paper-design/shaders@0.4).
 * Cette version n'existe pas sur npm (dernière publiée : 0.0.x), l'import échouait
 * donc à chaque visite et le repli CSS s'affichait : rendu identique, une requête en moins.
 */

const TP_REVIEWS: Record<string, string> = {
  'Céline Taranto': 'https://fr.trustpilot.com/reviews/69b7d14dbf55648f616329ae',
  'Noella Ngo Hongla': 'https://fr.trustpilot.com/reviews/6984c96e8c84368a7e4e276b',
  'Maud Marie': 'https://fr.trustpilot.com/reviews/65c4f5cf517cfcb055aa6dec',
  'Atelier Songe': 'https://fr.trustpilot.com/reviews/698763ffb7000e584f3decb2',
  'Julien Nava': 'https://fr.trustpilot.com/reviews/65d8bca3f33bfb2a075a9ea6',
  'Celia D.': 'https://fr.trustpilot.com/reviews/698eaef3f8baeb9dbb48672e',
  'Verena Dey': 'https://fr.trustpilot.com/reviews/699db5bba3956c16d29e3b18',
  'Paul Sornicle': 'https://fr.trustpilot.com/reviews/6985b552ce5d03c086ced244',
  'Ilan Ohayon': 'https://fr.trustpilot.com/reviews/65fc8f367c74c7cea65d56fa',
  'Andrea Miranda': 'https://fr.trustpilot.com/reviews/65ef227ec0bd260303d2b7f6',
  'Sophie Mounsi': 'https://fr.trustpilot.com/reviews/66e176cf8a3aad47e01c4fba',
  'Mateo Bertei': 'https://fr.trustpilot.com/reviews/698b108386f077d8eecabad7',
  'Andréa Charvet': 'https://fr.trustpilot.com/reviews/67cf5940f60e1c971a818a81',
  Orel: 'https://fr.trustpilot.com/reviews/66e84381faf16ffd4c65e754',
  'Pontinha Solène': 'https://fr.trustpilot.com/reviews/66dc9551cf10a8fdd539b17f',
  Christophe: 'https://fr.trustpilot.com/reviews/65eae02034651bafa6e5af10',
  Sornicle: 'https://fr.trustpilot.com/reviews/65dedc36624c597f9787cfe4',
};

type Off = () => void;

export default function LandingEffects() {
  useEffect(() => {
    const offs: Off[] = [];
    const on = (el: EventTarget, ev: string, fn: EventListener) => {
      el.addEventListener(ev, fn);
      offs.push(() => el.removeEventListener(ev, fn));
    };
    let alive = true;

    /* Reveal au scroll */
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    offs.push(() => io.disconnect());

    /* Bouton magnétique (CTA de l'en-tête) */
    const mag = document.getElementById('magBtn');
    if (mag) {
      on(mag, 'mousemove', (ev) => {
        const e = ev as MouseEvent;
        const r = mag.getBoundingClientRect();
        mag.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.28}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      });
      on(mag, 'mouseleave', () => {
        mag.style.transform = 'translate(0,0)';
        mag.style.transition = 'transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .25s';
      });
      on(mag, 'mouseenter', () => {
        mag.style.transition = 'transform .12s linear, box-shadow .25s';
      });
    }

    /* Remplissage directionnel du CTA hero */
    const heroCta = document.getElementById('heroCta');
    if (heroCta) {
      on(heroCta, 'mouseenter', (ev) => {
        const e = ev as MouseEvent;
        const r = heroCta.getBoundingClientRect();
        heroCta.style.setProperty('--dir', e.clientX - r.left < r.width / 2 ? '-101%' : '101%');
      });
    }

    /* FAQ : un seul élément ouvert */
    document.querySelectorAll<HTMLDetailsElement>('.lp2-faq__list .lp2-faq__item').forEach((item) => {
      on(item, 'toggle', () => {
        if (!item.open || !item.parentElement) return;
        item.parentElement.querySelectorAll<HTMLDetailsElement>('.lp2-faq__item[open]').forEach((o) => {
          if (o !== item) o.open = false;
        });
      });
    });

    /* Cartes Trustpilot cliquables vers l'avis */
    document.querySelectorAll<HTMLElement>('.lp2-tcard').forEach((card) => {
      const name = card.querySelector('.lp2-tcard__name')?.textContent?.trim();
      const url = name ? TP_REVIEWS[name] : undefined;
      if (!name || !url) return;
      card.style.cursor = 'pointer';
      card.setAttribute('role', 'link');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', 'Voir l’avis de ' + name + ' sur Trustpilot');
      on(card, 'click', () => window.open(url, '_blank', 'noopener'));
      on(card, 'keydown', (ev) => {
        const e = ev as KeyboardEvent;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(url, '_blank', 'noopener');
        }
      });
    });

    /* Spotlight sur les cartes */
    document.querySelectorAll<HTMLElement>('.lp2-spotlight, .lp2-bcard, .lp2-benef__card').forEach((card) => {
      on(card, 'mousemove', (ev) => {
        const e = ev as MouseEvent;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', e.clientX - r.left + 'px');
        card.style.setProperty('--my', e.clientY - r.top + 'px');
      });
    });

    /* Éléments déjà visibles au chargement */
    const t0 = window.setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-visible');
      });
    }, 50);
    offs.push(() => window.clearTimeout(t0));

    /* Spotlight curseur sur le hero */
    const wrap = document.querySelector<HTMLElement>('.lp2-hero-wrap');
    if (wrap) {
      on(wrap, 'mousemove', (ev) => {
        const e = ev as MouseEvent;
        const r = wrap.getBoundingClientRect();
        wrap.style.setProperty('--cursor-x', e.clientX - r.left + 'px');
        wrap.style.setProperty('--cursor-y', e.clientY - r.top + 'px');
      });
      on(wrap, 'mouseleave', () => {
        wrap.style.setProperty('--cursor-x', '-200%');
        wrap.style.setProperty('--cursor-y', '-200%');
      });
    }

    /* Scramble du mot accentué du H1 */
    const accent = document.querySelector<HTMLElement>('.lp2-hero__h1 span');
    if (accent) {
      const finalText = (accent.textContent || '').trim();
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let frame = 0;
      const FRAMES = 38;
      let id = 0;
      const t1 = window.setTimeout(() => {
        id = window.setInterval(() => {
          const revealed = Math.floor((frame / FRAMES) * finalText.length);
          accent.textContent = finalText
            .split('')
            .map((c, i) => (i < revealed ? c : chars[Math.floor(Math.random() * chars.length)]))
            .join('');
          frame++;
          if (frame > FRAMES) {
            accent.textContent = finalText;
            window.clearInterval(id);
          }
        }, 28);
      }, 350);
      offs.push(() => {
        window.clearTimeout(t1);
        window.clearInterval(id);
        accent.textContent = finalText;
      });
    }

    /* GSAP : hero cinématique + CTA élastiques */
    import('gsap').then(async ({ gsap }) => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (!alive) return;
      gsap.registerPlugin(ScrollTrigger);
      const cin = document.querySelector('.lp2-cinematic');
      if (!cin) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.lp2-cin__watermark',
          { y: '18vh', scale: 0.82, opacity: 0 },
          { y: '0vh', scale: 1, opacity: 1, ease: 'power1.out', scrollTrigger: { trigger: cin, start: 'top 85%', end: 'center center', scrub: 1.4 } },
        );
        gsap.fromTo(
          ['#cin-eyebrow', '#cin-h2', '#cin-sub', '#cin-pills'],
          { y: 55, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.13, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: cin, start: 'top 58%', once: true } },
        );
      });
      offs.push(() => ctx.revert());
      document.querySelectorAll<HTMLElement>('.lm-btn').forEach((btn) => {
        on(btn, 'mousemove', (ev) => {
          const e = ev as MouseEvent;
          const r = btn.getBoundingClientRect();
          gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.32, y: (e.clientY - r.top - r.height / 2) * 0.32, ease: 'power2.out', duration: 0.3 });
        });
        on(btn, 'mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, ease: 'elastic.out(1,.4)', duration: 1.0 });
        });
      });
    });

    /* Colonnes d'avis en défilement infini (boucle rAF au pixel près) */
    const rafs: number[] = [];
    document.querySelectorAll<HTMLElement>('.lp2-tscroll__col').forEach((col, k) => {
      const set1 = col.querySelector<HTMLElement>('.lp2-tscroll__set');
      if (!set1) return;
      const durMs = (parseFloat(getComputedStyle(col).getPropertyValue('--dur').trim()) || 20) * 1000;
      let pos = 0;
      let lastTs: number | null = null;
      let paused = false;
      on(col, 'mouseenter', () => (paused = true));
      on(col, 'mouseleave', () => (paused = false));
      const tick = (ts: number) => {
        if (lastTs !== null && !paused) {
          const h = set1.offsetHeight;
          if (h > 0) {
            pos += (h / durMs) * (ts - lastTs);
            if (pos >= h) pos -= h;
            col.style.transform = 'translateY(-' + pos + 'px)';
          }
        }
        lastTs = ts;
        rafs[k] = requestAnimationFrame(tick);
      };
      rafs[k] = requestAnimationFrame(tick);
    });
    offs.push(() => rafs.forEach((r) => cancelAnimationFrame(r)));

    /* Compteur +0 → +47 */
    const counter = document.querySelector<HTMLElement>('.lp2-counter-el');
    if (counter) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          obs.disconnect();
          const target = 47;
          const t = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - t) / 1700, 1);
            counter.textContent = '+' + Math.floor((1 - Math.pow(1 - p, 3)) * target);
            if (p < 1) requestAnimationFrame(step);
            else counter.textContent = '+' + target;
          };
          requestAnimationFrame(step);
        },
        { threshold: 0.6 },
      );
      obs.observe(counter);
      offs.push(() => obs.disconnect());
    }

    /* Vidéo en lecture automatique : React ne sérialise pas l'attribut muted */
    document.querySelectorAll<HTMLVideoElement>('video[autoplay]').forEach((v) => {
      v.muted = true;
      v.play()?.catch(() => {});
    });

    return () => {
      alive = false;
      offs.forEach((f) => f());
    };
  }, []);
  return null;
}
