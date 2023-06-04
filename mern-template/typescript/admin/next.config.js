/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
    ],
  },
  env: {
    PUBLIC_API_URL: "http://localhost:7070/api",
  },
};

module.exports = nextConfig;
