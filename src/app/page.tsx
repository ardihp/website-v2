import React from "react";
import HomeView from "@/modules/home/view";
import { fetchPages } from "@/lib/notion";
import { getWebsiteMetrics } from "@/hooks/use-umami";

export default async function HomePage() {
  const posts = await fetchPages();
  const { pages } = await getWebsiteMetrics();

  return <HomeView posts={posts?.results} pages={pages} />;
}
