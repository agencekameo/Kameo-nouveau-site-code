import type { Metadata } from 'next';
import { pageInfo } from '@/content/pages';
import { SITE_NAME, abs } from './site';

/**
 * Métadonnées d'une page, au format qu'émettait Rank Math avec les filtres du
 * thème (titre et description curatés, canonical auto-référente sauf en noindex,
 * og:image par défaut og-image.jpg, og:type « article » pour les seuls articles,
 * flux RSS du blog annoncé sur toutes les pages).
 */
export type PageSeo = {
  path: string;
  title: string;
  description?: string;
  noindex?: boolean;
  ogType?: 'website' | 'article';
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  publishedTime?: string;
  modifiedTime?: string;
  /** Temps de lecture des articles (twitter:label2 de Rank Math). */
  readingMinutes?: number;
  /** Auteur des articles (twitter:data1), Benjamin Dayan par défaut. */
  author?: string;
  /** hreflang → URL absolue (articles de l'outil de rédaction : langue de l'article et x-default). */
  languages?: Record<string, string>;
  /** Validation de la propriété Search Console (page d'accueil uniquement, comme sous WordPress). */
  googleVerification?: string;
};

export const DEFAULT_OG_IMAGE = abs('/images/og-image.jpg');
const DEFAULT_OG_SIZE = { width: 1200, height: 675 };

const RSS = { 'application/rss+xml': [{ url: '/feed/', title: 'Blog Kameo' }] };

const mime = (url: string) =>
  /\.png$/i.test(url) ? 'image/png' : /\.webp$/i.test(url) ? 'image/webp' : /\.jpe?g$/i.test(url) ? 'image/jpeg' : undefined;

export function pageMetadata(seo: PageSeo): Metadata {
  const url = abs(seo.path);
  const info = pageInfo(seo.path);
  const image = seo.image ?? DEFAULT_OG_IMAGE;
  const size = seo.imageWidth && seo.imageHeight ? { width: seo.imageWidth, height: seo.imageHeight } : image === DEFAULT_OG_IMAGE ? DEFAULT_OG_SIZE : {};
  const isArticle = seo.ogType === 'article';
  const published = seo.publishedTime ?? info?.published;
  const modified = seo.modifiedTime ?? info?.modified;
  return {
    title: { absolute: seo.title },
    description: seo.description || undefined,
    // Rank Math ne publie pas de canonical sur une page en noindex
    alternates: { ...(seo.noindex ? {} : { canonical: url }), ...(seo.languages ? { languages: seo.languages } : {}), types: RSS },
    robots: seo.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-snippet': -1, 'max-video-preview': -1, 'max-image-preview': 'large' },
    openGraph: {
      locale: 'fr_FR',
      type: isArticle ? 'article' : 'website',
      title: seo.title,
      description: seo.description || undefined,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, secureUrl: image, ...size, alt: seo.imageAlt ?? info?.label, type: mime(image) }],
      ...(isArticle && published
        ? { publishedTime: published, ...(modified && modified !== published ? { modifiedTime: modified } : {}) }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description || undefined,
      images: [image],
    },
    ...(seo.googleVerification ? { verification: { google: seo.googleVerification } } : {}),
    ...(isArticle
      ? {
          other: {
            'twitter:label1': 'Écrit par',
            'twitter:data1': seo.author || 'Benjamin Dayan',
            ...(seo.readingMinutes
              ? { 'twitter:label2': 'Temps de lecture', 'twitter:data2': `${seo.readingMinutes} minute${seo.readingMinutes > 1 ? 's' : ''}` }
              : {}),
          },
        }
      : {}),
  };
}
