'use client';

import { useRef, useState } from 'react';
import Icon from './Icon';

/* Formulaire de contact (page-contact.php + section « Formulaire de contact » de js/main.js).
   L'envoi passe par la route /api/contact (remplace l'endpoint REST kameo/v1/contact). */

const DEFAULT_ERROR = 'Une erreur s’est produite. Veuillez réessayer.';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSuccess(false);
    setError(null);

    // Honeypot : rempli par un robot, on simule un succès silencieux
    const hp = form.elements.namedItem('website') as HTMLInputElement | null;
    if (hp && hp.value.trim() !== '') {
      setSuccess(true);
      return;
    }

    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => (data[k] = String(v)));
    setSending(true);
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        form.reset();
        setSuccess(true);
        requestAnimationFrame(() => successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
      } else {
        setError(json && json.message ? json.message : DEFAULT_ERROR);
      }
    } catch {
      setError('Erreur réseau. Vérifie ta connexion et réessaye.');
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="cform" id="contactForm" noValidate ref={formRef} onSubmit={onSubmit}>
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
        aria-hidden="true"
      />
      {/* Nom / Prénom */}
      <div className="cform__field">
        <label htmlFor="cform-nom" className="cform__label-sr">
          Nom / Prénom
        </label>
        <span className="cform__field-icon">
          <Icon name="user" />
        </span>
        <input id="cform-nom" className="cform__input" type="text" name="nom_prenom" placeholder="Nom / Prénom" autoComplete="name" required />
      </div>
      {/* Adresse mail */}
      <div className="cform__field">
        <label htmlFor="cform-email" className="cform__label-sr">
          Adresse mail
        </label>
        <span className="cform__field-icon">
          <Icon name="at" />
        </span>
        <input id="cform-email" className="cform__input" type="email" name="email" placeholder="Adresse mail" autoComplete="email" required />
      </div>
      {/* Entreprise / Téléphone */}
      <div className="cform__row">
        <div className="cform__field">
          <label htmlFor="cform-entreprise" className="cform__label-sr">
            Entreprise
          </label>
          <span className="cform__field-icon">
            <Icon name="building" />
          </span>
          <input id="cform-entreprise" className="cform__input" type="text" name="entreprise" placeholder="Entreprise" autoComplete="organization" />
        </div>
        <div className="cform__field">
          <label htmlFor="cform-tel" className="cform__label-sr">
            Téléphone
          </label>
          <span className="cform__field-icon">
            <Icon name="phone" />
          </span>
          <input id="cform-tel" className="cform__input" type="tel" name="telephone" placeholder="Téléphone" autoComplete="tel" />
        </div>
      </div>
      {/* Message */}
      <div className="cform__field cform__field--ta">
        <label htmlFor="cform-message" className="cform__label-sr">
          Votre message
        </label>
        <span className="cform__field-icon">
          <Icon name="regular comment-dots" />
        </span>
        <textarea id="cform-message" className="cform__input cform__textarea" name="message" placeholder="Comment peut-on vous aider ?" rows={5} required />
      </div>
      {/* Messages succès / erreur */}
      <div id="formSuccess" ref={successRef} style={{ display: success ? 'block' : 'none' }} className="cform__success">
        Message envoyé&nbsp;! Nous vous répondrons sous 24h.
      </div>
      <div id="formError" style={{ display: error ? 'block' : 'none' }} className="cform__error">
        {error || DEFAULT_ERROR}
      </div>
      {/* Bouton envoyer */}
      <button type="submit" className="cform__submit" disabled={sending} style={sending ? { opacity: 0.75 } : undefined}>
        {sending ? (
          'Envoi en cours…'
        ) : (
          <>
            Envoyer le formulaire <Icon name="paper-plane" />
          </>
        )}
      </button>
    </form>
  );
}
