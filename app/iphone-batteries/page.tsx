import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { ProductSeriesGrid } from "@/components/ProductSeriesGrid";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { getCategory } from "@/lib/product-database";
import { iphoneBatteryModelPages, productLinePages } from "@/lib/seo-expansion";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "iPhone Compatible Batteries",
  description: "DAKOLAS Premium Battery and Standard Battery lines for iPhone compatible repair and wholesale customers.",
  path: "/iphone-batteries/"
});

export default function IphoneBatteriesPage() {
  const category = getCategory("iphone-batteries");
  const batteryLines = productLinePages.filter((line) => line.kind === "battery");
  const featuredModelPages = iphoneBatteryModelPages.filter((page) => page.seriesSlug === "16-series").slice(0, 8);

  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading
            title="iPhone Compatible Batteries"
            description="Battery supply for repair shops, wholesalers, and distributors, with capacity testing and 12 months warranty."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {batteryLines.map((line) => (
              <Link key={line.slug} href={`/product-lines/${line.slug}/`} className="focus-ring rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm hover:border-[#0756b8]">
                <p className="text-sm font-bold uppercase tracking-wide text-[#5e6b7e]">Battery Line</p>
                <h2 className="mt-3 text-xl font-extrabold text-[#071f45]">{line.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{line.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Battery Series" description="Select the series you need and send your target models for quotation." />
          {category ? <ProductSeriesGrid products={category.products} /> : null}
        </div>
      </section>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="Featured Model-Level Battery Pages" description="Browse dedicated battery pages by model and battery line for deeper wholesale discovery." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredModelPages.map((page) => (
              <Link key={page.path} href={page.path} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                {page.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <QuoteRequestSection productInterest="iPhone compatible batteries" />
      <FAQSection title="iPhone Compatible Batteries FAQ" />
      <CTASection />
    </>
  );
}
