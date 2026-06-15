import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Warranty Policy",
  description: "DAKOLAS warranty policy for mobile parts: all warranty statements are 12 months with clear B2B after-sales communication.",
  path: "/warranty-policy/"
});

const warrantyItems = [
  ["Warranty Period", "All DAKOLAS warranty statements are 12 months."],
  ["Scope", "Warranty communication is handled for compatible replacement parts supplied by DAKOLAS for professional repair and wholesale use."],
  ["Buyer Records", "Buyers should keep model list, product line, order quantity, shipment record, and issue evidence for efficient review."],
  ["After-Sales Handling", "DAKOLAS supports practical B2B communication for repair shops, wholesalers, and distributors."],
  ["Important Note", "DAKOLAS supplies compatible parts and does not claim authorization from any device brand."]
];

export default function WarrantyPolicyPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Warranty Policy" }]} />
          <h1 className="text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">Warranty Policy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#40516a]">
            DAKOLAS provides clear 12 months warranty language for professional B2B buyers sourcing mobile repair parts.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Warranty Details" description="Use these notes when preparing a wholesale order or after-sales request." />
          <div className="grid gap-4 md:grid-cols-2">
            {warrantyItems.map(([title, description]) => (
              <article key={title} className="rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-extrabold text-[#071f45]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <QuoteRequestSection productInterest="warranty and wholesale mobile parts inquiry" />
      <CTASection />
    </>
  );
}
