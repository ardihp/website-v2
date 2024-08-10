"use client";

import React, { ReactNode } from "react";
import NavbarSection from "./navbar";
import FooterSection from "./footer";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function LayoutSection({ children }: { children: ReactNode }) {
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
      <div className="w-full h-full flex flex-col flex-grow max-w-screen-lg mx-auto backdrop-blur-sm">
        {children}
      </div>
      <FooterSection />
    </div>
  );
}
