import React from "react";
import DelayedItem from "./delayed-item";

interface HeaderPageProps {
  title: string;
  description: string;
}

export default function HeaderPage({ title, description }: HeaderPageProps) {
  return (
    <DelayedItem start="bottom" end="bottom">
      <article className="flex flex-col items-center gap-4 mt-10 md:mt-12 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[20px] md:rounded-[32px] p-6 pt-8 md:p-10 md:pt-14 lg:p-16 lg:pt-20 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
        <div
          className="absolute top-[-28px] md:top-[-40px] left-[26px] md:left-[32px] lg:left-[54px] w-fit md:w-auto p-2 md:p-4 px-3 md:px-6 bg-primary dark:bg-[#151515] bg-[url('/bg-noise.png')] bg-blend-exclusion dark:bg-blend-difference"
          style={{ backgroundSize: "110px" }}
        >
          <div className="p-3 md:p-4 rounded-[8px] md:rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
            <p className="shadowed-text text-primary text-[16px] md:text-[20px] font-[600]">
              Biography
            </p>
          </div>
        </div>

        <section className="rounded-[20px] w-fit h-fit dark:bg-zinc-900/40 bg-secondary/[0.01]">
          <DelayedItem start="bottom" end="bottom">
            <p className="font-medium text-base md:text-lg text-secondary/70 text-pretty">
              {description}
            </p>
          </DelayedItem>
        </section>
      </article>
    </DelayedItem>
  );
}
