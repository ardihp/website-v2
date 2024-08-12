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
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

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
            <Link
              href="/"
              className="dark:text-white/50 dark:hover:text-white text-secondary/50 hover:text-secondary duration-200"
            >
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <Link
              href="/posts"
              className="dark:text-white/50 dark:hover:text-white text-secondary/50 hover:text-secondary duration-200"
            >
              Posts
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem className="dark:text-white text-secondary">
            {post?.properties?.title?.title?.[0]?.plain_text}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col items-center mt-10">
        <div className="flex items-center gap-4 mb-3">
          {post?.properties?.tags?.multi_select?.map(
            (tag: any, index: number) => (
              <div
                key={index}
                className="shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.02] dark:text-white/70 text-secondary/70 font-medium text-sm py-2 px-3 rounded-full"
              >
                {tag?.name}
              </div>
            )
          )}
        </div>
        <h1 className="font-[600] text-[54px] leading-none text-pretty dark:text-white text-secondary text-center">
          {post?.properties?.title?.title?.[0]?.plain_text}
        </h1>
        <p className="font-manrope text-sm font-bold dark:text-white/70 text-secondary/60 mt-6">
          {dayjs(post?.created_time).format("DD MMMM YYYY")}
        </p>
        <div className="relative h-[430px] w-full mt-14 rounded-[16px] overflow-hidden">
          <Image
            src={post?.cover?.file?.url || post?.cover?.external?.url}
            fill
            sizes="900px"
            alt={post?.properties?.title?.title?.[0]?.plain_text}
            className="object-cover"
          />
        </div>
      </div>

      <section className="flex justify-end mt-10">
        <div className="post-page" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </div>
  );
}
