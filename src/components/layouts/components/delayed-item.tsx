"use client";

import React, { ReactNode, useRef } from "react";
import { useInView, motion } from "framer-motion";

interface DelayedItemProps {
  children: ReactNode;
  delay?: number;
  start?: string;
  end?: string;
}

export default function DelayedItem({
  children,
  delay,
  start = "bottom",
  end = "bottom",
}: DelayedItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const coordinatePosition = (value: string) => {
    let x = 0;
    let y = 30;

    switch (value) {
      case "top":
        y = -30;
      case "left":
        x = -30;
      case "right":
        x = 30;
      case "bottom":
        y = 30;

      default:
        x = 0;
        y = 30;
    }

    return { x, y };
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: coordinatePosition(start).x,
        y: coordinatePosition(start).y,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : coordinatePosition(start).x,
        y: isInView ? 0 : coordinatePosition(start).y,
      }}
      exit={{
        opacity: 0,
        x: coordinatePosition(end).x,
        y: coordinatePosition(end).y,
      }}
      transition={{ delay: delay, type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
