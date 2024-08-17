"use client";

import React from "react";
import WorkItem from "./components/work-item";
import { listWorks } from "@/data/works";
import HeaderPage from "@/components/layouts/components/header-page";

export default function WorksView() {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto w-full px-[48px]">
      <HeaderPage
        title="My Works"
        description="Place of all my works that i have done including freelance projects and other projects from the interesting ideas that accross my mind."
      />

      <div className="grid md:grid-cols-2 mt-[48px] gap-8 h-full">
        <div className="flex flex-col gap-8 w-full">
          {listWorks?.map(
            (work, index: number) =>
              index % 2 === 0 && (
                <WorkItem
                  key={index}
                  work={work}
                  delay={index < 6 ? 0.1 * index + 0.15 : 0.15}
                  start="bottom"
                  end="bottom"
                />
              )
          )}
        </div>
        <div className="flex flex-col gap-8 w-full">
          {listWorks?.map(
            (work, index: number) =>
              index % 2 !== 0 && (
                <WorkItem
                  key={index}
                  work={work}
                  delay={index < 6 ? 0.1 * index + 0.15 : 0.15}
                  start="bottom"
                  end="bottom"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
