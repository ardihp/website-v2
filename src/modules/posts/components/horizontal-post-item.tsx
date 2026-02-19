import {
  IconArrowNarrowRight,
  IconChevronRight,
  IconPointFilled,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import ImageKit from "@/components/layouts/components/imagekit";
import { PostItemProps } from "../view";

interface HorizontalPostItemProps {
  post: PostItemProps;
  viewCount: number | boolean;
}

export default function HorizontalPostItem({
  post,
  viewCount,
}: HorizontalPostItemProps) {
  return (
    <Link href={`/posts/${post.slug}`} passHref>
      <div className="flex flex-col-reverse sm:flex-row items-start gap-2 h-full p-4 sm:p-0 w-full group rounded-[16px] sm:rounded-[24px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01] scale-100 relative duration-200 active:top-0 active:scale-[0.99] overflow-hidden">
        <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:p-4 sm:px-8 sm:pt-6 w-full sm:h-full">
          <div className="flex gap-1 items-center">
            <p className="text-xs font-medium text-secondary/40 dark:text-white/70">
              {dayjs(post.body.publishedOn).format("MMM DD, YYYY")}
            </p>
            <IconPointFilled
              size={12}
              className="text-secondary/40 dark:text-white"
            />
            <p className="text-xs font-medium text-secondary/40 dark:text-white/70">
              {viewCount || "--"} views
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-1">
            <p className="font-fredoka text-lg font-medium leading-5 md:leading-6 text-pretty line-clamp-2 text-secondary/60 dark:text-white">
              {post.body.title}
            </p>
            <p className="font-manrope text-xs font-bold text-pretty line-clamp-2 text-secondary/40 dark:text-white/60">
              {post.body.abstract}
            </p>
          </div>

          <div className="flex items-center gap-2 group-hover:gap-3 duration-200 sm:mt-auto">
            <p className="text-xs md:text-sm font-medium text-secondary/60 dark:text-white">
              Read More
            </p>
            <div className="flex items-center mt-[2px]">
              <IconArrowNarrowRight
                size={20}
                className="text-secondary/70 dark:text-white/70"
              />
              <IconChevronRight
                size={12}
                className="text-secondary/70 dark:text-white/70 stroke-[4px] relative -left-1 opacity-0 group-hover:opacity-100 duration-200 delay-200 group-hover:delay-0"
              />
              <IconChevronRight
                size={12}
                className="text-secondary/70 dark:text-white/70 stroke-[4px] relative -left-2 opacity-0 group-hover:opacity-100 duration-200 delay-100"
              />
              <IconChevronRight
                size={12}
                className="text-secondary/70 dark:text-white/70 stroke-[4px] relative -left-3 opacity-0 group-hover:opacity-100 duration-200 group-hover:delay-200"
              />
            </div>
          </div>
        </div>

        <div className="relative h-[180px] w-full sm:max-w-[190px] lg:max-w-[220px] group-hover:sm:max-w-[220px] group-hover:lg:max-w-[250px] sm:skew-x-[-18deg] rounded-[8px] sm:rounded-none overflow-hidden sm:left-6 sm:ring-[8px] sm:ring-secondary/10 duration-300">
          <div className="relative w-full sm:w-[240px] group-hover:lg:w-[260px] h-full sm:skew-x-[18deg] sm:-left-9 duration-300">
            <ImageKit
              src={post.body.thumbnail}
              alt="Blog Cover Image"
              className="object-cover object-center sm:object-left w-full scale-100 group-hover:scale-110 duration-500"
              sizes="600px"
              fill
            />
            <div className="bg-black/30 w-full h-full absolute top-0 shadow-inner shadow-secondary/10 dark:shadow-zinc-700" />
          </div>
        </div>
      </div>
    </Link>
  );
}
