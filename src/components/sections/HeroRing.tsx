"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techItems } from "@/constants/tech";
import { cn } from "@/lib/utils";

const RADIUS = 190;

export default function HeroRing() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hovered = techItems.find((t) => t.id === hoveredId) ?? null;

  return (
    <div className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center md:h-[480px] md:w-[480px]">
      {/* Orbiting ring */}
      <div
        className={cn(
          "animate-orbit absolute inset-0",
          hoveredId && "[animation-play-state:paused]",
        )}
      >
        {techItems.map((item, i) => {
          const angle = (i / techItems.length) * 2 * Math.PI;
          const x = RADIUS * Math.cos(angle);
          const y = RADIUS * Math.sin(angle);

          return (
            <div
              key={item.id}
              className="absolute top-1/2 left-1/2"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <div
                className={cn(
                  "animate-orbit-counter",
                  hoveredId && "[animation-play-state:paused]",
                )}
              >
                <motion.button
                  type="button"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(item.id)}
                  onBlur={() => setHoveredId(null)}
                  whileHover={{ scale: 1.12 }}
                  className={cn(
                    "glass -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors",
                    hoveredId === item.id
                      ? "border-brand-400 text-text-primary"
                      : "text-text-secondary",
                  )}
                >
                  {item.label}
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center content */}
      <div className="glass relative z-10 flex h-52 w-52 flex-col items-center justify-center rounded-full p-6 text-center md:h-60 md:w-60">
        <AnimatePresence mode="wait">
          {hovered ? (
            <motion.p
              key={hovered.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="text-text-secondary text-sm leading-snug"
            >
              {hovered.blurb}
            </motion.p>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-lg font-bold">Zain Irfan</p>
              <p className="text-text-secondary mt-1 text-sm">
                Full-Stack Software Engineer
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
