/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder',
        port: '',
        pathname: '',
      },
    ],
    domains: ['via.placeholder.com'],
  },
};

module.exports = nextConfig;
