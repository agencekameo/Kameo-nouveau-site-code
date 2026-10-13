import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import css from '@/styles/pages/dev-silo';

const PATH = '/creation-crm-sur-mesure/';
const TITLE = 'Création CRM sur-mesure Paris : alternative Salesforce | Kameo';
const DESCRIPTION =
  'Création de CRM sur-mesure à Paris : pipeline adapté à votre métier, intégrations Pennylane et Aircall, hébergement en France. Sans coût par utilisateur.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Développement sur-mesure', path: '/developpement-sur-mesure/' },
  { name: 'Création CRM sur-mesure', path: '/creation-crm-sur-mesure/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function CreationCrmSurMesurePage() {
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
              Création CRM sur-mesure <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Création de CRM sur-mesure à Paris : <br />
              <span className="page-hero__title-muted">l'alternative propriétaire à Salesforce &amp; HubSpot</span>
            </h1>
            <p className="page-hero__text">
              Votre process commercial ne rentre pas dans le moule Salesforce, HubSpot vous coûte 25 k€/an de licences,
              ou vous voulez héberger vos données clients en France sous votre contrôle exclusif. Kameo développe le CRM
              adapté à votre pipeline, avec vos intégrations, sur votre infrastructure. Rentable dès 15 k€ HT/an de
              licences.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                Rentable dès <strong>15 k€/an</strong> de licences économisées
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                <strong>Hébergement en France</strong> (OVH, Scaleway)
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                <strong>Aucune limite</strong> d'utilisateurs
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
              <span className="ccrea-why__eyebrow">Pourquoi un CRM sur-mesure</span>
              <h2 className="ccrea-why__title">L'inverse du SaaS packagé : on part de votre process</h2>
            </header>
            <div className="ccrea-why__grid">
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-diagram-project" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Pipeline calqué sur votre métier</h3>
                <p className="ccrea-why__text">
                  Vos étapes de vente, vos statuts, vos champs custom, vos règles d'attribution, le CRM épouse votre
                  process, pas l'inverse. Fini les tableaux Excel parallèles pour combler les manques du SaaS.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-piggy-bank" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Zéro coût par utilisateur</h3>
                <p className="ccrea-why__text">
                  Salesforce Enterprise = 150 € HT/user/mois. HubSpot Sales Hub Pro = 90 € HT/user/mois. Un CRM
                  sur-mesure = même prix pour 5, 50 ou 500 users. Break-even en 8-12 mois.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-plug" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Intégrations métiers natives</h3>
                <p className="ccrea-why__text">
                  Pennylane, Sage, Brevo, Aircall, Ringover, Yousign, DocuSign, Metabase, Power BI, votre ERP interne.
                  On développe les connecteurs qui manquent, Salesforce ne le fera pas.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-shield-halved" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">RGPD &amp; souveraineté</h3>
                <p className="ccrea-why__text">
                  Hébergement au choix : OVH, Scaleway, AWS EU. Registre des traitements, DPA type, droit à l'oubli
                  automatisé, export de données, journal d'audit horodaté. Zéro transfert US par défaut.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-key" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Vos données restent chez vous</h3>
                <p className="ccrea-why__text">
                  Vous êtes propriétaire de votre base clients, à 100 %. Aucun risque de coupure du SaaS, aucun risque
                  de rachat ou changement de licence, aucun blocage en cas de résiliation.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-mobile-screen" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Interface pensée UX métier</h3>
                <p className="ccrea-why__text">
                  Chaque profil (commercial terrain, sédentaire, manager, direction) a un dashboard adapté à ses tâches,
                  pas une seule interface générique qu'il faut apprendre par cœur.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="ccrea-midcta">
          <div className="container">
            <div className="ccrea-midcta__box">
              <div className="ccrea-midcta__left">
                <h3 className="ccrea-midcta__title">Vous payez plus de 15 k€/an de licences CRM ?</h3>
                <p className="ccrea-midcta__text">
                  En 30 min de brief on chiffre exactement combien un CRM sur-mesure vous fera économiser sur 3 ans.
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
              <h2 className="ccrea-stack__title">La stack technique de vos CRM</h2>
              <p className="ccrea-stack__intro">
                Stack éprouvée sur 12+ projets CRM livrés. Nous adaptons selon votre équipe technique et vos besoins
                d'intégration.
              </p>
            </header>
            <div className="ccrea-stack__grid">
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-brands-php" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Back-end Laravel</p>
                <ul className="ccrea-stack__card-list">
                  <li>Écosystème mature</li>
                  <li>ORM Eloquent</li>
                  <li>Sécurité intégrée</li>
                  <li>Queue jobs &amp; scheduler</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-brands-node" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Back-end Node.js</p>
                <ul className="ccrea-stack__card-list">
                  <li>NestJS + TypeScript</li>
                  <li>Temps réel WebSocket</li>
                  <li>API GraphQL</li>
                  <li>Scale horizontal</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-brands-react" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Front React</p>
                <ul className="ccrea-stack__card-list">
                  <li>Vite + TypeScript</li>
                  <li>TanStack Query</li>
                  <li>Composants shadcn</li>
                  <li>Dashboard réactif</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-database" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">BDD &amp; infra</p>
                <ul className="ccrea-stack__card-list">
                  <li>PostgreSQL 16</li>
                  <li>Redis (cache + queue)</li>
                  <li>OVH / Scaleway</li>
                  <li>Backups quotidiens</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="ccrea-cases">
          <div className="container">
            <header className="ccrea-cases__head">
              <h2 className="ccrea-cases__title">3 typologies de CRM sur-mesure</h2>
            </header>
            <div className="ccrea-cases__grid">
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">BtoB</span>
                <h3 className="ccrea-cases__name">CRM commercial BtoB avec cycle long</h3>
                <p className="ccrea-cases__text">
                  Cycle de vente 3-12 mois, comptes multi-décideurs, propositions commerciales structurées, gestion des
                  devis, suivi opportunité pondéré, forecast trimestriel. Intégrations : Aircall, Yousign, Pennylane.
                </p>
              </article>
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">Terrain</span>
                <h3 className="ccrea-cases__name">CRM pour commerciaux terrain</h3>
                <p className="ccrea-cases__text">
                  Interface mobile-first pour équipes en déplacement : géolocalisation des clients, planning de tournée,
                  prise de commande offline, signature électronique sur tablette, synchro auto quand le réseau revient.
                </p>
              </article>
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">Service</span>
                <h3 className="ccrea-cases__name">CRM après-vente / SAV</h3>
                <p className="ccrea-cases__text">
                  Ticketing, suivi de contrats, SLA, base de connaissance interne, portail client, intégration
                  téléphonie + email + WhatsApp Business, reporting temps de résolution, satisfaction client.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="expertise-faq" aria-labelledby="faq-title">
          <div className="container">
            <h2 className="expertise-faq__title" id="faq-title">
              Vos questions sur la création de CRM sur-mesure
            </h2>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Un CRM sur-mesure est-il rentable face à Salesforce ou HubSpot ?{' '}
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
                    Ça devient rentable dès que vous payez <strong>15 000 € HT/an</strong> de licences Salesforce ou
                    HubSpot, ou que le SaaS bloque un workflow essentiel. Un CRM sur-mesure démarre à 10 000 € HT en
                    développement (one-shot), puis coûte 100-300 € HT/mois d'hébergement. Salesforce Enterprise à 150 €
                    HT/user/mois × 15 users = 27 000 € HT/an à vie. Break-even en 5 mois, puis économies durables.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Peut-on migrer les données depuis un CRM existant ?{' '}
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
                    Oui, on prévoit systématiquement une phase de migration à la fin du développement : export depuis
                    Salesforce / HubSpot / Pipedrive / Zoho via leur API ou fichier CSV, mapping des champs vers votre
                    nouveau modèle de données, import contrôlé avec rapport d'erreurs, validation manuelle sur un
                    échantillon, puis migration complète. Aucune donnée perdue.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Le CRM sera-t-il hébergé où et sous quelle conformité ?{' '}
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
                    Hébergement au choix : <strong>OVH</strong> (data-centers Roubaix/Gravelines),{' '}
                    <strong>Scaleway</strong> (Paris), <strong>Clever Cloud</strong>, ou <strong>AWS EU (Paris)</strong>{' '}
                    / <strong>Azure EU</strong>. Chiffrement au repos (AES-256) et en transit (TLS 1.3), logs d'audit
                    horodatés, RGPD baked-in (registre traitements, DPA, droit à l'oubli automatisé, export données).
                    Nous fournissons la doc conformité complète.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Peut-on intégrer nos outils métiers (comptabilité, marketing, téléphonie) ?{' '}
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
                    Oui, c'est même le principal avantage. Intégration native ou via webhook / API avec :{' '}
                    <strong>compta</strong> (Pennylane, Sage, EBP, Cegid), <strong>marketing</strong> (Brevo, Mailchimp,
                    Sarbacane), <strong>téléphonie</strong> (Aircall, Ringover, RingCentral),{' '}
                    <strong>calendrier</strong> (Google, Outlook), <strong>signature</strong> (DocuSign, Yousign),{' '}
                    <strong>docs</strong> (Google Drive, Sharepoint), <strong>data</strong> (Metabase, Looker, Power
                    BI).
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Combien d'utilisateurs peut-on connecter au CRM sur-mesure ?{' '}
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
                    Aucune limite technique et surtout <strong>aucun coût par utilisateur</strong>. Chez Salesforce ou
                    HubSpot vous payez chaque utilisateur ajouté ; sur votre CRM sur-mesure, les 5, 50 ou 500
                    utilisateurs coûtent le même prix. Les permissions sont gérées par rôle (admin, manager, commercial,
                    marketing, lecture seule) et par équipe. L'ajout de nouveaux utilisateurs se fait via le back-office
                    admin en 30 secondes.
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
                <h2 className="creation-cta__title">Discutons de votre CRM</h2>
                <p className="creation-cta__text">
                  Brief découverte 30 min : cartographie de votre pipeline, comparatif avec vos licences actuelles,
                  chiffrage sous 24 h.
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
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'creation-crm-sur-mesure' }),
          ...pageSchemas,
          websiteGraph({ path: PATH, title: TITLE, description: DESCRIPTION }),
        ]}
      />
    </>
  );
}
