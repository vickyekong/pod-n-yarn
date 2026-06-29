"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, X } from "lucide-react";
import { useAudioPlayer } from "@/components/layout/AudioPlayerProvider";
import { Waveform } from "@/components/ui/Waveform";
import { formatDuration } from "@/lib/utils";

export function StickyAudioPlayer() {
  const { currentEpisode, isPlaying, toggle, close } = useAudioPlayer();

  return (
    <AnimatePresence>
      {currentEpisode && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed right-0 bottom-0 left-0 z-50 border-t border-border bg-card/95 shadow-2xl backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
            <div className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-lg sm:block">
              <Image
                src={currentEpisode.thumbnail}
                alt={currentEpisode.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{currentEpisode.title}</p>
              <p className="truncate text-xs text-muted-foreground">
                {currentEpisode.guestName ?? "Pod n' Yarn"} · {formatDuration(currentEpisode.duration)}
              </p>
            </div>
            {isPlaying && <Waveform className="hidden h-6 md:flex" animated={isPlaying} />}
            <button
              onClick={toggle}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-transform hover:scale-105"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
            </button>
            <Link
              href={`/episodes/${currentEpisode.slug}`}
              className="hidden text-sm font-medium text-accent hover:underline sm:inline"
            >
              Show Notes
            </Link>
            <button
              onClick={close}
              className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close player"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
