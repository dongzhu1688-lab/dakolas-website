import Link from "next/link";

export function LeadCTAGroup({
  quoteHref = "/contact/?intent=quote",
  className = "",
  light = false
}: {
  quoteHref?: string;
  className?: string;
  light?: boolean;
}) {
  const primaryClass = light ? "bg-white text-[#073b84] hover:bg-[#eaf4ff]" : "bg-[#0756b8] text-white hover:bg-[#073b84]";
  const secondaryClass = light
    ? "border border-white/40 text-white hover:bg-white/10"
    : "border border-[#b9cee8] bg-white text-[#073b84] hover:border-[#0756b8]";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <Link href={quoteHref} className={`focus-ring rounded-md px-5 py-3 text-center text-sm font-bold ${primaryClass}`}>
        Get Wholesale Price
      </Link>
      <Link href="/contact/?intent=sample" className={`focus-ring rounded-md px-5 py-3 text-center text-sm font-bold ${secondaryClass}`}>
        Request Sample
      </Link>
      <Link href="/contact/?intent=quote" className={`focus-ring rounded-md px-5 py-3 text-center text-sm font-bold ${secondaryClass}`}>
        Get Quote
      </Link>
      <Link href="/contact/?intent=sales" className={`focus-ring rounded-md px-5 py-3 text-center text-sm font-bold ${secondaryClass}`}>
        Contact Sales
      </Link>
    </div>
  );
}
