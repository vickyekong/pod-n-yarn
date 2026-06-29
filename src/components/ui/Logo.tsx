import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { images } from "@/data/images";

interface LogoProps {
  /** Use "dark" on green/dark backgrounds (white logo). Use "light" on cream/white backgrounds (color logo). */
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-auto max-w-[140px]",
  md: "h-10 w-auto max-w-[180px]",
  lg: "h-14 w-auto max-w-[260px]",
};

const sizeDimensions = {
  sm: { width: 140, height: 32 },
  md: { width: 180, height: 40 },
  lg: { width: 260, height: 56 },
};

export function Logo({ theme = "light", size = "md", className }: LogoProps) {
  const src = theme === "dark" ? images.logo.white : images.logo.color;
  const dims = sizeDimensions[size];

  return (
    <Link
      href="/"
      className={cn("group inline-flex shrink-0 items-center", className)}
      aria-label="Pod n' Yarn — Home"
    >
      <Image
        src={src}
        alt="Pod n' Yarn"
        width={dims.width}
        height={dims.height}
        className={cn(
          "object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]",
          sizeClasses[size]
        )}
        priority
      />
    </Link>
  );
}
