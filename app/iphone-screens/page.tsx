import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { iphoneScreenLines, iphoneSeries } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "iPhone Compatible Screens",
  description: "DAKOLAS Premium OLED, Soft OLED, Hard OLED, and INCELL screens for iPhone compatible repair and wholesale supply.",
  path: "/iphone-screens/"
});

export default function IphoneScreensPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading
            title="iPhone Compatible Screens"
            description="Professional display supply for repair shops and distributors. DAKOLAS is not Apple authorized and supplies compatible replacement parts for repair use."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {iphoneScreenLines.map((line) => (
              <ProductCard key={line} name={line} category="Product line" />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Available Series" description="Ask DAKOLAS for model availability, quality grade, MOQ, and lead time." />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {iphoneSeries.map((series) => (
              <a key={series} href="/contact/" className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-5 py-4 text-center font-bold text-[#073b84] hover:border-[#0756b8]">
                {series}
              </a>
            ))}
          </div>
        </div>
      </section>
      <QuoteRequestSection productInterest="iPhone compatible screens" />
      <CTASection />
    </>
  );
}
