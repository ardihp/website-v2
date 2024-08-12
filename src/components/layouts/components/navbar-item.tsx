"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  href: string;
  text: string;
}

export default function NavbarItem({ href, text, ...rest }: NavbarItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      {...rest}
      className={`${
        pathname.match(href)
          ? "opacity-100 shadow-inner shadow-secondary/15 dark:shadow-zinc-700/80 dark:bg-zinc-900/40 bg-secondary/[0.01]"
          : "opacity-50 hover:opacity-100"
      } duration-300 py-2 px-3 dark:border-zinc-800 border-secondary/20 rounded-lg w-full text-center dark:text-white text-secondary text-sm font-medium`}
    >
      {text}
    </Link>
  );
}
