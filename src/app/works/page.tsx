import React from "react";
import WorksView from "@/modules/works/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
  description:
    "A showcase of projects and works, spanning web apps, products, and client collaborations.",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "Works • Ardi Hp",
    description:
      "A showcase of projects and works, spanning web apps, products, and client collaborations.",
    url: "/works",
  },
};

export default function WorksPage() {
  return <WorksView />;
}
