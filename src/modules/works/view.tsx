"use client";

import React from "react";
import WorkItem from "./components/work-item";
import { listWorks } from "@/data/works";
import HeaderPage from "@/components/layouts/components/header-page";

export default function WorksView() {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto w-full pt-[12px]">
      <HeaderPage
        title="My Works"
        description="Place of all my works that i have done including projects from
                the interesting ideas that accross my mind."
      />

      <div className="grid md:grid-cols-2 pt-[48px] gap-9 px-[48px] h-full">
        <div className="flex flex-col gap-9 w-full">
          {listWorks?.map(
            (work, index: number) =>
              index % 2 === 0 && (
                <WorkItem
                  key={index}
                  work={work}
                  delay={index < 6 ? 0.2 * index + 0.25 : 0.25}
                  start="bottom"
                  end="bottom"
                />
              )
          )}
        </div>
        <div className="flex flex-col gap-9 w-full">
          {listWorks?.map(
            (work, index: number) =>
              index % 2 !== 0 && (
                <WorkItem
                  key={index}
                  work={work}
                  delay={index < 6 ? 0.2 * index + 0.25 : 0.25}
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
