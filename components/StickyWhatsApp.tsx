import { siteConfig } from "@/lib/site";

export function StickyWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappHref}
      aria-label="Contact DAKOLAS on WhatsApp"
      className="focus-ring fixed bottom-4 right-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-[#071f45]/20 transition hover:-translate-y-0.5 hover:bg-[#1ebc5b] sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5 sm:h-7 sm:w-7" fill="none" aria-hidden="true">
        <path
          d="M16 4.5A11.1 11.1 0 0 0 6.3 21l-1.1 4.2 4.3-1.1A11.1 11.1 0 1 0 16 4.5Z"
          fill="currentColor"
        />
        <path
          d="M11.8 10.8c.2-.5.5-.5.8-.5h.6c.2 0 .5.1.7.5.2.5.8 1.9.9 2 .1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.5.5c-.2.2-.4.4-.2.7.2.4.9 1.5 1.9 2.4 1.3 1.1 2.4 1.5 2.8 1.7.3.1.6.1.8-.2l1.1-1.3c.2-.3.5-.3.8-.2.3.1 1.9.9 2.2 1.1.3.2.5.3.6.4.1.2.1 1-.2 1.9-.3.9-1.8 1.7-2.5 1.8-.7.1-1.5.1-2.4-.1-.6-.2-1.3-.4-2.2-.8-3.9-1.7-6.4-5.6-6.6-5.9-.2-.3-1.6-2.1-1.6-4s1-2.8 1.4-3.2Z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}
