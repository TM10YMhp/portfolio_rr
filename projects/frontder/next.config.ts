import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  turbopack: {
    root: path.join(__dirname)
  }
};

console.log("turbopack.root:", nextConfig?.turbopack?.root)

export default nextConfig;
