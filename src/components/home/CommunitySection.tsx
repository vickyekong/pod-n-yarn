"use client";

import Link from "next/link";
import {
  MessageCircle,
  Send,
  Users,
  MessageSquareQuote,
  HelpCircle,
  BarChart3,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CommunityForm } from "@/components/forms/CommunityForm";
import { ConfessionForm } from "@/components/forms/ConfessionForm";
import { PollWidget } from "@/components/community/PollWidget";
import { QuestionOfWeek } from "@/components/community/QuestionOfWeek";
import { siteConfig } from "@/data/site";

export function CommunitySection() {
  return (
    <section id="yarn-gang" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Community
            </p>
            <h2 className="font-heading mt-2 text-4xl font-extrabold md:text-5xl">
              Join The Yarn Gang
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              More than a podcast — a movement. Submit stories, vote on topics, confess anonymously,
              and connect with thousands of real talk lovers.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FadeIn delay={0.05}>
            <div className="editorial-card editorial-card-lift h-full rounded-2xl p-6 md:p-8">
              <Users className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-xl font-bold">Newsletter</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Episode drops, exclusive clips, and community updates weekly.
              </p>
              <div className="mt-6">
                <NewsletterForm />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="editorial-card editorial-card-lift h-full rounded-2xl p-6 md:p-8">
              <MessageCircle className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-xl font-bold">WhatsApp Community</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Live gists, episode polls, and voice notes from the hosts.
              </p>
              <Button href={siteConfig.whatsapp} variant="accent" className="mt-6 w-full">
                <SocialIcon name="whatsapp" className="h-5 w-5" />
                Join WhatsApp Group
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="editorial-card editorial-card-lift h-full rounded-2xl p-6 md:p-8">
              <Send className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-xl font-bold">Share Your Story</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Suggest topics or submit stories for future episodes.
              </p>
              <div className="mt-6">
                <CommunityForm compact defaultType="story" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="editorial-card editorial-card-lift h-full rounded-2xl p-6 md:p-8">
              <MessageSquareQuote className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-xl font-bold">Anonymous Confession</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Say what you can&apos;t say out loud. We read every confession.
              </p>
              <div className="mt-6">
                <ConfessionForm />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="editorial-card editorial-card-lift h-full rounded-2xl p-6 md:p-8">
              <HelpCircle className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-xl font-bold">Suggest a Topic</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                What should we yarn about next? Your idea could become an episode.
              </p>
              <div className="mt-6">
                <CommunityForm compact defaultType="topic" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="editorial-card editorial-card-lift h-full rounded-2xl p-6 md:p-8">
              <BarChart3 className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-xl font-bold">Audience Poll</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Vote on what matters to the Yarn Gang.
              </p>
              <div className="mt-6">
                <PollWidget />
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.35}>
          <div className="mt-12">
            <QuestionOfWeek />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/community"
              className="text-sm font-semibold text-accent hover:underline"
            >
              Explore the full community hub →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
