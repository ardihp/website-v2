import React from "react";
import DelayedItem from "./delayed-item";

interface HeaderPageProps {
  title: string;
  description: string;
}

export default function HeaderPage({ title, description }: HeaderPageProps) {
  return (
    <DelayedItem start="bottom" end="bottom">
      <article className="flex flex-col gap-4 mt-12 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[32px] pt-12 pb-10 px-16 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
        <div
          className="absolute top-[-40px] left-[54px] w-auto p-4 px-6 bg-primary dark:bg-[#151515] bg-[url('/bg-noise.png')] dark:!bg-auto bg-blend-hard-light"
          style={{ backgroundSize: "90px" }}
        >
          <div className="p-4 rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
            <p className="shadowed-text text-primary text-[20px] font-[600]">
              {title}
            </p>
          </div>
        </div>

        <section className="rounded-[20px] w-fit h-fit dark:bg-zinc-900/40 bg-secondary/[0.01]">
          <DelayedItem start="bottom" end="bottom">
            <p className="shadowed-text font-medium text-xl text-secondary/70 text-pretty">
              {description}
            </p>
          </DelayedItem>
        </section>
      </article>
    </DelayedItem>
  );
}
