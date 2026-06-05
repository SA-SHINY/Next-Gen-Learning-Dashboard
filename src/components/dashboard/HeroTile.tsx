"use client";

import { Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroTile() {
  const userName = "Student";

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
        scale: 1.02,
        y: -4
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="
        md:col-span-2
        relative
        overflow-hidden
        rounded-3xl
        border
        border-violet-500/20
        bg-slate-900/70
        p-8
        backdrop-blur-xl
      "
    >
      <div
        className="
          absolute
          -top-20
          -right-20
          h-60
          w-60
          rounded-full
          bg-violet-500/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          h-40
          w-40
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="text-slate-400">
            Welcome back
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {userName} 
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Flame className="text-orange-500" />

          <span className="font-medium">
            17 Day Learning Streaks
          </span>
        </div>
      </div>
    </motion.article>
  );
}