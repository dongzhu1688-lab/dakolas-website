import type { MetadataRoute } from "next";
import { getBlogPaths } from "@/lib/blog-database";
import { getProductPaths } from "@/lib/product-database";
import { getProductImagePaths } from "@/lib/product-image-pages";
import { getCountryPaths, getIphoneModelProductPaths, getProductLinePaths } from "@/lib/seo-expansion";
import { allStaticPaths, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = Array.from(
    new Set([
      ...allStaticPaths,
      ...getProductPaths(),
      ...getProductImagePaths(),
      ...getProductLinePaths(),
      ...getIphoneModelProductPaths(),
      ...getBlogPaths(),
      ...getCountryPaths()
    ])
  );

  return paths.map((path) => ({
    url: `${siteConfig.url}/${path ? `${path}/` : ""}`,
    lastModified: new Date("2026-06-15"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "products" ? 0.9 : 0.7
  }));
}
