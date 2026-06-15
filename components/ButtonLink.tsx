import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}) {
  const styles = {
    primary: "bg-[#0756b8] text-white hover:bg-[#073b84]",
    secondary: "border border-[#b9cee8] bg-white text-[#073b84] hover:border-[#0756b8] hover:bg-[#f6fbff]",
    light: "bg-white text-[#073b84] hover:bg-[#eaf4ff]"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRightIcon className="h-4 w-4" />
    </Link>
  );
}
