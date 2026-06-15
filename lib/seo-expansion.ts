import type { GalleryTheme, ProductCategorySlug } from "@/lib/product-database";

export type IPhoneModel = {
  series: string;
  seriesSlug: string;
  models: Array<{
    name: string;
    slug: string;
  }>;
};

export type ProductLineKind = "screen" | "battery";

export type ProductLineLanding = {
  slug: string;
  name: string;
  kind: ProductLineKind;
  title: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  categoryHref: string;
  categoryTitle: string;
  qualityFocus: string;
  buyerFit: string;
  qcFocus: string;
  commercialUse: string;
};

export type IPhoneModelProductPage = {
  kind: ProductLineKind;
  categorySlug: ProductCategorySlug;
  categoryTitle: string;
  categoryHref: string;
  series: string;
  seriesSlug: string;
  modelName: string;
  modelSlug: string;
  lineSlug: string;
  lineName: string;
  title: string;
  shortTitle: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  path: string;
  galleryTheme: GalleryTheme;
  productType: string;
  testingFocus: string;
  applications: string[];
  specifications: Array<{ label: string; value: string }>;
};

export type CountryPage = {
  slug: string;
  country: string;
  title: string;
  description: string;
  buyerProfile: string;
  demandFocus: string;
  logisticsNote: string;
  marketNeed: string;
};

export const iphoneModelSeries: IPhoneModel[] = [
  {
    series: "6 Series",
    seriesSlug: "6-series",
    models: [
      { name: "IP6", slug: "ip6" },
      { name: "IP6 Plus", slug: "ip6-plus" },
      { name: "IP6S", slug: "ip6s" },
      { name: "IP6S Plus", slug: "ip6s-plus" }
    ]
  },
  {
    series: "7 Series",
    seriesSlug: "7-series",
    models: [
      { name: "IP7", slug: "ip7" },
      { name: "IP7 Plus", slug: "ip7-plus" }
    ]
  },
  {
    series: "8 Series",
    seriesSlug: "8-series",
    models: [
      { name: "IP8", slug: "ip8" },
      { name: "IP8 Plus", slug: "ip8-plus" }
    ]
  },
  {
    series: "X Series",
    seriesSlug: "x-series",
    models: [
      { name: "IPX", slug: "ipx" },
      { name: "IPXR", slug: "ipxr" },
      { name: "IPXS", slug: "ipxs" },
      { name: "IPXS Max", slug: "ipxs-max" }
    ]
  },
  {
    series: "11 Series",
    seriesSlug: "11-series",
    models: [
      { name: "IP11", slug: "ip11" },
      { name: "IP11 Pro", slug: "ip11-pro" },
      { name: "IP11 Pro Max", slug: "ip11-pro-max" }
    ]
  },
  {
    series: "12 Series",
    seriesSlug: "12-series",
    models: [
      { name: "IP12 Mini", slug: "ip12-mini" },
      { name: "IP12", slug: "ip12" },
      { name: "IP12 Pro", slug: "ip12-pro" },
      { name: "IP12 Pro Max", slug: "ip12-pro-max" }
    ]
  },
  {
    series: "13 Series",
    seriesSlug: "13-series",
    models: [
      { name: "IP13 Mini", slug: "ip13-mini" },
      { name: "IP13", slug: "ip13" },
      { name: "IP13 Pro", slug: "ip13-pro" },
      { name: "IP13 Pro Max", slug: "ip13-pro-max" }
    ]
  },
  {
    series: "14 Series",
    seriesSlug: "14-series",
    models: [
      { name: "IP14", slug: "ip14" },
      { name: "IP14 Plus", slug: "ip14-plus" },
      { name: "IP14 Pro", slug: "ip14-pro" },
      { name: "IP14 Pro Max", slug: "ip14-pro-max" }
    ]
  },
  {
    series: "15 Series",
    seriesSlug: "15-series",
    models: [
      { name: "IP15", slug: "ip15" },
      { name: "IP15 Plus", slug: "ip15-plus" },
      { name: "IP15 Pro", slug: "ip15-pro" },
      { name: "IP15 Pro Max", slug: "ip15-pro-max" }
    ]
  },
  {
    series: "16 Series",
    seriesSlug: "16-series",
    models: [
      { name: "IP16", slug: "ip16" },
      { name: "IP16 Plus", slug: "ip16-plus" },
      { name: "IP16 Pro", slug: "ip16-pro" },
      { name: "IP16 Pro Max", slug: "ip16-pro-max" }
    ]
  }
];

export const productLinePages: ProductLineLanding[] = [
  {
    slug: "premium-oled",
    name: "Premium OLED",
    kind: "screen",
    title: "Premium OLED iPhone Compatible Screens",
    description: "Premium OLED screens for repair shops, wholesalers, and distributors that need flagship display positioning, clear quality grading, and 12 months warranty.",
    metadataTitle: "Premium OLED iPhone Compatible Screens",
    metadataDescription: "Source DAKOLAS Premium OLED iPhone compatible screens with display testing, stable supply, export packing, and 12 months warranty.",
    categoryHref: "/iphone-screens/",
    categoryTitle: "iPhone Screens",
    qualityFocus: "premium image quality, strong color performance, professional repair positioning, and clear model matching",
    buyerFit: "premium repair shops, refurbishers, regional wholesalers, and distributors building higher-grade catalogs",
    qcFocus: "display, touch, brightness, appearance, flex, connector, and final packing checks",
    commercialUse: "premium repair programs, flagship model stock, distributor price-list expansion, and higher-margin wholesale orders"
  },
  {
    slug: "soft-oled",
    name: "Soft OLED",
    kind: "screen",
    title: "Soft OLED iPhone Compatible Screens",
    description: "Soft OLED screens for buyers who need flexible OLED repair options, stable model availability, and practical B2B quotation support.",
    metadataTitle: "Soft OLED iPhone Compatible Screens",
    metadataDescription: "Buy DAKOLAS Soft OLED iPhone compatible screens for repair and wholesale supply with 100% testing before shipment.",
    categoryHref: "/iphone-screens/",
    categoryTitle: "iPhone Screens",
    qualityFocus: "flexible OLED structure, balanced durability expectations, strong touch response, and repair-shop friendly positioning",
    buyerFit: "repair chains, refurbishment teams, premium wholesalers, and distributors serving quality-sensitive customers",
    qcFocus: "touch response, brightness review, color consistency, connector condition, and final inspection",
    commercialUse: "balanced premium repairs, repeat reorder programs, mixed model cartons, and market testing"
  },
  {
    slug: "hard-oled",
    name: "Hard OLED",
    kind: "screen",
    title: "Hard OLED iPhone Compatible Screens",
    description: "Hard OLED screens for wholesale buyers that want OLED positioning with stronger price control and clear model-by-model supply.",
    metadataTitle: "Hard OLED iPhone Compatible Screens",
    metadataDescription: "Source DAKOLAS Hard OLED iPhone compatible screens for wholesale repair supply, tested quality, and 12 months warranty.",
    categoryHref: "/iphone-screens/",
    categoryTitle: "iPhone Screens",
    qualityFocus: "OLED display positioning, practical price-performance balance, and stable export packing",
    buyerFit: "price-aware wholesalers, repair shops, trading companies, and distributors serving mixed market tiers",
    qcFocus: "display function, touch, brightness, appearance, and model labeling checks",
    commercialUse: "cost-controlled OLED repair, distributor stocking, wholesale margin planning, and fast-moving screen programs"
  },
  {
    slug: "incell",
    name: "INCELL",
    kind: "screen",
    title: "INCELL iPhone Compatible Screens",
    description: "INCELL screens for practical replacement demand, daily repair workflows, and wholesale buyers who need stable supply at controlled cost.",
    metadataTitle: "INCELL iPhone Compatible Screens",
    metadataDescription: "Buy DAKOLAS INCELL iPhone compatible screens with display checks, touch testing, fast delivery support, and 12 months warranty.",
    categoryHref: "/iphone-screens/",
    categoryTitle: "iPhone Screens",
    qualityFocus: "practical replacement performance, controlled cost, stable supply, and repair-shop usability",
    buyerFit: "high-volume repair shops, wholesalers, distributors, and resellers supporting price-sensitive markets",
    qcFocus: "display function, touch response, brightness, frame appearance, and packing verification",
    commercialUse: "daily repair orders, bulk wholesale cartons, market-entry programs, and distributor value lines"
  },
  {
    slug: "premium-battery",
    name: "Premium Battery",
    kind: "battery",
    title: "Premium iPhone Compatible Batteries",
    description: "Premium batteries for repair businesses that need stronger capacity confidence, stable packaging, and 12 months warranty support.",
    metadataTitle: "Premium iPhone Compatible Batteries",
    metadataDescription: "Source DAKOLAS Premium iPhone compatible batteries with capacity checks, export packing, stable supply, and 12 months warranty.",
    categoryHref: "/iphone-batteries/",
    categoryTitle: "iPhone Batteries",
    qualityFocus: "capacity confidence, stable output, careful labeling, connector condition, and repair-shop reliability",
    buyerFit: "repair shops, service chains, wholesalers, and distributors that need premium battery replacement programs",
    qcFocus: "capacity, output, appearance, connector, label, and final packing checks",
    commercialUse: "premium battery replacement, repeat carton orders, distributor replenishment, and customer-trust focused repair"
  },
  {
    slug: "standard-battery",
    name: "Standard Battery",
    kind: "battery",
    title: "Standard iPhone Compatible Batteries",
    description: "Standard batteries for practical replacement demand, wholesale stocking, and repair shops that need stable cost control.",
    metadataTitle: "Standard iPhone Compatible Batteries",
    metadataDescription: "Buy DAKOLAS Standard iPhone compatible batteries for wholesale repair supply with capacity testing and 12 months warranty.",
    categoryHref: "/iphone-batteries/",
    categoryTitle: "iPhone Batteries",
    qualityFocus: "practical replacement performance, stable packing, clear model labeling, and controlled wholesale cost",
    buyerFit: "repair shops, regional wholesalers, distributors, and resellers serving everyday battery replacement demand",
    qcFocus: "capacity checks, voltage output, connector condition, appearance, and packing verification",
    commercialUse: "daily battery repairs, high-volume stocking, mixed model cartons, and price-sensitive distributor programs"
  }
];

const kindDetails: Record<ProductLineKind, {
  categorySlug: ProductCategorySlug;
  categoryTitle: string;
  categoryHref: string;
  suffix: string;
  galleryTheme: GalleryTheme;
  productType: string;
  testingFocus: string;
  applications: string[];
}> = {
  screen: {
    categorySlug: "iphone-screens",
    categoryTitle: "iPhone Screens",
    categoryHref: "/iphone-screens/",
    suffix: "Screen",
    galleryTheme: "iphone-screen",
    productType: "iPhone compatible screen assembly",
    testingFocus: "Display, touch, brightness, appearance, connector, and final packing inspection",
    applications: ["Repair shop display replacement", "Wholesale screen stocking", "Distributor model programs"]
  },
  battery: {
    categorySlug: "iphone-batteries",
    categoryTitle: "iPhone Batteries",
    categoryHref: "/iphone-batteries/",
    suffix: "Battery",
    galleryTheme: "iphone-battery",
    productType: "iPhone compatible replacement battery",
    testingFocus: "Capacity, output, connector, appearance, label, and final packing inspection",
    applications: ["Repair shop battery replacement", "Wholesale battery cartons", "Distributor replenishment programs"]
  }
};

function buildModelProductPages(): IPhoneModelProductPage[] {
  return iphoneModelSeries.flatMap((series) =>
    series.models.flatMap((model) =>
      productLinePages.map((line) => {
        const details = kindDetails[line.kind];
        const title = `${model.name} ${line.name} ${details.suffix}`;
        const path = `/${details.categorySlug}/${series.seriesSlug}/${model.slug}/${line.slug}/`;

        return {
          kind: line.kind,
          categorySlug: details.categorySlug,
          categoryTitle: details.categoryTitle,
          categoryHref: details.categoryHref,
          series: series.series,
          seriesSlug: series.seriesSlug,
          modelName: model.name,
          modelSlug: model.slug,
          lineSlug: line.slug,
          lineName: line.name,
          title,
          shortTitle: `${model.name} ${line.name}`,
          description: `${title} from DAKOLAS is built for iPhone compatible repair, wholesale stocking, and distributor reorder programs. Buyers can request model availability, MOQ, packing details, lead time, and 12 months warranty terms before ordering.`,
          metadataTitle: title,
          metadataDescription: `Source ${title} from DAKOLAS with 100% testing, stable supply, fast delivery support, and 12 months warranty for B2B buyers.`,
          path,
          galleryTheme: details.galleryTheme,
          productType: details.productType,
          testingFocus: details.testingFocus,
          applications: details.applications,
          specifications: [
            { label: "Model", value: model.name },
            { label: "Series", value: series.series },
            { label: "Product Line", value: line.name },
            { label: "Testing", value: details.testingFocus },
            { label: "Warranty", value: "12 Months Warranty" },
            { label: "Buyer Type", value: "Repair shops, wholesalers, distributors" }
          ]
        };
      })
    )
  );
}

export const iphoneModelProductPages = buildModelProductPages();
export const iphoneScreenModelPages = iphoneModelProductPages.filter((product) => product.kind === "screen");
export const iphoneBatteryModelPages = iphoneModelProductPages.filter((product) => product.kind === "battery");

export const countryPages: CountryPage[] = [
  {
    slug: "uk",
    country: "UK",
    title: "Mobile Phone Parts Supplier for the UK",
    description: "DAKOLAS supplies iPhone compatible screens, batteries, Samsung compatible parts, iPad parts, and MacBook parts for UK repair shops, wholesalers, and distributors.",
    buyerProfile: "UK repair shops, online resellers, local wholesalers, and distributors serving professional repair customers",
    demandFocus: "Premium OLED, Soft OLED, INCELL screens, iPhone compatible batteries, and Samsung compatible screen programs",
    logisticsNote: "export-ready packing, clear model labeling, and quotation support for UK-bound mixed cartons",
    marketNeed: "buyers often need dependable quality grades, fast response, and stable supply across both current and older model demand"
  },
  {
    slug: "australia",
    country: "Australia",
    title: "Mobile Phone Parts Supplier for Australia",
    description: "DAKOLAS helps Australian repair shops, wholesalers, and distributors source tested mobile parts with stable supply and 12 months warranty.",
    buyerProfile: "Australian repair chains, independent shops, regional wholesalers, and mobile parts distributors",
    demandFocus: "screen replacement, battery replacement, tablet repair parts, and laptop repair parts for repeat wholesale supply",
    logisticsNote: "carton planning, product-line confirmation, and export packing support for Australia-bound orders",
    marketNeed: "buyers need clear product options that can support long-distance shipping, careful packing, and predictable reorder communication"
  },
  {
    slug: "germany",
    country: "Germany",
    title: "Mobile Phone Parts Supplier for Germany",
    description: "DAKOLAS supplies tested mobile repair parts for German repair businesses, wholesalers, and distributor catalogs.",
    buyerProfile: "German repair shops, refurbishment teams, wholesalers, distributors, and EU-facing resellers",
    demandFocus: "quality-controlled compatible screens, batteries, iPad parts, MacBook parts, and structured product-line sourcing",
    logisticsNote: "model-specific packing, quotation documentation, and export handling for Germany-bound B2B shipments",
    marketNeed: "buyers often prioritize reliable quality language, documented warranty terms, and repeatable model lists"
  },
  {
    slug: "france",
    country: "France",
    title: "Mobile Phone Parts Supplier for France",
    description: "DAKOLAS supports French repair shops and distributors with premium mobile phone parts, tested screens, batteries, and export-ready packaging.",
    buyerProfile: "French repair shops, regional wholesalers, trading companies, and distributor teams",
    demandFocus: "iPhone compatible screens, iPhone compatible batteries, Samsung compatible parts, and multi-category repair supply",
    logisticsNote: "stable packing, model labels, mixed-category quotations, and France-bound shipping preparation",
    marketNeed: "buyers need supplier communication that makes product line, model, MOQ, warranty, and lead time easy to confirm"
  },
  {
    slug: "italy",
    country: "Italy",
    title: "Mobile Phone Parts Supplier for Italy",
    description: "DAKOLAS provides Italian repair shops, wholesalers, and distributors with tested compatible screens, batteries, iPad parts, and MacBook parts.",
    buyerProfile: "Italian repair stores, regional wholesalers, distributor catalogs, and mixed mobile parts buyers",
    demandFocus: "screen and battery replenishment, OLED product lines, standard battery programs, and supporting repair components",
    logisticsNote: "clear model spread, export-ready packaging, and quotation handling for Italy-bound orders",
    marketNeed: "buyers need stable supply options that help them serve both premium repair demand and practical replacement demand"
  }
];

export function getProductLinePath(line: ProductLineLanding) {
  return `/product-lines/${line.slug}/`;
}

export function getProductLinePage(slug: string) {
  return productLinePages.find((line) => line.slug === slug);
}

export function getLineProducts(lineSlug: string) {
  return iphoneModelProductPages.filter((product) => product.lineSlug === lineSlug);
}

export function getIphoneModelProduct(categorySlug: ProductCategorySlug, seriesSlug: string, modelSlug: string, lineSlug: string) {
  return iphoneModelProductPages.find(
    (product) =>
      product.categorySlug === categorySlug &&
      product.seriesSlug === seriesSlug &&
      product.modelSlug === modelSlug &&
      product.lineSlug === lineSlug
  );
}

export function getModelPagesForSeries(categorySlug: ProductCategorySlug, seriesSlug: string) {
  return iphoneModelProductPages.filter((product) => product.categorySlug === categorySlug && product.seriesSlug === seriesSlug);
}

export function getRelatedModelProducts(product: IPhoneModelProductPage, limit = 8) {
  const sameModel = iphoneModelProductPages.filter(
    (item) => item.modelSlug === product.modelSlug && item.categorySlug === product.categorySlug && item.path !== product.path
  );
  const sameSeries = iphoneModelProductPages.filter(
    (item) =>
      item.seriesSlug === product.seriesSlug &&
      item.categorySlug === product.categorySlug &&
      item.lineSlug === product.lineSlug &&
      item.path !== product.path
  );
  const seen = new Set<string>();

  return [...sameModel, ...sameSeries].filter((item) => {
    if (seen.has(item.path)) return false;
    seen.add(item.path);
    return true;
  }).slice(0, limit);
}

export function getProductLinePaths() {
  return ["product-lines", ...productLinePages.map((line) => `product-lines/${line.slug}`)];
}

export function getIphoneModelProductPaths() {
  return iphoneModelProductPages.map((product) => product.path.replace(/^\/|\/$/g, ""));
}

export function getCountryPage(slug: string) {
  return countryPages.find((page) => page.slug === slug);
}

export function getCountryPaths() {
  return ["countries", ...countryPages.map((page) => `countries/${page.slug}`)];
}

export function getCountrySections(page: CountryPage) {
  return [
    {
      heading: `DAKOLAS supply support for ${page.country}`,
      body: `${page.title} is designed for ${page.buyerProfile}. DAKOLAS supplies compatible replacement parts for professional repair and wholesale use, including iPhone compatible screens, iPhone compatible batteries, Samsung compatible screens, Samsung compatible batteries, iPad parts, and MacBook parts. The page helps buyers in ${page.country} understand product lines, quote preparation, quality control, packing expectations, and warranty terms before starting a wholesale conversation.`
    },
    {
      heading: "Product categories for local repair demand",
      body: `The main sourcing focus includes ${page.demandFocus}. Buyers can browse product categories, compare Premium OLED, Soft OLED, Hard OLED, INCELL, Premium Battery, and Standard Battery lines, and send a model-by-model inquiry. This structure helps repair shops and distributors avoid vague requests and receive a more practical quotation with model availability, MOQ guidance, lead time, and packing options.`
    },
    {
      heading: "Quality control and warranty terms",
      body: `DAKOLAS uses defined checks before shipment, including display testing, touch testing, brightness review, battery capacity checking, appearance inspection, connector checks, and final packing review. Every DAKOLAS warranty statement is 12 months. The company supplies compatible parts and does not claim authorization from any device brand, which keeps the sourcing message clear for professional international buyers.`
    },
    {
      heading: "Export packing and delivery planning",
      body: `For ${page.country}, DAKOLAS focuses on ${page.logisticsNote}. International buyers should share destination country, preferred shipping method, order quantity, model list, and whether the order is urgent. Clear information helps DAKOLAS prepare better packing suggestions, organize mixed cartons, and communicate realistic lead time before the buyer approves an order.`
    },
    {
      heading: "Why stable supply matters",
      body: `In ${page.country}, ${page.marketNeed}. Repair businesses need parts that can support repeat service work, while wholesalers and distributors need model coverage that helps them serve downstream customers. DAKOLAS organizes pages around categories, series, model-level product pages, product line landing pages, and quote forms so buyers can move from research to inquiry without losing context.`
    }
  ];
}
