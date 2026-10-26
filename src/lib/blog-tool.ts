/**
 * Réglages de l'outil de rédaction « Blog » : il rédige, programme et publie les articles, le site les affiche.
 * Rien de secret ici : la clé ne lit que les articles déjà publiés, et la clé publique sert seulement
 * à vérifier que les demandes de mise à jour viennent bien de l'outil.
 */
export const BLOG_TOOL = {
  apiUrl: 'https://outilblog.nexus-games.fr/api/public/v1',
  apiKey: 'kb_OrlXDJPdUZNqpwjTI9ZhdyQTuZ1x1yp8',
  publicKey: 'MCowBQYDK2VwAyEA6zOYJtOIqg83fpZMDD0aDZm0dMWXXGqaJCbB+F6Kv9w=',
  locales: [
    { code: 'fr-FR', path: '/blog', isDefault: true },
  ],
} as const;
