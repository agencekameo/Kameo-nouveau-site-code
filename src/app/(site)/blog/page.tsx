import type { Metadata } from 'next';
import BlogListing, { BLOG_DESCRIPTION, BLOG_TITLE } from '@/components/blog/BlogListing';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({ path: '/blog/', title: BLOG_TITLE, description: BLOG_DESCRIPTION });

/* Régénérée à chaque publication n8n (revalidatePath) ; 60 s : filet si la base manquait au build. */
export const revalidate = 60;

export default function BlogPage() {
  return <BlogListing page={1} />;
}
