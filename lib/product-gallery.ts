import type { GalleryTheme } from "@/lib/product-database";
import { siteConfig } from "@/lib/site";

export const productGalleryItems = [
  {
    title: "Main Image",
    description: "Hero product view for quotation and catalog reference.",
    src: "/images/product-gallery/main-image.svg"
  },
  {
    title: "Feature Image",
    description: "Highlights tested quality, model fit, and buyer-facing features.",
    src: "/images/product-gallery/feature-image.svg"
  },
  {
    title: "Structure Image",
    description: "Shows component structure, connector position, and repair detail.",
    src: "/images/product-gallery/structure-image.svg"
  },
  {
    title: "QC Image",
    description: "Represents display, touch, capacity, and final inspection workflow.",
    src: "/images/product-gallery/qc-image.svg"
  },
  {
    title: "Packaging Image",
    description: "Export-ready packing for wholesale and distributor shipments.",
    src: "/images/product-gallery/packaging-image.svg"
  },
  {
    title: "Application Image",
    description: "Repair-shop, wholesale, and distributor application scenarios.",
    src: "/images/product-gallery/application-image.svg"
  }
];

export function galleryThemeLabel(theme: GalleryTheme) {
  if (theme.includes("battery")) return "Battery";
  if (theme.includes("ipad")) return "iPad repair parts";
  if (theme.includes("macbook")) return "MacBook repair parts";
  if (theme.includes("samsung")) return "Samsung compatible screen";
  return "iPhone compatible screen";
}

export function getProductGalleryImageUrls() {
  return productGalleryItems.map((item) => new URL(item.src, siteConfig.url).toString());
}
