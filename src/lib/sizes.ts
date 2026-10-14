/** Attribut sizes des images d'articles, d'après les largeurs d'affichage mesurées :
    cartes 365 px, contenu 700 px, image à la une 1144 px (sans dépendance serveur). */
export const SIZES = {
  card: '(max-width: 760px) calc(100vw - 40px), 365px',
  content: '(max-width: 760px) calc(100vw - 40px), 700px',
  featured: '(max-width: 1200px) calc(100vw - 40px), 1144px',
};
