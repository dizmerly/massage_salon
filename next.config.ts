import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages only serves files, so this branch pre-renders every route.
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/massage_salon' : '',
  images: {
    // GitHub Pages has no image-optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
