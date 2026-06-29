"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import type { Episode } from "@/lib/types";
import { EpisodeCard } from "@/components/ui/EpisodeCard";
import { topicLabels } from "@/data/site";
import { cn } from "@/lib/utils";
import type { Topic } from "@/lib/types";

interface EpisodesSearchProps {
  episodes: Episode[];
}

export function EpisodesSearch({ episodes }: EpisodesSearchProps) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<Topic | "all">("all");
  const [type, setType] = useState<"all" | "video" | "audio">("all");

  const filtered = useMemo(() => {
    return episodes.filter((ep) => {
      const matchesQuery =
        !query ||
        ep.title.toLowerCase().includes(query.toLowerCase()) ||
        ep.description.toLowerCase().includes(query.toLowerCase()) ||
        ep.guestName?.toLowerCase().includes(query.toLowerCase());
      const matchesTopic = topic === "all" || ep.topics.includes(topic);
      const matchesType = type === "all" || ep.type === type;
      return matchesQuery && matchesTopic && matchesType;
    });
  }, [episodes, query, topic, type]);

  const topics: (Topic | "all")[] = [
    "all",
    "relationships",
    "career-business",
    "entertainment",
    "faith",
    "culture",
    "lifestyle",
    "hot-takes",
  ];

  return (
    <div>
      <div className="relative mb-8">
        <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search episodes, guests, topics..."
          className="w-full rounded-2xl border border-border bg-card py-4 pr-4 pl-12 text-base outline-none transition-colors focus:ring-2 focus:ring-accent"
        />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {(["all", "video", "audio"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold capitalize transition-all",
              type === t
                ? "bg-accent text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {t === "all" ? "All Types" : t}
          </button>
        ))}
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all",
              topic === t
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {t === "all" ? "All Topics" : topicLabels[t]}
          </button>
        ))}
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        {filtered.length} episode{filtered.length !== 1 ? "s" : ""} found
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg font-semibold">No episodes found</p>
          <p className="mt-2 text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
