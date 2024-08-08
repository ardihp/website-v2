import React from "react";
import DelayedItem from "./delayed-item";

interface HeaderPageProps {
  title: string;
  description: string;
}

export default function HeaderPage({ title, description }: HeaderPageProps) {
  return (
    <div className="relative">
      <div className="flex flex-col">
        <div className="flex w-full">
          <div className="w-full max-w-[36px] border-style border-secondary/15 shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80" />
          <div className="grid grid-cols-[1fr_.8fr_1fr] w-full">
            <div className="flex items-center border-x-2 border-style border-secondary/15 w-full p-5 shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80">
              <DelayedItem start="left" end="bottom">
                <p className="font-fredoka text-2xl font-medium">{title}</p>
              </DelayedItem>
            </div>
            <div className="w-full shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80" />
            <div className="border-x-2 border-style border-secondary/15 w-full shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80" />
          </div>
          <div className="w-full max-w-[36px] border-style border-secondary/15 shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80" />
        </div>
        <div className="flex w-full">
          <div className="w-full max-w-[36px] border-y-2 border-style border-secondary/15 shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80" />
          <div className="flex items-center border-2 border-style border-secondary/15 p-5 w-full shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80">
            <DelayedItem delay={0.1} start="left" end="bottom">
              <p className="font-manrope font-bold opacity-80">{description}</p>
            </DelayedItem>
          </div>
          <div className="w-full max-w-[36px] border-y-2 border-style border-secondary/15 shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80" />
        </div>
        <div className="flex w-full">
          <div className="w-full max-w-[36px] border-style border-secondary/15 shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80" />
          <div className="grid grid-cols-[1fr_.8fr_1fr] h-[36px] w-full">
            <div className="flex gap-4 items-center border-x-2 border-style border-secondary/15 w-full shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80"></div>
            <div className="w-full shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80" />
            <div className="border-x-2 border-style border-secondary/15 w-full shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80" />
          </div>
          <div className="w-full max-w-[36px] border-style border-secondary/15 shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80" />
        </div>
      </div>

      <div className="w-full h-full absolute top-0 bg-gradient-to-r from-primary/90 dark:from-[#121212] from-[0%] via-transparent dark:via-transparent via-[2%] to-transparent dark:to-transparent" />
      <div className="w-full h-full absolute top-0 bg-gradient-to-l from-primary/90 dark:from-[#121212] from-[0%] via-transparent dark:via-transparent via-[2%] to-transparent dark:to-transparent" />
      <div className="w-full h-full absolute top-0 bg-gradient-to-t from-primary/90 dark:from-[#121212] from-[0%] via-transparent dark:via-transparent via-[15%] to-transparent dark:to-transparent" />
      <div className="w-full h-full absolute top-0 bg-gradient-to-b from-primary/90 dark:from-[#121212] from-[3%] via-transparent dark:via-transparent via-[15%] to-transparent dark:to-transparent" />
    </div>
  );
}
