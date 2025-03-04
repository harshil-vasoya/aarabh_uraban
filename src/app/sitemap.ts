import type { MetadataRoute } from "next"
import { siteConfig } from "./seo-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Define all routes
  const routes = ["", "/about", "/services", "/portfolio", "/team", "/contact"]

  // Create sitemap entries
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}

