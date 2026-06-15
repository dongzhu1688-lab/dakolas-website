import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { iphoneBatteryLines, iphoneSeries } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "iPhone Compatible Batteries",
  description: "DAKOLAS Premium Battery and Standard Battery lines for iPhone compatible repair and wholesale customers.",
  path: "/iphone-batteries/"
});

export default function IphoneBatteriesPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading
            title="iPhone Compatible Batteries"
            description="Battery supply for repair shops, wholesalers, and distributors, with capacity testing and 12 months warranty."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {iphoneBatteryLines.map((line) => (
              <ProductCard key={line} name={line} category="Battery product line" />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Battery Series" description="Select the series you need and send your target models for quotation." />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {iphoneSeries.map((series) => (
              <a key={series} href="/contact/" className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-5 py-4 text-center font-bold text-[#073b84] hover:border-[#0756b8]">
                {series}
              </a>
            ))}
          </div>
        </div>
      </section>
      <QuoteRequestSection productInterest="iPhone compatible batteries" />
      <CTASection />
    </>
  );
}
