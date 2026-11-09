import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://amitnarwal.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/services-lab", "/services-lab-v2"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
