"use client";

import React from "react";
import HeaderPage from "@/components/layouts/components/header-page";

export default function PostsView() {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto w-full pt-[12px]">
      <HeaderPage
        title="My Posts"
        description="I post something random in here."
      />
    </div>
  );
}
