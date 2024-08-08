import React from "react";
import Link from "next/link";
import { Work } from "@/data/works";
import Image from "next/image";
import { IconCirclesRelation } from "@tabler/icons-react";
import DelayedItem from "@/components/layouts/components/delayed-item";
import { motion } from "framer-motion";

interface WorkItemProps {
  work: Work;
  delay?: number;
  start: string;
  end: string;
}

export default function WorkItem({ work, delay, start, end }: WorkItemProps) {
  return (
    <DelayedItem delay={delay} start={start} end={end}>
      <Link
        href={work.live || "#"}
        className="no-underline inline-block w-full"
        target={work.live ? "_blank" : "_self"}
        passHref
      >
        <div className="flex flex-col shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80 border-style group border-solid dark:border-opacity-50 hover:dark:border-opacity-100 p-4 rounded-[16px] h-fit hover:dark:bg-zinc-900/40 backdrop-blur-[1px] hover:bg-secondary/[0.02] duration-200">
          <div className="p-[6px] rounded-full w-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700">
            <div className="relative z-[2] h-[35px] w-[35px] rounded-full overflow-hidden">
              <Image
                src={work.image}
                alt="Logo Workplace"
                fill
                sizes="100px"
                className="object-cover object-center w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col pt-4 gap-2">
            <p className="font-fredoka font-medium text-xl">{work.company}</p>
            <p className="font-manrope text-sm font-bold line-clamp-2 text-pretty opacity-80">
              {work.desc}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-[6px] mt-6">
            <p className="font-fredoka text-sm font-medium opacity-60">
              {work.tech?.join(", ")}
            </p>

            {work.live && (
              <div className="flex items-center gap-2 opacity-80">
                <IconCirclesRelation
                  size={16}
                  stroke={3}
                  className="text-tertiary dark:text-primary"
                />
                <p className="font-fredoka text-sm font-medium text-tertiary dark:text-primary group-hover:underline">
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
