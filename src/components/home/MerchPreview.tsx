import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { merchItems } from "@/data/content";

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(price);
}

export function MerchPreview() {
  const items = merchItems.slice(0, 4);

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Merch Store
              </p>
              <h2 className="font-heading mt-2 text-4xl font-extrabold md:text-5xl">
                Rep The Yarn Gang
              </h2>
            </div>
            <Link
              href="/shop"
              className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Shop All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.1}>
              <Link href="/shop" className="group editorial-card block overflow-hidden rounded-2xl">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold group-hover:text-accent">{item.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {formatPrice(item.price, item.currency)}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Button href="/shop" variant="primary" size="lg">
              <ShoppingBag className="h-5 w-5" />
              Visit the Shop
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
