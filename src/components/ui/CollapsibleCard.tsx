"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { cardSurfaceClass } from "@/lib/card-surface";

interface CollapsibleCardProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  subtitle?: string;
  meta?: string;
  hint?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function CollapsibleCard({
  isOpen,
  onToggle,
  title,
  subtitle,
  meta,
  hint,
  children,
  className,
}: CollapsibleCardProps) {
  return (
    <div className={cn(cardSurfaceClass(isOpen), className)}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="min-w-0 flex-1">
          {meta && <p className="text-brand-400 text-sm font-semibold">{meta}</p>}
          <h3 className={cn("text-xl font-bold", meta && "mt-1")}>{title}</h3>
          {subtitle && <p className="text-text-secondary mt-1 text-sm">{subtitle}</p>}
          {!isOpen && hint && (
            <p className="text-text-secondary/60 mt-3 text-xs">{hint}</p>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-text-secondary mt-1 shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      {children && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pt-0 pb-6">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
