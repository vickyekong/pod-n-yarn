"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Music } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Waveform } from "@/components/ui/Waveform";
import { FadeIn } from "@/components/ui/FadeIn";
import { getFeaturedEpisode } from "@/data/episodes";
import { siteConfig } from "@/data/site";

const speechBubbles = [
  "No filter!",
  "Just vibes",
  "Real gist",
  "Zero fake",
];

export function Hero() {
  const featured = getFeaturedEpisode();

  return (
    <section className="relative min-h-screen overflow-hidden brand-gradient-bg">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #E67E22 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #D4A017 0%, transparent 40%)`,
          }}
        />
      </div>

      {speechBubbles.map((text, i) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
          className="speech-bubble animate-float absolute hidden text-foreground lg:block"
          style={{
            top: `${15 + i * 12}%`,
            right: `${5 + (i % 2) * 8}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {text}
        </motion.div>
      ))}

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 pt-32 pb-20 md:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-40">
        <div className="flex-1">
          <FadeIn>
            <div className="mb-6 flex items-center gap-3">
              <Waveform className="h-8" color="bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-widest text-warm-gold">
                Nigerian Podcast
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-heading text-5xl leading-[1.05] font-extrabold text-white md:text-6xl lg:text-7xl">
              Real People.
              <br />
              <span className="brand-gradient-text">Real Talks.</span>
              <br />
              Zero Fake.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Join the conversation as we yarn about culture, relationships, business,
              entertainment, faith, lifestyle, and everything in between.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`/episodes/${featured.slug}`} variant="accent" size="lg">
                <Play className="h-5 w-5" />
                Watch Latest Episode
              </Button>
              <Button
                href={siteConfig.social.spotify}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <Music className="h-5 w-5" />
                Listen on Spotify
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary bg-muted"
                  >
                    <Image
                      src={`https://i.pravatar.cc/80?img=${i + 10}`}
                      alt=""
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-white">10K+ Yarn Gang Members</p>
                <p className="text-xs text-white/60">Join the community</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="left" className="flex-1">
          <Link
            href={`/episodes/${featured.slug}`}
            className="group relative block overflow-hidden rounded-2xl shadow-2xl animate-pulse-glow"
          >
            <div className="relative aspect-video">
              <Image
                src={featured.thumbnail}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8" />
                </div>
              </div>
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-warm-gold">
                  Latest Episode
                </p>
                <h2 className="font-heading text-xl font-bold text-white">{featured.title}</h2>
                {featured.guestName && (
                  <p className="mt-1 text-sm text-white/70">with {featured.guestName}</p>
                )}
              </div>
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
