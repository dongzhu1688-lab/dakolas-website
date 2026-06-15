import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "MacBook Compatible Parts",
  description: "MacBook compatible repair parts including screens, batteries, keyboard parts, chargers, and accessories.",
  path: "/macbook-parts/"
});

export default function MacBookPartsPage() {
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
      <QuoteRequestSection productInterest="MacBook compatible parts" />
      <CTASection />
    </>
  );
}
