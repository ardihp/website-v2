import DelayedItem from "@/components/layouts/components/delayed-item";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostItemsProps {
  post: any;
  delay?: number;
  start: string;
  end: string;
}

export default function PostItem({ post, delay, start, end }: PostItemsProps) {
  return (
    <DelayedItem delay={delay} start={start} end={end}>
      <Link
        href={`/posts/${post?.properties?.slug?.rich_text?.[0]?.plain_text}`}
        passHref
      >
        <div className="flex flex-col items-center gap-2 h-full w-full p-4 rounded-[32px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01] relative">
          <div className="relative h-[320px] w-full rounded-[20px] overflow-hidden">
            <Image
              src={post?.cover?.file?.url || post?.cover?.external?.url}
              alt="Blog Cover Image"
              fill
              sizes="700px"
              placeholder="blur"
              blurDataURL="https://dr.savee-cdn.com/things/6/6/abc7ac18a5073cdf581f47.webp"
              className="object-cover object-top h-full w-auto"
            />
            <div className="bg-black/30 w-full h-full absolute top-0" />
          </div>
          <div className="flex flex-col gap-2 p-3 mx-6 absolute bg-primary/5 bottom-6 backdrop-blur-sm border border-primary/10 rounded-[16px]">
            <p className="font-fredoka text-lg font-medium leading-6 text-pretty line-clamp-2 text-primary">
              {post?.properties?.title?.title?.[0]?.plain_text}
            </p>
            <p className="font-manrope text-xs font-medium text-pretty line-clamp-2 text-primary/90">
              {post?.properties?.description?.rich_text?.[0]?.plain_text}
            </p>
          </div>
        </div>
      </Link>
    </DelayedItem>
  );
}
