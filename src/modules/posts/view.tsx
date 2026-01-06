"use client";

import React from "react";
import HeaderPage from "@/components/layouts/components/header-page";
import PostItem from "./components/post-item";
import DelayedItem from "@/components/layouts/components/delayed-item";

export interface PostItemProps {
  slug: string;
  body: {
    title: string;
    seoTitle: string;
    abstract: string;
    thumbnail: string;
    publishedOn: string;
    tags: string[];
  };
}

interface PostsViewProps {
  posts: PostItemProps[];
  pages: any;
}

export default function PostsView({ posts, pages }: PostsViewProps) {
  const pageViews = (post: PostItemProps) => {
    return (
      pages?.find((page: any) => page?.value?.includes(post.slug))?.count || 0
    );
  };

  return (
    <DelayedItem start="bottom" end="bottom">
      <div className="flex flex-col max-w-screen-lg mx-auto w-full gap-8 lg:gap-12 px-4 md:px-8 lg:px-[48px]">
        <HeaderPage
          title="My Posts"
          description="I post something random in here."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 h-full">
          {posts
            .sort(
              (a, b) =>
                new Date(b.body.publishedOn).getTime() -
                new Date(a.body.publishedOn).getTime()
            )
            .map((post: PostItemProps, index: number) => (
              <PostItem key={index} post={post} viewCount={pageViews(post)} />
            ))}
        </div>
      </div>
    </DelayedItem>
  );
}
