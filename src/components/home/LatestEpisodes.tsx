import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { EpisodeCard } from "@/components/ui/EpisodeCard";
import { getLatestEpisodes } from "@/data/episodes";

export function LatestEpisodes() {
  const episodes = getLatestEpisodes(6);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Fresh Drops
              </p>
              <h2 className="font-heading mt-2 text-4xl font-extrabold md:text-5xl">
                Latest Episodes
              </h2>
            </div>
            <Link
              href="/episodes"
              className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              View All Episodes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode, i) => (
            <FadeIn key={episode.id} delay={i * 0.1}>
              <EpisodeCard episode={episode} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
