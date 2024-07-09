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
          ? "dark:text-sky-400 dark:bg-sky-500/20 bg-sky-400/20 text-sky-500"
          : ""
      } duration-300 py-2 px-3 rounded-lg w-full text-center text-sm font-medium cursor-none`}
    >
      {text}
    </Link>
  );
}
