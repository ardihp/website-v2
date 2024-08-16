import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

interface HoverTextProps {
  text: string;
  image: string;
  title: string;
  desc: string;
  link: string;
}

export default function HoverText({
  text,
  image,
  title,
  desc,
  link,
}: HoverTextProps) {
  return (
    <HoverCard>
      <HoverCardTrigger href={link} target="_blank">
        <span className="text-secondary/60 underline cursor-pointer">
          {text}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-[300px] bg-primary border-secondary/10 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="relative w-full max-w-[45px] h-[45px] rounded-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="100px"
              className="object-contain h-auto w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg text-secondary/70">{title}</p>
            <p className="text-sm text-secondary/50 text-pretty line-clamp-2">
              {desc}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
