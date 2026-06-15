import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "iPad Compatible Parts",
  description: "DAKOLAS supplies iPad compatible screens, batteries, charging parts, flex cables, and repair components.",
  path: "/ipad-parts/"
});

export default function IpadPartsPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="iPad Compatible Parts" description="Tablet repair parts for service centers, repair shops, and wholesale distributors." />
          <div className="grid gap-5 md:grid-cols-4">
            {["Tablet Screens", "Tablet Batteries", "Charging Parts", "Flex Cables"].map((product) => (
              <ProductCard key={product} name={product} category="iPad compatible repair part" />
            ))}
          </div>
        </div>
      </section>
      <QuoteRequestSection productInterest="iPad compatible parts" />
      <CTASection />
    </>
  );
}
