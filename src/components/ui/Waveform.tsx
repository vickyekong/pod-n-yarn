"use client";

import { cn } from "@/lib/utils";

interface WaveformProps {
  className?: string;
  bars?: number;
  animated?: boolean;
  color?: string;
}

export function Waveform({
  className,
  bars = 7,
  animated = true,
  color = "bg-accent",
}: WaveformProps) {
  return (
    <div className={cn("flex items-end gap-1", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-6 w-1 rounded-full origin-bottom",
            color,
            animated && "wave-bar",
            !animated && "h-3"
          )}
          style={{
            animationDelay: animated ? `${i * 0.1}s` : undefined,
          }}
        />
      ))}
    </div>
  );
}
