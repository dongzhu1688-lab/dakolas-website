import type { Metadata } from "next";
import { CategoryCard } from "@/components/CategoryCard";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductSeriesGrid } from "@/components/ProductSeriesGrid";
import { productCategories } from "@/lib/product-database";
import { blogPosts } from "@/lib/blog-database";
import { countryPages, productLinePages } from "@/lib/seo-expansion";
import { categories } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Products",
  description: "Explore DAKOLAS mobile parts categories including screens, batteries, iPad parts, and MacBook parts.",
  path: "/products/"
});

export default function ProductsPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading
            title="Products"
            description="DAKOLAS supplies repair shops, wholesalers, and distributors with tested mobile parts across high-demand categories."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.href} className="grid gap-4">
                <CategoryCard {...category} />
                <a href="/contact/" className="focus-ring rounded-md bg-[#0756b8] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#073b84]">
                  Send Inquiry
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Product Database"
            description="Browse dedicated product pages by category and series. Each page includes gallery views, QC information, packaging notes, application guidance, and quote request access."
          />
          <div className="grid gap-12">
            {productCategories.map((category) => (
              <section key={category.slug}>
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#071f45]">{category.title}</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5e6b7e]">{category.description}</p>
                  </div>
                  <a href={category.href} className="focus-ring rounded-md border border-[#b9cee8] px-4 py-2 text-sm font-bold text-[#073b84] hover:border-[#0756b8]">
                    Category Page
                  </a>
                </div>
                <ProductSeriesGrid products={category.products} />
              </section>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="Sourcing Hubs" description="Use these pages to compare product lines, country supply options, and long-form buying guides." />
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-extrabold text-[#071f45]">Product Lines</h2>
              <div className="mt-5 grid gap-3">
                {productLinePages.map((line) => (
                  <a key={line.slug} href={`/product-lines/${line.slug}/`} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                    {line.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#071f45]">Country Pages</h2>
              <div className="mt-5 grid gap-3">
                {countryPages.map((page) => (
                  <a key={page.slug} href={`/countries/${page.slug}/`} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                    {page.country}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#071f45]">Buying Guides</h2>
              <div className="mt-5 grid gap-3">
                <a href="/product-images/" className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                  Product Image Library
                </a>
                {blogPosts.slice(0, 6).map((post) => (
                  <a key={post.slug} href={`/blog/${post.slug}/`} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                    {post.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuoteRequestSection productInterest="mobile parts wholesale supply" />
      <FAQSection title="Mobile Parts Wholesale FAQ" />
      <CTASection />
    </>
  );
}
