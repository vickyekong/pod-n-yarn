import type { MerchItem, BlogPost, Sponsor } from "@/lib/types";
import { images } from "@/data/images";

export const merchItems: MerchItem[] = [
  {
    id: "1",
    slug: "yarn-gang-tee",
    name: "Yarn Gang Tee",
    price: 8500,
    currency: "NGN",
    image: "/images/merch/tee.svg",
    category: "apparel",
  },
  {
    id: "2",
    slug: "zero-fake-hoodie",
    name: "Zero Fake Hoodie",
    price: 18000,
    currency: "NGN",
    image: "/images/merch/hoodie.svg",
    category: "apparel",
  },
  {
    id: "3",
    slug: "pod-n-yarn-cap",
    name: "Pod n' Yarn Cap",
    price: 6500,
    currency: "NGN",
    image: "/images/merch/cap.svg",
    category: "accessories",
  },
  {
    id: "4",
    slug: "gist-sticker-pack",
    name: "Gist Sticker Pack",
    price: 2500,
    currency: "NGN",
    image: "/images/merch/stickers.svg",
    category: "accessories",
  },
  {
    id: "5",
    slug: "yarn-mug",
    name: "Morning Yarn Mug",
    price: 4500,
    currency: "NGN",
    image: "/images/merch/mug.svg",
    category: "drinkware",
  },
  {
    id: "6",
    slug: "real-talk-tee",
    name: "Real Talk Tee",
    price: 8500,
    currency: "NGN",
    image: "/images/merch/tee.svg",
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
    coverImage: images.studio.hero,
    author: "Boma Bliss",
    publishedAt: "2026-05-01",
    readTime: 5,
  },
  {
    id: "2",
    slug: "top-10-episodes-you-missed",
    title: "Top 10 Episodes You Might Have Missed",
    excerpt: "Our community's favorite deep cuts — conversations that changed perspectives.",
    coverImage: images.studio.bts1,
    author: "Boma Bliss",
    publishedAt: "2026-04-15",
    readTime: 8,
  },
  {
    id: "3",
    slug: "behind-the-mic-studio-tour",
    title: "Behind the Mic: A Studio Tour",
    excerpt: "Take a peek inside our Lagos studio where the magic (and the gists) happen.",
    coverImage: images.studio.bts2,
    author: "Boma Bliss",
    publishedAt: "2026-03-20",
    readTime: 4,
  },
];

export const sponsors: Sponsor[] = [
  { name: "Paystack", logo: "/images/sponsors/paystack.svg", url: "#" },
  { name: "Flutterwave", logo: "/images/sponsors/flutterwave.svg", url: "#" },
  { name: "Andela", logo: "/images/sponsors/andela.svg", url: "#" },
];

export const pressMentions = [
  { outlet: "TechCabal", title: "Pod n' Yarn is redefining Nigerian podcast culture", date: "2026-04-10" },
  { outlet: "The Guardian NG", title: "The podcast giving voice to unfiltered Nigerian stories", date: "2026-03-05" },
  { outlet: "Pulse Nigeria", title: "Why everyone is talking about Pod n' Yarn", date: "2026-02-18" },
];
