import Image from "next/image";
import React from "react";
import HeaderItem from "./components/header-item";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <div className="flex flex-col py-3 items-center sticky top-0 border-b border-style border-solid">
      <div className="flex justify-between w-full max-w-screen-lg rounded-full px-12">
        <Link
          href="/"
          className="relative w-[50px] h-[50px] rounded-full overflow-hidden bg-white cursor-none"
        >
          <Image
            src="/logo.png"
            fill
            alt="Logo Website"
            className="object-cover p-1"
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
