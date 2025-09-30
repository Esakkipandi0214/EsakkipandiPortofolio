import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["www.aldaleela.ae", "developer.online.anz.com"],
  },
};

export default nextConfig;
