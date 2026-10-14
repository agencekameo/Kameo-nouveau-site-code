'use client';

import { useEffect, useState } from 'react';
import { onConsentOpen, readConsent, saveConsent } from '@/lib/consent';

/*
 * Bandeau de consentement aux cookies, présent sur toutes les pages. Affiché tant qu'aucun
 * choix n'a été fait (ou après 6 mois), rouvert par le lien « Gestion des cookies ».
 * « Tout refuser » et « Tout accepter » ont le même poids visuel, comme l'exige la CNIL.
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [audience, setAudience] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (!c) setOpen(true);
    return onConsentOpen(() => {
      const cur = readConsent();
      setAudience(!!cur?.audience);
      setMarketing(!!cur?.marketing);
      setDetails(true);
      setOpen(true);
    });
  }, []);

  if (!open) return null;
  const choose = (a: boolean, m: boolean) => {
    setOpen(false);
    saveConsent({ audience: a, marketing: m });
  };

  return (
    <div className="ckb" role="dialog" aria-modal="false" aria-labelledby="ckb-title" aria-describedby="ckb-text">
      <p className="ckb__title" id="ckb-title">
        Vos choix en matière de cookies
      </p>
      <p className="ckb__text" id="ckb-text">
        Avec votre accord, nous utilisons des cookies pour mesurer l’audience du site et l’efficacité de nos publicités.
        Le site fonctionne sans eux. Vous pouvez changer d’avis à tout moment via « Gestion des cookies » en bas de page.{' '}
        <a href="/politique-de-confidentialite/#section-9">En savoir plus</a>
      </p>
      {details && (
        <div className="ckb__details">
          <label className="ckb__opt">
            <span>
              <strong>Mesure d’audience</strong>
              <span>Pages vues, clics et parcours sur le site (taap.it).</span>
            </span>
            <input type="checkbox" role="switch" checked={audience} onChange={(e) => setAudience(e.target.checked)} />
          </label>
          <label className="ckb__opt">
            <span>
              <strong>Publicité</strong>
              <span>Mesure de l’efficacité de nos campagnes Meta (Facebook, Instagram).</span>
            </span>
            <input type="checkbox" role="switch" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
          </label>
        </div>
      )}
      <div className="ckb__actions">
        <button type="button" className="ckb__btn" onClick={() => choose(false, false)}>
          Tout refuser
        </button>
        {details ? (
          <button type="button" className="ckb__btn" onClick={() => choose(audience, marketing)}>
            Enregistrer
          </button>
        ) : (
          <button type="button" className="ckb__link" onClick={() => setDetails(true)}>
            Personnaliser
          </button>
        )}
        <button type="button" className="ckb__btn" onClick={() => choose(true, true)}>
          Tout accepter
        </button>
      </div>
    </div>
  );
}
