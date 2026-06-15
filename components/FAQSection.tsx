import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    question: "Can DAKOLAS supply repair shops, wholesalers, and distributors?",
    answer:
      "Yes. DAKOLAS is built for B2B buyers including repair shops, wholesalers, distributors, importers, and service centers. Send your model list, quality line, quantity, and destination country for a focused quotation."
  },
  {
    question: "Can I request samples before a wholesale order?",
    answer:
      "Yes. Buyers can request samples or a smaller first order to evaluate product line, packing, and market fit before placing a larger wholesale order."
  },
  {
    question: "How do I get the wholesale price?",
    answer:
      "Use the Get Wholesale Price or inquiry form and include exact models, product line, estimated quantity, buyer type, and destination country. This helps DAKOLAS reply with practical availability, MOQ, lead time, and quotation details."
  },
  {
    question: "What warranty does DAKOLAS provide?",
    answer:
      "All DAKOLAS warranty statements are 12 months. Buyers should keep model lists, product line details, order records, and shipment information for efficient after-sales communication."
  },
  {
    question: "Does DAKOLAS claim to be authorized by device brands?",
    answer:
      "No. DAKOLAS supplies compatible replacement parts for professional repair and wholesale use and does not claim authorization from Apple, Samsung, or any device brand."
  },
  {
    question: "What information should I send for faster quotation?",
    answer:
      "Send model series, product line, order quantity, destination country, buyer type, and whether you need samples, wholesale price, or distributor stock planning."
  }
];

export function FAQSection({ title = "Frequently Asked Questions" }: { title?: string }) {
  return (
    <section className="section bg-[#f6fbff]">
      <div className="container">
        <SectionHeading
          title={title}
          description="Answers to common sourcing questions from repair shops, wholesalers, distributors, and importers."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-[#d9e5f4] bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-extrabold text-[#071f45]">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
