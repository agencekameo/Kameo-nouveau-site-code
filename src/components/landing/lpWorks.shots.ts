/* Généré par scripts/capture-realisations.mjs le 2026-11-01 : ne pas modifier à la main. */
/** Largeur des images et hauteur de chaque tranche, en pixels (public/images/landing_page/realisations/). */
export type Shot = { w: number; tiles: number[] };

export const SHOTS: Record<string, { desktop: Shot; mobile: Shot }> = {
  'dronespec': {
    desktop: { w: 1920, tiles: [1867, 1867, 1867, 1867, 1410] },
    mobile: { w: 780, tiles: [2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 158] },
  },
  'sunshine-resort': {
    desktop: { w: 1920, tiles: [1867, 1867, 1867, 1867, 1867, 930] },
    mobile: { w: 780, tiles: [2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2180] },
  },
  'paris-sg-news': {
    desktop: { w: 1920, tiles: [1867, 1867, 1867, 416] },
    mobile: { w: 780, tiles: [2200, 2200, 2200, 2200, 376] },
  },
};
