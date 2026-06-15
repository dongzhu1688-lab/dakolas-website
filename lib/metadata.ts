import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function createMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: "/images/hero-parts-1280.webp", width: 1280, height: 720 }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ["/images/hero-parts-1280.webp"]
    }
  };
}
