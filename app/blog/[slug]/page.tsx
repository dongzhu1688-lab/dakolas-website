import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { QuoteRequestSection } from "@/components/QuoteRequestSection";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts, getBlogArticle, getBlogPost, getBlogWordCount } from "@/lib/blog-database";
import { createMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const article = getBlogArticle(post);
  const wordCount = getBlogWordCount(post);
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 4);

  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: post.title }]} />
          <p className="text-sm font-bold uppercase tracking-wide text-[#0756b8]">DAKOLAS B2B Sourcing Guide</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-extrabold leading-tight text-[#071f45] md:text-6xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#40516a]">{post.description}</p>
          <p className="mt-4 text-sm font-bold text-[#5e6b7e]">Approx. {wordCount.toLocaleString()} words / Written for repair shops, wholesalers, and distributors</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="mx-auto max-w-4xl">
            <div className="grid gap-9">
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
          <SectionHeading title="Recommended Internal Links" description="Continue researching related DAKOLAS product and sourcing pages." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {post.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring rounded-md border border-[#d9e5f4] bg-white px-4 py-4 font-bold text-[#073b84] hover:border-[#0756b8]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Related Articles" description="More B2B sourcing guidance from DAKOLAS." />
          <div className="grid gap-5 md:grid-cols-2">
            {relatedPosts.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}/`} className="focus-ring rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm hover:border-[#0756b8]">
                <h2 className="text-xl font-extrabold text-[#071f45]">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteRequestSection productInterest={post.keyword} />
      <CTASection />
    </>
  );
}
