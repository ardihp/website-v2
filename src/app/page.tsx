import React from "react";
import HomeView from "@/modules/home/view";
import { getPosts } from "@/lib/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio — explore my projects, work experience, and latest writing on web development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ardi • Portfolio",
    description:
      "Welcome to my portfolio — explore my projects, work experience, and latest writing on web development.",
    url: "/",
  },
};

export default async function HomePage() {
  const posts = await getPosts();

  return <HomeView posts={posts} />;
}
