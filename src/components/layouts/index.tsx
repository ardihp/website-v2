import React, { ReactNode } from "react";
import HeaderSection from "./header";
import FooterSection from "./footer";

export default function LayoutSection({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSection />
      <div className="w-full h-full flex flex-col flex-grow">{children}</div>
      <FooterSection />
    </div>
  );
}
