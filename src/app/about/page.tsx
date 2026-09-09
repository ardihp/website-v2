import React from "react";
import AboutView from "@/modules/about/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know me — background, skills, and the technologies I work with as a software engineer.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About • Ardi Hp",
    description:
      "Get to know me — background, skills, and the technologies I work with as a software engineer.",
    url: "/about",
  },
};

export default async function AboutPage() {
  return <AboutView />;
}
