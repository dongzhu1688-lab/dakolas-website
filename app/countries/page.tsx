import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { countryPages } from "@/lib/seo-expansion";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Country Supply Pages",
  description: "DAKOLAS country pages for mobile phone parts buyers in the UK, Australia, Germany, France, and Italy.",
  path: "/countries/"
});

export default function CountriesPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Countries" }]} />
          <h1 className="text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">Country Supply Pages</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#40516a]">
            Localized sourcing pages for repair shops, wholesalers, distributors, and importers buying DAKOLAS mobile phone parts.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Available Country Pages" description="Select your market to review relevant product categories, packing notes, and quote preparation guidance." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {countryPages.map((page) => (
              <Link key={page.slug} href={`/countries/${page.slug}/`} className="focus-ring rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8db9ec] hover:shadow-lg">
                <p className="text-sm font-bold uppercase tracking-wide text-[#5e6b7e]">{page.country}</p>
                <h2 className="mt-3 text-2xl font-extrabold text-[#071f45]">{page.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
