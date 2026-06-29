"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormType = "topic" | "question" | "story";

interface CommunityFormProps {
  compact?: boolean;
  defaultType?: FormType;
}

export function CommunityForm({ compact = false, defaultType = "topic" }: CommunityFormProps) {
  const [type, setType] = useState<FormType>(defaultType);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setMessage("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  const types = [
    { id: "topic" as const, label: "Suggest Topic" },
    { id: "question" as const, label: "Ask Question" },
    { id: "story" as const, label: "Share Story" },
  ];

  const placeholders: Record<FormType, string> = {
    topic: "What should we yarn about next?",
    question: "Your anonymous question...",
    story: "Share your story for a future episode...",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!compact && (
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setType(t.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                type === t.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={compact ? placeholders[defaultType] : placeholders[type]}
        required
        rows={compact ? 3 : 5}
        className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-accent"
      />
      <Button type="submit" variant="accent" className="w-full">
        {status === "success" ? "Submitted! Thank you." : "Submit"}
      </Button>
    </form>
  );
}
