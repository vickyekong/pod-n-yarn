import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { HostCard } from "@/components/ui/HostCard";
import { hosts } from "@/data/hosts";

export function MeetHosts() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                The Voice
              </p>
              <h2 className="font-heading mt-2 text-4xl font-extrabold md:text-5xl">
                Meet Boma Bliss
              </h2>
            </div>
            <Link
              href="/hosts"
              className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Full Profiles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 mx-auto max-w-md">
          {hosts.map((host, i) => (
            <FadeIn key={host.id} delay={i * 0.1}>
              <HostCard host={host} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
