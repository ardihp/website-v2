"use client";

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import dayjs from "dayjs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getAnchor, mdxComponents } from "@/data/mdx-components";
import { useScrollspy } from "@/hooks/use-scrollspy";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import readTime from "@/lib/read-time";
import dynamic from "next/dynamic";

const ArrowToTop = dynamic(() => import("../components/arrow-to-top"));
const ImageKit = dynamic(
  () => import("@/components/layouts/components/imagekit"),
);

export interface DetailPostItemProps {
  body: {
    title: string;
    seoTitle: string;
    abstract: string;
    thumbnail: string;
    publishedOn: string;
    tags: string;
  };
  content: any;
}

interface PostBySlugViewProps {
  slug: string;
  post: DetailPostItemProps;
  mdxSource: MDXRemoteSerializeResult;
}

export default function PostBySlugView({
  slug,
  post,
  mdxSource,
}: PostBySlugViewProps) {
  const [showScroll, setShowScroll] = useState(false);
  const [spyProps, setSpyProps] = useState({ elements: [], options: {} });
  const [currentActive] = useScrollspy(spyProps.elements, spyProps.options);
  const router = useRouter();
  const pathname = usePathname();

  const tableContents =
    post.content.split("\n").filter((line: string) => line.startsWith("#")) ||
    [];

  const readingTime = readTime(mdxSource.compiledSource) || 0;

  const handleScroll = () => {
    if (scrollY >= 250) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }

    setSpyProps({
      elements: tableContents.map((_: any, key: number) =>
        document.querySelector(`div[id=section-${key + 1}]`),
      ),
      options: { offset: 160 },
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTOCClick = (content: string) => {
    router.push(`${pathname}#${getAnchor(content)}`);
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full max-w-screen-lg mx-auto relative px-4 md:px-6 xl:px-0">
        <div className="flex flex-col gap-4 w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link
                  href="/"
                  className="dark:text-white text-secondary opacity-50 hover:opacity-80 font-medium duration-200 text-xs md:text-base"
                >
                  Home
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <Link
                  href="/posts"
                  className="dark:text-white text-secondary opacity-50 hover:opacity-80 font-medium duration-200 text-xs md:text-base"
                >
                  Posts
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem className="dark:text-white text-secondary opacity-80 font-medium text-xs md:text-base">
                {post.body.title}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col mt-4">
            <div className="flex items-center gap-4 mb-3">
              {post.body.tags.split(", ")?.map((tag: string, index: number) => (
                <div
                  key={index}
                  className="shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.02] dark:text-white/70 text-secondary/70 font-medium text-xs md:text-sm py-2 px-3 rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-[600] text-[30px] sm:text-[36px] md:text-[48px] leading-none dark:text-white text-secondary/70 text-balance">
                {post.body.title}
              </h1>
              <p className="font-manrope font-bold text-secondary/50">
                {post.body.abstract}
              </p>
            </div>
            <div className="relative h-[280px] md:h-[440px] w-full rounded-lg overflow-hidden my-6">
              <ImageKit
                src={post.body.thumbnail}
                alt="Blog Thumbnail Image"
                className="object-cover object-center w-full"
                sizes="1280px"
                fill
              />
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <div className="flex flex-col gap-[2px]">
                <p className="text-secondary/50 font-medium text-xs">Author</p>

                <p className="font-manrope text-sm font-black dark:text-white/70 text-secondary/70">
                  Ardiansyah Halim Putra
                </p>
              </div>

              <div className="flex flex-col gap-[2px]">
                <p className="text-secondary/50 font-medium text-xs">
                  Posted On
                </p>

                <p className="font-manrope text-sm font-black dark:text-white/70 text-secondary/70">
                  {dayjs(post.body.publishedOn).format("DD MMMM, YYYY")}
                </p>
              </div>

              <div className="flex flex-col md:items-end gap-[2px] ml-auto">
                <p className="text-secondary/50 font-medium text-xs">
                  Reading Time
                </p>

                <p className="font-manrope text-sm font-black dark:text-white/70 text-secondary/70">
                  {readingTime} min{readingTime > 1 && "s"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10 w-full mt-6 md:mt-12">
          <div className="w-full" id="main-content">
            <MDXRemote {...mdxSource} components={mdxComponents} lazy={true} />
          </div>

          <div className="hidden lg:block w-full max-w-[320px] h-full sticky top-20">
            <article className="gap-4 mt-6 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[20px] p-6 pt-8 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
              <div
                className="absolute top-[-28px] left-[26px] w-fit p-2 px-3 bg-primary dark:bg-[#121212] bg-[url('/bg-noise.png')] bg-blend-exclusion dark:bg-blend-normal"
                style={{ backgroundSize: "110px" }}
              >
                <div className="p-3 rounded-[8px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
                  <p className="shadowed-text text-primary text-[16px] font-[600]">
                    On This Page
                  </p>
                </div>
              </div>

              <section className="rounded-[20px] w-fit h-fit dark:bg-zinc-900/40 bg-secondary/[0.01] flex flex-col gap-3">
                {tableContents.map((content: string, key: number) => (
                  <p
                    key={key}
                    className={cn(
                      "font-manrope font-bold text-sm text-secondary/20 dark:text-white/70 text-pretty duration-200 cursor-pointer hover:text-secondary/70",
                      currentActive === key && "text-secondary/70",
                    )}
                    onClick={() =>
                      handleTOCClick(content.replaceAll("#", "").trimStart())
                    }
                  >
                    {content.replaceAll("#", "").trimStart()}
                  </p>
                ))}
              </section>
            </article>
          </div>
        </div>
      </div>

      <ArrowToTop showScroll={showScroll} />
    </>
  );
}
