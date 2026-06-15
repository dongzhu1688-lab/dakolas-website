import { getProductGalleryImageUrls } from "@/lib/product-gallery";
import { siteConfig } from "@/lib/site";

export function ProductJsonLd({
  name,
  description,
  url,
  category
}: {
  name: string;
  description: string;
  url: string;
  category: string;
}) {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: new URL(url, siteConfig.url).toString(),
    image: getProductGalleryImageUrls(),
    brand: {
      "@type": "Brand",
      name: siteConfig.name
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    category,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Warranty", value: "12 Months Warranty" },
      { "@type": "PropertyValue", name: "Testing", value: "100% Tested Before Shipment" },
      { "@type": "PropertyValue", name: "Buyer Type", value: "Repair shops, wholesalers, distributors" }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />;
}
