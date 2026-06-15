import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModelProductPage } from "@/components/ModelProductPage";
import { createMetadata } from "@/lib/metadata";
import { getIphoneModelProduct, iphoneScreenModelPages } from "@/lib/seo-expansion";

type Props = {
  params: Promise<{ series: string; model: string; line: string }>;
};

export function generateStaticParams() {
  return iphoneScreenModelPages.map((product) => ({
    series: product.seriesSlug,
    model: product.modelSlug,
    line: product.lineSlug
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { series, model, line } = await params;
  const product = getIphoneModelProduct("iphone-screens", series, model, line);
  if (!product) return {};

  return createMetadata({
    title: product.metadataTitle,
    description: product.metadataDescription,
    path: product.path
  });
}

export default async function IPhoneScreenModelLinePage({ params }: Props) {
  const { series, model, line } = await params;
  const product = getIphoneModelProduct("iphone-screens", series, model, line);
  if (!product) notFound();

  return <ModelProductPage product={product} />;
}
