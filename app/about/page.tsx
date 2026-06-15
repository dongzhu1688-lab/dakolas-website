import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { sellingPoints } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description: "DAKOLAS is a professional mobile parts supplier serving repair shops, wholesalers, and distributors worldwide.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            title="About DAKOLAS"
            description="DAKOLAS focuses on mobile replacement parts for professional repair and wholesale markets. Our core categories include iPhone compatible screens, iPhone compatible batteries, Samsung compatible screens, Samsung compatible batteries, iPad parts, and MacBook parts."
          />
          <div className="rounded-lg border border-[#d9e5f4] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#071f45]">Built for B2B supply</h2>
            <p className="mt-4 leading-7 text-[#5e6b7e]">
              Repair shops and distributors need parts that arrive on time, match requested quality grades, and can be reordered consistently. DAKOLAS keeps communication clear and product handling practical for worldwide customers.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {sellingPoints.map((point) => (
                <div key={point} className="rounded-md bg-[#eaf4ff] px-4 py-3 text-sm font-bold text-[#073b84]">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
