import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ DO NOT block build on ESLint
  },
  images: {
    // domains: ["localhost"], // Not needed for local images
  },
};

export default nextConfig;
