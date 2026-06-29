import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Pod n' Yarn merch — tees, hoodies, caps, and Yarn Gang gear.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
