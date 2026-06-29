import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { pressMentions } from "@/data/content";

export const metadata: Metadata = {
  title: "Press",
  description: "Press mentions and media coverage of Pod n' Yarn.",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        label="In The Press"
        title="Press & Media"
        description="What the world is saying about Pod n' Yarn."
      />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pressMentions.map((mention, i) => (
              <FadeIn key={mention.title} delay={i * 0.08}>
                <article className="editorial-card editorial-card-lift flex h-full flex-col rounded-2xl p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {mention.outlet}
                  </p>
                  <h2 className="font-heading mt-3 text-xl font-bold leading-snug">
                    {mention.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {mention.excerpt}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{mention.date}</p>
                  <a
                    href={mention.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
                  >
                    Read on {mention.outlet} →
                  </a>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 rounded-2xl border border-border bg-muted p-8 text-center md:p-12">
              <h2 className="font-heading text-2xl font-bold">Press Enquiries</h2>
              <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
                For interviews, quotes, or media assets, reach out to our team.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest/90"
              >
                Contact Press Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
