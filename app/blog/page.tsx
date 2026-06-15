import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "DAKOLAS blog for mobile repair parts sourcing, quality control, wholesale screens, and battery buying guidance.",
  path: "/blog/"
});

const posts = [
  "How repair shops evaluate compatible screen quality",
  "What wholesalers should ask before ordering batteries",
  "Why 100% testing matters before shipment",
  "Choosing OLED, Soft OLED, Hard OLED, and INCELL product lines"
];

export default function BlogPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="Blog" description="Sourcing guidance for repair shops, wholesalers, and distributors buying mobile parts worldwide." />
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post} className="rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-extrabold text-[#071f45]">{post}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">
                  Practical B2B notes from DAKOLAS for improving quality decisions, supply planning, and inquiry preparation.
                </p>
                <Link href="/contact/" className="focus-ring mt-5 inline-flex rounded-md border border-[#b9cee8] px-4 py-2 text-sm font-bold text-[#073b84]">
                  Ask DAKOLAS
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
