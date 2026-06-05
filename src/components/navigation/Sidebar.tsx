"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Home,
  GraduationCap,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] =
    useState(true);

  const [active, setActive] =
    useState("Dashboard");

  const nav = [
    {
      label: "Dashboard",
      icon: Home
    },
    {
      label: "Courses",
      icon: GraduationCap
    },
    {
      label: "Analytics",
      icon: BarChart3
    },
    {
      label: "Settings",
      icon: Settings
    }
  ];

  return (
    <motion.aside
      animate={{
        width: collapsed ? 90 : 260
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      className="
        hidden
        md:flex
        flex-col
        border-r
        border-slate-800
        bg-slate-950
        p-4
      "
    >
      <div className="mb-8 flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.h2
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              className="text-xl font-bold"
            >
              Learn X
            </motion.h2>
          )}
        </AnimatePresence>

        <button
          onClick={() =>
            setCollapsed(!collapsed)
          }
          className="
            rounded-lg
            p-2
            transition-colors
            hover:bg-slate-900
          "
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      <nav className="space-y-2">
        {nav.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() =>
                setActive(item.label)
              }
              className="
                relative
                flex
                w-full
                items-center
                gap-3
                overflow-hidden
                rounded-xl
                px-3
                py-3
              "
            >
              {active === item.label && (
                <motion.div
                  layoutId="activeNav"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-violet-600
                  "
                />
              )}

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-3
                "
              >
                <Icon size={20} />

                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -10
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      exit={{
                        opacity: 0,
                        x: -10
                      }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </button>
          );
        })}
      </nav>
    </motion.aside>
  );
}