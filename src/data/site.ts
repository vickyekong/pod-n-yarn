export const siteConfig = {
  name: "Pod n' Yarn",
  tagline: "Real People. Real Talks. Zero Fake.",
  description:
    "A Nigerian podcast focused on authentic conversations, storytelling, culture, lifestyle, entertainment, and real-life experiences.",
  url: "https://pod-n-yarn.vercel.app",
  email: "hello@podnyarn.com",
  phone: "+234 800 POD YARN",
  whatsapp: "https://chat.whatsapp.com/podnyarn",
  mediaKitUrl: "/media-kit.pdf",
  social: {
    instagram: "https://instagram.com/podnyarn",
    twitter: "https://x.com/podnyarn",
    youtube: "https://youtube.com/@podnyarn",
    tiktok: "https://tiktok.com/@podnyarn",
    spotify: "https://open.spotify.com/show/podnyarn",
    apple: "https://podcasts.apple.com/podnyarn",
  },
  mission:
    "Create a safe, authentic space where real conversations happen. No scripts. No pretending. Just honest yarns.",
  vision:
    "To become Africa's most trusted voice for unfiltered conversations that inspire, challenge, and connect.",
  story:
    "Pod n' Yarn started in a Lagos studio with two friends who were tired of polished, performative content. What began as late-night gists over jollof and cold drinks became a movement — a space where Nigerians could yarn freely about love, hustle, faith, culture, and everything in between.",
};

export const primaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "Guests", href: "/guests" },
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
  { label: "Shop", href: "/shop" },
];

export const footerNavLinks = [
  { label: "Episodes", href: "/episodes" },
  { label: "Archive", href: "/archive" },
  { label: "Guests", href: "/guests" },
  { label: "About", href: "/about" },
  { label: "Hosts", href: "/hosts" },
  { label: "Community", href: "/community" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Press", href: "/press" },
  { label: "Blog", href: "/blog" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

/** @deprecated use primaryNavLinks */
export const navLinks = primaryNavLinks;

export const topicLabels: Record<string, string> = {
  relationships: "Relationships",
  "career-business": "Career & Business",
  entertainment: "Entertainment",
  faith: "Faith",
  culture: "Culture",
  lifestyle: "Lifestyle",
  "hot-takes": "Hot Takes",
};

export const streamingPlatforms = [
  { name: "Spotify", icon: "spotify", url: siteConfig.social.spotify },
  { name: "Apple Podcasts", icon: "apple", url: siteConfig.social.apple },
  { name: "YouTube", icon: "youtube", url: siteConfig.social.youtube },
];
