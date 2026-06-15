"use client";

import { useState } from "react";
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

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-lg border border-[#d9e5f4] bg-white p-6 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
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
        <label className="grid gap-2 text-sm font-bold text-[#071f45] md:col-span-2">
          Product Interest
          <select name="interest" className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]">
            {interests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#071f45] md:col-span-2">
          Message
          <textarea required name="message" rows={5} className="focus-ring rounded-md border border-[#b9cee8] px-4 py-3 font-normal text-[#071f45]" />
        </label>
      </div>
      <button type="submit" className="focus-ring mt-5 w-full rounded-md bg-[#0756b8] px-5 py-3 text-sm font-bold text-white hover:bg-[#073b84]">
        Submit Inquiry
      </button>
      {sent ? (
        <p className="mt-4 rounded-md bg-[#eaf4ff] p-3 text-sm font-semibold text-[#073b84]">
          Thank you. Please also email <a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a> for live quotation handling.
        </p>
      ) : null}
    </form>
  );
}
