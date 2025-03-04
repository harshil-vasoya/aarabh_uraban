import type { MetadataRoute } from "next"
import { siteConfig } from "./seo-config"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}

