import Link from 'next/link';

/*
 * Pagination du blog.
 * v3 — la v2 utilisait paginate_links( type => list ) : une <ul> sans style dans un
 * conteneur flex, si bien que les numéros s'empilaient verticalement et que la page
 * courante n'avait pas d'état actif. On rend ici les classes prévues par main.css
 * (.blog-pagination__btn, .is-active, --icon, __sep). Mêmes URLs : /blog/page/N/.
 */
const href = (n: number) => (n === 1 ? '/blog/' : `/blog/page/${n}/`);

function pages(current: number, total: number): (number | '…')[] {
  // end_size 1, mid_size 2 (valeurs par défaut de paginate_links)
  const keep = new Set<number>([1, total]);
  for (let i = current - 2; i <= current + 2; i++) if (i >= 1 && i <= total) keep.add(i);
  const out: (number | '…')[] = [];
  let last = 0;
  for (const n of [...keep].sort((a, b) => a - b)) {
    if (n - last > 1) out.push('…');
    out.push(n);
    last = n;
  }
  return out;
}

export default function Pagination({ current, total }: { current: number; total: number }) {
  // Le conteneur est rendu même avec une seule page : son padding fait l'espacement avant le pied de page
  if (total < 2) return <nav className="blog-pagination" aria-label="Navigation entre les pages" />;
  return (
    <nav className="blog-pagination" aria-label="Navigation entre les pages">
      {current > 1 && (
        <Link className="blog-pagination__btn blog-pagination__btn--icon" href={href(current - 1)} rel="prev" aria-label="Page précédente">
          ‹
        </Link>
      )}
      {pages(current, total).map((n, i) =>
        n === '…' ? (
          <span className="blog-pagination__sep" key={'s' + i}>
            …
          </span>
        ) : n === current ? (
          <span className="blog-pagination__btn is-active" aria-current="page" key={n}>
            {n}
          </span>
        ) : (
          <Link className="blog-pagination__btn" href={href(n)} key={n}>
            {n}
          </Link>
        ),
      )}
      {current < total && (
        <Link className="blog-pagination__btn blog-pagination__btn--icon" href={href(current + 1)} rel="next" aria-label="Page suivante">
          ›
        </Link>
      )}
    </nav>
  );
}
