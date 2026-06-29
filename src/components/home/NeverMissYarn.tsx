import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { PlatformLogos } from "@/components/ui/PlatformLogos";
import { siteConfig } from "@/data/site";

export function NeverMissYarn() {
  return (
    <section className="border-t border-border bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-12 text-primary-foreground md:px-16 md:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 90% 20%, #E67E22 0%, transparent 40%)",
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-heading text-4xl font-extrabold md:text-5xl">
                  Never Miss a Yarn
                </h2>
                <p className="mt-4 max-w-md text-primary-foreground/75">
                  Get every episode, community update, and exclusive clip delivered to your inbox.
                  Join 10K+ listeners who never miss the gist.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/community" variant="accent">
                    Join Community
                  </Button>
                  <Button
                    href={siteConfig.whatsapp}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-primary"
                  >
                    WhatsApp Group
                  </Button>
                </div>
              </div>
              <div>
                <NewsletterForm variant="footer" />
                <div className="mt-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
                    Or listen on
                  </p>
                  <PlatformLogos variant="light" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
