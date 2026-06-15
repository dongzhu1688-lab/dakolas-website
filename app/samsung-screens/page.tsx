import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { ProductCard } from "@/components/ProductCard";
import { ProductSeriesGrid } from "@/components/ProductSeriesGrid";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { getCategory } from "@/lib/product-database";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Samsung Compatible Screens",
  description: "Samsung compatible replacement screens for repair shops, wholesalers, and distributors worldwide.",
  path: "/samsung-screens/"
});

export default function SamsungScreensPage() {
  const category = getCategory("samsung-screens");

  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading
            title="Samsung Compatible Screens"
            description="Stable supply of Samsung compatible replacement displays for B2B repair and distribution channels."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {["A Series Screens", "S Series Screens", "Note Series Screens"].map((product) => (
              <ProductCard key={product} name={product} category="Samsung compatible display" />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Samsung Screen Series" description="Dedicated Samsung compatible screen pages from S20 to S25 Series." />
          {category ? <ProductSeriesGrid products={category.products} /> : null}
        </div>
      </section>
      <QuoteRequestSection productInterest="Samsung compatible screens" />
      <FAQSection title="Samsung Compatible Screens FAQ" />
      <CTASection />
    </>
  );
}
