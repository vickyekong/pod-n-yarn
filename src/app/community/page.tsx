import type { Metadata } from "next";
import { MessageCircle, Users, Send } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CommunityForm } from "@/components/forms/CommunityForm";
import { siteConfig } from "@/data/site";
import { siteStats, formatStatCount } from "@/data/community";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the Yarn Gang — newsletter, WhatsApp community, and audience submissions.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        label="Yarn Gang"
        title="Join The Yarn Gang"
        description="Connect with fellow listeners, suggest topics, and be part of the conversation."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn>
              <div className="editorial-card rounded-2xl p-8 md:p-10">
                <Users className="h-10 w-10 text-accent" />
                <h2 className="font-heading mt-4 text-2xl font-bold">Newsletter</h2>
                <p className="mt-3 text-muted-foreground">
                  Get episode drops, exclusive behind-the-scenes content, and community updates
                  delivered to your inbox every week.
                </p>
                <div className="mt-8">
                  <NewsletterForm />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="editorial-card rounded-2xl p-8 md:p-10">
                <MessageCircle className="h-10 w-10 text-accent" />
                <h2 className="font-heading mt-4 text-2xl font-bold">WhatsApp Community</h2>
                <p className="mt-3 text-muted-foreground">
                  Join 10,000+ Yarn Gang members for live episode discussions, polls, and
                  exclusive voice notes from the hosts.
                </p>
                <Button href={siteConfig.whatsapp} variant="accent" className="mt-8">
                  <SocialIcon name="whatsapp" className="h-5 w-5" />
                  Join WhatsApp Group
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="editorial-card rounded-2xl p-8 md:p-10">
                <Send className="h-10 w-10 text-accent" />
                <h2 className="font-heading mt-4 text-2xl font-bold">Audience Submissions</h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Have a story to share? Want to suggest a topic or ask an anonymous question?
                  We read every submission and many become future episodes.
                </p>
                <div className="mt-8 max-w-xl">
                  <CommunityForm />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {[
                { label: "Yarn Gang Members", value: formatStatCount(siteStats.communityMembers) },
                { label: "Episodes Released", value: formatStatCount(siteStats.episodes) },
                { label: "Stories Shared", value: formatStatCount(siteStats.storiesShared) },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-primary p-6 text-center text-primary-foreground">
                  <p className="font-heading text-3xl font-extrabold text-warm-gold">{stat.value}</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
