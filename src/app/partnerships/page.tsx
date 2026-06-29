import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { OptimizedImage as Image } from "@/components/ui/OptimizedImage";
import { sponsors } from "@/data/content";
import { siteConfig } from "@/data/site";
import { Download, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Partner with Pod n' Yarn — sponsorships, brand collaborations, and media partnerships.",
};

export function PartnershipsContent() {
  return (
    <>
      <FadeIn>
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold">Our Sponsors</h2>
          <p className="mt-2 text-muted-foreground">
            Brands that believe in authentic Nigerian storytelling.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-card editorial-card-lift flex h-32 items-center justify-center rounded-2xl p-6 transition-opacity hover:opacity-90"
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={140}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-16 rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
          <h2 className="font-heading text-2xl font-bold">Work With Us</h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">
            Pod n&apos; Yarn reaches 10K+ engaged listeners across Nigeria and the diaspora.
            We offer host-read ads, branded episodes, live event partnerships, and custom
            integrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="accent">
              <Mail className="h-4 w-4" />
              Partnership Enquiry
            </Button>
            <Button
              href={siteConfig.mediaKitUrl}
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download Media Kit
            </Button>
          </div>
        </div>
      </FadeIn>
    </>
  );
}

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        label="Partnerships"
        title="Media & Partnerships"
        description="Collaborate with Nigeria's most authentic conversational podcast."
      />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <PartnershipsContent />
        </div>
      </section>
    </>
  );
}
