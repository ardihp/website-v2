"use client";

import React, { ReactNode, useEffect } from "react";
import NavbarSection from "./navbar";
import FooterSection from "./footer";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { usePathname } from "next/navigation";

export default function LayoutSection({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="shadow shadow-secondary/10">
        <ProgressBar
          height="2px"
          color="#3f3f46cc"
          options={{ showSpinner: false, easing: "ease-in-out" }}
          shallowRouting
        />
      </div>
      <NavbarSection />
      <main className="w-full h-full flex flex-col flex-grow">{children}</main>
      <FooterSection />
    </div>
  );
}
