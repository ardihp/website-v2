import React from "react";
import HomeView from "@/modules/home/view";
import { getPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await getPosts();

  return <HomeView posts={posts} />;
}
