import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Landing, { metadataLanding } from '../Landing';
import { VARIANTES_METIER, type Variante } from '../variantes';

/*
 * Landing « visibilité IA » par cible de la campagne Meta GEO : /visibilite-ia/auto-ecole/ et /visibilite-ia/ecole/
 * (textes dans variantes.ts). Pages générées à la construction, noindex et hors sitemap ; toute autre adresse : 404.
 */
export const revalidate = 60;
export const dynamicParams = false;

type Props = { params: Promise<{ metier: string }> };

const variante = (metier: string): Variante | undefined => (VARIANTES_METIER as Record<string, Variante | undefined>)[metier];

export function generateStaticParams() {
  return Object.keys(VARIANTES_METIER).map((metier) => ({ metier }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const v = variante((await params).metier);
  return v ? metadataLanding(v) : {};
}

export default async function Page({ params }: Props) {
  const v = variante((await params).metier);
  if (!v) notFound();
  return <Landing v={v} />;
}
