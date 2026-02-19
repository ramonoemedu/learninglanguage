/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-*.r2.dev', // Allow images from Cloudflare R2
        port: '',
        pathname: '/lingualeap-media/**',
      },
    ],
  },
  // Enable standalone output for optimized Docker deployments if ever needed
  // This will also reduce the size of the deployed artifact
  output: 'standalone', 
  // Remove console.log in production builds for performance and security
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
