import type { MerchItem, BlogPost, Sponsor, PressMention } from "@/lib/types";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

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
    image: "/images/merch/real-talk-tee.svg",
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
    body: [
      "It started the way most honest things in Lagos do — over food, after midnight, when the filters come off. Boma Bliss had been recording voice notes for friends, ranting about how Nigerian content was becoming too polished, too performative, too afraid to say the real thing.",
      "Those voice notes became studio sessions. Studio sessions became episodes. And episodes became Pod n' Yarn — a space where Nigerians could yarn freely about love, hustle, faith, culture, and everything in between.",
      "We are not trying to be the loudest show on the internet. We are trying to be the most trusted. Every episode is a invitation to sit with us, listen in, and maybe see your own story reflected back.",
      "If you have ever felt like the conversations that matter most happen off-camera, this podcast is for you. Welcome to the Yarn Gang.",
    ],
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
    body: [
      "With new episodes dropping every week, it is easy to miss the gems buried in the archive. The Yarn Gang voted, debated, and argued in our WhatsApp group — and these are the episodes that kept coming up.",
      "From Love in Lagos to Japa or Stay, these conversations sparked the most DMs, the most voice notes, and the most 'I felt seen' messages we have ever received.",
      "Start with Mental Health: We Need to Talk if you want something heavy and healing. Try Street Food Chronicles if you want something light and very Lagos. And if you are new here, Building While Broke is the perfect introduction to what we mean by real talk.",
      "Browse the full archive on our Episodes page — every conversation is worth your time.",
    ],
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
    body: [
      "Our studio is not fancy — and that is intentional. One good microphone, warm lighting, a couch that has absorbed hundreds of hours of honest conversation, and a whiteboard covered in episode ideas from the Yarn Gang.",
      "Before every recording, Boma runs through questions twice: once on paper, once out loud. No teleprompters. No scripts. Just a roadmap and the willingness to follow the conversation wherever it goes.",
      "The best moments often happen in the last ten minutes, when the guest forgets the mic is on. That is when Pod n' Yarn feels most alive — unfiltered, unexpected, and deeply human.",
      "Want to visit or collaborate? Reach out via our Contact page. We love meeting listeners IRL.",
    ],
    coverImage: images.studio.bts2,
    author: "Boma Bliss",
    publishedAt: "2026-03-20",
    readTime: 4,
  },
];

export const sponsors: Sponsor[] = [
  { name: "Paystack", logo: "/images/sponsors/paystack.svg", url: "https://paystack.com" },
  { name: "Flutterwave", logo: "/images/sponsors/flutterwave.svg", url: "https://flutterwave.com" },
  { name: "Andela", logo: "/images/sponsors/andela.svg", url: "https://andela.com" },
];

export const pressMentions: PressMention[] = [
  {
    outlet: "TechCabal",
    title: "Pod n' Yarn is redefining Nigerian podcast culture",
    date: "2026-04-10",
    excerpt:
      "With unscripted conversations and a rapidly growing diaspora audience, Pod n' Yarn is proving that authenticity scales.",
    url: "https://techcabal.com",
  },
  {
    outlet: "The Guardian NG",
    title: "The podcast giving voice to unfiltered Nigerian stories",
    date: "2026-03-05",
    excerpt:
      "Host Boma Bliss has built a loyal community by tackling topics Nigerian media often sidesteps — from mental health to japa culture.",
    url: "https://guardian.ng",
  },
  {
    outlet: "Pulse Nigeria",
    title: "Why everyone is talking about Pod n' Yarn",
    date: "2026-02-18",
    excerpt:
      "The Yarn Gang WhatsApp community and weekly episode drops have made Pod n' Yarn one of Nigeria's fastest-growing independent podcasts.",
    url: "https://www.pulse.ng",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
