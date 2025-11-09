/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // REQUIRED for static build
  trailingSlash: true,
  images: {
    unoptimized: true,        // Required for static export
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
