import { Hero } from "@/components/home/Hero";
import { LatestEpisodes } from "@/components/home/LatestEpisodes";
import { FeaturedGuests } from "@/components/home/FeaturedGuests";
import { AboutSection } from "@/components/home/AboutSection";
import { CommunitySection } from "@/components/home/CommunitySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestEpisodes />
      <FeaturedGuests />
      <AboutSection />
      <CommunitySection />
    </>
  );
}
