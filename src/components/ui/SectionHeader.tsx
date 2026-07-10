import FadeIn from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <FadeIn className={cn("max-w-2xl", className)}>
      <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="text-text-secondary mt-4 max-w-prose text-base leading-relaxed md:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
