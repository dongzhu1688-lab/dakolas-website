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
import { getProductLinePath, getProductLinePage, getRelatedModelProducts, type IPhoneModelProductPage } from "@/lib/seo-expansion";
import { sellingPoints } from "@/lib/site";

const featureDescriptions = [
  "Professional quality line selection for repair shops, wholesalers, and distributors.",
  "Product pages are structured around defined checks before shipment.",
  "Model-level coverage helps buyers plan repeat supply by series and product line.",
  "Export-ready communication supports faster quotation, packing, and delivery planning.",
  "Every DAKOLAS warranty statement for these product pages is 12 months."
];

export function ModelProductPage({ product }: { product: IPhoneModelProductPage }) {
  const linePage = getProductLinePage(product.lineSlug);
  const relatedProducts = getRelatedModelProducts(product);

  return (
    <>
      <ProductJsonLd
        name={product.title}
        description={product.description}
        url={product.path}
        category={product.categoryTitle}
      />
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products/" },
              { label: product.categoryTitle, href: product.categoryHref },
              { label: product.series, href: `${product.categoryHref}${product.seriesSlug}/` },
              { label: product.title }
            ]}
          />
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#0756b8]">{product.lineName} / {product.series}</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">{product.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#40516a]">{product.description}</p>
              <p className="mt-4 text-sm leading-6 text-[#5e6b7e]">
                DAKOLAS supplies compatible replacement parts for professional repair and wholesale use. DAKOLAS does not claim to be Apple authorized.
              </p>
              <div className="mt-8 grid gap-3">
                <LeadCTAGroup quoteHref="#quote" />
                {linePage ? (
                  <Link href={getProductLinePath(linePage)} className="focus-ring rounded-md border border-[#b9cee8] bg-white px-5 py-3 text-center text-sm font-bold text-[#073b84] hover:border-[#0756b8]">
                    View {linePage.name}
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="rounded-2xl border border-[#d9e5f4] bg-white p-7 shadow-xl shadow-[#0756b8]/10">
              <p className="text-sm font-bold uppercase tracking-wide text-[#5e6b7e]">Model Product Snapshot</p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#071f45]">{product.productType}</h2>
              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.specifications.map((item) => (
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
          <ProductGallery theme={product.galleryTheme} />
        </div>
      </section>

      <section className="section bg-[#f6fbff]">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                title="B2B Sourcing Notes"
                description={`Use this page when requesting ${product.title} for repair-shop supply, wholesale cartons, or distributor model programs.`}
              />
              <div className="grid gap-4 text-sm leading-7 text-[#40516a]">
                <p>
                  Buyers should include model name, target quality line, quantity, destination country, and preferred communication method. DAKOLAS can then confirm availability, MOQ, lead time, packing, and warranty terms more efficiently.
                </p>
                <p>
                  This model-level page is part of the DAKOLAS full iPhone compatible product coverage from 6 Series to 16 Series, with dedicated URLs for screen lines and battery lines.
                </p>
              </div>
            </div>
            <div>
              <SectionHeading title="Applications" description="Common business scenarios for this product page." />
              <div className="grid gap-4 md:grid-cols-3">
                {product.applications.map((application) => (
                  <article key={application} className="rounded-lg border border-[#d9e5f4] bg-white p-5 shadow-sm">
                    <h2 className="text-lg font-extrabold text-[#071f45]">{application}</h2>
                    <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">Built for professional B2B sourcing with tested quality, stable supply, and 12 months warranty.</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Why Source This Product from DAKOLAS" description="Each model-level product page is structured for professional repair and wholesale procurement." align="center" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {sellingPoints.map((point, index) => (
              <FeatureCard key={point} title={point} description={featureDescriptions[index]} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="Related Products" description="Compare related lines and models before sending a quotation request." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <Link key={item.path} href={item.path} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                {item.shortTitle}
              </Link>
            ))}
            <Link href={product.categoryHref} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
              View {product.categoryTitle}
            </Link>
            {linePage ? (
              <Link href={getProductLinePath(linePage)} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                More {linePage.name}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <div id="quote">
        <QuoteRequestSection productInterest={product.title} />
      </div>
      <FAQSection title={`${product.shortTitle} FAQ`} />
      <CTASection />
    </>
  );
}
