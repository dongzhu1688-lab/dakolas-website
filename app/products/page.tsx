import type { Metadata } from "next";
import { CategoryCard } from "@/components/CategoryCard";
import { CTASection } from "@/components/CTASection";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
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
      <QuoteRequestSection productInterest="mobile parts wholesale supply" />
      <CTASection />
    </>
  );
}
