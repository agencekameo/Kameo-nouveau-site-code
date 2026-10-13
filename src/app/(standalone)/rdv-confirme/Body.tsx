/* Corps de la page, converti depuis le gabarit WordPress. */
import Link from 'next/link';

const Body = () => (
  <>
    <main className="confirm-wrap">
      <div className="confirm-logo">
        <img src="/images/hero.webp" alt="Kameo" width="400" height="126" />
        <span className="confirm-logo__text" style={{ display: 'none' }}>
          Kameo
        </span>
      </div>
      <div className="confirm-check" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 12.5l4.5 4.5L19 7.5"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="confirm-h1">Votre rendez-vous est confirmé !</h1>
      <p className="confirm-sub">Notre équipe vous contacte très prochainement. À très vite !</p>
      <p className="confirm-mail">Une confirmation vient de vous être envoyée par email.</p>
      <Link href="/landingpage/" className="confirm-back">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M10 4L6 8l4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Retour{' '}
      </Link>
    </main>
  </>
);
export default Body;
