import { Hero } from "@/components/home/Hero";
import { LatestEpisodes } from "@/components/home/LatestEpisodes";
import { FeaturedGuests } from "@/components/home/FeaturedGuests";
import { TrendingConversations } from "@/components/home/TrendingConversations";
import { AboutSection } from "@/components/home/AboutSection";
import { MeetHosts } from "@/components/home/MeetHosts";
import { CommunitySection } from "@/components/home/CommunitySection";
import { MediaPartnerships } from "@/components/home/MediaPartnerships";
import { MerchPreview } from "@/components/home/MerchPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestEpisodes />
      <FeaturedGuests />
      <TrendingConversations />
      <AboutSection />
      <MeetHosts />
      <CommunitySection />
      <MediaPartnerships />
      <MerchPreview />
    </>
  );
}
