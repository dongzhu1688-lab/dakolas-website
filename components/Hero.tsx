import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { LeadCTAGroup } from "@/components/LeadCTAGroup";
import { TrustBadges } from "@/components/TrustBadges";
import { productHierarchy } from "@/lib/site";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-[#d9e5f4] bg-[linear-gradient(180deg,#f5f9ff_0%,#ffffff_68%,#eef6ff_100%)]">
      <div className="container grid min-h-[720px] items-center gap-14 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-[1.02] text-[#071f45] md:text-7xl">
            Premium Screens & Batteries
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-[#334155]">
            For Repair Shops & Distributors Worldwide
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#5e6b7e]">
            DAKOLAS supports global B2B buyers with tested iPhone compatible screens, batteries, Samsung compatible screens, tablet parts, laptop parts, export packing, and stable wholesale supply.
          </p>
          <div className="mt-8 grid gap-3">
            <LeadCTAGroup />
            <div className="flex">
              <ButtonLink href="/products/" variant="secondary">View Products</ButtonLink>
            </div>
          </div>
          <div className="mt-10">
            <TrustBadges compact />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {productHierarchy.map((group) => (
              <div key={group.title} className="rounded-lg border border-[#d9e5f4] bg-white/85 p-4 shadow-sm">
                <p className="font-extrabold text-[#071f45]">{group.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#5e6b7e]">{group.lines.join(" / ")}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-[2rem] border border-[#c6d9ef] bg-[#d9ebff]" />
          <Image
            src="/images/hero-parts-1280.webp"
            alt="DAKOLAS mobile parts, screens, batteries, testing equipment, and export cartons"
            width={1280}
            height={720}
            sizes="(min-width: 1024px) 54vw, 92vw"
            priority
            className="relative aspect-[16/10] w-full rounded-2xl border border-[#b9cee8] object-cover shadow-2xl shadow-[#0756b8]/15"
          />
          <div className="relative -mt-8 ml-auto grid w-[92%] grid-cols-3 overflow-hidden rounded-lg border border-[#d9e5f4] bg-white shadow-xl shadow-[#071f45]/10">
            {["QC Tested", "Export Packing", "Global Supply"].map((item) => (
              <div key={item} className="border-r border-[#d9e5f4] px-4 py-4 text-center text-sm font-extrabold text-[#073b84] last:border-r-0">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
