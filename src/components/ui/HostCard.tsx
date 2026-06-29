import Image from "next/image";
import type { Host } from "@/lib/types";
import { SocialIcon } from "@/components/ui/SocialIcon";

interface HostCardProps {
  host: Host;
}

export function HostCard({ host }: HostCardProps) {
  return (
    <article className="editorial-card overflow-hidden rounded-2xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={host.photo}
          alt={host.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute right-0 bottom-0 left-0 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-warm-gold">
            {host.role}
          </p>
          <h3 className="font-heading text-2xl font-bold text-white">{host.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">{host.bio}</p>
        <div className="mt-4 rounded-xl bg-muted p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Fun Fact</p>
          <p className="mt-1 text-sm text-foreground">{host.funFact}</p>
        </div>
        <div className="mt-4 flex gap-2">
          {host.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-white"
              aria-label={social.platform}
            >
              <SocialIcon name={social.platform.toLowerCase()} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
