/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "asset.cloudinary.com",
      },
    ],
  },
};
const config = {
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
