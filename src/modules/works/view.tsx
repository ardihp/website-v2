import { listWorks } from "@/data/works";
import { IconCirclesRelation, IconLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorksView() {
  return (
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
              Place of all my works that i have done including projects from the
              interesting ideas that accross my mind.
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

      <div className="columns-2 pt-[48px] gap-8 px-[48px] h-full">
        {listWorks?.map((work, index: number) => (
          <Link
            key={index}
            href={work.live || "#"}
            className="no-underline cursor-none mb-8 inline-block w-full"
            passHref
          >
            <div className="flex flex-col border border-style group border-solid dark:border-opacity-50 hover:dark:border-opacity-100 p-4 rounded-lg h-fit bg-transparent hover:bg-zinc-900/40 duration-300">
              <div className="border border-style border-solid p-1 rounded-full w-fit">
                <div className="relative z-[2] h-[35px] w-[35px] rounded-full overflow-hidden">
                  <Image
                    src={work.image}
                    alt="Logo Workplace"
                    fill
                    className="object-cover object-center w-full h-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col pt-4 gap-2">
                <p className="font-fredoka font-medium text-xl">
                  {work.company}
                </p>
                <p className="font-manrope text-sm line-clamp-2 text-pretty opacity-80">
                  {work.desc}
                </p>
              </div>

              <div className="flex flex-col justify-center gap-[6px] mt-6">
                <p className="font-fredoka text-sm opacity-80">
                  {work.tech?.join(", ")}
                </p>

                {work.live && (
                  <div className="flex items-center gap-2 opacity-80">
                    <IconCirclesRelation
                      size={16}
                      className="dark:text-sky-400 text-sky-500"
                    />
                    <p className="font-fredoka text-sm dark:text-sky-400 text-sky-500 group-hover:underline">
                      {work.live}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
