import Link from "next/link";

export function ProductCard({ name, category = "Premium replacement part" }: { name: string; category?: string }) {
  return (
    <article className="rounded-lg border border-[#d9e5f4] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#8db9ec] hover:shadow-lg">
      <div className="mb-5 aspect-[4/3] rounded-md bg-[linear-gradient(135deg,#f8fbff,#ddefff)] p-4">
        <div className="flex h-full items-center justify-center rounded-md border border-[#b9cee8] bg-white">
          <div className="h-28 w-16 rounded-md border-[5px] border-[#071f45] bg-[linear-gradient(180deg,#ecf7ff,#ffffff)] shadow-md" />
          <div className="ml-3 h-20 w-10 rounded border-2 border-[#0756b8] bg-[#eaf4ff]" />
        </div>
      </div>
      <p className="text-xs font-bold uppercase tracking-wide text-[#5e6b7e]">{category}</p>
      <h3 className="mt-2 text-lg font-extrabold text-[#071f45]">{name}</h3>
      <Link href="/contact/" className="focus-ring mt-5 inline-flex rounded-md bg-[#0756b8] px-4 py-2 text-sm font-bold text-white hover:bg-[#073b84]">
        Inquire Now
      </Link>
    </article>
  );
}
