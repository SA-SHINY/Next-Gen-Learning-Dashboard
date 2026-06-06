"use client";

import { motion } from "framer-motion";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";
import { Course } from "@/types/course";
import {containerVariants} from "@/lib/animations";

interface Props {
  courses: Course[];
}

export default function BentoGrid({
  courses
}: Props) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="
        grid
        auto-rows-[220px]
        gap-4
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
      "
    >
      <HeroTile />

      <ActivityTile />

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </motion.section>
  );
}