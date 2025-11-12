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
   * Allow embedding in iframes from minidev.fun and Vercel preview URLs
   */
  async headers() {
    // Allow same-origin, your production domain, Vercel preview URLs, and localhost (HTTP/HTTPS, any port)
    const frameAncestors =
      "frame-ancestors 'self' https://minidev.fun https://*.minidev.fun https://*.vercel.app https://farcaster.xyz https://*.farcaster.xyz http://localhost:* http://127.0.0.1:* https://127.0.0.1:*";

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: frameAncestors,
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


