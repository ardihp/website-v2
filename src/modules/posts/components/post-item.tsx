import ImageKit from "@/components/layouts/components/imagekit";
import { IconPointFilled } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { PostItemProps } from "../view";
import dayjs from "dayjs";

interface PostItemsProps {
  post: PostItemProps;
  viewCount: number;
}

export default function PostItem({ post, viewCount }: PostItemsProps) {
  return (
    <Link href={`/posts/${post.slug}`} passHref>
      <div className="flex flex-col items-center gap-2 h-full w-full p-4 rounded-[32px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01] relative scale-100 top-0 hover:top-[-6px] duration-200 active:top-0 active:scale-[0.99]">
        <div className="relative h-[280px] md:h-[320px] w-full rounded-[20px] overflow-hidden">
          <ImageKit
            src={post.body.thumbnail}
            alt="Blog Cover Image"
            className="object-cover object-center w-full"
            sizes="600px"
            fill
          />
          <div className="bg-black/30 w-full h-full absolute top-0" />
        </div>

        <div className="absolute bottom-6 w-[calc(100%_-_48px)] flex flex-col gap-2">
          <div className="flex flex-col gap-2 p-3 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-[16px]">
            <p className="font-fredoka text-lg font-medium leading-5 text-pretty line-clamp-2 text-primary">
              {post.body.title}
            </p>
            <p className="font-manrope text-xs font-medium text-pretty line-clamp-2 text-primary/90">
              {post.body.abstract}
            </p>
          </div>
        </div>

        <div className="absolute top-6 right-6 flex gap-1 items-center bg-primary/5 py-[5px] px-[10px] backdrop-blur-sm border border-primary/10 rounded-[16px] w-fit">
          <p className="text-xs text-primary/90">
            {dayjs(post.body.publishedOn).format("MMM D, YYYY")}
          </p>
          <IconPointFilled size={12} className="text-primary" />
          <div className="flex gap-1 items-center">
            <p className="text-xs text-primary/90">{viewCount} views</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
