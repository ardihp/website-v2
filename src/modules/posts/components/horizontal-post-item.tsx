import { IconArrowNarrowRight, IconTimeline } from "@tabler/icons-react";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { IKImage } from "imagekitio-next";
import ImageKit from "@/components/layouts/components/imagekit";

interface PostItemsProps {
  post: any;
  viewCount: number;
}

export default function HorizontalPostItem({
  post,
  viewCount,
}: PostItemsProps) {
  const imagePath = post?.cover?.external?.url
    ?.split("/")?.[3]
    ?.split("?")?.[0];

  return (
    <Link
      href={`/posts/${post?.properties?.slug?.rich_text?.[0]?.plain_text}`}
      passHref
    >
      <div className="flex flex-col sm:flex-row items-start gap-2 h-full w-full p-4 group rounded-[16px] sm:rounded-[24px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01] scale-100 relative top-0 hover:top-[-6px] duration-200 active:top-0 active:scale-[0.99]">
        <div className="relative h-[160px] sm:h-[140px] w-full sm:max-w-[140px] lg:max-w-[200px] rounded-[8px] sm:rounded-[14px] overflow-hidden">
          <ImageKit
            path={imagePath}
            alt="Blog Cover Image"
            className="object-cover object-center w-full"
            fill
          />
          <div className="bg-black/30 w-full h-full absolute top-0" />
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 px-0 sm:px-4 pt-2 w-full">
          <div className="flex gap-2 items-center">
            <p className="text-[10px] md:text-xs font-medium text-secondary/70 dark:text-white/70">
              {dayjs(post?.properties?.created_at?.date?.start).format(
                "DD MMM YYYY"
              )}
            </p>
            <IconTimeline
              size={16}
              className="text-secondary/70 dark:text-white"
            />
            <p className="text-[10px] md:text-xs font-medium text-secondary/70 dark:text-white/70">
              {viewCount} views
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-1">
            <p className="font-fredoka text-lg md:text-xl font-medium leading-5 md:leading-6 text-pretty line-clamp-2 text-secondary/60 dark:text-white">
              {post?.properties?.title?.title?.[0]?.plain_text}
            </p>
            <p className="font-manrope text-xs md:text-sm font-bold text-pretty line-clamp-2 text-secondary/40 dark:text-white/60">
              {post?.properties?.description?.rich_text?.[0]?.plain_text}
            </p>
          </div>

          <div className="flex items-center gap-2 group-hover:gap-3 duration-200">
            <p className="text-xs md:text-sm font-medium text-secondary/60 dark:text-white">
              Read More
            </p>
            <IconArrowNarrowRight
              size={20}
              className="text-secondary/70 dark:text-white/70 mt-[2px]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
