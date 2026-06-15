import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";

export function QuoteRequestSection({ productInterest = "mobile parts" }: { productInterest?: string }) {
  return (
    <section className="section bg-[#f6fbff]">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            title="Request a Wholesale Quote"
            description={`Share your target models, quantity, destination country, and preferred quality grade for ${productInterest}. DAKOLAS will reply with availability, packing options, lead time, and quotation details.`}
          />
          <div className="grid gap-3 text-sm leading-6 text-[#5e6b7e]">
            <p>For faster handling, include model series, quality line, MOQ target, and whether the order is for repair shops, wholesale resale, or distributor stock.</p>
            <p>All DAKOLAS warranty terms are 12 months and all goods follow defined inspection steps before shipment.</p>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}
