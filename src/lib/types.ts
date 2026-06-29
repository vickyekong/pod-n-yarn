export type Topic =
  | "relationships"
  | "career-business"
  | "entertainment"
  | "faith"
  | "culture"
  | "lifestyle"
  | "hot-takes";

export type EpisodeType = "video" | "audio";

export interface Episode {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: number;
  guestName?: string;
  guestSlug?: string;
  thumbnail: string;
  type: EpisodeType;
  topics: Topic[];
  publishedAt: string;
  spotifyUrl: string;
  appleUrl: string;
  youtubeWatchUrl?: string;
  showNotes?: string;
  featured?: boolean;
  popular?: boolean;
  plays?: number;
}

export interface Guest {
  id: string;
  slug: string;
  name: string;
  profession: string;
  photo: string;
  episodeSlug: string;
  episodeTitle: string;
  quote: string;
  featured?: boolean;
}

export interface Host {
  id: string;
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  funFact: string;
  socials: { platform: string; url: string; handle: string }[];
}

export interface MerchItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  category: "apparel" | "accessories" | "drinkware";
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  coverImage: string;
  author: string;
  publishedAt: string;
  readTime: number;
}

export interface PressMention {
  outlet: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
}
