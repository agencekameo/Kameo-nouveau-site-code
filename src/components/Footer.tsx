import Link from 'next/link';
import CookieSettingsLink from './consent/CookieSettingsLink';
import Icon from './Icon';
import { CLIENT_LOGOS, logoSrc } from '@/lib/clients';
import { CONTACT, SOCIAL } from '@/lib/site';

/* CTA + watermark + colonnes + légal (footer.php). */

function CtaLogos({ clone }: { clone?: boolean }) {
  // Le marquee boucle sur deux copies de la liste ; la copie est masquée aux lecteurs d'écran.
  return (
    <>
      {CLIENT_LOGOS.map((l) => (
        <div className="cta__logo" key={l.name + (clone ? '-c' : '')} aria-hidden={clone ? 'true' : undefined}>
          <img loading="lazy" width={l.w} height="180" src={logoSrc(l.name)} alt={l.name} />
        </div>
      ))}
    </>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cta__content">
          <span className="cta__eyebrow">
            <span className="cta__bracket cta__bracket--tr" aria-hidden="true" />
            Réserver un appel <span className="cta__bracket cta__bracket--bl" aria-hidden="true" />
          </span>
          <h2 className="cta__title">
            Discutons de votre croissance <br />
            autour d’un café virtuel
          </h2>
          <p className="cta__text">
            Planifiez un appel découverte gratuit pour discuter stratégie, objectifs et opportunités de croissance.
          </p>
          <div className="cta__logos-viewport" aria-hidden="true">
            <div className="cta__logos-track" id="ctaLogosTrack">
              <CtaLogos />
              <CtaLogos clone />
            </div>
          </div>
          <a href={CONTACT.calendly} target="_blank" rel="noopener" className="cta__btn">
            <span>Prendre un rendez-vous</span>
            <span className="cta__btn-arrow" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12 L12 4 M6 4 H12 V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <span className="cta__badge">
            <span className="cta__dot" />
            Uniquement 2 places disponibles{' '}
          </span>
        </div>
      </div>
      <div className="footer__watermark" aria-hidden="true">
        Kameo
      </div>
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link href="/" className="footer__logo" aria-label="Kameo, Accueil">
            <img
              loading="lazy"
              width="400"
              height="126"
              src="/images/hero.webp"
              srcSet="/images/hero-mobile.webp 200w, /images/hero.webp 400w"
              sizes="(max-width: 768px) 200px, 400px"
              alt="Kameo"
              className="footer__logo-img"
            />
          </Link>
          <p className="footer__tagline">
            Design web stratégique et campagnes conçues pour générer des résultats et des conversions.
          </p>
        </div>
        <div className="footer__col">
          <p className="footer__col-title">Menu</p>
          <ul>
            <li>
              <Link href="/notre-agence/">Notre agence</Link>
            </li>
            <li>
              <Link href="/benjamin-dayan/">Benjamin Dayan, fondateur</Link>
            </li>
            <li>
              <Link href="/agence-wordpress-paris/">Expertises</Link>
            </li>
            <li>
              <Link href="/realisations/">Réalisations</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
            <li>
              <Link href="/blog/">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <p className="footer__col-title">Expertises</p>
          <ul>
            <li>
              <Link href="/agence-wordpress-paris/">Agence WordPress</Link>
            </li>
            <li>
              <Link href="/developpement-sur-mesure/">Développement sur-mesure</Link>
            </li>
            <li>
              <Link href="/expertises-motion/">Motion design</Link>
            </li>
            <li>
              <Link href="/expertises-branding/">Branding</Link>
            </li>
          </ul>
        </div>
        <div className="footer__col footer__col--nap">
          <p className="footer__col-title">Nous contacter</p>
          <address className="footer__nap">
            <p>
              Kameo Agence Web
              <br />9 rue des Colonnes
              <br />
              75002 Paris
            </p>
            <p>
              <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneDisplayIntl}</a>
              <br />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
          </address>
          <div className="footer__socials" aria-label="Réseaux sociaux">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram Kameo">
              <Icon name="brands instagram" />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn Kameo">
              <Icon name="brands linkedin-in" />
            </a>
            <a href={SOCIAL.trustpilot} target="_blank" rel="noopener" aria-label="Trustpilot Kameo">
              <Icon name="star" />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer__legal">
        <p>© {new Date().getFullYear()} Agence Kameo. Tous droits réservés.</p>
        <div className="footer__legal-links">
          <Link href="/mentions-legales/">Mentions légales</Link>
          <Link href="/politique-de-confidentialite/">Politique de confidentialité</Link>
          <CookieSettingsLink />
        </div>
      </div>
    </footer>
  );
}
