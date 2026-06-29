import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { EpisodeCard } from "@/components/ui/EpisodeCard";
import { EpisodesSearch } from "@/components/episodes/EpisodesSearch";
import { episodes } from "@/data/episodes";

export const metadata: Metadata = {
  title: "Episodes",
  description: "Browse all Pod n' Yarn episodes — video and audio conversations about culture, life, and everything in between.",
};

export default function EpisodesPage() {
  return (
    <>
      <PageHero
        label="All Episodes"
        title="Every Conversation, Every Yarn"
        description="Video and audio episodes covering relationships, business, culture, faith, and more."
      />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <EpisodesSearch episodes={episodes} />
        </div>
      </section>
    </>
  );
}
