import React from "react";

export default function IntroductionSection() {
  return (
    <article className="flex flex-col items-center gap-4 mt-10 md:mt-12 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[20px] md:rounded-[32px] p-6 pt-10 md:p-10 md:pt-14 lg:p-16 lg:pt-20 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
      <div
        className="absolute top-[-28px] md:top-[-40px] left-[26px] md:left-[32px] lg:left-[54px] w-fit md:w-auto p-2 md:p-4 px-3 md:px-6 bg-primary dark:bg-[#121212] bg-[url('/bg-noise.png')] bg-blend-exclusion dark:bg-blend-normal"
        style={{ backgroundSize: "100px" }}
      >
        <div className="p-3 md:p-4 rounded-[8px] md:rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
          <p className="shadowed-text text-primary text-[16px] md:text-[20px] font-[600]">
            Introduction
          </p>
        </div>
      </div>

      <section className="w-full flex flex-col sm:flex-row sm:items-end gap-3">
        <div className="flex items-end gap-3">
          <div className="p-4 rounded-[14px] md:rounded-[20px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01]">
            <p className="shadowed-text text-[48px] md:text-[64px]">Hai</p>
          </div>
          <div className="rounded-[14px] md:rounded-[20px] w-[25px] md:w-[40px] h-[25px] md:h-[40px] flex items-center justify-center shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01]">
            <p className="shadowed-text leading-[0em] text-[36px] md:text-[52px] relative top-[-12px] md:top-[-16px]">
              ,
            </p>
          </div>
        </div>
        <div className="p-4 rounded-[14px] md:rounded-[20px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01]">
          <p className="shadowed-text text-[48px] md:text-[64px]">
            {"I'm Ardi"}
          </p>
        </div>
      </section>

      <p className="font-medium text-base md:text-lg w-full md:w-[550px] mr-auto text-pretty text-secondary/60 dark:text-white/70">
        Frontend Developer with over two years of experience in crafting
        responsive and visually appealing websites.
      </p>
    </article>
  );
}
