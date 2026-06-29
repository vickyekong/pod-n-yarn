import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Pod n' Yarn website, community, and content.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Use"
        description="The rules for using Pod n' Yarn content, community, and services."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <FadeIn>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-sm">Last updated: June 2026</p>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Acceptance of Terms</h2>
                <p className="mt-3 leading-relaxed">
                  By accessing pod-n-yarn.vercel.app or any Pod n&apos; Yarn platform, you agree to these
                  terms. If you do not agree, please do not use our services.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Content & Intellectual Property</h2>
                <p className="mt-3 leading-relaxed">
                  All podcast episodes, branding, and website content are owned by Pod n&apos; Yarn unless
                  otherwise credited. You may share episode links and short clips for personal, non-commercial
                  use with attribution. Reproduction of full episodes requires written permission.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Community Guidelines</h2>
                <p className="mt-3 leading-relaxed">
                  Yarn Gang members and submitters must treat others with respect. Harassment, hate speech,
                  spam, and impersonation are not tolerated. We reserve the right to remove submissions
                  or ban participants who violate these standards.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Merchandise & Payments</h2>
                <p className="mt-3 leading-relaxed">
                  All merch purchases are subject to availability. Prices are listed in Nigerian Naira (NGN)
                  unless stated otherwise. Refund and shipping policies will be provided at checkout.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Contact</h2>
                <p className="mt-3 leading-relaxed">
                  Questions about these terms? Email{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                    {siteConfig.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
