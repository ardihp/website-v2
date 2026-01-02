"use client";

import React, { ComponentProps } from "react";
import { IKImageProps, Image } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function ImageKit(props: IKImageProps) {
  return <Image urlEndpoint={urlEndpoint} loading="lazy" {...props} />;
}
