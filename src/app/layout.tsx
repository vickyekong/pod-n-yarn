import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { AudioPlayerProvider } from "@/components/layout/AudioPlayerProvider";
import { StickyAudioPlayer } from "@/components/layout/StickyAudioPlayer";
import { siteConfig } from "@/data/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <AudioPlayerProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <StickyAudioPlayer />
          </AudioPlayerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
