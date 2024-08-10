"use client";

import React from "react";
import HeaderPage from "@/components/layouts/components/header-page";
import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import PostItem from "./components/post-item";

interface PostsViewProps {
  posts: (
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
  )[];
}

export default function PostsView({ posts }: PostsViewProps) {
  console.log(posts);

  return (
    <div className="flex flex-col max-w-screen-lg mx-auto w-full pt-[12px]">
      <HeaderPage
        title="My Posts"
        description="I post something random in here."
      />

      <div className="grid grid-cols-2 pt-[48px] gap-9 px-[48px] h-full">
        <div className="flex flex-col gap-9">
          {posts.map(
            (post: any, index: number) =>
              index % 2 === 0 && (
                <PostItem
                  key={index}
                  post={post}
                  delay={index < 6 ? 0.2 * index + 0.25 : 0.25}
                  start="bottom"
                  end="bottom"
                />
              )
          )}
        </div>
        <div className="flex flex-col gap-9">
          {posts.map(
            (post: any, index: number) =>
              index % 2 !== 0 && (
                <PostItem
                  key={index}
                  post={post}
                  delay={index < 6 ? 0.2 * index + 0.25 : 0.25}
                  start="bottom"
                  end="bottom"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
