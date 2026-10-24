import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import css from '@/styles/pages/dev-silo';

const PATH = '/creation-saas-ia/';
const TITLE = 'Création de SaaS avec IA à Paris : MVP en 2 mois | Kameo';
const DESCRIPTION =
  'Création de SaaS avec IA générative à Paris : intégration Claude et GPT, RAG, multi-tenant, billing Stripe. MVP livré en 2 mois.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Développement sur-mesure', path: '/developpement-sur-mesure/' },
  { name: 'Création SaaS IA', path: '/creation-saas-ia/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function CreationSaasIaPage() {
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
              Création SaaS IA <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Création de SaaS avec IA à Paris : <br />
              <span className="page-hero__title-muted">de l'idée au MVP livré en 2 mois</span>
            </h1>
            <p className="page-hero__text">
              Vous avez une idée de SaaS qui exploite l'IA générative (Claude, GPT), un chatbot métier, un copilot
              spécialisé, un agent qui automatise un workflow. Kameo conçoit l'architecture, développe le MVP, intègre
              le prompt engineering, gère la facturation et vous met en production. Devis chiffré sous 24 h.
            </p>
            <div className="expertise-trust" role="group" aria-label="Indicateurs de confiance">
              <span className="expertise-trust__item">
                MVP livré en <strong>2 mois</strong>
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Intégration <strong>Claude, GPT, RAG</strong>
              </span>
              <span className="expertise-trust__sep" aria-hidden="true">
                ·
              </span>
              <span className="expertise-trust__item">
                Multi-tenant &amp; <strong>billing Stripe</strong>
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
                Voir la stack IA
              </a>
            </div>
          </div>
        </section>
        <section className="ccrea-why">
          <div className="container">
            <header className="ccrea-why__head">
              <span className="ccrea-why__eyebrow">Pourquoi Kameo pour votre SaaS IA</span>
              <h2 className="ccrea-why__title">
                Un SaaS IA qui tient la charge en prod, pas juste une démo qui marche en dev
              </h2>
            </header>
            <div className="ccrea-why__grid">
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-brain" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Expertise LLM &amp; prompt engineering</h3>
                <p className="ccrea-why__text">
                  On code avec Claude et GPT tous les jours, on connaît leurs forces et leurs limites. Prompt
                  engineering rigoureux, chain-of-thought, few-shot, guardrails contre les prompt injections, validation
                  des outputs, pas d'improvisation.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-database" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">RAG sur vos données</h3>
                <p className="ccrea-why__text">
                  Retrieval-Augmented Generation : votre base documentaire (PDFs, Notion, Confluence, base SQL) indexée
                  dans un vector store (Pinecone, Weaviate, pgvector), pour que l'IA réponde à partir de VOS données et
                  non de sa mémoire générique.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-tower-broadcast" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Streaming &amp; UX réactif</h3>
                <p className="ccrea-why__text">
                  Les réponses IA arrivent en streaming (SSE ou WebSocket) : l'utilisateur voit le texte apparaître en
                  temps réel comme sur ChatGPT. Pas de spinner qui tourne 30 secondes, l'UX moderne d'un vrai SaaS IA.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-users" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Multi-tenant dès sprint 1</h3>
                <p className="ccrea-why__text">
                  Isolation propre entre entreprises clientes (schéma dédié ou row-level security PostgreSQL), branding
                  custom, sous-domaine dédié, quotas par plan. Impossible à ajouter après coup, on le fait dès le début.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-credit-card" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Billing Stripe intégré</h3>
                <p className="ccrea-why__text">
                  Abonnements mensuels/annuels, essais gratuits, upgrades/downgrades, factures automatiques, dunning en
                  cas d'échec paiement, portail client Stripe pour gérer sa carte. Zéro maintenance manuelle sur la
                  facturation.
                </p>
              </article>
              <article className="ccrea-why__card">
                <span className="ccrea-why__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-shield-halved" />
                  </svg>
                </span>
                <h3 className="ccrea-why__name">Sécurité IA sérieuse</h3>
                <p className="ccrea-why__text">
                  Protection contre prompt injection, jailbreaks, exfiltration de données système. Filtrage PII avant
                  envoi aux LLM, audit trail complet, monitoring des coûts d'inférence en temps réel avec alertes
                  budget.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="ccrea-midcta">
          <div className="container">
            <div className="ccrea-midcta__box">
              <div className="ccrea-midcta__left">
                <h3 className="ccrea-midcta__title">Vous avez une idée de SaaS IA ?</h3>
                <p className="ccrea-midcta__text">
                  En 30 minutes on identifie ensemble ce qui est réalisable en MVP et ce qui doit attendre la v2.
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
              <h2 className="ccrea-stack__title">Notre stack IA &amp; développement</h2>
              <p className="ccrea-stack__intro">
                Stack éprouvée sur plusieurs SaaS IA en production. Chaque brique est choisie pour scaler et rester
                maintenable.
              </p>
            </header>
            <div className="ccrea-stack__grid">
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-microchip" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Modèles LLM</p>
                <ul className="ccrea-stack__card-list">
                  <li>Claude Sonnet 5 / Opus 5</li>
                  <li>GPT-4/5 (fallback)</li>
                  <li>Prompt caching -90 %</li>
                  <li>Streaming SSE</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-magnifying-glass" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">RAG &amp; Vector DB</p>
                <ul className="ccrea-stack__card-list">
                  <li>pgvector (PostgreSQL)</li>
                  <li>Pinecone, Weaviate</li>
                  <li>Embeddings OpenAI/Voyage</li>
                  <li>Chunking optimisé</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-code" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">App stack</p>
                <ul className="ccrea-stack__card-list">
                  <li>Next.js 15 (App Router)</li>
                  <li>tRPC ou API routes</li>
                  <li>Prisma + PostgreSQL</li>
                  <li>Vercel AI SDK</li>
                </ul>
              </article>
              <article className="ccrea-stack__card">
                <span className="ccrea-stack__icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#i-solid-lock" />
                  </svg>
                </span>
                <p className="ccrea-stack__card-name">Auth &amp; billing</p>
                <ul className="ccrea-stack__card-list">
                  <li>Clerk ou Auth.js</li>
                  <li>Stripe Billing</li>
                  <li>Multi-tenant natif</li>
                  <li>Quotas &amp; fair-use</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="ccrea-cases">
          <div className="container">
            <header className="ccrea-cases__head">
              <h2 className="ccrea-cases__title">3 typologies de SaaS IA que nous développons</h2>
            </header>
            <div className="ccrea-cases__grid">
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">B2B</span>
                <h3 className="ccrea-cases__name">Chatbot métier / support augmenté</h3>
                <p className="ccrea-cases__text">
                  Assistant IA qui répond aux questions de vos clients en s'appuyant sur votre base de connaissance
                  interne. Réduit le volume de tickets support de 40 %, disponible 24/7, escalade humaine quand
                  nécessaire. Idéal SaaS B2B, e-commerce, banque.
                </p>
              </article>
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">Productivité</span>
                <h3 className="ccrea-cases__name">Copilot spécialisé métier</h3>
                <p className="ccrea-cases__text">
                  Copilot pour un métier précis : juridique (rédaction contrats), immobilier (rédaction annonces), RH
                  (screening CV), comptable (catégorisation), commercial (rédaction emails). Multiplie par 3-5 la
                  productivité sur des tâches répétitives à valeur ajoutée.
                </p>
              </article>
              <article className="ccrea-cases__card">
                <span className="ccrea-cases__tag">Agents</span>
                <h3 className="ccrea-cases__name">Agent autonome (workflow automation)</h3>
                <p className="ccrea-cases__text">
                  Agent qui exécute un workflow complet : recherche web, lecture de PDFs, appel API métier, synthèse.
                  Exemples : veille concurrentielle automatisée, qualification de leads entrants, génération de rapports
                  hebdo. Le futur du SaaS métier.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="expertise-faq" aria-labelledby="faq-title">
          <div className="container">
            <h2 className="expertise-faq__title" id="faq-title">
              Vos questions sur la création de SaaS IA
            </h2>
            <div className="expertise-faq__list">
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Quel budget pour un MVP de SaaS avec IA ?{' '}
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
                    Un premier périmètre démarre à <strong>8 000 € HT</strong>. Un MVP complet (auth multi-tenant,
                    prompt engineering, streaming, billing Stripe, dashboard admin) se situe autour de 22 000 € HT, et
                    monte à 40-60 000 € HT pour un produit avec RAG sur base documentaire client, agents, guardrails
                    avancés et connecteurs métier. Coûts d'inférence IA (Anthropic, OpenAI) séparés, généralement
                    100-500 €/mois au démarrage, à répercuter dans votre pricing.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Quel modèle IA choisir : Claude, GPT, Gemini, Llama ?{' '}
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
                    Ça dépend de votre cas d'usage. <strong>Claude</strong> (Sonnet 5, Opus 5) : meilleur pour le
                    raisonnement, l'analyse de docs longs, la génération de code, le service client B2B.{' '}
                    <strong>GPT-4/5</strong> : très polyvalent, écosystème d'outils riche. <strong>Gemini</strong> : bon
                    rapport prix/qualité, intégration Google native. <strong>Llama / Mistral</strong> : quand vous
                    voulez héberger le modèle en propre (souveraineté). On recommande selon le cas d'usage et le budget
                    d'inférence.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Comment maîtriser les coûts d'API IA au fur et à mesure de la croissance ?{' '}
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
                    Plusieurs leviers : <strong>prompt caching</strong> Anthropic (jusqu'à 90 % de réduction sur les
                    tokens répétés), <strong>choix modèle</strong> par tâche (Haiku pour du simple, Sonnet pour du
                    complexe, Opus uniquement quand nécessaire), <strong>quotas par utilisateur</strong> selon le plan
                    tarifaire, <strong>batching</strong> des requêtes non-temps réel, <strong>fallback</strong> vers un
                    modèle moins cher en cas de dépassement quota. Notre monitoring temps réel identifie les dérives.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Comment gérer la confidentialité des données envoyées aux modèles IA ?{' '}
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
                    Plusieurs niveaux. <strong>API cloud</strong> (Anthropic, OpenAI) : leurs conditions garantissent
                    que vos données API ne sont pas utilisées pour entraîner leurs modèles (contrats DPA disponibles).{' '}
                    <strong>Filtrage PII</strong> avant envoi (anonymisation automatique noms, emails, numéros).{' '}
                    <strong>Hébergement UE</strong> (Anthropic AWS Europe, OpenAI Azure Europe). Pour la souveraineté
                    totale, <strong>self-hosting</strong> de Llama 3, Mistral ou Qwen sur vos serveurs.
                  </p>
                </div>
              </details>
              <details className="expertise-faq__item">
                <summary className="expertise-faq__q">
                  Le SaaS supporte-t-il le multi-tenant (plusieurs entreprises clientes) ?{' '}
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
                    Oui, c'est un pilier de tout SaaS sérieux : on le fait dès le sprint 1. Chaque entreprise cliente a
                    son isolation logique en base de données (schéma dédié ou <em>row-level security</em> PostgreSQL),
                    ses propres users et permissions, son branding custom (logo, couleurs, sous-domaine dédié), son
                    quota d'usage. La facturation Stripe est également multi-tenant : chaque compte client a son
                    abonnement, ses factures, sa carte enregistrée.
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
                <h2 className="creation-cta__title">Discutons de votre SaaS IA</h2>
                <p className="creation-cta__text">
                  Brief découverte 30 min : on cadre votre idée, on chiffre le MVP et on identifie les modèles adaptés.
                  Devis sous 24 h.
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
          ...themeSchemas({ path: PATH, crumbs: CRUMBS, serviceSlug: 'creation-saas-ia' }),
          ...pageSchemas,
          websiteGraph({ path: PATH, title: TITLE }),
        ]}
      />
    </>
  );
}
