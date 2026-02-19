"use client";

import Image from "next/image";
import React, { useState } from "react";
import NavbarItem from "./components/navbar-item";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const menuItems = [
  { label: "Posts", href: "/posts" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
];

export default function NavbarSection() {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <>
      <header className="flex flex-col pt-4 md:pt-6 lg:pt-8 pb-4 lg:pb-8 items-center bg-transparent">
        <section
          className={cn(
            "flex justify-between items-center w-full rounded-full max-w-screen-lg duration-500",
            pathname.includes("/posts/")
              ? "px-4 md:px-6 xl:px-0"
              : "px-4 md:px-8 xl:px-12",
          )}
        >
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

          <nav className="hidden sm:flex items-center gap-2 md:gap-4 h-full sm:h-auto bg-[#faf6e8] rounded-[12px] p-2 shadow dark:shadow-inner shadow-secondary/15 dark:shadow-zinc-700/80 dark:bg-zinc-900/40">
            {menuItems.map((item) => (
              <NavbarItem key={item.label} href={item.href} text={item.label} />
            ))}
          </nav>

          <nav className="flex sm:hidden bg-[#faf6e8] rounded-xl p-1.5 shadow dark:shadow-inner shadow-secondary/15 dark:shadow-zinc-700/80 dark:bg-zinc-900/40">
            <div
              className="p-1.5 duration-200 active:shadow-inner dark:border-zinc-800 border-secondary/20 shadow-secondary/15 dark:shadow-zinc-700/80 dark:bg-zinc-900/40 bg-secondary/[0.01] rounded-lg w-full"
              onClick={() => setOpenDrawer(true)}
            >
              <IconMenuDeep className="size-5 text-secondary" />
            </div>
          </nav>
        </section>
      </header>

      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        direction="right"
      >
        <DrawerContent className="h-full rounded-none">
          <div className="flex items-center justify-between">
            <DrawerHeader className="py-7">
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>

            <DrawerClose className="absolute top-7 right-10">
              <IconX />
            </DrawerClose>
          </div>

          <div className="flex flex-col gap-6 px-5">
            {menuItems.map((item, key) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-start"
              >
                <p className="text-5xl font-medium">{item.label}</p>
                <span className="text-sm text-secondary">0{key + 1}</span>
              </Link>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
