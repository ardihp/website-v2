import React from "react";
import Link from "next/link";
import HoverText from "@/components/layouts/components/hover-text";

export default function BiographySection() {
  return (
    <article className="flex flex-col items-center gap-4 mt-10 md:mt-12 border-2 border-dashed border-secondary/20 dark:border-zinc-700/60 rounded-[20px] md:rounded-[32px] p-6 pt-8 md:p-10 md:pt-14 lg:p-16 lg:pt-20 relative shadow-inner dark:shadow-none shadow-secondary/10 dark:shadow-zinc-700">
      <div
        className="absolute top-[-28px] md:top-[-40px] left-[26px] md:left-[32px] lg:left-[54px] w-fit md:w-auto p-2 md:p-4 px-3 md:px-6 bg-primary dark:bg-[#151515] bg-[url('/bg-noise.png')] bg-blend-exclusion dark:bg-blend-difference"
        style={{ backgroundSize: "110px" }}
      >
        <div className="p-3 md:p-4 rounded-[8px] md:rounded-[14px] w-fit h-fit shadow-inner shadow-secondary/10 dark:shadow-zinc-700 dark:bg-zinc-900/40 bg-secondary/[0.2]">
          <p className="shadowed-text text-primary text-[16px] md:text-[20px] font-[600]">
            Biography
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <div className="font-medium text-secondary/40 dark:text-white/60 text-sm md:text-base">
          My name is{" "}
          <span className="text-secondary/70 dark:text-white">
            Ardiansyah Halim Putra
          </span>
          , people call me{" "}
          <span className="text-secondary/70 dark:text-white">Ardi</span>. Born
          and rise in{" "}
          <Link
            href="https://www.google.com/search?q=jakarta"
            target="_blank"
            className="text-secondary/60 dark:text-white underline"
          >
            Jakarta, Indonesia
          </Link>
          , currently live at{" "}
          <Link
            href="https://www.google.com/search?q=cengkareng"
            target="_blank"
            className="text-secondary/60 dark:text-white underline"
          >
            Cengkareng, Jakarta Barat
          </Link>
          .
        </div>

        <div className="font-medium text-secondary/40 dark:text-white/60 text-sm md:text-base">
          My journey in technology began shortly after I graduated from{" "}
          <Link
            href="https://www.tzuchi.or.id"
            target="_blank"
            className="text-secondary/60 dark:text-white underline"
          >
            SMKS Cinta Kasih Tzu Chi
          </Link>{" "}
          , where I majored in Software Engineering. Driven by a passion for
          frontend development, I joined the first batch of{" "}
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
          . During the program, I focused on frontend development, particularly
          mastering the{" "}
          <HoverText
            text="React.js"
            title="React.js"
            image="/about/react.png"
            desc="The library for web and native user interfaces"
            link="https://react.dev/"
          />{" "}
          lifecycle. My hard work paid off, and I was able to progress to the
          advanced phase of the bootcamp, which included a three-month
          internship.
        </div>

        <p className="font-medium text-secondary/40 dark:text-white/60 text-sm md:text-base">
          After completing the bootcamp, I had the opportunity to continue
          working with the Product Manager from my internship at a tech company
          called{" "}
          <Link
            href="https://wis-pay.com"
            target="_blank"
            className="text-secondary/60 dark:text-white underline"
          >
            Wispay
          </Link>
          . I spent nine months there, during which I further developed my
          skills in frontend development and contributed to various projects
          that helped shape my career in the tech industry.
        </p>

        <p className="font-medium text-secondary/40 dark:text-white/60 text-sm md:text-base">
          Currently, I am a Frontend Developer at{" "}
          <Link
            href="https://hyppe.id"
            target="_blank"
            className="text-secondary/60 dark:text-white underline"
          >
            PT Hyppe Teknologi Indonesia
          </Link>
          . In my role, I’m responsible for developing and maintaining dashboard
          features for internal admins, solving bugs, creating landing pages,
          and working closely with the Backend team to implement RESTful API
          architectures.
        </p>
      </div>
    </article>
  );
}
