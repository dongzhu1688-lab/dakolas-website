import Link from "next/link";
import { getProductPath, type ProductDetail } from "@/lib/product-database";

export function ProductSeriesGrid({ products }: { products: ProductDetail[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.slug}
          href={getProductPath(product)}
          className="focus-ring rounded-lg border border-[#d9e5f4] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#8db9ec] hover:shadow-lg"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-[#5e6b7e]">{product.productType}</p>
          <h3 className="mt-3 text-xl font-extrabold text-[#071f45]">{product.shortTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{product.metadataDescription}</p>
          <span className="mt-5 inline-flex rounded-md bg-[#eaf4ff] px-4 py-2 text-sm font-bold text-[#073b84]">
            View Product Page
          </span>
        </Link>
      ))}
    </div>
  );
}
