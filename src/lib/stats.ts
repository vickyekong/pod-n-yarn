import { episodes } from "@/data/episodes";

const totalPlays = episodes.reduce((sum, ep) => sum + (ep.plays ?? 0), 0);

export const siteStats = {
  episodes: episodes.length,
  listeners: 10000,
  streams: totalPlays,
  communityMembers: 10000,
  storiesShared: 200,
};

export function formatStatCount(value: number): string {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M+`;
  if (value >= 1000) return `${Math.floor(value / 1000)}K+`;
  return `${value}+`;
}

/** iTunes RSS duration format from minutes */
export function formatItunesDuration(minutes: number): string {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:00`;
}
