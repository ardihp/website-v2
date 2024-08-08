import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostItemsProps {
  post: any;
}

export default function PostItem({ post }: PostItemsProps) {
  return (
    <Link
      href={`/posts/${post?.properties?.slug?.rich_text?.[0]?.plain_text}`}
      passHref
    >
      <div className="flex flex-col overflow-hidden rounded-[16px] h-full w-full shadow shadow-secondary/10 dark:shadow-zinc-700/80">
        <div className="relative h-[200px] w-full">
          <Image
            src={post?.cover?.external?.url}
            alt="Blog Cover Image"
            fill
            sizes="500px"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col py-3 px-6 gap-1 mb-2">
          <p className="font-fredoka text-xl font-medium">
            {post?.properties?.Title?.title?.[0]?.plain_text}
          </p>
          <p className="font-manrope text-sm">{post?.created_time}</p>
        </div>
      </div>
    </Link>
  );
}
