import type { Host } from "@/lib/types";
import { images } from "@/data/images";

export const hosts: Host[] = [
  {
    id: "1",
    slug: "boma-bliss",
    name: "Boma Bliss",
    role: "Host & Creator",
    photo: images.hosts.boma,
    bio: "Boma Bliss is the voice behind Pod n' Yarn — a storyteller, cultural commentator, and conversation starter who believes the best content happens when people stop performing and start being real. With a gift for drawing out honest stories and a warmth that makes every guest feel at home, Boma has built a space where Nigerians yarn freely about life, love, hustle, and everything in between.",
    funFact: "Records every episode with a cup of tea nearby — says it keeps the vibes calm and the questions sharp.",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/bomabliss", handle: "@bomabliss" },
      { platform: "Twitter", url: "https://x.com/bomabliss", handle: "@bomabliss" },
      { platform: "YouTube", url: "https://youtube.com/@bomabliss", handle: "@bomabliss" },
    ],
  },
];

export function getHostBySlug(slug: string): Host | undefined {
  return hosts.find((h) => h.slug === slug);
}

export const primaryHost = hosts[0];
