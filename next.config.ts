import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // URLs WordPress conservées à l'identique : /notre-agence/, /blog/mon-article/…
  trailingSlash: true,
  // Le « / » final et toutes les redirections sont gérés par src/proxy.ts, en un seul
  // saut 301 (Next ajouterait sinon un 308 avant chaque redirection).
  skipTrailingSlashRedirect: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
