"use client";

import React, { ComponentProps } from "react";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function ImageKit(props: ComponentProps<any>) {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      lqip={{ active: true, quality: 10 }}
      loading="lazy"
      {...props}
    />
  );
}
