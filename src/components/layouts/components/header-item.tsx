"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderItemProps {
  href: string;
  text: string;
}

export default function HeaderItem({ href, text, ...rest }: HeaderItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      {...rest}
      className={`${
        pathname.match(href)
          ? "opacity-100 border-b-2"
          : "opacity-50 hover:opacity-100"
      } duration-100 py-2 px-3 dark:border-zinc-800 border-secondary/20 rounded-lg w-full text-center dark:text-white text-secondary text-sm font-medium cursor-none`}
    >
      {text}
    </Link>
  );
}
