import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import css from '@/styles/pages/dev-silo';

const PATH = '/creation-site-ecommerce/';
const TITLE = 'Création site e-commerce Paris : WooCommerce & Shopify | Kameo';
const DESCRIPTION =
  'Création de site e-commerce sur-mesure à Paris : WooCommerce, Shopify ou headless. Tunnel optimisé conversion, SEO natif. Livraison en 1 mois.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Développement sur-mesure', path: '/developpement-sur-mesure/' },
  { name: 'Création e-commerce', path: '/creation-site-ecommerce/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function CreationSiteEcommercePage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main id="main">
        <div className="silo-back">
          <div className="container">
            <Link href="/developpement-sur-mesure/" className="silo-back__link">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 4L6 8l4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Retour au développement sur-mesure{' '}
            </Link>
          </div>
        </div>
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Création e-commerce <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Création de site e-commerce sur-mesure à Paris : <br />
              <span className="page-hero__title-muted">Shopify, WooCommerce, Prestashop ou headless</span>
            </h1>
            <p className="page-hero__text">
              Vous voulez une boutique en ligne qui convertit, pas un thème Shopify générique clone de vos concurrents.
              Kameo conçoit votre e-commerce en partant de votre tunnel de vente, de vos règles métier et de votre
              stratégie SEO. Devis détaillé sous 24 h.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                <strong>Tunnel 3 clics</strong> optimisé conversion
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                SEO baked-in <strong>dès le sprint 1</strong>
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Livraison en <strong>1 mois</strong>
              </span>
            </div>
            <div className="page-hero__actions">
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="page-hero__btn"
              >
                Réserver mon brief gratuit{' '}
                <span className="page-hero__btn-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                    <path
                      d="M4 12 L12 4 M6 4 H12 V10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <a href="#stack" className="page-hero__btn page-hero__btn--secondary">
                Voir les stacks
              </a>
            </div>
          </div>
        </section>
        <section className="ccrea-why">
          <div className="container">
            <header className="ccrea-why__head">
              <span className="ccrea-why__eyebrow">Pourquoi Kameo pour votre e-commerce</span>
              <h2 className="ccrea-why__title">
                Un e-commerce pensé pour convertir, pas juste pour afficher un catalogue
              </h2>
            </header>
            <div className="ccrea-why__grid">
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-bolt" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Performance obsessionnelle</h3>
                <p className="ccrea-why__text">
                  Core Web Vitals 90+, LCP sous 1,5 s, images WebP/AVIF, CDN, lazy-loading intelligent. Une page
                  catalogue rapide = 20 % de conversion en plus, sourced Google.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">SEO baked-in dès sprint 1</h3>
                <p className="ccrea-why__text">
                  Audit mots-clés produits + catégories, architecture URL en silos, schema.org Product + Offer +
                  AggregateRating, fiches produits enrichies. Votre catalogue arrive prêt à ranker.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-cart-shopping" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Tunnel optimisé conversion</h3>
                <p className="ccrea-why__text">
                  Panier persistant, checkout en une page, indicateurs de progression, upsells intelligents contextuels,
                  relances abandon panier email/SMS. Chaque friction identifiée est retirée.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-mobile-screen" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Mobile-first, vraiment</h3>
                <p className="ccrea-why__text">
                  70 % des visites e-commerce sont mobiles. On design d'abord le tunnel mobile, avec un pouce, sur une
                  connexion 4G moyenne. Le desktop suit. Zéro regret UX sur mobile.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-plug" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Intégrations métier</h3>
                <p className="ccrea-why__text">
                  Connexion à votre ERP (Odoo, SAP, Cegid), compta (Pennylane, Sage), CRM, WMS, moyens de paiement
                  (Stripe, Mollie, Adyen, Alma), transporteurs (Colissimo, Chronopost, Mondial Relay).
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-graduation-cap" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Formation gestion catalogue</h3>
                <p className="ccrea-why__text">
                  Formation admin 2 h en visio : ajout produit, gestion stock, promotions, gestion commandes, reporting.
                  Vous devenez autonome sur 100 % des tâches quotidiennes.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="ccrea-stack" id="stack">
          <div className="container">
            <header className="ccrea-stack__head">
              <h2 className="ccrea-stack__title">Choisir la bonne stack e-commerce</h2>
              <p className="ccrea-stack__intro">
                Nous recommandons la plateforme selon votre volume, votre niveau d'ambition UX et le poids de vos règles
                métier. Aucun dogmatisme : chaque projet a sa stack idéale.
              </p>
            </header>
            <div className="ccrea-stack__grid">
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-bag-shopping" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Shopify Plus</p>
                <ul className="ccrea-stack__card-list">
                  <li>Rapide à monter (4 sem.)</li>
                  <li>BtoC jusqu'à 500 k€/an</li>
                  <li>Écosystème d'apps riche</li>
                  <li>Idéal DTC &amp; fashion</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-brands-wordpress" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">WooCommerce</p>
                <ul className="ccrea-stack__card-list">
                  <li>Meilleure maîtrise SEO</li>
                  <li>Souple sur règles métier</li>
                  <li>Jusqu'à 1 M€/an confort</li>
                  <li>Propriété code 100 %</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-cube" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Prestashop</p>
                <ul className="ccrea-stack__card-list">
                  <li>BtoB et catalogues riches</li>
                  <li>Multi-boutique natif</li>
                  <li>Solide en France</li>
                  <li>Écosystème français</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-layer-group" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Headless Next.js</p>
                <ul className="ccrea-stack__card-list">
                  <li>Performance maximale</li>
                  <li>Medusa, Saleor, Sanity</li>
                  <li>Expérience premium</li>
                  <li>Scalable millions €/an</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="ccrea-midcta">
          <div className="container">
            <div className="ccrea-midcta__box">
              <div className="ccrea-midcta__left">
                <h3 className="ccrea-midcta__title">Un doute sur la bonne plateforme ?</h3>
                <p className="ccrea-midcta__text">
                  En 30 minutes de brief, on vous dit exactement quelle stack coller à votre volume, votre équipe et
                  votre budget.
                </p>
              </div>
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="ccrea-midcta__btn"
              >
                Réserver un brief{' '}
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                  <path
                    d="M4 12 L12 4 M6 4 H12 V10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section className="ccrea-cases">
          <div className="container">
            <header className="ccrea-cases__head">
              <h2 className="ccrea-cases__title">3 typologies de projets e-commerce</h2>
            </header>
            <div className="ccrea-cases__grid">
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">BtoC</span>
                <h3 className="ccrea-cases__name">Boutique DTC (Direct-to-Consumer)</h3>
                <p className="ccrea-cases__text">
                  Marque de mode, cosmétique, alimentaire, lifestyle. Site vitrine premium + tunnel conversion optimisé
                  + storytelling produit fort. Volume cible : 100 k€ à 2 M€/an la première année.
                </p>
              </article>
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">BtoB</span>
                <h3 className="ccrea-cases__name">Catalogue BtoB avec devis en ligne</h3>
                <p className="ccrea-cases__text">
                  Distributeur, grossiste, fabricant : tarifs personnalisés par client, quotas, remises paliers, demande
                  de devis, paiement 30 jours. WooCommerce ou Prestashop selon complexité.
                </p>
              </article>
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">Marketplace-ready</span>
                <h3 className="ccrea-cases__name">Site multi-marques ou multi-catégories</h3>
                <p className="ccrea-cases__text">
                  Retailer avec plusieurs marques en propre, ou site de niche avec catalogue riche. Architecture SEO en
                  silos, filtres avancés, recommandations personnalisées, upsells cross-catégories.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="expertise-faq" aria-labelledby="faq-title">
          <div className="container">
            <h2 className="expertise-faq__title" id="faq-title">
              Vos questions sur la création e-commerce
            </h2>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Quel est le budget d'un site e-commerce sur-mesure ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    Un site e-commerce sur-mesure démarre à <strong>12 000 € HT</strong> pour un catalogue jusqu'à 100
                    produits (Shopify Plus ou WooCommerce custom), monte à 25-40 000 € HT pour un catalogue riche
                    multi-catégories avec ERP connecté, et 50 000 €+ pour un headless Next.js/Medusa avec expérience
                    premium. Devis détaillé sous 24 h après brief découverte.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Quelle plateforme e-commerce choisir : Shopify, WooCommerce ou headless ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    Ça dépend de votre volume et ambition. <strong>Shopify</strong> : rapide à monter, très propre pour
                    BtoC jusqu'à 500 k€/an, mais coût par transaction et rigidité sur les règles métier.{' '}
                    <strong>WooCommerce</strong> : plus souple, meilleure maîtrise du SEO, idéal jusqu'à 1 M€/an quand
                    vous voulez posséder votre stack. <strong>Headless (Next.js + Medusa/Sanity)</strong> : performance
                    maximale, expérience premium, quand vous visez 1 M€+ et un site UX/branding fort. On recommande la
                    stack après brief.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien de temps pour livrer un site e-commerce ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    Un catalogue simple (jusqu'à 100 SKU) : <strong>1 mois</strong>. Un catalogue riche multi-catégories
                    : <strong>8 à 10 semaines</strong>. Un headless Next.js premium : <strong>10 à 14 semaines</strong>.
                    Ces délais incluent stratégie, design UX du tunnel, intégration technique, connexion moyens de
                    paiement, tests, formation admin.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Le tunnel de conversion sera-t-il optimisé ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    Oui, c'est au cœur de la mission. Nous designons le tunnel en 3 clics maximum, avec panier
                    persistant, checkout en une page, indicateurs de progression, upsells intelligents, relances abandon
                    panier via email/SMS. On mesure le taux de conversion avant/après et on itère les 30 premiers jours
                    pour maximiser le revenu par visiteur.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Comment fonctionne l'intégration avec ma comptabilité et mon ERP ?{' '}
                  <span className="expertise-faq__chevron" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="expertise-faq__a">
                  <p>
                    On connecte le back-office e-commerce à votre outil de comptabilité (Pennylane, Sage, EBP,
                    QuickBooks) via API ou webhook pour synchroniser automatiquement les commandes, factures et remises.
                    Idem pour votre ERP (Odoo, SAP, Cegid) : stock, catalogue et statuts commande restent alignés en
                    temps réel. Zéro double saisie.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="creation-cta">
          <div className="creation-cta__container">
            <div className="creation-cta__box">
              <div className="creation-cta__wrap">
                <h2 className="creation-cta__title">Prêt à lancer votre e-commerce ?</h2>
                <p className="creation-cta__text">
                  Brief découverte gratuit de 30 minutes. Nous étudions votre catalogue, votre marché et vos règles
                  métier. Devis chiffré sous 24 h.
                </p>
                <div className="creation-cta__actions">
                  <a
                    href="https://calendly.com/contact-agence-kameo/30min"
                    target="_blank"
                    rel="noopener"
                    className="creation-cta__btn creation-cta__btn--primary"
                  >
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-calendar-check" />
                    </svg>
                    Réserver mon brief découverte{' '}
                  </a>
                  <Link href="/realisations/" className="creation-cta__btn creation-cta__btn--secondary">
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-eye" />
                    </svg>
                    Voir nos réalisations{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <JsonLd
        data={[
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'creation-site-ecommerce' }),
          ...pageSchemas,
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
