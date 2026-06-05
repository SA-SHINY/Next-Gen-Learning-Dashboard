"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const bars = [20, 50, 40, 90, 75, 30, 80];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      whileHover={{
        scale: 1.03,
        y: -4
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-slate-900/70
        p-6
        backdrop-blur-xl
        shadow-xl
      "
    >
        <div
            className="
                absolute
                -bottom-10
                -right-10
                h-40
                w-40
                rounded-full
              bg-cyan-500/20
                blur-3xl
          "
        />
    <div className="relative z-10">
      <h3 className="mb-6 font-semibold">
        Weekly Activity
      </h3>

      <div className="flex h-32 items-end gap-2">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            initial={{
              height: 0
            }}
            animate={{
              height
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.6
            }}
            className="
              flex-1
              rounded-t-xl
              bg-violet-500
            "
          />
        ))}
      </div>
    </div>
    </motion.article>
  );
}