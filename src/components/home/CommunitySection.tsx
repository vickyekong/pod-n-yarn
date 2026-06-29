import Link from "next/link";
import { MessageCircle, Send, Users } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CommunityForm } from "@/components/forms/CommunityForm";
import { siteConfig } from "@/data/site";

export function CommunitySection() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Community
            </p>
            <h2 className="font-heading mt-2 text-4xl font-extrabold md:text-5xl">
              Join The Yarn Gang
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Be part of the conversation. Suggest topics, ask questions, share your stories,
              and connect with fellow listeners.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <FadeIn delay={0.1}>
            <div className="editorial-card rounded-2xl p-8">
              <Users className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-xl font-bold">Newsletter</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get episode drops and exclusive content straight to your inbox.
              </p>
              <div className="mt-6">
                <NewsletterForm />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="editorial-card rounded-2xl p-8">
              <MessageCircle className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-xl font-bold">WhatsApp Community</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Join thousands of Yarn Gang members for live gists and episode discussions.
              </p>
              <Button href={siteConfig.whatsapp} variant="primary" className="mt-6 w-full">
                Join WhatsApp Group
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="editorial-card rounded-2xl p-8">
              <Send className="h-8 w-8 text-accent" />
              <h3 className="font-heading mt-4 text-xl font-bold">Submit Your Story</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Suggest topics, ask anonymous questions, or share stories for future episodes.
              </p>
              <div className="mt-6">
                <CommunityForm compact />
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/community"
              className="text-sm font-semibold text-accent hover:underline"
            >
              Visit the full community page →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
