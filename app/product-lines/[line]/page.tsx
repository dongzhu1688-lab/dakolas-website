import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductLineLandingPage } from "@/components/ProductLineLandingPage";
import { createMetadata } from "@/lib/metadata";
import { getProductLinePage, getProductLinePath, productLinePages } from "@/lib/seo-expansion";

type Props = {
  params: Promise<{ line: string }>;
};

export function generateStaticParams() {
  return productLinePages.map((line) => ({ line: line.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { line } = await params;
  const page = getProductLinePage(line);
  if (!page) return {};

  return createMetadata({
    title: page.metadataTitle,
    description: page.metadataDescription,
    path: getProductLinePath(page)
  });
}

export default async function ProductLinePage({ params }: Props) {
  const { line } = await params;
  const page = getProductLinePage(line);
  if (!page) notFound();

  return <ProductLineLandingPage line={page} />;
}
