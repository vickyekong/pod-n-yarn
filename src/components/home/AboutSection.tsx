import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const btsImages = [
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80",
  "https://images.unsplash.com/photo-1589903308904-0d07142ebbcf?w=600&q=80",
  "https://images.unsplash.com/photo-1478737272769-f78574dee846?w=600&q=80",
];

export function AboutSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-warm-gold">
              About Pod n&apos; Yarn
            </p>
            <h2 className="font-heading mt-2 text-4xl font-extrabold md:text-5xl">
              Where Real Conversations Happen
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              {siteConfig.mission}
            </p>
            <p className="mt-4 leading-relaxed text-primary-foreground/70">{siteConfig.story}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white/10 p-5">
                <h3 className="font-heading font-bold text-warm-gold">Mission</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{siteConfig.mission}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-5">
                <h3 className="font-heading font-bold text-warm-gold">Vision</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{siteConfig.vision}</p>
              </div>
            </div>

            <Button href="/about" variant="accent" className="mt-8">
              Learn More About Us
            </Button>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="grid grid-cols-2 gap-4">
              {btsImages.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}
                >
                  <Image src={src} alt="Behind the scenes" fill className="object-cover" />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
