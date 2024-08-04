"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import HeaderSection from "./header";
import FooterSection from "./footer";
import { IconCircleFilled, IconEye, IconEyeFilled } from "@tabler/icons-react";
import { useFollowPointer } from "@/lib/use-follow-cursor";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function LayoutSection({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const pathname = usePathname();

  useEffect(() => {
    const moveCursor = (e: any) => {
      const cursor: any =
        document.getElementsByClassName("cursor")?.item(0) || "";
      const cursorOverlay: any =
        document.getElementsByClassName("cursor-overlay")?.item(0) || "";

      const button = Array.from(document.querySelectorAll(".footer-tech-item"));

      button.forEach((btn) => {
        btn.addEventListener("mousemove", function () {
          cursor.classList.add("overlay-blur");
          cursorOverlay.classList.add("overlay-blur");
        });
        btn.addEventListener("mouseleave", function () {
          cursor.classList.remove("overlay-blur");
          cursorOverlay.classList.remove("overlay-blur");
        });
      });

      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorOverlay.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mouseover", moveCursor);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <React.Fragment key={pathname}>
        <div className="absolute flex items-center justify-center">
          <div className="cursor">
            <IconCircleFilled className="dark:text-white text-black w-[8px] h-[8px] icon-dot" />
            <IconEyeFilled className="hidden dark:text-white text-black w-[14px] h-[14px] icon-eye" />
          </div>
          <motion.div ref={ref} className="cursor-overlay" style={{ x, y }} />
          {/* <div className="cursor-overlay" /> */}
        </div>
        <div className="flex flex-col min-h-screen">
          <HeaderSection />
          <div className="w-full h-full flex flex-col flex-grow max-w-screen-lg mx-auto backdrop-blur-sm">
            {children}
          </div>
          <FooterSection />
        </div>
      </React.Fragment>
    </AnimatePresence>
  );
}
