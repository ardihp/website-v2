"use client";

import React from "react";
import Link from "next/link";
import { Work } from "@/data/works";
import Image from "next/image";
import { IconCirclesRelation } from "@tabler/icons-react";
import DelayedItem from "@/components/layouts/components/delayed-item";

interface WorkItemProps {
  work: Work;
  delay?: number;
}

export default function WorkItem({ work, delay }: WorkItemProps) {
  return (
    <DelayedItem delay={delay}>
      <Link
        href={work.live || "#"}
        className="no-underline cursor-none mb-8 inline-block w-full"
        target={work.live ? "_blank" : "_self"}
        passHref
      >
        <div className="flex flex-col border border-style group border-solid dark:border-opacity-50 hover:dark:border-opacity-100 p-4 rounded-lg h-fit bg-transparent hover:bg-zinc-900/40 duration-300">
          <div className="border border-style border-solid p-1 rounded-full w-fit">
            <div className="relative z-[2] h-[35px] w-[35px] rounded-full overflow-hidden">
              <Image
                src={work.image}
                alt="Logo Workplace"
                fill
                className="object-cover object-center w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col pt-4 gap-2">
            <p className="font-fredoka font-medium text-xl">{work.company}</p>
            <p className="font-manrope text-sm line-clamp-2 text-pretty opacity-80">
              {work.desc}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-[6px] mt-6">
            <p className="font-fredoka text-sm opacity-80">
              {work.tech?.join(", ")}
            </p>

            {work.live && (
              <div className="flex items-center gap-2 opacity-80">
                <IconCirclesRelation
                  size={16}
                  className="dark:text-sky-400 text-sky-500"
                />
                <p className="font-fredoka text-sm dark:text-sky-400 text-sky-500 group-hover:underline">
                  {work.live}
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </DelayedItem>
  );
}
