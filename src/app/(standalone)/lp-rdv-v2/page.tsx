import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import LandingPage, { LP_DESCRIPTION, LP_TITLE } from '../landingpage/LandingPage';

/* Même landing page, servie aussi sous son ancienne adresse (campagnes Ads existantes). */
const PATH = '/lp-rdv-v2/';
export const metadata: Metadata = pageMetadata({ path: PATH, title: LP_TITLE, description: LP_DESCRIPTION, noindex: true });

export default function Page() {
  return <LandingPage path={PATH} />;
}
