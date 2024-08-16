import React from "react";
import DelayedItem from "@/components/layouts/components/delayed-item";

export default function IntroductionSection() {
  return (
    <DelayedItem start="bottom" end="bottom">
      <article className="flex flex-col gap-4 mt-12 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[32px] p-16 pt-20 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
        <div
          className="absolute top-[-40px] left-[54px] w-auto p-4 px-6 bg-primary dark:bg-[#151515] bg-[url('/bg-noise.png')] dark:!bg-auto bg-blend-hard-light"
          style={{ backgroundSize: "90px" }}
        >
          <div className="p-4 rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
            <p className="shadowed-text text-primary text-[20px] font-[600]">
              Introduction
            </p>
          </div>
        </div>

        <DelayedItem start="bottom" end="bottom" delay={0.1}>
          <section className="flex items-end gap-3">
            <div className="p-4 rounded-[20px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01]">
              <p className="shadowed-text">Hai</p>
            </div>
            <div className="rounded-[20px] w-[40px] h-[40px] flex items-center justify-center shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01]">
              <p className="shadowed-text leading-[0em] text-[52px] relative top-[-16px]">
                ,
              </p>
            </div>
            <div className="p-4 rounded-[20px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01]">
              <p className="shadowed-text">{"I'm Ardi"}</p>
            </div>
          </section>
        </DelayedItem>

        <DelayedItem start="bottom" end="bottom" delay={0.15}>
          <section className="rounded-[20px] w-fit h-fit dark:bg-zinc-900/40 bg-secondary/[0.01]">
            <p className="shadowed-text font-medium text-xl w-[550px] text-secondary/60 text-pretty">
              Frontend Developer with over two years of experience in crafting
              responsive and visually appealing websites.
            </p>
          </section>
        </DelayedItem>
      </article>
    </DelayedItem>
  );
}
