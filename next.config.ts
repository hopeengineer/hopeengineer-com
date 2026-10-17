
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Work With Me is now the contact form at the bottom of the home page
  async redirects() {
    return [{ source: '/work-with-me', destination: '/#contact', permanent: true }];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.skool.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.threadify.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'threadify.app',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
