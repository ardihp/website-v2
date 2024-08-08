import React, { ReactNode } from "react";
import NavbarSection from "./navbar";
import FooterSection from "./footer";

export default function LayoutSection({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection />
      <div className="w-full h-full flex flex-col flex-grow max-w-screen-lg mx-auto backdrop-blur-sm">
        {children}
      </div>
      <FooterSection />
    </div>
  );
}
