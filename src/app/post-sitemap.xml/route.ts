import { postSitemap, xmlResponse } from '@/lib/sitemap';

export const dynamic = 'force-static';
export const GET = () => xmlResponse(postSitemap());
