export type ProductImageCategory = "screen" | "battery" | "factory" | "qc" | "packaging";

export type ProductImagePage = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProductImageCategory;
  categoryLabel: string;
  productName: string;
  imageType: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  sourceHref: string;
  buyerUse: string;
  imageNotes: string[];
  relatedKeywords: string[];
};

const screenProducts = [
  {
    name: "IP16 Pro Max Premium OLED",
    slugBase: "ip16-pro-max-premium-oled",
    href: "/iphone-screens/16-series/ip16-pro-max/premium-oled/"
  },
  {
    name: "IP16 Pro Premium OLED",
    slugBase: "ip16-pro-premium-oled",
    href: "/iphone-screens/16-series/ip16-pro/premium-oled/"
  },
  {
    name: "IP15 Pro Max Premium OLED",
    slugBase: "ip15-pro-max-premium-oled",
    href: "/iphone-screens/15-series/ip15-pro-max/premium-oled/"
  },
  {
    name: "IP15 Pro Premium OLED",
    slugBase: "ip15-pro-premium-oled",
    href: "/iphone-screens/15-series/ip15-pro/premium-oled/"
  },
  {
    name: "IP14 Pro Max Premium OLED",
    slugBase: "ip14-pro-max-premium-oled",
    href: "/iphone-screens/14-series/ip14-pro-max/premium-oled/"
  },
  {
    name: "IP14 Pro Premium OLED",
    slugBase: "ip14-pro-premium-oled",
    href: "/iphone-screens/14-series/ip14-pro/premium-oled/"
  }
];

const screenImageTypes = [
  {
    type: "Main Image",
    slug: "main-image",
    src: "/images/product-gallery/main-image.svg",
    use: "Catalog cover reference for repair shops, wholesalers, and distributor price lists.",
    notes: ["Front product view for quick model recognition", "Useful for quotation sheets and model confirmation", "Supports premium OLED buyer communication"]
  },
  {
    type: "Feature Image",
    slug: "feature-image",
    src: "/images/product-gallery/feature-image.svg",
    use: "Buyer-facing feature reference for premium display positioning and wholesale comparison.",
    notes: ["Highlights quality, testing, warranty, and supply points", "Supports sales discussions with repair-shop customers", "Works well for B2B product introductions"]
  },
  {
    type: "Structure Image",
    slug: "structure-image",
    src: "/images/product-gallery/structure-image.svg",
    use: "Structure reference for component layers, connector review, and professional repair sourcing.",
    notes: ["Shows screen-layer and connector discussion points", "Helps buyers compare product-line expectations", "Useful for technical product conversations"]
  },
  {
    type: "QC Testing Image",
    slug: "qc-testing-image",
    src: "/images/product-gallery/qc-image.svg",
    use: "Inspection reference for display testing, touch testing, brightness review, and final checks.",
    notes: ["Supports 100% tested before shipment messaging", "Connects product image review with QC workflow", "Useful before sample or wholesale order confirmation"]
  },
  {
    type: "Packaging Image",
    slug: "packaging-image",
    src: "/images/product-gallery/packaging-image.svg",
    use: "Packing reference for wholesale cartons, export labels, and distributor shipment planning.",
    notes: ["Shows export-ready packing expectations", "Helps buyers discuss carton and labeling needs", "Supports mixed model wholesale order planning"]
  }
];

const batteryProducts = [
  {
    name: "IP16 Pro Max Premium Battery",
    slugBase: "ip16-pro-max-premium-battery",
    href: "/iphone-batteries/16-series/ip16-pro-max/premium-battery/"
  },
  {
    name: "IP16 Pro Premium Battery",
    slugBase: "ip16-pro-premium-battery",
    href: "/iphone-batteries/16-series/ip16-pro/premium-battery/"
  },
  {
    name: "IP15 Pro Max Premium Battery",
    slugBase: "ip15-pro-max-premium-battery",
    href: "/iphone-batteries/15-series/ip15-pro-max/premium-battery/"
  },
  {
    name: "IP15 Pro Premium Battery",
    slugBase: "ip15-pro-premium-battery",
    href: "/iphone-batteries/15-series/ip15-pro/premium-battery/"
  },
  {
    name: "IP14 Pro Max Premium Battery",
    slugBase: "ip14-pro-max-premium-battery",
    href: "/iphone-batteries/14-series/ip14-pro-max/premium-battery/"
  },
  {
    name: "IP14 Pro Premium Battery",
    slugBase: "ip14-pro-premium-battery",
    href: "/iphone-batteries/14-series/ip14-pro/premium-battery/"
  },
  {
    name: "IP13 Pro Max Premium Battery",
    slugBase: "ip13-pro-max-premium-battery",
    href: "/iphone-batteries/13-series/ip13-pro-max/premium-battery/"
  },
  {
    name: "IP12 Pro Max Premium Battery",
    slugBase: "ip12-pro-max-premium-battery",
    href: "/iphone-batteries/12-series/ip12-pro-max/premium-battery/"
  }
];

const factoryPhotoPages = [
  {
    slug: "factory-production-line-photo",
    title: "Factory Production Line Photo",
    shortTitle: "Production Line",
    imageType: "Factory Photo",
    imageSrc: "/images/hero-parts-1280.webp",
    description: "DAKOLAS factory production line image page for buyers reviewing mobile parts supply capacity and professional sourcing communication.",
    buyerUse: "Use this factory photo page to discuss production planning, model coverage, order timing, and repeat wholesale supply.",
    sourceHref: "/factory/",
    notes: ["Production-line reference for buyer confidence", "Supports supplier review before larger orders", "Connects factory capability with wholesale quote planning"]
  },
  {
    slug: "factory-qc-department-photo",
    title: "Factory QC Department Photo",
    shortTitle: "QC Department",
    imageType: "Factory Photo",
    imageSrc: "/images/product-gallery/qc-image.svg",
    description: "DAKOLAS QC department image page for repair shops and distributors reviewing inspection steps before shipment.",
    buyerUse: "Use this photo page when explaining testing workflow, final inspection, and quality communication to purchasing teams.",
    sourceHref: "/factory/",
    notes: ["QC department reference for B2B supplier review", "Supports quality-control discussions", "Connects factory photos with 100% tested messaging"]
  },
  {
    slug: "factory-warehouse-photo",
    title: "Factory Warehouse Photo",
    shortTitle: "Warehouse",
    imageType: "Factory Photo",
    imageSrc: "/images/product-gallery/packaging-image.svg",
    description: "DAKOLAS warehouse image page for buyers reviewing stock organization, model labeling, and wholesale order preparation.",
    buyerUse: "Use this warehouse photo page to discuss stable supply, mixed cartons, model labels, and distributor reorder planning.",
    sourceHref: "/factory/",
    notes: ["Warehouse reference for supply stability", "Useful for distributor stocking conversations", "Supports mixed-model wholesale planning"]
  },
  {
    slug: "factory-global-shipping-photo",
    title: "Factory Global Shipping Photo",
    shortTitle: "Global Shipping",
    imageType: "Factory Photo",
    imageSrc: "/images/product-gallery/application-image.svg",
    description: "DAKOLAS global shipping image page for international buyers reviewing export preparation and delivery communication.",
    buyerUse: "Use this photo page to discuss destination country, delivery method, packing needs, and international shipment timing.",
    sourceHref: "/factory/",
    notes: ["Global shipping reference for export buyers", "Supports fast delivery and packing discussions", "Useful for repair-shop and distributor import planning"]
  }
];

const qcPhotoPages = [
  {
    slug: "qc-display-testing-photo",
    title: "QC Display Testing Photo",
    shortTitle: "Display Testing",
    imageType: "QC Photo",
    imageSrc: "/images/product-gallery/qc-image.svg",
    description: "Display testing photo page for DAKOLAS premium screen buyers reviewing function and appearance checks before shipment.",
    buyerUse: "Use this QC photo page when confirming display performance checks for Premium OLED and other compatible screen orders.",
    sourceHref: "/quality-control/",
    notes: ["Display function review before shipment", "Supports screen sample approval", "Useful for repair-shop quality discussions"]
  },
  {
    slug: "qc-touch-testing-photo",
    title: "QC Touch Testing Photo",
    shortTitle: "Touch Testing",
    imageType: "QC Photo",
    imageSrc: "/images/product-gallery/feature-image.svg",
    description: "Touch testing photo page for DAKOLAS screen buyers confirming touch response and repair-shop usability expectations.",
    buyerUse: "Use this page to align touch testing expectations before sample, trial, or wholesale screen order approval.",
    sourceHref: "/quality-control/",
    notes: ["Touch response check reference", "Useful for professional screen sourcing", "Supports 100% tested before shipment messaging"]
  },
  {
    slug: "qc-brightness-testing-photo",
    title: "QC Brightness Testing Photo",
    shortTitle: "Brightness Testing",
    imageType: "QC Photo",
    imageSrc: "/images/product-gallery/main-image.svg",
    description: "Brightness testing photo page for DAKOLAS OLED screen buyers reviewing display appearance and market positioning.",
    buyerUse: "Use this page to discuss brightness review, visual quality, and product line expectations for premium display orders.",
    sourceHref: "/quality-control/",
    notes: ["Brightness review reference for screen orders", "Supports Premium OLED quality positioning", "Helpful for distributor catalog review"]
  },
  {
    slug: "qc-battery-capacity-testing-photo",
    title: "QC Battery Capacity Testing Photo",
    shortTitle: "Battery Capacity Testing",
    imageType: "QC Photo",
    imageSrc: "/images/product-gallery/qc-image.svg",
    description: "Battery capacity testing photo page for DAKOLAS premium battery buyers reviewing capacity checks and final inspection.",
    buyerUse: "Use this page to discuss capacity testing, connector checks, packing review, and 12 months warranty communication.",
    sourceHref: "/quality-control/",
    notes: ["Capacity testing reference for battery orders", "Supports repair-shop battery sourcing", "Useful before repeat wholesale battery programs"]
  }
];

const packagingPhotoPages = [
  {
    slug: "screen-protective-packaging-photo",
    title: "Screen Protective Packaging Photo",
    shortTitle: "Screen Packaging",
    imageType: "Packaging Photo",
    imageSrc: "/images/product-gallery/packaging-image.svg",
    description: "Screen protective packaging photo page for DAKOLAS buyers planning safe export packing for compatible screen orders.",
    buyerUse: "Use this packaging page to discuss screen protection, carton structure, model labels, and mixed-model export shipment planning.",
    sourceHref: "/shipping-policy/",
    notes: ["Protective packing reference for screen orders", "Supports export shipment communication", "Useful for distributor receiving teams"]
  },
  {
    slug: "battery-export-packaging-photo",
    title: "Battery Export Packaging Photo",
    shortTitle: "Battery Packaging",
    imageType: "Packaging Photo",
    imageSrc: "/images/product-gallery/packaging-image.svg",
    description: "Battery export packaging photo page for DAKOLAS buyers discussing packing needs for premium battery wholesale orders.",
    buyerUse: "Use this page when preparing battery cartons, labeling requests, and destination-country shipment details.",
    sourceHref: "/shipping-policy/",
    notes: ["Battery packing reference for wholesale cartons", "Supports import and logistics review", "Useful for repeat battery replenishment"]
  },
  {
    slug: "mixed-carton-packaging-photo",
    title: "Mixed Carton Packaging Photo",
    shortTitle: "Mixed Cartons",
    imageType: "Packaging Photo",
    imageSrc: "/images/product-gallery/packaging-image.svg",
    description: "Mixed carton packaging photo page for DAKOLAS buyers ordering screens, batteries, and repair parts together.",
    buyerUse: "Use this page to discuss mixed cartons, product separation, carton labels, and model list confirmation before shipment.",
    sourceHref: "/shipping-policy/",
    notes: ["Mixed-order packing reference", "Supports wholesalers buying multiple categories", "Useful for distributor stock replenishment"]
  },
  {
    slug: "distributor-labeling-packaging-photo",
    title: "Distributor Labeling Packaging Photo",
    shortTitle: "Distributor Labeling",
    imageType: "Packaging Photo",
    imageSrc: "/images/product-gallery/application-image.svg",
    description: "Distributor labeling packaging photo page for buyers discussing model labels, carton marks, and receiving workflow.",
    buyerUse: "Use this page to align labeling details, model list organization, and downstream distributor receiving requirements.",
    sourceHref: "/shipping-policy/",
    notes: ["Labeling reference for distributor orders", "Supports model list and carton mark communication", "Useful for recurring B2B supply programs"]
  }
];

const screenImagePages: ProductImagePage[] = screenProducts.flatMap((product) =>
  screenImageTypes.map((imageType) => ({
    slug: `${product.slugBase}-${imageType.slug}`,
    title: `${product.name} ${imageType.type}`,
    shortTitle: `${product.name} ${imageType.type}`,
    category: "screen",
    categoryLabel: "Premium OLED Product Images",
    productName: product.name,
    imageType: imageType.type,
    imageSrc: imageType.src,
    imageAlt: `DAKOLAS ${product.name} ${imageType.type.toLowerCase()} for wholesale sourcing`,
    description: `Dedicated ${imageType.type.toLowerCase()} page for ${product.name}. DAKOLAS uses product image references to help repair shops, wholesalers, and distributors confirm model, quality line, QC expectations, packaging details, and quotation requirements.`,
    metadataTitle: `${product.name} ${imageType.type}`,
    metadataDescription: `View ${product.name} ${imageType.type.toLowerCase()} from DAKOLAS for B2B screen sourcing, wholesale quotation, QC review, packaging discussion, and 12 months warranty communication.`,
    sourceHref: product.href,
    buyerUse: imageType.use,
    imageNotes: imageType.notes,
    relatedKeywords: [product.name, "Premium OLED", "iPhone compatible screen", imageType.type, "wholesale screen supplier"]
  }))
);

const batteryImagePages: ProductImagePage[] = batteryProducts.map((product) => ({
  slug: `${product.slugBase}-main-image`,
  title: `${product.name} Main Image`,
  shortTitle: product.name,
  category: "battery",
  categoryLabel: "Premium Battery Series",
  productName: product.name,
  imageType: "Main Image",
  imageSrc: "/images/product-gallery/main-image.svg",
  imageAlt: `DAKOLAS ${product.name} main image for wholesale battery sourcing`,
  description: `Dedicated main image page for ${product.name}. DAKOLAS uses battery image references to help repair shops, wholesalers, and distributors confirm model demand, premium battery line, capacity testing expectations, packing needs, and 12 months warranty terms.`,
  metadataTitle: `${product.name} Main Image`,
  metadataDescription: `View ${product.name} main image from DAKOLAS for premium battery wholesale sourcing, capacity testing discussion, export packing, and quotation planning.`,
  sourceHref: product.href,
  buyerUse: "Premium battery catalog and quotation reference for repair shops, wholesalers, and distributor replenishment programs.",
  imageNotes: [
    "Main battery image reference for model confirmation",
    "Supports capacity testing and packing discussions",
    "Useful before sample, trial order, or repeat wholesale program"
  ],
  relatedKeywords: [product.name, "Premium Battery", "iPhone compatible battery", "capacity testing", "battery wholesale"]
}));

const operationalImagePages: ProductImagePage[] = [
  ...factoryPhotoPages.map((page) => ({
    ...page,
    category: "factory" as const,
    categoryLabel: "Factory Photos",
    productName: "DAKOLAS Factory",
    imageAlt: `DAKOLAS ${page.title.toLowerCase()} for B2B supplier review`,
    metadataTitle: page.title,
    metadataDescription: `${page.title} from DAKOLAS for B2B buyers reviewing factory supply, quality control, packing, shipping, and wholesale sourcing capability.`,
    imageNotes: page.notes,
    relatedKeywords: ["Factory Photos", "DAKOLAS factory", page.shortTitle, "mobile parts supplier", "wholesale supply"]
  })),
  ...qcPhotoPages.map((page) => ({
    ...page,
    category: "qc" as const,
    categoryLabel: "QC Photos",
    productName: "DAKOLAS Quality Control",
    imageAlt: `DAKOLAS ${page.title.toLowerCase()} for quality control review`,
    metadataTitle: page.title,
    metadataDescription: `${page.title} from DAKOLAS for B2B buyers reviewing 100% testing, inspection workflow, sample approval, and wholesale quality communication.`,
    imageNotes: page.notes,
    relatedKeywords: ["QC Photos", "Quality Control", page.shortTitle, "100% tested", "mobile parts inspection"]
  })),
  ...packagingPhotoPages.map((page) => ({
    ...page,
    category: "packaging" as const,
    categoryLabel: "Packaging Photos",
    productName: "DAKOLAS Packaging",
    imageAlt: `DAKOLAS ${page.title.toLowerCase()} for export packing review`,
    metadataTitle: page.title,
    metadataDescription: `${page.title} from DAKOLAS for B2B buyers reviewing export packing, carton labels, distributor receiving, and international shipment planning.`,
    imageNotes: page.notes,
    relatedKeywords: ["Packaging Photos", "export packing", page.shortTitle, "wholesale cartons", "mobile parts shipping"]
  }))
];

export const productImagePages: ProductImagePage[] = [
  ...screenImagePages,
  ...batteryImagePages,
  ...operationalImagePages
];

export const productImageCategoryLabels: Record<ProductImageCategory, string> = {
  screen: "Premium OLED Product Images",
  battery: "Premium Battery Series",
  factory: "Factory Photos",
  qc: "QC Photos",
  packaging: "Packaging Photos"
};

export function getProductImagePage(slug: string) {
  return productImagePages.find((page) => page.slug === slug);
}

export function getProductImagePath(page: ProductImagePage) {
  return `/product-images/${page.slug}/`;
}

export function getProductImagePaths() {
  return ["product-images", ...productImagePages.map((page) => `product-images/${page.slug}`)];
}

export function getRelatedProductImagePages(page: ProductImagePage, limit = 6) {
  return productImagePages
    .filter((item) => item.slug !== page.slug && (item.category === page.category || item.productName === page.productName))
    .slice(0, limit);
}
