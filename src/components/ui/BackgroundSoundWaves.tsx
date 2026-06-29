"use client";

import { Waveform } from "@/components/ui/Waveform";

export function BackgroundSoundWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07]" aria-hidden>
      <div className="absolute bottom-0 left-0 flex h-48 w-full items-end justify-around px-8">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="wave-bar w-1 rounded-full bg-accent"
            style={{
              height: `${20 + (i % 5) * 12}px`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: `${1 + (i % 3) * 0.3}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute top-1/4 right-8 hidden lg:block">
        <Waveform className="h-16 rotate-12" color="bg-warm-gold" />
      </div>
      <div className="absolute top-1/3 left-8 hidden lg:block">
        <Waveform className="h-12 -rotate-12" color="bg-accent" />
      </div>
    </div>
  );
}
