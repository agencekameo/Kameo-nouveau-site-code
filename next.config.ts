import type { NextConfig } from 'next';
import { redirects } from './src/lib/redirects';

const nextConfig: NextConfig = {
  // URLs WordPress conservées à l'identique : /notre-agence/, /blog/mon-article/…
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  async redirects() {
    return redirects();
  },
};

export default nextConfig;
