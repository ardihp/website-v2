import DelayedItem from "@/components/layouts/components/delayed-item";
import { IconTimeline } from "@tabler/icons-react";
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
  return (
    <DelayedItem delay={delay} start={start} end={end}>
      <Link
        href={`/posts/${post?.properties?.slug?.rich_text?.[0]?.plain_text}`}
        passHref
      >
        <div className="flex items-start gap-2 h-full w-full p-4 rounded-[24px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.02] scale-100 top-0 hover:top-[-6px] duration-200 active:top-0 active:scale-[0.99]">
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

          <div className="flex flex-col gap-3 p-4 w-full">
            <div className="flex gap-2 items-center">
              <p className="text-xs text-secondary/90">
                {dayjs(post?.created_time).format("DD MMM YYYY")}
              </p>
              <IconTimeline size={16} className="text-secondary" />
              <p className="text-xs text-secondary/90">{viewCount} views</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-fredoka text-xl font-medium leading-5 text-pretty line-clamp-2">
                {post?.properties?.title?.title?.[0]?.plain_text}
              </p>
              <p className="font-manrope text-sm font-medium text-pretty line-clamp-2 opacity-70">
                {post?.properties?.description?.rich_text?.[0]?.plain_text}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </DelayedItem>
  );
}
