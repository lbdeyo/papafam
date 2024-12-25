/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com", "cdn.sanity.io"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
