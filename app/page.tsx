import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, featuredProducts, productHierarchy, sellingPoints } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Professional Mobile Parts Supplier",
  description:
    "DAKOLAS supplies premium screens, batteries, iPad parts, and MacBook parts for repair shops, wholesalers, and distributors worldwide."
});

const featureDescriptions = [
  "Carefully selected product lines for repair businesses that need consistent display, battery, and component performance.",
  "Screens, batteries, and parts are checked through defined QC steps before shipment.",
  "Wholesale supply planning for repair shops, distributors, and market-focused buyers.",
  "Export-ready packing and shipping support for international customers.",
  "All DAKOLAS warranties are 12 months, with professional after-sales handling."
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Core Product Hierarchy"
            description="DAKOLAS organizes fast-moving replacement parts into clear quality lines, helping wholesalers and repair networks quote accurately and reorder with confidence."
            align="center"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {productHierarchy.map((group) => (
              <article key={group.title} className="rounded-lg border border-[#d9e5f4] bg-white p-7 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#071f45]">{group.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#5e6b7e]">
                      Structured product lines for B2B buyers who need consistent quality grade selection, stable packing, and repeatable quotation handling.
                    </p>
                  </div>
                  <Link href={group.href} className="focus-ring shrink-0 rounded-md bg-[#0756b8] px-4 py-3 text-sm font-bold text-white hover:bg-[#073b84]">
                    View Lines
                  </Link>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.lines.map((line) => (
                    <div key={line} className="rounded-md border border-[#d9e5f4] bg-[#f6fbff] px-4 py-4 font-bold text-[#073b84]">
                      {line}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight bg-[#071f45] text-white">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold">Full Mobile Parts Supply</h2>
              <p className="mt-4 leading-7 text-[#c9d8ed]">
                Beyond iPhone compatible screens and batteries, DAKOLAS supports Samsung compatible screens, Samsung compatible batteries, iPad parts, and MacBook parts for international repair channels.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard key={category.href} {...category} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading title="Featured Products" description="Popular premium OLED and battery models for fast-moving wholesale demand." />
            <Link href="/products/" className="focus-ring inline-flex rounded-md border border-[#b9cee8] bg-white px-4 py-3 text-sm font-bold text-[#073b84] hover:border-[#0756b8]">
              View All Products
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product} name={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Why Choose DAKOLAS"
            description="Built for B2B buyers who care about quality control, supply stability, and clean after-sales communication."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {sellingPoints.map((point, index) => (
              <FeatureCard key={point} title={point} description={featureDescriptions[index]} index={index} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
