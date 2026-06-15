import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { LeadCTAGroup } from "@/components/LeadCTAGroup";
import { SectionHeading } from "@/components/SectionHeading";
import { productLinePages } from "@/lib/seo-expansion";
import { sellingPoints } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Why DAKOLAS",
  description: "Why repair shops, wholesalers, and distributors choose DAKOLAS for tested mobile parts, stable supply, fast delivery, and 12 months warranty.",
  path: "/why-dakolas/"
});

const reasons = [
  "Clear product hierarchy by category, series, model, and product line.",
  "Dedicated quote paths for repair shops, wholesalers, distributors, and importers.",
  "Quality-control language focused on testing, packing, and after-sales clarity.",
  "Static SEO architecture that helps buyers find exact model-level product pages."
];

export default function WhyDakolasPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Why DAKOLAS" }]} />
          <h1 className="text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">Why DAKOLAS</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#40516a]">
            DAKOLAS is structured for B2B lead generation and professional mobile parts procurement, from product discovery to quotation and sample request.
          </p>
          <LeadCTAGroup quoteHref="/contact/?intent=quote" className="mt-8" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Why Buyers Choose DAKOLAS" description="The site is built around the buying questions repair and wholesale customers ask before placing an order." />
          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason} className="rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-extrabold text-[#071f45]">{reason}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">This reduces sourcing friction and helps qualified buyers send clearer inquiries.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="Core Buyer Benefits" description="DAKOLAS combines product clarity, QC, logistics support, and conversion-focused communication." align="center" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {sellingPoints.map((point, index) => (
              <FeatureCard key={point} title={point} description="Designed to support B2B sourcing decisions and repeat wholesale orders." index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Relevant Product Lines" description="Compare product lines before requesting quotation or samples." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {productLinePages.map((line) => (
              <Link key={line.slug} href={`/product-lines/${line.slug}/`} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                {line.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
