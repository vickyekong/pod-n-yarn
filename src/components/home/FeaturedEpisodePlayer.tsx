"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Episode } from "@/lib/types";
import { useAudioPlayer } from "@/components/layout/AudioPlayerProvider";
import { coHosts } from "@/data/hosts";
import { cn } from "@/lib/utils";

interface FeaturedEpisodePlayerProps {
  episode: Episode;
}

export function FeaturedEpisodePlayer({ episode }: FeaturedEpisodePlayerProps) {
  const { play } = useAudioPlayer();
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div className="relative">
      {/* Host portraits */}
      <div className="absolute -top-6 -left-6 z-10 flex -space-x-4">
        {coHosts.map((host, i) => (
          <motion.div
            key={host.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15 }}
            className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-accent shadow-xl md:h-20 md:w-20"
          >
            <Image src={host.photo} alt={host.name} fill className="object-cover" />
          </motion.div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
        {showEmbed && episode.youtubeUrl ? (
          <div className="relative aspect-video">
            <iframe
              src={episode.youtubeUrl}
              title={episode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              if (episode.type === "video" && episode.youtubeUrl) {
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

      <div className="mt-4 flex gap-2">
        {["Real talk", "No filter", "Just vibes"].map((tag, i) => (
          <span
            key={tag}
            className={cn(
              "speech-bubble text-xs text-foreground",
              i === 1 && "animate-float"
            )}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
