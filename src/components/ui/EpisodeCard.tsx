"use client";

import { OptimizedImage as Image } from "@/components/ui/OptimizedImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Headphones, Video } from "lucide-react";
import type { Episode } from "@/lib/types";
import { useAudioPlayer } from "@/components/layout/AudioPlayerProvider";
import { getGuestPhoto } from "@/data/guests";
import { formatDuration } from "@/lib/utils";
import { topicLabels } from "@/data/site";
import { cn } from "@/lib/utils";

interface EpisodeCardProps {
  episode: Episode;
  variant?: "default" | "compact" | "featured";
  index?: number;
}

export function EpisodeCard({ episode, variant = "default", index = 0 }: EpisodeCardProps) {
  const { play } = useAudioPlayer();
  const guestPhoto = getGuestPhoto(episode.guestSlug);
  const primaryTopic = episode.topics[0];

  if (variant === "featured") {
    return (
      <Link
        href={`/episodes/${episode.slug}`}
        className="group editorial-card editorial-card-lift relative overflow-hidden rounded-2xl"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              {episode.type === "video" ? <Video className="h-3 w-3" /> : <Headphones className="h-3 w-3" />}
              {topicLabels[primaryTopic]}
            </span>
            <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group editorial-card editorial-card-lift flex flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <Link href={`/episodes/${episode.slug}`} className="block h-full w-full">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => play(episode)}
          className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white opacity-0 shadow-2xl ring-4 ring-accent/20 transition-opacity duration-300 group-hover:opacity-100"
          aria-label={`Play ${episode.title}`}
        >
          <Play className="ml-1 h-7 w-7" />
        </motion.button>

        <span className="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {formatDuration(episode.duration)}
        </span>
        <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
          {topicLabels[primaryTopic]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        {guestPhoto && episode.guestName && (
          <div className="mb-3 flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/30">
              <Image src={guestPhoto} alt={episode.guestName} fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Guest</p>
              <p className="text-sm font-bold">{episode.guestName}</p>
            </div>
          </div>
        )}

        <Link href={`/episodes/${episode.slug}`}>
          <h3 className="font-heading text-lg font-bold leading-snug transition-colors group-hover:text-accent md:text-xl">
            {episode.title}
          </h3>
        </Link>

        <p
          className={cn(
            "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
            variant === "compact" && "line-clamp-2"
          )}
        >
          {episode.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <button
            onClick={() => play(episode)}
            className="flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-burnt-orange"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
              <Play className="h-3.5 w-3.5" />
            </span>
            Play Episode
          </button>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            {episode.type === "video" ? <Video className="h-3 w-3" /> : <Headphones className="h-3 w-3" />}
            {episode.type}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
