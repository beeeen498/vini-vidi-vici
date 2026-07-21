import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // serve AVIF first, then WebP
    formats: ["image/avif", "image/webp"],

    // match common screen widths
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    // for smaller images like thumbnails
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;