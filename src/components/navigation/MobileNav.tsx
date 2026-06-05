"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Menu,
  X,
  Home,
  GraduationCap,
  BarChart3,
  Settings
} from "lucide-react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

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
    <>
      <header
        className="
          sticky
          top-0
          z-50
          flex
          items-center
          justify-between
          border-b
          border-slate-800
          bg-slate-950/90
          p-4
          backdrop-blur
          lg:hidden
        "
      >
        <h1 className="text-lg font-bold">
          LearnX
        </h1>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/60
                lg:hidden
              "
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25
              }}
              className="
                fixed
                left-0
                top-0
                z-50
                h-full
                w-72
                border-r
                border-slate-800
                bg-slate-950
                p-6
                lg:hidden
              "
            >
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  LearnX
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X />
                </button>
              </div>

              <nav className="space-y-2">
                {nav.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        text-left
                        transition
                        hover:bg-slate-900
                      "
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}