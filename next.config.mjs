/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
          port: '',
          pathname: '/ibrsec/**',
        },
      ],
    },
  }

export default nextConfig;
