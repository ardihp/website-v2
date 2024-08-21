"use client";

import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import IntroductionSection from "./components/introduction";
import RecentPostSection from "./components/recent-posts";
import DelayedItem from "@/components/layouts/components/delayed-item";

interface HomeViewProps {
  posts: (
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
  )[];
  pages: any;
}

export default function HomeView({ posts, pages }: HomeViewProps) {
  return (
    <DelayedItem start="bottom" end="bottom">
      <article className="flex flex-col max-w-screen-lg mx-auto w-full h-full gap-14 md:gap-16 lg:gap-24 px-4 md:px-8 lg:px-[48px]">
        <IntroductionSection />

        <RecentPostSection posts={posts} pages={pages} />
      </article>
    </DelayedItem>
  );
}
