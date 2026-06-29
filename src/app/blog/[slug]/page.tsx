import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OptimizedImage as Image } from "@/components/ui/OptimizedImage";
import { PageHero } from "@/components/ui/PageHero";
import { blogPosts } from "@/data/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero label="Article" title={post.title} />
      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
          <p className="text-sm text-muted-foreground">
            By {post.author} · {new Date(post.publishedAt).toLocaleDateString("en-NG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readTime} min read
          </p>
          <div className="show-notes mt-8">
            <p className="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              This is a placeholder article. Connect a CMS like Sanity or Contentful to manage
              full blog content, rich text, and media assets.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
