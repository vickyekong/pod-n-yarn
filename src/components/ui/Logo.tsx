import Link from "next/link";
import { cn } from "@/lib/utils";

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
          "flex h-10 w-10 items-center justify-center rounded-xl font-heading text-lg font-extrabold transition-transform group-hover:scale-105",
          isDark
            ? "bg-accent text-white"
            : "bg-primary text-primary-foreground"
        )}
      >
        P
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
