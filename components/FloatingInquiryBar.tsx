import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function FloatingInquiryBar() {
  return (
    <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-[#b9cee8] bg-white/95 shadow-2xl shadow-[#071f45]/15 backdrop-blur">
      <div className="container flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="hidden text-sm leading-5 text-[#40516a] md:block">
          <strong className="text-[#071f45]">Need wholesale mobile parts?</strong> Send model list, quantity, and destination.
        </div>
        <div className="grid grid-cols-3 gap-2 sm:flex sm:justify-end">
          <Link href="/contact/?intent=wholesale-price" className="focus-ring rounded-md bg-[#0756b8] px-3 py-2 text-center text-xs font-extrabold text-white hover:bg-[#073b84] sm:px-4 sm:text-sm">
            Wholesale Price
          </Link>
          <Link href="/contact/?intent=sample" className="focus-ring rounded-md border border-[#b9cee8] bg-white px-3 py-2 text-center text-xs font-extrabold text-[#073b84] hover:border-[#0756b8] sm:px-4 sm:text-sm">
            Sample
          </Link>
          <a href={siteConfig.whatsappHref} className="focus-ring rounded-md bg-[#25d366] px-3 py-2 text-center text-xs font-extrabold text-white hover:bg-[#1ebc5b] sm:px-4 sm:text-sm">
            WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
}
