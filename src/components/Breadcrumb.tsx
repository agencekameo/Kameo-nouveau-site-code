import Link from 'next/link';
import type { Crumb } from '@/lib/schema';

/** Fil d'Ariane visible, aligné au caractère près sur le BreadcrumbList JSON-LD. */
export default function Breadcrumb({ items }: { items?: Crumb[] | null }) {
  if (!items || items.length < 2) return null;
  const last = items.length - 1;
  return (
    <nav className="breadcrumb" aria-label="Fil d'Ariane">
      <div className="container">
        <ol className="breadcrumb__list">
          {items.map((c, i) => (
            <li className="breadcrumb__item" key={c.path + i}>
              {i === last ? (
                <span className="breadcrumb__current" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link className="breadcrumb__link" href={c.path}>
                    {c.name}
                  </Link>
                  <span className="breadcrumb__sep" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
