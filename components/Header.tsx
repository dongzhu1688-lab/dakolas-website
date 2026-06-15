import Link from "next/link";
import { navItems } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d9e5f4] bg-white/95 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="focus-ring flex shrink-0 items-center" aria-label="DAKOLAS home">
          <img src="/images/dakolas-logo.webp" alt="DAKOLAS" width="570" height="165" className="h-10 w-auto sm:h-12" />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-[#334155] lg:flex" aria-label="Main navigation">
          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#0756b8]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/contact/">Get Quote</ButtonLink>
        </div>
        <Link href="/contact/" className="focus-ring inline-flex rounded-md bg-[#0756b8] px-4 py-2 text-sm font-bold text-white lg:hidden">
          Quote
        </Link>
      </div>
    </header>
  );
}
