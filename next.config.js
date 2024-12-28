/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
