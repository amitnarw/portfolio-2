import { MetadataRoute } from "next";
import { blogArticles } from "@/lib/blog-data";
import { selectedWorkProjects } from "@/lib/selected-work-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://amitnarwal.com";

  const blogUrls = blogArticles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const workUrls = selectedWorkProjects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/work`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    ...workUrls,
    ...blogUrls,
  ];
}
