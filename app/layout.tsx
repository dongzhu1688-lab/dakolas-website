import type { Metadata } from "next";
import { FloatingInquiryBar } from "@/components/FloatingInquiryBar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/dakolas-logo.png`,
  slogan: siteConfig.slogan,
  email: siteConfig.email,
  description: siteConfig.description,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      availableLanguage: ["English"],
      areaServed: "Worldwide"
    }
  ],
  areaServed: ["Worldwide", "United Kingdom", "Australia", "Germany", "France", "Italy"],
  sameAs: []
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <Header />
        <main>{children}</main>
        <StickyWhatsApp />
        <FloatingInquiryBar />
        <Footer />
      </body>
    </html>
  );
}
