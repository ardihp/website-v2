import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { notFound } from "next/navigation";
import React from "react";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

interface BlogSlugPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const post = await fetchBySlug(params.slug);

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

  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
}
