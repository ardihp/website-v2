import React, { useState } from "react";
import { Work } from "@/data/works";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import DelayedItem from "@/components/layouts/components/delayed-item";

interface WorkItemProps {
  work: Work;
  delay?: number;
  start: "top" | "bottom" | "left" | "right";
  end: "top" | "bottom" | "left" | "right";
  className?: string;
}

export default function WorkItem({
  work,
  className,
  start,
  end,
  delay,
}: WorkItemProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <DelayedItem start={start} end={end} delay={delay}>
      <div
        className={cn(
          "flex flex-col md:flex-row gap-4 md:gap-10 justify-between shadow-inner shadow-secondary/10 dark:shadow-zinc-700/80 border-style group border-solid dark:border-opacity-50 hover:dark:border-opacity-100 p-4 rounded-[16px] h-fit dark:bg-zinc-900/40 bg-secondary/[0.01] overflow-hidden",
          className,
        )}
      >
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-2 md:min-w-[400px] md:max-w-[400px]">
            <div className="border border-dashed border-secondary/20 p-1 w-fit rounded-full">
              <Image
                src={work.logo}
                alt={work.company}
                width={35}
                height={35}
                className="object-cover object-center rounded-full"
              />
            </div>

            <p className="font-semibold text-lg text-secondary/70">
              {work.company}
            </p>

            <p className="font-manrope font-bold text-xs text-secondary/40 leading-[1.2rem] text-pretty">
              {work.desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {work.tech.map((item, key) => (
              <div
                key={key}
                className="flex items-center justify-center px-2 py-1 bg-primary/5 backdrop-blur-sm border border-dashed border-secondary/20 rounded-full"
              >
                <p className="font-manrope font-bold text-xs text-secondary/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative -mt-10 aspect-video top-10 w-full rounded-t-lg overflow-hidden border border-dashed border-secondary/20">
          <Image
            src={work.thumbnail}
            sizes="438px"
            fill
            alt={work.company}
            className="object-cover object-top rounded-t-lg p-1"
            quality={80}
            onLoad={() => setTimeout(() => setIsLoaded(true), 1000)}
          />

          <div className="absolute top-0 p-1 w-full h-full">
            <div
              className={cn(
                `${isLoaded ? "backdrop-blur-0" : "backdrop-blur-xl"} rounded-t duration-500 w-full h-full bg-white/5`,
              )}
            />
          </div>

          {work.live && (
            <Link
              href={work.live}
              target="_blank"
              className="absolute bottom-10 right-4 group rounded-full p-1.5 flex items-center gap-1 border border-primary/10 bg-secondary/30 invert-[10%] backdrop-blur-sm cursor-pointer"
            >
              <IconExternalLink size={16} stroke={2.5} className="text-white" />
            </Link>
          )}
        </div>
      </div>
    </DelayedItem>
  );
}
