import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';

const PATH = '/notre-agence/';
const TITLE = 'Agence digitale à Paris : découvrir l’équipe Kameo';
const DESCRIPTION =
  'L’agence Kameo à Paris : un studio à taille humaine pour vos projets web, branding et motion. 50+ clients, 4,6/5 Trustpilot, devis sous 24 h.';
const CRUMBS = [
  { name: 'Accueil', path: '/' },
  { name: 'Notre agence', path: '/notre-agence/' },
];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function NotreAgencePage() {
  return (
    <>
      <Breadcrumb items={CRUMBS} />

      <main id="main">
        {/* ============ PAGE HERO ============ */}
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="page-hero__eyebrow">
              <span className="page-hero__bracket page-hero__bracket--tr" aria-hidden="true" />
              Notre agence <span className="page-hero__bracket page-hero__bracket--bl" aria-hidden="true" />
            </span>
            <h1 className="page-hero__title">
              Faites connaissance avec l’agence <br />
              <span className="page-hero__title-muted">derrière vos succès</span>
            </h1>
            <p className="page-hero__text">
              Une agence créative à taille humaine où chaque membre apporte son expertise unique pour donner vie à vos
              ambitions digitales.
            </p>
          </div>
        </section>
        {/* ============ ABOUT (image + texte) ============ */}
        <section className="about">
          <div className="container about__grid">
            <div className="about__media">
              <img
                src="/images/notre agence.webp"
                alt="L'équipe Kameo en réunion"
                loading="lazy"
                width="800"
                height="1000"
              />
            </div>
            <div className="about__body">
              <p className="about__text">
                Kameo, c’est 2 ans d’existence, une agence au cœur de Paris, et plus de 50 entreprises accompagnées
                dans des secteurs aussi variés que la cosmétique, l’assurance, le juridique ou le médical.
              </p>
              <p className="about__text">
                <strong>Notre ADN&nbsp;?</strong> Proximité, réactivité et dynamisme.
              </p>
            </div>
          </div>
        </section>
        {/* ============ LOGOS CLIENTS ============ */}
        <section className="logos" aria-label="Ils nous font confiance">
          <p className="logos__eyebrow">Ils nous font confiance</p>
          <div className="logos__viewport">
            <div className="logos__track" id="logosTrack">
              <div className="logo-item">
                <img
                  src="/images/logo clients/Dronespec.webp"
                  alt="Dronespec"
                  loading="lazy"
                  width="230"
                  height="180"
                />
              </div>
              <div className="logo-item">
                <img
                  src="/images/logo clients/Medical Market.webp"
                  alt="Medical Market"
                  loading="lazy"
                  width="617"
                  height="180"
                />
              </div>
              <div className="logo-item">
                <img src="/images/logo clients/Claimz.webp" alt="Claimz" loading="lazy" width="499" height="180" />
              </div>
              <div className="logo-item">
                <img
                  src="/images/logo clients/Be Cherry.webp"
                  alt="Be Cherry"
                  loading="lazy"
                  width="342"
                  height="180"
                />
              </div>
              <div className="logo-item">
                <img src="/images/logo clients/Ohvale.webp" alt="Ohvale" loading="lazy" width="261" height="180" />
              </div>
              <div className="logo-item">
                <img src="/images/logo clients/Qunfil.webp" alt="Qunfil" loading="lazy" width="350" height="180" />
              </div>
              <div className="logo-item">
                <img src="/images/logo clients/Valeos.webp" alt="Valeos" loading="lazy" width="180" height="180" />
              </div>
              <div className="logo-item">
                <img
                  src="/images/logo clients/Axistone Capital.webp"
                  alt="Axistone Capital"
                  loading="lazy"
                  width="379"
                  height="180"
                />
              </div>
              <div className="logo-item">
                <img
                  src="/images/logo clients/Villa de luxe Bonifacio.webp"
                  alt="Villa de luxe Bonifacio"
                  loading="lazy"
                  width="464"
                  height="180"
                />
              </div>
              <div className="logo-item">
                <img
                  src="/images/logo clients/Compagnie des Autocars Lyonnais.webp"
                  alt="Compagnie des Autocars Lyonnais"
                  loading="lazy"
                  width="494"
                  height="180"
                />
              </div>
              <div className="logo-item">
                <img src="/images/logo clients/Defikart.webp" alt="Defikart" loading="lazy" width="180" height="180" />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  src="/images/logo clients/Dronespec.webp"
                  alt="Dronespec"
                  loading="lazy"
                  width="230"
                  height="180"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  src="/images/logo clients/Medical Market.webp"
                  alt="Medical Market"
                  loading="lazy"
                  width="617"
                  height="180"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img src="/images/logo clients/Claimz.webp" alt="Claimz" loading="lazy" width="499" height="180" />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  src="/images/logo clients/Be Cherry.webp"
                  alt="Be Cherry"
                  loading="lazy"
                  width="342"
                  height="180"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img src="/images/logo clients/Ohvale.webp" alt="Ohvale" loading="lazy" width="261" height="180" />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img src="/images/logo clients/Qunfil.webp" alt="Qunfil" loading="lazy" width="350" height="180" />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img src="/images/logo clients/Valeos.webp" alt="Valeos" loading="lazy" width="180" height="180" />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  src="/images/logo clients/Axistone Capital.webp"
                  alt="Axistone Capital"
                  loading="lazy"
                  width="379"
                  height="180"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  src="/images/logo clients/Villa de luxe Bonifacio.webp"
                  alt="Villa de luxe Bonifacio"
                  loading="lazy"
                  width="464"
                  height="180"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img
                  src="/images/logo clients/Compagnie des Autocars Lyonnais.webp"
                  alt="Compagnie des Autocars Lyonnais"
                  loading="lazy"
                  width="494"
                  height="180"
                />
              </div>
              <div className="logo-item" inert aria-hidden="true">
                <img src="/images/logo clients/Defikart.webp" alt="Defikart" loading="lazy" width="180" height="180" />
              </div>
            </div>
          </div>
        </section>
        {/* ============ TESTIMONIAL ============ */}
        <section className="testimonial">
          <div className="container testimonial__inner">
            <span className="testimonial__quote" aria-hidden="true">
              <svg viewBox="0 0 40 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0c-4.4 0-8 3.6-8 8v16h16V8H8c0-.5.5-1 1-1h5V0H8zm20 0c-4.4 0-8 3.6-8 8v16h16V8h-8c0-.5.5-1 1-1h5V0h-6z" />
              </svg>
            </span>
            <blockquote className="testimonial__quote-text">
              Extrêmement content du travail effectué par l’agence{' '}
              <span className="testimonial__muted">Kameo, nouveau logo, charte graphique et site internet.</span>
            </blockquote>
            <figure className="testimonial__author">
              <img
                loading="lazy"
                src="/images/Andrea Miranda.webp"
                alt=""
                className="testimonial__avatar"
                width="400"
                height="397"
              />
              <figcaption>
                <strong className="testimonial__name">Andrea Miranda</strong>
                <span className="testimonial__role">Joonetsu knives</span>
              </figcaption>
            </figure>
          </div>
        </section>
        {/* ============ ÉQUIPE ============ */}
        <section className="team">
          <div className="container">
            <div className="team__head">
              <div className="team__head-left">
                <span className="team__eyebrow">
                  <span className="team__bracket team__bracket--tr" aria-hidden="true" />
                  notre équipe <span className="team__bracket team__bracket--bl" aria-hidden="true" />
                </span>
                <h2 className="team__title">L’équipe</h2>
              </div>
              <p className="team__intro">
                Nous sommes une équipe de créatifs passionnés qui conçoit des projets digitaux modernes et uniques.
                Chaque client bénéficie d’un accompagnement personnalisé et d’une expertise pointue pour se démarquer
                vraiment.
              </p>
            </div>
            <div className="team__grid">
              <article className="member">
                <div className="member__photo">
                  <img src="/images/benjamin.webp" alt="Benjamin Dayan" loading="lazy" width="400" height="400" />
                  <div className="member__socials" aria-label="Réseaux sociaux de Benjamin Dayan">
                    <a
                      href="https://www.linkedin.com/in/benjamindayan/"
                      target="_blank"
                      rel="noopener"
                      className="member__social"
                      aria-label="LinkedIn"
                    >
                      <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-brands-linkedin-in" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="member__name">Benjamin Dayan</p>
                <p className="member__role">Président</p>
              </article>
              <article className="member">
                <div className="member__photo">
                  <img src="/images/Louison.webp" alt="Louison B." loading="lazy" width="400" height="400" />
                  <div className="member__socials" aria-label="Réseaux sociaux de Louison B.">
                    <a
                      href="https://www.linkedin.com/in/louison-boutet/"
                      target="_blank"
                      rel="noopener"
                      className="member__social"
                      aria-label="LinkedIn"
                    >
                      <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-brands-linkedin-in" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="member__name">Louison B.</p>
                <p className="member__role">Directeur Général</p>
              </article>
              <article className="member">
                <div className="member__photo">
                  <img src="/images/Jeremy.webp" alt="Jeremy L." loading="lazy" width="400" height="400" />
                  <div className="member__socials" aria-label="Réseaux sociaux de Jeremy L.">
                    <a
                      href="https://www.linkedin.com/company/agence-kameo/posts/?feedView=all"
                      target="_blank"
                      rel="noopener"
                      className="member__social"
                      aria-label="LinkedIn"
                    >
                      <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-brands-linkedin-in" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="member__name">Jeremy L.</p>
                <p className="member__role">Chef de projet</p>
              </article>
              <article className="member">
                <div className="member__photo">
                  <img src="/images/Anthony.webp" alt="Anthony" loading="lazy" width="400" height="400" />
                  <div className="member__socials" aria-label="Réseaux sociaux de Anthony">
                    <a
                      href="https://www.linkedin.com/company/agence-kameo/posts/?feedView=all"
                      target="_blank"
                      rel="noopener"
                      className="member__social"
                      aria-label="LinkedIn"
                    >
                      <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-brands-linkedin-in" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="member__name">Anthony</p>
                <p className="member__role">Développeur</p>
              </article>
              <article className="member">
                <div className="member__photo">
                  <img src="/images/Angel.webp" alt="Angel C." loading="lazy" width="400" height="400" />
                  <div className="member__socials" aria-label="Réseaux sociaux de Angel C.">
                    <a
                      href="https://www.linkedin.com/company/agence-kameo/posts/?feedView=all"
                      target="_blank"
                      rel="noopener"
                      className="member__social"
                      aria-label="LinkedIn"
                    >
                      <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-brands-linkedin-in" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="member__name">Angel C.</p>
                <p className="member__role">Designer</p>
              </article>
              <article className="member">
                <div className="member__photo">
                  <img src="/images/Aysha.webp" alt="Aysha B." loading="lazy" width="400" height="400" />
                  <div className="member__socials" aria-label="Réseaux sociaux de Aysha B.">
                    <a
                      href="https://www.linkedin.com/company/agence-kameo/posts/?feedView=all"
                      target="_blank"
                      rel="noopener"
                      className="member__social"
                      aria-label="LinkedIn"
                    >
                      <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-brands-linkedin-in" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="member__name">Aysha B.</p>
                <p className="member__role">Designeuse</p>
              </article>
              <article className="member">
                <div className="member__photo">
                  <img src="/images/Kelly.webp" alt="Kelly M." loading="lazy" width="400" height="400" />
                  <div className="member__socials" aria-label="Réseaux sociaux de Kelly M.">
                    <a
                      href="https://www.linkedin.com/company/agence-kameo/posts/?feedView=all"
                      target="_blank"
                      rel="noopener"
                      className="member__social"
                      aria-label="LinkedIn"
                    >
                      <svg className="icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-brands-linkedin-in" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="member__name">Kelly M.</p>
                <p className="member__role">Business Developer</p>
              </article>
            </div>
          </div>
        </section>
        {/* ============ COMPARATIF ============ */}
        <section className="comparison">
          <div className="container">
            <div className="comparison__head">
              <span className="comparison__eyebrow">
                <span className="comparison__bracket comparison__bracket--tr" aria-hidden="true" />
                Comparatif <span className="comparison__bracket comparison__bracket--bl" aria-hidden="true" />
              </span>
              <h2 className="comparison__title">Pourquoi travailler avec nous&nbsp;?</h2>
              <p className="comparison__text">Voici nos valeurs ajoutées qui fait notre différence&nbsp;:</p>
            </div>
            <div className="comparison__wrap">
              <div className="comparison__grid">
                <section className="comp-col comp-col--other">
                  <header className="comp-col__head">
                    <span className="comp-col__emoji" aria-hidden="true">
                      <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-regular-face-frown" />
                      </svg>
                    </span>
                    <h3 className="comp-col__title">Agences classiques&nbsp;:</h3>
                  </header>
                  <div className="comp-card">
                    <ul className="comp-list">
                      <li>
                        <span className="comp-ico comp-ico--neg" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-xmark" />
                          </svg>
                        </span>
                        Solutions standardisées et génériques
                      </li>
                      <li>
                        <span className="comp-ico comp-ico--neg" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-xmark" />
                          </svg>
                        </span>
                        Designs anciens qui vieillissent rapidement
                      </li>
                      <li>
                        <span className="comp-ico comp-ico--neg" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-xmark" />
                          </svg>
                        </span>
                        Interlocuteurs multiples et disponibilité limitée
                      </li>
                      <li>
                        <span className="comp-ico comp-ico--neg" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-xmark" />
                          </svg>
                        </span>
                        Prestations basiques et peu qualitatives
                      </li>
                      <li>
                        <span className="comp-ico comp-ico--neg" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-xmark" />
                          </svg>
                        </span>
                        Aucun suivi après livraison du projet
                      </li>
                      <li>
                        <span className="comp-ico comp-ico--neg" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-xmark" />
                          </svg>
                        </span>
                        Tarifs hors de prix et coûts additionnels cachés
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="comp-col comp-col--kameo">
                  <header className="comp-col__head">
                    <span className="comp-col__emoji" aria-hidden="true">
                      <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                        <use href="/icons.svg#i-regular-face-smile" />
                      </svg>
                    </span>
                    <h3 className="comp-col__title">Kameo&nbsp;:</h3>
                  </header>
                  <div className="comp-card">
                    <ul className="comp-list">
                      <li>
                        <span className="comp-ico comp-ico--pos" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 640 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-user-check" />
                          </svg>
                        </span>
                        Livrables personnalisables et sur-mesure
                      </li>
                      <li>
                        <span className="comp-ico comp-ico--pos" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-wand-magic-sparkles" />
                          </svg>
                        </span>
                        Rendus modernes et durables dans le temps
                      </li>
                      <li>
                        <span className="comp-ico comp-ico--pos" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 576 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-file-shield" />
                          </svg>
                        </span>
                        Chef de projet dédié (réactif &amp; à votre écoute 5j/7)
                      </li>
                      <li>
                        <span className="comp-ico comp-ico--pos" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-chart-column" />
                          </svg>
                        </span>
                        Services performants et haut de gamme
                      </li>
                      <li>
                        <span className="comp-ico comp-ico--pos" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-comment-dots" />
                          </svg>
                        </span>
                        Accompagne&nbsp;: Suivi, analyses, tracking
                      </li>
                      <li>
                        <span className="comp-ico comp-ico--pos" aria-hidden="true">
                          <svg className="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
                            <use href="/icons.svg#i-solid-bullseye" />
                          </svg>
                        </span>
                        Tarifs accessibles et transparents
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* ============ FAQ ============ */}
        <section className="faq">
          <div className="container faq__grid">
            <aside className="faq__side">
              <span className="faq__eyebrow">
                <span className="faq__bracket faq__bracket--tr" aria-hidden="true" />
                FAQ <span className="faq__bracket faq__bracket--bl" aria-hidden="true" />
              </span>
              <h2 className="faq__title">
                Des questions&nbsp;? <br />
                <span className="faq__title-muted">Nous y répondons.</span>
              </h2>
              <p className="faq__lead">
                Tout ce que vous devez savoir sur notre processus et comment nous obtenons des résultats.
              </p>
              <div className="faq__cta">
                <p className="faq__cta-title">Vous n’avez pas eu votre réponse&nbsp;?</p>
                <p className="faq__cta-text">Parlons-en ensemble, notre équipe est là pour vous&nbsp;!</p>
                <Link href="/contact/" className="faq__cta-btn">
                  <span>Contactez-nous</span>
                  <span className="faq__cta-arrow" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </aside>
            <div className="faq__list">
              <details className="faq-item" open>
                <summary>
                  <span>Quels sont vos délais de réalisation&nbsp;?</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </summary>
                <div className="faq-item__body">
                  <p>
                    Les délais varient selon la complexité et le type de projet. Vous trouverez les délais précis pour
                    chaque prestation sur les pages de nos services dans la catégorie "Expertises". Nous établissons
                    également un planning détaillé dès le début de notre collaboration.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  <span>Travaillez-vous avec des entreprises de toutes tailles&nbsp;?</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </summary>
                <div className="faq-item__body">
                  <p>
                    Absolument&nbsp;! Nous accompagnons aussi bien les startups que les PME et grandes entreprises.
                    Chaque projet bénéficie de la même attention et du même niveau d’expertise, quelle que soit votre
                    taille.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  <span>Proposez-vous un suivi après la livraison&nbsp;?</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </summary>
                <div className="faq-item__body">
                  <p>
                    Oui, nous assurons un suivi post-livraison systématique. Selon votre projet, cela inclut des
                    analyses de performances, du support technique, et des recommandations d’optimisation. Nous restons
                    disponibles 5j/7 pour vous accompagner.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  <span>Comment se déroule la collaboration&nbsp;?</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </summary>
                <div className="faq-item__body">
                  <p>
                    Un chef de projet dédié vous est attribué dès le début. Vous bénéficiez de points réguliers, d’une
                    communication fluide et de validations à chaque étape clé. Tout est transparent et collaboratif pour
                    garantir un résultat qui vous ressemble.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  <span>Quels secteurs d’activité couvrez-vous&nbsp;?</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </summary>
                <div className="faq-item__body">
                  <p>
                    Nous travaillons avec des secteurs variés&nbsp;: cosmétique, assurance, juridique, médical,
                    e-commerce, et bien d’autres. Notre approche sur-mesure nous permet de nous adapter à n’importe quel
                    univers métier.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  <span>Vos tarifs sont-ils fixes ou personnalisés&nbsp;?</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </summary>
                <div className="faq-item__body">
                  <p>
                    Nos tarifs sont totalement transparents et personnalisés selon vos besoins. Nous établissons un
                    devis détaillé après avoir compris votre projet. Aucun coût caché, uniquement ce dont vous avez
                    besoin.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  <span>Puis-je modifier mon site après sa création&nbsp;?</span>
                  <span className="faq-item__icon" aria-hidden="true" />
                </summary>
                <div className="faq-item__body">
                  <p>
                    Bien sûr&nbsp;! Nous créons des sites facilement modifiables via des CMS intuitifs. Nous vous
                    formons à leur utilisation et restons disponibles pour toute assistance. Vous gardez le contrôle
                    total de votre contenu.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <JsonLd
        data={[
          ...themeSchemas({ path: PATH, crumbs: CRUMBS }),
          websiteGraph({ path: PATH, title: TITLE, description: DESCRIPTION }),
        ]}
      />
    </>
  );
}
