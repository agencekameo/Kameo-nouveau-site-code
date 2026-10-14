import { postSitemap, xmlResponse } from '@/lib/sitemap';

// régénéré à chaque publication n8n (revalidatePath), 60 s au plus sinon
export const revalidate = 60;
export const GET = async () => xmlResponse(await postSitemap());
