import type { Metadata } from "next";
import { CustomerInquiryWorkflow } from "@/components/CustomerInquiryWorkflow";
import { InquiryForm } from "@/components/InquiryForm";
import { LeadCTAGroup } from "@/components/LeadCTAGroup";
import { TrustBadges } from "@/components/TrustBadges";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description: "Contact DAKOLAS for mobile parts quotation, wholesale supply, and distributor inquiries.",
  path: "/contact/"
});

export default function ContactPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">Contact DAKOLAS Sales</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#40516a]">
              Send your model list, target quality, order quantity, and destination country. DAKOLAS will reply with product options, sample availability, lead time, and quotation details.
            </p>
            <LeadCTAGroup quoteHref="#quote-form" className="mt-8" />
            <div className="mt-5 grid gap-3">
              <a href={siteConfig.whatsappHref} className="focus-ring rounded-md bg-[#25d366] px-5 py-3 text-center text-sm font-bold text-white">
                WhatsApp Sales
              </a>
              <a href={`mailto:${siteConfig.email}`} className="focus-ring rounded-md bg-[#0756b8] px-5 py-3 text-center text-sm font-bold text-white">
                Email Sales
              </a>
            </div>
            <div className="mt-8">
              <TrustBadges compact />
            </div>
            <div className="mt-8">
              <CustomerInquiryWorkflow compact />
            </div>
          </div>
          <div id="quote-form">
            <InquiryForm productInterest="mobile parts wholesale inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
