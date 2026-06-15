import Link from "next/link";
import { BatteryIcon, ScreenIcon } from "@/components/icons";

export function CategoryCard({ title, description, href, product }: { title: string; description: string; href: string; product: string }) {
  const isBattery = title.toLowerCase().includes("battery");

  return (
    <Link href={href} className="focus-ring group rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8db9ec] hover:shadow-lg">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#eaf4ff] text-[#0756b8]">
        {isBattery ? <BatteryIcon className="h-6 w-6" /> : <ScreenIcon className="h-6 w-6" />}
      </div>
      <h3 className="text-xl font-extrabold text-[#071f45]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{description}</p>
      <p className="mt-5 text-sm font-bold text-[#0756b8]">{product}</p>
    </Link>
  );
}
