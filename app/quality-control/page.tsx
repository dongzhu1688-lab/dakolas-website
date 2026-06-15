import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Quality Control",
  description: "DAKOLAS quality control includes display testing, touch testing, brightness testing, battery capacity testing, final inspection, and 100% testing before shipment.",
  path: "/quality-control/"
});

const qcSteps = [
  ["Display Testing", "Every display batch is checked for visual consistency, color, lines, dead spots, and appearance."],
  ["Touch Testing", "Touch response is tested to help repair businesses reduce after-sales risk."],
  ["Brightness Testing", "Brightness and viewing quality are reviewed for stable product grading."],
  ["Battery Capacity Testing", "Battery capacity and output are checked before shipment preparation."],
  ["Final Inspection", "Packaging, labels, model matching, and carton condition are reviewed before dispatch."],
  ["100% Tested Before Shipment", "DAKOLAS applies defined inspection steps before goods leave the warehouse."]
];

export default function QualityControlPage() {
  return (
    <>
      <section className="section bg-[#f6fbff]">
        <div className="container">
          <SectionHeading
            title="Quality Control"
            description="Professional buyers need predictable quality. DAKOLAS follows practical inspection steps across screens, batteries, and repair parts."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {qcSteps.map(([title, description], index) => (
              <FeatureCard key={title} title={title} description={description} index={index} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
