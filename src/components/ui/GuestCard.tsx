import { OptimizedImage as Image } from "@/components/ui/OptimizedImage";
import Link from "next/link";
import type { Guest } from "@/lib/types";

interface GuestCardProps {
  guest: Guest;
  size?: "default" | "large";
}

export function GuestCard({ guest, size = "default" }: GuestCardProps) {
  const isLarge = size === "large";

  return (
    <Link
      href={`/episodes/${guest.episodeSlug}`}
      className="group editorial-card relative overflow-hidden rounded-2xl"
    >
      <div className={isLarge ? "relative aspect-[3/4]" : "relative aspect-[4/5]"}>
        <Image
          src={guest.photo}
          alt={guest.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute right-0 bottom-0 left-0 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-warm-gold">
            {guest.profession}
          </p>
          <h3 className={isLarge ? "font-heading text-3xl font-bold text-white" : "font-heading text-xl font-bold text-white"}>
            {guest.name}
          </h3>
          <p className="mt-2 text-sm italic text-white/80">&ldquo;{guest.quote}&rdquo;</p>
          <p className="mt-3 text-xs text-white/60">{guest.episodeTitle}</p>
        </div>
      </div>
    </Link>
  );
}
