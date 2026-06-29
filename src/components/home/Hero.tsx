"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Waveform } from "@/components/ui/Waveform";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { PlatformLogos } from "@/components/ui/PlatformLogos";
import { BackgroundSoundWaves } from "@/components/ui/BackgroundSoundWaves";
import { FeaturedEpisodePlayer } from "@/components/home/FeaturedEpisodePlayer";
import { getFeaturedEpisode } from "@/data/episodes";
import { siteConfig } from "@/data/site";
import { siteStats } from "@/data/community";

const speechBubbles = [
  { text: "No filter!", top: "22%", right: "6%" },
  { text: "Just vibes", top: "38%", right: "12%" },
  { text: "Real gist", top: "54%", right: "4%" },
  { text: "Zero fake", top: "68%", right: "10%" },
];

export function Hero() {
  const featured = getFeaturedEpisode();

  return (
    <section className="relative min-h-[92vh] overflow-hidden brand-gradient-bg">
      <BackgroundSoundWaves />

      <div className="absolute inset-0 opacity-[0.12]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #E67E22 0%, transparent 45%),
              radial-gradient(circle at 80% 20%, #D4A017 0%, transparent 35%)`,
          }}
        />
      </div>

      {speechBubbles.map((bubble, i) => (
        <motion.div
          key={bubble.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 + i * 0.15, duration: 0.5 }}
          className="hero-speech-bubble animate-float pointer-events-none absolute z-0 hidden lg:block"
          style={{ top: bubble.top, right: bubble.right, animationDelay: `${i * 0.6}s` }}
        >
          {bubble.text}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-4 pt-28 pb-12 md:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-36 lg:pb-16">
        <div className="flex-1">
          <FadeIn>
            <div className="mb-6 flex items-center gap-3">
              <Waveform className="h-8" color="bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-warm-gold">
                Nigerian Podcast
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-heading text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.02] font-extrabold text-white">
              Real People.
              <br />
              <span className="brand-gradient-text">Real Talks.</span>
              <br />
              Zero Fake.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
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
                <SocialIcon name="spotify" className="h-5 w-5" />
                Listen on Spotify
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              <div>
                <p className="font-heading text-3xl font-extrabold text-white md:text-4xl">
                  <AnimatedCounter value={siteStats.episodes} suffix="+" />
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                  Episodes
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl font-extrabold text-white md:text-4xl">
                  <AnimatedCounter value={siteStats.listeners} suffix="+" />
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                  Listeners
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl font-extrabold text-white md:text-4xl">
                  <AnimatedCounter value={siteStats.streams} suffix="+" />
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                  Streams
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                Listen on
              </p>
              <PlatformLogos variant="light" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="left" className="flex-1 lg:max-w-xl">
          <FeaturedEpisodePlayer episode={featured} />
        </FadeIn>
      </div>
    </section>
  );
}
