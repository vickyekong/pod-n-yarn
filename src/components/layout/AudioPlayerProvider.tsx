"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Episode } from "@/lib/types";

interface AudioPlayerState {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  pause: () => void;
  toggle: () => void;
  close: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerState>({
  currentEpisode: null,
  isPlaying: false,
  play: () => {},
  pause: () => {},
  toggle: () => {},
  close: () => {},
});

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback((episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => setIsPlaying(false), []);
  const toggle = useCallback(() => setIsPlaying((p) => !p), []);
  const close = useCallback(() => {
    setCurrentEpisode(null);
    setIsPlaying(false);
  }, []);

  return (
    <AudioPlayerContext.Provider
      value={{ currentEpisode, isPlaying, play, pause, toggle, close }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  return useContext(AudioPlayerContext);
}
