import type { MetadataRoute } from "next";
import { allStaticPaths, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allStaticPaths.map((path) => ({
    url: `${siteConfig.url}/${path ? `${path}/` : ""}`,
    lastModified: new Date("2026-06-15"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "products" ? 0.9 : 0.7
  }));
}
