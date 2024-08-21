"use client";

import React, { memo, ReactNode, useRef } from "react";
import { useInView, motion } from "framer-motion";

interface DelayedItemProps {
  children: ReactNode;
  delay?: number;
  start: string;
  end: string;
  classes?: string;
}

const DelayedItem = memo(function DelayedItem({
  children,
  delay,
  start,
  end,
  classes,
}: DelayedItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const coordinatePosition = (value: string) => {
    let x = 0;
    let y = 0;

    switch (value) {
      case "top":
        y = -8;
        break;
      case "left":
        x = -8;
        break;
      case "right":
        x = 8;
        break;
      case "bottom":
        y = 8;
        break;

      default:
        x = 0;
        y = 0;
        break;
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
      transition={{ delay: delay }}
      className={classes}
    >
      {children}
    </motion.div>
  );
});

export default DelayedItem;
