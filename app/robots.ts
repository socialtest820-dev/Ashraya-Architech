import { MetadataRoute } from "next";

const BASE_URL = "https://ashraya-architects.com"; // Replace with actual domain when deployed

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
