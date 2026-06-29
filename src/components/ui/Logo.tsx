import Link from "next/link";
import { OptimizedImage as Image } from "@/components/ui/OptimizedImage";
import { cn } from "@/lib/utils";
import { images } from "@/data/images";

interface LogoProps {
  theme?: "light" | "dark";
  className?: string;
}

export function Logo({ theme = "light", className }: LogoProps) {
  const isDark = theme === "dark";

  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)}>
      <div
        className={cn(
          "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl transition-transform group-hover:scale-105",
          isDark ? "ring-1 ring-white/20" : "ring-1 ring-border"
        )}
      >
        <Image
          src={images.logo.icon}
          alt="Pod n' Yarn"
          width={40}
          height={40}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg font-extrabold tracking-tight",
            isDark ? "text-white" : "text-foreground"
          )}
        >
          Pod n&apos; Yarn
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-widest",
            isDark ? "text-white/50" : "text-muted-foreground"
          )}
        >
          Real Talk
        </span>
      </div>
    </Link>
  );
}
