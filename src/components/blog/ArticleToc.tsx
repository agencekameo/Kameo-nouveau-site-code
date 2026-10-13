'use client';

import { useEffect, useRef } from 'react';
import type { TocItem } from '@/lib/toc';

/* Sommaire de l'article avec scroll-spy (script inline de single.php). */
export default function ArticleToc({ items }: { items: TocItem[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const heads = items.map((it) => document.getElementById(it.id)).filter(Boolean) as HTMLElement[];
    const links = Array.from(listRef.current?.querySelectorAll<HTMLAnchorElement>('.article-toc__link') || []);
    const onScroll = () => {
      let current = '';
      heads.forEach((h) => {
        if (window.scrollY >= h.offsetTop - 120) current = h.id;
      });
      links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === '#' + current));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  if (!items.length) return null;
  return (
    <aside className="article-sidebar">
      <nav className="article-toc" aria-label="Sommaire">
        <p className="article-toc__title">Sommaire</p>
        <ol className="article-toc__list" id="tocList" ref={listRef}>
          {items.map((it) => (
            <li className={'article-toc__item' + (it.level === 3 ? ' article-toc__item--sub' : '')} key={it.id}>
              <a className="article-toc__link" href={'#' + it.id}>
                {it.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
