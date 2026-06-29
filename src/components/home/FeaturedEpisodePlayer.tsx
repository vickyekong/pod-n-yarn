"use client";

import { useState } from "react";
import { OptimizedImage as Image } from "@/components/ui/OptimizedImage";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Episode } from "@/lib/types";
import { useAudioPlayer } from "@/components/layout/AudioPlayerProvider";
import { primaryHost } from "@/data/hosts";

interface FeaturedEpisodePlayerProps {
  episode: Episode;
}

export function FeaturedEpisodePlayer({ episode }: FeaturedEpisodePlayerProps) {
  const { play } = useAudioPlayer();
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div className="relative z-0">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center gap-3 border-b border-white/10 bg-black/30 px-4 py-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-accent ring-2 ring-primary">
            <Image src={primaryHost.photo} alt={primaryHost.name} fill className="object-cover" />
          </div>
          <p className="text-xs font-medium text-white/70">
            Hosted by <span className="font-semibold text-white">{primaryHost.name}</span>
          </p>
        </div>

        {showEmbed && episode.youtubeWatchUrl ? (
          <div className="relative aspect-video flex flex-col items-center justify-center bg-black/60 p-8 text-center">
            <p className="text-sm text-white/80">Full video available on our YouTube channel.</p>
            <a
              href={episode.youtubeWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-accent px-6 py-2 text-sm font-semibold text-white hover:bg-burnt-orange/90"
            >
              Watch on YouTube
            </a>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              if (episode.type === "video" && episode.youtubeWatchUrl) {
                setShowEmbed(true);
              } else {
                play(episode);
              }
            }}
            className="group relative block w-full aspect-video"
          >
            <Image
              src={episode.thumbnail}
              alt={episode.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-2xl ring-4 ring-accent/30"
              >
                <Play className="ml-1 h-9 w-9" />
              </motion.div>
            </div>
            <div className="absolute right-0 bottom-0 left-0 p-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-warm-gold">
                Featured Episode
              </p>
              <h2 className="font-heading mt-1 text-xl font-bold text-white md:text-2xl">
                {episode.title}
              </h2>
              {episode.guestName && (
                <p className="mt-1 text-sm text-white/70">with {episode.guestName}</p>
              )}
            </div>
          </button>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Real talk", "No filter", "Just vibes"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
