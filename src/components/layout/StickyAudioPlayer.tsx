"use client";

import { motion, AnimatePresence } from "framer-motion";
import { OptimizedImage as Image } from "@/components/ui/OptimizedImage";
import Link from "next/link";
import { Play, Pause, X, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { useAudioPlayer } from "@/components/layout/AudioPlayerProvider";
import { Waveform } from "@/components/ui/Waveform";
import { formatDuration } from "@/lib/utils";

function formatProgressTime(progress: number, totalMinutes: number): string {
  const totalSeconds = totalMinutes * 60;
  const currentSeconds = Math.floor((progress / 100) * totalSeconds);
  const mins = Math.floor(currentSeconds / 60);
  const secs = currentSeconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function StickyAudioPlayer() {
  const {
    currentEpisode,
    isPlaying,
    progress,
    volume,
    toggle,
    close,
    seek,
    skipForward,
    skipBackward,
    setVolume,
  } = useAudioPlayer();

  return (
    <AnimatePresence>
      {currentEpisode && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="player-bar fixed right-0 bottom-0 left-0 z-50 border-t border-border bg-card/95 shadow-2xl backdrop-blur-xl"
          role="region"
          aria-label="Podcast player"
        >
          {/* Progress bar — full width on top */}
          <div className="group/progress relative h-1 w-full cursor-pointer bg-muted">
            <div
              className="h-full bg-accent transition-all"
              style={{ width: `${progress}%` }}
            />
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => seek(Number(e.target.value))}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              aria-label="Seek"
            />
          </div>

          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:gap-4 md:px-6">
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
                {currentEpisode.guestName ?? "Pod n' Yarn"}
              </p>
            </div>

            <div className="hidden items-center gap-1 text-xs tabular-nums text-muted-foreground sm:flex">
              <span>{formatProgressTime(progress, currentEpisode.duration)}</span>
              <span>/</span>
              <span>{formatDuration(currentEpisode.duration)}</span>
            </div>

            {isPlaying && <Waveform className="hidden h-5 md:flex" animated={isPlaying} />}

            <div className="flex items-center gap-1">
              <button
                onClick={skipBackward}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Skip back 15 seconds"
              >
                <SkipBack className="h-4 w-4" />
              </button>
              <button
                onClick={toggle}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-transform hover:scale-105"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
              </button>
              <button
                onClick={skipForward}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Skip forward 15 seconds"
              >
                <SkipForward className="h-4 w-4" />
              </button>
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              {volume === 0 ? (
                <VolumeX className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Volume2 className="h-4 w-4 text-muted-foreground" />
              )}
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-20 accent-accent"
                aria-label="Volume"
              />
            </div>

            <Link
              href={`/episodes/${currentEpisode.slug}`}
              className="hidden text-sm font-medium text-accent hover:underline md:inline"
            >
              Notes
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
