import Link from 'next/link';
import Icon from '@/components/Icon';
import { GEO_MIN_MONTHS, GEO_TERMS, euros, type FaqItem, type GeoOffer } from '@/content/geo';
import { CONTACT, abs } from '@/lib/site';

/* Blocs communs aux pages GEO (/agence-geo/, /audit-geo/, /accompagnement-geo/). */

/** Typographie française : espace insécable avant ? ! : ; » et après «, pour qu'ils ne passent jamais seuls à la ligne. */
export const fr = (s: string) => s.replace(/ ([?!:;»])/g, '\u00a0$1').replace(/« /g, '«\u00a0');

const Arrow = () => (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
    <path d="M4 12 L12 4 M6 4 H12 V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Boutons du héros : appel gratuit (Calendly) et ancre vers les offres. */
export function GeoHeroActions({ anchor, anchorLabel, cta = 'Diagnostic express gratuit' }: { anchor: string; anchorLabel: string; cta?: string }) {
  return (
    <div className="page-hero__actions">
      <a href={CONTACT.calendly} target="_blank" rel="noopener" className="page-hero__btn">
        {cta}{' '}
        <span className="page-hero__btn-arrow" aria-hidden="true">
          <Arrow />
        </span>
      </a>
      <a href={anchor} className="page-hero__btn page-hero__btn--secondary">
        {anchorLabel}
      </a>
    </div>
  );
}

/** Les IA interrogées, sous le héros. */
export function GeoEngines({ items }: { items: readonly string[] }) {
  return (
    <ul className="geo-engines" aria-label="IA analysées">
      {items.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
}

/** Carte d'une offre (audit ou accompagnement), prix HT. */
export function GeoOfferCard({ offer, badge, more }: { offer: GeoOffer; badge?: string; more?: { href: string; label: string } }) {
  return (
    <article className={'geo-plan' + (badge ? ' geo-plan--featured' : '')}>
      {badge && (
        <span className="geo-plan__badge">
          <Icon name="star" />
          {badge}
        </span>
      )}
      <h3 className="geo-plan__name">{offer.name}</h3>
      <p className="geo-plan__for">{fr(offer.tagline)}</p>
      <p className="geo-plan__price">
        {euros(offer.price)}
        <small>{offer.monthly ? 'HT / mois' : 'HT'}</small>
      </p>
      <p className="geo-plan__note">{offer.monthly ? `Engagement de ${GEO_MIN_MONTHS} mois minimum` : 'Paiement unique, sans abonnement'}</p>
      <ul className="geo-plan__list">
        {offer.items.map((it) => (
          <li key={it}>{fr(it)}</li>
        ))}
      </ul>
      <a href={CONTACT.calendly} target="_blank" rel="noopener" className="geo-plan__cta">
        <Icon name="calendar-check" />
        {offer.cta}
      </a>
      {more && (
        <Link href={more.href} className="geo-plan__more">
          {more.label} →
        </Link>
      )}
    </article>
  );
}

const TERM_ICONS = ['calendar-check', 'piggy-bank', 'percent'];

/** Conditions : 6 mois minimum, 1 mois offert à l'année, audit déduit. */
export function GeoTerms() {
  return (
    <ul className="geo-terms">
      {GEO_TERMS.map((t, i) => (
        <li key={i}>
          <span className="geo-terms__icon" aria-hidden="true">
            <Icon name={TERM_ICONS[i]} />
          </span>
          <span dangerouslySetInnerHTML={{ __html: fr(t) }} />
        </li>
      ))}
    </ul>
  );
}

/** Bandeau d'appel au milieu de la page. */
export function GeoMidCta({ title, text, href, label }: { title: string; text: string; href: string; label: string }) {
  const external = /^https?:/.test(href);
  const inner = (
    <>
      {label} <Arrow />
    </>
  );
  return (
    <section className="geo-midcta">
      <div className="container">
        <div className="geo-midcta__box">
          <div>
            <h2 className="geo-midcta__title">{fr(title)}</h2>
            <p className="geo-midcta__text">{fr(text)}</p>
          </div>
          {external ? (
            <a href={href} target="_blank" rel="noopener" className="geo-midcta__btn">
              {inner}
            </a>
          ) : (
            <Link href={href} className="geo-midcta__btn">
              {inner}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/** Appel final : rendez-vous gratuit et lien secondaire. */
export function GeoCta({ title, text, secondary }: { title: string; text: string; secondary: { href: string; label: string } }) {
  return (
    <section className="geo-cta">
      <div className="container">
        <div className="geo-cta__box">
          <div className="geo-cta__wrap">
            <h2 className="geo-cta__title">{fr(title)}</h2>
            <p className="geo-cta__text">{fr(text)}</p>
            <div className="geo-cta__actions">
              <a href={CONTACT.calendly} target="_blank" rel="noopener" className="geo-cta__btn geo-cta__btn--primary">
                <Icon name="calendar-check" />
                Réserver mon diagnostic express
              </a>
              <Link href={secondary.href} className="geo-cta__btn geo-cta__btn--secondary">
                {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Chevron = () => (
  <span className="expertise-faq__chevron" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </span>
);

/** FAQ visible ; faqSchema() en tire un FAQPage au mot près. */
export function GeoFaq({ items, title }: { items: FaqItem[]; title: string }) {
  return (
    <section className="expertise-faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 className="expertise-faq__title" id="faq-title">
          {title}
        </h2>
        <div className="expertise-faq__list">
          {items.map((f) => (
            <details className="expertise-faq__item" key={f.q}>
              <summary className="expertise-faq__q">
                {fr(f.q)} <Chevron />
              </summary>
              <div className="expertise-faq__a">
                <p dangerouslySetInnerHTML={{ __html: fr(f.a) }} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const plain = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export function faqSchema(items: FaqItem[], path: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': abs(path) + '#faq',
    inLanguage: 'fr-FR',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
  };
}
