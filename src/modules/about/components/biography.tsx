import React from "react";
import Link from "next/link";
import HoverText from "@/components/layouts/components/hover-text";
import { IconCell } from "@tabler/icons-react";

export default function BiographySection() {
  return (
    <article className="flex flex-col items-center gap-4 mt-10 md:mt-12 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[20px] md:rounded-[32px] relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
      <section
        className="absolute top-[-28px] md:top-[-40px] left-[26px] md:left-[32px] lg:left-[54px] w-fit md:w-auto p-2 md:p-4 px-3 md:px-6 bg-primary dark:bg-[#121212] bg-[url('/bg-noise.png')] bg-blend-exclusion dark:bg-blend-normal"
        style={{ backgroundSize: "110px" }}
      >
        <div className="p-3 md:p-4 rounded-[8px] md:rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
          <p className="shadowed-text text-primary text-[16px] md:text-[20px] font-[600]">
            Biography
          </p>
        </div>
      </section>

      <section className="rounded-[20px] md:rounded-[32px] p-6 pt-8 md:p-10 md:pt-14 lg:p-16 lg:pt-20 relative overflow-hidden">
        <IconCell className="size-36 absolute -top-8 -right-8 -rotate-[30deg] text-secondary opacity-5" />

        <div className="flex flex-col gap-5 w-full">
          <div className="font-medium text-secondary/40 dark:text-white/60 text-sm md:text-base">
            Hello! {`I'm `}
            <span className="text-secondary/70 dark:text-white">
              Ardiansyah Halim Putra
            </span>
            , people usually call me{" "}
            <span className="text-secondary/70 dark:text-white">Ardi</span>. I
            was Born and rise in{" "}
            <span className="text-secondary/60 dark:text-white">Jakarta</span>.
          </div>

          <div className="font-medium text-secondary/40 dark:text-white/60 text-sm md:text-base">
            My journey in technology began shortly after I graduated from
            highschool. Driven by a passion for frontend development, I joined
            the first batch of{" "}
            <Link
              href="https://goto-impact.org/generasi-gigih/"
              target="_blank"
              className="text-secondary/60 dark:text-white underline"
            >
              Generasi Gigih
            </Link>{" "}
            , a bootcamp organized by{" "}
            <Link
              href="https://goto-impact.org"
              target="_blank"
              className="text-secondary/60 dark:text-white underline"
            >
              Yayasan Anak Bangsa Bisa aka YABB & Gojek
            </Link>
            .
          </div>

          <p className="font-medium text-secondary/40 dark:text-white/60 text-sm md:text-base">
            My carrer start after my completion in bootcamp, I started working
            in{" "}
            <Link
              href="https://wis-pay.com"
              target="_blank"
              className="text-secondary/60 dark:text-white underline"
            >
              Wispay
            </Link>{" "}
            for nine months, where I developed my skills in frontend development
            and contributed to various projects that helped shape my career in
            the tech industry.
          </p>
        </div>
      </section>
    </article>
  );
}
