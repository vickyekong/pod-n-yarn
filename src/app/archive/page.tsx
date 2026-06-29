import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { EpisodesSearch } from "@/components/episodes/EpisodesSearch";
import { episodes } from "@/data/episodes";

export const metadata: Metadata = {
  title: "Archive",
  description: "Full archive of every Pod n' Yarn episode — relationships, culture, faith, business, and more.",
};

export default function ArchivePage() {
  return (
    <>
      <PageHero
        label="Full Archive"
        title="Every Yarn, Ever Recorded"
        description="Browse our complete collection of conversations — filter by topic, sort by popularity, or search by guest."
      />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <EpisodesSearch episodes={episodes} showSort />
        </div>
      </section>
    </>
  );
}
