/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "akamai",
    path: isProduction ? "https://66tuna.github.io" : "http://localhost:3000",
  },
  assetPrefix: isProduction ? "/LIARGAME" : "",
};

module.exports = nextConfig;
