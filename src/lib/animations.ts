import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },

  show: {
    opacity: 1,
    y: 0
  }
};