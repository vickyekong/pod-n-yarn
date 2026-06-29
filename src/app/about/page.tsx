import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Pod n' Yarn — our mission, vision, and the story behind Nigeria's most authentic podcast.",
};

const values = [
  { title: "Authenticity", desc: "No scripts. No pretending. Just real people having real conversations." },
  { title: "Community", desc: "Every listener is part of the Yarn Gang. Your voice shapes our content." },
  { title: "Culture", desc: "Rooted in Nigerian identity, open to the world. Our stories are universal." },
  { title: "Courage", desc: "We tackle the topics others avoid — with warmth, humor, and honesty." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="About Pod n' Yarn"
        description="Friends gathering to gist, share stories, debate ideas, and yarn without filters."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-heading text-3xl font-extrabold">How It All Started</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">{siteConfig.story}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Today, Pod n&apos; Yarn reaches listeners across Nigeria and the diaspora — from Lagos
                to London, Abuja to Atlanta. We&apos;ve hosted entrepreneurs, artists, therapists,
                pastors, and everyday people with extraordinary stories.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80"
                  alt="Pod n' Yarn studio"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="editorial-card rounded-2xl p-6">
                  <h3 className="font-heading text-xl font-bold text-accent">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-20 rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-warm-gold">Mission</h3>
                  <p className="mt-4 leading-relaxed text-primary-foreground/80">{siteConfig.mission}</p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-warm-gold">Vision</h3>
                  <p className="mt-4 leading-relaxed text-primary-foreground/80">{siteConfig.vision}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
