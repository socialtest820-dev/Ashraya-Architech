import { MetadataRoute } from "next";

const BASE_URL = "https://example.com"; // Replace with actual client domain when deployed

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/"
    },
    sitemap: `${BASE_URL}/sitemap.xml`
  };
}
