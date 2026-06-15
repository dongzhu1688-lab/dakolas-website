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
  title: "Samsung Compatible Batteries",
  description: "Samsung compatible replacement batteries with testing, wholesale supply, and 12 months warranty.",
  path: "/samsung-batteries/"
});

export default function SamsungBatteriesPage() {
  const category = getCategory("samsung-batteries");

  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading
            title="Samsung Compatible Batteries"
            description="Replacement battery supply for repair shops and wholesale buyers that need consistent packaging, capacity checks, and delivery support."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {["A Series Batteries", "S Series Batteries", "Note Series Batteries"].map((product) => (
              <ProductCard key={product} name={product} category="Samsung compatible battery" />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Samsung Battery Series" description="Dedicated Samsung compatible battery pages from S20 to S25 Series." />
          {category ? <ProductSeriesGrid products={category.products} /> : null}
        </div>
      </section>
      <QuoteRequestSection productInterest="Samsung compatible batteries" />
      <FAQSection title="Samsung Compatible Batteries FAQ" />
      <CTASection />
    </>
  );
}
