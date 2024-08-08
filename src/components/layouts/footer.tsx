"use client";

import React, { useEffect, useState } from "react";
import FooterTechItem from "./components/footer-tech-item";
import {
  IconBrandNextjs,
  IconBrandRadixUi,
  IconBrandTailwind,
  IconBrandVercel,
  IconTriangleFilled,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

export default function FooterSection() {
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className="flex items-center justify-between px-4 lg:px-12 py-10">
        <div className="flex items-center gap-3">
          <p className="text-xs font-medium">Made by</p>
          <div className="flex items-center gap-2 p-[5px] pr-[8px] rounded-full shadow-inner shadow-secondary/15 dark:shadow-zinc-700/80 dark:bg-zinc-800/50 border dark:border-zinc-800 border-secondary/20">
            <FooterTechItem
              href="https://nextjs.org/"
              title="Next.js"
              icon={<IconBrandNextjs size={18} className="text-secondary dark:text-white" />}
            />
            <FooterTechItem
              href="https://tailwindcss.com/"
              title="Tailwind Css"
              icon={<IconBrandTailwind size={18} className="text-secondary dark:text-white" />}
            />
            <FooterTechItem
              href="https://ui.shadcn.com/"
              title="Radix with Shadcn/ui"
              icon={<IconBrandRadixUi size={18} className="text-secondary dark:text-white" />}
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
        </div>

        <div className="flex items-center shadow-inner shadow-secondary/15 dark:shadow-zinc-700/80 dark:bg-zinc-800/50 border dark:border-zinc-800 border-secondary/20 rounded-full">
          {["Dark", "Light", "System"].map((item, key) => (
            <p
              key={key}
              className={`text-[12px] rounded-full py-[5px] px-[10px] font-medium cursor-pointer ${
                currentTheme === item?.toLocaleLowerCase()
                  ? "opacity-100 dark:bg-zinc-900 bg-secondary/10"
                  : "opacity-50"
              }`}
              onClick={() => setTheme(item?.toLocaleLowerCase())}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
