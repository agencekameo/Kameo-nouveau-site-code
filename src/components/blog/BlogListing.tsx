import Breadcrumb from '../Breadcrumb';
import JsonLd from '../JsonLd';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import { getPage, pageCount } from '@/lib/blog';
import { blogSchema, themeSchemas, websiteGraph, type Crumb } from '@/lib/schema';

/* Archive du blog (page-blog.php), page 1 et pages /blog/page/N/. */
export const BLOG_TITLE = 'Blog Kameo : conseils web, branding et SEO';
export const BLOG_DESCRIPTION =
  'Conseils, stratégies et tendances web par l’agence Kameo. Branding, développement, motion design et growth marketing pour PME et startups.';
const CRUMBS: Crumb[] = [
  { name: 'Accueil', path: '/' },
  { name: 'Blog', path: '/blog/' },
];

export default function BlogListing({ page }: { page: number }) {
  const posts = getPage(page);
  const path = page === 1 ? '/blog/' : `/blog/page/${page}/`;
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <main id="main">
        {/* ============ HERO ============ */}
        <section className="blog-hero">
          <div className="container">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Blog <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="blog-hero__title">
              Ressources &amp; conseils <br />
              pour votre business digital{' '}
            </h1>
            <p className="blog-hero__desc">
              Stratégie web, branding, motion design et growth, nos experts partagent leurs meilleures pratiques.
            </p>
          </div>
        </section>
        {/* ============ GRILLE ARTICLES ============ */}
        <section className="blog-grid-section">
          <div className="container">
            {posts.length ? (
              <>
                <div className="blog-grid">
                  {posts.map((p) => (
                    <BlogCard post={p} key={p.slug} />
                  ))}
                </div>
                <Pagination current={page} total={pageCount()} />
              </>
            ) : (
              <p style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--c-muted)' }}>Aucun article publié pour le moment.</p>
            )}
          </div>
        </section>
      </main>
      <JsonLd
        data={[
          ...themeSchemas({ path, crumbs: CRUMBS, extra: [blogSchema()] }),
          websiteGraph({ path, title: BLOG_TITLE }),
        ]}
      />
    </>
  );
}
