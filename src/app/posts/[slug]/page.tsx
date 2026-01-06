import React from "react";
import { getWebsiteMetrics } from "@/hooks/use-umami";
import { getPosts } from "@/lib/posts";
import { PostItemProps } from "@/modules/posts/view";

interface BlogSlugPageProps {
  slug: string;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: PostItemProps) => ({
    slug: post.slug,
  }));
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<BlogSlugPageProps>;
}) {
  const { slug } = await params;
  const { pages } = await getWebsiteMetrics();

  return (
    <div>
      <h1>Hello world</h1>
      <p>This is a sample MDX content for the post with slug: {slug}</p>
    </div>
  );
}
