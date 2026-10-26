import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactDOM from 'react-dom';
import Breadcrumb from '@/components/Breadcrumb';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import ArticleToc from '@/components/blog/ArticleToc';
import BlogCard from '@/components/blog/BlogCard';
import { SIZES } from '@/lib/sizes';
import { frDate, getAllPosts, getPost, type Post } from '@/lib/blog';
import { blogPosting, faqFromHtml, themeSchemas, websiteGraph, type Crumb } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { CONTACT, SOCIAL, abs } from '@/lib/site';
import { buildToc } from '@/lib/toc';
import '@/styles/blog-api.css';
import '@/styles/blog-outil.css';

/* Article de blog (single.php) : articles de l'outil de rédaction, du dépôt et publiés par n8n. */

/* Les articles publiés après le build sont générés à leur première visite, puis à chaque
   publication (revalidatePath / revalidateTag) ; 60 s : filet si une source manquait au build. */
export const revalidate = 60;
export async function generateStaticParams() {
  const posts = await getAllPosts();
  // Next exige au moins un paramètre
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: '__aucun-article' }];
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({
    path: post.path,
    title: post.seoTitle,
    description: post.description,
    ogType: 'article',
    image: post.image ? abs(post.image.src) : undefined,
    imageAlt: post.image?.alt,
    imageWidth: post.image?.width,
    imageHeight: post.image?.height,
    publishedTime: post.date,
    modifiedTime: post.modified,
    readingMinutes: post.rankMathMinutes,
    author: post.remote?.author?.name,
    languages: post.remote?.languages,
  });
}

const DAY = 86_400_000;
const FOUNDER = 'Benjamin Dayan';

/* Encadré auteur (signal E-E-A-T, lien vers la page du fondateur), placé en fin d'article. */
const AUTHOR_BOX = `<aside class="article-author"><img src="/images/benjamin.webp" alt="Benjamin Dayan, fondateur de Kameo" width="72" height="72" loading="lazy" class="article-author__img"/><div class="article-author__body"><p class="article-author__name"><a href="/benjamin-dayan/" rel="author">Benjamin Dayan</a></p><p class="article-author__role">Fondateur de Kameo, agence web au 9 rue des Colonnes à Paris 2e. Il conçoit des sites WordPress sur-mesure et des applications métier depuis 2023.</p><p class="article-author__links"><a href="/benjamin-dayan/">Son parcours</a> <span aria-hidden="true">·</span> <a href="${SOCIAL.founderLinkedin}" target="_blank" rel="noopener me">LinkedIn</a></p></div></aside>`;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const isFounder = (name?: string | null) => !name || name.trim().toLowerCase() === FOUNDER.toLowerCase();
const plain = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').toLowerCase();

/* Article de l'outil : encadré auteur à partir de son auteur (celui du fondateur s'il s'agit de lui). */
function remoteAuthorBox(post: Post): string {
  const a = post.remote?.author;
  if (!a || isFounder(a.name)) return AUTHOR_BOX;
  const initials = a.name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  return `<aside class="article-author"><span class="article-author__initials" aria-hidden="true">${esc(initials)}</span><div class="article-author__body"><p class="article-author__name">${esc(a.name)}</p>${a.bio ? `<p class="article-author__role">${esc(a.bio)}</p>` : ''}</div></aside>`;
}

/* Points clés de l'outil, en tête d'article, sauf s'ils figurent déjà dans le corps. */
function takeawaysBox(post: Post): string {
  const items = post.remote?.keyTakeaways ?? [];
  if (!items.length) return '';
  const body = plain(post.html);
  if (items.some((t) => body.includes(plain(t).trim().slice(0, 60)))) return '';
  return `<aside class="article-takeaways"><p class="article-takeaways__title">À retenir</p><ul>${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></aside>`;
}

/* Types schema.org présents dans les données structurées de l'outil (@graph compris). */
function ldTypes(objs: Record<string, unknown>[]): Set<string> {
  const out = new Set<string>();
  const visit = (o: unknown) => {
    if (!o || typeof o !== 'object') return;
    const t = (o as Record<string, unknown>)['@type'];
    for (const v of Array.isArray(t) ? t : [t]) if (typeof v === 'string') out.add(v);
    const g = (o as Record<string, unknown>)['@graph'];
    if (Array.isArray(g)) g.forEach(visit);
  };
  objs.forEach(visit);
  return out;
}

export default async function ArticlePage({ params }: Props) {
  const post = await getPost((await params).slug);
  if (!post) notFound();
  const remote = post.source === 'outil' ? post.remote : undefined;
  if (post.image)
    ReactDOM.preload(post.image.src, {
      as: 'image',
      fetchPriority: 'high',
      ...(post.image.srcset ? { imageSrcSet: post.image.srcset, imageSizes: SIZES.featured } : {}),
    });

  const { html, items } = buildToc(post.html);
  const updated = new Date(post.modified).getTime() - new Date(post.date).getTime() > DAY;
  const crumbs: Crumb[] = [
    { name: 'Accueil', path: '/' },
    { name: 'Blog', path: '/blog/' },
    { name: post.title, path: post.path },
  ];
  // les plus récents, ceux de la même catégorie d'abord (articles de l'outil et de n8n)
  const others = (await getAllPosts()).filter((p) => p.slug !== post.slug);
  const sameCategory = (p: (typeof others)[number]) => !!post.category && p.category === post.category;
  const related = [...others.filter(sameCategory), ...others.filter((p) => !sameCategory(p))].slice(0, 3);

  const author = remote?.author;
  const byFounder = isFounder(author?.name);
  const content = remote ? takeawaysBox(post) + html + remoteAuthorBox(post) : html + AUTHOR_BOX;
  const bodyClass = remote ? 'article-body article-body--outil' : post.source === 'api' ? 'article-body article-body--api' : 'article-body';

  // Données structurées : celles de l'outil telles quelles (article, FAQ…), complétées par les
  // entités du site (fondateur, organisation, page) et, s'il en manque, par celles du site.
  const types = ldTypes(remote?.jsonLd ?? []);
  const hasArticle = ['BlogPosting', 'Article', 'NewsArticle', 'TechArticle'].some((t) => types.has(t));
  const faq = remote && types.has('FAQPage') ? null : faqFromHtml(post.html, post.path);
  const article = blogPosting({
    path: post.path,
    title: post.title,
    description: post.excerpt,
    image: post.image?.src,
    datePublished: post.date,
    dateModified: post.modified,
    wordCount: post.wordCount,
  });

  return (
    <>
      <Breadcrumb items={crumbs} />
      <main id="main">
        <div className="container">
          <Link href="/blog/" className="article-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 3L5 8l5 5" />
            </svg>
            Retour au blog{' '}
          </Link>
          {post.image && (
            <div className={remote?.imageCredit ? 'article-featured article-featured--credited' : 'article-featured'}>
              <img
                src={post.image.src}
                srcSet={post.image.srcset}
                sizes={post.image.srcset ? SIZES.featured : undefined}
                width={post.image.width}
                height={post.image.height}
                alt={remote ? post.image.alt || post.title : post.title}
                className="attachment-full size-full wp-post-image"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
            </div>
          )}
          {/* crédit sous l'image : .article-featured recadre son contenu (overflow hidden) */}
          {post.image && remote?.imageCredit && <p className="article-featured-credit">{remote.imageCredit}</p>}
          <header className="article-header">
            <div className="article-header__meta">
              {byFounder ? (
                <Link href="/benjamin-dayan/" className="article-byline" rel="author">
                  <img src="/images/benjamin.webp" alt="" width="28" height="28" loading="lazy" className="article-byline__img" aria-hidden="true" />
                  <span className="article-byline__name">{FOUNDER}</span>
                </Link>
              ) : (
                <span className="article-byline">
                  <span className="article-byline__name">{author!.name}</span>
                </span>
              )}
              <span className="article-header__meta-dot" />
              <span>
                {updated ? (
                  <>
                    Mis à jour le <time dateTime={post.modified}>{frDate(post.modified)}</time>
                  </>
                ) : (
                  <time dateTime={post.date}>{frDate(post.date)}</time>
                )}
              </span>
              <span className="article-header__meta-dot" />
              <span>{post.readingMinutes} min de lecture</span>
            </div>
            <h1 className="article-header__title">{post.title}</h1>
          </header>
        </div>
        <div className="container">
          <div className="article-layout">
            {/* Le contenu est rendu directement dans .article-body : main.css le cible par
                sélecteurs enfants (.article-body > p, > * + *), un conteneur intermédiaire les casserait. */}
            <article className={bodyClass} id="article-content" dangerouslySetInnerHTML={{ __html: content }} />
            <ArticleToc items={items} />
          </div>
          <div className="article-cta">
            <span className="article-cta__eyebrow">Prendre un rendez-vous</span>
            <h2 className="article-cta__title">
              Vous cherchez l’agence <br />
              qu’il vous faut&nbsp;?
            </h2>
            <p className="article-cta__text">
              Discutons de votre projet lors d’un appel découverte gratuit de 30 minutes. Pas de jargon, pas de pression, juste des
              conseils honnêtes.
            </p>
            <a href={CONTACT.calendly} target="_blank" rel="noopener" className="btn btn--primary">
              Réserver un appel gratuit&nbsp;
              <Icon name="arrow-right" />
            </a>
          </div>
        </div>
        {related.length > 0 && (
          <section className="article-recommended">
            <div className="container">
              <div className="article-recommended__head">
                <h2 className="article-recommended__title">Articles recommandés</h2>
                <Link href="/blog/" className="article-recommended__link">
                  Voir tous les articles <Icon name="arrow-right" />
                </Link>
              </div>
              <div className="article-recommended__grid">
                {related.map((p) => (
                  <BlogCard post={p} key={p.slug} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <JsonLd
        data={[
          ...themeSchemas({
            path: post.path,
            crumbs: types.has('BreadcrumbList') ? null : crumbs,
            extra: remote && hasArticle ? [] : [article],
          }),
          ...(remote?.jsonLd ?? []),
          ...(faq ? [faq] : []),
          websiteGraph({
            path: post.path,
            title: post.seoTitle,
            published: post.date,
            modified: post.modified,
            image: post.image
              ? { url: post.image.src, width: post.image.width, height: post.image.height, caption: post.image.alt }
              : undefined,
          }),
        ]}
      />
    </>
  );
}
