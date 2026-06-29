"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface NewsletterFormProps {
  variant?: "default" | "footer";
}

export function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  const isFooter = variant === "footer";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={cn(
          "flex-1 rounded-full px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-accent",
          isFooter
            ? "border border-white/20 bg-white/10 text-white placeholder:text-white/50"
            : "border border-border bg-card text-foreground placeholder:text-muted-foreground"
        )}
      />
      <Button type="submit" variant={isFooter ? "accent" : "primary"} size="sm">
        {status === "success" ? "Subscribed!" : "Subscribe"}
      </Button>
    </form>
  );
}
