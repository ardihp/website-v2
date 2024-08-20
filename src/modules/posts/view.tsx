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
  pages: any;
}

export default function PostsView({ posts, pages }: PostsViewProps) {
  const pageView = (post: any) => {
    return (
      pages?.find((page: any) =>
        page?.x?.includes(post?.properties?.slug?.rich_text?.[0]?.plain_text)
      )?.y || 0
    );
  };

  return (
    <div className="flex flex-col max-w-screen-lg mx-auto w-full gap-8 lg:gap-12 px-4 md:px-8 lg:px-[48px]">
      <HeaderPage
        title="My Posts"
        description="I post something random in here."
      />

      <div className="grid md:grid-cols-2 gap-8 h-full">
        <div className="hidden md:flex flex-col gap-8">
          {posts.map(
            (post: any, index: number) =>
              index % 2 === 0 && (
                <PostItem
                  key={index}
                  post={post}
                  viewCount={pageView(post)}
                  delay={index < 4 ? 0.1 * index + 0.15 : 0.05 * index}
                  start="bottom"
                  end="bottom"
                />
              )
          )}
        </div>
        <div className="hidden md:flex flex-col gap-8">
          {posts.map(
            (post: any, index: number) =>
              index % 2 !== 0 && (
                <PostItem
                  key={index}
                  post={post}
                  viewCount={pageView(post)}
                  delay={index < 4 ? 0.1 * index + 0.15 : 0.05 * index}
                  start="bottom"
                  end="bottom"
                />
              )
          )}
        </div>
        <div className="flex md:hidden flex-col gap-6 md:gap-8">
          {posts.map((post: any, index: number) => (
            <PostItem
              key={index}
              post={post}
              viewCount={pageView(post)}
              delay={index < 2 ? 0.1 * index + 0.15 : 0.05 * index}
              start="bottom"
              end="bottom"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
