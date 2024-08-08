"use client";

import React, { ReactNode } from "react";
import NavbarSection from "./navbar";
import FooterSection from "./footer";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function LayoutSection({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <React.Fragment key={pathname}>
        <div className="flex flex-col min-h-screen">
          <NavbarSection />
          <div className="w-full h-full flex flex-col flex-grow max-w-screen-lg mx-auto backdrop-blur-sm">
            {children}
          </div>
          <FooterSection />
        </div>
      </React.Fragment>
    </AnimatePresence>
  );
}
