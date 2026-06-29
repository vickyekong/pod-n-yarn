import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { AudioPlayerProvider } from "@/components/layout/AudioPlayerProvider";
import { StickyAudioPlayer } from "@/components/layout/StickyAudioPlayer";
import { PageTransition } from "@/components/layout/PageTransition";
import { PodcastJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Nigerian podcast",
    "Pod n Yarn",
    "African podcast",
    "culture",
    "storytelling",
    "Lagos podcast",
    "Afrobeats",
    "real talk",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.tagline,
    description: siteConfig.description,
    images: [{ url: images.og, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.tagline,
    description: siteConfig.description,
    images: [images.og],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: images.logo.icon, type: "image/png" }],
    apple: [{ url: images.logo.icon, type: "image/png" }],
  },
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <PodcastJsonLd />
      </head>
      <body className="min-h-screen bg-background pb-0 font-sans text-foreground antialiased has-player:pb-24">
        <ThemeProvider>
          <AudioPlayerProvider>
            <Navbar />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <StickyAudioPlayer />
          </AudioPlayerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
