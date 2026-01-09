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
import { IconArrowNarrowUp, IconTimeline } from "@tabler/icons-react";
import { motion } from "framer-motion";
import DelayedItem from "@/components/layouts/components/delayed-item";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getAnchor, mdxComponents } from "@/data/mdx-components";
import { useScrollspy } from "@/hooks/use-scrollspy";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

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
  pages: any;
  mdxSource: MDXRemoteSerializeResult;
}

export default function PostBySlugView({
  slug,
  post,
  pages,
  mdxSource,
}: PostBySlugViewProps) {
  const [showScroll, setShowScroll] = useState(false);
  const [spyProps, setSpyProps] = useState({ elements: [], options: {} });
  const [currentActive] = useScrollspy(spyProps.elements, spyProps.options);
  const router = useRouter();
  const pathname = usePathname();

  const pageViews =
    pages?.find((page: any) => page?.value?.includes(slug))?.count || 0;
  const tableContents =
    post.content.split("\n").filter((line: string) => line.startsWith("#")) ||
    [];

  const handleScroll = () => {
    if (scrollY >= 250) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }

    setSpyProps({
      elements: tableContents.map((_: any, key: number) =>
        document.querySelector(`div[id=section-${key + 1}]`)
      ),
      options: { offset: 320 },
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTOCClick = (content: string, key: number) => {
    router.push(`${pathname}#${getAnchor(content)}`);
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-4 w-full max-w-screen-lg mx-auto px-4 md:px-6 lg:px-[48px]">
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

          <div className="flex flex-col items-center my-6 lg:my-10">
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
            <h1 className="font-[600] text-[30px] sm:text-[36px] md:text-[54px] leading-none dark:text-white text-secondary/70 text-center text-balance">
              {post.body.title}
            </h1>
            <div className="flex items-center gap-3 mt-4 md:mt-6">
              <p className="font-manrope text-xs md:text-sm font-bold dark:text-white/70 text-secondary/60">
                {dayjs(post.body.publishedOn).format("DD MMMM YYYY")}
              </p>
              <IconTimeline
                size={18}
                className="dark:text-white/70 text-secondary/60"
              />
              <p className="font-manrope text-xs md:text-sm font-bold dark:text-white/70 text-secondary/60">
                {pageViews ? pageViews + 1 : 0} views
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 w-full max-w-screen-lg mx-auto relative lg:pt-6 px-4 md:px-6 lg:px-0 xl:left-[48px]">
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
                      currentActive === key && "text-secondary/70"
                    )}
                    onClick={() =>
                      handleTOCClick(
                        content.replaceAll("#", "").trimStart(),
                        key
                      )
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

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 60 }}
        animate={{
          opacity: showScroll ? 1 : 0,
          scale: showScroll ? 1 : 0,
          y: showScroll ? 0 : 60,
        }}
        transition={{ type: "spring" }}
        className="scroll-top hidden md:flex"
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IconArrowNarrowUp
          size={20}
          className="dark:text-white text-secondary"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 30 }}
        animate={{
          opacity: showScroll ? 1 : 0,
          scale: showScroll ? 1 : 0,
          y: showScroll ? 0 : 30,
        }}
        transition={{ type: "spring" }}
        className="scroll-top flex md:hidden"
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IconArrowNarrowUp
          size={20}
          className="dark:text-white text-secondary"
        />
      </motion.div>
    </>
  );
}
