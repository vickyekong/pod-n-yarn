import type { Guest } from "@/lib/types";
import { images } from "@/data/images";

export const guests: Guest[] = [
  {
    id: "1",
    slug: "temi-adeyemi",
    name: "Temi Adeyemi",
    profession: "Relationship Coach & Author",
    photo: images.guests.temi,
    episodeSlug: "love-in-lagos-no-filter",
    episodeTitle: "Love in Lagos: No Filter Edition",
    quote: "Lagos love is a full-time job with no salary.",
    featured: true,
  },
  {
    id: "2",
    slug: "chidi-okonkwo",
    name: "Chidi Okonkwo",
    profession: "Tech Founder & Angel Investor",
    photo: images.guests.chidi,
    episodeSlug: "building-while-broke",
    episodeTitle: "Building While Broke: Startup Stories",
    quote: "Your first ₦50k idea is worth more than your ₦5M copycat.",
    featured: true,
  },
  {
    id: "3",
    slug: "adaeze-nwosu",
    name: "Adaeze Nwosu",
    profession: "Nollywood Actress",
    photo: images.guests.adaeze,
    episodeSlug: "nollywood-unfiltered",
    episodeTitle: "Nollywood Unfiltered: Behind the Glam",
    quote: "The camera sees everything — including the tears nobody posts.",
    featured: true,
  },
  {
    id: "4",
    slug: "kemi-balogun",
    name: "Kemi Balogun",
    profession: "Music Journalist",
    photo: images.guests.kemi,
    episodeSlug: "afrobeats-global-takeover",
    episodeTitle: "Afrobeats & The Global Takeover",
    quote: "Nigeria didn't join global music — global music came to us.",
    featured: true,
  },
  {
    id: "5",
    slug: "funke-oladipo",
    name: "Dr. Funke Oladipo",
    profession: "Clinical Psychologist",
    photo: images.guests.funke,
    episodeSlug: "mental-health-we-need-to-talk",
    episodeTitle: "Mental Health: We Need to Talk",
    quote: "Healing isn't weakness — pretending is.",
    featured: false,
  },
  {
    id: "6",
    slug: "bola-hassan",
    name: "Bola 'Suya Queen' Hassan",
    profession: "Food Blogger",
    photo: images.guests.bola,
    episodeSlug: "street-food-chronicles",
    episodeTitle: "Street Food Chronicles: Lagos Edition",
    quote: "The best conversations happen over peppered suya at 11pm.",
    featured: false,
  },
  {
    id: "7",
    slug: "ifeanyi-mba",
    name: "Pastor Ifeanyi Mba",
    profession: "Pastor & Cultural Commentator",
    photo: images.guests.ifeanyi,
    episodeSlug: "faith-vs-culture",
    episodeTitle: "Faith vs Culture: Can Both Coexist?",
    quote: "Tradition and faith can coexist when we stop pretending they can't.",
    featured: false,
  },
  {
    id: "8",
    slug: "emeka-zainab",
    name: "Emeka & Zainab",
    profession: "Diaspora Voices",
    photo: images.guests.emeka,
    episodeSlug: "japa-or-stay",
    episodeTitle: "Japa or Stay? The Big Decision",
    quote: "The guilt of leaving and the fear of staying — both are real.",
    featured: false,
  },
];

export function getFeaturedGuests(): Guest[] {
  return guests.filter((g) => g.featured);
}

export function getGuestBySlug(slug: string): Guest | undefined {
  return guests.find((g) => g.slug === slug);
}

export function getGuestPhoto(slug?: string): string {
  if (!slug) return images.guests.default;
  return getGuestBySlug(slug)?.photo ?? images.guests.default;
}
