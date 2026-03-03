import React from "react";
import { motion } from "framer-motion";
import { IconArrowNarrowUp } from "@tabler/icons-react";

export default function ArrowToTop({ showScroll }: { showScroll: boolean }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 60 }}
        animate={{
          opacity: showScroll ? 1 : 0,
          scale: showScroll ? 1 : 0,
          y: showScroll ? 0 : 60,
        }}
        transition={{ type: "spring" }}
        className="scroll-top hidden md:flex"
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IconArrowNarrowUp
          size={20}
          className="dark:text-white text-secondary"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 30 }}
        animate={{
          opacity: showScroll ? 1 : 0,
          scale: showScroll ? 1 : 0,
          y: showScroll ? 0 : 30,
        }}
        transition={{ type: "spring" }}
        className="scroll-top flex md:hidden"
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IconArrowNarrowUp
          size={20}
          className="dark:text-white text-secondary"
        />
      </motion.div>
    </>
  );
}
