import { pageSitemap, xmlResponse } from '@/lib/sitemap';

export const dynamic = 'force-static';
// régénéré chaque heure : la date des pages GEO passe seule au 01/12/2026 (pageInfo, grille GEO)
export const revalidate = 3600;
export const GET = () => xmlResponse(pageSitemap());
