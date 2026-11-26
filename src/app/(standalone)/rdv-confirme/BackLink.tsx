'use client';

import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';

/*
 * Lien « Retour » de /rdv-confirme/ : vers la landing d'où vient la réservation. CalendlyModal redirige ici par
 * window.location.assign depuis la landing, donc le referrer est la landing. Par défaut (rendu serveur, referrer
 * absent) : /appel-strategique/.
 */
export default function BackLink({ className, children }: { className?: string; children: ReactNode }) {
  const [href, setHref] = useState('/appel-strategique/');
  useEffect(() => {
    if (document.referrer.includes('/visibilite-ia/')) setHref('/visibilite-ia/');
  }, []);
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
