import React from "react";
import Image from "next/image";
import { WorkExperience, workExperience } from "@/data/experience";
import dayjs from "dayjs";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <article className="flex flex-col items-center gap-4 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[20px] md:rounded-[32px] p-6 pt-10 md:p-10 md:pt-14 lg:p-16 lg:pt-20 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
      <div
        className="absolute top-[-28px] md:top-[-40px] left-[26px] md:left-[32px] lg:left-[54px] w-fit md:w-auto p-2 md:p-4 px-3 md:px-6 bg-primary dark:bg-[#151515] bg-[url('/bg-noise.png')] bg-blend-exclusion dark:bg-blend-difference"
        style={{ backgroundSize: "110px" }}
      >
        <div className="p-3 md:p-4 rounded-[8px] md:rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
          <p className="shadowed-text text-primary text-[16px] md:text-[20px] font-[600]">
            Work Experience
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {workExperience?.map((work: WorkExperience, index: number) => (
          <Link key={index} href={work.link} target="_blank" passHref>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
              <div className="flex items-center justify-center w-full h-[65px] md:h-[90px] max-w-[65px] md:max-w-[90px] rounded-[16px] md:rounded-[20px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01]">
                <div className="relative h-[45px] md:h-[65px] w-[45px] md:w-[65px] rounded-[12px] overflow-hidden shadow-lg shadow-secondary/10 dark:shadow-zinc-700">
                  <Image
                    src={work?.logo}
                    alt="Company Logo"
                    fill
                    sizes="200px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col md:p-2 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <p className="font-manrope font-black text-base md:text-md text-secondary/70 dark:text-white">
                    {work.company}
                  </p>

                  <p className="text-xs md:text-sm font-medium text-secondary/50 dark:text-white/70 mb-2 md:mb-0">
                    {dayjs(work.start_date).format("MMM YYYY")} -{" "}
                    {work?.end_date ? dayjs().format("MMM YYYY") : "Present"}
                  </p>
                </div>
                <p className="text-base font-medium text-secondary/50 dark:text-white/90">
                  {work.role}
                </p>
                <p className="font-manrope text-[10px] md:text-xs font-bold mt-1 md:mt-2 text-secondary/40 dark:text-white/70 text-pretty">
                  {work.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
