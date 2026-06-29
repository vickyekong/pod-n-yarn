import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { GuestCard } from "@/components/ui/GuestCard";
import { getFeaturedGuests } from "@/data/guests";

export function FeaturedGuests() {
  const guests = getFeaturedGuests();

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Notable Voices
              </p>
              <h2 className="font-heading mt-2 text-4xl font-extrabold md:text-5xl">
                Featured Guests
              </h2>
            </div>
            <Link
              href="/guests"
              className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              All Guests <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guests.map((guest, i) => (
            <FadeIn key={guest.id} delay={i * 0.1}>
              <GuestCard guest={guest} size={i === 0 ? "large" : "default"} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
