import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import css from './styles';
import { PROOF } from '@/lib/site';

const PATH = '/agence-wordpress-paris/';
const TITLE = 'Agence WordPress Paris : sites dès 1 299 € HT | Kameo';
const DESCRIPTION =
  'Agence WordPress à Paris : création, refonte et maintenance de sites sur-mesure. Prix publics dès 1 299 € HT, site vitrine livré en 14 jours, devis sous 24 h.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Expertises', path: '/agence-wordpress-paris/' },
  { name: 'Agence WordPress Paris', path: '/agence-wordpress-paris/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function AgenceWordpressParisPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main id="main">
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Agence WordPress <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Agence WordPress Paris : <br />
              <span className="page-hero__title-muted">création de sites sur-mesure qui convertissent</span>
            </h1>
            <p className="page-hero__text">
              Kameo est une agence WordPress fondée en 2023, avec une adresse à Paris 2<sup>e</sup>. Nous créons,
              refondons et maintenons des sites WordPress sur-mesure pour PME, startups et marques exigeantes, à prix
              publics : landing page 1 299 € HT, site vitrine 1 999 € HT, e-commerce WooCommerce 2 999 € HT. Site
              vitrine livré en 14 jours, devis sous 24 h. Plus de {PROOF.projetsTotal} sites livrés depuis 2023, dont
              environ trois quarts sous WordPress.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                <strong>★ 4,6/5</strong> sur Trustpilot · {PROOF.avisNombre} avis
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                <strong>50+ entreprises</strong> accompagnées depuis 2023
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                9 rue des Colonnes,{' '}
                <strong>
                  Paris 2<sup>e</sup>
                </strong>
              </span>
            </div>
            <p style={{ margin: '14px 0 0', fontSize: '13px', opacity: 0.6 }}>
              Mis à jour le <time dateTime="2026-10-30">30 octobre 2026</time>
            </p>
            <a
              href="https://calendly.com/contact-agence-kameo/30min"
              target="_blank"
              rel="noopener"
              className="page-hero__btn"
            >
              Démarrer mon projet WordPress{' '}
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
          </div>
        </section>
        {/* ============ POURQUOI NOUS ============ */}
        <section className="features">
          <div className="container">
            <h2 className="sr-only">Pourquoi choisir notre agence WordPress à Paris</h2>
            <div className="features__wrap">
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-people-group" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Une équipe WordPress dédiée, un seul point de contact</h3>
                </div>
                <p className="feature__text">
                  Design, développement WordPress et SEO sont réalisés par la même équipe, que vous gardez du brief à
                  la maintenance. Pas d'intermédiaire qui dilue votre brief : un seul point de contact, des échanges en
                  visio, un projet qui avance vite et droit.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-code" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Du WordPress sur-mesure, pas un thème pré-fait habillé</h3>
                </div>
                <p className="feature__text">
                  Chaque site part d'une maquette Figma créée pour vous, puis est construit avec Elementor Pro, ou sur
                  un thème codé quand le projet le demande. Structure sémantique, vitesse optimisée, contenus que vous
                  modifiez vous-même. Résultat : un site rapide, sécurisé, facile à faire évoluer et que Google indexe
                  sans friction.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                    </svg>
                  </span>
                  <h3 className="feature__title">SEO natif intégré dès la conception, pas en option</h3>
                </div>
                <p className="feature__text">
                  Audit de mots-clés, étude des SERP, architecture en silos, balisage Schema.org, Core Web Vitals
                  optimisés, sitemap XML, gestion du robots.txt : votre site WordPress est livré prêt à ranker. Nos
                  clients voient les premières positions Google bouger dans les 3 à 6 mois suivant la mise en ligne.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-bullseye" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Pensé pour la conversion, pas juste pour faire joli</h3>
                </div>
                <p className="feature__text">
                  Un beau site qui ne convertit pas ne sert à rien. Chaque page est structurée selon les principes
                  éprouvés du copywriting et de l'UX : hiérarchie visuelle, preuves sociales, micro-frictions levées,
                  CTA testés. Nos sites WordPress sont conçus pour transformer le trafic en demandes de devis, en achats
                  ou en prises de rendez-vous.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-bolt" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Performance et Core Web Vitals au vert</h3>
                </div>
                <p className="feature__text">
                  Images WebP optimisées, lazy-loading, CSS critique inliné, JavaScript minimal, cache serveur et CDN.
                  Nos sites WordPress affichent des scores PageSpeed 90+ sur mobile et passent les Core Web Vitals de
                  Google sans suer. La vitesse est un facteur de ranking direct et un levier de conversion massif.
                </p>
              </article>
              <article className="feature">
                <div className="feature__head">
                  <span className="feature__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-shield-halved" />
                    </svg>
                  </span>
                  <h3 className="feature__title">Sécurité, RGPD et maintenance long-terme</h3>
                </div>
                <p className="feature__text">
                  Mises à jour WordPress maîtrisées, sauvegardes automatiques, durcissement de l'admin, conformité RGPD
                  (cookies, formulaires, données). Et après le lancement : nous restons votre interlocuteur pour faire
                  évoluer le site, ajouter des sections, lancer des campagnes. Pas de site livré puis abandonné.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ 3 SERVICES WORDPRESS (silo enfants) ============ */}
        <section className="wp-services" id="services">
          <div className="container">
            <header className="wp-services__head">
              <span className="wp-services__eyebrow">Nos prestations WordPress</span>
              <h2 className="wp-services__title">Création, refonte et maintenance de sites WordPress</h2>
              <p className="wp-services__intro">
                Que vous lanciez une nouvelle activité, modernisiez un site vieillissant ou cherchiez un partenaire
                fiable pour entretenir votre installation existante, notre agence WordPress parisienne couvre tout le
                cycle de vie de votre site.
              </p>
            </header>
            <div className="wp-services__grid">
              <article className="wp-service-card">
                <span className="wp-service-card__icon">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-rocket" />
                  </svg>
                </span>
                <h3 className="wp-service-card__title">Création de site WordPress</h3>
                <p className="wp-service-card__text">
                  Un site WordPress nouveau, conçu sur-mesure pour votre marque, votre cible et vos objectifs business.
                  De la stratégie SEO à la mise en ligne, livré en 14 jours à 1 mois selon le périmètre.
                </p>
                <ul className="wp-service-card__list">
                  <li>Site vitrine, e-commerce ou landing page</li>
                  <li>Design custom + maquette validée avant dev</li>
                  <li>Elementor Pro ou thème codé sur mesure</li>
                  <li>SEO technique et éditorial inclus</li>
                  <li>Formation à l'édition du site</li>
                </ul>
                <Link href="/creation-site-wordpress/" className="wp-service-card__cta">
                  Voir nos offres de création{' '}
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 8h8M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </article>
              <article className="wp-service-card">
                <span className="wp-service-card__icon">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-arrows-rotate" />
                  </svg>
                </span>
                <h3 className="wp-service-card__title">Refonte de site WordPress</h3>
                <p className="wp-service-card__text">
                  Votre site WordPress actuel est lent, daté, mal positionné sur Google ou ne convertit plus. Nous le
                  repensons en profondeur sans casser votre SEO existant, avec un plan de redirection 301 maîtrisé.
                </p>
                <ul className="wp-service-card__list">
                  <li>Audit complet du site existant</li>
                  <li>Plan de redirections 301 sans perte SEO</li>
                  <li>Nouveau design + nouvelle UX</li>
                  <li>Reprise et nettoyage de la base de données</li>
                  <li>Migration thème + plugins maîtrisée</li>
                </ul>
                <Link href="/refonte-wordpress/" className="wp-service-card__cta">
                  Voir notre approche refonte{' '}
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 8h8M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </article>
              <article className="wp-service-card">
                <span className="wp-service-card__icon">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-wrench" />
                  </svg>
                </span>
                <h3 className="wp-service-card__title">Maintenance WordPress</h3>
                <p className="wp-service-card__text">
                  Votre site WordPress a besoin d'attention permanente : mises à jour, sauvegardes, sécurité, support.
                  Nous le maintenons en condition opérationnelle avec un forfait mensuel transparent et un interlocuteur
                  dédié.
                </p>
                <ul className="wp-service-card__list">
                  <li>Mises à jour cœur, thème et plugins</li>
                  <li>Sauvegardes quotidiennes externalisées</li>
                  <li>Monitoring sécurité 24/7</li>
                  <li>Support technique réactif</li>
                  <li>Évolutions et nouvelles fonctionnalités</li>
                </ul>
                <Link href="/maintenance-wordpress/" className="wp-service-card__cta">
                  Voir nos forfaits maintenance{' '}
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 8h8M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </article>
            </div>
          </div>
        </section>
        {/* ============ MÉTHODOLOGIE 6 ÉTAPES ============ */}
        <section className="expertise-process" aria-labelledby="process-title">
          <div className="container">
            <header className="expertise-process__head">
              <span className="expertise-process__eyebrow">
                <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
                Notre méthode <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
              </span>
              <h2 className="expertise-process__title" id="process-title">
                Le KAMEO-Framework : de l'idée au site WordPress en ligne, en 6 étapes
              </h2>
              <p className="expertise-process__intro">
                Notre méthodologie WordPress propriétaire, éprouvée sur plus de 50 projets : <strong>K</strong>ick-off
                SEO, <strong>A</strong>rchitecture en silos, <strong>M</strong>aquettes &amp; contenu,{' '}
                <strong>E</strong>xécution dev, <strong>O</strong>ptimisation &amp; lancement. Chaque étape est validée
                avec vous avant de passer à la suivante.
              </p>
            </header>
            <ol className="expertise-process__steps expertise-process__steps--six">
              <li className="expertise-process__step">
                <span className="expertise-process__num">01</span>
                <h3 className="expertise-process__step-title">Audit SEO &amp; cadrage stratégique</h3>
                <p className="expertise-process__step-text">
                  Étude des mots-clés de votre secteur, analyse de la SERP, benchmark concurrentiel, définition du
                  persona cible et du cahier des charges fonctionnel. On part du SEO pour construire le site, pas
                  l'inverse.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">02</span>
                <h3 className="expertise-process__step-title">Architecture &amp; arborescence</h3>
                <p className="expertise-process__step-text">
                  Conception du sitemap, des silos thématiques et des parcours utilisateurs. Chaque page WordPress est
                  positionnée pour capter une intention de recherche précise et alimenter votre tunnel de conversion.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">03</span>
                <h3 className="expertise-process__step-title">Rédaction SEO &amp; UX writing</h3>
                <p className="expertise-process__step-text">
                  Un rédacteur web expert structure chaque page en alliant SEO et persuasion. Champ lexical maîtrisé,
                  méta-titres et descriptions optimisés, calls-to-action testés. Pas du remplissage : du contenu qui
                  ranke et qui convertit.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">04</span>
                <h3 className="expertise-process__step-title">Design &amp; maquettes</h3>
                <p className="expertise-process__step-text">
                  Notre directeur artistique conçoit une maquette unique alignée sur votre univers de marque, pensée
                  pour guider le regard et déclencher l'action. Validation au pixel près avant tout développement.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">05</span>
                <h3 className="expertise-process__step-title">Développement WordPress sur-mesure</h3>
                <p className="expertise-process__step-text">
                  Intégration au pixel près avec Elementor Pro, ou thème codé sur mesure selon le projet, optimisation
                  des Core Web Vitals, balisage Schema.org. Site documenté pour la suite.
                </p>
              </li>
              <li className="expertise-process__step">
                <span className="expertise-process__num">06</span>
                <h3 className="expertise-process__step-title">Mise en ligne &amp; formation</h3>
                <p className="expertise-process__step-text">
                  Recette, mise en ligne en environnement de staging puis production, plan de redirection si refonte,
                  formation à l'édition du site, et début du contrat de maintenance pour faire vivre le site dans la
                  durée.
                </p>
              </li>
            </ol>
          </div>
        </section>
        {/* ============ CHIFFRES CLÉS ============ */}
        <section className="wp-stats">
          <div className="container">
            <header className="wp-stats__head">
              <h2 className="wp-stats__title">L'agence WordPress en chiffres</h2>
            </header>
            <div className="wp-stats__grid">
              <div className="wp-stat">
                <span className="wp-stat__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-users" />
                  </svg>
                </span>
                <span className="wp-stat__num">50+</span>
                <div className="wp-stat__lbl">entreprises accompagnées depuis 2023</div>
              </div>
              <div className="wp-stat">
                <span className="wp-stat__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-star" />
                  </svg>
                </span>
                <span className="wp-stat__num">4,6/5</span>
                <div className="wp-stat__lbl">note Trustpilot sur {PROOF.avisNombre} avis vérifiés</div>
              </div>
              <div className="wp-stat">
                <span className="wp-stat__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-clock" />
                  </svg>
                </span>
                <span className="wp-stat__num">24 h</span>
                <div className="wp-stat__lbl">délai moyen pour recevoir votre devis</div>
              </div>
              <div className="wp-stat">
                <span className="wp-stat__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-handshake" />
                  </svg>
                </span>
                <span className="wp-stat__num">0</span>
                <div className="wp-stat__lbl">
                  sous-traitance : la même équipe du brief à la maintenance
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============ CAS CLIENTS CHIFFRÉS ============ */}
        <section className="wp-cases" id="cas-clients">
          <div className="container">
            <header className="wp-cases__head">
              <span className="wp-cases__eyebrow">Résultats réels</span>
              <h2 className="wp-cases__title">
                Les chiffres parlent. <br />
                Pas nous.
              </h2>
            </header>
            <div className="wp-cases__grid">
              <article className="wp-case">
                <div className="wp-case__head">
                  <span className="wp-case__client">Nexus Games</span>
                  <span className="wp-case__period">6 mois</span>
                </div>
                <div className="wp-case__image">
                  <img
                    src="/images/landing_page/Nexusgames.webp"
                    width="1292"
                    height="394"
                    alt="Courbe Google Search Console de Nexus Games"
                    loading="lazy"
                  />
                </div>
                <div className="wp-case__stats">
                  <div className="wp-case__stat">
                    <div className="wp-case__num">×3</div>
                    <div className="wp-case__lbl">
                      clics / jour
                      <br />
                      180 → 550
                    </div>
                  </div>
                  <div className="wp-case__stat">
                    <div className="wp-case__num">×10</div>
                    <div className="wp-case__lbl">
                      impressions
                      <br />4 K → 40 K
                    </div>
                  </div>
                  <div className="wp-case__stat">
                    <div className="wp-case__num">18 → 4</div>
                    <div className="wp-case__lbl">position moyenne</div>
                  </div>
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(15,17,21,.55)', margin: '14px 0 0', lineHeight: '1.5' }}>
                  Nexus Games est une société de Benjamin Dayan, fondateur de Kameo. Son site est développé avec
                  Next.js, pas WordPress : ce cas montre notre travail de référencement.
                </p>
              </article>
              <article className="wp-case">
                <div className="wp-case__head">
                  <span className="wp-case__client">Medical Market</span>
                  <span className="wp-case__period">6 mois</span>
                </div>
                <div className="wp-case__image">
                  <img
                    src="/images/landing_page/MedicalMarket.webp"
                    width="1280"
                    height="393"
                    alt="Courbe Google Search Console Medical Market après refonte WordPress"
                    loading="lazy"
                  />
                </div>
                <div className="wp-case__stats">
                  <div className="wp-case__stat">
                    <div className="wp-case__num">×10</div>
                    <div className="wp-case__lbl">
                      de clics
                      <br />6 → 60
                    </div>
                  </div>
                  <div className="wp-case__stat">
                    <div className="wp-case__num">×3,6</div>
                    <div className="wp-case__lbl">
                      impressions
                      <br />
                      700 → 2 500
                    </div>
                  </div>
                  <div className="wp-case__stat">
                    <div className="wp-case__num">+20%</div>
                    <div className="wp-case__lbl">commandes en ligne</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* ============ TARIFS (offres) ============ */}
        {/* ============ CREATION WP, bloc resume (deleguait a /creation-site-wordpress/) ============ */}
        <section
          className="wp-offers-summary"
          id="offres"
          style={{ padding: 'clamp(64px,8vw,100px) 0', background: '#fff', borderTop: '1px solid rgba(15,17,21,.06)' }}
        >
          <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(225,75,137,.08)',
                color: '#E14B89',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '.04em',
                textTransform: 'uppercase',
                marginBottom: '18px',
              }}
            >
              <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                <use href="/icons.svg#i-solid-check" />
              </svg>
              Tarifs transparents, sans devis surprise{' '}
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px,3.4vw,44px)',
                fontWeight: '900',
                letterSpacing: '-.03em',
                lineHeight: '1.1',
                color: '#0f1115',
                margin: '0 0 18px',
              }}
            >
              Création WordPress : 3 formats, prix fixés à l'avance
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: 'rgba(15,17,21,.7)',
                lineHeight: '1.65',
                maxWidth: '60ch',
                margin: '0 auto 32px',
              }}
            >
              Landing page, site vitrine, e-commerce WooCommerce : chaque format a un périmètre clair, un délai annoncé,
              un tarif transparent. Aucune mauvaise surprise en cours de projet.
            </p>
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', marginBottom: '36px' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  background: '#F9FAFB',
                  border: '1px solid rgba(15,17,21,.08)',
                  borderRadius: '100px',
                  fontSize: '14.5px',
                  color: 'rgba(15,17,21,.78)',
                }}
              >
                <svg
                  className="icon"
                  viewBox="0 0 384 512"
                  aria-hidden="true"
                  style={{ color: '#E14B89' }}
                  focusable="false"
                >
                  <use href="/icons.svg#i-solid-file-lines" />
                </svg>
                <strong style={{ color: '#0f1115', fontWeight: '700' }}>Landing page</strong>· 1 page · 14 jours · 1 299 € HT{' '}
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  background: '#F9FAFB',
                  border: '1px solid rgba(15,17,21,.08)',
                  borderRadius: '100px',
                  fontSize: '14.5px',
                  color: 'rgba(15,17,21,.78)',
                }}
              >
                <svg
                  className="icon"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                  style={{ color: '#E14B89' }}
                  focusable="false"
                >
                  <use href="/icons.svg#i-solid-heart" />
                </svg>
                <strong style={{ color: '#0f1115', fontWeight: '700' }}>Site vitrine</strong>· jusqu'à 5 pages · 14
                jours · 1 999 € HT{' '}
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  background: '#F9FAFB',
                  border: '1px solid rgba(15,17,21,.08)',
                  borderRadius: '100px',
                  fontSize: '14.5px',
                  color: 'rgba(15,17,21,.78)',
                }}
              >
                <svg
                  className="icon"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                  style={{ color: '#E14B89' }}
                  focusable="false"
                >
                  <use href="/icons.svg#i-solid-bag-shopping" />
                </svg>
                <strong style={{ color: '#0f1115', fontWeight: '700' }}>E-commerce WooCommerce</strong>· catalogue · 1
                mois · 2 999 € HT{' '}
              </span>
            </div>
            <Link
              href="/creation-site-wordpress/"
              className="btn btn--primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
            >
              Découvrir les 3 formats &amp; tarifs détaillés{' '}
              <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                <use href="/icons.svg#i-solid-arrow-right" />
              </svg>
            </Link>
          </div>
        </section>
        {/* ============ POURQUOI WORDPRESS (LSI) ============ */}
        <section className="wp-why">
          <div className="container">
            <header className="wp-why__head">
              <span className="wp-why__eyebrow">Pourquoi WordPress</span>
              <h2 className="wp-why__title">Pourquoi WordPress reste le meilleur choix pour votre site d'entreprise</h2>
              <p className="wp-why__intro">
                WordPress propulse aujourd'hui <strong>plus de 43 % du web mondial</strong>, du blog personnel aux sites
                de grands groupes comme TechCrunch ou Sony Music. Cette domination n'est pas un
                hasard : c'est l'écosystème CMS le plus mature, le plus extensible et le mieux référencé par Google.
              </p>
              <p className="wp-why__intro">
                Beaucoup d'agences vous pousseront vers une solution propriétaire (Webflow, Wix, Squarespace, Framer) ou
                un développement from-scratch coûteux et fragile. Notre conviction est inverse :{' '}
                <strong>
                  WordPress, bien utilisé, reste le meilleur rapport puissance / prix / pérennité du marché
                </strong>
                .
              </p>
            </header>
            <div className="wp-why__grid">
              <article className="wp-why__adv">
                <span className="wp-why__adv-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-unlock-keyhole" />
                  </svg>
                </span>
                <h3 className="wp-why__adv-title">Open-source, vous restez propriétaire</h3>
                <p className="wp-why__adv-text">
                  Pas de boîte noire propriétaire. Votre site WordPress vous appartient à 100 %, hébergé où vous voulez,
                  modifiable par n'importe quel développeur. Pas de dépendance à une plateforme qui peut couper,
                  augmenter ses tarifs ou disparaître.
                </p>
              </article>
              <article className="wp-why__adv">
                <span className="wp-why__adv-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                  </svg>
                </span>
                <h3 className="wp-why__adv-title">Le meilleur SEO du marché</h3>
                <p className="wp-why__adv-text">
                  Yoast, Rank Math, sitemap natif, balisage Schema.org, gestion fine des redirections, contrôle total du
                  robots.txt : aucun CMS n'égale WordPress sur le SEO technique. Google indexe WordPress sans friction.
                </p>
              </article>
              <article className="wp-why__adv">
                <span className="wp-why__adv-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-puzzle-piece" />
                  </svg>
                </span>
                <h3 className="wp-why__adv-title">Un écosystème inégalé</h3>
                <p className="wp-why__adv-text">
                  60 000+ plugins, 30 000+ thèmes, des milliers d'agences et développeurs dans le monde. Quel que soit
                  votre besoin (réservation, paiement, intégration CRM, multilingue, e-commerce), une solution WordPress
                  existe déjà.
                </p>
              </article>
              <article className="wp-why__adv">
                <span className="wp-why__adv-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-arrow-trend-up" />
                  </svg>
                </span>
                <h3 className="wp-why__adv-title">Pensé pour évoluer avec vous</h3>
                <p className="wp-why__adv-text">
                  Vous démarrez en site vitrine, vous évoluez vers un e-commerce, puis vers un espace membre ou un
                  portail multilingue : WordPress vous suit. Pas besoin de tout refaire à chaque palier de croissance.
                </p>
              </article>
              <article className="wp-why__adv">
                <span className="wp-why__adv-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-pen-to-square" />
                  </svg>
                </span>
                <h3 className="wp-why__adv-title">Une admin simple à prendre en main</h3>
                <p className="wp-why__adv-text">
                  Sur nos sites Elementor Pro, vos équipes modifient les pages en visuel, directement à l'écran. Plus
                  besoin de revenir vers nous pour ajouter une page ou modifier un titre.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ CARROUSEL PROJETS WP ============ */}
        <section className="carousel" aria-label="Nos projets WordPress">
          <div className="carousel__track" id="carouselTrack">
            <article className="pcard">
              <Link href="/realisations/medical-market/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/medical-market.webp"
                    width="800"
                    height="445"
                    alt="Projet Medical Market"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Medical Market</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>WooCommerce</span>
                      <span>DA</span>
                      <span>Site Web</span>
                      <span>Réseaux sociaux</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard">
              <Link href="/realisations/dronespec/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/dronespec.webp"
                    width="800"
                    height="600"
                    alt="Projet DroneSpec"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">DroneSpec</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>WordPress</span>
                      <span>DA</span>
                      <span>Site Web</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard">
              <Link href="/realisations/les-cars-du-plateau/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/les-cars-du-plateau.webp"
                    width="1535"
                    height="829"
                    alt="Projet Les Cars du Plateau"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Les Cars du Plateau</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>WordPress</span>
                      <span>DA</span>
                      <span>Site Web</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard">
              <Link href="/realisations/claimz/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/claimz.webp"
                    width="800"
                    height="454"
                    alt="Projet Claimz"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Claimz</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>WordPress</span>
                      <span>DA</span>
                      <span>Site Web</span>
                      <span>Réseaux Sociaux</span>
                    </div>
                    <div className="pcard__stat">
                      <strong>+120%</strong> Performance pub
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard" inert aria-hidden="true">
              <Link href="/realisations/medical-market/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/medical-market.webp"
                    width="800"
                    height="445"
                    alt="Projet Medical Market"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Medical Market</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>WooCommerce</span>
                      <span>DA</span>
                      <span>Site Web</span>
                      <span>Réseaux sociaux</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard" inert aria-hidden="true">
              <Link href="/realisations/dronespec/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/dronespec.webp"
                    width="800"
                    height="600"
                    alt="Projet DroneSpec"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">DroneSpec</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>WordPress</span>
                      <span>DA</span>
                      <span>Site Web</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard" inert aria-hidden="true">
              <Link href="/realisations/les-cars-du-plateau/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/les-cars-du-plateau.webp"
                    width="1535"
                    height="829"
                    alt="Projet Les Cars du Plateau"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Les Cars du Plateau</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>WordPress</span>
                      <span>DA</span>
                      <span>Site Web</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
            <article className="pcard" inert aria-hidden="true">
              <Link href="/realisations/claimz/" className="pcard__link">
                <div className="pcard__media">
                  <img
                    src="/images/portfolio/claimz.webp"
                    width="800"
                    height="454"
                    alt="Projet Claimz"
                    loading="lazy"
                  />
                </div>
                <span className="pcard__hover">Voir le projet</span>
                <div className="pcard__info">
                  <p className="pcard__title">Claimz</p>
                  <div className="pcard__meta">
                    <div className="pcard__tags">
                      <span>WordPress</span>
                      <span>DA</span>
                      <span>Site Web</span>
                      <span>Réseaux Sociaux</span>
                    </div>
                    <div className="pcard__stat">
                      <strong>+120%</strong> Performance pub
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </div>
          <div className="carousel__cta">
            <Link href="/realisations/" className="btn btn--outline-pill">
              Voir plus de projets{' '}
              <span className="btn--outline-pill__icon">
                <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#i-solid-arrow-up-right-from-square" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
        {/* ============ BLOC LOCAL PARIS ============ */}
        <section className="wp-local">
          <div className="container">
            <div className="wp-local__wrap">
              <div>
                <h2 className="wp-local__title">
                  Une agence WordPress pour les entreprises parisiennes, et partout en France
                </h2>
                <p className="wp-local__text">
                  Kameo a son adresse au 9 rue des Colonnes, à Paris 2<sup>e</sup>. Le brief, les ateliers et les
                  présentations de maquettes se font en visio sur Google Meet, sans déplacement, avec un espace de
                  projet partagé sur Notion. Nos clients sont à Paris, en Île-de-France et dans toute la
                  France, et les délais sont les mêmes pour tous.
                </p>
                <div className="wp-local__address">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-location-dot" />
                  </svg>
                  <div className="wp-local__address-text">
                    <strong>Kameo · 9 rue des Colonnes, 75002 Paris</strong>
                    Joignables du lundi au vendredi, 9 h - 17 h, en visio ou par téléphone{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============ QUAND CHOISIR WORDPRESS ============ */}
        <section className="wp-when">
          <div className="container">
            <header className="wp-when__head">
              <span className="wp-when__eyebrow">Le bon outil pour le bon besoin</span>
              <h2 className="wp-when__title">Quand WordPress est le bon choix (et quand ce ne l'est pas)</h2>
              <p className="wp-when__intro">
                WordPress propulse 43 % du web parce qu'il est polyvalent et économique. Mais ce n'est pas la bonne
                réponse à tous les besoins. Voici notre lecture honnête, fondée sur plus de 50 projets WordPress livrés.
              </p>
            </header>
            <div className="wp-when__grid">
              <article className="wp-when__col wp-when__col--yes">
                <h3 className="wp-when__col-title">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-check" />
                  </svg>
                  Choisir WordPress, oui
                </h3>
                <ul className="wp-when__list">
                  <li>
                    <strong>Site vitrine PME / cabinet conseil :</strong> WordPress permet une mise à jour autonome du
                    contenu, ce qui est crucial quand vous voulez publier des actualités, études de cas ou articles sans
                    repasser par un dev.
                  </li>
                  <li>
                    <strong>E-commerce jusqu'à 5 000 références :</strong> WooCommerce est mature, accepte tous les
                    moyens de paiement (Stripe, Mollie, PayPal, virement), gère TVA multi-pays, abonnements,
                    multi-entrepôts. Pour des catalogues moyens, c'est imbattable en coût total.
                  </li>
                  <li>
                    <strong>Blog ou média éditorial :</strong> WordPress reste la référence pour publier vite,
                    structurer un calendrier éditorial, gérer plusieurs rédacteurs, faire du SEO de fond avec Yoast ou
                    Rank Math.
                  </li>
                  <li>
                    <strong>Site corporate avec contenu riche :</strong> ACF (Advanced Custom Fields) permet de créer
                    des templates sur-mesure pour études de cas, fiches collaborateurs, métiers, références.
                  </li>
                  <li>
                    <strong>Multilingue exigeant :</strong> WPML ou Polylang offrent un workflow de traduction
                    professionnel, avec gestion par pays, URLs SEO-friendly, hreflang automatique.
                  </li>
                  <li>
                    <strong>Site avec budget contrôlé :</strong> écosystème open-source, hébergement abordable, large
                    communauté de freelances et agences. Aucun lock-in éditeur.
                  </li>
                </ul>
              </article>
              <article className="wp-when__col wp-when__col--no">
                <h3 className="wp-when__col-title">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-xmark" />
                  </svg>
                  WordPress n'est pas le bon outil pour
                </h3>
                <ul className="wp-when__list">
                  <li>
                    <strong>Marketplace multi-vendeurs à fort trafic :</strong> au-delà d'un certain volume, WooCommerce
                    demande beaucoup d'optimisation. Mieux vaut Sharetribe, Mirakl ou un dev custom Node.js / Laravel.
                  </li>
                  <li>
                    <strong>Application SaaS métier complexe :</strong> dashboard temps réel, calculs lourds, logique
                    métier dense. Là, un framework dédié (Next.js, Rails, Django) est plus adapté que WordPress.
                  </li>
                  <li>
                    <strong>Catalogue e-commerce 10 000+ SKU avec ERP :</strong> les contraintes deviennent lourdes.
                    Magento, Shopware ou une solution headless (Shopify Plus + front Next.js) sont plus performants.
                  </li>
                  <li>
                    <strong>Site mobile-first à très forte interactivité :</strong> animations complexes, parcours type
                    configurateur 3D. Webflow ou un build custom Three.js / GSAP est plus pertinent.
                  </li>
                  <li>
                    <strong>Plateforme communautaire massive :</strong> forum à plusieurs milliers d'inscrits actifs,
                    messagerie temps réel. Discord, Discourse ou Circle font le job mieux que bbPress sur WordPress.
                  </li>
                  <li>
                    <strong>Site très exposé sécuritairement :</strong> WordPress est le CMS le plus attaqué au monde.
                    Si votre activité a un profil de risque élevé (santé, finance critique), prévoyez un budget sécurité
                    conséquent ou regardez un CMS plus discret comme Statamic ou Craft.
                  </li>
                </ul>
              </article>
            </div>
            <p className="wp-when__verdict">
              Notre principe : <strong>on ne vous vend pas WordPress par défaut</strong>. Si votre besoin sort du
              périmètre WordPress, on vous le dit franchement au brief, quitte à vous orienter vers un confrère ou une
              autre techno. Notre rentabilité repose sur la satisfaction long-terme, pas sur des projets bancals.
            </p>
          </div>
        </section>
        {/* ============ EQUIPE WP ============ */}
        <section className="wp-team">
          <div className="container">
            <header className="wp-team__head">
              <span className="wp-team__eyebrow">L'équipe Kameo</span>
              <h2 className="wp-team__title">Vous parlez aux dirigeants, pas à un commercial qui sous-traite</h2>
              <p className="wp-team__intro">
                Stratégie, design, développement WordPress, SEO : Kameo compte 7&nbsp;personnes. Les chefs de projet sont
                les deux dirigeants, Benjamin Dayan et Louison Boutet : vous échangez avec eux dès le brief, pendant
                tout le projet, et ils restent vos interlocuteurs en maintenance.
              </p>
            </header>
            <div className="wp-team__grid">
              <article className="wp-team__card">
                <div className="wp-team__avatar">
                  <img
                    src="/images/benjamin.webp"
                    alt="Benjamin Dayan, Fondateur agence WordPress Kameo Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="wp-team__name">Benjamin Dayan</h3>
                <p className="wp-team__role">Fondateur · Stratégie &amp; SEO</p>
                <p className="wp-team__bio">
                  Pilote la stratégie SEO, le cadrage projet WordPress et la relation client. Garantit que votre site
                  sera conçu pour ranker dès la mise en ligne.
                </p>
              </article>
              <article className="wp-team__card">
                <div className="wp-team__avatar">
                  <img
                    src="/images/Aysha.webp"
                    alt="Aysha, Directrice artistique agence WordPress Kameo Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="wp-team__name">Aysha B.</h3>
                <p className="wp-team__role">Directrice artistique</p>
                <p className="wp-team__bio">
                  Conçoit les maquettes Figma de votre site WordPress. Design pensé pour guider le regard, créer la
                  confiance et déclencher l'action.
                </p>
              </article>
              <article className="wp-team__card">
                <div className="wp-team__avatar">
                  <img
                    src="/images/Louison.webp"
                    alt="Louison Boutet, directeur général de Kameo"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="wp-team__name">Louison Boutet</h3>
                <p className="wp-team__role">Directeur général · Chef de projet WordPress</p>
                <p className="wp-team__bio">
                  Pilote vos projets avec Benjamin, construit votre site (Elementor Pro ou thème codé), optimise les
                  Core Web Vitals et gère la mise en ligne.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ TEMOIGNAGES CLIENTS ============ */}
        <section className="wp-reviews">
          <div className="container">
            <header className="wp-reviews__head">
              <span className="wp-reviews__eyebrow">Ce que nos clients disent</span>
              <h2 className="wp-reviews__title">{PROOF.avisNombre} avis Trustpilot, 4,6/5 : voici quelques retours</h2>
              <p className="wp-reviews__intro">
                Témoignages issus de nos clients ayant travaillé avec Kameo sur leur site WordPress. Avis vérifiés et
                publiés sur{' '}
                <a href="https://fr.trustpilot.com/review/agence-kameo.fr" target="_blank" rel="noopener">
                  Trustpilot
                </a>
                .
              </p>
            </header>
            <div className="wp-reviews__grid">
              <article className="wp-review">
                <div className="wp-review__stars" aria-label="Note : 5 sur 5">
                  ★★★★★
                </div>
                <blockquote className="wp-review__text">
                  Extrêmement content du travail effectué par l'agence Kameo : nouveau logo, charte graphique et site
                  internet WordPress. Équipe à l'écoute, livraison dans les temps, résultat à la hauteur de nos
                  attentes.
                </blockquote>
                <figure className="wp-review__author">
                  <img
                    src="/images/Andrea Miranda.webp"
                    width="80"
                    height="80"
                    alt="Andrea Miranda, client Kameo agence WordPress Paris"
                    loading="lazy"
                  />
                  <figcaption>
                    <strong>Andrea Miranda</strong>
                    <span className="wp-review__role">Joonetsu Knives</span>
                  </figcaption>
                </figure>
              </article>
              <article className="wp-review">
                <div className="wp-review__stars" aria-label="Note : 5 sur 5">
                  ★★★★★
                </div>
                <blockquote className="wp-review__text">
                  Benjamin se distingue par une excellente écoute et une vraie compréhension des besoins. Louison
                  apporte une expertise technique SEO solide, avec une parfaite maîtrise des enjeux liés à la structure
                  du site, aux performances et à l'indexation.
                </blockquote>
                <figure className="wp-review__author">
                  <div
                    className="wp-review__avatar-initials"
                    aria-hidden="true"
                    style={{ background: '#8b5cf6', color: '#fff' }}
                  >
                    VD
                  </div>
                  <figcaption>
                    <strong>Verena Dey</strong>
                    <span className="wp-review__role">Cliente SEO WordPress</span>
                  </figcaption>
                </figure>
              </article>
              <article className="wp-review">
                <div className="wp-review__stars" aria-label="Note : 5 sur 5">
                  ★★★★★
                </div>
                <blockquote className="wp-review__text">
                  J'ai fait appel à Kameo pour réaliser mon site e-commerce. Malgré le fait que je n'avais aucune
                  connaissance dans le domaine, ils ont su créer le site qui me correspond à 100% ! Ils ont fait preuve
                  d'écoute, de patience et de bienveillance.
                </blockquote>
                <figure className="wp-review__author">
                  <div
                    className="wp-review__avatar-initials"
                    aria-hidden="true"
                    style={{ background: '#ec4899', color: '#fff' }}
                  >
                    AS
                  </div>
                  <figcaption>
                    <strong>Atelier Songe</strong>
                    <span className="wp-review__role">Site e-commerce WooCommerce</span>
                  </figcaption>
                </figure>
              </article>
              <article className="wp-review">
                <div className="wp-review__stars" aria-label="Note : 5 sur 5">
                  ★★★★★
                </div>
                <blockquote className="wp-review__text">
                  Équipe efficace, impliquée, à l'écoute, transparente, disponible, fiable, qui tient ses délais, vous
                  donne des conseils et fait le maximum pour répondre à vos besoins. Je recommande !
                </blockquote>
                <figure className="wp-review__author">
                  <div
                    className="wp-review__avatar-initials"
                    aria-hidden="true"
                    style={{ background: '#0ea5e9', color: '#fff' }}
                  >
                    CT
                  </div>
                  <figcaption>
                    <strong>Céline Taranto</strong>
                    <span className="wp-review__role">Cliente WordPress</span>
                  </figcaption>
                </figure>
              </article>
            </div>
            <p className="wp-reviews__cta">
              <a
                href="https://fr.trustpilot.com/review/agence-kameo.fr"
                target="_blank"
                rel="noopener"
                className="btn btn--outline-pill"
              >
                Lire les {PROOF.avisNombre} avis sur Trustpilot{' '}
                <span className="btn--outline-pill__icon">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-arrow-up-right-from-square" />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </section>
        {/* ============ FAQ ============ */}
        <section className="expertise-faq" aria-labelledby="faq-title">
          <div className="container">
            <h2 className="expertise-faq__title" id="faq-title">
              Vos questions sur notre agence WordPress à Paris
            </h2>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien coûte la création d'un site WordPress par une agence à Paris ?{' '}
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
                    Une création WordPress sur-mesure chez Kameo démarre à 1 299 € HT. Le prix exact dépend du format
                    (landing, vitrine, e-commerce), du nombre de pages, du niveau d'ambition graphique, des intégrations
                    spécifiques (CRM, paiement, multilingue) et du contenu à rédiger.{' '}
                    <Link href="/creation-site-wordpress/">
                      Voir les 3 formats détaillés avec tarifs sur la page Création WordPress
                    </Link>
                    .
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Quel délai pour qu'une agence WordPress livre mon site ?{' '}
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
                    Comptez 14 jours pour une landing page ou un site vitrine WordPress, et 1 mois pour un e-commerce
                    WooCommerce. Ces délais incluent la stratégie SEO, le design, le développement, la recette et la
                    formation. Nous tenons ces délais parce que la même équipe mène tout le projet, sans intermédiaire.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Pourquoi choisir une agence WordPress plutôt qu'un freelance ?{' '}
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
                    Un freelance WordPress est généralement excellent sur une compétence (design OU dev OU SEO) mais
                    doit sous-traiter le reste, ce qui rallonge les délais et fragmente la responsabilité. Une{' '}
                    <strong>agence WordPress à Paris</strong> comme Kameo réunit designer, développeur, expert SEO et
                    rédacteur dans une même équipe : un seul interlocuteur, un projet cohérent, une garantie de continuité
                    si quelqu'un est en congé ou malade. Et un encadrement contractuel plus solide.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  WordPress est-il vraiment adapté à un site e-commerce sérieux ?{' '}
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
                    Oui, WooCommerce, le plugin e-commerce de WordPress, propulse plus de{' '}
                    <strong>23 % des boutiques en ligne dans le monde</strong>. Il gère le paiement Stripe, Mollie,
                    PayPal, les stocks multi-entrepôts, les abonnements, le multilingue, l'export ERP. Pour des
                    catalogues jusqu'à plusieurs milliers de références, WooCommerce est une solution mature,
                    performante et économique comparée à Shopify ou Magento. Au-delà de 10 000 SKU avec contraintes
                    lourdes, nous évaluons ensemble si une autre techno serait plus adaptée.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Faites-vous la maintenance WordPress après la mise en ligne ?{' '}
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
                    Oui, c'est même central dans notre approche. Un site WordPress demande des mises à jour régulières
                    (cœur, thème, plugins), des sauvegardes externalisées, une surveillance sécurité. Nous proposons des{' '}
                    <strong>forfaits de maintenance WordPress mensuels</strong> avec un interlocuteur dédié, du support
                    réactif, et une enveloppe d'évolutions incluses chaque mois. Voir notre page{' '}
                    <Link href="/maintenance-wordpress/">maintenance WordPress</Link> pour le détail.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Le SEO est-il vraiment inclus dans la création du site WordPress ?{' '}
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
                    Oui, et c'est notre différenciation principale. Le <strong>SEO technique</strong> (vitesse,
                    Schema.org, sitemap, robots.txt, balisage sémantique) et le <strong>SEO éditorial</strong> (audit
                    mots-clés, architecture en silos, rédaction des balises et contenus optimisés) sont inclus dans tous
                    nos sites WordPress. Nos clients voient bouger leur positionnement Google dans les 3 à 6 mois
                    suivant la mise en ligne, preuve à l'appui, voir les{' '}
                    <a href="#cas-clients">cas Nexus Games et Medical Market</a> plus haut.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Comment démarre-t-on un projet WordPress avec Kameo ?{' '}
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
                    Première étape : un <strong>rendez-vous découverte de 30 minutes</strong> en visio pour comprendre
                    votre activité, vos objectifs, votre cible, vos
                    contraintes et votre budget. Deuxième étape : nous vous envoyons sous 24 h un{' '}
                    <strong>devis détaillé</strong> avec planning, livrables et tarif fixe. Si ça vous convient, on
                    lance le projet la semaine suivante.{' '}
                    <a href="https://calendly.com/contact-agence-kameo/30min" target="_blank" rel="noopener">
                      Réservez votre RDV découverte ici
                    </a>
                    .
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        {/* ============ CTA FINAL ============ */}
        <section className="wp-final">
          <div className="wp-final__container">
            <div className="wp-final__box">
              <div className="wp-final__wrap">
                <h2 className="wp-final__title">Prêt à lancer votre projet WordPress ?</h2>
                <p className="wp-final__text">
                  Notre agence WordPress parisienne vous répond sous 24 h avec un devis transparent, un planning précis
                  et un interlocuteur dédié. Pas de modèle pré-fait, pas de sous-traitance, pas de promesse en l'air.
                </p>
                <div className="wp-final__actions">
                  <a
                    href="https://calendly.com/contact-agence-kameo/30min"
                    target="_blank"
                    rel="noopener"
                    className="wp-final__cta wp-final__cta--primary"
                  >
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-calendar-check" />
                    </svg>
                    Réserver un RDV découverte{' '}
                  </a>
                  <Link href="/contact/" className="wp-final__cta wp-final__cta--secondary">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-envelope" />
                    </svg>
                    Nous écrire{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <JsonLd data={[...pageSchemas, websiteGraph({ path: PATH, title: TITLE })]} />
    </>
  );
}
