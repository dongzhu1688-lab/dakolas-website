import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/ProductDetailPage";
import { createMetadata } from "@/lib/metadata";
import { getCategory, getProduct, getProductPath } from "@/lib/product-database";

type Props = {
  params: Promise<{ series: string }>;
};

const category = getCategory("macbook-parts");

export function generateStaticParams() {
  return category?.products.map((product) => ({ series: product.slug })) ?? [];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { series } = await params;
  const product = getProduct("macbook-parts", series);
  if (!product) return {};

  return createMetadata({
    title: product.metadataTitle,
    description: product.metadataDescription,
    path: getProductPath(product)
  });
}

export default async function MacbookPartsProductPage({ params }: Props) {
  const { series } = await params;
  const product = getProduct("macbook-parts", series);
  if (!product) notFound();

  return <ProductDetailPage product={product} />;
}
