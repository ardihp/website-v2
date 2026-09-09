import { getPosts } from "@/lib/posts";
import PostsView from "@/modules/posts/view";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Articles and reflections by me on web development, engineering, and lessons learned along the way.",
  alternates: {
    canonical: "/posts",
  },
  openGraph: {
    title: "Posts • Ardi Hp",
    description:
      "Articles and reflections by me on web development, engineering, and lessons learned along the way.",
    url: "/posts",
  },
};

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const posts = await getPosts();
  const searchQuery = await searchParams;

  return <PostsView posts={posts} searchQuery={searchQuery} />;
}
