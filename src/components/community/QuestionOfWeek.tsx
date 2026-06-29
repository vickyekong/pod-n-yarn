"use client";

import { useState } from "react";
import { questionOfTheWeek } from "@/data/community";
import { cn } from "@/lib/utils";

export function QuestionOfWeek() {
  const [answer, setAnswer] = useState<"japa" | "stay" | null>(null);
  const total = questionOfTheWeek.votes.japa + questionOfTheWeek.votes.stay;

  return (
    <div className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-gold">
        Question of the Week
      </p>
      <h3 className="font-heading mt-2 text-2xl font-bold md:text-3xl">
        {questionOfTheWeek.question}
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {(["japa", "stay"] as const).map((key) => {
          const label = key === "japa" ? "Japa for love" : "Stay for family";
          const votes = questionOfTheWeek.votes[key];
          const pct = answer ? Math.round((votes / total) * 100) : 0;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setAnswer(key)}
              disabled={!!answer}
              className={cn(
                "rounded-xl border border-white/20 px-6 py-4 text-left transition-all",
                answer === key && "border-accent bg-accent/20",
                !answer && "hover:border-white/40 hover:bg-white/5"
              )}
            >
              <span className="font-semibold">{label}</span>
              {answer && (
                <span className="mt-1 block text-sm text-primary-foreground/70">
                  {pct}% of Yarn Gang agrees
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
