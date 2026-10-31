import Link from 'next/link';
import { prestations, type Realisation } from '@/content/realisations';
import { trimWords } from '@/lib/text';

const Arrow = () => (
  <span className="rcard__btn" aria-hidden="true">
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9L9 2M9 2H4M9 2V7" />
    </svg>
  </span>
);

/** Carte projet. `detailed` : version de la grille /realisations/ (prestation, technologies + résumé). */
export default function RealisationCard({ r, detailed = false }: { r: Realisation; detailed?: boolean }) {
  return (
    <article className="rcard">
      <Link href={`/realisations/${r.slug}/`} className="rcard__link">
        <div className="rcard__media">
          {r.hero && <img src={r.hero.src} alt={r.title} loading="lazy" width={r.hero.width} height={r.hero.height} />}
        </div>
        <div className="rcard__foot">
          {detailed ? (
            <div className="rcard__head">
              <p className="rcard__title">{r.title}</p>
              {r.service && <p className="rcard__service">{prestations(r).join(', ')}</p>}
              {r.technologies && r.technologies.length > 0 && <p className="rcard__tech">{r.technologies.join(' · ')}</p>}
            </div>
          ) : (
            <p className="rcard__title">{r.title}</p>
          )}
          <Arrow />
        </div>
        {detailed && r.description && <p className="rcard__desc">{trimWords(r.description, 18, '…')}</p>}
      </Link>
    </article>
  );
}
