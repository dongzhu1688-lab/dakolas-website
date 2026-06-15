type SeoArticleConfig = {
  slug: string;
  keyword: string;
  buyer: string;
  productFocus: string;
  qualityLines: string;
  purchaseUse: string;
  qcFocus: string;
  marketNeed: string;
  supplyRisk: string;
  commercialAngle: string;
  relatedProducts: string;
};

export type SeoArticleSection = {
  heading: string;
  body: string;
};

const configs: SeoArticleConfig[] = [
  {
    slug: "iphone-screen-supplier",
    keyword: "iPhone compatible screen supplier",
    buyer: "repair shops, refurbishment teams, regional wholesalers, and distributors",
    productFocus: "iPhone compatible display assemblies across Premium OLED, Soft OLED, Hard OLED, and INCELL lines",
    qualityLines: "Premium OLED for buyers prioritizing premium image quality, Soft OLED for flexible repair demand, Hard OLED for cost-sensitive channels, and INCELL for practical high-volume replacement programs",
    purchaseUse: "daily repair orders, wholesale stocking, distributor reorder planning, and model-by-model quotation lists",
    qcFocus: "display testing, touch response checks, brightness review, appearance inspection, and final packing confirmation",
    marketNeed: "buyers need a supplier that can explain quality grades clearly and keep replacement screens available across current and previous IP series",
    supplyRisk: "mixed quality, unstable model availability, unclear packing, and inconsistent after-sales handling",
    commercialAngle: "screen sourcing is easier when the supplier understands wholesale batches, repeat orders, warranty documentation, and fast response requirements",
    relatedProducts: "iPhone compatible batteries, Samsung compatible screens, Samsung compatible batteries, iPad parts, and MacBook parts"
  },
  {
    slug: "iphone-screen-wholesale",
    keyword: "iPhone compatible screen wholesale",
    buyer: "wholesale screen buyers, repair-chain purchasers, trading companies, and service networks",
    productFocus: "bulk iPhone compatible screen supply for IP16, IP15, IP14, IP13, IP12, IP11, X, 8, 7, and 6 series demand",
    qualityLines: "Premium OLED for flagship demand, Soft OLED for premium repair programs, Hard OLED for balanced price-performance orders, and INCELL for markets that need practical cost control",
    purchaseUse: "bulk cartons, mixed-model orders, reorder lists, market launches, and seasonal stock planning",
    qcFocus: "batch display inspection, touch testing, brightness checking, model labeling, packing review, and export carton control",
    marketNeed: "wholesale customers need repeatable grading, predictable delivery, and support when their repair-shop customers reorder fast-moving models",
    supplyRisk: "unclear grade names, hidden defect rates, poor carton handling, and slow quotation updates",
    commercialAngle: "a good wholesale program gives buyers enough detail to quote their own customers quickly while protecting margin and reputation",
    relatedProducts: "iPhone compatible batteries, Samsung compatible screens, iPad parts, MacBook parts, and repair accessories"
  },
  {
    slug: "oled-screen-supplier",
    keyword: "OLED screen supplier",
    buyer: "premium repair shops, refurbishers, wholesalers, and distributors focused on display quality",
    productFocus: "premium OLED screen supply for iPhone compatible replacement programs and selected high-demand repair channels",
    qualityLines: "Premium OLED for high-end repair jobs, Soft OLED for durability-sensitive buyers, and Hard OLED for buyers that need OLED positioning with stronger price control",
    purchaseUse: "premium screen replacement, refurbishment projects, wholesale display programs, and distributor catalog expansion",
    qcFocus: "color review, brightness comparison, touch response, flex condition, frame appearance, and final inspection before shipment",
    marketNeed: "buyers need OLED screens that are described clearly so repair shops can choose the right line for each customer and price level",
    supplyRisk: "grade confusion, overpromising, inconsistent brightness, touch issues, and warranty disputes after installation",
    commercialAngle: "OLED sourcing should combine quality positioning, stable communication, practical MOQ planning, and documented 12 months warranty terms",
    relatedProducts: "iPhone compatible batteries, Samsung compatible screens, Samsung compatible batteries, and tablet repair parts"
  },
  {
    slug: "iphone-battery-supplier",
    keyword: "iPhone compatible battery supplier",
    buyer: "repair shops, wholesale battery buyers, distributor purchasing teams, and service centers",
    productFocus: "iPhone compatible replacement batteries in Premium Battery and Standard Battery lines",
    qualityLines: "Premium Battery for buyers that prioritize capacity confidence and stable customer experience, and Standard Battery for practical repair demand with controlled pricing",
    purchaseUse: "battery replacement services, wholesale battery cartons, distributor stock, and model-based repair-shop supply",
    qcFocus: "capacity testing, output review, appearance inspection, connector checks, labeling, and final packing control",
    marketNeed: "battery buyers need clear capacity expectations, careful packaging, and stable after-sales communication because battery issues directly affect repair trust",
    supplyRisk: "unclear capacity, weak labeling, poor packing, mixed models, and slow response when customers need warranty support",
    commercialAngle: "battery supply works best when buyers can plan model mix, carton quantities, lead time, and 12 months warranty terms before placing the order",
    relatedProducts: "iPhone compatible screens, Samsung compatible batteries, Samsung compatible screens, iPad parts, and MacBook parts"
  },
  {
    slug: "mobile-phone-parts-supplier",
    keyword: "mobile phone parts supplier",
    buyer: "repair shops, wholesalers, distributors, trading companies, and regional parts resellers",
    productFocus: "mobile phone screens, batteries, tablet parts, laptop parts, and supporting repair components for global B2B buyers",
    qualityLines: "premium display lines, practical battery lines, Samsung compatible screen options, tablet repair parts, and laptop repair parts organized by buyer requirement",
    purchaseUse: "multi-category sourcing, distributor catalogs, repair-shop replenishment, mixed cartons, and market-specific product programs",
    qcFocus: "incoming inspection, display testing, touch testing, battery capacity checks, packing review, and shipment preparation",
    marketNeed: "many buyers prefer one professional supplier that can combine screen, battery, tablet, and laptop parts in a controlled quotation process",
    supplyRisk: "fragmented sourcing, slow communication, inconsistent terms, mixed packing standards, and unclear product hierarchy",
    commercialAngle: "a strong supplier helps buyers save sourcing time, reduce communication cost, protect margin, and keep repair customers supplied",
    relatedProducts: "iPhone compatible screens, iPhone compatible batteries, Samsung compatible screens, Samsung compatible batteries, iPad parts, and MacBook parts"
  },
  {
    slug: "repair-parts-wholesale",
    keyword: "repair parts wholesale",
    buyer: "repair shop networks, wholesalers, distributors, importers, and trading companies building repair-parts catalogs",
    productFocus: "wholesale repair parts including iPhone compatible screens, iPhone compatible batteries, Samsung compatible screens, Samsung compatible batteries, iPad parts, and MacBook parts",
    qualityLines: "Premium OLED, Soft OLED, Hard OLED, INCELL, Premium Battery, Standard Battery, Samsung compatible parts, tablet repair parts, and laptop repair parts",
    purchaseUse: "multi-category wholesale orders, repair-shop replenishment, distributor catalogs, country-specific supply programs, and mixed carton planning",
    qcFocus: "display testing, touch testing, brightness review, battery capacity checks, appearance inspection, connector checks, and final packing control",
    marketNeed: "buyers need a wholesale supplier that can organize many repair categories into clear quotation and reorder workflows",
    supplyRisk: "mixed quality, weak labels, fragmented sourcing, poor packing, unclear warranty terms, and slow communication across categories",
    commercialAngle: "repair-parts wholesale works best when buyers can combine categories, compare product lines, and receive practical model-level quotation support",
    relatedProducts: "iPhone compatible screens, iPhone compatible batteries, Samsung compatible parts, iPad parts, MacBook parts, product lines, and country supply pages"
  },
  {
    slug: "samsung-screen-supplier",
    keyword: "Samsung compatible screen supplier",
    buyer: "repair shops, Samsung repair specialists, wholesalers, regional distributors, and mixed mobile-parts buyers",
    productFocus: "Samsung compatible replacement screens for high-demand A Series, S Series, and Note Series repair channels",
    qualityLines: "screen options selected by model demand, target price, touch performance, display appearance, and buyer market positioning",
    purchaseUse: "Samsung compatible screen replacement, wholesale stocking, repair-chain replenishment, and mixed screen-and-battery orders",
    qcFocus: "display appearance, touch response, connector condition, model matching, protective packing, and final inspection before shipment",
    marketNeed: "Samsung compatible screen buyers need careful model communication because screen variants, region demand, and price targets can differ by market",
    supplyRisk: "wrong model selection, fragile packing, unclear grade expectations, and shipment delays during fast-moving demand periods",
    commercialAngle: "a focused supplier helps buyers quote Samsung compatible screens with clearer specifications, stable packing, and practical delivery planning",
    relatedProducts: "Samsung compatible batteries, iPhone compatible screens, iPhone compatible batteries, iPad parts, and MacBook parts"
  },
  {
    slug: "iphone-screen-manufacturer",
    keyword: "iPhone compatible screen manufacturer",
    buyer: "repair shops, refurbishers, wholesalers, distributors, and purchasing teams comparing direct screen supply partners",
    productFocus: "iPhone compatible screen assemblies from IP6 Series to IP16 Series across Premium OLED, Soft OLED, Hard OLED, and INCELL lines",
    qualityLines: "Premium OLED for high-end display repair, Soft OLED for flexible OLED demand, Hard OLED for controlled OLED pricing, and INCELL for practical high-volume replacement",
    purchaseUse: "factory-linked sourcing, model-level quotation, distributor catalog building, wholesale screen orders, and repair network replenishment",
    qcFocus: "incoming material review, display testing, touch testing, brightness checking, appearance inspection, and export packing confirmation",
    marketNeed: "buyers need manufacturer-style supply communication that connects product line, model coverage, quality control, packing, and warranty terms",
    supplyRisk: "unclear production standards, inconsistent model availability, vague grade names, poor packaging, and weak after-sales records",
    commercialAngle: "manufacturer-style sourcing helps buyers discuss model demand, quality level, MOQ, packing, and reorder planning with more detail",
    relatedProducts: "Premium OLED, Soft OLED, Hard OLED, INCELL, iPhone compatible batteries, Samsung compatible screens, and iPad parts"
  },
  {
    slug: "iphone-battery-manufacturer",
    keyword: "iPhone compatible battery manufacturer",
    buyer: "battery wholesalers, repair shops, distributor replenishment teams, and service centers buying replacement batteries",
    productFocus: "iPhone compatible replacement batteries across Premium Battery and Standard Battery lines from IP6 Series to IP16 Series",
    qualityLines: "Premium Battery for capacity-confidence programs and Standard Battery for practical replacement demand with controlled wholesale cost",
    purchaseUse: "battery replacement service, mixed battery cartons, distributor stock planning, service-center replenishment, and market testing",
    qcFocus: "capacity testing, output checking, connector review, appearance inspection, label confirmation, and final packing review",
    marketNeed: "buyers need battery supply that combines clear model coverage, capacity expectations, export packing, and 12 months warranty communication",
    supplyRisk: "unclear capacity, mixed model labels, connector issues, weak packing, and confusing warranty handling",
    commercialAngle: "battery sourcing works better when buyers can prepare model-level requests and compare Premium Battery and Standard Battery options clearly",
    relatedProducts: "iPhone compatible screens, Premium Battery, Standard Battery, Samsung compatible batteries, iPad parts, and MacBook parts"
  },
  {
    slug: "oled-screen-manufacturer",
    keyword: "OLED screen manufacturer",
    buyer: "premium repair shops, display wholesalers, refurbishers, distributor buyers, and international mobile-parts importers",
    productFocus: "OLED screen supply for iPhone compatible repair programs, including Premium OLED, Soft OLED, and Hard OLED product lines",
    qualityLines: "Premium OLED for premium display positioning, Soft OLED for flexible OLED repair demand, and Hard OLED for OLED supply with stronger price control",
    purchaseUse: "premium screen repair, refurbishment programs, wholesale OLED cartons, distributor product-line expansion, and model-level sourcing",
    qcFocus: "color performance, brightness review, touch response, flex condition, frame appearance, connector checks, and final inspection",
    marketNeed: "buyers need OLED sourcing language that is clear enough for repair-shop customers and structured enough for wholesale catalog planning",
    supplyRisk: "grade confusion, inconsistent brightness, touch issues, vague OLED claims, fragile packing, and warranty disputes",
    commercialAngle: "a practical OLED manufacturer page helps buyers compare lines, confirm model demand, and request quotations with better technical context",
    relatedProducts: "Premium OLED, Soft OLED, Hard OLED, INCELL, iPhone compatible batteries, Samsung compatible screens, and quality control pages"
  },
  {
    slug: "mobile-phone-parts-manufacturer",
    keyword: "mobile phone parts manufacturer",
    buyer: "repair shops, wholesalers, distributors, importers, trading companies, and mobile repair catalog managers",
    productFocus: "mobile phone screens, mobile phone batteries, iPad parts, MacBook parts, and supporting repair components",
    qualityLines: "screen product lines, battery product lines, Samsung compatible parts, tablet repair parts, and laptop repair parts organized for B2B quotation",
    purchaseUse: "multi-category sourcing, distributor catalog planning, repair-shop replenishment, mixed cartons, and country-specific wholesale supply",
    qcFocus: "display checks, touch testing, battery capacity checks, appearance review, connector checks, labeling, and final packing control",
    marketNeed: "buyers need a manufacturer-style supplier that can organize multiple categories into one professional sourcing conversation",
    supplyRisk: "fragmented sourcing, inconsistent category language, weak packing, unclear product hierarchy, and slow response across mixed orders",
    commercialAngle: "multi-category sourcing helps buyers reduce supplier management time and build a more complete repair-parts catalog",
    relatedProducts: "iPhone compatible screens, iPhone compatible batteries, Samsung compatible screens, Samsung compatible batteries, iPad parts, and MacBook parts"
  }
];

function getConfig(slug: string) {
  return configs.find((config) => config.slug === slug);
}

export function getSeoArticle(slug: string): SeoArticleSection[] {
  const config = getConfig(slug);
  if (!config) return [];

  return [
    {
      heading: `Choosing a ${config.keyword} for professional B2B supply`,
      body: `Choosing a ${config.keyword} is not only a matter of finding a low price. For ${config.buyer}, the supplier must understand how repair orders move, how wholesale buyers compare product grades, and how distributors protect their reputation in different markets. DAKOLAS is built around professional mobile parts supply, with communication that helps buyers compare models, confirm availability, and prepare quote requests efficiently. The goal is to support repeat purchasing rather than one-time catalog browsing, so the buying process stays practical for teams that handle many SKUs, urgent repairs, and mixed export shipments.`
    },
    {
      heading: "Product focus and category fit",
      body: `The core focus for this page is ${config.productFocus}. This matters because buyers often need several grades or related product families in the same purchasing cycle. A repair shop may need a small urgent order, while a wholesaler may need a mixed-model carton that can serve many downstream customers. DAKOLAS keeps the product discussion organized around model series, quality line, intended market, and target order quantity. That structure makes it easier for buyers to request the correct option and reduces confusion before quotation, packing, and shipment planning begin.`
    },
    {
      heading: "Clear quality lines for quotation",
      body: `DAKOLAS separates quality conversations into practical lines: ${config.qualityLines}. Clear line naming helps international buyers avoid vague terms and compare options more accurately. When a buyer sends an inquiry, the most useful details include target model, expected quality level, order quantity, destination, and whether the order is for premium repair, price-sensitive resale, or a balanced wholesale program. This approach also helps the sales team respond with better alternatives when a specific model is temporarily limited or when another quality line better matches the buyer's market.`
    },
    {
      heading: "Who the page is designed for",
      body: `This purchasing path is especially relevant for ${config.buyer}. These customers usually need more than a simple product name. They need availability, quality comparison, MOQ guidance, packing information, lead time, and after-sales terms. A small repair business may focus on reliable daily stock, while a distributor may need stable reorder planning across several product families. DAKOLAS uses B2B language and inquiry handling so buyers can share detailed requirements and receive a response that supports business decisions rather than casual retail browsing.`
    },
    {
      heading: "Common purchase scenarios",
      body: `Typical purchase scenarios include ${config.purchaseUse}. Each scenario needs a slightly different quoting style. A repair-chain order may prioritize fast-moving models and consistent packaging. A distributor order may require model spread, price tiers, and market-specific quality positioning. A wholesale buyer may ask for repeatable carton quantities and clear warranty handling. DAKOLAS encourages buyers to send model lists and target quantities because detailed inquiries make it easier to quote accurately, reserve suitable stock, and prepare shipment schedules without unnecessary back-and-forth communication.`
    },
    {
      heading: "Quality control before shipment",
      body: `Quality control is central to the DAKOLAS supplier model. For this product category, the inspection focus includes ${config.qcFocus}. These steps help reduce avoidable after-sales issues and give B2B buyers more confidence before goods leave the warehouse. The purpose of testing is not to create exaggerated claims; it is to support practical repair businesses that need working parts, stable packing, and clear responsibility when a warranty case appears. Every DAKOLAS warranty statement remains 12 months, and the company avoids claims that imply official device-brand authorization.`
    },
    {
      heading: "Market demand and buyer expectations",
      body: `In the global repair-parts market, ${config.marketNeed}. Buyers compare suppliers not only by unit price but also by communication speed, quality consistency, packaging reliability, and ability to support repeat orders. A supplier that understands international repair channels can help buyers reduce sourcing friction and prepare better offers for their own customers. DAKOLAS positions its product pages around practical procurement details because professional buyers often need to make quick decisions while still protecting long-term customer trust.`
    },
    {
      heading: "Reducing sourcing risk",
      body: `The main sourcing risks include ${config.supplyRisk}. These problems are costly because they can delay repairs, create disputes, and damage a distributor's relationship with downstream customers. DAKOLAS reduces risk by keeping product categories structured, encouraging clear model confirmation, using defined inspection steps, and communicating warranty expectations before shipment. Buyers should always confirm quality line, packing method, quantity, and lead time before approving an order, especially when the destination market has strong demand changes or strict resale expectations.`
    },
    {
      heading: "Why stable supply matters",
      body: `Stable supply is one of the strongest advantages for B2B buyers. Repair shops cannot pause customer work because a screen or battery line disappears without notice. Wholesalers need enough continuity to build price lists, serve repeat customers, and avoid constantly replacing suppliers. DAKOLAS supports buyers by organizing product availability around model series and quality lines, then communicating realistic options. This is especially useful when buyers need several models in the same shipment or when they are preparing inventory for a regional repair season.`
    },
    {
      heading: "Fast delivery and export packing",
      body: `Fast delivery only works when goods are packed and prepared correctly. DAKOLAS focuses on export-ready handling so buyers can receive parts in better condition and with clearer carton organization. For international orders, packing quality matters almost as much as product selection because fragile screens, batteries, and repair components must survive handling across warehouses, couriers, and customs processes. Buyers should provide destination country, preferred shipping method, and urgent timeline requirements during inquiry so DAKOLAS can give more useful delivery guidance.`
    },
    {
      heading: "Commercial value for wholesalers and distributors",
      body: `From a commercial point of view, ${config.commercialAngle}. Professional buyers need to protect margin while also reducing after-sales noise. A low initial price is not useful if the order arrives with unclear grades, mixed models, or inconsistent packing. DAKOLAS aims to support a more professional purchasing process: identify the product line, confirm the model list, discuss order quantity, clarify delivery, and document the warranty term. That process helps buyers build repeatable supply programs instead of starting from zero with every purchase.`
    },
    {
      heading: "How to prepare an inquiry",
      body: `A strong inquiry should include the exact product category, model series, target quality line, order quantity, destination country, and any special packing requirements. Buyers can also mention whether the order is for repair-shop use, wholesale resale, distributor stocking, or market testing. This information helps DAKOLAS recommend suitable lines and avoid quoting products that do not match the buyer's target market. For example, premium repair shops may prioritize display experience, while price-sensitive wholesale customers may need a practical balance between quality and cost.`
    },
    {
      heading: "Model coverage and series planning",
      body: `Model coverage is important because repair demand rarely sits in one generation. Buyers may need current IP series models for premium repairs while still carrying previous generations for everyday service. Samsung compatible demand can also vary by region, with A Series, S Series, and Note Series moving differently across markets. DAKOLAS recommends sending a model-by-model list rather than a broad product request. A detailed list makes it easier to check stock, suggest alternatives, and organize a mixed order that fits the buyer's real customer demand.`
    },
    {
      heading: "Warranty and after-sales communication",
      body: `All DAKOLAS warranties are 12 months. For B2B buyers, warranty value depends on clear communication as much as the warranty period itself. Buyers should keep order records, product line details, and shipment information so any after-sales case can be handled efficiently. DAKOLAS does not claim to be authorized by Apple, Samsung, or any device brand. The business focuses on compatible replacement parts for professional repair and wholesale use, with responsible language that helps buyers communicate clearly in their own markets.`
    },
    {
      heading: "Related product sourcing",
      body: `Many buyers combine this category with related products such as ${config.relatedProducts}. Multi-category sourcing can reduce communication time and help distributors build more complete catalogs. It also allows repair shops to plan common replacement parts in one inquiry, especially when screens and batteries are often ordered together. DAKOLAS keeps related categories connected through the website so buyers can move from one product page to another and still use the same quote request process for a consolidated order.`
    },
    {
      heading: "Why DAKOLAS fits international buyers",
      body: `International buyers need a supplier that communicates in a way procurement teams can use. That means clear product names, practical descriptions, realistic delivery discussion, and structured forms that capture the information needed for a quote. DAKOLAS uses a clean B2B website rather than a marketplace-style layout because the target customer is not browsing casually. The target customer is preparing a purchase decision, comparing product lines, checking supply confidence, and looking for a partner that can support repeat orders over time.`
    },
    {
      heading: "Quality language without overclaiming",
      body: `Professional SEO content should help buyers understand the supply offer without making unsafe claims. DAKOLAS uses terms such as iPhone compatible and Samsung compatible where appropriate, and avoids device-brand logos or authorization statements. Quality language focuses on testing, product-line clarity, packing, stable supply, fast delivery, and 12 months warranty. This is important for trust because international buyers do not want exaggerated promises; they want a supplier that explains what can be supplied, how it is checked, and how an inquiry will be handled.`
    },
    {
      heading: "Core Web Vitals and buyer experience",
      body: `A premium B2B website should also be fast and easy to use. Buyers may open the site from trade shows, messaging apps, mobile devices, or office networks in different countries. DAKOLAS uses optimized images, clear page structure, mobile-responsive forms, and direct WhatsApp access so procurement visitors can act quickly. Good website performance supports SEO, but it also supports sales because buyers are less likely to abandon a page when the hero loads fast, product hierarchy is clear, and the quote path is always close.`
    },
    {
      heading: "What makes this page different",
      body: `This page is written for the specific search intent behind ${config.keyword}. It is not a generic product catalog page. It explains buyer needs, product organization, quality control, wholesale planning, market risk, export packing, quote preparation, related products, and warranty expectations. That depth gives search engines more context and gives real buyers more confidence. DAKOLAS can use this page as a landing point for SEO, advertising, trade inquiries, and direct sales conversations with customers who already know what kind of supplier they need.`
    },
    {
      heading: "Next step for buyers",
      body: `The best next step is to send DAKOLAS a quote request with a clear product list. Include model names, target product line, estimated quantity, destination country, and preferred communication method. If the order includes multiple categories, mention the full list so the team can review availability together. DAKOLAS will respond with practical supply information for professional buyers. The website also provides direct WhatsApp and email access, making it simple for repair shops, wholesalers, and distributors to start a sourcing conversation quickly.`
    }
  ];
}
