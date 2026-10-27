import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';

const PATH = '/politique-de-confidentialite/';
const TITLE = 'Politique de confidentialité | Kameo';
const DESCRIPTION = '';
const CRUMBS = [{ name: 'Accueil', path: '/' }];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION, noindex: true });

export default function PolitiqueDeConfidentialitePage() {
  return (
    <>
      <main id="main">
        {/* ============ HERO ============ */}
        <section className="legal-hero">
          <div className="container">
            <span className="legal-hero__badge">
              <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                <use href="/icons.svg#i-solid-shield-halved" />
              </svg>
              Dernière mise à jour&nbsp;: 27 octobre 2026{' '}
            </span>
            <h1 className="legal-hero__title">Politique de confidentialité</h1>
            <p className="legal-hero__desc">
              Kameo accorde une importance particulière à la protection de vos données personnelles et s’engage à les
              traiter avec la plus grande confidentialité, conformément au <strong>RGPD</strong> (Règlement UE 2016/679)
              et à la loi Informatique et Libertés.
            </p>
          </div>
        </section>
        {/* ============ ONGLETS ============ */}
        <div className="container">
          <nav className="legal-tabs" aria-label="Documents légaux">
            <Link href="/mentions-legales/" className="legal-tabs__link">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite/" className="legal-tabs__link legal-tabs__link--active">
              Politique de confidentialité
            </Link>
          </nav>
        </div>
        {/* ============ CONTENU ============ */}
        <section className="legal">
          <div className="container legal__grid">
            {/* Table des matières */}
            <aside className="legal__toc" aria-label="Sommaire">
              <p className="legal__toc-title">Sommaire</p>
              <ol className="legal__toc-list">
                <li className="legal__toc-item">
                  <a href="#section-1" className="legal__toc-link">
                    1. Responsable du traitement
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-2" className="legal__toc-link">
                    2. Préambule
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-3" className="legal__toc-link">
                    3. Données collectées
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-4" className="legal__toc-link">
                    4. Finalités du traitement
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-5" className="legal__toc-link">
                    5. Destinataires
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-6" className="legal__toc-link">
                    6. Transferts hors UE
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-7" className="legal__toc-link">
                    7. Durée de conservation
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-8" className="legal__toc-link">
                    8. Vos droits
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-9" className="legal__toc-link">
                    9. Cookies
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-10" className="legal__toc-link">
                    10. Sécurité des données
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-11" className="legal__toc-link">
                    11. Liens tiers
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-12" className="legal__toc-link">
                    12. Mineurs
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-13" className="legal__toc-link">
                    13. Modifications
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-14" className="legal__toc-link">
                    14. Contact &amp; DPO
                  </a>
                </li>
              </ol>
            </aside>
            {/* Contenu principal */}
            <div className="legal__content">
              {/* ,Section 1, */}
              <div className="legal__section" id="section-1">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    1
                  </span>
                  Identité du responsable du traitement{' '}
                </h2>
                <div className="legal__card">
                  <p className="legal__p">
                    <strong>KAMEO</strong>
                    <br />
                    Société par Actions Simplifiée (SAS) <br />
                    SIRET&nbsp;: 980 573 984 00013 <br />
                    Siège social&nbsp;: 9 rue des colonnes, 75002 Paris, France <br />
                    Téléphone&nbsp;: <a href="tel:+33662379985">06 62 37 99 85</a>
                    <br />
                    Email&nbsp;: <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>
                    <br />
                    Responsable de la publication&nbsp;: M. Louison BOUTET{' '}
                  </p>
                </div>
              </div>
              {/* ,Section 2, */}
              <div className="legal__section" id="section-2">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    2
                  </span>
                  Préambule{' '}
                </h2>
                <p className="legal__p">
                  La présente politique de confidentialité a pour objectif de vous informer sur la manière dont Kameo
                  collecte, utilise, partage et protège vos données personnelles, conformément au{' '}
                  <strong>Règlement Général sur la Protection des Données (RGPD, Règlement UE 2016/679)</strong> et à la
                  loi Informatique et Libertés.
                </p>
                <p className="legal__p">
                  Kameo accorde une importance particulière à la protection de vos données personnelles et s’engage à
                  les traiter avec la plus grande confidentialité.
                </p>
              </div>
              {/* ,Section 3, */}
              <div className="legal__section" id="section-3">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    3
                  </span>
                  Données personnelles collectées{' '}
                </h2>
                <h3 className="legal__h3">3.1 Via le formulaire de contact</h3>
                <p className="legal__p">
                  Lorsque vous utilisez notre formulaire de contact sur agence-kameo.fr, nous collectons&nbsp;:
                </p>
                <ul className="legal__list">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>
                    Numéro de téléphone <em>(optionnel)</em>
                  </li>
                  <li>
                    Entreprise / Société <em>(optionnel)</em>
                  </li>
                  <li>Message / Demande</li>
                  <li>Toute autre information que vous choisissez de nous communiquer</li>
                </ul>
                <h3 className="legal__h3">3.2 Données collectées automatiquement</h3>
                <p className="legal__p">
                  Lors de votre navigation sur notre site, nous collectons automatiquement certaines informations
                  techniques&nbsp;:
                </p>
                <ul className="legal__list">
                  <li>Adresse IP</li>
                  <li>Type et version de navigateur</li>
                  <li>Système d’exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Source de trafic (provenance)</li>
                  <li>Données de géolocalisation approximative</li>
                  <li>Données de cookies (voir section dédiée)</li>
                </ul>
                <h3 className="legal__h3">3.3 Via nos prestations de services</h3>
                <p className="legal__p">
                  Dans le cadre de la réalisation de prestations (développement web, branding, publicités, réseaux
                  sociaux) : nous pouvons être amenés à collecter&nbsp;:
                </p>
                <ul className="legal__list">
                  <li>Informations professionnelles (secteur d’activité, taille de l’entreprise)</li>
                  <li>Contenus fournis pour les prestations (logos, textes, images, identifiants de comptes)</li>
                  <li>Historique des échanges et communications</li>
                  <li>Documents contractuels et factures</li>
                </ul>
              </div>
              {/* ,Section 4, */}
              <div className="legal__section" id="section-4">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    4
                  </span>
                  Finalités du traitement des données{' '}
                </h2>
                <div className="legal__services" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-envelope" />
                      </svg>{' '}
                      Gestion des contacts{' '}
                    </strong>
                    <ul>
                      <li>Répondre à vos demandes</li>
                      <li>Vous recontacter rapidement</li>
                      <li>Proposer des services adaptés</li>
                    </ul>
                    <p style={{ fontSize: '12px', color: 'var(--c-accent)', marginTop: '8px', fontWeight: '600' }}>
                      Base légale&nbsp;: Intérêt légitime / Consentement
                    </p>
                  </div>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 384 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-file-contract" />
                      </svg>{' '}
                      Exécution des prestations{' '}
                    </strong>
                    <ul>
                      <li>Réalisation des services commandés</li>
                      <li>Suivi de projet</li>
                      <li>Facturation et comptabilité</li>
                    </ul>
                    <p style={{ fontSize: '12px', color: 'var(--c-accent)', marginTop: '8px', fontWeight: '600' }}>
                      Base légale&nbsp;: Exécution du contrat
                    </p>
                  </div>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-chart-line" />
                      </svg>{' '}
                      Amélioration des services{' '}
                    </strong>
                    <ul>
                      <li>Analyse du trafic et comportement</li>
                      <li>Optimisation UX</li>
                      <li>Tests A/B</li>
                    </ul>
                    <p style={{ fontSize: '12px', color: 'var(--c-accent)', marginTop: '8px', fontWeight: '600' }}>
                      Base légale&nbsp;: Intérêt légitime
                    </p>
                  </div>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-bell" />
                      </svg>{' '}
                      Communication marketing{' '}
                    </strong>
                    <ul>
                      <li>Envoi de newsletters</li>
                      <li>Actualités et nouveaux services</li>
                      <li>Invitations à des événements</li>
                    </ul>
                    <p style={{ fontSize: '12px', color: 'var(--c-accent)', marginTop: '8px', fontWeight: '600' }}>
                      Base légale&nbsp;: Consentement
                    </p>
                  </div>
                </div>
                <p className="legal__p" style={{ marginTop: '16px' }}>
                  Pour les obligations légales (conservation comptable et fiscale, réponse aux autorités), la base
                  légale est l'<strong>obligation légale</strong>.
                </p>
                <p className="legal__p">
                  Vous pouvez vous désabonner de nos communications marketing à tout moment en cliquant sur le lien de
                  désabonnement présent dans chaque email ou en nous contactant directement.
                </p>
              </div>
              {/* ,Section 5, */}
              <div className="legal__section" id="section-5">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    5
                  </span>
                  Destinataires des données{' '}
                </h2>
                <h3 className="legal__h3">5.1 Prestataires techniques</h3>
                <ul className="legal__list">
                  <li>
                    <strong>Hébergeur&nbsp;:</strong> Planet Hoster Inc. (Canada), serveurs conformes RGPD
                  </li>
                  <li>
                    <strong>Mesure d’audience&nbsp;:</strong> taap.it et Microsoft Clarity (Microsoft Ireland), uniquement avec votre
                    consentement
                  </li>
                  <li>
                    <strong>Mesure publicitaire&nbsp;:</strong> Meta Platforms (pixel Meta), chargé par Google Tag Manager
                    (Google Ireland), uniquement avec votre consentement
                  </li>
                  <li>
                    <strong>Prise de rendez-vous&nbsp;:</strong> Calendly
                  </li>
                  <li>
                    <strong>Badge d’avis&nbsp;:</strong> La Fabrique du Net, dont les serveurs reçoivent votre adresse IP
                    au chargement du badge (aucun cookie)
                  </li>
                  <li>
                    <strong>Service d’emailing&nbsp;:</strong> prestataire utilisé pour l’envoi de newsletters
                  </li>
                  <li>
                    <strong>CRM&nbsp;:</strong> système de gestion de la relation client
                  </li>
                </ul>
                <h3 className="legal__h3">5.2 Partenaires contractuels</h3>
                <p className="legal__p">
                  Sous-traitants intervenant dans la réalisation des prestations (développeurs, graphistes, rédacteurs,
                  etc.). Tous nos sous-traitants sont soumis à des obligations de confidentialité strictes et à des
                  accords de traitement de données conformes au RGPD.
                </p>
                <h3 className="legal__h3">5.3 Autorités</h3>
                <p className="legal__p">
                  Autorités judiciaires, administratives ou fiscales, sur demande légale et dans les limites de la loi.
                </p>
                <div
                  className="legal__card"
                  style={{ borderColor: 'var(--c-accent-soft)', background: 'var(--c-accent-soft)' }}
                >
                  <p className="legal__p">
                    <svg
                      className="icon"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                      style={{ color: 'var(--c-accent)', marginRight: '8px' }}
                      focusable="false"
                    >
                      <use href="/icons.svg#i-solid-circle-check" />
                    </svg>
                    <strong>Engagement&nbsp;:</strong> Kameo ne vend, ne loue et ne cède jamais vos données personnelles
                    à des tiers à des fins commerciales.
                  </p>
                </div>
              </div>
              {/* ,Section 6, */}
              <div className="legal__section" id="section-6">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    6
                  </span>
                  Transferts de données hors UE{' '}
                </h2>
                <p className="legal__p">
                  Certains de nos prestataires peuvent être situés en dehors de l’Union Européenne. Dans ce cas, nous
                  nous assurons que&nbsp;:
                </p>
                <ul className="legal__list">
                  <li>Le pays bénéficie d’une décision d’adéquation de la Commission Européenne, ou</li>
                  <li>Des garanties appropriées sont mises en place (Clauses Contractuelles Types, CCT), ou</li>
                  <li>Le prestataire est certifié sous un cadre reconnu</li>
                </ul>
                <p className="legal__p">
                  Vous pouvez obtenir une copie de ces garanties en nous contactant à{' '}
                  <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>.
                </p>
              </div>
              {/* ,Section 7, */}
              <div className="legal__section" id="section-7">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    7
                  </span>
                  Durée de conservation des données{' '}
                </h2>
                <p className="legal__p">Vos données personnelles sont conservées pendant les durées suivantes&nbsp;:</p>
                <div className="legal__card">
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ borderBottom: '1.5px solid var(--c-line)' }}>
                        <th
                          style={{
                            textAlign: 'left',
                            padding: '8px 12px 10px 0',
                            fontSize: '12px',
                            fontWeight: '700',
                            color: 'var(--c-ink)',
                            textTransform: 'uppercase',
                            letterSpacing: '.05em',
                          }}
                        >
                          Type de données
                        </th>
                        <th
                          style={{
                            textAlign: 'left',
                            padding: '8px 0 10px 12px',
                            fontSize: '12px',
                            fontWeight: '700',
                            color: 'var(--c-ink)',
                            textTransform: 'uppercase',
                            letterSpacing: '.05em',
                          }}
                        >
                          Durée de conservation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--c-line)' }}>
                        <td style={{ padding: '9px 12px 9px 0', color: 'var(--c-muted)' }}>
                          Demandes de contact (non converties)
                        </td>
                        <td style={{ padding: '9px 0 9px 12px', color: 'var(--c-ink)', fontWeight: '500' }}>
                          3 ans à compter du dernier contact
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--c-line)' }}>
                        <td style={{ padding: '9px 12px 9px 0', color: 'var(--c-muted)' }}>
                          Données clients (exécution du contrat)
                        </td>
                        <td style={{ padding: '9px 0 9px 12px', color: 'var(--c-ink)', fontWeight: '500' }}>
                          Durée du contrat + 5 ans
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--c-line)' }}>
                        <td style={{ padding: '9px 12px 9px 0', color: 'var(--c-muted)' }}>Données de facturation</td>
                        <td style={{ padding: '9px 0 9px 12px', color: 'var(--c-ink)', fontWeight: '500' }}>
                          10 ans (obligations fiscales)
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--c-line)' }}>
                        <td style={{ padding: '9px 12px 9px 0', color: 'var(--c-muted)' }}>Cookies</td>
                        <td style={{ padding: '9px 0 9px 12px', color: 'var(--c-ink)', fontWeight: '500' }}>
                          13 mois maximum
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--c-line)' }}>
                        <td style={{ padding: '9px 12px 9px 0', color: 'var(--c-muted)' }}>
                          Données marketing (newsletters)
                        </td>
                        <td style={{ padding: '9px 0 9px 12px', color: 'var(--c-ink)', fontWeight: '500' }}>
                          Jusqu’au retrait du consentement + 3 ans
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '9px 12px 9px 0', color: 'var(--c-muted)' }}>Logs de connexion</td>
                        <td style={{ padding: '9px 0 9px 12px', color: 'var(--c-ink)', fontWeight: '500' }}>12 mois</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="legal__p" style={{ marginTop: '14px' }}>
                  À l’issue de ces durées, vos données sont <strong>supprimées ou anonymisées</strong>, sauf obligation
                  légale de conservation plus longue.
                </p>
              </div>
              {/* ,Section 8, */}
              <div className="legal__section" id="section-8">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    8
                  </span>
                  Vos droits{' '}
                </h2>
                <p className="legal__p">
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants&nbsp;:
                </p>
                <div className="legal__services" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '24px' }}>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 576 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-eye" />
                      </svg>
                      Droit d’accès
                    </strong>
                    <ul>
                      <li>Obtenir une copie de vos données personnelles que nous détenons</li>
                    </ul>
                  </div>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-pen" />
                      </svg>
                      Droit de rectification
                    </strong>
                    <ul>
                      <li>Corriger des données inexactes ou incomplètes</li>
                    </ul>
                  </div>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-trash" />
                      </svg>
                      Droit à l’effacement
                    </strong>
                    <ul>
                      <li>Demander la suppression de vos données dans certains cas ("droit à l’oubli")</li>
                    </ul>
                  </div>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 320 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-pause" />
                      </svg>
                      Droit à la limitation
                    </strong>
                    <ul>
                      <li>Demander la limitation du traitement dans certaines situations</li>
                    </ul>
                  </div>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-download" />
                      </svg>
                      Droit à la portabilité
                    </strong>
                    <ul>
                      <li>Recevoir vos données dans un format structuré et couramment utilisé</li>
                    </ul>
                  </div>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-hand" />
                      </svg>
                      Droit d’opposition
                    </strong>
                    <ul>
                      <li>Vous opposer au traitement de vos données, notamment pour le marketing</li>
                    </ul>
                  </div>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-rotate-left" />
                      </svg>
                      Retrait du consentement
                    </strong>
                    <ul>
                      <li>Retirer votre consentement à tout moment lorsqu’il fonde le traitement</li>
                    </ul>
                  </div>
                  <div className="legal__service-card">
                    <strong>
                      <svg
                        className="icon"
                        viewBox="0 0 640 512"
                        aria-hidden="true"
                        style={{ marginRight: '6px', color: 'var(--c-accent)', fontSize: '11px' }}
                        focusable="false"
                      >
                        <use href="/icons.svg#i-solid-user-clock" />
                      </svg>
                      Directives post-mortem
                    </strong>
                    <ul>
                      <li>Définir vos volontés relatives à vos données après votre décès</li>
                    </ul>
                  </div>
                </div>
                <h3 className="legal__h3">Comment exercer vos droits&nbsp;?</h3>
                <div className="legal__card">
                  <p className="legal__p">Pour exercer l’un de ces droits, contactez-nous&nbsp;:</p>
                  <ul className="legal__list" style={{ marginBottom: '0' }}>
                    <li>
                      Email&nbsp;: <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>
                    </li>
                    <li>Courrier&nbsp;: Kameo, 9 rue des colonnes, 75002 Paris, France</li>
                    <li>
                      Téléphone&nbsp;: <a href="tel:+33662379985">06 62 37 99 85</a>
                    </li>
                  </ul>
                </div>
                <p className="legal__p">
                  Nous nous engageons à répondre dans un délai maximum d'<strong>un mois</strong>. Une copie d’une pièce
                  d’identité pourra être demandée pour vérifier votre identité.
                </p>
                <h3 className="legal__h3">Réclamation auprès de la CNIL</h3>
                <p className="legal__p">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de
                  la <strong>Commission Nationale de l’Informatique et des Libertés (CNIL)</strong> :
                </p>
                <div className="legal__card">
                  <p className="legal__p">
                    Site web&nbsp;:{' '}
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener">
                      www.cnil.fr
                    </a>
                    <br />
                    Adresse&nbsp;: CNIL, 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 <br />
                    Téléphone&nbsp;: 01 53 73 22 22{' '}
                  </p>
                </div>
              </div>
              {/* ,Section 9, */}
              <div className="legal__section" id="section-9">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    9
                  </span>
                  Cookies et technologies similaires{' '}
                </h2>
                <h3 className="legal__h3">9.1 Qu’est-ce qu’un cookie&nbsp;?</h3>
                <p className="legal__p">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors
                  de votre visite sur notre site. Il permet de reconnaître votre navigateur lors de vos visites
                  ultérieures et d’améliorer votre expérience de navigation.
                </p>
                <h3 className="legal__h3">9.2 Types de cookies utilisés</h3>
                <div className="legal__services" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '8px' }}>
                  <div className="legal__service-card">
                    <strong>Cookies strictement nécessaires</strong>
                    <ul>
                      <li>Mémorisation de vos choix en matière de cookies (cookie kameo_consent, 6 mois)</li>
                    </ul>
                    <p style={{ fontSize: '12px', color: 'var(--c-muted)', marginTop: '6px' }}>
                      Base légale&nbsp;: Intérêt légitime, ne peuvent pas être désactivés
                    </p>
                  </div>
                  <div className="legal__service-card">
                    <strong>Mesure d’audience</strong>
                    <ul>
                      <li>taap.it&nbsp;: pages vues, clics et parcours sur le site</li>
                      <li>
                        Microsoft Clarity&nbsp;: cartes de chaleur et relecture des visites de la landing page (cookies _clck
                        et _clsk)
                      </li>
                      <li>Déposés uniquement après votre accord</li>
                    </ul>
                    <p style={{ fontSize: '12px', color: 'var(--c-accent)', marginTop: '6px', fontWeight: '600' }}>
                      Base légale&nbsp;: Consentement
                    </p>
                  </div>
                  <div className="legal__service-card">
                    <strong>Cookies publicitaires</strong>
                    <ul>
                      <li>Pixel Meta (Facebook, Instagram) sur nos pages de campagne</li>
                      <li>Chargé par Google Tag Manager, lui-même activé seulement après votre accord</li>
                      <li>Mesure de l’efficacité de nos publicités</li>
                    </ul>
                    <p style={{ fontSize: '12px', color: 'var(--c-accent)', marginTop: '6px', fontWeight: '600' }}>
                      Base légale&nbsp;: Consentement
                    </p>
                  </div>
                  <div className="legal__service-card">
                    <strong>Services tiers intégrés</strong>
                    <ul>
                      <li>
                        Calendly&nbsp;: module de prise de rendez-vous, qui dépose ses propres cookies (fonctionnement,
                        sécurité, mesure d’audience) dès son chargement&nbsp;: quand vous ouvrez la prise de rendez-vous
                        ou demandez à afficher le calendrier, ou plus tôt si vous avez accepté les cookies de mesure
                        d’audience et publicitaires, pour qu’il s’affiche sans attente&nbsp;: dès votre arrivée sur la
                        page d’accueil (sur ordinateur) et sur la page «&nbsp;Appel stratégique&nbsp;», et sur les
                        articles du blog dès que vous survolez un bouton de prise de rendez-vous
                      </li>
                      <li>Google Maps&nbsp;: carte d’accès à l’agence, qui dépose ses propres cookies lorsqu’elle s’affiche</li>
                      <li>La Fabrique du Net&nbsp;: badge d’avis du pied de page, chargé depuis ses serveurs, sans cookie</li>
                    </ul>
                    <p style={{ fontSize: '12px', color: 'var(--c-muted)', marginTop: '6px' }}>
                      Voir les politiques de Calendly et de Google
                    </p>
                  </div>
                </div>
                <h3 className="legal__h3">9.3 Gestion des cookies</h3>
                <p className="legal__p">
                  Vous pouvez accepter ou refuser les cookies soumis à votre consentement via le bandeau affiché lors
                  de votre première visite, et modifier votre choix à tout moment grâce au lien «&nbsp;Gestion des
                  cookies&nbsp;» présent en bas de chaque page. Refuser n’empêche pas d’utiliser le site. Vous pouvez
                  également gérer les cookies directement via votre navigateur&nbsp;:
                </p>
                <ul className="legal__list">
                  <li>
                    <strong>Chrome&nbsp;:</strong> Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies
                  </li>
                  <li>
                    <strong>Firefox&nbsp;:</strong> Menu &gt; Options &gt; Vie privée et sécurité &gt; Cookies
                  </li>
                  <li>
                    <strong>Safari&nbsp;:</strong> Préférences &gt; Confidentialité &gt; Cookies et données de sites web
                  </li>
                  <li>
                    <strong>Edge&nbsp;:</strong> Menu &gt; Paramètres &gt; Cookies et autorisations de site
                  </li>
                </ul>
                <p className="legal__p">
                  Le refus de certains cookies peut limiter l’utilisation de certaines fonctionnalités du site.
                </p>
                <h3 className="legal__h3">9.4 Durée de conservation des cookies</h3>
                <p className="legal__p">
                  Les cookies sont conservés pour une durée maximale de <strong>13 mois</strong> à compter de leur dépôt
                  sur votre terminal. Votre choix (acceptation ou refus) est conservé <strong>6 mois</strong>, après
                  quoi il vous est de nouveau demandé.
                </p>
              </div>
              {/* ,Section 10, */}
              <div className="legal__section" id="section-10">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    10
                  </span>
                  Sécurité des données{' '}
                </h2>
                <p className="legal__p">
                  Kameo met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la
                  sécurité et la confidentialité de vos données&nbsp;:
                </p>
                <ul className="legal__list">
                  <li>
                    <strong>Chiffrement SSL/TLS</strong>, sécurisation des communications entre votre navigateur et
                    notre site
                  </li>
                  <li>
                    <strong>Contrôle d’accès</strong>, accès aux données limité aux personnes autorisées
                  </li>
                  <li>
                    <strong>Pseudonymisation et anonymisation</strong>, lorsque c’est possible
                  </li>
                  <li>
                    <strong>Sauvegardes régulières</strong>, protection contre la perte de données
                  </li>
                  <li>
                    <strong>Mises à jour de sécurité</strong>, systèmes et logiciels régulièrement mis à jour
                  </li>
                  <li>
                    <strong>Sensibilisation du personnel</strong>, formation aux bonnes pratiques de sécurité
                  </li>
                  <li>
                    <strong>Procédures de notification</strong>, en cas de violation de données, notification à la CNIL
                    et aux personnes concernées dans les délais légaux
                  </li>
                </ul>
                <p className="legal__p">
                  Malgré toutes les précautions prises, aucun système n’est totalement infaillible. En cas de violation
                  de données susceptible d’engendrer un risque élevé pour vos droits et libertés, nous nous engageons à
                  vous en informer dans les plus brefs délais.
                </p>
              </div>
              {/* ,Section 11, */}
              <div className="legal__section" id="section-11">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    11
                  </span>
                  Liens vers des sites tiers{' '}
                </h2>
                <p className="legal__p">
                  Notre site peut contenir des liens vers des sites web tiers (partenaires, clients, réseaux sociaux).
                  Kameo n’est pas responsable des pratiques de confidentialité de ces sites. Nous vous encourageons à
                  consulter leurs politiques de confidentialité respectives avant de leur communiquer vos données.
                </p>
              </div>
              {/* ,Section 12, */}
              <div className="legal__section" id="section-12">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    12
                  </span>
                  Mineurs{' '}
                </h2>
                <p className="legal__p">
                  Nos services ne sont pas destinés aux personnes de moins de <strong>18 ans</strong>. Nous ne
                  collectons pas sciemment de données personnelles concernant des mineurs. Si vous pensez qu’un mineur
                  nous a fourni des données personnelles, veuillez nous contacter à{' '}
                  <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a> afin que nous puissions les
                  supprimer.
                </p>
              </div>
              {/* ,Section 13, */}
              <div className="legal__section" id="section-13">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    13
                  </span>
                  Modifications de la politique{' '}
                </h2>
                <p className="legal__p">
                  Kameo se réserve le droit de modifier la présente politique de confidentialité à tout moment. Toute
                  modification sera publiée sur cette page avec une mise à jour de la date affichée en haut du document.
                </p>
                <p className="legal__p">
                  En cas de modification substantielle, nous vous en informerons par email ou via un avis visible sur le
                  site.
                </p>
                <p className="legal__p">
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en
                  matière de protection des données.
                </p>
              </div>
              {/* ,Section 14, */}
              <div className="legal__section" id="section-14">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    14
                  </span>
                  Contact &amp; Délégué à la Protection des Données{' '}
                </h2>
                <p className="legal__p">
                  Pour toute question concernant la présente politique ou l’exercice de vos droits, vous pouvez
                  contacter notre responsable de la protection des données&nbsp;:
                </p>
                <div className="legal__card">
                  <p className="legal__p">
                    <strong>Kameo, Responsable&nbsp;: Louison Boutet</strong>
                    <br />
                    Adresse&nbsp;: 15 rue Maurice Genevoix, 37540 Saint-Cyr-sur-Loire <br />
                    Email&nbsp;: <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>
                    <br />
                    Téléphone&nbsp;: <a href="tel:+33614170624">06 14 17 06 24</a>
                  </p>
                </div>
                <p className="legal__p">
                  Nous nous engageons à vous répondre dans les meilleurs délais et au plus tard dans un délai d'
                  <strong>un mois</strong> à compter de la réception de votre demande.
                </p>
              </div>
            </div>
            {/* /.legal__content */}
          </div>
          {/* /.legal__grid */}
        </section>
      </main>

      <JsonLd
        data={[
          ...themeSchemas({ path: PATH, crumbs: CRUMBS }),
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
