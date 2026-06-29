import type { Metadata } from "next";
import { OptimizedImage as Image } from "@/components/ui/OptimizedImage";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { blogPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles, behind-the-scenes stories, and updates from Pod n' Yarn.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Articles"
        title="The Yarn Blog"
        description="Stories from the studio, episode highlights, and thoughts from the team."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group editorial-card block overflow-hidden rounded-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-muted-foreground">
                      {post.author} · {post.readTime} min read
                    </p>
                    <h2 className="font-heading mt-2 text-xl font-bold group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
