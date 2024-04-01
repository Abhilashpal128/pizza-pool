/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "pizza-pool.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
