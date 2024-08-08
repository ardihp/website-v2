import PostsView from "@/modules/posts/view";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Posts • Ardi Hp",
  description: "Page for list of post like on Medium.",
};

export default function PostsPage() {
  return <PostsView />;
}
