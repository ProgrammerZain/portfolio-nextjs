"use client";

import { useRef, useEffect } from "react";
import { techItems } from "@/constants/tech";
import { cn } from "@/lib/utils";

interface HeroRingProps {
  activeTech: string | null;
  setActiveTech: (id: string | null) => void;
}

export default function HeroRing({ activeTech, setActiveTech }: HeroRingProps) {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    startTimeRef.current = Date.now();

    const animate = () => {
      const now = Date.now();
      let elapsed;

      if (isPausedRef.current) {
        elapsed = pausedTimeRef.current;
      } else {
        elapsed = now - startTimeRef.current;
        pausedTimeRef.current = elapsed;
      }

      const progress = (elapsed / 1000 / 90) % 1;

      techItems.forEach((_, i) => {
        const item = itemsRef.current[i];
        if (!item) return;

        const baseAngle = (i / techItems.length) * 360;
        const totalAngle = (baseAngle + progress * 360) % 360;
        const normalizedAngle = Math.abs(((totalAngle + 180) % 360) - 180);

        const opacity = 0.3 + 0.6 * (1 - normalizedAngle / 180);
        const scale = 0.85 + 0.15 * (1 - normalizedAngle / 180);
        const zIndex = Math.round((1 - normalizedAngle / 180) * 20);

        item.style.transform = `rotateY(${baseAngle + progress * 360}deg) translateZ(280px) rotateY(-${baseAngle + progress * 360}deg) scale(${scale})`;
        item.style.opacity = String(opacity);
        item.style.zIndex = String(zIndex);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseEnter = (id: string) => {
    isPausedRef.current = true;
    setActiveTech(id);
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
    setActiveTech(null);
  };

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        className="relative h-[600px] w-[600px] md:h-[720px] md:w-[720px]"
        style={{
          perspective: "1200px",
        }}
      >
        {techItems.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              itemsRef.current[i] = el;
            }}
            className="absolute top-1/2 left-1/2"
            style={{
              transformStyle: "preserve-3d",
              pointerEvents: "auto",
            }}
          >
            <button
              type="button"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleMouseEnter(item.id)}
              className={cn(
                "-translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-1.5 text-[11px] font-medium whitespace-nowrap transition-all duration-300",
                activeTech === item.id
                  ? "border-brand-400/70 text-text-primary bg-brand-500/10 shadow-lg"
                  : "text-text-secondary border-white/[0.08]",
              )}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
