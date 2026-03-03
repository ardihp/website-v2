"use client";

import dynamic from "next/dynamic";

const ExperienceSection = dynamic(() => import("./components/experience"));
const BiographySection = dynamic(() => import("./components/biography"));
const ContactSection = dynamic(() => import("./components/contact"));
const DelayedItem = dynamic(
  () => import("@/components/layouts/components/delayed-item"),
);

export default function AboutView() {
  return (
    <DelayedItem start="bottom" end="bottom">
      <article className="flex flex-col max-w-screen-lg mx-auto w-full h-full gap-14 md:gap-16 lg:gap-24 px-4 md:px-8 lg:px-[48px]">
        <BiographySection />

        <ExperienceSection />

        <ContactSection />
      </article>
    </DelayedItem>
  );
}
