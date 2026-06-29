import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GuestCard } from "@/components/ui/GuestCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { guests } from "@/data/guests";

export const metadata: Metadata = {
  title: "Guests",
  description: "Notable guests who have joined Pod n' Yarn for unfiltered conversations.",
};

export default function GuestsPage() {
  return (
    <>
      <PageHero
        label="Notable Voices"
        title="Featured Guests"
        description="Entrepreneurs, artists, therapists, and everyday heroes who've shared their stories with us."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guests.map((guest, i) => (
              <FadeIn key={guest.id} delay={i * 0.05}>
                <GuestCard guest={guest} size={i === 0 ? "large" : "default"} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
