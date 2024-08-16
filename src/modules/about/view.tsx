"use client";

import React from "react";
import ExperienceSection from "./components/experience";
import BiographySection from "./components/biography";

export default function AboutView() {
  return (
    <article className="flex flex-col max-w-screen-lg mx-auto w-full h-full px-[48px]">
      <BiographySection />

      <ExperienceSection />
    </article>
  );
}
