"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Contact Us"
        description="Partnerships, press enquiries, guest suggestions — we'd love to hear from you."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Subject</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a topic</option>
                    <option value="partnership">Partnership / Sponsorship</option>
                    <option value="press">Press / Media</option>
                    <option value="guest">Guest Suggestion</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full">
                  {status === "success" ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div className="editorial-card rounded-2xl p-8">
                  <h2 className="font-heading text-xl font-bold">Contact Information</h2>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="h-5 w-5 shrink-0 text-accent" />
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                        {siteConfig.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="h-5 w-5 shrink-0 text-accent" />
                      {siteConfig.phone}
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 shrink-0 text-accent" />
                      Lagos, Nigeria
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
                  <h2 className="font-heading text-xl font-bold">Partnership Enquiries</h2>
                  <p className="mt-3 text-sm text-primary-foreground/70">
                    Interested in sponsoring an episode or collaborating with Pod n&apos; Yarn?
                    Download our media kit or reach out directly.
                  </p>
                  <Button
                    href={siteConfig.mediaKitUrl}
                    variant="accent"
                    className="mt-6"
                  >
                    Download Media Kit
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
