import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { LeadCTAGroup } from "@/components/LeadCTAGroup";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadges } from "@/components/TrustBadges";
import { getProductImagePage, getProductImagePath, getRelatedProductImagePages, productImagePages } from "@/lib/product-image-pages";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productImagePages.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductImagePage(slug);
  if (!page) return {};

  return createMetadata({
    title: page.metadataTitle,
    description: page.metadataDescription,
    path: getProductImagePath(page)
  });
}

export default async function ProductImageDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getProductImagePage(slug);
  if (!page) notFound();

  const relatedPages = getRelatedProductImagePages(page);
  const pageUrl = new URL(getProductImagePath(page), siteConfig.url).toString();
  const imageUrl = new URL(page.imageSrc, siteConfig.url).toString();
  const imageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: page.title,
    description: page.description,
    contentUrl: imageUrl,
    url: pageUrl,
    caption: page.imageAlt,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    copyrightHolder: {
      "@type": "Organization",
      name: siteConfig.name
    },
    about: page.productName
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageJsonLd) }} />
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Product Images", href: "/product-images/" },
              { label: page.title }
            ]}
          />
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#0756b8]">{page.categoryLabel}</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">{page.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#40516a]">{page.description}</p>
              <LeadCTAGroup quoteHref="#quote" className="mt-8" />
            </div>
            <div className="rounded-2xl border border-[#d9e5f4] bg-white p-7 shadow-xl shadow-[#0756b8]/10">
              <p className="text-sm font-bold uppercase tracking-wide text-[#5e6b7e]">Image Reference</p>
              <dl className="mt-6 grid gap-3">
                {[
                  { label: "Product", value: page.productName },
                  { label: "Image Type", value: page.imageType },
                  { label: "Buyer Use", value: page.buyerUse },
                  { label: "Warranty", value: "12 Months Warranty" }
                ].map((item) => (
                  <div key={item.label} className="rounded-md bg-[#f6fbff] p-4">
                    <dt className="text-xs font-bold uppercase tracking-wide text-[#5e6b7e]">{item.label}</dt>
                    <dd className="mt-2 text-sm font-bold leading-6 text-[#073b84]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <figure className="overflow-hidden rounded-lg border border-[#d9e5f4] bg-white shadow-sm">
            <div className="aspect-[16/10] bg-[#f6fbff]">
              <Image
                src={page.imageSrc}
                alt={page.imageAlt}
                width={1280}
                height={800}
                sizes="(min-width: 1024px) 1120px, 100vw"
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="border-t border-[#d9e5f4] p-6">
              <h2 className="text-2xl font-extrabold text-[#071f45]">{page.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{page.imageAlt}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section bg-[#f6fbff]">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading title="How Buyers Use This Image" description={page.buyerUse} />
            <TrustBadges compact />
          </div>
          <div>
            <SectionHeading title="Image Notes" description="Practical sourcing notes for repair shops, wholesalers, distributors, and importers." />
            <div className="grid gap-4 md:grid-cols-3">
              {page.imageNotes.map((note) => (
                <article key={note} className="rounded-lg border border-[#d9e5f4] bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-extrabold text-[#071f45]">{note}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">
                    Use this reference when sending model lists, sample requests, wholesale price requests, and shipment requirements to DAKOLAS.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeading title="Related Source Page" description="Open the matching product, factory, QC, or shipping page for deeper sourcing context." />
              <Link href={page.sourceHref} className="focus-ring inline-flex rounded-md bg-[#0756b8] px-5 py-3 text-sm font-bold text-white hover:bg-[#073b84]">
                View Source Page
              </Link>
            </div>
            <div>
              <SectionHeading title="Related Image Pages" description="Continue browsing image pages for the same product or category." />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPages.map((related) => (
                  <Link key={related.slug} href={getProductImagePath(related)} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                    {related.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="quote">
        <QuoteRequestSection productInterest={page.title} />
      </div>
      <FAQSection title={`${page.shortTitle} FAQ`} />
      <CTASection />
    </>
  );
}
