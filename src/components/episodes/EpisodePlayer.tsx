"use client";

import { OptimizedImage as Image } from "@/components/ui/OptimizedImage";
import { Play } from "lucide-react";
import type { Episode } from "@/lib/types";
import { useAudioPlayer } from "@/components/layout/AudioPlayerProvider";
import { Waveform } from "@/components/ui/Waveform";

interface EpisodePlayerProps {
  episode: Episode;
}

export function EpisodePlayer({ episode }: EpisodePlayerProps) {
  const { play, isPlaying, currentEpisode, toggle } = useAudioPlayer();
  const isCurrent = currentEpisode?.id === episode.id;
  const playing = isCurrent && isPlaying;

  return (
    <div className="overflow-hidden rounded-2xl bg-black">
      {episode.type === "video" && episode.youtubeUrl ? (
        <div className="relative aspect-video">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
            <button
              onClick={() => (isCurrent ? toggle() : play(episode))}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-2xl transition-transform hover:scale-110"
            >
              <Play className="ml-1 h-8 w-8" />
            </button>
            {playing && <Waveform className="mt-6 h-8" color="bg-accent" />}
            <p className="mt-4 text-sm text-white/70">
              {playing ? "Now Playing" : "Click to play"}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative aspect-video">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <button
              onClick={() => (isCurrent ? toggle() : play(episode))}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-2xl transition-transform hover:scale-110"
            >
              <Play className="ml-1 h-8 w-8" />
            </button>
          </div>
          {playing && (
            <div className="absolute right-0 bottom-0 left-0 flex items-center justify-center gap-4 bg-black/60 py-4">
              <Waveform className="h-6" color="bg-accent" />
              <span className="text-sm font-medium text-white">Now Playing</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
