"use client";

import { useEffect, useRef, useCallback } from "react";
import { createContext, useContext, useState } from "react";
import type { Episode } from "@/lib/types";

interface AudioPlayerState {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  play: (episode: Episode) => void;
  pause: () => void;
  toggle: () => void;
  close: () => void;
  seek: (progress: number) => void;
  skipForward: () => void;
  skipBackward: () => void;
  setVolume: (volume: number) => void;
}

const SKIP_SECONDS = 15;

const AudioPlayerContext = createContext<AudioPlayerState>({
  currentEpisode: null,
  isPlaying: false,
  progress: 0,
  volume: 0.8,
  play: () => {},
  pause: () => {},
  toggle: () => {},
  close: () => {},
  seek: () => {},
  skipForward: () => {},
  skipBackward: () => {},
  setVolume: () => {},
});

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolumeState] = useState(0.8);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPlaying || !currentEpisode) {
      clearTimer();
      return;
    }

    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        const totalSeconds = currentEpisode.duration * 60;
        const next = p + 100 / totalSeconds;
        if (next >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return next;
      });
    }, 1000);

    return clearTimer;
  }, [isPlaying, currentEpisode, clearTimer]);

  const play = useCallback((episode: Episode) => {
    setCurrentEpisode((prev) => {
      if (prev?.id !== episode.id) {
        setProgress(0);
      }
      return episode;
    });
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => setIsPlaying(false), []);
  const toggle = useCallback(() => setIsPlaying((p) => !p), []);

  const close = useCallback(() => {
    clearTimer();
    setCurrentEpisode(null);
    setIsPlaying(false);
    setProgress(0);
  }, [clearTimer]);

  const seek = useCallback((value: number) => {
    setProgress(Math.min(100, Math.max(0, value)));
  }, []);

  const skipForward = useCallback(() => {
    if (!currentEpisode) return;
    const totalSeconds = currentEpisode.duration * 60;
    setProgress((p) => Math.min(100, p + (SKIP_SECONDS / totalSeconds) * 100));
  }, [currentEpisode]);

  const skipBackward = useCallback(() => {
    if (!currentEpisode) return;
    const totalSeconds = currentEpisode.duration * 60;
    setProgress((p) => Math.max(0, p - (SKIP_SECONDS / totalSeconds) * 100));
  }, [currentEpisode]);

  const setVolume = useCallback((v: number) => {
    setVolumeState(Math.min(1, Math.max(0, v)));
  }, []);

  return (
    <AudioPlayerContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        progress,
        volume,
        play,
        pause,
        toggle,
        close,
        seek,
        skipForward,
        skipBackward,
        setVolume,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  return useContext(AudioPlayerContext);
}
