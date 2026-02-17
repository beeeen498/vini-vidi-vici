import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vini-vidi-vici",
  assetPrefix: "/vini-vidi-vici/",
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
