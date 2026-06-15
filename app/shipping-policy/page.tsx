import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Shipping Policy",
  description: "DAKOLAS shipping policy for wholesale mobile parts, export packing, delivery planning, and international B2B shipments.",
  path: "/shipping-policy/"
});

const shippingItems = [
  ["Export Packing", "DAKOLAS prepares export-ready packing with model labels and carton organization for wholesale shipments."],
  ["Delivery Planning", "Buyers should provide destination country, shipping preference, urgency, and model quantity before quotation."],
  ["Mixed Cartons", "DAKOLAS can discuss mixed category orders for screens, batteries, iPad parts, MacBook parts, and other repair components."],
  ["Lead Time", "Lead time depends on model availability, quality line, quantity, packing requirements, and shipping method."],
  ["International Buyers", "Repair shops, wholesalers, distributors, and importers can request shipping guidance before confirming an order."]
];

export default function ShippingPolicyPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shipping Policy" }]} />
          <h1 className="text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">Shipping Policy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#40516a]">
            DAKOLAS supports international B2B shipments with export-ready packing, model labeling, and practical delivery communication.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Shipping and Packing Notes" description="Prepare these details before requesting a quote for faster sales handling." />
          <div className="grid gap-4 md:grid-cols-2">
            {shippingItems.map(([title, description]) => (
              <article key={title} className="rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-extrabold text-[#071f45]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <QuoteRequestSection productInterest="shipping and wholesale mobile parts inquiry" />
      <CTASection />
    </>
  );
}
