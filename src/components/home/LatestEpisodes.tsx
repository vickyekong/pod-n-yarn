"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { EpisodeCard } from "@/components/ui/EpisodeCard";
import { episodes, sortEpisodes, type EpisodeSort } from "@/data/episodes";
import { topicLabels } from "@/data/site";
import type { Topic } from "@/lib/types";
import { cn } from "@/lib/utils";

const topics: (Topic | "all")[] = [
  "all",
  "relationships",
  "career-business",
  "culture",
  "lifestyle",
  "faith",
  "entertainment",
  "hot-takes",
];

export function LatestEpisodes() {
  const [topic, setTopic] = useState<Topic | "all">("all");
  const [sort, setSort] = useState<EpisodeSort>("latest");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = episodes.filter((ep) => {
      const matchesTopic = topic === "all" || ep.topics.includes(topic);
      const matchesQuery =
        !query ||
        ep.title.toLowerCase().includes(query.toLowerCase()) ||
        ep.guestName?.toLowerCase().includes(query.toLowerCase());
      return matchesTopic && matchesQuery;
    });
    return sortEpisodes(list, sort).slice(0, 6);
  }, [topic, sort, query]);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
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

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search episodes..."
                className="w-full rounded-full border border-border bg-card py-3 pr-4 pl-11 text-sm outline-none focus:ring-2 focus:ring-accent"
                aria-label="Search episodes"
              />
            </div>
            <div className="flex gap-2">
              {(["latest", "popular"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold capitalize transition-all",
                    sort === s
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-4 flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
                  topic === t
                    ? "bg-accent text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                {t === "all" ? "All" : topicLabels[t]}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((episode, i) => (
            <EpisodeCard key={episode.id} episode={episode} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No episodes match your filters.</p>
        )}
      </div>
    </section>
  );
}
