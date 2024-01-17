/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

// const nextConfig = {
//   basePath: `/LIARGAME`,
// }

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "akamai",
    path: isProduction ? "https://66tuna.github.io" : "http://localhost:3000",
  },
  basePath: isProduction ? "/LIARGAME" : "",
  assetPrefix: isProduction ? "/LIARGAME/" : "",
  output: "export", // 이 부분 추가
};

module.exports = isProduction
  ? {
      ...nextConfig,
    }
  : nextConfig;