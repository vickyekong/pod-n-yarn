import type { Host } from "@/lib/types";

export const hosts: Host[] = [
  {
    id: "1",
    slug: "nneka-obi",
    name: "Nneka Obi",
    role: "Co-Host & Creative Director",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    bio: "Nneka is a storyteller, brand strategist, and the queen of asking questions nobody else will. With a background in media and culture journalism, she brings warmth, wit, and unfiltered honesty to every episode.",
    funFact: "Once cried during a podcast recording because a guest's story hit too close to home.",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/nnekaobi", handle: "@nnekaobi" },
      { platform: "Twitter", url: "https://x.com/nnekaobi", handle: "@nnekaobi" },
    ],
  },
  {
    id: "2",
    slug: "tunde-bakare",
    name: "Tunde Bakare",
    role: "Co-Host & Producer",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    bio: "Tunde is the voice behind the mic and the brain behind the board. A former radio host turned podcast producer, he's obsessed with sound design, real talk, and making sure every guest feels heard.",
    funFact: "Has a collection of 200+ Nigerian vinyl records and plays one before every recording.",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/tundebakare", handle: "@tundebakare" },
      { platform: "YouTube", url: "https://youtube.com/@tundebakare", handle: "@tundebakare" },
    ],
  },
  {
    id: "3",
    slug: "amara-dike",
    name: "Amara Dike",
    role: "Community Lead",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    bio: "Amara runs the Yarn Gang — our community of listeners who shape the show. She reads every DM, curates topic suggestions, and makes sure Pod n' Yarn stays connected to the people.",
    funFact: "Started as a listener who submitted a story that became our most-downloaded episode.",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/amaradike", handle: "@amaradike" },
      { platform: "TikTok", url: "https://tiktok.com/@amaradike", handle: "@amaradike" },
    ],
  },
];

export function getHostBySlug(slug: string): Host | undefined {
  return hosts.find((h) => h.slug === slug);
}
