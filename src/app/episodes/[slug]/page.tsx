import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, Headphones, Video, Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EpisodePlayer } from "@/components/episodes/EpisodePlayer";
import { EpisodeCard } from "@/components/ui/EpisodeCard";
import { episodes, getEpisodeBySlug } from "@/data/episodes";
import { topicLabels, siteConfig } from "@/data/site";
import { formatDuration } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return episodes.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) return { title: "Episode Not Found" };
  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      title: episode.title,
      description: episode.description,
      images: [{ url: episode.thumbnail }],
    },
  };
}

export default async function EpisodeDetailPage({ params }: Props) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) notFound();

  const related = episodes
    .filter((e) => e.slug !== slug && e.topics.some((t) => episode.topics.includes(t)))
    .slice(0, 3);

  return (
    <>
      <section className="bg-primary pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {episode.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-warm-gold"
              >
                {topicLabels[topic]}
              </span>
            ))}
          </div>
          <h1 className="font-heading mt-4 text-4xl font-extrabold text-white md:text-5xl">
            {episode.title}
          </h1>
          {episode.guestName && (
            <p className="mt-2 text-lg text-white/70">with {episode.guestName}</p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(episode.publishedAt).toLocaleDateString("en-NG", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {formatDuration(episode.duration)}
            </span>
            <span className="flex items-center gap-1.5">
              {episode.type === "video" ? (
                <Video className="h-4 w-4" />
              ) : (
                <Headphones className="h-4 w-4" />
              )}
              {episode.type === "video" ? "Video Episode" : "Audio Episode"}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <EpisodePlayer episode={episode} />

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={episode.spotifyUrl} variant="accent" size="sm">
                  Spotify
                </Button>
                <Button href={episode.appleUrl} variant="outline" size="sm">
                  Apple Podcasts
                </Button>
                {episode.youtubeUrl && (
                  <Button href={episode.youtubeUrl} variant="outline" size="sm">
                    YouTube
                  </Button>
                )}
              </div>

              <div className="show-notes mt-12">
                <h2 className="font-heading text-2xl font-bold">Show Notes</h2>
                <p className="mt-4 text-muted-foreground">{episode.description}</p>
                {episode.showNotes && (
                  <p className="mt-4 text-muted-foreground">{episode.showNotes}</p>
                )}
              </div>
            </div>

            <aside>
              <div className="editorial-card sticky top-24 rounded-2xl p-6">
                <h3 className="font-heading font-bold">About This Episode</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {episode.description}
                </p>
                {episode.guestName && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Guest
                    </p>
                    <p className="mt-1 font-heading font-bold">{episode.guestName}</p>
                  </div>
                )}
                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Share
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Button
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(episode.title)}&url=${encodeURIComponent(`${siteConfig.url}/episodes/${episode.slug}`)}`}
                      variant="ghost"
                      size="sm"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold">Related Episodes</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((ep) => (
                <EpisodeCard key={ep.id} episode={ep} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
