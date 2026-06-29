import type { Episode } from "@/lib/types";

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
    thumbnail: "https://images.unsplash.com/photo-1478737272769-f78574dee846?w=800&q=80",
    type: "video",
    topics: ["relationships", "culture", "lifestyle"],
    publishedAt: "2026-06-20",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "https://youtube.com/watch?v=example",
    featured: true,
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
    thumbnail: "https://images.unsplash.com/photo-1591115765373-5207764f72f7?w=800&q=80",
    type: "audio",
    topics: ["career-business", "culture"],
    publishedAt: "2026-06-13",
    spotifyUrl: "#",
    appleUrl: "#",
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
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    type: "video",
    topics: ["entertainment", "culture"],
    publishedAt: "2026-06-06",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "https://youtube.com/watch?v=example2",
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
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    type: "audio",
    topics: ["faith", "culture", "hot-takes"],
    publishedAt: "2026-05-30",
    spotifyUrl: "#",
    appleUrl: "#",
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
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    type: "video",
    topics: ["entertainment", "culture", "lifestyle"],
    publishedAt: "2026-05-23",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "https://youtube.com/watch?v=example3",
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
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    type: "audio",
    topics: ["lifestyle", "faith", "hot-takes"],
    publishedAt: "2026-05-16",
    spotifyUrl: "#",
    appleUrl: "#",
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
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    type: "video",
    topics: ["career-business", "culture", "hot-takes"],
    publishedAt: "2026-05-09",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "https://youtube.com/watch?v=example4",
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
    thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    type: "audio",
    topics: ["lifestyle", "culture"],
    publishedAt: "2026-05-02",
    spotifyUrl: "#",
    appleUrl: "#",
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

export function getEpisodesByTopic(topic: string): Episode[] {
  if (topic === "all") return episodes;
  return episodes.filter((e) => e.topics.includes(topic as Episode["topics"][number]));
}
