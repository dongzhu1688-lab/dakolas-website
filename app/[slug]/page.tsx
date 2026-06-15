import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryCard } from "@/components/CategoryCard";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { FeatureCard } from "@/components/FeatureCard";
import { LeadCTAGroup } from "@/components/LeadCTAGroup";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { getSeoArticle } from "@/lib/seo-content";
import { categories, sellingPoints, seoLandingPages } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";
import { countryPages, productLinePages } from "@/lib/seo-expansion";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seoLandingPages.find((item) => item.slug === slug);
  if (!page) return {};

  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}/`
  });
}

export default async function SeoLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = seoLandingPages.find((item) => item.slug === slug);
  if (!page) notFound();
  const article = getSeoArticle(page.slug);

  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: page.h1 }]} />
          <h1 className="text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">{page.h1}</h1>
          <p className="mt-6 mb-10 max-w-3xl text-lg leading-8 text-[#40516a]">{page.description}</p>
          <LeadCTAGroup quoteHref="#quote" className="mb-10" />
          <div className="grid gap-5 md:grid-cols-3">
            {sellingPoints.map((point, index) => (
              <FeatureCard
                key={point}
                title={point}
                description="DAKOLAS supports professional repair and wholesale buyers with consistent B2B communication and export-ready supply."
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <SectionHeading title={`${page.h1} Guide`} description="Long-form procurement guidance for global repair shops, wholesalers, and distributors comparing professional mobile parts suppliers." />
            <div className="grid gap-8">
              {article.map((section) => (
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
          <SectionHeading title="Related Product Categories" description="Explore the most relevant DAKOLAS product categories for your market." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.href} {...category} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Related Sourcing Hubs" description="Continue researching product lines, country supply pages, and B2B buying guides." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {productLinePages.slice(0, 6).map((line) => (
              <Link key={line.slug} href={`/product-lines/${line.slug}/`} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                {line.name}
              </Link>
            ))}
            {countryPages.slice(0, 3).map((country) => (
              <Link key={country.slug} href={`/countries/${country.slug}/`} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                {country.country} Supply Page
              </Link>
            ))}
            <Link href="/blog/" className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
              Blog Guides
            </Link>
          </div>
        </div>
      </section>
      <div id="quote">
        <QuoteRequestSection productInterest={page.h1} />
      </div>
      <FAQSection title={`${page.h1} FAQ`} />
      <CTASection />
    </>
  );
}
