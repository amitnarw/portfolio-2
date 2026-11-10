import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/latest-ai-models-ranking-2026",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/nextjs-vulnerabilities-security-guide-2026",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/postgresql-replication-high-availability",
        destination: "/blog/postgresql-performance-optimization-2026",
        permanent: true,
      },
      {
        source: "/blog/agentic-ai-workflows-2025",
        destination: "/blog/how-to-build-mcp-server-browser-automation",
        permanent: true,
      },
      {
        source: "/blog/ui-ux-best-practices-2025",
        destination: "/blog/ai-coding-agents-better-frontends",
        permanent: true,
      },
      {
        source: "/blog/building-scalable-apis-nodejs",
        destination: "/blog/redis-bullmq-job-queues-guide",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
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
