"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

const interests = [
  "iPhone compatible screens",
  "iPhone compatible batteries",
  "Samsung compatible screens",
  "Samsung compatible batteries",
  "iPad parts",
  "MacBook parts",
  "Mixed wholesale order"
];

const buyerTypes = [
  "Repair shop",
  "Wholesaler",
  "Distributor",
  "Importer",
  "Service center",
  "Other B2B buyer"
];

type AnalyticsWindow = Window & {
  gtag?: (command: string, eventName: string, params?: Record<string, string>) => void;
};

export function InquiryForm({ productInterest = "mobile parts" }: { productInterest?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "not-configured">("idle");
  const [sourcePage, setSourcePage] = useState("");
  const isFormspreeConfigured = !siteConfig.formspreeEndpoint.includes("YOUR_FORM_ID");

  useEffect(() => {
    setSourcePage(`${window.location.pathname}${window.location.search}`);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isFormspreeConfigured) {
      setStatus("not-configured");
      return;
    }

    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) throw new Error("Formspree submission failed");
      form.reset();
      (window as AnalyticsWindow).gtag?.("event", "generate_lead", {
        form_name: "DAKOLAS inquiry form",
        product_interest: productInterest
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm"
      action={siteConfig.formspreeEndpoint}
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value="New DAKOLAS website inquiry" />
      <input type="hidden" name="product_interest_context" value={productInterest} />
      <input type="hidden" name="source_page" value={sourcePage} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#071f45]">
          Name
          <input required name="name" className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#071f45]">
          Company
          <input required name="company" className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#071f45]">
          Email
          <input required type="email" name="email" className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#071f45]">
          WhatsApp
          <input name="whatsapp" className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#071f45]">
          Buyer Type
          <select required name="buyer_type" className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]">
            {buyerTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#071f45]">
          Destination Country
          <input name="destination_country" className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#071f45] md:col-span-2">
          Product Interest
          <select name="interest" defaultValue={productInterest} className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]">
            <option>{productInterest}</option>
            {interests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#071f45] md:col-span-2">
          Estimated Quantity
          <input name="estimated_quantity" placeholder="Example: 50 pcs, 200 pcs, mixed carton" className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#071f45] md:col-span-2">
          Message
          <textarea required name="message" rows={5} placeholder="Tell us the models, quality lines, quantity, and delivery market you need." className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]" />
        </label>
      </div>
      <button type="submit" disabled={status === "loading"} className="focus-ring mt-5 w-full rounded-md bg-[#0756b8] px-5 py-3 text-sm font-bold text-white hover:bg-[#073b84] disabled:cursor-not-allowed disabled:bg-[#8db9ec]">
        {status === "loading" ? "Sending..." : "Submit Inquiry"}
      </button>
      {status === "success" ? (
        <p className="mt-4 rounded-md bg-[#eaf4ff] p-3 text-sm font-semibold text-[#073b84]">
          Thank you. Your inquiry was sent to DAKOLAS. Our sales team will reply with quotation details.
        </p>
      ) : null}
      {status === "not-configured" ? (
        <p className="mt-4 rounded-md bg-[#eaf4ff] p-3 text-sm font-semibold text-[#073b84]">
          Formspree is ready but needs your real form endpoint in <code>NEXT_PUBLIC_FORMSPREE_ENDPOINT</code>. You can also email <a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a>.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 rounded-md bg-[#fff4f4] p-3 text-sm font-semibold text-[#9f1d1d]">
          The form could not be sent. Please try again or email <a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a>.
        </p>
      ) : null}
    </form>
  );
}
