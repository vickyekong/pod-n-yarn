import type { Episode } from "@/lib/types";
import { images } from "@/data/images";

export const episodes: Episode[] = [
  {
    id: "1",
    slug: "love-in-lagos-no-filter",
    title: "Love in Lagos: No Filter Edition",
    description:
      "We dive deep into modern dating in Lagos — situationships, red flags, and why everyone is 'busy'.",
    duration: 78,
    guestName: "Temi Adeyemi",
    guestSlug: "temi-adeyemi",
    thumbnail: images.episodes.love,
    type: "video",
    topics: ["relationships", "culture", "lifestyle"],
    publishedAt: "2026-06-20",
    spotifyUrl: "https://open.spotify.com/show/podnyarn",
    appleUrl: "https://podcasts.apple.com/podnyarn",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    featured: true,
    popular: true,
    plays: 42000,
    showNotes:
      "In this episode, we unpack the realities of dating in Nigeria's busiest city. From Instagram love to family pressure, nothing is off limits.",
  },
  {
    id: "2",
    slug: "building-while-broke",
    title: "Building While Broke: Startup Stories",
    description:
      "Young Nigerian founders share how they started businesses with ₦50k and a dream.",
    duration: 92,
    guestName: "Chidi Okonkwo",
    guestSlug: "chidi-okonkwo",
    thumbnail: images.episodes.startup,
    type: "audio",
    topics: ["career-business", "culture"],
    publishedAt: "2026-06-13",
    spotifyUrl: "https://open.spotify.com/show/podnyarn",
    appleUrl: "https://podcasts.apple.com/podnyarn",
    popular: true,
    plays: 38500,
    showNotes:
      "Real talk about bootstrapping, side hustles, and the hustle culture that defines Nigerian entrepreneurship.",
  },
  {
    id: "3",
    slug: "nollywood-unfiltered",
    title: "Nollywood Unfiltered: Behind the Glam",
    description:
      "A rising actress pulls back the curtain on fame, pressure, and staying grounded in Nollywood.",
    duration: 65,
    guestName: "Adaeze Nwosu",
    guestSlug: "adaeze-nwosu",
    thumbnail: images.episodes.nollywood,
    type: "video",
    topics: ["entertainment", "culture"],
    publishedAt: "2026-06-06",
    spotifyUrl: "https://open.spotify.com/show/podnyarn",
    appleUrl: "https://podcasts.apple.com/podnyarn",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    plays: 31000,
    showNotes:
      "From audition rooms to red carpets — the unfiltered journey of breaking into Nigeria's film industry.",
  },
  {
    id: "4",
    slug: "faith-vs-culture",
    title: "Faith vs Culture: Can Both Coexist?",
    description:
      "A raw conversation about navigating tradition, Christianity, and modern Nigerian identity.",
    duration: 84,
    guestName: "Pastor Ifeanyi Mba",
    guestSlug: "ifeanyi-mba",
    thumbnail: images.episodes.faith,
    type: "audio",
    topics: ["faith", "culture", "hot-takes"],
    publishedAt: "2026-05-30",
    spotifyUrl: "https://open.spotify.com/show/podnyarn",
    appleUrl: "https://podcasts.apple.com/podnyarn",
    plays: 28000,
    showNotes:
      "We tackle the tension between ancestral traditions and contemporary faith practices in Nigerian homes.",
  },
  {
    id: "5",
    slug: "afrobeats-global-takeover",
    title: "Afrobeats & The Global Takeover",
    description:
      "Music journalist breaks down how Nigerian sound conquered the world — and what's next.",
    duration: 71,
    guestName: "Kemi Balogun",
    guestSlug: "kemi-balogun",
    thumbnail: images.episodes.afrobeats,
    type: "video",
    topics: ["entertainment", "culture", "lifestyle"],
    publishedAt: "2026-05-23",
    spotifyUrl: "https://open.spotify.com/show/podnyarn",
    appleUrl: "https://podcasts.apple.com/podnyarn",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    popular: true,
    plays: 45000,
    showNotes:
      "From Fela to Burna — tracing the lineage of Afrobeats and its impact on global pop culture.",
  },
  {
    id: "6",
    slug: "mental-health-we-need-to-talk",
    title: "Mental Health: We Need to Talk",
    description:
      "Breaking the silence around anxiety, depression, and therapy in Nigerian communities.",
    duration: 88,
    guestName: "Dr. Funke Oladipo",
    guestSlug: "funke-oladipo",
    thumbnail: images.episodes.mental,
    type: "audio",
    topics: ["lifestyle", "faith", "hot-takes"],
    publishedAt: "2026-05-16",
    spotifyUrl: "https://open.spotify.com/show/podnyarn",
    appleUrl: "https://podcasts.apple.com/podnyarn",
    plays: 52000,
    showNotes:
      "A licensed therapist joins us to discuss stigma, healing, and why 'just pray about it' isn't always enough.",
  },
  {
    id: "7",
    slug: "japa-or-stay",
    title: "Japa or Stay? The Big Decision",
    description:
      "Diaspora Nigerians debate leaving vs staying — costs, dreams, and the guilt in between.",
    duration: 95,
    guestName: "Emeka & Zainab",
    guestSlug: "emeka-zainab",
    thumbnail: images.episodes.japa,
    type: "video",
    topics: ["career-business", "culture", "hot-takes"],
    publishedAt: "2026-05-09",
    spotifyUrl: "https://open.spotify.com/show/podnyarn",
    appleUrl: "https://podcasts.apple.com/podnyarn",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    popular: true,
    plays: 61000,
    showNotes:
      "The most debated topic in Nigerian Twitter — we bring real stories from both sides of the ocean.",
  },
  {
    id: "8",
    slug: "street-food-chronicles",
    title: "Street Food Chronicles: Lagos Edition",
    description:
      "Food blogger ranks suya spots, argues about jollof, and reveals hidden gems across the city.",
    duration: 58,
    guestName: "Bola 'Suya Queen' Hassan",
    guestSlug: "bola-hassan",
    thumbnail: images.episodes.food,
    type: "audio",
    topics: ["lifestyle", "culture"],
    publishedAt: "2026-05-02",
    spotifyUrl: "https://open.spotify.com/show/podnyarn",
    appleUrl: "https://podcasts.apple.com/podnyarn",
    plays: 24000,
    showNotes:
      "Because every great conversation in Nigeria happens over food. We explore Lagos street food culture.",
  },
];

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find((e) => e.slug === slug);
}

export function getFeaturedEpisode(): Episode {
  return episodes.find((e) => e.featured) ?? episodes[0];
}

export function getLatestEpisodes(count = 6): Episode[] {
  return [...episodes]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}

export function getPopularEpisodes(count = 6): Episode[] {
  return [...episodes]
    .sort((a, b) => (b.plays ?? 0) - (a.plays ?? 0))
    .slice(0, count);
}

export function getEpisodesByTopic(topic: string): Episode[] {
  if (topic === "all") return episodes;
  return episodes.filter((e) => e.topics.includes(topic as Episode["topics"][number]));
}

export type EpisodeSort = "latest" | "popular";

export function sortEpisodes(list: Episode[], sort: EpisodeSort): Episode[] {
  if (sort === "popular") {
    return [...list].sort((a, b) => (b.plays ?? 0) - (a.plays ?? 0));
  }
  return [...list].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
