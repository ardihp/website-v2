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
    <div className="flex flex-col max-w-screen-lg mx-auto w-full px-[48px]">
      <HeaderPage
        title="My Posts"
        description="I post something random in here."
      />

      <div className="grid grid-cols-2 mt-[48px] gap-8 h-full">
        <div className="flex flex-col gap-8">
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
        <div className="flex flex-col gap-8">
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
      </div>
    </div>
  );
}
