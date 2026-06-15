import Link from "next/link";
import { countryPages, productLinePages } from "@/lib/seo-expansion";
import { categories, navItems, seoLandingPages, siteConfig } from "@/lib/site";

export function Footer() {
  const trustLinks = [
    { label: "About DAKOLAS", href: "/about-dakolas/" },
    { label: "Why DAKOLAS", href: "/why-dakolas/" },
    { label: "Warranty Policy", href: "/warranty-policy/" },
    { label: "Shipping Policy", href: "/shipping-policy/" },
    { label: "Quality Control", href: "/quality-control/" }
  ];

  return (
    <footer className="bg-[#071f45] text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <img src="/images/dakolas-logo.webp" alt="DAKOLAS" width="570" height="165" className="mb-5 h-12 w-auto rounded bg-white p-2" />
          <p className="max-w-sm text-sm leading-7 text-[#c9d8ed]">
            Professional mobile parts supplier for repair shops, wholesalers, and distributors worldwide.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide">Company</h2>
          <div className="grid gap-3 text-sm text-[#c9d8ed]">
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            {trustLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide">Products</h2>
          <div className="grid gap-3 text-sm text-[#c9d8ed]">
            {categories.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide">Sourcing Hubs</h2>
          <div className="grid gap-3 text-sm text-[#c9d8ed]">
            {productLinePages.slice(0, 3).map((item) => (
              <Link key={item.slug} href={`/product-lines/${item.slug}/`} className="hover:text-white">
                {item.name}
              </Link>
            ))}
            <Link href="/product-images/" className="hover:text-white">
              Product Image Library
            </Link>
            {countryPages.slice(0, 2).map((item) => (
              <Link key={item.slug} href={`/countries/${item.slug}/`} className="hover:text-white">
                {item.country}
              </Link>
            ))}
            {seoLandingPages.slice(-2).map((item) => (
              <Link key={item.slug} href={`/${item.slug}/`} className="hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-5 text-sm text-[#c9d8ed] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} DAKOLAS. All rights reserved.</p>
          <p>Email: <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
        </div>
      </div>
    </footer>
  );
}
