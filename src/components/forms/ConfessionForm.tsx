"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ConfessionForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setMessage("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your anonymous confession..."
        required
        rows={3}
        className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"
      />
      <p className="text-xs text-muted-foreground">100% anonymous. We never share your identity.</p>
      <Button type="submit" variant="primary" size="sm" className="w-full">
        {status === "success" ? "Sent anonymously ✓" : "Submit Confession"}
      </Button>
    </form>
  );
}
