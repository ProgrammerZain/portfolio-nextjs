import { cn } from "@/lib/utils";

export default function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-text-secondary rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
}
