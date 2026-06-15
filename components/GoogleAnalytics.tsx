import Script from "next/script";
import { siteConfig } from "@/lib/site";

export function GoogleAnalytics() {
  if (!siteConfig.gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`} strategy="afterInteractive" />
      <Script id="dakolas-ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.gaId}', {
            page_path: window.location.pathname
          });
        `}
      </Script>
    </>
  );
}
