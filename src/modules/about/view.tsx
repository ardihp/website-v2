"use client";

import React from "react";
import ExperienceSection from "./components/experience";
import BiographySection from "./components/biography";
import ContactSection from "./components/contact";

export default function AboutView() {
  return (
    <article className="flex flex-col max-w-screen-lg mx-auto w-full h-full px-[48px]">
      <BiographySection />

      <ExperienceSection />

      <ContactSection />
    </article>
  );
}
