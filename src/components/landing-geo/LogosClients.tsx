/*
 * Logos clients qui défilent, repris du bandeau « Ils nous font confiance » de l'accueil (src/app/(site)/page.tsx), pour le
 * bas du haut de page de la landing /visibilite-ia/ (demande de Benjamin du 28/11/2026). Styles .logos__* et .logo-item,
 * animation marquee : main.css, comme l'accueil (arrêt si le visiteur refuse les animations). La 2e série, identique,
 * rend le défilement continu ; elle est masquée aux lecteurs d'écran.
 */
const LOGOS = [
  { src: '/images/logo clients/Dronespec.webp', w: 230, alt: 'Dronespec' },
  { src: '/images/logo clients/Medical Market.webp', w: 617, alt: 'Medical Market' },
  { src: '/images/logo clients/Claimz.webp', w: 499, alt: 'Claimz' },
  { src: '/images/logo clients/Be Cherry.webp', w: 342, alt: 'Be Cherry' },
  { src: '/images/logo clients/Ohvale.webp', w: 261, alt: 'Ohvale' },
  { src: '/images/logo clients/Qunfil.webp', w: 350, alt: 'Qunfil' },
  { src: '/images/logo clients/Valeos.webp', w: 180, alt: 'Valeos' },
  { src: '/images/logo clients/Axistone Capital.webp', w: 379, alt: 'Axistone Capital' },
  { src: '/images/logo clients/Villa de luxe Bonifacio.webp', w: 464, alt: 'Villa de luxe Bonifacio' },
  { src: '/images/logo clients/Compagnie des Autocars Lyonnais.webp', w: 494, alt: 'Compagnie des Autocars Lyonnais' },
  { src: '/images/logo clients/Defikart.webp', w: 180, alt: 'Defikart' },
] as const;

export default function LogosClients() {
  return (
    <div className="vi-logos">
      <p className="logos__eyebrow">Ils nous font confiance</p>
      <div className="logos__viewport">
        <div className="logos__track">
          {LOGOS.map((l) => (
            <div className="logo-item" key={l.alt}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={l.w} height={180} src={l.src} alt={l.alt} loading="lazy" decoding="async" />
            </div>
          ))}
          {LOGOS.map((l) => (
            <div className="logo-item" key={`${l.alt}-2`} inert aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img width={l.w} height={180} src={l.src} alt="" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
