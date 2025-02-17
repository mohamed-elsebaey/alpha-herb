import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dyryptpqq/image/**",
      },
      {
        protocol: "https",
        hostname: "uploads-ssl.webflow.com",
        port: "",
        pathname: "/6385069873208e17602e89fb/**",
      },
      // hero
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
        port: "",
        pathname: "/isteam/stock/14366/:/rs=w:1920,m",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb",
    },
  },
};

export default nextConfig;
