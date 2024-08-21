"use client";

import React, { useEffect, useState } from "react";
import FooterTechItem from "./components/footer-tech-item";
import {
  IconBrandNextjs,
  IconBrandNotion,
  IconBrandRadixUi,
  IconBrandTailwind,
  IconBrandVercel,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

export default function FooterSection() {
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <footer className="w-full max-w-screen-lg mx-auto">
      <article className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between px-4 sm:px-8 lg:px-12 py-6 md:py-10">
        <section className="flex w-fit sm:w-auto items-center gap-3 p-2 pl-3 rounded-full shadow shadow-secondary/15 dark:shadow-zinc-700/80">
          <p className="text-xs font-medium opacity-50">Made by</p>
          <div className="flex items-center gap-1 p-[5px] pr-[8px] rounded-full shadow-inner shadow-secondary/15 dark:shadow-zinc-700/80 dark:bg-zinc-800/50">
            <FooterTechItem
              href="https://nextjs.org/"
              title="Next.js"
              icon={
                <IconBrandNextjs
                  size={18}
                  className="text-secondary dark:text-white"
                />
              }
            />
            <FooterTechItem
              href="https://tailwindcss.com/"
              title="Tailwind Css"
              icon={
                <IconBrandTailwind
                  size={18}
                  className="text-secondary dark:text-white"
                />
              }
            />
            <FooterTechItem
              href="https://ui.shadcn.com/"
              title="Radix with Shadcn/ui"
              icon={
                <IconBrandRadixUi
                  size={18}
                  className="text-secondary dark:text-white"
                />
              }
            />
            <FooterTechItem
              href="https://notion.so/"
              title="Notion"
              icon={
                <IconBrandNotion
                  size={18}
                  className="text-secondary dark:text-white"
                />
              }
            />
            <FooterTechItem
              href="https://vercel.com/home"
              title="Vercel"
              icon={
                <IconBrandVercel
                  fill={currentTheme === "light" ? "#470A00" : "white"}
                  className="text-secondary dark:text-white"
                  size={16}
                />
              }
            />
          </div>
        </section>

        <section className="p-2 w-fit sm:w-auto ml-auto sm:ml-0 rounded-full shadow shadow-secondary/15 dark:shadow-zinc-700/80">
          <div className="flex items-center dark:bg-zinc-800/50 rounded-full">
            {["Dark", "Light", "System"].map((item, key) => (
              <p
                key={key}
                className={`text-[12px] rounded-full py-[5px] px-[10px] font-medium cursor-pointer ${
                  currentTheme === item?.toLocaleLowerCase()
                    ? "opacity-100 shadow-inner shadow-secondary/15 dark:shadow-zinc-700/80"
                    : "opacity-50"
                }`}
                onClick={() => setTheme(item?.toLocaleLowerCase())}
              >
                {item}
              </p>
            ))}
          </div>
        </section>
      </article>
    </footer>
  );
}
