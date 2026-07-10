"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { techItems } from "@/constants/tech";
import { cn } from "@/lib/utils";

const RING_HEIGHT = 130;
const DRAG_THRESHOLD = 8;
const DRAG_SENSITIVITY = 0.007;
const AUTO_ROTATION_MS = 90_000;

export default function HeroRing() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<number>(0);
  const lastFrameRef = useRef<number>(0);
  const orbitAngleRef = useRef(0);
  const rxRef = useRef(260);
  const ryRef = useRef(42);
  const isPausedRef = useRef(false);
  const isPointerDownRef = useRef(false);
  const isDraggingRef = useRef(false);
  const didDragRef = useRef(false);
  const activeTechRef = useRef<string | null>(null);
  const pinnedTechRef = useRef<string | null>(null);
  const pointerRef = useRef({ startX: 0, startAngle: 0 });
  const finePointerRef = useRef(true);

  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [pinnedTech, setPinnedTech] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const activeTechData = techItems.find((t) => t.id === activeTech);

  useEffect(() => {
    activeTechRef.current = activeTech;
  }, [activeTech]);

  useEffect(() => {
    pinnedTechRef.current = pinnedTech;
    isPausedRef.current = pinnedTech !== null;
  }, [pinnedTech]);

  useEffect(() => {
    finePointerRef.current = window.matchMedia("(pointer: fine)").matches;
  }, []);

  const updateEllipse = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    rxRef.current = Math.min(w * 0.44, 300);
    ryRef.current = Math.min(48, Math.max(32, w * 0.07));
  }, []);

  useEffect(() => {
    updateEllipse();
    window.addEventListener("resize", updateEllipse);
    return () => window.removeEventListener("resize", updateEllipse);
  }, [updateEllipse]);

  useEffect(() => {
    lastFrameRef.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const dt = now - lastFrameRef.current;
      lastFrameRef.current = now;

      if (!isPausedRef.current && !isDraggingRef.current) {
        orbitAngleRef.current += (dt / AUTO_ROTATION_MS) * Math.PI * 2;
      }

      const rx = rxRef.current;
      const ry = ryRef.current;
      const base = orbitAngleRef.current;
      const active = activeTechRef.current;

      techItems.forEach((item, i) => {
        const el = itemsRef.current[i];
        if (!el) return;

        const angle = base + (i / techItems.length) * Math.PI * 2;
        const x = rx * Math.cos(angle);
        const y = ry * Math.sin(angle);
        const depth = (Math.sin(angle) + 1) / 2;
        const scale = 0.72 + 0.28 * depth;
        const opacity = 0.32 + 0.68 * depth;
        const zIndex = (active === item.id ? 100 : 0) + Math.round(depth * 10);

        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`;
        el.style.opacity = String(opacity);
        el.style.zIndex = String(zIndex);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const scrollIntoViewIfNeeded = useCallback(() => {
    if (window.matchMedia("(pointer: fine)").matches) return;

    requestAnimationFrame(() => {
      wrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, []);

  const closePanel = useCallback(() => {
    pinnedTechRef.current = null;
    isPausedRef.current = false;
    setPinnedTech(null);
    setActiveTech(null);
  }, []);

  useEffect(() => {
    if (!pinnedTech) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (wrapperRef.current?.contains(target)) return;
      closePanel();
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [pinnedTech, closePanel]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;

    isPointerDownRef.current = true;
    didDragRef.current = false;
    isDraggingRef.current = false;
    pointerRef.current = { startX: e.clientX, startAngle: orbitAngleRef.current };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;

    const dx = e.clientX - pointerRef.current.startX;

    if (!isDraggingRef.current && Math.abs(dx) > DRAG_THRESHOLD) {
      isDraggingRef.current = true;
      didDragRef.current = true;
      setIsDragging(true);
      isPausedRef.current = true;
      containerRef.current?.setPointerCapture(e.pointerId);
    }

    if (isDraggingRef.current) {
      e.preventDefault();
      orbitAngleRef.current = pointerRef.current.startAngle + dx * DRAG_SENSITIVITY;
    }
  };

  const endPointer = (e: React.PointerEvent) => {
    isPointerDownRef.current = false;

    if (isDraggingRef.current) {
      containerRef.current?.releasePointerCapture(e.pointerId);
      isDraggingRef.current = false;
      setIsDragging(false);

      if (!pinnedTechRef.current) {
        isPausedRef.current = false;
      }
    }
  };

  const handleMouseEnter = (id: string) => {
    if (!finePointerRef.current || isDraggingRef.current || pinnedTechRef.current) return;
    setActiveTech(id);
  };

  const handleMouseLeave = () => {
    if (!finePointerRef.current || pinnedTechRef.current || isDraggingRef.current) return;
    setActiveTech(null);
  };

  const handleClick = (id: string) => {
    if (didDragRef.current) {
      didDragRef.current = false;
      return;
    }

    if (pinnedTech === id) {
      closePanel();
      return;
    }

    pinnedTechRef.current = id;
    isPausedRef.current = true;
    setPinnedTech(id);
    setActiveTech(id);
    scrollIntoViewIfNeeded();
  };

  return (
    <div ref={wrapperRef} className="w-full max-w-[680px] scroll-mt-24">
      <div
        ref={containerRef}
        className={cn(
          "relative mx-auto w-full touch-none select-none",
          isDragging ? "cursor-grabbing" : "cursor-default",
        )}
        style={{ height: RING_HEIGHT }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.07]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <ellipse
              cx="50"
              cy="50"
              rx="46"
              ry="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
            />
          </svg>
        </div>

        <div className="absolute inset-0">
          {techItems.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="absolute top-1/2 left-1/2 will-change-transform"
            >
              <button
                type="button"
                data-tech-ring-item
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(item.id)}
                aria-pressed={activeTech === item.id}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-[11px] font-medium whitespace-nowrap sm:text-xs",
                  "transition-[color,background-color,border-color,box-shadow] duration-200",
                  activeTech === item.id
                    ? "border-brand-400/80 text-text-primary bg-brand-500/15 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                    : "text-text-secondary border-white/8 hover:border-white/20",
                )}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {activeTech && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-brand-400/60 pointer-events-none absolute bottom-0 left-1/2 h-5 w-px origin-top -translate-x-1/2"
            />
          )}
        </AnimatePresence>
      </div>

      <p className="text-text-secondary/35 mt-1 text-center text-[10px] sm:text-xs">
        Click &amp; drag to spin · tap to explore
      </p>

      <div
        className={cn(
          "glass mx-auto mt-2 rounded-xl border px-4 py-3 transition-colors duration-300",
          activeTechData ? "border-brand-400/25" : "border-white/10",
        )}
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          {activeTechData ? (
            <motion.div
              key={activeTechData.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="flex items-start gap-3"
            >
              <div className="bg-brand-400 mt-0.5 w-0.5 shrink-0 self-stretch rounded-full" />
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <h3 className="text-brand-400 text-sm font-semibold sm:text-base">
                    {activeTechData.label}
                  </h3>
                  {pinnedTech && (
                    <button
                      type="button"
                      onClick={closePanel}
                      className="text-text-secondary hover:text-text-primary shrink-0 rounded p-0.5 text-xs transition-colors"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  )}
                </div>
                <p className="text-text-secondary text-xs leading-relaxed sm:text-sm">
                  {activeTechData.blurb}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-text-secondary/45 text-center text-xs sm:text-sm"
            >
              Tap a technology to explore
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
