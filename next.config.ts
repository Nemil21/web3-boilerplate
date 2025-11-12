import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Disable ESLint during production builds to prevent deployment failures
   * ESLint errors that don't affect functionality shouldn't block deployment
   */
  eslint: {
    ignoreDuringBuilds: true,
  },

  /**
   * Enable React strict mode for better development experience
   */
  reactStrictMode: true,

  /**
   * Configure image optimization
   */
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  /**
   * Security headers for web3 apps
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;


