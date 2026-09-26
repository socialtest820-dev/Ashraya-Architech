import { MetadataRoute } from "next";
import { projects } from "../data/projects";
import { insights } from "../data/firm";

const BASE_URL = "https://ashraya-architects.com"; // Replace with actual domain when deployed

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/overview",
    "/projects",
    "/expertise",
    "/studio",
    "/gallery",
    "/insights",
    "/careers",
    "/contact"
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const insightRoutes = insights.map((insight) => ({
    url: `${BASE_URL}/insights/${insight.slug}`,
    lastModified: new Date(`${insight.date}-01`),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}
