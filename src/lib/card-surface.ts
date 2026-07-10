import { cn } from "@/lib/utils";

export function cardSurfaceClass(isOpen = false) {
  return cn(
    "glass overflow-hidden rounded-[var(--radius-card)] transition-shadow duration-300",
    isOpen
      ? "shadow-[0_20px_45px_-15px_rgba(0,0,0,0.55)]"
      : "hover:shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)]",
  );
}
