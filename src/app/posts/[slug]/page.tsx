import React from "react";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { PostItemProps } from "@/modules/posts/view";
import PostBySlugView from "@/modules/posts/slug/view";
import { serialize } from "next-mdx-remote/serialize";
import { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<BlogSlugPageProps>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    const { body } = post;

    const title = body.seoTitle || body.title;
    const description = body.abstract;
    const tags = body.tags
      ? body.tags.split(",").map((tag) => tag.trim())
      : undefined;

    return {
      title,
      description,
      keywords: tags,
      alternates: {
        canonical: `/posts/${slug}`,
      },
      openGraph: {
        type: "article",
        title,
        description,
        url: `/posts/${slug}`,
        publishedTime: body.publishedOn,
        tags,
        images: body.thumbnail
          ? [{ url: body.thumbnail, alt: body.title }]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: body.thumbnail ? [body.thumbnail] : undefined,
      },
    };
  } catch {
    return {
      title: "Post not found",
      description: "The requested post could not be found.",
    };
  }
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
