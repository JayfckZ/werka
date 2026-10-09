import type { MetadataRoute } from "next"

const siteUrl = "https://fluxy.dev.br"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  }
}