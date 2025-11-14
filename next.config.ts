import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
   * Allow embedding in iframes (required for preview)
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Allow embedding from any origin
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *",
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


