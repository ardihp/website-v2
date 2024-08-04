import Image from "next/image";
import React from "react";
import HeaderItem from "./components/header-item";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <div className="flex flex-col pt-8 pb-3 items-center sticky top-0 bg-transparent backdrop-blur-sm z-[10]">
      <div className="flex justify-between w-full max-w-screen-lg rounded-full px-12">
        <Link
          href="/"
          className="relative w-[50px] h-[50px] rounded-full overflow-hidden bg-[--background] cursor-none"
        >
          <Image
            src="/logo.png"
            fill
            alt="Logo Website"
            className="object-cover"
          />
        </Link>

        <div className="flex items-center gap-4">
          <HeaderItem href="/posts" text="Posts" />
          <HeaderItem href="/works" text="Works" />
          <HeaderItem href="/about" text="About" />
        </div>
      </div>
    </div>
  );
}
