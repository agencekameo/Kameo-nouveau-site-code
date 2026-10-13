import type { Metadata } from 'next';
import { SITE_NAME, abs } from './site';

/**
 * Métadonnées d'une page, au format qu'émettait Rank Math avec les filtres du
 * thème (titre et description curatés, canonical auto-référente, og:image par
 * défaut og-image.jpg, og:type « article » pour les seuls articles de blog).
 */
export type PageSeo = {
  path: string;
  title: string;
  description?: string;
  noindex?: boolean;
  ogType?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

export const DEFAULT_OG_IMAGE = abs('/images/og-image.jpg');

export function pageMetadata(seo: PageSeo): Metadata {
  const url = abs(seo.path);
  const image = seo.image ?? DEFAULT_OG_IMAGE;
  return {
    title: { absolute: seo.title },
    description: seo.description || undefined,
    alternates: { canonical: url },
    robots: seo.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-snippet': -1, 'max-video-preview': -1, 'max-image-preview': 'large' },
    openGraph: {
      locale: 'fr_FR',
      type: seo.ogType ?? 'website',
      title: seo.title,
      description: seo.description || undefined,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, ...(image === DEFAULT_OG_IMAGE ? { width: 1200, height: 630 } : {}) }],
      ...(seo.ogType === 'article' && seo.publishedTime
        ? { publishedTime: seo.publishedTime, modifiedTime: seo.modifiedTime }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description || undefined,
      images: [image],
    },
  };
}
