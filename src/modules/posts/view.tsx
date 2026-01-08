"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import HeaderPage from "@/components/layouts/components/header-page";
import PostItem from "./components/post-item";
import DelayedItem from "@/components/layouts/components/delayed-item";
import { cn } from "@/lib/utils";
import { useKeyPress } from "@/hooks/use-keypress";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface PostItemProps {
  slug: string;
  body: {
    title: string;
    seoTitle: string;
    abstract: string;
    thumbnail: string;
    publishedOn: string;
    tags: string;
  };
}

interface PostsViewProps {
  posts: PostItemProps[];
  pages: any;
}

export default function PostsView({ posts, pages }: PostsViewProps) {
  const [allTags] = useState<string[]>(
    Array.from(
      new Set(
        posts
          .map((post) => post.body.tags.split(",").map((tag) => tag.trim()))
          .flat()
          .filter((tag) => tag !== "")
      )
    )
  );
  const [keyword, setKeyword] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (
        keyword &&
        !post.body.title.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return false;
      }

      if (selectedTags.length >= 1) {
        const postTags = post.body.tags;
        return selectedTags.every((tag) => postTags.includes(tag));
      }

      return true;
    });
  }, [selectedTags, keyword]);

  useEffect(() => {
    if (searchParams.get("q")) {
      setKeyword(searchParams.get("q") || "");
    }

    if (searchParams.get("tags")) {
      const tagsParam = searchParams.get("tags") || "";
      const tagsArray = tagsParam.split(",").map((tag) => tag.trim());
      setSelectedTags(tagsArray);
    }
  }, [searchParams]);

  useEffect(() => {
    setAvailableTags(
      Array.from(
        new Set(
          filteredPosts
            .map((post) => post.body.tags.split(",").map((tag) => tag.trim()))
            .flat()
            .filter((tag) => tag !== "")
        )
      )
    );
  }, [filteredPosts]);

  const pageViews = (post: PostItemProps) => {
    return (
      pages?.find((page: any) => page?.value?.includes(post.slug))?.count || 0
    );
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSelectTag = (tag: string) => {
    if (!availableTags.includes(tag) && !selectedTags.includes(tag)) return;

    let newTags = selectedTags;

    if (selectedTags.includes(tag)) {
      newTags = newTags.filter((t) => t !== tag);
    } else {
      newTags = [...selectedTags, tag];
    }

    router.replace(
      `${pathname}?${createQueryString("tags", newTags.join(","))}`
    );
    setSelectedTags(newTags);
  };

  const onKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey) {
      inputRef.current?.focus();
      return false;
    }
  };

  useKeyPress(["k"], onKeyPress);

  const handleDelayedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    router.replace(`${pathname}?${createQueryString("q", e.target.value)}`);
  };

  return (
    <DelayedItem start="bottom" end="bottom">
      <div className="flex flex-col max-w-screen-lg mx-auto w-full gap-8 lg:gap-12 px-4 md:px-8 lg:px-[48px]">
        <HeaderPage title="My Posts">
          <div className="flex items-center mb-5 relative">
            <input
              ref={inputRef}
              value={keyword}
              type="text"
              placeholder="Search post you want to read..."
              className="w-full bg-transparent border border-secondary/10 text-secondary/70 font-medium text-sm px-4 py-3 shadow-inner shadow-secondary/10 rounded-xl outline-none focus-within:ring-[2px] focus-within:ring-secondary/20 focus-within:ring-offset-2 focus-within:ring-offset-primary placeholder:font-medium placeholder:text-secondary/30 duration-200"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              onChange={handleDelayedInput}
            />

            <div
              className={cn(
                "absolute right-3 bg-secondary/10 px-2 py-1 rounded-md duration-200 pointer-events-none",
                inputFocused ? "opacity-0" : "opacity-100"
              )}
            >
              <p className="text-[10px] font-manrope font-black text-secondary/70">
                Ctrl + K
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <p className="text-sm font-medium text-secondary/70">
              Choose Tag{allTags.length > 1 && "s"}:{" "}
            </p>

            <div className="flex items-center gap-2">
              {allTags.map((tag, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-fit px-[10px] py-[5px] rounded-lg shadow-inner shadow-secondary/10 duration-200 cursor-pointer",
                    selectedTags.includes(tag)
                      ? "dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]"
                      : "bg-transparent",
                    !availableTags.includes(tag) &&
                      !selectedTags.includes(tag) &&
                      "cursor-not-allowed opacity-50"
                  )}
                  onClick={() => handleSelectTag(tag)}
                >
                  <p
                    className={cn(
                      "font-manrope font-black text-xs duration-200",
                      selectedTags.includes(tag)
                        ? "text-white"
                        : "text-secondary/70"
                    )}
                  >
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </HeaderPage>

        <div>
          {filteredPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <p>Whooops, no post found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 h-full">
              {filteredPosts
                .sort(
                  (a, b) =>
                    new Date(b.body.publishedOn).getTime() -
                    new Date(a.body.publishedOn).getTime()
                )
                .map((post: PostItemProps, index: number) => (
                  <PostItem
                    key={index}
                    post={post}
                    viewCount={pageViews(post)}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </DelayedItem>
  );
}
