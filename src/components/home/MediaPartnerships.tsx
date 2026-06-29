import Image from "next/image";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { sponsors, pressMentions } from "@/data/content";
import { siteConfig } from "@/data/site";

export function MediaPartnerships() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Partners & Press
          </p>
          <h2 className="font-heading mt-2 text-4xl font-extrabold md:text-5xl">
            Media & Partnerships
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12">
            <h3 className="font-heading text-lg font-bold text-muted-foreground">Our Sponsors</h3>
            <div className="mt-6 flex flex-wrap items-center gap-8">
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  className="relative h-12 w-28 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16">
            <h3 className="font-heading text-lg font-bold text-muted-foreground">Press Mentions</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {pressMentions.map((mention) => (
                <div key={mention.title} className="editorial-card rounded-xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {mention.outlet}
                  </p>
                  <p className="mt-2 font-heading font-bold">{mention.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{mention.date}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary p-8 text-primary-foreground md:flex-row md:p-12">
            <div>
              <h3 className="font-heading text-2xl font-bold">Partnership Enquiries</h3>
              <p className="mt-2 text-primary-foreground/70">
                Interested in sponsoring or collaborating? We&apos;d love to hear from you.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="accent">
                <Mail className="h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                href={siteConfig.mediaKitUrl}
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <Download className="h-4 w-4" />
                Media Kit
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
