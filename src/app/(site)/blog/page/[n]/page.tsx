import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogListing, { BLOG_DESCRIPTION, BLOG_TITLE } from '@/components/blog/BlogListing';
import { pageCount } from '@/lib/blog';
import { pageMetadata } from '@/lib/seo';

/* Pages 2 et suivantes : canonical auto-référente ; au-delà de la dernière page, vrai 404. */
export const dynamicParams = false;
export function generateStaticParams() {
  const total = pageCount();
  // Next exige au moins un paramètre : sans 2e page, on génère une page qui renverra 404
  return total < 2 ? [{ n: '2' }] : Array.from({ length: total - 1 }, (_, i) => ({ n: String(i + 2) }));
}

type Props = { params: Promise<{ n: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = Number((await params).n);
  return pageMetadata({ path: `/blog/page/${n}/`, title: `${BLOG_TITLE} - Page ${n}`, description: BLOG_DESCRIPTION });
}

export default async function BlogPaged({ params }: Props) {
  const n = Number((await params).n);
  if (!Number.isInteger(n) || n < 2 || n > pageCount()) notFound();
  return <BlogListing page={n} />;
}
