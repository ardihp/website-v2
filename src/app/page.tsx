import React from "react";
import HomeView from "@/modules/home/view";
import { getWebsiteMetrics } from "@/hooks/use-umami";
import { getPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await getPosts();
  const { pages } = await getWebsiteMetrics();

  return <HomeView posts={posts} pages={pages} />;
}
