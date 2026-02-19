import React from "react";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { PostItemProps } from "@/modules/posts/view";
import PostBySlugView from "@/modules/posts/slug/view";
import { serialize } from "next-mdx-remote/serialize";

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
  const post = await getPostBySlug(slug);
  const mdxSource = await serialize(post.content);

  return <PostBySlugView slug={slug} post={post} mdxSource={mdxSource} />;
}
