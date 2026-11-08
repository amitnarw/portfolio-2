import type { MetadataRoute } from "next";

const siteDescription =
  "Hire Amit Narwal, a premium Freelance Full Stack & AI Developer specializing in high-performance web applications using React, Next.js, Node.js, and Machine Learning. Delivering scalable AI solutions, API architecture, and digital excellence.";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amit Narwal | Freelance Full Stack & AI Developer",
    short_name: "Amit Narwal",
    description: siteDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#0A0A0A",
    theme_color: "#FFD976",
    lang: "en-US",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
