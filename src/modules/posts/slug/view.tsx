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
import Image from "next/image";
import { IconArrowNarrowUp, IconTimeline } from "@tabler/icons-react";
import { motion } from "framer-motion";
import DelayedItem from "@/components/layouts/components/delayed-item";
import ImageKit from "@/components/layouts/components/imagekit";

interface PostBySlugViewProps {
  post: any;
  html: any;
  pages: any;
}

export default function PostBySlugView({
  post,
  html,
  pages,
}: PostBySlugViewProps) {
  const [showScroll, setShowScroll] = useState(false);
  const imagePath = post?.cover?.external?.url
    ?.split("/")?.[3]
    ?.split("?")?.[0];

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (scrollY >= 250) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 max-w-screen-lg mx-auto w-full px-4 md:px-6 lg:px-[48px]">
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
              {post?.properties?.title?.title?.[0]?.plain_text}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <DelayedItem start="bottom" end="bottom">
          <div className="flex flex-col items-center mt-6 md:mt-10">
            <div className="flex items-center gap-4 mb-3">
              {post?.properties?.tags?.multi_select?.map(
                (tag: any, index: number) => (
                  <div
                    key={index}
                    className="shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.02] dark:text-white/70 text-secondary/70 font-medium text-xs md:text-sm py-2 px-3 rounded-full"
                  >
                    {tag?.name}
                  </div>
                )
              )}
            </div>
            <h1 className="font-[600] text-[34px] md:text-[54px] leading-none text-pretty dark:text-white text-secondary/70 text-center">
              {post?.properties?.title?.title?.[0]?.plain_text}
            </h1>
            <div className="flex items-center gap-3 mt-4 md:mt-6">
              <p className="font-manrope text-xs md:text-sm font-bold dark:text-white/70 text-secondary/60">
                {dayjs(post?.properties?.created_at?.date?.start).format(
                  "DD MMMM YYYY"
                )}
              </p>
              <IconTimeline
                size={18}
                className="dark:text-white/70 text-secondary/60"
              />
              <p className="font-manrope text-xs md:text-sm font-bold dark:text-white/70 text-secondary/60">
                {pages?.find((page: any) =>
                  page?.x?.includes(
                    post?.properties?.slug?.rich_text?.[0]?.plain_text
                  )
                )?.y || 0}{" "}
                views
              </p>
            </div>
          </div>

          <article className="flex flex-col mt-6 md:mt-8 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[20px] md:rounded-[32px] pb-6 md:pb-10 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
            <div className="w-full">
              <div className="p-4 md:p-6 w-full h-full rounded-[20px] md:rounded-[32px] overflow-hidden">
                <div className="relative h-[260px] md:h-[430px] w-full rounded-[12px] md:rounded-[18px] overflow-hidden">
                  <ImageKit
                    path={imagePath}
                    alt="Blog Cover Image"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </div>

            <section className="flex">
              <div
                id="article"
                className="post-page"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </section>
          </article>
        </DelayedItem>
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
