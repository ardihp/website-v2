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
import { useDebounce } from "@/hooks/use-debounce";
import { usePathname, useRouter } from "next/navigation";
import { getWebsiteMetrics } from "@/hooks/use-umami";
import { IconBook2, IconLoader } from "@tabler/icons-react";
import { Skeleton } from "@/components/ui/skeleton";

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
  searchQuery: { [key: string]: string | undefined };
}

export default function PostsView({ posts, searchQuery }: PostsViewProps) {
  const [allTags] = useState<string[]>(
    Array.from(
      new Set(
        posts
          .map((post) => post.body.tags.split(",").map((tag) => tag.trim()))
          .flat()
          .filter((tag) => tag !== ""),
      ),
    ),
  );
  const [keyword, setKeyword] = useState<string>("");
  const debouncedKeyword = useDebounce(keyword, 1000);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [pages, setPages] = useState<{ value: string; count: number }[]>([]);
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const filteredPosts = useMemo(() => {
    let filterQuery = firstLoad ? keyword : debouncedKeyword;

    return posts.filter((post) => {
      if (
        filterQuery &&
        !post.body.title.toLowerCase().includes(filterQuery.toLowerCase())
      ) {
        return false;
      }

      if (selectedTags.length >= 1) {
        const postTags = post.body.tags;
        return selectedTags.every((tag) => postTags.includes(tag));
      }

      return true;
    });
  }, [selectedTags, debouncedKeyword, keyword, firstLoad]);

  useEffect(() => {
    if (Object.hasOwn(searchQuery, "q")) {
      setKeyword(searchQuery["q"] || "");
    }

    if (Object.hasOwn(searchQuery, "tags")) {
      const tagsParam = searchQuery["tags"] || "";
      const tagsArray = tagsParam.split(",").map((tag) => tag.trim());
      setSelectedTags(tagsArray);
    }
  }, []);

  useEffect(() => {
    setPages(JSON.parse(localStorage.getItem("pageViews") || "[]"));

    const fetchPageView = async () => {
      const { pages } = await getWebsiteMetrics();
      setPages(pages);
      localStorage.setItem("pageViews", JSON.stringify(pages));
    };

    fetchPageView();
  }, []);

  useEffect(() => {
    setAvailableTags(
      Array.from(
        new Set(
          filteredPosts
            .map((post) => post.body.tags.split(",").map((tag) => tag.trim()))
            .flat()
            .filter((tag) => tag !== ""),
        ),
      ),
    );
  }, [filteredPosts]);

  const pageViews = (post: PostItemProps) => {
    return (
      pages?.find((page: any) => page?.value?.includes(post.slug))?.count || 0
    );
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const currentParams = window.location.href.split("?")[1];

      const params = new URLSearchParams(currentParams);
      params.set(name, value);
      setLoadingSearch(false);

      return params.toString();
    },
    [searchQuery],
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
      `${pathname}?${createQueryString("tags", newTags.join(","))}`,
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
    setLoadingSearch(true);

    if (debouncedKeyword === "" && e.target.value === "") {
      setLoadingSearch(false);
    }
  };

  useEffect(() => {
    if (debouncedKeyword) setFirstLoad(false);

    router.replace(`${pathname}?${createQueryString("q", debouncedKeyword)}`);
  }, [debouncedKeyword, pathname, router]);

  const handleClearSearch = () => {
    setLoadingSearch(true);
    setKeyword("");
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
              className={cn(
                "w-full bg-transparent border border-secondary/10 text-secondary/70 font-medium text-sm py-3 shadow-inner shadow-secondary/10 rounded-xl outline-none focus-within:ring-[2px] focus-within:ring-secondary/20 focus-within:ring-offset-2 focus-within:ring-offset-primary placeholder:font-medium placeholder:text-secondary/30 duration-200",
                loadingSearch ? "pl-4 pr-12" : "px-4",
              )}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              onChange={handleDelayedInput}
            />

            {loadingSearch ? (
              <div className={cn("absolute right-3 px-1 py-1 duration-200")}>
                <IconLoader className="size-4 text-secondary/70 animate-spin" />
              </div>
            ) : (
              <div
                className={cn(
                  "absolute right-3 px-2 py-1 bg-secondary/10 rounded-md pointer-events-none",
                  inputFocused ? "opacity-0" : "opacity-100",
                )}
              >
                <p className="text-[10px] font-manrope font-black text-secondary/70">
                  Ctrl + K
                </p>
              </div>
            )}
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
                      "cursor-not-allowed opacity-50",
                  )}
                  onClick={() => handleSelectTag(tag)}
                >
                  <p
                    className={cn(
                      "font-manrope font-black text-xs duration-200",
                      selectedTags.includes(tag)
                        ? "text-white"
                        : "text-secondary/70",
                    )}
                  >
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </HeaderPage>

        {loadingSearch ? (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 h-full">
            {[...new Array(5)].map((_, key) => (
              <Skeleton key={key} className="w-full h-[332px] rounded-[32px]" />
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="size-9 flex items-center justify-center rounded-md bg-secondary/10">
              <IconBook2 className="text-secondary/80" />
            </div>

            <div className="gap-1.5 flex flex-col items-center">
              <p className="font-semibold text-secondary/70 leading-none">
                No posts found
              </p>
              <p className="text-xs font-semibold font-manrope text-secondary/60">
                Your search "{debouncedKeyword}" did not match any posts.
              </p>
            </div>

            <button
              className="font-bold cursor-pointer font-manrope text-xs py-1.5 px-3 rounded-lg bg-secondary/10 border border-secondary/15 text-secondary/80"
              onClick={handleClearSearch}
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 h-full">
            {filteredPosts
              .sort(
                (a, b) =>
                  new Date(b.body.publishedOn).getTime() -
                  new Date(a.body.publishedOn).getTime(),
              )
              .map((post: PostItemProps, index: number) => (
                <DelayedItem
                  key={index}
                  start="bottom"
                  end="top"
                  delay={Math.min(index * 0.08, 0.2)}
                >
                  <PostItem
                    key={index}
                    post={post}
                    viewCount={pages.length >= 1 ? pageViews(post) : false}
                  />
                </DelayedItem>
              ))}
          </div>
        )}
      </div>
    </DelayedItem>
  );
}
