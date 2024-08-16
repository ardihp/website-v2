import DelayedItem from "@/components/layouts/components/delayed-item";
import { IconArrowNarrowRight, IconTimeline } from "@tabler/icons-react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostItemsProps {
  post: any;
  delay?: number;
  start: string;
  end: string;
  viewCount: number;
}

export default function HorizontalPostItem({
  post,
  delay,
  start,
  end,
  viewCount,
}: PostItemsProps) {
  console.log(post);

  return (
    <DelayedItem delay={delay} start={start} end={end}>
      <Link
        href={`/posts/${post?.properties?.slug?.rich_text?.[0]?.plain_text}`}
        passHref
      >
        <div className="flex items-start gap-2 h-full w-full p-4 group rounded-[24px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01] scale-100 relative top-0 hover:top-[-6px] duration-200 active:top-0 active:scale-[0.99]">
          <div className="relative h-[140px] w-full max-w-[200px] rounded-[14px] overflow-hidden">
            <Image
              src={post?.cover?.file?.url || post?.cover?.external?.url}
              alt="Blog Cover Image"
              fill
              sizes="400px"
              placeholder="blur"
              blurDataURL="https://dr.savee-cdn.com/things/6/6/abc7ac18a5073cdf581f47.webp"
              className="object-cover object-center w-full"
            />
            <div className="bg-black/30 w-full h-full absolute top-0" />
          </div>

          <div className="flex flex-col gap-3 px-4 pt-2 w-full">
            <div className="flex gap-2 items-center">
              <p className="text-xs font-medium text-secondary/70">
                {dayjs(post?.properties?.created_at?.date?.start).format(
                  "DD MMM YYYY"
                )}
              </p>
              <IconTimeline size={16} className="text-secondary" />
              <p className="text-xs font-medium text-secondary/70">
                {viewCount} views
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-fredoka text-xl font-medium leading-6 text-pretty line-clamp-2 opacity-80">
                {post?.properties?.title?.title?.[0]?.plain_text}
              </p>
              <p className="font-manrope text-sm font-bold text-pretty line-clamp-2 opacity-60">
                {post?.properties?.description?.rich_text?.[0]?.plain_text}
              </p>
            </div>

            <div className="flex items-center gap-2 group-hover:gap-3 duration-200">
              <p className="text-sm font-medium opacity-80">Read More</p>
              <IconArrowNarrowRight size={20} className="text-secondary/70 mt-[2px]" />
            </div>
          </div>
        </div>
      </Link>
    </DelayedItem>
  );
}
