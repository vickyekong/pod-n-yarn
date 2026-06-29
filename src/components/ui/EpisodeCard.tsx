"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Headphones, Video } from "lucide-react";
import type { Episode } from "@/lib/types";
import { useAudioPlayer } from "@/components/layout/AudioPlayerProvider";
import { formatDuration } from "@/lib/utils";
import { topicLabels } from "@/data/site";
import { cn } from "@/lib/utils";

interface EpisodeCardProps {
  episode: Episode;
  variant?: "default" | "compact" | "featured";
}

export function EpisodeCard({ episode, variant = "default" }: EpisodeCardProps) {
  const { play } = useAudioPlayer();

  if (variant === "featured") {
    return (
      <Link
        href={`/episodes/${episode.slug}`}
        className="group editorial-card relative overflow-hidden rounded-2xl"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              {episode.type === "video" ? <Video className="h-3 w-3" /> : <Headphones className="h-3 w-3" />}
              {episode.type === "video" ? "Video" : "Audio"}
            </span>
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {formatDuration(episode.duration)}
            </span>
          </div>
          <div className="absolute right-0 bottom-0 left-0 p-6">
            <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
              {episode.title}
            </h3>
            {episode.guestName && (
              <p className="mt-1 text-sm text-white/70">with {episode.guestName}</p>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="group editorial-card flex flex-col overflow-hidden rounded-2xl">
      <Link href={`/episodes/${episode.slug}`} className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={episode.thumbnail}
          alt={episode.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
        <button
          onClick={(e) => {
            e.preventDefault();
            play(episode);
          }}
          className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white opacity-0 shadow-xl transition-all group-hover:opacity-100 hover:scale-110"
          aria-label={`Play ${episode.title}`}
        >
          <Play className="ml-1 h-6 w-6" />
        </button>
        <span className="absolute top-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {formatDuration(episode.duration)}
        </span>
        <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-xs font-semibold text-white">
          {episode.type === "video" ? <Video className="h-3 w-3" /> : <Headphones className="h-3 w-3" />}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {episode.topics.slice(0, 2).map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {topicLabels[topic]}
            </span>
          ))}
        </div>
        <Link href={`/episodes/${episode.slug}`}>
          <h3 className="font-heading text-lg font-bold leading-snug transition-colors group-hover:text-accent">
            {episode.title}
          </h3>
        </Link>
        {episode.guestName && (
          <p className="mt-1 text-sm font-medium text-accent">Guest: {episode.guestName}</p>
        )}
        <p className={cn("mt-2 flex-1 text-sm leading-relaxed text-muted-foreground", variant === "compact" && "line-clamp-2")}>
          {episode.description}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => play(episode)}
            className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            <Play className="h-3.5 w-3.5" /> Play
          </button>
          <Link
            href={episode.spotifyUrl}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Spotify
          </Link>
        </div>
      </div>
    </article>
  );
}
