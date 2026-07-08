"use client";

import { useState } from "react";
import { techItems } from "@/constants/tech";
import { cn } from "@/lib/utils";

const RADIUS = 300;

export default function HeroRing() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="animate-orbit relative h-[600px] w-[600px] md:h-[720px] md:w-[720px]">
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
              <div className="animate-orbit-counter">
                <button
                  type="button"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={cn(
                    "pointer-events-auto -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-1.5 text-[11px] font-medium whitespace-nowrap transition-all duration-300",
                    hoveredId === item.id
                      ? "border-brand-400/50 text-text-primary opacity-90"
                      : "text-text-secondary border-white/[0.06] opacity-40",
                  )}
                >
                  {item.label}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
