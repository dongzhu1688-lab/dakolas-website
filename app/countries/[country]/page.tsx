import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, sellingPoints } from "@/lib/site";
import { countryPages, getCountryPage, getCountrySections, productLinePages } from "@/lib/seo-expansion";
import { createMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ country: string }>;
};

const featureDescriptions = [
  "Premium product options for local repair and wholesale positioning.",
  "Defined checks before export shipment support professional procurement.",
  "Category and model pages help buyers prepare repeat supply programs.",
  "Export-ready packing supports international delivery planning.",
  "Every DAKOLAS warranty statement is 12 months."
];

export function generateStaticParams() {
  return countryPages.map((page) => ({ country: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const page = getCountryPage(country);
  if (!page) return {};

  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/countries/${page.slug}/`
  });
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const page = getCountryPage(country);
  if (!page) notFound();
  const sections = getCountrySections(page);

  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Countries", href: "/countries/" }, { label: page.country }]} />
          <p className="text-sm font-bold uppercase tracking-wide text-[#0756b8]">Country Supply Page</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#40516a]">{page.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/products/" className="focus-ring rounded-md bg-[#0756b8] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#073b84]">
              View Products
            </Link>
            <Link href="/contact/" className="focus-ring rounded-md border border-[#b9cee8] bg-white px-5 py-3 text-center text-sm font-bold text-[#073b84] hover:border-[#0756b8]">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <div className="grid gap-8">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-extrabold text-[#071f45]">{section.heading}</h2>
                  <p className="mt-4 text-base leading-8 text-[#40516a]">{section.body}</p>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title={`Product Categories for ${page.country}`} description="Use these internal links to move from country research to product selection." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category.href} href={category.href} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Related Product Lines" description="Compare DAKOLAS screen and battery lines before requesting a country-specific quotation." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {productLinePages.map((line) => (
              <Link key={line.slug} href={`/product-lines/${line.slug}/`} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                {line.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="Why Country Buyers Source from DAKOLAS" description="Professional mobile parts supply for international repair and wholesale markets." align="center" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {sellingPoints.map((point, index) => (
              <FeatureCard key={point} title={point} description={featureDescriptions[index]} index={index} />
            ))}
          </div>
        </div>
      </section>

      <QuoteRequestSection productInterest={`${page.country} mobile phone parts supply`} />
      <CTASection />
    </>
  );
}
