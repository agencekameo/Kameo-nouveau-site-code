import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { themeSchemas, websiteGraph } from '@/lib/schema';

const PATH = '/mentions-legales/';
const TITLE = 'Mentions légales | Kameo';
const DESCRIPTION = '';
const CRUMBS = [{ name: 'Accueil', path: '/' }];

export const metadata: Metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION, noindex: true });

export default function MentionsLegalesPage() {
  return (
    <>
      <main id="main">
        {/* ============ HERO ============ */}
        <section className="legal-hero">
          <div className="container">
            <span className="legal-hero__badge">
              <svg className="icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
                <use href="/icons.svg#i-solid-file-lines" />
              </svg>
              Dernière mise à jour&nbsp;: 31 mars 2026{' '}
            </span>
            <h1 className="legal-hero__title">Mentions légales</h1>
            <p className="legal-hero__desc">
              Conformément à la Loi n°2004-575 du 21 juin 2004 (L.C.E.N.), les présentes mentions légales régissent
              l’utilisation du site <strong>agence-kameo.fr</strong> et définissent les droits et obligations des
              utilisateurs.
            </p>
          </div>
        </section>
        {/* ============ ONGLETS ============ */}
        <div className="container">
          <nav className="legal-tabs" aria-label="Documents légaux">
            <Link href="/mentions-legales/" className="legal-tabs__link legal-tabs__link--active">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite/" className="legal-tabs__link">
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
                    1. Informations légales
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-2" className="legal__toc-link">
                    2. Objet et acceptation
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-3" className="legal__toc-link">
                    3. Champ d’application
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-4" className="legal__toc-link">
                    4. Accès au site
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-5" className="legal__toc-link">
                    5. Utilisation du site
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-6" className="legal__toc-link">
                    6. Services proposés
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-7" className="legal__toc-link">
                    7. Prix et paiement
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-8" className="legal__toc-link">
                    8. Droit de rétractation
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-9" className="legal__toc-link">
                    9. Annulation et modification
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-10" className="legal__toc-link">
                    10. Obligations du client
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-11" className="legal__toc-link">
                    11. Obligations de Kameo
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-12" className="legal__toc-link">
                    12. Propriété intellectuelle
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-13" className="legal__toc-link">
                    13. Garanties et responsabilité
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-14" className="legal__toc-link">
                    14. Données personnelles
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-15" className="legal__toc-link">
                    15. Cookies
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-16" className="legal__toc-link">
                    16. Liens hypertextes
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-17" className="legal__toc-link">
                    17. Réclamations et litiges
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-18" className="legal__toc-link">
                    18. Divisibilité
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-19" className="legal__toc-link">
                    19. Langue
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-20" className="legal__toc-link">
                    20. Non-renonciation
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-21" className="legal__toc-link">
                    21. Confidentialité
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-22" className="legal__toc-link">
                    22. Références clients
                  </a>
                </li>
                <li className="legal__toc-item">
                  <a href="#section-23" className="legal__toc-link">
                    23. Contact
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
                  Informations légales{' '}
                </h2>
                <h3 className="legal__h3">1.1 Éditeur du site</h3>
                <div className="legal__card">
                  <p className="legal__p">
                    <strong>KAMEO</strong>
                    <br />
                    Société par Actions Simplifiée (SAS) <br />
                    SIRET&nbsp;: 980 573 984 00013 <br />
                    Capital social&nbsp;: 100&nbsp;€ <br />
                    APE/NAF&nbsp;: 6201Z, Programmation informatique <br />
                    Siège social&nbsp;: 9 rue des colonnes, 75002 Paris, France <br />
                    Téléphone&nbsp;: <a href="tel:+33662379985">06 62 37 99 85</a>
                    <br />
                    Email&nbsp;: <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>
                    <br />
                    Responsable de la publication&nbsp;: M. Louison BOUTET <br />
                    N° TVA intracommunautaire&nbsp;: FR54980573984{' '}
                  </p>
                </div>
                <h3 className="legal__h3">1.2 Hébergement</h3>
                <div className="legal__card">
                  <p className="legal__p">
                    <strong>Planet Hoster Inc.</strong>
                    <br />
                    4416 Louis-B.-Mayer, Laval (Québec) H7P 0G1, Canada <br />
                    Site web&nbsp;:{' '}
                    <a href="https://www.planethoster.com" target="_blank" rel="noopener">
                      www.planethoster.com
                    </a>
                  </p>
                </div>
                <h3 className="legal__h3">1.3 Directeur de la publication</h3>
                <p className="legal__p">
                  M. Louison BOUTET, <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>
                </p>
              </div>
              {/* ,Section 2, */}
              <div className="legal__section" id="section-2">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    2
                  </span>
                  Objet et acceptation{' '}
                </h2>
                <p className="legal__p">
                  Les présentes mentions légales définissent les modalités et conditions d’utilisation du site internet
                  agence-kameo.fr (ci-après le « Site »), ainsi que les droits et obligations des parties.
                </p>
                <p className="legal__p">
                  Le Site est édité par la société KAMEO, agence digitale spécialisée dans&nbsp;:
                </p>
                <ul className="legal__list">
                  <li>La création de sites internet (vitrines, e-commerce, applications web)</li>
                  <li>Le développement web sur mesure</li>
                  <li>Le branding et l’identité visuelle</li>
                  <li>La gestion de campagnes publicitaires (Meta Ads, Google Ads)</li>
                  <li>La gestion et l’animation des réseaux sociaux</li>
                  <li>L’optimisation de fiches Google Business</li>
                </ul>
              </div>
              {/* ,Section 3, */}
              <div className="legal__section" id="section-3">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    3
                  </span>
                  Champ d’application{' '}
                </h2>
                <p className="legal__p">
                  Les présentes mentions légales s’appliquent à tout utilisateur du Site (ci-après l'« Utilisateur »),
                  sans restriction ni réserve. L’accès et l’utilisation du Site impliquent l’acceptation sans réserve
                  des présentes.
                </p>
                <p className="legal__p">
                  KAMEO se réserve le droit de modifier ces mentions légales à tout moment. Les conditions applicables
                  sont celles en vigueur au moment de l’utilisation. En cas de modification substantielle, les
                  utilisateurs seront informés via le Site ou par email.
                </p>
              </div>
              {/* ,Section 4, */}
              <div className="legal__section" id="section-4">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    4
                  </span>
                  Accès au site{' '}
                </h2>
                <h3 className="legal__h3">4.1 Modalités d’accès</h3>
                <p className="legal__p">
                  Le Site est accessible gratuitement à tout Utilisateur disposant d’un accès à Internet. Tous les frais
                  d’accès (matériel, logiciels, connexion, etc.) sont à la charge de l’Utilisateur, qui reconnaît
                  disposer des compétences et moyens nécessaires.
                </p>
                <h3 className="legal__h3">4.2 Disponibilité du Site</h3>
                <p className="legal__p">L’accès au Site est possible 24h/24 et 7j/7, sauf en cas de&nbsp;:</p>
                <ul className="legal__list">
                  <li>Force majeure</li>
                  <li>Événement hors du contrôle de KAMEO</li>
                  <li>Maintenance programmée ou d’urgence</li>
                </ul>
                <p className="legal__p">
                  KAMEO ne saurait être tenue responsable de tout dommage résultant d’une indisponibilité temporaire ou
                  totale du Site. Les interruptions pour maintenance sont notifiées dans la mesure du possible.
                </p>
                <h3 className="legal__h3">4.3 Évolution du Site</h3>
                <p className="legal__p">
                  KAMEO se réserve le droit de faire évoluer, modifier ou suspendre le Site sans préavis, pour des
                  raisons de maintenance ou tout autre motif jugé nécessaire.
                </p>
              </div>
              {/* ,Section 5, */}
              <div className="legal__section" id="section-5">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    5
                  </span>
                  Utilisation du site{' '}
                </h2>
                <h3 className="legal__h3">5.1 Obligations générales</h3>
                <p className="legal__p">L’Utilisateur s’engage à&nbsp;:</p>
                <ul className="legal__list">
                  <li>Utiliser le Site conformément à son objet</li>
                  <li>Ne pas perturber ni tenter de perturber son bon fonctionnement</li>
                  <li>Ne pas usurper l’identité d’une autre personne ou entité</li>
                  <li>Ne pas collecter des informations sur d’autres Utilisateurs</li>
                  <li>Ne pas utiliser le Site à des fins illégales ou non autorisées</li>
                  <li>Respecter les droits de propriété intellectuelle de KAMEO et des tiers</li>
                </ul>
                <h3 className="legal__h3">5.2 Contenus prohibés</h3>
                <p className="legal__p">
                  Il est strictement interdit de publier ou transmettre via le Site des contenus illégaux, nuisibles,
                  menaçants, abusifs, harcelants, diffamatoires, pornographiques, discriminatoires (race, religion,
                  sexe, orientation sexuelle, etc.), portant atteinte à des droits de propriété intellectuelle,
                  contenant des virus ou code malveillant, ou constituant du spam non autorisé.
                </p>
                <p className="legal__p">
                  KAMEO se réserve le droit de supprimer tout contenu contrevenant aux présentes ou à la législation
                  applicable, sans préavis ni indemnité.
                </p>
              </div>
              {/* ,Section 6, */}
              <div className="legal__section" id="section-6">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    6
                  </span>
                  Services proposés{' '}
                </h2>
                <h3 className="legal__h3">6.1 Présentation des services</h3>
                <div className="legal__services">
                  <div className="legal__service-card">
                    <strong>Développement Web</strong>
                    <ul>
                      <li>Sites vitrines &amp; e-commerce</li>
                      <li>Applications web sur mesure</li>
                      <li>Dashboards &amp; interfaces admin</li>
                      <li>Maintenance et évolution</li>
                    </ul>
                  </div>
                  <div className="legal__service-card">
                    <strong>Branding &amp; Identité</strong>
                    <ul>
                      <li>Création de logos</li>
                      <li>Charte graphique complète</li>
                      <li>Design de supports visuels</li>
                      <li>Refonte d’identité visuelle</li>
                    </ul>
                  </div>
                  <div className="legal__service-card">
                    <strong>Publicités Digitales</strong>
                    <ul>
                      <li>Campagnes Meta Ads &amp; Google Ads</li>
                      <li>Design de visuels publicitaires</li>
                      <li>Landing pages optimisées</li>
                      <li>Tracking &amp; analyse de performance</li>
                    </ul>
                  </div>
                  <div className="legal__service-card">
                    <strong>Réseaux Sociaux &amp; Local</strong>
                    <ul>
                      <li>Animation de comptes sociaux</li>
                      <li>Création de contenu</li>
                      <li>Optimisation Google Business</li>
                      <li>Stratégie &amp; calendrier éditorial</li>
                    </ul>
                  </div>
                </div>
                <h3 className="legal__h3">6.2 Information précontractuelle</h3>
                <p className="legal__p">
                  Les caractéristiques essentielles des services sont présentées clairement sur le Site. Toute
                  prestation est précédée d’un devis détaillé précisant la nature et l’étendue des services, le prix
                  total TTC, les délais, les modalités de paiement et les conditions d’annulation.
                </p>
                <h3 className="legal__h3">6.3 Processus de commande</h3>
                <ol className="legal__steps">
                  <li>
                    <span className="legal__step-num" aria-hidden="true">
                      1
                    </span>
                    <div>
                      <strong>Prise de contact</strong>, Formulaire, email ou téléphone
                    </div>
                  </li>
                  <li>
                    <span className="legal__step-num" aria-hidden="true">
                      2
                    </span>
                    <div>
                      <strong>Brief &amp; analyse des besoins</strong>, Échange pour comprendre le projet et les
                      objectifs
                    </div>
                  </li>
                  <li>
                    <span className="legal__step-num" aria-hidden="true">
                      3
                    </span>
                    <div>
                      <strong>Devis personnalisé</strong>, Établi par KAMEO
                    </div>
                  </li>
                  <li>
                    <span className="legal__step-num" aria-hidden="true">
                      4
                    </span>
                    <div>
                      <strong>Validation</strong>, Bon pour accord signé par le client
                    </div>
                  </li>
                  <li>
                    <span className="legal__step-num" aria-hidden="true">
                      5
                    </span>
                    <div>
                      <strong>Acompte</strong>, Versement de 30 à 50 % du montant total
                    </div>
                  </li>
                  <li>
                    <span className="legal__step-num" aria-hidden="true">
                      6
                    </span>
                    <div>
                      <strong>Réalisation</strong>, Selon le cahier des charges validé
                    </div>
                  </li>
                  <li>
                    <span className="legal__step-num" aria-hidden="true">
                      7
                    </span>
                    <div>
                      <strong>Validation client</strong>, Des livrables avec rounds de modifications inclus
                    </div>
                  </li>
                  <li>
                    <span className="legal__step-num" aria-hidden="true">
                      8
                    </span>
                    <div>
                      <strong>Livraison finale</strong>, Remise des fichiers sources et/ou mise en ligne
                    </div>
                  </li>
                  <li>
                    <span className="legal__step-num" aria-hidden="true">
                      9
                    </span>
                    <div>
                      <strong>Solde</strong>, Paiement du montant restant
                    </div>
                  </li>
                </ol>
                <h3 className="legal__h3">6.4 Délais</h3>
                <p className="legal__p">
                  Les délais sont précisés dans chaque devis et courent à compter de la réception de l’acompte et de
                  tous les éléments nécessaires à la réalisation. Ils peuvent être prolongés en cas de retard du client,
                  de modifications importantes, ou de force majeure.
                </p>
              </div>
              {/* ,Section 7, */}
              <div className="legal__section" id="section-7">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    7
                  </span>
                  Prix et paiement{' '}
                </h2>
                <h3 className="legal__h3">7.1 Prix</h3>
                <p className="legal__p">
                  Les prix sont indiqués en euros (€) TTC. KAMEO se réserve le droit de modifier ses tarifs à tout
                  moment. Les tarifs applicables sont ceux en vigueur lors de la validation du devis. Les devis sont
                  valables <strong>30 jours</strong> à compter de leur date d’émission, sauf mention contraire.
                </p>
                <h3 className="legal__h3">7.2 Modalités de paiement</h3>
                <p className="legal__p">Les prestations font l’objet d’une facturation échelonnée&nbsp;:</p>
                <ul className="legal__list">
                  <li>
                    <strong>Acompte&nbsp;:</strong> 30 à 50 % du montant total à la signature du devis
                  </li>
                  <li>
                    <strong>Solde&nbsp;:</strong> payable à la livraison ou selon les étapes définies dans le devis
                  </li>
                </ul>
                <p className="legal__p">
                  Moyens de paiement acceptés&nbsp;: virement bancaire, carte bancaire, chèque (entreprises françaises
                  uniquement), PayPal.
                </p>
                <h3 className="legal__h3">7.3 Retard de paiement</h3>
                <p className="legal__p">
                  Conformément à l’article L. 441-10 du Code de commerce, des pénalités de retard calculées sur la base
                  de trois fois le taux d’intérêt légal sont exigibles en cas de retard. Une indemnité forfaitaire de{' '}
                  <strong>40&nbsp;€</strong> pour frais de recouvrement sera également due (art. D. 441-5).
                </p>
                <p className="legal__p">
                  Le non-paiement total ou partiel entraîne la suspension de toutes les prestations en cours,
                  l’exigibilité immédiate de toutes les sommes dues, et la possibilité pour KAMEO de refuser toute
                  nouvelle commande.
                </p>
                <h3 className="legal__h3">7.4 Factures</h3>
                <p className="legal__p">
                  Les factures sont adressées par email au format PDF et conservées conformément à la législation en
                  vigueur.
                </p>
              </div>
              {/* ,Section 8, */}
              <div className="legal__section" id="section-8">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    8
                  </span>
                  Droit de rétractation{' '}
                </h2>
                <h3 className="legal__h3">8.1 Prestations de services</h3>
                <p className="legal__p">
                  Conformément à l’article L. 221-28 du Code de la consommation, le droit de rétractation ne peut être
                  exercé pour les prestations pleinement exécutées avant la fin du délai de rétractation, dont
                  l’exécution a commencé avec l’accord exprès du consommateur.
                </p>
                <p className="legal__p">
                  En validant un devis et en versant un acompte, le client accepte expressément que l’exécution commence
                  immédiatement et renonce à son droit de rétractation.
                </p>
                <h3 className="legal__h3">8.2 Professionnels</h3>
                <p className="legal__p">
                  Le droit de rétractation prévu par le Code de la consommation ne s’applique pas aux clients
                  professionnels (B2B).
                </p>
              </div>
              {/* ,Section 9, */}
              <div className="legal__section" id="section-9">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    9
                  </span>
                  Annulation et modification{' '}
                </h2>
                <h3 className="legal__h3">9.1 Annulation par le client</h3>
                <ul className="legal__list">
                  <li>
                    <strong>Avant le début des travaux&nbsp;:</strong> remboursement de l’acompte versé, déduction faite
                    de 20 % pour frais administratifs
                  </li>
                  <li>
                    <strong>Après le début des travaux&nbsp;:</strong> facturation des travaux réalisés sur la base du
                    temps passé&nbsp;; conservation de l’acompte
                  </li>
                </ul>
                <h3 className="legal__h3">9.2 Annulation par KAMEO</h3>
                <p className="legal__p">
                  KAMEO peut annuler une commande en cas de force majeure, d’impossibilité technique, de comportement
                  abusif du client, ou de non-fourniture des éléments nécessaires dans un délai raisonnable. L’acompte
                  versé est alors intégralement remboursé.
                </p>
                <h3 className="legal__h3">9.3 Modifications en cours de projet</h3>
                <p className="legal__p">
                  Toute modification importante du cahier des charges initial fera l’objet d’un avenant au devis pouvant
                  entraîner un supplément de prix et/ou un report des délais. Les modifications mineures sont incluses
                  selon les conditions précisées au devis (généralement 2 à 3 rounds).
                </p>
              </div>
              {/* ,Section 10, */}
              <div className="legal__section" id="section-10">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    10
                  </span>
                  Obligations du client{' '}
                </h2>
                <h3 className="legal__h3">10.1 Fourniture des éléments</h3>
                <p className="legal__p">
                  Le client s’engage à fournir dans les délais convenus tous les contenus (textes, images, vidéos,
                  logos), les accès aux plateformes concernées, les informations relatives à l’identité visuelle et tout
                  autre élément nécessaire. Le client garantit être titulaire des droits nécessaires sur les éléments
                  fournis.
                </p>
                <h3 className="legal__h3">10.2 Validation des livrables</h3>
                <p className="legal__p">
                  Le client s’engage à examiner et valider les livrables dans les délais convenus. À défaut de retour
                  dans un délai de <strong>15 jours</strong>, les livrables sont réputés validés.
                </p>
                <h3 className="legal__h3">10.3 Collaboration</h3>
                <p className="legal__p">
                  Le client s’engage à collaborer de bonne foi avec KAMEO et à répondre aux sollicitations dans des
                  délais raisonnables pour permettre la bonne réalisation de la prestation.
                </p>
              </div>
              {/* ,Section 11, */}
              <div className="legal__section" id="section-11">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    11
                  </span>
                  Obligations de Kameo{' '}
                </h2>
                <p className="legal__p">KAMEO s’engage à&nbsp;:</p>
                <ul className="legal__list">
                  <li>Réaliser les prestations avec professionnalisme et dans le respect des règles de l’art</li>
                  <li>Respecter les délais convenus, sous réserve de la fourniture des éléments par le client</li>
                  <li>Informer le client de l’avancement du projet</li>
                  <li>Fournir un travail conforme au cahier des charges validé</li>
                  <li>Assurer un suivi et un support dans les limites prévues au devis</li>
                </ul>
                <p className="legal__p">
                  KAMEO est soumise à une <strong>obligation de moyens</strong> et non de résultat, sauf mention
                  contraire expresse dans le devis.
                </p>
              </div>
              {/* ,Section 12, */}
              <div className="legal__section" id="section-12">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    12
                  </span>
                  Propriété intellectuelle{' '}
                </h2>
                <h3 className="legal__h3">12.1 Propriété du Site</h3>
                <p className="legal__p">
                  Le Site et chacun des éléments qui le composent (structure, graphismes, textes, images, vidéos, logos,
                  etc.) sont la propriété exclusive de KAMEO ou de ses partenaires. Toute reproduction, représentation,
                  modification ou publication sans autorisation écrite préalable de KAMEO est interdite.
                </p>
                <h3 className="legal__h3">12.2 Droits sur les créations</h3>
                <p className="legal__p">
                  Le transfert de propriété intellectuelle sur les sites internet, développements et créations
                  graphiques (logos, chartes graphiques, visuels) s’effectue au paiement{' '}
                  <strong>intégral du solde final</strong>, sauf clause contraire au contrat. Avant ce paiement, KAMEO
                  reste propriétaire des créations et peut en empêcher l’utilisation.
                </p>
                <p className="legal__p">
                  KAMEO conserve le droit d’utiliser les créations réalisées dans son portfolio, sur son site et dans sa
                  communication commerciale, sauf demande contraire écrite du client.
                </p>
                <h3 className="legal__h3">12.3 Éléments tiers</h3>
                <p className="legal__p">
                  Certains éléments utilisés dans les créations (polices, photos, icônes, plugins) peuvent être soumis à
                  des licences tierces. Le client s’engage à respecter ces licences.
                </p>
                <h3 className="legal__h3">12.4 Contenus fournis par le client</h3>
                <p className="legal__p">
                  Le client garantit disposer de tous les droits nécessaires sur les contenus fournis à KAMEO et
                  garantit KAMEO contre toute réclamation à ce titre.
                </p>
              </div>
              {/* ,Section 13, */}
              <div className="legal__section" id="section-13">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    13
                  </span>
                  Garanties et responsabilité{' '}
                </h2>
                <h3 className="legal__h3">13.1 Garantie de conformité</h3>
                <p className="legal__p">
                  KAMEO garantit que les prestations fournies sont conformes au cahier des charges validé. En cas de
                  non-conformité, le client doit en informer KAMEO par écrit dans un délai de <strong>15 jours</strong>{' '}
                  suivant la livraison. KAMEO s’engage alors à corriger les anomalies dans un délai raisonnable.
                </p>
                <h3 className="legal__h3">13.2 Garantie technique (sites web)</h3>
                <p className="legal__p">
                  KAMEO assure une garantie de bon fonctionnement technique pendant <strong>30 jours</strong> après la
                  livraison (correction de bugs). Cette garantie ne couvre pas&nbsp;:
                </p>
                <ul className="legal__list">
                  <li>Les problèmes liés à l’hébergement choisi par le client</li>
                  <li>Les modifications apportées par le client ou un tiers après la livraison</li>
                  <li>Les incompatibilités avec des plugins ou extensions ajoutés après livraison</li>
                  <li>L’évolution des navigateurs et technologies web</li>
                </ul>
                <h3 className="legal__h3">13.3 Maintenance et support</h3>
                <p className="legal__p">
                  Sauf mention contraire au contrat, KAMEO ne fournit pas de service de maintenance continue après la
                  livraison. Des contrats de maintenance peuvent être souscrits séparément et font l’objet d’un devis
                  spécifique.
                </p>
                <h3 className="legal__h3">13.4 Limitation de responsabilité</h3>
                <p className="legal__p">
                  KAMEO ne saurait être tenue responsable des dommages indirects (perte de chiffre d’affaires, de
                  clientèle, préjudice commercial), des problèmes liés aux contenus fournis par le client, des décisions
                  des plateformes tierces (Google, Meta, etc.), ni de la non-atteinte d’objectifs de performance sauf
                  engagement exprès de résultat.
                </p>
                <p className="legal__p">
                  En tout état de cause, la responsabilité de KAMEO est limitée au{' '}
                  <strong>montant total des sommes effectivement perçues</strong> pour la prestation concernée.
                </p>
                <h3 className="legal__h3">13.5 Force majeure</h3>
                <p className="legal__p">
                  KAMEO ne pourra être tenue responsable en cas de force majeure&nbsp;: catastrophes naturelles,
                  incendie, inondation, grèves, pannes de réseau électrique ou de télécommunications, actes de guerre,
                  émeutes, décisions gouvernementales, pandémies.
                </p>
              </div>
              {/* ,Section 14, */}
              <div className="legal__section" id="section-14">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    14
                  </span>
                  Données personnelles{' '}
                </h2>
                <p className="legal__p">
                  La collecte et le traitement des données personnelles sont régis par notre{' '}
                  <Link href="/politique-de-confidentialite/">Politique de Confidentialité</Link>.
                </p>
                <p className="legal__p">
                  En utilisant le Site, l’Utilisateur consent à la collecte et au traitement de ses données personnelles
                  conformément à cette politique. L’Utilisateur dispose d’un droit d’accès, de rectification, de
                  suppression et d’opposition, qu’il peut exercer en contactant KAMEO à{' '}
                  <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>.
                </p>
              </div>
              {/* ,Section 15, */}
              <div className="legal__section" id="section-15">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    15
                  </span>
                  Cookies{' '}
                </h2>
                <p className="legal__p">
                  Le Site utilise des cookies conformément à notre Politique de Confidentialité. En poursuivant votre
                  navigation, vous acceptez leur utilisation dans les conditions décrites. Vous pouvez à tout moment
                  gérer vos préférences via le bandeau de gestion présent sur le Site.
                </p>
              </div>
              {/* ,Section 16, */}
              <div className="legal__section" id="section-16">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    16
                  </span>
                  Liens hypertextes{' '}
                </h2>
                <p className="legal__p">
                  Le Site peut contenir des liens vers d’autres sites internet. KAMEO n’exerce aucun contrôle sur ces
                  sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur politique de
                  confidentialité. L’existence de ces liens ne constitue pas une validation des sites concernés.
                </p>
                <p className="legal__p">
                  La création de liens hypertextes vers le Site est libre. KAMEO se réserve toutefois le droit de
                  demander la suppression d’un lien si le site source ne respecte pas les lois en vigueur.
                </p>
              </div>
              {/* ,Section 17, */}
              <div className="legal__section" id="section-17">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    17
                  </span>
                  Réclamations et litiges{' '}
                </h2>
                <h3 className="legal__h3">17.1 Réclamations</h3>
                <p className="legal__p">
                  Toute réclamation doit être adressée par écrit à KAMEO. KAMEO s’engage à répondre dans un délai de{' '}
                  <strong>15 jours ouvrés</strong>.
                </p>
                <div className="legal__card">
                  <p className="legal__p">
                    Email&nbsp;: <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>
                    <br />
                    Courrier&nbsp;: Kameo, 9 rue des colonnes, 75002 Paris, France{' '}
                  </p>
                </div>
                <h3 className="legal__h3">17.2 Droit applicable et juridiction</h3>
                <p className="legal__p">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut de
                  règlement amiable, le différend sera porté devant les tribunaux compétents&nbsp;:
                </p>
                <ul className="legal__list">
                  <li>
                    <strong>Clients professionnels&nbsp;:</strong> Tribunal de Commerce de Nanterre, compétence
                    exclusive, même en cas de pluralité de défendeurs ou d’appel en garantie
                  </li>
                  <li>
                    <strong>Clients consommateurs&nbsp;:</strong> tribunal du lieu de domicile du consommateur ou du
                    lieu du fait dommageable
                  </li>
                </ul>
              </div>
              {/* ,Sections courtes 18-23, */}
              <div className="legal__section" id="section-18">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    18
                  </span>
                  Divisibilité
                </h2>
                <p className="legal__p">
                  Si une ou plusieurs stipulations des présentes mentions légales sont tenues pour non valides ou
                  déclarées telles par une juridiction compétente, les autres stipulations conserveront toute leur force
                  et leur portée.
                </p>
              </div>
              <div className="legal__section" id="section-19">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    19
                  </span>
                  Langue
                </h2>
                <p className="legal__p">
                  Les présentes mentions légales sont rédigées en langue française. En cas de traduction dans une ou
                  plusieurs langues étrangères, seul le texte français fera foi en cas de litige.
                </p>
              </div>
              <div className="legal__section" id="section-20">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    20
                  </span>
                  Non-renonciation
                </h2>
                <p className="legal__p">
                  Le fait pour KAMEO de ne pas se prévaloir à un moment donné d’une clause des présentes ne peut être
                  interprété comme valant renonciation à s’en prévaloir ultérieurement de ladite clause.
                </p>
              </div>
              <div className="legal__section" id="section-21">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    21
                  </span>
                  Clause de confidentialité
                </h2>
                <p className="legal__p">
                  Chacune des parties s’engage à considérer comme confidentielles toutes les informations échangées dans
                  le cadre de la relation contractuelle. Cette obligation de confidentialité demeure pendant toute la
                  durée de la relation et pour une durée de <strong>5 ans</strong> après la fin de celle-ci.
                </p>
              </div>
              <div className="legal__section" id="section-22">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    22
                  </span>
                  Références clients
                </h2>
                <p className="legal__p">
                  Sauf opposition écrite du client, KAMEO se réserve le droit de mentionner le nom et le logo du client
                  comme référence commerciale sur son site internet, dans ses plaquettes commerciales et sur ses réseaux
                  sociaux. Pour s’opposer à cette utilisation&nbsp;:{' '}
                  <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>.
                </p>
              </div>
              <div className="legal__section" id="section-23">
                <h2 className="legal__h2">
                  <span className="legal__h2-num" aria-hidden="true">
                    23
                  </span>
                  Contact
                </h2>
                <p className="legal__p">Pour toute question relative aux présentes mentions légales&nbsp;:</p>
                <div className="legal__card">
                  <p className="legal__p">
                    <strong>KAMEO</strong>
                    <br />9 rue des colonnes, 75002 Paris, France <br />
                    Email&nbsp;: <a href="mailto:contact@agence-kameo.fr">contact@agence-kameo.fr</a>
                    <br />
                    Téléphone&nbsp;: <a href="tel:+33662379985">06 62 37 99 85</a>
                    <br />
                    Lundi – Vendredi&nbsp;: 9h00 – 18h00 (hors jours fériés){' '}
                  </p>
                </div>
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
