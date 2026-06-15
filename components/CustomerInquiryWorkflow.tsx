import { SectionHeading } from "@/components/SectionHeading";

const workflowSteps = [
  {
    title: "Send Model List",
    description: "Share exact models, product lines, quantity, buyer type, and destination country."
  },
  {
    title: "Confirm Options",
    description: "DAKOLAS reviews availability, quality line, MOQ, sample needs, packing, and lead time."
  },
  {
    title: "Receive Quote",
    description: "Get wholesale price details, sample options, payment notes, and delivery planning."
  },
  {
    title: "Prepare Shipment",
    description: "Orders are checked, packed, labeled, and prepared for international B2B shipment."
  }
];

export function CustomerInquiryWorkflow({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "" : "section"}>
      <div className={compact ? "" : "container"}>
        {compact ? (
          <div className="mb-5">
            <h3 className="text-xl font-extrabold text-[#071f45]">Customer Inquiry Workflow</h3>
            <p className="mt-2 text-sm leading-6 text-[#5e6b7e]">
              A simple B2B process for repair shops, wholesalers, distributors, and importers.
            </p>
          </div>
        ) : (
          <SectionHeading
            title="Customer Inquiry Workflow"
            description="A simple B2B process for repair shops, wholesalers, distributors, and importers."
          />
        )}
        <div className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 md:grid-cols-4"}>
          {workflowSteps.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-[#d9e5f4] bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0756b8] text-sm font-extrabold text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-extrabold text-[#071f45]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
