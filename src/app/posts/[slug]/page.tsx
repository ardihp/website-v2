import React from "react";
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { notFound } from "next/navigation";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import PostBySlugView from "@/modules/posts/slug/view";
import { getWebsiteMetrics } from "@/hooks/use-umami";

interface BlogSlugPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const post: any = await fetchBySlug(params.slug);
  const { pages } = await getWebsiteMetrics();

  if (!post) {
    notFound();
  }

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);

  return <PostBySlugView post={post} html={html} pages={pages} />;
}
