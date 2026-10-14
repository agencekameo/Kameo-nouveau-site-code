import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import ContactForm from '@/components/ContactForm';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';

const PATH = '/contact/';
const TITLE = 'Contact Kameo, agence web à Paris | Devis sous 24 h';
const DESCRIPTION =
  'Contactez Kameo, agence web Paris : devis gratuit sous 24h pour votre projet site, branding ou motion. Email, tél, rendez-vous Calendly.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Contact', path: '/contact/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />

      <main id="main">
        {/* ============ CONTACT ============ */}
        <section className="contact">
          <div className="container contact__grid">
            {/* Colonne gauche, infos */}
            <div className="contact__info">
              <span className="contact__eyebrow">
                <span className="contact__bracket contact__bracket--tl" aria-hidden="true" />
                Contact <span className="contact__bracket contact__bracket--br" aria-hidden="true" />
              </span>
              <h1 className="contact__title">Collaborons ensemble</h1>
              <p className="contact__desc">
                Contactez-nous et explorons comment nous pouvons donner vie à vos idées. Que vous soyez prêt à commencer
                ou que vous ayez simplement des questions.
              </p>
              <a href="tel:+33662379985" className="contact__phone">
                06 62 37 99 85
              </a>
              <a href="mailto:contact@agence-kameo.fr" className="contact__email">
                contact@agence-kameo.fr
              </a>
              <p className="contact__subdesc">
                Contactez-nous par email ou appelez-nous, nous serons ravis de vous aider&nbsp;!
              </p>
              <div className="contact__socials">
                <a
                  href="https://www.instagram.com/agence_kameo/"
                  target="_blank"
                  rel="noopener"
                  className="contact__social"
                >
                  <span className="contact__social-arrow">
                    <svg viewBox="0 0 16 16" width="11" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 12 L12 4 M6 4 H12 V10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Instagram{' '}
                </a>
                <a
                  href="https://www.linkedin.com/company/agence-kameo/"
                  target="_blank"
                  rel="noopener"
                  className="contact__social"
                >
                  <span className="contact__social-arrow">
                    <svg viewBox="0 0 16 16" width="11" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 12 L12 4 M6 4 H12 V10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  LinkedIn{' '}
                </a>
              </div>
            </div>
            {/* Colonne droite, formulaire */}
            <div className="contact__form-col">
              <ContactForm />
              {/* Informations pratiques */}
              <div className="cinfo">
                <div className="cinfo__item">
                  <span className="cinfo__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-map-location-dot" />
                    </svg>
                  </span>
                  <div>
                    <span className="cinfo__label">Adresse postale</span>
                    <p className="cinfo__value">9 rue des Colonnes, 75002 Paris</p>
                  </div>
                </div>
                <div className="cinfo__item">
                  <span className="cinfo__icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                      <use href="/icons.svg#i-solid-earth-europe" />
                    </svg>
                  </span>
                  <div>
                    <span className="cinfo__label">Heures d’ouverture</span>
                    <p className="cinfo__value">Lundi au Vendredi (9:00 - 17:00)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============ MAP, Local SEO (Google Maps embed lazy) ============ */}
        <section className="contact-map" aria-label="Localisation Kameo">
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5896938817567!2d2.3398863769043147!3d48.8688998710324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2d8eb22d57%3A0x40b82c3688c9690!2sRue%20des%20Colonnes%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="380"
              style={{ border: '0', borderRadius: '16px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kameo, 9 rue des Colonnes, 75002 Paris"
            />
          </div>
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
