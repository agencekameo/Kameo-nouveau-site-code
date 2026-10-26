import Link from 'next/link';
import Icon from '../Icon';
import { categoryLabel, frDate, type PostSummary } from '@/lib/blog';
import { SIZES } from '@/lib/sizes';
import { trimWords } from '@/lib/text';

/* Carte article (page-blog.php et « Articles recommandés » de single.php). */
export default function BlogCard({ post }: { post: PostSummary }) {
  const img = post.image;
  const category = categoryLabel(post);
  return (
    <article className="bcard">
      <Link href={post.path} className="bcard__link">
        <div className="bcard__media">
          {img ? (
            <img src={img.src} srcSet={img.srcset} sizes={img.srcset ? SIZES.card : undefined} alt={img.alt || post.title} loading="lazy" width={img.width} height={img.height} />
          ) : (
            <img src="/images/og-image.jpg" alt={post.title} loading="lazy" width="1200" height="675" />
          )}
        </div>
        <div className="bcard__body">
          {category && <span className="bcard__cat">{category}</span>}
          <p className="bcard__title">{post.title}</p>
          <p className="bcard__excerpt">{trimWords(post.excerpt, 18, '…')}</p>
          <span className="bcard__readmore">
            Lire la suite <Icon name="arrow-right" />
          </span>
          <div className="bcard__meta">
            <span>{frDate(post.date)}</span>
            <span className="bcard__meta-dot" />
            <span>{post.readingMinutes} min de lecture</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
