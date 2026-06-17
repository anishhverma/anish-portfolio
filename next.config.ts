import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/anish-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
