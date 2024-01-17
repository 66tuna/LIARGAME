/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['i.postimg.cc'],
    unoptimized: true,
    loader: "akamai",
    path: isProduction ? "https://66tuna.github.io" : "http://localhost:3000",
  },
  basePath: isProduction ? "/LIARGAME" : "",
  assetPrefix: isProduction ? "/LIARGAME/" : "",
  distDir: 'dist'
};

module.exports = isProduction
  ? {
    ...nextConfig,
  }
  : nextConfig;