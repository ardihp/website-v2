import React from "react";
import WorkItem from "./components/work-item";
import { listWorks } from "@/data/works";
import DelayedItem from "@/components/layouts/components/delayed-item";

export default function WorksView() {
  return (
    <DelayedItem>
      <div className="flex flex-col max-w-screen-lg mx-auto w-full pt-[48px]">
        <div className="flex flex-col">
          <div className="grid grid-cols-[1fr_.8fr_1fr] px-[48px]">
            <div className="flex items-center border-x border-style w-full p-5">
              <p className="font-fredoka text-2xl font-medium">My Works</p>
            </div>
            <div className="w-full"></div>
            <div className="border-x border-style w-full"></div>
          </div>
          <div className="flex w-full">
            <div className="w-full max-w-[48px] border-y border-style" />
            <div className="flex items-center border border-style p-5 w-full">
              <p className="font-manrope font-medium">
                Place of all my works that i have done including projects from
                the interesting ideas that accross my mind.
              </p>
            </div>
            <div className="w-full max-w-[48px] border-y border-style" />
          </div>
          <div className="grid grid-cols-[1fr_.8fr_1fr] px-[48px] h-[36px]">
            <div className="flex gap-4 items-center border-x border-style w-full"></div>
            <div className="w-full"></div>
            <div className="border-x border-style w-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 pt-[48px] gap-8 px-[48px] h-full">
          <div className="flex flex-col w-full">
            {listWorks?.map(
              (work, index: number) =>
                index % 2 === 0 && (
                  <WorkItem
                    key={index}
                    work={work}
                    delay={index < 6 ? 0.2 * index + 0.25 : 0.25}
                  />
                )
            )}
          </div>
          <div className="flex flex-col w-full">
            {listWorks?.map(
              (work, index: number) =>
                index % 2 !== 0 && (
                  <WorkItem
                    key={index}
                    work={work}
                    delay={index < 6 ? 0.2 * index + 0.25 : 0.25}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </DelayedItem>
  );
}
