import DelayedItem from "@/components/layouts/components/delayed-item";
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
        <div className="flex flex-col h-fit rounded-[16px] w-full group shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80 hover:dark:bg-zinc-900/40 hover:bg-secondary/[0.02] duration-200 relative">
          <div className="p-4 h-[200px] w-full">
            <div className="relative h-full w-full shadow shadow-secondary/10 dark:shadow-zinc-700 rounded-t-[14px] overflow-hidden">
              <Image
                src={post?.cover?.external?.url}
                alt="Blog Cover Image"
                fill
                sizes="500px"
                className="object-cover object-bottom"
              />
            </div>
          </div>
          <div className="flex flex-col p-4 gap-1 rounded-[14px] w-full mt-[-20px] bg-primary shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80 z-[2]">
            <p className="font-fredoka text-xl font-medium">
              {post?.properties?.Title?.title?.[0]?.plain_text}
            </p>
            <p className="font-manrope text-sm">{post?.created_time}</p>
          </div>
        </div>
      </Link>
    </DelayedItem>
  );
}
