import type { NextConfig } from "next";

const repo = "resume-generator";
const isGhActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGhActions ? `/${repo}` : "",
  assetPrefix: isGhActions ? `/${repo}/` : "",
  trailingSlash: true,
};

export default nextConfig;
