import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';
import { pageSchemas } from './schema';
import css from './styles';

const PATH = '/benjamin-dayan/';
const TITLE = 'Benjamin Dayan, fondateur de l’agence Kameo à Paris';
const DESCRIPTION =
  'Benjamin Dayan, fondateur et CEO de l’agence web Kameo à Paris. Parcours, expertise WordPress, SEO et direction artistique.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Benjamin Dayan', path: '/benjamin-dayan/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function BenjaminDayanPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main id="main">
        <div
          className="silo-back"
          style={{ padding: '24px 0', background: '#fff', borderBottom: '1px solid rgba(15,17,21,.04)' }}
        >
          <div className="container">
            <Link
              href="/notre-agence/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: '600',
                color: 'rgba(15,17,21,.55)',
                textDecoration: 'none',
              }}
            >
              <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                <path
                  d="M10 4L6 8l4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Retour à notre agence{' '}
            </Link>
          </div>
        </div>
        <section className="bio-hero">
          <div className="container bio-hero__grid">
            <div className="bio-hero__photo">
              <span className="bio-hero__monogram" aria-hidden="true">
                BD
              </span>
            </div>
            <div>
              <span className="bio-hero__eyebrow">Fondateur &amp; CEO</span>
              <h1 className="bio-hero__title">Benjamin Dayan</h1>
              <p className="bio-hero__role">
                Fondateur et CEO de Kameo, agence web parisienne créée en 2023. Passionné par le design web stratégique
                et le SEO, il pilote la direction artistique et le développement de l'agence depuis Paris 2e.
              </p>
              <div className="bio-hero__links">
                <a
                  href="https://www.linkedin.com/in/benjamin-dayan/"
                  target="_blank"
                  rel="noopener"
                  className="bio-hero__link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.53v14H.24V8zm7.34 0h4.34v1.94h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.94V22h-4.52v-6.36c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.44 1.66-2.44 3.36V22H7.58V8z" />
                  </svg>
                  LinkedIn{' '}
                </a>
                <a href="mailto:contact@agence-kameo.fr" className="bio-hero__link">
                  Email
                </a>
                <Link href="/contact/" className="bio-hero__link">
                  Prendre RDV
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bio-body">
          <div className="container bio-body__wrap">
            <div className="bio-body__section">
              <h2>Parcours</h2>
              <p>
                Benjamin Dayan fonde Kameo en octobre 2023, après plusieurs années passées à concevoir et développer des
                sites internet sur-mesure pour PME et start-ups. Son objectif : monter une agence intégrée à Paris qui
                refuse la sous-traitance et livre en délais fixes des sites WordPress premium et des applications métier
                propriétaires (CRM, marketplaces, SaaS avec IA).
              </p>
            </div>
            <div className="bio-body__section">
              <h2>Expertise</h2>
              <ul>
                <li>
                  <strong>WordPress sur-mesure</strong>, thèmes propriétaires, Gutenberg avancé, zéro page-builder
                </li>
                <li>
                  <strong>SEO technique</strong>, Core Web Vitals, Schema.org, silos éditoriaux
                </li>
                <li>
                  <strong>Direction artistique</strong>, identité visuelle, design d'interface, motion design
                </li>
                <li>
                  <strong>Développement applicatif</strong>, Node.js, Laravel, Next.js, PostgreSQL
                </li>
                <li>
                  <strong>IA générative</strong>, intégration Claude/GPT, RAG, agents autonomes, prompt engineering
                </li>
              </ul>
            </div>
            <div className="bio-body__section">
              <h2>Approche</h2>
              <p>
                Benjamin défend une approche intégrée : designer, développeur, expert SEO, motion designer et chef de
                projet travaillent côte à côte dans les bureaux du 2e arrondissement de Paris. Zéro sous-traitance, zéro
                offshore, un seul interlocuteur, des délais respectés à 97 %.
              </p>
              <p>
                Il croit au sur-mesure quand les SaaS packagés bloquent : un CRM adapté à votre process vaut mieux
                qu'une usine à gaz Salesforce, un thème WordPress custom est toujours plus performant qu'Elementor, un
                SaaS avec IA bien conçu bat n'importe quel chatbot générique.
              </p>
            </div>
            <div className="bio-body__section">
              <h2>Contact direct</h2>
              <p>
                Vous pouvez contacter Benjamin directement à{' '}
                <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>, sur{' '}
                <a href="https://www.linkedin.com/in/benjamin-dayan/" target="_blank" rel="noopener">
                  LinkedIn
                </a>
                , ou <Link href="/contact/">réserver un RDV visio 30 min gratuit</Link>. Bureaux au 9 rue des Colonnes,
                75002 Paris.
              </p>
            </div>
          </div>
        </section>
      </main>

      <JsonLd
        data={[
          ...themeSchemas({ path: PATH, crumbs: CRUMBS }),
          ...pageSchemas,
          websiteGraph({ path: PATH, title: TITLE, description: DESCRIPTION }),
        ]}
      />
    </>
  );
}
