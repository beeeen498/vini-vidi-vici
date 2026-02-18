import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/vini-vidi-vici" : "",
  assetPrefix: isProd ? "/vini-vidi-vici/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
