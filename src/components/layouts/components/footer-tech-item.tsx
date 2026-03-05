import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import React, { ReactNode } from "react";

interface FooterTechItemProps {
  icon: ReactNode;
  href: string;
  title: string;
}

export default function FooterTechItem({
  icon,
  href,
  title,
}: FooterTechItemProps) {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger role="button" aria-label={title} asChild>
        <Link href={href} aria-label={title} target="_blank" passHref>
          <div className="flex items-center justify-center h-[24px] w-[24px] rounded-full relative opacity-50 hover:opacity-100">
            {icon}
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent
        sideOffset={5}
        className="dark:!bg-zinc-800 bg-primary/20 backdrop-blur-md border border-secondary/20 dark:border-zinc-800"
      >
        <p className="font-fredoka text-[12px] font-medium dark:!text-white text-secondary">
          {title}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
