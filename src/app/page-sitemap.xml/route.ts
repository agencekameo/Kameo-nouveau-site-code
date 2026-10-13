import { pageSitemap, xmlResponse } from '@/lib/sitemap';

export const dynamic = 'force-static';
export const GET = () => xmlResponse(pageSitemap());
