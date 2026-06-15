import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { getProductLinePath, productLinePages } from "@/lib/seo-expansion";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Product Lines",
  description: "Browse DAKOLAS Premium OLED, Soft OLED, Hard OLED, INCELL, Premium Battery, and Standard Battery product line landing pages.",
  path: "/product-lines/"
});

export default function ProductLinesPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Product Lines" }]} />
          <h1 className="text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">DAKOLAS Product Lines</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#40516a]">
            Compare screen and battery quality lines for professional repair shops, wholesalers, and distributors.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Screen and Battery Lines" description="Each product line links to dedicated model-level pages from 6 Series to 16 Series." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productLinePages.map((line) => (
              <Link key={line.slug} href={getProductLinePath(line)} className="focus-ring rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8db9ec] hover:shadow-lg">
                <p className="text-sm font-bold uppercase tracking-wide text-[#5e6b7e]">{line.kind === "screen" ? "Screen Line" : "Battery Line"}</p>
                <h2 className="mt-3 text-2xl font-extrabold text-[#071f45]">{line.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{line.description}</p>
                <span className="mt-5 inline-flex rounded-md bg-[#eaf4ff] px-4 py-2 text-sm font-bold text-[#073b84]">
                  View Landing Page
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
