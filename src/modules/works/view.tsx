import React from "react";

export default function WorksView() {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto w-full pt-[52px]">
      <div className="flex flex-col">
        <div className="grid grid-cols-3 px-[48px]">
          <div className="flex items-center border-x border-dashed dark:border-zinc-700 border-zinc-300 w-full p-5">
            <p className="font-fredoka text-2xl font-medium">My Works</p>
          </div>
          <div className="w-full"></div>
          <div className="border-x border-dashed dark:border-zinc-700 border-zinc-300 w-full"></div>
        </div>
        <div className="flex w-full">
          <div className="w-full max-w-[48px] border-y border-dashed dark:border-zinc-700 border-zinc-300" />
          <div className="flex items-center border border-dashed dark:border-zinc-700 border-zinc-300 p-5 w-full">
            <p className="font-manrope font-medium">
              Place of all my works that i have done also some projects from the
              interesting ideas that sometimes come to mind.
            </p>
          </div>
          <div className="w-full max-w-[48px] border-y border-dashed dark:border-zinc-700 border-zinc-300" />
        </div>
        <div className="grid grid-cols-3 px-[48px] h-[36px]">
          <div className="flex items-center border-x border-dashed dark:border-zinc-700 border-zinc-300 w-full"></div>
          <div className="w-full"></div>
          <div className="border-x border-dashed dark:border-zinc-700 border-zinc-300 w-full"></div>
        </div>
      </div>
    </div>
  );
}
