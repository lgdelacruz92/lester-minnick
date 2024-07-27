import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com/**",
      },
      {
        hostname: "assets.aceternity.com/**",
      },
    ],
  },
};

export default nextConfig;
