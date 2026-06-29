import type { Guest } from "@/lib/types";

export const guests: Guest[] = [
  {
    id: "1",
    slug: "temi-adeyemi",
    name: "Temi Adeyemi",
    profession: "Relationship Coach & Author",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
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
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
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
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
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
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80",
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
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
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
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    episodeSlug: "street-food-chronicles",
    episodeTitle: "Street Food Chronicles: Lagos Edition",
    quote: "The best conversations happen over peppered suya at 11pm.",
    featured: false,
  },
];

export function getFeaturedGuests(): Guest[] {
  return guests.filter((g) => g.featured);
}

export function getGuestBySlug(slug: string): Guest | undefined {
  return guests.find((g) => g.slug === slug);
}
