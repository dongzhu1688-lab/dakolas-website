import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Samsung Compatible Screens",
  description: "Samsung compatible replacement screens for repair shops, wholesalers, and distributors worldwide.",
  path: "/samsung-screens/"
});

export default function SamsungScreensPage() {
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
      <QuoteRequestSection productInterest="Samsung compatible screens" />
      <CTASection />
    </>
  );
}
