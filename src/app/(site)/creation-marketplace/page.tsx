import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import css from '@/styles/pages/dev-silo';

const PATH = '/creation-marketplace/';
const TITLE = 'Création de marketplace multi-vendeurs à Paris | Kameo';
const DESCRIPTION =
  'Création de marketplace multi-vendeurs à Paris : split de paiement Stripe Connect, KYC vendeurs, commissions flexibles. MVP en 2 mois.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Développement sur-mesure', path: '/developpement-sur-mesure/' },
  { name: 'Création marketplace', path: '/creation-marketplace/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function CreationMarketplacePage() {
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
              Création marketplace <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Création de marketplace sur-mesure : <br />
              <span className="page-hero__title-muted">plateforme multi-vendeurs avec split de paiement</span>
            </h1>
            <p className="page-hero__text">
              Vous lancez une marketplace BtoC, BtoB ou de services : catalogue multi-vendeurs, paiement automatiquement
              redistribué, KYC, gestion des commissions, dashboard admin complet. Une architecture technique solide,
              pensée dès le MVP pour scaler. Devis chiffré sous 24 h.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                <strong>Stripe Connect</strong> ou Mangopay intégré
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                <strong>KYC automatique</strong> ou dashboard admin
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Livraison MVP en <strong>2 mois</strong>
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
                Voir la stack
              </a>
            </div>
          </div>
        </section>
        <section className="ccrea-why">
          <div className="container">
            <header className="ccrea-why__head">
              <span className="ccrea-why__eyebrow">Pourquoi Kameo pour votre marketplace</span>
              <h2 className="ccrea-why__title">Une marketplace sérieuse dès le MVP, pas un bricolage économique</h2>
            </header>
            <div className="ccrea-why__grid">
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-people-arrows" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Multi-tenant clean dès sprint 1</h3>
                <p className="ccrea-why__text">
                  L'architecture back-end sépare proprement plateforme, vendeurs et acheteurs, avec permissions
                  granulaires par rôle. Impossible de bricoler cette isolation plus tard, on la fait bien dès le départ
                  pour éviter la dette technique.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-money-bill-transfer" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Split de paiement automatique</h3>
                <p className="ccrea-why__text">
                  Stripe Connect (international) ou Mangopay (marché FR) : chaque paiement client arrive sur votre
                  compte, puis est redistribué automatiquement aux vendeurs moins votre commission. Conformité DSP2 et
                  anti-blanchiment déléguée à l'agrégateur.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-id-card" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">KYC intégré</h3>
                <p className="ccrea-why__text">
                  Vérification d'identité des vendeurs via le SDK Stripe Connect (upload pièce + selfie, validation en
                  24 h) ou partenaire dédié (Ubble, Onfido). Vendeurs vérifiés avant leur première vente, conformité LCB
                  garantie.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-percent" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Commissions ultra-flexibles</h3>
                <p className="ccrea-why__text">
                  Commission fixe, par palier, dégressive, par catégorie, avec abonnement vendeur + commission réduite.
                  Le business model est codé à votre exact besoin, modifiable par le back-office ensuite sans
                  redéploiement.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-shield-halved" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Escrow &amp; anti-fraude</h3>
                <p className="ccrea-why__text">
                  Escrow (paiement retenu 7 jours ou jusqu'à validation livraison) sur Mangopay, système de rating
                  vendeurs, détection de patterns suspects (multi-comptes, remboursements en cascade), blocage
                  automatique.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-gauge-high" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Dashboard admin complet</h3>
                <p className="ccrea-why__text">
                  Interface admin pour piloter la plateforme : validation vendeurs, gestion litiges, modération
                  produits, reporting revenus, statistiques par vendeur, gestion des remboursements, historique de tous
                  les paiements Stripe.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="ccrea-midcta">
          <div className="container">
            <div className="ccrea-midcta__box">
              <div className="ccrea-midcta__left">
                <h3 className="ccrea-midcta__title">Un projet marketplace ? On chiffre en 24 h.</h3>
                <p className="ccrea-midcta__text">
                  Brief découverte gratuit. On analyse votre modèle (BtoC/BtoB/services), la complexité du split de
                  paiement et le volume vendeur attendu.
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
        <section className="ccrea-stack" id="stack">
          <div className="container">
            <header className="ccrea-stack__head">
              <h2 className="ccrea-stack__title">Choisir la bonne fondation marketplace</h2>
              <p className="ccrea-stack__intro">
                Selon votre ambition et complexité du modèle : SaaS spécialisé, fork open-source ou 100 % custom. On
                recommande après analyse.
              </p>
            </header>
            <div className="ccrea-stack__grid">
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-boxes-stacked" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Sharetribe Flex</p>
                <ul className="ccrea-stack__card-list">
                  <li>MVP en 4-6 sem.</li>
                  <li>Marketplaces de services</li>
                  <li>Rigide sur règles métier</li>
                  <li>Coût mensuel à vie</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-cube" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">CS-Cart Multi-Vendor</p>
                <ul className="ccrea-stack__card-list">
                  <li>BtoC produits classiques</li>
                  <li>Licence unique</li>
                  <li>Communauté active</li>
                  <li>Skin Kameo custom</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-code" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Node.js custom</p>
                <ul className="ccrea-stack__card-list">
                  <li>100 % sur-mesure</li>
                  <li>Stripe/Mangopay natif</li>
                  <li>Scalable millions</li>
                  <li>Propriété code 100 %</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-brands-python" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Django custom</p>
                <ul className="ccrea-stack__card-list">
                  <li>Stack robuste éprouvée</li>
                  <li>BtoB &amp; complexe</li>
                  <li>ORM puissant</li>
                  <li>Écosystème riche</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="ccrea-cases">
          <div className="container">
            <header className="ccrea-cases__head">
              <h2 className="ccrea-cases__title">3 typologies de marketplaces</h2>
            </header>
            <div className="ccrea-cases__grid">
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">Services</span>
                <h3 className="ccrea-cases__name">Marketplace de services / prestations</h3>
                <p className="ccrea-cases__text">
                  Mise en relation freelances, artisans, coachs, thérapeutes. Modèle abonnement vendeur + commission par
                  mission. Stripe Connect + calendrier de réservation + messagerie interne. Escrow recommandé pour
                  sécuriser le paiement.
                </p>
              </article>
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">Produits</span>
                <h3 className="ccrea-cases__name">Marketplace de produits multi-vendeurs</h3>
                <p className="ccrea-cases__text">
                  Retailer regroupant marques ou vendeurs, ou spécialiste d'une verticale (mode, déco, artisanat,
                  seconde main). Catalogue multi-vendeurs, panier unique, split de paiement, gestion des expéditions
                  décentralisée. Idéal 500 k€ à 5 M€/an.
                </p>
              </article>
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">BtoB</span>
                <h3 className="ccrea-cases__name">Marketplace BtoB / procurement</h3>
                <p className="ccrea-cases__text">
                  Distributeur mettant en relation ses fournisseurs et ses clients pros. Tarifs négociés par contrat,
                  devis en ligne, paiement à 30 jours, comptes multi-utilisateurs. Souvent un modèle d'abonnement plutôt
                  que commission.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="expertise-faq" aria-labelledby="faq-title">
          <div className="container">
            <h2 className="expertise-faq__title" id="faq-title">
              Vos questions sur la création de marketplace
            </h2>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Quel budget prévoir pour une marketplace sur-mesure ?{' '}
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
                    Un premier périmètre démarre à <strong>8 000 € HT</strong>. Une marketplace complète (onboarding
                    vendeur, catalogue, panier multi-vendeur, Stripe Connect, dashboard admin) se situe autour de 25 000
                    € HT, et monte à 40-60 000 € HT pour une version production complète avec KYC intégré, escrow,
                    notation vendeur, messagerie interne. La complexité du multi-tenant impose une architecture solide
                    dès le début, pas de bricolage économique.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Comment fonctionne le split de paiement entre vendeurs ?{' '}
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
                    Nous intégrons <strong>Stripe Connect</strong> (ou Mangopay pour le marché FR) : chaque vendeur crée
                    un compte connecté (via un flow d'onboarding intégré à votre marketplace), les paiements des
                    acheteurs arrivent sur votre compte plateforme, puis Stripe reverse automatiquement à chaque vendeur
                    son dû moins votre commission. Zéro manipulation manuelle, conformité DSP2 et lutte anti-blanchiment
                    gérée par Stripe.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Comment gérer la vérification d'identité des vendeurs (KYC) ?{' '}
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
                    Trois options : <strong>KYC natif Stripe Connect</strong> (le plus simple, upload pièce ID + selfie
                    via leur SDK, validation en 24 h), <strong>KYC dédié</strong> avec un partenaire spécialisé (Ubble,
                    Onfido, Yousign) pour une expérience customisée, ou <strong>KYC manuel</strong> pour les MVP avec un
                    dashboard admin dédié. On recommande selon votre volume attendu et votre niveau de risque.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Peut-on choisir un modèle de commission variable selon les vendeurs ?{' '}
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
                    Oui, c'est même un des avantages du sur-mesure. Commission fixe (%), commission par palier (10 %
                    jusqu'à 1 k€, 8 % au-dessus), commission par catégorie de produit, commission dégressive selon
                    ancienneté, abonnement mensuel vendeur + commission réduite, offres promo temporaires. La logique
                    est codée à votre exact besoin, un SaaS packagé de type Sharetribe ne le permet pas.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  La marketplace peut-elle être BtoB (entreprises) ou BtoC uniquement ?{' '}
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
                    Les deux sont possibles. En <strong>BtoB</strong>, on ajoute : validation manuelle des vendeurs et
                    acheteurs, tarifs négociés par contrat, devis en ligne, facturation d'entreprise avec paiement à 30
                    jours, comptes multi-utilisateurs par entreprise cliente. Une marketplace BtoB représente 60 % de
                    nos projets marketplace, souvent avec un business model d'abonnement plutôt que de commission.
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
                <h2 className="creation-cta__title">Discutons de votre marketplace</h2>
                <p className="creation-cta__text">
                  Brief découverte de 30 minutes. On analyse votre modèle, la stack idéale et on chiffre le MVP sous 24
                  h.
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
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'creation-marketplace' }),
          ...pageSchemas,
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
