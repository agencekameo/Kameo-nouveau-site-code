'use client';

import { useEffect, useRef } from 'react';

/*
 * Badge d'avis La Fabrique du Net (pied de page, toutes les pages).
 * Leur script dessine le badge (SVG + liens vers la fiche Kameo et l'annuaire) juste avant sa propre
 * balise, sans cookie ni requête. Il est ajouté après l'hydratation, dans un conteneur que React ne
 * modifie plus, et seulement à l'approche du pied de page : rien à télécharger pour qui ne descend pas.
 * La place est réservée (230 × 46 px, taille « md ») : aucun décalage de mise en page à l'affichage.
 * Note et nombre d'avis sont fournis par le script, mis à jour par La Fabrique du Net.
 */
const SRC = 'https://www.lafabriquedunet.fr/agences/badge/kameo/badge.js?color=dark';

export default function LaFabriqueBadge() {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const load = () => {
      if (el.querySelector('script')) return;
      const s = document.createElement('script');
      s.src = SRC;
      s.async = true;
      el.appendChild(s);
    };
    if (!('IntersectionObserver' in window)) return load();
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          load();
        }
      },
      { rootMargin: '600px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={box} className="footer__lfdn" />;
}
