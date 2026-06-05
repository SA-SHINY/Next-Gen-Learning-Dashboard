"use client";

import { motion } from "framer-motion";

interface Props {
  value: number;
}

export default function ProgressBar({
  value
}: Props) {
  return (
    <div className="space-y-2">
      {/* Percentage */}

      <div className="flex justify-between text-xs text-slate-400">
        <span>Progress</span>
        <span>{value}%</span>
      </div>

      {/* Progress Track */}

      <div
        className="
          h-3
          overflow-hidden
          rounded-full
          bg-slate-800
        "
      >
        {/* Animated Fill */}

        <motion.div
          initial={{
            width: 0
          }}
          animate={{
            width: `${value}%`
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut"
          }}
          className="
            h-full
            rounded-full
            bg-linear-to-r
            from-violet-500
            via-fuchsia-500
            to-cyan-400
            shadow-[0_0_20px_rgba(139,92,246,0.6)]
          "
        />
      </div>
    </div>
  );
}