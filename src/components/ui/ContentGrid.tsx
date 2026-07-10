import { cn } from "@/lib/utils";

export const contentGridClasses = "mt-10 md:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2";
export const contentStackClasses = "mt-10 md:mt-12 flex flex-col gap-6";

export default function ContentGrid({
  children,
  className,
  columns = 2,
}: {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2;
}) {
  return (
    <div
      className={cn(columns === 2 ? contentGridClasses : contentStackClasses, className)}
    >
      {children}
    </div>
  );
}
