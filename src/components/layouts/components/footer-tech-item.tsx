import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger role="button" aria-label={title}>
          <Link href={href} aria-label={title} target="_blank" passHref>
            <div className="flex items-center justify-center h-[24px] w-[24px] rounded-full relative opacity-50 hover:opacity-100">
              {icon}
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          sideOffset={10}
          className="dark:!bg-zinc-800 bg-transparent border border-secondary/20 dark:border-zinc-800"
        >
          <p className="font-fredoka text-[12px] font-medium dark:!text-white text-secondary">
            {title}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
