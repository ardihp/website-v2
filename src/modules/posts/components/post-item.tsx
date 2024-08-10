import DelayedItem from "@/components/layouts/components/delayed-item";
import { formatDate } from "@/lib/utils";
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
        <div className="flex flex-col gap-2 h-full w-full p-4 rounded-[32px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 hover:dark:bg-zinc-900/40 backdrop-blur-[1px] hover:bg-secondary/[0.02] duration-200">
          <div className="relative h-[220px] w-full rounded-[20px] overflow-hidden border border-secondary/15">
            <Image
              src={post?.cover?.file?.url || post?.cover?.external?.url}
              alt="Blog Cover Image"
              fill
              sizes="500px"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-1 p-2 rounded-[14px] w-full">
            <p className="font-fredoka text-xl font-medium">
              {post?.properties?.title?.title?.[0]?.plain_text}
            </p>
            <p className="font-manrope text-sm font-medium text-pretty">
              {post?.properties?.description?.rich_text?.[0]?.plain_text}
            </p>
          </div>
        </div>
      </Link>
    </DelayedItem>
  );
}
