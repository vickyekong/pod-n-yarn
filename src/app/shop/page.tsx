"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { merchItems } from "@/data/content";
import { cn } from "@/lib/utils";

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(price);
}

const categories = ["all", "apparel", "accessories", "drinkware"] as const;

export default function ShopPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("all");
  const [cart, setCart] = useState<string[]>([]);

  const filtered =
    category === "all" ? merchItems : merchItems.filter((item) => item.category === category);

  const addToCart = (id: string) => {
    setCart((prev) => [...prev, id]);
  };

  return (
    <>
      <PageHero
        label="Merch Store"
        title="Rep The Yarn Gang"
        description="T-shirts, hoodies, caps, and more — wear your love for real talk."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold capitalize transition-all",
                    category === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  {cat === "all" ? "All Items" : cat}
                </button>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                <ShoppingBag className="h-4 w-4" />
                {cart.length} item{cart.length !== 1 ? "s" : ""} in cart
              </div>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.05}>
                <article className="editorial-card overflow-hidden rounded-2xl">
                  <div className="relative aspect-square bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </p>
                    <h2 className="font-heading mt-1 text-xl font-bold">{item.name}</h2>
                    <p className="mt-2 text-lg font-semibold text-accent">
                      {formatPrice(item.price, item.currency)}
                    </p>
                    <Button
                      onClick={() => addToCart(item.id)}
                      variant="primary"
                      className="mt-4 w-full"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-12 text-center text-sm text-muted-foreground">
              Demo store — integrate Stripe or Paystack for checkout.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
