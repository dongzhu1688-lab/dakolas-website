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
  title: "MacBook Compatible Parts",
  description: "MacBook compatible repair parts including screens, batteries, keyboard parts, chargers, and accessories.",
  path: "/macbook-parts/"
});

export default function MacBookPartsPage() {
  const category = getCategory("macbook-parts");

  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="MacBook Compatible Parts" description="Laptop repair parts for professional repair teams and B2B replacement parts programs." />
          <div className="grid gap-5 md:grid-cols-4">
            {["Laptop Screens", "Laptop Batteries", "Keyboard Parts", "Chargers & Accessories"].map((product) => (
              <ProductCard key={product} name={product} category="MacBook compatible repair part" />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Dedicated MacBook Parts Page" description="Open the product detail page for gallery, structure, QC, packaging, and application images." />
          {category ? <ProductSeriesGrid products={category.products} /> : null}
        </div>
      </section>
      <QuoteRequestSection productInterest="MacBook compatible parts" />
      <FAQSection title="MacBook Compatible Parts FAQ" />
      <CTASection />
    </>
  );
}
