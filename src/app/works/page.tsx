import React from "react";
import WorksView from "@/modules/works/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works • Ardi Hp",
  description: "Page for showcase the project.",
};

export default function WorksPage() {
  return <WorksView />;
}
