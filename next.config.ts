import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
// console.log("isProd", isProd);
const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/english-news-website" : "",
  assetPrefix: isProd ? "/english-news-website" : "", // GitHub Pages does not support Next.js image optimization
};

module.exports = {
  basePath: isProd ? "/english-news-website" : "",
  assetPrefix: isProd ? "/english-news-website" : "",
};

export default nextConfig;
