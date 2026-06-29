import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export function PodcastJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${images.og}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    webFeed: `${siteConfig.url}/feed.xml`,
    inLanguage: "en-NG",
    genre: ["Culture", "Society", "Entertainment"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function EpisodeJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  durationMinutes,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  durationMinutes: number;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: title,
    description,
    url,
    image: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
    datePublished,
    duration: `PT${durationMinutes}M`,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
