import { ButtonLink } from "@/components/ButtonLink";

export function CTASection() {
  return (
    <section className="bg-[#0756b8] py-16 text-white">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold">Ready to source tested mobile parts?</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#d9ebff]">
            Send your product list and target market. DAKOLAS will reply with available models, quality options, lead time, and quotation details.
          </p>
        </div>
        <ButtonLink href="/contact/" variant="light" className="shrink-0">
          Get Quote
        </ButtonLink>
      </div>
    </section>
  );
}
