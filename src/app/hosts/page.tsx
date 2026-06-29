import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { HostCard } from "@/components/ui/HostCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { hosts } from "@/data/hosts";

export const metadata: Metadata = {
  title: "Hosts",
  description: "Meet the voices behind Pod n' Yarn — Nneka, Tunde, and Amara.",
};

export default function HostsPage() {
  return (
    <>
      <PageHero
        label="The Team"
        title="Meet The Hosts"
        description="The storytellers, producers, and community builders behind every episode."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {hosts.map((host, i) => (
              <FadeIn key={host.id} delay={i * 0.1}>
                <HostCard host={host} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
