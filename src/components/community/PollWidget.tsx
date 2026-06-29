"use client";

import { useState } from "react";
import { communityPoll } from "@/data/community";
import { cn } from "@/lib/utils";

export function PollWidget() {
  const [voted, setVoted] = useState<string | null>(null);
  const total = communityPoll.options.reduce((sum, o) => sum + o.votes, 0);

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold">{communityPoll.question}</p>
      {communityPoll.options.map((option) => {
        const pct = voted ? Math.round((option.votes / total) * 100) : 0;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setVoted(option.id)}
            disabled={!!voted}
            className={cn(
              "relative w-full overflow-hidden rounded-xl border border-border px-4 py-3 text-left text-sm transition-all",
              voted === option.id && "border-accent bg-accent/5",
              !voted && "hover:border-accent/50 hover:bg-muted"
            )}
          >
            {voted && (
              <div
                className="absolute inset-y-0 left-0 bg-accent/10 transition-all"
                style={{ width: `${pct}%` }}
              />
            )}
            <span className="relative flex justify-between">
              <span>{option.label}</span>
              {voted && <span className="font-semibold text-accent">{pct}%</span>}
            </span>
          </button>
        );
      })}
    </div>
  );
}
