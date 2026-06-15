import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description: "Contact DAKOLAS for mobile parts quotation, wholesale supply, and distributor inquiries.",
  path: "/contact/"
});

export default function ContactPage() {
  return (
    <section className="section bg-[#f6fbff]">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            title="Contact Us"
            description="Send your model list, target quality, order quantity, and destination country. DAKOLAS will reply with product options and quotation details."
          />
          <div className="grid gap-3">
            <a href={siteConfig.whatsappHref} className="focus-ring rounded-md bg-[#25d366] px-5 py-3 text-center text-sm font-bold text-white">
              WhatsApp
            </a>
            <a href={`mailto:${siteConfig.email}`} className="focus-ring rounded-md bg-[#0756b8] px-5 py-3 text-center text-sm font-bold text-white">
              Email
            </a>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}
