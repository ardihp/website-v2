"use client";

import React, { ReactNode, useRef } from "react";
import { useInView, motion } from "framer-motion";

interface DelayedItemProps {
  children: ReactNode;
  delay?: number;
}

export default function DelayedItem({ children, delay }: DelayedItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 0, y: 20 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : 0,
        y: isInView ? 0 : 20,
      }}
      transition={{ delay: delay, type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
