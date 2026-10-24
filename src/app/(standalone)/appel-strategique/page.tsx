import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import LandingPage, { LP_DESCRIPTION, LP_TITLE } from './LandingPage';

const PATH = '/appel-strategique/';
export const metadata: Metadata = pageMetadata({ path: PATH, title: LP_TITLE, description: LP_DESCRIPTION, noindex: true });

export default function Page() {
  return <LandingPage path={PATH} />;
}
