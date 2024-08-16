import React from "react";
import DelayedItem from "@/components/layouts/components/delayed-item";

export default function ExperienceSection() {
  return (
    <DelayedItem start="bottom" end="bottom">
      <article className="flex flex-col gap-4 mt-24 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[32px] p-16 pt-20 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
        <div
          className="absolute top-[-40px] left-[54px] w-auto p-4 px-6 bg-primary dark:bg-[#151515] bg-[url('/bg-noise.png')] dark:!bg-auto bg-blend-hard-light"
          style={{ backgroundSize: "90px" }}
        >
          <div className="p-4 rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
            <p className="shadowed-text text-primary text-[20px] font-[600]">
              Work Experience
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_75px_1fr] w-full">
          <div className="flex flex-col w-full">
            <div className="h-[300] w-full p-4 border border-secondary"></div>
          </div>
          <div className="flex flex-col w-full">
            
          </div>
          <div className="flex flex-col w-full">
            <div className="h-[300] w-full p-4 border border-secondary"></div>
          </div>
        </div>
      </article>
    </DelayedItem>
  );
}
