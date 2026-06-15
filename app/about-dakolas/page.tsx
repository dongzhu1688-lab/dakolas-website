import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, sellingPoints } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About DAKOLAS",
  description: "Learn about DAKOLAS, a professional mobile parts supplier for repair shops, wholesalers, and distributors worldwide.",
  path: "/about-dakolas/"
});

export default function AboutDakolasPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About DAKOLAS" }]} />
          <h1 className="text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">About DAKOLAS</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#40516a]">
            DAKOLAS is a professional mobile parts supplier focused on compatible screens, batteries, tablet parts, laptop parts, and wholesale repair supply for global B2B buyers.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Built for Professional Buyers" description="Repair shops, wholesalers, and distributors need more than a simple catalog. They need quality clarity, stable model coverage, fast communication, and responsible warranty handling." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {sellingPoints.map((point, index) => (
              <FeatureCard key={point} title={point} description="DAKOLAS supports practical B2B sourcing with tested parts, export packing, and clear quote handling." index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="Product Categories" description="Explore the DAKOLAS categories most relevant to your sourcing program." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.href} href={category.href} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <QuoteRequestSection productInterest="DAKOLAS wholesale mobile parts supply" />
      <CTASection />
    </>
  );
}
