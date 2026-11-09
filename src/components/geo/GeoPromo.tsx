import Link from 'next/link';
import { GEO_AUDITS, euros } from '@/content/geo';

/*
 * Encart « Votre site est-il lisible par les IA ? » sur les pages web (WordPress, refonte,
 * e-commerce, sur-mesure), vers l'agence GEO, l'audit et le guide ChatGPT (étape 1 du plan GEO,
 * 09/11/2026). Il ne décrit que ce que l'audit GEO fait réellement. Styles : main.css (.geo-promo).
 */
type Variant = 'wordpress' | 'refonte' | 'ecommerce' | 'sur-mesure';

const INTRO: Record<Variant, string> = {
  wordpress:
    'Un site WordPress bien construit se lit facilement, par vos visiteurs comme par les robots des IA. Encore faut-il que ces robots y aient accès et que vos pages répondent clairement aux questions de vos clients.',
  refonte:
    'Une refonte est le meilleur moment pour rendre votre site lisible par les IA : pages qui répondent clairement, informations cohérentes, accès des robots de ChatGPT, Gemini ou Perplexity.',
  ecommerce:
    'Vos clients demandent aussi aux IA quelle boutique choisir. Pour être cité, votre catalogue doit être lisible par leurs robots et votre marque présente sur les sites qu’elles consultent.',
  'sur-mesure':
    'Une application ou un site qui s’affiche en JavaScript peut rester invisible pour les robots des IA, dont la plupart n’exécutent pas le JavaScript. Mieux vaut le vérifier avant que vos concurrents ne prennent la place.',
};

export default function GeoPromo({ variant }: { variant: Variant }) {
  return (
    <section className="geo-promo" aria-labelledby="geo-promo-title">
      <div className="container">
        <div className="geo-promo__box">
          <div className="geo-promo__body">
            <p className="geo-promo__label">GEO · visibilité dans les IA</p>
            <h2 className="geo-promo__title" id="geo-promo-title">
              Votre site est-il lisible par les IA&nbsp;?
            </h2>
            <p className="geo-promo__text">
              {INTRO[variant]} Notre <Link href="/agence-geo/">agence GEO</Link> mesure ce que ChatGPT, Gemini,
              Perplexity et Claude disent de vous, et corrige ce qui les empêche de vous citer.
            </p>
          </div>
          <div className="geo-promo__actions">
            <Link href="/audit-geo/" className="geo-promo__btn">
              Audit GEO dès {euros(GEO_AUDITS[0].price)} HT
            </Link>
            <Link href="/blog/referencement-chatgpt/" className="geo-promo__link">
              Lire le guide : référencement ChatGPT →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
