export function SectionHeading({
  title,
  description,
  align = "left"
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto mb-10 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      <h2 className="text-3xl font-extrabold leading-tight text-[#071f45] md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[#5e6b7e] md:text-lg">{description}</p> : null}
    </div>
  );
}
