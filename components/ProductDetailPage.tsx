import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { FeatureCard } from "@/components/FeatureCard";
import { LeadCTAGroup } from "@/components/LeadCTAGroup";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductJsonLd } from "@/components/ProductJsonLd";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { getCategory, getProductPath, productPages, type ProductDetail } from "@/lib/product-database";
import { getModelPagesForSeries } from "@/lib/seo-expansion";
import { sellingPoints } from "@/lib/site";

const featureDescriptions = [
  "Selected for B2B buyers who need consistent product grading and professional repair performance.",
  "Defined inspection steps are used before shipment, including function, appearance, and final checks.",
  "Wholesale supply planning supports repeat orders, mixed cartons, and distributor stocking.",
  "Export-ready packing and communication help buyers arrange faster international delivery.",
  "Every DAKOLAS warranty statement for these products is 12 months."
];

export function ProductDetailPage({ product }: { product: ProductDetail }) {
  const category = getCategory(product.categorySlug);
  const relatedProducts = productPages
    .filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug)
    .slice(0, 5);
  const modelProducts = getModelPagesForSeries(product.categorySlug, product.slug);

  return (
    <>
      <ProductJsonLd
        name={product.title}
        description={product.description}
        url={getProductPath(product)}
        category={category?.title ?? "Mobile phone parts"}
      />
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <div className="mb-8 text-sm font-bold text-[#5e6b7e]">
            <Link href="/products/" className="hover:text-[#0756b8]">Products</Link>
            <span className="px-2">/</span>
            {category ? <Link href={category.href} className="hover:text-[#0756b8]">{category.title}</Link> : null}
            <span className="px-2">/</span>
            <span className="text-[#071f45]">{product.series}</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">{product.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#40516a]">{product.description}</p>
              <div className="mt-8 grid gap-3">
                <LeadCTAGroup quoteHref="#quote" />
                {category ? (
                  <Link href={category.href} className="focus-ring rounded-md border border-[#b9cee8] bg-white px-5 py-3 text-center text-sm font-bold text-[#073b84] hover:border-[#0756b8]">
                    Back to Category
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="rounded-2xl border border-[#d9e5f4] bg-white p-7 shadow-xl shadow-[#0756b8]/10">
              <p className="text-sm font-bold uppercase tracking-wide text-[#5e6b7e]">Product Snapshot</p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#071f45]">{product.productType}</h2>
              <p className="mt-4 text-sm leading-6 text-[#5e6b7e]">
                Built for wholesale sourcing, repair-shop supply, and distributor reorder planning with clear gallery views, quality lines, QC notes, packaging information, and application guidance.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.specifications.map((item) => (
                  <div key={item.label} className="rounded-md bg-[#f6fbff] p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#5e6b7e]">{item.label}</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-[#073b84]">{item.value}</p>
                  </div>
                ))}
              </div>
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
                title="Product Lines"
                description="Choose the quality line that fits your target repair market, resale positioning, and wholesale price structure."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {product.productLines.map((line) => (
                  <div key={line} className="rounded-md border border-[#d9e5f4] bg-white px-5 py-4 font-bold text-[#073b84]">
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading title="Specification Summary" description="Key sourcing details for professional B2B buyers." />
              <dl className="overflow-hidden rounded-lg border border-[#d9e5f4] bg-white">
                {product.specifications.map((item) => (
                  <div key={item.label} className="grid gap-2 border-b border-[#d9e5f4] p-5 last:border-b-0 md:grid-cols-[180px_1fr]">
                    <dt className="font-extrabold text-[#071f45]">{item.label}</dt>
                    <dd className="text-[#5e6b7e]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Why Source from DAKOLAS"
            description="Each dedicated product page is built for repair shops, wholesalers, and distributors that need quality clarity and reliable reorder communication."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {sellingPoints.map((point, index) => (
              <FeatureCard key={point} title={point} description={featureDescriptions[index]} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="Applications" description="Common business use cases for this product page." />
          <div className="grid gap-4 md:grid-cols-3">
            {product.applications.map((application) => (
              <article key={application} className="rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-extrabold text-[#071f45]">{application}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">
                  DAKOLAS helps B2B buyers prepare model lists, compare quality lines, confirm packing, and request practical wholesale quotations.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length ? (
        <section className="section">
          <div className="container">
            <SectionHeading title="Related Product Pages" description="Continue browsing dedicated product pages in the same category." />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {relatedProducts.map((item) => (
                <Link key={item.slug} href={getProductPath(item)} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 text-center font-bold text-[#073b84] hover:border-[#0756b8]">
                  {item.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {modelProducts.length ? (
        <section className="section bg-[#f6fbff]">
          <div className="container">
            <SectionHeading
              title="Model-Level Product Pages"
              description={`Browse dedicated ${product.series} pages by model and product line for deeper sourcing and quotation planning.`}
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {modelProducts.map((item) => (
                <Link key={item.path} href={item.path} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                  {item.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <div id="quote">
        <QuoteRequestSection productInterest={product.title} />
      </div>
      <FAQSection title={`${product.shortTitle} FAQ`} />
      <CTASection />
    </>
  );
}
