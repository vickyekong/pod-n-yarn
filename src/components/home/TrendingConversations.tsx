"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { EpisodeCard } from "@/components/ui/EpisodeCard";
import { episodes } from "@/data/episodes";
import { topicLabels } from "@/data/site";
import { cn } from "@/lib/utils";
import type { Topic } from "@/lib/types";

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

export function TrendingConversations() {
  const [activeTopic, setActiveTopic] = useState<Topic | "all">("all");

  const filtered =
    activeTopic === "all"
      ? episodes.slice(0, 4)
      : episodes.filter((e) => e.topics.includes(activeTopic)).slice(0, 4);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Explore Topics
          </p>
          <h2 className="font-heading mt-2 text-4xl font-extrabold md:text-5xl">
            Trending Conversations
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                  activeTopic === topic
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                )}
              >
                {topic === "all" ? "All Topics" : topicLabels[topic]}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {filtered.map((episode, i) => (
            <FadeIn key={episode.id} delay={i * 0.1}>
              <EpisodeCard episode={episode} variant="compact" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
