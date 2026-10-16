import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import css from '@/styles/pages/dev-silo';

const PATH = '/developpement-sur-mesure/';
const TITLE = 'Développement sur-mesure Paris : e-commerce, CRM, SaaS IA | Kameo';
const DESCRIPTION =
  'Développement d’applications sur-mesure à Paris : e-commerce, marketplace, CRM et SaaS avec IA. Code propriétaire, devis chiffré sous 24 h.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Expertises', path: '/agence-wordpress-paris/' },
  { name: 'Développement sur-mesure', path: '/developpement-sur-mesure/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function DeveloppementSurMesurePage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main id="main">
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Développement sur-mesure <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Développement d'applications sur-mesure à Paris : <br />
              <span className="page-hero__title-muted">e-commerce, marketplaces, CRM, SaaS IA</span>
            </h1>
            <p className="page-hero__text">
              Vous avez un besoin qui sort du cadre des SaaS packagés, Shopify trop rigide, HubSpot trop cher,
              Salesforce trop lourd, aucun SaaS IA ne couvre votre cas d'usage ? Kameo conçoit et développe
              l'application dont vous avez besoin, à partir de votre code, avec votre nom sur le code source. Devis
              détaillé sous 24 h.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                <strong>50+ projets</strong> livrés depuis 2023
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Délais respectés à <strong>97 %</strong>
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Code source à <strong>100 % client</strong>
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
              <a href="#content" className="page-hero__btn page-hero__btn--secondary">
                Voir les 4 expertises
              </a>
            </div>
          </div>
        </section>
        <section className="silo-hub" id="content">
          <div className="container">
            <header className="silo-hub__head">
              <span className="silo-hub__eyebrow">Nos 4 expertises</span>
              <h2 className="silo-hub__title">Quel est votre projet ?</h2>
              <p className="silo-hub__intro">
                Quatre expertises complémentaires, une méthodologie commune : de la stratégie produit au déploiement en
                production, une seule équipe intégrée à Paris.
              </p>
            </header>
            <div className="silo-hub__grid">
              <Link href="/creation-site-ecommerce/" className="silo-hub__card">
                <span className="silo-hub__card-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-cart-shopping" />
                  </svg>
                </span>
                <h3 className="silo-hub__card-title">Création de site e-commerce</h3>
                <p className="silo-hub__card-text">
                  Boutique en ligne sur-mesure : catalogue, tunnel optimisé, paiement, gestion des stocks. Shopify,
                  WooCommerce, Prestashop ou headless.
                </p>
                <span className="silo-hub__card-link">
                  Découvrir{' '}
                  <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12 L12 4 M6 4 H12 V10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link href="/creation-marketplace/" className="silo-hub__card">
                <span className="silo-hub__card-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-shop" />
                  </svg>
                </span>
                <h3 className="silo-hub__card-title">Création de marketplace</h3>
                <p className="silo-hub__card-text">
                  Plateforme multi-vendeurs BtoC ou BtoB : onboarding vendeurs, split de paiement Stripe Connect, KYC,
                  commission automatique.
                </p>
                <span className="silo-hub__card-link">
                  Découvrir{' '}
                  <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12 L12 4 M6 4 H12 V10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link href="/creation-crm-sur-mesure/" className="silo-hub__card">
                <span className="silo-hub__card-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-users-gear" />
                  </svg>
                </span>
                <h3 className="silo-hub__card-title">Création de CRM sur-mesure</h3>
                <p className="silo-hub__card-text">
                  CRM adapté à votre pipeline commercial : contacts, tâches, deals, reporting, intégrations métier, RGPD
                  natif.
                </p>
                <span className="silo-hub__card-link">
                  Découvrir{' '}
                  <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12 L12 4 M6 4 H12 V10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link href="/creation-saas-ia/" className="silo-hub__card">
                <span className="silo-hub__card-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-brain" />
                  </svg>
                </span>
                <h3 className="silo-hub__card-title">Création de SaaS IA</h3>
                <p className="silo-hub__card-text">
                  Application SaaS avec IA générative : intégration Claude/GPT, RAG, agents, auth multi-tenant, billing
                  Stripe. MVP en 8-12 semaines.
                </p>
                <span className="silo-hub__card-link">
                  Découvrir{' '}
                  <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12 L12 4 M6 4 H12 V10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="ccrea-why">
          <div className="container">
            <header className="ccrea-why__head">
              <span className="ccrea-why__eyebrow">Pourquoi choisir le sur-mesure</span>
              <h2 className="ccrea-why__title">Le sur-mesure, quand le SaaS ne suffit plus</h2>
            </header>
            <div className="ccrea-why__grid">
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-code" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Vous possédez le code</h3>
                <p className="ccrea-why__text">
                  À la livraison, tout le code source, la base de données et la documentation technique vous sont remis
                  dans un dépôt Git privé. Aucune dépendance à un éditeur, aucun abonnement caché pour continuer à
                  utiliser votre app.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-sliders" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Fonctionnalités hyper-adaptées</h3>
                <p className="ccrea-why__text">
                  Vos règles métier atypiques (workflow multi-étapes, calcul de commission complexe, intégration ERP
                  français, cas d'usage IA spécifique), un SaaS packagé refuse de les coder. Nous, on part de votre
                  process, pas de l'inverse.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-piggy-bank" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Zéro licence récurrente</h3>
                <p className="ccrea-why__text">
                  Un SaaS multi-utilisateurs facture par tête, par module, par volume. Un développement sur-mesure paye
                  une fois, vous gardez ensuite l'hébergement et la maintenance. Rentable dès 15 k€ HT/an de licences
                  économisées.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-shield-halved" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Sécurité &amp; RGPD natif</h3>
                <p className="ccrea-why__text">
                  Hébergement en France (OVH, Scaleway) ou EU, chiffrement au repos et en transit, journalisation
                  d'audit, RGPD baked-in dès la conception. Zéro transfert vers des tiers non-EU sans votre validation
                  explicite.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-bolt" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Performance &amp; scalabilité</h3>
                <p className="ccrea-why__text">
                  Stack moderne (Node.js, Python, PostgreSQL, Redis), architecture pensée pour scaler dès le MVP,
                  monitoring temps réel et alertes intégrées. Aucun "plafond de verre" comme avec les SaaS bas de gamme.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-handshake" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Zéro sous-traitance</h3>
                <p className="ccrea-why__text">
                  Designer, développeur front, développeur back, expert IA et chef de projet travaillent côte à côte
                  dans nos bureaux du 2<sup>e</sup>. Un seul interlocuteur, une responsabilité claire, des décisions
                  rapides.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="ccrea-midcta">
          <div className="container">
            <div className="ccrea-midcta__box">
              <div className="ccrea-midcta__left">
                <h3 className="ccrea-midcta__title">Un projet en tête ? Parlons-en 30 minutes.</h3>
                <p className="ccrea-midcta__text">
                  Brief découverte gratuit, sans engagement. Vous repartez avec une recommandation honnête même si on ne
                  travaille pas ensemble.
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
        <section className="ccrea-steps">
          <div className="container">
            <header className="ccrea-steps__head">
              <h2 className="ccrea-steps__title">Notre méthodologie en 5 étapes</h2>
            </header>
            <ol className="ccrea-steps__list">
              <li className="ccrea-steps__item">
                <div className="ccrea-steps__num">01</div>
                <div>
                  <h3 className="ccrea-steps__name">
                    Discovery &amp; cadrage<span className="ccrea-steps__duration">1 semaine</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    Nous partons de votre problème métier, pas d'une solution technique. Interview des équipes,
                    cartographie des workflows, identification des points de friction, priorisation des fonctionnalités
                    MVP. Objectif : sortir un backlog priorisé qui devient la source de vérité du projet.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrable :</strong>Backlog priorisé, wireframes basse-fi, planning détaillé
                  </p>
                </div>
              </li>
              <li className="ccrea-steps__item">
                <div className="ccrea-steps__num">02</div>
                <div>
                  <h3 className="ccrea-steps__name">
                    Design UX/UI<span className="ccrea-steps__duration">1 à 2 semaines</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    Maquettes Figma détaillées sur les parcours critiques. On teste les flows avec 3-5 utilisateurs
                    cibles avant de coder. Design system léger mais cohérent, adapté à l'application et pensé responsive
                    dès le départ.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrable :</strong>Maquettes Figma haute-fi + design system + prototype cliquable
                  </p>
                </div>
              </li>
              <li className="ccrea-steps__item">
                <div className="ccrea-steps__num">03</div>
                <div>
                  <h3 className="ccrea-steps__name">
                    Développement<span className="ccrea-steps__duration">4 à 12 semaines</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    Sprints d'1 semaine, démo hebdo, environnement de recette accessible en permanence. Code propre,
                    tests automatisés sur les parcours critiques, revue de code systématique. Vous voyez le produit
                    avancer chaque semaine.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrable :</strong>Code source sur Git privé + environnement de recette live
                  </p>
                </div>
              </li>
              <li className="ccrea-steps__item">
                <div className="ccrea-steps__num">04</div>
                <div>
                  <h3 className="ccrea-steps__name">
                    Recette &amp; QA<span className="ccrea-steps__duration">1 à 2 semaines</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    Tests fonctionnels sur les navigateurs et devices cibles, tests de charge, audit sécurité (OWASP top
                    10), vérification RGPD, tests d'accessibilité RGAA/WCAG. Correction de tous les bugs bloquants et
                    majeurs avant mise en prod.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrable :</strong>Rapport QA + audit sécu + certificat de conformité RGPD
                  </p>
                </div>
              </li>
              <li className="ccrea-steps__item">
                <div className="ccrea-steps__num">05</div>
                <div>
                  <h3 className="ccrea-steps__name">
                    Mise en production &amp; formation<span className="ccrea-steps__duration">1 semaine</span>
                  </h3>
                  <p className="ccrea-steps__desc">
                    Déploiement sur votre infrastructure (OVH, Scaleway, AWS EU, Azure EU au choix). Formation admin en
                    visio d'1 h, documentation Notion complète, remise des credentials. Support technique 30 jours
                    inclus.
                  </p>
                  <p className="ccrea-steps__deliv">
                    <strong>Livrable :</strong>Application en production + formation + documentation complète
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="expertise-faq" aria-labelledby="faq-title">
          <div className="container">
            <h2 className="expertise-faq__title" id="faq-title">
              Vos questions sur le développement sur-mesure
            </h2>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Pourquoi choisir un développement sur-mesure plutôt qu'un SaaS packagé ?{' '}
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
                    Un SaaS packagé (Shopify, HubSpot, Salesforce) va vite et coûte peu au départ, mais vous êtes
                    locataire. Vous payez tant que vous l'utilisez, vous n'accédez pas au code, vous êtes limité aux
                    fonctionnalités prévues par l'éditeur. Un développement <strong>sur-mesure</strong> vous rend
                    propriétaire du code, permet des règles métier qu'aucun SaaS ne couvre (multi-tenant complexe,
                    workflows atypiques, intégrations ERP françaises), et supprime les frais récurrents à l'usage.
                    Rentable dès que vous dépassez ~15 000 € HT/an de licences ou que le SaaS bloque une fonctionnalité
                    clé.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Quel est le budget moyen d'un projet développement sur-mesure ?{' '}
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
                    Ça dépend fortement du périmètre. Ordres de grandeur : <strong>site e-commerce sur-mesure</strong> à
                    partir de 12 000 € HT, <strong>marketplace multi-vendeurs</strong> à partir de 8 000 € HT,{' '}
                    <strong>CRM sur-mesure</strong> à partir de 7 999 € HT, <strong>SaaS avec IA</strong> à partir de 8
                    000 € HT. Après un brief découverte gratuit, on vous envoie un{' '}
                    <strong>devis détaillé sous 24 h</strong> avec périmètre chiffré ligne à ligne.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien de temps prend un projet de développement sur-mesure ?{' '}
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
                    Un site e-commerce sur-mesure : <strong>6 à 10 semaines</strong>. Une marketplace :{' '}
                    <strong>10 à 16 semaines</strong>. Un CRM personnalisé : <strong>8 à 12 semaines</strong>. Un MVP
                    SaaS avec IA : <strong>8 à 14 semaines</strong>. Ces délais incluent discovery, design UX,
                    développement, recette et livraison. Nous respectons nos délais à 97 %, équipe intégrée à Paris,
                    zéro sous-traitance, zéro chef de projet intermédiaire.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  À qui appartient le code source à la livraison ?{' '}
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
                    À vous, à 100 %. Le code source, la base de données, les credentials d'infrastructure et la
                    documentation technique vous sont livrés dans un dépôt Git privé qui vous appartient. Aucune clause
                    de propriété intellectuelle, aucun abonnement caché pour continuer à utiliser votre propre
                    application. Vous pouvez faire évoluer, migrer ou faire reprendre le projet par une autre équipe à
                    tout moment.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que se passe-t-il après la livraison en termes de maintenance ?{' '}
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
                    Inclus dans tous les forfaits : <strong>30 jours de support technique</strong> gratuit (bugs,
                    ajustements, formation admin), documentation Notion complète, formation d'1 h en visio. Au-delà,
                    forfait maintenance dès 149 € HT/mois selon la criticité (mises à jour sécu, monitoring,
                    sauvegardes, support prioritaire). Sans engagement. Vous pouvez aussi reprendre la main en interne :
                    tout est documenté et le code est propre.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Travaillez-vous avec des freelances ou en interne ?{' '}
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
                    Uniquement en interne, dans nos bureaux du 2<sup>e</sup> arrondissement de Paris. Designer,
                    développeur front-end, développeur back-end, expert IA et chef de projet travaillent côte à côte.
                    Zéro sous-traitance, zéro équipe offshore, zéro plateforme freelance. Cela nous permet d'être
                    responsables de bout en bout, de communiquer directement avec vous, et de tenir nos délais.
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
                <h2 className="creation-cta__title">Démarrons votre projet</h2>
                <p className="creation-cta__text">
                  Un brief découverte de 30 minutes, gratuit, sans engagement. Vous repartez avec une recommandation
                  honnête, même si on ne travaille pas ensemble. Devis détaillé sous 24 h.
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
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'developpement-sur-mesure' }),
          ...pageSchemas,
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
