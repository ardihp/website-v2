import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "Sorry, the page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return <div>NotFoundPage</div>;
}
