import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { FeatureCard } from "@/components/FeatureCard";
import { LeadCTAGroup } from "@/components/LeadCTAGroup";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductJsonLd } from "@/components/ProductJsonLd";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { getLineProducts, productLinePages, type ProductLineLanding } from "@/lib/seo-expansion";
import { sellingPoints } from "@/lib/site";

const featureDescriptions = [
  "Clear product-line positioning helps buyers match quality to market demand.",
  "Defined checks before shipment support professional repair and wholesale supply.",
  "Model coverage from 6 Series to 16 Series supports repeat reorder planning.",
  "Export-ready packing and quote communication support international delivery.",
  "All DAKOLAS warranty statements remain 12 months."
];

export function ProductLineLandingPage({ line }: { line: ProductLineLanding }) {
  const modelProducts = getLineProducts(line.slug);
  const relatedLines = productLinePages.filter((item) => item.slug !== line.slug && item.kind === line.kind);

  return (
    <>
      <ProductJsonLd
        name={line.title}
        description={line.description}
        url={`/product-lines/${line.slug}/`}
        category={line.categoryTitle}
      />
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Product Lines", href: "/product-lines/" },
              { label: line.name }
            ]}
          />
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#0756b8]">DAKOLAS Product Line</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">{line.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#40516a]">{line.description}</p>
              <div className="mt-8 grid gap-3">
                <LeadCTAGroup quoteHref="#quote" />
                <Link href="#models" className="focus-ring rounded-md border border-[#b9cee8] bg-white px-5 py-3 text-center text-sm font-bold text-[#073b84] hover:border-[#0756b8]">
                  View Models
                </Link>
                <Link href={line.categoryHref} className="focus-ring rounded-md border border-[#b9cee8] bg-white px-5 py-3 text-center text-sm font-bold text-[#073b84] hover:border-[#0756b8]">
                  {line.categoryTitle}
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-[#d9e5f4] bg-white p-7 shadow-xl shadow-[#0756b8]/10">
              <p className="text-sm font-bold uppercase tracking-wide text-[#5e6b7e]">Line Snapshot</p>
              <dl className="mt-6 grid gap-3">
                <div className="rounded-md bg-[#f6fbff] p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-[#5e6b7e]">Quality Focus</dt>
                  <dd className="mt-2 text-sm font-bold leading-6 text-[#073b84]">{line.qualityFocus}</dd>
                </div>
                <div className="rounded-md bg-[#f6fbff] p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-[#5e6b7e]">Buyer Fit</dt>
                  <dd className="mt-2 text-sm font-bold leading-6 text-[#073b84]">{line.buyerFit}</dd>
                </div>
                <div className="rounded-md bg-[#f6fbff] p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-[#5e6b7e]">QC Focus</dt>
                  <dd className="mt-2 text-sm font-bold leading-6 text-[#073b84]">{line.qcFocus}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProductGallery theme={line.kind === "screen" ? "iphone-screen" : "iphone-battery"} />
        </div>
      </section>

      <section id="models" className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading
            title={`${line.name} Model Coverage`}
            description="Dedicated model-level pages are generated for iPhone compatible coverage from 6 Series to 16 Series."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {modelProducts.map((product) => (
              <Link key={product.path} href={product.path} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 shadow-sm hover:border-[#0756b8]">
                <p className="text-xs font-bold uppercase tracking-wide text-[#5e6b7e]">{product.series}</p>
                <h2 className="mt-2 font-extrabold text-[#073b84]">{product.shortTitle}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Why Buyers Use This Product Line" description={line.commercialUse} align="center" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {sellingPoints.map((point, index) => (
              <FeatureCard key={point} title={point} description={featureDescriptions[index]} index={index} />
            ))}
          </div>
        </div>
      </section>

      {relatedLines.length ? (
        <section className="section bg-[#f6fbff]">
          <div className="container">
            <SectionHeading title="Related Product Lines" description="Compare related DAKOLAS product lines before preparing a quotation request." />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLines.map((related) => (
                <Link key={related.slug} href={`/product-lines/${related.slug}/`} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                  {related.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <div id="quote">
        <QuoteRequestSection productInterest={line.title} />
      </div>
      <FAQSection title={`${line.name} FAQ`} />
      <CTASection />
    </>
  );
}
