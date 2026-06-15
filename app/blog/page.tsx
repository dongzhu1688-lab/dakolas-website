import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts, getBlogWordCount } from "@/lib/blog-database";
import { productLinePages } from "@/lib/seo-expansion";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "DAKOLAS blog for mobile repair parts sourcing, quality control, wholesale screens, and battery buying guidance.",
  path: "/blog/"
});

export default function BlogPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">DAKOLAS Blog</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#40516a]">
            SEO buying guides for repair shops, wholesalers, distributors, and importers sourcing mobile phone parts worldwide.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="SEO Articles" description="Each article is written as a long-form B2B sourcing guide with internal links to relevant DAKOLAS product pages." />
          <div className="grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="focus-ring rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8db9ec] hover:shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wide text-[#5e6b7e]">{getBlogWordCount(post).toLocaleString()} words</p>
                <h2 className="mt-3 text-xl font-extrabold text-[#071f45]">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{post.description}</p>
                <span className="mt-5 inline-flex rounded-md bg-[#eaf4ff] px-4 py-2 text-sm font-bold text-[#073b84]">
                  Read Article
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading title="Related Product Line Hubs" description="Move from sourcing education to model-level product pages and quote requests." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {productLinePages.map((line) => (
              <Link key={line.slug} href={`/product-lines/${line.slug}/`} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                {line.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
