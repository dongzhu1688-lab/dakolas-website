import { CheckIcon, ShieldIcon, TruckIcon } from "@/components/icons";

const badges = [
  {
    title: "Premium Quality",
    description: "Clear product lines for professional repair markets.",
    icon: CheckIcon
  },
  {
    title: "100% Tested",
    description: "Defined checks before export shipment.",
    icon: ShieldIcon
  },
  {
    title: "Stable Supply",
    description: "Model coverage for repeat wholesale orders.",
    icon: CheckIcon
  },
  {
    title: "Fast Delivery",
    description: "Export-ready packing and delivery support.",
    icon: TruckIcon
  },
  {
    title: "12 Months Warranty",
    description: "Consistent warranty language for B2B buyers.",
    icon: ShieldIcon
  }
];

export function TrustBadges({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-5"}>
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <div key={badge.title} className="rounded-lg border border-[#d9e5f4] bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#eaf4ff] text-[#0756b8]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-extrabold text-[#071f45]">{badge.title}</p>
                <p className="mt-1 text-xs leading-5 text-[#5e6b7e]">{badge.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
