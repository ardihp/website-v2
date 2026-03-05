"use client";

import React from "react";
import type { PostItemProps } from "../posts/view";
import dynamic from "next/dynamic";

const IntroductionSection = dynamic(() => import("./components/introduction"));
const RecentPostSection = dynamic(() => import("./components/recent-posts"));
const DelayedItem = dynamic(
  () => import("@/components/layouts/components/delayed-item"),
);

interface HomeViewProps {
  posts: PostItemProps[];
}

export default function HomeView({ posts }: HomeViewProps) {
  return (
    <DelayedItem start="bottom" end="bottom">
      <article className="flex flex-col max-w-screen-lg mx-auto w-full h-full gap-14 md:gap-16 lg:gap-24 px-4 md:px-8 xl:px-12">
        <IntroductionSection />

        <RecentPostSection posts={posts} />
      </article>
    </DelayedItem>
  );
}
