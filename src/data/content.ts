import type { MerchItem, BlogPost, Sponsor } from "@/lib/types";

export const merchItems: MerchItem[] = [
  {
    id: "1",
    slug: "yarn-gang-tee",
    name: "Yarn Gang Tee",
    price: 8500,
    currency: "NGN",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    category: "apparel",
  },
  {
    id: "2",
    slug: "zero-fake-hoodie",
    name: "Zero Fake Hoodie",
    price: 18000,
    currency: "NGN",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    category: "apparel",
  },
  {
    id: "3",
    slug: "pod-n-yarn-cap",
    name: "Pod n' Yarn Cap",
    price: 6500,
    currency: "NGN",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
    category: "accessories",
  },
  {
    id: "4",
    slug: "gist-sticker-pack",
    name: "Gist Sticker Pack",
    price: 2500,
    currency: "NGN",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    category: "accessories",
  },
  {
    id: "5",
    slug: "yarn-mug",
    name: "Morning Yarn Mug",
    price: 4500,
    currency: "NGN",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca93?w=600&q=80",
    category: "drinkware",
  },
  {
    id: "6",
    slug: "real-talk-tee",
    name: "Real Talk Tee",
    price: 8500,
    currency: "NGN",
    image: "https://images.unsplash.com/photo-1583743814966-6a5ac098195a?w=600&q=80",
    category: "apparel",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-we-started-pod-n-yarn",
    title: "Why We Started Pod n' Yarn",
    excerpt:
      "The origin story of a podcast born from late-night gists and a shared frustration with fake content.",
    coverImage: "https://images.unsplash.com/photo-1478737272769-f78574dee846?w=800&q=80",
    author: "Nneka Obi",
    publishedAt: "2026-05-01",
    readTime: 5,
  },
  {
    id: "2",
    slug: "top-10-episodes-you-missed",
    title: "Top 10 Episodes You Might Have Missed",
    excerpt: "Our community's favorite deep cuts — conversations that changed perspectives.",
    coverImage: "https://images.unsplash.com/photo-1591115765373-5207764f72f7?w=800&q=80",
    author: "Amara Dike",
    publishedAt: "2026-04-15",
    readTime: 8,
  },
  {
    id: "3",
    slug: "behind-the-mic-studio-tour",
    title: "Behind the Mic: A Studio Tour",
    excerpt: "Take a peek inside our Lagos studio where the magic (and the gists) happen.",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    author: "Tunde Bakare",
    publishedAt: "2026-03-20",
    readTime: 4,
  },
];

export const sponsors: Sponsor[] = [
  { name: "Paystack", logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&q=80", url: "#" },
  { name: "Flutterwave", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80", url: "#" },
  { name: "Andela", logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80", url: "#" },
];

export const pressMentions = [
  { outlet: "TechCabal", title: "Pod n' Yarn is redefining Nigerian podcast culture", date: "2026-04-10" },
  { outlet: "The Guardian NG", title: "The podcast giving voice to unfiltered Nigerian stories", date: "2026-03-05" },
  { outlet: "Pulse Nigeria", title: "Why everyone is talking about Pod n' Yarn", date: "2026-02-18" },
];
