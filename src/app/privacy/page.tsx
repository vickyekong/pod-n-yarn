import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Pod n' Yarn — how we handle your data and communications.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="How Pod n' Yarn collects, uses, and protects your information."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 prose prose-neutral dark:prose-invert">
          <FadeIn>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-sm">Last updated: June 2026</p>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Information We Collect</h2>
                <p className="mt-3 leading-relaxed">
                  When you subscribe to our newsletter, join the Yarn Gang community, submit a story,
                  or contact us, we may collect your name, email address, and any content you choose
                  to share. We use this information solely to deliver episodes, community updates,
                  and respond to your enquiries.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">How We Use Your Data</h2>
                <p className="mt-3 leading-relaxed">
                  We do not sell your personal information. Data is used to send episode notifications,
                  improve our content, and communicate about partnerships or press requests you initiate.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Third-Party Services</h2>
                <p className="mt-3 leading-relaxed">
                  We may use trusted third-party tools for email delivery, analytics, and audio hosting.
                  These providers are bound by their own privacy policies and industry-standard security practices.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Your Rights</h2>
                <p className="mt-3 leading-relaxed">
                  You may request access to, correction of, or deletion of your personal data at any time
                  by emailing{" "}
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
