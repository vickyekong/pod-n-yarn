import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, streamingPlatforms } from "@/data/site";
import { siteStats, formatStatCount } from "@/data/community";
import { images } from "@/data/images";
import { Download, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Media Kit",
  description: "Pod n' Yarn media kit — audience stats, brand assets, and partnership information.",
};

export default function MediaKitPage() {
  return (
    <>
      <PageHero
        label="Press & Partners"
        title="Media Kit"
        description="Everything you need to feature, sponsor, or partner with Pod n' Yarn."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <FadeIn>
            <div className="editorial-card rounded-2xl p-8 md:p-10">
              <h2 className="font-heading text-2xl font-bold">About the Show</h2>
              <p className="mt-4 text-muted-foreground">{siteConfig.description}</p>
              <p className="mt-4 text-muted-foreground">{siteConfig.mission}</p>

              <h3 className="font-heading mt-8 text-lg font-bold">Audience Snapshot</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                <li className="rounded-xl bg-muted p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-accent">{formatStatCount(siteStats.episodes)}</p>
                  <p className="text-xs text-muted-foreground">Episodes</p>
                </li>
                <li className="rounded-xl bg-muted p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-accent">{formatStatCount(siteStats.listeners)}</p>
                  <p className="text-xs text-muted-foreground">Listeners</p>
                </li>
                <li className="rounded-xl bg-muted p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-accent">{formatStatCount(siteStats.streams)}</p>
                  <p className="text-xs text-muted-foreground">Streams</p>
                </li>
              </ul>

              <h3 className="font-heading mt-8 text-lg font-bold">Listen On</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {streamingPlatforms.map((p) => (
                  <li key={p.name}>
                    <a href={p.url} className="text-accent hover:underline">{p.name}</a>
                  </li>
                ))}
              </ul>

              <h3 className="font-heading mt-8 text-lg font-bold">Brand Assets</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Use the color logo on light backgrounds and the white logo on dark or green backgrounds.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-[#F8F4ED] p-6">
                  <Logo theme="light" size="lg" className="pointer-events-none" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Light backgrounds
                  </p>
                  <a
                    href={images.logo.color}
                    download
                    className="mt-2 inline-block text-sm text-accent hover:underline"
                  >
                    Download color logo (PNG)
                  </a>
                </div>
                <div className="rounded-xl border border-border bg-primary p-6">
                  <Logo theme="dark" size="lg" className="pointer-events-none" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                    Dark backgrounds
                  </p>
                  <a
                    href={images.logo.white}
                    download
                    className="mt-2 inline-block text-sm text-warm-gold hover:underline"
                  >
                    Download white logo (PNG)
                  </a>
                </div>
              </div>

              <ul className="mt-4 space-y-1 text-sm">
                <li>
                  <a href={images.logo.icon} className="text-accent hover:underline" download>
                    Download app icon (PNG)
                  </a>
                </li>
                <li>
                  <a href={images.og} className="text-accent hover:underline" download>
                    Download cover art (SVG)
                  </a>
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={`mailto:${siteConfig.email}?subject=Media%20Kit%20Request`} variant="accent">
                  <Mail className="h-4 w-4" />
                  Request Full Kit
                </Button>
                <Button href="/contact" variant="outline">
                  <Download className="h-4 w-4" />
                  Partnership Enquiry
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
