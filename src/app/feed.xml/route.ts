import { episodes } from "@/data/episodes";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export async function GET() {
  const items = episodes
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map(
      (ep) => `
    <item>
      <title><![CDATA[${ep.title}]]></title>
      <description><![CDATA[${ep.description}]]></description>
      <link>${siteConfig.url}/episodes/${ep.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/episodes/${ep.slug}</guid>
      <pubDate>${new Date(ep.publishedAt).toUTCString()}</pubDate>
      <itunes:duration>${ep.duration}:00</itunes:duration>
      <enclosure url="${siteConfig.url}${ep.thumbnail}" type="image/svg+xml" />
    </item>`
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description><![CDATA[${siteConfig.description}]]></description>
    <language>en-ng</language>
    <image>
      <url>${siteConfig.url}${images.og}</url>
      <title>${siteConfig.name}</title>
      <link>${siteConfig.url}</link>
    </image>
    <itunes:author>${siteConfig.name}</itunes:author>
    <itunes:summary><![CDATA[${siteConfig.description}]]></itunes:summary>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
