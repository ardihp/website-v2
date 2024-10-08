import ImageKit from "@/components/layouts/components/imagekit";
import { IconTimeline } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostItemsProps {
  post: any;
  viewCount: number;
}

export default function PostItem({ post, viewCount }: PostItemsProps) {
  const imagePath = post?.cover?.external?.url
    ?.split("/")?.[3]
    ?.split("?")?.[0];

  return (
    <Link
      href={`/posts/${post?.properties?.slug?.rich_text?.[0]?.plain_text}`}
      passHref
    >
      <div className="flex flex-col items-center gap-2 h-full w-full p-4 rounded-[32px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01] relative scale-100 top-0 hover:top-[-6px] duration-200 active:top-0 active:scale-[0.99]">
        <div className="relative h-[280px] md:h-[320px] w-full rounded-[20px] overflow-hidden">
          <ImageKit
            path={imagePath}
            alt="Blog Cover Image"
            className="object-cover object-center w-full"
            fill
          />
          <div className="bg-black/30 w-full h-full absolute top-0" />
        </div>

        <div className="flex flex-col gap-2 p-3 w-[calc(100%_-_48px)] absolute bg-primary/5 bottom-6 backdrop-blur-sm border border-primary/10 rounded-[16px]">
          <p className="font-fredoka text-lg font-medium leading-5 text-pretty line-clamp-2 text-primary">
            {post?.properties?.title?.title?.[0]?.plain_text}
          </p>
          <p className="font-manrope text-xs font-medium text-pretty line-clamp-2 text-primary/90">
            {post?.properties?.description?.rich_text?.[0]?.plain_text}
          </p>
        </div>

        <div className="absolute flex gap-1 items-center top-6 right-6 bg-primary/5 py-[5px] px-[10px] backdrop-blur-sm border border-primary/10 rounded-[16px]">
          <IconTimeline size={16} className="text-primary" />
          <p className="text-xs text-primary/90">{viewCount} views</p>
        </div>
      </div>
    </Link>
  );
}
