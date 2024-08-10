import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { notFound } from "next/navigation";
import React from "react";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BlogSlugPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const post: any = await fetchBySlug(params.slug);

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

  return (
    <div className="flex flex-col gap-4 max-w-screen-lg mx-auto w-full pt-[12px] px-[48px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-secondary/50 hover:text-secondary duration-200"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/posts"
              className="text-secondary/50 hover:text-secondary duration-200"
            >
              Posts
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem className="text-secondary">
            {post?.properties?.title?.title?.[0]?.plain_text}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex">
        <div
          className="prose prose-p:font-normal prose-p:font-manrope prose-p:text-secondary/60 prose-p:text-base prose-p:my-5 prose-p:text-pretty prose-hr:my-4 prose-h3:leading-8 prose-h3:mt-5 prose-h3:text-secondary/70 prose-figure:my-5 prose-img:rounded-[20px] prose-img:overflow-hidden prose-figure:rounded-[32px] prose-figure:p-4 prose-figure:shadow-inner prose-figure:shadow-secondary/15 prose-figure:min-h-[180px] prose-lg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
