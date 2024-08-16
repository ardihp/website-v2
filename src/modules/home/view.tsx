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
    <article className="flex flex-col max-w-screen-lg mx-auto w-full h-full px-[48px]">
      <IntroductionSection />

      <RecentPostSection posts={posts} pages={pages} />
    </article>
  );
}
