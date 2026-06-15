import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Factory",
  description: "See DAKOLAS production, quality control, warehouse, packing, and global shipping workflow.",
  path: "/factory/"
});

const sections = [
  "Production Line",
  "QC Department",
  "Warehouse",
  "Packing Area",
  "Global Shipping"
];

export default function FactoryPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              title="Factory"
              description="DAKOLAS supports global repair and wholesale buyers with organized production, inspection, packing, and shipping workflows."
            />
          </div>
          <Image
            src="/images/hero-parts-1280.webp"
            alt="DAKOLAS electronics parts warehouse and QC bench"
            width={1280}
            height={720}
            sizes="(min-width: 1024px) 54vw, 92vw"
            className="aspect-[16/10] rounded-2xl border border-[#d9e5f4] object-cover shadow-xl shadow-[#0756b8]/10"
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-5">
            {sections.map((item) => (
              <article key={item} className="rounded-lg border border-[#d9e5f4] bg-white p-6">
                <h2 className="text-lg font-extrabold text-[#071f45]">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">
                  Structured processes help DAKOLAS prepare stable supply for repair shops, wholesalers, and distributors.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
