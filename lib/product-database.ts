export type GalleryTheme =
  | "iphone-screen"
  | "iphone-battery"
  | "samsung-screen"
  | "samsung-battery"
  | "ipad-parts"
  | "macbook-parts";

export type ProductCategorySlug =
  | "iphone-screens"
  | "iphone-batteries"
  | "samsung-screens"
  | "samsung-batteries"
  | "ipad-parts"
  | "macbook-parts";

export type ProductDetail = {
  categorySlug: ProductCategorySlug;
  slug: string;
  title: string;
  shortTitle: string;
  series: string;
  productType: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  galleryTheme: GalleryTheme;
  productLines: string[];
  applications: string[];
  specifications: Array<{ label: string; value: string }>;
};

export type ProductCategory = {
  slug: ProductCategorySlug;
  title: string;
  href: string;
  description: string;
  products: ProductDetail[];
};

const iphoneSeries = [
  "6 Series",
  "7 Series",
  "8 Series",
  "X Series",
  "11 Series",
  "12 Series",
  "13 Series",
  "14 Series",
  "15 Series",
  "16 Series"
];

const samsungSeries = ["S20 Series", "S21 Series", "S22 Series", "S23 Series", "S24 Series", "S25 Series"];

function slugifySeries(series: string) {
  return series.toLowerCase().replace(/\s+/g, "-");
}

function iphoneScreens(): ProductDetail[] {
  return iphoneSeries.map((series) => ({
    categorySlug: "iphone-screens",
    slug: slugifySeries(series),
    title: `iPhone ${series} Compatible Screens`,
    shortTitle: series,
    series,
    productType: "iPhone compatible screen assemblies",
    description: `DAKOLAS supplies ${series} compatible screen assemblies for repair shops, wholesalers, and distributors. Product options include Premium OLED, Soft OLED, Hard OLED, and INCELL lines with 100% testing before shipment.`,
    metadataTitle: `iPhone ${series} Compatible Screens`,
    metadataDescription: `Source iPhone ${series} compatible screens from DAKOLAS, including Premium OLED, Soft OLED, Hard OLED, and INCELL lines with 12 months warranty.`,
    galleryTheme: "iphone-screen",
    productLines: ["Premium OLED", "Soft OLED", "Hard OLED", "INCELL"],
    applications: ["Repair shop screen replacement", "Wholesale screen stocking", "Distributor model programs"],
    specifications: [
      { label: "Quality Lines", value: "Premium OLED / Soft OLED / Hard OLED / INCELL" },
      { label: "Testing", value: "Display, touch, brightness, and final inspection" },
      { label: "Warranty", value: "12 Months Warranty" },
      { label: "Buyer Type", value: "Repair shops, wholesalers, distributors" }
    ]
  }));
}

function iphoneBatteries(): ProductDetail[] {
  return iphoneSeries.map((series) => ({
    categorySlug: "iphone-batteries",
    slug: slugifySeries(series),
    title: `iPhone ${series} Compatible Batteries`,
    shortTitle: series,
    series,
    productType: "iPhone compatible replacement batteries",
    description: `DAKOLAS supplies ${series} compatible batteries for professional repair and wholesale buyers. Premium Battery and Standard Battery lines are available with capacity testing, export packaging, and 12 months warranty.`,
    metadataTitle: `iPhone ${series} Compatible Batteries`,
    metadataDescription: `Buy iPhone ${series} compatible batteries from DAKOLAS with Premium Battery and Standard Battery options, capacity testing, stable supply, and 12 months warranty.`,
    galleryTheme: "iphone-battery",
    productLines: ["Premium Battery", "Standard Battery"],
    applications: ["Battery replacement service", "Wholesale battery carton orders", "Distributor replenishment"],
    specifications: [
      { label: "Quality Lines", value: "Premium Battery / Standard Battery" },
      { label: "Testing", value: "Capacity, output, connector, and final inspection" },
      { label: "Warranty", value: "12 Months Warranty" },
      { label: "Buyer Type", value: "Repair shops, wholesalers, distributors" }
    ]
  }));
}

function samsungScreens(): ProductDetail[] {
  return samsungSeries.map((series) => ({
    categorySlug: "samsung-screens",
    slug: slugifySeries(series),
    title: `Samsung ${series} Compatible Screens`,
    shortTitle: series,
    series,
    productType: "Samsung compatible screen assemblies",
    description: `DAKOLAS supplies Samsung ${series} compatible screens for repair shops, wholesalers, and distributors. Each order can be discussed by model demand, target market, packing method, and quality requirement.`,
    metadataTitle: `Samsung ${series} Compatible Screens`,
    metadataDescription: `Source Samsung ${series} compatible screens from DAKOLAS with display testing, stable supply, fast delivery, and 12 months warranty.`,
    galleryTheme: "samsung-screen",
    productLines: ["Premium Display", "Standard Display", "Wholesale Screen Program"],
    applications: ["Samsung compatible screen repair", "Regional wholesale supply", "Mixed display orders"],
    specifications: [
      { label: "Series", value: series },
      { label: "Testing", value: "Display, touch, connector, and appearance inspection" },
      { label: "Warranty", value: "12 Months Warranty" },
      { label: "Buyer Type", value: "Repair shops, wholesalers, distributors" }
    ]
  }));
}

function samsungBatteries(): ProductDetail[] {
  return samsungSeries.map((series) => ({
    categorySlug: "samsung-batteries",
    slug: slugifySeries(series),
    title: `Samsung ${series} Compatible Batteries`,
    shortTitle: series,
    series,
    productType: "Samsung compatible replacement batteries",
    description: `DAKOLAS supplies Samsung ${series} compatible batteries for professional mobile repair supply. Battery orders can be prepared for repair shops, wholesale buyers, and distributor replenishment programs.`,
    metadataTitle: `Samsung ${series} Compatible Batteries`,
    metadataDescription: `Buy Samsung ${series} compatible batteries from DAKOLAS with capacity checks, export packing, stable supply, and 12 months warranty.`,
    galleryTheme: "samsung-battery",
    productLines: ["Premium Battery", "Standard Battery", "Wholesale Battery Program"],
    applications: ["Samsung compatible battery replacement", "Wholesale battery stocking", "Distributor repair programs"],
    specifications: [
      { label: "Series", value: series },
      { label: "Testing", value: "Capacity, output, connector, and packing inspection" },
      { label: "Warranty", value: "12 Months Warranty" },
      { label: "Buyer Type", value: "Repair shops, wholesalers, distributors" }
    ]
  }));
}

const ipadParts: ProductDetail[] = [
  {
    categorySlug: "ipad-parts",
    slug: "ipad-repair-parts",
    title: "iPad Compatible Repair Parts",
    shortTitle: "iPad Parts",
    series: "iPad Parts",
    productType: "iPad compatible repair parts",
    description:
      "DAKOLAS supplies iPad compatible screens, batteries, charging parts, flex cables, and repair components for repair shops, wholesalers, and distributors worldwide.",
    metadataTitle: "iPad Compatible Repair Parts",
    metadataDescription:
      "Source iPad compatible repair parts from DAKOLAS, including screens, batteries, charging parts, flex cables, stable supply, and 12 months warranty.",
    galleryTheme: "ipad-parts",
    productLines: ["Tablet Screens", "Tablet Batteries", "Charging Parts", "Flex Cables"],
    applications: ["Tablet repair shops", "Wholesale tablet parts supply", "Distributor repair catalogs"],
    specifications: [
      { label: "Product Range", value: "Screens / Batteries / Charging Parts / Flex Cables" },
      { label: "Testing", value: "Function, appearance, connector, and final packing checks" },
      { label: "Warranty", value: "12 Months Warranty" },
      { label: "Buyer Type", value: "Repair shops, wholesalers, distributors" }
    ]
  }
];

const macbookParts: ProductDetail[] = [
  {
    categorySlug: "macbook-parts",
    slug: "macbook-repair-parts",
    title: "MacBook Compatible Repair Parts",
    shortTitle: "MacBook Parts",
    series: "MacBook Parts",
    productType: "MacBook compatible repair parts",
    description:
      "DAKOLAS supplies MacBook compatible screens, batteries, keyboard parts, chargers, and accessories for professional laptop repair and wholesale supply.",
    metadataTitle: "MacBook Compatible Repair Parts",
    metadataDescription:
      "Source MacBook compatible repair parts from DAKOLAS, including laptop screens, batteries, keyboard parts, chargers, stable supply, and 12 months warranty.",
    galleryTheme: "macbook-parts",
    productLines: ["Laptop Screens", "Laptop Batteries", "Keyboard Parts", "Chargers & Accessories"],
    applications: ["Laptop repair teams", "Wholesale MacBook compatible parts", "Distributor replacement parts programs"],
    specifications: [
      { label: "Product Range", value: "Screens / Batteries / Keyboard Parts / Chargers" },
      { label: "Testing", value: "Function, appearance, connector, and final packing checks" },
      { label: "Warranty", value: "12 Months Warranty" },
      { label: "Buyer Type", value: "Repair shops, wholesalers, distributors" }
    ]
  }
];

export const productCategories: ProductCategory[] = [
  {
    slug: "iphone-screens",
    title: "iPhone Screens",
    href: "/iphone-screens/",
    description: "Dedicated iPhone compatible screen pages by series, with OLED, INCELL, QC, packaging, and application details.",
    products: iphoneScreens()
  },
  {
    slug: "iphone-batteries",
    title: "iPhone Batteries",
    href: "/iphone-batteries/",
    description: "Dedicated iPhone compatible battery pages by series, with capacity testing, packing, and wholesale quote details.",
    products: iphoneBatteries()
  },
  {
    slug: "samsung-screens",
    title: "Samsung Screens",
    href: "/samsung-screens/",
    description: "Samsung compatible screen pages from S20 to S25 Series for repair shops and distributors.",
    products: samsungScreens()
  },
  {
    slug: "samsung-batteries",
    title: "Samsung Batteries",
    href: "/samsung-batteries/",
    description: "Samsung compatible battery pages from S20 to S25 Series with capacity checks and export packing.",
    products: samsungBatteries()
  },
  {
    slug: "ipad-parts",
    title: "iPad Parts",
    href: "/ipad-parts/",
    description: "iPad compatible repair parts with gallery, structure, QC, packing, and application details.",
    products: ipadParts
  },
  {
    slug: "macbook-parts",
    title: "MacBook Parts",
    href: "/macbook-parts/",
    description: "MacBook compatible repair parts with gallery, structure, QC, packing, and application details.",
    products: macbookParts
  }
];

export const productPages = productCategories.flatMap((category) => category.products);

export function getCategory(slug: ProductCategorySlug) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProduct(categorySlug: ProductCategorySlug, productSlug: string) {
  return getCategory(categorySlug)?.products.find((product) => product.slug === productSlug);
}

export function getProductPath(product: ProductDetail) {
  return `/${product.categorySlug}/${product.slug}/`;
}

export function getProductPaths() {
  return productPages.map((product) => `${product.categorySlug}/${product.slug}`);
}
