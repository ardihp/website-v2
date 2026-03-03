"use client";

import React, { useState } from "react";
import { buildSrc, IKImageProps, Image } from "@imagekit/next";
import { cn } from "@/lib/utils";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function ImageKit(props: IKImageProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className="w-full h-full">
      <Image
        urlEndpoint={urlEndpoint}
        loading="lazy"
        style={
          isLoaded
            ? {}
            : {
                backgroundImage: `url(${buildSrc({
                  urlEndpoint: urlEndpoint!,
                  src: props.src,
                  transformation: [
                    // {}, // Any other transformation you want to apply
                    {
                      quality: 10,
                      blur: 90,
                    },
                  ],
                })})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backdropFilter: "blur",
              }
        }
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
      <div
        className={cn(
          `${isLoaded ? "backdrop-blur-0" : "backdrop-blur-lg"} duration-700 w-full h-full bg-white/10`,
        )}
      />
      <div
        className={cn(
          `w-full h-full absolute top-0 duration-700`,
          isLoaded ? "bg-black/30" : "bg-transparent",
        )}
      />
    </div>
  );
}
