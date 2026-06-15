import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { LeadCTAGroup } from "@/components/LeadCTAGroup";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { getProductImagePath, productImageCategoryLabels, productImagePages, type ProductImageCategory } from "@/lib/product-image-pages";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Product Image Library",
  description:
    "Browse 50 DAKOLAS product image pages covering Premium OLED screens, Premium Battery series, factory photos, QC photos, and packaging photos.",
  path: "/product-images/"
});

const categoryOrder: ProductImageCategory[] = ["screen", "battery", "factory", "qc", "packaging"];

const categoryDescriptions: Record<ProductImageCategory, string> = {
  screen: "Dedicated image pages for IP16, IP15, and IP14 Pro series Premium OLED screen sourcing.",
  battery: "Premium Battery image pages for repair shops, wholesalers, and distributor replenishment programs.",
  factory: "Factory photo pages for production line, QC department, warehouse, and global shipping review.",
  qc: "QC photo pages covering display testing, touch testing, brightness testing, and battery capacity testing.",
  packaging: "Packaging photo pages for protective packing, battery cartons, mixed cartons, and distributor labeling."
};

export default function ProductImageLibraryPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#0756b8]">DAKOLAS Visual Sourcing Library</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">Product Image Library</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#40516a]">
              Browse 50 product image pages for Premium OLED screens, Premium Battery series, factory photos, QC photos, and packaging photos. Each page is built for B2B quotation, sample review, catalog reference, and distributor sourcing conversations.
            </p>
            <LeadCTAGroup quoteHref="#quote" className="mt-8" />
          </div>
          <div className="rounded-2xl border border-[#d9e5f4] bg-white p-7 shadow-xl shadow-[#0756b8]/10">
            <p className="text-sm font-bold uppercase tracking-wide text-[#5e6b7e]">Image Page Coverage</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {categoryOrder.map((category) => {
                const count = productImagePages.filter((page) => page.category === category).length;

                return (
                  <div key={category} className="rounded-md bg-[#f6fbff] p-4">
                    <p className="text-2xl font-extrabold text-[#0756b8]">{count}</p>
                    <p className="mt-1 text-sm font-bold text-[#071f45]">{productImageCategoryLabels[category]}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-5 text-sm leading-6 text-[#5e6b7e]">
              All pages keep DAKOLAS B2B language clear: compatible replacement parts, 100% tested before shipment, stable supply, fast delivery, and 12 months warranty.
            </p>
          </div>
        </div>
      </section>

      {categoryOrder.map((category) => {
        const pages = productImagePages.filter((page) => page.category === category);

        return (
          <section key={category} className={category === "battery" || category === "qc" ? "section bg-[#f6fbff]" : "section"}>
            <div className="container">
              <SectionHeading title={productImageCategoryLabels[category]} description={categoryDescriptions[category]} />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {pages.map((page) => (
                  <Link key={page.slug} href={getProductImagePath(page)} className="focus-ring group overflow-hidden rounded-lg border border-[#d9e5f4] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#0756b8] hover:shadow-lg">
                    <div className="aspect-[16/10] bg-[#f6fbff]">
                      <Image
                        src={page.imageSrc}
                        alt={page.imageAlt}
                        width={960}
                        height={600}
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-[#5e6b7e]">{page.imageType}</p>
                      <h2 className="mt-2 text-lg font-extrabold leading-snug text-[#071f45]">{page.shortTitle}</h2>
                      <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{page.categoryLabel}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <div id="quote">
        <QuoteRequestSection productInterest="DAKOLAS product image and wholesale sourcing request" />
      </div>
      <CTASection />
    </>
  );
}
