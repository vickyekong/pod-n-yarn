/** Re-export computed stats — see lib/stats.ts for source of truth */
export { siteStats, formatStatCount } from "@/lib/stats";

export const questionOfTheWeek = {
  question: "Would you japa for love or stay for family?",
  votes: { japa: 1240, stay: 890 },
};

export const communityPoll = {
  question: "What should we yarn about next?",
  options: [
    { id: "dating", label: "Modern Dating in Nigeria", votes: 342 },
    { id: "money", label: "Money & Friendships", votes: 289 },
    { id: "church", label: "Church Culture", votes: 256 },
    { id: "side", label: "Side Hustle Life", votes: 412 },
  ],
};
