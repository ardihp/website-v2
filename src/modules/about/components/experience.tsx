import React from "react";
import Image from "next/image";
import type { WorkExperience } from "@/data/experience";
import { workExperience } from "@/data/experience";
import dayjs from "dayjs";
import Link from "next/link";
import { IconBriefcaseFilled } from "@tabler/icons-react";

export default function ExperienceSection() {
  return (
    <article className="relative flex flex-col items-center gap-4 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[20px] md:rounded-[32px] shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
      <section
        className="absolute top-[-28px] md:top-[-40px] left-[26px] md:left-[32px] lg:left-[54px] w-fit md:w-auto p-2 md:p-4 px-3 md:px-6 bg-primary dark:bg-[#121212] bg-[url('/bg-noise.png')] bg-blend-exclusion dark:bg-blend-normal"
        style={{ backgroundSize: "110px" }}
      >
        <div className="p-3 md:p-4 rounded-[8px] md:rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
          <p className="shadowed-text text-primary text-[16px] md:text-[20px] font-[600]">
            Work Experience
          </p>
        </div>
      </section>

      <section className="p-6 pt-10 md:p-10 md:pt-14 lg:p-16 lg:pt-20 relative overflow-hidden rounded-[20px] md:rounded-[32px]">
        <IconBriefcaseFilled className="size-36 absolute -top-8 -right-8 -rotate-[30deg] text-secondary opacity-5" />

        <div className="flex flex-col gap-8 w-full">
          {workExperience?.map((work: WorkExperience, index: number) => (
            <div
              key={work.company}
              className="flex flex-col md:flex-row gap-3 md:gap-6"
            >
              <Link
                key={index}
                href={work?.link ? work?.link : "/works"}
                target={work?.link ? "_blank" : "_self"}
                className="flex items-center w-full h-[72px] md:h-[80px] max-w-[72px] md:max-w-[80px] justify-center rounded-[16px] md:rounded-[20px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-[#f5f0e2] z-10"
                passHref
              >
                <div className="relative size-[48px] md:size-[56px] rounded-[12px] overflow-hidden shadow-lg shadow-secondary/10 dark:shadow-zinc-700">
                  <Image
                    src={work?.logo}
                    alt="Company Logo"
                    fill
                    sizes="200px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </Link>

              <div className="flex flex-col md:p-2 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <p className="font-manrope font-black text-base md:text-md text-secondary/70 dark:text-white">
                    {work.role}
                  </p>

                  <p className="font-manrope text-[10px] md:text-xs font-bold text-secondary/50 dark:text-white/70 mb-2 md:mb-0">
                    {dayjs(work.start_date).format("MMM YYYY")} -{" "}
                    {work?.end_date
                      ? dayjs(work?.end_date).format("MMM YYYY")
                      : "Current"}
                  </p>
                </div>
                <p className="font-manrope text-xs font-bold text-secondary/50 dark:text-white/90 mt-0.5">
                  {work.company} -- {work.location}, {work.work_type}
                </p>
                <p className="font-manrope text-[10px] md:text-xs font-bold mt-1 md:mt-3 text-secondary/40 dark:text-white/70 text-pretty">
                  {work.description}
                </p>

                <ul className="list-disc pl-5">
                  {work.job_list.map((job, jobIdx) => (
                    <li
                      key={jobIdx}
                      className="font-manrope text-[10px] md:text-xs font-bold mt-1 md:mt-3 text-secondary/40 dark:text-white/70 text-pretty"
                    >
                      {job}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
