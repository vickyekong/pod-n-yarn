import { OptimizedImage as Image } from "@/components/ui/OptimizedImage";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const btsImages = [
  { src: images.studio.bts1, label: "Mic setup" },
  { src: images.studio.bts2, label: "Studio lounge" },
  { src: images.studio.bts3, label: "Episode planning" },
];

function StudioPhoto({
  src,
  label,
  className,
  priority,
}: {
  src: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#F8F4ED]/10",
        className
      )}
    >
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 50vw, 25vw"
        priority={priority}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-4 py-3">
        <p className="text-left text-xs font-semibold uppercase tracking-wider text-white/90">
          {label}
        </p>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm-gold">
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
              <StudioPhoto
                src={images.studio.hero}
                label="Recording session"
                className="relative col-span-2 aspect-video"
                priority
              />
              {btsImages.map((img) => (
                <StudioPhoto
                  key={img.src}
                  src={img.src}
                  label={img.label}
                  className="relative aspect-square"
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
