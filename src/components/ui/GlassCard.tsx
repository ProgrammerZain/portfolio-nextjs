import { cn } from "@/lib/utils";

export default function GlassCard({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("glass rounded-[var(--radius-card)] p-6", className)} {...props}>
      {children}
    </div>
  );
}
