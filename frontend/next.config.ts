import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/resume-generator/" : "./",
};

export default nextConfig;
