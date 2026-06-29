import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { HostCard } from "@/components/ui/HostCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { hosts } from "@/data/hosts";

export const metadata: Metadata = {
  title: "Host",
  description: "Meet Boma Bliss — the voice behind Pod n' Yarn.",
};

export default function HostsPage() {
  return (
    <>
      <PageHero
        label="The Voice"
        title="Meet Boma Bliss"
        description="The storyteller, host, and creator behind every honest conversation on Pod n' Yarn."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          {hosts.map((host, i) => (
            <FadeIn key={host.id} delay={i * 0.1}>
              <HostCard host={host} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
