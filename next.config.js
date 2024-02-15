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
        hostname: "la-baraka/",
        port: "3000/",
        pathname: "/public/**",
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
