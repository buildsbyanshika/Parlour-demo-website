import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // keep strict
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
