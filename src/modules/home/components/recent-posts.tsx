import React from "react";
import DelayedItem from "@/components/layouts/components/delayed-item";
import HorizontalPostItem from "@/modules/posts/components/horizontal-post-item";
import Link from "next/link";
import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

interface RecentPostSectionProps {
  posts: (
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
  )[];
  pages: any;
}

export default function RecentPostSection({
  posts,
  pages,
}: RecentPostSectionProps) {
  const pageView = (post: any) => {
    return (
      pages?.find((page: any) =>
        page?.x?.includes(post?.properties?.slug?.rich_text?.[0]?.plain_text)
      )?.y || 0
    );
  };

  return (
    <DelayedItem start="bottom" end="bottom" delay={0.25}>
      <article className="flex flex-col items-center gap-4 mt-24 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[32px] p-16 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
        <div
          className="absolute top-[-40px] w-[calc(100%_-_108px)] flex items-center justify-between mx-auto p-4 px-6 bg-primary dark:bg-[#151515] bg-[url('/bg-noise.png')] dark:!bg-auto bg-blend-hard-light"
          style={{ backgroundSize: "90px" }}
        >
          <div className="p-4 rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
            <p className="shadowed-text text-primary text-[20px] font-[600]">
              {"Recent posts I've shared"}
            </p>
          </div>

          <Link href="/posts" scroll>
            <p className="shadowed-text text-base text-secondary/50 hover:underline underline-offset-0 hover:underline-offset-4 decoration-2 decoration-secondary/30 duration-300">
              view posts
            </p>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-6 w-full">
          {posts?.map(
            (post: any, index: number) =>
              index < 3 && (
                <HorizontalPostItem
                  key={index}
                  post={post}
                  viewCount={pageView(post)}
                  delay={index < 2 ? 0.1 * index + 0.3 : 0.05 * index}
                  start="bottom"
                  end="bottom"
                />
              )
          )}
        </div>
      </article>
    </DelayedItem>
  );
}
