import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { navLinks, siteConfig, streamingPlatforms } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo theme="dark" />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(siteConfig.social).slice(0, 4).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
                  aria-label={key}
                >
                  <SocialIcon name={key} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-warm-gold">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-warm-gold">
              Listen On
            </h3>
            <ul className="mt-4 space-y-2">
              {streamingPlatforms.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-white"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-primary-foreground/70">{siteConfig.email}</p>
              <p className="text-sm text-primary-foreground/70">{siteConfig.phone}</p>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-warm-gold">
              Join The Yarn Gang
            </h3>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Get episode drops, exclusive content, and community updates.
            </p>
            <div className="mt-4">
              <NewsletterForm variant="footer" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Pod n&apos; Yarn. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/50">
            <Link href="/contact" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms
            </Link>
            <a href={siteConfig.mediaKitUrl} className="hover:text-white">
              Media Kit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
