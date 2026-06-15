import Image from "next/image";
import type { GalleryTheme } from "@/lib/product-database";
import { galleryThemeLabel, productGalleryItems } from "@/lib/product-gallery";

export function ProductGallery({ theme }: { theme: GalleryTheme }) {
  const label = galleryThemeLabel(theme);

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-[#071f45]">Product Image Gallery</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {productGalleryItems.map((item) => (
          <figure key={item.title} className="overflow-hidden rounded-lg border border-[#d9e5f4] bg-white shadow-sm">
            <div className="aspect-[16/10] bg-[#f6fbff]">
              <Image
                src={item.src}
                alt={`${label} ${item.title.toLowerCase()} for DAKOLAS wholesale sourcing`}
                width={960}
                height={600}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="border-t border-[#d9e5f4] p-5">
              <h3 className="font-extrabold text-[#071f45]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5e6b7e]">{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
