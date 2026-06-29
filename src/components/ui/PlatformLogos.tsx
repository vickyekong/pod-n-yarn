import Link from "next/link";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { streamingPlatforms } from "@/data/site";
import { cn } from "@/lib/utils";

interface PlatformLogosProps {
  variant?: "light" | "dark";
  className?: string;
}

export function PlatformLogos({ variant = "light", className }: PlatformLogosProps) {
  const isLight = variant === "light";

  return (
    <div className={cn("flex flex-wrap items-center gap-6", className)}>
      {streamingPlatforms.map((platform) => (
        <Link
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all hover:scale-105",
            isLight
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
          )}
        >
          <SocialIcon name={platform.icon} className="h-4 w-4" />
          {platform.name}
        </Link>
      ))}
    </div>
  );
}
