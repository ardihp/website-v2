"use client";

import Image from "next/image";
import React from "react";
import NavbarItem from "./components/navbar-item";
import Link from "next/link";

export default function NavbarSection() {
  return (
    <header className="flex flex-col py-8 items-center bg-transparent">
      <section className="flex justify-between w-full max-w-screen-lg rounded-full px-12">
        <Link
          href="/"
          className="relative w-[50px] h-[50px] rounded-full overflow-hidden bg-[--background]"
        >
          <Image
            src="/logo.png"
            fill
            alt="Logo Website"
            className="object-cover"
            sizes="100px"
            priority
          />
        </Link>

        <nav className="flex items-center gap-4 bg-[#faf6e8] rounded-[12px] p-2 shadow dark:shadow-inner shadow-secondary/15 dark:shadow-zinc-700/80 dark:bg-zinc-900/40">
          <NavbarItem href="/posts" text="Posts" />
          <NavbarItem href="/works" text="Works" />
          <NavbarItem href="/about" text="About" />
        </nav>
      </section>
    </header>
  );
}
