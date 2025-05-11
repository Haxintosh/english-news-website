import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "development";
// console.log("isProd", isProd);
const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/english-news-website",
  assetPrefix: "/english-news-website", // GitHub Pages does not support Next.js image optimization
};

module.exports = {
  basePath: "/english-news-website",
  assetPrefix: "/english-news-website",
};

export default nextConfig;
