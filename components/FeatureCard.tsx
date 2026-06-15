import { CheckIcon, ShieldIcon, TruckIcon } from "@/components/icons";

export function FeatureCard({ title, description, index }: { title: string; description: string; index: number }) {
  const Icon = index === 1 ? ShieldIcon : index === 3 ? TruckIcon : CheckIcon;

  return (
    <article className="rounded-lg border border-[#d9e5f4] bg-white p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#0756b8] text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-extrabold text-[#071f45]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5e6b7e]">{description}</p>
    </article>
  );
}
