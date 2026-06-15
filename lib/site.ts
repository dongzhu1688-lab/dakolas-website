const whatsappMessage =
  "Hello DAKOLAS, I would like to request a quote for mobile parts. My company is interested in wholesale supply.";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export const siteConfig = {
  name: "DAKOLAS",
  slogan: "Professional Mobile Parts Supplier",
  url: "https://dakolasparts.com",
  email: "sales@dakolas.com",
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/YOUR_FORM_ID",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  description:
    "DAKOLAS supplies premium iPhone compatible screens, iPhone compatible batteries, Samsung compatible screens, Samsung compatible batteries, iPad parts, and MacBook parts for repair shops, wholesalers, and distributors worldwide."
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Factory", href: "/factory/" },
  { label: "Quality Control", href: "/quality-control/" },
  { label: "Why DAKOLAS", href: "/why-dakolas/" },
  { label: "About Us", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" }
];

export const sellingPoints = [
  "Premium Quality",
  "100% Tested",
  "Stable Supply",
  "Fast Delivery",
  "12 Months Warranty"
];

export const categories = [
  {
    title: "iPhone Screens",
    href: "/iphone-screens/",
    description: "Premium OLED, Soft OLED, Hard OLED, and INCELL displays for repair and wholesale buyers.",
    product: "iPhone compatible screen assemblies"
  },
  {
    title: "iPhone Batteries",
    href: "/iphone-batteries/",
    description: "Premium and standard battery lines with capacity testing before shipment.",
    product: "iPhone compatible batteries"
  },
  {
    title: "Samsung Screens",
    href: "/samsung-screens/",
    description: "Stable supply of Samsung compatible replacement displays for global repair channels.",
    product: "Samsung compatible screen assemblies"
  },
  {
    title: "Samsung Batteries",
    href: "/samsung-batteries/",
    description: "Reliable Samsung compatible replacement batteries for distributors and service teams.",
    product: "Samsung compatible batteries"
  },
  {
    title: "iPad Parts",
    href: "/ipad-parts/",
    description: "Tablet screens, batteries, charging parts, flex cables, and repair components.",
    product: "iPad compatible repair parts"
  },
  {
    title: "MacBook Parts",
    href: "/macbook-parts/",
    description: "Laptop screens, keyboard parts, batteries, chargers, and repair accessories.",
    product: "MacBook compatible repair parts"
  }
];

export const featuredProducts = [
  "IP16 Pro Max Premium OLED",
  "IP16 Pro Premium OLED",
  "IP15 Pro Max Premium OLED",
  "IP15 Pro Premium OLED",
  "IP14 Pro Max Premium OLED",
  "IP14 Pro Premium OLED"
];

export const productHierarchy = [
  {
    title: "iPhone Screens",
    href: "/iphone-screens/",
    lines: ["Premium OLED", "Soft OLED", "Hard OLED", "INCELL"]
  },
  {
    title: "iPhone Batteries",
    href: "/iphone-batteries/",
    lines: ["Premium Battery", "Standard Battery"]
  }
];

export const iphoneSeries = [
  "16 Series",
  "15 Series",
  "14 Series",
  "13 Series",
  "12 Series",
  "11 Series",
  "X Series",
  "8 Series",
  "7 Series",
  "6 Series"
];

export const iphoneScreenLines = [
  "DAKOLAS Premium OLED",
  "DAKOLAS Soft OLED",
  "DAKOLAS Hard OLED",
  "DAKOLAS INCELL"
];

export const iphoneBatteryLines = [
  "DAKOLAS Premium Battery",
  "DAKOLAS Standard Battery"
];

export const seoLandingPages = [
  {
    slug: "iphone-screen-supplier",
    title: "iPhone Compatible Screen Supplier",
    h1: "iPhone Compatible Screen Supplier",
    description:
      "Source premium iPhone compatible screens from DAKOLAS with stable wholesale supply, 100% testing, fast delivery, and 12 months warranty."
  },
  {
    slug: "iphone-screen-wholesale",
    title: "iPhone Compatible Screen Wholesale",
    h1: "iPhone Compatible Screen Wholesale",
    description:
      "Wholesale iPhone compatible screens for repair shops and distributors, including Premium OLED, Soft OLED, Hard OLED, and INCELL product lines."
  },
  {
    slug: "iphone-battery-supplier",
    title: "iPhone Compatible Battery Supplier",
    h1: "iPhone Compatible Battery Supplier",
    description:
      "DAKOLAS supplies iPhone compatible batteries with capacity testing, stable packaging, fast shipment, and 12 months warranty."
  },
  {
    slug: "mobile-phone-parts-supplier",
    title: "Mobile Phone Parts Supplier",
    h1: "Mobile Phone Parts Supplier",
    description:
      "A professional mobile parts supplier for screens, batteries, tablet parts, laptop parts, and wholesale repair supply programs."
  },
  {
    slug: "repair-parts-wholesale",
    title: "Repair Parts Wholesale",
    h1: "Repair Parts Wholesale",
    description:
      "Wholesale repair parts supply for mobile phone screens, batteries, iPad parts, MacBook parts, and distributor repair catalogs."
  },
  {
    slug: "oled-screen-supplier",
    title: "OLED Screen Supplier",
    h1: "OLED Screen Supplier",
    description:
      "Premium OLED screen supply for worldwide repair shops, wholesalers, and distributors needing consistent quality and delivery."
  },
  {
    slug: "samsung-screen-supplier",
    title: "Samsung Compatible Screen Supplier",
    h1: "Samsung Compatible Screen Supplier",
    description:
      "Samsung compatible screen supply for repair shops, wholesalers, and distributors that need tested quality, stable export packing, and fast wholesale response."
  },
  {
    slug: "iphone-screen-manufacturer",
    title: "iPhone Compatible Screen Manufacturer",
    h1: "iPhone Compatible Screen Manufacturer",
    description:
      "DAKOLAS supports iPhone compatible screen manufacturing supply for repair shops, wholesalers, and distributors needing OLED, INCELL, QC, packing, and 12 months warranty."
  },
  {
    slug: "iphone-battery-manufacturer",
    title: "iPhone Compatible Battery Manufacturer",
    h1: "iPhone Compatible Battery Manufacturer",
    description:
      "DAKOLAS supplies iPhone compatible batteries for B2B buyers with capacity checks, export packing, stable supply, and 12 months warranty."
  },
  {
    slug: "oled-screen-manufacturer",
    title: "OLED Screen Manufacturer",
    h1: "OLED Screen Manufacturer",
    description:
      "DAKOLAS provides OLED screen manufacturing supply support for premium repair, wholesale display programs, and distributor sourcing."
  },
  {
    slug: "mobile-phone-parts-manufacturer",
    title: "Mobile Phone Parts Manufacturer",
    h1: "Mobile Phone Parts Manufacturer",
    description:
      "DAKOLAS is a professional mobile phone parts supplier for screens, batteries, iPad parts, MacBook parts, and wholesale repair components worldwide."
  }
];

export const allStaticPaths = [
  "",
  "products",
  "iphone-screens",
  "iphone-batteries",
  "samsung-screens",
  "samsung-batteries",
  "ipad-parts",
  "macbook-parts",
  "factory",
  "quality-control",
  "about-dakolas",
  "why-dakolas",
  "warranty-policy",
  "shipping-policy",
  "about",
  "contact",
  "blog",
  ...seoLandingPages.map((page) => page.slug)
];
