"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  FileCode,
  Layers
} from "lucide-react";

import ProgressBar from "../ui/ProgressBar";
import { Course } from "@/types/course";
import { itemVariants } from "@/lib/animations";

const icons = {
  Code,
  Rocket,
  FileCode,
  Layers
};

interface Props {
  course: Course;
}

export default function CourseCard({
  course
}: Props) {
  const Icon =
    icons[
      course.icon_name as keyof typeof icons
    ] || Code;

  return (
    <motion.article
      variants={itemVariants}
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
        border-slate-800
        bg-slate-900/70
        p-6
        backdrop-blur-xl
        shadow-xl
      "
    >
      {/* Gradient Mesh Background */}

      <div
        className="
          absolute
          -top-10
          -right-10
          h-32
          w-32
          rounded-full
          bg-violet-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-10
          -left-10
          h-32
          w-32
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Content */}

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-slate-800/80
            "
          >
            <Icon size={20} />
          </div>

          <h3 className="font-semibold">
            {course.title}
          </h3>
        </div>

        <div className="space-y-3">
          <ProgressBar
            value={course.progress}
          />

          <p className="text-sm text-slate-400">
            {course.progress}% Complete
          </p>
        </div>
      </div>
    </motion.article>
  );
}