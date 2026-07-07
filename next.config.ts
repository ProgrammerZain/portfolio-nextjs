import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Enable once you've verified your components don't rely on
  // side effects the compiler could optimize away — see Next.js 16 upgrade docs
  reactCompiler: false,
};

export default nextConfig;
