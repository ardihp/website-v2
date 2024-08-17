import React from "react";
import DelayedItem from "@/components/layouts/components/delayed-item";
import Image from "next/image";
import { WorkExperience, workExperience } from "@/data/experience";
import dayjs from "dayjs";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <DelayedItem start="bottom" end="bottom" delay={0.3}>
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

        <div className="flex flex-col gap-8 w-full">
          {workExperience?.map((work: WorkExperience, index: number) => (
            <DelayedItem key={index} start="bottom" end="bottom" delay={0.3}>
              <Link href={work.link} target="_blank" passHref>
                <div className="flex gap-6">
                  <div className="flex items-center justify-center w-full h-[90px] max-w-[90px] rounded-[20px] shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.01]">
                    <div className="relative h-[65px] w-[65px] rounded-[12px] overflow-hidden shadow-lg shadow-secondary/10 dark:shadow-zinc-700">
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
                  <div className="flex flex-col p-2 w-full">
                    <div className="flex items-center justify-between">
                      <p className="font-manrope font-black text-md opacity-70">
                        {work.company}
                      </p>

                      <p className="text-sm font-medium opacity-60">
                        {dayjs(work.start_date).format("MMM YYYY")} -{" "}
                        {work?.end_date
                          ? dayjs().format("MMM YYYY")
                          : "Present"}
                      </p>
                    </div>
                    <p className="text-base font-medium opacity-60">
                      {work.role}
                    </p>
                    <p className="font-manrope text-xs font-bold mt-2 opacity-40 text-pretty">
                      {work.description}
                    </p>
                  </div>
                </div>
              </Link>
            </DelayedItem>
          ))}
        </div>
      </article>
    </DelayedItem>
  );
}
