import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import css from './styles';
import { PROOF } from '@/lib/site';

const PATH = '/maintenance-wordpress/';
const TITLE = 'Maintenance WordPress Paris : forfaits dès 79 € HT/mois | Kameo';
const DESCRIPTION =
  'Maintenance WordPress par une agence à Paris : mises à jour, sauvegardes, sécurité 24/7, support. Forfaits sans engagement dès 79 € HT/mois.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Agence WordPress Paris', path: '/agence-wordpress-paris/' },
  { name: 'Maintenance WordPress', path: '/maintenance-wordpress/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function MaintenanceWordpressPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main id="main">
        {/* ============ BREADCRUMB BACK ============ */}
        <div className="silo-back">
          <div className="container">
            <Link href="/agence-wordpress-paris/" className="silo-back__link">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 4L6 8l4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Retour à l'agence WordPress Paris{' '}
            </Link>
          </div>
        </div>
        {/* ============ HERO ============ */}
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Maintenance WordPress <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Maintenance WordPress à Paris : <br />
              <span className="page-hero__title-muted">forfaits dès 79 € HT par mois, sans engagement</span>
            </h1>
            <p className="page-hero__text">
              Mises à jour cœur, thème et plugins, sauvegardes externalisées, monitoring sécurité 24/7, support
              technique réactif et option suivi SEO. <strong>Forfaits dès 79 € HT/mois, sans engagement.</strong> Aucun
              site de nos clients sous contrat n'a été piraté depuis 2023.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                <strong>★ 4,6/5</strong> sur Trustpilot · {PROOF.avisNombre} avis
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                <strong>0 site piraté</strong> depuis 2023
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                SLA <strong>24 h ouvrées</strong>
              </span>
            </div>
            <div className="page-hero__actions">
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="page-hero__btn"
              >
                Demander mon audit gratuit{' '}
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
              <a href="#forfaits" className="page-hero__btn page-hero__btn--secondary">
                Voir les 3 forfaits{' '}
              </a>
            </div>
          </div>
        </section>
        {/* ============ POURQUOI MAINTENIR ============ */}
        <section className="maint-why">
          <div className="container">
            <header className="maint-why__head">
              <span className="maint-why__eyebrow">Pourquoi maintenir</span>
              <h2 className="maint-why__title">Pourquoi une maintenance WordPress est indispensable</h2>
              <p className="maint-why__intro">
                Un site WordPress non maintenu pendant 6 mois est, selon les statistiques de WPScan,{' '}
                <strong>4 à 7 fois plus susceptible d'être piraté</strong>. Mais la sécurité n'est qu'une raison parmi
                d'autres de souscrire à un forfait de maintenance régulier.
              </p>
            </header>
            <div className="maint-why__grid">
              <article className="maint-why__card">
                <span className="maint-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-shield-halved" />
                  </svg>
                </span>
                <h3 className="maint-why__name">Sécurité (le risque n°1)</h3>
                <p className="maint-why__text">
                  Plus de 40 000 sites WordPress sont piratés chaque jour dans le monde. Les failles viennent à 90 % de
                  plugins ou thèmes obsolètes. Les mises à jour régulières corrigent ces failles avant qu'elles ne
                  soient exploitées.
                </p>
              </article>
              <article className="maint-why__card">
                <span className="maint-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-bolt" />
                  </svg>
                </span>
                <h3 className="maint-why__name">Performance qui se dégrade</h3>
                <p className="maint-why__text">
                  Plugins qui s'accumulent, base de données qui gonfle, cache encombré, images non optimisées : un site
                  WordPress perd en moyenne 30 % de vitesse en 12 mois sans entretien. La perf impacte directement le
                  SEO et la conversion.
                </p>
              </article>
              <article className="maint-why__card">
                <span className="maint-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-bug" />
                  </svg>
                </span>
                <h3 className="maint-why__name">Conflits de plugins</h3>
                <p className="maint-why__text">
                  Une mise à jour ratée de WordPress, du thème ou d'un plugin peut casser votre site silencieusement
                  (formulaire qui n'envoie plus, page blanche, admin inaccessible). Un environnement de test évite ces
                  incidents.
                </p>
              </article>
              <article className="maint-why__card">
                <span className="maint-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-magnifying-glass-chart" />
                  </svg>
                </span>
                <h3 className="maint-why__name">SEO et Core Web Vitals</h3>
                <p className="maint-why__text">
                  Google priorise les sites performants en mobile. Une baisse de PageSpeed ou de Core Web Vitals fait
                  perdre des positions sans bruit. La maintenance préventive surveille ces indicateurs et corrige avant
                  que ça n'impacte le trafic.
                </p>
              </article>
              <article className="maint-why__card">
                <span className="maint-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-database" />
                  </svg>
                </span>
                <h3 className="maint-why__name">Continuité business</h3>
                <p className="maint-why__text">
                  Sans sauvegarde externalisée, un crash serveur ou une corruption de la base peuvent vous faire perdre
                  des semaines de travail. Les sauvegardes quotidiennes externalisées permettent de remettre le site en
                  service en moins d'une heure.
                </p>
              </article>
              <article className="maint-why__card">
                <span className="maint-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-scale-balanced" />
                  </svg>
                </span>
                <h3 className="maint-why__name">Conformité RGPD</h3>
                <p className="maint-why__text">
                  Cookies, formulaires, données utilisateurs : la conformité RGPD évolue. Une maintenance suivie
                  garantit que votre installation reste conforme aux dernières exigences réglementaires.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ CE QU'INCLUT UN FORFAIT ============ */}
        <section className="maint-included">
          <div className="container">
            <header className="maint-included__head">
              <h2 className="maint-included__title">Ce qu'inclut un forfait de maintenance WordPress Kameo</h2>
              <p className="maint-included__intro">
                Pas de maintenance "low-cost" qui se contente de cliquer sur "Mettre à jour" une fois par mois. Notre
                approche, encadrée par le <strong>KAMEO-Framework maintenance</strong> (staging, contrôle, déploiement),
                couvre la santé technique, la sécurité, les sauvegardes, le support et l'évolution de votre site
                WordPress.
              </p>
            </header>
            <div className="maint-included__grid">
              <article className="maint-incl">
                <span className="maint-incl__icon">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-arrows-rotate" />
                  </svg>
                </span>
                <div>
                  <h3 className="maint-incl__name">Mises à jour maîtrisées</h3>
                  <p className="maint-incl__text">
                    Cœur WordPress, thème, plugins, traduction : chaque mise à jour est testée en environnement de
                    staging avant d'être appliquée en production. Pas de site cassé par un update raté.
                  </p>
                </div>
              </article>
              <article className="maint-incl">
                <span className="maint-incl__icon">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-cloud-arrow-up" />
                  </svg>
                </span>
                <div>
                  <h3 className="maint-incl__name">Sauvegardes quotidiennes externalisées</h3>
                  <p className="maint-incl__text">
                    Sauvegarde complète (fichiers + base de données) chaque nuit, stockée 30 à 90 jours hors hébergeur.
                    Restauration possible en moins de 30 minutes en cas d'incident.
                  </p>
                </div>
              </article>
              <article className="maint-incl">
                <span className="maint-incl__icon">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-shield-halved" />
                  </svg>
                </span>
                <div>
                  <h3 className="maint-incl__name">Monitoring sécurité 24/7</h3>
                  <p className="maint-incl__text">
                    Détection automatique des tentatives d'intrusion, scan malware régulier, durcissement de l'admin,
                    blocage des IP malveillantes via Cloudflare. Alerte immédiate en cas d'anomalie.
                  </p>
                </div>
              </article>
              <article className="maint-incl">
                <span className="maint-incl__icon">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-headset" />
                  </svg>
                </span>
                <div>
                  <h3 className="maint-incl__name">Support technique réactif</h3>
                  <p className="maint-incl__text">
                    SLA contractuel de 24 h ouvrées sur tous les forfaits. Demandes par email ou WhatsApp dédié, suivi
                    en français, équipe Paris 2<sup>e</sup>. Procédure d'urgence si site indisponible.
                  </p>
                </div>
              </article>
              <article className="maint-incl">
                <span className="maint-incl__icon">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-gauge-high" />
                  </svg>
                </span>
                <div>
                  <h3 className="maint-incl__name">Monitoring performance</h3>
                  <p className="maint-incl__text">
                    Surveillance des Core Web Vitals, alerte si le score PageSpeed baisse sous le seuil défini, rapport
                    mensuel détaillé de santé technique de votre installation WordPress.
                  </p>
                </div>
              </article>
              <article className="maint-incl">
                <span className="maint-incl__icon">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-pen-to-square" />
                  </svg>
                </span>
                <div>
                  <h3 className="maint-incl__name">Développement mensuel</h3>
                  <p className="maint-incl__text">
                    1 heure par mois (sur les forfaits Pro et Premium) pour ajouter une page, modifier un module,
                    intégrer un nouveau formulaire ou faire une petite évolution UX. Pas de devis à chaque
                    micro-demande.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* ============ COMPARATIF KAMEO VS DIY VS HÉBERGEUR ============ */}
        <section className="maint-vs">
          <div className="container">
            <header className="maint-vs__head">
              <h2 className="maint-vs__title">Maintenance Kameo vs faire soi-même vs hébergeur managé</h2>
              <p className="maint-vs__intro">
                Vous pouvez maintenir votre site WordPress vous-même, déléguer à votre hébergeur (WP Engine, Kinsta,
                o2switch managé), ou souscrire à un forfait avec une agence comme nous. Voici notre comparatif honnête.
              </p>
            </header>
            <div className="maint-vs__wrap">
              <table className="maint-vs__table">
                <thead>
                  <tr>
                    <th scope="col">Critère</th>
                    <th scope="col" className="is-winner">
                      <span className="maint-vs__winner-badge">
                        <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                          <use href="/icons.svg#i-solid-crown" />
                        </svg>
                        Recommandé
                      </span>
                      <span className="maint-vs__winner-title">Forfait Kameo</span>
                    </th>
                    <th scope="col">Faire soi-même</th>
                    <th scope="col">Hébergeur managé</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Coût mensuel</th>
                    <td className="is-winner maint-vs__rate--top">79 - 299 €</td>
                    <td className="maint-vs__rate--top">0 € (mais temps)</td>
                    <td className="maint-vs__rate--mid">20 - 100 €</td>
                  </tr>
                  <tr>
                    <th scope="row">Mises à jour testées en staging</th>
                    <td className="is-winner maint-vs__rate--top">Oui systématique</td>
                    <td className="maint-vs__rate--low">Rarement (risque)</td>
                    <td className="maint-vs__rate--mid">Variable selon offre</td>
                  </tr>
                  <tr>
                    <th scope="row">Sauvegardes externalisées</th>
                    <td className="is-winner maint-vs__rate--top">30 à 90 j hors hébergeur</td>
                    <td className="maint-vs__rate--low">À gérer soi-même</td>
                    <td className="maint-vs__rate--mid">Sur le même hébergeur</td>
                  </tr>
                  <tr>
                    <th scope="row">Monitoring sécurité 24/7</th>
                    <td className="is-winner maint-vs__rate--top">Oui avec alertes</td>
                    <td className="maint-vs__rate--low">Plugin manuel</td>
                    <td className="maint-vs__rate--mid">Firewall générique</td>
                  </tr>
                  <tr>
                    <th scope="row">Support technique humain</th>
                    <td className="is-winner maint-vs__rate--top">24 h ouvrées</td>
                    <td className="maint-vs__rate--low">Forums, Google</td>
                    <td className="maint-vs__rate--mid">Chat 24/7 anglais</td>
                  </tr>
                  <tr>
                    <th scope="row">Évolutions mensuelles incluses</th>
                    <td className="is-winner maint-vs__rate--top">4 à 8 h/mois</td>
                    <td className="maint-vs__rate--low">0 (vous le faites)</td>
                    <td className="maint-vs__rate--low">Aucune</td>
                  </tr>
                  <tr>
                    <th scope="row">Plan de roll-back si incident</th>
                    <td className="is-winner maint-vs__rate--top">Sous 30 min</td>
                    <td className="maint-vs__rate--low">Si sauvegarde dispo</td>
                    <td className="maint-vs__rate--mid">Snapshot hébergeur</td>
                  </tr>
                  <tr>
                    <th scope="row">Conseil sur évolutions du site</th>
                    <td className="is-winner maint-vs__rate--top">Inclus</td>
                    <td className="maint-vs__rate--low">Aucun</td>
                    <td className="maint-vs__rate--low">Aucun</td>
                  </tr>
                  <tr>
                    <th scope="row">Temps que vous y consacrez</th>
                    <td className="is-winner maint-vs__rate--top">0</td>
                    <td className="maint-vs__rate--low">3 - 6 h/mois</td>
                    <td className="maint-vs__rate--mid">1 - 2 h/mois</td>
                  </tr>
                  <tr>
                    <th scope="row">Adapté pour…</th>
                    <td className="is-winner maint-vs__rate--top">Pros qui veulent zéro souci</td>
                    <td className="maint-vs__rate--mid">Bricoleurs avertis</td>
                    <td className="maint-vs__rate--mid">Sites simples sans évolution</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* ============ 3 FORFAITS ============ */}
        <section className="maint-plans" id="forfaits">
          <div className="container">
            <header className="maint-plans__head">
              <h2 className="maint-plans__title">3 forfaits de maintenance WordPress, sans engagement</h2>
              <p className="maint-plans__intro">
                Choisissez le forfait adapté à votre site et votre rythme d'évolution.{' '}
                <strong>Aucun engagement annuel</strong>, résiliation possible chaque mois avec préavis de 15 jours.
              </p>
            </header>
            <div className="maint-plans__grid">
              <article className="maint-plan">
                <div className="maint-plan__name">Essentiel</div>
                <div className="maint-plan__price">
                  79&nbsp;€<small>/ mois HT</small>
                </div>
                <p className="maint-plan__catch">
                  Maintenance technique de base : on garde votre site à jour, sécurisé, et on intervient si problème.
                </p>
                <span className="maint-plan__sla">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-clock" />
                  </svg>
                  SLA 24 h ouvrées
                </span>
                <ul className="maint-plan__list">
                  <li>Mises à jour mensuelles testées</li>
                  <li>Sauvegardes quotidiennes 30 jours</li>
                  <li>Monitoring sécurité standard</li>
                  <li>Support par email</li>
                  <li>Intervention en cas de problème</li>
                  <li className="muted">Pas de développement inclus</li>
                  <li className="muted">Pas de suivi SEO</li>
                </ul>
                <a
                  href="https://calendly.com/contact-agence-kameo/30min"
                  target="_blank"
                  rel="noopener"
                  className="maint-plan__cta"
                >
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-calendar-check" />
                  </svg>
                  Réserver mon RDV
                </a>
              </article>
              <article className="maint-plan maint-plan--featured">
                <span className="maint-plan__badge">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-fire" />
                  </svg>
                  Le plus demandé
                </span>
                <div className="maint-plan__name">Pro</div>
                <div className="maint-plan__price">
                  149&nbsp;€<small>/ mois HT</small>
                </div>
                <p className="maint-plan__catch">
                  Tout l'Essentiel + 1 h de développement par mois pour faire évoluer votre site ou ajouter des
                  fonctionnalités.
                </p>
                <span className="maint-plan__sla">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-clock" />
                  </svg>
                  SLA 24 h ouvrées
                </span>
                <ul className="maint-plan__list">
                  <li>Tout le forfait Essentiel</li>
                  <li>Sauvegardes quotidiennes 60 jours</li>
                  <li>Monitoring sécurité 24/7</li>
                  <li>Support email + WhatsApp dédié</li>
                  <li>
                    <strong>1 h de développement / mois</strong>
                  </li>
                  <li>Évolutions, ajouts, modifications</li>
                  <li className="muted">Pas de suivi SEO</li>
                </ul>
                <a
                  href="https://calendly.com/contact-agence-kameo/30min"
                  target="_blank"
                  rel="noopener"
                  className="maint-plan__cta"
                >
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-calendar-check" />
                  </svg>
                  Réserver mon RDV
                </a>
              </article>
              <article className="maint-plan">
                <div className="maint-plan__name">Premium</div>
                <div className="maint-plan__price">
                  299&nbsp;€<small>/ mois HT</small>
                </div>
                <p className="maint-plan__catch">
                  Tout le forfait Pro + suivi SEO mensuel : positions, performance, optimisations techniques pour faire
                  grimper votre site sur Google.
                </p>
                <span className="maint-plan__sla">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-clock" />
                  </svg>
                  SLA 24 h ouvrées
                </span>
                <ul className="maint-plan__list">
                  <li>Tout le forfait Pro</li>
                  <li>Sauvegardes quotidiennes 90 jours</li>
                  <li>WhatsApp dédié + canal prioritaire</li>
                  <li>
                    <strong>1 h de développement / mois</strong>
                  </li>
                  <li>
                    <strong>Suivi SEO mensuel actif</strong>
                  </li>
                  <li>Reporting Search Console mensuel</li>
                  <li>Suivi et analyse du SEO</li>
                </ul>
                <a
                  href="https://calendly.com/contact-agence-kameo/30min"
                  target="_blank"
                  rel="noopener"
                  className="maint-plan__cta"
                >
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-calendar-check" />
                  </svg>
                  Réserver mon RDV
                </a>
              </article>
            </div>
          </div>
        </section>
        {/* ============ TABLEAU INCLUSIONS DÉTAILLÉ ============ */}
        <section className="maint-table">
          <div className="container">
            <header className="maint-table__head">
              <h2 className="maint-table__title">Le détail complet des 3 forfaits</h2>
            </header>
            <div className="maint-table__wrap">
              <table className="maint-table__table">
                <thead>
                  <tr>
                    <th scope="col">Inclusion</th>
                    <th scope="col">
                      Essentiel
                      <br />
                      <small style={{ fontWeight: '600', color: 'rgba(15,17,21,.4)' }}>79 € HT/mois</small>
                    </th>
                    <th scope="col" className="is-featured">
                      Pro
                      <br />
                      <small style={{ fontWeight: '600', color: 'rgba(237,110,99,.7)' }}>149 € HT/mois</small>
                    </th>
                    <th scope="col">
                      Premium
                      <br />
                      <small style={{ fontWeight: '600', color: 'rgba(15,17,21,.4)' }}>299 € HT/mois</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      colSpan={4}
                      style={{
                        background: '#fff',
                        color: '#ED6E63',
                        fontSize: '11px',
                        letterSpacing: '.1em',
                        textTransform: 'uppercase',
                        padding: '18px 22px 10px',
                      }}
                    >
                      — Maintenance technique —
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Fréquence des mises à jour</th>
                    <td>Mensuelles</td>
                    <td className="is-featured">Bi-mensuelles</td>
                    <td>Hebdomadaires</td>
                  </tr>
                  <tr>
                    <th scope="row">Tests des mises à jour en staging</th>
                    <td>
                      <span className="maint-table__check">✓</span>
                    </td>
                    <td className="is-featured">
                      <span className="maint-table__check">✓</span>
                    </td>
                    <td>
                      <span className="maint-table__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Sauvegardes quotidiennes</th>
                    <td>30 jours</td>
                    <td className="is-featured">60 jours</td>
                    <td>90 jours</td>
                  </tr>
                  <tr>
                    <th scope="row">Stockage externalisé PlanetHoster</th>
                    <td>
                      <span className="maint-table__check">✓</span>
                    </td>
                    <td className="is-featured">
                      <span className="maint-table__check">✓</span>
                    </td>
                    <td>
                      <span className="maint-table__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Monitoring sécurité Wordfence</th>
                    <td>Standard</td>
                    <td className="is-featured">24/7</td>
                    <td>24/7 Premium</td>
                  </tr>
                  <tr>
                    <th scope="row">Intervention en cas de problème</th>
                    <td>
                      <span className="maint-table__check">✓</span>
                    </td>
                    <td className="is-featured">
                      <span className="maint-table__check">✓</span>
                    </td>
                    <td>
                      <span className="maint-table__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Plan de roll-back si incident</th>
                    <td>
                      <span className="maint-table__check">✓</span>
                    </td>
                    <td className="is-featured">
                      <span className="maint-table__check">✓</span>
                    </td>
                    <td>
                      <span className="maint-table__check">✓</span> express
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      colSpan={4}
                      style={{
                        background: '#fff',
                        color: '#ED6E63',
                        fontSize: '11px',
                        letterSpacing: '.1em',
                        textTransform: 'uppercase',
                        padding: '18px 22px 10px',
                      }}
                    >
                      — Support —
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">SLA réponse support</th>
                    <td>24 h ouvrées</td>
                    <td className="is-featured">24 h ouvrées</td>
                    <td>24 h ouvrées</td>
                  </tr>
                  <tr>
                    <th scope="row">Canal de support</th>
                    <td>Email</td>
                    <td className="is-featured">Email + Slack</td>
                    <td>WhatsApp dédié prioritaire</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      colSpan={4}
                      style={{
                        background: '#fff',
                        color: '#ED6E63',
                        fontSize: '11px',
                        letterSpacing: '.1em',
                        textTransform: 'uppercase',
                        padding: '18px 22px 10px',
                      }}
                    >
                      — Développement et évolutions —
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Heures de développement / mois</th>
                    <td>
                      <span className="maint-table__dash">—</span>
                    </td>
                    <td className="is-featured">1 h</td>
                    <td>1 h</td>
                  </tr>
                  <tr>
                    <th scope="row">Heures supp. au-delà du quota</th>
                    <td>85 €/h HT</td>
                    <td className="is-featured">75 €/h HT</td>
                    <td>65 €/h HT</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      colSpan={4}
                      style={{
                        background: '#fff',
                        color: '#ED6E63',
                        fontSize: '11px',
                        letterSpacing: '.1em',
                        textTransform: 'uppercase',
                        padding: '18px 22px 10px',
                      }}
                    >
                      — Suivi SEO —
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Suivi SEO mensuel actif</th>
                    <td>
                      <span className="maint-table__dash">—</span>
                    </td>
                    <td className="is-featured">
                      <span className="maint-table__dash">—</span>
                    </td>
                    <td>
                      <span className="maint-table__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Reporting Search Console</th>
                    <td>
                      <span className="maint-table__dash">—</span>
                    </td>
                    <td className="is-featured">
                      <span className="maint-table__dash">—</span>
                    </td>
                    <td>Mensuel</td>
                  </tr>
                  <tr>
                    <th scope="row">Suivi et analyse du SEO</th>
                    <td>
                      <span className="maint-table__dash">—</span>
                    </td>
                    <td className="is-featured">
                      <span className="maint-table__dash">—</span>
                    </td>
                    <td>
                      <span className="maint-table__check">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      colSpan={4}
                      style={{
                        background: '#fff',
                        color: '#ED6E63',
                        fontSize: '11px',
                        letterSpacing: '.1em',
                        textTransform: 'uppercase',
                        padding: '18px 22px 10px',
                      }}
                    >
                      — Reporting et engagement —
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Reporting santé technique</th>
                    <td>Mensuel</td>
                    <td className="is-featured">Mensuel détaillé</td>
                    <td>Hebdomadaire</td>
                  </tr>
                  <tr>
                    <th scope="row">Point bilan visio</th>
                    <td>
                      <span className="maint-table__dash">—</span>
                    </td>
                    <td className="is-featured">1 / an</td>
                    <td>1 / trimestre</td>
                  </tr>
                  <tr>
                    <th scope="row">Engagement</th>
                    <td>Aucun</td>
                    <td className="is-featured">Aucun</td>
                    <td>Aucun</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* ============ MID-CTA ============ */}
        <section className="maint-midcta">
          <div className="container">
            <div className="maint-midcta__box">
              <div className="maint-midcta__left">
                <h3 className="maint-midcta__title">Pas sûr de quel forfait choisir ?</h3>
                <p className="maint-midcta__text">
                  30 minutes de visio pour analyser votre site et déterminer ensemble le forfait qui correspond. Audit
                  gratuit en 48 h à la clé. Sans engagement.
                </p>
              </div>
              <a
                href="https://calendly.com/contact-agence-kameo/30min"
                target="_blank"
                rel="noopener"
                className="maint-midcta__btn"
              >
                <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                  <use href="/icons.svg#i-solid-calendar-check" />
                </svg>
                Réserver mon RDV{' '}
              </a>
            </div>
          </div>
        </section>
        {/* ============ CAS D'USAGE ============ */}
        <section className="maint-cases">
          <div className="container">
            <header className="maint-cases__head">
              <span className="maint-cases__eyebrow">Cas d'usage concrets</span>
              <h2 className="maint-cases__title">"Un client nous appelle parce que…"</h2>
              <p className="maint-cases__intro">
                Voici 4 situations parmi les plus fréquentes que nous traitons. Notre forfait de maintenance préventive
                vous évite la plupart de ces incidents, et quand ils arrivent : on agit vite.
              </p>
            </header>
            <div className="maint-cases__grid">
              <article className="maint-case">
                <header className="maint-case__head">
                  <span className="maint-case__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-skull" />
                    </svg>
                  </span>
                  <p className="maint-case__tag">Cas n°1 · Site piraté</p>
                </header>
                <p className="maint-case__quote">
                  Notre site WordPress a été défacé, une page bizarre s'affiche et l'admin est bloqué.
                </p>
                <p className="maint-case__body">
                  Origine la plus fréquente : un plugin obsolète exploite une faille connue. Notre intervention :
                  nettoyage des fichiers infectés, restauration depuis la dernière sauvegarde saine, identification du
                  vecteur d'attaque, durcissement de l'admin et mise à jour générale.
                </p>
                <p className="maint-case__action">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-bolt" />
                  </svg>
                  Site remis en ligne en quelques heures grâce aux sauvegardes externalisées 30 / 60 / 90 jours.
                </p>
              </article>
              <article className="maint-case">
                <header className="maint-case__head">
                  <span className="maint-case__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-circle-exclamation" />
                    </svg>
                  </span>
                  <p className="maint-case__tag">Cas n°2 · Mise à jour ratée</p>
                </header>
                <p className="maint-case__quote">
                  J'ai cliqué sur "Mettre à jour" et maintenant mon site affiche une page blanche.
                </p>
                <p className="maint-case__body">
                  Une mise à jour de plugin a créé un conflit avec un autre plugin ou le thème. Avec notre forfait : ce
                  cas est évité en amont car toutes les mises à jour sont testées en environnement de staging avant
                  production. Si l'incident arrive en dehors, on remonte à la version précédente immédiatement.
                </p>
                <p className="maint-case__action">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-shield" />
                  </svg>
                  Roll-back depuis l'environnement de staging en moins de 30 minutes.
                </p>
              </article>
              <article className="maint-case">
                <header className="maint-case__head">
                  <span className="maint-case__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-chart-line" />
                    </svg>
                  </span>
                  <p className="maint-case__tag">Cas n°3 · Perf qui chute</p>
                </header>
                <p className="maint-case__quote">
                  Mon site est devenu très lent ces derniers mois et mes positions Google baissent.
                </p>
                <p className="maint-case__body">
                  Cause typique : base de données qui gonfle (révisions, transients), images non optimisées, cache mal
                  configuré, plugins qui se sont accumulés. Notre intervention : audit performance, nettoyage de la
                  base, optimisation images WebP, configuration cache (WP Rocket), désactivation des plugins inutiles.
                </p>
                <p className="maint-case__action">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-gauge-high" />
                  </svg>
                  +20 à +40 points PageSpeed mobile en moyenne après intervention.
                </p>
              </article>
              <article className="maint-case">
                <header className="maint-case__head">
                  <span className="maint-case__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-plug-circle-xmark" />
                    </svg>
                  </span>
                  <p className="maint-case__tag">Cas n°4 · Plugin abandonné</p>
                </header>
                <p className="maint-case__quote">
                  Un plugin qu'on utilise depuis 3 ans n'est plus mis à jour, c'est risqué ?
                </p>
                <p className="maint-case__body">
                  Un plugin sans update depuis +12 mois est une faille de sécurité potentielle. Notre intervention :
                  identification du plugin, recherche d'une alternative maintenue avec fonctionnalités équivalentes,
                  migration des données, désactivation puis suppression de l'ancien plugin. Pas de fonctionnalité
                  perdue.
                </p>
                <p className="maint-case__action">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-arrows-rotate" />
                  </svg>
                  Migration entre plugins équivalents sans coupure de service.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ STACK OUTILS MAINTENANCE ============ */}
        <section className="maint-stack">
          <div className="container">
            <header className="maint-stack__head">
              <h2 className="maint-stack__title">Les outils qu'on utilise pour maintenir votre site</h2>
              <p className="maint-stack__intro">
                Une maintenance WordPress sérieuse repose sur des outils éprouvés. Voici la stack utilisée sur chaque
                site sous contrat avec nous.
              </p>
            </header>
            <div className="maint-stack__grid">
              <article className="maint-stack__card">
                <span className="maint-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-shield-halved" />
                  </svg>
                </span>
                <h3 className="maint-stack__name">Sécurité</h3>
                <ul className="maint-stack__list">
                  <li>Wordfence</li>
                  <li>Cloudflare (firewall, CDN)</li>
                  <li>Durcissement admin (2FA)</li>
                  <li>Limit Login Attempts</li>
                  <li>Scan malware régulier</li>
                </ul>
              </article>
              <article className="maint-stack__card">
                <span className="maint-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-cloud-arrow-up" />
                  </svg>
                </span>
                <h3 className="maint-stack__name">Sauvegardes</h3>
                <ul className="maint-stack__list">
                  <li>UpdraftPlus</li>
                  <li>Stockage externalisé PlanetHoster</li>
                  <li>Rétention 30 / 60 / 90 jours</li>
                  <li>Vérification intégrité auto</li>
                  <li>Procédure de restauration testée</li>
                </ul>
              </article>
              <article className="maint-stack__card">
                <span className="maint-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-gauge-high" />
                  </svg>
                </span>
                <h3 className="maint-stack__name">Monitoring</h3>
                <ul className="maint-stack__list">
                  <li>Pingdom uptime monitoring</li>
                  <li>PageSpeed Insights tracking</li>
                  <li>Google Search Console</li>
                  <li>Alertes email</li>
                  <li>Rapport mensuel auto</li>
                </ul>
              </article>
              <article className="maint-stack__card">
                <span className="maint-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-arrows-rotate" />
                  </svg>
                </span>
                <h3 className="maint-stack__name">Mises à jour</h3>
                <ul className="maint-stack__list">
                  <li>Monitoring manuel régulier</li>
                  <li>Environnement de staging</li>
                  <li>Tests automatisés</li>
                  <li>Validation manuelle des points critiques</li>
                  <li>Plan de roll-back si KO</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        {/* ============ REPRISE DE SITE EXISTANT ============ */}
        <section className="maint-take">
          <div className="container">
            <header className="maint-take__head">
              <span className="maint-take__eyebrow">Vous n'avez pas créé votre site chez nous ?</span>
              <h2 className="maint-take__title">On reprend n'importe quel site WordPress en maintenance</h2>
              <p className="maint-take__intro">
                Site créé par une autre agence, un freelance ou vous-même, avec n'importe quel thème (Avada, Divi,
                Elementor, custom…), n'importe quel hébergeur (o2switch, OVH, WP Engine, autre…) :{' '}
                <strong>on s'adapte à l'existant</strong>. Voici comment on intègre votre site à notre maintenance.
              </p>
            </header>
            <div className="maint-take__grid">
              <article className="maint-take__step">
                <span className="maint-take__num">01</span>
                <h3 className="maint-take__name">Audit gratuit (48 h)</h3>
                <p className="maint-take__text">
                  Analyse complète du site existant : versions WP/PHP, plugins, sécurité, performance, sauvegardes en
                  place, points faibles identifiés. Rapport remis en main propre.
                </p>
              </article>
              <article className="maint-take__step">
                <span className="maint-take__num">02</span>
                <h3 className="maint-take__name">Plan de remise à niveau</h3>
                <p className="maint-take__text">
                  Si le site nécessite des correctifs avant entrée en maintenance (mise à jour bloquée, faille, plugin
                  obsolète…) : on chiffre le travail dans un devis dédié. Sinon, on enchaîne directement.
                </p>
              </article>
              <article className="maint-take__step">
                <span className="maint-take__num">03</span>
                <h3 className="maint-take__name">Onboarding (1 semaine)</h3>
                <p className="maint-take__text">
                  Mise en place de notre stack (sauvegardes UpdraftPlus, monitoring Wordfence, environnement de
                  staging), configuration des accès, documentation Notion partagée avec vous.
                </p>
              </article>
              <article className="maint-take__step">
                <span className="maint-take__num">04</span>
                <h3 className="maint-take__name">Démarrage du forfait</h3>
                <p className="maint-take__text">
                  Votre site est officiellement sous contrat de maintenance Kameo. Première salve de mises à jour
                  testées en staging la semaine suivante. Premier rapport mensuel à J+30.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ ÉQUIPE ============ */}
        <section className="maint-team">
          <div className="container">
            <header className="maint-team__head">
              <span className="maint-team__eyebrow">L'équipe qui maintient votre site</span>
              <h2 className="maint-team__title">Une équipe parisienne, joignable et responsable</h2>
              <p className="maint-team__intro">
                Pas de sous-traitance, pas de chatbot. Vous bossez avec ces 3 personnes que vous pouvez joindre par
                email, Slack ou téléphone.
              </p>
            </header>
            <div className="maint-team__grid">
              <article className="maint-team__card">
                <div className="maint-team__avatar">
                  <img
                    src="/images/benjamin.webp"
                    alt="Benjamin Dayan, Fondateur Kameo agence WordPress Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="maint-team__name">Benjamin Dayan</h3>
                <p className="maint-team__role">Fondateur · Stratégie &amp; relation client</p>
                <p className="maint-team__bio">
                  Pilote l'onboarding de votre site, les points bilans réguliers et l'évolution du contrat. Joignable
                  directement pour toute question contractuelle ou stratégique.
                </p>
              </article>
              <article className="maint-team__card">
                <div className="maint-team__avatar">
                  <img
                    src="/images/Aysha.webp"
                    alt="Aysha, Directrice artistique Kameo agence WordPress Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="maint-team__name">Aysha</h3>
                <p className="maint-team__role">Directrice artistique</p>
                <p className="maint-team__bio">
                  Intervient sur les évolutions design de votre site dans le cadre des heures d'évolutions mensuelles :
                  nouvelle page, refonte d'un module, ajout d'éléments graphiques.
                </p>
              </article>
              <article className="maint-team__card">
                <div className="maint-team__avatar">
                  <img
                    src="/images/Louison.webp"
                    alt="Louison Boutet, Lead developpeur WordPress Kameo Paris"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <h3 className="maint-team__name">Louison Boutet</h3>
                <p className="maint-team__role">Lead développeur WordPress</p>
                <p className="maint-team__bio">
                  Gère les mises à jour en staging, les interventions techniques, les évolutions code et les urgences
                  sécurité. C'est lui que vous contactez pour un bug ou une panne.
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ PLUGINS CRITIQUES ============ */}
        <section className="maint-plugins">
          <div className="container">
            <header className="maint-plugins__head">
              <span className="maint-plugins__eyebrow">Ce qu'on surveille chaque mois</span>
              <h2 className="maint-plugins__title">10 plugins WordPress critiques à surveiller, et pourquoi</h2>
              <p className="maint-plugins__intro">
                Un site WordPress moyen tourne avec 20 à 35 plugins actifs. Tous ne demandent pas la même vigilance.
                Voici les familles de plugins que nous surveillons systématiquement dans nos forfaits maintenance, parce
                que ce sont elles qui causent 90 % des incidents.
              </p>
            </header>
            <div className="maint-plugins__grid">
              <article className="maint-plugin-card">
                <h3 className="maint-plugin-card__name">Plugins de sécurité</h3>
                <p className="maint-plugin-card__ex">Wordfence, Sucuri, iThemes Security</p>
                <p className="maint-plugin-card__why">
                  Ils détectent malwares, brute-force, modifications de fichiers cœur. Mais ils déclenchent aussi des
                  faux positifs qui peuvent bloquer un visiteur légitime. On contrôle les règles, les blacklist IP et
                  les rapports hebdo.
                </p>
              </article>
              <article className="maint-plugin-card">
                <h3 className="maint-plugin-card__name">WooCommerce &amp; extensions</h3>
                <p className="maint-plugin-card__ex">WooCommerce, WC Stripe, WC Subscriptions, Mollie</p>
                <p className="maint-plugin-card__why">
                  Une mise à jour mal validée peut casser le tunnel de paiement, donc le CA. On teste systématiquement
                  chaque update WooCommerce sur un environnement de staging avant production.
                </p>
              </article>
              <article className="maint-plugin-card">
                <h3 className="maint-plugin-card__name">Cache &amp; performance</h3>
                <p className="maint-plugin-card__ex">WP Rocket, LiteSpeed Cache, W3 Total Cache</p>
                <p className="maint-plugin-card__why">
                  Mauvaise config = pages cassées, contenu obsolète servi, CSS non chargé. On vide les caches après
                  chaque update et on monitore les Core Web Vitals (LCP, INP, CLS) avec PageSpeed Insights.
                </p>
              </article>
              <article className="maint-plugin-card">
                <h3 className="maint-plugin-card__name">SEO</h3>
                <p className="maint-plugin-card__ex">Yoast SEO, Rank Math, SEOPress</p>
                <p className="maint-plugin-card__why">
                  Une mauvaise update peut casser le sitemap, les meta-titles ou le balisage Schema.org. On surveille
                  les indexations Google Search Console et les fichiers sitemap.xml chaque semaine.
                </p>
              </article>
              <article className="maint-plugin-card">
                <h3 className="maint-plugin-card__name">Formulaires &amp; lead gen</h3>
                <p className="maint-plugin-card__ex">Gravity Forms, WPForms, Contact Form 7, Fluent Forms</p>
                <p className="maint-plugin-card__why">
                  Un formulaire cassé = des leads perdus invisibles. On envoie un test mensuel sur chaque formulaire
                  pour valider que les notifications arrivent et que les data partent bien dans le CRM.
                </p>
              </article>
              <article className="maint-plugin-card">
                <h3 className="maint-plugin-card__name">Builder de pages</h3>
                <p className="maint-plugin-card__ex">Elementor, Divi, Beaver Builder, Bricks</p>
                <p className="maint-plugin-card__why">
                  Une update majeure peut casser l'affichage de pages complètes. On déploie d'abord en staging, on
                  contrôle les pages clés (accueil, services, contact, panier), et seulement après en production.
                </p>
              </article>
              <article className="maint-plugin-card">
                <h3 className="maint-plugin-card__name">Sauvegardes</h3>
                <p className="maint-plugin-card__ex">UpdraftPlus, BackWPup, Duplicator</p>
                <p className="maint-plugin-card__why">
                  Une sauvegarde qui n'a pas tourné pendant 3 semaines, c'est une catastrophe annoncée. On vérifie
                  l'envoi effectif vers le stockage externe (PlanetHoster) et on fait un test de restauration chaque
                  trimestre.
                </p>
              </article>
              <article className="maint-plugin-card">
                <h3 className="maint-plugin-card__name">Champs personnalisés &amp; templates</h3>
                <p className="maint-plugin-card__ex">ACF, Meta Box, Pods, Toolset</p>
                <p className="maint-plugin-card__why">
                  Ces plugins propulsent souvent le contenu sur-mesure du site. Une update mal cadrée peut casser des
                  templates entiers. On garde la version Pro à jour, on surveille les notices PHP.
                </p>
              </article>
              <article className="maint-plugin-card">
                <h3 className="maint-plugin-card__name">Multilingue</h3>
                <p className="maint-plugin-card__ex">WPML, Polylang, TranslatePress</p>
                <p className="maint-plugin-card__why">
                  Une update peut désynchroniser les traductions ou casser le hreflang. Critique pour le SEO
                  international. On contrôle systématiquement les URLs traduites et les balises hreflang via Screaming
                  Frog.
                </p>
              </article>
              <article className="maint-plugin-card">
                <h3 className="maint-plugin-card__name">Analytics &amp; tracking</h3>
                <p className="maint-plugin-card__ex">GA4, GTM, Matomo, Pixel Meta</p>
                <p className="maint-plugin-card__why">
                  Une mauvaise config = des données erronées qui faussent les décisions. On valide les events critiques
                  (formulaires, ajouts panier, achats) avec Tag Assistant chaque mois.
                </p>
              </article>
            </div>
            <p className="maint-plugins__verdict">
              Notre principe : <strong>aucune mise à jour plugin n'est appliquée directement en production</strong>.
              Tout passe par un environnement de staging chez PlanetHoster, on teste : on déploie. C'est ce qui explique
              notre statistique <strong>0 site piraté depuis 2023</strong> et 0 régression majeure sur les sites sous
              maintenance Kameo.
            </p>
          </div>
        </section>
        <section className="maint-bridge" style={{ padding: '40px 0 60px', background: '#fff' }}>
          <div className="container" style={{ maxWidth: '880px' }}>
            <p
              className="maint-bridge__p"
              style={{
                marginTop: '32px',
                paddingTop: '28px',
                borderTop: '1px solid rgba(15,17,21,.08)',
                fontSize: '15px',
                color: 'rgba(15,17,21,.7)',
                lineHeight: '1.65',
              }}
            >
              Vous n'avez pas encore de site WordPress et voulez démarrer proprement maintenu dès la mise en ligne ?
              Voyez notre offre{' '}
              <Link href="/creation-site-wordpress/" style={{ color: '#E14B89', fontWeight: '600' }}>
                création de site WordPress
              </Link>
              . Si votre site existe mais montre son âge, notre démarche{' '}
              <Link href="/refonte-wordpress/" style={{ color: '#E14B89', fontWeight: '600' }}>
                refonte WordPress sans perte de SEO
              </Link>{' '}
              peut être un meilleur point de départ avant la maintenance. Tous ces services s'inscrivent dans l'approche
              de notre{' '}
              <Link href="/agence-wordpress-paris/" style={{ color: '#E14B89', fontWeight: '600' }}>
                agence WordPress à Paris
              </Link>
              .{' '}
            </p>
          </div>
        </section>
        {/* ============ FAQ maintenance-specific ============ */}
        <section className="expertise-faq" aria-labelledby="faq-title">
          <div className="container">
            <h2 className="expertise-faq__title" id="faq-title">
              Questions fréquentes sur la maintenance WordPress
            </h2>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Mon site WordPress fonctionne, pourquoi payer pour de la maintenance ?{' '}
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
                    "Fonctionne" est un état temporaire. Sans maintenance régulière, votre site WordPress accumule de la
                    dette technique invisible : plugins obsolètes, base de données qui gonfle, failles de sécurité non
                    corrigées, baisse progressive des Core Web Vitals. Le risque devient visible quand{' '}
                    <strong>l'incident arrive</strong> (piratage, mise à jour qui casse tout, perf qui chute), et il
                    coûte alors 5 à 10 fois plus cher à corriger en urgence qu'en prévention. La maintenance, c'est
                    l'assurance vie de votre site.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Reprenez-vous les sites WordPress que vous n'avez pas créés ?{' '}
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
                    Oui, c'est même une part importante de nos contrats de maintenance. Site créé par une autre agence,
                    un freelance ou vous-même, n'importe quel thème (Avada, Divi, Elementor, custom…) sur n'importe quel
                    hébergeur : <strong>on s'adapte à l'existant</strong>. Premier réflexe : un audit gratuit en 48 h
                    pour comprendre dans quel état est le site et identifier les éventuels correctifs préalables avant
                    l'entrée en maintenance.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que se passe-t-il si mon site tombe en dehors des heures ouvrées ?{' '}
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
                    Notre monitoring uptime (Pingdom) détecte la panne immédiatement et nous alerte. Notre{' '}
                    <strong>SLA contractuel est de 24 h ouvrées</strong> pour tous les forfaits. En pratique sur les
                    pannes critiques, nous intervenons souvent plus vite, mais c'est l'engagement contractuel maximum.
                    Pour les sites stratégiques nécessitant une réactivité 24/7 hors heures ouvrées, le forfait Premium
                    propose un canal prioritaire avec procédure d'urgence.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Les heures d'évolutions non utilisées sont-elles reportées ?{' '}
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
                    Les heures incluses (<strong>1 h par mois sur les forfaits Pro et Premium</strong>) sont{' '}
                    <strong>reportables sur le mois suivant uniquement</strong> (pas au-delà). Cela permet de lisser sur
                    2 mois si vous avez besoin de capitaliser pour une plus grosse évolution. Au-delà du quota inclus,
                    les heures supplémentaires sont facturées à un tarif horaire{' '}
                    <strong>dégressif selon le forfait</strong> (85 € HT/h sur Essentiel, 75 € HT/h sur Pro, 65 € HT/h
                    sur Premium).
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Que se passe-t-il si je résilie le contrat ?{' '}
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
                    Résiliation chaque fin de mois avec un <strong>préavis de 15 jours</strong>. Aucune pénalité. À la
                    sortie, on vous remet une sauvegarde complète et fraîche de votre site, une procédure de transfert
                    vers votre nouveau prestataire (ou vers vous), et les accès complets à tous les outils mis en place
                    (monitoring, sauvegardes externalisées). Nous croyons que vous devez rester parce que vous êtes
                    satisfaits, pas parce que vous êtes coincés.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Faut-il être hébergé chez vous pour souscrire ?{' '}
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
                    Deux options. <strong>Option recommandée, hébergement Kameo</strong> via notre partenariat{' '}
                    <strong>PlanetHoster</strong> : vous bénéficiez de l'intégralité des fonctionnalités du forfait
                    (staging dédié, sauvegardes externalisées contrôlées, monitoring fin, intervention infra prioritaire
                    en cas d'incident serveur).{' '}
                    <strong>Option alternative, vous restez chez votre hébergeur actuel</strong> (o2switch, OVH, WP
                    Engine, Hostinger…) : la maintenance reste possible, mais certaines fonctionnalités liées au serveur
                    (staging automatisé, contrôle profond des perfs, intervention infra en cas de panne) seront limitées
                    ou indisponibles, puisque l'environnement n'est pas sous notre contrôle. On cadre ensemble au brief
                    le scénario qui colle à votre besoin.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien de temps gardez-vous les sauvegardes ?{' '}
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
                    Sauvegardes quotidiennes externalisées (hors de votre hébergeur, externalisé chez PlanetHoster).{' '}
                    <strong>30 jours sur Essentiel</strong>, <strong>60 jours sur Pro</strong>,{' '}
                    <strong>90 jours sur Premium</strong>. Vérification d'intégrité automatique chaque semaine pour
                    s'assurer que les sauvegardes sont restaurables. À la résiliation du contrat, on vous remet la
                    dernière sauvegarde complète.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Gérez-vous les sites WooCommerce et e-commerce ?{' '}
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
                    Oui, environ 30 % des sites sous contrat avec nous sont des <strong>e-commerces WooCommerce</strong>
                    . Notre approche est la même mais avec quelques spécificités : mises à jour testées en environnement
                    de staging avec scénario complet d'achat (pour vérifier que le tunnel de commande reste
                    fonctionnel), monitoring spécifique du panier et du paiement, sauvegardes plus fréquentes en période
                    commerciale (Black Friday, soldes). Le forfait Pro ou Premium est généralement recommandé pour un
                    e-commerce sérieux.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Vos forfaits incluent-ils le développement de nouvelles fonctionnalités ?{' '}
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
                    Dans la limite des <strong>heures de développement incluses</strong> (1 h/mois sur les forfaits Pro
                    et Premium) : oui, on développe des micro-fonctionnalités (nouveau formulaire, nouvelle section sur
                    une page, intégration d'un widget tiers, ajustement UX). Pour les{' '}
                    <strong>grosses fonctionnalités</strong> (refonte d'une section, intégration CRM, espace membre,
                    multilingue) : on chiffre le développement dans un devis dédié hors forfait.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        {/* ============ CTA FINAL ============ */}
        <section className="maint-cta">
          <div className="maint-cta__container">
            <div className="maint-cta__box">
              <div className="maint-cta__wrap">
                <h2 className="maint-cta__title">Confiez votre site WordPress à une équipe parisienne</h2>
                <p className="maint-cta__text">
                  Un audit gratuit pour démarrer, un forfait adapté à votre site, un interlocuteur dédié. Tranquillité
                  d'esprit dès le premier mois. Sans engagement.
                </p>
                <div className="maint-cta__actions">
                  <a
                    href="https://calendly.com/contact-agence-kameo/30min"
                    target="_blank"
                    rel="noopener"
                    className="maint-cta__btn maint-cta__btn--primary"
                  >
                    <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-calendar-check" />
                    </svg>
                    Planifier mon audit gratuit{' '}
                  </a>
                  <a href="#forfaits" className="maint-cta__btn maint-cta__btn--secondary">
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-eye" />
                    </svg>
                    Revoir les 3 forfaits{' '}
                  </a>
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
