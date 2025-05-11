import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/english-news-website" : "",
  assetPrefix: isProd ? "/english-news-website" : "",
  images: { unoptimized: true }, // GitHub Pages does not support Next.js image optimization
};

export default nextConfig;
