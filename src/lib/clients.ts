/** Logos clients (images/logo clients/*.webp) avec leurs dimensions réelles, pour éviter le CLS. */
export const CLIENT_LOGOS: { name: string; w: number }[] = [
  { name: 'Dronespec', w: 230 },
  { name: 'Medical Market', w: 617 },
  { name: 'Claimz', w: 499 },
  { name: 'Be Cherry', w: 342 },
  { name: 'Ohvale', w: 261 },
  { name: 'Qunfil', w: 350 },
  { name: 'Valeos', w: 180 },
  { name: 'Axistone Capital', w: 379 },
  { name: 'Villa de luxe Bonifacio', w: 464 },
  { name: 'Compagnie des Autocars Lyonnais', w: 494 },
  { name: 'Defikart', w: 180 },
];
export const logoSrc = (name: string) => `/images/logo%20clients/${encodeURIComponent(name)}.webp`;
